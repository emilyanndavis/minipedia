import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { WikiService } from '../services/wiki/wiki.service';

@Component({
    selector: 'search-form',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    public searchForm: FormGroup;
    @ViewChild('searchInput') searchInput: ElementRef;
    @ViewChild('searchButton') searchButton: ElementRef;
    @ViewChild('randomButton') randomButton: ElementRef;
    
    constructor( private _formBuilder: FormBuilder,
                 private _wikiService: WikiService ) { 

    }

    public ngOnInit(): void {
        this._buildForm();
    }
    
    private _buildForm(): void {
        this.searchForm = this._formBuilder.group({
            searchTerm: ['']
        });
    }
    
    public ngAfterViewInit(): void {
        this._autoFocus();
    }

    private _autoFocus(): void {
        this.searchInput.nativeElement.focus();
    }

    public getRandomArticle(): void {
        this.randomButton.nativeElement.blur();
        this._wikiService.getRandomArticle();
    }

    public search(): void {
        // console.log(this.searchForm.controls.searchTerm.value);
        let searchTerm = this.searchForm.controls.searchTerm.value.trim();
        this.searchForm.controls.searchTerm.setValue('');
        if (!searchTerm) {
            this._autoFocus();
            return;
        }
        this._wikiService.setSearchTerm(searchTerm);
        this.searchButton.nativeElement.blur();
        this._wikiService.search(searchTerm);
    }

}
