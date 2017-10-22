import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';

import { SearchResult } from '../../models/SearchResult';

@Injectable()
export class WikiService {

    private _searchTerm: BehaviorSubject<string> = new BehaviorSubject<string>(null);
    public searchTerm$: Observable<string> = this._searchTerm.asObservable();

    private _searchResults: BehaviorSubject<SearchResult[]> = new BehaviorSubject<SearchResult[]>(null);
    public searchResults$: Observable<SearchResult[]> = this._searchResults.asObservable();

    private _loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public loading$: Observable<boolean> = this._loading.asObservable();

    constructor( private _http: HttpClient ) {

    }

    public setSearchTerm( newSearchTerm: string ): void {
        this._searchTerm.next(newSearchTerm);
    }

    public search( searchTerm: string ): void {
        this._searchResults.next([]);
        this._loading.next(true);
        searchTerm = searchTerm.replace(' ', '+');
        let params = this._getSearchParams(searchTerm);
        this._makeRequest(params);
    }

    public getRandomArticle(): void {
        this._searchResults.next([]);
        this._loading.next(true);
        this.setSearchTerm(null);
        let params = this._getRandomParams();
        this._makeRequest(params);
    }    

    private _getBaseUrl(): string {
        return 'https://en.wikipedia.org/w/api.php';
    }

    private _getRequestBody(): any {
        return { data: {} };
    }

    private _getHeaders(): HttpHeaders {
        let headers: HttpHeaders = new HttpHeaders()
            .set('Api-User-Agent', 'Minipedia, a freeCodeCamp project/0.1 (URL TBD)');
        return headers;
    }

    private _getBaseParams(): HttpParams {
        let params: HttpParams = new HttpParams()
            .set('origin', '*')
            .set('format', 'json')
            .set('action', 'query')
            .set('redirects', '1')
            .set('prop', 'extracts|info')
            .set('exsentences', '2')
            .set('exlimit', 'max')
            .set('exintro', '1')
            .set('explaintext', '1')
            .set('exsectionformat', 'wiki')
            .set('inprop', 'url');
        return params;
    }

    private _getSearchParams(searchTerm: string) : HttpParams {
        let params: HttpParams = this._getBaseParams();
        params = params.set('generator', 'search')
                       .set('gsrsearch', searchTerm);
        return params;
    }

    private _getRandomParams() : HttpParams {
        let params: HttpParams = this._getBaseParams();
        params = params.set('generator', 'random')
                       .set('grnnamespace', '0')
                       .set('grnlimit', '1');
        return params;
    }

    private _makeRequest(params: HttpParams): void {
        this._http.post(
            this._getBaseUrl(), 
            this._getRequestBody(), 
            { 
                headers: this._getHeaders(), 
                params 
            }
        )
        .first()
        .subscribe( response => {
            // console.log('response from random query: ', response);
            this._searchResults.next(this._mapResponse(response));
            this._loading.next(false);
        }, error => {
            this._loading.next(false);
            // console.error('error: ', error);
        });
    }

    private _mapResponse(response: any): SearchResult[] {
        let mappedResults: SearchResult[] = [];
        // actual results are found in response.query.pages
        if (response['query'] && response['query'].pages) {
            let pages = response['query'].pages;
            for (let id in pages) {
                let page = pages[id];
                // remove empty parentheses that result from plain text extracts' being purged of IPA spellings/pronunciation links
                let extract = page.extract.replace('() ', '');
                mappedResults.push(new SearchResult(page.title, extract, page.canonicalurl));
            }
        } 
        return mappedResults;
    }

}
