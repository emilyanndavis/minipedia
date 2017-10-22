webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-wrapper {{ theme }}\">\n    <app-header></app-header>\n    <section class=\"main-content\">\n        <search-form></search-form>\n        <results-list></results-list>\n    </section>\n    <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "search-form,\nresults-list {\n  display: block;\n  max-width: 800px;\n  margin: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.theme = 'light';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__theme_selector_theme_selector_component__ = __webpack_require__("../../../../../src/app/theme-selector/theme-selector.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__results_results_component__ = __webpack_require__("../../../../../src/app/results/results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_wiki_wiki_service__ = __webpack_require__("../../../../../src/app/services/wiki/wiki.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__theme_selector_theme_selector_component__["a" /* ThemeSelectorComponent */],
            __WEBPACK_IMPORTED_MODULE_7__results_results_component__["a" /* ResultsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_10__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__["a" /* FooterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__services_wiki_wiki_service__["a" /* WikiService */]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"decorative-bumper top\"></div>\n<p class=\"footer-content desktop\">\n    &copy; 2017 \n    <a href=\"https://emilyanndavis.github.io\">Emily Davis</a>\n    <i class=\"spacer-icon fa\" [ngClass]=\"spacerIcon\"></i>\n    Built to meet the requirements of the FreeCodeCamp challenge\n    <a href=\"https://www.freecodecamp.org/challenges/build-a-wikipedia-viewer\" target=\"_blank\">\"Build a Wikipedia Viewer\"</a>\n</p>\n<p class=\"footer-content mobile\">\n    &copy; 2017 <a href=\"https://emilyanndavis.github.io\">Emily Davis</a>\n    <span class=\"mobile-extras\">\n        <i class=\"spacer-icon fa\" [ngClass]=\"spacerIcon\"></i>\n        Made with \n    </span> \n    <i class=\"fa fa-heart\"></i> + <i \n    class=\"fa fa-wikipedia-w\"></i> + <a \n    class=\"free-code-camp-link\"\n        href=\"https://www.freecodecamp.org/challenges/build-a-wikipedia-viewer\" \n        target=\"_blank\"\n    ><i class=\"fa fa-free-code-camp\"></i></a> \n</p>\n<div class=\"decorative-bumper bottom\"></div>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  width: 100%; }\n\n.decorative-bumper {\n  height: 8px; }\n\n.footer-content {\n  margin: 0;\n  padding: 8px 3vw;\n  font-size: 16px;\n  line-height: 16px;\n  text-align: center;\n  letter-spacing: 0.01em;\n  text-indent: 0.01em; }\n\na {\n  color: inherit;\n  text-decoration: none;\n  border-bottom-width: 1px;\n  border-bottom-style: dotted;\n  border-bottom-color: inherit;\n  transition: .1s ease-in-out all; }\n  a:hover, a:focus {\n    border-bottom-style: solid; }\n  a.free-code-camp-link {\n    border: none; }\n    a.free-code-camp-link:hover i.fa,\n    a.free-code-camp-link:focus i.fa {\n      -webkit-transform: scale(1.4);\n              transform: scale(1.4);\n      font-weight: bold; }\n\ni.fa {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n  margin: 0 0.3em; }\n  i.fa.fa-free-code-camp {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2); }\n  i.fa.spacer-icon {\n    margin: 0 0.5em; }\n\n@media (min-width: 901px) {\n  .footer-content.mobile {\n    display: none; } }\n\n@media (max-width: 900px) {\n  .footer-content.desktop {\n    display: none; } }\n\n@media (max-width: 420px) {\n  .mobile-extras {\n    display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.spacerIcon = 'fa-leaf';
    }
    FooterComponent.prototype.ngOnInit = function () {
        var currentMonth = new Date().getMonth();
        if (currentMonth <= 2 || currentMonth === 11) {
            this.spacerIcon = 'fa-snowflake-o';
        }
        else if (currentMonth >= 6 && currentMonth <= 8) {
            this.spacerIcon = 'fa-sun-o';
        }
        else {
            this.spacerIcon = 'fa-leaf';
        }
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"decorative-bumper top\"></div>\n<h1 class=\"title\">{{ title }}</h1>\n<div class=\"decorative-bumper bottom\"></div>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 1; }\n\n.title {\n  text-transform: uppercase;\n  text-align: center;\n  position: fixed;\n  width: 100%;\n  letter-spacing: 0.3em;\n  text-indent: 0.3em;\n  margin: 0.5em auto; }\n\n.decorative-bumper {\n  height: 12px;\n  width: 100%; }\n\n.title, .decorative-bumper {\n  position: relative; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
        this.title = 'Minipedia';
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/SearchResult.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResult; });
var SearchResult = (function () {
    function SearchResult(title, extract, href) {
        if (href === void 0) { href = '#'; }
        this.title = title;
        this.extract = extract;
        this.href = href;
        this.selected = false;
    }
    return SearchResult;
}());

//# sourceMappingURL=SearchResult.js.map

/***/ }),

/***/ "../../../../../src/app/results/results.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 *ngIf=\"searchTerm && !loading\">\n    <span *ngIf=\"!results || results.length === 0\">no </span>results for \"{{ searchTerm }}\"\n</h1>\n\n<div class=\"loading-icon\" *ngIf=\"loading\">\n    <i class=\"fa fa-wikipedia-w fa-fw\"></i>\n    <span class=\"sr-only\">Loading data from Wikipedia...</span>\n</div>\n\n<ul [class.extra-margin]=\"!searchTerm\" *ngIf=\"results && results.length > 0\">\n    <li *ngFor=\"let result of results\" [class.selected]=\"result.selected\">\n        <a (focus)=\"result.selected = true\" (blur)=\"result.selected = false\" href=\"{{ result.href }}\" target=\"_blank\">\n            <h2>{{ result.title }}</h2>\n            <p>\n                {{ result.extract }}\n                <span class=\"arrow\">&raquo;</span>\n            </p>\n        </a>\n    </li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/results/results.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  text-align: center;\n  margin-top: 36px; }\n\nul {\n  list-style: none;\n  padding-left: 0; }\n  ul.extra-margin {\n    margin-top: 48px; }\n\nli {\n  box-sizing: content-box;\n  margin: 16px auto;\n  border-radius: 5px;\n  border-width: 3px;\n  border-style: solid;\n  border-color: transparent;\n  transition: .1s ease-in-out all; }\n  li a {\n    display: block;\n    padding: 10px 40px 10px 20px;\n    text-decoration: none; }\n    li a:focus {\n      outline: none; }\n  li h2, li p {\n    color: initial; }\n  li h2 {\n    margin-top: 0; }\n  li p {\n    margin-bottom: 0;\n    position: relative; }\n  li .arrow {\n    position: absolute;\n    bottom: -6px;\n    right: -26px;\n    font-size: 28px; }\n\n.loading-icon i.fa {\n  display: block;\n  margin: 40px auto;\n  font-size: 64px;\n  -webkit-animation-name: pulse;\n          animation-name: pulse;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear; }\n\n@-webkit-keyframes pulse {\n  from {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  to {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2); } }\n\n@keyframes pulse {\n  from {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  to {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/results/results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_wiki_wiki_service__ = __webpack_require__("../../../../../src/app/services/wiki/wiki.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResultsComponent = (function () {
    function ResultsComponent(_wikiService) {
        this._wikiService = _wikiService;
        this.searchTerm = '';
        this.results = [];
        this.loading = false;
        this._unsubscribe = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    ResultsComponent.prototype.ngOnInit = function () {
        this._watchForSearchTermUpdates();
        this._watchForResultsUpdates();
        this._watchForLoadingStatusUpdates();
        // this._generateFakeData();
    };
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
    ResultsComponent.prototype._watchForSearchTermUpdates = function () {
        var _this = this;
        this._wikiService.searchTerm$.takeUntil(this._unsubscribe).subscribe(function (newSearchTerm) {
            _this.searchTerm = newSearchTerm;
        });
    };
    ResultsComponent.prototype._watchForResultsUpdates = function () {
        var _this = this;
        this._wikiService.searchResults$
            .takeUntil(this._unsubscribe)
            .filter(function (results) {
            return results !== null;
        })
            .subscribe(function (newResults) {
            // console.log('new results! ', newResults);
            _this.results = newResults;
        });
    };
    ResultsComponent.prototype._watchForLoadingStatusUpdates = function () {
        var _this = this;
        this._wikiService.loading$
            .takeUntil(this._unsubscribe)
            .subscribe(function (loading) {
            _this.loading = loading;
        });
    };
    ResultsComponent.prototype.ngOnDestroy = function () {
        this._unsubscribe.next();
        this._unsubscribe.complete();
    };
    return ResultsComponent;
}());
ResultsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'results-list',
        template: __webpack_require__("../../../../../src/app/results/results.component.html"),
        styles: [__webpack_require__("../../../../../src/app/results/results.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_wiki_wiki_service__["a" /* WikiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_wiki_wiki_service__["a" /* WikiService */]) === "function" && _a || Object])
], ResultsComponent);

var _a;
//# sourceMappingURL=results.component.js.map

/***/ }),

/***/ "../../../../../src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<button #randomButton type=\"button\" class=\"random-btn\" (click)=\"getRandomArticle()\">\n    <span>\n        <span class=\"question-mark\" aria-hidden=\"true\">?</span>\n        <span class=\"question-mark\" aria-hidden=\"true\">?</span>\n        <span class=\"question-mark\" aria-hidden=\"true\">?</span>\n    </span>\n    <span class=\"button-text\">Random Article</span>\n    <span>\n        <span class=\"question-mark\" aria-hidden=\"true\">?</span>\n        <span class=\"question-mark\" aria-hidden=\"true\">?</span>\n        <span class=\"question-mark\" aria-hidden=\"true\">?</span>\n    </span>\n</button>\n\n<form [formGroup]=\"searchForm\" (ngSubmit)=\"search()\">\n    <input #searchInput type=\"text\" formControlName=\"searchTerm\" placeholder=\"Search for something...\" (keyup.Enter)=\"search()\" />\n    <button #searchButton class=\"search-btn\" aria-label=\"search\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/search/search.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form, .random-btn {\n  display: block;\n  margin: auto; }\n\nform {\n  margin-top: 40px;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\nbutton, input {\n  font-size: 18px; }\n\ninput {\n  width: 80vw; }\n\nbutton {\n  width: auto;\n  padding: 8px 12px;\n  border-width: 2px;\n  border-style: solid;\n  border-radius: 5px;\n  background: transparent;\n  cursor: pointer; }\n  button:focus {\n    outline: none; }\n  button.random-btn {\n    width: 100%; }\n  button.search-btn {\n    padding: 8px 6px;\n    border-color: transparent;\n    margin-left: 6px;\n    margin-right: -6px; }\n\nbutton.random-btn span {\n  display: inline-block; }\n  button.random-btn span.button-text {\n    margin: auto 8px; }\n  button.random-btn span.question-mark {\n    font-size: 16px;\n    margin: -2px; }\n    button.random-btn span.question-mark:nth-of-type(1), button.random-btn span.question-mark:nth-of-type(6) {\n      -webkit-transform: translateY(2px);\n              transform: translateY(2px); }\n    button.random-btn span.question-mark:nth-of-type(2), button.random-btn span.question-mark:nth-of-type(5) {\n      -webkit-transform: translateY(-4px);\n              transform: translateY(-4px); }\n    button.random-btn span.question-mark:nth-of-type(3), button.random-btn span.question-mark:nth-of-type(4) {\n      -webkit-transform: translateY(4px);\n              transform: translateY(4px); }\n\ninput {\n  box-sizing: border-box;\n  max-width: 340px;\n  padding: 8px 12px;\n  border-width: 2px;\n  border-style: solid;\n  border-color: transparent;\n  border-radius: 5px; }\n  input:focus {\n    outline: none; }\n\nbutton, input {\n  transition: .25s ease-in-out all; }\n\n@media (min-width: 451px) {\n  button.random-btn {\n    max-width: 240px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_wiki_wiki_service__ = __webpack_require__("../../../../../src/app/services/wiki/wiki.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = (function () {
    function SearchComponent(_formBuilder, _wikiService) {
        this._formBuilder = _formBuilder;
        this._wikiService = _wikiService;
    }
    SearchComponent.prototype.ngOnInit = function () {
        this._buildForm();
    };
    SearchComponent.prototype._buildForm = function () {
        this.searchForm = this._formBuilder.group({
            searchTerm: ['']
        });
    };
    SearchComponent.prototype.ngAfterViewInit = function () {
        this._autoFocus();
    };
    SearchComponent.prototype._autoFocus = function () {
        this.searchInput.nativeElement.focus();
    };
    SearchComponent.prototype.getRandomArticle = function () {
        this.randomButton.nativeElement.blur();
        this._wikiService.getRandomArticle();
    };
    SearchComponent.prototype.search = function () {
        // console.log(this.searchForm.controls.searchTerm.value);
        var searchTerm = this.searchForm.controls.searchTerm.value.trim();
        this.searchForm.controls.searchTerm.setValue('');
        if (!searchTerm) {
            this._autoFocus();
            return;
        }
        this._wikiService.setSearchTerm(searchTerm);
        this.searchButton.nativeElement.blur();
        this._wikiService.search(searchTerm);
    };
    return SearchComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('searchInput'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], SearchComponent.prototype, "searchInput", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('searchButton'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object)
], SearchComponent.prototype, "searchButton", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('randomButton'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _c || Object)
], SearchComponent.prototype, "randomButton", void 0);
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'search-form',
        template: __webpack_require__("../../../../../src/app/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search/search.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_wiki_wiki_service__["a" /* WikiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_wiki_wiki_service__["a" /* WikiService */]) === "function" && _e || Object])
], SearchComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/wiki/wiki.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WikiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_first__ = __webpack_require__("../../../../rxjs/add/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_SearchResult__ = __webpack_require__("../../../../../src/app/models/SearchResult.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WikiService = (function () {
    function WikiService(_http) {
        this._http = _http;
        this._searchTerm = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.searchTerm$ = this._searchTerm.asObservable();
        this._searchResults = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.searchResults$ = this._searchResults.asObservable();
        this._loading = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.loading$ = this._loading.asObservable();
    }
    WikiService.prototype.setSearchTerm = function (newSearchTerm) {
        this._searchTerm.next(newSearchTerm);
    };
    WikiService.prototype.search = function (searchTerm) {
        this._searchResults.next([]);
        this._loading.next(true);
        searchTerm = searchTerm.replace(' ', '+');
        var params = this._getSearchParams(searchTerm);
        this._makeRequest(params);
    };
    WikiService.prototype.getRandomArticle = function () {
        this._searchResults.next([]);
        this._loading.next(true);
        this.setSearchTerm(null);
        var params = this._getRandomParams();
        this._makeRequest(params);
    };
    WikiService.prototype._getBaseUrl = function () {
        return 'https://en.wikipedia.org/w/api.php';
    };
    WikiService.prototype._getRequestBody = function () {
        return { data: {} };
    };
    WikiService.prototype._getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set('Api-User-Agent', 'Minipedia, a freeCodeCamp project/0.1 (URL TBD)');
        return headers;
    };
    WikiService.prototype._getBaseParams = function () {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
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
    };
    WikiService.prototype._getSearchParams = function (searchTerm) {
        var params = this._getBaseParams();
        params = params.set('generator', 'search')
            .set('gsrsearch', searchTerm);
        return params;
    };
    WikiService.prototype._getRandomParams = function () {
        var params = this._getBaseParams();
        params = params.set('generator', 'random')
            .set('grnnamespace', '0')
            .set('grnlimit', '1');
        return params;
    };
    WikiService.prototype._makeRequest = function (params) {
        var _this = this;
        this._http.post(this._getBaseUrl(), this._getRequestBody(), {
            headers: this._getHeaders(),
            params: params
        })
            .first()
            .subscribe(function (response) {
            // console.log('response from random query: ', response);
            _this._searchResults.next(_this._mapResponse(response));
            _this._loading.next(false);
        }, function (error) {
            _this._loading.next(false);
            // console.error('error: ', error);
        });
    };
    WikiService.prototype._mapResponse = function (response) {
        var mappedResults = [];
        // actual results are found in response.query.pages
        if (response['query'] && response['query'].pages) {
            var pages = response['query'].pages;
            for (var id in pages) {
                var page = pages[id];
                // remove empty parentheses that result from plain text extracts' being purged of IPA spellings/pronunciation links
                var extract = page.extract.replace('() ', '');
                mappedResults.push(new __WEBPACK_IMPORTED_MODULE_4__models_SearchResult__["a" /* SearchResult */](page.title, extract, page.canonicalurl));
            }
        }
        return mappedResults;
    };
    return WikiService;
}());
WikiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], WikiService);

var _a;
//# sourceMappingURL=wiki.service.js.map

/***/ }),

/***/ "../../../../../src/app/theme-selector/theme-selector.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  theme-selector works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/theme-selector/theme-selector.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme-selector/theme-selector.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeSelectorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThemeSelectorComponent = (function () {
    function ThemeSelectorComponent() {
    }
    ThemeSelectorComponent.prototype.ngOnInit = function () {
    };
    return ThemeSelectorComponent;
}());
ThemeSelectorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'theme-selector',
        template: __webpack_require__("../../../../../src/app/theme-selector/theme-selector.component.html"),
        styles: [__webpack_require__("../../../../../src/app/theme-selector/theme-selector.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ThemeSelectorComponent);

//# sourceMappingURL=theme-selector.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map