"use strict";
(self["webpackChunkfyle_frontend_challenge"] = self["webpackChunkfyle_frontend_challenge"] || []).push([["main"],{

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/profile/profile.component */ 7395);


class AppComponent {
  constructor() {
    this.title = 'fyle-frontend-challenge';
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-profile");
      }
    },
    dependencies: [_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-pagination */ 1060);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-skeleton-loader */ 6316);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 953);
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/profile/profile.component */ 7395);
/* harmony import */ var _components_skeleton_loading_skeleton_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/skeleton-loading/skeleton-loading.component */ 1047);
/* harmony import */ var _components_user_bio_user_bio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user-bio/user-bio.component */ 4513);
/* harmony import */ var _components_user_repos_user_repos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user-repos/user-repos.component */ 6964);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);













class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_11__.NgxPaginationModule, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_12__.NgxSkeletonLoaderModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__.ProfileComponent, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent, _components_user_bio_user_bio_component__WEBPACK_IMPORTED_MODULE_4__.UserBioComponent, _components_user_repos_user_repos_component__WEBPACK_IMPORTED_MODULE_5__.UserReposComponent, _components_skeleton_loading_skeleton_loading_component__WEBPACK_IMPORTED_MODULE_3__.SkeletonLoadingComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_11__.NgxPaginationModule, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_12__.NgxSkeletonLoaderModule]
  });
})();

/***/ }),

/***/ 953:
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 274);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6290);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/data.service */ 2848);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);





function NavbarComponent_nav_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 6)(5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
}
function NavbarComponent_ng_template_1_img_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 21);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r3.userdata.avatar_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function NavbarComponent_ng_template_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 22);
  }
}
function NavbarComponent_ng_template_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.userdata.name);
  }
}
function NavbarComponent_ng_template_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function NavbarComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 12)(1, "div", 3)(2, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " GitHub ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NavbarComponent_ng_template_1_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.searchedUsername = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_ng_template_1_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.onSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, NavbarComponent_ng_template_1_img_11_Template, 1, 1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, NavbarComponent_ng_template_1_div_12_Template, 1, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, NavbarComponent_ng_template_1_div_13_Template, 3, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, NavbarComponent_ng_template_1_div_14_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.searchedUsername);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.userdata == null ? null : ctx_r2.userdata.avatar_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.userdata || !(ctx_r2.userdata == null ? null : ctx_r2.userdata.avatar_url));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.userdata == null ? null : ctx_r2.userdata.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.userdata || !(ctx_r2.userdata == null ? null : ctx_r2.userdata.name));
  }
}
class NavbarComponent {
  constructor(dataService) {
    this.dataService = dataService;
    this.searchedUsername = '';
    this.isLoading = true;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  }
  ngOnInit() {
    this.isLoading = true;
    this.searchedUsername = 'paragunhale1998';
    this.onSearch();
  }
  onSearch() {
    this.dataService.setUsername(this.searchedUsername);
    this.dataService.userData$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error(error);
      this.isLoading = false;
      return rxjs__WEBPACK_IMPORTED_MODULE_5__.EMPTY; // or any default value/error handling as needed
    })).subscribe({
      next: data => {
        this.isLoading = false;
        this.userdata = data;
      },
      error: error => {
        console.log(error);
      }
    });
  }
  getDestroy$() {
    return this.destroy$;
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static #_ = this.ɵfac = function NavbarComponent_Factory(t) {
    return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NavbarComponent,
    selectors: [["app-navbar"]],
    decls: 3,
    vars: 2,
    consts: [["class", "bg-gray-500 p-4 border-b border-white border-opacity-25 loading-skeleton", 4, "ngIf", "ngIfElse"], ["dataContent", ""], [1, "bg-gray-500", "p-4", "border-b", "border-white", "border-opacity-25", "loading-skeleton"], [1, "container", "mx-auto", "flex", "items-center", "justify-between"], [1, "text-white", "text-xl", "font-semibold", "logo-skeleton"], [1, "flex", "items-center"], [1, "px-2", "py-1", "border", "border-gray-600", "rounded-md", "focus:outline-none", "focus:border-blue-400", "search-skeleton"], [1, "ml-2", "bg-gray-700", "text-white", "px-4", "py-1", "rounded-md", "search-button-skeleton"], [1, "flex", "items-center", "lg:ml-2"], [1, "w-8", "h-8", "rounded-full", "avatar-skeleton"], [1, "ml-2", "lg:block", "hidden"], [1, "text-white", "font-semibold", "name-skeleton"], [1, "bg-gray-800", "p-4", "border-b", "border-white", "border-opacity-25"], ["href", "#", 1, "text-white", "text-xl", "font-semibold"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg", 1, "w-6", "h-6", "inline", "mr-2", "md:inline", "hidden"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6h16M4 12h16m-7 6h7"], ["type", "text", "placeholder", "Type Github Username", 1, "px-2", "py-1", "border", "border-gray-600", "rounded-md", "focus:outline-none", "focus:border-blue-400", 3, "ngModel", "ngModelChange"], [1, "ml-2", "bg-gray-700", "text-white", "px-4", "py-1", "rounded-md", 3, "click"], ["alt", "User Avatar", "class", "w-8 h-8 rounded-full ", 3, "src", 4, "ngIf"], ["class", "w-8 h-8 rounded-full avatar-skeleton2", 4, "ngIf"], ["class", "ml-2 lg:block hidden", 4, "ngIf"], ["alt", "User Avatar", 1, "w-8", "h-8", "rounded-full", 3, "src"], [1, "w-8", "h-8", "rounded-full", "avatar-skeleton2"], [1, "text-white", "font-semibold"], [1, "text-white", "font-semibold", "name-skeleton2"]],
    template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NavbarComponent_nav_0_Template, 10, 0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NavbarComponent_ng_template_1_Template, 15, 5, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading)("ngIfElse", _r1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel],
    styles: ["[_nghost-%COMP%] {\n  font-family: -webkit-body;\n}\n\n.loading-skeleton[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_loadingAnimation 1.5s infinite;\n}\n\n.logo-skeleton[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 24px;\n  background-color: #333;\n  border-radius: 4px;\n}\n\n.search-skeleton[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 24px;\n  background-color: #333;\n  border-radius: 4px;\n}\n\n.search-button-skeleton[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 24px;\n  background-color: #333;\n  border-radius: 4px;\n}\n\n.avatar-skeleton[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  background-color: #333;\n  border-radius: 50%;\n}\n\n.avatar-skeleton2[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  background-color: #1F2937;\n  border-radius: 50%;\n}\n\n.name-skeleton[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 16px;\n  background-color: #333;\n  border-radius: 4px;\n}\n\n.name-skeleton2[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 16px;\n  background-color: #1F2937;\n  border-radius: 4px;\n}\n\n@keyframes _ngcontent-%COMP%_loadingAnimation {\n  0% {\n    opacity: 0.7;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 0.7;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vLi4vRnJvbnQlMjBFbmQlMjBXZWJzaXRlL0Jlc3QlMjBDb2RlJTIwVGVtcGxldGUlMjBpJTIwd3JvdGUvQW5ndWxhciUyMGxlYXJuaW5nJTIwY2xhc3MvQXNzaW5nbWVudCUyMEFuZCUyMFByb2plY3RzL2Z5bGUtaW50ZXJuc2hpcC1jaGFsbGVuZ2UtMjMvc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0kseUNBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUVBLGtCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURBRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0dKOztBRERFO0VBQ0U7SUFDSSxZQUFBO0VDSU47RURGRTtJQUNJLFlBQUE7RUNJTjtFREZFO0lBQ0ksWUFBQTtFQ0lOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICAgIGZvbnQtZmFtaWx5OiAtd2Via2l0LWJvZHk7XHJcbn1cclxuXHJcbi5sb2FkaW5nLXNrZWxldG9uIHtcclxuICAgIGFuaW1hdGlvbjogbG9hZGluZ0FuaW1hdGlvbiAxLjVzIGluZmluaXRlO1xyXG4gIH1cclxuICBcclxuICAubG9nby1za2VsZXRvbiB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICBcclxuICAuc2VhcmNoLXNrZWxldG9uIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2gtYnV0dG9uLXNrZWxldG9uIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcbiAgXHJcbiAgLmF2YXRhci1za2VsZXRvbiB7XHJcbiAgICB3aWR0aDogMzJweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG4gIC5hdmF0YXItc2tlbGV0b24ye1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUYyOTM3O1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbiAgLm5hbWUtc2tlbGV0b24ge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcbiAgLm5hbWUtc2tlbGV0b24ye1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFGMjkzNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcbiAgQGtleWZyYW1lcyBsb2FkaW5nQW5pbWF0aW9uIHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgIH1cclxuICB9IiwiOmhvc3Qge1xuICBmb250LWZhbWlseTogLXdlYmtpdC1ib2R5O1xufVxuXG4ubG9hZGluZy1za2VsZXRvbiB7XG4gIGFuaW1hdGlvbjogbG9hZGluZ0FuaW1hdGlvbiAxLjVzIGluZmluaXRlO1xufVxuXG4ubG9nby1za2VsZXRvbiB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5zZWFyY2gtc2tlbGV0b24ge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uc2VhcmNoLWJ1dHRvbi1za2VsZXRvbiB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmF2YXRhci1za2VsZXRvbiB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmF2YXRhci1za2VsZXRvbjIge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUYyOTM3O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5uYW1lLXNrZWxldG9uIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLm5hbWUtc2tlbGV0b24yIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxRjI5Mzc7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuQGtleWZyYW1lcyBsb2FkaW5nQW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 7395:
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileComponent: () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../navbar/navbar.component */ 953);
/* harmony import */ var _user_bio_user_bio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-bio/user-bio.component */ 4513);
/* harmony import */ var _user_repos_user_repos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-repos/user-repos.component */ 6964);




class ProfileComponent {
  static #_ = this.ɵfac = function ProfileComponent_Factory(t) {
    return new (t || ProfileComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ProfileComponent,
    selectors: [["app-profile"]],
    decls: 3,
    vars: 0,
    template: function ProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-navbar")(1, "app-user-bio")(2, "app-user-repos");
      }
    },
    dependencies: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _user_bio_user_bio_component__WEBPACK_IMPORTED_MODULE_1__.UserBioComponent, _user_repos_user_repos_component__WEBPACK_IMPORTED_MODULE_2__.UserReposComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1047:
/*!***************************************************************************!*\
  !*** ./src/app/components/skeleton-loading/skeleton-loading.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SkeletonLoadingComponent: () => (/* binding */ SkeletonLoadingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);


function SkeletonLoadingComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 26)(2, "div", 27)(3, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 29)(6, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
const _c0 = function () {
  return [];
};
class SkeletonLoadingComponent {
  static #_ = this.ɵfac = function SkeletonLoadingComponent_Factory(t) {
    return new (t || SkeletonLoadingComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SkeletonLoadingComponent,
    selectors: [["app-skeleton-loading"]],
    decls: 25,
    vars: 2,
    consts: [[1, "bg-gray-500", "p-4", "border-b", "border-white", "border-opacity-25", "loading-skeleton"], [1, "container", "mx-auto", "flex", "items-center", "justify-between"], [1, "text-white", "text-xl", "font-semibold", "logo-skeleton"], [1, "flex", "items-center"], [1, "px-2", "py-1", "border", "border-gray-600", "rounded-md", "focus:outline-none", "focus:border-blue-400", "search-skeleton"], [1, "ml-2", "bg-gray-700", "text-white", "px-4", "py-1", "rounded-md", "search-button-skeleton"], [1, "flex", "items-center", "lg:ml-2"], [1, "w-8", "h-8", "rounded-full", "avatar-skeleton"], [1, "ml-2", "lg:block", "hidden"], [1, "text-white", "font-semibold", "name-skeleton"], [1, "bg-gray-400", "shadow-md", "border-blue-400", "border-b", "border-white", "border-opacity-25", "loading-skeleton"], [1, "container", "mx-auto", "py-8"], [1, "flex", "flex-col", "ml-5", "gap-5", "items-center", "sm:flex-col", "md:flex-row", "lg:flex-row"], [1, "flex-shrink-0", "avatar-skeleton"], [1, "ml-4", "gap-5"], [1, "text-xl", "font-semibold", "text-white", "name-skeleton"], [1, "text-gray-500", "username-skeleton"], [1, "text-gray-300", "mt-2", "bio-skeleton"], [1, "text-gray-300", "mt-1", "location-skeleton"], [1, "text-blue-300", "hover:underline", "mt-1", "twitter-link-skeleton"], [1, "text-blue-300", "hover:underline", "mt-1", "portfolio-link-skeleton"], [1, "bg-gray-600", "shadow-md", "loading-skeleton"], [1, "container", "mx-auto", "p-8"], [1, "grid", "gap-6", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3"], ["class", "bg-gray-800 p-6 rounded-md shadow-md border relative", 4, "ngFor", "ngForOf"], [1, "bg-gray-800", "p-6", "rounded-md", "shadow-md", "border", "relative"], [1, "text-xl", "font-semibold", "text-blue-500", "mb-4", "text-capital", "name-skeleton"], [1, "absolute", "bottom-0", "right-0", "border", "rounded", "p-1", "mr-2", "mb-2", "bg-gray-500", "text-white", "private-skeleton"], [1, "text-white", "mb-4", "description-skeleton"], [1, "text-gray-500", "language-skeleton"], [1, "text-white", "ml-2", "language-value-skeleton"]],
    template: function SkeletonLoadingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10)(11, "div", 11)(12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 15)(16, "p", 16)(17, "p", 17)(18, "p", 18)(19, "div", 19)(20, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 21)(22, "div", 22)(23, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SkeletonLoadingComponent_div_24_Template, 7, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0).constructor(9));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
    styles: ["\n\n.loading-skeleton[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_loadingAnimation 1.5s infinite;\n}\n\n.logo-skeleton[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 24px;\n  background-color: #333;\n  border-radius: 4px;\n}\n\n.search-skeleton[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 24px;\n  background-color: #333;\n  border-radius: 4px;\n}\n\n.search-button-skeleton[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 24px;\n  background-color: #333;\n  border-radius: 4px;\n}\n\n.avatar-skeleton[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  background-color: #333;\n  border-radius: 50%;\n}\n\n.name-skeleton[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 16px;\n  background-color: #333;\n  border-radius: 4px;\n}\n\n@keyframes _ngcontent-%COMP%_loadingAnimation {\n  0% {\n    opacity: 0.7;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 0.7;\n  }\n}\n\n\n.loading-skeleton[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_loadingAnimation 1.5s infinite;\n}\n\n.avatar-skeleton[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background-color: #333;\n  border-radius: 50%;\n}\n\n.name-skeleton[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 24px;\n  background-color: #333;\n  border-radius: 4px;\n}\n\n.username-skeleton[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 16px;\n  background-color: #333;\n  border-radius: 4px;\n}\n\n.bio-skeleton[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 16px;\n  background-color: #333;\n  border-radius: 4px;\n}\n\n.location-skeleton[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 16px;\n  background-color: #333;\n  border-radius: 4px;\n}\n\n.twitter-link-skeleton[_ngcontent-%COMP%], .portfolio-link-skeleton[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 16px;\n  background-color: #333;\n  border-radius: 4px;\n}\n\n@keyframes _ngcontent-%COMP%_loadingAnimation {\n  0% {\n    opacity: 0.7;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 0.7;\n  }\n}\n\n\n.loading-skeleton[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_loadingAnimation 1.5s infinite;\n}\n\n.name-skeleton[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 24px;\n  background-color: #333;\n  border-radius: 4px;\n}\n\n.private-skeleton[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 16px;\n  background-color: #333;\n  border-radius: 4px;\n}\n\n.description-skeleton[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 16px;\n  background-color: #333;\n  border-radius: 4px;\n}\n\n.language-skeleton[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 16px;\n  background-color: #333;\n  border-radius: 4px;\n}\n\n.language-value-skeleton[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 16px;\n  background-color: #333;\n  border-radius: 4px;\n}\n\n@keyframes _ngcontent-%COMP%_loadingAnimation {\n  0% {\n    opacity: 0.7;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 0.7;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9za2VsZXRvbi1sb2FkaW5nL3NrZWxldG9uLWxvYWRpbmcuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi8uLi8uLi9Gcm9udCUyMEVuZCUyMFdlYnNpdGUvQmVzdCUyMENvZGUlMjBUZW1wbGV0ZSUyMGklMjB3cm90ZS9Bbmd1bGFyJTIwbGVhcm5pbmclMjBjbGFzcy9Bc3NpbmdtZW50JTIwQW5kJTIwUHJvamVjdHMvZnlsZS1pbnRlcm5zaGlwLWNoYWxsZW5nZS0yMy9zcmMvYXBwL2NvbXBvbmVudHMvc2tlbGV0b24tbG9hZGluZy9za2VsZXRvbi1sb2FkaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVDQUFBO0FBRUE7RUFDRSx5Q0FBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURHQTtFQUNFO0lBQ0ksWUFBQTtFQ0FKO0VERUE7SUFDSSxZQUFBO0VDQUo7RURFQTtJQUNJLFlBQUE7RUNBSjtBQUNGO0FESUEsZ0RBQUE7QUFFQTtFQUNFLHlDQUFBO0FDSEY7O0FETUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNIRjs7QURNQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0hGOztBRE1BO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDSEY7O0FETUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNIRjs7QURNQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0hGOztBRE1BOztFQUVFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0hGOztBRE1BO0VBQ0U7SUFDSSxZQUFBO0VDSEo7RURLQTtJQUNJLFlBQUE7RUNISjtFREtBO0lBQ0ksWUFBQTtFQ0hKO0FBQ0Y7QURPQSxtREFBQTtBQUVBO0VBQ0UseUNBQUE7QUNORjs7QURTQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ05GOztBRFNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDTkY7O0FEU0E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNORjs7QURTQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ05GOztBRFNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDTkY7O0FEU0E7RUFDRTtJQUNJLFlBQUE7RUNOSjtFRFFBO0lBQ0ksWUFBQTtFQ05KO0VEUUE7SUFDSSxZQUFBO0VDTko7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIG5hdi1sb2FkaW5nLXNrZWxldG9uLmNvbXBvbmVudC5jc3MgKi9cclxuXHJcbi5sb2FkaW5nLXNrZWxldG9uIHtcclxuICBhbmltYXRpb246IGxvYWRpbmdBbmltYXRpb24gMS41cyBpbmZpbml0ZTtcclxufVxyXG5cclxuLmxvZ28tc2tlbGV0b24ge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtc2tlbGV0b24ge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtYnV0dG9uLXNrZWxldG9uIHtcclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5hdmF0YXItc2tlbGV0b24ge1xyXG4gIHdpZHRoOiAzMnB4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLm5hbWUtc2tlbGV0b24ge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbG9hZGluZ0FuaW1hdGlvbiB7XHJcbiAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNztcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKiB1c2VyLXByb2ZpbGUtbG9hZGluZy1za2VsZXRvbi5jb21wb25lbnQuY3NzICovXHJcblxyXG4ubG9hZGluZy1za2VsZXRvbiB7XHJcbiAgYW5pbWF0aW9uOiBsb2FkaW5nQW5pbWF0aW9uIDEuNXMgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5hdmF0YXItc2tlbGV0b24ge1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLm5hbWUtc2tlbGV0b24ge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi51c2VybmFtZS1za2VsZXRvbiB7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmJpby1za2VsZXRvbiB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmxvY2F0aW9uLXNrZWxldG9uIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4udHdpdHRlci1saW5rLXNrZWxldG9uLFxyXG4ucG9ydGZvbGlvLWxpbmstc2tlbGV0b24ge1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbG9hZGluZ0FuaW1hdGlvbiB7XHJcbiAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNztcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKiByZXBvc2l0b3J5LWxpc3QtbG9hZGluZy1za2VsZXRvbi5jb21wb25lbnQuY3NzICovXHJcblxyXG4ubG9hZGluZy1za2VsZXRvbiB7XHJcbiAgYW5pbWF0aW9uOiBsb2FkaW5nQW5pbWF0aW9uIDEuNXMgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5uYW1lLXNrZWxldG9uIHtcclxuICB3aWR0aDogODAlO1xyXG4gIGhlaWdodDogMjRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLnByaXZhdGUtc2tlbGV0b24ge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uLXNrZWxldG9uIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIGhlaWdodDogMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmxhbmd1YWdlLXNrZWxldG9uIHtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5sYW5ndWFnZS12YWx1ZS1za2VsZXRvbiB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGxvYWRpbmdBbmltYXRpb24ge1xyXG4gIDAlIHtcclxuICAgICAgb3BhY2l0eTogMC43O1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgfVxyXG59XHJcbiIsIi8qIG5hdi1sb2FkaW5nLXNrZWxldG9uLmNvbXBvbmVudC5jc3MgKi9cbi5sb2FkaW5nLXNrZWxldG9uIHtcbiAgYW5pbWF0aW9uOiBsb2FkaW5nQW5pbWF0aW9uIDEuNXMgaW5maW5pdGU7XG59XG5cbi5sb2dvLXNrZWxldG9uIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnNlYXJjaC1za2VsZXRvbiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5zZWFyY2gtYnV0dG9uLXNrZWxldG9uIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogMjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uYXZhdGFyLXNrZWxldG9uIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ubmFtZS1za2VsZXRvbiB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbkBrZXlmcmFtZXMgbG9hZGluZ0FuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG59XG4vKiB1c2VyLXByb2ZpbGUtbG9hZGluZy1za2VsZXRvbi5jb21wb25lbnQuY3NzICovXG4ubG9hZGluZy1za2VsZXRvbiB7XG4gIGFuaW1hdGlvbjogbG9hZGluZ0FuaW1hdGlvbiAxLjVzIGluZmluaXRlO1xufVxuXG4uYXZhdGFyLXNrZWxldG9uIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ubmFtZS1za2VsZXRvbiB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi51c2VybmFtZS1za2VsZXRvbiB7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5iaW8tc2tlbGV0b24ge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4ubG9jYXRpb24tc2tlbGV0b24ge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4udHdpdHRlci1saW5rLXNrZWxldG9uLFxuLnBvcnRmb2xpby1saW5rLXNrZWxldG9uIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuQGtleWZyYW1lcyBsb2FkaW5nQW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cbn1cbi8qIHJlcG9zaXRvcnktbGlzdC1sb2FkaW5nLXNrZWxldG9uLmNvbXBvbmVudC5jc3MgKi9cbi5sb2FkaW5nLXNrZWxldG9uIHtcbiAgYW5pbWF0aW9uOiBsb2FkaW5nQW5pbWF0aW9uIDEuNXMgaW5maW5pdGU7XG59XG5cbi5uYW1lLXNrZWxldG9uIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAyNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5wcml2YXRlLXNrZWxldG9uIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uZGVzY3JpcHRpb24tc2tlbGV0b24ge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmxhbmd1YWdlLXNrZWxldG9uIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4ubGFuZ3VhZ2UtdmFsdWUtc2tlbGV0b24ge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbkBrZXlmcmFtZXMgbG9hZGluZ0FuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4513:
/*!***********************************************************!*\
  !*** ./src/app/components/user-bio/user-bio.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserBioComponent: () => (/* binding */ UserBioComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/data.service */ 2848);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);



function UserBioComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 7)(6, "p", 8)(7, "p", 9)(8, "p", 10)(9, "div", 11)(10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
}
function UserBioComponent_ng_template_1_div_2_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const userData_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](userData_r4.bio);
  }
}
function UserBioComponent_ng_template_1_div_2_a_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Twitter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const userData_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "https://twitter.com/", userData_r4.twitter_username, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function UserBioComponent_ng_template_1_div_2_a_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Github ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const userData_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", userData_r4.html_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function UserBioComponent_ng_template_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4)(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6)(4, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, UserBioComponent_ng_template_1_div_2_p_8_Template, 2, 1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "svg", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "path", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, UserBioComponent_ng_template_1_div_2_a_13_Template, 4, 1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, UserBioComponent_ng_template_1_div_2_a_14_Template, 4, 1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const userData_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", userData_r4.avatar_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", userData_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](userData_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](userData_r4.login);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", userData_r4.bio);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", userData_r4.location, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", userData_r4.twitter_username);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", userData_r4.html_url);
  }
}
function UserBioComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserBioComponent_ng_template_1_div_2_Template, 15, 8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, ctx_r2.userData$));
  }
}
class UserBioComponent {
  constructor(dataService) {
    this.dataService = dataService;
    this.userData$ = this.dataService.userData$;
    this.isLoading = true;
  }
  ngOnInit() {
    this.dataService.loading$.subscribe(isLoading => {
      this.isLoading = isLoading;
    });
  }
  static #_ = this.ɵfac = function UserBioComponent_Factory(t) {
    return new (t || UserBioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: UserBioComponent,
    selectors: [["app-user-bio"]],
    decls: 3,
    vars: 2,
    consts: [["class", "bg-gray-400 shadow-md border-blue-400 border-b border-white border-opacity-25 loading-skeleton", 4, "ngIf", "ngIfElse"], ["dataContent", ""], [1, "bg-gray-400", "shadow-md", "border-blue-400", "border-b", "border-white", "border-opacity-25", "loading-skeleton"], [1, "container", "mx-auto", "py-8"], [1, "flex", "flex-col", "ml-5", "gap-5", "items-center", "sm:flex-col", "md:flex-row", "lg:flex-row"], [1, "flex-shrink-0", "avatar-skeleton"], [1, "ml-4", "gap-5"], [1, "text-xl", "font-semibold", "text-white", "name-skeleton", "mb-1"], [1, "text-gray-500", "username-skeleton"], [1, "text-gray-300", "mt-2", "bio-skeleton"], [1, "text-gray-300", "mt-1", "location-skeleton"], [1, "text-blue-300", "hover:underline", "mt-1", "twitter-link-skeleton"], [1, "text-blue-300", "hover:underline", "mt-1", "portfolio-link-skeleton"], [1, "bg-gray-800", "shadow-md", "border-blue-400", "border-b", "border-white", "border-opacity-25"], ["class", "flex flex-col  ml-5 gap-5 items-center sm:flex-col md:flex-row lg:flex-row", 4, "ngIf"], [1, "flex-shrink-0"], [1, "w-60", "h-60", "rounded-full", "img", 3, "src", "alt"], [1, "text-xl", "font-semibold", "text-white", "name"], [1, "text-gray-500"], ["class", "text-gray-300 mt-2 bio", 4, "ngIf"], [1, "text-gray-300", "mt-1"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg", 1, "w-4", "h-4", "inline", "mr-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M7 11.6V12a5 5 0 0 0 10 0v-.4M12 2C6.48 2 2 6.48 2 12c0 5.38 3.04 9.97 7.45 12 .29.11.6.2.95.27.54.11 1.11.18 1.7.18s1.16-.07 1.7-.18c.35-.07.66-.16.95-.27C18.96 21.97 22 17.38 22 12c0-5.38-3.04-9.97-7.45-12a9.32 9.32 0 0 0-1.7-.18c-.59 0-1.16.07-1.7.18a15.48 15.48 0 0 0-.95.27zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"], ["class", "text-blue-300 hover:underline mt-2 mr-2", 3, "href", 4, "ngIf"], ["class", "text-blue-300 hover:underline mt-1", 3, "href", 4, "ngIf"], [1, "text-gray-300", "mt-2", "bio"], [1, "text-blue-300", "hover:underline", "mt-2", "mr-2", 3, "href"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-4", "h-4", "inline", "mr-1"], ["d", "M23 2C22.042 2.675 20.958 3.174 19.818 3.463C19.235 2.811 18.363 2.417 17.424 2.417C16.135 2.417 15 3.557 15 4.843C15 5.216 15.048 5.578 15.132 5.927C11.807 5.764 8.644 4.065 6.769 1.217C6.4 0.546 5.601 0.546 5.232 1.217C3.356 4.065 4.365 7.846 7.335 9.378C6.655 9.541 5.947 9.614 5.223 9.571C5.655 11.215 6.915 12.524 8.481 12.842C8.136 12.94 7.776 12.993 7.409 12.993C7.173 12.993 6.942 12.967 6.716 12.918C7.142 14.479 8.504 15.552 10.068 15.585C8.618 16.78 6.813 17.469 4.932 17.469C4.623 17.469 4.319 17.449 4.018 17.409C5.599 18.596 7.499 19.27 9.501 19.27C17.423 19.27 21.502 12.756 21.502 6.245C21.502 6.053 21.493 5.862 21.475 5.672C22.442 4.675 23 3.387 23 2Z"], [1, "text-blue-300", "hover:underline", "mt-1", 3, "href"], ["height", "32", "viewBox", "0 0 16 16", "version", "1.1", "width", "32", "aria-hidden", "true", 1, "w-4", "h-4", "inline", "mr-1", "octicon", "octicon-mark-github"], ["fill-rule", "evenodd", "d", "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"]],
    template: function UserBioComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, UserBioComponent_div_0_Template, 11, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserBioComponent_ng_template_1_Template, 4, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading)("ngIfElse", _r1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
    styles: [".loading-skeleton[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_loadingAnimation 1.5s infinite;\n}\n\n.avatar-skeleton[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 250px;\n  background-color: #333;\n  border-radius: 50%;\n}\n\n.name-skeleton[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 24px;\n  background-color: #333;\n  border-radius: 4px;\n}\n\n.username-skeleton[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 16px;\n  background-color: #333;\n  border-radius: 4px;\n}\n\n.bio-skeleton[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 16px;\n  background-color: #333;\n  border-radius: 4px;\n}\n\n.location-skeleton[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 16px;\n  background-color: #333;\n  border-radius: 4px;\n}\n\n.twitter-link-skeleton[_ngcontent-%COMP%], .portfolio-link-skeleton[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 16px;\n  background-color: #333;\n  border-radius: 4px;\n}\n\n.inline[_ngcontent-%COMP%] {\n  display: inline;\n}\n\n@keyframes _ngcontent-%COMP%_loadingAnimation {\n  0% {\n    opacity: 0.7;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 0.7;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy91c2VyLWJpby91c2VyLWJpby5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uLy4uL0Zyb250JTIwRW5kJTIwV2Vic2l0ZS9CZXN0JTIwQ29kZSUyMFRlbXBsZXRlJTIwaSUyMHdyb3RlL0FuZ3VsYXIlMjBsZWFybmluZyUyMGNsYXNzL0Fzc2luZ21lbnQlMjBBbmQlMjBQcm9qZWN0cy9meWxlLWludGVybnNoaXAtY2hhbGxlbmdlLTIzL3NyYy9hcHAvY29tcG9uZW50cy91c2VyLWJpby91c2VyLWJpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHlDQUFBO0FDQUo7O0FER0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdFOztFQUVFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREVFO0VBQ0UsZUFBQTtBQ0NKOztBRENFO0VBQ0U7SUFDSSxZQUFBO0VDRU47RURBRTtJQUNJLFlBQUE7RUNFTjtFREFFO0lBQ0ksWUFBQTtFQ0VOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmxvYWRpbmctc2tlbGV0b24ge1xyXG4gICAgYW5pbWF0aW9uOiBsb2FkaW5nQW5pbWF0aW9uIDEuNXMgaW5maW5pdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5hdmF0YXItc2tlbGV0b24ge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYW1lLXNrZWxldG9uIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC51c2VybmFtZS1za2VsZXRvbiB7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICBcclxuICAuYmlvLXNrZWxldG9uIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2NhdGlvbi1za2VsZXRvbiB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICBcclxuICAudHdpdHRlci1saW5rLXNrZWxldG9uLFxyXG4gIC5wb3J0Zm9saW8tbGluay1za2VsZXRvbiB7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICAuaW5saW5lIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG4gIEBrZXlmcmFtZXMgbG9hZGluZ0FuaW1hdGlvbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICB9XHJcbiAgfSIsIi5sb2FkaW5nLXNrZWxldG9uIHtcbiAgYW5pbWF0aW9uOiBsb2FkaW5nQW5pbWF0aW9uIDEuNXMgaW5maW5pdGU7XG59XG5cbi5hdmF0YXItc2tlbGV0b24ge1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLm5hbWUtc2tlbGV0b24ge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4udXNlcm5hbWUtc2tlbGV0b24ge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uYmlvLXNrZWxldG9uIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmxvY2F0aW9uLXNrZWxldG9uIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnR3aXR0ZXItbGluay1za2VsZXRvbixcbi5wb3J0Zm9saW8tbGluay1za2VsZXRvbiB7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5pbmxpbmUge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbkBrZXlmcmFtZXMgbG9hZGluZ0FuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6964:
/*!***************************************************************!*\
  !*** ./src/app/components/user-repos/user-repos.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserReposComponent: () => (/* binding */ UserReposComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/data.service */ 2848);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ 1060);





function UserReposComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 7)(2, "div", 8)(3, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 11)(6, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
const _c0 = function () {
  return [];
};
function UserReposComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UserReposComponent_div_0_div_3_Template, 7, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0).constructor(9));
  }
}
function UserReposComponent_ng_template_1_div_2_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Public ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function UserReposComponent_ng_template_1_div_2_div_2_div_6_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const topic_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", topic_r13, " ");
  }
}
function UserReposComponent_ng_template_1_div_2_div_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserReposComponent_ng_template_1_div_2_div_2_div_6_li_2_Template, 2, 1, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const repo_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", repo_r9.topics.slice(0, 5));
  }
}
function UserReposComponent_ng_template_1_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UserReposComponent_ng_template_1_div_2_div_2_div_3_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, UserReposComponent_ng_template_1_div_2_div_2_div_6_Template, 3, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const repo_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](repo_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !repo_r9.private);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](repo_r9.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", repo_r9.topics && repo_r9.topics.length > 0);
  }
}
const _c1 = function (a0, a1) {
  return {
    itemsPerPage: a0,
    currentPage: a1
  };
};
function UserReposComponent_ng_template_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserReposComponent_ng_template_1_div_2_div_2_Template, 7, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const reposData_r7 = ctx.ngIf;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 1, reposData_r7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c1, ctx_r5.pageSize, ctx_r5.currentPageNumber)));
  }
}
function UserReposComponent_ng_template_1_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r15, " ");
  }
}
function UserReposComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserReposComponent_ng_template_1_div_2_Template, 4, 7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 15)(5, "div", 16)(6, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Items Per Page:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserReposComponent_ng_template_1_Template_select_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.pageSize = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, UserReposComponent_ng_template_1_option_9_Template, 2, 2, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "pagination-controls", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function UserReposComponent_ng_template_1_Template_pagination_controls_pageChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r18.pageChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, ctx_r2.reposData$));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.pageSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.perPageOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("autoHide", true);
  }
}
class UserReposComponent {
  constructor(dataService) {
    this.dataService = dataService;
    this.reposData$ = this.dataService.reposData$;
    this.currentPageNumber = 1;
    this.pageSize = 10;
    this.perPageOptions = [10, 20, 50, 100];
    this.isLoading = true;
  }
  ngOnInit() {
    this.dataService.loading$.subscribe(isLoading => {
      this.isLoading = isLoading;
    });
  }
  pageChanged(event) {
    this.currentPageNumber = event;
  }
  static #_ = this.ɵfac = function UserReposComponent_Factory(t) {
    return new (t || UserReposComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: UserReposComponent,
    selectors: [["app-user-repos"]],
    decls: 3,
    vars: 2,
    consts: [["class", "bg-gray-600 shadow-md loading-skeleton", 4, "ngIf", "ngIfElse"], ["dataContent", ""], [1, "bg-gray-600", "shadow-md", "loading-skeleton"], [1, "container", "mx-auto", "p-8"], [1, "grid", "gap-6", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3"], ["class", "bg-gray-800 p-6 rounded-md shadow-md border relative", 4, "ngFor", "ngForOf"], [1, "bg-gray-800", "p-6", "rounded-md", "shadow-md", "border", "relative"], [1, "text-xl", "font-semibold", "text-blue-500", "mb-4", "text-capital", "name-skeleton"], [1, "absolute", "bottom-0", "right-0", "border", "rounded", "p-1", "mr-2", "mb-2", "bg-gray-500", "text-white", "private-skeleton"], [1, "text-white", "mb-4", "description-skeleton"], [1, "flex", "items-center"], [1, "text-gray-500", "language-skeleton"], [1, "text-white", "ml-2", "language-value-skeleton"], [1, "bg-gray-800", "shadow-md"], [4, "ngIf"], [1, "flex", "flex-col", "md:flex-row", "md:flex-wrap", "items-center", "justify-evenly", "my-8"], [1, "flex", "ml-4", "order-2", "md:order-none", "md:ml-0"], ["for", "pageSize", 1, "text-gray-200", "mr-2"], ["name", "pageSize", "id", "pageSize", 1, "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "bg-gray-800", "flex", "item-center", "justify-center", "order-1", "md:order-none", 3, "autoHide", "pageChange"], [1, "text-xl", "font-semibold", "text-blue-500", "mb-4", "text-capital"], ["class", "absolute top-0 right-0 border rounded p-1 mr-2 mt-2 bg-gray-500 text-white", 4, "ngIf"], [1, "text-white", "mb-4"], [1, "absolute", "top-0", "right-0", "border", "rounded", "p-1", "mr-2", "mt-2", "bg-gray-500", "text-white"], ["class", "text-md mr-2 bg-blue-500 p-2 mt-2 inline-block rounded-md text-white", 4, "ngFor", "ngForOf"], [1, "text-md", "mr-2", "bg-blue-500", "p-2", "mt-2", "inline-block", "rounded-md", "text-white"], [3, "value"]],
    template: function UserReposComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, UserReposComponent_div_0_Template, 4, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserReposComponent_ng_template_1_Template, 11, 6, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading)("ngIfElse", _r1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, ngx_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginationControlsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginatePipe],
    styles: [".loading-skeleton[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_loadingAnimation 1.5s infinite;\n}\n\n.name-skeleton[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 24px;\n  background-color: #333;\n  border-radius: 4px;\n}\n\n.private-skeleton[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 16px;\n  background-color: #333;\n  border-radius: 4px;\n}\n\n.description-skeleton[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 16px;\n  background-color: #333;\n  border-radius: 4px;\n}\n\n.language-skeleton[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 16px;\n  background-color: #333;\n  border-radius: 4px;\n}\n\n.language-value-skeleton[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 16px;\n  background-color: #333;\n  border-radius: 4px;\n}\n\n@keyframes _ngcontent-%COMP%_loadingAnimation {\n  0% {\n    opacity: 0.7;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 0.7;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy91c2VyLXJlcG9zL3VzZXItcmVwb3MuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi8uLi8uLi9Gcm9udCUyMEVuZCUyMFdlYnNpdGUvQmVzdCUyMENvZGUlMjBUZW1wbGV0ZSUyMGklMjB3cm90ZS9Bbmd1bGFyJTIwbGVhcm5pbmclMjBjbGFzcy9Bc3NpbmdtZW50JTIwQW5kJTIwUHJvamVjdHMvZnlsZS1pbnRlcm5zaGlwLWNoYWxsZW5nZS0yMy9zcmMvYXBwL2NvbXBvbmVudHMvdXNlci1yZXBvcy91c2VyLXJlcG9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kseUNBQUE7QUNBSjs7QURHRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0U7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0U7RUFDRTtJQUNJLFlBQUE7RUNBTjtFREVFO0lBQ0ksWUFBQTtFQ0FOO0VERUU7SUFDSSxZQUFBO0VDQU47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubG9hZGluZy1za2VsZXRvbiB7XHJcbiAgICBhbmltYXRpb246IGxvYWRpbmdBbmltYXRpb24gMS41cyBpbmZpbml0ZTtcclxuICB9XHJcbiAgXHJcbiAgLm5hbWUtc2tlbGV0b24ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcml2YXRlLXNrZWxldG9uIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcbiAgXHJcbiAgLmRlc2NyaXB0aW9uLXNrZWxldG9uIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICBcclxuICAubGFuZ3VhZ2Utc2tlbGV0b24ge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICBcclxuICAubGFuZ3VhZ2UtdmFsdWUtc2tlbGV0b24ge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGxvYWRpbmdBbmltYXRpb24ge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgfVxyXG4gIH1cclxuICAiLCIubG9hZGluZy1za2VsZXRvbiB7XG4gIGFuaW1hdGlvbjogbG9hZGluZ0FuaW1hdGlvbiAxLjVzIGluZmluaXRlO1xufVxuXG4ubmFtZS1za2VsZXRvbiB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4ucHJpdmF0ZS1za2VsZXRvbiB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmRlc2NyaXB0aW9uLXNrZWxldG9uIHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5sYW5ndWFnZS1za2VsZXRvbiB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmxhbmd1YWdlLXZhbHVlLXNrZWxldG9uIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5Aa2V5ZnJhbWVzIGxvYWRpbmdBbmltYXRpb24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 9045:
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiService: () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);


class ApiService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.apiUrl = 'https://api.github.com';
  }
  getUser(githubUsername) {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}`);
  }
  getUserRepos(userReposLink) {
    const reposUrl = userReposLink;
    return this.httpClient.get(reposUrl);
  }
  static #_ = this.ɵfac = function ApiService_Factory(t) {
    return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ApiService,
    factory: ApiService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2848:
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataService: () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2607);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 7474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 9045);



class DataService {
  constructor(apiService) {
    this.apiService = apiService;
    this.userDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.userData$ = this.userDataSubject.asObservable();
    this.reposDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    this.reposData$ = this.reposDataSubject.asObservable();
    this.usernameSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
    this.username$ = this.usernameSubject.asObservable();
    this.loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.loading$ = this.loadingSubject.asObservable();
  }
  updateLoadingState(isLoading) {
    this.loadingSubject.next(isLoading);
  }
  fetchUserData(githubUsername) {
    this.resetState();
    this.updateLoadingState(true);
    this.apiService.getUser(githubUsername).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(userData => {
      this.userDataSubject.next(userData);
      console.log(userData);
      const reposUrl = userData.repos_url;
      return this.apiService.getUserRepos(reposUrl);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error fetching user data:', error);
      throw error;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.finalize)(() => {
      this.updateLoadingState(false);
    })).subscribe({
      next: userRepos => {
        this.reposDataSubject.next(userRepos);
        console.log('User repositories:', userRepos);
      },
      error: error => {
        console.error('Error fetching user data:', error);
      }
    });
  }
  setUsername(username) {
    this.usernameSubject.next(username);
    this.fetchUserData(username);
  }
  resetState() {
    // Reset the user data, repositories, and loading state
    this.userDataSubject.next(null);
    this.reposDataSubject.next([]);
    this.loadingSubject.next(false);
  }
  static #_ = this.ɵfac = function DataService_Factory(t) {
    return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: DataService,
    factory: DataService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map