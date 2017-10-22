export class SearchResult {
    public selected: boolean = false;
    constructor( public title: string, 
                 public extract: string,
                 public href: string = '#' ) {

    }
}