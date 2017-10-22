import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    public spacerIcon: 'fa-leaf' | 'fa-sun-o' | 'fa-snowflake-o' = 'fa-leaf';

    constructor() { }

    ngOnInit() {
        let currentMonth = new Date().getMonth();
        if (currentMonth <= 2 || currentMonth === 11) {
            this.spacerIcon = 'fa-snowflake-o';
        } else if (currentMonth >= 6 && currentMonth <= 8) {
            this.spacerIcon = 'fa-sun-o';
        } else {
            this.spacerIcon = 'fa-leaf';
        }
    }

}
