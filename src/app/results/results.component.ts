import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/filter';

import { WikiService } from '../services/wiki/wiki.service';
import { SearchResult } from '../models/SearchResult';

@Component({
    selector: 'results-list',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

    public searchTerm: string = '';    
    public results: SearchResult[] = [];
    public loading: boolean = false;

    private _unsubscribe: Subject<void> = new Subject<void>();

    constructor( private _wikiService: WikiService ) { }

    public ngOnInit(): void {
        this._watchForSearchTermUpdates();
        this._watchForResultsUpdates();
        this._watchForLoadingStatusUpdates();
        // this._generateFakeData();
    }

    // private _generateFakeData(): void {
    //     this.searchTerm = 'cats';
    //     this.results = [
    //         new SearchResult('Freddy', `Friedrich "Freddy" Schleiermacher is an awesome puppycat who likes chasing his humans around their circle house, burrowing under blankets, and sleeping on laptops—both of the human and computer varieties.`),
    //         new SearchResult('Lions', `Lions are big cats with flamboyant hairstyles. Some lions just can't wait to be king.`),
    //         new SearchResult('Tigers', 'Tigers are big cats who always wear stripes. Some tigers really, really like certain breakfast cereals.'),
    //         new SearchResult('Bears', 'Bears are not cats. How did this even get here?'),
    //         new SearchResult('Bearcats', `Bearcats are the mascot of the University of Cincinnati. We're not really sure if they're a real animal, but they sound pretty magical.`)
    //     ];
    // }

    private _watchForSearchTermUpdates(): void {
        this._wikiService.searchTerm$.takeUntil(this._unsubscribe).subscribe( newSearchTerm => {
            this.searchTerm = newSearchTerm;
        });
    }

    private _watchForResultsUpdates(): void {
        this._wikiService.searchResults$
            .takeUntil(this._unsubscribe)
            .filter( results => {
                return results !== null;
            })
            .subscribe( newResults => {
                // console.log('new results! ', newResults);
                this.results = newResults;
            }
        );
    }  
    
    private _watchForLoadingStatusUpdates(): void {
        this._wikiService.loading$
            .takeUntil(this._unsubscribe)
            .subscribe( loading => {
                this.loading = loading;
            }
        );
    }

    public ngOnDestroy(): void {
        this._unsubscribe.next();
        this._unsubscribe.complete();
    }

}