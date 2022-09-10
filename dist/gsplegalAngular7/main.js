"use strict";
(self["webpackChunkgsplegalAngular7"] = self["webpackChunkgsplegalAngular7"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./team/team.component */ 3975);
/* harmony import */ var _taetigkeit_taetigkeit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taetigkeit/taetigkeit.component */ 3420);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kontakt/kontakt.component */ 7274);
/* harmony import */ var _international_international_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./international/international.component */ 1457);
/* harmony import */ var _impressum_impressum_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./impressum/impressum.component */ 2579);
/* harmony import */ var _haftungsausschluss_haftungsausschluss_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./haftungsausschluss/haftungsausschluss.component */ 3290);
/* harmony import */ var _datenschutz_datenschutz_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./datenschutz/datenschutz.component */ 5638);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);











const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent },
    { path: 'team', component: _team_team_component__WEBPACK_IMPORTED_MODULE_0__.TeamComponent },
    { path: 'taetigkeitsbereich', component: _taetigkeit_taetigkeit_component__WEBPACK_IMPORTED_MODULE_1__.TaetigkeitComponent },
    { path: 'international', component: _international_international_component__WEBPACK_IMPORTED_MODULE_4__.InternationalComponent },
    { path: 'kontakt', component: _kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_3__.KontaktComponent },
    { path: 'impressum', component: _impressum_impressum_component__WEBPACK_IMPORTED_MODULE_5__.ImpressumComponent },
    { path: 'haftungsausschluss', component: _haftungsausschluss_haftungsausschluss_component__WEBPACK_IMPORTED_MODULE_6__.HaftungsausschlussComponent },
    { path: 'datenschutz', component: _datenschutz_datenschutz_component__WEBPACK_IMPORTED_MODULE_7__.DatenschutzComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' }), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




class AppComponent {
    constructor(translate) {
        this.translate = translate;
        this.title = 'gsplegal';
        this.germanSelected = false;
        this.collapse = true;
        this.changeLanguage = function (key) {
            this.germanSelected = (key === 'de');
            this.translate.use(key);
        };
        this.openTodo = function () {
            window.open('http://jupiter.bplaced.net/todo.htm');
        };
    }
    onResize(event) {
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        console.log(this.screenWidth + '/' + this.screenHeight);
    }
    ngOnInit() {
        this.translate.setDefaultLang('de');
        this.translate.use('de');
    }
    onToggleMenu() {
        this.collapse = !this.collapse;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function AppComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 103, vars: 49, consts: [[1, "gsptextfont"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarTogglerDemo02", "aria-controls", "navbarTogglerDemo02", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarTogglerDemo02", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto", "mt-2", "mt-lg-0"], [1, "nav-item", "active"], ["href", "#", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], ["href", "#", 1, "nav-link", "disabled"], [1, "form-inline", "my-2", "my-lg-0"], ["type", "search", "placeholder", "Search", 1, "form-control", "mr-sm-2"], ["type", "submit", 1, "btn", "btn-outline-success", "my-2", "my-sm-0"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], ["routerLink", "/home", "routerLinkActive", "gsprouterlinkactive", 1, "nav-link", "gspheadertext", 2, "padding-left", "0px"], ["routerLink", "/team", "routerLinkActive", "gsprouterlinkactive", 1, "nav-link", "gspheadertext"], ["routerLink", "/taetigkeitsbereich", "routerLinkActive", "gsprouterlinkactive", 1, "nav-link", "gspheadertext"], ["routerLink", "/international", "routerLinkActive", "gsprouterlinkactive", 1, "nav-link", "gspheadertext"], [1, "nav-item", 2, "padding-right", "10px"], ["routerLink", "/kontakt", "routerLinkActive", "gsprouterlinkactive", 1, "nav-link", "gspheadertext"], ["id", "deutschID", 1, "nav-link", "gspheaderlanguage", 3, "click"], ["src", "assets/images/oesterreich.jpg"], ["id", "englishID", 1, "nav-link", "gspheaderlanguage", 3, "click"], ["src", "assets/images/gb.jpg"], [1, "panel-footer", 2, "color", "white", "background-color", "rgb(0,68,57)", "padding-top", "5vh", "padding-bottom", "4vh"], [1, "container"], [1, "row"], [1, "col-md-1"], [1, "col-md-4"], ["href", "tel:+43-1-319-94-70", 1, "gspfooterlink"], ["href", "mailto:office@gsplegal.at", 1, "gspfooterlink"], [1, "col-md-6"], ["routerLink", "/impressum", "routerLinkActive", "gsprouterlinkactive", 1, "gspfooterlink"], ["routerLink", "/haftungsausschluss", "routerLinkActive", "gsprouterlinkactive", 1, "gspfooterlink"], ["routerLink", "/datenschutz", "routerLinkActive", "gsprouterlinkactive", 1, "gspfooterlink"], [1, "col-md-2"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0)(1, "nav", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "fffffffffff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "ul", 6)(8, "li", 7)(9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 10)(14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 10)(17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nav", 1)(24, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16)(27, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Hidden brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul", 17)(30, "li", 7)(31, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 10)(36, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 10)(41, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 10)(46, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 22)(51, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li", 10)(56, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_56_listener() { return ctx.changeLanguage("de"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li", 10)(61, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_61_listener() { return ctx.changeLanguage("en"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 28)(67, "div", 29)(68, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 32)(71, "address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " GARGER SPALLINGER Rechtsanw\u00E4lte GmbH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Biberstra\u00DFe 22, A-1010 Wien");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Tel: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " +43 1 319 94 70");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Fax: +43-1-319 94 70-70");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "office(AT)gsplegal.at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 35)(84, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](86, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](87, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](91, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](92, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](96, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](97, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](101, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 13, "HOME")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 17, "TEAM")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 21, "TAETIGKEITSBEREICH")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 25, "INTERNATIONAL")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](54, 29, "KONTAKT")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](58, 31, "DEUTSCH"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](63, 33, "ENGLISCH"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](86, 35, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](87, 37, "IMPRESSUM")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](91, 39, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](92, 41, "HAFTUNGSAUSSCHLUSS")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](96, 43, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](97, 45, "DATENSCHUTZ")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](101, 47, "ALLERECHTE"), "");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_3__.UpperCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe], styles: [".gsptitlefont[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 30px;\n  color: rgb(0, 68, 57);\n}\n\n.gsptextfont[_ngcontent-%COMP%] {\n  font-family: \"Source Sans Pro\", sans-serif;\n  color: black;\n}\n\n.gspcardimage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.gspcardtext[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: rgb(97, 96, 85);\n  top: 100px;\n  opacity: 0.7;\n  margin-top: -45px;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%], .gspcardtext[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.gspcardtext2zeilig[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n  margin-top: -68px;\n}\n\n.gspcardtextperson[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  margin-top: -40px;\n  width: 100%;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n\n.gsptextinimage[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.gsptextinimage_pos[_ngcontent-%COMP%] {\n  margin-left: 5vw;\n  margin-top: 2vh;\n  color: white;\n}\n\n.gspheaderimage[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.gspheadertext[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheadertext[_ngcontent-%COMP%]:hover {\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheaderlanguage[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding-right: 0px;\n  font-size: 0.8rem;\n  padding-top: 12px;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n#deutschID[_ngcontent-%COMP%] {\n  color: black;\n}\n\n#deutschID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n#englishID[_ngcontent-%COMP%] {\n  color: rgb(135, 142, 171);\n}\n\n#englishID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n.gspparagraph[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  margin-top: 0px;\n  background-color: rgb(242, 237, 234);\n}\n\n.gspcolimageleft[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 4px;\n  margin-right: 4px;\n  padding-bottom: 30px;\n}\n\n.gspcolimageright[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 0;\n  padding-bottom: 30px;\n}\n\n.gspcolimagecenter[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 30px;\n}\n\n.gsprouterlinkactive[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%]:hover {\n  color: rgb(102, 143, 136);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gsphochgestellt[_ngcontent-%COMP%] {\n  bottom: 0.25em;\n}\n\n.normal[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: gray;\n  border: none;\n  outline-width: 1px;\n  outline-color: gray;\n}\n\n.mat-card-header-text[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\n.gspkontakt[_ngcontent-%COMP%] {\n  color: #004439;\n}\n\n.gspblackcolor[_ngcontent-%COMP%] {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhDQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBR0E7RUFDRSwwQ0FBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxzQkFBQSxFQUFBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0FBQUY7O0FBR0E7RUFDRSxzQkFBQSxFQUFBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxzQkFBQSxFQUFBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0VBQ0EsMENBQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0VBQ0EsMENBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQ0FBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtBQUFGOztBQUdBO0VBQ0UsdUJBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSx1QkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMENBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSwwQ0FBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSwwQ0FBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtBQUFGOztBQU9BO0VBQ0UsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFKRjs7QUFPQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQUpGOztBQU9BO0VBQ0UsY0FBQTtBQUpGOztBQVlBO0VBQ0UsWUFBQTtBQVRGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nc3B0aXRsZWZvbnQge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XHJcbn1cclxuXHJcblxyXG4uZ3NwdGV4dGZvbnQge1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5nc3BjYXJkaW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmdzcGNhcmR0ZXh0IHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiA8LS0tLS0tICovXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTcsIDk2LCA4NSk7XHJcbiAgdG9wOiAxMDBweDtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgbWFyZ2luLXRvcDogLTQ1cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hLCAuZ3NwY2FyZHRleHQ6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmdzcGNhcmR0ZXh0MnplaWxpZyB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogPC0tLS0tLSAqL1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XHJcbiAgdG9wOiAxMDBweDtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgbWFyZ2luLXRvcDogLTY4cHg7XHJcbn1cclxuXHJcbi5nc3BjYXJkdGV4dHBlcnNvbiB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogPC0tLS0tLSAqL1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAtNDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xyXG4gIHRvcDogMTAwcHg7XHJcbiAgb3BhY2l0eTogMC41XHJcbn1cclxuXHJcbi5nc3B0ZXh0aW5pbWFnZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZ3NwdGV4dGluaW1hZ2VfcG9zIHtcclxuICBtYXJnaW4tbGVmdDogNXZ3O1xyXG4gIG1hcmdpbi10b3A6IDJ2aDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5nc3BoZWFkZXJpbWFnZSB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZ3NwaGVhZGVydGV4dCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmdzcGhlYWRlcnRleHQ6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwaGVhZGVybGFuZ3VhZ2Uge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4jZGV1dHNjaElEIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbiNkZXV0c2NoSUQ6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMzgsIDUwLCAxMDQpO1xyXG59XHJcblxyXG4jZW5nbGlzaElEIHtcclxuICBjb2xvcjogcmdiKDEzNSwgMTQyLCAxNzEpO1xyXG59XHJcblxyXG4jZW5nbGlzaElEOmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDM4LCA1MCwgMTA0KTtcclxufVxyXG5cclxuLmdzcHBhcmFncmFwaCB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyMzcsIDIzNCk7XHJcbn1cclxuXHJcbi5nc3Bjb2xpbWFnZWxlZnQge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5nc3Bjb2xpbWFnZXJpZ2h0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uZ3NwY29saW1hZ2VjZW50ZXIge1xyXG4gIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmdzcHJvdXRlcmxpbmthY3RpdmUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwZm9vdGVybGluayB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmdzcGZvb3Rlcmxpbms6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMTAyLCAxNDMsIDEzNik7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwaG9jaGdlc3RlbGx0IHtcclxuICBib3R0b206IDAuMjVlbTtcclxufVxyXG5cclxuXHJcbi8vIFRFQU0gRGV0YWlscyBLbGFzc2VuXHJcblxyXG5cclxuLm5vcm1hbHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjpncmF5O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lLXdpZHRoOiAxcHg7XHJcbiAgb3V0bGluZS1jb2xvcjogZ3JheTtcclxufVxyXG5cclxuLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5nc3Brb250YWt0IHtcclxuICBjb2xvcjogIzAwNDQzOTtcclxufVxyXG5cclxuLy8uZ3NwbWF0ZGlhbG9nY29udGVudCB7XHJcbi8vICAmOmV4dGVuZCgubWF0LWRpYWxvZy1jb250ZW50KTtcclxuLy8gIG1heC1oZWlnaHQ6IDc1dmg7XHJcbi8vfVxyXG5cclxuLmdzcGJsYWNrY29sb3Ige1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2202);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./team/team.component */ 3975);
/* harmony import */ var _taetigkeit_taetigkeit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taetigkeit/taetigkeit.component */ 3420);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _international_international_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./international/international.component */ 1457);
/* harmony import */ var _kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kontakt/kontakt.component */ 7274);
/* harmony import */ var _impressum_impressum_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./impressum/impressum.component */ 2579);
/* harmony import */ var _haftungsausschluss_haftungsausschluss_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./haftungsausschluss/haftungsausschluss.component */ 3290);
/* harmony import */ var _datenschutz_datenschutz_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./datenschutz/datenschutz.component */ 5638);
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @scullyio/ng-lib */ 6064);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _team_details_bgarger_dialog_bgarger_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./team/details/bgarger-dialog/bgarger-dialog.component */ 4190);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/flex-layout */ 2681);
/* harmony import */ var _team_details_fspallinger_dialog_fspallinger_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./team/details/fspallinger-dialog/fspallinger-dialog.component */ 7707);
/* harmony import */ var _team_details_psteindl_dialog_psteindl_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./team/details/psteindl-dialog/psteindl-dialog.component */ 15);
/* harmony import */ var _taetigkeit_details_gesellschaftsrecht_dialog_gesellschaftsrecht_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./taetigkeit/details/gesellschaftsrecht-dialog/gesellschaftsrecht-dialog.component */ 6898);
/* harmony import */ var _taetigkeit_details_template_template_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./taetigkeit/details/template/template.component */ 9761);
/* harmony import */ var _taetigkeit_details_umgruendungen_dialog_umgruendungen_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./taetigkeit/details/umgruendungen-dialog/umgruendungen-dialog.component */ 9736);
/* harmony import */ var _taetigkeit_details_mergers_dialog_mergers_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./taetigkeit/details/mergers-dialog/mergers-dialog.component */ 9770);
/* harmony import */ var _taetigkeit_details_arbeitsrecht_dialog_arbeitsrecht_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./taetigkeit/details/arbeitsrecht-dialog/arbeitsrecht-dialog.component */ 672);
/* harmony import */ var _taetigkeit_details_globalmobility_dialog_globalmobility_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./taetigkeit/details/globalmobility-dialog/globalmobility-dialog.component */ 7949);
/* harmony import */ var _taetigkeit_details_banken_dialog_banken_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./taetigkeit/details/banken-dialog/banken-dialog.component */ 3027);
/* harmony import */ var _taetigkeit_details_vertrag_dialog_vertrag_dialog_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./taetigkeit/details/vertrag-dialog/vertrag-dialog.component */ 1675);
/* harmony import */ var _taetigkeit_details_oeffentlichesrecht_dialog_oeffentlichesrecht_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./taetigkeit/details/oeffentlichesrecht-dialog/oeffentlichesrecht-dialog.component */ 5240);
/* harmony import */ var _taetigkeit_details_immobilien_dialog_immobilien_dialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./taetigkeit/details/immobilien-dialog/immobilien-dialog.component */ 3544);
/* harmony import */ var _taetigkeit_details_datenschutz_dialog_datenschutz_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./taetigkeit/details/datenschutz-dialog/datenschutz-dialog.component */ 8834);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 2560);





































function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_24__.TranslateHttpLoader(http);
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_27__.HttpClientModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__.TranslateModule.forRoot({
            loader: {
                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__.TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_27__.HttpClient]
            }
        }),
        _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_29__.ScullyLibModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_30__.BrowserAnimationsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__.MatDialogModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__.MatFormFieldModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_33__.MatCardModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_34__.FontAwesomeModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_35__.FlexLayoutModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _team_team_component__WEBPACK_IMPORTED_MODULE_2__.TeamComponent,
        _taetigkeit_taetigkeit_component__WEBPACK_IMPORTED_MODULE_3__.TaetigkeitComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent,
        _international_international_component__WEBPACK_IMPORTED_MODULE_5__.InternationalComponent,
        _kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_6__.KontaktComponent,
        _impressum_impressum_component__WEBPACK_IMPORTED_MODULE_7__.ImpressumComponent,
        _haftungsausschluss_haftungsausschluss_component__WEBPACK_IMPORTED_MODULE_8__.HaftungsausschlussComponent,
        _datenschutz_datenschutz_component__WEBPACK_IMPORTED_MODULE_9__.DatenschutzComponent,
        _team_details_bgarger_dialog_bgarger_dialog_component__WEBPACK_IMPORTED_MODULE_10__.BgargerDialogComponent,
        _taetigkeit_details_template_template_component__WEBPACK_IMPORTED_MODULE_14__.TemplateComponent,
        _team_details_fspallinger_dialog_fspallinger_dialog_component__WEBPACK_IMPORTED_MODULE_11__.FspallingerDialogComponent,
        _team_details_psteindl_dialog_psteindl_dialog_component__WEBPACK_IMPORTED_MODULE_12__.PsteindlDialogComponent,
        _taetigkeit_details_gesellschaftsrecht_dialog_gesellschaftsrecht_dialog_component__WEBPACK_IMPORTED_MODULE_13__.GesellschaftsrechtDialogComponent,
        _taetigkeit_details_umgruendungen_dialog_umgruendungen_dialog_component__WEBPACK_IMPORTED_MODULE_15__.UmgruendungenDialogComponent,
        _taetigkeit_details_mergers_dialog_mergers_dialog_component__WEBPACK_IMPORTED_MODULE_16__.MergersDialogComponent,
        _taetigkeit_details_arbeitsrecht_dialog_arbeitsrecht_dialog_component__WEBPACK_IMPORTED_MODULE_17__.ArbeitsrechtDialogComponent,
        _taetigkeit_details_globalmobility_dialog_globalmobility_dialog_component__WEBPACK_IMPORTED_MODULE_18__.GlobalmobilityDialogComponent,
        _taetigkeit_details_banken_dialog_banken_dialog_component__WEBPACK_IMPORTED_MODULE_19__.BankenDialogComponent,
        _taetigkeit_details_vertrag_dialog_vertrag_dialog_component__WEBPACK_IMPORTED_MODULE_20__.VertragDialogComponent,
        _taetigkeit_details_oeffentlichesrecht_dialog_oeffentlichesrecht_dialog_component__WEBPACK_IMPORTED_MODULE_21__.OeffentlichesrechtDialogComponent,
        _taetigkeit_details_immobilien_dialog_immobilien_dialog_component__WEBPACK_IMPORTED_MODULE_22__.ImmobilienDialogComponent,
        _taetigkeit_details_datenschutz_dialog_datenschutz_dialog_component__WEBPACK_IMPORTED_MODULE_23__.DatenschutzDialogComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_27__.HttpClientModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__.TranslateModule, _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_29__.ScullyLibModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_30__.BrowserAnimationsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__.MatDialogModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__.MatFormFieldModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_33__.MatCardModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_34__.FontAwesomeModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_35__.FlexLayoutModule] }); })();


/***/ }),

/***/ 5638:
/*!******************************************************!*\
  !*** ./src/app/datenschutz/datenschutz.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatenschutzComponent": () => (/* binding */ DatenschutzComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 3935);



class DatenschutzComponent {
    constructor() { }
    ngOnInit() {
    }
}
DatenschutzComponent.ɵfac = function DatenschutzComponent_Factory(t) { return new (t || DatenschutzComponent)(); };
DatenschutzComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatenschutzComponent, selectors: [["app-datenschutz"]], decls: 110, vars: 86, consts: [[1, "gsphomeheader"], [1, "container", "gsptextinimage"], [1, "row"], [1, "col-md-1"], [1, "col-md-8"], ["src", "../../assets/images/gs_logo_subseiten.png.png", 1, "gspheaderimage"], [1, "col-md-2"], [1, "gspparagraph"], [1, "container"], [1, "gsptitlefont"], ["href", "tel:+43-1-319-94-70", 1, "gspblackcolor"], ["href", "mailto:office@gsplegal.at", 1, "gspblackcolor"]], template: function DatenschutzComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7)(8, "div", 8)(9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4)(12, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](72, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](75, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](78, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](81, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](84, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](87, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](90, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](93, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](96, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "address")(98, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "GARGER SPALLINGER Rechtsanw\u00E4lte GmbH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " Biberstra\u00DFe 22, A-1010 Wien");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Tel: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " +43 1 319 94 70,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Fax: +43-1-319 94 70-70");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Email: office(AT)gsplegal.at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 28, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 30, "DATINF")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 32, "DATH1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 34, "DATP11"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 36, "DATP12"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 38, "DATP13"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 40, "DATP14"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 42, "DATP15"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 44, "DATH2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 46, "DATP21"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 48, "DATP22"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 50, "DATP23"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 52, "DATP24"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 54, "DATH3"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](54, 56, "DATP31"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](57, 58, "DATP32"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](60, 60, "DATP33"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](63, 62, "DATH4"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](66, 64, "DATP41"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](69, 66, "DATH5"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](72, 68, "DATP51"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](75, 70, "DATP52"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](78, 72, "DATP53"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](81, 74, "DATH6"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](84, 76, "DATP61"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](87, 78, "DATH7"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](90, 80, "DATP71"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](93, 82, "DATH8"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](96, 84, "DATP81"));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.UpperCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: [".gsptitlefont[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 30px;\n  color: rgb(0, 68, 57);\n}\n\n.gsptextfont[_ngcontent-%COMP%] {\n  font-family: \"Source Sans Pro\", sans-serif;\n  color: black;\n}\n\n.gspcardimage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.gspcardtext[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: rgb(97, 96, 85);\n  top: 100px;\n  opacity: 0.7;\n  margin-top: -45px;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%], .gspcardtext[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.gspcardtext2zeilig[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n  margin-top: -68px;\n}\n\n.gspcardtextperson[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  margin-top: -40px;\n  width: 100%;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n\n.gsptextinimage[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.gsptextinimage_pos[_ngcontent-%COMP%] {\n  margin-left: 5vw;\n  margin-top: 2vh;\n  color: white;\n}\n\n.gspheaderimage[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.gspheadertext[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheadertext[_ngcontent-%COMP%]:hover {\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheaderlanguage[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding-right: 0px;\n  font-size: 0.8rem;\n  padding-top: 12px;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n#deutschID[_ngcontent-%COMP%] {\n  color: black;\n}\n\n#deutschID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n#englishID[_ngcontent-%COMP%] {\n  color: rgb(135, 142, 171);\n}\n\n#englishID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n.gspparagraph[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  margin-top: 0px;\n  background-color: rgb(242, 237, 234);\n}\n\n.gspcolimageleft[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 4px;\n  margin-right: 4px;\n  padding-bottom: 30px;\n}\n\n.gspcolimageright[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 0;\n  padding-bottom: 30px;\n}\n\n.gspcolimagecenter[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 30px;\n}\n\n.gsprouterlinkactive[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%]:hover {\n  color: rgb(102, 143, 136);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gsphochgestellt[_ngcontent-%COMP%] {\n  bottom: 0.25em;\n}\n\n.normal[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: gray;\n  border: none;\n  outline-width: 1px;\n  outline-color: gray;\n}\n\n.mat-card-header-text[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\n.gspkontakt[_ngcontent-%COMP%] {\n  color: #004439;\n}\n\n.gspblackcolor[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.gsphomeheader[_ngcontent-%COMP%] {\n  height: 450px;\n  background-image: url('header_home.jpg');\n  background-position: center center;\n  background-size: cover;\n  overflow: hidden;\n  padding-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxhcHAuY29tcG9uZW50LnNjc3MiLCJkYXRlbnNjaHV0ei5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhDQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FER0E7RUFDRSwwQ0FBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxzQkFBQSxFQUFBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNBRjs7QURHQTtFQUNFLHFCQUFBO0FDQUY7O0FER0E7RUFDRSxzQkFBQSxFQUFBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxzQkFBQSxFQUFBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsMENBQUE7QUNBRjs7QURHQTtFQUNFLHFCQUFBO0VBQ0EsMENBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtBQ0FGOztBREdBO0VBQ0UsdUJBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0FDQUY7O0FER0E7RUFDRSx1QkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMENBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtBQ0FGOztBRE9BO0VBQ0UsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNKRjs7QURPQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0pGOztBRE9BO0VBQ0UsY0FBQTtBQ0pGOztBRFlBO0VBQ0UsWUFBQTtBQ1RGOztBQS9LQTtFQUNFLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBa0xGIiwiZmlsZSI6ImRhdGVuc2NodXR6LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdzcHRpdGxlZm9udCB7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgY29sb3I6IHJnYigwLDY4LDU3KTtcclxufVxyXG5cclxuXHJcbi5nc3B0ZXh0Zm9udCB7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmdzcGNhcmRpbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZ3NwY2FyZHRleHQge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIDwtLS0tLS0gKi9cclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5NywgOTYsIDg1KTtcclxuICB0b3A6IDEwMHB4O1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICBtYXJnaW4tdG9wOiAtNDVweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmEsIC5nc3BjYXJkdGV4dDpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZ3NwY2FyZHRleHQyemVpbGlnIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiA8LS0tLS0tICovXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcclxuICB0b3A6IDEwMHB4O1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBtYXJnaW4tdG9wOiAtNjhweDtcclxufVxyXG5cclxuLmdzcGNhcmR0ZXh0cGVyc29uIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiA8LS0tLS0tICovXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IC00MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDFweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XHJcbiAgdG9wOiAxMDBweDtcclxuICBvcGFjaXR5OiAwLjVcclxufVxyXG5cclxuLmdzcHRleHRpbmltYWdlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5nc3B0ZXh0aW5pbWFnZV9wb3Mge1xyXG4gIG1hcmdpbi1sZWZ0OiA1dnc7XHJcbiAgbWFyZ2luLXRvcDogMnZoO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmdzcGhlYWRlcmltYWdlIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5nc3BoZWFkZXJ0ZXh0IHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwaGVhZGVydGV4dDpob3ZlciB7XHJcbiAgY29sb3I6IHJnYigwLDY4LDU3KTtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5nc3BoZWFkZXJsYW5ndWFnZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBwYWRkaW5nLXRvcDogMTJweDtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiNkZXV0c2NoSUQge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuI2RldXRzY2hJRDpob3ZlciB7XHJcbiAgY29sb3I6IHJnYigzOCwgNTAsIDEwNCk7XHJcbn1cclxuXHJcbiNlbmdsaXNoSUQge1xyXG4gIGNvbG9yOiByZ2IoMTM1LCAxNDIsIDE3MSk7XHJcbn1cclxuXHJcbiNlbmdsaXNoSUQ6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMzgsIDUwLCAxMDQpO1xyXG59XHJcblxyXG4uZ3NwcGFyYWdyYXBoIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDIzNywgMjM0KTtcclxufVxyXG5cclxuLmdzcGNvbGltYWdlbGVmdCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmdzcGNvbGltYWdlcmlnaHQge1xyXG4gIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5nc3Bjb2xpbWFnZWNlbnRlciB7XHJcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uZ3Nwcm91dGVybGlua2FjdGl2ZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IHJnYigwLDY4LDU3KTtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5nc3Bmb290ZXJsaW5rIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwZm9vdGVybGluazpob3ZlciB7XHJcbiAgY29sb3I6IHJnYigxMDIsIDE0MywgMTM2KTtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5nc3Bob2NoZ2VzdGVsbHQge1xyXG4gIGJvdHRvbTogMC4yNWVtO1xyXG59XHJcblxyXG5cclxuLy8gVEVBTSBEZXRhaWxzIEtsYXNzZW5cclxuXHJcblxyXG4ubm9ybWFse1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOmdyYXk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmUtd2lkdGg6IDFweDtcclxuICBvdXRsaW5lLWNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4ubWF0LWNhcmQtaGVhZGVyLXRleHQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmdzcGtvbnRha3Qge1xyXG4gIGNvbG9yOiAjMDA0NDM5O1xyXG59XHJcblxyXG4vLy5nc3BtYXRkaWFsb2djb250ZW50IHtcclxuLy8gICY6ZXh0ZW5kKC5tYXQtZGlhbG9nLWNvbnRlbnQpO1xyXG4vLyAgbWF4LWhlaWdodDogNzV2aDtcclxuLy99XHJcblxyXG4uZ3NwYmxhY2tjb2xvciB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiIsIkBpbXBvcnQgXCIuLi9hcHAuY29tcG9uZW50LnNjc3NcIjtcclxuXHJcbi5nc3Bob21laGVhZGVyIHtcclxuICBoZWlnaHQ6IDQ1MHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyL2hlYWRlcl9ob21lLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 3290:
/*!********************************************************************!*\
  !*** ./src/app/haftungsausschluss/haftungsausschluss.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HaftungsausschlussComponent": () => (/* binding */ HaftungsausschlussComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 3935);



class HaftungsausschlussComponent {
    constructor() { }
    ngOnInit() {
    }
}
HaftungsausschlussComponent.ɵfac = function HaftungsausschlussComponent_Factory(t) { return new (t || HaftungsausschlussComponent)(); };
HaftungsausschlussComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HaftungsausschlussComponent, selectors: [["app-haftungsausschluss"]], decls: 21, vars: 11, consts: [[1, "gsphomeheader"], [1, "container", "gsptextinimage"], [1, "row"], [1, "col-md-1"], [1, "col-md-8"], ["src", "../../assets/images/gs_logo_subseiten.png", 1, "gspheaderimage"], [1, "gspparagraph"], [1, "container"], [1, "gsptitlefont"]], template: function HaftungsausschlussComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4)(11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 5, "HAFTUNGSAUSSCHLUSS")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 7, "HAFTP1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 9, "HAFTP2"));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.UpperCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: [".gsptitlefont[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 30px;\n  color: rgb(0, 68, 57);\n}\n\n.gsptextfont[_ngcontent-%COMP%] {\n  font-family: \"Source Sans Pro\", sans-serif;\n  color: black;\n}\n\n.gspcardimage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.gspcardtext[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: rgb(97, 96, 85);\n  top: 100px;\n  opacity: 0.7;\n  margin-top: -45px;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%], .gspcardtext[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.gspcardtext2zeilig[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n  margin-top: -68px;\n}\n\n.gspcardtextperson[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  margin-top: -40px;\n  width: 100%;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n\n.gsptextinimage[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.gsptextinimage_pos[_ngcontent-%COMP%] {\n  margin-left: 5vw;\n  margin-top: 2vh;\n  color: white;\n}\n\n.gspheaderimage[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.gspheadertext[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheadertext[_ngcontent-%COMP%]:hover {\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheaderlanguage[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding-right: 0px;\n  font-size: 0.8rem;\n  padding-top: 12px;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n#deutschID[_ngcontent-%COMP%] {\n  color: black;\n}\n\n#deutschID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n#englishID[_ngcontent-%COMP%] {\n  color: rgb(135, 142, 171);\n}\n\n#englishID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n.gspparagraph[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  margin-top: 0px;\n  background-color: rgb(242, 237, 234);\n}\n\n.gspcolimageleft[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 4px;\n  margin-right: 4px;\n  padding-bottom: 30px;\n}\n\n.gspcolimageright[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 0;\n  padding-bottom: 30px;\n}\n\n.gspcolimagecenter[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 30px;\n}\n\n.gsprouterlinkactive[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%]:hover {\n  color: rgb(102, 143, 136);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gsphochgestellt[_ngcontent-%COMP%] {\n  bottom: 0.25em;\n}\n\n.normal[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: gray;\n  border: none;\n  outline-width: 1px;\n  outline-color: gray;\n}\n\n.mat-card-header-text[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\n.gspkontakt[_ngcontent-%COMP%] {\n  color: #004439;\n}\n\n.gspblackcolor[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.gsphomeheader[_ngcontent-%COMP%] {\n  height: 450px;\n  background-image: url('header_home.jpg');\n  background-position: center center;\n  background-size: cover;\n  overflow: hidden;\n  padding-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxhcHAuY29tcG9uZW50LnNjc3MiLCJoYWZ0dW5nc2F1c3NjaGx1c3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4Q0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREdBO0VBQ0UsMENBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0Usc0JBQUEsRUFBQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDQUY7O0FER0E7RUFDRSxxQkFBQTtBQ0FGOztBREdBO0VBQ0Usc0JBQUEsRUFBQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0Usc0JBQUEsRUFBQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLDBDQUFBO0FDQUY7O0FER0E7RUFDRSxxQkFBQTtFQUNBLDBDQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMENBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7QUNBRjs7QURHQTtFQUNFLHVCQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtBQ0FGOztBREdBO0VBQ0UsdUJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLDBDQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsMENBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0VBQ0EsMENBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7QUNBRjs7QURPQTtFQUNFLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDSkY7O0FET0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNKRjs7QURPQTtFQUNFLGNBQUE7QUNKRjs7QURZQTtFQUNFLFlBQUE7QUNURjs7QUEvS0E7RUFDRSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQWtMRiIsImZpbGUiOiJoYWZ0dW5nc2F1c3NjaGx1c3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3NwdGl0bGVmb250IHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogcmdiKDAsNjgsNTcpO1xyXG59XHJcblxyXG5cclxuLmdzcHRleHRmb250IHtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uZ3NwY2FyZGltYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5nc3BjYXJkdGV4dCB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogPC0tLS0tLSAqL1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LCA5NiwgODUpO1xyXG4gIHRvcDogMTAwcHg7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIG1hcmdpbi10b3A6IC00NXB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYSwgLmdzcGNhcmR0ZXh0OmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5nc3BjYXJkdGV4dDJ6ZWlsaWcge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIDwtLS0tLS0gKi9cclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xyXG4gIHRvcDogMTAwcHg7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIG1hcmdpbi10b3A6IC02OHB4O1xyXG59XHJcblxyXG4uZ3NwY2FyZHRleHRwZXJzb24ge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIDwtLS0tLS0gKi9cclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogLTQwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDFweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcclxuICB0b3A6IDEwMHB4O1xyXG4gIG9wYWNpdHk6IDAuNVxyXG59XHJcblxyXG4uZ3NwdGV4dGluaW1hZ2Uge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmdzcHRleHRpbmltYWdlX3BvcyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDV2dztcclxuICBtYXJnaW4tdG9wOiAydmg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZ3NwaGVhZGVyaW1hZ2Uge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmdzcGhlYWRlcnRleHQge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5nc3BoZWFkZXJ0ZXh0OmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDAsNjgsNTcpO1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmdzcGhlYWRlcmxhbmd1YWdlIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuI2RldXRzY2hJRCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4jZGV1dHNjaElEOmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDM4LCA1MCwgMTA0KTtcclxufVxyXG5cclxuI2VuZ2xpc2hJRCB7XHJcbiAgY29sb3I6IHJnYigxMzUsIDE0MiwgMTcxKTtcclxufVxyXG5cclxuI2VuZ2xpc2hJRDpob3ZlciB7XHJcbiAgY29sb3I6IHJnYigzOCwgNTAsIDEwNCk7XHJcbn1cclxuXHJcbi5nc3BwYXJhZ3JhcGgge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogNTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MiwgMjM3LCAyMzQpO1xyXG59XHJcblxyXG4uZ3NwY29saW1hZ2VsZWZ0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgcGFkZGluZy1yaWdodDogNHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uZ3NwY29saW1hZ2VyaWdodCB7XHJcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmdzcGNvbGltYWdlY2VudGVyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5nc3Byb3V0ZXJsaW5rYWN0aXZlIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogcmdiKDAsNjgsNTcpO1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmdzcGZvb3Rlcmxpbmsge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5nc3Bmb290ZXJsaW5rOmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDEwMiwgMTQzLCAxMzYpO1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmdzcGhvY2hnZXN0ZWxsdCB7XHJcbiAgYm90dG9tOiAwLjI1ZW07XHJcbn1cclxuXHJcblxyXG4vLyBURUFNIERldGFpbHMgS2xhc3NlblxyXG5cclxuXHJcbi5ub3JtYWx7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6Z3JheTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZS13aWR0aDogMXB4O1xyXG4gIG91dGxpbmUtY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1oZWFkZXItdGV4dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZ3Nwa29udGFrdCB7XHJcbiAgY29sb3I6ICMwMDQ0Mzk7XHJcbn1cclxuXHJcbi8vLmdzcG1hdGRpYWxvZ2NvbnRlbnQge1xyXG4vLyAgJjpleHRlbmQoLm1hdC1kaWFsb2ctY29udGVudCk7XHJcbi8vICBtYXgtaGVpZ2h0OiA3NXZoO1xyXG4vL31cclxuXHJcbi5nc3BibGFja2NvbG9yIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuIiwiQGltcG9ydCBcIi4uL2FwcC5jb21wb25lbnQuc2Nzc1wiO1xyXG5cclxuLmdzcGhvbWVoZWFkZXIge1xyXG4gIGhlaWdodDogNDUwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXIvaGVhZGVyX2hvbWUuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_gsp_translation_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/gsp-translation-service.service */ 9791);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 3935);





function HomeComponent_span_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span")(1, "div", 20)(2, "p", 21)(3, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Herzlich willkommen bei\nGARGER SPALLINGER Rechtsanw\u00E4lte GmbH");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 23)(6, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Wir sind eine auf ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Wirtschaftsrecht spezialisierte\nAnwaltskanzlei");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 23)(12, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Zu unseren ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Kompetenzbereichen");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " z\u00E4hlen");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "die Bereiche\nGesellschafts- und Unternehmensrecht, Umgr\u00FCndungen und Umstrukturierungen,\nM&A, Vertragsrecht, Arbeitsrecht, Immobilienrecht, Litigation, Global\nMobility sowie Datenschutz- und IP/IT-Recht, sowohl auf nationaler, als auch\ninternationaler Ebene.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 23)(20, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "In unseren Spezialgebieten bieten wir aufgrund unserer\nlangj\u00E4hrigen Erfahrung eine ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "effiziente Beratung auf h\u00F6chstem Niveau");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, ". Eine\nkleingliedrige Kanzleistruktur erm\u00F6glicht uns eine ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "pers\u00F6nliche und\nindividuelle Betreuung");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " unserer Mandanten.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p", 23)(29, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Wir stehen f\u00FCr ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Verantwortung");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " und eine ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "langfristige\nKooperation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p", 25)(38, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Unser Ziel sind ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "erfolgs- und l\u00F6sungsorientierte Ergebnisse");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "p", 27)(44, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function HomeComponent_span_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span")(1, "div", 20)(2, "p", 25)(3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Welcome to GARGER SPALLINGER Rechtsanw\u00E4lte GmbH");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 25)(6, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "We are a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "law firm specializing in business and corporate law");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, ".\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 25)(12, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Our ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "areas of expertise");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " include corporate and commercial\nlaw, reorganizations and restructurings, M&A, contract law, employment law,\nreal estate law, litigation, global mobility as well as data protection and\nIP/IT law, each on a national and international level.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 25)(18, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "In our special fields we offer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "efficient advice at the highest\nlevel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " due to our many years of experience. Our law firm structure enables\nus to provide ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "personal and individual service");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " to our clients.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p", 25)(27, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "We stand for ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "responsibility ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "long-term cooperation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p", 25)(36, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Our goal is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "success- and solution-oriented results");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p", 27)(42, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
class HomeComponent {
    constructor(gpsTS) {
        this.gpsTS = gpsTS;
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_gsp_translation_service_service__WEBPACK_IMPORTED_MODULE_0__.GspTranslationServiceService)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 50, vars: 22, consts: [[1, "gsphomeheader"], [1, "container", "gsptextinimage_pos"], [1, "row"], [1, "col-md-8"], ["src", "../../assets/images/gs_logo_home_kontakt.png", 1, "gspheaderimage"], [2, "margin-top", "3vh", "padding-left", "1vw", "padding-right", "1vw"], [1, "col-xl-3", "col-md-3", "gspcolimagecenter"], [1, "border-0"], ["routerLink", "../team"], [1, "text-center"], ["src", "../../assets/images/klein/team.jpg", 1, "gspcardimage"], [1, "gspcardtext"], ["routerLink", "../taetigkeitsbereich"], ["src", "../../assets/images/klein/taetigkeitsbereiche_mergers.jpg", "alt", "...", 1, "gspcardimage"], ["routerLink", "../international"], ["src", "../../assets/images/klein/international_global.jpg", "alt", "...", 1, "gspcardimage"], ["routerLink", "../kontakt"], ["src", "../../assets/images/klein/kontakt.jpg", "alt", "...", 1, "gspcardimage"], [1, "gspparagraph", "gspparagraphBGColor"], [4, "ngIf"], [1, "WordSection1"], [1, "gsphometitlefont", 2, "margin-top", "0cm", "margin-right", "0cm", "margin-bottom", "5.0pt", "margin-left", "1.0cm"], ["lang", "DE-AT", 2, "font-size", "18.0pt", "font-family", "\"Arial\",sans-serif", "color", "#004439"], [2, "margin-top", "0cm", "margin-right", "0cm", "margin-bottom", "5.0pt", "margin-left", "1.0cm"], ["lang", "DE-AT", 2, "font-family", "\"Arial\",sans-serif", "color", "black"], [1, "MsoNormalIndent", 2, "margin-left", "1.0cm"], ["lang", "DE-AT", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif", "color", "black"], [1, "MsoNormal"], ["lang", "DE-AT"], ["lang", "DE-AT", 2, "font-size", "18.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif", "color", "#004439"], ["lang", "EN-US", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif", "color", "black"], ["lang", "EN-US"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5)(6, "div", 2)(7, "div", 6)(8, "div", 7)(9, "a", 8)(10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11)(13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 6)(18, "div", 7)(19, "a", 12)(20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 11)(23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 6)(28, "div", 7)(29, "a", 14)(30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 11)(33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](35, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 6)(38, "div", 7)(39, "a", 16)(40, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 11)(43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](45, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, HomeComponent_span_48_Template, 46, 0, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, HomeComponent_span_49_Template, 44, 0, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 8, "TEAM")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 12, "TAETIGKEITSBEREICH")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](35, 14, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](36, 16, "INTERNATIONAL")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](45, 18, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](46, 20, "KONTAKT")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.gpsTS.isGerman());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.gpsTS.isGerman());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_2__.UpperCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: [".gsptitlefont[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 30px;\n  color: rgb(0, 68, 57);\n}\n\n.gsptextfont[_ngcontent-%COMP%] {\n  font-family: \"Source Sans Pro\", sans-serif;\n  color: black;\n}\n\n.gspcardimage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.gspcardtext[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: rgb(97, 96, 85);\n  top: 100px;\n  opacity: 0.7;\n  margin-top: -45px;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%], .gspcardtext[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.gspcardtext2zeilig[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n  margin-top: -68px;\n}\n\n.gspcardtextperson[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  margin-top: -40px;\n  width: 100%;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n\n.gsptextinimage[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.gsptextinimage_pos[_ngcontent-%COMP%] {\n  margin-left: 5vw;\n  margin-top: 2vh;\n  color: white;\n}\n\n.gspheaderimage[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.gspheadertext[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheadertext[_ngcontent-%COMP%]:hover {\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheaderlanguage[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding-right: 0px;\n  font-size: 0.8rem;\n  padding-top: 12px;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n#deutschID[_ngcontent-%COMP%] {\n  color: black;\n}\n\n#deutschID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n#englishID[_ngcontent-%COMP%] {\n  color: rgb(135, 142, 171);\n}\n\n#englishID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n.gspparagraph[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  margin-top: 0px;\n  background-color: rgb(242, 237, 234);\n}\n\n.gspcolimageleft[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 4px;\n  margin-right: 4px;\n  padding-bottom: 30px;\n}\n\n.gspcolimageright[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 0;\n  padding-bottom: 30px;\n}\n\n.gspcolimagecenter[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 30px;\n}\n\n.gsprouterlinkactive[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%]:hover {\n  color: rgb(102, 143, 136);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gsphochgestellt[_ngcontent-%COMP%] {\n  bottom: 0.25em;\n}\n\n.normal[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: gray;\n  border: none;\n  outline-width: 1px;\n  outline-color: gray;\n}\n\n.mat-card-header-text[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\n.gspkontakt[_ngcontent-%COMP%] {\n  color: #004439;\n}\n\n.gspblackcolor[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.gsphomeheader[_ngcontent-%COMP%] {\n  height: 450px;\n  background-image: url('header_home.jpg');\n  background-position: center center;\n  background-size: cover;\n  overflow: hidden;\n  padding-top: 30px;\n}\n\n.gsphometitlefont[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 30px;\n  color: rgb(0, 68, 57);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxhcHAuY29tcG9uZW50LnNjc3MiLCJob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOENBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURHQTtFQUNFLDBDQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLHNCQUFBLEVBQUEsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ0FGOztBREdBO0VBQ0UscUJBQUE7QUNBRjs7QURHQTtFQUNFLHNCQUFBLEVBQUEsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLHNCQUFBLEVBQUEsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UscUJBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDBDQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSx1QkFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7QUNBRjs7QURHQTtFQUNFLHVCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLDBDQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtFQUNBLDBDQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0FDQUY7O0FET0E7RUFDRSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0pGOztBRE9BO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDSkY7O0FET0E7RUFDRSxjQUFBO0FDSkY7O0FEWUE7RUFDRSxZQUFBO0FDVEY7O0FBN0tBO0VBQ0UsYUFBQTtFQUNBLHdDQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFnTEY7O0FBN0tBO0VBQ0UsOENBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFnTEYiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nc3B0aXRsZWZvbnQge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XHJcbn1cclxuXHJcblxyXG4uZ3NwdGV4dGZvbnQge1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5nc3BjYXJkaW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmdzcGNhcmR0ZXh0IHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiA8LS0tLS0tICovXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTcsIDk2LCA4NSk7XHJcbiAgdG9wOiAxMDBweDtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgbWFyZ2luLXRvcDogLTQ1cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hLCAuZ3NwY2FyZHRleHQ6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmdzcGNhcmR0ZXh0MnplaWxpZyB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogPC0tLS0tLSAqL1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XHJcbiAgdG9wOiAxMDBweDtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgbWFyZ2luLXRvcDogLTY4cHg7XHJcbn1cclxuXHJcbi5nc3BjYXJkdGV4dHBlcnNvbiB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogPC0tLS0tLSAqL1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAtNDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xyXG4gIHRvcDogMTAwcHg7XHJcbiAgb3BhY2l0eTogMC41XHJcbn1cclxuXHJcbi5nc3B0ZXh0aW5pbWFnZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZ3NwdGV4dGluaW1hZ2VfcG9zIHtcclxuICBtYXJnaW4tbGVmdDogNXZ3O1xyXG4gIG1hcmdpbi10b3A6IDJ2aDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5nc3BoZWFkZXJpbWFnZSB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZ3NwaGVhZGVydGV4dCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmdzcGhlYWRlcnRleHQ6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwaGVhZGVybGFuZ3VhZ2Uge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4jZGV1dHNjaElEIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbiNkZXV0c2NoSUQ6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMzgsIDUwLCAxMDQpO1xyXG59XHJcblxyXG4jZW5nbGlzaElEIHtcclxuICBjb2xvcjogcmdiKDEzNSwgMTQyLCAxNzEpO1xyXG59XHJcblxyXG4jZW5nbGlzaElEOmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDM4LCA1MCwgMTA0KTtcclxufVxyXG5cclxuLmdzcHBhcmFncmFwaCB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyMzcsIDIzNCk7XHJcbn1cclxuXHJcbi5nc3Bjb2xpbWFnZWxlZnQge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5nc3Bjb2xpbWFnZXJpZ2h0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uZ3NwY29saW1hZ2VjZW50ZXIge1xyXG4gIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmdzcHJvdXRlcmxpbmthY3RpdmUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwZm9vdGVybGluayB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmdzcGZvb3Rlcmxpbms6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMTAyLCAxNDMsIDEzNik7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwaG9jaGdlc3RlbGx0IHtcclxuICBib3R0b206IDAuMjVlbTtcclxufVxyXG5cclxuXHJcbi8vIFRFQU0gRGV0YWlscyBLbGFzc2VuXHJcblxyXG5cclxuLm5vcm1hbHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjpncmF5O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lLXdpZHRoOiAxcHg7XHJcbiAgb3V0bGluZS1jb2xvcjogZ3JheTtcclxufVxyXG5cclxuLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5nc3Brb250YWt0IHtcclxuICBjb2xvcjogIzAwNDQzOTtcclxufVxyXG5cclxuLy8uZ3NwbWF0ZGlhbG9nY29udGVudCB7XHJcbi8vICAmOmV4dGVuZCgubWF0LWRpYWxvZy1jb250ZW50KTtcclxuLy8gIG1heC1oZWlnaHQ6IDc1dmg7XHJcbi8vfVxyXG5cclxuLmdzcGJsYWNrY29sb3Ige1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4iLCJAaW1wb3J0IFwiLi4vYXBwLmNvbXBvbmVudC5zY3NzXCI7XHJcblxyXG5cclxuXHJcbi5nc3Bob21laGVhZGVyIHtcclxuICBoZWlnaHQ6IDQ1MHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyL2hlYWRlcl9ob21lLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG5cclxuLmdzcGhvbWV0aXRsZWZvbnQge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ 2579:
/*!**************************************************!*\
  !*** ./src/app/impressum/impressum.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImpressumComponent": () => (/* binding */ ImpressumComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 3935);


class ImpressumComponent {
    constructor() { }
    ngOnInit() {
    }
}
ImpressumComponent.ɵfac = function ImpressumComponent_Factory(t) { return new (t || ImpressumComponent)(); };
ImpressumComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImpressumComponent, selectors: [["app-impressum"]], decls: 59, vars: 24, consts: [[1, "gsphomeheader"], [1, "container", "gsptextinimage"], [1, "row"], [1, "col-md-1"], [1, "col-md-8"], ["src", "../../assets/images/gs_logo_subseiten.png", 1, "gspheaderimage"], [1, "col-md-2"], [1, "gspparagraph"], [1, "container"], [1, "gsptitlefont"], ["href", "tel:+43-1-319-94-70", 1, "gspblackcolor"], ["href", "mailto:office@gsplegal.at", 1, "gspfooterlink", 2, "color", "black"], ["href", "mailto:office@claudiamarschall.at", 1, "gspfooterlink", 2, "color", "black"], ["href", "http://www.claudiamarschall.at"]], template: function ImpressumComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7)(8, "div", 8)(9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4)(12, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "address")(16, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "GARGER SPALLINGER Rechtsanw\u00E4lte GmbH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Biberstra\u00DFe 22, A-1010 Wien");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Tel: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " +43 1 319 94 70,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Fax: +43-1-319 94 70-70");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "office(AT)gsplegal.at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "FN 325373s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Design Website: Claudia Marschall");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Email: office(AT)claudiamarschall.at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "http://www.claudiamarschall.at");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 8, "IMPRESSUM"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 10, "RACODE"), ": P131287");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 12, "UID"), ": ATU 64902289");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 14, "DVR"), ": 4000815");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 16, "WEBPROG"), ": Herbert Blaschek ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 18, "BHAFT"), " : photocase.com\u00A9JOEXX ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](55, 20, "BIMP"), " : photocase.com\u00A9larrag01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](58, 22, "BANF"), " : photocase.com\u00A9kallejipp");
    } }, dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe], styles: [".gsptitlefont[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 30px;\n  color: rgb(0, 68, 57);\n}\n\n.gsptextfont[_ngcontent-%COMP%] {\n  font-family: \"Source Sans Pro\", sans-serif;\n  color: black;\n}\n\n.gspcardimage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.gspcardtext[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: rgb(97, 96, 85);\n  top: 100px;\n  opacity: 0.7;\n  margin-top: -45px;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%], .gspcardtext[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.gspcardtext2zeilig[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n  margin-top: -68px;\n}\n\n.gspcardtextperson[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  margin-top: -40px;\n  width: 100%;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n\n.gsptextinimage[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.gsptextinimage_pos[_ngcontent-%COMP%] {\n  margin-left: 5vw;\n  margin-top: 2vh;\n  color: white;\n}\n\n.gspheaderimage[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.gspheadertext[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheadertext[_ngcontent-%COMP%]:hover {\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheaderlanguage[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding-right: 0px;\n  font-size: 0.8rem;\n  padding-top: 12px;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n#deutschID[_ngcontent-%COMP%] {\n  color: black;\n}\n\n#deutschID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n#englishID[_ngcontent-%COMP%] {\n  color: rgb(135, 142, 171);\n}\n\n#englishID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n.gspparagraph[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  margin-top: 0px;\n  background-color: rgb(242, 237, 234);\n}\n\n.gspcolimageleft[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 4px;\n  margin-right: 4px;\n  padding-bottom: 30px;\n}\n\n.gspcolimageright[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 0;\n  padding-bottom: 30px;\n}\n\n.gspcolimagecenter[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 30px;\n}\n\n.gsprouterlinkactive[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%]:hover {\n  color: rgb(102, 143, 136);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gsphochgestellt[_ngcontent-%COMP%] {\n  bottom: 0.25em;\n}\n\n.normal[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: gray;\n  border: none;\n  outline-width: 1px;\n  outline-color: gray;\n}\n\n.mat-card-header-text[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\n.gspkontakt[_ngcontent-%COMP%] {\n  color: #004439;\n}\n\n.gspblackcolor[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.gsphomeheader[_ngcontent-%COMP%] {\n  height: 450px;\n  background-image: url('header_home.jpg');\n  background-position: center center;\n  background-size: cover;\n  overflow: hidden;\n  padding-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxhcHAuY29tcG9uZW50LnNjc3MiLCJpbXByZXNzdW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4Q0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREdBO0VBQ0UsMENBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0Usc0JBQUEsRUFBQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDQUY7O0FER0E7RUFDRSxxQkFBQTtBQ0FGOztBREdBO0VBQ0Usc0JBQUEsRUFBQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0Usc0JBQUEsRUFBQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLDBDQUFBO0FDQUY7O0FER0E7RUFDRSxxQkFBQTtFQUNBLDBDQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMENBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7QUNBRjs7QURHQTtFQUNFLHVCQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtBQ0FGOztBREdBO0VBQ0UsdUJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLDBDQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsMENBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0VBQ0EsMENBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7QUNBRjs7QURPQTtFQUNFLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDSkY7O0FET0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNKRjs7QURPQTtFQUNFLGNBQUE7QUNKRjs7QURZQTtFQUNFLFlBQUE7QUNURjs7QUEvS0E7RUFDRSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQWtMRiIsImZpbGUiOiJpbXByZXNzdW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3NwdGl0bGVmb250IHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogcmdiKDAsNjgsNTcpO1xyXG59XHJcblxyXG5cclxuLmdzcHRleHRmb250IHtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uZ3NwY2FyZGltYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5nc3BjYXJkdGV4dCB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogPC0tLS0tLSAqL1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LCA5NiwgODUpO1xyXG4gIHRvcDogMTAwcHg7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIG1hcmdpbi10b3A6IC00NXB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYSwgLmdzcGNhcmR0ZXh0OmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5nc3BjYXJkdGV4dDJ6ZWlsaWcge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIDwtLS0tLS0gKi9cclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xyXG4gIHRvcDogMTAwcHg7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIG1hcmdpbi10b3A6IC02OHB4O1xyXG59XHJcblxyXG4uZ3NwY2FyZHRleHRwZXJzb24ge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIDwtLS0tLS0gKi9cclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogLTQwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDFweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcclxuICB0b3A6IDEwMHB4O1xyXG4gIG9wYWNpdHk6IDAuNVxyXG59XHJcblxyXG4uZ3NwdGV4dGluaW1hZ2Uge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmdzcHRleHRpbmltYWdlX3BvcyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDV2dztcclxuICBtYXJnaW4tdG9wOiAydmg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZ3NwaGVhZGVyaW1hZ2Uge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmdzcGhlYWRlcnRleHQge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5nc3BoZWFkZXJ0ZXh0OmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDAsNjgsNTcpO1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmdzcGhlYWRlcmxhbmd1YWdlIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuI2RldXRzY2hJRCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4jZGV1dHNjaElEOmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDM4LCA1MCwgMTA0KTtcclxufVxyXG5cclxuI2VuZ2xpc2hJRCB7XHJcbiAgY29sb3I6IHJnYigxMzUsIDE0MiwgMTcxKTtcclxufVxyXG5cclxuI2VuZ2xpc2hJRDpob3ZlciB7XHJcbiAgY29sb3I6IHJnYigzOCwgNTAsIDEwNCk7XHJcbn1cclxuXHJcbi5nc3BwYXJhZ3JhcGgge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogNTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MiwgMjM3LCAyMzQpO1xyXG59XHJcblxyXG4uZ3NwY29saW1hZ2VsZWZ0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgcGFkZGluZy1yaWdodDogNHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uZ3NwY29saW1hZ2VyaWdodCB7XHJcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmdzcGNvbGltYWdlY2VudGVyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5nc3Byb3V0ZXJsaW5rYWN0aXZlIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogcmdiKDAsNjgsNTcpO1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmdzcGZvb3Rlcmxpbmsge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5nc3Bmb290ZXJsaW5rOmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDEwMiwgMTQzLCAxMzYpO1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmdzcGhvY2hnZXN0ZWxsdCB7XHJcbiAgYm90dG9tOiAwLjI1ZW07XHJcbn1cclxuXHJcblxyXG4vLyBURUFNIERldGFpbHMgS2xhc3NlblxyXG5cclxuXHJcbi5ub3JtYWx7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6Z3JheTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZS13aWR0aDogMXB4O1xyXG4gIG91dGxpbmUtY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1oZWFkZXItdGV4dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZ3Nwa29udGFrdCB7XHJcbiAgY29sb3I6ICMwMDQ0Mzk7XHJcbn1cclxuXHJcbi8vLmdzcG1hdGRpYWxvZ2NvbnRlbnQge1xyXG4vLyAgJjpleHRlbmQoLm1hdC1kaWFsb2ctY29udGVudCk7XHJcbi8vICBtYXgtaGVpZ2h0OiA3NXZoO1xyXG4vL31cclxuXHJcbi5nc3BibGFja2NvbG9yIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuIiwiQGltcG9ydCBcIi4uL2FwcC5jb21wb25lbnQuc2Nzc1wiO1xyXG5cclxuLmdzcGhvbWVoZWFkZXIge1xyXG4gIGhlaWdodDogNDUwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXIvaGVhZGVyX2hvbWUuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 1457:
/*!**********************************************************!*\
  !*** ./src/app/international/international.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InternationalComponent": () => (/* binding */ InternationalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 3935);



class InternationalComponent {
    constructor() { }
    ngOnInit() {
    }
}
InternationalComponent.ɵfac = function InternationalComponent_Factory(t) { return new (t || InternationalComponent)(); };
InternationalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InternationalComponent, selectors: [["app-international"]], decls: 26, vars: 14, consts: [[1, "gspinternationalheader"], [1, "container", "gsptextinimage_pos"], [1, "row"], [1, "col-md-8"], ["src", "../../assets/images/gs_logo_home_kontakt.png", 2, "width", "327px"], [1, "gspparagraph", 2, "background-color", "rgb(255,255,255)"], [1, "container"], [1, "col-md-1"], [1, "gsptitlefont"], [1, "col-md-9"]], template: function InternationalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3)(10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9)(17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 6, "INTERNATIONAL")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 8, "INTP0"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 10, "INTP1"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 12, "INTP2"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.UpperCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: [".gsptitlefont[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 30px;\n  color: rgb(0, 68, 57);\n}\n\n.gsptextfont[_ngcontent-%COMP%] {\n  font-family: \"Source Sans Pro\", sans-serif;\n  color: black;\n}\n\n.gspcardimage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.gspcardtext[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: rgb(97, 96, 85);\n  top: 100px;\n  opacity: 0.7;\n  margin-top: -45px;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%], .gspcardtext[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.gspcardtext2zeilig[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n  margin-top: -68px;\n}\n\n.gspcardtextperson[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  margin-top: -40px;\n  width: 100%;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n\n.gsptextinimage[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.gsptextinimage_pos[_ngcontent-%COMP%] {\n  margin-left: 5vw;\n  margin-top: 2vh;\n  color: white;\n}\n\n.gspheaderimage[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.gspheadertext[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheadertext[_ngcontent-%COMP%]:hover {\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheaderlanguage[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding-right: 0px;\n  font-size: 0.8rem;\n  padding-top: 12px;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n#deutschID[_ngcontent-%COMP%] {\n  color: black;\n}\n\n#deutschID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n#englishID[_ngcontent-%COMP%] {\n  color: rgb(135, 142, 171);\n}\n\n#englishID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n.gspparagraph[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  margin-top: 0px;\n  background-color: rgb(242, 237, 234);\n}\n\n.gspcolimageleft[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 4px;\n  margin-right: 4px;\n  padding-bottom: 30px;\n}\n\n.gspcolimageright[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 0;\n  padding-bottom: 30px;\n}\n\n.gspcolimagecenter[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 30px;\n}\n\n.gsprouterlinkactive[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%]:hover {\n  color: rgb(102, 143, 136);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gsphochgestellt[_ngcontent-%COMP%] {\n  bottom: 0.25em;\n}\n\n.normal[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: gray;\n  border: none;\n  outline-width: 1px;\n  outline-color: gray;\n}\n\n.mat-card-header-text[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\n.gspkontakt[_ngcontent-%COMP%] {\n  color: #004439;\n}\n\n.gspblackcolor[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.gspinternationalheader[_ngcontent-%COMP%] {\n  height: 450px;\n  background-image: url('header_international.jpg');\n  background-position: center center;\n  background-size: cover;\n  overflow: hidden;\n  padding-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxhcHAuY29tcG9uZW50LnNjc3MiLCJpbnRlcm5hdGlvbmFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOENBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURHQTtFQUNFLDBDQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLHNCQUFBLEVBQUEsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ0FGOztBREdBO0VBQ0UscUJBQUE7QUNBRjs7QURHQTtFQUNFLHNCQUFBLEVBQUEsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLHNCQUFBLEVBQUEsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UscUJBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDBDQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSx1QkFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7QUNBRjs7QURHQTtFQUNFLHVCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLDBDQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtFQUNBLDBDQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0FDQUY7O0FET0E7RUFDRSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0pGOztBRE9BO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDSkY7O0FET0E7RUFDRSxjQUFBO0FDSkY7O0FEWUE7RUFDRSxZQUFBO0FDVEY7O0FBL0tBO0VBQ0UsYUFBQTtFQUNBLGlEQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFrTEYiLCJmaWxlIjoiaW50ZXJuYXRpb25hbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nc3B0aXRsZWZvbnQge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XHJcbn1cclxuXHJcblxyXG4uZ3NwdGV4dGZvbnQge1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5nc3BjYXJkaW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmdzcGNhcmR0ZXh0IHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiA8LS0tLS0tICovXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTcsIDk2LCA4NSk7XHJcbiAgdG9wOiAxMDBweDtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgbWFyZ2luLXRvcDogLTQ1cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hLCAuZ3NwY2FyZHRleHQ6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmdzcGNhcmR0ZXh0MnplaWxpZyB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogPC0tLS0tLSAqL1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XHJcbiAgdG9wOiAxMDBweDtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgbWFyZ2luLXRvcDogLTY4cHg7XHJcbn1cclxuXHJcbi5nc3BjYXJkdGV4dHBlcnNvbiB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogPC0tLS0tLSAqL1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAtNDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xyXG4gIHRvcDogMTAwcHg7XHJcbiAgb3BhY2l0eTogMC41XHJcbn1cclxuXHJcbi5nc3B0ZXh0aW5pbWFnZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZ3NwdGV4dGluaW1hZ2VfcG9zIHtcclxuICBtYXJnaW4tbGVmdDogNXZ3O1xyXG4gIG1hcmdpbi10b3A6IDJ2aDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5nc3BoZWFkZXJpbWFnZSB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZ3NwaGVhZGVydGV4dCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmdzcGhlYWRlcnRleHQ6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwaGVhZGVybGFuZ3VhZ2Uge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4jZGV1dHNjaElEIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbiNkZXV0c2NoSUQ6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMzgsIDUwLCAxMDQpO1xyXG59XHJcblxyXG4jZW5nbGlzaElEIHtcclxuICBjb2xvcjogcmdiKDEzNSwgMTQyLCAxNzEpO1xyXG59XHJcblxyXG4jZW5nbGlzaElEOmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDM4LCA1MCwgMTA0KTtcclxufVxyXG5cclxuLmdzcHBhcmFncmFwaCB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyMzcsIDIzNCk7XHJcbn1cclxuXHJcbi5nc3Bjb2xpbWFnZWxlZnQge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5nc3Bjb2xpbWFnZXJpZ2h0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uZ3NwY29saW1hZ2VjZW50ZXIge1xyXG4gIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmdzcHJvdXRlcmxpbmthY3RpdmUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwZm9vdGVybGluayB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmdzcGZvb3Rlcmxpbms6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMTAyLCAxNDMsIDEzNik7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwaG9jaGdlc3RlbGx0IHtcclxuICBib3R0b206IDAuMjVlbTtcclxufVxyXG5cclxuXHJcbi8vIFRFQU0gRGV0YWlscyBLbGFzc2VuXHJcblxyXG5cclxuLm5vcm1hbHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjpncmF5O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lLXdpZHRoOiAxcHg7XHJcbiAgb3V0bGluZS1jb2xvcjogZ3JheTtcclxufVxyXG5cclxuLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5nc3Brb250YWt0IHtcclxuICBjb2xvcjogIzAwNDQzOTtcclxufVxyXG5cclxuLy8uZ3NwbWF0ZGlhbG9nY29udGVudCB7XHJcbi8vICAmOmV4dGVuZCgubWF0LWRpYWxvZy1jb250ZW50KTtcclxuLy8gIG1heC1oZWlnaHQ6IDc1dmg7XHJcbi8vfVxyXG5cclxuLmdzcGJsYWNrY29sb3Ige1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4iLCJAaW1wb3J0IFwiLi4vYXBwLmNvbXBvbmVudC5zY3NzXCI7XHJcblxyXG4uZ3NwaW50ZXJuYXRpb25hbGhlYWRlciB7XHJcbiAgaGVpZ2h0OiA0NTBweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2hlYWRlci9oZWFkZXJfaW50ZXJuYXRpb25hbC5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 7274:
/*!**********************************************!*\
  !*** ./src/app/kontakt/kontakt.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KontaktComponent": () => (/* binding */ KontaktComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 3935);



class KontaktComponent {
    constructor() { }
    ngOnInit() {
    }
}
KontaktComponent.ɵfac = function KontaktComponent_Factory(t) { return new (t || KontaktComponent)(); };
KontaktComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KontaktComponent, selectors: [["app-kontakt"]], decls: 51, vars: 19, consts: [[1, "gsphomeheader"], [1, "container", "gsptextinimage_pos"], [1, "row"], [1, "col-md-8"], ["src", "../../assets/images/gs_logo_home_kontakt.png", 2, "width", "327px"], [1, "col-md-2"], [1, "gspparagraph"], [1, "container"], [1, "col-md-1"], [1, "gsptitlefont"], ["href", "tel:+43-1-319-94-70", 1, "gspblackcolor"], ["href", "mailto:office@gsplegal.at", 1, "gspkontaktemail", "gspblackcolor"], [1, "gspparagraph", 2, "background-color", "rgb(255,255,255)"], [1, "col-md-10"], [1, "gspanfahrt"]], template: function KontaktComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3)(11, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "address")(16, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "GARGER SPALLINGER Rechtsanw\u00E4lte GmbH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Biberstra\u00DFe 22, A-1010 Wien");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Tel: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " +43 1 319 94 70,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Fax: +43-1-319 94 70-70");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Email: office(AT)gsplegal.at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12)(29, "div", 7)(30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3)(33, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13)(40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 7, "KONTAKT")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 11, "ANFAHRT")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 13, "ANFP1"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 15, "ANFP2"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 17, "ANFP3"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.UpperCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: [".gsptitlefont[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 30px;\n  color: rgb(0, 68, 57);\n}\n\n.gsptextfont[_ngcontent-%COMP%] {\n  font-family: \"Source Sans Pro\", sans-serif;\n  color: black;\n}\n\n.gspcardimage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.gspcardtext[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: rgb(97, 96, 85);\n  top: 100px;\n  opacity: 0.7;\n  margin-top: -45px;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%], .gspcardtext[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.gspcardtext2zeilig[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n  margin-top: -68px;\n}\n\n.gspcardtextperson[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  margin-top: -40px;\n  width: 100%;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n\n.gsptextinimage[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.gsptextinimage_pos[_ngcontent-%COMP%] {\n  margin-left: 5vw;\n  margin-top: 2vh;\n  color: white;\n}\n\n.gspheaderimage[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.gspheadertext[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheadertext[_ngcontent-%COMP%]:hover {\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheaderlanguage[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding-right: 0px;\n  font-size: 0.8rem;\n  padding-top: 12px;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n#deutschID[_ngcontent-%COMP%] {\n  color: black;\n}\n\n#deutschID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n#englishID[_ngcontent-%COMP%] {\n  color: rgb(135, 142, 171);\n}\n\n#englishID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n.gspparagraph[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  margin-top: 0px;\n  background-color: rgb(242, 237, 234);\n}\n\n.gspcolimageleft[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 4px;\n  margin-right: 4px;\n  padding-bottom: 30px;\n}\n\n.gspcolimageright[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 0;\n  padding-bottom: 30px;\n}\n\n.gspcolimagecenter[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 30px;\n}\n\n.gsprouterlinkactive[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%]:hover {\n  color: rgb(102, 143, 136);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gsphochgestellt[_ngcontent-%COMP%] {\n  bottom: 0.25em;\n}\n\n.normal[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: gray;\n  border: none;\n  outline-width: 1px;\n  outline-color: gray;\n}\n\n.mat-card-header-text[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\n.gspkontakt[_ngcontent-%COMP%] {\n  color: #004439;\n}\n\n.gspblackcolor[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.gsphomeheader[_ngcontent-%COMP%] {\n  height: 450px;\n  background-image: url('header_kontakt.jpg');\n  background-position: center center;\n  background-size: cover;\n  overflow: hidden;\n  padding-top: 30px;\n}\n\n.gspanfahrt[_ngcontent-%COMP%] {\n  height: 35vw;\n  \n  \n  background-position: top center;\n  \n  background-repeat: no-repeat;\n  \n  \n  background-size: cover;\n  \n  background-image: url('plan_kontakt.jpg');\n  overflow: auto;\n  background-size: 100%;\n  padding-top: 30px;\n}\n\n.gspkontakt[_ngcontent-%COMP%] {\n  color: rgb(0, 68, 57);\n}\n\n.gspkontakt[_ngcontent-%COMP%]:hover {\n  color: rgb(102, 143, 136);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxhcHAuY29tcG9uZW50LnNjc3MiLCJrb250YWt0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOENBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURHQTtFQUNFLDBDQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLHNCQUFBLEVBQUEsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ0FGOztBREdBO0VBQ0UscUJBQUE7QUNBRjs7QURHQTtFQUNFLHNCQUFBLEVBQUEsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLHNCQUFBLEVBQUEsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UscUJBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDBDQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSx1QkFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7QUNBRjs7QURHQTtFQUNFLHVCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLDBDQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtFQUNBLDBDQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0FDQUY7O0FET0E7RUFDRSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0pGOztBRE9BO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDSkY7O0FET0E7RUFDRSxjQUFBO0FDSkY7O0FEWUE7RUFDRSxZQUFBO0FDVEY7O0FBL0tBO0VBQ0UsYUFBQTtFQUNBLDJDQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFrTEY7O0FBL0tBO0VBQ0UsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsMEVBQUE7RUFDQSwrQkFBQTtFQUVBLGtDQUFBO0VBQ0EsNEJBQUE7RUFFQTs4REFBQTtFQUdBOzhCQUFBO0VBRUEsc0JBQUE7RUFFQTs0Q0FBQTtFQUVBLHlDQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUE4S0Y7O0FBM0tBO0VBQ0UscUJBQUE7QUE4S0Y7O0FBNUtBO0VBQ0UseUJBQUE7QUErS0YiLCJmaWxlIjoia29udGFrdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nc3B0aXRsZWZvbnQge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XHJcbn1cclxuXHJcblxyXG4uZ3NwdGV4dGZvbnQge1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5nc3BjYXJkaW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmdzcGNhcmR0ZXh0IHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiA8LS0tLS0tICovXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTcsIDk2LCA4NSk7XHJcbiAgdG9wOiAxMDBweDtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgbWFyZ2luLXRvcDogLTQ1cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hLCAuZ3NwY2FyZHRleHQ6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmdzcGNhcmR0ZXh0MnplaWxpZyB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogPC0tLS0tLSAqL1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XHJcbiAgdG9wOiAxMDBweDtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgbWFyZ2luLXRvcDogLTY4cHg7XHJcbn1cclxuXHJcbi5nc3BjYXJkdGV4dHBlcnNvbiB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogPC0tLS0tLSAqL1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAtNDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xyXG4gIHRvcDogMTAwcHg7XHJcbiAgb3BhY2l0eTogMC41XHJcbn1cclxuXHJcbi5nc3B0ZXh0aW5pbWFnZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZ3NwdGV4dGluaW1hZ2VfcG9zIHtcclxuICBtYXJnaW4tbGVmdDogNXZ3O1xyXG4gIG1hcmdpbi10b3A6IDJ2aDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5nc3BoZWFkZXJpbWFnZSB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZ3NwaGVhZGVydGV4dCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmdzcGhlYWRlcnRleHQ6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwaGVhZGVybGFuZ3VhZ2Uge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4jZGV1dHNjaElEIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbiNkZXV0c2NoSUQ6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMzgsIDUwLCAxMDQpO1xyXG59XHJcblxyXG4jZW5nbGlzaElEIHtcclxuICBjb2xvcjogcmdiKDEzNSwgMTQyLCAxNzEpO1xyXG59XHJcblxyXG4jZW5nbGlzaElEOmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDM4LCA1MCwgMTA0KTtcclxufVxyXG5cclxuLmdzcHBhcmFncmFwaCB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyMzcsIDIzNCk7XHJcbn1cclxuXHJcbi5nc3Bjb2xpbWFnZWxlZnQge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5nc3Bjb2xpbWFnZXJpZ2h0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uZ3NwY29saW1hZ2VjZW50ZXIge1xyXG4gIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmdzcHJvdXRlcmxpbmthY3RpdmUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwZm9vdGVybGluayB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmdzcGZvb3Rlcmxpbms6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMTAyLCAxNDMsIDEzNik7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwaG9jaGdlc3RlbGx0IHtcclxuICBib3R0b206IDAuMjVlbTtcclxufVxyXG5cclxuXHJcbi8vIFRFQU0gRGV0YWlscyBLbGFzc2VuXHJcblxyXG5cclxuLm5vcm1hbHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjpncmF5O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lLXdpZHRoOiAxcHg7XHJcbiAgb3V0bGluZS1jb2xvcjogZ3JheTtcclxufVxyXG5cclxuLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5nc3Brb250YWt0IHtcclxuICBjb2xvcjogIzAwNDQzOTtcclxufVxyXG5cclxuLy8uZ3NwbWF0ZGlhbG9nY29udGVudCB7XHJcbi8vICAmOmV4dGVuZCgubWF0LWRpYWxvZy1jb250ZW50KTtcclxuLy8gIG1heC1oZWlnaHQ6IDc1dmg7XHJcbi8vfVxyXG5cclxuLmdzcGJsYWNrY29sb3Ige1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4iLCJAaW1wb3J0IFwiLi4vYXBwLmNvbXBvbmVudC5zY3NzXCI7XHJcblxyXG4uZ3NwaG9tZWhlYWRlciB7XHJcbiAgaGVpZ2h0OiA0NTBweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2hlYWRlci9oZWFkZXJfa29udGFrdC5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5nc3BhbmZhaHJ0IHtcclxuICBoZWlnaHQ6IDM1dnc7XHJcbiAgLyogTG9jYXRpb24gb2YgdGhlIGltYWdlICovXHJcbiAgLyogQmFja2dyb3VuZCBpbWFnZSBpcyBjZW50ZXJlZCB2ZXJ0aWNhbGx5IGFuZCBob3Jpem9udGFsbHkgYXQgYWxsIHRpbWVzICovXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcclxuXHJcbiAgLyogQmFja2dyb3VuZCBpbWFnZSBkb2Vzbid0IHRpbGUgKi9cclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cclxuICAvKiBCYWNrZ3JvdW5kIGltYWdlIGlzIGZpeGVkIGluIHRoZSB2aWV3cG9ydCBzbyB0aGF0IGl0IGRvZXNuJ3QgbW92ZSB3aGVuXHJcbiAgICAgdGhlIGNvbnRlbnQncyBoZWlnaHQgaXMgZ3JlYXRlciB0aGFuIHRoZSBpbWFnZSdzIGhlaWdodCAqL1xyXG5cclxuICAvKiBUaGlzIGlzIHdoYXQgbWFrZXMgdGhlIGJhY2tncm91bmQgaW1hZ2UgcmVzY2FsZSBiYXNlZFxyXG4gICAgIG9uIHRoZSBjb250YWluZXIncyBzaXplICovXHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHJcbiAgLyogU2V0IGEgYmFja2dyb3VuZCBjb2xvciB0aGF0IHdpbGwgYmUgZGlzcGxheWVkXHJcbiAgICAgd2hpbGUgdGhlIGJhY2tncm91bmQgaW1hZ2UgaXMgbG9hZGluZyAqL1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvcGxhbl9rb250YWt0LmpwZ1wiKTs7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uZ3Nwa29udGFrdCB7XHJcbiAgY29sb3I6IHJnYigwLDY4LDU3KTtcclxufVxyXG4uZ3Nwa29udGFrdDpob3ZlciB7XHJcbiAgY29sb3I6IHJnYigxMDIsIDE0MywgMTM2KTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 9791:
/*!*************************************************************!*\
  !*** ./src/app/services/gsp-translation-service.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GspTranslationServiceService": () => (/* binding */ GspTranslationServiceService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 3935);


class GspTranslationServiceService {
    constructor(translateService) {
        this.translateService = translateService;
    }
    isGerman() {
        return this.translateService.currentLang === 'de';
    }
}
GspTranslationServiceService.ɵfac = function GspTranslationServiceService_Factory(t) { return new (t || GspTranslationServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService)); };
GspTranslationServiceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GspTranslationServiceService, factory: GspTranslationServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 672:
/*!*****************************************************************************************!*\
  !*** ./src/app/taetigkeit/details/arbeitsrecht-dialog/arbeitsrecht-dialog.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArbeitsrechtDialogComponent": () => (/* binding */ ArbeitsrechtDialogComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ 5139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _services_gsp_translation_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/gsp-translation-service.service */ 9791);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 3935);










function ArbeitsrechtDialogComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "div", 12)(2, "p", 6)(3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Was w\u00E4re\nein Unternehmen ohne seine wichtigste Ressource, die Mitarbeiter/innen? Die\nkorrekte Ausgestaltung des Arbeits- /Dienstverh\u00E4ltnisses und die L\u00F6sung\nallf\u00E4lliger Konflikt stellt dabei eine f\u00FCr den Erfolg des Unternehmens\nwesentliche Komponente dar. Damit Sie sich auf Ihr Kerngesch\u00E4ft konzentrieren\nk\u00F6nnen, unterst\u00FCtzen wir Sie gerne bei s\u00E4mtlichen Fragen des Arbeitsrechts.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 14)(6, "span", 15)(7, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Ausarbeitung und \u00DCberpr\u00FCfung von\nGesch\u00E4ftsf\u00FChrer- und Vorstandsvertr\u00E4gen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 14)(14, "span", 15)(15, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Ausarbeitung und \u00DCberpr\u00FCfung von\nDienstvertr\u00E4gen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p", 14)(22, "span", 15)(23, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Unterst\u00FCtzung von Arbeitgebern und\nArbeitnehmern in arbeitsrechtlichen Fragen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p", 14)(30, "span", 15)(31, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Verfahren vor den Arbeits- und\nSozialgerichten");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "p", 18)(38, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} }
function ArbeitsrechtDialogComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "div", 12)(2, "p", 6)(3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "What would a company be without its most important\nresource, its employees? The correct structuring of the employment relationship\nand the resolution of any conflicts is an essential component for the success\nof the company. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "In order for");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " you to be able to\nconcentrate on your core business, we are happy to support you in all questions\nof employment law.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 14)(9, "span", 21)(10, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Drafting and examination of managers\u2019 and directors\u2019\ncontracts");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p", 14)(17, "span", 21)(18, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Drafting and examination of all other forms of labor\ncontracts");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p", 14)(25, "span", 21)(26, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Legal advice to employers and employees on labor-law\nissues");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "p", 22)(33, "span", 21)(34, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Representation in labor disputes, both in court and\nout-of-court");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "p", 18)(41, "span", 23)(42, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
} }
class ArbeitsrechtDialogComponent {
    constructor(dialog, gpsTS) {
        this.dialog = dialog;
        this.gpsTS = gpsTS;
        this.faXmark = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faXmark;
    }
    openDialog() {
    }
    onClose() {
        this.dialog.closeAll();
    }
    ngAfterViewInit() {
        jquery__WEBPACK_IMPORTED_MODULE_0__.find(".mat-card-header-text")[0].style.width = "100%";
    }
}
ArbeitsrechtDialogComponent.ɵfac = function ArbeitsrechtDialogComponent_Factory(t) { return new (t || ArbeitsrechtDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_gsp_translation_service_service__WEBPACK_IMPORTED_MODULE_1__.GspTranslationServiceService)); };
ArbeitsrechtDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ArbeitsrechtDialogComponent, selectors: [["app-arbeitsrecht-dialog"]], decls: 19, vars: 9, consts: [["mat-dialog-content", "", 1, "gspmatdialogcontent"], ["matdialogcontent", ""], [1, "dialog-card"], ["mat-card-avatar", "", 1, "dialog-header"], [2, "width", "100%"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], [1, "MsoNormalIndent"], ["lang", "EN-US", 2, "font-size", "14.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif", "color", "#004439"], [1, "normal", 3, "title", "click"], ["size", "xs", 3, "icon"], [2, "margin-left", "20px", "overflow", "hidden"], [4, "ngIf"], [1, "WordSection1"], [2, "font-size", "12.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif", "mso-bidi-font-family", "Times New Roman"], [1, "MsoNormalIndent", 2, "margin-top", "0cm", "margin-right", "0cm", "margin-bottom", "0cm", "margin-left", "64.05pt", "mso-add-space", "auto", "text-indent", "-17.85pt", "mso-list", "l0 level1 lfo1"], [2, "font-size", "12.0pt", "line-height", "115%", "font-family", "Wingdings", "mso-fareast-font-family", "Wingdings", "mso-bidi-font-family", "Wingdings"], [2, "mso-list", "Ignore"], [2, "font", "7.0pt \"Times New Roman\""], [1, "MsoNormal"], ["lang", "EN-US", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif", "mso-bidi-font-family", "Times New Roman", "mso-ansi-language", "EN-US"], [1, "GramE"], ["lang", "EN-US", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "Wingdings", "mso-fareast-font-family", "Wingdings", "mso-bidi-font-family", "Wingdings", "mso-ansi-language", "EN-US"], [1, "MsoNormalIndent", 2, "margin-top", "0cm", "margin-right", "0cm", "margin-bottom", "12.0pt", "margin-left", "64.05pt", "text-indent", "-17.85pt", "mso-list", "l0 level1 lfo1"], ["lang", "EN-US", 2, "mso-ansi-language", "EN-US"]], template: function ArbeitsrechtDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1)(2, "mat-card", 2)(3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-card-title", 4)(6, "span", 5)(7, "p", 6)(8, "span", 7)(9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span")(14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ArbeitsrechtDialogComponent_Template_button_click_14_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-card-content", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ArbeitsrechtDialogComponent_span_17_Template, 40, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, ArbeitsrechtDialogComponent_span_18_Template, 44, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 7, "ARBEITSRECHT")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.gpsTS.isGerman() ? "schliessen" : "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faXmark);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.gpsTS.isGerman());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.gpsTS.isGerman());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardAvatar, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutAlignDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.UpperCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: [".gsptitlefont[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 30px;\n  color: rgb(0, 68, 57);\n}\n\n.gsptextfont[_ngcontent-%COMP%] {\n  font-family: \"Source Sans Pro\", sans-serif;\n  color: black;\n}\n\n.gspcardimage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.gspcardtext[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: rgb(97, 96, 85);\n  top: 100px;\n  opacity: 0.7;\n  margin-top: -45px;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%], .gspcardtext[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.gspcardtext2zeilig[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n  margin-top: -68px;\n}\n\n.gspcardtextperson[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  margin-top: -40px;\n  width: 100%;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n\n.gsptextinimage[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.gsptextinimage_pos[_ngcontent-%COMP%] {\n  margin-left: 5vw;\n  margin-top: 2vh;\n  color: white;\n}\n\n.gspheaderimage[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.gspheadertext[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheadertext[_ngcontent-%COMP%]:hover {\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheaderlanguage[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding-right: 0px;\n  font-size: 0.8rem;\n  padding-top: 12px;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n#deutschID[_ngcontent-%COMP%] {\n  color: black;\n}\n\n#deutschID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n#englishID[_ngcontent-%COMP%] {\n  color: rgb(135, 142, 171);\n}\n\n#englishID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n.gspparagraph[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  margin-top: 0px;\n  background-color: rgb(242, 237, 234);\n}\n\n.gspcolimageleft[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 4px;\n  margin-right: 4px;\n  padding-bottom: 30px;\n}\n\n.gspcolimageright[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 0;\n  padding-bottom: 30px;\n}\n\n.gspcolimagecenter[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 30px;\n}\n\n.gsprouterlinkactive[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%]:hover {\n  color: rgb(102, 143, 136);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gsphochgestellt[_ngcontent-%COMP%] {\n  bottom: 0.25em;\n}\n\n.normal[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: gray;\n  border: none;\n  outline-width: 1px;\n  outline-color: gray;\n}\n\n.mat-card-header-text[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\n.gspkontakt[_ngcontent-%COMP%] {\n  color: #004439;\n}\n\n.gspblackcolor[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.gspteamheader[_ngcontent-%COMP%] {\n  height: 450px;\n  background-image: url('header_team.jpg');\n  background-position: center center;\n  background-size: cover;\n  overflow: hidden;\n  padding-top: 30px;\n}\n\n.gspcardimagepartner[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.gspcardtextpartner[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 66%;\n  margin-top: -48px;\n  margin-left: 17%;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n\n.gspcontainer[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  color: white;\n  width: 100%;\n}\n\n.gspbottomleft[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  bottom: 0px;\n  left: 0%;\n  padding-left: 15px;\n  background-color: rgb(97, 96, 85);\n  opacity: 0.7;\n  text-align: left;\n  font-size: 80%;\n}\n\n.gsptitlefontteam[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 30px;\n  color: white;\n  padding-top: 30px;\n}\n\n.gspteambottomcentered[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  bottom: 0px;\n  background-color: rgb(97, 96, 85);\n  opacity: 0.7;\n  color: white;\n}\n\n.dialog-header[_ngcontent-%COMP%] {\n  background-image: url(\"/src/assets/images/klein/arbeitsrecht.jpg\");\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFwcC5jb21wb25lbnQuc2NzcyIsImFyYmVpdHNyZWNodC1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFx0ZWFtXFx0ZWFtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOENBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURHQTtFQUNFLDBDQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLHNCQUFBLEVBQUEsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ0FGOztBREdBO0VBQ0UscUJBQUE7QUNBRjs7QURHQTtFQUNFLHNCQUFBLEVBQUEsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLHNCQUFBLEVBQUEsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UscUJBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDBDQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSx1QkFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7QUNBRjs7QURHQTtFQUNFLHVCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLDBDQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtFQUNBLDBDQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0FDQUY7O0FET0E7RUFDRSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0pGOztBRE9BO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDSkY7O0FET0E7RUFDRSxjQUFBO0FDSkY7O0FEWUE7RUFDRSxZQUFBO0FDVEY7O0FDL0tBO0VBQ0UsYUFBQTtFQUNBLHdDQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QURrTEY7O0FDL0tBO0VBQ0UsV0FBQTtBRGtMRjs7QUNoTEE7RUFDRSxzQkFBQSxFQUFBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBRG1MRjs7QUNoTEE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QURtTEY7O0FDakxBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBRG9MRjs7QUNqTEE7RUFDRSw4Q0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QURvTEY7O0FDL0tBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FEa0xGOztBQS9PQTtFQUNFLGtFQUFBO0VBQ0Esc0JBQUE7QUFrUEYiLCJmaWxlIjoiYXJiZWl0c3JlY2h0LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nc3B0aXRsZWZvbnQge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XHJcbn1cclxuXHJcblxyXG4uZ3NwdGV4dGZvbnQge1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5nc3BjYXJkaW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmdzcGNhcmR0ZXh0IHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiA8LS0tLS0tICovXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTcsIDk2LCA4NSk7XHJcbiAgdG9wOiAxMDBweDtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgbWFyZ2luLXRvcDogLTQ1cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hLCAuZ3NwY2FyZHRleHQ6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmdzcGNhcmR0ZXh0MnplaWxpZyB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogPC0tLS0tLSAqL1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XHJcbiAgdG9wOiAxMDBweDtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgbWFyZ2luLXRvcDogLTY4cHg7XHJcbn1cclxuXHJcbi5nc3BjYXJkdGV4dHBlcnNvbiB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogPC0tLS0tLSAqL1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAtNDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xyXG4gIHRvcDogMTAwcHg7XHJcbiAgb3BhY2l0eTogMC41XHJcbn1cclxuXHJcbi5nc3B0ZXh0aW5pbWFnZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZ3NwdGV4dGluaW1hZ2VfcG9zIHtcclxuICBtYXJnaW4tbGVmdDogNXZ3O1xyXG4gIG1hcmdpbi10b3A6IDJ2aDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5nc3BoZWFkZXJpbWFnZSB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZ3NwaGVhZGVydGV4dCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmdzcGhlYWRlcnRleHQ6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwaGVhZGVybGFuZ3VhZ2Uge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4jZGV1dHNjaElEIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbiNkZXV0c2NoSUQ6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMzgsIDUwLCAxMDQpO1xyXG59XHJcblxyXG4jZW5nbGlzaElEIHtcclxuICBjb2xvcjogcmdiKDEzNSwgMTQyLCAxNzEpO1xyXG59XHJcblxyXG4jZW5nbGlzaElEOmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDM4LCA1MCwgMTA0KTtcclxufVxyXG5cclxuLmdzcHBhcmFncmFwaCB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyMzcsIDIzNCk7XHJcbn1cclxuXHJcbi5nc3Bjb2xpbWFnZWxlZnQge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5nc3Bjb2xpbWFnZXJpZ2h0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uZ3NwY29saW1hZ2VjZW50ZXIge1xyXG4gIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmdzcHJvdXRlcmxpbmthY3RpdmUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwZm9vdGVybGluayB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmdzcGZvb3Rlcmxpbms6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMTAyLCAxNDMsIDEzNik7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwaG9jaGdlc3RlbGx0IHtcclxuICBib3R0b206IDAuMjVlbTtcclxufVxyXG5cclxuXHJcbi8vIFRFQU0gRGV0YWlscyBLbGFzc2VuXHJcblxyXG5cclxuLm5vcm1hbHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjpncmF5O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lLXdpZHRoOiAxcHg7XHJcbiAgb3V0bGluZS1jb2xvcjogZ3JheTtcclxufVxyXG5cclxuLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5nc3Brb250YWt0IHtcclxuICBjb2xvcjogIzAwNDQzOTtcclxufVxyXG5cclxuLy8uZ3NwbWF0ZGlhbG9nY29udGVudCB7XHJcbi8vICAmOmV4dGVuZCgubWF0LWRpYWxvZy1jb250ZW50KTtcclxuLy8gIG1heC1oZWlnaHQ6IDc1dmg7XHJcbi8vfVxyXG5cclxuLmdzcGJsYWNrY29sb3Ige1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4iLCJAaW1wb3J0IFwic3JjL2FwcC90ZWFtL3RlYW0uY29tcG9uZW50XCI7XHJcbi5kaWFsb2ctaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zcmMvYXNzZXRzL2ltYWdlcy9rbGVpbi9hcmJlaXRzcmVjaHQuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4iLCJAaW1wb3J0IFwiLi4vYXBwLmNvbXBvbmVudC5zY3NzXCI7XHJcblxyXG4uZ3NwdGVhbWhlYWRlciB7XHJcbiAgaGVpZ2h0OiA0NTBweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2hlYWRlci9oZWFkZXJfdGVhbS5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5nc3BjYXJkaW1hZ2VwYXJ0bmVyIHtcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcbi5nc3BjYXJkdGV4dHBhcnRuZXIge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIDwtLS0tLS0gKi9cclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgd2lkdGg6IDY2JTtcclxuICBtYXJnaW4tdG9wOiAtNDhweDtcclxuICBtYXJnaW4tbGVmdDogMTclO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcclxuICB0b3A6IDEwMHB4O1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLmdzcGNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmdzcGJvdHRvbWxlZnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3R0b206MHB4O1xyXG4gIGxlZnQ6IDAlO1xyXG4gIHBhZGRpbmctbGVmdDoxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5Nyw5Niw4NSk7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1zaXplOiA4MCU7XHJcbn1cclxuXHJcbi5nc3B0aXRsZWZvbnR0ZWFtIHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmdzcHRlYW1ib3R0b21jZW50ZXJlZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGJvdHRvbTowcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LDk2LDg1KTtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 3027:
/*!*****************************************************************************!*\
  !*** ./src/app/taetigkeit/details/banken-dialog/banken-dialog.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BankenDialogComponent": () => (/* binding */ BankenDialogComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ 5139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _services_gsp_translation_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/gsp-translation-service.service */ 9791);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 3935);










function BankenDialogComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "div", 12)(2, "p", 6)(3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Eine\nfundierte und rechtssichere Finanzierung von Unternehmen spielt eine\nentscheidende Rolle f\u00FCr deren Erfolg, sei es in Form von Kapitalerh\u00F6hungen,\nKredit- und Mezzaninfinanzierungen oder aber auch im Rahmen eines\nCrowdfunding-Projekts. Durch unsere rechtliche, aber auch\nbetriebswirtschaftliche Expertise bieten wir Ihnen die n\u00F6tige Unterst\u00FCtzung\nnicht nur in Sachen Finanzierung, sondern auch bei B\u00F6rseng\u00E4ngen und allgemein\nbei einschl\u00E4gigen Vertragsgestaltungen.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 14)(6, "span", 15)(7, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 18)(12, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Bankvertragsrecht");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p", 14)(16, "span", 20)(17, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Beratung und Vertretung von Banken und\nFinanzdienstleistern gegen\u00FCber den Aufsichtsbeh\u00F6rden");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p", 14)(24, "span", 20)(25, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Unterst\u00FCtzung bei der Erf\u00FCllung\neinschl\u00E4giger Transparenzvorschriften");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "p", 14)(32, "span", 20)(33, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Durchf\u00FChrung von\nEigent\u00FCmerkontroll-Verfahren");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "p", 14)(40, "span", 20)(41, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Beratung bei Finanzierungen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "p", 21)(48, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} }
function BankenDialogComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "div", 12)(2, "p", 6)(3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "In-depth and legally secure financing of companies\nplays a decisive role in their success, be it in the form of capital increases,\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "loan");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " and mezzanine financing or in the context of a\ncrowdfunding project. Thanks to our legal and business expertise, we can offer\nyou the necessary support not only in matters of financing, but also in IPOs\nand generally in the drafting of relevant contracts.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 14)(9, "span", 15)(10, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Banking contract law");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p", 14)(17, "span", 15)(18, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Advising and representing banks and financial service\nproviders vis-\u00E0-vis supervisory authorities");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p", 14)(25, "span", 15)(26, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Assistance in compliance with relevant transparency\nregulations");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "p", 14)(33, "span", 23)(34, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Implementation of owner control procedures");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "p", 14)(41, "span", 23)(42, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Advice on financing transactions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} }
class BankenDialogComponent {
    constructor(dialog, gpsTS) {
        this.dialog = dialog;
        this.gpsTS = gpsTS;
        this.faXmark = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faXmark;
    }
    openDialog() {
    }
    onClose() {
        this.dialog.closeAll();
    }
    ngAfterViewInit() {
        jquery__WEBPACK_IMPORTED_MODULE_0__.find(".mat-card-header-text")[0].style.width = "100%";
    }
}
BankenDialogComponent.ɵfac = function BankenDialogComponent_Factory(t) { return new (t || BankenDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_gsp_translation_service_service__WEBPACK_IMPORTED_MODULE_1__.GspTranslationServiceService)); };
BankenDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BankenDialogComponent, selectors: [["app-banken-dialog"]], decls: 19, vars: 9, consts: [["mat-dialog-content", "", 1, "gspmatdialogcontent"], ["matdialogcontent", ""], [1, "dialog-card"], ["mat-card-avatar", "", 1, "dialog-header"], [2, "width", "100%"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], [1, "MsoNormalIndent"], ["lang", "EN-US", 2, "font-size", "14.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif", "color", "#004439"], [1, "normal", 3, "title", "click"], ["size", "xs", 3, "icon"], [2, "margin-left", "20px", "overflow", "hidden"], [4, "ngIf"], [1, "WordSection1"], [2, "font-size", "12.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif", "mso-bidi-font-family", "Times New Roman"], [1, "MsoNormalIndent", 2, "margin-top", "0cm", "margin-right", "0cm", "margin-bottom", "0cm", "margin-left", "64.05pt", "mso-add-space", "auto", "text-indent", "-17.85pt", "mso-list", "l0 level1 lfo1"], ["lang", "EN-US", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "Wingdings", "mso-fareast-font-family", "Wingdings", "mso-bidi-font-family", "Wingdings", "mso-ansi-language", "EN-US"], [2, "mso-list", "Ignore"], [2, "font", "7.0pt \"Times New Roman\""], [1, "SpellE"], ["lang", "EN-US", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif", "mso-bidi-font-family", "Times New Roman", "mso-ansi-language", "EN-US"], [2, "font-size", "12.0pt", "line-height", "115%", "font-family", "Wingdings", "mso-fareast-font-family", "Wingdings", "mso-bidi-font-family", "Wingdings"], [1, "MsoNormal"], [1, "GramE"], [2, "font-family", "Wingdings", "mso-fareast-font-family", "Wingdings", "mso-bidi-font-family", "Wingdings"]], template: function BankenDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1)(2, "mat-card", 2)(3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-card-title", 4)(6, "span", 5)(7, "p", 6)(8, "span", 7)(9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span")(14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BankenDialogComponent_Template_button_click_14_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-card-content", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, BankenDialogComponent_span_17_Template, 50, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, BankenDialogComponent_span_18_Template, 48, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 7, "BANKEN")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.gpsTS.isGerman() ? "schliessen" : "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faXmark);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.gpsTS.isGerman());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.gpsTS.isGerman());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardAvatar, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutAlignDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.UpperCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: [".gsptitlefont[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 30px;\n  color: rgb(0, 68, 57);\n}\n\n.gsptextfont[_ngcontent-%COMP%] {\n  font-family: \"Source Sans Pro\", sans-serif;\n  color: black;\n}\n\n.gspcardimage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.gspcardtext[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: rgb(97, 96, 85);\n  top: 100px;\n  opacity: 0.7;\n  margin-top: -45px;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%], .gspcardtext[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.gspcardtext2zeilig[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n  margin-top: -68px;\n}\n\n.gspcardtextperson[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  margin-top: -40px;\n  width: 100%;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n\n.gsptextinimage[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.gsptextinimage_pos[_ngcontent-%COMP%] {\n  margin-left: 5vw;\n  margin-top: 2vh;\n  color: white;\n}\n\n.gspheaderimage[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.gspheadertext[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheadertext[_ngcontent-%COMP%]:hover {\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheaderlanguage[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding-right: 0px;\n  font-size: 0.8rem;\n  padding-top: 12px;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n#deutschID[_ngcontent-%COMP%] {\n  color: black;\n}\n\n#deutschID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n#englishID[_ngcontent-%COMP%] {\n  color: rgb(135, 142, 171);\n}\n\n#englishID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n.gspparagraph[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  margin-top: 0px;\n  background-color: rgb(242, 237, 234);\n}\n\n.gspcolimageleft[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 4px;\n  margin-right: 4px;\n  padding-bottom: 30px;\n}\n\n.gspcolimageright[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 0;\n  padding-bottom: 30px;\n}\n\n.gspcolimagecenter[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 30px;\n}\n\n.gsprouterlinkactive[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%]:hover {\n  color: rgb(102, 143, 136);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gsphochgestellt[_ngcontent-%COMP%] {\n  bottom: 0.25em;\n}\n\n.normal[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: gray;\n  border: none;\n  outline-width: 1px;\n  outline-color: gray;\n}\n\n.mat-card-header-text[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\n.gspkontakt[_ngcontent-%COMP%] {\n  color: #004439;\n}\n\n.gspblackcolor[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.gspteamheader[_ngcontent-%COMP%] {\n  height: 450px;\n  background-image: url('header_team.jpg');\n  background-position: center center;\n  background-size: cover;\n  overflow: hidden;\n  padding-top: 30px;\n}\n\n.gspcardimagepartner[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.gspcardtextpartner[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 66%;\n  margin-top: -48px;\n  margin-left: 17%;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n\n.gspcontainer[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  color: white;\n  width: 100%;\n}\n\n.gspbottomleft[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  bottom: 0px;\n  left: 0%;\n  padding-left: 15px;\n  background-color: rgb(97, 96, 85);\n  opacity: 0.7;\n  text-align: left;\n  font-size: 80%;\n}\n\n.gsptitlefontteam[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 30px;\n  color: white;\n  padding-top: 30px;\n}\n\n.gspteambottomcentered[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  bottom: 0px;\n  background-color: rgb(97, 96, 85);\n  opacity: 0.7;\n  color: white;\n}\n\n.dialog-header[_ngcontent-%COMP%] {\n  background-image: url(\"/src/assets/images/klein/banken.jpg\");\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFwcC5jb21wb25lbnQuc2NzcyIsImJhbmtlbi1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFx0ZWFtXFx0ZWFtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOENBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURHQTtFQUNFLDBDQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLHNCQUFBLEVBQUEsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ0FGOztBREdBO0VBQ0UscUJBQUE7QUNBRjs7QURHQTtFQUNFLHNCQUFBLEVBQUEsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLHNCQUFBLEVBQUEsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UscUJBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDBDQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSx1QkFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7QUNBRjs7QURHQTtFQUNFLHVCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLDBDQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtFQUNBLDBDQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0FDQUY7O0FET0E7RUFDRSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0pGOztBRE9BO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDSkY7O0FET0E7RUFDRSxjQUFBO0FDSkY7O0FEWUE7RUFDRSxZQUFBO0FDVEY7O0FDL0tBO0VBQ0UsYUFBQTtFQUNBLHdDQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QURrTEY7O0FDL0tBO0VBQ0UsV0FBQTtBRGtMRjs7QUNoTEE7RUFDRSxzQkFBQSxFQUFBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBRG1MRjs7QUNoTEE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QURtTEY7O0FDakxBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBRG9MRjs7QUNqTEE7RUFDRSw4Q0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QURvTEY7O0FDL0tBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FEa0xGOztBQS9PQTtFQUNFLDREQUFBO0VBQ0Esc0JBQUE7QUFrUEYiLCJmaWxlIjoiYmFua2VuLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nc3B0aXRsZWZvbnQge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XHJcbn1cclxuXHJcblxyXG4uZ3NwdGV4dGZvbnQge1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5nc3BjYXJkaW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmdzcGNhcmR0ZXh0IHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiA8LS0tLS0tICovXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTcsIDk2LCA4NSk7XHJcbiAgdG9wOiAxMDBweDtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgbWFyZ2luLXRvcDogLTQ1cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hLCAuZ3NwY2FyZHRleHQ6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmdzcGNhcmR0ZXh0MnplaWxpZyB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogPC0tLS0tLSAqL1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XHJcbiAgdG9wOiAxMDBweDtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgbWFyZ2luLXRvcDogLTY4cHg7XHJcbn1cclxuXHJcbi5nc3BjYXJkdGV4dHBlcnNvbiB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogPC0tLS0tLSAqL1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAtNDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xyXG4gIHRvcDogMTAwcHg7XHJcbiAgb3BhY2l0eTogMC41XHJcbn1cclxuXHJcbi5nc3B0ZXh0aW5pbWFnZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZ3NwdGV4dGluaW1hZ2VfcG9zIHtcclxuICBtYXJnaW4tbGVmdDogNXZ3O1xyXG4gIG1hcmdpbi10b3A6IDJ2aDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5nc3BoZWFkZXJpbWFnZSB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZ3NwaGVhZGVydGV4dCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmdzcGhlYWRlcnRleHQ6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwaGVhZGVybGFuZ3VhZ2Uge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4jZGV1dHNjaElEIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbiNkZXV0c2NoSUQ6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMzgsIDUwLCAxMDQpO1xyXG59XHJcblxyXG4jZW5nbGlzaElEIHtcclxuICBjb2xvcjogcmdiKDEzNSwgMTQyLCAxNzEpO1xyXG59XHJcblxyXG4jZW5nbGlzaElEOmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDM4LCA1MCwgMTA0KTtcclxufVxyXG5cclxuLmdzcHBhcmFncmFwaCB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyMzcsIDIzNCk7XHJcbn1cclxuXHJcbi5nc3Bjb2xpbWFnZWxlZnQge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5nc3Bjb2xpbWFnZXJpZ2h0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uZ3NwY29saW1hZ2VjZW50ZXIge1xyXG4gIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmdzcHJvdXRlcmxpbmthY3RpdmUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwZm9vdGVybGluayB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmdzcGZvb3Rlcmxpbms6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMTAyLCAxNDMsIDEzNik7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwaG9jaGdlc3RlbGx0IHtcclxuICBib3R0b206IDAuMjVlbTtcclxufVxyXG5cclxuXHJcbi8vIFRFQU0gRGV0YWlscyBLbGFzc2VuXHJcblxyXG5cclxuLm5vcm1hbHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjpncmF5O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lLXdpZHRoOiAxcHg7XHJcbiAgb3V0bGluZS1jb2xvcjogZ3JheTtcclxufVxyXG5cclxuLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5nc3Brb250YWt0IHtcclxuICBjb2xvcjogIzAwNDQzOTtcclxufVxyXG5cclxuLy8uZ3NwbWF0ZGlhbG9nY29udGVudCB7XHJcbi8vICAmOmV4dGVuZCgubWF0LWRpYWxvZy1jb250ZW50KTtcclxuLy8gIG1heC1oZWlnaHQ6IDc1dmg7XHJcbi8vfVxyXG5cclxuLmdzcGJsYWNrY29sb3Ige1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4iLCJAaW1wb3J0IFwic3JjL2FwcC90ZWFtL3RlYW0uY29tcG9uZW50XCI7XHJcbi5kaWFsb2ctaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zcmMvYXNzZXRzL2ltYWdlcy9rbGVpbi9iYW5rZW4uanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4iLCJAaW1wb3J0IFwiLi4vYXBwLmNvbXBvbmVudC5zY3NzXCI7XHJcblxyXG4uZ3NwdGVhbWhlYWRlciB7XHJcbiAgaGVpZ2h0OiA0NTBweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2hlYWRlci9oZWFkZXJfdGVhbS5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5nc3BjYXJkaW1hZ2VwYXJ0bmVyIHtcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcbi5nc3BjYXJkdGV4dHBhcnRuZXIge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIDwtLS0tLS0gKi9cclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgd2lkdGg6IDY2JTtcclxuICBtYXJnaW4tdG9wOiAtNDhweDtcclxuICBtYXJnaW4tbGVmdDogMTclO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcclxuICB0b3A6IDEwMHB4O1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLmdzcGNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmdzcGJvdHRvbWxlZnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3R0b206MHB4O1xyXG4gIGxlZnQ6IDAlO1xyXG4gIHBhZGRpbmctbGVmdDoxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5Nyw5Niw4NSk7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1zaXplOiA4MCU7XHJcbn1cclxuXHJcbi5nc3B0aXRsZWZvbnR0ZWFtIHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmdzcHRlYW1ib3R0b21jZW50ZXJlZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGJvdHRvbTowcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LDk2LDg1KTtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 8834:
/*!***************************************************************************************!*\
  !*** ./src/app/taetigkeit/details/datenschutz-dialog/datenschutz-dialog.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatenschutzDialogComponent": () => (/* binding */ DatenschutzDialogComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ 5139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _services_gsp_translation_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/gsp-translation-service.service */ 9791);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 3935);










function DatenschutzDialogComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "div", 12)(2, "p", 6)(3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Der Schutz von personenbezogenen Daten kommt,\nnicht zuletzt auch aufgrund der seit 25. Mai 2018 in Geltung stehenden\nDatenschutz-Grundverordnung, eine bedeutende Rolle im Unternehmensgef\u00FCge zu. Die\ndrohenden hohen Strafen bei Verst\u00F6\u00DFen gegen Datenschutzbestimmungen machen\neinen gesetzeskonformen Umgang mit Kunden-, Mitarbeiter- und Lieferantendaten unumg\u00E4nglich.\nDaneben stellen Marken-, Patent- und Urheberrechte als geistiges Eigentum einen\nbetr\u00E4chtlichen Wert f\u00FCr Unternehmen dar. Dies insbesondere auch im Zusammenhang\nmit IT-Unternehmen und von diesen entwickelten Technologien. Ein entsprechender\nSchutz, eine rechtssichere Lizensierung und die wirksame Verteidigung des\ngeistigen Eigentums kommt dabei eine entscheidende Bedeutung zu. Gerne\nunterst\u00FCtzen und beraten wir Sie durch unsere Expertise und Erfahrung umfassend\nin diesbez\u00FCglichen Belangen.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 14)(6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Datenschutzerkl\u00E4rungen,\nEinwilligungserkl\u00E4rungen und sonstigen datenschutzrechtlichen Dokumenten");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 14)(13, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Auftragsverarbeitervertr\u00E4ge\nund Vertr\u00E4ge gemeinsamer Verantwortlicher");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p", 14)(20, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "grenz\u00FCberschreitenden\nDatentransfers");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p", 14)(27, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Registrierungen\nvon Marken");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "p", 14)(34, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Lizenzvertr\u00E4ge");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "p", 14)(41, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Verteidigung\nvon geistigem Eigentum");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "p", 17)(48, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} }
function DatenschutzDialogComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "div", 12)(2, "p", 6)(3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "The protection of personal data plays an\nimportant role in the corporate structure, especially due to the General Data\nProtection Regulation, which has been in force since May 25, 2018. The threat\nof high penalties for violations of data protection regulations makes it\nessential to handle customer, employee and supplier data in compliance with the\nlaw. In addition, trademarks, patents and copyrights as intellectual property\nrepresent a considerable value for companies. This is especially true in\nconnection with IT companies and the technologies they have developed. Appropriate\nprotection, legally secure licensing and effective defense of intellectual\nproperty are of crucial importance. We will be pleased to provide you with\ncomprehensive support and advice in these matters based on our expertise and\nexperience.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 14)(6, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Data\nprotection declarations, consent forms and other data protection documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 14)(13, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Data\nprocessor and joint controller contracts");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p", 14)(20, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Cross-border\ndata transfers");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p", 14)(27, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Trademark\nregistrations");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "p", 14)(34, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "License\nagreements");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "p", 14)(41, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Intellectual\nproperty defense");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "p", 17)(48, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} }
class DatenschutzDialogComponent {
    constructor(dialog, gpsTS) {
        this.dialog = dialog;
        this.gpsTS = gpsTS;
        this.faXmark = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faXmark;
    }
    openDialog() {
    }
    onClose() {
        this.dialog.closeAll();
    }
    ngAfterViewInit() {
        jquery__WEBPACK_IMPORTED_MODULE_0__.find(".mat-card-header-text")[0].style.width = "100%";
    }
}
DatenschutzDialogComponent.ɵfac = function DatenschutzDialogComponent_Factory(t) { return new (t || DatenschutzDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_gsp_translation_service_service__WEBPACK_IMPORTED_MODULE_1__.GspTranslationServiceService)); };
DatenschutzDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DatenschutzDialogComponent, selectors: [["app-datenschutz-dialog"]], decls: 19, vars: 9, consts: [["mat-dialog-content", "", 1, "gspmatdialogcontent"], ["matdialogcontent", ""], [1, "dialog-card"], ["mat-card-avatar", "", 1, "dialog-header"], [2, "width", "100%"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], [1, "MsoNormalIndent"], ["lang", "EN-US", 2, "font-size", "14.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif", "color", "#004439"], [1, "normal", 3, "title", "click"], ["size", "xs", 3, "icon"], [2, "margin-left", "20px", "overflow", "hidden"], [4, "ngIf"], [1, "WordSection1"], ["lang", "DE-AT", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif"], [1, "MsoNormalIndent", 2, "margin-top", "0cm", "margin-right", "0cm", "margin-bottom", "0cm", "margin-left", "64.05pt", "text-indent", "-17.85pt"], ["lang", "DE-AT", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "Wingdings"], [2, "font", "7.0pt \"Times New Roman\""], [1, "MsoNormal"], ["lang", "DE-AT"], ["lang", "EN-US", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif"], ["lang", "EN-US", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "Wingdings"]], template: function DatenschutzDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1)(2, "mat-card", 2)(3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-card-title", 4)(6, "span", 5)(7, "p", 6)(8, "span", 7)(9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span")(14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DatenschutzDialogComponent_Template_button_click_14_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-card-content", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, DatenschutzDialogComponent_span_17_Template, 50, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, DatenschutzDialogComponent_span_18_Template, 50, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 7, "DATENSCHUTZIPIT")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.gpsTS.isGerman() ? "schliessen" : "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faXmark);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.gpsTS.isGerman());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.gpsTS.isGerman());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardAvatar, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutAlignDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.UpperCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: [".gsptitlefont[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 30px;\n  color: rgb(0, 68, 57);\n}\n\n.gsptextfont[_ngcontent-%COMP%] {\n  font-family: \"Source Sans Pro\", sans-serif;\n  color: black;\n}\n\n.gspcardimage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.gspcardtext[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: rgb(97, 96, 85);\n  top: 100px;\n  opacity: 0.7;\n  margin-top: -45px;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%], .gspcardtext[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.gspcardtext2zeilig[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n  margin-top: -68px;\n}\n\n.gspcardtextperson[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  margin-top: -40px;\n  width: 100%;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n\n.gsptextinimage[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.gsptextinimage_pos[_ngcontent-%COMP%] {\n  margin-left: 5vw;\n  margin-top: 2vh;\n  color: white;\n}\n\n.gspheaderimage[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.gspheadertext[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheadertext[_ngcontent-%COMP%]:hover {\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheaderlanguage[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding-right: 0px;\n  font-size: 0.8rem;\n  padding-top: 12px;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n#deutschID[_ngcontent-%COMP%] {\n  color: black;\n}\n\n#deutschID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n#englishID[_ngcontent-%COMP%] {\n  color: rgb(135, 142, 171);\n}\n\n#englishID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n.gspparagraph[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  margin-top: 0px;\n  background-color: rgb(242, 237, 234);\n}\n\n.gspcolimageleft[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 4px;\n  margin-right: 4px;\n  padding-bottom: 30px;\n}\n\n.gspcolimageright[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 0;\n  padding-bottom: 30px;\n}\n\n.gspcolimagecenter[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 30px;\n}\n\n.gsprouterlinkactive[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%]:hover {\n  color: rgb(102, 143, 136);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gsphochgestellt[_ngcontent-%COMP%] {\n  bottom: 0.25em;\n}\n\n.normal[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: gray;\n  border: none;\n  outline-width: 1px;\n  outline-color: gray;\n}\n\n.mat-card-header-text[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\n.gspkontakt[_ngcontent-%COMP%] {\n  color: #004439;\n}\n\n.gspblackcolor[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.gspteamheader[_ngcontent-%COMP%] {\n  height: 450px;\n  background-image: url('header_team.jpg');\n  background-position: center center;\n  background-size: cover;\n  overflow: hidden;\n  padding-top: 30px;\n}\n\n.gspcardimagepartner[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.gspcardtextpartner[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 66%;\n  margin-top: -48px;\n  margin-left: 17%;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n\n.gspcontainer[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  color: white;\n  width: 100%;\n}\n\n.gspbottomleft[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  bottom: 0px;\n  left: 0%;\n  padding-left: 15px;\n  background-color: rgb(97, 96, 85);\n  opacity: 0.7;\n  text-align: left;\n  font-size: 80%;\n}\n\n.gsptitlefontteam[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 30px;\n  color: white;\n  padding-top: 30px;\n}\n\n.gspteambottomcentered[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  bottom: 0px;\n  background-color: rgb(97, 96, 85);\n  opacity: 0.7;\n  color: white;\n}\n\n.dialog-header[_ngcontent-%COMP%] {\n  background-image: url(\"/src/assets/images/klein/zivilprozess.jpg\");\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFwcC5jb21wb25lbnQuc2NzcyIsImRhdGVuc2NodXR6LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXHRlYW1cXHRlYW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4Q0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREdBO0VBQ0UsMENBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0Usc0JBQUEsRUFBQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDQUY7O0FER0E7RUFDRSxxQkFBQTtBQ0FGOztBREdBO0VBQ0Usc0JBQUEsRUFBQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0Usc0JBQUEsRUFBQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLDBDQUFBO0FDQUY7O0FER0E7RUFDRSxxQkFBQTtFQUNBLDBDQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMENBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7QUNBRjs7QURHQTtFQUNFLHVCQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtBQ0FGOztBREdBO0VBQ0UsdUJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLDBDQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsMENBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0VBQ0EsMENBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7QUNBRjs7QURPQTtFQUNFLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDSkY7O0FET0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNKRjs7QURPQTtFQUNFLGNBQUE7QUNKRjs7QURZQTtFQUNFLFlBQUE7QUNURjs7QUMvS0E7RUFDRSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBRGtMRjs7QUMvS0E7RUFDRSxXQUFBO0FEa0xGOztBQ2hMQTtFQUNFLHNCQUFBLEVBQUEsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FEbUxGOztBQ2hMQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBRG1MRjs7QUNqTEE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FEb0xGOztBQ2pMQTtFQUNFLDhDQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBRG9MRjs7QUMvS0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QURrTEY7O0FBL09BO0VBQ0Usa0VBQUE7RUFDQSxzQkFBQTtBQWtQRiIsImZpbGUiOiJkYXRlbnNjaHV0ei1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3NwdGl0bGVmb250IHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogcmdiKDAsNjgsNTcpO1xyXG59XHJcblxyXG5cclxuLmdzcHRleHRmb250IHtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uZ3NwY2FyZGltYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5nc3BjYXJkdGV4dCB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogPC0tLS0tLSAqL1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LCA5NiwgODUpO1xyXG4gIHRvcDogMTAwcHg7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIG1hcmdpbi10b3A6IC00NXB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYSwgLmdzcGNhcmR0ZXh0OmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5nc3BjYXJkdGV4dDJ6ZWlsaWcge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIDwtLS0tLS0gKi9cclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xyXG4gIHRvcDogMTAwcHg7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIG1hcmdpbi10b3A6IC02OHB4O1xyXG59XHJcblxyXG4uZ3NwY2FyZHRleHRwZXJzb24ge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIDwtLS0tLS0gKi9cclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogLTQwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDFweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcclxuICB0b3A6IDEwMHB4O1xyXG4gIG9wYWNpdHk6IDAuNVxyXG59XHJcblxyXG4uZ3NwdGV4dGluaW1hZ2Uge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmdzcHRleHRpbmltYWdlX3BvcyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDV2dztcclxuICBtYXJnaW4tdG9wOiAydmg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZ3NwaGVhZGVyaW1hZ2Uge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmdzcGhlYWRlcnRleHQge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5nc3BoZWFkZXJ0ZXh0OmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDAsNjgsNTcpO1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmdzcGhlYWRlcmxhbmd1YWdlIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuI2RldXRzY2hJRCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4jZGV1dHNjaElEOmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDM4LCA1MCwgMTA0KTtcclxufVxyXG5cclxuI2VuZ2xpc2hJRCB7XHJcbiAgY29sb3I6IHJnYigxMzUsIDE0MiwgMTcxKTtcclxufVxyXG5cclxuI2VuZ2xpc2hJRDpob3ZlciB7XHJcbiAgY29sb3I6IHJnYigzOCwgNTAsIDEwNCk7XHJcbn1cclxuXHJcbi5nc3BwYXJhZ3JhcGgge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogNTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MiwgMjM3LCAyMzQpO1xyXG59XHJcblxyXG4uZ3NwY29saW1hZ2VsZWZ0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgcGFkZGluZy1yaWdodDogNHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uZ3NwY29saW1hZ2VyaWdodCB7XHJcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmdzcGNvbGltYWdlY2VudGVyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5nc3Byb3V0ZXJsaW5rYWN0aXZlIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogcmdiKDAsNjgsNTcpO1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmdzcGZvb3Rlcmxpbmsge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5nc3Bmb290ZXJsaW5rOmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDEwMiwgMTQzLCAxMzYpO1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmdzcGhvY2hnZXN0ZWxsdCB7XHJcbiAgYm90dG9tOiAwLjI1ZW07XHJcbn1cclxuXHJcblxyXG4vLyBURUFNIERldGFpbHMgS2xhc3NlblxyXG5cclxuXHJcbi5ub3JtYWx7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6Z3JheTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZS13aWR0aDogMXB4O1xyXG4gIG91dGxpbmUtY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1oZWFkZXItdGV4dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZ3Nwa29udGFrdCB7XHJcbiAgY29sb3I6ICMwMDQ0Mzk7XHJcbn1cclxuXHJcbi8vLmdzcG1hdGRpYWxvZ2NvbnRlbnQge1xyXG4vLyAgJjpleHRlbmQoLm1hdC1kaWFsb2ctY29udGVudCk7XHJcbi8vICBtYXgtaGVpZ2h0OiA3NXZoO1xyXG4vL31cclxuXHJcbi5nc3BibGFja2NvbG9yIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuIiwiQGltcG9ydCBcInNyYy9hcHAvdGVhbS90ZWFtLmNvbXBvbmVudFwiO1xyXG4uZGlhbG9nLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3JjL2Fzc2V0cy9pbWFnZXMva2xlaW4veml2aWxwcm96ZXNzLmpwZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuIiwiQGltcG9ydCBcIi4uL2FwcC5jb21wb25lbnQuc2Nzc1wiO1xyXG5cclxuLmdzcHRlYW1oZWFkZXIge1xyXG4gIGhlaWdodDogNDUwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXIvaGVhZGVyX3RlYW0uanBnXCIpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uZ3NwY2FyZGltYWdlcGFydG5lciB7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG4uZ3NwY2FyZHRleHRwYXJ0bmVyIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiA8LS0tLS0tICovXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIHdpZHRoOiA2NiU7XHJcbiAgbWFyZ2luLXRvcDogLTQ4cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE3JTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XHJcbiAgdG9wOiAxMDBweDtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5nc3Bjb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5nc3Bib3R0b21sZWZ0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm90dG9tOjBweDtcclxuICBsZWZ0OiAwJTtcclxuICBwYWRkaW5nLWxlZnQ6MTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTcsOTYsODUpO1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogODAlO1xyXG59XHJcblxyXG4uZ3NwdGl0bGVmb250dGVhbSB7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5nc3B0ZWFtYm90dG9tY2VudGVyZWQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBib3R0b206MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5Nyw5Niw4NSk7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 6898:
/*!*****************************************************************************************************!*\
  !*** ./src/app/taetigkeit/details/gesellschaftsrecht-dialog/gesellschaftsrecht-dialog.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GesellschaftsrechtDialogComponent": () => (/* binding */ GesellschaftsrechtDialogComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ 5139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _services_gsp_translation_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/gsp-translation-service.service */ 9791);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 3935);










function GesellschaftsrechtDialogComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "div", 12)(2, "p", 6)(3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Gesellschaftsgr\u00FCndungen\nund die Wahl der richtigen Rechtsform stehen am Beginn jedes Unternehmens. Dar\u00FCber\nhinaus bedarf es auch im t\u00E4glichen Gesch\u00E4ft einer fundierten rechtlichen\nBeratung und Begleitung. Wir unterst\u00FCtzen Sie gerne bei der Setzung des\nrichtigen Fundaments f\u00FCr ihre unternehmerische T\u00E4tigkeit sowie bei der\nfortlaufenden gesellschaftsrechtlichen Umsetzung.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 14)(6, "span", 15)(7, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Rechtsformwahl und Gr\u00FCndungen von\nKapital- und Personengesellschaften");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 18)(14, "span", 19)(15, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Ausarbeitung\nGesellschaftsvertr\u00E4ge und Satzungen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p", 18)(22, "span", 19)(23, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Gesellschafter- /Gesch\u00E4ftsf\u00FChrerwechsel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p", 14)(30, "span", 15)(31, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Sitzverlegungen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "p", 14)(38, "span", 15)(39, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Kapitalma\u00DFnahmen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "p", 18)(46, "span", 19)(47, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Vorbereitung\nvon General- und Hauptversammlungen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "p", 14)(54, "span", 15)(55, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Ausarbeitung Syndikatsvertr\u00E4ge");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "p", 14)(62, "span", 15)(63, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Beratung von Gesellschaftsorganen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "p", 14)(70, "span", 15)(71, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "Strategische Unterst\u00FCtzung von\nMinderheitsgesellschaftern");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "p", 21)(78, "span", 15)(79, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "Gesellschaftsrechtliche\nNachfolgeregelungen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "p", 21)(86, "span", 15)(87, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "Restrukturierung von Kapital- und\nPersonengesellschaften");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "p", 21)(94, "span", 15)(95, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "Konfliktl\u00F6sung");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "p", 21)(102, "span", 15)(103, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "Streitiges Gesellschaftsrecht");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "p", 14)(110, "span", 15)(111, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "Liquidationen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "p", 22)(118, "span", 15)(119, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "span", 23)(124, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, "Uvm");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](126, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "p", 24)(128, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} }
function GesellschaftsrechtDialogComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "div", 12)(2, "p", 6)(3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Company formations and the choice of the right legal\nform are at the beginning of every business. Furthermore, sound legal advice\nand support are required in day-to-day business. We are happy to support you in\nsetting the right foundation for your entrepreneurial activity as well as in\nthe ongoing implementation.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 14)(6, "span", 26)(7, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Choice of legal form and formation of corporations and\npartnerships");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 14)(14, "span", 26)(15, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Preparation of partnership agreements and articles of\nassociation");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p", 14)(22, "span", 15)(23, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Change ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "of");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "shareholders");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "managing");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "directors");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "p", 14)(39, "span", 15)(40, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "span", 23)(45, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Relocation");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "span", 13)(48, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "of");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, " registered\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "offices");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "p", 14)(54, "span", 15)(55, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Capital ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "measures");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "p", 14)(64, "span", 26)(65, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Preparation of shareholders' meetings");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "p", 14)(72, "span", 15)(73, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "span", 23)(78, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "Preparation");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "span", 13)(81, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "of");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "syndicate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "agreements");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "p", 14)(88, "span", 15)(89, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "span", 23)(94, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "Advice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "span", 13)(97, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "to");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "corporate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "bodies");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "p", 14)(104, "span", 15)(105, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "Strategic support ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "of");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, "minority");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "shareholders");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "p", 14)(118, "span", 15)(119, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "span", 23)(124, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, "Succession");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "span", 13)(127, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "planning");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](130, "under");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](132, "corporate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, "law");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "p", 14)(136, "span", 15)(137, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](138, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](140, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "span", 23)(142, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, "Restructuring");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "span", 13)(145, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, "of");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](148, "corporations");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](149, " and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](151, "partnerships");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "p", 14)(153, "span", 15)(154, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](155, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](157, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](159, "Conflict ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](161, "resolution");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "p", 14)(163, "span", 15)(164, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](165, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](167, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "span", 23)(169, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](170, "Disputed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "span", 13)(172, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](173, "corporate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](175, "law");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "p", 14)(177, "span", 15)(178, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](179, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](181, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](182, "span", 23)(183, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](184, "Liquidations");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](185, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](186, "p", 22)(187, "span", 15)(188, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](189, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](190, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](191, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](192, "span", 23)(193, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](194, "Etc");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](195, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](196, "p", 24)(197, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](198, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} }
class GesellschaftsrechtDialogComponent {
    constructor(dialog, gpsTS) {
        this.dialog = dialog;
        this.gpsTS = gpsTS;
        this.faXmark = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faXmark;
    }
    openDialog() {
    }
    onClose() {
        this.dialog.closeAll();
    }
    ngAfterViewInit() {
        jquery__WEBPACK_IMPORTED_MODULE_0__.find(".mat-card-header-text")[0].style.width = "100%";
    }
}
GesellschaftsrechtDialogComponent.ɵfac = function GesellschaftsrechtDialogComponent_Factory(t) { return new (t || GesellschaftsrechtDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_gsp_translation_service_service__WEBPACK_IMPORTED_MODULE_1__.GspTranslationServiceService)); };
GesellschaftsrechtDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GesellschaftsrechtDialogComponent, selectors: [["app-gesellschaftsrecht-dialog"]], decls: 19, vars: 9, consts: [["mat-dialog-content", "", 1, "gspmatdialogcontent"], ["matdialogcontent", ""], [1, "dialog-card"], ["mat-card-avatar", "", 1, "dialog-header"], [2, "width", "100%"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], [1, "MsoNormalIndent"], ["lang", "EN-US", 2, "font-size", "14.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif", "color", "#004439"], [1, "normal", 3, "title", "click"], ["size", "xs", 3, "icon"], [2, "margin-left", "20px", "overflow", "hidden"], [4, "ngIf"], [1, "WordSection1"], [2, "font-size", "12.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif", "mso-bidi-font-family", "Times New Roman"], [1, "MsoNormalIndent", 2, "margin-top", "0cm", "margin-right", "0cm", "margin-bottom", "0cm", "margin-left", "64.05pt", "mso-add-space", "auto", "text-indent", "-17.85pt", "mso-list", "l0 level1 lfo1"], [2, "font-size", "12.0pt", "line-height", "115%", "font-family", "Wingdings", "mso-fareast-font-family", "Wingdings", "mso-bidi-font-family", "Wingdings"], [2, "mso-list", "Ignore"], [2, "font", "7.0pt \"Times New Roman\""], [1, "MsoListParagraph", 2, "margin-top", "0cm", "margin-right", "0cm", "margin-bottom", "0cm", "margin-left", "64.05pt", "mso-add-space", "auto", "text-indent", "-17.85pt", "mso-list", "l0 level1 lfo1"], ["lang", "DE-AT", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "Wingdings", "mso-fareast-font-family", "Wingdings", "mso-bidi-font-family", "Wingdings"], ["lang", "DE-AT", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif"], [1, "MsoNormalIndent", 2, "margin-top", "0cm", "margin-right", "0cm", "margin-bottom", "0cm", "margin-left", "64.35pt", "mso-add-space", "auto", "text-indent", "-18.0pt", "mso-list", "l0 level1 lfo1"], [1, "MsoNormalIndent", 2, "margin-left", "64.35pt", "text-indent", "-18.0pt", "mso-list", "l0 level1 lfo1"], [1, "SpellE"], [1, "MsoNormal"], ["lang", "EN-US", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif", "mso-bidi-font-family", "Times New Roman", "mso-ansi-language", "EN-US"], ["lang", "EN-US", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "Wingdings", "mso-fareast-font-family", "Wingdings", "mso-bidi-font-family", "Wingdings", "mso-ansi-language", "EN-US"]], template: function GesellschaftsrechtDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1)(2, "mat-card", 2)(3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-card-title", 4)(6, "span", 5)(7, "p", 6)(8, "span", 7)(9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span")(14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GesellschaftsrechtDialogComponent_Template_button_click_14_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-card-content", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, GesellschaftsrechtDialogComponent_span_17_Template, 130, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, GesellschaftsrechtDialogComponent_span_18_Template, 199, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 7, "GESELLSCHAFTSRECHT")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.gpsTS.isGerman() ? "schliessen" : "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faXmark);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.gpsTS.isGerman());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.gpsTS.isGerman());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardAvatar, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutAlignDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.UpperCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: [".gsptitlefont[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 30px;\n  color: rgb(0, 68, 57);\n}\n\n.gsptextfont[_ngcontent-%COMP%] {\n  font-family: \"Source Sans Pro\", sans-serif;\n  color: black;\n}\n\n.gspcardimage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.gspcardtext[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: rgb(97, 96, 85);\n  top: 100px;\n  opacity: 0.7;\n  margin-top: -45px;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%], .gspcardtext[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.gspcardtext2zeilig[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n  margin-top: -68px;\n}\n\n.gspcardtextperson[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  margin-top: -40px;\n  width: 100%;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n\n.gsptextinimage[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.gsptextinimage_pos[_ngcontent-%COMP%] {\n  margin-left: 5vw;\n  margin-top: 2vh;\n  color: white;\n}\n\n.gspheaderimage[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.gspheadertext[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheadertext[_ngcontent-%COMP%]:hover {\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheaderlanguage[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding-right: 0px;\n  font-size: 0.8rem;\n  padding-top: 12px;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n#deutschID[_ngcontent-%COMP%] {\n  color: black;\n}\n\n#deutschID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n#englishID[_ngcontent-%COMP%] {\n  color: rgb(135, 142, 171);\n}\n\n#englishID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n.gspparagraph[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  margin-top: 0px;\n  background-color: rgb(242, 237, 234);\n}\n\n.gspcolimageleft[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 4px;\n  margin-right: 4px;\n  padding-bottom: 30px;\n}\n\n.gspcolimageright[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 0;\n  padding-bottom: 30px;\n}\n\n.gspcolimagecenter[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 30px;\n}\n\n.gsprouterlinkactive[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%]:hover {\n  color: rgb(102, 143, 136);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gsphochgestellt[_ngcontent-%COMP%] {\n  bottom: 0.25em;\n}\n\n.normal[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: gray;\n  border: none;\n  outline-width: 1px;\n  outline-color: gray;\n}\n\n.mat-card-header-text[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\n.gspkontakt[_ngcontent-%COMP%] {\n  color: #004439;\n}\n\n.gspblackcolor[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.gspteamheader[_ngcontent-%COMP%] {\n  height: 450px;\n  background-image: url('header_team.jpg');\n  background-position: center center;\n  background-size: cover;\n  overflow: hidden;\n  padding-top: 30px;\n}\n\n.gspcardimagepartner[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.gspcardtextpartner[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 66%;\n  margin-top: -48px;\n  margin-left: 17%;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n\n.gspcontainer[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  color: white;\n  width: 100%;\n}\n\n.gspbottomleft[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  bottom: 0px;\n  left: 0%;\n  padding-left: 15px;\n  background-color: rgb(97, 96, 85);\n  opacity: 0.7;\n  text-align: left;\n  font-size: 80%;\n}\n\n.gsptitlefontteam[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 30px;\n  color: white;\n  padding-top: 30px;\n}\n\n.gspteambottomcentered[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  bottom: 0px;\n  background-color: rgb(97, 96, 85);\n  opacity: 0.7;\n  color: white;\n}\n\n.dialog-header[_ngcontent-%COMP%] {\n  background-image: url(\"/src/assets/images/klein/gesellschaftsrecht.jpg\");\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFwcC5jb21wb25lbnQuc2NzcyIsImdlc2VsbHNjaGFmdHNyZWNodC1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFx0ZWFtXFx0ZWFtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOENBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURHQTtFQUNFLDBDQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLHNCQUFBLEVBQUEsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ0FGOztBREdBO0VBQ0UscUJBQUE7QUNBRjs7QURHQTtFQUNFLHNCQUFBLEVBQUEsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLHNCQUFBLEVBQUEsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UscUJBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDBDQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSx1QkFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7QUNBRjs7QURHQTtFQUNFLHVCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLDBDQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtFQUNBLDBDQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0FDQUY7O0FET0E7RUFDRSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0pGOztBRE9BO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDSkY7O0FET0E7RUFDRSxjQUFBO0FDSkY7O0FEWUE7RUFDRSxZQUFBO0FDVEY7O0FDL0tBO0VBQ0UsYUFBQTtFQUNBLHdDQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QURrTEY7O0FDL0tBO0VBQ0UsV0FBQTtBRGtMRjs7QUNoTEE7RUFDRSxzQkFBQSxFQUFBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBRG1MRjs7QUNoTEE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QURtTEY7O0FDakxBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBRG9MRjs7QUNqTEE7RUFDRSw4Q0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QURvTEY7O0FDL0tBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FEa0xGOztBQS9PQTtFQUNFLHdFQUFBO0VBQ0Esc0JBQUE7QUFrUEYiLCJmaWxlIjoiZ2VzZWxsc2NoYWZ0c3JlY2h0LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nc3B0aXRsZWZvbnQge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XHJcbn1cclxuXHJcblxyXG4uZ3NwdGV4dGZvbnQge1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5nc3BjYXJkaW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmdzcGNhcmR0ZXh0IHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiA8LS0tLS0tICovXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTcsIDk2LCA4NSk7XHJcbiAgdG9wOiAxMDBweDtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgbWFyZ2luLXRvcDogLTQ1cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hLCAuZ3NwY2FyZHRleHQ6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmdzcGNhcmR0ZXh0MnplaWxpZyB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogPC0tLS0tLSAqL1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XHJcbiAgdG9wOiAxMDBweDtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgbWFyZ2luLXRvcDogLTY4cHg7XHJcbn1cclxuXHJcbi5nc3BjYXJkdGV4dHBlcnNvbiB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogPC0tLS0tLSAqL1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAtNDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xyXG4gIHRvcDogMTAwcHg7XHJcbiAgb3BhY2l0eTogMC41XHJcbn1cclxuXHJcbi5nc3B0ZXh0aW5pbWFnZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZ3NwdGV4dGluaW1hZ2VfcG9zIHtcclxuICBtYXJnaW4tbGVmdDogNXZ3O1xyXG4gIG1hcmdpbi10b3A6IDJ2aDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5nc3BoZWFkZXJpbWFnZSB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZ3NwaGVhZGVydGV4dCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmdzcGhlYWRlcnRleHQ6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwaGVhZGVybGFuZ3VhZ2Uge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4jZGV1dHNjaElEIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbiNkZXV0c2NoSUQ6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMzgsIDUwLCAxMDQpO1xyXG59XHJcblxyXG4jZW5nbGlzaElEIHtcclxuICBjb2xvcjogcmdiKDEzNSwgMTQyLCAxNzEpO1xyXG59XHJcblxyXG4jZW5nbGlzaElEOmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDM4LCA1MCwgMTA0KTtcclxufVxyXG5cclxuLmdzcHBhcmFncmFwaCB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyMzcsIDIzNCk7XHJcbn1cclxuXHJcbi5nc3Bjb2xpbWFnZWxlZnQge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5nc3Bjb2xpbWFnZXJpZ2h0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uZ3NwY29saW1hZ2VjZW50ZXIge1xyXG4gIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmdzcHJvdXRlcmxpbmthY3RpdmUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwZm9vdGVybGluayB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmdzcGZvb3Rlcmxpbms6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMTAyLCAxNDMsIDEzNik7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwaG9jaGdlc3RlbGx0IHtcclxuICBib3R0b206IDAuMjVlbTtcclxufVxyXG5cclxuXHJcbi8vIFRFQU0gRGV0YWlscyBLbGFzc2VuXHJcblxyXG5cclxuLm5vcm1hbHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjpncmF5O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lLXdpZHRoOiAxcHg7XHJcbiAgb3V0bGluZS1jb2xvcjogZ3JheTtcclxufVxyXG5cclxuLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5nc3Brb250YWt0IHtcclxuICBjb2xvcjogIzAwNDQzOTtcclxufVxyXG5cclxuLy8uZ3NwbWF0ZGlhbG9nY29udGVudCB7XHJcbi8vICAmOmV4dGVuZCgubWF0LWRpYWxvZy1jb250ZW50KTtcclxuLy8gIG1heC1oZWlnaHQ6IDc1dmg7XHJcbi8vfVxyXG5cclxuLmdzcGJsYWNrY29sb3Ige1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4iLCJAaW1wb3J0IFwic3JjL2FwcC90ZWFtL3RlYW0uY29tcG9uZW50XCI7XHJcbi5kaWFsb2ctaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zcmMvYXNzZXRzL2ltYWdlcy9rbGVpbi9nZXNlbGxzY2hhZnRzcmVjaHQuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4iLCJAaW1wb3J0IFwiLi4vYXBwLmNvbXBvbmVudC5zY3NzXCI7XHJcblxyXG4uZ3NwdGVhbWhlYWRlciB7XHJcbiAgaGVpZ2h0OiA0NTBweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2hlYWRlci9oZWFkZXJfdGVhbS5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5nc3BjYXJkaW1hZ2VwYXJ0bmVyIHtcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcbi5nc3BjYXJkdGV4dHBhcnRuZXIge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIDwtLS0tLS0gKi9cclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgd2lkdGg6IDY2JTtcclxuICBtYXJnaW4tdG9wOiAtNDhweDtcclxuICBtYXJnaW4tbGVmdDogMTclO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcclxuICB0b3A6IDEwMHB4O1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLmdzcGNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmdzcGJvdHRvbWxlZnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3R0b206MHB4O1xyXG4gIGxlZnQ6IDAlO1xyXG4gIHBhZGRpbmctbGVmdDoxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5Nyw5Niw4NSk7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1zaXplOiA4MCU7XHJcbn1cclxuXHJcbi5nc3B0aXRsZWZvbnR0ZWFtIHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmdzcHRlYW1ib3R0b21jZW50ZXJlZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGJvdHRvbTowcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LDk2LDg1KTtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 7949:
/*!*********************************************************************************************!*\
  !*** ./src/app/taetigkeit/details/globalmobility-dialog/globalmobility-dialog.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalmobilityDialogComponent": () => (/* binding */ GlobalmobilityDialogComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ 5139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _services_gsp_translation_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/gsp-translation-service.service */ 9791);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 3935);










function GlobalmobilityDialogComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "div", 12)(2, "p", 6)(3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Grenz\u00FCberschreitende\nT\u00E4tigkeiten von Unternehmen erfordern fundierte Beratung insbesondere auch im\nBereich der Arbeitnehmerentsendung und -\u00FCberlassung sowie des Niederlassungs-\nund Aufenthaltsrechts. Mit unserer Expertise unterst\u00FCtzen wir Sie gerne bei der\nUmsetzung diesbez\u00FCglicher Vorhaben. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function GlobalmobilityDialogComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "div", 12)(2, "p", 6)(3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Cross-border activities of companies require\nwell-founded advice, especially ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "in the area of");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " posting\nemployees and personnel leasing as well as the right of establishment and\nresidence. With our expertise, we are happy to support you in the\nimplementation of projects in this regard.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} }
class GlobalmobilityDialogComponent {
    constructor(dialog, gpsTS) {
        this.dialog = dialog;
        this.gpsTS = gpsTS;
        this.faXmark = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faXmark;
    }
    openDialog() {
    }
    onClose() {
        this.dialog.closeAll();
    }
    ngAfterViewInit() {
        jquery__WEBPACK_IMPORTED_MODULE_0__.find(".mat-card-header-text")[0].style.width = "100%";
    }
}
GlobalmobilityDialogComponent.ɵfac = function GlobalmobilityDialogComponent_Factory(t) { return new (t || GlobalmobilityDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_gsp_translation_service_service__WEBPACK_IMPORTED_MODULE_1__.GspTranslationServiceService)); };
GlobalmobilityDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GlobalmobilityDialogComponent, selectors: [["app-globalmobility-dialog"]], decls: 19, vars: 9, consts: [["mat-dialog-content", "", 1, "gspmatdialogcontent"], ["matdialogcontent", ""], [1, "dialog-card"], ["mat-card-avatar", "", 1, "dialog-header"], [2, "width", "100%"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], [1, "MsoNormalIndent"], ["lang", "EN-US", 2, "font-size", "14.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif", "color", "#004439"], [1, "normal", 3, "title", "click"], ["size", "xs", 3, "icon"], [2, "margin-left", "20px", "overflow", "hidden"], [4, "ngIf"], [1, "WordSection1"], [2, "font-size", "12.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif", "mso-bidi-font-family", "Times New Roman"], [1, "MsoNormal"], ["lang", "EN-US", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif", "mso-bidi-font-family", "Times New Roman", "mso-ansi-language", "EN-US"], [1, "GramE"], ["lang", "EN-US", 2, "mso-ansi-language", "EN-US"]], template: function GlobalmobilityDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1)(2, "mat-card", 2)(3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-card-title", 4)(6, "span", 5)(7, "p", 6)(8, "span", 7)(9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span")(14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GlobalmobilityDialogComponent_Template_button_click_14_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-card-content", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, GlobalmobilityDialogComponent_span_17_Template, 6, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, GlobalmobilityDialogComponent_span_18_Template, 10, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 7, "GLOBALMOBILITY")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.gpsTS.isGerman() ? "schliessen" : "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faXmark);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.gpsTS.isGerman());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.gpsTS.isGerman());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardAvatar, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutAlignDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.UpperCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: [".gsptitlefont[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 30px;\n  color: rgb(0, 68, 57);\n}\n\n.gsptextfont[_ngcontent-%COMP%] {\n  font-family: \"Source Sans Pro\", sans-serif;\n  color: black;\n}\n\n.gspcardimage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.gspcardtext[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: rgb(97, 96, 85);\n  top: 100px;\n  opacity: 0.7;\n  margin-top: -45px;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%], .gspcardtext[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.gspcardtext2zeilig[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n  margin-top: -68px;\n}\n\n.gspcardtextperson[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  margin-top: -40px;\n  width: 100%;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n\n.gsptextinimage[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.gsptextinimage_pos[_ngcontent-%COMP%] {\n  margin-left: 5vw;\n  margin-top: 2vh;\n  color: white;\n}\n\n.gspheaderimage[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.gspheadertext[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheadertext[_ngcontent-%COMP%]:hover {\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheaderlanguage[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding-right: 0px;\n  font-size: 0.8rem;\n  padding-top: 12px;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n#deutschID[_ngcontent-%COMP%] {\n  color: black;\n}\n\n#deutschID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n#englishID[_ngcontent-%COMP%] {\n  color: rgb(135, 142, 171);\n}\n\n#englishID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n.gspparagraph[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  margin-top: 0px;\n  background-color: rgb(242, 237, 234);\n}\n\n.gspcolimageleft[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 4px;\n  margin-right: 4px;\n  padding-bottom: 30px;\n}\n\n.gspcolimageright[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 0;\n  padding-bottom: 30px;\n}\n\n.gspcolimagecenter[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 30px;\n}\n\n.gsprouterlinkactive[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%]:hover {\n  color: rgb(102, 143, 136);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gsphochgestellt[_ngcontent-%COMP%] {\n  bottom: 0.25em;\n}\n\n.normal[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: gray;\n  border: none;\n  outline-width: 1px;\n  outline-color: gray;\n}\n\n.mat-card-header-text[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\n.gspkontakt[_ngcontent-%COMP%] {\n  color: #004439;\n}\n\n.gspblackcolor[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.gspteamheader[_ngcontent-%COMP%] {\n  height: 450px;\n  background-image: url('header_team.jpg');\n  background-position: center center;\n  background-size: cover;\n  overflow: hidden;\n  padding-top: 30px;\n}\n\n.gspcardimagepartner[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.gspcardtextpartner[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 66%;\n  margin-top: -48px;\n  margin-left: 17%;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n\n.gspcontainer[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  color: white;\n  width: 100%;\n}\n\n.gspbottomleft[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  bottom: 0px;\n  left: 0%;\n  padding-left: 15px;\n  background-color: rgb(97, 96, 85);\n  opacity: 0.7;\n  text-align: left;\n  font-size: 80%;\n}\n\n.gsptitlefontteam[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 30px;\n  color: white;\n  padding-top: 30px;\n}\n\n.gspteambottomcentered[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  bottom: 0px;\n  background-color: rgb(97, 96, 85);\n  opacity: 0.7;\n  color: white;\n}\n\n.dialog-header[_ngcontent-%COMP%] {\n  background-image: url(\"/src/assets/images/klein/international_global.jpg\");\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFwcC5jb21wb25lbnQuc2NzcyIsImdsb2JhbG1vYmlsaXR5LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXHRlYW1cXHRlYW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4Q0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREdBO0VBQ0UsMENBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0Usc0JBQUEsRUFBQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDQUY7O0FER0E7RUFDRSxxQkFBQTtBQ0FGOztBREdBO0VBQ0Usc0JBQUEsRUFBQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0Usc0JBQUEsRUFBQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLDBDQUFBO0FDQUY7O0FER0E7RUFDRSxxQkFBQTtFQUNBLDBDQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMENBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7QUNBRjs7QURHQTtFQUNFLHVCQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtBQ0FGOztBREdBO0VBQ0UsdUJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLDBDQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsMENBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0VBQ0EsMENBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7QUNBRjs7QURPQTtFQUNFLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDSkY7O0FET0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNKRjs7QURPQTtFQUNFLGNBQUE7QUNKRjs7QURZQTtFQUNFLFlBQUE7QUNURjs7QUMvS0E7RUFDRSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBRGtMRjs7QUMvS0E7RUFDRSxXQUFBO0FEa0xGOztBQ2hMQTtFQUNFLHNCQUFBLEVBQUEsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FEbUxGOztBQ2hMQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBRG1MRjs7QUNqTEE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FEb0xGOztBQ2pMQTtFQUNFLDhDQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBRG9MRjs7QUMvS0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QURrTEY7O0FBL09BO0VBQ0UsMEVBQUE7RUFDQSxzQkFBQTtBQWtQRiIsImZpbGUiOiJnbG9iYWxtb2JpbGl0eS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3NwdGl0bGVmb250IHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogcmdiKDAsNjgsNTcpO1xyXG59XHJcblxyXG5cclxuLmdzcHRleHRmb250IHtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uZ3NwY2FyZGltYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5nc3BjYXJkdGV4dCB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogPC0tLS0tLSAqL1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LCA5NiwgODUpO1xyXG4gIHRvcDogMTAwcHg7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIG1hcmdpbi10b3A6IC00NXB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYSwgLmdzcGNhcmR0ZXh0OmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5nc3BjYXJkdGV4dDJ6ZWlsaWcge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIDwtLS0tLS0gKi9cclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xyXG4gIHRvcDogMTAwcHg7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIG1hcmdpbi10b3A6IC02OHB4O1xyXG59XHJcblxyXG4uZ3NwY2FyZHRleHRwZXJzb24ge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIDwtLS0tLS0gKi9cclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogLTQwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDFweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcclxuICB0b3A6IDEwMHB4O1xyXG4gIG9wYWNpdHk6IDAuNVxyXG59XHJcblxyXG4uZ3NwdGV4dGluaW1hZ2Uge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmdzcHRleHRpbmltYWdlX3BvcyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDV2dztcclxuICBtYXJnaW4tdG9wOiAydmg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZ3NwaGVhZGVyaW1hZ2Uge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmdzcGhlYWRlcnRleHQge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5nc3BoZWFkZXJ0ZXh0OmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDAsNjgsNTcpO1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmdzcGhlYWRlcmxhbmd1YWdlIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuI2RldXRzY2hJRCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4jZGV1dHNjaElEOmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDM4LCA1MCwgMTA0KTtcclxufVxyXG5cclxuI2VuZ2xpc2hJRCB7XHJcbiAgY29sb3I6IHJnYigxMzUsIDE0MiwgMTcxKTtcclxufVxyXG5cclxuI2VuZ2xpc2hJRDpob3ZlciB7XHJcbiAgY29sb3I6IHJnYigzOCwgNTAsIDEwNCk7XHJcbn1cclxuXHJcbi5nc3BwYXJhZ3JhcGgge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogNTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MiwgMjM3LCAyMzQpO1xyXG59XHJcblxyXG4uZ3NwY29saW1hZ2VsZWZ0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgcGFkZGluZy1yaWdodDogNHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uZ3NwY29saW1hZ2VyaWdodCB7XHJcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmdzcGNvbGltYWdlY2VudGVyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5nc3Byb3V0ZXJsaW5rYWN0aXZlIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogcmdiKDAsNjgsNTcpO1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmdzcGZvb3Rlcmxpbmsge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5nc3Bmb290ZXJsaW5rOmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDEwMiwgMTQzLCAxMzYpO1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmdzcGhvY2hnZXN0ZWxsdCB7XHJcbiAgYm90dG9tOiAwLjI1ZW07XHJcbn1cclxuXHJcblxyXG4vLyBURUFNIERldGFpbHMgS2xhc3NlblxyXG5cclxuXHJcbi5ub3JtYWx7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6Z3JheTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZS13aWR0aDogMXB4O1xyXG4gIG91dGxpbmUtY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1oZWFkZXItdGV4dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZ3Nwa29udGFrdCB7XHJcbiAgY29sb3I6ICMwMDQ0Mzk7XHJcbn1cclxuXHJcbi8vLmdzcG1hdGRpYWxvZ2NvbnRlbnQge1xyXG4vLyAgJjpleHRlbmQoLm1hdC1kaWFsb2ctY29udGVudCk7XHJcbi8vICBtYXgtaGVpZ2h0OiA3NXZoO1xyXG4vL31cclxuXHJcbi5nc3BibGFja2NvbG9yIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuIiwiQGltcG9ydCBcInNyYy9hcHAvdGVhbS90ZWFtLmNvbXBvbmVudFwiO1xyXG4uZGlhbG9nLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3JjL2Fzc2V0cy9pbWFnZXMva2xlaW4vaW50ZXJuYXRpb25hbF9nbG9iYWwuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4iLCJAaW1wb3J0IFwiLi4vYXBwLmNvbXBvbmVudC5zY3NzXCI7XHJcblxyXG4uZ3NwdGVhbWhlYWRlciB7XHJcbiAgaGVpZ2h0OiA0NTBweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2hlYWRlci9oZWFkZXJfdGVhbS5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5nc3BjYXJkaW1hZ2VwYXJ0bmVyIHtcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcbi5nc3BjYXJkdGV4dHBhcnRuZXIge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIDwtLS0tLS0gKi9cclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgd2lkdGg6IDY2JTtcclxuICBtYXJnaW4tdG9wOiAtNDhweDtcclxuICBtYXJnaW4tbGVmdDogMTclO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcclxuICB0b3A6IDEwMHB4O1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLmdzcGNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmdzcGJvdHRvbWxlZnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3R0b206MHB4O1xyXG4gIGxlZnQ6IDAlO1xyXG4gIHBhZGRpbmctbGVmdDoxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5Nyw5Niw4NSk7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1zaXplOiA4MCU7XHJcbn1cclxuXHJcbi5nc3B0aXRsZWZvbnR0ZWFtIHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmdzcHRlYW1ib3R0b21jZW50ZXJlZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGJvdHRvbTowcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LDk2LDg1KTtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 3544:
/*!*************************************************************************************!*\
  !*** ./src/app/taetigkeit/details/immobilien-dialog/immobilien-dialog.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImmobilienDialogComponent": () => (/* binding */ ImmobilienDialogComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ 5139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _services_gsp_translation_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/gsp-translation-service.service */ 9791);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 3935);










function ImmobilienDialogComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "div", 12)(2, "p", 6)(3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Immobilientransaktionen\nk\u00F6nnen in vielen verschiedenen Ausgestaltungsvarianten erfolgen und tangieren\neine Vielzahl unterschiedlicher Rechtsbereiche. Durch unsere Expertise und die\nlangj\u00E4hrige Erfahrung bieten wir Ihnen die hierf\u00FCr notwendige rechtliche Unterst\u00FCtzung,\nsei es im Zusammenhang mit Betriebsverm\u00F6gen, einem Privatverkauf oder einer\nAnschaffung zur Eigennutzung oder auch als reine Geldanlage.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 14)(6, "span", 15)(7, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Strukturierung und Ausarbeitung von\nImmobilienkauf- und -");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "verkaufsvertr\u00E4gen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p", 14)(16, "span", 15)(17, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Ausfertigung von Immobilienkaufvertr\u00E4gen,\nAnmeldungen beim Grundbuch");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p", 14)(24, "span", 19)(25, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Alle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Formen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " von ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Treuhandvereinbarungen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "p", 14)(37, "span", 15)(38, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Rechtsberatung in allen\nimmobilienrechtlichen Fragen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "p", 14)(45, "span", 15)(46, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Umfassende Begleitung von\nImmobilien-Projekten");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "p", 21)(53, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} }
function ImmobilienDialogComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "div", 12)(2, "p", 6)(3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Real estate transactions can take many different forms\nand affect a variety of different legal areas. Thanks to our expertise and many\nyears of experience, we can provide you with the necessary legal support,\nwhether in connection with business assets, a private ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "sale");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\nor an acquisition for personal use, or even as a pure financial investment.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 14)(9, "span", 19)(10, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Structuring and drafting of real-estate purchase/sales\ncontracts");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p", 14)(17, "span", 19)(18, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Execution of real-estate purchase contracts,\napplications to the Real-Estate Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p", 14)(25, "span", 19)(26, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "All forms of trustee (escrow) arrangements");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "p", 14)(33, "span", 23)(34, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Legal advice on\nall issues relating to real-estate law");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "p", 14)(42, "span", 23)(43, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Comprehensive\nsupport of real estate projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} }
class ImmobilienDialogComponent {
    constructor(dialog, gpsTS) {
        this.dialog = dialog;
        this.gpsTS = gpsTS;
        this.faXmark = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faXmark;
    }
    openDialog() {
    }
    onClose() {
        this.dialog.closeAll();
    }
    ngAfterViewInit() {
        jquery__WEBPACK_IMPORTED_MODULE_0__.find(".mat-card-header-text")[0].style.width = "100%";
    }
}
ImmobilienDialogComponent.ɵfac = function ImmobilienDialogComponent_Factory(t) { return new (t || ImmobilienDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_gsp_translation_service_service__WEBPACK_IMPORTED_MODULE_1__.GspTranslationServiceService)); };
ImmobilienDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ImmobilienDialogComponent, selectors: [["app-immobilien-dialog"]], decls: 19, vars: 9, consts: [["mat-dialog-content", "", 1, "gspmatdialogcontent"], ["matdialogcontent", ""], [1, "dialog-card"], ["mat-card-avatar", "", 1, "dialog-header"], [2, "width", "100%"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], [1, "MsoNormalIndent"], ["lang", "EN-US", 2, "font-size", "14.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif", "color", "#004439"], [1, "normal", 3, "title", "click"], ["size", "xs", 3, "icon"], [2, "margin-left", "20px", "overflow", "hidden"], [4, "ngIf"], [1, "WordSection1"], [2, "font-size", "12.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif", "mso-bidi-font-family", "Times New Roman"], [1, "MsoNormalIndent", 2, "margin-top", "0cm", "margin-right", "0cm", "margin-bottom", "0cm", "margin-left", "64.05pt", "mso-add-space", "auto", "text-indent", "-17.85pt", "mso-list", "l0 level1 lfo1"], [2, "font-size", "12.0pt", "line-height", "115%", "font-family", "Wingdings", "mso-fareast-font-family", "Wingdings", "mso-bidi-font-family", "Wingdings"], [2, "mso-list", "Ignore"], [2, "font", "7.0pt \"Times New Roman\""], [1, "SpellE"], ["lang", "EN-US", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "Wingdings", "mso-fareast-font-family", "Wingdings", "mso-bidi-font-family", "Wingdings", "mso-ansi-language", "EN-US"], ["lang", "EN-US", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif", "mso-bidi-font-family", "Times New Roman", "mso-ansi-language", "EN-US"], [1, "MsoNormal"], [1, "GramE"], ["lang", "EN-US", 2, "font-family", "Wingdings", "mso-fareast-font-family", "Wingdings", "mso-bidi-font-family", "Wingdings", "mso-ansi-language", "EN-US"], ["lang", "EN-US", 2, "mso-ansi-language", "EN-US"]], template: function ImmobilienDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1)(2, "mat-card", 2)(3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-card-title", 4)(6, "span", 5)(7, "p", 6)(8, "span", 7)(9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span")(14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ImmobilienDialogComponent_Template_button_click_14_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-card-content", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ImmobilienDialogComponent_span_17_Template, 55, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, ImmobilienDialogComponent_span_18_Template, 50, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 7, "IMMOBILIENRECHT")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.gpsTS.isGerman() ? "schliessen" : "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faXmark);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.gpsTS.isGerman());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.gpsTS.isGerman());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardAvatar, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutAlignDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.UpperCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: [".gsptitlefont[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 30px;\n  color: rgb(0, 68, 57);\n}\n\n.gsptextfont[_ngcontent-%COMP%] {\n  font-family: \"Source Sans Pro\", sans-serif;\n  color: black;\n}\n\n.gspcardimage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.gspcardtext[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: rgb(97, 96, 85);\n  top: 100px;\n  opacity: 0.7;\n  margin-top: -45px;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%], .gspcardtext[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.gspcardtext2zeilig[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n  margin-top: -68px;\n}\n\n.gspcardtextperson[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  margin-top: -40px;\n  width: 100%;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n\n.gsptextinimage[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.gsptextinimage_pos[_ngcontent-%COMP%] {\n  margin-left: 5vw;\n  margin-top: 2vh;\n  color: white;\n}\n\n.gspheaderimage[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.gspheadertext[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheadertext[_ngcontent-%COMP%]:hover {\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheaderlanguage[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding-right: 0px;\n  font-size: 0.8rem;\n  padding-top: 12px;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n#deutschID[_ngcontent-%COMP%] {\n  color: black;\n}\n\n#deutschID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n#englishID[_ngcontent-%COMP%] {\n  color: rgb(135, 142, 171);\n}\n\n#englishID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n.gspparagraph[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  margin-top: 0px;\n  background-color: rgb(242, 237, 234);\n}\n\n.gspcolimageleft[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 4px;\n  margin-right: 4px;\n  padding-bottom: 30px;\n}\n\n.gspcolimageright[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 0;\n  padding-bottom: 30px;\n}\n\n.gspcolimagecenter[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 30px;\n}\n\n.gsprouterlinkactive[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%]:hover {\n  color: rgb(102, 143, 136);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gsphochgestellt[_ngcontent-%COMP%] {\n  bottom: 0.25em;\n}\n\n.normal[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: gray;\n  border: none;\n  outline-width: 1px;\n  outline-color: gray;\n}\n\n.mat-card-header-text[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\n.gspkontakt[_ngcontent-%COMP%] {\n  color: #004439;\n}\n\n.gspblackcolor[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.gspteamheader[_ngcontent-%COMP%] {\n  height: 450px;\n  background-image: url('header_team.jpg');\n  background-position: center center;\n  background-size: cover;\n  overflow: hidden;\n  padding-top: 30px;\n}\n\n.gspcardimagepartner[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.gspcardtextpartner[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 66%;\n  margin-top: -48px;\n  margin-left: 17%;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n\n.gspcontainer[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  color: white;\n  width: 100%;\n}\n\n.gspbottomleft[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  bottom: 0px;\n  left: 0%;\n  padding-left: 15px;\n  background-color: rgb(97, 96, 85);\n  opacity: 0.7;\n  text-align: left;\n  font-size: 80%;\n}\n\n.gsptitlefontteam[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 30px;\n  color: white;\n  padding-top: 30px;\n}\n\n.gspteambottomcentered[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  bottom: 0px;\n  background-color: rgb(97, 96, 85);\n  opacity: 0.7;\n  color: white;\n}\n\n.dialog-header[_ngcontent-%COMP%] {\n  background-image: url(\"/src/assets/images/klein/immobilienrecht.jpg\");\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFwcC5jb21wb25lbnQuc2NzcyIsImltbW9iaWxpZW4tZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcdGVhbVxcdGVhbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhDQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FER0E7RUFDRSwwQ0FBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxzQkFBQSxFQUFBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNBRjs7QURHQTtFQUNFLHFCQUFBO0FDQUY7O0FER0E7RUFDRSxzQkFBQSxFQUFBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxzQkFBQSxFQUFBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsMENBQUE7QUNBRjs7QURHQTtFQUNFLHFCQUFBO0VBQ0EsMENBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtBQ0FGOztBREdBO0VBQ0UsdUJBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0FDQUY7O0FER0E7RUFDRSx1QkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMENBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtBQ0FGOztBRE9BO0VBQ0UsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNKRjs7QURPQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0pGOztBRE9BO0VBQ0UsY0FBQTtBQ0pGOztBRFlBO0VBQ0UsWUFBQTtBQ1RGOztBQy9LQTtFQUNFLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FEa0xGOztBQy9LQTtFQUNFLFdBQUE7QURrTEY7O0FDaExBO0VBQ0Usc0JBQUEsRUFBQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QURtTEY7O0FDaExBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FEbUxGOztBQ2pMQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QURvTEY7O0FDakxBO0VBQ0UsOENBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FEb0xGOztBQy9LQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBRGtMRjs7QUEvT0E7RUFDRSxxRUFBQTtFQUNBLHNCQUFBO0FBa1BGIiwiZmlsZSI6ImltbW9iaWxpZW4tZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdzcHRpdGxlZm9udCB7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgY29sb3I6IHJnYigwLDY4LDU3KTtcclxufVxyXG5cclxuXHJcbi5nc3B0ZXh0Zm9udCB7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmdzcGNhcmRpbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZ3NwY2FyZHRleHQge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIDwtLS0tLS0gKi9cclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5NywgOTYsIDg1KTtcclxuICB0b3A6IDEwMHB4O1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICBtYXJnaW4tdG9wOiAtNDVweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmEsIC5nc3BjYXJkdGV4dDpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZ3NwY2FyZHRleHQyemVpbGlnIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiA8LS0tLS0tICovXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcclxuICB0b3A6IDEwMHB4O1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBtYXJnaW4tdG9wOiAtNjhweDtcclxufVxyXG5cclxuLmdzcGNhcmR0ZXh0cGVyc29uIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiA8LS0tLS0tICovXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IC00MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDFweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XHJcbiAgdG9wOiAxMDBweDtcclxuICBvcGFjaXR5OiAwLjVcclxufVxyXG5cclxuLmdzcHRleHRpbmltYWdlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5nc3B0ZXh0aW5pbWFnZV9wb3Mge1xyXG4gIG1hcmdpbi1sZWZ0OiA1dnc7XHJcbiAgbWFyZ2luLXRvcDogMnZoO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmdzcGhlYWRlcmltYWdlIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5nc3BoZWFkZXJ0ZXh0IHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwaGVhZGVydGV4dDpob3ZlciB7XHJcbiAgY29sb3I6IHJnYigwLDY4LDU3KTtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5nc3BoZWFkZXJsYW5ndWFnZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBwYWRkaW5nLXRvcDogMTJweDtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiNkZXV0c2NoSUQge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuI2RldXRzY2hJRDpob3ZlciB7XHJcbiAgY29sb3I6IHJnYigzOCwgNTAsIDEwNCk7XHJcbn1cclxuXHJcbiNlbmdsaXNoSUQge1xyXG4gIGNvbG9yOiByZ2IoMTM1LCAxNDIsIDE3MSk7XHJcbn1cclxuXHJcbiNlbmdsaXNoSUQ6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMzgsIDUwLCAxMDQpO1xyXG59XHJcblxyXG4uZ3NwcGFyYWdyYXBoIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDIzNywgMjM0KTtcclxufVxyXG5cclxuLmdzcGNvbGltYWdlbGVmdCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmdzcGNvbGltYWdlcmlnaHQge1xyXG4gIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5nc3Bjb2xpbWFnZWNlbnRlciB7XHJcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uZ3Nwcm91dGVybGlua2FjdGl2ZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IHJnYigwLDY4LDU3KTtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5nc3Bmb290ZXJsaW5rIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwZm9vdGVybGluazpob3ZlciB7XHJcbiAgY29sb3I6IHJnYigxMDIsIDE0MywgMTM2KTtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5nc3Bob2NoZ2VzdGVsbHQge1xyXG4gIGJvdHRvbTogMC4yNWVtO1xyXG59XHJcblxyXG5cclxuLy8gVEVBTSBEZXRhaWxzIEtsYXNzZW5cclxuXHJcblxyXG4ubm9ybWFse1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOmdyYXk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmUtd2lkdGg6IDFweDtcclxuICBvdXRsaW5lLWNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4ubWF0LWNhcmQtaGVhZGVyLXRleHQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmdzcGtvbnRha3Qge1xyXG4gIGNvbG9yOiAjMDA0NDM5O1xyXG59XHJcblxyXG4vLy5nc3BtYXRkaWFsb2djb250ZW50IHtcclxuLy8gICY6ZXh0ZW5kKC5tYXQtZGlhbG9nLWNvbnRlbnQpO1xyXG4vLyAgbWF4LWhlaWdodDogNzV2aDtcclxuLy99XHJcblxyXG4uZ3NwYmxhY2tjb2xvciB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiIsIkBpbXBvcnQgXCJzcmMvYXBwL3RlYW0vdGVhbS5jb21wb25lbnRcIjtcclxuLmRpYWxvZy1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3NyYy9hc3NldHMvaW1hZ2VzL2tsZWluL2ltbW9iaWxpZW5yZWNodC5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbiIsIkBpbXBvcnQgXCIuLi9hcHAuY29tcG9uZW50LnNjc3NcIjtcclxuXHJcbi5nc3B0ZWFtaGVhZGVyIHtcclxuICBoZWlnaHQ6IDQ1MHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyL2hlYWRlcl90ZWFtLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG5cclxuLmdzcGNhcmRpbWFnZXBhcnRuZXIge1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuLmdzcGNhcmR0ZXh0cGFydG5lciB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogPC0tLS0tLSAqL1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICB3aWR0aDogNjYlO1xyXG4gIG1hcmdpbi10b3A6IC00OHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNyU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xyXG4gIHRvcDogMTAwcHg7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4uZ3NwY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uZ3NwYm90dG9tbGVmdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvdHRvbTowcHg7XHJcbiAgbGVmdDogMCU7XHJcbiAgcGFkZGluZy1sZWZ0OjE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LDk2LDg1KTtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXNpemU6IDgwJTtcclxufVxyXG5cclxuLmdzcHRpdGxlZm9udHRlYW0ge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG5cclxuXHJcblxyXG4uZ3NwdGVhbWJvdHRvbWNlbnRlcmVkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgYm90dG9tOjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTcsOTYsODUpO1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ 9770:
/*!*******************************************************************************!*\
  !*** ./src/app/taetigkeit/details/mergers-dialog/mergers-dialog.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MergersDialogComponent": () => (/* binding */ MergersDialogComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ 5139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _services_gsp_translation_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/gsp-translation-service.service */ 9791);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 3935);










function MergersDialogComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "div", 12)(2, "p", 6)(3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Die\nGr\u00FCnde f\u00FCr M&A sind vielf\u00E4ltig. Oftmals sind die M\u00F6glichkeiten eines\norganischen Wachstums begrenzt oder sogar ausgesch\u00F6pft. Damit r\u00FCckt ein\nanorganisches Wachstum mittels Zusammenschl\u00FCsse oder Zuk\u00E4ufe in den\nMittelpunkt. Die Positionen der K\u00E4ufer und der Verk\u00E4ufer k\u00F6nnen dabei sehr\nunterschiedlich ausfallen. Mit unserer fundierten Praxis-Erfahrung beraten und\nunterst\u00FCtzen wir Sie gerne bei der Durchf\u00FChrung von M&A-Transaktionen\nsowohl auf K\u00E4ufer- als auch auf Verk\u00E4uferseite.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 14)(6, "span", 15)(7, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Analyse und Implementierung von\nM&A-Transaktionen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 14)(14, "span", 15)(15, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Share Deals und Asset Deals");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p", 14)(22, "span", 15)(23, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "MBOs");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p", 14)(30, "span", 15)(31, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Durchf\u00FChrung von Due-Diligence (legal)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "p", 14)(38, "span", 15)(39, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Beratung und Begleitung bei\nM&A-Verhandlungen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "p", 18)(46, "span", 15)(47, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "span", 19)(52, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Uvm");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "p", 20)(56, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} }
function MergersDialogComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "div", 12)(2, "p", 6)(3, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "The reasons for M&A are manifold. Often, the\npossibilities for organic growth are limited or even exhausted. Inorganic\ngrowth by means of mergers or acquisitions thus becomes the focus of attention.\nThe positions of buyers and sellers can be very different. We are happy to\nadvise and support you with our profound practical experience in the execution\nof M&A transactions on both the buyer and the seller side.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 22)(6, "span", 23)(7, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Analysis and implementation of M&A transactions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 22)(14, "span", 15)(15, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Share ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "deals");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "\nand ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "asset");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "deals");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "p", 22)(29, "span", 15)(30, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "MBOs");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "p", 22)(37, "span", 23)(38, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Implementation of due diligence (legal)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "p", 22)(45, "span", 23)(46, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Consulting and support during M&A negotiations");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "p", 18)(53, "span", 15)(54, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "span", 19)(59, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "etc");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "p", 20)(63, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} }
class MergersDialogComponent {
    constructor(dialog, gpsTS) {
        this.dialog = dialog;
        this.gpsTS = gpsTS;
        this.faXmark = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faXmark;
    }
    openDialog() {
    }
    onClose() {
        this.dialog.closeAll();
    }
    ngAfterViewInit() {
        jquery__WEBPACK_IMPORTED_MODULE_0__.find(".mat-card-header-text")[0].style.width = "100%";
    }
}
MergersDialogComponent.ɵfac = function MergersDialogComponent_Factory(t) { return new (t || MergersDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_gsp_translation_service_service__WEBPACK_IMPORTED_MODULE_1__.GspTranslationServiceService)); };
MergersDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MergersDialogComponent, selectors: [["app-mergers-dialog"]], decls: 19, vars: 9, consts: [["mat-dialog-content", "", 1, "gspmatdialogcontent"], ["matdialogcontent", ""], [1, "dialog-card"], ["mat-card-avatar", "", 1, "dialog-header"], [2, "width", "100%"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], [1, "MsoNormalIndent"], ["lang", "EN-US", 2, "font-size", "14.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif", "color", "#004439"], [1, "normal", 3, "title", "click"], ["size", "xs", 3, "icon"], [2, "margin-left", "20px", "overflow", "hidden"], [4, "ngIf"], [1, "WordSection1"], [2, "font-size", "12.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif", "mso-bidi-font-family", "Times New Roman"], [1, "MsoNormalIndent", 2, "margin-top", "0cm", "margin-right", "0cm", "margin-bottom", "0cm", "margin-left", "64.05pt", "mso-add-space", "auto", "text-indent", "-17.85pt", "mso-list", "l0 level1 lfo1"], [2, "font-size", "12.0pt", "line-height", "115%", "font-family", "Wingdings", "mso-fareast-font-family", "Wingdings", "mso-bidi-font-family", "Wingdings"], [2, "mso-list", "Ignore"], [2, "font", "7.0pt \"Times New Roman\""], [1, "MsoNormalIndent", 2, "margin-top", "0cm", "margin-right", "0cm", "margin-bottom", "12.0pt", "margin-left", "64.05pt", "text-indent", "-17.85pt", "mso-list", "l0 level1 lfo1"], [1, "SpellE"], [1, "MsoNormal"], ["lang", "EN-US", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif", "mso-bidi-font-family", "Times New Roman", "mso-ansi-language", "EN-US"], [1, "MsoNormalIndent", 2, "margin-top", "0cm", "margin-right", "0cm", "margin-bottom", "0cm", "margin-left", "64.35pt", "mso-add-space", "auto", "text-indent", "-18.0pt", "mso-list", "l0 level1 lfo1"], ["lang", "EN-US", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "Wingdings", "mso-fareast-font-family", "Wingdings", "mso-bidi-font-family", "Wingdings", "mso-ansi-language", "EN-US"]], template: function MergersDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1)(2, "mat-card", 2)(3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-card-title", 4)(6, "span", 5)(7, "p", 6)(8, "span", 7)(9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span")(14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MergersDialogComponent_Template_button_click_14_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-card-content", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, MergersDialogComponent_span_17_Template, 58, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, MergersDialogComponent_span_18_Template, 65, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 7, "MERGERS")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.gpsTS.isGerman() ? "schliessen" : "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faXmark);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.gpsTS.isGerman());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.gpsTS.isGerman());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardAvatar, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutAlignDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.UpperCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: [".gsptitlefont[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 30px;\n  color: rgb(0, 68, 57);\n}\n\n.gsptextfont[_ngcontent-%COMP%] {\n  font-family: \"Source Sans Pro\", sans-serif;\n  color: black;\n}\n\n.gspcardimage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.gspcardtext[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: rgb(97, 96, 85);\n  top: 100px;\n  opacity: 0.7;\n  margin-top: -45px;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%], .gspcardtext[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.gspcardtext2zeilig[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n  margin-top: -68px;\n}\n\n.gspcardtextperson[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  margin-top: -40px;\n  width: 100%;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n\n.gsptextinimage[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.gsptextinimage_pos[_ngcontent-%COMP%] {\n  margin-left: 5vw;\n  margin-top: 2vh;\n  color: white;\n}\n\n.gspheaderimage[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.gspheadertext[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheadertext[_ngcontent-%COMP%]:hover {\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheaderlanguage[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding-right: 0px;\n  font-size: 0.8rem;\n  padding-top: 12px;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n#deutschID[_ngcontent-%COMP%] {\n  color: black;\n}\n\n#deutschID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n#englishID[_ngcontent-%COMP%] {\n  color: rgb(135, 142, 171);\n}\n\n#englishID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n.gspparagraph[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  margin-top: 0px;\n  background-color: rgb(242, 237, 234);\n}\n\n.gspcolimageleft[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 4px;\n  margin-right: 4px;\n  padding-bottom: 30px;\n}\n\n.gspcolimageright[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 0;\n  padding-bottom: 30px;\n}\n\n.gspcolimagecenter[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 30px;\n}\n\n.gsprouterlinkactive[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%]:hover {\n  color: rgb(102, 143, 136);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gsphochgestellt[_ngcontent-%COMP%] {\n  bottom: 0.25em;\n}\n\n.normal[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: gray;\n  border: none;\n  outline-width: 1px;\n  outline-color: gray;\n}\n\n.mat-card-header-text[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\n.gspkontakt[_ngcontent-%COMP%] {\n  color: #004439;\n}\n\n.gspblackcolor[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.gspteamheader[_ngcontent-%COMP%] {\n  height: 450px;\n  background-image: url('header_team.jpg');\n  background-position: center center;\n  background-size: cover;\n  overflow: hidden;\n  padding-top: 30px;\n}\n\n.gspcardimagepartner[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.gspcardtextpartner[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 66%;\n  margin-top: -48px;\n  margin-left: 17%;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n\n.gspcontainer[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  color: white;\n  width: 100%;\n}\n\n.gspbottomleft[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  bottom: 0px;\n  left: 0%;\n  padding-left: 15px;\n  background-color: rgb(97, 96, 85);\n  opacity: 0.7;\n  text-align: left;\n  font-size: 80%;\n}\n\n.gsptitlefontteam[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 30px;\n  color: white;\n  padding-top: 30px;\n}\n\n.gspteambottomcentered[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  bottom: 0px;\n  background-color: rgb(97, 96, 85);\n  opacity: 0.7;\n  color: white;\n}\n\n.dialog-header[_ngcontent-%COMP%] {\n  background-image: url(\"/src/assets/images/klein/taetigkeitsbereiche_mergers.jpg\");\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFwcC5jb21wb25lbnQuc2NzcyIsIm1lcmdlcnMtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcdGVhbVxcdGVhbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhDQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FER0E7RUFDRSwwQ0FBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxzQkFBQSxFQUFBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNBRjs7QURHQTtFQUNFLHFCQUFBO0FDQUY7O0FER0E7RUFDRSxzQkFBQSxFQUFBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxzQkFBQSxFQUFBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsMENBQUE7QUNBRjs7QURHQTtFQUNFLHFCQUFBO0VBQ0EsMENBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtBQ0FGOztBREdBO0VBQ0UsdUJBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0FDQUY7O0FER0E7RUFDRSx1QkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMENBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtBQ0FGOztBRE9BO0VBQ0UsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNKRjs7QURPQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0pGOztBRE9BO0VBQ0UsY0FBQTtBQ0pGOztBRFlBO0VBQ0UsWUFBQTtBQ1RGOztBQy9LQTtFQUNFLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FEa0xGOztBQy9LQTtFQUNFLFdBQUE7QURrTEY7O0FDaExBO0VBQ0Usc0JBQUEsRUFBQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QURtTEY7O0FDaExBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FEbUxGOztBQ2pMQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QURvTEY7O0FDakxBO0VBQ0UsOENBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FEb0xGOztBQy9LQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBRGtMRjs7QUEvT0E7RUFDRSxpRkFBQTtFQUNBLHNCQUFBO0FBa1BGIiwiZmlsZSI6Im1lcmdlcnMtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdzcHRpdGxlZm9udCB7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgY29sb3I6IHJnYigwLDY4LDU3KTtcclxufVxyXG5cclxuXHJcbi5nc3B0ZXh0Zm9udCB7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmdzcGNhcmRpbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZ3NwY2FyZHRleHQge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIDwtLS0tLS0gKi9cclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5NywgOTYsIDg1KTtcclxuICB0b3A6IDEwMHB4O1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICBtYXJnaW4tdG9wOiAtNDVweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmEsIC5nc3BjYXJkdGV4dDpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZ3NwY2FyZHRleHQyemVpbGlnIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiA8LS0tLS0tICovXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcclxuICB0b3A6IDEwMHB4O1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBtYXJnaW4tdG9wOiAtNjhweDtcclxufVxyXG5cclxuLmdzcGNhcmR0ZXh0cGVyc29uIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiA8LS0tLS0tICovXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IC00MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDFweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XHJcbiAgdG9wOiAxMDBweDtcclxuICBvcGFjaXR5OiAwLjVcclxufVxyXG5cclxuLmdzcHRleHRpbmltYWdlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5nc3B0ZXh0aW5pbWFnZV9wb3Mge1xyXG4gIG1hcmdpbi1sZWZ0OiA1dnc7XHJcbiAgbWFyZ2luLXRvcDogMnZoO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmdzcGhlYWRlcmltYWdlIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5nc3BoZWFkZXJ0ZXh0IHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwaGVhZGVydGV4dDpob3ZlciB7XHJcbiAgY29sb3I6IHJnYigwLDY4LDU3KTtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5nc3BoZWFkZXJsYW5ndWFnZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBwYWRkaW5nLXRvcDogMTJweDtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiNkZXV0c2NoSUQge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuI2RldXRzY2hJRDpob3ZlciB7XHJcbiAgY29sb3I6IHJnYigzOCwgNTAsIDEwNCk7XHJcbn1cclxuXHJcbiNlbmdsaXNoSUQge1xyXG4gIGNvbG9yOiByZ2IoMTM1LCAxNDIsIDE3MSk7XHJcbn1cclxuXHJcbiNlbmdsaXNoSUQ6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMzgsIDUwLCAxMDQpO1xyXG59XHJcblxyXG4uZ3NwcGFyYWdyYXBoIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDIzNywgMjM0KTtcclxufVxyXG5cclxuLmdzcGNvbGltYWdlbGVmdCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmdzcGNvbGltYWdlcmlnaHQge1xyXG4gIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5nc3Bjb2xpbWFnZWNlbnRlciB7XHJcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uZ3Nwcm91dGVybGlua2FjdGl2ZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IHJnYigwLDY4LDU3KTtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5nc3Bmb290ZXJsaW5rIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwZm9vdGVybGluazpob3ZlciB7XHJcbiAgY29sb3I6IHJnYigxMDIsIDE0MywgMTM2KTtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5nc3Bob2NoZ2VzdGVsbHQge1xyXG4gIGJvdHRvbTogMC4yNWVtO1xyXG59XHJcblxyXG5cclxuLy8gVEVBTSBEZXRhaWxzIEtsYXNzZW5cclxuXHJcblxyXG4ubm9ybWFse1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOmdyYXk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmUtd2lkdGg6IDFweDtcclxuICBvdXRsaW5lLWNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4ubWF0LWNhcmQtaGVhZGVyLXRleHQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmdzcGtvbnRha3Qge1xyXG4gIGNvbG9yOiAjMDA0NDM5O1xyXG59XHJcblxyXG4vLy5nc3BtYXRkaWFsb2djb250ZW50IHtcclxuLy8gICY6ZXh0ZW5kKC5tYXQtZGlhbG9nLWNvbnRlbnQpO1xyXG4vLyAgbWF4LWhlaWdodDogNzV2aDtcclxuLy99XHJcblxyXG4uZ3NwYmxhY2tjb2xvciB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiIsIkBpbXBvcnQgXCJzcmMvYXBwL3RlYW0vdGVhbS5jb21wb25lbnRcIjtcclxuLmRpYWxvZy1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3NyYy9hc3NldHMvaW1hZ2VzL2tsZWluL3RhZXRpZ2tlaXRzYmVyZWljaGVfbWVyZ2Vycy5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbiIsIkBpbXBvcnQgXCIuLi9hcHAuY29tcG9uZW50LnNjc3NcIjtcclxuXHJcbi5nc3B0ZWFtaGVhZGVyIHtcclxuICBoZWlnaHQ6IDQ1MHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyL2hlYWRlcl90ZWFtLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG5cclxuLmdzcGNhcmRpbWFnZXBhcnRuZXIge1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuLmdzcGNhcmR0ZXh0cGFydG5lciB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogPC0tLS0tLSAqL1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICB3aWR0aDogNjYlO1xyXG4gIG1hcmdpbi10b3A6IC00OHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNyU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xyXG4gIHRvcDogMTAwcHg7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4uZ3NwY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uZ3NwYm90dG9tbGVmdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvdHRvbTowcHg7XHJcbiAgbGVmdDogMCU7XHJcbiAgcGFkZGluZy1sZWZ0OjE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LDk2LDg1KTtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXNpemU6IDgwJTtcclxufVxyXG5cclxuLmdzcHRpdGxlZm9udHRlYW0ge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG5cclxuXHJcblxyXG4uZ3NwdGVhbWJvdHRvbWNlbnRlcmVkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgYm90dG9tOjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTcsOTYsODUpO1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ 5240:
/*!*****************************************************************************************************!*\
  !*** ./src/app/taetigkeit/details/oeffentlichesrecht-dialog/oeffentlichesrecht-dialog.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OeffentlichesrechtDialogComponent": () => (/* binding */ OeffentlichesrechtDialogComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ 5139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _services_gsp_translation_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/gsp-translation-service.service */ 9791);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 3935);










function OeffentlichesrechtDialogComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "div", 12)(2, "p", 6)(3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Mit der Gr\u00FCndung\nund dem laufenden Betrieb eines Unternehmens gehen nicht nur unternehmens- und\ngesellschaftsrechtliche Aspekte einher, sondern es findet sich auch ein einschl\u00E4giger\nRegelungsbereich im \u00F6ffentlichen Recht. Dies betrifft unter anderem die\nErlangung einer Gewerbeberechtigung sowie die allenfalls notwendige Bestellung\neines gewerberechtlichen Gesch\u00E4ftsf\u00FChrers sowie branchenspezifische\nGenehmigungsverfahren. Gerne unterst\u00FCtzen wir Sie durch unsere Expertise und\nErfahrung umfassend in diesbez\u00FCglichen Belangen.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 14)(6, "span", 15)(7, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 18)(12, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Unterst\u00FCtzung");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Konzessionsverfahren");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " (FMA)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p", 14)(20, "span", 15)(21, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span", 18)(26, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Errichtung");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " und ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Beratung");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " von ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Wertpapierfirmen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "p", 14)(36, "span", 15)(37, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "span", 18)(42, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Gewerberecht");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "p", 20)(46, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} }
function OeffentlichesrechtDialogComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "div", 12)(2, "p", 6)(3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "The establishment and ongoing operation of a company\nis not only associated with aspects of corporate and company law, but also with\nrelevant areas of public law. This includes, among other things, the obtaining\nof a business license as well as the appointment of a managing director under\ntrade law, if necessary, as well as industry-specific licensing procedures. We\nwill be pleased to provide you with comprehensive support in these matters\nbased on our expertise and experience.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 14)(6, "span", 15)(7, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Advice and representation in licensing proceedings");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 14)(14, "span", 21)(15, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Establishment\nof and advice to financial and investment institutions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p", 14)(23, "span", 23)(24, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Trade and industry law");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} }
class OeffentlichesrechtDialogComponent {
    constructor(dialog, gpsTS) {
        this.dialog = dialog;
        this.gpsTS = gpsTS;
        this.faXmark = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faXmark;
    }
    openDialog() {
    }
    onClose() {
        this.dialog.closeAll();
    }
    ngAfterViewInit() {
        jquery__WEBPACK_IMPORTED_MODULE_0__.find(".mat-card-header-text")[0].style.width = "100%";
    }
}
OeffentlichesrechtDialogComponent.ɵfac = function OeffentlichesrechtDialogComponent_Factory(t) { return new (t || OeffentlichesrechtDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_gsp_translation_service_service__WEBPACK_IMPORTED_MODULE_1__.GspTranslationServiceService)); };
OeffentlichesrechtDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: OeffentlichesrechtDialogComponent, selectors: [["app-oeffentlichesrecht-dialog"]], decls: 19, vars: 9, consts: [["mat-dialog-content", "", 1, "gspmatdialogcontent"], ["matdialogcontent", ""], [1, "dialog-card"], ["mat-card-avatar", "", 1, "dialog-header"], [2, "width", "100%"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], [1, "MsoNormalIndent"], ["lang", "EN-US", 2, "font-size", "14.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif", "color", "#004439"], [1, "normal", 3, "title", "click"], ["size", "xs", 3, "icon"], [2, "margin-left", "20px", "overflow", "hidden"], [4, "ngIf"], [1, "WordSection1"], [2, "font-size", "12.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif", "mso-bidi-font-family", "Times New Roman"], [1, "MsoNormalIndent", 2, "margin-top", "0cm", "margin-right", "0cm", "margin-bottom", "0cm", "margin-left", "64.05pt", "mso-add-space", "auto", "text-indent", "-17.85pt", "mso-list", "l0 level1 lfo1"], ["lang", "EN-US", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "Wingdings", "mso-fareast-font-family", "Wingdings", "mso-bidi-font-family", "Wingdings", "mso-ansi-language", "EN-US"], [2, "mso-list", "Ignore"], [2, "font", "7.0pt \"Times New Roman\""], [1, "SpellE"], ["lang", "EN-US", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif", "mso-bidi-font-family", "Times New Roman", "mso-ansi-language", "EN-US"], [1, "MsoNormal"], ["lang", "EN-US", 2, "font-family", "Wingdings", "mso-fareast-font-family", "Wingdings", "mso-bidi-font-family", "Wingdings", "mso-ansi-language", "EN-US"], ["lang", "EN-US", 2, "mso-ansi-language", "EN-US"], [2, "font-family", "Wingdings", "mso-fareast-font-family", "Wingdings", "mso-bidi-font-family", "Wingdings"]], template: function OeffentlichesrechtDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1)(2, "mat-card", 2)(3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-card-title", 4)(6, "span", 5)(7, "p", 6)(8, "span", 7)(9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span")(14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OeffentlichesrechtDialogComponent_Template_button_click_14_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-card-content", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, OeffentlichesrechtDialogComponent_span_17_Template, 48, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, OeffentlichesrechtDialogComponent_span_18_Template, 30, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 7, "OEFFENTLICHKEITSRECHT")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.gpsTS.isGerman() ? "schliessen" : "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faXmark);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.gpsTS.isGerman());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.gpsTS.isGerman());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardAvatar, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutAlignDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.UpperCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: [".gsptitlefont[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 30px;\n  color: rgb(0, 68, 57);\n}\n\n.gsptextfont[_ngcontent-%COMP%] {\n  font-family: \"Source Sans Pro\", sans-serif;\n  color: black;\n}\n\n.gspcardimage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.gspcardtext[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: rgb(97, 96, 85);\n  top: 100px;\n  opacity: 0.7;\n  margin-top: -45px;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%], .gspcardtext[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.gspcardtext2zeilig[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n  margin-top: -68px;\n}\n\n.gspcardtextperson[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  margin-top: -40px;\n  width: 100%;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n\n.gsptextinimage[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.gsptextinimage_pos[_ngcontent-%COMP%] {\n  margin-left: 5vw;\n  margin-top: 2vh;\n  color: white;\n}\n\n.gspheaderimage[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.gspheadertext[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheadertext[_ngcontent-%COMP%]:hover {\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheaderlanguage[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding-right: 0px;\n  font-size: 0.8rem;\n  padding-top: 12px;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n#deutschID[_ngcontent-%COMP%] {\n  color: black;\n}\n\n#deutschID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n#englishID[_ngcontent-%COMP%] {\n  color: rgb(135, 142, 171);\n}\n\n#englishID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n.gspparagraph[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  margin-top: 0px;\n  background-color: rgb(242, 237, 234);\n}\n\n.gspcolimageleft[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 4px;\n  margin-right: 4px;\n  padding-bottom: 30px;\n}\n\n.gspcolimageright[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 0;\n  padding-bottom: 30px;\n}\n\n.gspcolimagecenter[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 30px;\n}\n\n.gsprouterlinkactive[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%]:hover {\n  color: rgb(102, 143, 136);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gsphochgestellt[_ngcontent-%COMP%] {\n  bottom: 0.25em;\n}\n\n.normal[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: gray;\n  border: none;\n  outline-width: 1px;\n  outline-color: gray;\n}\n\n.mat-card-header-text[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\n.gspkontakt[_ngcontent-%COMP%] {\n  color: #004439;\n}\n\n.gspblackcolor[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.gspteamheader[_ngcontent-%COMP%] {\n  height: 450px;\n  background-image: url('header_team.jpg');\n  background-position: center center;\n  background-size: cover;\n  overflow: hidden;\n  padding-top: 30px;\n}\n\n.gspcardimagepartner[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.gspcardtextpartner[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 66%;\n  margin-top: -48px;\n  margin-left: 17%;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n\n.gspcontainer[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  color: white;\n  width: 100%;\n}\n\n.gspbottomleft[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  bottom: 0px;\n  left: 0%;\n  padding-left: 15px;\n  background-color: rgb(97, 96, 85);\n  opacity: 0.7;\n  text-align: left;\n  font-size: 80%;\n}\n\n.gsptitlefontteam[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 30px;\n  color: white;\n  padding-top: 30px;\n}\n\n.gspteambottomcentered[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  bottom: 0px;\n  background-color: rgb(97, 96, 85);\n  opacity: 0.7;\n  color: white;\n}\n\n.dialog-header[_ngcontent-%COMP%] {\n  background-image: url(\"/src/assets/images/klein/offentlichkeitsrecht.jpg\");\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFwcC5jb21wb25lbnQuc2NzcyIsIm9lZmZlbnRsaWNoZXNyZWNodC1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFx0ZWFtXFx0ZWFtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOENBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURHQTtFQUNFLDBDQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLHNCQUFBLEVBQUEsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ0FGOztBREdBO0VBQ0UscUJBQUE7QUNBRjs7QURHQTtFQUNFLHNCQUFBLEVBQUEsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLHNCQUFBLEVBQUEsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UscUJBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDBDQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSx1QkFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7QUNBRjs7QURHQTtFQUNFLHVCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLDBDQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtFQUNBLDBDQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0FDQUY7O0FET0E7RUFDRSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0pGOztBRE9BO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDSkY7O0FET0E7RUFDRSxjQUFBO0FDSkY7O0FEWUE7RUFDRSxZQUFBO0FDVEY7O0FDL0tBO0VBQ0UsYUFBQTtFQUNBLHdDQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QURrTEY7O0FDL0tBO0VBQ0UsV0FBQTtBRGtMRjs7QUNoTEE7RUFDRSxzQkFBQSxFQUFBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBRG1MRjs7QUNoTEE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QURtTEY7O0FDakxBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBRG9MRjs7QUNqTEE7RUFDRSw4Q0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QURvTEY7O0FDL0tBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FEa0xGOztBQS9PQTtFQUNFLDBFQUFBO0VBQ0Esc0JBQUE7QUFrUEYiLCJmaWxlIjoib2VmZmVudGxpY2hlc3JlY2h0LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nc3B0aXRsZWZvbnQge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XHJcbn1cclxuXHJcblxyXG4uZ3NwdGV4dGZvbnQge1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5nc3BjYXJkaW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmdzcGNhcmR0ZXh0IHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiA8LS0tLS0tICovXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTcsIDk2LCA4NSk7XHJcbiAgdG9wOiAxMDBweDtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgbWFyZ2luLXRvcDogLTQ1cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hLCAuZ3NwY2FyZHRleHQ6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmdzcGNhcmR0ZXh0MnplaWxpZyB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogPC0tLS0tLSAqL1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XHJcbiAgdG9wOiAxMDBweDtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgbWFyZ2luLXRvcDogLTY4cHg7XHJcbn1cclxuXHJcbi5nc3BjYXJkdGV4dHBlcnNvbiB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogPC0tLS0tLSAqL1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAtNDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xyXG4gIHRvcDogMTAwcHg7XHJcbiAgb3BhY2l0eTogMC41XHJcbn1cclxuXHJcbi5nc3B0ZXh0aW5pbWFnZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZ3NwdGV4dGluaW1hZ2VfcG9zIHtcclxuICBtYXJnaW4tbGVmdDogNXZ3O1xyXG4gIG1hcmdpbi10b3A6IDJ2aDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5nc3BoZWFkZXJpbWFnZSB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZ3NwaGVhZGVydGV4dCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmdzcGhlYWRlcnRleHQ6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwaGVhZGVybGFuZ3VhZ2Uge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4jZGV1dHNjaElEIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbiNkZXV0c2NoSUQ6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMzgsIDUwLCAxMDQpO1xyXG59XHJcblxyXG4jZW5nbGlzaElEIHtcclxuICBjb2xvcjogcmdiKDEzNSwgMTQyLCAxNzEpO1xyXG59XHJcblxyXG4jZW5nbGlzaElEOmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDM4LCA1MCwgMTA0KTtcclxufVxyXG5cclxuLmdzcHBhcmFncmFwaCB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyMzcsIDIzNCk7XHJcbn1cclxuXHJcbi5nc3Bjb2xpbWFnZWxlZnQge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5nc3Bjb2xpbWFnZXJpZ2h0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uZ3NwY29saW1hZ2VjZW50ZXIge1xyXG4gIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmdzcHJvdXRlcmxpbmthY3RpdmUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwZm9vdGVybGluayB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmdzcGZvb3Rlcmxpbms6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMTAyLCAxNDMsIDEzNik7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwaG9jaGdlc3RlbGx0IHtcclxuICBib3R0b206IDAuMjVlbTtcclxufVxyXG5cclxuXHJcbi8vIFRFQU0gRGV0YWlscyBLbGFzc2VuXHJcblxyXG5cclxuLm5vcm1hbHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjpncmF5O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lLXdpZHRoOiAxcHg7XHJcbiAgb3V0bGluZS1jb2xvcjogZ3JheTtcclxufVxyXG5cclxuLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5nc3Brb250YWt0IHtcclxuICBjb2xvcjogIzAwNDQzOTtcclxufVxyXG5cclxuLy8uZ3NwbWF0ZGlhbG9nY29udGVudCB7XHJcbi8vICAmOmV4dGVuZCgubWF0LWRpYWxvZy1jb250ZW50KTtcclxuLy8gIG1heC1oZWlnaHQ6IDc1dmg7XHJcbi8vfVxyXG5cclxuLmdzcGJsYWNrY29sb3Ige1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4iLCJAaW1wb3J0IFwic3JjL2FwcC90ZWFtL3RlYW0uY29tcG9uZW50XCI7XHJcbi5kaWFsb2ctaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zcmMvYXNzZXRzL2ltYWdlcy9rbGVpbi9vZmZlbnRsaWNoa2VpdHNyZWNodC5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbiIsIkBpbXBvcnQgXCIuLi9hcHAuY29tcG9uZW50LnNjc3NcIjtcclxuXHJcbi5nc3B0ZWFtaGVhZGVyIHtcclxuICBoZWlnaHQ6IDQ1MHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyL2hlYWRlcl90ZWFtLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG5cclxuLmdzcGNhcmRpbWFnZXBhcnRuZXIge1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuLmdzcGNhcmR0ZXh0cGFydG5lciB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogPC0tLS0tLSAqL1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICB3aWR0aDogNjYlO1xyXG4gIG1hcmdpbi10b3A6IC00OHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNyU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xyXG4gIHRvcDogMTAwcHg7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4uZ3NwY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uZ3NwYm90dG9tbGVmdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvdHRvbTowcHg7XHJcbiAgbGVmdDogMCU7XHJcbiAgcGFkZGluZy1sZWZ0OjE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LDk2LDg1KTtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXNpemU6IDgwJTtcclxufVxyXG5cclxuLmdzcHRpdGxlZm9udHRlYW0ge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG5cclxuXHJcblxyXG4uZ3NwdGVhbWJvdHRvbWNlbnRlcmVkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgYm90dG9tOjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTcsOTYsODUpO1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ 9761:
/*!*******************************************************************!*\
  !*** ./src/app/taetigkeit/details/template/template.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplateComponent": () => (/* binding */ TemplateComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ 5139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _services_gsp_translation_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/gsp-translation-service.service */ 9791);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);









function TemplateComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\nDeutsch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TemplateComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\nEnglisch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class TemplateComponent {
    constructor(dialog, gpsTS) {
        this.dialog = dialog;
        this.gpsTS = gpsTS;
        this.faXmark = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faXmark;
    }
    openDialog() {
    }
    onClose() {
        this.dialog.closeAll();
    }
    ngAfterViewInit() {
        jquery__WEBPACK_IMPORTED_MODULE_0__.find(".mat-card-header-text")[0].style.width = "100%";
    }
}
TemplateComponent.ɵfac = function TemplateComponent_Factory(t) { return new (t || TemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_gsp_translation_service_service__WEBPACK_IMPORTED_MODULE_1__.GspTranslationServiceService)); };
TemplateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TemplateComponent, selectors: [["app-template"]], decls: 16, vars: 4, consts: [["mat-dialog-content", "", 1, "gspmatdialogcontent"], ["matdialogcontent", ""], [1, "dialog-card"], ["mat-card-avatar", "", 1, "dialog-header"], [2, "width", "100%"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], [1, "MsoNormalIndent"], ["lang", "EN-US", 2, "font-size", "14.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif", "color", "#004439"], [1, "normal", 3, "title", "click"], ["size", "xs", 3, "icon"], [2, "margin-left", "20px", "overflow", "hidden"], [4, "ngIf"]], template: function TemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1)(2, "mat-card", 2)(3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-card-title", 4)(6, "span", 5)(7, "p", 6)(8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Gesellschaftsrecht");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span")(11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TemplateComponent_Template_button_click_11_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-card-content", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, TemplateComponent_span_14_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, TemplateComponent_span_15_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.gpsTS.isGerman() ? "schliessen" : "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faXmark);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.gpsTS.isGerman());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.gpsTS.isGerman());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardAvatar, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutAlignDirective], styles: [".gsptitlefont[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 30px;\n  color: rgb(0, 68, 57);\n}\n\n.gsptextfont[_ngcontent-%COMP%] {\n  font-family: \"Source Sans Pro\", sans-serif;\n  color: black;\n}\n\n.gspcardimage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.gspcardtext[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: rgb(97, 96, 85);\n  top: 100px;\n  opacity: 0.7;\n  margin-top: -45px;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%], .gspcardtext[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.gspcardtext2zeilig[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n  margin-top: -68px;\n}\n\n.gspcardtextperson[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  margin-top: -40px;\n  width: 100%;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n\n.gsptextinimage[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.gsptextinimage_pos[_ngcontent-%COMP%] {\n  margin-left: 5vw;\n  margin-top: 2vh;\n  color: white;\n}\n\n.gspheaderimage[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.gspheadertext[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheadertext[_ngcontent-%COMP%]:hover {\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheaderlanguage[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding-right: 0px;\n  font-size: 0.8rem;\n  padding-top: 12px;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n#deutschID[_ngcontent-%COMP%] {\n  color: black;\n}\n\n#deutschID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n#englishID[_ngcontent-%COMP%] {\n  color: rgb(135, 142, 171);\n}\n\n#englishID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n.gspparagraph[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  margin-top: 0px;\n  background-color: rgb(242, 237, 234);\n}\n\n.gspcolimageleft[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 4px;\n  margin-right: 4px;\n  padding-bottom: 30px;\n}\n\n.gspcolimageright[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 0;\n  padding-bottom: 30px;\n}\n\n.gspcolimagecenter[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 30px;\n}\n\n.gsprouterlinkactive[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%]:hover {\n  color: rgb(102, 143, 136);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gsphochgestellt[_ngcontent-%COMP%] {\n  bottom: 0.25em;\n}\n\n.normal[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: gray;\n  border: none;\n  outline-width: 1px;\n  outline-color: gray;\n}\n\n.mat-card-header-text[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\n.gspkontakt[_ngcontent-%COMP%] {\n  color: #004439;\n}\n\n.gspblackcolor[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.gspteamheader[_ngcontent-%COMP%] {\n  height: 450px;\n  background-image: url('header_team.jpg');\n  background-position: center center;\n  background-size: cover;\n  overflow: hidden;\n  padding-top: 30px;\n}\n\n.gspcardimagepartner[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.gspcardtextpartner[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 66%;\n  margin-top: -48px;\n  margin-left: 17%;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n\n.gspcontainer[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  color: white;\n  width: 100%;\n}\n\n.gspbottomleft[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  bottom: 0px;\n  left: 0%;\n  padding-left: 15px;\n  background-color: rgb(97, 96, 85);\n  opacity: 0.7;\n  text-align: left;\n  font-size: 80%;\n}\n\n.gsptitlefontteam[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 30px;\n  color: white;\n  padding-top: 30px;\n}\n\n.gspteambottomcentered[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  bottom: 0px;\n  background-color: rgb(97, 96, 85);\n  opacity: 0.7;\n  color: white;\n}\n\n.dialog-header[_ngcontent-%COMP%] {\n  background-image: url(\"/src/assets/images/klein/gesellschaftsrecht.jpg\");\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFwcC5jb21wb25lbnQuc2NzcyIsInRlbXBsYXRlLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcdGVhbVxcdGVhbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhDQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FER0E7RUFDRSwwQ0FBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxzQkFBQSxFQUFBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNBRjs7QURHQTtFQUNFLHFCQUFBO0FDQUY7O0FER0E7RUFDRSxzQkFBQSxFQUFBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxzQkFBQSxFQUFBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsMENBQUE7QUNBRjs7QURHQTtFQUNFLHFCQUFBO0VBQ0EsMENBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtBQ0FGOztBREdBO0VBQ0UsdUJBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0FDQUY7O0FER0E7RUFDRSx1QkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMENBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtBQ0FGOztBRE9BO0VBQ0UsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNKRjs7QURPQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0pGOztBRE9BO0VBQ0UsY0FBQTtBQ0pGOztBRFlBO0VBQ0UsWUFBQTtBQ1RGOztBQy9LQTtFQUNFLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FEa0xGOztBQy9LQTtFQUNFLFdBQUE7QURrTEY7O0FDaExBO0VBQ0Usc0JBQUEsRUFBQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QURtTEY7O0FDaExBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FEbUxGOztBQ2pMQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QURvTEY7O0FDakxBO0VBQ0UsOENBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FEb0xGOztBQy9LQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBRGtMRjs7QUEvT0E7RUFDRSx3RUFBQTtFQUNBLHNCQUFBO0FBa1BGIiwiZmlsZSI6InRlbXBsYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdzcHRpdGxlZm9udCB7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgY29sb3I6IHJnYigwLDY4LDU3KTtcclxufVxyXG5cclxuXHJcbi5nc3B0ZXh0Zm9udCB7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmdzcGNhcmRpbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZ3NwY2FyZHRleHQge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIDwtLS0tLS0gKi9cclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5NywgOTYsIDg1KTtcclxuICB0b3A6IDEwMHB4O1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICBtYXJnaW4tdG9wOiAtNDVweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmEsIC5nc3BjYXJkdGV4dDpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZ3NwY2FyZHRleHQyemVpbGlnIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiA8LS0tLS0tICovXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcclxuICB0b3A6IDEwMHB4O1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBtYXJnaW4tdG9wOiAtNjhweDtcclxufVxyXG5cclxuLmdzcGNhcmR0ZXh0cGVyc29uIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiA8LS0tLS0tICovXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IC00MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDFweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XHJcbiAgdG9wOiAxMDBweDtcclxuICBvcGFjaXR5OiAwLjVcclxufVxyXG5cclxuLmdzcHRleHRpbmltYWdlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5nc3B0ZXh0aW5pbWFnZV9wb3Mge1xyXG4gIG1hcmdpbi1sZWZ0OiA1dnc7XHJcbiAgbWFyZ2luLXRvcDogMnZoO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmdzcGhlYWRlcmltYWdlIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5nc3BoZWFkZXJ0ZXh0IHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwaGVhZGVydGV4dDpob3ZlciB7XHJcbiAgY29sb3I6IHJnYigwLDY4LDU3KTtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5nc3BoZWFkZXJsYW5ndWFnZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBwYWRkaW5nLXRvcDogMTJweDtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiNkZXV0c2NoSUQge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuI2RldXRzY2hJRDpob3ZlciB7XHJcbiAgY29sb3I6IHJnYigzOCwgNTAsIDEwNCk7XHJcbn1cclxuXHJcbiNlbmdsaXNoSUQge1xyXG4gIGNvbG9yOiByZ2IoMTM1LCAxNDIsIDE3MSk7XHJcbn1cclxuXHJcbiNlbmdsaXNoSUQ6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMzgsIDUwLCAxMDQpO1xyXG59XHJcblxyXG4uZ3NwcGFyYWdyYXBoIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDIzNywgMjM0KTtcclxufVxyXG5cclxuLmdzcGNvbGltYWdlbGVmdCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmdzcGNvbGltYWdlcmlnaHQge1xyXG4gIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5nc3Bjb2xpbWFnZWNlbnRlciB7XHJcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uZ3Nwcm91dGVybGlua2FjdGl2ZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IHJnYigwLDY4LDU3KTtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5nc3Bmb290ZXJsaW5rIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwZm9vdGVybGluazpob3ZlciB7XHJcbiAgY29sb3I6IHJnYigxMDIsIDE0MywgMTM2KTtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5nc3Bob2NoZ2VzdGVsbHQge1xyXG4gIGJvdHRvbTogMC4yNWVtO1xyXG59XHJcblxyXG5cclxuLy8gVEVBTSBEZXRhaWxzIEtsYXNzZW5cclxuXHJcblxyXG4ubm9ybWFse1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOmdyYXk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmUtd2lkdGg6IDFweDtcclxuICBvdXRsaW5lLWNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4ubWF0LWNhcmQtaGVhZGVyLXRleHQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmdzcGtvbnRha3Qge1xyXG4gIGNvbG9yOiAjMDA0NDM5O1xyXG59XHJcblxyXG4vLy5nc3BtYXRkaWFsb2djb250ZW50IHtcclxuLy8gICY6ZXh0ZW5kKC5tYXQtZGlhbG9nLWNvbnRlbnQpO1xyXG4vLyAgbWF4LWhlaWdodDogNzV2aDtcclxuLy99XHJcblxyXG4uZ3NwYmxhY2tjb2xvciB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiIsIkBpbXBvcnQgXCJzcmMvYXBwL3RlYW0vdGVhbS5jb21wb25lbnRcIjtcclxuLmRpYWxvZy1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3NyYy9hc3NldHMvaW1hZ2VzL2tsZWluL2dlc2VsbHNjaGFmdHNyZWNodC5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbiIsIkBpbXBvcnQgXCIuLi9hcHAuY29tcG9uZW50LnNjc3NcIjtcclxuXHJcbi5nc3B0ZWFtaGVhZGVyIHtcclxuICBoZWlnaHQ6IDQ1MHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyL2hlYWRlcl90ZWFtLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG5cclxuLmdzcGNhcmRpbWFnZXBhcnRuZXIge1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuLmdzcGNhcmR0ZXh0cGFydG5lciB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogPC0tLS0tLSAqL1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICB3aWR0aDogNjYlO1xyXG4gIG1hcmdpbi10b3A6IC00OHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNyU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xyXG4gIHRvcDogMTAwcHg7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4uZ3NwY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uZ3NwYm90dG9tbGVmdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvdHRvbTowcHg7XHJcbiAgbGVmdDogMCU7XHJcbiAgcGFkZGluZy1sZWZ0OjE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LDk2LDg1KTtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXNpemU6IDgwJTtcclxufVxyXG5cclxuLmdzcHRpdGxlZm9udHRlYW0ge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG5cclxuXHJcblxyXG4uZ3NwdGVhbWJvdHRvbWNlbnRlcmVkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgYm90dG9tOjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTcsOTYsODUpO1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ 9736:
/*!*******************************************************************************************!*\
  !*** ./src/app/taetigkeit/details/umgruendungen-dialog/umgruendungen-dialog.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UmgruendungenDialogComponent": () => (/* binding */ UmgruendungenDialogComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ 5139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _services_gsp_translation_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/gsp-translation-service.service */ 9791);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 3935);










function UmgruendungenDialogComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "div", 12)(2, "p", 6)(3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Erfolgreiche\nunternehmerische T\u00E4tigkeit erfordert Flexibilit\u00E4t und ein stetiges Mitwachsen\nmit den Herausforderungen. Dies gilt auch f\u00FCr die gew\u00E4hlte\nUnternehmensstruktur, weshalb ein Bed\u00FCrfnis zur \u00C4nderung der einmal gew\u00E4hlten\nRechtsform des Unternehmens oder zur Umstrukturierung entstehen kann. Sowohl im\nnationalen als auch im grenz\u00FCberschreitenden Kontext unterst\u00FCtzen wir Sie gerne\nmit unserer Erfahrung, um ihr Unternehmen an die jeweiligen Anforderungen\nma\u00DFgeschneidert anzupassen.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 14)(6, "span", 15)(7, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Nationale und grenz\u00FCberschreitende\nVerschmelzungen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 14)(14, "span", 15)(15, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Errichtende und verschmelzende\nUmwandlungen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p", 14)(22, "span", 15)(23, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Einbringung von Betrieben,\nTeilbetrieben, Mitunternehmeranteilen und Kapitalanteilen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p", 14)(30, "span", 15)(31, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Spaltungen zur Neugr\u00FCndung und zur\nAufnahme");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "p", 14)(38, "span", 15)(39, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Zusammenschl\u00FCsse und Realteilungen von\nPersonengesellschaften");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "p", 14)(46, "span", 15)(47, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Rechtsform\u00E4nderungen und\nUnternehmenszusammenschl\u00FCsse");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "p", 14)(54, "span", 15)(55, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "span", 18)(60, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Umgr\u00FCndungssteuerrecht");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "p", 19)(64, "span", 15)(65, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "span", 18)(70, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Uvm");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "p", 20)(74, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} }
function UmgruendungenDialogComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "div", 12)(2, "p", 6)(3, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Successful entrepreneurial activity requires\nflexibility and constant growth with the challenges. This also applies to the\nchosen corporate structure, which is why the need to change the once chosen\nlegal form of the company or of restructuring may arise. In both national and\ncross-border contexts, we are happy to support you with our experience ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "in order to");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " tailor your company to the respective\nrequirements.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 14)(9, "span", 23)(10, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "National and cross-border mergers");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p", 14)(17, "span", 15)(18, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 18)(23, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Establishing");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "merging");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "transformations");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "p", 14)(32, "span", 23)(33, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Contribution of businesses, parts of businesses,\nco-entrepreneurial ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "shares");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " and capital shares");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "p", 14)(43, "span", 23)(44, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Demergers for the purpose of formation and\nincorporation");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "p", 14)(51, "span", 23)(52, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Mergers and real divisions of partnerships");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "p", 14)(59, "span", 23)(60, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Changes of legal form and mergers");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "p", 14)(67, "span", 15)(68, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "span", 18)(73, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "Reorganization");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "span", 13)(76, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "tax");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "law");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "p", 24)(81, "span", 23)(82, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "span", 18)(87, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "Etc");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](90, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "p", 20)(92, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} }
class UmgruendungenDialogComponent {
    constructor(dialog, gpsTS) {
        this.dialog = dialog;
        this.gpsTS = gpsTS;
        this.faXmark = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faXmark;
    }
    openDialog() {
    }
    onClose() {
        this.dialog.closeAll();
    }
    ngAfterViewInit() {
        jquery__WEBPACK_IMPORTED_MODULE_0__.find(".mat-card-header-text")[0].style.width = "100%";
    }
}
UmgruendungenDialogComponent.ɵfac = function UmgruendungenDialogComponent_Factory(t) { return new (t || UmgruendungenDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_gsp_translation_service_service__WEBPACK_IMPORTED_MODULE_1__.GspTranslationServiceService)); };
UmgruendungenDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UmgruendungenDialogComponent, selectors: [["app-umgruendungen-dialog"]], decls: 19, vars: 9, consts: [["mat-dialog-content", "", 1, "gspmatdialogcontent"], ["matdialogcontent", ""], [1, "dialog-card"], ["mat-card-avatar", "", 1, "dialog-header"], [2, "width", "100%"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], [1, "MsoNormalIndent"], ["lang", "EN-US", 2, "font-size", "14.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif", "color", "#004439"], [1, "normal", 3, "title", "click"], ["size", "xs", 3, "icon"], [2, "margin-left", "20px", "overflow", "hidden"], [4, "ngIf"], [1, "WordSection1"], [2, "font-size", "12.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif", "mso-bidi-font-family", "Times New Roman"], [1, "MsoNormalIndent", 2, "margin-top", "0cm", "margin-right", "0cm", "margin-bottom", "0cm", "margin-left", "64.05pt", "mso-add-space", "auto", "text-indent", "-17.85pt", "mso-list", "l0 level1 lfo1"], [2, "font-size", "12.0pt", "line-height", "115%", "font-family", "Wingdings", "mso-fareast-font-family", "Wingdings", "mso-bidi-font-family", "Wingdings"], [2, "mso-list", "Ignore"], [2, "font", "7.0pt \"Times New Roman\""], [1, "SpellE"], [1, "MsoNormalIndent", 2, "margin-left", "64.35pt", "text-indent", "-18.0pt", "mso-list", "l0 level1 lfo1"], [1, "MsoNormal"], ["lang", "EN-US", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif", "mso-bidi-font-family", "Times New Roman", "mso-ansi-language", "EN-US"], [1, "GramE"], ["lang", "EN-US", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "Wingdings", "mso-fareast-font-family", "Wingdings", "mso-bidi-font-family", "Wingdings", "mso-ansi-language", "EN-US"], [1, "MsoNormalIndent", 2, "margin-top", "0cm", "margin-right", "0cm", "margin-bottom", "12.0pt", "margin-left", "64.05pt", "text-indent", "-17.85pt", "mso-list", "l0 level1 lfo1"], [2, "mso-bidi-font-style", "normal"]], template: function UmgruendungenDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1)(2, "mat-card", 2)(3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-card-title", 4)(6, "span", 5)(7, "p", 6)(8, "span", 7)(9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span")(14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UmgruendungenDialogComponent_Template_button_click_14_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-card-content", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, UmgruendungenDialogComponent_span_17_Template, 76, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, UmgruendungenDialogComponent_span_18_Template, 94, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 7, "UMGRUENDUNG")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.gpsTS.isGerman() ? "schliessen" : "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faXmark);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.gpsTS.isGerman());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.gpsTS.isGerman());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardAvatar, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutAlignDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.UpperCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: [".gsptitlefont[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 30px;\n  color: rgb(0, 68, 57);\n}\n\n.gsptextfont[_ngcontent-%COMP%] {\n  font-family: \"Source Sans Pro\", sans-serif;\n  color: black;\n}\n\n.gspcardimage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.gspcardtext[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: rgb(97, 96, 85);\n  top: 100px;\n  opacity: 0.7;\n  margin-top: -45px;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%], .gspcardtext[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.gspcardtext2zeilig[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n  margin-top: -68px;\n}\n\n.gspcardtextperson[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  margin-top: -40px;\n  width: 100%;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n\n.gsptextinimage[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.gsptextinimage_pos[_ngcontent-%COMP%] {\n  margin-left: 5vw;\n  margin-top: 2vh;\n  color: white;\n}\n\n.gspheaderimage[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.gspheadertext[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheadertext[_ngcontent-%COMP%]:hover {\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheaderlanguage[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding-right: 0px;\n  font-size: 0.8rem;\n  padding-top: 12px;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n#deutschID[_ngcontent-%COMP%] {\n  color: black;\n}\n\n#deutschID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n#englishID[_ngcontent-%COMP%] {\n  color: rgb(135, 142, 171);\n}\n\n#englishID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n.gspparagraph[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  margin-top: 0px;\n  background-color: rgb(242, 237, 234);\n}\n\n.gspcolimageleft[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 4px;\n  margin-right: 4px;\n  padding-bottom: 30px;\n}\n\n.gspcolimageright[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 0;\n  padding-bottom: 30px;\n}\n\n.gspcolimagecenter[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 30px;\n}\n\n.gsprouterlinkactive[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%]:hover {\n  color: rgb(102, 143, 136);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gsphochgestellt[_ngcontent-%COMP%] {\n  bottom: 0.25em;\n}\n\n.normal[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: gray;\n  border: none;\n  outline-width: 1px;\n  outline-color: gray;\n}\n\n.mat-card-header-text[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\n.gspkontakt[_ngcontent-%COMP%] {\n  color: #004439;\n}\n\n.gspblackcolor[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.gspteamheader[_ngcontent-%COMP%] {\n  height: 450px;\n  background-image: url('header_team.jpg');\n  background-position: center center;\n  background-size: cover;\n  overflow: hidden;\n  padding-top: 30px;\n}\n\n.gspcardimagepartner[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.gspcardtextpartner[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 66%;\n  margin-top: -48px;\n  margin-left: 17%;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n\n.gspcontainer[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  color: white;\n  width: 100%;\n}\n\n.gspbottomleft[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  bottom: 0px;\n  left: 0%;\n  padding-left: 15px;\n  background-color: rgb(97, 96, 85);\n  opacity: 0.7;\n  text-align: left;\n  font-size: 80%;\n}\n\n.gsptitlefontteam[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 30px;\n  color: white;\n  padding-top: 30px;\n}\n\n.gspteambottomcentered[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  bottom: 0px;\n  background-color: rgb(97, 96, 85);\n  opacity: 0.7;\n  color: white;\n}\n\n.dialog-header[_ngcontent-%COMP%] {\n  background-image: url(\"/src/assets/images/klein/umgruendungen.jpg\");\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFwcC5jb21wb25lbnQuc2NzcyIsInVtZ3J1ZW5kdW5nZW4tZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcdGVhbVxcdGVhbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhDQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FER0E7RUFDRSwwQ0FBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxzQkFBQSxFQUFBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNBRjs7QURHQTtFQUNFLHFCQUFBO0FDQUY7O0FER0E7RUFDRSxzQkFBQSxFQUFBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxzQkFBQSxFQUFBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsMENBQUE7QUNBRjs7QURHQTtFQUNFLHFCQUFBO0VBQ0EsMENBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtBQ0FGOztBREdBO0VBQ0UsdUJBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0FDQUY7O0FER0E7RUFDRSx1QkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMENBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtBQ0FGOztBRE9BO0VBQ0UsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNKRjs7QURPQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0pGOztBRE9BO0VBQ0UsY0FBQTtBQ0pGOztBRFlBO0VBQ0UsWUFBQTtBQ1RGOztBQy9LQTtFQUNFLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FEa0xGOztBQy9LQTtFQUNFLFdBQUE7QURrTEY7O0FDaExBO0VBQ0Usc0JBQUEsRUFBQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QURtTEY7O0FDaExBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FEbUxGOztBQ2pMQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QURvTEY7O0FDakxBO0VBQ0UsOENBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FEb0xGOztBQy9LQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBRGtMRjs7QUEvT0E7RUFDRSxtRUFBQTtFQUNBLHNCQUFBO0FBa1BGIiwiZmlsZSI6InVtZ3J1ZW5kdW5nZW4tZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdzcHRpdGxlZm9udCB7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgY29sb3I6IHJnYigwLDY4LDU3KTtcclxufVxyXG5cclxuXHJcbi5nc3B0ZXh0Zm9udCB7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmdzcGNhcmRpbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZ3NwY2FyZHRleHQge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIDwtLS0tLS0gKi9cclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5NywgOTYsIDg1KTtcclxuICB0b3A6IDEwMHB4O1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICBtYXJnaW4tdG9wOiAtNDVweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmEsIC5nc3BjYXJkdGV4dDpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZ3NwY2FyZHRleHQyemVpbGlnIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiA8LS0tLS0tICovXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcclxuICB0b3A6IDEwMHB4O1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBtYXJnaW4tdG9wOiAtNjhweDtcclxufVxyXG5cclxuLmdzcGNhcmR0ZXh0cGVyc29uIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiA8LS0tLS0tICovXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IC00MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDFweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XHJcbiAgdG9wOiAxMDBweDtcclxuICBvcGFjaXR5OiAwLjVcclxufVxyXG5cclxuLmdzcHRleHRpbmltYWdlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5nc3B0ZXh0aW5pbWFnZV9wb3Mge1xyXG4gIG1hcmdpbi1sZWZ0OiA1dnc7XHJcbiAgbWFyZ2luLXRvcDogMnZoO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmdzcGhlYWRlcmltYWdlIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5nc3BoZWFkZXJ0ZXh0IHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwaGVhZGVydGV4dDpob3ZlciB7XHJcbiAgY29sb3I6IHJnYigwLDY4LDU3KTtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5nc3BoZWFkZXJsYW5ndWFnZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBwYWRkaW5nLXRvcDogMTJweDtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiNkZXV0c2NoSUQge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuI2RldXRzY2hJRDpob3ZlciB7XHJcbiAgY29sb3I6IHJnYigzOCwgNTAsIDEwNCk7XHJcbn1cclxuXHJcbiNlbmdsaXNoSUQge1xyXG4gIGNvbG9yOiByZ2IoMTM1LCAxNDIsIDE3MSk7XHJcbn1cclxuXHJcbiNlbmdsaXNoSUQ6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMzgsIDUwLCAxMDQpO1xyXG59XHJcblxyXG4uZ3NwcGFyYWdyYXBoIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDIzNywgMjM0KTtcclxufVxyXG5cclxuLmdzcGNvbGltYWdlbGVmdCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmdzcGNvbGltYWdlcmlnaHQge1xyXG4gIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5nc3Bjb2xpbWFnZWNlbnRlciB7XHJcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uZ3Nwcm91dGVybGlua2FjdGl2ZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IHJnYigwLDY4LDU3KTtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5nc3Bmb290ZXJsaW5rIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwZm9vdGVybGluazpob3ZlciB7XHJcbiAgY29sb3I6IHJnYigxMDIsIDE0MywgMTM2KTtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5nc3Bob2NoZ2VzdGVsbHQge1xyXG4gIGJvdHRvbTogMC4yNWVtO1xyXG59XHJcblxyXG5cclxuLy8gVEVBTSBEZXRhaWxzIEtsYXNzZW5cclxuXHJcblxyXG4ubm9ybWFse1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOmdyYXk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmUtd2lkdGg6IDFweDtcclxuICBvdXRsaW5lLWNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4ubWF0LWNhcmQtaGVhZGVyLXRleHQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmdzcGtvbnRha3Qge1xyXG4gIGNvbG9yOiAjMDA0NDM5O1xyXG59XHJcblxyXG4vLy5nc3BtYXRkaWFsb2djb250ZW50IHtcclxuLy8gICY6ZXh0ZW5kKC5tYXQtZGlhbG9nLWNvbnRlbnQpO1xyXG4vLyAgbWF4LWhlaWdodDogNzV2aDtcclxuLy99XHJcblxyXG4uZ3NwYmxhY2tjb2xvciB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiIsIkBpbXBvcnQgXCJzcmMvYXBwL3RlYW0vdGVhbS5jb21wb25lbnRcIjtcclxuLmRpYWxvZy1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3NyYy9hc3NldHMvaW1hZ2VzL2tsZWluL3VtZ3J1ZW5kdW5nZW4uanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4iLCJAaW1wb3J0IFwiLi4vYXBwLmNvbXBvbmVudC5zY3NzXCI7XHJcblxyXG4uZ3NwdGVhbWhlYWRlciB7XHJcbiAgaGVpZ2h0OiA0NTBweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2hlYWRlci9oZWFkZXJfdGVhbS5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5nc3BjYXJkaW1hZ2VwYXJ0bmVyIHtcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcbi5nc3BjYXJkdGV4dHBhcnRuZXIge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIDwtLS0tLS0gKi9cclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgd2lkdGg6IDY2JTtcclxuICBtYXJnaW4tdG9wOiAtNDhweDtcclxuICBtYXJnaW4tbGVmdDogMTclO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcclxuICB0b3A6IDEwMHB4O1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLmdzcGNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmdzcGJvdHRvbWxlZnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3R0b206MHB4O1xyXG4gIGxlZnQ6IDAlO1xyXG4gIHBhZGRpbmctbGVmdDoxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5Nyw5Niw4NSk7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1zaXplOiA4MCU7XHJcbn1cclxuXHJcbi5nc3B0aXRsZWZvbnR0ZWFtIHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmdzcHRlYW1ib3R0b21jZW50ZXJlZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGJvdHRvbTowcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LDk2LDg1KTtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 1675:
/*!*******************************************************************************!*\
  !*** ./src/app/taetigkeit/details/vertrag-dialog/vertrag-dialog.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VertragDialogComponent": () => (/* binding */ VertragDialogComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ 5139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _services_gsp_translation_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/gsp-translation-service.service */ 9791);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 3935);










function VertragDialogComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "div", 12)(2, "p", 6)(3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Die\nQualit\u00E4t eines Vertrages zeigt ich zumeist erst dann, wenn es bereits zu einem\nKonflikt gekommen ist. Damit Sie auch dann die intendierte Position\nrechtssicher vertreten k\u00F6nnen, bedarf es daher eine fundierte und s\u00E4mtliche\nm\u00F6gliche Unsicherheit ausr\u00E4umende Vertragsgestaltung. Gerne unterst\u00FCtzen wir\nSie dabei, damit es im Nachhinein kein b\u00F6ses Erwachen gibt. Sollte es dennoch\nzu Auseinandersetzungen bzw. Auffassungsunterschieden zwischen Ihnen und ihrem\nVertragspartner bzw. Dritten kommen, k\u00F6nnen wir Ihnen durch unsere langj\u00E4hrige\nErfahrung im Zivil- und Schadenersatzrecht die notwendige Unterst\u00FCtzung bieten.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 14)(6, "span", 15)(7, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 18)(12, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Nationale");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " und ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "internationale");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Vertragsgestaltungen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p", 14)(21, "span", 20)(22, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Erstellung und Beratung von komplexen\ninternationalen Vertr\u00E4gen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "p", 14)(29, "span", 15)(30, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "span", 18)(35, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Vertragsverhandlungen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "p", 14)(39, "span", 15)(40, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "span", 18)(45, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Rechtsberatung");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, " in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Fragen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, " den ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Zivilrechts");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "p", 14)(55, "span", 20)(56, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Durchsetzung von Anspr\u00FCchen in\nau\u00DFergerichtlichen und gerichtlichen Verfahren");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "p", 21)(63, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} }
function VertragDialogComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "div", 12)(2, "p", 6)(3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "The quality of a contract usually only becomes\napparent when a conflict has already arisen. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "In order for");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\nyou to be able to represent your intended position in a legally secure manner,\nit is therefore necessary to draft the contract in a well-founded manner that\neliminates all possible uncertainties. We are happy to support you in this\nprocess so that you do not have a rude awakening afterwards. However, should\ndisputes or differences of opinion arise between you and your contractual\npartner or third parties, we can offer you the necessary support thanks to our\nmany years of experience in civil and tort law.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 14)(9, "span", 15)(10, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Drafting of contracts on a national and international\nlevel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p", 14)(17, "span", 15)(18, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Structuring, drafting and advice on complex\ninternational contracts");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p", 14)(25, "span", 15)(26, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Contract negotiations");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "p", 14)(33, "span", 15)(34, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Legal advice on all questions of civil law");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "p", 14)(41, "span", 15)(42, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Enforcement of claims, both in court and out-of-court");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "p", 21)(49, "span", 23)(50, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
} }
class VertragDialogComponent {
    constructor(dialog, gpsTS) {
        this.dialog = dialog;
        this.gpsTS = gpsTS;
        this.faXmark = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faXmark;
    }
    openDialog() {
    }
    onClose() {
        this.dialog.closeAll();
    }
    ngAfterViewInit() {
        jquery__WEBPACK_IMPORTED_MODULE_0__.find(".mat-card-header-text")[0].style.width = "100%";
    }
}
VertragDialogComponent.ɵfac = function VertragDialogComponent_Factory(t) { return new (t || VertragDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_gsp_translation_service_service__WEBPACK_IMPORTED_MODULE_1__.GspTranslationServiceService)); };
VertragDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: VertragDialogComponent, selectors: [["app-vertrag-dialog"]], decls: 19, vars: 9, consts: [["mat-dialog-content", "", 1, "gspmatdialogcontent"], ["matdialogcontent", ""], [1, "dialog-card"], ["mat-card-avatar", "", 1, "dialog-header"], [2, "width", "100%"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], [1, "MsoNormalIndent"], ["lang", "EN-US", 2, "font-size", "14.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif", "color", "#004439"], [1, "normal", 3, "title", "click"], ["size", "xs", 3, "icon"], [2, "margin-left", "20px", "overflow", "hidden"], [4, "ngIf"], [1, "WordSection1"], [2, "font-size", "12.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif", "mso-bidi-font-family", "Times New Roman"], [1, "MsoNormalIndent", 2, "margin-top", "0cm", "margin-right", "0cm", "margin-bottom", "0cm", "margin-left", "64.05pt", "mso-add-space", "auto", "text-indent", "-17.85pt", "mso-list", "l0 level1 lfo1"], ["lang", "EN-US", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "Wingdings", "mso-fareast-font-family", "Wingdings", "mso-bidi-font-family", "Wingdings", "mso-ansi-language", "EN-US"], [2, "mso-list", "Ignore"], [2, "font", "7.0pt \"Times New Roman\""], [1, "SpellE"], ["lang", "EN-US", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif", "mso-bidi-font-family", "Times New Roman", "mso-ansi-language", "EN-US"], [2, "font-size", "12.0pt", "line-height", "115%", "font-family", "Wingdings", "mso-fareast-font-family", "Wingdings", "mso-bidi-font-family", "Wingdings"], [1, "MsoNormal"], [1, "GramE"], ["lang", "EN-US", 2, "mso-ansi-language", "EN-US"]], template: function VertragDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1)(2, "mat-card", 2)(3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-card-title", 4)(6, "span", 5)(7, "p", 6)(8, "span", 7)(9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span")(14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VertragDialogComponent_Template_button_click_14_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-card-content", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, VertragDialogComponent_span_17_Template, 65, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, VertragDialogComponent_span_18_Template, 52, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 7, "VERTRAGSGESTALTUNG")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.gpsTS.isGerman() ? "schliessen" : "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faXmark);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.gpsTS.isGerman());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.gpsTS.isGerman());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardAvatar, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutAlignDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.UpperCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: [".gsptitlefont[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 30px;\n  color: rgb(0, 68, 57);\n}\n\n.gsptextfont[_ngcontent-%COMP%] {\n  font-family: \"Source Sans Pro\", sans-serif;\n  color: black;\n}\n\n.gspcardimage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.gspcardtext[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: rgb(97, 96, 85);\n  top: 100px;\n  opacity: 0.7;\n  margin-top: -45px;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%], .gspcardtext[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.gspcardtext2zeilig[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n  margin-top: -68px;\n}\n\n.gspcardtextperson[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  margin-top: -40px;\n  width: 100%;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n\n.gsptextinimage[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.gsptextinimage_pos[_ngcontent-%COMP%] {\n  margin-left: 5vw;\n  margin-top: 2vh;\n  color: white;\n}\n\n.gspheaderimage[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.gspheadertext[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheadertext[_ngcontent-%COMP%]:hover {\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheaderlanguage[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding-right: 0px;\n  font-size: 0.8rem;\n  padding-top: 12px;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n#deutschID[_ngcontent-%COMP%] {\n  color: black;\n}\n\n#deutschID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n#englishID[_ngcontent-%COMP%] {\n  color: rgb(135, 142, 171);\n}\n\n#englishID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n.gspparagraph[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  margin-top: 0px;\n  background-color: rgb(242, 237, 234);\n}\n\n.gspcolimageleft[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 4px;\n  margin-right: 4px;\n  padding-bottom: 30px;\n}\n\n.gspcolimageright[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 0;\n  padding-bottom: 30px;\n}\n\n.gspcolimagecenter[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 30px;\n}\n\n.gsprouterlinkactive[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%]:hover {\n  color: rgb(102, 143, 136);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gsphochgestellt[_ngcontent-%COMP%] {\n  bottom: 0.25em;\n}\n\n.normal[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: gray;\n  border: none;\n  outline-width: 1px;\n  outline-color: gray;\n}\n\n.mat-card-header-text[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\n.gspkontakt[_ngcontent-%COMP%] {\n  color: #004439;\n}\n\n.gspblackcolor[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.gspteamheader[_ngcontent-%COMP%] {\n  height: 450px;\n  background-image: url('header_team.jpg');\n  background-position: center center;\n  background-size: cover;\n  overflow: hidden;\n  padding-top: 30px;\n}\n\n.gspcardimagepartner[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.gspcardtextpartner[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 66%;\n  margin-top: -48px;\n  margin-left: 17%;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n\n.gspcontainer[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  color: white;\n  width: 100%;\n}\n\n.gspbottomleft[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  bottom: 0px;\n  left: 0%;\n  padding-left: 15px;\n  background-color: rgb(97, 96, 85);\n  opacity: 0.7;\n  text-align: left;\n  font-size: 80%;\n}\n\n.gsptitlefontteam[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 30px;\n  color: white;\n  padding-top: 30px;\n}\n\n.gspteambottomcentered[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  bottom: 0px;\n  background-color: rgb(97, 96, 85);\n  opacity: 0.7;\n  color: white;\n}\n\n.dialog-header[_ngcontent-%COMP%] {\n  background-image: url(\"/src/assets/images/klein/vertragsrecht.jpg\");\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFwcC5jb21wb25lbnQuc2NzcyIsInZlcnRyYWctZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcdGVhbVxcdGVhbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhDQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FER0E7RUFDRSwwQ0FBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxzQkFBQSxFQUFBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNBRjs7QURHQTtFQUNFLHFCQUFBO0FDQUY7O0FER0E7RUFDRSxzQkFBQSxFQUFBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxzQkFBQSxFQUFBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsMENBQUE7QUNBRjs7QURHQTtFQUNFLHFCQUFBO0VBQ0EsMENBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtBQ0FGOztBREdBO0VBQ0UsdUJBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0FDQUY7O0FER0E7RUFDRSx1QkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMENBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtBQ0FGOztBRE9BO0VBQ0UsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNKRjs7QURPQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0pGOztBRE9BO0VBQ0UsY0FBQTtBQ0pGOztBRFlBO0VBQ0UsWUFBQTtBQ1RGOztBQy9LQTtFQUNFLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FEa0xGOztBQy9LQTtFQUNFLFdBQUE7QURrTEY7O0FDaExBO0VBQ0Usc0JBQUEsRUFBQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QURtTEY7O0FDaExBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FEbUxGOztBQ2pMQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QURvTEY7O0FDakxBO0VBQ0UsOENBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FEb0xGOztBQy9LQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBRGtMRjs7QUEvT0E7RUFDRSxtRUFBQTtFQUNBLHNCQUFBO0FBa1BGIiwiZmlsZSI6InZlcnRyYWctZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdzcHRpdGxlZm9udCB7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgY29sb3I6IHJnYigwLDY4LDU3KTtcclxufVxyXG5cclxuXHJcbi5nc3B0ZXh0Zm9udCB7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmdzcGNhcmRpbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZ3NwY2FyZHRleHQge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIDwtLS0tLS0gKi9cclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5NywgOTYsIDg1KTtcclxuICB0b3A6IDEwMHB4O1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICBtYXJnaW4tdG9wOiAtNDVweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmEsIC5nc3BjYXJkdGV4dDpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZ3NwY2FyZHRleHQyemVpbGlnIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiA8LS0tLS0tICovXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcclxuICB0b3A6IDEwMHB4O1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBtYXJnaW4tdG9wOiAtNjhweDtcclxufVxyXG5cclxuLmdzcGNhcmR0ZXh0cGVyc29uIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiA8LS0tLS0tICovXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IC00MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDFweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XHJcbiAgdG9wOiAxMDBweDtcclxuICBvcGFjaXR5OiAwLjVcclxufVxyXG5cclxuLmdzcHRleHRpbmltYWdlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5nc3B0ZXh0aW5pbWFnZV9wb3Mge1xyXG4gIG1hcmdpbi1sZWZ0OiA1dnc7XHJcbiAgbWFyZ2luLXRvcDogMnZoO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmdzcGhlYWRlcmltYWdlIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5nc3BoZWFkZXJ0ZXh0IHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwaGVhZGVydGV4dDpob3ZlciB7XHJcbiAgY29sb3I6IHJnYigwLDY4LDU3KTtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5nc3BoZWFkZXJsYW5ndWFnZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBwYWRkaW5nLXRvcDogMTJweDtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiNkZXV0c2NoSUQge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuI2RldXRzY2hJRDpob3ZlciB7XHJcbiAgY29sb3I6IHJnYigzOCwgNTAsIDEwNCk7XHJcbn1cclxuXHJcbiNlbmdsaXNoSUQge1xyXG4gIGNvbG9yOiByZ2IoMTM1LCAxNDIsIDE3MSk7XHJcbn1cclxuXHJcbiNlbmdsaXNoSUQ6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMzgsIDUwLCAxMDQpO1xyXG59XHJcblxyXG4uZ3NwcGFyYWdyYXBoIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDIzNywgMjM0KTtcclxufVxyXG5cclxuLmdzcGNvbGltYWdlbGVmdCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmdzcGNvbGltYWdlcmlnaHQge1xyXG4gIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5nc3Bjb2xpbWFnZWNlbnRlciB7XHJcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uZ3Nwcm91dGVybGlua2FjdGl2ZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IHJnYigwLDY4LDU3KTtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5nc3Bmb290ZXJsaW5rIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwZm9vdGVybGluazpob3ZlciB7XHJcbiAgY29sb3I6IHJnYigxMDIsIDE0MywgMTM2KTtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5nc3Bob2NoZ2VzdGVsbHQge1xyXG4gIGJvdHRvbTogMC4yNWVtO1xyXG59XHJcblxyXG5cclxuLy8gVEVBTSBEZXRhaWxzIEtsYXNzZW5cclxuXHJcblxyXG4ubm9ybWFse1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOmdyYXk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmUtd2lkdGg6IDFweDtcclxuICBvdXRsaW5lLWNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4ubWF0LWNhcmQtaGVhZGVyLXRleHQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmdzcGtvbnRha3Qge1xyXG4gIGNvbG9yOiAjMDA0NDM5O1xyXG59XHJcblxyXG4vLy5nc3BtYXRkaWFsb2djb250ZW50IHtcclxuLy8gICY6ZXh0ZW5kKC5tYXQtZGlhbG9nLWNvbnRlbnQpO1xyXG4vLyAgbWF4LWhlaWdodDogNzV2aDtcclxuLy99XHJcblxyXG4uZ3NwYmxhY2tjb2xvciB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiIsIkBpbXBvcnQgXCJzcmMvYXBwL3RlYW0vdGVhbS5jb21wb25lbnRcIjtcclxuLmRpYWxvZy1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3NyYy9hc3NldHMvaW1hZ2VzL2tsZWluL3ZlcnRyYWdzcmVjaHQuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4iLCJAaW1wb3J0IFwiLi4vYXBwLmNvbXBvbmVudC5zY3NzXCI7XHJcblxyXG4uZ3NwdGVhbWhlYWRlciB7XHJcbiAgaGVpZ2h0OiA0NTBweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2hlYWRlci9oZWFkZXJfdGVhbS5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5nc3BjYXJkaW1hZ2VwYXJ0bmVyIHtcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcbi5nc3BjYXJkdGV4dHBhcnRuZXIge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIDwtLS0tLS0gKi9cclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgd2lkdGg6IDY2JTtcclxuICBtYXJnaW4tdG9wOiAtNDhweDtcclxuICBtYXJnaW4tbGVmdDogMTclO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcclxuICB0b3A6IDEwMHB4O1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLmdzcGNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmdzcGJvdHRvbWxlZnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3R0b206MHB4O1xyXG4gIGxlZnQ6IDAlO1xyXG4gIHBhZGRpbmctbGVmdDoxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5Nyw5Niw4NSk7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1zaXplOiA4MCU7XHJcbn1cclxuXHJcbi5nc3B0aXRsZWZvbnR0ZWFtIHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmdzcHRlYW1ib3R0b21jZW50ZXJlZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGJvdHRvbTowcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LDk2LDg1KTtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 3420:
/*!****************************************************!*\
  !*** ./src/app/taetigkeit/taetigkeit.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaetigkeitComponent": () => (/* binding */ TaetigkeitComponent)
/* harmony export */ });
/* harmony import */ var _details_template_template_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details/template/template.component */ 9761);
/* harmony import */ var _details_gesellschaftsrecht_dialog_gesellschaftsrecht_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details/gesellschaftsrecht-dialog/gesellschaftsrecht-dialog.component */ 6898);
/* harmony import */ var _details_umgruendungen_dialog_umgruendungen_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details/umgruendungen-dialog/umgruendungen-dialog.component */ 9736);
/* harmony import */ var _details_mergers_dialog_mergers_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details/mergers-dialog/mergers-dialog.component */ 9770);
/* harmony import */ var _details_arbeitsrecht_dialog_arbeitsrecht_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details/arbeitsrecht-dialog/arbeitsrecht-dialog.component */ 672);
/* harmony import */ var _details_globalmobility_dialog_globalmobility_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details/globalmobility-dialog/globalmobility-dialog.component */ 7949);
/* harmony import */ var _details_banken_dialog_banken_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details/banken-dialog/banken-dialog.component */ 3027);
/* harmony import */ var _details_vertrag_dialog_vertrag_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./details/vertrag-dialog/vertrag-dialog.component */ 1675);
/* harmony import */ var _details_oeffentlichesrecht_dialog_oeffentlichesrecht_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./details/oeffentlichesrecht-dialog/oeffentlichesrecht-dialog.component */ 5240);
/* harmony import */ var _details_immobilien_dialog_immobilien_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./details/immobilien-dialog/immobilien-dialog.component */ 3544);
/* harmony import */ var _details_datenschutz_dialog_datenschutz_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./details/datenschutz-dialog/datenschutz-dialog.component */ 8834);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _services_gsp_translation_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/gsp-translation-service.service */ 9791);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 3935);

















class TaetigkeitComponent {
    constructor(dialog, gpsTS) {
        this.dialog = dialog;
        this.gpsTS = gpsTS;
    }
    ngOnInit() {
    }
    onclick(dialogId) {
        let dialogComponent = _details_template_template_component__WEBPACK_IMPORTED_MODULE_0__.TemplateComponent;
        if (dialogId === 'gesellschaftsrecht') {
            dialogComponent = _details_gesellschaftsrecht_dialog_gesellschaftsrecht_dialog_component__WEBPACK_IMPORTED_MODULE_1__.GesellschaftsrechtDialogComponent;
        }
        else if (dialogId === 'umgruendungen') {
            dialogComponent = _details_umgruendungen_dialog_umgruendungen_dialog_component__WEBPACK_IMPORTED_MODULE_2__.UmgruendungenDialogComponent;
        }
        else if (dialogId === 'mergers') {
            dialogComponent = _details_mergers_dialog_mergers_dialog_component__WEBPACK_IMPORTED_MODULE_3__.MergersDialogComponent;
        }
        else if (dialogId === 'arbeitsrecht') {
            dialogComponent = _details_arbeitsrecht_dialog_arbeitsrecht_dialog_component__WEBPACK_IMPORTED_MODULE_4__.ArbeitsrechtDialogComponent;
        }
        else if (dialogId === 'globalmobility') {
            dialogComponent = _details_globalmobility_dialog_globalmobility_dialog_component__WEBPACK_IMPORTED_MODULE_5__.GlobalmobilityDialogComponent;
        }
        else if (dialogId === 'banken') {
            dialogComponent = _details_banken_dialog_banken_dialog_component__WEBPACK_IMPORTED_MODULE_6__.BankenDialogComponent;
        }
        else if (dialogId === 'vertrag') {
            dialogComponent = _details_vertrag_dialog_vertrag_dialog_component__WEBPACK_IMPORTED_MODULE_7__.VertragDialogComponent;
        }
        else if (dialogId === 'oeffentlichesrecht') {
            dialogComponent = _details_oeffentlichesrecht_dialog_oeffentlichesrecht_dialog_component__WEBPACK_IMPORTED_MODULE_8__.OeffentlichesrechtDialogComponent;
        }
        else if (dialogId === 'immobilien') {
            dialogComponent = _details_immobilien_dialog_immobilien_dialog_component__WEBPACK_IMPORTED_MODULE_9__.ImmobilienDialogComponent;
        }
        else if (dialogId === 'datenschutz') {
            dialogComponent = _details_datenschutz_dialog_datenschutz_dialog_component__WEBPACK_IMPORTED_MODULE_10__.DatenschutzDialogComponent;
        }
        if (!!dialogComponent) {
            this.matDialogRef = this.dialog.open(dialogComponent, {
                maxWidth: '100vw',
                maxHeight: '100vw',
            });
        }
    }
}
TaetigkeitComponent.ɵfac = function TaetigkeitComponent_Factory(t) { return new (t || TaetigkeitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_gsp_translation_service_service__WEBPACK_IMPORTED_MODULE_11__.GspTranslationServiceService)); };
TaetigkeitComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: TaetigkeitComponent, selectors: [["app-taetigkeit"]], decls: 129, vars: 58, consts: [[1, "gsptateigkeitsbereichheader"], [1, "container", "gsptextinimage_pos"], [1, "row"], [1, "col-md-8"], ["src", "../../assets/images/gs_logo_subseiten.png", 2, "width", "327px"], [1, "container", "gsptextinimage"], [1, "col-md-1"], [1, "gsptitlefonttaetigkeit"], [1, "col-md-2"], [1, "gspparagraph"], [1, "col-lg-12"], [1, "col-xs-6", "col-sm-5", "col-md-4", "col-lg-3", "gspcolimagecenter", 3, "click"], [1, "border-0"], ["routerLink", "../gesellschaftsrecht"], [1, "gsptaetigkeitcontainer"], ["src", "../../assets/images/klein/gesellschaftsrecht.jpg", 1, "gspcardimage"], [1, "gsptaetigkeitbottomcentered"], ["routerLink", "../umgruendung"], ["src", "../../assets/images/klein/umgruendungen.jpg", "alt", "...", 1, "gspcardimage"], ["routerLink", "../mergers"], ["src", "../../assets/images/klein/taetigkeitsbereiche_mergers.jpg", "alt", "...", 1, "gspcardimage"], ["routerLink", "../arbeitsrecht"], ["src", "../../assets/images/klein/arbeitsrecht.jpg", "alt", "...", 1, "gspcardimage"], ["routerLink", "../globalmobility"], ["src", "../../assets/images/klein/international_global.jpg", 1, "gspcardimage"], ["routerLink", "../banken"], ["src", "../../assets/images/klein/banken.jpg", "alt", "...", 1, "gspcardimage"], ["routerLink", "../vertragsgestaltung"], ["src", "../../assets/images/klein/vertragsrecht.jpg", "alt", "...", 1, "gspcardimage"], ["routerLink", "../oeffentlichkeitsrecht"], ["src", "../../assets/images/klein/offentlichkeitsrecht.jpg", "alt", "...", 1, "gspcardimage"], ["routerLink", "../immobilienrecht"], ["src", "../../assets/images/klein/immobilienrecht.jpg", 1, "gspcardimage"], ["routerLink", "../litigation"], ["src", "../../assets/images/klein/zivilprozess.jpg", "alt", "...", 1, "gspcardimage"], [1, "col-xs-4", "col-sm-4", "col-md-4", "col-lg-3", "gspcolimagecenter"], [1, "border-0", 2, "padding-left", "20px"], [1, "gsptitlefont"]], template: function TaetigkeitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 5)(6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 3)(9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](11, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "div", 3)(17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "div", 9)(22, "div", 2)(23, "div", 10)(24, "div", 2)(25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function TaetigkeitComponent_Template_div_click_25_listener() { return ctx.onclick("gesellschaftsrecht"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "div", 12)(27, "div", 13)(28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](29, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "div", 16)(31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](33, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](35, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function TaetigkeitComponent_Template_div_click_35_listener() { return ctx.onclick("umgruendungen"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "div", 12)(37, "div", 17)(38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](39, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "div", 16)(41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](43, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](45, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function TaetigkeitComponent_Template_div_click_45_listener() { return ctx.onclick("mergers"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](46, "div", 12)(47, "div", 19)(48, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](49, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](50, "div", 16)(51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](53, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](55, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function TaetigkeitComponent_Template_div_click_55_listener() { return ctx.onclick("arbeitsrecht"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](56, "div", 12)(57, "div", 21)(58, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](59, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](60, "div", 16)(61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](63, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](65, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function TaetigkeitComponent_Template_div_click_65_listener() { return ctx.onclick("globalmobility"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](66, "div", 12)(67, "div", 23)(68, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](69, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](70, "div", 16)(71, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](73, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](74, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](75, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function TaetigkeitComponent_Template_div_click_75_listener() { return ctx.onclick("banken"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](76, "div", 12)(77, "div", 25)(78, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](79, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](80, "div", 16)(81, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](83, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](84, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](85, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function TaetigkeitComponent_Template_div_click_85_listener() { return ctx.onclick("vertrag"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](86, "div", 12)(87, "div", 27)(88, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](89, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](90, "div", 16)(91, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](93, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](94, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](95, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function TaetigkeitComponent_Template_div_click_95_listener() { return ctx.onclick("oeffentlichesrecht"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](96, "div", 12)(97, "div", 29)(98, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](99, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](100, "div", 16)(101, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](103, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](104, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](105, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function TaetigkeitComponent_Template_div_click_105_listener() { return ctx.onclick("immobilien"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](106, "div", 12)(107, "div", 31)(108, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](109, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](110, "div", 16)(111, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](113, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](114, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](115, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function TaetigkeitComponent_Template_div_click_115_listener() { return ctx.onclick("datenschutz"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](116, "div", 12)(117, "div", 33)(118, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](119, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](120, "div", 16)(121, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](122);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](123, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](124, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](125, "div", 35)(126, "div", 36)(127, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](128, " Effiziente Beratung auf h\u00F6chstem Niveau.");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](11, 12, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](12, 14, "TAETIGKEITSBEREICH")));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](19, 16, "TAETP1"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](33, 18, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](34, 20, "GESELLSCHAFTSRECHT")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](43, 22, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](44, 24, "UMGRUENDUNG")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](53, 26, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](54, 28, "MERGERS")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](63, 30, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](64, 32, "ARBEITSRECHT")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](73, 34, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](74, 36, "GLOBALMOBILITY")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](83, 38, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](84, 40, "BANKEN")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](93, 42, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](94, 44, "VERTRAGSGESTALTUNG")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](103, 46, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](104, 48, "OEFFENTLICHKEITSRECHT")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](113, 50, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](114, 52, "IMMOBILIENRECHT")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](123, 54, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](124, 56, "DATENSCHUTZIPIT")), "");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_15__.UpperCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe], styles: [".gsptitlefont[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 30px;\n  color: rgb(0, 68, 57);\n}\n\n.gsptextfont[_ngcontent-%COMP%] {\n  font-family: \"Source Sans Pro\", sans-serif;\n  color: black;\n}\n\n.gspcardimage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.gspcardtext[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: rgb(97, 96, 85);\n  top: 100px;\n  opacity: 0.7;\n  margin-top: -45px;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%], .gspcardtext[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.gspcardtext2zeilig[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n  margin-top: -68px;\n}\n\n.gspcardtextperson[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  margin-top: -40px;\n  width: 100%;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n\n.gsptextinimage[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.gsptextinimage_pos[_ngcontent-%COMP%] {\n  margin-left: 5vw;\n  margin-top: 2vh;\n  color: white;\n}\n\n.gspheaderimage[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.gspheadertext[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheadertext[_ngcontent-%COMP%]:hover {\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheaderlanguage[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding-right: 0px;\n  font-size: 0.8rem;\n  padding-top: 12px;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n#deutschID[_ngcontent-%COMP%] {\n  color: black;\n}\n\n#deutschID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n#englishID[_ngcontent-%COMP%] {\n  color: rgb(135, 142, 171);\n}\n\n#englishID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n.gspparagraph[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  margin-top: 0px;\n  background-color: rgb(242, 237, 234);\n}\n\n.gspcolimageleft[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 4px;\n  margin-right: 4px;\n  padding-bottom: 30px;\n}\n\n.gspcolimageright[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 0;\n  padding-bottom: 30px;\n}\n\n.gspcolimagecenter[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 30px;\n}\n\n.gsprouterlinkactive[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%]:hover {\n  color: rgb(102, 143, 136);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gsphochgestellt[_ngcontent-%COMP%] {\n  bottom: 0.25em;\n}\n\n.normal[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: gray;\n  border: none;\n  outline-width: 1px;\n  outline-color: gray;\n}\n\n.mat-card-header-text[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\n.gspkontakt[_ngcontent-%COMP%] {\n  color: #004439;\n}\n\n.gspblackcolor[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.gsptateigkeitsbereichheader[_ngcontent-%COMP%] {\n  height: 450px;\n  background-image: url('header_taetigkeitsbereiche.jpg');\n  background-position: center center;\n  background-size: cover;\n  overflow: hidden;\n  padding-top: 30px;\n}\n\n.gsptaetigkeitcontainer[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  color: white;\n}\n\n.gsptaetigkeitbottomcentered[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  bottom: 0px;\n  background-color: rgb(97, 96, 85);\n  opacity: 0.7;\n  color: white;\n}\n\n.gsptitlefonttaetigkeit[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 30px;\n  color: white;\n  padding-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxhcHAuY29tcG9uZW50LnNjc3MiLCJ0YWV0aWdrZWl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOENBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURHQTtFQUNFLDBDQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLHNCQUFBLEVBQUEsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ0FGOztBREdBO0VBQ0UscUJBQUE7QUNBRjs7QURHQTtFQUNFLHNCQUFBLEVBQUEsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLHNCQUFBLEVBQUEsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UscUJBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDBDQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSx1QkFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7QUNBRjs7QURHQTtFQUNFLHVCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLDBDQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtFQUNBLDBDQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0FDQUY7O0FET0E7RUFDRSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0pGOztBRE9BO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDSkY7O0FET0E7RUFDRSxjQUFBO0FDSkY7O0FEWUE7RUFDRSxZQUFBO0FDVEY7O0FBL0tBO0VBQ0UsYUFBQTtFQUNBLHVEQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFrTEY7O0FBOUtBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFpTEY7O0FBL0tBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBa0xGOztBQS9LQTtFQUNFLDhDQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQWtMRiIsImZpbGUiOiJ0YWV0aWdrZWl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdzcHRpdGxlZm9udCB7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgY29sb3I6IHJnYigwLDY4LDU3KTtcclxufVxyXG5cclxuXHJcbi5nc3B0ZXh0Zm9udCB7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmdzcGNhcmRpbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZ3NwY2FyZHRleHQge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIDwtLS0tLS0gKi9cclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5NywgOTYsIDg1KTtcclxuICB0b3A6IDEwMHB4O1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICBtYXJnaW4tdG9wOiAtNDVweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmEsIC5nc3BjYXJkdGV4dDpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZ3NwY2FyZHRleHQyemVpbGlnIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiA8LS0tLS0tICovXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcclxuICB0b3A6IDEwMHB4O1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBtYXJnaW4tdG9wOiAtNjhweDtcclxufVxyXG5cclxuLmdzcGNhcmR0ZXh0cGVyc29uIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiA8LS0tLS0tICovXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IC00MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDFweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XHJcbiAgdG9wOiAxMDBweDtcclxuICBvcGFjaXR5OiAwLjVcclxufVxyXG5cclxuLmdzcHRleHRpbmltYWdlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5nc3B0ZXh0aW5pbWFnZV9wb3Mge1xyXG4gIG1hcmdpbi1sZWZ0OiA1dnc7XHJcbiAgbWFyZ2luLXRvcDogMnZoO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmdzcGhlYWRlcmltYWdlIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5nc3BoZWFkZXJ0ZXh0IHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwaGVhZGVydGV4dDpob3ZlciB7XHJcbiAgY29sb3I6IHJnYigwLDY4LDU3KTtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5nc3BoZWFkZXJsYW5ndWFnZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBwYWRkaW5nLXRvcDogMTJweDtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiNkZXV0c2NoSUQge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuI2RldXRzY2hJRDpob3ZlciB7XHJcbiAgY29sb3I6IHJnYigzOCwgNTAsIDEwNCk7XHJcbn1cclxuXHJcbiNlbmdsaXNoSUQge1xyXG4gIGNvbG9yOiByZ2IoMTM1LCAxNDIsIDE3MSk7XHJcbn1cclxuXHJcbiNlbmdsaXNoSUQ6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMzgsIDUwLCAxMDQpO1xyXG59XHJcblxyXG4uZ3NwcGFyYWdyYXBoIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDIzNywgMjM0KTtcclxufVxyXG5cclxuLmdzcGNvbGltYWdlbGVmdCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmdzcGNvbGltYWdlcmlnaHQge1xyXG4gIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5nc3Bjb2xpbWFnZWNlbnRlciB7XHJcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uZ3Nwcm91dGVybGlua2FjdGl2ZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IHJnYigwLDY4LDU3KTtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5nc3Bmb290ZXJsaW5rIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwZm9vdGVybGluazpob3ZlciB7XHJcbiAgY29sb3I6IHJnYigxMDIsIDE0MywgMTM2KTtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5nc3Bob2NoZ2VzdGVsbHQge1xyXG4gIGJvdHRvbTogMC4yNWVtO1xyXG59XHJcblxyXG5cclxuLy8gVEVBTSBEZXRhaWxzIEtsYXNzZW5cclxuXHJcblxyXG4ubm9ybWFse1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOmdyYXk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmUtd2lkdGg6IDFweDtcclxuICBvdXRsaW5lLWNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4ubWF0LWNhcmQtaGVhZGVyLXRleHQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmdzcGtvbnRha3Qge1xyXG4gIGNvbG9yOiAjMDA0NDM5O1xyXG59XHJcblxyXG4vLy5nc3BtYXRkaWFsb2djb250ZW50IHtcclxuLy8gICY6ZXh0ZW5kKC5tYXQtZGlhbG9nLWNvbnRlbnQpO1xyXG4vLyAgbWF4LWhlaWdodDogNzV2aDtcclxuLy99XHJcblxyXG4uZ3NwYmxhY2tjb2xvciB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiIsIkBpbXBvcnQgXCIuLi9hcHAuY29tcG9uZW50LnNjc3NcIjtcclxuXHJcbi5nc3B0YXRlaWdrZWl0c2JlcmVpY2hoZWFkZXIge1xyXG4gIGhlaWdodDogNDUwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXIvaGVhZGVyX3RhZXRpZ2tlaXRzYmVyZWljaGUuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcblxyXG5cclxuLmdzcHRhZXRpZ2tlaXRjb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5nc3B0YWV0aWdrZWl0Ym90dG9tY2VudGVyZWQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBib3R0b206MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5Nyw5Niw4NSk7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmdzcHRpdGxlZm9udHRhZXRpZ2tlaXR7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 4190:
/*!*************************************************************************!*\
  !*** ./src/app/team/details/bgarger-dialog/bgarger-dialog.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BgargerDialogComponent": () => (/* binding */ BgargerDialogComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ 5139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _services_gsp_translation_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/gsp-translation-service.service */ 9791);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);









function BgargerDialogComponent_mat_card_subtitle_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Rechtsanwalt, Partner");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BgargerDialogComponent_mat_card_subtitle_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Attorney-at-Law / Rechtsanwalt, Partner");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BgargerDialogComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "div", 12)(2, "p", 13)(3, "b")(4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "E");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 14)(7, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " bgarger(AT)gsplegal.at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 13)(10, "b")(11, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "T");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 14)(14, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " +43 1 319 94 70");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p", 17)(17, "b")(18, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " +43 1 319 94 70-70\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p", 17)(23, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Beratungsschwerpunkte");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p", 20)(26, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Unternehmens-\nund Gesellschaftsrecht");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "p", 20)(33, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Umgr\u00FCndungen\nund Umstrukturierungen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "p", 20)(40, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Merger\n& Acquisitions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "p", 20)(47, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Versicherungsrecht");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "p", 20)(54, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Stiftungsrecht");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "p", 23)(61, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Arbeitsrecht");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "p", 17)(68, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Sprachen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "p", 20)(71, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "Deutsch");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "p", 23)(78, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Englisch");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "p", 17)(85, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "Ausbildung");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "p", 24)(88, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "Studium der Rechtswissenschaften, Universit\u00E4t\nWien (Mag. iur. 1990, Dr. iur. 1995)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "p", 24)(95, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "Studium der Betriebswirtschaftslehre,\nWirtschaftsuniversit\u00E4t Wien (Mag. rer. soc. oec. 1998)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "p", 23)(102, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, "Studium\nan der Hochschule St. Gallen (1991-1992)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "p", 25)(109, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} }
function BgargerDialogComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "div", 12)(2, "p", 13)(3, "b")(4, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "E");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " bgarger(AT)gsplegal.at");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 13)(9, "b")(10, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "T");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 27)(13, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " +43 1 319 94 70");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p", 17)(16, "b")(17, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "+43\n1 319 94 70-70");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p", 17)(22, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Core areas of competence");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p", 20)(25, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Corporate\nand Commercial Law");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "p", 20)(32, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Reorganizations\nand Restructurings");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "p", 20)(39, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Merger\n& Acquisitions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "p", 20)(46, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Insurance\nLaw");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "p", 20)(53, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Foundation\nLaw");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "p", 23)(60, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Labor\nLaw");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "p", 17)(67, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Languages");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "p", 20)(70, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "German");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "p", 23)(77, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "English");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "p", 17)(84, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Education");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "p", 24)(87, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "University degree in Law, University of Vienna\n(Mag. iur. 1990, Dr. iur. 1995)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "p", 24)(94, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, "University degree in Business Administration,\nVienna Business University (Mag.rer.soc.oec. 1998)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "p", 23)(101, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "Studies\nat the University of St. Gallen (1991-1992)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "p", 17)(108, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "Professional Background");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "p", 24)(111, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "Partner with GARGER SPALLINGER Rechsanw\u00E4lte\nGmbH since 2010");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "p", 24)(118, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, "Admitted as Attorney-at-Law (");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, "Rechtsanwalt");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, ")\nin Austria since 2005");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "p", 24)(128, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, "Associate with renowned commercial law firms");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "p", 24)(135, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](136, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](138, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](140, "Tax Manager in a renowned international\nauditing and tax consulting firm");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "p", 25)(142, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} }
class BgargerDialogComponent {
    constructor(dialog, gpsTS) {
        this.dialog = dialog;
        this.gpsTS = gpsTS;
        this.faXmark = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faXmark;
    }
    openDialog() {
    }
    onClose() {
        this.dialog.closeAll();
    }
    ngAfterViewInit() {
        jquery__WEBPACK_IMPORTED_MODULE_0__.find(".mat-card-header-text")[0].style.width = "100%";
    }
}
BgargerDialogComponent.ɵfac = function BgargerDialogComponent_Factory(t) { return new (t || BgargerDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_gsp_translation_service_service__WEBPACK_IMPORTED_MODULE_1__.GspTranslationServiceService)); };
BgargerDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BgargerDialogComponent, selectors: [["app-bgarger-dialog"]], decls: 18, vars: 6, consts: [["mat-dialog-content", "", 1, "gspmatdialogcontent"], ["matdialogcontent", ""], [1, "dialog-card"], ["mat-card-avatar", "", 1, "dialog-header"], [2, "width", "100%"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], [1, "MsoNormalIndent"], ["lang", "EN-US", 2, "font-size", "14.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif", "color", "#004439"], [1, "normal", 3, "title", "click"], ["size", "xs", 3, "icon"], [4, "ngIf"], [2, "margin-left", "20px", "overflow", "hidden"], [1, "WordSection1"], [1, "MsoNormalIndent", 2, "margin-top", "0cm", "margin-right", "0cm", "margin-bottom", "0cm", "margin-left", "1.0cm"], ["lang", "DE-AT", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif"], ["href", "mailto:bgarger@gsplegal.at", 1, "gspkontakt"], ["href", "tel:+43-1-319-94-70", 1, "gspkontakt"], [1, "MsoNormalIndent", 2, "margin-left", "1.0cm"], ["lang", "DE-AT", 1, "gspkontakt", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif"], ["lang", "DE-AT", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif", "color", "#004439"], [1, "MsoNormalIndent", 2, "margin-top", "0cm", "margin-right", "0cm", "margin-bottom", "0cm", "margin-left", "64.05pt", "text-indent", "-17.85pt"], ["lang", "DE-AT", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "Wingdings"], [2, "font", "7.0pt \"Times New Roman\""], [1, "MsoNormalIndent", 2, "margin-left", "64.35pt", "text-indent", "-18.0pt"], [1, "MsoNormalIndent", 2, "margin-top", "0cm", "margin-right", "0cm", "margin-bottom", "0cm", "margin-left", "64.35pt", "text-indent", "-18.0pt"], [1, "MsoNormal"], ["lang", "DE-AT"], [2, "font-size", "12.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif"], ["lang", "EN-US", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif"], ["lang", "EN-US", 1, "gspkontakt", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif"], ["lang", "EN-US", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif", "color", "#004439"], ["lang", "EN-US", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "Wingdings"], ["lang", "EN-US"]], template: function BgargerDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1)(2, "mat-card", 2)(3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-card-title", 4)(6, "span", 5)(7, "p", 6)(8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " MMag. Dr. Bernhard GARGER");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span")(11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BgargerDialogComponent_Template_button_click_11_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, BgargerDialogComponent_mat_card_subtitle_13_Template, 2, 0, "mat-card-subtitle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, BgargerDialogComponent_mat_card_subtitle_14_Template, 2, 0, "mat-card-subtitle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-card-content", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, BgargerDialogComponent_span_16_Template, 111, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, BgargerDialogComponent_span_17_Template, 144, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.gpsTS.isGerman() ? "schliessen" : "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faXmark);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.gpsTS.isGerman());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.gpsTS.isGerman());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.gpsTS.isGerman());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.gpsTS.isGerman());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardAvatar, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutAlignDirective], styles: [".gsptitlefont[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 30px;\n  color: rgb(0, 68, 57);\n}\n\n.gsptextfont[_ngcontent-%COMP%] {\n  font-family: \"Source Sans Pro\", sans-serif;\n  color: black;\n}\n\n.gspcardimage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.gspcardtext[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: rgb(97, 96, 85);\n  top: 100px;\n  opacity: 0.7;\n  margin-top: -45px;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%], .gspcardtext[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.gspcardtext2zeilig[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n  margin-top: -68px;\n}\n\n.gspcardtextperson[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  margin-top: -40px;\n  width: 100%;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n\n.gsptextinimage[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.gsptextinimage_pos[_ngcontent-%COMP%] {\n  margin-left: 5vw;\n  margin-top: 2vh;\n  color: white;\n}\n\n.gspheaderimage[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.gspheadertext[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheadertext[_ngcontent-%COMP%]:hover {\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheaderlanguage[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding-right: 0px;\n  font-size: 0.8rem;\n  padding-top: 12px;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n#deutschID[_ngcontent-%COMP%] {\n  color: black;\n}\n\n#deutschID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n#englishID[_ngcontent-%COMP%] {\n  color: rgb(135, 142, 171);\n}\n\n#englishID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n.gspparagraph[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  margin-top: 0px;\n  background-color: rgb(242, 237, 234);\n}\n\n.gspcolimageleft[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 4px;\n  margin-right: 4px;\n  padding-bottom: 30px;\n}\n\n.gspcolimageright[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 0;\n  padding-bottom: 30px;\n}\n\n.gspcolimagecenter[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 30px;\n}\n\n.gsprouterlinkactive[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%]:hover {\n  color: rgb(102, 143, 136);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gsphochgestellt[_ngcontent-%COMP%] {\n  bottom: 0.25em;\n}\n\n.normal[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: gray;\n  border: none;\n  outline-width: 1px;\n  outline-color: gray;\n}\n\n.mat-card-header-text[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\n.gspkontakt[_ngcontent-%COMP%] {\n  color: #004439;\n}\n\n.gspblackcolor[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.gspteamheader[_ngcontent-%COMP%] {\n  height: 450px;\n  background-image: url('header_team.jpg');\n  background-position: center center;\n  background-size: cover;\n  overflow: hidden;\n  padding-top: 30px;\n}\n\n.gspcardimagepartner[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.gspcardtextpartner[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 66%;\n  margin-top: -48px;\n  margin-left: 17%;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n\n.gspcontainer[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  color: white;\n  width: 100%;\n}\n\n.gspbottomleft[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  bottom: 0px;\n  left: 0%;\n  padding-left: 15px;\n  background-color: rgb(97, 96, 85);\n  opacity: 0.7;\n  text-align: left;\n  font-size: 80%;\n}\n\n.gsptitlefontteam[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 30px;\n  color: white;\n  padding-top: 30px;\n}\n\n.gspteambottomcentered[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  bottom: 0px;\n  background-color: rgb(97, 96, 85);\n  opacity: 0.7;\n  color: white;\n}\n\n.dialog-header[_ngcontent-%COMP%] {\n  background-image: url(\"/src/assets/images/bgarger.jpg\");\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFwcC5jb21wb25lbnQuc2NzcyIsImJnYXJnZXItZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFx0ZWFtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOENBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURHQTtFQUNFLDBDQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLHNCQUFBLEVBQUEsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ0FGOztBREdBO0VBQ0UscUJBQUE7QUNBRjs7QURHQTtFQUNFLHNCQUFBLEVBQUEsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLHNCQUFBLEVBQUEsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UscUJBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDBDQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSx1QkFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7QUNBRjs7QURHQTtFQUNFLHVCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLDBDQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtFQUNBLDBDQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0FDQUY7O0FET0E7RUFDRSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0pGOztBRE9BO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDSkY7O0FET0E7RUFDRSxjQUFBO0FDSkY7O0FEWUE7RUFDRSxZQUFBO0FDVEY7O0FDL0tBO0VBQ0UsYUFBQTtFQUNBLHdDQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QURrTEY7O0FDL0tBO0VBQ0UsV0FBQTtBRGtMRjs7QUNoTEE7RUFDRSxzQkFBQSxFQUFBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBRG1MRjs7QUNoTEE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QURtTEY7O0FDakxBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBRG9MRjs7QUNqTEE7RUFDRSw4Q0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QURvTEY7O0FDL0tBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FEa0xGOztBQTNPQTtFQUNFLHVEQUFBO0VBQ0Esc0JBQUE7QUE4T0YiLCJmaWxlIjoiYmdhcmdlci1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3NwdGl0bGVmb250IHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogcmdiKDAsNjgsNTcpO1xyXG59XHJcblxyXG5cclxuLmdzcHRleHRmb250IHtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uZ3NwY2FyZGltYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5nc3BjYXJkdGV4dCB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogPC0tLS0tLSAqL1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LCA5NiwgODUpO1xyXG4gIHRvcDogMTAwcHg7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIG1hcmdpbi10b3A6IC00NXB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYSwgLmdzcGNhcmR0ZXh0OmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5nc3BjYXJkdGV4dDJ6ZWlsaWcge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIDwtLS0tLS0gKi9cclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xyXG4gIHRvcDogMTAwcHg7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIG1hcmdpbi10b3A6IC02OHB4O1xyXG59XHJcblxyXG4uZ3NwY2FyZHRleHRwZXJzb24ge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIDwtLS0tLS0gKi9cclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogLTQwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDFweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcclxuICB0b3A6IDEwMHB4O1xyXG4gIG9wYWNpdHk6IDAuNVxyXG59XHJcblxyXG4uZ3NwdGV4dGluaW1hZ2Uge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmdzcHRleHRpbmltYWdlX3BvcyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDV2dztcclxuICBtYXJnaW4tdG9wOiAydmg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZ3NwaGVhZGVyaW1hZ2Uge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmdzcGhlYWRlcnRleHQge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5nc3BoZWFkZXJ0ZXh0OmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDAsNjgsNTcpO1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmdzcGhlYWRlcmxhbmd1YWdlIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuI2RldXRzY2hJRCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4jZGV1dHNjaElEOmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDM4LCA1MCwgMTA0KTtcclxufVxyXG5cclxuI2VuZ2xpc2hJRCB7XHJcbiAgY29sb3I6IHJnYigxMzUsIDE0MiwgMTcxKTtcclxufVxyXG5cclxuI2VuZ2xpc2hJRDpob3ZlciB7XHJcbiAgY29sb3I6IHJnYigzOCwgNTAsIDEwNCk7XHJcbn1cclxuXHJcbi5nc3BwYXJhZ3JhcGgge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogNTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MiwgMjM3LCAyMzQpO1xyXG59XHJcblxyXG4uZ3NwY29saW1hZ2VsZWZ0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgcGFkZGluZy1yaWdodDogNHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uZ3NwY29saW1hZ2VyaWdodCB7XHJcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmdzcGNvbGltYWdlY2VudGVyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5nc3Byb3V0ZXJsaW5rYWN0aXZlIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogcmdiKDAsNjgsNTcpO1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmdzcGZvb3Rlcmxpbmsge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5nc3Bmb290ZXJsaW5rOmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDEwMiwgMTQzLCAxMzYpO1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmdzcGhvY2hnZXN0ZWxsdCB7XHJcbiAgYm90dG9tOiAwLjI1ZW07XHJcbn1cclxuXHJcblxyXG4vLyBURUFNIERldGFpbHMgS2xhc3NlblxyXG5cclxuXHJcbi5ub3JtYWx7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6Z3JheTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZS13aWR0aDogMXB4O1xyXG4gIG91dGxpbmUtY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1oZWFkZXItdGV4dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZ3Nwa29udGFrdCB7XHJcbiAgY29sb3I6ICMwMDQ0Mzk7XHJcbn1cclxuXHJcbi8vLmdzcG1hdGRpYWxvZ2NvbnRlbnQge1xyXG4vLyAgJjpleHRlbmQoLm1hdC1kaWFsb2ctY29udGVudCk7XHJcbi8vICBtYXgtaGVpZ2h0OiA3NXZoO1xyXG4vL31cclxuXHJcbi5nc3BibGFja2NvbG9yIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuIiwiQGltcG9ydCBcInNyYy9hcHAvdGVhbS90ZWFtLmNvbXBvbmVudFwiO1xyXG4uZGlhbG9nLWNhcmQge1xyXG59XHJcblxyXG5cclxuLmRpYWxvZy1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3NyYy9hc3NldHMvaW1hZ2VzL2JnYXJnZXIuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4iLCJAaW1wb3J0IFwiLi4vYXBwLmNvbXBvbmVudC5zY3NzXCI7XHJcblxyXG4uZ3NwdGVhbWhlYWRlciB7XHJcbiAgaGVpZ2h0OiA0NTBweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2hlYWRlci9oZWFkZXJfdGVhbS5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5nc3BjYXJkaW1hZ2VwYXJ0bmVyIHtcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcbi5nc3BjYXJkdGV4dHBhcnRuZXIge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIDwtLS0tLS0gKi9cclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgd2lkdGg6IDY2JTtcclxuICBtYXJnaW4tdG9wOiAtNDhweDtcclxuICBtYXJnaW4tbGVmdDogMTclO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcclxuICB0b3A6IDEwMHB4O1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLmdzcGNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmdzcGJvdHRvbWxlZnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3R0b206MHB4O1xyXG4gIGxlZnQ6IDAlO1xyXG4gIHBhZGRpbmctbGVmdDoxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5Nyw5Niw4NSk7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1zaXplOiA4MCU7XHJcbn1cclxuXHJcbi5nc3B0aXRsZWZvbnR0ZWFtIHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmdzcHRlYW1ib3R0b21jZW50ZXJlZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGJvdHRvbTowcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LDk2LDg1KTtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 7707:
/*!*********************************************************************************!*\
  !*** ./src/app/team/details/fspallinger-dialog/fspallinger-dialog.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FspallingerDialogComponent": () => (/* binding */ FspallingerDialogComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ 5139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _services_gsp_translation_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/gsp-translation-service.service */ 9791);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);









function FspallingerDialogComponent_mat_card_subtitle_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Rechtsanwalt, Partner ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Attorney-at-Law, New York");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FspallingerDialogComponent_mat_card_subtitle_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Attorney-at-Law / Rechtsanwalt, Partner");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "also admitted as Attorney-at-Law in New York");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FspallingerDialogComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "div", 12)(2, "p", 13)(3, "b")(4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "E");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 14)(7, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " fspallinger(AT)gsplegal.at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 13)(10, "b")(11, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "T");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 14)(14, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " +43 1 319 94 70");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p", 17)(17, "b")(18, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " +43 1 319 94 70-70 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p", 17)(23, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Beratungsschwerpunkte");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p", 20)(26, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Unternehmens-\nund Gesellschaftsrecht");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "p", 20)(33, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Umgr\u00FCndungen\nund Umstrukturierungen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "p", 20)(40, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Merger\n& Acquisitions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "p", 20)(47, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Grenz\u00FCberschreitende\nTransaktionen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "p", 20)(54, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Vertragsrecht\n(national und international)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "p", 23)(61, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Zivilrecht");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "p", 17)(68, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Sprachen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "p", 20)(71, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "Deutsch");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "p", 20)(78, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Englisch");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "p", 23)(85, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "Spanisch");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "p", 17)(92, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "Ausbildung");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "p", 20)(95, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "Studium\nder Rechtswissenschaften, Universit\u00E4t Wien (Mag. iur. 2000)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "p", 20)(102, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, "Studium\nder Internationalen Betriebswirtschaftslehre, Universit\u00E4t Wien (Mag. rer. soc.\noec 2001)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "p", 23)(109, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, "LL.M.-Studium\nan der Columbia University School of Law, New York, USA (2002/2003)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "p", 17)(116, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, "Werdegang");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "p", 26)(119, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124, "Partner bei GARGER SPALLINGER Rechsanw\u00E4lte GmbH\nseit 2010");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "p", 26)(126, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, "Eingetragener Rechtsanwalt seit 2008");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "p", 26)(133, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](136, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](138, "eingetragen als Attorney-at-Law in New York\nseit 2005");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "p", 26)(140, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](145, "Rechtsanwalt/-anw\u00E4rter\nin renommierten Wirschaftskanzleien");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "p", 26)(147, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](148, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](150, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](152, "\u00D6sterreichisches\nAu\u00DFenministerium");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} }
function FspallingerDialogComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "div", 12)(2, "p", 13)(3, "b")(4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "E");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 14)(7, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " fspallinger(AT)gsplegal.at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 13)(10, "b")(11, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "T");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 14)(14, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " +43 1 319 94 70");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p", 17)(17, "b")(18, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " +43 1 319 94 70-70 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p", 17)(23, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Core areas of competence");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p", 20)(26, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Corporate\nand Commercial Law");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "p", 20)(33, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Reorganizations\nand Restructurings");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "p", 20)(40, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Merger\n& Acquisitions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "p", 20)(47, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Cross-border\ntransactions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "p", 20)(54, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Contracts\n(national and international)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "p", 23)(61, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Civil\nLaw");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "p", 17)(68, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Languages");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "p", 20)(71, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "German");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "p", 20)(78, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "English");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "p", 23)(85, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "Spanish");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "p", 17)(92, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "Education");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "p", 20)(95, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "University\ndegree in Law, University of Vienna (Mag. iur. 2000)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "p", 20)(102, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, "University\ndegree in International Business Administration, University of Vienna\n(Mag.rer.soc.oec. 2001)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "p", 23)(109, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, "Master\nof Law (LL.M.) degree, Columbia University School of Law, New York (2002/2003)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "p", 17)(116, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, "Professional Background");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "p", 26)(119, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124, "Partner with GARGER SPALLINGER Rechsanw\u00E4lte\nGmbH since 2010");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "p", 26)(126, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, "Admitted as Attorney-at-Law (");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, "Rechtsanwalt");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, ")\nin Austria since 2008");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "p", 26)(136, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](137, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "Admitted as Attorney-at-Law in New York since 2005");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "p", 26)(143, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](144, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](148, "Attorney-of-Law/Associate with renowned\ncommercial law firms");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "p", 26)(150, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](151, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](155, "Austrian Ministry of Foreign Affairs");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "p", 28)(157, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](158, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} }
class FspallingerDialogComponent {
    constructor(dialog, gpsTS) {
        this.dialog = dialog;
        this.gpsTS = gpsTS;
        this.faXmark = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faXmark;
    }
    openDialog() {
    }
    onClose() {
        this.dialog.closeAll();
    }
    ngAfterViewInit() {
        jquery__WEBPACK_IMPORTED_MODULE_0__.find(".mat-card-header-text")[0].style.width = "100%";
    }
}
FspallingerDialogComponent.ɵfac = function FspallingerDialogComponent_Factory(t) { return new (t || FspallingerDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_gsp_translation_service_service__WEBPACK_IMPORTED_MODULE_1__.GspTranslationServiceService)); };
FspallingerDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FspallingerDialogComponent, selectors: [["app-fspallinger-dialog"]], decls: 18, vars: 6, consts: [["mat-dialog-content", "", 1, "gspmatdialogcontent"], ["matdialogcontent", ""], [1, "dialog-card"], ["mat-card-avatar", "", 1, "dialog-header"], [2, "width", "100%"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], [1, "MsoNormalIndent"], ["lang", "EN-US", 2, "font-size", "14.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif", "color", "#004439"], [1, "normal", 3, "title", "click"], ["size", "xs", 3, "icon"], [4, "ngIf"], [2, "margin-left", "20px", "overflow", "hidden"], [1, "WordSection1"], [1, "MsoNormalIndent", 2, "margin-top", "0cm", "margin-right", "0cm", "margin-bottom", "0cm", "margin-left", "1.0cm"], ["lang", "DE-AT", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif"], ["href", "mailto:fspallinger@gsplegal.at", 1, "gspkontakt"], ["href", "tel:+43-1-319-94-70", 1, "gspkontakt"], [1, "MsoNormalIndent", 2, "margin-left", "1.0cm"], ["lang", "DE-AT", 1, "gspkontakt", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif"], ["lang", "DE-AT", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif", "color", "#004439"], [1, "MsoNormalIndent", 2, "margin-top", "0cm", "margin-right", "0cm", "margin-bottom", "0cm", "margin-left", "64.05pt", "text-indent", "-17.85pt"], ["lang", "DE-AT", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "Wingdings"], [2, "font", "7.0pt \"Times New Roman\""], [1, "MsoNormalIndent", 2, "margin-left", "64.35pt", "text-indent", "-18.0pt"], ["lang", "EN-US", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "Wingdings"], ["lang", "EN-US", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif"], [1, "MsoNormalIndent", 2, "margin-top", "0cm", "margin-right", "0cm", "margin-bottom", "0cm", "margin-left", "64.35pt", "text-indent", "-18.0pt"], ["lang", "DE-AT", 2, "font-family", "Wingdings"], [1, "MsoNormal"], ["lang", "DE-AT"]], template: function FspallingerDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1)(2, "mat-card", 2)(3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-card-title", 4)(6, "span", 5)(7, "p", 6)(8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "MMag. FORREST SPALLINGER, LL.M. (Columbia)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span")(11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FspallingerDialogComponent_Template_button_click_11_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, FspallingerDialogComponent_mat_card_subtitle_13_Template, 4, 0, "mat-card-subtitle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, FspallingerDialogComponent_mat_card_subtitle_14_Template, 4, 0, "mat-card-subtitle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-card-content", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, FspallingerDialogComponent_span_16_Template, 153, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, FspallingerDialogComponent_span_17_Template, 159, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.gpsTS.isGerman() ? "schliessen" : "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faXmark);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.gpsTS.isGerman());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.gpsTS.isGerman());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.gpsTS.isGerman());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.gpsTS.isGerman());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardAvatar, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutAlignDirective], styles: [".gsptitlefont[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 30px;\n  color: rgb(0, 68, 57);\n}\n\n.gsptextfont[_ngcontent-%COMP%] {\n  font-family: \"Source Sans Pro\", sans-serif;\n  color: black;\n}\n\n.gspcardimage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.gspcardtext[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: rgb(97, 96, 85);\n  top: 100px;\n  opacity: 0.7;\n  margin-top: -45px;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%], .gspcardtext[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.gspcardtext2zeilig[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n  margin-top: -68px;\n}\n\n.gspcardtextperson[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  margin-top: -40px;\n  width: 100%;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n\n.gsptextinimage[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.gsptextinimage_pos[_ngcontent-%COMP%] {\n  margin-left: 5vw;\n  margin-top: 2vh;\n  color: white;\n}\n\n.gspheaderimage[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.gspheadertext[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheadertext[_ngcontent-%COMP%]:hover {\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheaderlanguage[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding-right: 0px;\n  font-size: 0.8rem;\n  padding-top: 12px;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n#deutschID[_ngcontent-%COMP%] {\n  color: black;\n}\n\n#deutschID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n#englishID[_ngcontent-%COMP%] {\n  color: rgb(135, 142, 171);\n}\n\n#englishID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n.gspparagraph[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  margin-top: 0px;\n  background-color: rgb(242, 237, 234);\n}\n\n.gspcolimageleft[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 4px;\n  margin-right: 4px;\n  padding-bottom: 30px;\n}\n\n.gspcolimageright[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 0;\n  padding-bottom: 30px;\n}\n\n.gspcolimagecenter[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 30px;\n}\n\n.gsprouterlinkactive[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%]:hover {\n  color: rgb(102, 143, 136);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gsphochgestellt[_ngcontent-%COMP%] {\n  bottom: 0.25em;\n}\n\n.normal[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: gray;\n  border: none;\n  outline-width: 1px;\n  outline-color: gray;\n}\n\n.mat-card-header-text[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\n.gspkontakt[_ngcontent-%COMP%] {\n  color: #004439;\n}\n\n.gspblackcolor[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.gspteamheader[_ngcontent-%COMP%] {\n  height: 450px;\n  background-image: url('header_team.jpg');\n  background-position: center center;\n  background-size: cover;\n  overflow: hidden;\n  padding-top: 30px;\n}\n\n.gspcardimagepartner[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.gspcardtextpartner[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 66%;\n  margin-top: -48px;\n  margin-left: 17%;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n\n.gspcontainer[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  color: white;\n  width: 100%;\n}\n\n.gspbottomleft[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  bottom: 0px;\n  left: 0%;\n  padding-left: 15px;\n  background-color: rgb(97, 96, 85);\n  opacity: 0.7;\n  text-align: left;\n  font-size: 80%;\n}\n\n.gsptitlefontteam[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 30px;\n  color: white;\n  padding-top: 30px;\n}\n\n.gspteambottomcentered[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  bottom: 0px;\n  background-color: rgb(97, 96, 85);\n  opacity: 0.7;\n  color: white;\n}\n\n.dialog-header[_ngcontent-%COMP%] {\n  background-image: url(\"/src/assets/images/spallinger.jpg\");\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFwcC5jb21wb25lbnQuc2NzcyIsImZzcGFsbGluZ2VyLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcdGVhbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhDQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FER0E7RUFDRSwwQ0FBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxzQkFBQSxFQUFBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNBRjs7QURHQTtFQUNFLHFCQUFBO0FDQUY7O0FER0E7RUFDRSxzQkFBQSxFQUFBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxzQkFBQSxFQUFBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsMENBQUE7QUNBRjs7QURHQTtFQUNFLHFCQUFBO0VBQ0EsMENBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtBQ0FGOztBREdBO0VBQ0UsdUJBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0FDQUY7O0FER0E7RUFDRSx1QkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMENBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtBQ0FGOztBRE9BO0VBQ0UsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNKRjs7QURPQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0pGOztBRE9BO0VBQ0UsY0FBQTtBQ0pGOztBRFlBO0VBQ0UsWUFBQTtBQ1RGOztBQy9LQTtFQUNFLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FEa0xGOztBQy9LQTtFQUNFLFdBQUE7QURrTEY7O0FDaExBO0VBQ0Usc0JBQUEsRUFBQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QURtTEY7O0FDaExBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FEbUxGOztBQ2pMQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QURvTEY7O0FDakxBO0VBQ0UsOENBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FEb0xGOztBQy9LQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBRGtMRjs7QUEvT0E7RUFDRSwwREFBQTtFQUNBLHNCQUFBO0FBa1BGIiwiZmlsZSI6ImZzcGFsbGluZ2VyLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nc3B0aXRsZWZvbnQge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XHJcbn1cclxuXHJcblxyXG4uZ3NwdGV4dGZvbnQge1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5nc3BjYXJkaW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmdzcGNhcmR0ZXh0IHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiA8LS0tLS0tICovXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTcsIDk2LCA4NSk7XHJcbiAgdG9wOiAxMDBweDtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgbWFyZ2luLXRvcDogLTQ1cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hLCAuZ3NwY2FyZHRleHQ6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmdzcGNhcmR0ZXh0MnplaWxpZyB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogPC0tLS0tLSAqL1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XHJcbiAgdG9wOiAxMDBweDtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgbWFyZ2luLXRvcDogLTY4cHg7XHJcbn1cclxuXHJcbi5nc3BjYXJkdGV4dHBlcnNvbiB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogPC0tLS0tLSAqL1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAtNDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xyXG4gIHRvcDogMTAwcHg7XHJcbiAgb3BhY2l0eTogMC41XHJcbn1cclxuXHJcbi5nc3B0ZXh0aW5pbWFnZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZ3NwdGV4dGluaW1hZ2VfcG9zIHtcclxuICBtYXJnaW4tbGVmdDogNXZ3O1xyXG4gIG1hcmdpbi10b3A6IDJ2aDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5nc3BoZWFkZXJpbWFnZSB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZ3NwaGVhZGVydGV4dCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmdzcGhlYWRlcnRleHQ6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwaGVhZGVybGFuZ3VhZ2Uge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4jZGV1dHNjaElEIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbiNkZXV0c2NoSUQ6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMzgsIDUwLCAxMDQpO1xyXG59XHJcblxyXG4jZW5nbGlzaElEIHtcclxuICBjb2xvcjogcmdiKDEzNSwgMTQyLCAxNzEpO1xyXG59XHJcblxyXG4jZW5nbGlzaElEOmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDM4LCA1MCwgMTA0KTtcclxufVxyXG5cclxuLmdzcHBhcmFncmFwaCB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyMzcsIDIzNCk7XHJcbn1cclxuXHJcbi5nc3Bjb2xpbWFnZWxlZnQge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5nc3Bjb2xpbWFnZXJpZ2h0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uZ3NwY29saW1hZ2VjZW50ZXIge1xyXG4gIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmdzcHJvdXRlcmxpbmthY3RpdmUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwZm9vdGVybGluayB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmdzcGZvb3Rlcmxpbms6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMTAyLCAxNDMsIDEzNik7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwaG9jaGdlc3RlbGx0IHtcclxuICBib3R0b206IDAuMjVlbTtcclxufVxyXG5cclxuXHJcbi8vIFRFQU0gRGV0YWlscyBLbGFzc2VuXHJcblxyXG5cclxuLm5vcm1hbHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjpncmF5O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lLXdpZHRoOiAxcHg7XHJcbiAgb3V0bGluZS1jb2xvcjogZ3JheTtcclxufVxyXG5cclxuLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5nc3Brb250YWt0IHtcclxuICBjb2xvcjogIzAwNDQzOTtcclxufVxyXG5cclxuLy8uZ3NwbWF0ZGlhbG9nY29udGVudCB7XHJcbi8vICAmOmV4dGVuZCgubWF0LWRpYWxvZy1jb250ZW50KTtcclxuLy8gIG1heC1oZWlnaHQ6IDc1dmg7XHJcbi8vfVxyXG5cclxuLmdzcGJsYWNrY29sb3Ige1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4iLCJAaW1wb3J0IFwic3JjL2FwcC90ZWFtL3RlYW0uY29tcG9uZW50XCI7XHJcbi5kaWFsb2ctaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zcmMvYXNzZXRzL2ltYWdlcy9zcGFsbGluZ2VyLmpwZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuIiwiQGltcG9ydCBcIi4uL2FwcC5jb21wb25lbnQuc2Nzc1wiO1xyXG5cclxuLmdzcHRlYW1oZWFkZXIge1xyXG4gIGhlaWdodDogNDUwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXIvaGVhZGVyX3RlYW0uanBnXCIpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uZ3NwY2FyZGltYWdlcGFydG5lciB7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG4uZ3NwY2FyZHRleHRwYXJ0bmVyIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiA8LS0tLS0tICovXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIHdpZHRoOiA2NiU7XHJcbiAgbWFyZ2luLXRvcDogLTQ4cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE3JTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XHJcbiAgdG9wOiAxMDBweDtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5nc3Bjb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5nc3Bib3R0b21sZWZ0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm90dG9tOjBweDtcclxuICBsZWZ0OiAwJTtcclxuICBwYWRkaW5nLWxlZnQ6MTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTcsOTYsODUpO1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogODAlO1xyXG59XHJcblxyXG4uZ3NwdGl0bGVmb250dGVhbSB7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5nc3B0ZWFtYm90dG9tY2VudGVyZWQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBib3R0b206MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5Nyw5Niw4NSk7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 15:
/*!***************************************************************************!*\
  !*** ./src/app/team/details/psteindl-dialog/psteindl-dialog.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PsteindlDialogComponent": () => (/* binding */ PsteindlDialogComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ 5139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _services_gsp_translation_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/gsp-translation-service.service */ 9791);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);









function PsteindlDialogComponent_mat_card_subtitle_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Rechtsanwalt");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PsteindlDialogComponent_mat_card_subtitle_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Attorney-at-Law / Rechtsanwalt");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PsteindlDialogComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "div", 12)(2, "p", 13)(3, "b")(4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "E");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 14)(7, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " psteindl(AT)gsplegal.at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 13)(10, "b")(11, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "T");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 14)(14, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " +43 1 319 94 70");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p", 17)(17, "b")(18, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " +43 1 319 94 70-70 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p", 17)(23, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Beratungsschwerpunkte");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p", 20)(26, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Unternehmens-\nund Gesellschaftsrecht");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "p", 20)(33, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Umgr\u00FCndungen\nund Umstrukturierungen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "p", 20)(40, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Merger\n& Acquisitions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "p", 20)(47, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Vertragsrecht\n(national und international)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "p", 20)(54, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Zivilrecht");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "p", 20)(61, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Arbeitsrecht");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "p", 20)(68, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Gewerberecht");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "p", 23)(75, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "Streitiges\nVerfahren");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "p", 17)(82, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Sprachen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "p", 20)(85, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "Deutsch");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "p", 23)(92, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "Englisch");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "p", 17)(99, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "Ausbildung");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "p", 24)(102, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, "Studium\nder Rechtswissenschaften, Wirtschaftsuniversit\u00E4t Wien (LL.M. 2016)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "p", 17)(109, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "Werdegang");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "p", 25)(112, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, "Rechtsanwaltsanw\u00E4rter bei GARGER SPALLINGER\nRechsanw\u00E4lte GmbH seit 2021");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "p", 25)(119, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124, "Rechtsanwaltsanw\u00E4rter in renommierten\nWirschaftskanzleien");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "p", 23)(126, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, "Juristischer\nMitarbeiter in renommierten Wirschaftskanzleien");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "p", 26)(133, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} }
function PsteindlDialogComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "div", 12)(2, "p", 13)(3, "b")(4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "E");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 14)(7, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " psteindl(AT)gsplegal.at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 13)(10, "b")(11, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "T");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 14)(14, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " +43 1 319 94 70");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p", 17)(17, "b")(18, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " +43 1 319 94 70-70 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p", 17)(23, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Core areas of competence");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p", 20)(26, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Corporate\nand Commercial Law");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "p", 20)(33, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Reorganizations\nand Restructurings");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "p", 20)(40, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Merger\n& Acquisitions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "p", 20)(47, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Contracts\n(national and international)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "p", 20)(54, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Civil\nLaw");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "p", 20)(61, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Labor\nLaw");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "p", 20)(68, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Trade\nLaw");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "p", 23)(75, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "Litigation");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "p", 17)(82, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Languages");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "p", 20)(85, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "German");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "p", 23)(92, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "English");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "p", 17)(99, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "Education");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "p", 24)(102, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, "University\ndegree in Law, Vienna University of Economics and Business (LL.M. 2016)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "p", 17)(109, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "Professional Background");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "p", 25)(112, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, "Associate with GARGER SPALLINGER Rechsanw\u00E4lte\nGmbH since 2021");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "p", 25)(119, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, "\u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124, "Associate with renowned commercial law firms");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "p", 23)(126, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, "Paralegal\nwith renowned commercial law firms");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "p", 26)(133, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} }
class PsteindlDialogComponent {
    constructor(dialog, gpsTS) {
        this.dialog = dialog;
        this.gpsTS = gpsTS;
        this.faXmark = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faXmark;
    }
    openDialog() {
    }
    onClose() {
        this.dialog.closeAll();
    }
    ngAfterViewInit() {
        jquery__WEBPACK_IMPORTED_MODULE_0__.find(".mat-card-header-text")[0].style.width = "100%";
    }
}
PsteindlDialogComponent.ɵfac = function PsteindlDialogComponent_Factory(t) { return new (t || PsteindlDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_gsp_translation_service_service__WEBPACK_IMPORTED_MODULE_1__.GspTranslationServiceService)); };
PsteindlDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PsteindlDialogComponent, selectors: [["app-psteindl-dialog"]], decls: 18, vars: 6, consts: [["mat-dialog-content", "", 1, "gspmatdialogcontent"], ["matdialogcontent", ""], [1, "dialog-card"], ["mat-card-avatar", "", 1, "dialog-header"], [2, "width", "100%"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], [1, "MsoNormalIndent"], ["lang", "EN-US", 2, "font-size", "14.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif", "color", "#004439"], [1, "normal", 3, "title", "click"], ["size", "xs", 3, "icon"], [4, "ngIf"], [2, "margin-left", "20px", "overflow", "hidden"], [1, "WordSection1"], [1, "MsoNormalIndent", 2, "margin-top", "0cm", "margin-right", "0cm", "margin-bottom", "0cm", "margin-left", "1.0cm"], ["lang", "DE-AT", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif"], ["href", "mailto:psteindl@gsplegal.at", 1, "gspkontakt"], ["href", "tel:+43-1-319-94-70", 1, "gspkontakt"], [1, "MsoNormalIndent", 2, "margin-left", "1.0cm"], ["lang", "DE-AT", 1, "gspkontakt", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif"], ["lang", "DE-AT", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif", "color", "#004439"], [1, "MsoNormalIndent", 2, "margin-top", "0cm", "margin-right", "0cm", "margin-bottom", "0cm", "margin-left", "64.05pt", "text-indent", "-17.85pt"], ["lang", "DE-AT", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "Wingdings"], [2, "font", "7.0pt \"Times New Roman\""], [1, "MsoNormalIndent", 2, "margin-left", "64.35pt", "text-indent", "-18.0pt"], [1, "MsoNormalIndent", 2, "margin-left", "64.05pt", "text-indent", "-17.85pt"], [1, "MsoNormalIndent", 2, "margin-top", "0cm", "margin-right", "0cm", "margin-bottom", "0cm", "margin-left", "64.35pt", "text-indent", "-18.0pt"], [1, "MsoNormal"], ["lang", "DE-AT"], ["lang", "EN-US", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif", "color", "#004439"], ["lang", "EN-US", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "Wingdings"], ["lang", "EN-US", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif"], ["lang", "EN-US"]], template: function PsteindlDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1)(2, "mat-card", 2)(3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-card-title", 4)(6, "span", 5)(7, "p", 6)(8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Patrick STEINDL, LL.M. (WU)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span")(11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PsteindlDialogComponent_Template_button_click_11_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, PsteindlDialogComponent_mat_card_subtitle_13_Template, 2, 0, "mat-card-subtitle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, PsteindlDialogComponent_mat_card_subtitle_14_Template, 2, 0, "mat-card-subtitle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-card-content", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, PsteindlDialogComponent_span_16_Template, 135, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, PsteindlDialogComponent_span_17_Template, 135, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.gpsTS.isGerman() ? "schliessen" : "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faXmark);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.gpsTS.isGerman());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.gpsTS.isGerman());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.gpsTS.isGerman());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.gpsTS.isGerman());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardAvatar, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutAlignDirective], styles: [".gsptitlefont[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 30px;\n  color: rgb(0, 68, 57);\n}\n\n.gsptextfont[_ngcontent-%COMP%] {\n  font-family: \"Source Sans Pro\", sans-serif;\n  color: black;\n}\n\n.gspcardimage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.gspcardtext[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: rgb(97, 96, 85);\n  top: 100px;\n  opacity: 0.7;\n  margin-top: -45px;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%], .gspcardtext[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.gspcardtext2zeilig[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n  margin-top: -68px;\n}\n\n.gspcardtextperson[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  margin-top: -40px;\n  width: 100%;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n\n.gsptextinimage[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.gsptextinimage_pos[_ngcontent-%COMP%] {\n  margin-left: 5vw;\n  margin-top: 2vh;\n  color: white;\n}\n\n.gspheaderimage[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.gspheadertext[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheadertext[_ngcontent-%COMP%]:hover {\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheaderlanguage[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding-right: 0px;\n  font-size: 0.8rem;\n  padding-top: 12px;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n#deutschID[_ngcontent-%COMP%] {\n  color: black;\n}\n\n#deutschID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n#englishID[_ngcontent-%COMP%] {\n  color: rgb(135, 142, 171);\n}\n\n#englishID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n.gspparagraph[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  margin-top: 0px;\n  background-color: rgb(242, 237, 234);\n}\n\n.gspcolimageleft[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 4px;\n  margin-right: 4px;\n  padding-bottom: 30px;\n}\n\n.gspcolimageright[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 0;\n  padding-bottom: 30px;\n}\n\n.gspcolimagecenter[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 30px;\n}\n\n.gsprouterlinkactive[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%]:hover {\n  color: rgb(102, 143, 136);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gsphochgestellt[_ngcontent-%COMP%] {\n  bottom: 0.25em;\n}\n\n.normal[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: gray;\n  border: none;\n  outline-width: 1px;\n  outline-color: gray;\n}\n\n.mat-card-header-text[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\n.gspkontakt[_ngcontent-%COMP%] {\n  color: #004439;\n}\n\n.gspblackcolor[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.gspteamheader[_ngcontent-%COMP%] {\n  height: 450px;\n  background-image: url('header_team.jpg');\n  background-position: center center;\n  background-size: cover;\n  overflow: hidden;\n  padding-top: 30px;\n}\n\n.gspcardimagepartner[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.gspcardtextpartner[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 66%;\n  margin-top: -48px;\n  margin-left: 17%;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n\n.gspcontainer[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  color: white;\n  width: 100%;\n}\n\n.gspbottomleft[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  bottom: 0px;\n  left: 0%;\n  padding-left: 15px;\n  background-color: rgb(97, 96, 85);\n  opacity: 0.7;\n  text-align: left;\n  font-size: 80%;\n}\n\n.gsptitlefontteam[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 30px;\n  color: white;\n  padding-top: 30px;\n}\n\n.gspteambottomcentered[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  bottom: 0px;\n  background-color: rgb(97, 96, 85);\n  opacity: 0.7;\n  color: white;\n}\n\n.dialog-header[_ngcontent-%COMP%] {\n  background-image: url(\"/src/assets/images/patrick.jpg\");\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFwcC5jb21wb25lbnQuc2NzcyIsInBzdGVpbmRsLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcdGVhbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhDQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FER0E7RUFDRSwwQ0FBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxzQkFBQSxFQUFBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNBRjs7QURHQTtFQUNFLHFCQUFBO0FDQUY7O0FER0E7RUFDRSxzQkFBQSxFQUFBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxzQkFBQSxFQUFBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsMENBQUE7QUNBRjs7QURHQTtFQUNFLHFCQUFBO0VBQ0EsMENBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtBQ0FGOztBREdBO0VBQ0UsdUJBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0FDQUY7O0FER0E7RUFDRSx1QkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMENBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtBQ0FGOztBRE9BO0VBQ0UsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNKRjs7QURPQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0pGOztBRE9BO0VBQ0UsY0FBQTtBQ0pGOztBRFlBO0VBQ0UsWUFBQTtBQ1RGOztBQy9LQTtFQUNFLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FEa0xGOztBQy9LQTtFQUNFLFdBQUE7QURrTEY7O0FDaExBO0VBQ0Usc0JBQUEsRUFBQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QURtTEY7O0FDaExBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FEbUxGOztBQ2pMQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QURvTEY7O0FDakxBO0VBQ0UsOENBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FEb0xGOztBQy9LQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBRGtMRjs7QUEvT0E7RUFDRSx1REFBQTtFQUNBLHNCQUFBO0FBa1BGIiwiZmlsZSI6InBzdGVpbmRsLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nc3B0aXRsZWZvbnQge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XHJcbn1cclxuXHJcblxyXG4uZ3NwdGV4dGZvbnQge1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5nc3BjYXJkaW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmdzcGNhcmR0ZXh0IHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiA8LS0tLS0tICovXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTcsIDk2LCA4NSk7XHJcbiAgdG9wOiAxMDBweDtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgbWFyZ2luLXRvcDogLTQ1cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hLCAuZ3NwY2FyZHRleHQ6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmdzcGNhcmR0ZXh0MnplaWxpZyB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogPC0tLS0tLSAqL1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XHJcbiAgdG9wOiAxMDBweDtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgbWFyZ2luLXRvcDogLTY4cHg7XHJcbn1cclxuXHJcbi5nc3BjYXJkdGV4dHBlcnNvbiB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogPC0tLS0tLSAqL1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAtNDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xyXG4gIHRvcDogMTAwcHg7XHJcbiAgb3BhY2l0eTogMC41XHJcbn1cclxuXHJcbi5nc3B0ZXh0aW5pbWFnZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZ3NwdGV4dGluaW1hZ2VfcG9zIHtcclxuICBtYXJnaW4tbGVmdDogNXZ3O1xyXG4gIG1hcmdpbi10b3A6IDJ2aDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5nc3BoZWFkZXJpbWFnZSB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZ3NwaGVhZGVydGV4dCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmdzcGhlYWRlcnRleHQ6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwaGVhZGVybGFuZ3VhZ2Uge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4jZGV1dHNjaElEIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbiNkZXV0c2NoSUQ6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMzgsIDUwLCAxMDQpO1xyXG59XHJcblxyXG4jZW5nbGlzaElEIHtcclxuICBjb2xvcjogcmdiKDEzNSwgMTQyLCAxNzEpO1xyXG59XHJcblxyXG4jZW5nbGlzaElEOmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDM4LCA1MCwgMTA0KTtcclxufVxyXG5cclxuLmdzcHBhcmFncmFwaCB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyMzcsIDIzNCk7XHJcbn1cclxuXHJcbi5nc3Bjb2xpbWFnZWxlZnQge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5nc3Bjb2xpbWFnZXJpZ2h0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uZ3NwY29saW1hZ2VjZW50ZXIge1xyXG4gIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmdzcHJvdXRlcmxpbmthY3RpdmUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwZm9vdGVybGluayB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmdzcGZvb3Rlcmxpbms6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMTAyLCAxNDMsIDEzNik7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3NwaG9jaGdlc3RlbGx0IHtcclxuICBib3R0b206IDAuMjVlbTtcclxufVxyXG5cclxuXHJcbi8vIFRFQU0gRGV0YWlscyBLbGFzc2VuXHJcblxyXG5cclxuLm5vcm1hbHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjpncmF5O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lLXdpZHRoOiAxcHg7XHJcbiAgb3V0bGluZS1jb2xvcjogZ3JheTtcclxufVxyXG5cclxuLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5nc3Brb250YWt0IHtcclxuICBjb2xvcjogIzAwNDQzOTtcclxufVxyXG5cclxuLy8uZ3NwbWF0ZGlhbG9nY29udGVudCB7XHJcbi8vICAmOmV4dGVuZCgubWF0LWRpYWxvZy1jb250ZW50KTtcclxuLy8gIG1heC1oZWlnaHQ6IDc1dmg7XHJcbi8vfVxyXG5cclxuLmdzcGJsYWNrY29sb3Ige1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4iLCJAaW1wb3J0IFwic3JjL2FwcC90ZWFtL3RlYW0uY29tcG9uZW50XCI7XHJcbi5kaWFsb2ctaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zcmMvYXNzZXRzL2ltYWdlcy9wYXRyaWNrLmpwZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuIiwiQGltcG9ydCBcIi4uL2FwcC5jb21wb25lbnQuc2Nzc1wiO1xyXG5cclxuLmdzcHRlYW1oZWFkZXIge1xyXG4gIGhlaWdodDogNDUwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXIvaGVhZGVyX3RlYW0uanBnXCIpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uZ3NwY2FyZGltYWdlcGFydG5lciB7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG4uZ3NwY2FyZHRleHRwYXJ0bmVyIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiA8LS0tLS0tICovXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIHdpZHRoOiA2NiU7XHJcbiAgbWFyZ2luLXRvcDogLTQ4cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE3JTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XHJcbiAgdG9wOiAxMDBweDtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5nc3Bjb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5nc3Bib3R0b21sZWZ0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm90dG9tOjBweDtcclxuICBsZWZ0OiAwJTtcclxuICBwYWRkaW5nLWxlZnQ6MTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTcsOTYsODUpO1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogODAlO1xyXG59XHJcblxyXG4uZ3NwdGl0bGVmb250dGVhbSB7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5nc3B0ZWFtYm90dG9tY2VudGVyZWQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBib3R0b206MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5Nyw5Niw4NSk7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 3975:
/*!****************************************!*\
  !*** ./src/app/team/team.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamComponent": () => (/* binding */ TeamComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var _details_bgarger_dialog_bgarger_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details/bgarger-dialog/bgarger-dialog.component */ 4190);
/* harmony import */ var _details_fspallinger_dialog_fspallinger_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details/fspallinger-dialog/fspallinger-dialog.component */ 7707);
/* harmony import */ var _details_psteindl_dialog_psteindl_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details/psteindl-dialog/psteindl-dialog.component */ 15);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _services_gsp_translation_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/gsp-translation-service.service */ 9791);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 3935);









function TeamComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span")(1, "div", 27)(2, "p", 28)(3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "b")(6, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Die\nSt\u00E4rke des Teams ist jedes einzelne Mitglied. Die St\u00E4rke eines jeden Mitglieds\nist das Team.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "\" (Phil Jackson)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 28)(10, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Mit\nunserem Team von Spezialisten mit langj\u00E4hriger Erfahrung und unterschiedlichen\npers\u00F6nlichen und beruflichen Hintergr\u00FCnden bieten wir eine eine ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "vielschichtige\nsowie effiziente und professionelle rechtliche Beratung");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, ". Gemeinsam ist uns\ndas ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Interesse an den gesch\u00E4ftlichen T\u00E4tigkeiten unserer Mandanten");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " und\ndem ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Verst\u00E4ndnis zur Schaffung ma\u00DFgeschneiderter L\u00F6sungen");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "p", 30)(22, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} }
function TeamComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span")(1, "div", 27)(2, "p", 28)(3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "b")(6, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "The\nstrength of the team is each individual member. The strength of each member is\nthe team.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "\" (Phil Jackson)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 28)(10, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "With\nour team of specialists with many years of experience and different personal\nand professional backgrounds, we offer a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "multi-faceted as well as efficient\nand professional legal advice");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, ". What we have in common is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "the interest in\nour clients' business activities");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " and the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "understanding to create\ntailor-made solutions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "p", 30)(22, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} }
class TeamComponent {
    constructor(dialog, gpsTS) {
        this.dialog = dialog;
        this.gpsTS = gpsTS;
    }
    ngOnInit() {
    }
    onclick(dialogId, event) {
        let dialogComponent = null;
        if (dialogId === 'bgarger') {
            dialogComponent = _details_bgarger_dialog_bgarger_dialog_component__WEBPACK_IMPORTED_MODULE_0__.BgargerDialogComponent;
        }
        else if (dialogId === 'fspallinger') {
            dialogComponent = _details_fspallinger_dialog_fspallinger_dialog_component__WEBPACK_IMPORTED_MODULE_1__.FspallingerDialogComponent;
        }
        else if (dialogId === 'psteindl') {
            dialogComponent = _details_psteindl_dialog_psteindl_dialog_component__WEBPACK_IMPORTED_MODULE_2__.PsteindlDialogComponent;
        }
        if (!!dialogComponent) {
            this.matDialogRef = this.dialog.open(dialogComponent, {
                maxWidth: '100vw',
                maxHeight: '100vw',
            });
            this.matDialogRef.afterOpened().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => {
                console.log(this.matDialogRef);
            })).subscribe(() => {
                console.log('config');
            });
        }
    }
}
TeamComponent.ɵfac = function TeamComponent_Factory(t) { return new (t || TeamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_gsp_translation_service_service__WEBPACK_IMPORTED_MODULE_3__.GspTranslationServiceService)); };
TeamComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TeamComponent, selectors: [["app-team"]], decls: 88, vars: 7, consts: [[1, "gspteamheader"], [1, "container", "gsptextinimage_pos"], [1, "row"], [1, "col-xl-1", "col-md-1"], ["src", "../../assets/images/gs_logo_subseiten.png"], [1, "container", "gsptextinimage"], [1, "col-md-1"], [1, "col-md-8"], [1, "gsptitlefontteam"], [4, "ngIf"], [1, "gspparagraph", 2, "background-color", "white"], [1, "container"], [1, "row", 2, "padding-top", "30px", "padding-right", "20px"], [1, "col-md-3", 2, "padding-bottom", "1vh", 3, "click"], ["id", "gargerBild", 1, "border-0"], [1, "gspcontainer"], ["src", "../../assets/images/bgarger.jpg", 1, "gspcardimagepartner"], [1, "gspteambottomcentered"], [1, "border-0"], ["src", "../../assets/images/spallinger.jpg", 1, "gspcardimagepartner"], [2, "font-size", "50%"], ["src", "../../assets/images/roupec.jpg", 1, "gspcardimagepartner"], [1, "gsphochgestellt"], ["src", "../../assets/images/patrick.jpg", 1, "gspcardimagepartner"], ["src", "../../assets/images/jandrisevits.jpg", 1, "gspcardimagepartner"], ["src", "../../assets/images/agarger.jpg", 1, "gspcardimagepartner"], ["src", "../../assets/images/kubrak.jpg", 1, "gspcardimagepartner"], [1, "WordSection1"], [1, "MsoNormalIndent"], ["lang", "DE-AT", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif"], [1, "MsoNormal"], ["lang", "DE-AT"], ["lang", "EN-US", 2, "font-size", "12.0pt", "line-height", "115%", "font-family", "\"Arial\",sans-serif"], ["lang", "EN-US"]], template: function TeamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5)(6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7)(9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, TeamComponent_span_16_Template, 24, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, TeamComponent_span_17_Template, 24, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 10)(19, "div", 11)(20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TeamComponent_Template_div_click_22_listener($event) { return ctx.onclick("bgarger", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 14)(24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 17)(27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, " MMag. Dr.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, " BERNHARD GARGER");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TeamComponent_Template_div_click_31_listener($event) { return ctx.onclick("fspallinger", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 18)(33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 17)(36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, " MMag.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, " FORREST SPALLINGER ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "LL.M");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TeamComponent_Template_div_click_44_listener($event) { return ctx.onclick("aroupec", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 18)(46, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 17)(49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, " Mag.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "sub", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, " ANITA ROUPEC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TeamComponent_Template_div_click_55_listener($event) { return ctx.onclick("psteindl", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 18)(57, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, " PATRICK STEINDL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "LL.M.(WU)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](66, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TeamComponent_Template_div_click_67_listener($event) { return ctx.onclick("rjandrisevits", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 18)(69, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](70, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 17)(72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, " REGINA JANDRISEVITS");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TeamComponent_Template_div_click_74_listener($event) { return ctx.onclick("agarger", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "div", 18)(76, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](77, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "div", 17)(79, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, " ANNA GARGER ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TeamComponent_Template_div_click_81_listener($event) { return ctx.onclick("akubrak", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "div", 18)(83, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](84, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "div", 17)(86, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](87, " ANNA KUBRAK ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 5, "TEAM")));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.gpsTS.isGerman());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.gpsTS.isGerman());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.UpperCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: [".gsptitlefont[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 30px;\n  color: rgb(0, 68, 57);\n}\n\n.gsptextfont[_ngcontent-%COMP%] {\n  font-family: \"Source Sans Pro\", sans-serif;\n  color: black;\n}\n\n.gspcardimage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.gspcardtext[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: rgb(97, 96, 85);\n  top: 100px;\n  opacity: 0.7;\n  margin-top: -45px;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%], .gspcardtext[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.gspcardtext2zeilig[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n  margin-top: -68px;\n}\n\n.gspcardtextperson[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  margin-top: -40px;\n  width: 100%;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n\n.gsptextinimage[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.gsptextinimage_pos[_ngcontent-%COMP%] {\n  margin-left: 5vw;\n  margin-top: 2vh;\n  color: white;\n}\n\n.gspheaderimage[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.gspheadertext[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheadertext[_ngcontent-%COMP%]:hover {\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspheaderlanguage[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding-right: 0px;\n  font-size: 0.8rem;\n  padding-top: 12px;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n#deutschID[_ngcontent-%COMP%] {\n  color: black;\n}\n\n#deutschID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n#englishID[_ngcontent-%COMP%] {\n  color: rgb(135, 142, 171);\n}\n\n#englishID[_ngcontent-%COMP%]:hover {\n  color: rgb(38, 50, 104);\n}\n\n.gspparagraph[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  margin-top: 0px;\n  background-color: rgb(242, 237, 234);\n}\n\n.gspcolimageleft[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 4px;\n  margin-right: 4px;\n  padding-bottom: 30px;\n}\n\n.gspcolimageright[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 0;\n  padding-bottom: 30px;\n}\n\n.gspcolimagecenter[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 30px;\n}\n\n.gsprouterlinkactive[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: rgb(0, 68, 57);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gspfooterlink[_ngcontent-%COMP%]:hover {\n  color: rgb(102, 143, 136);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n.gsphochgestellt[_ngcontent-%COMP%] {\n  bottom: 0.25em;\n}\n\n.normal[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: gray;\n  border: none;\n  outline-width: 1px;\n  outline-color: gray;\n}\n\n.mat-card-header-text[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\n.gspkontakt[_ngcontent-%COMP%] {\n  color: #004439;\n}\n\n.gspblackcolor[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.gspteamheader[_ngcontent-%COMP%] {\n  height: 450px;\n  background-image: url('header_team.jpg');\n  background-position: center center;\n  background-size: cover;\n  overflow: hidden;\n  padding-top: 30px;\n}\n\n.gspcardimagepartner[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.gspcardtextpartner[_ngcontent-%COMP%] {\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 66%;\n  margin-top: -48px;\n  margin-left: 17%;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n\n.gspcontainer[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  color: white;\n  width: 100%;\n}\n\n.gspbottomleft[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  bottom: 0px;\n  left: 0%;\n  padding-left: 15px;\n  background-color: rgb(97, 96, 85);\n  opacity: 0.7;\n  text-align: left;\n  font-size: 80%;\n}\n\n.gsptitlefontteam[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 30px;\n  color: white;\n  padding-top: 30px;\n}\n\n.gspteambottomcentered[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  bottom: 0px;\n  background-color: rgb(97, 96, 85);\n  opacity: 0.7;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxhcHAuY29tcG9uZW50LnNjc3MiLCJ0ZWFtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOENBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURHQTtFQUNFLDBDQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLHNCQUFBLEVBQUEsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ0FGOztBREdBO0VBQ0UscUJBQUE7QUNBRjs7QURHQTtFQUNFLHNCQUFBLEVBQUEsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLHNCQUFBLEVBQUEsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UscUJBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDBDQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSx1QkFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7QUNBRjs7QURHQTtFQUNFLHVCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLDBDQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtFQUNBLDBDQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0FDQUY7O0FET0E7RUFDRSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0pGOztBRE9BO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDSkY7O0FET0E7RUFDRSxjQUFBO0FDSkY7O0FEWUE7RUFDRSxZQUFBO0FDVEY7O0FBL0tBO0VBQ0UsYUFBQTtFQUNBLHdDQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFrTEY7O0FBL0tBO0VBQ0UsV0FBQTtBQWtMRjs7QUFoTEE7RUFDRSxzQkFBQSxFQUFBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQW1MRjs7QUFoTEE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFtTEY7O0FBakxBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQW9MRjs7QUFqTEE7RUFDRSw4Q0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFvTEY7O0FBL0tBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBa0xGIiwiZmlsZSI6InRlYW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3NwdGl0bGVmb250IHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogcmdiKDAsNjgsNTcpO1xyXG59XHJcblxyXG5cclxuLmdzcHRleHRmb250IHtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uZ3NwY2FyZGltYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5nc3BjYXJkdGV4dCB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogPC0tLS0tLSAqL1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LCA5NiwgODUpO1xyXG4gIHRvcDogMTAwcHg7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIG1hcmdpbi10b3A6IC00NXB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYSwgLmdzcGNhcmR0ZXh0OmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5nc3BjYXJkdGV4dDJ6ZWlsaWcge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIDwtLS0tLS0gKi9cclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xyXG4gIHRvcDogMTAwcHg7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIG1hcmdpbi10b3A6IC02OHB4O1xyXG59XHJcblxyXG4uZ3NwY2FyZHRleHRwZXJzb24ge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIDwtLS0tLS0gKi9cclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogLTQwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDFweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcclxuICB0b3A6IDEwMHB4O1xyXG4gIG9wYWNpdHk6IDAuNVxyXG59XHJcblxyXG4uZ3NwdGV4dGluaW1hZ2Uge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmdzcHRleHRpbmltYWdlX3BvcyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDV2dztcclxuICBtYXJnaW4tdG9wOiAydmg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZ3NwaGVhZGVyaW1hZ2Uge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmdzcGhlYWRlcnRleHQge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5nc3BoZWFkZXJ0ZXh0OmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDAsNjgsNTcpO1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmdzcGhlYWRlcmxhbmd1YWdlIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuI2RldXRzY2hJRCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4jZGV1dHNjaElEOmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDM4LCA1MCwgMTA0KTtcclxufVxyXG5cclxuI2VuZ2xpc2hJRCB7XHJcbiAgY29sb3I6IHJnYigxMzUsIDE0MiwgMTcxKTtcclxufVxyXG5cclxuI2VuZ2xpc2hJRDpob3ZlciB7XHJcbiAgY29sb3I6IHJnYigzOCwgNTAsIDEwNCk7XHJcbn1cclxuXHJcbi5nc3BwYXJhZ3JhcGgge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogNTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MiwgMjM3LCAyMzQpO1xyXG59XHJcblxyXG4uZ3NwY29saW1hZ2VsZWZ0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgcGFkZGluZy1yaWdodDogNHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uZ3NwY29saW1hZ2VyaWdodCB7XHJcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmdzcGNvbGltYWdlY2VudGVyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5nc3Byb3V0ZXJsaW5rYWN0aXZlIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogcmdiKDAsNjgsNTcpO1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmdzcGZvb3Rlcmxpbmsge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5nc3Bmb290ZXJsaW5rOmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDEwMiwgMTQzLCAxMzYpO1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmdzcGhvY2hnZXN0ZWxsdCB7XHJcbiAgYm90dG9tOiAwLjI1ZW07XHJcbn1cclxuXHJcblxyXG4vLyBURUFNIERldGFpbHMgS2xhc3NlblxyXG5cclxuXHJcbi5ub3JtYWx7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6Z3JheTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZS13aWR0aDogMXB4O1xyXG4gIG91dGxpbmUtY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1oZWFkZXItdGV4dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZ3Nwa29udGFrdCB7XHJcbiAgY29sb3I6ICMwMDQ0Mzk7XHJcbn1cclxuXHJcbi8vLmdzcG1hdGRpYWxvZ2NvbnRlbnQge1xyXG4vLyAgJjpleHRlbmQoLm1hdC1kaWFsb2ctY29udGVudCk7XHJcbi8vICBtYXgtaGVpZ2h0OiA3NXZoO1xyXG4vL31cclxuXHJcbi5nc3BibGFja2NvbG9yIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuIiwiQGltcG9ydCBcIi4uL2FwcC5jb21wb25lbnQuc2Nzc1wiO1xyXG5cclxuLmdzcHRlYW1oZWFkZXIge1xyXG4gIGhlaWdodDogNDUwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXIvaGVhZGVyX3RlYW0uanBnXCIpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uZ3NwY2FyZGltYWdlcGFydG5lciB7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG4uZ3NwY2FyZHRleHRwYXJ0bmVyIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiA8LS0tLS0tICovXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIHdpZHRoOiA2NiU7XHJcbiAgbWFyZ2luLXRvcDogLTQ4cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE3JTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XHJcbiAgdG9wOiAxMDBweDtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5nc3Bjb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5nc3Bib3R0b21sZWZ0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm90dG9tOjBweDtcclxuICBsZWZ0OiAwJTtcclxuICBwYWRkaW5nLWxlZnQ6MTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTcsOTYsODUpO1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogODAlO1xyXG59XHJcblxyXG4uZ3NwdGl0bGVmb250dGVhbSB7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5nc3B0ZWFtYm90dG9tY2VudGVyZWQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBib3R0b206MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5Nyw5Niw4NSk7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map