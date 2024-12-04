"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



const routes = [];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ 8223);
/* harmony import */ var _horloge_horloge_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./horloge/horloge.component */ 1856);
/* harmony import */ var _calendrier_calendrier_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendrier/calendrier.component */ 9444);
/* harmony import */ var _meteo_meteo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meteo/meteo.component */ 4460);
/* harmony import */ var _bookmark_bookmark_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bookmark/bookmark.component */ 4250);









function AppComponent_mat_tab_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-tab", 7)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-meteo", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function AppComponent_mat_tab_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-tab", 8)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-bookmark", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
class AppComponent {
  constructor() {
    this.title = 'frontend';
    this.backend = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backend;
  }
  ngOnInit() {
    console.log('ngOnInit: backend', this.backend);
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 10,
    vars: 2,
    consts: [["mat-stretch-tabs", "false", "mat-align-tabs", "center"], ["label", "Horloge"], [1, "page"], [2, "width", "100%"], ["label", "Calendrier"], ["label", "M\u00E9t\u00E9o", 4, "ngIf"], ["label", "Bookmark", 4, "ngIf"], ["label", "M\u00E9t\u00E9o"], ["label", "Bookmark"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-tab-group", 0)(1, "mat-tab", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "app-horloge", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-tab", 4)(5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "app-calendrier");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, AppComponent_mat_tab_7_Template, 3, 0, "mat-tab", 5)(8, AppComponent_mat_tab_8_Template, 3, 0, "mat-tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "router-outlet");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.backend);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.backend);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabGroup, _horloge_horloge_component__WEBPACK_IMPORTED_MODULE_1__.HorlogeComponent, _calendrier_calendrier_component__WEBPACK_IMPORTED_MODULE_2__.CalendrierComponent, _meteo_meteo_component__WEBPACK_IMPORTED_MODULE_3__.MeteoComponent, _bookmark_bookmark_component__WEBPACK_IMPORTED_MODULE_4__.BookmarkComponent],
    styles: [".page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQUZGIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4ucGFnZSB7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _calendrier_calendrier_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendrier/calendrier.component */ 9444);
/* harmony import */ var _horloge_horloge_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./horloge/horloge.component */ 1856);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _calendrier_semaine_calendrier_semaine_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendrier-semaine/calendrier-semaine.component */ 6006);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tabs */ 8223);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button-toggle */ 9864);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _meteo_meteo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./meteo/meteo.component */ 4460);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/grid-list */ 6488);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng2-charts */ 6045);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/expansion */ 9322);
/* harmony import */ var _prevision_meteo_prevision_meteo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prevision-meteo/prevision-meteo.component */ 8972);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ 4102);
/* harmony import */ var _bookmark_bookmark_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bookmark/bookmark.component */ 4250);
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/locales/fr */ 5669);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);























(0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.registerLocaleData)(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_9__["default"]);
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_core__WEBPACK_IMPORTED_MODULE_10__.LOCALE_ID,
      useValue: "fr-FR"
    }],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__.MatSlideToggleModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__.MatTabsModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__.MatButtonToggleModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__.MatGridListModule, ng2_charts__WEBPACK_IMPORTED_MODULE_19__.NgChartsModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__.MatExpansionModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__.MatDividerModule, _horloge_horloge_component__WEBPACK_IMPORTED_MODULE_3__.HorlogeComponent]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _calendrier_calendrier_component__WEBPACK_IMPORTED_MODULE_2__.CalendrierComponent, _calendrier_semaine_calendrier_semaine_component__WEBPACK_IMPORTED_MODULE_4__.CalendrierSemaineComponent, _meteo_meteo_component__WEBPACK_IMPORTED_MODULE_5__.MeteoComponent, _prevision_meteo_prevision_meteo_component__WEBPACK_IMPORTED_MODULE_6__.PrevisionMeteoComponent, _bookmark_bookmark_component__WEBPACK_IMPORTED_MODULE_7__.BookmarkComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__.MatSlideToggleModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__.MatTabsModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__.MatButtonToggleModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__.MatGridListModule, ng2_charts__WEBPACK_IMPORTED_MODULE_19__.NgChartsModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__.MatExpansionModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__.MatDividerModule, _horloge_horloge_component__WEBPACK_IMPORTED_MODULE_3__.HorlogeComponent]
  });
})();

/***/ }),

/***/ 4250:
/*!************************************************!*\
  !*** ./src/app/bookmark/bookmark.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookmarkComponent: () => (/* binding */ BookmarkComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);



function BookmarkComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "div")(2, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const bookmark_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", bookmark_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bookmark_r1.titre);
  }
}
function BookmarkComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BookmarkComponent_div_0_div_2_Template, 4, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.listeBookmark == null ? null : ctx_r1.listeBookmark.liste);
  }
}
class BookmarkComponent {
  constructor(http) {
    this.http = http;
    this.listeBookmark = null;
  }
  ngOnInit() {
    this.http.get('api/bookmark').subscribe(data => {
      console.log("data bookmark", data);
      this.listeBookmark = data;
    });
  }
  static #_ = this.ɵfac = function BookmarkComponent_Factory(t) {
    return new (t || BookmarkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BookmarkComponent,
    selectors: [["app-bookmark"]],
    decls: 1,
    vars: 1,
    consts: [["class", "liste-url-global", 4, "ngIf"], [1, "liste-url-global"], ["class", "liste-url", 4, "ngFor", "ngForOf"], [1, "liste-url"], ["target", "_blank", 3, "href"]],
    template: function BookmarkComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BookmarkComponent_div_0_Template, 3, 1, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listeBookmark);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
    styles: [".liste-url-global[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.liste-url[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYm9va21hcmsvYm9va21hcmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBQUYiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmxpc3RlLXVybC1nbG9iYWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmxpc3RlLXVybCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6006:
/*!********************************************************************!*\
  !*** ./src/app/calendrier-semaine/calendrier-semaine.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalendrierSemaineComponent: () => (/* binding */ CalendrierSemaineComponent)
/* harmony export */ });
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon */ 4063);
/* harmony import */ var _model_moisEpiphanie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/moisEpiphanie */ 3677);
/* harmony import */ var _model_journee_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/journee.model */ 2471);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);





const _c0 = (a0, a1, a2) => ({
  "dimanche": a0,
  "ferier": a1,
  "jourActuel": a2
});
function CalendrierSemaineComponent_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const jour_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](jour_r1.noSemaine);
  }
}
function CalendrierSemaineComponent_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 15);
  }
}
function CalendrierSemaineComponent_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 16);
  }
}
function CalendrierSemaineComponent_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 17);
  }
}
function CalendrierSemaineComponent_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 16);
  }
}
function CalendrierSemaineComponent_div_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 18);
  }
}
function CalendrierSemaineComponent_div_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 16);
  }
}
function CalendrierSemaineComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, CalendrierSemaineComponent_div_1_div_8_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, CalendrierSemaineComponent_div_1_div_10_Template, 1, 0, "div", 9)(11, CalendrierSemaineComponent_div_1_div_11_Template, 1, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, CalendrierSemaineComponent_div_1_div_13_Template, 1, 0, "div", 12)(14, CalendrierSemaineComponent_div_1_div_14_Template, 1, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, CalendrierSemaineComponent_div_1_div_16_Template, 1, 0, "div", 13)(17, CalendrierSemaineComponent_div_1_div_17_Template, 1, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const jour_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](11, _c0, jour_r1.dimanche, jour_r1.jourFerier, jour_r1.jourActuel));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](jour_r1.numero);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](jour_r1.journeeSemaine);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](jour_r1.nomSaint);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", jour_r1.noSemaine > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", jour_r1.vacancesA);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !jour_r1.vacancesA);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", jour_r1.vacancesB);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !jour_r1.vacancesB);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", jour_r1.vacancesC);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !jour_r1.vacancesC);
  }
}
class CalendrierSemaineComponent {
  constructor() {
    this.dateDebut = luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.now();
    this.listeSaint = new _model_moisEpiphanie__WEBPACK_IMPORTED_MODULE_1__.MoisEpiphanie();
    this.listeJourFerier = [];
    this.premierJour = 0;
    this.listeJours = [];
    this.listeSaints = [];
    this.listeJourSemaine = [];
    this._listePeriodeVacance = [];
  }
  set listePeriodeVacance(value) {
    this.updateVacances(value);
  }
  ngOnInit() {
    console.log('saints', this.listeSaint);
    console.log('dateDebut', this.dateDebut);
    const dateFromStr = this.dateDebut;
    this.premierJour = dateFromStr.day;
    this.listeJours = [];
    this.listeSaints = [];
    this.listeJourSemaine = [];
    console.log('width', window.innerWidth);
    //let dt2 = dt.startOf('week');
    let dt2 = this.dateDebut;
    for (let i = 0; i < 7; i++) {
      const journee = new _model_journee_model__WEBPACK_IMPORTED_MODULE_2__.JourneeModel();
      journee.numero = dt2.day;
      journee.date = dt2;
      journee.journeeSemaine = this.getJourSemaine(dt2);
      journee.nomSaint = this.getSaint(dt2);
      journee.dimanche = journee.journeeSemaine === 'D';
      journee.jourFerier = this.getJourFerier(dt2);
      journee.jourActuel = this.isJourActuel(dt2);
      this.updateZone(journee, this._listePeriodeVacance);
      // journee.vacancesA = this._listePeriodeVacance.findIndex(x => {
      //   x.zone === 'zoneA' && x.dateDebut != null && dt2 >= x.dateDebut && x.dateFin != null && dt2 <= x.dateFin
      // }) >= 0;
      // journee.vacancesB = this._listePeriodeVacance.findIndex(x => {
      //   x.zone === 'zoneB' && x.dateDebut != null && dt2 >= x.dateDebut && x.dateFin != null && dt2 <= x.dateFin
      // }) >= 0;
      // journee.vacancesC = this._listePeriodeVacance.findIndex(x => {
      //   x.zone === 'zoneC' && x.dateDebut != null && dt2 >= x.dateDebut && x.dateFin != null && dt2 <= x.dateFin
      // }) >= 0;
      if (i === 0) {
        journee.noSemaine = dt2.weekNumber;
      }
      this.listeJours.push(journee);
      let dt3 = dt2.plus({
        day: 1
      });
      if (dt3.month != dt2.month || dt3.weekNumber != dt2.weekNumber) {
        break;
      } else {
        dt2 = dt3;
      }
    }
    console.log('listeJours', this.dateDebut.toISODate(), this.listeJours);
    console.log('listeSaints', this.listeSaints);
  }
  updateVacances(value) {
    this._listePeriodeVacance = value;
    // if(this.dateDebut.month==11&&this.dateDebut.day==1){
    //   console.log('vacances',this.dateDebut,value);
    // }
    // if(this.dateDebut.month==2&&this.dateDebut.day==19){
    //     console.log('vacances',this.dateDebut.toISODate(),value);
    //   }
    for (let journee of this.listeJours) {
      if (journee.date != null && this._listePeriodeVacance) {
        this.updateZone(journee, this._listePeriodeVacance);
        // journee.vacancesA = this._listePeriodeVacance.findIndex(x => {
        //   x.zone === 'zoneA' && x.dateDebut != null && journee.date != null && journee.date >= x.dateDebut && x.dateFin != null && journee.date <= x.dateFin
        // }) >= 0;
        // journee.vacancesB = this._listePeriodeVacance.findIndex(x => {
        //   x.zone === 'zoneB' && x.dateDebut != null && journee.date != null && journee.date >= x.dateDebut && x.dateFin != null && journee.date <= x.dateFin
        // }) >= 0;
        // journee.vacancesC = this._listePeriodeVacance.findIndex(x => {
        //   x.zone === 'zoneC' && x.dateDebut != null && journee.date != null && journee.date >= x.dateDebut && x.dateFin != null && journee.date <= x.dateFin
        // }) >= 0;
      } else {
        journee.vacancesA = false;
        journee.vacancesB = false;
        journee.vacancesC = false;
      }
    }
    // if(this.dateDebut.month==11&&this.dateDebut.day==1){
    //   console.log('vacances resultat',this.dateDebut,this.listeJours);
    // }
    // if(this.dateDebut.month==2&&this.dateDebut.day==19){
    //   console.log('vacances resultat',this.dateDebut.toISODate(),this.listeJours);
    // }
  }
  updateZone(journee, listePeriodeVacance) {
    journee.vacancesA = listePeriodeVacance.findIndex(x => this.isZone('zoneA', x, journee)) >= 0;
    journee.vacancesB = listePeriodeVacance.findIndex(x => this.isZone('zoneB', x, journee)) >= 0;
    journee.vacancesC = listePeriodeVacance.findIndex(x => this.isZone('zoneC', x, journee)) >= 0;
  }
  isZone(zone, x, journee) {
    return x.zone === zone && x.dateDebut != null && journee.date != null && journee.date >= x.dateDebut && x.dateFin != null && journee.date <= x.dateFin;
  }
  getJourSemaine(dt2) {
    switch (dt2.weekday) {
      case 1:
        return "L";
      case 2:
        return "M";
      case 3:
        return "M";
      case 4:
        return "J";
      case 5:
        return "V";
      case 6:
        return "S";
      case 7:
        return "D";
    }
    return "";
  }
  getSaint(dt2) {
    let tab = [];
    switch (dt2.month) {
      case 1:
        tab = this.listeSaint.january;
        break;
      case 2:
        tab = this.listeSaint.february;
        break;
      case 3:
        tab = this.listeSaint.march;
        break;
      case 4:
        tab = this.listeSaint.april;
        break;
      case 5:
        tab = this.listeSaint.may;
        break;
      case 6:
        tab = this.listeSaint.june;
        break;
      case 7:
        tab = this.listeSaint.july;
        break;
      case 8:
        tab = this.listeSaint.august;
        break;
      case 9:
        tab = this.listeSaint.september;
        break;
      case 10:
        tab = this.listeSaint.october;
        break;
      case 11:
        tab = this.listeSaint.november;
        break;
      case 12:
        tab = this.listeSaint.december;
        break;
    }
    if (tab.length > 0) {
      const day = dt2.day;
      if (day >= 1 && day <= 31 && day - 1 < tab.length) {
        const res = tab[day - 1];
        if (res.length > 0) {
          return res[0];
        }
      }
    }
    return '';
  }
  getJourFerier(date) {
    if (this.listeJourFerier) {
      for (let d of this.listeJourFerier) {
        if (d.month === date.month && d.day === date.day) {
          return true;
        }
      }
    }
    return false;
  }
  isJourActuel(date) {
    const now = luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.now();
    return now.month === date.month && now.day === date.day && now.year === date.year;
  }
  static #_ = this.ɵfac = function CalendrierSemaineComponent_Factory(t) {
    return new (t || CalendrierSemaineComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: CalendrierSemaineComponent,
    selectors: [["app-calendrier-semaine"]],
    inputs: {
      dateDebut: "dateDebut",
      listeSaint: "listeSaint",
      listeJourFerier: "listeJourFerier",
      listePeriodeVacance: "listePeriodeVacance"
    },
    decls: 2,
    vars: 1,
    consts: [[1, "semaine"], ["class", "journee", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "journee", 3, "ngClass"], [1, "no-jour"], [1, "jour-semaine"], [1, "nom-saint"], [1, "fin-ligne"], ["class", "no-semaine", 4, "ngIf"], [1, "vacances-scolaires"], ["class", "zone-a", 4, "ngIf"], ["class", "zone-sansVacance", 4, "ngIf"], [1, "separateur-zone"], ["class", "zone-b", 4, "ngIf"], ["class", "zone-c", 4, "ngIf"], [1, "no-semaine"], [1, "zone-a"], [1, "zone-sansVacance"], [1, "zone-b"], [1, "zone-c"]],
    template: function CalendrierSemaineComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CalendrierSemaineComponent_div_1_Template, 19, 15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.listeJours);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
    styles: ["@media all and (min-width: 10px) {\n  .semaine[_ngcontent-%COMP%] {\n    width: 150px;\n    font-size: 10px;\n  }\n}\n.semaine[_ngcontent-%COMP%] {\n  border: 3px;\n  width: 150px;\n  min-width: 150px;\n  font-size: 10px;\n}\n\n.journee[_ngcontent-%COMP%] {\n  border: 1px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n\n.no-jour[_ngcontent-%COMP%] {\n  width: 20px;\n  text-align: right;\n}\n\n.jour-semaine[_ngcontent-%COMP%] {\n  width: 20px;\n  text-align: center;\n}\n\n.nom-saint[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.dimanche[_ngcontent-%COMP%] {\n  background-color: #d5d5d5;\n}\n.dimanche[_ngcontent-%COMP%]   .no-jour[_ngcontent-%COMP%] {\n  color: red;\n}\n.dimanche[_ngcontent-%COMP%]   .jour-semaine[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.ferier[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: bold;\n}\n\n.jourActuel[_ngcontent-%COMP%] {\n  background-color: burlywood;\n}\n\n.fin-ligne[_ngcontent-%COMP%] {\n  margin-left: auto;\n  min-width: 7px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-end;\n}\n\n.no-semaine[_ngcontent-%COMP%] {\n  color: #a4d267;\n}\n\n.vacances-scolaires[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-end;\n  width: 30px;\n  min-width: 30px;\n}\n\n.zone-a[_ngcontent-%COMP%] {\n  width: 4px;\n  min-width: 4px;\n  background-color: blue;\n  height: 100%;\n}\n\n.zone-b[_ngcontent-%COMP%] {\n  width: 4px;\n  min-width: 4px;\n  background-color: green;\n  height: 100%;\n}\n\n.zone-c[_ngcontent-%COMP%] {\n  width: 4px;\n  min-width: 4px;\n  background-color: red;\n  height: 100%;\n}\n\n.zone-sansVacance[_ngcontent-%COMP%] {\n  width: 4px;\n  min-width: 4px;\n  height: 100%;\n}\n\n.separateur-zone[_ngcontent-%COMP%] {\n  width: 6px;\n  min-width: 6px;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2FsZW5kcmllci1zZW1haW5lL2NhbGVuZHJpZXItc2VtYWluZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVFO0lBQ0UsWUFBQTtJQUNBLGVBQUE7RUFGRjtBQUNGO0FBY0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0VBQ0EsZUFBQTtBQWJGOztBQWdCQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7QUFiRjs7QUFnQkE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUFiRjs7QUFnQkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFiRjs7QUFnQkE7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFiRjs7QUFnQkE7RUFDRSx5QkFBQTtBQWJGO0FBY0U7RUFDRSxVQUFBO0FBWko7QUFjRTtFQUNFLFVBQUE7QUFaSjs7QUFnQkE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUFiRjs7QUFnQkE7RUFDRSwyQkFBQTtBQWJGOztBQWdCQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFiRjs7QUFnQkE7RUFDRSxjQUFBO0FBYkY7O0FBcUJBO0VBT0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBYjJCO0VBYzNCLGVBZDJCO0FBVjdCOztBQTJCQTtFQUNFLFVBckJxQjtFQXNCckIsY0F0QnFCO0VBdUJyQixzQkFBQTtFQUNBLFlBQUE7QUF4QkY7O0FBMkJBO0VBQ0UsVUE1QnFCO0VBNkJyQixjQTdCcUI7RUE4QnJCLHVCQUFBO0VBQ0EsWUFBQTtBQXhCRjs7QUEyQkE7RUFDRSxVQW5DcUI7RUFvQ3JCLGNBcENxQjtFQXFDckIscUJBQUE7RUFDQSxZQUFBO0FBeEJGOztBQTJCQTtFQUNFLFVBMUNxQjtFQTJDckIsY0EzQ3FCO0VBNENyQixZQUFBO0FBeEJGOztBQTJCQTtFQUNFLFVBL0NnQztFQWdEaEMsY0FoRGdDO0VBaURoQyxZQUFBO0FBeEJGIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vIHNlbWJsZSBuZSBwYXMgZm9uY3Rpb25uZXJcclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMTBweCkge1xyXG5cclxuICAuc2VtYWluZSB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vL0BtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMDBweCkge1xyXG4vL1xyXG4vLyAgLnNlbWFpbmUge1xyXG4vLyAgICB3aWR0aDogMjAwcHg7XHJcbi8vICAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gIH1cclxuLy99XHJcblxyXG5cclxuLnNlbWFpbmUge1xyXG4gIGJvcmRlcjogM3B4O1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICAvL3dpZHRoOiAyMDBweDtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLmpvdXJuZWUge1xyXG4gIGJvcmRlcjogMXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbn1cclxuXHJcbi5uby1qb3VyIHtcclxuICB3aWR0aDogMjBweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmpvdXItc2VtYWluZSB7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubm9tLXNhaW50IHtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5kaW1hbmNoZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q1ZDVkNTtcclxuICAubm8tam91ciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuICAuam91ci1zZW1haW5lIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG59XHJcblxyXG4uZmVyaWVyIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uam91ckFjdHVlbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kO1xyXG59XHJcblxyXG4uZmluLWxpZ25lIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtaW4td2lkdGg6IDdweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLm5vLXNlbWFpbmUge1xyXG4gIGNvbG9yOiAjYTRkMjY3O1xyXG59XHJcblxyXG4kbGlnbmUtdmFjYW5jZXMtd2lkdGg6IDRweDtcclxuJGxpZ25lLXZhY2FuY2VzLXNlcGFyYXRldXItd2lkdGg6IDZweDtcclxuLy8gPTMqJGxpZ25lLXZhY2FuY2VzLXdpZHRoKzMqJGxpZ25lLXZhY2FuY2VzLXNlcGFyYXRldXItd2lkdGhcclxuJGxpZ25lLXZhY2FuY2VzLXRvdGFsLXdpZHRoOiBjYWxjKDMqJGxpZ25lLXZhY2FuY2VzLXdpZHRoICsgMyokbGlnbmUtdmFjYW5jZXMtc2VwYXJhdGV1ci13aWR0aCk7XHJcblxyXG4udmFjYW5jZXMtc2NvbGFpcmVzIHtcclxuICAvL3RvcDowcHg7XHJcbiAgLy9yaWdodDogMTBweDtcclxuICAvL3Bvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvL3dpZHRoOiAycHg7XHJcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gIC8vbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgd2lkdGg6ICRsaWduZS12YWNhbmNlcy10b3RhbC13aWR0aDtcclxuICBtaW4td2lkdGg6ICRsaWduZS12YWNhbmNlcy10b3RhbC13aWR0aDtcclxufVxyXG5cclxuLnpvbmUtYSB7XHJcbiAgd2lkdGg6ICRsaWduZS12YWNhbmNlcy13aWR0aDtcclxuICBtaW4td2lkdGg6ICRsaWduZS12YWNhbmNlcy13aWR0aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnpvbmUtYiB7XHJcbiAgd2lkdGg6ICRsaWduZS12YWNhbmNlcy13aWR0aDtcclxuICBtaW4td2lkdGg6ICRsaWduZS12YWNhbmNlcy13aWR0aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi56b25lLWMge1xyXG4gIHdpZHRoOiAkbGlnbmUtdmFjYW5jZXMtd2lkdGg7XHJcbiAgbWluLXdpZHRoOiAkbGlnbmUtdmFjYW5jZXMtd2lkdGg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnpvbmUtc2Fuc1ZhY2FuY2Uge1xyXG4gIHdpZHRoOiAkbGlnbmUtdmFjYW5jZXMtd2lkdGg7XHJcbiAgbWluLXdpZHRoOiAkbGlnbmUtdmFjYW5jZXMtd2lkdGg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc2VwYXJhdGV1ci16b25lIHtcclxuICB3aWR0aDogJGxpZ25lLXZhY2FuY2VzLXNlcGFyYXRldXItd2lkdGg7XHJcbiAgbWluLXdpZHRoOiAkbGlnbmUtdmFjYW5jZXMtc2VwYXJhdGV1ci13aWR0aDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9444:
/*!****************************************************!*\
  !*** ./src/app/calendrier/calendrier.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalendrierComponent: () => (/* binding */ CalendrierComponent)
/* harmony export */ });
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon */ 4063);
/* harmony import */ var _model_mois_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/mois.model */ 4321);
/* harmony import */ var _model_periodeVacanceModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/periodeVacanceModel */ 8346);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _service_jours_ferie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/jours-ferie.service */ 5956);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button-toggle */ 9864);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _calendrier_semaine_calendrier_semaine_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../calendrier-semaine/calendrier-semaine.component */ 6006);











function CalendrierComponent_div_21_div_3_app_calendrier_semaine_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-calendrier-semaine", 23);
  }
  if (rf & 2) {
    const semaine_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("listeSaint", ctx_r1.mois)("dateDebut", semaine_r1)("listeJourFerier", ctx_r1.listeJourFerier)("listePeriodeVacance", ctx_r1.listePeriodeVacances);
  }
}
function CalendrierComponent_div_21_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CalendrierComponent_div_21_div_3_app_calendrier_semaine_1_Template, 1, 4, "app-calendrier-semaine", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.mois);
  }
}
function CalendrierComponent_div_21_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" decalage \u00E9t\u00E9 le ", ctx_r1.decalageHeureEte.day, " (+1h) ");
  }
}
function CalendrierComponent_div_21_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" decalage hiver le ", ctx_r1.decalageHeureHivert.day, " (-1h) ");
  }
}
function CalendrierComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, CalendrierComponent_div_21_div_3_Template, 2, 1, "div", 19)(4, CalendrierComponent_div_21_div_4_Template, 2, 1, "div", 20)(5, CalendrierComponent_div_21_div_5_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const moisParAnnee_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", moisParAnnee_r3.nomMois, " ", moisParAnnee_r3.annee, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", moisParAnnee_r3.semaineDuMois);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.decalageHeureEte && ctx_r1.decalageHeureEte.year === moisParAnnee_r3.annee && ctx_r1.decalageHeureEte.month === moisParAnnee_r3.numeroMois);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.decalageHeureHivert && ctx_r1.decalageHeureHivert.year === moisParAnnee_r3.annee && ctx_r1.decalageHeureHivert.month === moisParAnnee_r3.numeroMois);
  }
}
class CalendrierComponent {
  constructor(http, joursFerieService) {
    this.http = http;
    this.joursFerieService = joursFerieService;
    this.mois = null;
    this.jourActuel = luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.now();
    this.listeSemaineDuMois = [];
    this.listeJourFerier = [];
    this.listePeriodeVacances = [];
    this.anneeAffiche = 0;
    this.nbMois = 0;
    this.premierMois = 0;
    this.decalageHeureEte = null;
    this.decalageHeureHivert = null;
    this.backend = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.backend;
    this.getMois();
  }
  ngOnInit() {
    luxon__WEBPACK_IMPORTED_MODULE_0__.Settings.defaultLocale = "fr";
    this.jourActuel = luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.now();
    // this.anneeAffiche=this.jourActuel.year;
    let debut;
    let nbMois;
    nbMois = 6;
    // nbMois = 12;
    if (this.jourActuel.month <= 6 || nbMois > 6) {
      debut = this.jourActuel.startOf('year');
    } else {
      debut = this.jourActuel.set({
        month: 7
      }).startOf('month');
    }
    this.calculDesMois(debut, nbMois);
  }
  calculDesMois(premierMois, nbMois) {
    this.listeSemaineDuMois = [];
    this.anneeAffiche = premierMois.year;
    this.nbMois = nbMois;
    this.premierMois = premierMois.month;
    this.listeJourFerier = this.joursFerieService.calculJourFeries(premierMois.year);
    for (let i = 1; i <= nbMois; i++) {
      let tab = this.calculDuMois(premierMois);
      let mois = new _model_mois_model__WEBPACK_IMPORTED_MODULE_1__.Mois();
      mois.nomMois = this.getNomMois(premierMois);
      mois.annee = premierMois.year;
      mois.semaineDuMois = tab;
      mois.numeroMois = tab[0].month;
      this.listeSemaineDuMois.push(mois);
      premierMois = premierMois.plus({
        month: 1
      }).startOf('month');
    }
  }
  getNomMois(date) {
    let nom = date.monthLong;
    if (nom && nom.length > 0) {
      return nom.charAt(0).toUpperCase() + nom.slice(1);
    } else {
      return '';
    }
  }
  calculDuMois(premierjourDuMois) {
    let semaineDuMois = [];
    let dte = premierjourDuMois;
    console.debug('startOf month', dte.toISODate());
    let dte2 = dte;
    while (true) {
      semaineDuMois.push(dte);
      dte2 = dte.plus({
        week: 1
      }).startOf('week');
      if (dte2.month != dte.month) {
        break;
      } else {
        dte = dte2;
      }
    }
    return semaineDuMois;
  }
  getJSON() {
    return this.http.get('assets/ephemeris.json');
  }
  getMois() {
    this.getJSON().subscribe(data => {
      this.mois = data;
    });
    let url = 'api/vacances';
    if (!this.backend) {
      url = 'assets/vacances.json';
    }
    this.http.get(url).subscribe(data => {
      console.debug("data vacances", data);
      this.initVacances(data);
    });
  }
  initVacances(data) {
    let liste = [];
    if (data && data.listVacancesDto && data.listVacancesDto.length > 0) {
      for (let vac of data.listVacancesDto) {
        let zone = vac.zone;
        let dateDebut = null;
        let dateFin = null;
        if (vac.dateDebut) {
          let date = luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.fromISO(vac.dateDebut);
          if (date) {
            dateDebut = date;
          }
          date = luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.fromISO(vac.dateFin);
          if (date) {
            dateFin = date;
          }
        }
        if (zone && dateDebut && dateFin) {
          if (zone === 'Zone A') {
            const vacance = new _model_periodeVacanceModel__WEBPACK_IMPORTED_MODULE_2__.PeriodeVacanceModel();
            vacance.zone = 'zoneA';
            vacance.dateDebut = dateDebut;
            vacance.dateFin = dateFin;
            liste.push(vacance);
          } else if (zone === 'Zone B') {
            const vacance = new _model_periodeVacanceModel__WEBPACK_IMPORTED_MODULE_2__.PeriodeVacanceModel();
            vacance.zone = 'zoneB';
            vacance.dateDebut = dateDebut;
            vacance.dateFin = dateFin;
            liste.push(vacance);
          } else if (zone === 'Zone C') {
            const vacance = new _model_periodeVacanceModel__WEBPACK_IMPORTED_MODULE_2__.PeriodeVacanceModel();
            vacance.zone = 'zoneC';
            vacance.dateDebut = dateDebut;
            vacance.dateFin = dateFin;
            liste.push(vacance);
          } else {
            console.error("Type de zone invalide:", zone, dateDebut, dateFin);
          }
        }
      }
    }
    this.listePeriodeVacances = liste;
    if (data) {
      if (data.jourDecalageHivert) {
        const luxonDate = luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.fromSQL(data.jourDecalageHivert);
        console.debug("decalage1", data.jourDecalageHivert, luxonDate);
        this.decalageHeureHivert = luxonDate;
      }
      if (data.jourDecalageEte) {
        const luxonDate = luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.fromSQL(data.jourDecalageEte);
        console.debug("decalage2", data.jourDecalageEte, luxonDate);
        this.decalageHeureEte = luxonDate;
      }
    }
  }
  changenbMois($event) {
    console.debug('toggle', $event);
    let nbMois = 0;
    if ($event === 'trois') {
      nbMois = 3;
    } else if ($event === 'six') {
      nbMois = 6;
    } else if ($event === 'douze') {
      nbMois = 12;
    }
    if (nbMois > 0) {
      let debut;
      debut = luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.local(this.anneeAffiche, this.premierMois, 1);
      this.calculDesMois(debut, nbMois);
    }
  }
  recule() {
    this.decalage(-this.nbMois);
  }
  avance() {
    this.decalage(this.nbMois);
  }
  decalage(decalage) {
    if (this.nbMois > 0 && decalage !== 0) {
      let debut = luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.local(this.anneeAffiche, this.premierMois, 1);
      debut = debut.plus({
        month: decalage
      });
      this.calculDesMois(debut, this.nbMois);
    }
  }
  static #_ = this.ɵfac = function CalendrierComponent_Factory(t) {
    return new (t || CalendrierComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_jours_ferie_service__WEBPACK_IMPORTED_MODULE_4__.JoursFerieService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: CalendrierComponent,
    selectors: [["app-calendrier"]],
    decls: 38,
    vars: 2,
    consts: [[1, "page"], [1, "entete"], [1, "affichageAnnee"], [1, "bouton-entete"], ["name", "nbMois", "aria-label", "Nombre de mois", 3, "valueChange"], ["value", "trois"], ["value", "six"], ["value", "douze"], ["mat-raised-button", "", 3, "click"], [1, "annee"], ["class", "boucleFor", 4, "ngFor", "ngForOf"], [1, "piedPage"], [1, "zone", "zoneA"], [1, "label"], [1, "text"], [1, "zone", "zoneB"], [1, "zone", "zoneC"], [1, "boucleFor"], [1, "titre-mois"], ["class", "mois", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "mois"], [3, "listeSaint", "dateDebut", "listeJourFerier", "listePeriodeVacance", 4, "ngIf"], [3, "listeSaint", "dateDebut", "listeJourFerier", "listePeriodeVacance"]],
    template: function CalendrierComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 3)(7, "div")(8, "mat-button-toggle-group", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("valueChange", function CalendrierComponent_Template_mat_button_toggle_group_valueChange_8_listener($event) {
          return ctx.changenbMois($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-button-toggle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "mat-button-toggle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-button-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div")(16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CalendrierComponent_Template_button_click_16_listener() {
          return ctx.recule();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "\u2190");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CalendrierComponent_Template_button_click_18_listener() {
          return ctx.avance();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "\u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, CalendrierComponent_div_21_Template, 6, 5, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 11)(23, "div", 12)(24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Zone A");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Besan\u00E7on - Bordeaux - Clermont-Ferrand - Dijon - Grenoble - Limoges - Lyon - Poitiers");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 15)(29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Zone B");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Aix-Marseille - Amiens - Caen - Lille - Nancy-Metz - Nantes - Nice - Orl\u00E9ans-Tours - Reims - Rennes - Rouen - Strasbourg");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 16)(34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Zone C");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Cr\u00E9teil - Montpellier - Paris - Toulouse - Versailles");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.anneeAffiche);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.listeSemaineDuMois);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__.MatButtonToggle, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _calendrier_semaine_calendrier_semaine_component__WEBPACK_IMPORTED_MODULE_5__.CalendrierSemaineComponent],
    styles: [".page[_ngcontent-%COMP%] {\n  width: 60%;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n}\n\n.entete[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n}\n\n.affichageAnnee[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n}\n\n.bouton-entete[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-end;\n}\n\n.annee[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n}\n\n.mois[_ngcontent-%COMP%] {\n  border: 2px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n}\n\n.titre-mois[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.piedPage[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: center;\n}\n\n.zone[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: left;\n}\n\n.label[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  margin-right: 10px;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.zoneA[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  background-color: blue;\n}\n\n.zoneB[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  background-color: green;\n}\n\n.zoneC[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  background-color: red;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2FsZW5kcmllci9jYWxlbmRyaWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBSUU7RUFDRSxzQkFBQTtBQURKOztBQU1FO0VBQ0UsdUJBQUE7QUFISjs7QUFRRTtFQUNFLHFCQUFBO0FBTEoiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnBhZ2Uge1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG59XHJcblxyXG4uZW50ZXRlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uYWZmaWNoYWdlQW5uZWUge1xyXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xyXG59XHJcblxyXG4uYm91dG9uLWVudGV0ZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5hbm5lZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG59XHJcblxyXG4ubW9pcyB7XHJcbiAgYm9yZGVyOiAycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG59XHJcblxyXG4udGl0cmUtbW9pcyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucGllZFBhZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnpvbmUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi56b25lQSB7XHJcbiAgLmxhYmVsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgfVxyXG59XHJcblxyXG4uem9uZUIge1xyXG4gIC5sYWJlbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICB9XHJcbn1cclxuXHJcbi56b25lQyB7XHJcbiAgLmxhYmVsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1856:
/*!**********************************************!*\
  !*** ./src/app/horloge/horloge.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HorlogeComponent: () => (/* binding */ HorlogeComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


const _c0 = ["secondes"];
const _c1 = ["minutes"];
const _c2 = ["heures"];
class HorlogeComponent {
  constructor() {
    this.intervalID = null;
    this.secondes = null;
    this.minutes = null;
    this.heures = null;
  }
  ngAfterViewInit() {
    this.fonction();
  }
  fonction() {
    const sec = this.secondes?.nativeElement;
    const min = this.minutes?.nativeElement;
    const heure = this.heures?.nativeElement;
    this.intervalID = setInterval(function () {
      let time = new Date();
      let secondes = time.getSeconds();
      let minutes = time.getMinutes();
      let heures = time.getHours();
      if (sec) {
        const tmp = secondes / 60 * 360 + 90;
        sec.style.transform = `rotate(${tmp}deg`;
      }
      if (min) {
        const tmp = minutes / 60 * 360 + secondes / 60 * 6 + 90;
        min.style.transform = `rotate(${tmp}deg)`;
      }
      if (heure) {
        const tmp = heures / 12 * 360 + minutes / 60 * 30 + 90;
        heure.style.transform = `rotate(${tmp}deg)`;
      }
    });
  }
  ngOnDestroy() {
    if (this.intervalID) {
      clearInterval(this.intervalID);
    }
  }
  static #_ = this.ɵfac = function HorlogeComponent_Factory(t) {
    return new (t || HorlogeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HorlogeComponent,
    selectors: [["app-horloge"]],
    viewQuery: function HorlogeComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.secondes = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.minutes = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.heures = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 13,
    vars: 0,
    consts: [["heures", ""], ["minutes", ""], ["secondes", ""], [1, "clock"], [1, "outer-clock-face"], [1, "marking", "marking-one"], [1, "marking", "marking-two"], [1, "marking", "marking-three"], [1, "marking", "marking-four"], [1, "inner-clock-face"], [1, "hand", "hour-hand"], [1, "hand", "min-hand"], [1, "hand", "second-hand"]],
    template: function HorlogeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 5)(3, "div", 6)(4, "div", 7)(5, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 10, 0)(9, "div", 11, 1)(11, "div", 12, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
    styles: [".clock[_ngcontent-%COMP%] {\n  width: 65vmin;\n  height: 65vmin;\n  position: relative;\n  padding: 2rem;\n  border: 7px solid #282828;\n  box-shadow: -4px -4px 10px rgba(67, 67, 67, 0.5), inset 4px 4px 10px rgba(0, 0, 0, 0.5), inset -4px -4px 10px rgba(67, 67, 67, 0.5), 4px 4px 10px rgba(0, 0, 0, 0.3);\n  border-radius: 50%;\n  margin: 50px auto;\n}\n\n.outer-clock-face[_ngcontent-%COMP%] {\n  position: relative;\n  background: #282828;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  border-radius: 100%;\n}\n\n.outer-clock-face[_ngcontent-%COMP%]::after {\n  transform: rotate(90deg);\n}\n\n.outer-clock-face[_ngcontent-%COMP%]::after, .outer-clock-face[_ngcontent-%COMP%]::before, .outer-clock-face[_ngcontent-%COMP%]   .marking[_ngcontent-%COMP%] {\n  content: \"\";\n  position: absolute;\n  width: 5px;\n  height: 100%;\n  background: #1df52f;\n  z-index: 0;\n  left: 49%;\n}\n\n.outer-clock-face[_ngcontent-%COMP%]   .marking[_ngcontent-%COMP%] {\n  background: #bdbdcb;\n  width: 3px;\n}\n\n.outer-clock-face[_ngcontent-%COMP%]   .marking.marking-one[_ngcontent-%COMP%] {\n  transform: rotate(30deg);\n}\n\n.outer-clock-face[_ngcontent-%COMP%]   .marking.marking-two[_ngcontent-%COMP%] {\n  transform: rotate(60deg);\n}\n\n.outer-clock-face[_ngcontent-%COMP%]   .marking.marking-three[_ngcontent-%COMP%] {\n  transform: rotate(120deg);\n}\n\n.outer-clock-face[_ngcontent-%COMP%]   .marking.marking-four[_ngcontent-%COMP%] {\n  transform: rotate(150deg);\n}\n\n.inner-clock-face[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10%;\n  left: 10%;\n  width: 80%;\n  height: 80%;\n  background: #282828;\n  border-radius: 100%;\n  z-index: 1;\n}\n\n.inner-clock-face[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 16px;\n  height: 16px;\n  border-radius: 18px;\n  margin-left: -9px;\n  margin-top: -6px;\n  background: #4d4b63;\n  z-index: 11;\n}\n\n.hand[_ngcontent-%COMP%] {\n  width: 50%;\n  right: 50%;\n  height: 6px;\n  background: #61afff;\n  position: absolute;\n  top: 50%;\n  border-radius: 6px;\n  transform-origin: 100%;\n  transform: rotate(90deg);\n  transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);\n}\n\n.hand.hour-hand[_ngcontent-%COMP%] {\n  width: 30%;\n  z-index: 3;\n}\n\n.hand.min-hand[_ngcontent-%COMP%] {\n  height: 3px;\n  z-index: 10;\n  width: 40%;\n}\n\n.hand.second-hand[_ngcontent-%COMP%] {\n  background: #ee791a;\n  width: 45%;\n  height: 2px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9ybG9nZS9ob3Jsb2dlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG9LQUFBO0VBSUEsa0JBQUE7RUFDQSxpQkFBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBR0Usd0JBQUE7QUFIRjs7QUFNQTs7O0VBR0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBSEY7O0FBTUE7RUFDRSxtQkFBQTtFQUNBLFVBQUE7QUFIRjs7QUFNQTtFQUdFLHdCQUFBO0FBSEY7O0FBTUE7RUFHRSx3QkFBQTtBQUhGOztBQU1BO0VBR0UseUJBQUE7QUFIRjs7QUFNQTtFQUdFLHlCQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUdBLG1CQUFBO0VBQ0EsVUFBQTtBQUhGOztBQU1BO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUhGOztBQU1BO0VBQ0UsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyREFBQTtBQUhGOztBQU1BO0VBQ0UsVUFBQTtFQUNBLFVBQUE7QUFIRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUhGIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jbG9jayB7XHJcbiAgd2lkdGg6IDY1dm1pbjtcclxuICBoZWlnaHQ6IDY1dm1pbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBib3JkZXI6IDdweCBzb2xpZCAjMjgyODI4O1xyXG4gIGJveC1zaGFkb3c6IC00cHggLTRweCAxMHB4IHJnYmEoNjcsNjcsNjcsMC41KSxcclxuICBpbnNldCA0cHggNHB4IDEwcHggcmdiYSgwLDAsMCwwLjUpLFxyXG4gIGluc2V0IC00cHggLTRweCAxMHB4IHJnYmEoNjcsNjcsNjcsMC41KSxcclxuICA0cHggNHB4IDEwcHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW46IDUwcHggYXV0bztcclxufVxyXG5cclxuLm91dGVyLWNsb2NrLWZhY2Uge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbn1cclxuXHJcbi5vdXRlci1jbG9jay1mYWNlOjphZnRlciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpXHJcbn1cclxuXHJcbi5vdXRlci1jbG9jay1mYWNlOjphZnRlcixcclxuLm91dGVyLWNsb2NrLWZhY2U6OmJlZm9yZSxcclxuLm91dGVyLWNsb2NrLWZhY2UgLm1hcmtpbmd7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA1cHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICMxZGY1MmY7XHJcbiAgei1pbmRleDogMDtcclxuICBsZWZ0OiA0OSU7XHJcbn1cclxuXHJcbi5vdXRlci1jbG9jay1mYWNlIC5tYXJraW5nIHtcclxuICBiYWNrZ3JvdW5kOiAjYmRiZGNiO1xyXG4gIHdpZHRoOiAzcHg7XHJcbn1cclxuXHJcbi5vdXRlci1jbG9jay1mYWNlIC5tYXJraW5nLm1hcmtpbmctb25lIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZylcclxufVxyXG5cclxuLm91dGVyLWNsb2NrLWZhY2UgLm1hcmtpbmcubWFya2luZy10d28ge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKVxyXG59XHJcblxyXG4ub3V0ZXItY2xvY2stZmFjZSAubWFya2luZy5tYXJraW5nLXRocmVlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxMjBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDEyMGRlZylcclxufVxyXG5cclxuLm91dGVyLWNsb2NrLWZhY2UgLm1hcmtpbmcubWFya2luZy1mb3VyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE1MGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE1MGRlZylcclxufVxyXG5cclxuLmlubmVyLWNsb2NrLWZhY2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwJTtcclxuICBsZWZ0OiAxMCU7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBoZWlnaHQ6IDgwJTtcclxuICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uaW5uZXItY2xvY2stZmFjZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIGhlaWdodDogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtOXB4O1xyXG4gIG1hcmdpbi10b3A6IC02cHg7XHJcbiAgYmFja2dyb3VuZDogIzRkNGI2MztcclxuICB6LWluZGV4OiAxMTtcclxufVxyXG5cclxuLmhhbmQge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgcmlnaHQ6IDUwJTtcclxuICBoZWlnaHQ6IDZweDtcclxuICBiYWNrZ3JvdW5kOiAjNjFhZmZmO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjEsIDIuNywgMC41OCwgMSk7XHJcbn1cclxuXHJcbi5oYW5kLmhvdXItaGFuZCB7XHJcbiAgd2lkdGg6IDMwJTtcclxuICB6LWluZGV4OiAzO1xyXG59XHJcblxyXG4uaGFuZC5taW4taGFuZCB7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgd2lkdGg6IDQwJTtcclxufVxyXG5cclxuLmhhbmQuc2Vjb25kLWhhbmQge1xyXG4gIGJhY2tncm91bmQ6ICNlZTc5MWE7XHJcbiAgd2lkdGg6IDQ1JTtcclxuICBoZWlnaHQ6IDJweDtcclxufVxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 4460:
/*!******************************************!*\
  !*** ./src/app/meteo/meteo.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MeteoComponent: () => (/* binding */ MeteoComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _model_meteoCourante_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/meteoCourante.model */ 9524);
/* harmony import */ var _model_statut_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/statut.enum */ 4766);
/* harmony import */ var _model_meteoStatut_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/meteoStatut.model */ 8102);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! luxon */ 4063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-charts */ 6045);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/expansion */ 9322);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ 4102);
/* harmony import */ var _prevision_meteo_prevision_meteo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../prevision-meteo/prevision-meteo.component */ 8972);














function _forTrack0($index, $item) {
  return this.meteo;
}
function MeteoComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 21)(1, "mat-expansion-panel", 5)(2, "mat-expansion-panel-header")(3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " M\u00E9t\u00E9o ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div")(6, "app-prevision-meteo", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("emitRecharger", function MeteoComponent_div_0_div_2_Template_app_prevision_meteo_emitRecharger_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.recharger());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("meteo", ctx_r1.meteo.meteoCourante)("boutonRecharger", true)("afficheCoucheSoleil", true)("afficheHeureUniquement", false);
  }
}
function MeteoComponent_div_0_img_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 23);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("src", "https://openweathermap.org/img/wn/", ctx_r1.meteo.meteoCourante == null ? null : ctx_r1.meteo.meteoCourante.matin == null ? null : ctx_r1.meteo.meteoCourante.matin.iconeStatut, "@2x.png", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function MeteoComponent_div_0_img_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 23);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("src", "https://openweathermap.org/img/wn/", ctx_r1.meteo.meteoCourante == null ? null : ctx_r1.meteo.meteoCourante.apresMidi == null ? null : ctx_r1.meteo.meteoCourante.apresMidi.iconeStatut, "@2x.png", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function MeteoComponent_div_0_For_31_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 23);
  }
  if (rf & 2) {
    const meteo2_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("src", "https://openweathermap.org/img/wn/", meteo2_r3.matin == null ? null : meteo2_r3.matin.iconeStatut, "@2x.png", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function MeteoComponent_div_0_For_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16)(1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, MeteoComponent_div_0_For_31_img_5_Template, 1, 2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const meteo2_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 4, meteo2_r3.date, "EEEE d"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", meteo2_r3.matin == null ? null : meteo2_r3.matin.iconeStatut);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", meteo2_r3.temperatureMin, "\u00B0 -> ", meteo2_r3.temperatureMax, "\u00B0");
  }
}
function MeteoComponent_div_0_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 27)(1, "mat-expansion-panel", 5)(2, "mat-expansion-panel-header")(3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Pr\u00E9cipitations ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Les pr\u00E9cipitations ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "canvas", 29)(9, "canvas", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", "line")("data", ctx_r1.lineChartData)("options", ctx_r1.lineChartOptions)("legend", ctx_r1.lineChartLegend);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", "line")("data", ctx_r1.lineChartData2)("options", ctx_r1.lineChartOptions)("legend", ctx_r1.lineChartLegend);
  }
}
function MeteoComponent_div_0_div_35_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-prevision-meteo", 31)(2, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const meteo_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("meteo", meteo_r4)("boutonRecharger", false)("afficheCoucheSoleil", false)("afficheHeureUniquement", true);
  }
}
function MeteoComponent_div_0_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 27)(1, "mat-expansion-panel")(2, "mat-expansion-panel-header")(3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " M\u00E9t\u00E9o des prochaines heures ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " C'est la m\u00E9t\u00E9o des prochaines heures ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, MeteoComponent_div_0_div_35_div_7_Template, 3, 4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.meteo.prochainesHeures);
  }
}
function MeteoComponent_div_0_div_36_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-prevision-meteo", 31)(2, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const meteo_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("meteo", meteo_r5)("boutonRecharger", false)("afficheCoucheSoleil", false)("afficheHeureUniquement", false);
  }
}
function MeteoComponent_div_0_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 32)(1, "mat-expansion-panel")(2, "mat-expansion-panel-header")(3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " M\u00E9t\u00E9o des prochains jours ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " C'est la m\u00E9t\u00E9o des prochains jours ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, MeteoComponent_div_0_div_36_div_7_Template, 3, 4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.meteo.prochainsJours);
  }
}
function MeteoComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, MeteoComponent_div_0_div_2_Template, 7, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 4)(4, "mat-expansion-panel", 5)(5, "mat-expansion-panel-header")(6, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " Aujourd'hui ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Aujourd'hui ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Matin");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Apres midi");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, MeteoComponent_div_0_img_17_Template, 1, 2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, MeteoComponent_div_0_img_19_Template, 1, 2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 14)(23, "mat-expansion-panel", 5)(24, "mat-expansion-panel-header")(25, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, " Prochains jours ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, " Prochains jours ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](30, MeteoComponent_div_0_For_31_Template, 8, 7, "div", 16, _forTrack0, true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, MeteoComponent_div_0_div_33_Template, 10, 8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, MeteoComponent_div_0_div_35_Template, 8, 1, "div", 18)(36, MeteoComponent_div_0_div_36_Template, 8, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.meteo.meteoCourante);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.meteo.meteoCourante == null ? null : ctx_r1.meteo.meteoCourante.matin == null ? null : ctx_r1.meteo.meteoCourante.matin.iconeStatut);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.meteo.meteoCourante == null ? null : ctx_r1.meteo.meteoCourante.apresMidi == null ? null : ctx_r1.meteo.meteoCourante.apresMidi.iconeStatut);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("Temperature : min=", ctx_r1.meteo.meteoCourante == null ? null : ctx_r1.meteo.meteoCourante.temperatureMin, "\u00B0 max=", ctx_r1.meteo.meteoCourante == null ? null : ctx_r1.meteo.meteoCourante.temperatureMax, "\u00B0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx_r1.meteo.resumeProchainsjours);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.meteo.prochainesHeures);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.meteo.prochainesHeures);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.meteo.prochainsJours);
  }
}
function MeteoComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div")(2, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MeteoComponent_div_1_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.recharger());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Recharger");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
class MeteoComponent {
  constructor(http, datePipe, _snackBar) {
    this.http = http;
    this.datePipe = datePipe;
    this._snackBar = _snackBar;
    this.meteo = null;
    this.lineChartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Précipitations',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }]
    };
    this.lineChartOptions = {
      responsive: false
    };
    this.lineChartLegend = true;
    this.lineChartData2 = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Précipitations',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }]
    };
  }
  ngOnInit() {
    this.rechargerMeteo();
  }
  recharger() {
    this.rechargerMeteo();
  }
  rechargerMeteo() {
    this.http.get('api/meteo').subscribe(data => {
      this.miseAJourMeteo(data);
      this._snackBar.open("Mise à jour de la météo réussi", "", {
        duration: 3000
      });
    });
  }
  miseAJourMeteo(data) {
    console.log("data meteo", data);
    this.meteo = data;
    this.calculJournee(data);
    this.calculPrecipitation(data);
    this.calculTemperature(data);
  }
  calculPrecipitation(data) {
    if (data && data.precipitations) {
      let labels = [];
      let datas = [];
      for (let i = 0; i < data.precipitations.length; i++) {
        let tmp = data.precipitations[i];
        if (tmp && tmp.date && tmp.precipitation >= 0) {
          let heure = this.datePipe.transform(tmp.date, 'HH:mm');
          if (heure) {
            labels.push(heure);
            datas.push(tmp.precipitation);
          }
        }
      }
      if (labels.length > 0 && labels.length == datas.length) {
        this.lineChartData = {
          labels: labels,
          datasets: [{
            data: datas,
            label: 'Précipitations',
            fill: true,
            tension: 0.5,
            borderColor: 'black',
            backgroundColor: 'rgba(255,0,0,0.3)'
          }]
        };
      }
    }
  }
  calculTemperature(data) {
    if (data && data.prochainesHeures) {
      let labels = [];
      let datas = [];
      for (let i = 0; i < data.prochainesHeures.length; i++) {
        let tmp = data.prochainesHeures[i];
        if (tmp && tmp.date) {
          let heure = this.datePipe.transform(tmp.date, 'HH:mm');
          if (heure) {
            labels.push(heure);
            datas.push(tmp.temperature);
          }
        }
      }
      if (labels.length > 0 && labels.length == datas.length) {
        let label = 'Température';
        if (data && data.prochainesHeures && data.prochainesHeures.length > 0) {
          label = 'Température ' + data.prochainesHeures[0].date;
        }
        this.lineChartData2 = {
          labels: labels,
          datasets: [{
            data: datas,
            label: label,
            fill: true,
            tension: 0.5,
            borderColor: 'black',
            backgroundColor: 'rgba(255,0,0,0.3)'
          }]
        };
      }
    }
  }
  calculJournee(data) {
    this.calculResumeJournee(data.meteoCourante, data.prochainesHeures, luxon__WEBPACK_IMPORTED_MODULE_3__.DateTime.now());
    if (data.prochainsJours?.length > 0) {
      let map = new Map();
      for (let jour of data.prochainsJours) {
        if (jour.date) {
          let d = luxon__WEBPACK_IMPORTED_MODULE_3__.DateTime.fromJSDate(new Date(jour.date));
          let key = d.toISODate();
          if (key) {
            map.set(key, jour);
          }
        }
      }
      data.resumeProchainsjours = [];
      for (let key of map.keys()) {
        let meteoJour = map.get(key);
        if (meteoJour) {
          let d = luxon__WEBPACK_IMPORTED_MODULE_3__.DateTime.fromISO(key.toString());
          let meteo = this.calculResumeProchainsJours(meteoJour, d);
          data.resumeProchainsjours.push(meteo);
        }
      }
    }
  }
  calculResumeJournee(meteoCourante, listeMeteo, date) {
    if (meteoCourante) {
      meteoCourante.matin = null;
      meteoCourante.apresMidi = null;
      if (listeMeteo && listeMeteo.length > 0) {
        let date2 = date.toJSDate();
        let listeMatin = [];
        let listeApresMidi = [];
        let temperatureMin = null;
        let temperatureMax = null;
        for (let d of listeMeteo) {
          if (d.date) {
            let d2 = new Date(d.date);
            if (d2.getFullYear() === date2.getFullYear() && d2.getMonth() === date2.getMonth() && d2.getDate() === date2.getDate()) {
              if (d2.getHours() < 12) {
                listeMatin.push(d);
              } else {
                listeApresMidi.push(d);
              }
              if (temperatureMin === null) {
                temperatureMin = d.temperature;
              } else if (temperatureMin > d.temperature) {
                temperatureMin = d.temperature;
              }
              if (temperatureMax === null) {
                temperatureMax = d.temperature;
              } else if (temperatureMax < d.temperature) {
                temperatureMax = d.temperature;
              }
            }
          }
        }
        if (listeMatin.length > 0) {
          meteoCourante.matin = this.calculDescription(listeMatin);
        }
        if (listeApresMidi.length > 0) {
          meteoCourante.apresMidi = this.calculDescription(listeApresMidi);
        }
        if (temperatureMin !== null) {
          meteoCourante.temperatureMin = temperatureMin;
        }
        if (temperatureMax !== null) {
          meteoCourante.temperatureMax = temperatureMax;
        }
      }
    }
  }
  calculResumeProchainsJours(meteo, date) {
    let meteoCourante;
    meteoCourante = new _model_meteoCourante_model__WEBPACK_IMPORTED_MODULE_0__.MeteoCouranteModel();
    meteoCourante.matin = null;
    meteoCourante.date = date.toJSDate();
    let listeMatin = [];
    if (meteo.date) {
      listeMatin.push(meteo);
    }
    if (listeMatin.length > 0) {
      meteoCourante.matin = this.calculDescription(listeMatin);
    }
    meteoCourante.temperatureMin = meteo.temperatureMin;
    meteoCourante.temperatureMax = meteo.temperatureMax;
    return meteoCourante;
  }
  calculDescription(listeMatin) {
    if (listeMatin && listeMatin.length > 0) {
      let description = '';
      let icone = '';
      let codeStatut = 0;
      let statut = _model_statut_enum__WEBPACK_IMPORTED_MODULE_1__.StatusEnum.INCONNU;
      for (let meteo of listeMatin) {
        let nouveauStatut = this.getStatut(meteo.codeStatut);
        if (nouveauStatut != _model_statut_enum__WEBPACK_IMPORTED_MODULE_1__.StatusEnum.INCONNU) {
          if (nouveauStatut > statut) {
            codeStatut = meteo.codeStatut;
            icone = meteo.iconeStatut;
            statut = nouveauStatut;
          }
        }
      }
      let resultat = new _model_meteoStatut_model__WEBPACK_IMPORTED_MODULE_2__.MeteoStatutModel();
      resultat.description = description;
      resultat.iconeStatut = icone;
      resultat.status = statut;
      resultat.statusCode = codeStatut;
      return resultat;
    }
    return null;
  }
  getStatut(statut) {
    if (statut >= 200 && statut < 300) {
      return _model_statut_enum__WEBPACK_IMPORTED_MODULE_1__.StatusEnum.ORAGE;
    } else if (statut >= 300 && statut < 400) {
      return _model_statut_enum__WEBPACK_IMPORTED_MODULE_1__.StatusEnum.BRUINE;
    } else if (statut >= 500 && statut < 600) {
      return _model_statut_enum__WEBPACK_IMPORTED_MODULE_1__.StatusEnum.PLUIE;
    } else if (statut >= 600 && statut < 700) {
      return _model_statut_enum__WEBPACK_IMPORTED_MODULE_1__.StatusEnum.NEIGE;
    } else if (statut >= 700 && statut < 800) {
      return _model_statut_enum__WEBPACK_IMPORTED_MODULE_1__.StatusEnum.ATHMOSPHERE;
    } else if (statut === 801) {
      return _model_statut_enum__WEBPACK_IMPORTED_MODULE_1__.StatusEnum.CIEL_CLAIR;
    } else if (statut >= 800 && statut < 900) {
      return _model_statut_enum__WEBPACK_IMPORTED_MODULE_1__.StatusEnum.NUAGEUX;
    } else {
      return _model_statut_enum__WEBPACK_IMPORTED_MODULE_1__.StatusEnum.INCONNU;
    }
  }
  static #_ = this.ɵfac = function MeteoComponent_Factory(t) {
    return new (t || MeteoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: MeteoComponent,
    selectors: [["app-meteo"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe])],
    decls: 2,
    vars: 2,
    consts: [["style", "width: 100%", "class", "page", 4, "ngIf"], [4, "ngIf"], [1, "page", 2, "width", "100%"], ["class", "meteo-courante", 4, "ngIf"], [1, "aujourd-hui"], ["expanded", "true"], [1, "meteo-jour"], [1, "jour-parent"], [1, "jour-matin-label"], [1, "jour-apresMidi-label"], [1, "jour-matin-statut"], ["width", "100px", "height", "100px", 3, "src", 4, "ngIf"], [1, "jour-apresMidi-statut"], [1, "jour-temperature"], [1, "prochains-jours"], [1, "meteo-prochains-jours-resume"], [1, "meteo-prochains-jours-resume-journee"], [1, "precipitation"], ["class", "meteo-prochaines-heures", 4, "ngIf"], [1, "meteo-prochaine"], ["class", "meteo-prochains-jours", 4, "ngIf"], [1, "meteo-courante"], [3, "emitRecharger", "meteo", "boutonRecharger", "afficheCoucheSoleil", "afficheHeureUniquement"], ["width", "100px", "height", "100px", 3, "src"], [1, "jour"], [1, "image"], [1, "temperature"], [1, "meteo-prochaines-heures"], [1, "charts"], ["baseChart", "", "width", "400", "height", "400", 3, "type", "data", "options", "legend"], [4, "ngFor", "ngForOf"], [3, "meteo", "boutonRecharger", "afficheCoucheSoleil", "afficheHeureUniquement"], [1, "meteo-prochains-jours"], ["mat-button", "", "color", "primary", 3, "click"]],
    template: function MeteoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, MeteoComponent_div_0_Template, 37, 8, "div", 0)(1, MeteoComponent_div_1_Template, 4, 0, "div", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.meteo);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.meteo);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, ng2_charts__WEBPACK_IMPORTED_MODULE_10__.BaseChartDirective, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionPanelTitle, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionPanelDescription, _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDivider, _prevision_meteo_prevision_meteo_component__WEBPACK_IMPORTED_MODULE_4__.PrevisionMeteoComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
    styles: [".page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.meteo-courante[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.precipitation[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.meteo-prochaine[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.meteo-prochaines-heures[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.meteo-prochains-jours[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.charts[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.aujourd-hui[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.jour-parent[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 0.3fr 1fr 0.3fr;\n  grid-column-gap: 4px;\n  grid-row-gap: 4px;\n}\n\n.jour-matin-label[_ngcontent-%COMP%] {\n  grid-area: 1/1/2/2;\n}\n\n.jour-apresMidi-label[_ngcontent-%COMP%] {\n  grid-area: 1/2/2/3;\n}\n\n.jour-matin-statut[_ngcontent-%COMP%] {\n  grid-area: 2/1/3/2;\n}\n\n.jour-apresMidi-statut[_ngcontent-%COMP%] {\n  grid-area: 2/2/3/3;\n}\n\n.jour-temperature[_ngcontent-%COMP%] {\n  grid-area: 3/1/4/3;\n}\n\n.prochains-jours[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.meteo-prochains-jours-resume[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.meteo-prochains-jours-resume-journee[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWV0ZW8vbWV0ZW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUFGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFGRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQUhGOztBQU1BO0VBQW9CLGtCQUFBO0FBRnBCOztBQUdBO0VBQXdCLGtCQUFBO0FBQ3hCOztBQUFBO0VBQXFCLGtCQUFBO0FBSXJCOztBQUhBO0VBQXlCLGtCQUFBO0FBT3pCOztBQU5BO0VBQW9CLGtCQUFBO0FBVXBCOztBQVJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFXRjs7QUFSQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBV0Y7O0FBUkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFXRiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ucGFnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLm1ldGVvLWNvdXJhbnRlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4ucHJlY2lwaXRhdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubWV0ZW8tcHJvY2hhaW5lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tZXRlby1wcm9jaGFpbmVzLWhldXJlcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLm1ldGVvLXByb2NoYWlucy1qb3VycyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY2hhcnRzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hdWpvdXJkLWh1aXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5qb3VyLXBhcmVudCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC4zZnIgMWZyIDAuM2ZyO1xyXG4gIGdyaWQtY29sdW1uLWdhcDogNHB4O1xyXG4gIGdyaWQtcm93LWdhcDogNHB4O1xyXG59XHJcblxyXG4uam91ci1tYXRpbi1sYWJlbCB7IGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjsgfVxyXG4uam91ci1hcHJlc01pZGktbGFiZWwgeyBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7IH1cclxuLmpvdXItbWF0aW4tc3RhdHV0IHsgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyOyB9XHJcbi5qb3VyLWFwcmVzTWlkaS1zdGF0dXQgeyBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7IH1cclxuLmpvdXItdGVtcGVyYXR1cmUgeyBncmlkLWFyZWE6IDMgLyAxIC8gNCAvIDM7IH1cclxuXHJcbi5wcm9jaGFpbnMtam91cnN7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubWV0ZW8tcHJvY2hhaW5zLWpvdXJzLXJlc3VtZXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tZXRlby1wcm9jaGFpbnMtam91cnMtcmVzdW1lLWpvdXJuZWUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 2471:
/*!****************************************!*\
  !*** ./src/app/model/journee.model.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JourneeModel: () => (/* binding */ JourneeModel)
/* harmony export */ });
class JourneeModel {
  constructor() {
    this.numero = 0;
    this.journeeSemaine = '';
    this.dimanche = false;
    this.nomSaint = '';
    this.jourFerier = false;
    this.jourActuel = false;
    this.noSemaine = 0;
    this.vacancesA = false;
    this.vacancesB = false;
    this.vacancesC = false;
    this.date = null;
  }
}

/***/ }),

/***/ 9524:
/*!**********************************************!*\
  !*** ./src/app/model/meteoCourante.model.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MeteoCouranteModel: () => (/* binding */ MeteoCouranteModel)
/* harmony export */ });
class MeteoCouranteModel {
  constructor() {
    this.date = null;
    this.temperature = 0;
    this.temperatureResentie = 0;
    this.pressionAthmospherique = 0;
    this.humidite = 0;
    this.nuage = 0;
    this.visibilite = 0;
    this.vitesseVent = 0;
    this.directionVent = 0;
    this.heureLeveSoleil = null;
    this.heureCoucheSoleil = null;
    this.codeStatut = 0;
    this.descriptionStatut = '';
    this.iconeStatut = '';
    this.matin = null;
    this.apresMidi = null;
    this.temperatureMin = 0;
    this.temperatureMax = 0;
  }
}

/***/ }),

/***/ 8102:
/*!********************************************!*\
  !*** ./src/app/model/meteoStatut.model.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MeteoStatutModel: () => (/* binding */ MeteoStatutModel)
/* harmony export */ });
/* harmony import */ var _statut_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statut.enum */ 4766);

class MeteoStatutModel {
  constructor() {
    this.description = '';
    this.iconeStatut = '';
    this.statusCode = 0;
    this.status = _statut_enum__WEBPACK_IMPORTED_MODULE_0__.StatusEnum.INCONNU;
  }
}

/***/ }),

/***/ 4321:
/*!*************************************!*\
  !*** ./src/app/model/mois.model.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mois: () => (/* binding */ Mois)
/* harmony export */ });
class Mois {
  constructor() {
    this.nomMois = '';
    this.annee = 0;
    this.semaineDuMois = [];
    this.numeroMois = 0;
  }
}

/***/ }),

/***/ 3677:
/*!****************************************!*\
  !*** ./src/app/model/moisEpiphanie.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MoisEpiphanie: () => (/* binding */ MoisEpiphanie)
/* harmony export */ });
class MoisEpiphanie {
  constructor() {
    this.january = [];
    this.february = [];
    this.march = [];
    this.april = [];
    this.may = [];
    this.june = [];
    this.july = [];
    this.august = [];
    this.september = [];
    this.october = [];
    this.november = [];
    this.december = [];
  }
}

/***/ }),

/***/ 8346:
/*!**********************************************!*\
  !*** ./src/app/model/periodeVacanceModel.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PeriodeVacanceModel: () => (/* binding */ PeriodeVacanceModel)
/* harmony export */ });
class PeriodeVacanceModel {
  constructor() {
    this.zone = '';
    this.dateDebut = null;
    this.dateFin = null;
  }
}

/***/ }),

/***/ 4766:
/*!**************************************!*\
  !*** ./src/app/model/statut.enum.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatusEnum: () => (/* binding */ StatusEnum)
/* harmony export */ });
var StatusEnum;
(function (StatusEnum) {
  StatusEnum[StatusEnum["ORAGE"] = 5] = "ORAGE";
  StatusEnum[StatusEnum["BRUINE"] = 4] = "BRUINE";
  StatusEnum[StatusEnum["PLUIE"] = 6] = "PLUIE";
  StatusEnum[StatusEnum["NEIGE"] = 7] = "NEIGE";
  StatusEnum[StatusEnum["ATHMOSPHERE"] = 8] = "ATHMOSPHERE";
  StatusEnum[StatusEnum["CIEL_CLAIR"] = 2] = "CIEL_CLAIR";
  StatusEnum[StatusEnum["NUAGEUX"] = 3] = "NUAGEUX";
  StatusEnum[StatusEnum["INCONNU"] = 1] = "INCONNU";
})(StatusEnum || (StatusEnum = {}));

/***/ }),

/***/ 8972:
/*!**************************************************************!*\
  !*** ./src/app/prevision-meteo/prevision-meteo.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrevisionMeteoComponent: () => (/* binding */ PrevisionMeteoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4175);




function PrevisionMeteoComponent_div_0_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://openweathermap.org/img/wn/", ctx_r0.meteo.iconeStatut, "@4x.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function PrevisionMeteoComponent_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 1, ctx_r0.meteo.date, "dd/MM/yyyy HH:mm"));
  }
}
function PrevisionMeteoComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 1, ctx_r0.meteo.date, "HH:mm"));
  }
}
function PrevisionMeteoComponent_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Heure de lev\u00E9 de soleil");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 1, ctx_r0.meteo.heureLeveSoleil, "HH:mm"));
  }
}
function PrevisionMeteoComponent_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Heure de couch\u00E9 de soleil");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 1, ctx_r0.meteo.heureCoucheSoleil, "HH:mm"));
  }
}
function PrevisionMeteoComponent_div_0_div_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrevisionMeteoComponent_div_0_div_53_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.recharger());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Recharger");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function PrevisionMeteoComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PrevisionMeteoComponent_div_0_img_2_Template, 1, 2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PrevisionMeteoComponent_div_0_div_4_Template, 6, 4, "div", 5)(5, PrevisionMeteoComponent_div_0_div_5_Template, 6, 4, "div", 5)(6, PrevisionMeteoComponent_div_0_div_6_Template, 6, 4, "div", 5)(7, PrevisionMeteoComponent_div_0_div_7_Template, 6, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6)(9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6)(14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Temperature");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6)(19, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Temperature resentie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6)(24, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Pression athmospherique");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6)(29, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Humidit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6)(34, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Ciel couvert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6)(39, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Visibilit\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 6)(44, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Vitesse du vent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 6)(49, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Direction du vent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, PrevisionMeteoComponent_div_0_div_53_Template, 3, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.meteo.iconeStatut);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.afficheHeureUniquement);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.afficheHeureUniquement);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.afficheCoucheSoleil);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.afficheCoucheSoleil);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.meteo.descriptionStatut);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.meteo.temperature);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.meteo.temperatureResentie);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.meteo.pressionAthmospherique);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.meteo.humidite);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.meteo.nuage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.meteo.visibilite);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.meteo.vitesseVent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.meteo.directionVent, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.boutonRecharger);
  }
}
class PrevisionMeteoComponent {
  constructor() {
    this.meteo = null;
    this.boutonRecharger = false;
    this.emitRecharger = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.afficheCoucheSoleil = false;
    this.afficheHeureUniquement = false;
  }
  recharger() {
    this.emitRecharger.emit();
  }
  static #_ = this.ɵfac = function PrevisionMeteoComponent_Factory(t) {
    return new (t || PrevisionMeteoComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PrevisionMeteoComponent,
    selectors: [["app-prevision-meteo"]],
    inputs: {
      meteo: "meteo",
      boutonRecharger: "boutonRecharger",
      afficheCoucheSoleil: "afficheCoucheSoleil",
      afficheHeureUniquement: "afficheHeureUniquement"
    },
    outputs: {
      emitRecharger: "emitRecharger"
    },
    decls: 1,
    vars: 1,
    consts: [["class", "colonnes", 4, "ngIf"], [1, "colonnes"], [1, "symbole"], [3, "src", 4, "ngIf"], [1, "donnees"], ["class", "ligne", 4, "ngIf"], [1, "ligne"], [1, "label"], [1, "valeur"], [4, "ngIf"], [3, "src"], ["mat-button", "", "color", "primary", 3, "click"]],
    template: function PrevisionMeteoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PrevisionMeteoComponent_div_0_Template, 54, 15, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.meteo);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
    styles: [".colonnes[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.donnees[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.ligne[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.valeur[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJldmlzaW9uLW1ldGVvL3ByZXZpc2lvbi1tZXRlby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBREY7O0FBU0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFORjs7QUFTQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBTkY7O0FBYUE7RUFDRSxpQkFBQTtBQVZGIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uY29sb25uZXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5zeW1ib2xle1xyXG5cclxufVxyXG5cclxuLmRvbm5lZXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmxpZ25lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ubGFiZWwge1xyXG5cclxufVxyXG5cclxuLnZhbGV1ciB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5956:
/*!************************************************!*\
  !*** ./src/app/service/jours-ferie.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JoursFerieService: () => (/* binding */ JoursFerieService)
/* harmony export */ });
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon */ 4063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class JoursFerieService {
  constructor() {}
  calculJourFeries(annee) {
    const date = luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.local(annee, 1, 1);
    const listeJourFerier = [];
    listeJourFerier.push(date.startOf('year'));
    listeJourFerier.push(date.set({
      day: 1,
      month: 5
    }));
    listeJourFerier.push(date.set({
      day: 8,
      month: 5
    }));
    listeJourFerier.push(date.set({
      day: 14,
      month: 7
    }));
    listeJourFerier.push(date.set({
      day: 15,
      month: 8
    }));
    listeJourFerier.push(date.set({
      day: 1,
      month: 11
    }));
    listeJourFerier.push(date.set({
      day: 11,
      month: 11
    }));
    listeJourFerier.push(date.set({
      day: 25,
      month: 12
    }));
    let an = date.year;
    var G = an % 19;
    var C = Math.floor(an / 100);
    var H = (C - Math.floor(C / 4) - Math.floor((8 * C + 13) / 25) + 19 * G + 15) % 30;
    var I = H - Math.floor(H / 28) * (1 - Math.floor(H / 28) * Math.floor(29 / (H + 1)) * Math.floor((21 - G) / 11));
    var J = (an * 1 + Math.floor(an / 4) + I + 2 - C + Math.floor(C / 4)) % 7;
    var L = I - J;
    var MoisPaques = 3 + Math.floor((L + 40) / 44);
    var JourPaques = L + 28 - 31 * Math.floor(MoisPaques / 4);
    // var Paques = new Date(an, MoisPaques-1, JourPaques)
    // var VendrediSaint = new Date(an, MoisPaques-1, JourPaques-2)
    // var LundiPaques = new Date(an, MoisPaques-1, JourPaques+1)
    // var Ascension = new Date(an, MoisPaques-1, JourPaques+39)
    // var Pentecote = new Date(an, MoisPaques-1, JourPaques+49)
    // var LundiPentecote = new Date(an, MoisPaques-1, JourPaques+50);
    // this.listeJourFerier.push(date.endOf('year'));
    // lundi de pacques
    listeJourFerier.push(date.set({
      day: JourPaques + 1,
      month: MoisPaques
    }));
    // Ascension
    listeJourFerier.push(date.set({
      day: JourPaques + 39,
      month: MoisPaques
    }));
    // lundi de pentecote
    listeJourFerier.push(date.set({
      day: JourPaques + 50,
      month: MoisPaques
    }));
    listeJourFerier.sort(this.compareLuxonDates);
    return listeJourFerier;
  }
  compareLuxonDates(a, b) {
    return a.toMillis() - b.toMillis();
  }
  static #_ = this.ɵfac = function JoursFerieService_Factory(t) {
    return new (t || JoursFerieService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: JoursFerieService,
    factory: JoursFerieService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  backend: false
};

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map