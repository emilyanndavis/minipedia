import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeSelectorComponent } from './theme-selector/theme-selector.component';
import { ResultsComponent } from './results/results.component';
import { SearchComponent } from './search/search.component';
import { WikiService } from './services/wiki/wiki.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        ThemeSelectorComponent,
        ResultsComponent,
        SearchComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    providers: [
        WikiService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
