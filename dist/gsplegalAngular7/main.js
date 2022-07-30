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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./team/team.component */ 3975);
/* harmony import */ var _taetigkeit_taetigkeit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taetigkeit/taetigkeit.component */ 3420);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kontakt/kontakt.component */ 7274);
/* harmony import */ var _international_international_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./international/international.component */ 1457);
/* harmony import */ var _impressum_impressum_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./impressum/impressum.component */ 2579);
/* harmony import */ var _haftungsausschluss_haftungsausschluss_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./haftungsausschluss/haftungsausschluss.component */ 3290);
/* harmony import */ var _datenschutz_datenschutz_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./datenschutz/datenschutz.component */ 5638);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);











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
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] });
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);




class AppComponent {
    constructor(translate) {
        this.translate = translate;
        this.title = 'gsplegalAngular7';
        this.germanSelected = false;
        this.changeLanguage = function (key) {
            this.germanSelected = (key === 'de');
            this.translate.use(key);
        };
        this.openTodo = function () {
            window.open('http://jupiter.bplaced.net/todo.htm');
        };
        translate.setDefaultLang('de');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 68, vars: 43, consts: [[1, "gsptextfont"], [1, "container", 2, "padding-top", "5vh"], [1, "row"], [1, "col-md-1"], [1, "col-md-8"], [1, "navbar", "navbar-expand-sm", 2, "padding-left", "0px"], [1, "navbar-nav"], [1, "nav-item"], ["routerLink", "/home", "routerLinkActive", "gsprouterlinkactive", 1, "nav-link", "gspheadertext", 2, "padding-left", "0px"], ["routerLink", "/team", "routerLinkActive", "gsprouterlinkactive", 1, "nav-link", "gspheadertext"], ["routerLink", "/taetigkeitsbereich", "routerLinkActive", "gsprouterlinkactive", 1, "nav-link", "gspheadertext"], ["routerLink", "/international", "routerLinkActive", "gsprouterlinkactive", 1, "nav-link", "gspheadertext"], [1, "nav-item", 2, "padding-right", "10px"], ["routerLink", "/kontakt", "routerLinkActive", "gsprouterlinkactive", 1, "nav-link", "gspheadertext"], [1, "col-md-2"], [1, "panel-footer", 2, "color", "white", "background-color", "rgb(0,68,57)", "padding-top", "5vh", "padding-bottom", "4vh"], [1, "container"], [1, "col-md-4"], ["href", "mailto:office@gsplegal.at", 1, "gspfooterlink"], [1, "col-md-6"], ["routerLink", "/impressum", "routerLinkActive", "gsprouterlinkactive", 1, "gspfooterlink"], ["routerLink", "/haftungsausschluss", "routerLinkActive", "gsprouterlinkactive", 1, "gspfooterlink"], ["routerLink", "/datenschutz", "routerLinkActive", "gsprouterlinkactive", 1, "gspfooterlink"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "nav", 5)(6, "ul", 6)(7, "li", 7)(8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 7)(13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 7)(18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 7)(23, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 12)(28, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15)(35, "div", 16)(36, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17)(39, "address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " GARGER SPALLINGER Rechtsanw\u00E4lte GmbH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Biberstra\u00DFe 22, A-1010 Wien");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Tel: +43-1-319 94 70, Fax: +43-1-319 94 70-70");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "office(AT)gsplegal.at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 19)(49, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](56, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](61, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](62, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 11, "HOME")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 15, "TEAM")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 19, "TAETIGKEITSBEREICH")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 23, "INTERNATIONAL")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 27, "KONTAKT")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 29, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 31, "IMPRESSUM")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](56, 33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](57, 35, "HAFTUNGSAUSSCHLUSS")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](61, 37, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](62, 39, "DATENSCHUTZ")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](66, 41, "ALLERECHTE"), "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.UpperCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe], styles: [".gsptitlefont[_ngcontent-%COMP%] {\n  font-family: 'Open Sans Condensed', sans-serif;\n  font-size: 30px;\n  color: #004439;\n}\n.gsptextfont[_ngcontent-%COMP%] {\n  font-family: 'Source Sans Pro', sans-serif;\n  color: black;\n}\n.gspcardimage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.gspcardtext[_ngcontent-%COMP%] {\n  background-size: cover;\n  \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: #616055;\n  top: 100px;\n  opacity: 0.7;\n  margin-top: -45px;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%], .gspcardtext[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.gspcardtext2zeilig[_ngcontent-%COMP%] {\n  background-size: cover;\n  \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n  margin-top: -68px;\n}\n.gspcardtextperson[_ngcontent-%COMP%] {\n  background-size: cover;\n  \n  background-repeat: no-repeat;\n  background-position: center center;\n  margin-top: -40px;\n  width: 100%;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n.gsptextinimage[_ngcontent-%COMP%] {\n  color: white;\n}\n.gsptextinimage_pos[_ngcontent-%COMP%] {\n  margin-left: 5vw;\n  margin-top: 2vh;\n  color: white;\n}\n.gspheaderimage[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.gspheadertext[_ngcontent-%COMP%] {\n  color: black;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gspheadertext[_ngcontent-%COMP%]:hover {\n  color: #004439;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gspheaderlanguage[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding-right: 0px;\n  font-size: 0.8rem;\n  padding-top: 12px;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n#deutschID[_ngcontent-%COMP%] {\n  color: black;\n}\n#deutschID[_ngcontent-%COMP%]:hover {\n  color: #263268;\n}\n#englishID[_ngcontent-%COMP%] {\n  color: #878eab;\n}\n#englishID[_ngcontent-%COMP%]:hover {\n  color: #263268;\n}\n.gspparagraph[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  margin-top: 0px;\n  background-color: #f2edea;\n}\n.gspcolimageleft[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 4px;\n  margin-right: 4px;\n  padding-bottom: 30px;\n}\n.gspcolimageright[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 0;\n  padding-bottom: 30px;\n}\n.gspcolimagecenter[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 30px;\n}\n.gsprouterlinkactive[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #004439;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gspfooterlink[_ngcontent-%COMP%] {\n  color: white;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gspfooterlink[_ngcontent-%COMP%]:hover {\n  color: #668f88;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gsphochgestellt[_ngcontent-%COMP%] {\n  bottom: 0.25em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhDQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDRjtBQUdBO0VBQ0UsMENBQUE7RUFDQSxZQUFBO0FBREY7QUFJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBRkY7QUFLQTtFQUNFLHNCQUFBO0VBSEEsWUFBWTtFQUlaLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQUZGO0FBS0E7O0VBQ0UscUJBQUE7QUFGRjtBQUtBO0VBQ0Usc0JBQUE7RUFIQSxZQUFZO0VBSVosNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUZGO0FBS0E7RUFDRSxzQkFBQTtFQUhBLFlBQVk7RUFJWiw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBRkY7QUFLQTtFQUNFLFlBQUE7QUFIRjtBQU1BO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUpGO0FBT0E7RUFDRSxlQUFBO0FBTEY7QUFRQTtFQUNFLFlBQUE7RUFDQSwwQ0FBQTtBQU5GO0FBU0E7RUFDRSxjQUFBO0VBQ0EsMENBQUE7QUFQRjtBQVVBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDBDQUFBO0FBUkY7QUFXQTtFQUNFLFlBQUE7QUFURjtBQVlBO0VBQ0UsY0FBQTtBQVZGO0FBYUE7RUFDRSxjQUFBO0FBWEY7QUFjQTtFQUNFLGNBQUE7QUFaRjtBQWVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFiRjtBQWdCQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFkRjtBQWlCQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQWZGO0FBa0JBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBaEJGO0FBbUJBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsMENBQUE7QUFqQkY7QUFvQkE7RUFDRSxZQUFBO0VBQ0EsMENBQUE7QUFsQkY7QUFxQkE7RUFDRSxjQUFBO0VBQ0EsMENBQUE7QUFuQkY7QUFzQkE7RUFDRSxjQUFBO0FBcEJGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nc3B0aXRsZWZvbnQge1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XG59XG5cblxuLmdzcHRleHRmb250IHtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5nc3BjYXJkaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZ3NwY2FyZHRleHQge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiA8LS0tLS0tICovXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LCA5NiwgODUpO1xuICB0b3A6IDEwMHB4O1xuICBvcGFjaXR5OiAwLjc7XG4gIG1hcmdpbi10b3A6IC00NXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmEsIC5nc3BjYXJkdGV4dDpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmdzcGNhcmR0ZXh0MnplaWxpZyB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIDwtLS0tLS0gKi9cbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcbiAgdG9wOiAxMDBweDtcbiAgb3BhY2l0eTogMC41O1xuICBtYXJnaW4tdG9wOiAtNjhweDtcbn1cblxuLmdzcGNhcmR0ZXh0cGVyc29uIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogPC0tLS0tLSAqL1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBtYXJnaW4tdG9wOiAtNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XG4gIHRvcDogMTAwcHg7XG4gIG9wYWNpdHk6IDAuNVxufVxuXG4uZ3NwdGV4dGluaW1hZ2Uge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5nc3B0ZXh0aW5pbWFnZV9wb3Mge1xuICBtYXJnaW4tbGVmdDogNXZ3O1xuICBtYXJnaW4tdG9wOiAydmg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmdzcGhlYWRlcmltYWdlIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uZ3NwaGVhZGVydGV4dCB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xufVxuXG4uZ3NwaGVhZGVydGV4dDpob3ZlciB7XG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbn1cblxuLmdzcGhlYWRlcmxhbmd1YWdlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xufVxuXG4jZGV1dHNjaElEIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4jZGV1dHNjaElEOmhvdmVyIHtcbiAgY29sb3I6IHJnYigzOCwgNTAsIDEwNCk7XG59XG5cbiNlbmdsaXNoSUQge1xuICBjb2xvcjogcmdiKDEzNSwgMTQyLCAxNzEpO1xufVxuXG4jZW5nbGlzaElEOmhvdmVyIHtcbiAgY29sb3I6IHJnYigzOCwgNTAsIDEwNCk7XG59XG5cbi5nc3BwYXJhZ3JhcGgge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyMzcsIDIzNCk7XG59XG5cbi5nc3Bjb2xpbWFnZWxlZnQge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG4uZ3NwY29saW1hZ2VyaWdodCB7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLmdzcGNvbGltYWdlY2VudGVyIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG5cbi5nc3Byb3V0ZXJsaW5rYWN0aXZlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbn1cblxuLmdzcGZvb3Rlcmxpbmsge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbn1cblxuLmdzcGZvb3Rlcmxpbms6aG92ZXIge1xuICBjb2xvcjogcmdiKDEwMiwgMTQzLCAxMzYpO1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG59XG5cbi5nc3Bob2NoZ2VzdGVsbHQge1xuICBib3R0b206IDAuMjVlbTtcbn1cblxuIl19 */"] });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2202);
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
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @scullyio/ng-lib */ 6064);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);

















function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__.TranslateHttpLoader(http);
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient]
                }
            }),
            _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_15__.ScullyLibModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _team_team_component__WEBPACK_IMPORTED_MODULE_2__.TeamComponent,
        _taetigkeit_taetigkeit_component__WEBPACK_IMPORTED_MODULE_3__.TaetigkeitComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent,
        _international_international_component__WEBPACK_IMPORTED_MODULE_5__.InternationalComponent,
        _kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_6__.KontaktComponent,
        _impressum_impressum_component__WEBPACK_IMPORTED_MODULE_7__.ImpressumComponent,
        _haftungsausschluss_haftungsausschluss_component__WEBPACK_IMPORTED_MODULE_8__.HaftungsausschlussComponent,
        _datenschutz_datenschutz_component__WEBPACK_IMPORTED_MODULE_9__.DatenschutzComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule, _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_15__.ScullyLibModule] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 3935);



class DatenschutzComponent {
    constructor() { }
    ngOnInit() {
    }
}
DatenschutzComponent.ɵfac = function DatenschutzComponent_Factory(t) { return new (t || DatenschutzComponent)(); };
DatenschutzComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatenschutzComponent, selectors: [["app-datenschutz"]], decls: 107, vars: 86, consts: [[1, "gsphomeheader"], [1, "container", "gsptextinimage"], [1, "row"], [1, "col-md-1"], [1, "col-md-8"], ["src", "../../assets/images/gs_logo_subseiten.png.png", 1, "gspheaderimage"], [1, "col-md-2"], [1, "gspparagraph"], [1, "container"], [1, "gsptitlefont"], ["href", "mailto:office@gsplegal.at"]], template: function DatenschutzComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Tel: +43-1-319 94 70, Fax: +43-1-319 94 70-70");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Email: office(AT)gsplegal.at ");
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
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.UpperCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: [".gsptitlefont[_ngcontent-%COMP%] {\n  font-family: 'Open Sans Condensed', sans-serif;\n  font-size: 30px;\n  color: #004439;\n}\n.gsptextfont[_ngcontent-%COMP%] {\n  font-family: 'Source Sans Pro', sans-serif;\n  color: black;\n}\n.gspcardimage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.gspcardtext[_ngcontent-%COMP%] {\n  background-size: cover;\n  \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: #616055;\n  top: 100px;\n  opacity: 0.7;\n  margin-top: -45px;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%], .gspcardtext[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.gspcardtext2zeilig[_ngcontent-%COMP%] {\n  background-size: cover;\n  \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n  margin-top: -68px;\n}\n.gspcardtextperson[_ngcontent-%COMP%] {\n  background-size: cover;\n  \n  background-repeat: no-repeat;\n  background-position: center center;\n  margin-top: -40px;\n  width: 100%;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n.gsptextinimage[_ngcontent-%COMP%] {\n  color: white;\n}\n.gsptextinimage_pos[_ngcontent-%COMP%] {\n  margin-left: 5vw;\n  margin-top: 2vh;\n  color: white;\n}\n.gspheaderimage[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.gspheadertext[_ngcontent-%COMP%] {\n  color: black;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gspheadertext[_ngcontent-%COMP%]:hover {\n  color: #004439;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gspheaderlanguage[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding-right: 0px;\n  font-size: 0.8rem;\n  padding-top: 12px;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n#deutschID[_ngcontent-%COMP%] {\n  color: black;\n}\n#deutschID[_ngcontent-%COMP%]:hover {\n  color: #263268;\n}\n#englishID[_ngcontent-%COMP%] {\n  color: #878eab;\n}\n#englishID[_ngcontent-%COMP%]:hover {\n  color: #263268;\n}\n.gspparagraph[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  margin-top: 0px;\n  background-color: #f2edea;\n}\n.gspcolimageleft[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 4px;\n  margin-right: 4px;\n  padding-bottom: 30px;\n}\n.gspcolimageright[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 0;\n  padding-bottom: 30px;\n}\n.gspcolimagecenter[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 30px;\n}\n.gsprouterlinkactive[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #004439;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gspfooterlink[_ngcontent-%COMP%] {\n  color: white;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gspfooterlink[_ngcontent-%COMP%]:hover {\n  color: #668f88;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gsphochgestellt[_ngcontent-%COMP%] {\n  bottom: 0.25em;\n}\n.gsphomeheader[_ngcontent-%COMP%] {\n  height: 450px;\n  background-image: url('header_home.jpg');\n  background-position: center center;\n  background-size: cover;\n  overflow: hidden;\n  padding-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxhcHAuY29tcG9uZW50Lmxlc3MiLCJkYXRlbnNjaHV0ei5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhDQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDRjtBREdBO0VBQ0UsMENBQUE7RUFDQSxZQUFBO0FDREY7QURJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDRkY7QURLQTtFQUNFLHNCQUFBO0VDSEEsWUFBWTtFRElaLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ0ZGO0FES0E7O0VBQ0UscUJBQUE7QUNGRjtBREtBO0VBQ0Usc0JBQUE7RUNIQSxZQUFZO0VESVosNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0ZGO0FES0E7RUFDRSxzQkFBQTtFQ0hBLFlBQVk7RURJWiw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDRkY7QURLQTtFQUNFLFlBQUE7QUNIRjtBRE1BO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0pGO0FET0E7RUFDRSxlQUFBO0FDTEY7QURRQTtFQUNFLFlBQUE7RUFDQSwwQ0FBQTtBQ05GO0FEU0E7RUFDRSxjQUFBO0VBQ0EsMENBQUE7QUNQRjtBRFVBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDBDQUFBO0FDUkY7QURXQTtFQUNFLFlBQUE7QUNURjtBRFlBO0VBQ0UsY0FBQTtBQ1ZGO0FEYUE7RUFDRSxjQUFBO0FDWEY7QURjQTtFQUNFLGNBQUE7QUNaRjtBRGVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNiRjtBRGdCQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNkRjtBRGlCQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ2ZGO0FEa0JBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDaEJGO0FEbUJBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsMENBQUE7QUNqQkY7QURvQkE7RUFDRSxZQUFBO0VBQ0EsMENBQUE7QUNsQkY7QURxQkE7RUFDRSxjQUFBO0VBQ0EsMENBQUE7QUNuQkY7QURzQkE7RUFDRSxjQUFBO0FDcEJGO0FBdElBO0VBQ0UsYUFBQTtFQUNBLHdDQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUF3SUYiLCJmaWxlIjoiZGF0ZW5zY2h1dHouY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3NwdGl0bGVmb250IHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogcmdiKDAsNjgsNTcpO1xufVxuXG5cbi5nc3B0ZXh0Zm9udCB7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uZ3NwY2FyZGltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmdzcGNhcmR0ZXh0IHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogPC0tLS0tLSAqL1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5NywgOTYsIDg1KTtcbiAgdG9wOiAxMDBweDtcbiAgb3BhY2l0eTogMC43O1xuICBtYXJnaW4tdG9wOiAtNDVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hLCAuZ3NwY2FyZHRleHQ6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5nc3BjYXJkdGV4dDJ6ZWlsaWcge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiA8LS0tLS0tICovXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XG4gIHRvcDogMTAwcHg7XG4gIG9wYWNpdHk6IDAuNTtcbiAgbWFyZ2luLXRvcDogLTY4cHg7XG59XG5cbi5nc3BjYXJkdGV4dHBlcnNvbiB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIDwtLS0tLS0gKi9cbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogLTQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xuICB0b3A6IDEwMHB4O1xuICBvcGFjaXR5OiAwLjVcbn1cblxuLmdzcHRleHRpbmltYWdlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZ3NwdGV4dGluaW1hZ2VfcG9zIHtcbiAgbWFyZ2luLWxlZnQ6IDV2dztcbiAgbWFyZ2luLXRvcDogMnZoO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5nc3BoZWFkZXJpbWFnZSB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmdzcGhlYWRlcnRleHQge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbn1cblxuLmdzcGhlYWRlcnRleHQ6aG92ZXIge1xuICBjb2xvcjogcmdiKDAsNjgsNTcpO1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG59XG5cbi5nc3BoZWFkZXJsYW5ndWFnZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbn1cblxuI2RldXRzY2hJRCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuI2RldXRzY2hJRDpob3ZlciB7XG4gIGNvbG9yOiByZ2IoMzgsIDUwLCAxMDQpO1xufVxuXG4jZW5nbGlzaElEIHtcbiAgY29sb3I6IHJnYigxMzUsIDE0MiwgMTcxKTtcbn1cblxuI2VuZ2xpc2hJRDpob3ZlciB7XG4gIGNvbG9yOiByZ2IoMzgsIDUwLCAxMDQpO1xufVxuXG4uZ3NwcGFyYWdyYXBoIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MiwgMjM3LCAyMzQpO1xufVxuXG4uZ3NwY29saW1hZ2VsZWZ0IHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLmdzcGNvbGltYWdlcmlnaHQge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG5cbi5nc3Bjb2xpbWFnZWNlbnRlciB7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG4uZ3Nwcm91dGVybGlua2FjdGl2ZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogcmdiKDAsNjgsNTcpO1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG59XG5cbi5nc3Bmb290ZXJsaW5rIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG59XG5cbi5nc3Bmb290ZXJsaW5rOmhvdmVyIHtcbiAgY29sb3I6IHJnYigxMDIsIDE0MywgMTM2KTtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xufVxuXG4uZ3NwaG9jaGdlc3RlbGx0IHtcbiAgYm90dG9tOiAwLjI1ZW07XG59XG5cbiIsIkBpbXBvcnQgXCIuLi9hcHAuY29tcG9uZW50Lmxlc3NcIjtcblxuLmdzcGhvbWVoZWFkZXIge1xuICBoZWlnaHQ6IDQ1MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2hlYWRlci9oZWFkZXJfaG9tZS5qcGdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuIl19 */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 3935);



class HaftungsausschlussComponent {
    constructor() { }
    ngOnInit() {
    }
}
HaftungsausschlussComponent.ɵfac = function HaftungsausschlussComponent_Factory(t) { return new (t || HaftungsausschlussComponent)(); };
HaftungsausschlussComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HaftungsausschlussComponent, selectors: [["app-haftungsausschluss"]], decls: 21, vars: 11, consts: [[1, "gsphomeheader"], [1, "container", "gsptextinimage"], [1, "row"], [1, "col-md-1"], [1, "col-md-8"], ["src", "../../assets/images/gs_logo_subseiten.png.png", 1, "gspheaderimage"], [1, "gspparagraph"], [1, "container"], [1, "gsptitlefont"]], template: function HaftungsausschlussComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.UpperCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: [".gsptitlefont[_ngcontent-%COMP%] {\n  font-family: 'Open Sans Condensed', sans-serif;\n  font-size: 30px;\n  color: #004439;\n}\n.gsptextfont[_ngcontent-%COMP%] {\n  font-family: 'Source Sans Pro', sans-serif;\n  color: black;\n}\n.gspcardimage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.gspcardtext[_ngcontent-%COMP%] {\n  background-size: cover;\n  \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: #616055;\n  top: 100px;\n  opacity: 0.7;\n  margin-top: -45px;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%], .gspcardtext[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.gspcardtext2zeilig[_ngcontent-%COMP%] {\n  background-size: cover;\n  \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n  margin-top: -68px;\n}\n.gspcardtextperson[_ngcontent-%COMP%] {\n  background-size: cover;\n  \n  background-repeat: no-repeat;\n  background-position: center center;\n  margin-top: -40px;\n  width: 100%;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n.gsptextinimage[_ngcontent-%COMP%] {\n  color: white;\n}\n.gsptextinimage_pos[_ngcontent-%COMP%] {\n  margin-left: 5vw;\n  margin-top: 2vh;\n  color: white;\n}\n.gspheaderimage[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.gspheadertext[_ngcontent-%COMP%] {\n  color: black;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gspheadertext[_ngcontent-%COMP%]:hover {\n  color: #004439;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gspheaderlanguage[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding-right: 0px;\n  font-size: 0.8rem;\n  padding-top: 12px;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n#deutschID[_ngcontent-%COMP%] {\n  color: black;\n}\n#deutschID[_ngcontent-%COMP%]:hover {\n  color: #263268;\n}\n#englishID[_ngcontent-%COMP%] {\n  color: #878eab;\n}\n#englishID[_ngcontent-%COMP%]:hover {\n  color: #263268;\n}\n.gspparagraph[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  margin-top: 0px;\n  background-color: #f2edea;\n}\n.gspcolimageleft[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 4px;\n  margin-right: 4px;\n  padding-bottom: 30px;\n}\n.gspcolimageright[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 0;\n  padding-bottom: 30px;\n}\n.gspcolimagecenter[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 30px;\n}\n.gsprouterlinkactive[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #004439;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gspfooterlink[_ngcontent-%COMP%] {\n  color: white;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gspfooterlink[_ngcontent-%COMP%]:hover {\n  color: #668f88;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gsphochgestellt[_ngcontent-%COMP%] {\n  bottom: 0.25em;\n}\n.gsphomeheader[_ngcontent-%COMP%] {\n  height: 450px;\n  background-image: url('header_home.jpg');\n  background-position: center center;\n  background-size: cover;\n  overflow: hidden;\n  padding-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxhcHAuY29tcG9uZW50Lmxlc3MiLCJoYWZ0dW5nc2F1c3NjaGx1c3MuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4Q0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQ0Y7QURHQTtFQUNFLDBDQUFBO0VBQ0EsWUFBQTtBQ0RGO0FESUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0ZGO0FES0E7RUFDRSxzQkFBQTtFQ0hBLFlBQVk7RURJWiw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNGRjtBREtBOztFQUNFLHFCQUFBO0FDRkY7QURLQTtFQUNFLHNCQUFBO0VDSEEsWUFBWTtFRElaLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNGRjtBREtBO0VBQ0Usc0JBQUE7RUNIQSxZQUFZO0VESVosNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0ZGO0FES0E7RUFDRSxZQUFBO0FDSEY7QURNQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNKRjtBRE9BO0VBQ0UsZUFBQTtBQ0xGO0FEUUE7RUFDRSxZQUFBO0VBQ0EsMENBQUE7QUNORjtBRFNBO0VBQ0UsY0FBQTtFQUNBLDBDQUFBO0FDUEY7QURVQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQ0FBQTtBQ1JGO0FEV0E7RUFDRSxZQUFBO0FDVEY7QURZQTtFQUNFLGNBQUE7QUNWRjtBRGFBO0VBQ0UsY0FBQTtBQ1hGO0FEY0E7RUFDRSxjQUFBO0FDWkY7QURlQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDYkY7QURnQkE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDZEY7QURpQkE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNmRjtBRGtCQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ2hCRjtBRG1CQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDBDQUFBO0FDakJGO0FEb0JBO0VBQ0UsWUFBQTtFQUNBLDBDQUFBO0FDbEJGO0FEcUJBO0VBQ0UsY0FBQTtFQUNBLDBDQUFBO0FDbkJGO0FEc0JBO0VBQ0UsY0FBQTtBQ3BCRjtBQXRJQTtFQUNFLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBd0lGIiwiZmlsZSI6ImhhZnR1bmdzYXVzc2NobHVzcy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nc3B0aXRsZWZvbnQge1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XG59XG5cblxuLmdzcHRleHRmb250IHtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5nc3BjYXJkaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZ3NwY2FyZHRleHQge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiA8LS0tLS0tICovXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LCA5NiwgODUpO1xuICB0b3A6IDEwMHB4O1xuICBvcGFjaXR5OiAwLjc7XG4gIG1hcmdpbi10b3A6IC00NXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmEsIC5nc3BjYXJkdGV4dDpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmdzcGNhcmR0ZXh0MnplaWxpZyB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIDwtLS0tLS0gKi9cbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcbiAgdG9wOiAxMDBweDtcbiAgb3BhY2l0eTogMC41O1xuICBtYXJnaW4tdG9wOiAtNjhweDtcbn1cblxuLmdzcGNhcmR0ZXh0cGVyc29uIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogPC0tLS0tLSAqL1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBtYXJnaW4tdG9wOiAtNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XG4gIHRvcDogMTAwcHg7XG4gIG9wYWNpdHk6IDAuNVxufVxuXG4uZ3NwdGV4dGluaW1hZ2Uge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5nc3B0ZXh0aW5pbWFnZV9wb3Mge1xuICBtYXJnaW4tbGVmdDogNXZ3O1xuICBtYXJnaW4tdG9wOiAydmg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmdzcGhlYWRlcmltYWdlIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uZ3NwaGVhZGVydGV4dCB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xufVxuXG4uZ3NwaGVhZGVydGV4dDpob3ZlciB7XG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbn1cblxuLmdzcGhlYWRlcmxhbmd1YWdlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xufVxuXG4jZGV1dHNjaElEIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4jZGV1dHNjaElEOmhvdmVyIHtcbiAgY29sb3I6IHJnYigzOCwgNTAsIDEwNCk7XG59XG5cbiNlbmdsaXNoSUQge1xuICBjb2xvcjogcmdiKDEzNSwgMTQyLCAxNzEpO1xufVxuXG4jZW5nbGlzaElEOmhvdmVyIHtcbiAgY29sb3I6IHJnYigzOCwgNTAsIDEwNCk7XG59XG5cbi5nc3BwYXJhZ3JhcGgge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyMzcsIDIzNCk7XG59XG5cbi5nc3Bjb2xpbWFnZWxlZnQge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG4uZ3NwY29saW1hZ2VyaWdodCB7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLmdzcGNvbGltYWdlY2VudGVyIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG5cbi5nc3Byb3V0ZXJsaW5rYWN0aXZlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbn1cblxuLmdzcGZvb3Rlcmxpbmsge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbn1cblxuLmdzcGZvb3Rlcmxpbms6aG92ZXIge1xuICBjb2xvcjogcmdiKDEwMiwgMTQzLCAxMzYpO1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG59XG5cbi5nc3Bob2NoZ2VzdGVsbHQge1xuICBib3R0b206IDAuMjVlbTtcbn1cblxuIiwiQGltcG9ydCBcIi4uL2FwcC5jb21wb25lbnQubGVzc1wiO1xuXG4uZ3NwaG9tZWhlYWRlciB7XG4gIGhlaWdodDogNDUwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyL2hlYWRlcl9ob21lLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG4iXX0= */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 3935);




class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 67, vars: 32, consts: [[1, "gsphomeheader"], [1, "container", "gsptextinimage_pos"], [1, "row"], [1, "col-md-8"], ["src", "../../assets/images/gs_logo_home_kontakt.png", 1, "gspheaderimage"], [2, "margin-top", "3vh", "padding-left", "1vw", "padding-right", "1vw"], [1, "col-xl-3", "col-md-3", "gspcolimagecenter"], [1, "border-0"], ["routerLink", "../team"], [1, "text-center"], ["src", "../../assets/images/klein/team.jpg", 1, "gspcardimage"], [1, "gspcardtext"], ["routerLink", "../taetigkeitsbereich"], ["src", "../../assets/images/klein/taetigkeitsbereiche_mergers.jpg", "alt", "...", 1, "gspcardimage"], ["routerLink", "../international"], ["src", "../../assets/images/klein/international_global.jpg", "alt", "...", 1, "gspcardimage"], ["routerLink", "../kontakt"], ["src", "../../assets/images/klein/kontakt.jpg", "alt", "...", 1, "gspcardimage"], [1, "gspparagraph", "gspparagraphBGColor"], [1, "container"], [1, "col-md-1"], [1, "gsphometitlefont"], [1, "col-md-9"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "div", 2)(7, "div", 6)(8, "div", 7)(9, "a", 8)(10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11)(13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6)(18, "div", 7)(19, "a", 12)(20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11)(23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6)(28, "div", 7)(29, "a", 14)(30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11)(33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6)(38, "div", 7)(39, "a", 16)(40, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 11)(43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 18)(48, "div", 19)(49, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 3)(52, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 22)(58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 10, "TEAM")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 14, "TAETIGKEITSBEREICH")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 18, "INTERNATIONAL")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 22, "KONTAKT")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](54, 24, "HOMEHEAD"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](60, 26, "HOMEP1"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](63, 28, "HOMEP2"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](66, 30, "HOMEP3"), " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.UpperCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: [".gsptitlefont[_ngcontent-%COMP%] {\n  font-family: 'Open Sans Condensed', sans-serif;\n  font-size: 30px;\n  color: #004439;\n}\n.gsptextfont[_ngcontent-%COMP%] {\n  font-family: 'Source Sans Pro', sans-serif;\n  color: black;\n}\n.gspcardimage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.gspcardtext[_ngcontent-%COMP%] {\n  background-size: cover;\n  \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: #616055;\n  top: 100px;\n  opacity: 0.7;\n  margin-top: -45px;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%], .gspcardtext[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.gspcardtext2zeilig[_ngcontent-%COMP%] {\n  background-size: cover;\n  \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n  margin-top: -68px;\n}\n.gspcardtextperson[_ngcontent-%COMP%] {\n  background-size: cover;\n  \n  background-repeat: no-repeat;\n  background-position: center center;\n  margin-top: -40px;\n  width: 100%;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n.gsptextinimage[_ngcontent-%COMP%] {\n  color: white;\n}\n.gsptextinimage_pos[_ngcontent-%COMP%] {\n  margin-left: 5vw;\n  margin-top: 2vh;\n  color: white;\n}\n.gspheaderimage[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.gspheadertext[_ngcontent-%COMP%] {\n  color: black;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gspheadertext[_ngcontent-%COMP%]:hover {\n  color: #004439;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gspheaderlanguage[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding-right: 0px;\n  font-size: 0.8rem;\n  padding-top: 12px;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n#deutschID[_ngcontent-%COMP%] {\n  color: black;\n}\n#deutschID[_ngcontent-%COMP%]:hover {\n  color: #263268;\n}\n#englishID[_ngcontent-%COMP%] {\n  color: #878eab;\n}\n#englishID[_ngcontent-%COMP%]:hover {\n  color: #263268;\n}\n.gspparagraph[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  margin-top: 0px;\n  background-color: #f2edea;\n}\n.gspcolimageleft[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 4px;\n  margin-right: 4px;\n  padding-bottom: 30px;\n}\n.gspcolimageright[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 0;\n  padding-bottom: 30px;\n}\n.gspcolimagecenter[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 30px;\n}\n.gsprouterlinkactive[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #004439;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gspfooterlink[_ngcontent-%COMP%] {\n  color: white;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gspfooterlink[_ngcontent-%COMP%]:hover {\n  color: #668f88;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gsphochgestellt[_ngcontent-%COMP%] {\n  bottom: 0.25em;\n}\n.gsphomeheader[_ngcontent-%COMP%] {\n  height: 450px;\n  background-image: url('header_home.jpg');\n  background-position: center center;\n  background-size: cover;\n  overflow: hidden;\n  padding-top: 30px;\n}\n.gsphometitlefont[_ngcontent-%COMP%] {\n  font-family: 'Open Sans Condensed', sans-serif;\n  font-size: 30px;\n  color: #004439;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxhcHAuY29tcG9uZW50Lmxlc3MiLCJob21lLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOENBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NGO0FER0E7RUFDRSwwQ0FBQTtFQUNBLFlBQUE7QUNERjtBRElBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNGRjtBREtBO0VBQ0Usc0JBQUE7RUNIQSxZQUFZO0VESVosNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDRkY7QURLQTs7RUFDRSxxQkFBQTtBQ0ZGO0FES0E7RUFDRSxzQkFBQTtFQ0hBLFlBQVk7RURJWiw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDRkY7QURLQTtFQUNFLHNCQUFBO0VDSEEsWUFBWTtFRElaLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNGRjtBREtBO0VBQ0UsWUFBQTtBQ0hGO0FETUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDSkY7QURPQTtFQUNFLGVBQUE7QUNMRjtBRFFBO0VBQ0UsWUFBQTtFQUNBLDBDQUFBO0FDTkY7QURTQTtFQUNFLGNBQUE7RUFDQSwwQ0FBQTtBQ1BGO0FEVUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMENBQUE7QUNSRjtBRFdBO0VBQ0UsWUFBQTtBQ1RGO0FEWUE7RUFDRSxjQUFBO0FDVkY7QURhQTtFQUNFLGNBQUE7QUNYRjtBRGNBO0VBQ0UsY0FBQTtBQ1pGO0FEZUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ2JGO0FEZ0JBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ2RGO0FEaUJBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDZkY7QURrQkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNoQkY7QURtQkE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSwwQ0FBQTtBQ2pCRjtBRG9CQTtFQUNFLFlBQUE7RUFDQSwwQ0FBQTtBQ2xCRjtBRHFCQTtFQUNFLGNBQUE7RUFDQSwwQ0FBQTtBQ25CRjtBRHNCQTtFQUNFLGNBQUE7QUNwQkY7QUFwSUE7RUFDRSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQXNJRjtBQW5JQTtFQUNFLDhDQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFxSUYiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nc3B0aXRsZWZvbnQge1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XG59XG5cblxuLmdzcHRleHRmb250IHtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5nc3BjYXJkaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZ3NwY2FyZHRleHQge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiA8LS0tLS0tICovXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LCA5NiwgODUpO1xuICB0b3A6IDEwMHB4O1xuICBvcGFjaXR5OiAwLjc7XG4gIG1hcmdpbi10b3A6IC00NXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmEsIC5nc3BjYXJkdGV4dDpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmdzcGNhcmR0ZXh0MnplaWxpZyB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIDwtLS0tLS0gKi9cbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcbiAgdG9wOiAxMDBweDtcbiAgb3BhY2l0eTogMC41O1xuICBtYXJnaW4tdG9wOiAtNjhweDtcbn1cblxuLmdzcGNhcmR0ZXh0cGVyc29uIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogPC0tLS0tLSAqL1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBtYXJnaW4tdG9wOiAtNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XG4gIHRvcDogMTAwcHg7XG4gIG9wYWNpdHk6IDAuNVxufVxuXG4uZ3NwdGV4dGluaW1hZ2Uge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5nc3B0ZXh0aW5pbWFnZV9wb3Mge1xuICBtYXJnaW4tbGVmdDogNXZ3O1xuICBtYXJnaW4tdG9wOiAydmg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmdzcGhlYWRlcmltYWdlIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uZ3NwaGVhZGVydGV4dCB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xufVxuXG4uZ3NwaGVhZGVydGV4dDpob3ZlciB7XG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbn1cblxuLmdzcGhlYWRlcmxhbmd1YWdlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xufVxuXG4jZGV1dHNjaElEIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4jZGV1dHNjaElEOmhvdmVyIHtcbiAgY29sb3I6IHJnYigzOCwgNTAsIDEwNCk7XG59XG5cbiNlbmdsaXNoSUQge1xuICBjb2xvcjogcmdiKDEzNSwgMTQyLCAxNzEpO1xufVxuXG4jZW5nbGlzaElEOmhvdmVyIHtcbiAgY29sb3I6IHJnYigzOCwgNTAsIDEwNCk7XG59XG5cbi5nc3BwYXJhZ3JhcGgge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyMzcsIDIzNCk7XG59XG5cbi5nc3Bjb2xpbWFnZWxlZnQge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG4uZ3NwY29saW1hZ2VyaWdodCB7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLmdzcGNvbGltYWdlY2VudGVyIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG5cbi5nc3Byb3V0ZXJsaW5rYWN0aXZlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbn1cblxuLmdzcGZvb3Rlcmxpbmsge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbn1cblxuLmdzcGZvb3Rlcmxpbms6aG92ZXIge1xuICBjb2xvcjogcmdiKDEwMiwgMTQzLCAxMzYpO1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG59XG5cbi5nc3Bob2NoZ2VzdGVsbHQge1xuICBib3R0b206IDAuMjVlbTtcbn1cblxuIiwiQGltcG9ydCBcIi4uL2FwcC5jb21wb25lbnQubGVzc1wiO1xuXG5cblxuLmdzcGhvbWVoZWFkZXIge1xuICBoZWlnaHQ6IDQ1MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2hlYWRlci9oZWFkZXJfaG9tZS5qcGdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG4uZ3NwaG9tZXRpdGxlZm9udCB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHJnYigwLDY4LDU3KTtcbn1cblxuIl19 */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 3935);


class ImpressumComponent {
    constructor() { }
    ngOnInit() {
    }
}
ImpressumComponent.ɵfac = function ImpressumComponent_Factory(t) { return new (t || ImpressumComponent)(); };
ImpressumComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImpressumComponent, selectors: [["app-impressum"]], decls: 56, vars: 24, consts: [[1, "gsphomeheader"], [1, "container", "gsptextinimage"], [1, "row"], [1, "col-md-1"], [1, "col-md-8"], ["src", "../../assets/images/gs_logo_subseiten.png.png", 1, "gspheaderimage"], [1, "col-md-2"], [1, "gspparagraph"], [1, "container"], [1, "gsptitlefont"], ["href", "mailto:office@gsplegal.at", 1, "gspfooterlink", 2, "color", "black"], ["href", "mailto:office@claudiamarschall.at", 1, "gspfooterlink", 2, "color", "black"], ["href", "http://www.claudiamarschall.at"]], template: function ImpressumComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Tel: +43-1-319 94 70, Fax: +43-1-319 94 70-70");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "office(AT)gsplegal.at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "FN 325373s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Design Website: Claudia Marschall");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Email: office(AT)claudiamarschall.at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "http://www.claudiamarschall.at");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 8, "IMPRESSUM"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 10, "RACODE"), ": P131287");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 12, "UID"), ": ATU 64902289");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 14, "DVR"), ": 4000815");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 16, "WEBPROG"), ": Herbert Blaschek ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 18, "BHAFT"), " : photocase.com\u00A9JOEXX ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 20, "BIMP"), " : photocase.com\u00A9larrag01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](55, 22, "BANF"), " : photocase.com\u00A9kallejipp");
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe], styles: [".gsptitlefont[_ngcontent-%COMP%] {\n  font-family: 'Open Sans Condensed', sans-serif;\n  font-size: 30px;\n  color: #004439;\n}\n.gsptextfont[_ngcontent-%COMP%] {\n  font-family: 'Source Sans Pro', sans-serif;\n  color: black;\n}\n.gspcardimage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.gspcardtext[_ngcontent-%COMP%] {\n  background-size: cover;\n  \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: #616055;\n  top: 100px;\n  opacity: 0.7;\n  margin-top: -45px;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%], .gspcardtext[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.gspcardtext2zeilig[_ngcontent-%COMP%] {\n  background-size: cover;\n  \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n  margin-top: -68px;\n}\n.gspcardtextperson[_ngcontent-%COMP%] {\n  background-size: cover;\n  \n  background-repeat: no-repeat;\n  background-position: center center;\n  margin-top: -40px;\n  width: 100%;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n.gsptextinimage[_ngcontent-%COMP%] {\n  color: white;\n}\n.gsptextinimage_pos[_ngcontent-%COMP%] {\n  margin-left: 5vw;\n  margin-top: 2vh;\n  color: white;\n}\n.gspheaderimage[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.gspheadertext[_ngcontent-%COMP%] {\n  color: black;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gspheadertext[_ngcontent-%COMP%]:hover {\n  color: #004439;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gspheaderlanguage[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding-right: 0px;\n  font-size: 0.8rem;\n  padding-top: 12px;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n#deutschID[_ngcontent-%COMP%] {\n  color: black;\n}\n#deutschID[_ngcontent-%COMP%]:hover {\n  color: #263268;\n}\n#englishID[_ngcontent-%COMP%] {\n  color: #878eab;\n}\n#englishID[_ngcontent-%COMP%]:hover {\n  color: #263268;\n}\n.gspparagraph[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  margin-top: 0px;\n  background-color: #f2edea;\n}\n.gspcolimageleft[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 4px;\n  margin-right: 4px;\n  padding-bottom: 30px;\n}\n.gspcolimageright[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 0;\n  padding-bottom: 30px;\n}\n.gspcolimagecenter[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 30px;\n}\n.gsprouterlinkactive[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #004439;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gspfooterlink[_ngcontent-%COMP%] {\n  color: white;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gspfooterlink[_ngcontent-%COMP%]:hover {\n  color: #668f88;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gsphochgestellt[_ngcontent-%COMP%] {\n  bottom: 0.25em;\n}\n.gsphomeheader[_ngcontent-%COMP%] {\n  height: 450px;\n  background-image: url('header_home.jpg');\n  background-position: center center;\n  background-size: cover;\n  overflow: hidden;\n  padding-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxhcHAuY29tcG9uZW50Lmxlc3MiLCJpbXByZXNzdW0uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4Q0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQ0Y7QURHQTtFQUNFLDBDQUFBO0VBQ0EsWUFBQTtBQ0RGO0FESUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0ZGO0FES0E7RUFDRSxzQkFBQTtFQ0hBLFlBQVk7RURJWiw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNGRjtBREtBOztFQUNFLHFCQUFBO0FDRkY7QURLQTtFQUNFLHNCQUFBO0VDSEEsWUFBWTtFRElaLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNGRjtBREtBO0VBQ0Usc0JBQUE7RUNIQSxZQUFZO0VESVosNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0ZGO0FES0E7RUFDRSxZQUFBO0FDSEY7QURNQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNKRjtBRE9BO0VBQ0UsZUFBQTtBQ0xGO0FEUUE7RUFDRSxZQUFBO0VBQ0EsMENBQUE7QUNORjtBRFNBO0VBQ0UsY0FBQTtFQUNBLDBDQUFBO0FDUEY7QURVQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQ0FBQTtBQ1JGO0FEV0E7RUFDRSxZQUFBO0FDVEY7QURZQTtFQUNFLGNBQUE7QUNWRjtBRGFBO0VBQ0UsY0FBQTtBQ1hGO0FEY0E7RUFDRSxjQUFBO0FDWkY7QURlQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDYkY7QURnQkE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDZEY7QURpQkE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNmRjtBRGtCQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ2hCRjtBRG1CQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDBDQUFBO0FDakJGO0FEb0JBO0VBQ0UsWUFBQTtFQUNBLDBDQUFBO0FDbEJGO0FEcUJBO0VBQ0UsY0FBQTtFQUNBLDBDQUFBO0FDbkJGO0FEc0JBO0VBQ0UsY0FBQTtBQ3BCRjtBQXRJQTtFQUNFLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBd0lGIiwiZmlsZSI6ImltcHJlc3N1bS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nc3B0aXRsZWZvbnQge1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XG59XG5cblxuLmdzcHRleHRmb250IHtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5nc3BjYXJkaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZ3NwY2FyZHRleHQge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiA8LS0tLS0tICovXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LCA5NiwgODUpO1xuICB0b3A6IDEwMHB4O1xuICBvcGFjaXR5OiAwLjc7XG4gIG1hcmdpbi10b3A6IC00NXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmEsIC5nc3BjYXJkdGV4dDpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmdzcGNhcmR0ZXh0MnplaWxpZyB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIDwtLS0tLS0gKi9cbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcbiAgdG9wOiAxMDBweDtcbiAgb3BhY2l0eTogMC41O1xuICBtYXJnaW4tdG9wOiAtNjhweDtcbn1cblxuLmdzcGNhcmR0ZXh0cGVyc29uIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogPC0tLS0tLSAqL1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBtYXJnaW4tdG9wOiAtNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XG4gIHRvcDogMTAwcHg7XG4gIG9wYWNpdHk6IDAuNVxufVxuXG4uZ3NwdGV4dGluaW1hZ2Uge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5nc3B0ZXh0aW5pbWFnZV9wb3Mge1xuICBtYXJnaW4tbGVmdDogNXZ3O1xuICBtYXJnaW4tdG9wOiAydmg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmdzcGhlYWRlcmltYWdlIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uZ3NwaGVhZGVydGV4dCB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xufVxuXG4uZ3NwaGVhZGVydGV4dDpob3ZlciB7XG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbn1cblxuLmdzcGhlYWRlcmxhbmd1YWdlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xufVxuXG4jZGV1dHNjaElEIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4jZGV1dHNjaElEOmhvdmVyIHtcbiAgY29sb3I6IHJnYigzOCwgNTAsIDEwNCk7XG59XG5cbiNlbmdsaXNoSUQge1xuICBjb2xvcjogcmdiKDEzNSwgMTQyLCAxNzEpO1xufVxuXG4jZW5nbGlzaElEOmhvdmVyIHtcbiAgY29sb3I6IHJnYigzOCwgNTAsIDEwNCk7XG59XG5cbi5nc3BwYXJhZ3JhcGgge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyMzcsIDIzNCk7XG59XG5cbi5nc3Bjb2xpbWFnZWxlZnQge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG4uZ3NwY29saW1hZ2VyaWdodCB7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLmdzcGNvbGltYWdlY2VudGVyIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG5cbi5nc3Byb3V0ZXJsaW5rYWN0aXZlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiByZ2IoMCw2OCw1Nyk7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbn1cblxuLmdzcGZvb3Rlcmxpbmsge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbn1cblxuLmdzcGZvb3Rlcmxpbms6aG92ZXIge1xuICBjb2xvcjogcmdiKDEwMiwgMTQzLCAxMzYpO1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG59XG5cbi5nc3Bob2NoZ2VzdGVsbHQge1xuICBib3R0b206IDAuMjVlbTtcbn1cblxuIiwiQGltcG9ydCBcIi4uL2FwcC5jb21wb25lbnQubGVzc1wiO1xuXG4uZ3NwaG9tZWhlYWRlciB7XG4gIGhlaWdodDogNDUwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyL2hlYWRlcl9ob21lLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG4iXX0= */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 3935);



class InternationalComponent {
    constructor() { }
    ngOnInit() {
    }
}
InternationalComponent.ɵfac = function InternationalComponent_Factory(t) { return new (t || InternationalComponent)(); };
InternationalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InternationalComponent, selectors: [["app-international"]], decls: 23, vars: 11, consts: [[1, "gspinternationalheader"], [1, "container", "gsptextinimage_pos"], [1, "row"], [1, "col-md-8"], ["src", "../../assets/images/gs_logo_home_kontakt.png", 2, "width", "327px"], [1, "gspparagraph", 2, "background-color", "rgb(255,255,255)"], [1, "container"], [1, "col-md-1"], [1, "gsptitlefont"], [1, "col-md-9"]], template: function InternationalComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 5, "INTERNATIONAL")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 7, "INTP1"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 9, "INTP2"), " ");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.UpperCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: [".gsptitlefont[_ngcontent-%COMP%] {\n  font-family: 'Open Sans Condensed', sans-serif;\n  font-size: 30px;\n  color: #004439;\n}\n.gsptextfont[_ngcontent-%COMP%] {\n  font-family: 'Source Sans Pro', sans-serif;\n  color: black;\n}\n.gspcardimage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.gspcardtext[_ngcontent-%COMP%] {\n  background-size: cover;\n  \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: #616055;\n  top: 100px;\n  opacity: 0.7;\n  margin-top: -45px;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%], .gspcardtext[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.gspcardtext2zeilig[_ngcontent-%COMP%] {\n  background-size: cover;\n  \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n  margin-top: -68px;\n}\n.gspcardtextperson[_ngcontent-%COMP%] {\n  background-size: cover;\n  \n  background-repeat: no-repeat;\n  background-position: center center;\n  margin-top: -40px;\n  width: 100%;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n.gsptextinimage[_ngcontent-%COMP%] {\n  color: white;\n}\n.gsptextinimage_pos[_ngcontent-%COMP%] {\n  margin-left: 5vw;\n  margin-top: 2vh;\n  color: white;\n}\n.gspheaderimage[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.gspheadertext[_ngcontent-%COMP%] {\n  color: black;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gspheadertext[_ngcontent-%COMP%]:hover {\n  color: #004439;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gspheaderlanguage[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding-right: 0px;\n  font-size: 0.8rem;\n  padding-top: 12px;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n#deutschID[_ngcontent-%COMP%] {\n  color: black;\n}\n#deutschID[_ngcontent-%COMP%]:hover {\n  color: #263268;\n}\n#englishID[_ngcontent-%COMP%] {\n  color: #878eab;\n}\n#englishID[_ngcontent-%COMP%]:hover {\n  color: #263268;\n}\n.gspparagraph[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  margin-top: 0px;\n  background-color: #f2edea;\n}\n.gspcolimageleft[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 4px;\n  margin-right: 4px;\n  padding-bottom: 30px;\n}\n.gspcolimageright[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 0;\n  padding-bottom: 30px;\n}\n.gspcolimagecenter[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 30px;\n}\n.gsprouterlinkactive[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #004439;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gspfooterlink[_ngcontent-%COMP%] {\n  color: white;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gspfooterlink[_ngcontent-%COMP%]:hover {\n  color: #668f88;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gsphochgestellt[_ngcontent-%COMP%] {\n  bottom: 0.25em;\n}\n.gspinternationalheader[_ngcontent-%COMP%] {\n  height: 450px;\n  background-image: url('header_international.jpg');\n  background-position: center center;\n  background-size: cover;\n  overflow: hidden;\n  padding-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxhcHAuY29tcG9uZW50Lmxlc3MiLCJpbnRlcm5hdGlvbmFsLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOENBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NGO0FER0E7RUFDRSwwQ0FBQTtFQUNBLFlBQUE7QUNERjtBRElBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNGRjtBREtBO0VBQ0Usc0JBQUE7RUNIQSxZQUFZO0VESVosNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDRkY7QURLQTs7RUFDRSxxQkFBQTtBQ0ZGO0FES0E7RUFDRSxzQkFBQTtFQ0hBLFlBQVk7RURJWiw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDRkY7QURLQTtFQUNFLHNCQUFBO0VDSEEsWUFBWTtFRElaLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNGRjtBREtBO0VBQ0UsWUFBQTtBQ0hGO0FETUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDSkY7QURPQTtFQUNFLGVBQUE7QUNMRjtBRFFBO0VBQ0UsWUFBQTtFQUNBLDBDQUFBO0FDTkY7QURTQTtFQUNFLGNBQUE7RUFDQSwwQ0FBQTtBQ1BGO0FEVUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMENBQUE7QUNSRjtBRFdBO0VBQ0UsWUFBQTtBQ1RGO0FEWUE7RUFDRSxjQUFBO0FDVkY7QURhQTtFQUNFLGNBQUE7QUNYRjtBRGNBO0VBQ0UsY0FBQTtBQ1pGO0FEZUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ2JGO0FEZ0JBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ2RGO0FEaUJBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDZkY7QURrQkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNoQkY7QURtQkE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSwwQ0FBQTtBQ2pCRjtBRG9CQTtFQUNFLFlBQUE7RUFDQSwwQ0FBQTtBQ2xCRjtBRHFCQTtFQUNFLGNBQUE7RUFDQSwwQ0FBQTtBQ25CRjtBRHNCQTtFQUNFLGNBQUE7QUNwQkY7QUF0SUE7RUFDRSxhQUFBO0VBQ0EsaURBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQXdJRiIsImZpbGUiOiJpbnRlcm5hdGlvbmFsLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmdzcHRpdGxlZm9udCB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHJnYigwLDY4LDU3KTtcbn1cblxuXG4uZ3NwdGV4dGZvbnQge1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmdzcGNhcmRpbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5nc3BjYXJkdGV4dCB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIDwtLS0tLS0gKi9cbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTcsIDk2LCA4NSk7XG4gIHRvcDogMTAwcHg7XG4gIG9wYWNpdHk6IDAuNztcbiAgbWFyZ2luLXRvcDogLTQ1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYSwgLmdzcGNhcmR0ZXh0OmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZ3NwY2FyZHRleHQyemVpbGlnIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogPC0tLS0tLSAqL1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xuICB0b3A6IDEwMHB4O1xuICBvcGFjaXR5OiAwLjU7XG4gIG1hcmdpbi10b3A6IC02OHB4O1xufVxuXG4uZ3NwY2FyZHRleHRwZXJzb24ge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiA8LS0tLS0tICovXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IC00MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDFweDtcbiAgcGFkZGluZy1ib3R0b206IDFweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcbiAgdG9wOiAxMDBweDtcbiAgb3BhY2l0eTogMC41XG59XG5cbi5nc3B0ZXh0aW5pbWFnZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmdzcHRleHRpbmltYWdlX3BvcyB7XG4gIG1hcmdpbi1sZWZ0OiA1dnc7XG4gIG1hcmdpbi10b3A6IDJ2aDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZ3NwaGVhZGVyaW1hZ2Uge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5nc3BoZWFkZXJ0ZXh0IHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG59XG5cbi5nc3BoZWFkZXJ0ZXh0OmhvdmVyIHtcbiAgY29sb3I6IHJnYigwLDY4LDU3KTtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xufVxuXG4uZ3NwaGVhZGVybGFuZ3VhZ2Uge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG59XG5cbiNkZXV0c2NoSUQge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbiNkZXV0c2NoSUQ6aG92ZXIge1xuICBjb2xvcjogcmdiKDM4LCA1MCwgMTA0KTtcbn1cblxuI2VuZ2xpc2hJRCB7XG4gIGNvbG9yOiByZ2IoMTM1LCAxNDIsIDE3MSk7XG59XG5cbiNlbmdsaXNoSUQ6aG92ZXIge1xuICBjb2xvcjogcmdiKDM4LCA1MCwgMTA0KTtcbn1cblxuLmdzcHBhcmFncmFwaCB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDIzNywgMjM0KTtcbn1cblxuLmdzcGNvbGltYWdlbGVmdCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG5cbi5nc3Bjb2xpbWFnZXJpZ2h0IHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG4uZ3NwY29saW1hZ2VjZW50ZXIge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLmdzcHJvdXRlcmxpbmthY3RpdmUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHJnYigwLDY4LDU3KTtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xufVxuXG4uZ3NwZm9vdGVybGluayB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xufVxuXG4uZ3NwZm9vdGVybGluazpob3ZlciB7XG4gIGNvbG9yOiByZ2IoMTAyLCAxNDMsIDEzNik7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbn1cblxuLmdzcGhvY2hnZXN0ZWxsdCB7XG4gIGJvdHRvbTogMC4yNWVtO1xufVxuXG4iLCJAaW1wb3J0IFwiLi4vYXBwLmNvbXBvbmVudC5sZXNzXCI7XG5cbi5nc3BpbnRlcm5hdGlvbmFsaGVhZGVyIHtcbiAgaGVpZ2h0OiA0NTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXIvaGVhZGVyX2ludGVybmF0aW9uYWwuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cbiJdfQ== */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 3935);



class KontaktComponent {
    constructor() { }
    ngOnInit() {
    }
}
KontaktComponent.ɵfac = function KontaktComponent_Factory(t) { return new (t || KontaktComponent)(); };
KontaktComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KontaktComponent, selectors: [["app-kontakt"]], decls: 48, vars: 19, consts: [[1, "gsphomeheader"], [1, "container", "gsptextinimage_pos"], [1, "row"], [1, "col-md-8"], ["src", "../../assets/images/gs_logo_home_kontakt.png", 2, "width", "327px"], [1, "col-md-2"], [1, "gspparagraph"], [1, "container"], [1, "col-md-1"], [1, "gsptitlefont"], ["href", "mailto:office@gsplegal.at", 1, "gspkontaktemail"], [1, "gspparagraph", 2, "background-color", "rgb(255,255,255)"], [1, "col-md-10"], [1, "gspanfahrt"]], template: function KontaktComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Tel: +43-1-319 94 70, Fax: +43-1-319 94 70-70");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Email: office(AT)gsplegal.at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11)(26, "div", 7)(27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3)(30, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12)(37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 7, "KONTAKT")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 11, "ANFAHRT")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 13, "ANFP1"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 15, "ANFP2"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 17, "ANFP3"), " ");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.UpperCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: [".gsptitlefont[_ngcontent-%COMP%] {\n  font-family: 'Open Sans Condensed', sans-serif;\n  font-size: 30px;\n  color: #004439;\n}\n.gsptextfont[_ngcontent-%COMP%] {\n  font-family: 'Source Sans Pro', sans-serif;\n  color: black;\n}\n.gspcardimage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.gspcardtext[_ngcontent-%COMP%] {\n  background-size: cover;\n  \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: #616055;\n  top: 100px;\n  opacity: 0.7;\n  margin-top: -45px;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%], .gspcardtext[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.gspcardtext2zeilig[_ngcontent-%COMP%] {\n  background-size: cover;\n  \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n  margin-top: -68px;\n}\n.gspcardtextperson[_ngcontent-%COMP%] {\n  background-size: cover;\n  \n  background-repeat: no-repeat;\n  background-position: center center;\n  margin-top: -40px;\n  width: 100%;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n.gsptextinimage[_ngcontent-%COMP%] {\n  color: white;\n}\n.gsptextinimage_pos[_ngcontent-%COMP%] {\n  margin-left: 5vw;\n  margin-top: 2vh;\n  color: white;\n}\n.gspheaderimage[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.gspheadertext[_ngcontent-%COMP%] {\n  color: black;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gspheadertext[_ngcontent-%COMP%]:hover {\n  color: #004439;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gspheaderlanguage[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding-right: 0px;\n  font-size: 0.8rem;\n  padding-top: 12px;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n#deutschID[_ngcontent-%COMP%] {\n  color: black;\n}\n#deutschID[_ngcontent-%COMP%]:hover {\n  color: #263268;\n}\n#englishID[_ngcontent-%COMP%] {\n  color: #878eab;\n}\n#englishID[_ngcontent-%COMP%]:hover {\n  color: #263268;\n}\n.gspparagraph[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  margin-top: 0px;\n  background-color: #f2edea;\n}\n.gspcolimageleft[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 4px;\n  margin-right: 4px;\n  padding-bottom: 30px;\n}\n.gspcolimageright[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 0;\n  padding-bottom: 30px;\n}\n.gspcolimagecenter[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 30px;\n}\n.gsprouterlinkactive[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #004439;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gspfooterlink[_ngcontent-%COMP%] {\n  color: white;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gspfooterlink[_ngcontent-%COMP%]:hover {\n  color: #668f88;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gsphochgestellt[_ngcontent-%COMP%] {\n  bottom: 0.25em;\n}\n.gsphomeheader[_ngcontent-%COMP%] {\n  height: 450px;\n  background-image: url('header_kontakt.jpg');\n  background-position: center center;\n  background-size: cover;\n  overflow: hidden;\n  padding-top: 30px;\n}\n.gspanfahrt[_ngcontent-%COMP%] {\n  height: 35vw;\n  \n  \n  background-position: top center;\n  \n  background-repeat: no-repeat;\n  \n  \n  background-size: cover;\n  \n  background-image: url('plan_kontakt.jpg');\n  overflow: auto;\n  background-size: 100%;\n  padding-top: 30px;\n}\n.gspkontaktemail[_ngcontent-%COMP%] {\n  color: #004439;\n}\n.gspkontaktemail[_ngcontent-%COMP%]:hover {\n  color: #668f88;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxhcHAuY29tcG9uZW50Lmxlc3MiLCJrb250YWt0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOENBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NGO0FER0E7RUFDRSwwQ0FBQTtFQUNBLFlBQUE7QUNERjtBRElBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNGRjtBREtBO0VBQ0Usc0JBQUE7RUNIQSxZQUFZO0VESVosNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDRkY7QURLQTs7RUFDRSxxQkFBQTtBQ0ZGO0FES0E7RUFDRSxzQkFBQTtFQ0hBLFlBQVk7RURJWiw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDRkY7QURLQTtFQUNFLHNCQUFBO0VDSEEsWUFBWTtFRElaLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNGRjtBREtBO0VBQ0UsWUFBQTtBQ0hGO0FETUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDSkY7QURPQTtFQUNFLGVBQUE7QUNMRjtBRFFBO0VBQ0UsWUFBQTtFQUNBLDBDQUFBO0FDTkY7QURTQTtFQUNFLGNBQUE7RUFDQSwwQ0FBQTtBQ1BGO0FEVUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMENBQUE7QUNSRjtBRFdBO0VBQ0UsWUFBQTtBQ1RGO0FEWUE7RUFDRSxjQUFBO0FDVkY7QURhQTtFQUNFLGNBQUE7QUNYRjtBRGNBO0VBQ0UsY0FBQTtBQ1pGO0FEZUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ2JGO0FEZ0JBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ2RGO0FEaUJBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDZkY7QURrQkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNoQkY7QURtQkE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSwwQ0FBQTtBQ2pCRjtBRG9CQTtFQUNFLFlBQUE7RUFDQSwwQ0FBQTtBQ2xCRjtBRHFCQTtFQUNFLGNBQUE7RUFDQSwwQ0FBQTtBQ25CRjtBRHNCQTtFQUNFLGNBQUE7QUNwQkY7QUF0SUE7RUFDRSxhQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQXdJRjtBQXJJQTtFQUNFLFlBQUE7RUF1SUEsMEJBQTBCO0VBQzFCLDBFQUEwRTtFQXJJMUUsK0JBQUE7RUF1SUEsa0NBQWtDO0VBcElsQyw0QkFBQTtFQXNJQTs4REFDNEQ7RUFDNUQ7OEJBQzRCO0VBbEk1QixzQkFBQTtFQW9JQTs0Q0FDMEM7RUFqSTFDLHlDQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFtSUY7QUFoSUE7RUFDRSxjQUFBO0FBa0lGO0FBaElBO0VBQ0UsY0FBQTtBQWtJRiIsImZpbGUiOiJrb250YWt0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmdzcHRpdGxlZm9udCB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHJnYigwLDY4LDU3KTtcbn1cblxuXG4uZ3NwdGV4dGZvbnQge1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmdzcGNhcmRpbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5nc3BjYXJkdGV4dCB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIDwtLS0tLS0gKi9cbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTcsIDk2LCA4NSk7XG4gIHRvcDogMTAwcHg7XG4gIG9wYWNpdHk6IDAuNztcbiAgbWFyZ2luLXRvcDogLTQ1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYSwgLmdzcGNhcmR0ZXh0OmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZ3NwY2FyZHRleHQyemVpbGlnIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogPC0tLS0tLSAqL1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xuICB0b3A6IDEwMHB4O1xuICBvcGFjaXR5OiAwLjU7XG4gIG1hcmdpbi10b3A6IC02OHB4O1xufVxuXG4uZ3NwY2FyZHRleHRwZXJzb24ge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiA8LS0tLS0tICovXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IC00MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDFweDtcbiAgcGFkZGluZy1ib3R0b206IDFweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcbiAgdG9wOiAxMDBweDtcbiAgb3BhY2l0eTogMC41XG59XG5cbi5nc3B0ZXh0aW5pbWFnZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmdzcHRleHRpbmltYWdlX3BvcyB7XG4gIG1hcmdpbi1sZWZ0OiA1dnc7XG4gIG1hcmdpbi10b3A6IDJ2aDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZ3NwaGVhZGVyaW1hZ2Uge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5nc3BoZWFkZXJ0ZXh0IHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG59XG5cbi5nc3BoZWFkZXJ0ZXh0OmhvdmVyIHtcbiAgY29sb3I6IHJnYigwLDY4LDU3KTtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xufVxuXG4uZ3NwaGVhZGVybGFuZ3VhZ2Uge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG59XG5cbiNkZXV0c2NoSUQge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbiNkZXV0c2NoSUQ6aG92ZXIge1xuICBjb2xvcjogcmdiKDM4LCA1MCwgMTA0KTtcbn1cblxuI2VuZ2xpc2hJRCB7XG4gIGNvbG9yOiByZ2IoMTM1LCAxNDIsIDE3MSk7XG59XG5cbiNlbmdsaXNoSUQ6aG92ZXIge1xuICBjb2xvcjogcmdiKDM4LCA1MCwgMTA0KTtcbn1cblxuLmdzcHBhcmFncmFwaCB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDIzNywgMjM0KTtcbn1cblxuLmdzcGNvbGltYWdlbGVmdCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG5cbi5nc3Bjb2xpbWFnZXJpZ2h0IHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG4uZ3NwY29saW1hZ2VjZW50ZXIge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLmdzcHJvdXRlcmxpbmthY3RpdmUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHJnYigwLDY4LDU3KTtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xufVxuXG4uZ3NwZm9vdGVybGluayB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xufVxuXG4uZ3NwZm9vdGVybGluazpob3ZlciB7XG4gIGNvbG9yOiByZ2IoMTAyLCAxNDMsIDEzNik7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbn1cblxuLmdzcGhvY2hnZXN0ZWxsdCB7XG4gIGJvdHRvbTogMC4yNWVtO1xufVxuXG4iLCJAaW1wb3J0IFwiLi4vYXBwLmNvbXBvbmVudC5sZXNzXCI7XG5cbi5nc3Bob21laGVhZGVyIHtcbiAgaGVpZ2h0OiA0NTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXIvaGVhZGVyX2tvbnRha3QuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuLmdzcGFuZmFocnQge1xuICBoZWlnaHQ6IDM1dnc7XG4gIC8qIExvY2F0aW9uIG9mIHRoZSBpbWFnZSAqL1xuICAvKiBCYWNrZ3JvdW5kIGltYWdlIGlzIGNlbnRlcmVkIHZlcnRpY2FsbHkgYW5kIGhvcml6b250YWxseSBhdCBhbGwgdGltZXMgKi9cbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcblxuICAvKiBCYWNrZ3JvdW5kIGltYWdlIGRvZXNuJ3QgdGlsZSAqL1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXG4gIC8qIEJhY2tncm91bmQgaW1hZ2UgaXMgZml4ZWQgaW4gdGhlIHZpZXdwb3J0IHNvIHRoYXQgaXQgZG9lc24ndCBtb3ZlIHdoZW5cbiAgICAgdGhlIGNvbnRlbnQncyBoZWlnaHQgaXMgZ3JlYXRlciB0aGFuIHRoZSBpbWFnZSdzIGhlaWdodCAqL1xuXG4gIC8qIFRoaXMgaXMgd2hhdCBtYWtlcyB0aGUgYmFja2dyb3VuZCBpbWFnZSByZXNjYWxlIGJhc2VkXG4gICAgIG9uIHRoZSBjb250YWluZXIncyBzaXplICovXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgLyogU2V0IGEgYmFja2dyb3VuZCBjb2xvciB0aGF0IHdpbGwgYmUgZGlzcGxheWVkXG4gICAgIHdoaWxlIHRoZSBiYWNrZ3JvdW5kIGltYWdlIGlzIGxvYWRpbmcgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9wbGFuX2tvbnRha3QuanBnXCIpOztcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG5cbi5nc3Brb250YWt0ZW1haWwge1xuICBjb2xvcjogcmdiKDAsNjgsNTcpO1xufVxuLmdzcGtvbnRha3RlbWFpbDpob3ZlciB7XG4gIGNvbG9yOiByZ2IoMTAyLCAxNDMsIDEzNik7XG59XG4iXX0= */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 3935);




class TaetigkeitComponent {
    constructor() { }
    ngOnInit() {
        console.log('TaetigkeitComponente');
    }
}
TaetigkeitComponent.ɵfac = function TaetigkeitComponent_Factory(t) { return new (t || TaetigkeitComponent)(); };
TaetigkeitComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaetigkeitComponent, selectors: [["app-taetigkeit"]], decls: 129, vars: 58, consts: [[1, "gsptateigkeitsbereichheader"], [1, "container", "gsptextinimage_pos"], [1, "row"], [1, "col-md-8"], ["src", "../../assets/images/gs_logo_subseiten.png", 2, "width", "327px"], [1, "container", "gsptextinimage"], [1, "col-md-1"], [1, "gsptitlefonttaetigkeit"], [1, "col-md-2"], [1, "gspparagraph"], [1, "col-lg-12"], [1, "col-xs-6", "col-sm-5", "col-md-4", "col-lg-3", "gspcolimagecenter"], [1, "border-0"], ["routerLink", "../gesellschaftsrecht"], [1, "gsptaetigkeitcontainer"], ["src", "../../assets/images/klein/gesellschaftsrecht.jpg", 1, "gspcardimage"], [1, "gsptaetigkeitbottomcentered"], ["routerLink", "../umgruendung"], ["src", "../../assets/images/klein/umgruendungen.jpg", "alt", "...", 1, "gspcardimage"], ["routerLink", "../mergers"], ["src", "../../assets/images/klein/taetigkeitsbereiche_mergers.jpg", "alt", "...", 1, "gspcardimage"], ["routerLink", "../arbeitsrecht"], ["src", "../../assets/images/klein/arbeitsrecht.jpg", "alt", "...", 1, "gspcardimage"], ["routerLink", "../globalmobility"], ["src", "../../assets/images/klein/international_global.jpg", 1, "gspcardimage"], ["routerLink", "../banken"], ["src", "../../assets/images/klein/banken.jpg", "alt", "...", 1, "gspcardimage"], ["routerLink", "../vertragsgestaltung"], ["src", "../../assets/images/klein/vertragsrecht.jpg", "alt", "...", 1, "gspcardimage"], ["routerLink", "../oeffentlichkeitsrecht"], ["src", "../../assets/images/klein/offentlichkeitsrecht.jpg", "alt", "...", 1, "gspcardimage"], ["routerLink", "../immobilienrecht"], ["src", "../../assets/images/klein/immobilienrecht.jpg", 1, "gspcardimage"], ["routerLink", "../litigation"], ["src", "../../assets/images/klein/zivilprozess.jpg", "alt", "...", 1, "gspcardimage"], [1, "col-xs-4", "col-sm-4", "col-md-4", "col-lg-3", "gspcolimagecenter"], [1, "border-0", 2, "padding-left", "20px"], [1, "gsptitlefont"]], template: function TaetigkeitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3)(9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3)(17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9)(22, "div", 2)(23, "div", 10)(24, "div", 2)(25, "div", 11)(26, "div", 12)(27, "div", 13)(28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16)(31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11)(36, "div", 12)(37, "div", 17)(38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 16)(41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 11)(46, "div", 12)(47, "div", 19)(48, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 16)(51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 11)(56, "div", 12)(57, "div", 21)(58, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 16)(61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](63, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 11)(66, "div", 12)(67, "div", 23)(68, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 16)(71, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](73, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](74, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 11)(76, "div", 12)(77, "div", 25)(78, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 16)(81, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](83, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](84, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 11)(86, "div", 12)(87, "div", 27)(88, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 16)(91, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](93, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](94, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 11)(96, "div", 12)(97, "div", 29)(98, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 16)(101, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](103, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](104, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 11)(106, "div", 12)(107, "div", 31)(108, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 16)(111, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](113, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](114, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 11)(116, "div", 12)(117, "div", 33)(118, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 16)(121, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](123, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](124, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 35)(126, "div", 36)(127, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " Effiziente Beratung auf h\u00F6chstem Niveau.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 14, "TAETIGKEITSBEREICH")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 16, "TAETP1"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 20, "GESELLSCHAFTSRECHT")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 24, "UMGRUENDUNG")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](54, 28, "MERGERS")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](63, 30, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](64, 32, "ARBEITSRECHT")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](73, 34, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](74, 36, "GLOBALMOBILITY")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](83, 38, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](84, 40, "BANKEN")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](93, 42, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](94, 44, "VERTRAGSGESTALTUNG")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](103, 46, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](104, 48, "OEFFENTLICHKEITSRECHT")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](113, 50, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](114, 52, "IMMOBILIENRECHT")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](123, 54, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](124, 56, "LITIGATION")), "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.UpperCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: [".gsptitlefont[_ngcontent-%COMP%] {\n  font-family: 'Open Sans Condensed', sans-serif;\n  font-size: 30px;\n  color: #004439;\n}\n.gsptextfont[_ngcontent-%COMP%] {\n  font-family: 'Source Sans Pro', sans-serif;\n  color: black;\n}\n.gspcardimage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.gspcardtext[_ngcontent-%COMP%] {\n  background-size: cover;\n  \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: #616055;\n  top: 100px;\n  opacity: 0.7;\n  margin-top: -45px;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%], .gspcardtext[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.gspcardtext2zeilig[_ngcontent-%COMP%] {\n  background-size: cover;\n  \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n  margin-top: -68px;\n}\n.gspcardtextperson[_ngcontent-%COMP%] {\n  background-size: cover;\n  \n  background-repeat: no-repeat;\n  background-position: center center;\n  margin-top: -40px;\n  width: 100%;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n.gsptextinimage[_ngcontent-%COMP%] {\n  color: white;\n}\n.gsptextinimage_pos[_ngcontent-%COMP%] {\n  margin-left: 5vw;\n  margin-top: 2vh;\n  color: white;\n}\n.gspheaderimage[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.gspheadertext[_ngcontent-%COMP%] {\n  color: black;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gspheadertext[_ngcontent-%COMP%]:hover {\n  color: #004439;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gspheaderlanguage[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding-right: 0px;\n  font-size: 0.8rem;\n  padding-top: 12px;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n#deutschID[_ngcontent-%COMP%] {\n  color: black;\n}\n#deutschID[_ngcontent-%COMP%]:hover {\n  color: #263268;\n}\n#englishID[_ngcontent-%COMP%] {\n  color: #878eab;\n}\n#englishID[_ngcontent-%COMP%]:hover {\n  color: #263268;\n}\n.gspparagraph[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  margin-top: 0px;\n  background-color: #f2edea;\n}\n.gspcolimageleft[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 4px;\n  margin-right: 4px;\n  padding-bottom: 30px;\n}\n.gspcolimageright[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 0;\n  padding-bottom: 30px;\n}\n.gspcolimagecenter[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 30px;\n}\n.gsprouterlinkactive[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #004439;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gspfooterlink[_ngcontent-%COMP%] {\n  color: white;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gspfooterlink[_ngcontent-%COMP%]:hover {\n  color: #668f88;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gsphochgestellt[_ngcontent-%COMP%] {\n  bottom: 0.25em;\n}\n.gsptateigkeitsbereichheader[_ngcontent-%COMP%] {\n  height: 450px;\n  background-image: url('header_taetigkeitsbereiche.jpg');\n  background-position: center center;\n  background-size: cover;\n  overflow: hidden;\n  padding-top: 30px;\n}\n.gsptaetigkeitcontainer[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  color: white;\n}\n.gsptaetigkeitbottomcentered[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  bottom: 0px;\n  background-color: #616055;\n  opacity: 0.7;\n  color: white;\n}\n.gsptitlefonttaetigkeit[_ngcontent-%COMP%] {\n  font-family: 'Open Sans Condensed', sans-serif;\n  font-size: 30px;\n  color: white;\n  padding-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxhcHAuY29tcG9uZW50Lmxlc3MiLCJ0YWV0aWdrZWl0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOENBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NGO0FER0E7RUFDRSwwQ0FBQTtFQUNBLFlBQUE7QUNERjtBRElBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNGRjtBREtBO0VBQ0Usc0JBQUE7RUNIQSxZQUFZO0VESVosNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDRkY7QURLQTs7RUFDRSxxQkFBQTtBQ0ZGO0FES0E7RUFDRSxzQkFBQTtFQ0hBLFlBQVk7RURJWiw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDRkY7QURLQTtFQUNFLHNCQUFBO0VDSEEsWUFBWTtFRElaLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNGRjtBREtBO0VBQ0UsWUFBQTtBQ0hGO0FETUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDSkY7QURPQTtFQUNFLGVBQUE7QUNMRjtBRFFBO0VBQ0UsWUFBQTtFQUNBLDBDQUFBO0FDTkY7QURTQTtFQUNFLGNBQUE7RUFDQSwwQ0FBQTtBQ1BGO0FEVUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMENBQUE7QUNSRjtBRFdBO0VBQ0UsWUFBQTtBQ1RGO0FEWUE7RUFDRSxjQUFBO0FDVkY7QURhQTtFQUNFLGNBQUE7QUNYRjtBRGNBO0VBQ0UsY0FBQTtBQ1pGO0FEZUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ2JGO0FEZ0JBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ2RGO0FEaUJBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDZkY7QURrQkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNoQkY7QURtQkE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSwwQ0FBQTtBQ2pCRjtBRG9CQTtFQUNFLFlBQUE7RUFDQSwwQ0FBQTtBQ2xCRjtBRHFCQTtFQUNFLGNBQUE7RUFDQSwwQ0FBQTtBQ25CRjtBRHNCQTtFQUNFLGNBQUE7QUNwQkY7QUF0SUE7RUFDRSxhQUFBO0VBQ0EsdURBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQXdJRjtBQXBJQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBc0lGO0FBcElBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBc0lGO0FBbklBO0VBQ0UsOENBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBcUlGIiwiZmlsZSI6InRhZXRpZ2tlaXQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3NwdGl0bGVmb250IHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogcmdiKDAsNjgsNTcpO1xufVxuXG5cbi5nc3B0ZXh0Zm9udCB7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uZ3NwY2FyZGltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmdzcGNhcmR0ZXh0IHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogPC0tLS0tLSAqL1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5NywgOTYsIDg1KTtcbiAgdG9wOiAxMDBweDtcbiAgb3BhY2l0eTogMC43O1xuICBtYXJnaW4tdG9wOiAtNDVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hLCAuZ3NwY2FyZHRleHQ6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5nc3BjYXJkdGV4dDJ6ZWlsaWcge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiA8LS0tLS0tICovXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XG4gIHRvcDogMTAwcHg7XG4gIG9wYWNpdHk6IDAuNTtcbiAgbWFyZ2luLXRvcDogLTY4cHg7XG59XG5cbi5nc3BjYXJkdGV4dHBlcnNvbiB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIDwtLS0tLS0gKi9cbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogLTQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xuICB0b3A6IDEwMHB4O1xuICBvcGFjaXR5OiAwLjVcbn1cblxuLmdzcHRleHRpbmltYWdlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZ3NwdGV4dGluaW1hZ2VfcG9zIHtcbiAgbWFyZ2luLWxlZnQ6IDV2dztcbiAgbWFyZ2luLXRvcDogMnZoO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5nc3BoZWFkZXJpbWFnZSB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmdzcGhlYWRlcnRleHQge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbn1cblxuLmdzcGhlYWRlcnRleHQ6aG92ZXIge1xuICBjb2xvcjogcmdiKDAsNjgsNTcpO1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG59XG5cbi5nc3BoZWFkZXJsYW5ndWFnZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbn1cblxuI2RldXRzY2hJRCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuI2RldXRzY2hJRDpob3ZlciB7XG4gIGNvbG9yOiByZ2IoMzgsIDUwLCAxMDQpO1xufVxuXG4jZW5nbGlzaElEIHtcbiAgY29sb3I6IHJnYigxMzUsIDE0MiwgMTcxKTtcbn1cblxuI2VuZ2xpc2hJRDpob3ZlciB7XG4gIGNvbG9yOiByZ2IoMzgsIDUwLCAxMDQpO1xufVxuXG4uZ3NwcGFyYWdyYXBoIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MiwgMjM3LCAyMzQpO1xufVxuXG4uZ3NwY29saW1hZ2VsZWZ0IHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLmdzcGNvbGltYWdlcmlnaHQge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG5cbi5nc3Bjb2xpbWFnZWNlbnRlciB7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG4uZ3Nwcm91dGVybGlua2FjdGl2ZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogcmdiKDAsNjgsNTcpO1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG59XG5cbi5nc3Bmb290ZXJsaW5rIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG59XG5cbi5nc3Bmb290ZXJsaW5rOmhvdmVyIHtcbiAgY29sb3I6IHJnYigxMDIsIDE0MywgMTM2KTtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xufVxuXG4uZ3NwaG9jaGdlc3RlbGx0IHtcbiAgYm90dG9tOiAwLjI1ZW07XG59XG5cbiIsIkBpbXBvcnQgXCIuLi9hcHAuY29tcG9uZW50Lmxlc3NcIjtcblxuLmdzcHRhdGVpZ2tlaXRzYmVyZWljaGhlYWRlciB7XG4gIGhlaWdodDogNDUwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyL2hlYWRlcl90YWV0aWdrZWl0c2JlcmVpY2hlLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG5cblxuLmdzcHRhZXRpZ2tlaXRjb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmdzcHRhZXRpZ2tlaXRib3R0b21jZW50ZXJlZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgYm90dG9tOjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LDk2LDg1KTtcbiAgb3BhY2l0eTogMC43O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5nc3B0aXRsZWZvbnR0YWV0aWdrZWl0e1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG5cbiJdfQ== */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 3935);



class TeamComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
TeamComponent.ɵfac = function TeamComponent_Factory(t) { return new (t || TeamComponent)(); };
TeamComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamComponent, selectors: [["app-team"]], decls: 92, vars: 11, consts: [[1, "gspteamheader"], [1, "container", "gsptextinimage_pos"], [1, "row"], [1, "col-xl-1", "col-md-1"], ["src", "../../assets/images/gs_logo_subseiten.png"], [1, "container", "gsptextinimage"], [1, "col-md-1"], [1, "col-md-8"], [1, "gsptitlefontteam"], [1, "gspparagraph", 2, "background-color", "white"], [1, "container"], [1, "row", 2, "padding-top", "30px", "padding-right", "20px"], [1, "col-md-3", 2, "padding-bottom", "1vh"], [1, "border-0"], [1, "gspcontainer"], ["src", "../../assets/images/bgarger.jpg", 1, "gspcardimagepartner"], [1, "gspteambottomcentered"], [1, "col-md-3"], ["src", "../../assets/images/spallinger.jpg", 1, "gspcardimagepartner"], [2, "font-size", "50%"], ["src", "../../assets/images/roupec.jpg", 1, "gspcardimagepartner"], [1, "gsphochgestellt"], ["src", "../../assets/images/patrick.jpg", 1, "gspcardimagepartner"], ["src", "../../assets/images/jandrisevits.jpg", 1, "gspcardimagepartner"], ["src", "../../assets/images/agarger.jpg", 1, "gspcardimagepartner"], ["src", "../../assets/images/kubrak.jpg", 1, "gspcardimagepartner"]], template: function TeamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7)(9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7)(16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9)(23, "div", 10)(24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12)(27, "div", 13)(28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16)(31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " MMag. Dr.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " BERNHARD GARGER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17)(36, "div", 13)(37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16)(40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " MMag.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " FORREST SPALLINGER ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "LL.M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 12)(49, "div", 13)(50, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 16)(53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Mag.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "sub", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " ANITA ROUPEC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 12)(60, "div", 13)(61, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " PATRICK STEINDL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "LL.M.(WU)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 12)(72, "div", 13)(73, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 16)(76, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " REGINA JANDRISEVITS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 17)(79, "div", 13)(80, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 16)(83, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " ANNA GARGER ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 17)(86, "div", 13)(87, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 16)(90, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " ANNA Kubrak ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 5, "TEAM")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 7, "TEAMP1"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 9, "TEAMP2"), " ");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.UpperCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: [".gsptitlefont[_ngcontent-%COMP%] {\n  font-family: 'Open Sans Condensed', sans-serif;\n  font-size: 30px;\n  color: #004439;\n}\n.gsptextfont[_ngcontent-%COMP%] {\n  font-family: 'Source Sans Pro', sans-serif;\n  color: black;\n}\n.gspcardimage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.gspcardtext[_ngcontent-%COMP%] {\n  background-size: cover;\n  \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: #616055;\n  top: 100px;\n  opacity: 0.7;\n  margin-top: -45px;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%], .gspcardtext[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.gspcardtext2zeilig[_ngcontent-%COMP%] {\n  background-size: cover;\n  \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n  margin-top: -68px;\n}\n.gspcardtextperson[_ngcontent-%COMP%] {\n  background-size: cover;\n  \n  background-repeat: no-repeat;\n  background-position: center center;\n  margin-top: -40px;\n  width: 100%;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n.gsptextinimage[_ngcontent-%COMP%] {\n  color: white;\n}\n.gsptextinimage_pos[_ngcontent-%COMP%] {\n  margin-left: 5vw;\n  margin-top: 2vh;\n  color: white;\n}\n.gspheaderimage[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.gspheadertext[_ngcontent-%COMP%] {\n  color: black;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gspheadertext[_ngcontent-%COMP%]:hover {\n  color: #004439;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gspheaderlanguage[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding-right: 0px;\n  font-size: 0.8rem;\n  padding-top: 12px;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n#deutschID[_ngcontent-%COMP%] {\n  color: black;\n}\n#deutschID[_ngcontent-%COMP%]:hover {\n  color: #263268;\n}\n#englishID[_ngcontent-%COMP%] {\n  color: #878eab;\n}\n#englishID[_ngcontent-%COMP%]:hover {\n  color: #263268;\n}\n.gspparagraph[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  margin-top: 0px;\n  background-color: #f2edea;\n}\n.gspcolimageleft[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 4px;\n  margin-right: 4px;\n  padding-bottom: 30px;\n}\n.gspcolimageright[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 0;\n  padding-bottom: 30px;\n}\n.gspcolimagecenter[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 30px;\n}\n.gsprouterlinkactive[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #004439;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gspfooterlink[_ngcontent-%COMP%] {\n  color: white;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gspfooterlink[_ngcontent-%COMP%]:hover {\n  color: #668f88;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.gsphochgestellt[_ngcontent-%COMP%] {\n  bottom: 0.25em;\n}\n.gspteamheader[_ngcontent-%COMP%] {\n  height: 450px;\n  background-image: url('header_team.jpg');\n  background-position: center center;\n  background-size: cover;\n  overflow: hidden;\n  padding-top: 30px;\n}\n.gspcardimagepartner[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.gspcardtextpartner[_ngcontent-%COMP%] {\n  background-size: cover;\n  \n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 66%;\n  margin-top: -48px;\n  margin-left: 17%;\n  color: white;\n  background-color: darkblue;\n  top: 100px;\n  opacity: 0.5;\n}\n.gspcontainer[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  color: white;\n  width: 100%;\n}\n.gspbottomleft[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  bottom: 0px;\n  left: 0%;\n  padding-left: 15px;\n  background-color: #616055;\n  opacity: 0.7;\n  text-align: left;\n  font-size: 80%;\n}\n.gsptitlefontteam[_ngcontent-%COMP%] {\n  font-family: 'Open Sans Condensed', sans-serif;\n  font-size: 30px;\n  color: white;\n  padding-top: 30px;\n}\n.gspteambottomcentered[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  bottom: 0px;\n  background-color: #616055;\n  opacity: 0.7;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxhcHAuY29tcG9uZW50Lmxlc3MiLCJ0ZWFtLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOENBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NGO0FER0E7RUFDRSwwQ0FBQTtFQUNBLFlBQUE7QUNERjtBRElBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNGRjtBREtBO0VBQ0Usc0JBQUE7RUNIQSxZQUFZO0VESVosNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDRkY7QURLQTs7RUFDRSxxQkFBQTtBQ0ZGO0FES0E7RUFDRSxzQkFBQTtFQ0hBLFlBQVk7RURJWiw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDRkY7QURLQTtFQUNFLHNCQUFBO0VDSEEsWUFBWTtFRElaLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNGRjtBREtBO0VBQ0UsWUFBQTtBQ0hGO0FETUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDSkY7QURPQTtFQUNFLGVBQUE7QUNMRjtBRFFBO0VBQ0UsWUFBQTtFQUNBLDBDQUFBO0FDTkY7QURTQTtFQUNFLGNBQUE7RUFDQSwwQ0FBQTtBQ1BGO0FEVUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMENBQUE7QUNSRjtBRFdBO0VBQ0UsWUFBQTtBQ1RGO0FEWUE7RUFDRSxjQUFBO0FDVkY7QURhQTtFQUNFLGNBQUE7QUNYRjtBRGNBO0VBQ0UsY0FBQTtBQ1pGO0FEZUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ2JGO0FEZ0JBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ2RGO0FEaUJBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDZkY7QURrQkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNoQkY7QURtQkE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSwwQ0FBQTtBQ2pCRjtBRG9CQTtFQUNFLFlBQUE7RUFDQSwwQ0FBQTtBQ2xCRjtBRHFCQTtFQUNFLGNBQUE7RUFDQSwwQ0FBQTtBQ25CRjtBRHNCQTtFQUNFLGNBQUE7QUNwQkY7QUF0SUE7RUFDRSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQXdJRjtBQXJJQTtFQUNFLFdBQUE7QUF1SUY7QUFySUE7RUFDRSxzQkFBQTtFQXVJQSxZQUFZO0VBdElaLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBd0lGO0FBcklBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBdUlGO0FBcklBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQXVJRjtBQXBJQTtFQUNFLDhDQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQXNJRjtBQWpJQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQW1JRiIsImZpbGUiOiJ0ZWFtLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmdzcHRpdGxlZm9udCB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHJnYigwLDY4LDU3KTtcbn1cblxuXG4uZ3NwdGV4dGZvbnQge1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmdzcGNhcmRpbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5nc3BjYXJkdGV4dCB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIDwtLS0tLS0gKi9cbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTcsIDk2LCA4NSk7XG4gIHRvcDogMTAwcHg7XG4gIG9wYWNpdHk6IDAuNztcbiAgbWFyZ2luLXRvcDogLTQ1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYSwgLmdzcGNhcmR0ZXh0OmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZ3NwY2FyZHRleHQyemVpbGlnIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogPC0tLS0tLSAqL1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xuICB0b3A6IDEwMHB4O1xuICBvcGFjaXR5OiAwLjU7XG4gIG1hcmdpbi10b3A6IC02OHB4O1xufVxuXG4uZ3NwY2FyZHRleHRwZXJzb24ge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiA8LS0tLS0tICovXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IC00MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDFweDtcbiAgcGFkZGluZy1ib3R0b206IDFweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcbiAgdG9wOiAxMDBweDtcbiAgb3BhY2l0eTogMC41XG59XG5cbi5nc3B0ZXh0aW5pbWFnZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmdzcHRleHRpbmltYWdlX3BvcyB7XG4gIG1hcmdpbi1sZWZ0OiA1dnc7XG4gIG1hcmdpbi10b3A6IDJ2aDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZ3NwaGVhZGVyaW1hZ2Uge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5nc3BoZWFkZXJ0ZXh0IHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG59XG5cbi5nc3BoZWFkZXJ0ZXh0OmhvdmVyIHtcbiAgY29sb3I6IHJnYigwLDY4LDU3KTtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xufVxuXG4uZ3NwaGVhZGVybGFuZ3VhZ2Uge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG59XG5cbiNkZXV0c2NoSUQge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbiNkZXV0c2NoSUQ6aG92ZXIge1xuICBjb2xvcjogcmdiKDM4LCA1MCwgMTA0KTtcbn1cblxuI2VuZ2xpc2hJRCB7XG4gIGNvbG9yOiByZ2IoMTM1LCAxNDIsIDE3MSk7XG59XG5cbiNlbmdsaXNoSUQ6aG92ZXIge1xuICBjb2xvcjogcmdiKDM4LCA1MCwgMTA0KTtcbn1cblxuLmdzcHBhcmFncmFwaCB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDIzNywgMjM0KTtcbn1cblxuLmdzcGNvbGltYWdlbGVmdCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG5cbi5nc3Bjb2xpbWFnZXJpZ2h0IHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG4uZ3NwY29saW1hZ2VjZW50ZXIge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLmdzcHJvdXRlcmxpbmthY3RpdmUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHJnYigwLDY4LDU3KTtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xufVxuXG4uZ3NwZm9vdGVybGluayB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xufVxuXG4uZ3NwZm9vdGVybGluazpob3ZlciB7XG4gIGNvbG9yOiByZ2IoMTAyLCAxNDMsIDEzNik7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbn1cblxuLmdzcGhvY2hnZXN0ZWxsdCB7XG4gIGJvdHRvbTogMC4yNWVtO1xufVxuXG4iLCJAaW1wb3J0IFwiLi4vYXBwLmNvbXBvbmVudC5sZXNzXCI7XG5cbi5nc3B0ZWFtaGVhZGVyIHtcbiAgaGVpZ2h0OiA0NTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXIvaGVhZGVyX3RlYW0uanBnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuLmdzcGNhcmRpbWFnZXBhcnRuZXIge1xuICB3aWR0aDoxMDAlO1xufVxuLmdzcGNhcmR0ZXh0cGFydG5lciB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIDwtLS0tLS0gKi9cbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgd2lkdGg6IDY2JTtcbiAgbWFyZ2luLXRvcDogLTQ4cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNyU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XG4gIHRvcDogMTAwcHg7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmdzcGNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmdzcGJvdHRvbWxlZnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206MHB4O1xuICBsZWZ0OiAwJTtcbiAgcGFkZGluZy1sZWZ0OjE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5Nyw5Niw4NSk7XG4gIG9wYWNpdHk6IDAuNztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiA4MCU7XG59XG5cbi5nc3B0aXRsZWZvbnR0ZWFtIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG5cblxuLmdzcHRlYW1ib3R0b21jZW50ZXJlZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgYm90dG9tOjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LDk2LDg1KTtcbiAgb3BhY2l0eTogMC43O1xuICBjb2xvcjogd2hpdGU7XG59XG5cblxuXG4iXX0= */"] });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
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
