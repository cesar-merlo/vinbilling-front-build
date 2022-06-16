(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+qdo":
    /*!*************************************************!*\
      !*** ./src/app/core/layouts/layouts.service.ts ***!
      \*************************************************/

    /*! exports provided: LayoutsService */

    /***/
    function qdo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutsService", function () {
        return LayoutsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_app_layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/app-layouts */
      "XwLw");

      var LayoutsService = /*#__PURE__*/function () {
        function LayoutsService() {
          _classCallCheck(this, LayoutsService);

          this.previousLayout = src_app_app_layouts__WEBPACK_IMPORTED_MODULE_2__["defaultLayout"];
          this.currentLayout = src_app_app_layouts__WEBPACK_IMPORTED_MODULE_2__["defaultLayout"];
          this.switchLayoutSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }

        _createClass(LayoutsService, [{
          key: "switchLayout",
          value: function switchLayout(selectedLayoutName) {
            selectedLayoutName = selectedLayoutName ? selectedLayoutName : this.currentLayout.name;

            if (selectedLayoutName && selectedLayoutName !== this.currentLayout.name) {
              var selectedLayout = src_app_app_layouts__WEBPACK_IMPORTED_MODULE_2__["availableLayouts"].find(function (layout) {
                return layout.name === selectedLayoutName;
              });

              if (selectedLayout) {
                this.previousLayout = this.currentLayout;
                this.currentLayout = selectedLayout;
                this.switchLayoutSubject.next(selectedLayout.name);
              }
            }
          }
        }]);

        return LayoutsService;
      }();

      LayoutsService.ɵfac = function LayoutsService_Factory(t) {
        return new (t || LayoutsService)();
      };

      LayoutsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LayoutsService,
        factory: LayoutsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/cesar/Escritorio/VIN-BILLING/VB-repos/vin-billing-front-web/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0+bB":
    /*!*******************************************************!*\
      !*** ./src/app/core/side-menus/side-menus.service.ts ***!
      \*******************************************************/

    /*! exports provided: SideMenusService */

    /***/
    function bB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SideMenusService", function () {
        return SideMenusService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var SideMenusService = /*#__PURE__*/_createClass(function SideMenusService() {
        _classCallCheck(this, SideMenusService);

        this.toggleMainMenuSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.toggleAltMenuSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.renderAltMenuSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.changeMainMenuModeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      });

      SideMenusService.ɵfac = function SideMenusService_Factory(t) {
        return new (t || SideMenusService)();
      };

      SideMenusService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SideMenusService,
        factory: SideMenusService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideMenusService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "0Hlk":
    /*!***********************************************************!*\
      !*** ./src/app/core/custom-icons/custom-icons.service.ts ***!
      \***********************************************************/

    /*! exports provided: CustomIconsService */

    /***/
    function Hlk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomIconsService", function () {
        return CustomIconsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      var CustomIconsService = /*#__PURE__*/function () {
        function CustomIconsService(matIconRegistry, domSanitizer) {
          _classCallCheck(this, CustomIconsService);

          this.matIconRegistry = matIconRegistry;
          this.domSanitizer = domSanitizer;
        } //TODO: REVISAR


        _createClass(CustomIconsService, [{
          key: "init",
          value: function init() {
            // register custom icons
            this.registerIcons(['angular-logo-2', 'angular-logo'], '/assets/icons/logos/');
            this.registerIcons(['dashboards', 'forms', 'components', 'charts', 'tables', 'utilities'], '/assets/icons/sidemenu/');
            this.registerIcons(['notifications', 'settings', 'search'], '/assets/icons/navbar/');
            this.registerIcons(['calendar', 'arrow-up', 'arrow-down', 'half-arrow-down', 'drag'], '/assets/icons/dashboards/crm/');
            this.registerIcons(['sales', 'earnings', 'commissions-paid', 'orders', 'calendar', 'desktop', 'tablet', 'mobile', 'watch'], '/assets/icons/dashboards/ecommerce/');
            this.registerIcons(['upload', 'image'], '/assets/icons/utilities/');
          }
        }, {
          key: "registerIcons",
          value: function registerIcons(icons, path) {
            var _this = this;

            icons.forEach(function (icon) {
              _this.matIconRegistry.addSvgIcon(icon, _this.domSanitizer.bypassSecurityTrustResourceUrl(path + icon + '.svg'));
            });
          }
        }]);

        return CustomIconsService;
      }();

      CustomIconsService.ɵfac = function CustomIconsService_Factory(t) {
        return new (t || CustomIconsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]));
      };

      CustomIconsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CustomIconsService,
        factory: CustomIconsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomIconsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "2KIB":
    /*!***************************************!*\
      !*** ./src/app/app-color-palettes.ts ***!
      \***************************************/

    /*! exports provided: availablePalettes, defaultPalette */

    /***/
    function KIB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "availablePalettes", function () {
        return availablePalettes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultPalette", function () {
        return defaultPalette;
      });

      var availablePalettes = [{
        name: 'palette-1'
      }, {
        name: 'palette-2'
      }]; // select the default color palette

      var defaultPalette = availablePalettes.find(function (palette) {
        return palette.name === 'palette-1'; // return palette.name === 'palette-2';
      });
      /***/
    },

    /***/
    "2gss":
    /*!************************************************************!*\
      !*** ./src/app/shell/image-shell/image-shell.component.ts ***!
      \************************************************************/

    /*! exports provided: ImageShellComponent */

    /***/
    function gss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageShellComponent", function () {
        return ImageShellComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../config/app-shell.config */
      "Kt/9");

      function ImageShellComponent_ng_content_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngIf", "_mode === 'cover'"]);
        }
      }

      var _c0 = ["*"];

      var ImageShellComponent = /*#__PURE__*/function () {
        function ImageShellComponent(platformId) {
          _classCallCheck(this, ImageShellComponent);

          this.platformId = platformId; // To debug shell styles, change configuration in the assets/app-shell.config.json file

          this.debugMode = _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__["AppShellConfig"].settings && _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__["AppShellConfig"].settings.debug ? _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__["AppShellConfig"].settings.debug : false; // tslint:disable-next-line:variable-name

          this._src = ''; // tslint:disable-next-line:variable-name

          this._alt = ''; // tslint:disable-next-line:variable-name

          this._mode = '';
          this.imageLoaded = false;
        }

        _createClass(ImageShellComponent, [{
          key: "mode",
          get: function get() {
            return this._mode;
          },
          set: function set(val) {
            this._mode = val !== undefined && val !== null ? val : '';
          }
        }, {
          key: "src",
          set: function set(val) {
            if (!this.debugMode) {
              this._src = val !== undefined && val !== null ? val : '';
            }

            if (this._mode === 'cover') {
              // Unset the background-image
              this.backgroundImage = 'unset';
            } // Show loading indicator
            // When using SSR (Server Side Rendering), avoid the loading animation while the image resource is being loaded


            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this.platformId)) {
              this.imageLoaded = true;
            } else {
              this.imageLoaded = false;
            }
          }
        }, {
          key: "alt",
          set: function set(val) {
            this._alt = val !== undefined && val !== null ? val : '';
          }
        }, {
          key: "_imageLoaded",
          value: function _imageLoaded() {
            this.imageLoaded = true; // If it's a cover image then set the background-image property accordingly

            if (this._mode === 'cover') {
              this.backgroundImage = 'url(' + this._src + ')';
            }
          }
        }]);

        return ImageShellComponent;
      }();

      ImageShellComponent.ɵfac = function ImageShellComponent_Factory(t) {
        return new (t || ImageShellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]));
      };

      ImageShellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ImageShellComponent,
        selectors: [["cc-image-shell"]],
        hostVars: 5,
        hostBindings: function ImageShellComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("mode", ctx.mode);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", ctx.backgroundImage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("img-loaded", ctx.imageLoaded);
          }
        },
        inputs: {
          mode: "mode",
          src: "src",
          alt: "alt"
        },
        ngContentSelectors: _c0,
        decls: 3,
        vars: 3,
        consts: [[1, "spinner", "fas", "fa-circle-notch", "fa-spin", "fa-3x", "fa-fw"], [1, "inner-img", 3, "src", "alt", "load"], [4, "ngIf"]],
        template: function ImageShellComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function ImageShellComponent_Template_img_load_1_listener() {
              return ctx._imageLoaded();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ImageShellComponent_ng_content_2_Template, 1, 0, "ng-content", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx._src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx._alt);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._mode === "cover");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: ["[_nghost-%COMP%] {\n  --image-shell-loading-background: #EEE;\n  --image-shell-border-radius: 0px;\n  display: block;\n  position: relative;\n  height: 100%;\n  border-radius: var(--image-shell-border-radius);\n  transition: all ease-in-out 0.3s;\n  z-index: 2;\n}\n[_nghost-%COMP%]    > .spinner[_ngcontent-%COMP%] {\n  display: none;\n}\n[_nghost-%COMP%]    > .inner-img[_ngcontent-%COMP%] {\n  vertical-align: initial;\n}\n[_nghost-%COMP%]::before {\n  content: \"\";\n  background: var(--image-shell-loading-background);\n  border-radius: var(--image-shell-border-radius);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n[_nghost-%COMP%]:not([mode=cover]) {\n  width: 100%;\n  overflow: hidden;\n}\n[_nghost-%COMP%]:not([mode=cover])    > .inner-img[_ngcontent-%COMP%] {\n  transition: visibility 0s linear, opacity 0.5s linear;\n  opacity: 0;\n  visibility: hidden;\n  width: 100%;\n  height: 100%;\n  border-radius: var(--image-shell-border-radius);\n}\n[_nghost-%COMP%]:not([mode=cover]).img-loaded::before {\n  display: none;\n}\n[_nghost-%COMP%]:not([mode=cover]).img-loaded    > .inner-img[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n[mode=cover][_nghost-%COMP%] {\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n[mode=cover][_nghost-%COMP%]::before, [mode=cover][_nghost-%COMP%]    > .spinner[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n[mode=cover][_nghost-%COMP%]    > .inner-img[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n}\n[mode=cover].img-loaded[_nghost-%COMP%]::before {\n  display: none;\n}\n[animation=gradient][_nghost-%COMP%] {\n  --image-shell-loading-background: #EEE;\n  --image-shell-animation-color: #DDD;\n}\n[animation=gradient][_nghost-%COMP%]::before {\n  background: linear-gradient(to right, var(--image-shell-loading-background) 8%, var(--image-shell-animation-color) 18%, var(--image-shell-loading-background) 33%);\n  background-size: 800px 104px;\n  -webkit-animation: animateBackground 2s ease-in-out infinite;\n          animation: animateBackground 2s ease-in-out infinite;\n}\n[animation=gradient].img-loaded[_nghost-%COMP%]::before {\n  background: none;\n  -webkit-animation: 0;\n          animation: 0;\n}\n@-webkit-keyframes animateBackground {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n@keyframes animateBackground {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n[animation=spinner][_nghost-%COMP%] {\n  --image-shell-spinner-size: 28px;\n  --image-shell-spinner-color: #CCC;\n}\n[animation=spinner][_nghost-%COMP%]    > .spinner[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  top: calc(50% - calc(var(--image-shell-spinner-size) / 2));\n  left: calc(50% - calc(var(--image-shell-spinner-size) / 2));\n  width: var(--image-shell-spinner-size);\n  height: var(--image-shell-spinner-size);\n  font-size: var(--image-shell-spinner-size);\n  line-height: var(--image-shell-spinner-size);\n  color: var(--image-shell-spinner-color);\n}\n[animation=spinner].img-loaded[_nghost-%COMP%]    > .spinner[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n}\n.add-overlay[_nghost-%COMP%] {\n  --image-shell-overlay-background: rgba(0, 0, 0, .4);\n}\n.add-overlay.img-loaded[_nghost-%COMP%]::before {\n  display: block;\n  background: var(--image-shell-overlay-background);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hlbGwvaW1hZ2Utc2hlbGwvaW1hZ2Utc2hlbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBQTtFQUNBLGdDQUFBO0VBRUEsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0FBQUY7QUFHRTtFQUNFLGFBQUE7QUFESjtBQUtFO0VBQ0UsdUJBQUE7QUFISjtBQU9FO0VBQ0UsV0FBQTtFQUNBLGlEQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFMSjtBQVFFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBTko7QUFRSTtFQUNFLHFEQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwrQ0FBQTtBQU5OO0FBV007RUFDRSxhQUFBO0FBVFI7QUFZTTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQVZSO0FBZ0JFO0VBQ0Usc0JBQUE7RUFDQSw0QkFBQTtBQWRKO0FBaUJJO0VBRUUsV0FBQTtBQWhCTjtBQW1CSTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQWpCTjtBQXNCTTtFQUNFLGFBQUE7QUFwQlI7QUEwQkE7RUFDRSxzQ0FBQTtFQUNBLG1DQUFBO0FBdkJGO0FBMEJFO0VBQ0Usa0tBQ0U7RUFDRiw0QkFBQTtFQUNBLDREQUFBO1VBQUEsb0RBQUE7QUF6Qko7QUE4Qkk7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO1VBQUEsWUFBQTtBQTVCTjtBQWdDRTtFQUNFO0lBQ0UsNkJBQUE7RUE5Qko7RUFpQ0U7SUFDRSw0QkFBQTtFQS9CSjtBQUNGO0FBd0JFO0VBQ0U7SUFDRSw2QkFBQTtFQTlCSjtFQWlDRTtJQUNFLDRCQUFBO0VBL0JKO0FBQ0Y7QUFtQ0E7RUFDRSxnQ0FBQTtFQUNBLGlDQUFBO0FBaENGO0FBa0NFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsMERBQUE7RUFDQSwyREFBQTtFQUNBLHNDQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsdUNBQUE7QUFoQ0o7QUFvQ0k7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFsQ047QUF1Q0E7RUFDRSxtREFBQTtBQXBDRjtBQXdDSTtFQUNFLGNBQUE7RUFDQSxpREFBQTtBQXRDTiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL2ltYWdlLXNoZWxsL2ltYWdlLXNoZWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogI0VFRTtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiAwcHg7XG5cbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzKTtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IC4zcztcbiAgei1pbmRleDogMjtcblxuICAvLyBCeSBkZWZhdWx0LCBoaWRlIHRoZSBzcGlubmVyXG4gICYgPiAuc3Bpbm5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC8vIE92ZXJyaWRlIHJlYm9vdCBzdHlsZXMgKEJvb3RzdHJhcCBDU1MpXG4gICYgPiAuaW5uZXItaW1nIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogaW5pdGlhbDtcbiAgfVxuXG4gIC8vIExvYWRpbmcgYmFja2dyb3VuZFxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZCk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1cyk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgfVxuXG4gICY6bm90KFttb2RlPVwiY292ZXJcIl0pIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgJiA+IC5pbm5lci1pbWcge1xuICAgICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyBsaW5lYXIsIG9wYWNpdHkgLjVzIGxpbmVhcjtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXMpO1xuICAgIH1cblxuICAgICYuaW1nLWxvYWRlZCB7XG4gICAgICAvLyBIaWRlIGxvYWRpbmcgYmFja2dyb3VuZCBvbmNlIHRoZSBpbWFnZSBoYXMgbG9hZGVkXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAmID4gLmlubmVyLWltZyB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgaXQgaXMgbW9kZTogY292ZXJcbiAgJlttb2RlPVwiY292ZXJcIl0ge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblxuICAgIC8vIEluIGNvdmVyIG1vZGUsIHdlIGNhbiBoYXZlIGNvbnRlbnQgaW5zaWRlIHRoZSBlbGVtZW50LCB0aHVzIHdlIG5lZWQgdG8gcHV0IHRoZXNlIGVsZW1lbnRzIGJlbmVhdGhcbiAgICAmOjpiZWZvcmUsXG4gICAgJiA+IC5zcGlubmVyIHtcbiAgICAgIHotaW5kZXg6IC0xO1xuICAgIH1cblxuICAgICYgPiAuaW5uZXItaW1nIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuXG4gICAgJi5pbWctbG9hZGVkIHtcbiAgICAgIC8vIEhpZGUgbG9hZGluZyBiYWNrZ3JvdW5kIG9uY2UgdGhlIGltYWdlIGhhcyBsb2FkZWRcbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbjpob3N0KFthbmltYXRpb249XCJncmFkaWVudFwiXSkge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogI0VFRTtcbiAgLS1pbWFnZS1zaGVsbC1hbmltYXRpb24tY29sb3I6ICNEREQ7XG5cbiAgLy8gVGhlIGFuaW1hdGlvbiB0aGF0IGdvZXMgYmVuZWF0aCB0aGUgbWFza3NcbiAgJjo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kOlxuICAgICAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQpIDglLCB2YXIoLS1pbWFnZS1zaGVsbC1hbmltYXRpb24tY29sb3IpIDE4JSwgdmFyKC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kKSAzMyUpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogODAwcHggMTA0cHg7XG4gICAgYW5pbWF0aW9uOiBhbmltYXRlQmFja2dyb3VuZCAycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgfVxuXG4gICYuaW1nLWxvYWRlZCB7XG4gICAgLy8gUmVzZXQgYmFja2dyb3VuZCBhbmltYXRpb24gb25jZSB0aGUgaW1hZ2UgaGFzIGxvYWRlZFxuICAgICY6OmJlZm9yZSB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYW5pbWF0aW9uOiAwO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgYW5pbWF0ZUJhY2tncm91bmQge1xuICAgIDAle1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ2OHB4IDBcbiAgICB9XG5cbiAgICAxMDAle1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDY4cHggMFxuICAgIH1cbiAgfVxufVxuXG46aG9zdChbYW5pbWF0aW9uPVwic3Bpbm5lclwiXSkge1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZTogMjhweDtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiAjQ0NDO1xuXG4gICYgPiAuc3Bpbm5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogY2FsYyg1MCUgLSBjYWxjKHZhcigtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZSkgLyAyKSk7XG4gICAgbGVmdDogY2FsYyg1MCUgLSBjYWxjKHZhcigtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZSkgLyAyKSk7XG4gICAgd2lkdGg6IHZhcigtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZSk7XG4gICAgaGVpZ2h0OiB2YXIoLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemUpO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplKTtcbiAgICBsaW5lLWhlaWdodDogdmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplKTtcbiAgICBjb2xvcjogdmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcik7XG4gIH1cblxuICAmLmltZy1sb2FkZWQge1xuICAgICYgPiAuc3Bpbm5lciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cbiAgfVxufVxuXG46aG9zdCguYWRkLW92ZXJsYXkpIHtcbiAgLS1pbWFnZS1zaGVsbC1vdmVybGF5LWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjQpO1xuXG4gICYuaW1nLWxvYWRlZCB7XG4gICAgLy8gQWRkIGJhY2tncm91bmQgb3ZlcmxheSBhZnRlciB0aGUgaW1hZ2UgaGFzIGxvYWRlZFxuICAgICY6OmJlZm9yZSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWltYWdlLXNoZWxsLW92ZXJsYXktYmFja2dyb3VuZCk7XG4gICAgfVxuICB9XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageShellComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'cc-image-shell',
            templateUrl: './image-shell.component.html',
            styleUrls: ['./image-shell.component.scss']
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }];
        }, {
          imageLoaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.img-loaded']
          }],
          backgroundImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.backgroundImage']
          }],
          mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.mode']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          src: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          alt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "2isz":
    /*!****************************************************************!*\
      !*** ./src/app/core/layouts/mobile/mobile-layout.component.ts ***!
      \****************************************************************/

    /*! exports provided: MobileLayoutComponent */

    /***/
    function isz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MobileLayoutComponent", function () {
        return MobileLayoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _side_menus_side_menus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../side-menus/side-menus.service */
      "0+bB");
      /* harmony import */


      var _responsive_breakpoints_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../responsive-breakpoints.service */
      "D+hS");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _side_menus_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../side-menus/main-menu/main-menu.component */
      "z59Q");
      /* harmony import */


      var _top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../top-navbar/top-navbar.component */
      "EXnx");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = ["mainSidenav"];
      var _c1 = ["altSidenav"];

      var MobileLayoutComponent = /*#__PURE__*/function () {
        function MobileLayoutComponent(sideMenusService, responsiveBreakpointsService, platformId) {
          _classCallCheck(this, MobileLayoutComponent);

          this.sideMenusService = sideMenusService;
          this.responsiveBreakpointsService = responsiveBreakpointsService;
          this.platformId = platformId;
          this.layoutFlag = true;
          this.serverSideRendered = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this.platformId); // Mobile layout main menu always starts closed and with 'push' mode

          this.mainSidenavOpened = false;
          this.mainSideMenuMode = 'push';
        }

        _createClass(MobileLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            // subscribe to screen size changes
            this.screenSizeChangeSubscription = this.responsiveBreakpointsService.screenSizeChangeSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(0)).subscribe(function (event) {
              if (event === 'small') {
                _this2.sideMenusService.changeMainMenuModeSubject.next('push');

                _this2.sideMenusService.toggleMainMenuSubject.next('close');
              }

              if (event === 'medium') {
                _this2.sideMenusService.changeMainMenuModeSubject.next('side');

                _this2.sideMenusService.toggleMainMenuSubject.next('open');
              }

              if (event === 'large') {
                _this2.sideMenusService.changeMainMenuModeSubject.next('side');

                _this2.sideMenusService.toggleMainMenuSubject.next('open');
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.mainSidenavSubscription.unsubscribe();
            this.altSidenavSubscription.unsubscribe();
            this.screenSizeChangeSubscription.unsubscribe();
            this.changeMainMenuModeSubscription.unsubscribe();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this3 = this;

            this.mainSidenavSubscription = this.sideMenusService.toggleMainMenuSubject.subscribe(function (event) {
              switch (event) {
                case 'toggle':
                  _this3.mainSidenav.toggle();

                  break;

                case 'open':
                  _this3.mainSidenav.open();

                  break;

                case 'close':
                  _this3.mainSidenav.close();

                  break;

                default:
                  _this3.mainSidenav.toggle();

              }
            }, function (error) {
              console.log('toggleMainMenu [Layout Mobile] - error', error);
            }, function () {
              console.log('toggleMainMenu [Layout Mobile] - complete');
            });
            this.altSidenavSubscription = this.sideMenusService.toggleAltMenuSubject.subscribe(function (event) {
              switch (event) {
                case 'toggle':
                  _this3.altSidenav.toggle();

                  break;

                case 'open':
                  _this3.altSidenav.open();

                  break;

                case 'close':
                  _this3.altSidenav.close();

                  break;

                default:
                  _this3.altSidenav.toggle();

              }
            }, function (error) {
              console.log('toggleAltMenu [Layout Mobile] - error', error);
            }, function () {
              console.log('toggleAltMenu [Layout Mobile] - complete');
            });
            this.changeMainMenuModeSubscription = this.sideMenusService.changeMainMenuModeSubject.subscribe(function (menuMode) {
              _this3.mainSideMenuMode = menuMode;
            }, function (error) {
              console.log('changeMainMenuModeSubject [Layout Mobile] - error', error);
            }, function () {
              console.log('changeMainMenuModeSubject [Layout Mobile] - complete');
            });
          } // It's better to have the class applied when the opening starts as we want it ready before the opening animation ends

        }, {
          key: "openedStart",
          value: function openedStart() {
            this.mainSidenavOpened = true;
          }
        }, {
          key: "mainSidenavToggled",
          value: function mainSidenavToggled(opened) {
            this.mainSidenavOpened = opened;
          }
        }, {
          key: "altSidenavToggled",
          value: function altSidenavToggled(opened) {
            this.altSidenavOpened = opened;
          }
        }]);

        return MobileLayoutComponent;
      }();

      MobileLayoutComponent.ɵfac = function MobileLayoutComponent_Factory(t) {
        return new (t || MobileLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_side_menus_side_menus_service__WEBPACK_IMPORTED_MODULE_3__["SideMenusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_responsive_breakpoints_service__WEBPACK_IMPORTED_MODULE_4__["ResponsiveBreakpointsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]));
      };

      MobileLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MobileLayoutComponent,
        selectors: [["app-mobile-layout"]],
        viewQuery: function MobileLayoutComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mainSidenav = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.altSidenav = _t.first);
          }
        },
        hostVars: 8,
        hostBindings: function MobileLayoutComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("layout-mobile", ctx.layoutFlag)("server-side-rendered", ctx.serverSideRendered)("main-sidenav-opened", ctx.mainSidenavOpened)("alt-sidenav-opened", ctx.altSidenavOpened);
          }
        },
        decls: 7,
        vars: 2,
        consts: [["position", "start", 1, "admin-main-sidenav", "fixed-sidenav", "clear-sidenav-background", 3, "mode", "opened", "openedStart", "openedChange"], ["mainSidenav", ""], [1, "show-branding", "use-active-item-line-decoration"], [1, "admin-main-content"], ["mode", "condensed", 1, "admin-top-navbar", "show-bare-branding"]],
        template: function MobileLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openedStart", function MobileLayoutComponent_Template_mat_sidenav_openedStart_1_listener() {
              return ctx.openedStart();
            })("openedChange", function MobileLayoutComponent_Template_mat_sidenav_openedChange_1_listener($event) {
              return ctx.mainSidenavToggled($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-main-menu", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-sidenav-content", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-top-navbar", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", ctx.mainSideMenuMode)("opened", ctx.mainSidenavOpened);
          }
        },
        directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"], _side_menus_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_6__["MainMenuComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContent"], _top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_7__["TopNavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"]],
        styles: ["[_nghost-%COMP%] {\n  --layout-background: rgb(var(--palette-grey-0-rgb));\n  --layout-color: rgb(var(--palette-grey-8-rgb));\n  --layout-navigation-padding: 30px;\n  --layout-navigation-spacing: calc(var(--layout-navigation-padding) / 3);\n  --layout-top-navbar-background: rgb(var(--palette-primary-rgb));\n  --layout-top-navbar-color: rgb(var(--palette-primary-contrast-rgb));\n  --layout-top-navbar-alt-color: rgb(var(--palette-grey-1-rgb));\n  --layout-top-navbar-border-color: rgb(var(--palette-primary-contrast-rgb));\n  --layout-top-navbar-height: 60px;\n  --layout-main-sidenav-width: 260px;\n  --layout-main-sidenav-background: rgb(var(--palette-white-rgb));\n  --layout-main-sidenav-active-background: rgb(var(--palette-grey-0-rgb));\n  --layout-main-sidenav-color: var(--layout-color);\n  --layout-main-sidenav-active-color: rgb(var(--palette-primary-rgb));\n  --layout-main-sidenav-alt-color: rgb(var(--palette-grey-4-rgb));\n  --layout-alt-sidenav-background: rgb(var(--palette-white-rgb));\n  --layout-alt-sidenav-color: var(--layout-color);\n  --layout-alt-sidenav-alt-color: rgb(var(--palette-grey-4-rgb));\n}\n[_nghost-%COMP%] {\n  \n  \n  \n  \n  \n}\n[_nghost-%COMP%]   mat-sidenav-container.mat-drawer-container[_ngcontent-%COMP%] {\n  overflow: initial;\n}\n[_nghost-%COMP%]   mat-sidenav-content.admin-main-content[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  overflow: initial;\n}\n[_nghost-%COMP%]   app-top-navbar.admin-top-navbar[_ngcontent-%COMP%] {\n  --top-navbar-background: var(--layout-top-navbar-background);\n  --top-navbar-color: var(--layout-top-navbar-color);\n  --top-navbar-alt-color: var(--layout-top-navbar-alt-color);\n  --top-navbar-border-color: var(--layout-top-navbar-border-color);\n  --top-navbar-height: var(--layout-top-navbar-height);\n  --top-navbar-padding: var(--layout-navigation-padding);\n  --top-navbar-spacing: var(--layout-navigation-spacing);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  z-index: 3;\n}\n[_nghost-%COMP%]   mat-sidenav.admin-alt-sidenav[_ngcontent-%COMP%] {\n  -ms-scroll-chaining: none;\n      overscroll-behavior: contain;\n}\n[_nghost-%COMP%]   mat-sidenav.admin-alt-sidenav.fixed-sidenav[_ngcontent-%COMP%] {\n  position: fixed;\n}\n[_nghost-%COMP%]   mat-sidenav.admin-alt-sidenav[_ngcontent-%COMP%]   app-dynamic-menu[_ngcontent-%COMP%] {\n  --dynamic-menu-background: var(--layout-alt-sidenav-background);\n  --dynamic-menu-color: var(--layout-alt-sidenav-color);\n  --dynamic-menu-alt-color: var(--layout-alt-sidenav-alt-color);\n  --dynamic-menu-padding: var(--layout-navigation-padding);\n  --dynamic-menu-spacing: var(--layout-navigation-spacing);\n}\n[_nghost-%COMP%]   mat-sidenav.admin-main-sidenav[_ngcontent-%COMP%] {\n  -ms-scroll-chaining: none;\n      overscroll-behavior: contain;\n  width: var(--layout-main-sidenav-width);\n}\n[_nghost-%COMP%]   mat-sidenav.admin-main-sidenav.fixed-sidenav[_ngcontent-%COMP%] {\n  position: fixed;\n}\n[_nghost-%COMP%]   mat-sidenav.admin-main-sidenav.clear-sidenav-background.mat-drawer-side[_ngcontent-%COMP%] {\n  border: none;\n}\n[_nghost-%COMP%]   mat-sidenav.admin-main-sidenav.clear-sidenav-background.mat-drawer[_ngcontent-%COMP%] {\n  background-color: transparent;\n  box-shadow: none;\n}\n[_nghost-%COMP%]   mat-sidenav.admin-main-sidenav[_ngcontent-%COMP%]   app-main-menu[_ngcontent-%COMP%] {\n  --main-menu-background: var(--layout-main-sidenav-background);\n  --main-menu-active-background: var(--layout-main-sidenav-active-background);\n  --main-menu-color: var(--layout-main-sidenav-color);\n  --main-menu-active-color: var(--layout-main-sidenav-active-color);\n  --main-menu-alt-color: var(--layout-main-sidenav-alt-color);\n  --main-menu-width: var(--layout-main-sidenav-width);\n  --main-menu-padding: var(--layout-navigation-padding);\n  --main-menu-spacing: var(--layout-navigation-spacing);\n}\n[_nghost-%COMP%]   mat-sidenav.admin-main-sidenav[_ngcontent-%COMP%]   app-main-menu.show-branding[_ngcontent-%COMP%] {\n  --main-menu-branding-height: var(--layout-top-navbar-height);\n}\n.server-side-rendered.main-sidenav-opened[_nghost-%COMP%]   mat-sidenav-content.admin-main-content[_ngcontent-%COMP%] {\n  -webkit-margin-start: var(--layout-main-sidenav-width);\n          margin-inline-start: var(--layout-main-sidenav-width);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9wYWxldHRlcy9zaGFyZWQuc2NzcyIsInNyYy90aGVtZS9wYWxldHRlcy9tb2RlLnNjc3MiLCJzcmMvYXBwL2NvcmUvbGF5b3V0cy9tb2JpbGUvbW9iaWxlLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9sYXlvdXRzL3N0eWxlcy9zaGFyZWQvbGF5b3V0LXNpZGVuYXZzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FDREE7RUFFRSxtREFBQTtFQUNBLDhDQUFBO0VBR0EsaUNBQUE7RUFDQSx1RUFBQTtFQUVBLCtEQUFBO0VBQ0EsbUVBQUE7RUFDQSw2REFBQTtFQUNBLDBFQUFBO0VBQ0EsZ0NBQUE7RUFFQSxrQ0FBQTtFQUNBLCtEQUFBO0VBQ0EsdUVBQUE7RUFDQSxnREFBQTtFQUNBLG1FQUFBO0VBQ0EsK0RBQUE7RUFFQSw4REFBQTtFQUNBLCtDQUFBO0VBQ0EsOERBQUE7QUFERjtBQUlBO0VBQ0U7O0dBQUE7RUFjQTs7R0FBQTtFQWFBOztHQUFBO0VBa0JBOztHQUFBO0VBbUJBOztHQUFBO0FBbkRGO0FBVEU7RUFPRSxpQkFBQTtBQUtKO0FBQ0U7RUFFRSxpQkFBQTtFQUtBLGlCQUFBO0FBSko7QUFVRTtFQUNFLDREQUFBO0VBQ0Esa0RBQUE7RUFDQSwwREFBQTtFQUNBLGdFQUFBO0VBRUEsb0RBQUE7RUFDQSxzREFBQTtFQUNBLHNEQUFBO0VBRUEsd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBVko7QUFnQkU7RUFDRSx5QkFBQTtNQUFBLDRCQUFBO0FBZEo7QUNsRUU7RUFDRSxlQUFBO0FEb0VKO0FBZ0JJO0VBQ0UsK0RBQUE7RUFDQSxxREFBQTtFQUNBLDZEQUFBO0VBRUEsd0RBQUE7RUFDQSx3REFBQTtBQWZOO0FBc0JFO0VBQ0UseUJBQUE7TUFBQSw0QkFBQTtFQUNBLHVDQUFBO0FBcEJKO0FDaEZFO0VBQ0UsZUFBQTtBRGtGSjtBQ3hFSTtFQUNFLFlBQUE7QUQwRU47QUN4RUk7RUFDRSw2QkFBQTtFQUNBLGdCQUFBO0FEMEVOO0FBZ0JJO0VBQ0UsNkRBQUE7RUFDQSwyRUFBQTtFQUNBLG1EQUFBO0VBQ0EsaUVBQUE7RUFDQSwyREFBQTtFQUVBLG1EQUFBO0VBQ0EscURBQUE7RUFDQSxxREFBQTtBQWZOO0FBaUJNO0VBQ0UsNERBQUE7QUFmUjtBQXNCRTtFQUVFLHNEQUFBO1VBQUEscURBQUE7QUFwQkoiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2xheW91dHMvbW9iaWxlL21vYmlsZS1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBTaGFyZWRcbiovXG5cbkBpbXBvcnQgJ3ByZWZlcmVuY2VzJztcbkBpbXBvcnQgJ2ludGVyZmFjZSc7XG5AaW1wb3J0ICdtb2RlJztcblxuLy8gQW4gYWJzdHJhY3Qgd2F5IHRvIHByb3ZpZGUgY29sb3JzLlxuLy8gVGhpcyBmdW5jdGlvbiBpcyBhbiBpbnRlcmZhY2UgdG8gYm90aCBTYXNzIHZhcmlhYmxlcyBhbmQgQ1NTIDQgdmFyaWFibGVzIGJhc2VkIGNvbG9yIHBhbGV0dGVzLlxuQGZ1bmN0aW9uIHBhbGV0dGUtY29sb3IoJGNvbG9yLW5hbWUsICRhbHBoYTogMSkge1xuICAvLyAkY29sb3ItcGFsZXR0ZS1tb2RlICAgICAgICA9PiAgRGVmaW5lZCBpbiBtb2RlLnNjc3NcbiAgLy8gJGNob29zZW4tcGFsZXR0ZSAgICAgICAgICAgPT4gIERlZmluZWQgaW4gbW9kZS5zY3NzXG4gIC8vICRjb2xvci1wYWxldHRlLWludGVyZmFjZSAgID0+ICBEZWZpbmVkIGluIGludGVyZmFjZS5zY3NzXG4gIC8vICRjc3M0LXZhci1wcmVmaXggICAgICAgICAgID0+ICBEZWZpbmVkIGluIHByZWZlcmVuY2VzLnNjc3NcbiAgLy8gJGNzczQtY29sb3ItZm9ybWF0ICAgICAgICAgPT4gIERlZmluZWQgaW4gcHJlZmVyZW5jZXMuc2Nzc1xuXG4gIEBpZiAoJGNvbG9yLXBhbGV0dGUtbW9kZSA9PSAnY3NzLTQnKSB7XG4gICAgJHBhbGV0dGUtcmVmZXJlbmNlOiAkY29sb3ItcGFsZXR0ZS1pbnRlcmZhY2U7XG5cbiAgICAkY29sb3ItdmFyaWFibGUtaW5kZXg6IGluZGV4KCRwYWxldHRlLXJlZmVyZW5jZSwgJGNvbG9yLW5hbWUpO1xuXG4gICAgQGlmICh0eXBlX29mKCRjb2xvci12YXJpYWJsZS1pbmRleCkgPT0gJ251bWJlcicpIHtcbiAgICAgICRjb2xvci12YXJpYWJsZS1uYW1lOiBudGgoJHBhbGV0dGUtcmVmZXJlbmNlLCAkY29sb3ItdmFyaWFibGUtaW5kZXgpO1xuXG4gICAgICBAaWYgKCRhbHBoYSA+IDAgYW5kICRhbHBoYSA8IDEpIHtcbiAgICAgICAgQHJldHVybiAjeydyZ2JhKHZhcignICsgJGNzczQtdmFyLXByZWZpeCArICRjb2xvci12YXJpYWJsZS1uYW1lICsgJy0nICsgJGNzczQtY29sb3ItZm9ybWF0ICsnKSwgI3skYWxwaGF9KSd9O1xuICAgICAgfSBAZWxzZSBpZiAoJGFscGhhID09IDEpIHtcbiAgICAgICAgQHJldHVybiAjeydyZ2IodmFyKCcgKyAkY3NzNC12YXItcHJlZml4ICsgJGNvbG9yLXZhcmlhYmxlLW5hbWUgKyAnLScgKyAkY3NzNC1jb2xvci1mb3JtYXQgKyAnKSknfTtcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICBAZXJyb3IgXCJBbHBoYSAoI3skYWxwaGF9KSBtdXN0IGJlIGEgbnVtYmVyXCI7XG4gICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICBAZXJyb3IgXCJDb2xvciAoI3skY29sb3ItbmFtZX0pIHdhcyBub3QgZm91bmQgb24gQ29sb3IgUGFsZXR0ZSBkZWZpbml0aW9uLiBNYWtlIHN1cmUgaXQncyBkZWZpbmVkIGluIHRoZSB0aGVtZS9wYWxldHRlcy9pbnRlcmZhY2Uuc2NzcyBmaWxlXCI7XG4gICAgfVxuICB9IEBlbHNlIGlmICgkY29sb3ItcGFsZXR0ZS1tb2RlID09ICdzYXNzJykge1xuICAgICRwYWxldHRlLXJlZmVyZW5jZTogJGNob29zZW4tcGFsZXR0ZTtcblxuICAgICRjb2xvci12YXJpYWJsZTogbWFwLWdldCgkcGFsZXR0ZS1yZWZlcmVuY2UsICRjb2xvci1uYW1lKTtcblxuICAgIC8vIENoZWNrIGlmIGl0IGlzIGEgU2FzcyBjb2xvclxuICAgIEBpZiAodHlwZV9vZigkY29sb3ItdmFyaWFibGUpID09ICdjb2xvcicpIHtcbiAgICAgIEBpZiAoJGFscGhhID4gMCBhbmQgJGFscGhhIDwgMSkge1xuICAgICAgICBAcmV0dXJuIHJnYmEoJGNvbG9yLXZhcmlhYmxlLCAkYWxwaGEpO1xuICAgICAgfSBAZWxzZSBpZiAoJGFscGhhID09IDEpIHtcbiAgICAgICAgQHJldHVybiAkY29sb3ItdmFyaWFibGU7XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgQGVycm9yIFwiQWxwaGEgKCN7JGFscGhhfSkgbXVzdCBiZSBhIG51bWJlclwiO1xuICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgQGVycm9yIFwiQ29sb3IgKCN7JGNvbG9yLXZhcmlhYmxlfSkgaXMgbm90IGEgU2FzcyBjb2xvclwiO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGVycm9yICdObyBDb2xvciBQYWxldHRlIG1vZGUgc2VsZWN0ZWQgaW4gdGhlbWUvcGFsZXR0ZXMvcHJlZmVyZW5jZXMuc2Nzcyc7XG4gIH1cbn1cbiIsIi8qXG4gIENTUyA0IE1vZGVcbiovXG4kY29sb3ItcGFsZXR0ZS1tb2RlOiAnY3NzLTQnO1xuXG5cbi8qXG4gIFNhc3MgTW9kZVxuKi9cbi8vIEBpbXBvcnQgJ2NvcmUnO1xuLy9cbi8vICRjb2xvci1wYWxldHRlLW1vZGU6ICdzYXNzJztcbi8vXG4vLyAvLyBJbXBvcnQgdGhlIGRlZmluaXRpb25zIG9mIHRoZSBwYWxldHRlIHlvdSB3YW50IHRvIHVzZVxuLy8gQGltcG9ydCAncGFsZXR0ZS0xL2RlZmluaXRpb25zJztcbi8vIC8vIEBpbXBvcnQgJ3BhbGV0dGUtMi9kZWZpbml0aW9ucyc7XG4vL1xuLy8gLy8gQXNzaWduIGEgcGFydGljdWxhciBDb2xvciBQYWxldHRlIHRvIHRoZSAnY2hvb3Nlbi1wYWxldHRlJyBwb2ludGVyLlxuLy8gLy8gJGNob29zZW4tcGFsZXR0ZSB3aWxsIGJlIGEgU2FzcyBtYXAgcG9pbnRpbmcgdG8gYW5vdGhlciBjb2xvciBwYWxldHRlIFNhc3MgbWFwXG4vLyAkY2hvb3Nlbi1wYWxldHRlOiBidWlsZFNhc3NQYWxldHRlKCRwYWxldHRlLTEpO1xuLy8gLy8gJGNob29zZW4tcGFsZXR0ZTogYnVpbGRTYXNzUGFsZXR0ZSgkcGFsZXR0ZS0yKTtcbiIsIkBpbXBvcnQgJ3BhbGV0dGVzL3NoYXJlZCc7XG5cbkBpbXBvcnQgJy4uL3N0eWxlcy9zaGFyZWQvbGF5b3V0LXNpZGVuYXZzJztcblxuLy8gTGF5b3V0IENTUyA0IHZhcmlhYmxlc1xuOmhvc3Qge1xuICAvLyBEZWZhdWx0IGxheW91dCBjb2xvcnNcbiAgLS1sYXlvdXQtYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKCdncmV5LTAnKX07XG4gIC0tbGF5b3V0LWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ2dyZXktOCcpfTtcblxuICAvLyBPdGhlciBsYXlvdXQgdmFyaWFibGVzXG4gIC0tbGF5b3V0LW5hdmlnYXRpb24tcGFkZGluZzogMzBweDtcbiAgLS1sYXlvdXQtbmF2aWdhdGlvbi1zcGFjaW5nOiBjYWxjKHZhcigtLWxheW91dC1uYXZpZ2F0aW9uLXBhZGRpbmcpIC8gMyk7XG5cbiAgLS1sYXlvdXQtdG9wLW5hdmJhci1iYWNrZ3JvdW5kOiAje3BhbGV0dGUtY29sb3IoJ3ByaW1hcnknKX07XG4gIC0tbGF5b3V0LXRvcC1uYXZiYXItY29sb3I6ICN7cGFsZXR0ZS1jb2xvcigncHJpbWFyeS1jb250cmFzdCcpfTtcbiAgLS1sYXlvdXQtdG9wLW5hdmJhci1hbHQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignZ3JleS0xJyl9O1xuICAtLWxheW91dC10b3AtbmF2YmFyLWJvcmRlci1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdwcmltYXJ5LWNvbnRyYXN0Jyl9O1xuICAtLWxheW91dC10b3AtbmF2YmFyLWhlaWdodDogNjBweDtcblxuICAtLWxheW91dC1tYWluLXNpZGVuYXYtd2lkdGg6IDI2MHB4O1xuICAtLWxheW91dC1tYWluLXNpZGVuYXYtYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKCd3aGl0ZScpfTtcbiAgLS1sYXlvdXQtbWFpbi1zaWRlbmF2LWFjdGl2ZS1iYWNrZ3JvdW5kOiAje3BhbGV0dGUtY29sb3IoJ2dyZXktMCcpfTtcbiAgLS1sYXlvdXQtbWFpbi1zaWRlbmF2LWNvbG9yOiB2YXIoLS1sYXlvdXQtY29sb3IpO1xuICAtLWxheW91dC1tYWluLXNpZGVuYXYtYWN0aXZlLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ3ByaW1hcnknKX07XG4gIC0tbGF5b3V0LW1haW4tc2lkZW5hdi1hbHQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignZ3JleS00Jyl9O1xuXG4gIC0tbGF5b3V0LWFsdC1zaWRlbmF2LWJhY2tncm91bmQ6ICN7cGFsZXR0ZS1jb2xvcignd2hpdGUnKX07XG4gIC0tbGF5b3V0LWFsdC1zaWRlbmF2LWNvbG9yOiB2YXIoLS1sYXlvdXQtY29sb3IpO1xuICAtLWxheW91dC1hbHQtc2lkZW5hdi1hbHQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignZ3JleS00Jyl9O1xufVxuXG46aG9zdCB7XG4gIC8qXG4gICAgTGF5b3V0IC0gQ29udGFpbmVyXG4gICovXG4gIC8vIE92ZXJyaWRlIE1hdGVyaWFsIHN0eWxlc1xuICBtYXQtc2lkZW5hdi1jb250YWluZXIubWF0LWRyYXdlci1jb250YWluZXIge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxheW91dC1iYWNrZ3JvdW5kKTtcbiAgICAvLyBjb2xvcjogdmFyKC0tbGF5b3V0LWNvbG9yKTtcblxuICAgIC8vIFdpdGggYSBoaWRkZW4gb3ZlcmZsb3csIHRoZSB0b3AgbmF2YmFyIHN0aWNreSBwb3NpdGlvbmluZyBkb2Vzbid0IHdvcmtcbiAgICAvLyAoc2VlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDQ5Mjk1OTcvMTExNjk1OSlcbiAgICAvLyAoc2VlOiBodHRwczovL3V4ZGVzaWduLmNjL3Bvc2l0aW9uLXN0dWNrLTk2YzlmNTVkOTUyNilcbiAgICBvdmVyZmxvdzogaW5pdGlhbDtcbiAgfVxuXG4gIC8qXG4gICAgTGF5b3V0IC0gQ29udGVudFxuICAqL1xuICBtYXQtc2lkZW5hdi1jb250ZW50LmFkbWluLW1haW4tY29udGVudCB7XG4gICAgLy8gUHJldmVudCB0cnVuY2F0ZWQgc2NyZWVucyB3aGVuIGNvbnRlbnQgaXMgdG8gc2hvcnRcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcblxuICAgIC8vIFdpdGggYSBoaWRkZW4gb3ZlcmZsb3csIHRoZSB0b3AgbmF2YmFyIHN0aWNreSBwb3NpdGlvbmluZyBkb2Vzbid0IHdvcmtcbiAgICAvLyAoc2VlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDQ5Mjk1OTcvMTExNjk1OSlcbiAgICAvLyAoc2VlOiBodHRwczovL3V4ZGVzaWduLmNjL3Bvc2l0aW9uLXN0dWNrLTk2YzlmNTVkOTUyNilcbiAgICBvdmVyZmxvdzogaW5pdGlhbDtcbiAgfVxuXG4gIC8qXG4gICAgTGF5b3V0IC0gVG9wIE5hdmJhclxuICAqL1xuICBhcHAtdG9wLW5hdmJhci5hZG1pbi10b3AtbmF2YmFyIHtcbiAgICAtLXRvcC1uYXZiYXItYmFja2dyb3VuZDogdmFyKC0tbGF5b3V0LXRvcC1uYXZiYXItYmFja2dyb3VuZCk7XG4gICAgLS10b3AtbmF2YmFyLWNvbG9yOiB2YXIoLS1sYXlvdXQtdG9wLW5hdmJhci1jb2xvcik7XG4gICAgLS10b3AtbmF2YmFyLWFsdC1jb2xvcjogdmFyKC0tbGF5b3V0LXRvcC1uYXZiYXItYWx0LWNvbG9yKTtcbiAgICAtLXRvcC1uYXZiYXItYm9yZGVyLWNvbG9yOiB2YXIoLS1sYXlvdXQtdG9wLW5hdmJhci1ib3JkZXItY29sb3IpO1xuXG4gICAgLS10b3AtbmF2YmFyLWhlaWdodDogdmFyKC0tbGF5b3V0LXRvcC1uYXZiYXItaGVpZ2h0KTtcbiAgICAtLXRvcC1uYXZiYXItcGFkZGluZzogdmFyKC0tbGF5b3V0LW5hdmlnYXRpb24tcGFkZGluZyk7XG4gICAgLS10b3AtbmF2YmFyLXNwYWNpbmc6IHZhcigtLWxheW91dC1uYXZpZ2F0aW9uLXNwYWNpbmcpO1xuXG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDBweDtcbiAgICB6LWluZGV4OiAzO1xuICB9XG5cbiAgLypcbiAgICBMYXlvdXQgLSBBbHRlcm5hdGl2ZSBTaWRlIE1lbnUgKHNpZGVuYXYpXG4gICovXG4gIG1hdC1zaWRlbmF2LmFkbWluLWFsdC1zaWRlbmF2IHtcbiAgICBvdmVyc2Nyb2xsLWJlaGF2aW9yOiBjb250YWluO1xuICAgIC8vIFdlIGRvbid0IHNldCBhbHQgbWVudXMgd2lkdGggaGVyZSBhcyB0aGV5IG1heSB2YXJ5IGJldHdlZW4gdGhlIGRpZmZlcmVudCBkeW5hbWljIG1lbnVzXG5cbiAgICBAaW5jbHVkZSBmaXhlZC1zaWRlbmF2KCk7XG5cbiAgICBhcHAtZHluYW1pYy1tZW51IHtcbiAgICAgIC0tZHluYW1pYy1tZW51LWJhY2tncm91bmQ6IHZhcigtLWxheW91dC1hbHQtc2lkZW5hdi1iYWNrZ3JvdW5kKTtcbiAgICAgIC0tZHluYW1pYy1tZW51LWNvbG9yOiB2YXIoLS1sYXlvdXQtYWx0LXNpZGVuYXYtY29sb3IpO1xuICAgICAgLS1keW5hbWljLW1lbnUtYWx0LWNvbG9yOiB2YXIoLS1sYXlvdXQtYWx0LXNpZGVuYXYtYWx0LWNvbG9yKTtcblxuICAgICAgLS1keW5hbWljLW1lbnUtcGFkZGluZzogdmFyKC0tbGF5b3V0LW5hdmlnYXRpb24tcGFkZGluZyk7XG4gICAgICAtLWR5bmFtaWMtbWVudS1zcGFjaW5nOiB2YXIoLS1sYXlvdXQtbmF2aWdhdGlvbi1zcGFjaW5nKTtcbiAgICB9XG4gIH1cblxuICAvKlxuICAgIExheW91dCAtIE1haW4gU2lkZSBNZW51IChzaWRlbmF2KVxuICAqL1xuICBtYXQtc2lkZW5hdi5hZG1pbi1tYWluLXNpZGVuYXYge1xuICAgIG92ZXJzY3JvbGwtYmVoYXZpb3I6IGNvbnRhaW47XG4gICAgd2lkdGg6IHZhcigtLWxheW91dC1tYWluLXNpZGVuYXYtd2lkdGgpO1xuXG4gICAgQGluY2x1ZGUgZml4ZWQtc2lkZW5hdigpO1xuXG4gICAgQGluY2x1ZGUgY2xlYXItc2lkZW5hdi1iYWNrZ3JvdW5kKCk7XG5cbiAgICBhcHAtbWFpbi1tZW51IHtcbiAgICAgIC0tbWFpbi1tZW51LWJhY2tncm91bmQ6IHZhcigtLWxheW91dC1tYWluLXNpZGVuYXYtYmFja2dyb3VuZCk7XG4gICAgICAtLW1haW4tbWVudS1hY3RpdmUtYmFja2dyb3VuZDogdmFyKC0tbGF5b3V0LW1haW4tc2lkZW5hdi1hY3RpdmUtYmFja2dyb3VuZCk7XG4gICAgICAtLW1haW4tbWVudS1jb2xvcjogdmFyKC0tbGF5b3V0LW1haW4tc2lkZW5hdi1jb2xvcik7XG4gICAgICAtLW1haW4tbWVudS1hY3RpdmUtY29sb3I6IHZhcigtLWxheW91dC1tYWluLXNpZGVuYXYtYWN0aXZlLWNvbG9yKTtcbiAgICAgIC0tbWFpbi1tZW51LWFsdC1jb2xvcjogdmFyKC0tbGF5b3V0LW1haW4tc2lkZW5hdi1hbHQtY29sb3IpO1xuXG4gICAgICAtLW1haW4tbWVudS13aWR0aDogdmFyKC0tbGF5b3V0LW1haW4tc2lkZW5hdi13aWR0aCk7XG4gICAgICAtLW1haW4tbWVudS1wYWRkaW5nOiB2YXIoLS1sYXlvdXQtbmF2aWdhdGlvbi1wYWRkaW5nKTtcbiAgICAgIC0tbWFpbi1tZW51LXNwYWNpbmc6IHZhcigtLWxheW91dC1uYXZpZ2F0aW9uLXNwYWNpbmcpO1xuXG4gICAgICAmLnNob3ctYnJhbmRpbmcge1xuICAgICAgICAtLW1haW4tbWVudS1icmFuZGluZy1oZWlnaHQ6IHZhcigtLWxheW91dC10b3AtbmF2YmFyLWhlaWdodCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbjpob3N0KC5zZXJ2ZXItc2lkZS1yZW5kZXJlZC5tYWluLXNpZGVuYXYtb3BlbmVkKSB7XG4gIG1hdC1zaWRlbmF2LWNvbnRlbnQuYWRtaW4tbWFpbi1jb250ZW50IHtcbiAgICAvLyBBZGQgbWFyZ2luIHRvIGZpeCBzaWRlbmF2IG92ZXJsYXAgd2l0aCBBbmd1bGFyIFVuaXZlcnNhbCAoc2VlOiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9jb21wb25lbnRzL2lzc3Vlcy84OTY5KVxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IHZhcigtLWxheW91dC1tYWluLXNpZGVuYXYtd2lkdGgpO1xuICB9XG59XG4iLCJAbWl4aW4gZml4ZWQtc2lkZW5hdigpIHtcbiAgLy8gTWFrZSBmaXhlZCBwb3NpdGlvbiBvcHRpb25hbFxuICAmLmZpeGVkLXNpZGVuYXYge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcblxuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBjbGVhci1zaWRlbmF2LWJhY2tncm91bmQoKSB7XG4gIC8vIE1ha2UgY2xlYXIgbW9kZSBvcHRpb25hbFxuICAmLmNsZWFyLXNpZGVuYXYtYmFja2dyb3VuZCB7XG4gICAgLy8gT3ZlcnJpZGUgTWF0ZXJpYWwgc3R5bGVzXG4gICAgJi5tYXQtZHJhd2VyLXNpZGUge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbiAgICAmLm1hdC1kcmF3ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgfVxufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MobileLayoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-mobile-layout',
            templateUrl: './mobile-layout.component.html',
            styleUrls: ['./mobile-layout.component.scss']
          }]
        }], function () {
          return [{
            type: _side_menus_side_menus_service__WEBPACK_IMPORTED_MODULE_3__["SideMenusService"]
          }, {
            type: _responsive_breakpoints_service__WEBPACK_IMPORTED_MODULE_4__["ResponsiveBreakpointsService"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }];
        }, {
          layoutFlag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.layout-mobile']
          }],
          serverSideRendered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.server-side-rendered']
          }],
          mainSidenavOpened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.main-sidenav-opened']
          }],
          altSidenavOpened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.alt-sidenav-opened']
          }],
          mainSidenav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mainSidenav']
          }],
          altSidenav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['altSidenav']
          }]
        });
      })();
      /***/

    },

    /***/
    "82aN":
    /*!******************************************************!*\
      !*** ./src/app/business/services/company.service.ts ***!
      \******************************************************/

    /*! exports provided: CompanyService */

    /***/
    function aN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyService", function () {
        return CompanyService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var date_fns_esm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! date-fns/esm */
      "b/SL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _state_global_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../state/global-state.service */
      "yNiB");

      var CompanyService = /*#__PURE__*/function () {
        function CompanyService(http, globalState) {
          _classCallCheck(this, CompanyService);

          this.http = http;
          this.globalState = globalState;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
          this.company = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
          this.dashboardInfo = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }

        _createClass(CompanyService, [{
          key: "fetchCompany",
          value: function fetchCompany() {
            var _this4 = this;

            this.http.get("".concat(this.baseUrl, "/company/admin")).subscribe(function (data) {
              _this4.company.next(data);

              _this4.globalState.setUserCompany(data);
            });
          }
        }, {
          key: "fetchDashboardInfo",
          value: function fetchDashboardInfo(time) {
            var _this5 = this;

            this.http.get("".concat(this.baseUrl, "/company/admin/dashboardInfo?time=").concat(time)).subscribe(function (data) {
              _this5.dashboardInfo.next(data);
            });
          }
        }, {
          key: "getReport",
          value: function getReport(driverId, dateFrom, dateTo) {
            return this.http.get("".concat(this.baseUrl, "/company/admin/report/").concat(driverId, "?dateFrom=").concat(dateFrom, "&dateTo=").concat(dateTo));
          }
        }, {
          key: "getReportPdf",
          value: function getReportPdf(driver, dateFrom, dateTo) {
            var realDateTo = new Date(dateTo).getTime() > Date.now() ? Date.now() : new Date(dateTo);
            var name = "".concat(driver.first_name, "_").concat(driver.last_name, "_").concat(Object(date_fns_esm__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date(dateFrom), 'MM-dd-yyyy'), "_").concat(Object(date_fns_esm__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date(realDateTo), "MM-dd-yyyy"));
            this.http.post("".concat(this.baseUrl, "/company/admin/report/").concat(driver.id, "/pdf?dateFrom=").concat(dateFrom, "&dateTo=").concat(dateTo), {}, {
              responseType: "arraybuffer"
            }).subscribe(function (data) {
              var blob = new Blob([data], {
                type: "application/pdf"
              });
              var url = window.URL.createObjectURL(blob); //window.open(url);

              var link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", name + ".pdf");
              document.body.appendChild(link);
              link.click();
            });
          }
        }, {
          key: "search",
          value: function search(body) {
            return this.http.post("".concat(this.baseUrl, "/company/admin/search"), body);
          }
        }, {
          key: "updateCompany",
          value: function updateCompany(body) {
            var _this6 = this;

            return this.http.put("".concat(this.baseUrl, "/company/admin"), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              _this6.fetchCompany();

              return res;
            }));
          }
        }, {
          key: "updateInvoiceNumber",
          value: function updateInvoiceNumber(body) {
            var _this7 = this;

            return this.http.put("".concat(this.baseUrl, "/company/admin/startInvoiceNumber"), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              _this7.fetchCompany();

              return res;
            }));
          }
        }]);

        return CompanyService;
      }();

      CompanyService.ɵfac = function CompanyService_Factory(t) {
        return new (t || CompanyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_state_global_state_service__WEBPACK_IMPORTED_MODULE_6__["GlobalStateService"]));
      };

      CompanyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CompanyService,
        factory: CompanyService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
          }, {
            type: _state_global_state_service__WEBPACK_IMPORTED_MODULE_6__["GlobalStateService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "8zvB":
    /*!******************************************************!*\
      !*** ./src/app/business/services/vehicle.service.ts ***!
      \******************************************************/

    /*! exports provided: VehicleService */

    /***/
    function zvB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VehicleService", function () {
        return VehicleService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var VehicleService = /*#__PURE__*/function () {
        function VehicleService(http) {
          _classCallCheck(this, VehicleService);

          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
          this.years = [];
          this.makes = MAKES;
          this.setYears();
        }

        _createClass(VehicleService, [{
          key: "searchVin",
          value: function searchVin(vin) {
            var _this8 = this;

            var wait = 600;
            clearTimeout(this.timerId);
            return new Promise(function (resolve, reject) {
              _this8.timerId = setTimeout(function () {
                _this8.http.get("".concat(_this8.baseUrl, "/general/vin/").concat(vin)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
                  if (!data.valid) {
                    throw new Error("Invalid vin");
                  }

                  return data;
                })).subscribe(function (data) {
                  return resolve(data);
                }, function (err) {
                  return reject(err);
                });
              }, wait);
            });
          }
        }, {
          key: "getModelsByMake",
          value: function getModelsByMake(make) {
            var _this9 = this;

            return new Promise(function (resolve, reject) {
              _this9.http.get("".concat(_this9.baseUrl, "/general/vehicleModels/").concat(make)).subscribe(function (data) {
                return resolve(data);
              }, function (err) {
                return reject(err);
              });
            });
          }
        }, {
          key: "setYears",
          value: function setYears() {
            var currentYear = new Date().getFullYear();

            for (var i = currentYear; i >= 1950; i--) {
              this.years.push(i);
            }
          }
        }, {
          key: "getReportPdf",
          value: function getReportPdf(invoiceId, vehicleId) {
            this.http.get("".concat(this.baseUrl, "/general/vehicleReport/").concat(invoiceId, "/").concat(vehicleId), {
              responseType: "arraybuffer"
            }).subscribe(function (data) {
              var blob = new Blob([data], {
                type: "application/pdf"
              });
              var url = window.URL.createObjectURL(blob);
              location.replace(url); // const link = document.createElement("a");
              // link.href = url;
              // link.setAttribute("download", name + ".pdf");
              // document.body.appendChild(link);
              // link.click();
            });
          }
        }]);

        return VehicleService;
      }();

      VehicleService.ɵfac = function VehicleService_Factory(t) {
        return new (t || VehicleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      VehicleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: VehicleService,
        factory: VehicleService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VehicleService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();

      var MAKES = ["AMC", "Acura", "Alfa Romeo", "Ariel", "Aston Martin", "Audi", "Austin", "Austin Healey", "BMW", "Bentley", "Bugatti", "Buick", "Cadillac", "Chevrolet", "Chrysler", "Citroën", "Cord", "Daewoo", "Daihatsu", "Datsun", "De Tomaso", "DeLorean", "DeSoto", "Dodge", "Eagle", "Edsel", "Ferrari", "Fiat", "Fisker", "Ford", "GMC", "Genesis", "Geo", "Honda", "Hudson", "Hummer", "Hyundai", "Infiniti", "International Harvester", "Isuzu", "Jaguar", "Jeep", "Kia", "Koenigsegg", "Lamborghini", "Lancia", "Land Rover", "Lexus", "Lincoln", "Lotus", "MG", "Maserati", "Maybach", "Mazda", "McLaren", "Mercedes-Benz", "Mercury", "Mini", "Mitsubishi", "Morgan", "Morris", "Nash", "Nissan", "Oldsmobile", "Opel", "Other Makes", "Packard", "Peugeot", "Plymouth", "Pontiac", "Porsche", "Ram", "Renault", "Replica/Kit Makes", "Rolls-Royce", "Saab", "Saturn", "Scion", "Shelby", "Skoda", "Smart", "Studebaker", "Subaru", "Sunbeam", "Suzuki", "Tesla", "Toyota", "Triumph", "Volkswagen", "Volvo", "Willys"];
      /***/
    },

    /***/
    "9Ku7":
    /*!**********************************************************!*\
      !*** ./src/app/authentication/authentication.service.ts ***!
      \**********************************************************/

    /*! exports provided: AuthenticationService */

    /***/
    function Ku7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
        return AuthenticationService;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _core_config_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../core/config/config.service */
      "EdIQ");
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! jwt-decode */
      "EjJx");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _business_state_invoice_state_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../business/state/invoice-state.service */
      "W7lO");
      /* harmony import */


      var _business_state_global_state_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../business/state/global-state.service */
      "yNiB");

      var AuthenticationService = /*#__PURE__*/function () {
        function AuthenticationService(http, platformId, invoiceState, globalState) {
          _classCallCheck(this, AuthenticationService);

          this.http = http;
          this.platformId = platformId;
          this.invoiceState = invoiceState;
          this.globalState = globalState;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl;
          var userStorage = JSON.parse(localStorage.getItem("user"));

          if (userStorage === null || userStorage === void 0 ? void 0 : userStorage.id) {
            this.loggedUser = userStorage;
          }

          this.loggedUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.loggedUser);
          this.initRefreshToken();
        } // isAuthenticated() {
        //   return this.loggedUserSubject.asObservable();
        // }


        _createClass(AuthenticationService, [{
          key: "initRefreshToken",
          value: function initRefreshToken() {
            var _this10 = this;

            if (this.isLoggedIn()) {
              var token = this.getAccessToken();

              if (token) {
                var _Object = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_6__["default"])(token),
                    exp = _Object.exp;

                var refreshIn = exp - Date.now() / 1000 - 30;
                this.refreshTokenTimer = setTimeout(function () {
                  _this10.refreshToken();
                }, refreshIn * 1000);
              }
            } else {
              this.logout();
            }
          }
        }, {
          key: "isLoggedIn",
          value: function isLoggedIn() {
            var token = this.getAccessToken();
            if (!token) return false;

            try {
              var _Object2 = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_6__["default"])(token),
                  roles = _Object2.roles,
                  exp = _Object2.exp;

              var expired = Date.now() >= exp * 1000;
              return (roles.includes("ADMIN") || roles.includes("MANAGER")) && !expired;
            } catch (error) {
              return false;
            }
          }
        }, {
          key: "isAdmin",
          value: function isAdmin() {
            var token = this.getAccessToken();
            if (!token) return false;

            try {
              var _Object3 = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_6__["default"])(token),
                  roles = _Object3.roles;

              return roles.includes("ADMIN");
            } catch (error) {
              return false;
            }
          }
        }, {
          key: "isManager",
          value: function isManager() {
            var token = this.getAccessToken();
            if (!token) return false;

            try {
              var _Object4 = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_6__["default"])(token),
                  roles = _Object4.roles;

              return roles.includes("MANAGER");
            } catch (error) {
              return false;
            }
          }
        }, {
          key: "setUser",
          value: function setUser(_ref) {
            var user = _ref.user,
                tokens = _ref.tokens;
            localStorage.setItem(AuthenticationService.TOKEN_KEY, tokens.access.token);
            localStorage.setItem(AuthenticationService.REFRESH_TOKEN_KEY, tokens.refresh.token);
            localStorage.setItem(AuthenticationService.USER_PROFILE_KEY, JSON.stringify(user));
            this.tokens = tokens;
            this.loggedUserSubject.next(user);
            this.initRefreshToken(); //this.startRefreshTokenTimer();
          }
        }, {
          key: "signup",
          value: function signup(data) {
            // your signup logic should go here
            this.loggedUserSubject.next(this.loggedUser);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true);
          }
        }, {
          key: "signin",
          value: function signin(email, password) {
            var _this11 = this;

            return this.http.post("".concat(_core_config_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"].API_URL, "/auth/login"), {
              email: email,
              password: password
            }, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
              })
            }).pipe( //map((resp) => resp),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
              _this11.setUser(res);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
              console.log("Error!: ", error);
              throw error;
            }));
          }
        }, {
          key: "refreshToken",
          value: function refreshToken() {
            var _this12 = this;

            //console.log("Refreshing", new Date());
            var refreshToken = this.getRefreshToken();
            this.http.post("".concat(_core_config_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"].API_URL, "/auth/refresh-tokens"), {
              refreshToken: refreshToken
            }, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
              })
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
              localStorage.setItem(AuthenticationService.TOKEN_KEY, res.access.token);
              localStorage.setItem(AuthenticationService.REFRESH_TOKEN_KEY, res.refresh.token);

              _this12.initRefreshToken();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
              console.log("Error!: ", error);
              throw error;
            })).subscribe();
          }
        }, {
          key: "logout",
          value: function logout() {
            this.loggedUser = null;
            this.deleteUser();
            this.loggedUserSubject.next(null);
            this.invoiceState.resetState();
            this.globalState.resetState();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true);
          }
        }, {
          key: "getAccessToken",
          value: function getAccessToken() {
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platformId)) {
              return localStorage.getItem(AuthenticationService.TOKEN_KEY);
            } else {
              return null;
            }
          }
        }, {
          key: "getRefreshToken",
          value: function getRefreshToken() {
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platformId)) {
              return localStorage.getItem(AuthenticationService.REFRESH_TOKEN_KEY);
            } else {
              return null;
            }
          }
        }, {
          key: "recoverPassword",
          value: function recoverPassword(email) {
            return this.http.post("".concat(this.baseUrl, "/auth/forgot-password"), {
              email: email
            });
          }
        }, {
          key: "resetPassword",
          value: function resetPassword(password, token) {
            return this.http.post("".concat(this.baseUrl, "/auth/reset-password?token=").concat(token), {
              password: password
            });
          }
        }, {
          key: "deleteUser",
          value: function deleteUser() {
            localStorage.removeItem(AuthenticationService.TOKEN_KEY);
            localStorage.removeItem(AuthenticationService.REFRESH_TOKEN_KEY);
            localStorage.removeItem(AuthenticationService.USER_PROFILE_KEY);
          }
        }]);

        return AuthenticationService;
      }();

      AuthenticationService.USER_PROFILE_KEY = "user";
      AuthenticationService.TOKEN_KEY = "access_token";
      AuthenticationService.REFRESH_TOKEN_KEY = "refresh_token";

      AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
        return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_business_state_invoice_state_service__WEBPACK_IMPORTED_MODULE_8__["InvoicesStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_business_state_global_state_service__WEBPACK_IMPORTED_MODULE_9__["GlobalStateService"]));
      };

      AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: AuthenticationService,
        factory: AuthenticationService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AuthenticationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]]
            }]
          }, {
            type: _business_state_invoice_state_service__WEBPACK_IMPORTED_MODULE_8__["InvoicesStateService"]
          }, {
            type: _business_state_global_state_service__WEBPACK_IMPORTED_MODULE_9__["GlobalStateService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        //apiUrl: "http://ec2-34-211-98-227.us-west-2.compute.amazonaws.com:3000/v1",
        apiUrl: 'http://75.101.171.195:3000/v1'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "B7gC":
    /*!**************************************************************!*\
      !*** ./src/app/shell/aspect-ratio/aspect-ratio.component.ts ***!
      \**************************************************************/

    /*! exports provided: AspectRatioComponent */

    /***/
    function B7gC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AspectRatioComponent", function () {
        return AspectRatioComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var _c0 = ["*"];

      var AspectRatioComponent = /*#__PURE__*/function () {
        function AspectRatioComponent() {
          _classCallCheck(this, AspectRatioComponent);

          this.ratioPadding = '0px';
        }

        _createClass(AspectRatioComponent, [{
          key: "ratio",
          set: function set(ratio) {
            ratio = ratio !== undefined && ratio !== null ? ratio : {
              w: 1,
              h: 1
            };
            var heightRatio = ratio.h / ratio.w * 100 + '%'; // Conserve aspect ratio (see: http://stackoverflow.com/a/10441480/1116959)

            this.ratioPadding = '0px 0px ' + heightRatio + ' 0px';
          }
        }]);

        return AspectRatioComponent;
      }();

      AspectRatioComponent.ɵfac = function AspectRatioComponent_Factory(t) {
        return new (t || AspectRatioComponent)();
      };

      AspectRatioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AspectRatioComponent,
        selectors: [["cc-aspect-ratio"]],
        hostVars: 2,
        hostBindings: function AspectRatioComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("padding", ctx.ratioPadding);
          }
        },
        inputs: {
          ratio: "ratio"
        },
        ngContentSelectors: _c0,
        decls: 2,
        vars: 0,
        consts: [[1, "content-wrapper"]],
        template: function AspectRatioComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["[_nghost-%COMP%] {\n  display: block;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n[_nghost-%COMP%]   .content-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hlbGwvYXNwZWN0LXJhdGlvL2FzcGVjdC1yYXRpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL2FzcGVjdC1yYXRpby9hc3BlY3QtcmF0aW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC5jb250ZW50LXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBib3R0b206IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgfVxufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AspectRatioComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'cc-aspect-ratio',
            templateUrl: './aspect-ratio.component.html',
            styleUrls: ['./aspect-ratio.component.scss']
          }]
        }], function () {
          return [];
        }, {
          ratioPadding: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.padding']
          }],
          ratio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "CEen":
    /*!************************************************************************!*\
      !*** ./src/app/shared/show-hide-password/show-hide-input.directive.ts ***!
      \************************************************************************/

    /*! exports provided: ShowHideInputDirective */

    /***/
    function CEen(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowHideInputDirective", function () {
        return ShowHideInputDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ShowHideInputDirective = /*#__PURE__*/_createClass(function ShowHideInputDirective() {
        _classCallCheck(this, ShowHideInputDirective);
      });

      ShowHideInputDirective.ɵfac = function ShowHideInputDirective_Factory(t) {
        return new (t || ShowHideInputDirective)();
      };

      ShowHideInputDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ShowHideInputDirective,
        selectors: [["", "appShowHideInput", ""]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowHideInputDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[appShowHideInput]'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "D+hS":
    /*!********************************************************!*\
      !*** ./src/app/core/responsive-breakpoints.service.ts ***!
      \********************************************************/

    /*! exports provided: ResponsiveBreakpointsService */

    /***/
    function DHS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResponsiveBreakpointsService", function () {
        return ResponsiveBreakpointsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "0MNC");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var ResponsiveBreakpointsService = /*#__PURE__*/_createClass(function ResponsiveBreakpointsService(breakpointObserver) {
        var _this13 = this;

        _classCallCheck(this, ResponsiveBreakpointsService);

        this.breakpointObserver = breakpointObserver;
        this.screenSizeChangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        var isSmallScreen = this.breakpointObserver.isMatched([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small]);
        var isMediumScreen = this.breakpointObserver.isMatched([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Medium]);
        this.currentScreenSize = isSmallScreen ? 'small' : isMediumScreen ? 'medium' : 'large'; // Use Angular CDK Breakpoint Observer to detect changes on the screen size

        this.breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Medium, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Large, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XLarge]).subscribe(function (result) {
          if (result.matches) {
            if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall] || result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small]) {
              _this13.screenSizeChangeSubject.next('small');
            }

            if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Medium]) {
              _this13.screenSizeChangeSubject.next('medium');
            }

            if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Large] || result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XLarge]) {
              _this13.screenSizeChangeSubject.next('large');
            }
          }
        });
      });

      ResponsiveBreakpointsService.ɵfac = function ResponsiveBreakpointsService_Factory(t) {
        return new (t || ResponsiveBreakpointsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]));
      };

      ResponsiveBreakpointsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ResponsiveBreakpointsService,
        factory: ResponsiveBreakpointsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResponsiveBreakpointsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Dd0O":
    /*!***********************************************************!*\
      !*** ./src/app/core/side-navbar/side-navbar.component.ts ***!
      \***********************************************************/

    /*! exports provided: SideNavbarComponent */

    /***/
    function Dd0O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SideNavbarComponent", function () {
        return SideNavbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _side_menus_side_menus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../side-menus/side-menus.service */
      "0+bB");
      /* harmony import */


      var src_app_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/authentication/authentication.service */
      "9Ku7");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shell/aspect-ratio/aspect-ratio.component */
      "B7gC");
      /* harmony import */


      var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shell/image-shell/image-shell.component */
      "2gss");

      var _c0 = function _c0() {
        return {
          w: 1,
          h: 1
        };
      };

      var _c1 = function _c1() {
        return ["/forms/form-layouts"];
      };

      var SideNavbarComponent = /*#__PURE__*/function () {
        function SideNavbarComponent(sideMenusService, authenticationService, router) {
          var _this14 = this;

          _classCallCheck(this, SideNavbarComponent);

          this.sideMenusService = sideMenusService;
          this.authenticationService = authenticationService;
          this.router = router;
          this.loggedUser = null;
          this.authenticationService.loggedUserSubject.subscribe({
            next: function next(loggedUser) {
              _this14.loggedUser = loggedUser;
            }
          });
        }

        _createClass(SideNavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "logout",
          value: function logout() {
            var _this15 = this;

            this.authenticationService.logout().subscribe(function () {
              return _this15.router.navigate(['authentication/signin']);
            });
          }
        }, {
          key: "toggleAltMenu",
          value: function toggleAltMenu() {
            this.sideMenusService.toggleAltMenuSubject.next('toggle');
          }
        }, {
          key: "toggleSettingsMenu",
          value: function toggleSettingsMenu() {
            this.sideMenusService.renderAltMenuSubject.next('settings');
            this.toggleAltMenu();
          }
        }, {
          key: "toggleNotificationsMenu",
          value: function toggleNotificationsMenu() {
            this.sideMenusService.renderAltMenuSubject.next('notifications');
            this.toggleAltMenu();
          }
        }, {
          key: "toggleSearchMenu",
          value: function toggleSearchMenu() {
            this.sideMenusService.renderAltMenuSubject.next('search');
            this.toggleAltMenu();
          }
        }]);

        return SideNavbarComponent;
      }();

      SideNavbarComponent.ɵfac = function SideNavbarComponent_Factory(t) {
        return new (t || SideNavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_side_menus_side_menus_service__WEBPACK_IMPORTED_MODULE_1__["SideMenusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      SideNavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SideNavbarComponent,
        selectors: [["app-side-navbar"]],
        decls: 20,
        vars: 6,
        consts: [[1, "navbar-branding"], ["svgIcon", "angular-logo", 1, "brand-logo"], [1, "navbar-actions"], ["type", "button", 1, "action-button", "btn", "btn-link", 3, "click"], ["svgIcon", "settings", 1, "navbar-icons"], ["svgIcon", "notifications", 1, "navbar-icons"], ["svgIcon", "search", 1, "navbar-icons"], [1, "navbar-user"], ["ngbDropdown", "", "placement", "top-left", "display", "static", 1, "user-actions-dropdown"], ["id", "accountMenu", "ngbDropdownToggle", "", 1, "user-action-toggle-btn", "btn", "btn-link", "dropright"], [1, "user-image-wrapper"], [3, "ratio"], ["animation", "spinner", 1, "user-image", 3, "src", "alt"], ["ngbDropdownMenu", "", "aria-labelledby", "accountMenu", 1, "dropdown-menu-left"], ["ngbDropdownItem", "", 1, "btn", "btn-link", 3, "routerLink"], ["ngbDropdownItem", "", 1, "btn", "btn-link", 3, "click"]],
        template: function SideNavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavbarComponent_Template_button_click_3_listener() {
              return ctx.toggleSettingsMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavbarComponent_Template_button_click_5_listener() {
              return ctx.toggleNotificationsMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavbarComponent_Template_button_click_7_listener() {
              return ctx.toggleSearchMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "cc-aspect-ratio", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "cc-image-shell", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Account");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavbarComponent_Template_button_click_18_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Log out");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.loggedUser == null ? null : ctx.loggedUser.image)("alt", "user image");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownToggle"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_6__["AspectRatioComponent"], _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_7__["ImageShellComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownMenu"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownItem"]],
        styles: ["[_nghost-%COMP%] {\n  --side-navbar-background: #333333;\n  --side-navbar-color: #FFFFFF;\n  --side-navbar-width: 80px;\n  --side-navbar-padding: 35px;\n  --side-navbar-spacing: 10px;\n  --side-navbar-controls-width: calc(var(--side-navbar-width) / 2);\n  --side-navbar-icon-size: calc(var(--side-navbar-spacing) * 2);\n}\n\n[_nghost-%COMP%] {\n  position: fixed;\n  z-index: 99;\n  top: 0px;\n  width: var(--side-navbar-width);\n  height: 100vh;\n  padding: var(--side-navbar-padding) 0px;\n  display: flex;\n  flex-direction: column;\n  background: var(--side-navbar-background);\n  color: var(--side-navbar-color);\n}\n\n[_nghost-%COMP%]   .navbar-branding[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n[_nghost-%COMP%]   .navbar-actions[_ngcontent-%COMP%] {\n  margin-top: auto;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\n[_nghost-%COMP%]   .navbar-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--side-navbar-color);\n}\n\n[_nghost-%COMP%]   .navbar-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]    + .action-button[_ngcontent-%COMP%] {\n  margin-top: calc(var(--side-navbar-spacing) * 2);\n}\n\n[_nghost-%COMP%]   .navbar-actions[_ngcontent-%COMP%]   .action-button.btn[_ngcontent-%COMP%] {\n  padding: var(--side-navbar-spacing);\n}\n\n[_nghost-%COMP%]   .navbar-actions[_ngcontent-%COMP%]   mat-icon.navbar-icons[_ngcontent-%COMP%] {\n  width: var(--side-navbar-icon-size);\n  height: var(--side-navbar-icon-size);\n}\n\n[_nghost-%COMP%]   .navbar-user[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding-top: calc(var(--side-navbar-spacing) * 2);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n[_nghost-%COMP%]   .navbar-user[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%] {\n  width: var(--side-navbar-controls-width);\n  flex-shrink: 0;\n}\n\n[_nghost-%COMP%]   .navbar-user[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%]   cc-image-shell.user-image[_ngcontent-%COMP%] {\n  --image-shell-border-radius: 50%;\n  --image-shell-spinner-size: var(--side-navbar-icon-size);\n}\n\n[_nghost-%COMP%]   .navbar-user[_ngcontent-%COMP%]   .user-actions-dropdown[_ngcontent-%COMP%] {\n  --toggle-btn-padding: 5px;\n}\n\n[_nghost-%COMP%]   .navbar-user[_ngcontent-%COMP%]   .user-actions-dropdown[_ngcontent-%COMP%]   .user-action-toggle-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  text-decoration: none;\n}\n\n[_nghost-%COMP%]   .navbar-user[_ngcontent-%COMP%]   .user-actions-dropdown[_ngcontent-%COMP%]   .user-action-toggle-btn.btn[_ngcontent-%COMP%] {\n  padding: 0px var(--toggle-btn-padding);\n}\n\n[_nghost-%COMP%]   .navbar-user[_ngcontent-%COMP%]   .user-actions-dropdown[_ngcontent-%COMP%]   .user-action-toggle-btn.dropdown-toggle[_ngcontent-%COMP%]::after {\n  content: none;\n}\n\n[_nghost-%COMP%]   .navbar-user[_ngcontent-%COMP%]   .user-actions-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  left: 100%;\n  bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9zaWRlLW5hdmJhci9zdHlsZXMvc2lkZS1uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxpQ0FBQTtFQUNBLDRCQUFBO0VBRUEseUJBQUE7RUFHQSwyQkFBQTtFQUVBLDJCQUFBO0VBRUEsZ0VBQUE7RUFDQSw2REFBQTtBQUxGOztBQVFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBRUEsK0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUNBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSx5Q0FBQTtFQUNBLCtCQUFBO0FBUkY7O0FBVUU7RUFDRSxrQkFBQTtBQVJKOztBQVdFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQVRKOztBQVdJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtBQVROOztBQVdNO0VBQ0UsZ0RBQUE7QUFUUjs7QUFhTTtFQUNFLG1DQUFBO0FBWFI7O0FBZUk7RUFDRSxtQ0FBQTtFQUNBLG9DQUFBO0FBYk47O0FBaUJFO0VBQ0UsZ0JBQUE7RUFDQSxpREFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBZko7O0FBaUJJO0VBQ0Usd0NBQUE7RUFDQSxjQUFBO0FBZk47O0FBaUJNO0VBQ0UsZ0NBQUE7RUFDQSx3REFBQTtBQWZSOztBQW1CSTtFQUNFLHlCQUFBO0FBakJOOztBQW1CTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQWpCUjs7QUFvQlE7RUFDRSxzQ0FBQTtBQWxCVjs7QUFzQlU7RUFDRSxhQUFBO0FBcEJaOztBQTBCTTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FBeEJSIiwiZmlsZSI6InNyYy9hcHAvY29yZS9zaWRlLW5hdmJhci9zdHlsZXMvc2lkZS1uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC8vIERlZmF1bHQgdmFsdWVzLiBUaGVzZSBtYXkgYmUgb3ZlcnJpZGRlbiBpbiB0aGUgY29tcG9uZW50J3MgcGFyZW50XG4gIC0tc2lkZS1uYXZiYXItYmFja2dyb3VuZDogIzMzMzMzMztcbiAgLS1zaWRlLW5hdmJhci1jb2xvcjogI0ZGRkZGRjtcblxuICAtLXNpZGUtbmF2YmFyLXdpZHRoOiA4MHB4O1xuXG4gIC8vIFVzZWQgbWFpbmx5IGF0IHRoZSB0b3AgYW5kIGJvdHRvbSBvZiB0aGUgbmF2YmFyXG4gIC0tc2lkZS1uYXZiYXItcGFkZGluZzogMzVweDtcbiAgLy8gVXNlZCBtYWlubHkgdG8gc3BhY2UgaXRlbXMgaW5zaWRlIHRoZSBuYXZiYXJcbiAgLS1zaWRlLW5hdmJhci1zcGFjaW5nOiAxMHB4O1xuXG4gIC0tc2lkZS1uYXZiYXItY29udHJvbHMtd2lkdGg6IGNhbGModmFyKC0tc2lkZS1uYXZiYXItd2lkdGgpIC8gMik7XG4gIC0tc2lkZS1uYXZiYXItaWNvbi1zaXplOiBjYWxjKHZhcigtLXNpZGUtbmF2YmFyLXNwYWNpbmcpICogMik7XG59XG5cbjpob3N0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTtcbiAgdG9wOiAwcHg7XG5cbiAgd2lkdGg6IHZhcigtLXNpZGUtbmF2YmFyLXdpZHRoKTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogdmFyKC0tc2lkZS1uYXZiYXItcGFkZGluZykgMHB4O1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZS1uYXZiYXItYmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS1zaWRlLW5hdmJhci1jb2xvcik7XG5cbiAgLm5hdmJhci1icmFuZGluZyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLm5hdmJhci1hY3Rpb25zIHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLmFjdGlvbi1idXR0b24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGNvbG9yOiB2YXIoLS1zaWRlLW5hdmJhci1jb2xvcik7XG5cbiAgICAgICYgKyAuYWN0aW9uLWJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tc2lkZS1uYXZiYXItc3BhY2luZykgKiAyKTtcbiAgICAgIH1cblxuICAgICAgLy8gT3ZlcnJpZGUgQm9vdHN0cmFwIHN0eWxlc1xuICAgICAgJi5idG4ge1xuICAgICAgICBwYWRkaW5nOiB2YXIoLS1zaWRlLW5hdmJhci1zcGFjaW5nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtYXQtaWNvbi5uYXZiYXItaWNvbnMge1xuICAgICAgd2lkdGg6IHZhcigtLXNpZGUtbmF2YmFyLWljb24tc2l6ZSk7XG4gICAgICBoZWlnaHQ6IHZhcigtLXNpZGUtbmF2YmFyLWljb24tc2l6ZSk7XG4gICAgfVxuICB9IC8vIC5uYXZiYXItYWN0aW9uc1xuXG4gIC5uYXZiYXItdXNlciB7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1zaWRlLW5hdmJhci1zcGFjaW5nKSAqIDIpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC51c2VyLWltYWdlLXdyYXBwZXIge1xuICAgICAgd2lkdGg6IHZhcigtLXNpZGUtbmF2YmFyLWNvbnRyb2xzLXdpZHRoKTtcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xuXG4gICAgICBjYy1pbWFnZS1zaGVsbC51c2VyLWltYWdlIHtcbiAgICAgICAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplOiB2YXIoLS1zaWRlLW5hdmJhci1pY29uLXNpemUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC51c2VyLWFjdGlvbnMtZHJvcGRvd24ge1xuICAgICAgLS10b2dnbGUtYnRuLXBhZGRpbmc6IDVweDtcblxuICAgICAgLnVzZXItYWN0aW9uLXRvZ2dsZS1idG4ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgICAgICAvLyBPdmVycmlkZSBCb290c3RyYXAgc3R5bGVzXG4gICAgICAgICYuYnRuIHtcbiAgICAgICAgICBwYWRkaW5nOiAwcHggdmFyKC0tdG9nZ2xlLWJ0bi1wYWRkaW5nKTtcbiAgICAgICAgfVxuICAgICAgICAmLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgICAgICAgLy8gUmVzZXQgc3R5bGVzXG4gICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gT3ZlcnJpZGUgQm9vdHN0cmFwIHN0eWxlc1xuICAgICAgLmRyb3Bkb3duLW1lbnUge1xuICAgICAgICBsZWZ0OiAxMDAlO1xuICAgICAgICBib3R0b206IDBweDtcbiAgICAgIH1cbiAgICB9IC8vIC51c2VyLWFjdGlvbnMtZHJvcGRvd25cbiAgfSAvLyAubmF2YmFyLXVzZXJcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideNavbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-side-navbar',
            templateUrl: './side-navbar.component.html',
            styleUrls: ['./styles/side-navbar.component.scss']
          }]
        }], function () {
          return [{
            type: _side_menus_side_menus_service__WEBPACK_IMPORTED_MODULE_1__["SideMenusService"]
          }, {
            type: src_app_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Dj+N":
    /*!**************************************************************!*\
      !*** ./src/app/core/layouts/empty/empty-layout.component.ts ***!
      \**************************************************************/

    /*! exports provided: EmptyLayoutComponent */

    /***/
    function DjN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmptyLayoutComponent", function () {
        return EmptyLayoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var EmptyLayoutComponent = /*#__PURE__*/function () {
        function EmptyLayoutComponent() {
          _classCallCheck(this, EmptyLayoutComponent);
        }

        _createClass(EmptyLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return EmptyLayoutComponent;
      }();

      EmptyLayoutComponent.ɵfac = function EmptyLayoutComponent_Factory(t) {
        return new (t || EmptyLayoutComponent)();
      };

      EmptyLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EmptyLayoutComponent,
        selectors: [["app-empty-layout"]],
        decls: 1,
        vars: 0,
        template: function EmptyLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbGF5b3V0cy9lbXB0eS9lbXB0eS1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmptyLayoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-empty-layout',
            templateUrl: './empty-layout.component.html',
            styleUrls: ['./empty-layout.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "E21u":
    /*!***************************************!*\
      !*** ./src/app/core/state.service.ts ***!
      \***************************************/

    /*! exports provided: StateService */

    /***/
    function E21u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StateService", function () {
        return StateService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var StateService = /*#__PURE__*/function () {
        function StateService(initialState) {
          _classCallCheck(this, StateService);

          this.state$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](initialState);
          this.initialState = initialState;
        }

        _createClass(StateService, [{
          key: "state",
          get: function get() {
            return this.state$.getValue();
          }
        }, {
          key: "select",
          value: function select(mapFn) {
            return this.state$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (state) {
              return mapFn(state);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
          }
        }, {
          key: "setState",
          value: function setState(newState) {
            this.state$.next(Object.assign(Object.assign({}, this.state), newState));
          }
        }, {
          key: "resetState",
          value: function resetState() {
            this.state$.next(this.initialState);
          }
        }]);

        return StateService;
      }();
      /***/

    },

    /***/
    "EXnx":
    /*!*********************************************************!*\
      !*** ./src/app/core/top-navbar/top-navbar.component.ts ***!
      \*********************************************************/

    /*! exports provided: TopNavbarComponent */

    /***/
    function EXnx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TopNavbarComponent", function () {
        return TopNavbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _side_menus_side_menus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../side-menus/side-menus.service */
      "0+bB");
      /* harmony import */


      var src_app_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/authentication/authentication.service */
      "9Ku7");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shell/text-shell/text-shell.component */
      "zK/y");

      var _c0 = function _c0() {
        return ["/general/profile"];
      };

      var _c1 = function _c1() {
        return ["/general/change-password"];
      };

      var TopNavbarComponent = /*#__PURE__*/function () {
        function TopNavbarComponent(sideMenusService, authenticationService, router) {
          var _this16 = this;

          _classCallCheck(this, TopNavbarComponent);

          this.sideMenusService = sideMenusService;
          this.authenticationService = authenticationService;
          this.router = router;
          this.loggedUser = null; // tslint:disable-next-line:variable-name

          this._mode = "expanded";
          this.authenticationService.loggedUserSubject.subscribe(function (loggedUser) {
            return _this16.loggedUser = loggedUser;
          });
        }

        _createClass(TopNavbarComponent, [{
          key: "mode",
          get: function get() {
            return this._mode;
          },
          set: function set(val) {
            this._mode = val !== undefined && val !== null ? val : "expanded";
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "logout",
          value: function logout() {
            var _this17 = this;

            this.authenticationService.logout().subscribe(function () {
              return _this17.router.navigate(["auth/signin"]);
            });
          }
        }, {
          key: "toggleMainMenu",
          value: function toggleMainMenu() {
            this.sideMenusService.toggleMainMenuSubject.next("toggle");
          }
        }, {
          key: "toggleAltMenu",
          value: function toggleAltMenu() {
            this.sideMenusService.toggleAltMenuSubject.next("toggle");
          }
        }, {
          key: "toggleSettingsMenu",
          value: function toggleSettingsMenu() {
            this.sideMenusService.renderAltMenuSubject.next("notifications");
            this.toggleAltMenu();
          }
        }, {
          key: "toggleNotificationsMenu",
          value: function toggleNotificationsMenu() {
            this.sideMenusService.renderAltMenuSubject.next("notifications");
            this.toggleAltMenu();
          }
        }]);

        return TopNavbarComponent;
      }();

      TopNavbarComponent.ɵfac = function TopNavbarComponent_Factory(t) {
        return new (t || TopNavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_side_menus_side_menus_service__WEBPACK_IMPORTED_MODULE_1__["SideMenusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      TopNavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TopNavbarComponent,
        selectors: [["app-top-navbar"]],
        hostVars: 1,
        hostBindings: function TopNavbarComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("mode", ctx.mode);
          }
        },
        inputs: {
          mode: "mode"
        },
        decls: 22,
        vars: 6,
        consts: [[1, "top-navbar-toolbar"], [1, "navbar-branding"], ["svgIcon", "angular-logo-2", 1, "brand-logo"], ["type", "button", 1, "btn", "toggle-sidenav-btn", 3, "click"], [1, "fa", "fa-bars"], [1, "navbar-controls"], [2, "flex-grow", "1"], [1, "navbar-user"], [1, "user-avatar"], ["ngbDropdown", "", "placement", "bottom-right", "display", "static", 1, "user-actions-dropdown"], ["id", "accountMenu", "ngbDropdownToggle", "", 1, "user-action-toggle-btn", "btn", "btn-link"], [1, "user-name"], [3, "data"], ["ngbDropdownMenu", "", "aria-labelledby", "accountMenu", 1, "dropdown-menu-right"], ["ngbDropdownItem", "", 1, "btn", "btn-link", 3, "routerLink"], ["ngbDropdownItem", "", 1, "btn", "btn-link", 3, "click"]],
        template: function TopNavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopNavbarComponent_Template_button_click_4_listener() {
              return ctx.toggleMainMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "cc-text-shell", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Change password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopNavbarComponent_Template_button_click_20_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Log out");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var tmp_0_0 = null;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = (ctx.loggedUser == null ? null : ctx.loggedUser.first_name == null ? null : ctx.loggedUser.first_name.charAt(0)) + (ctx.loggedUser == null ? null : ctx.loggedUser.last_name == null ? null : ctx.loggedUser.last_name.charAt(0))) == null ? null : tmp_0_0.toUpperCase(), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", (ctx.loggedUser == null ? null : ctx.loggedUser.first_name) ? ctx.loggedUser == null ? null : ctx.loggedUser.first_name.concat(" ").concat(ctx.loggedUser == null ? null : ctx.loggedUser.last_name) : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarRow"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownToggle"], _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_7__["TextShellComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownMenu"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownItem"]],
        styles: [".show-full-branding[_nghost-%COMP%], .show-bare-branding[_nghost-%COMP%] {\n  --top-navbar-branding-width: initial;\n  --top-navbar-branding-spacing: var(--top-navbar-padding);\n  --top-navbar-branding-toggle-padding: var(--top-navbar-spacing);\n  --top-navbar-branding-color: var(--top-navbar-color);\n}\n.show-full-branding[_nghost-%COMP%]   .navbar-branding[_ngcontent-%COMP%], .show-bare-branding[_nghost-%COMP%]   .navbar-branding[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  -webkit-padding-end: calc(var(--top-navbar-branding-spacing) - var(--top-navbar-branding-toggle-padding));\n          padding-inline-end: calc(var(--top-navbar-branding-spacing) - var(--top-navbar-branding-toggle-padding));\n}\n.show-full-branding.show-full-branding[_nghost-%COMP%]   .navbar-branding[_ngcontent-%COMP%], .show-bare-branding.show-full-branding[_nghost-%COMP%]   .navbar-branding[_ngcontent-%COMP%] {\n  flex: 0 0 calc(var(--top-navbar-branding-width) - var(--top-navbar-branding-spacing));\n  max-width: calc(var(--top-navbar-branding-width) - var(--top-navbar-branding-spacing));\n}\n.show-full-branding.show-full-branding[_nghost-%COMP%]   .navbar-branding[_ngcontent-%COMP%]   .toggle-sidenav-btn[_ngcontent-%COMP%], .show-bare-branding.show-full-branding[_nghost-%COMP%]   .navbar-branding[_ngcontent-%COMP%]   .toggle-sidenav-btn[_ngcontent-%COMP%] {\n  -webkit-margin-start: auto;\n          margin-inline-start: auto;\n}\n.show-full-branding.show-bare-branding[_nghost-%COMP%]   .navbar-branding[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%], .show-bare-branding.show-bare-branding[_nghost-%COMP%]   .navbar-branding[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  display: none;\n}\n.show-full-branding.show-bare-branding[_nghost-%COMP%]   .navbar-branding[_ngcontent-%COMP%]   .toggle-sidenav-btn[_ngcontent-%COMP%], .show-bare-branding.show-bare-branding[_nghost-%COMP%]   .navbar-branding[_ngcontent-%COMP%]   .toggle-sidenav-btn[_ngcontent-%COMP%] {\n  -webkit-margin-start: calc(var(--top-navbar-branding-toggle-padding) * -1);\n          margin-inline-start: calc(var(--top-navbar-branding-toggle-padding) * -1);\n}\n.add-actions-divider[_nghost-%COMP%], .add-user-divider[_nghost-%COMP%] {\n  --top-navbar-divider-color: #E4E7EB;\n  --divider-width: 2px;\n  --divider-color: var(--top-navbar-divider-color);\n  --divider-spacing: calc(var(--top-navbar-spacing) * 2);\n}\n.add-actions-divider.add-actions-divider[_nghost-%COMP%]   .navbar-actions[_ngcontent-%COMP%], .add-user-divider.add-actions-divider[_nghost-%COMP%]   .navbar-actions[_ngcontent-%COMP%] {\n  position: relative;\n  -webkit-padding-start: calc(var(--divider-spacing) + var(--divider-width));\n          padding-inline-start: calc(var(--divider-spacing) + var(--divider-width));\n}\n.add-actions-divider.add-actions-divider[_nghost-%COMP%]   .navbar-actions[_ngcontent-%COMP%]::before, .add-user-divider.add-actions-divider[_nghost-%COMP%]   .navbar-actions[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0px;\n  background-color: var(--divider-color, #333333);\n  width: var(--divider-width, 2px);\n  height: 100%;\n}\n.add-actions-divider.add-user-divider[_nghost-%COMP%]   .navbar-user[_ngcontent-%COMP%], .add-user-divider.add-user-divider[_nghost-%COMP%]   .navbar-user[_ngcontent-%COMP%] {\n  position: relative;\n  -webkit-padding-start: calc(var(--divider-spacing) + var(--divider-width));\n          padding-inline-start: calc(var(--divider-spacing) + var(--divider-width));\n}\n.add-actions-divider.add-user-divider[_nghost-%COMP%]   .navbar-user[_ngcontent-%COMP%]::before, .add-user-divider.add-user-divider[_nghost-%COMP%]   .navbar-user[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0px;\n  background-color: var(--divider-color, #333333);\n  width: var(--divider-width, 2px);\n  height: 100%;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.text-blue-light[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-light-rgb));\n}\n.text-blue-main[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-main-rgb));\n}\n.text-blue-dark[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-dark-rgb));\n}\n.bg-grey-light[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-grey-light-rgb));\n}\n.bg-grey-dark[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-grey-5-rgb));\n}\n.bg-blue-light[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-light-rgb));\n}\n.bg-blue-main[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-main-rgb));\n}\n.bg-blue-dark[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-dark-rgb));\n}\n.text-xs[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.text-base[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.text-lg[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.text-xl[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.text-2xl[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.text-3xl[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.capitalize[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.rounded-xl[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  overflow: hidden;\n}\n.border-primary-1[_ngcontent-%COMP%] {\n  border: 1px solid rgb(var(--palette-blue-main-rgb));\n}\n.border-primary-2[_ngcontent-%COMP%] {\n  border: 2px solid rgb(var(--palette-blue-main-rgb));\n}\n.custom-scroll[_ngcontent-%COMP%] {\n  padding-right: 4px;\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0.5em;\n  border-radius: 5px;\n  background-color: rgb(var(--palette-grey-light-rgb));\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  border: 0.3em solid;\n  border-color: rgb(var(--palette-grey-5-rgb));\n}\n[_nghost-%COMP%] {\n  --top-navbar-color: #cccccc;\n  --top-navbar-alt-color: #e6e6e6;\n  --top-navbar-background: #ffffff;\n  --top-navbar-border-color: #cccccc;\n  --top-navbar-height: 80px;\n  --top-navbar-padding: 35px;\n  --top-navbar-spacing: 10px;\n  --top-navbar-controls-height: calc(var(--top-navbar-height) / 2);\n  --top-navbar-icon-size: calc(var(--top-navbar-spacing) * 2);\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .user-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  font-weight: bold;\n  background-color: #fff;\n  color: #000;\n  border-radius: 50%;\n}\n@media (min-width: 601px) {\n  [_nghost-%COMP%]   .user-avatar[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n    line-height: 50px;\n    background-color: rgb(var(--palette-blue-light-rgb));\n  }\n}\n[_nghost-%COMP%]   mat-toolbar[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-main-rgb));\n  color: #fff;\n  padding: 0px var(--top-navbar-padding);\n}\n@media (min-width: 601px) {\n  [_nghost-%COMP%]   mat-toolbar[_ngcontent-%COMP%] {\n    background-color: #fafafa;\n    color: rgb(var(--palette-grey-9-rgb));\n  }\n}\n[_nghost-%COMP%]   mat-toolbar-row[_ngcontent-%COMP%] {\n  height: var(--top-navbar-height);\n  padding: 0px;\n}\n[_nghost-%COMP%]   .toggle-sidenav-btn[_ngcontent-%COMP%] {\n  color: #fff;\n}\n@media (min-width: 601px) {\n  [_nghost-%COMP%]   .toggle-sidenav-btn[_ngcontent-%COMP%] {\n    color: rgb(var(--palette-grey-9-rgb));\n  }\n}\n[_nghost-%COMP%]   .top-navbar-toolbar[_ngcontent-%COMP%]   .navbar-controls[_ngcontent-%COMP%] {\n  flex: 1 0 auto;\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   .top-navbar-toolbar[_ngcontent-%COMP%]   .navbar-search[_ngcontent-%COMP%] {\n  width: 50%;\n}\n[_nghost-%COMP%]   .top-navbar-toolbar[_ngcontent-%COMP%]   .navbar-search[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  font-family: Nunito;\n}\n[_nghost-%COMP%]   .top-navbar-toolbar[_ngcontent-%COMP%]   .navbar-search[_ngcontent-%COMP%]   .search-input.form-control-lg[_ngcontent-%COMP%] {\n  height: var(--top-navbar-controls-height);\n}\n[_nghost-%COMP%]   .top-navbar-toolbar[_ngcontent-%COMP%]   .navbar-search[_ngcontent-%COMP%]   .search-input.form-control[_ngcontent-%COMP%] {\n  border: none;\n  border-bottom: 1px solid var(--top-navbar-border-color);\n  border-radius: 0px;\n  font-size: 16px;\n  color: var(--top-navbar-color);\n  background-color: var(--top-navbar-background);\n}\n[_nghost-%COMP%]   .top-navbar-toolbar[_ngcontent-%COMP%]   .navbar-search[_ngcontent-%COMP%]   .search-input.form-control[_ngcontent-%COMP%]::-moz-placeholder {\n  color: var(--top-navbar-alt-color);\n}\n[_nghost-%COMP%]   .top-navbar-toolbar[_ngcontent-%COMP%]   .navbar-search[_ngcontent-%COMP%]   .search-input.form-control[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: var(--top-navbar-alt-color);\n}\n[_nghost-%COMP%]   .top-navbar-toolbar[_ngcontent-%COMP%]   .navbar-search[_ngcontent-%COMP%]   .search-input.form-control[_ngcontent-%COMP%]::placeholder {\n  color: var(--top-navbar-alt-color);\n}\n[_nghost-%COMP%]   .top-navbar-toolbar[_ngcontent-%COMP%]   .navbar-actions[_ngcontent-%COMP%] {\n  height: var(--top-navbar-controls-height);\n  -webkit-margin-start: auto;\n          margin-inline-start: auto;\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   .top-navbar-toolbar[_ngcontent-%COMP%]   .navbar-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%] {\n  color: var(--top-navbar-color);\n}\n[_nghost-%COMP%]   .top-navbar-toolbar[_ngcontent-%COMP%]   .navbar-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]    + .action-button[_ngcontent-%COMP%] {\n  -webkit-margin-start: var(--top-navbar-spacing);\n          margin-inline-start: var(--top-navbar-spacing);\n}\n[_nghost-%COMP%]   .top-navbar-toolbar[_ngcontent-%COMP%]   .navbar-actions[_ngcontent-%COMP%]   mat-icon.navbar-icons[_ngcontent-%COMP%] {\n  width: var(--top-navbar-icon-size);\n  height: var(--top-navbar-icon-size);\n}\n[_nghost-%COMP%]   .top-navbar-toolbar[_ngcontent-%COMP%]   .navbar-user[_ngcontent-%COMP%] {\n  height: var(--top-navbar-controls-height);\n  -webkit-margin-start: calc(var(--top-navbar-spacing) * 2);\n          margin-inline-start: calc(var(--top-navbar-spacing) * 2);\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   .top-navbar-toolbar[_ngcontent-%COMP%]   .navbar-user[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%] {\n  width: var(--top-navbar-controls-height);\n  flex-shrink: 0;\n}\n[_nghost-%COMP%]   .top-navbar-toolbar[_ngcontent-%COMP%]   .navbar-user[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%]   cc-image-shell.user-image[_ngcontent-%COMP%] {\n  --image-shell-border-radius: 50%;\n  --image-shell-spinner-size: var(--top-navbar-icon-size);\n}\n[_nghost-%COMP%]   .top-navbar-toolbar[_ngcontent-%COMP%]   .navbar-user[_ngcontent-%COMP%]   .user-actions-dropdown[_ngcontent-%COMP%] {\n  --toggle-btn-padding: 5px;\n  height: 100%;\n  -webkit-margin-start: calc(var(--top-navbar-spacing) - var(--toggle-btn-padding));\n          margin-inline-start: calc(var(--top-navbar-spacing) - var(--toggle-btn-padding));\n}\n[_nghost-%COMP%]   .top-navbar-toolbar[_ngcontent-%COMP%]   .navbar-user[_ngcontent-%COMP%]   .user-actions-dropdown[_ngcontent-%COMP%]   .user-action-toggle-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  text-decoration: none;\n}\n[_nghost-%COMP%]   .top-navbar-toolbar[_ngcontent-%COMP%]   .navbar-user[_ngcontent-%COMP%]   .user-actions-dropdown[_ngcontent-%COMP%]   .user-action-toggle-btn.btn[_ngcontent-%COMP%] {\n  padding: var(--toggle-btn-padding);\n}\n[_nghost-%COMP%]   .top-navbar-toolbar[_ngcontent-%COMP%]   .navbar-user[_ngcontent-%COMP%]   .user-actions-dropdown[_ngcontent-%COMP%]   .user-action-toggle-btn.dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: initial;\n  margin: 0px;\n  vertical-align: initial;\n  border: none;\n}\n[_nghost-%COMP%]   .top-navbar-toolbar[_ngcontent-%COMP%]   .navbar-user[_ngcontent-%COMP%]   .user-actions-dropdown[_ngcontent-%COMP%]   .user-action-toggle-btn.dropdown-toggle[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: inline-block;\n  border-style: solid;\n  border-width: 0 2px 2px 0;\n  padding: 3px;\n  transform: rotate(45deg);\n  vertical-align: middle;\n  color: #fff;\n}\n@media (min-width: 601px) {\n  [_nghost-%COMP%]   .top-navbar-toolbar[_ngcontent-%COMP%]   .navbar-user[_ngcontent-%COMP%]   .user-actions-dropdown[_ngcontent-%COMP%]   .user-action-toggle-btn.dropdown-toggle[_ngcontent-%COMP%]::after {\n    color: rgb(var(--palette-grey-9-rgb));\n  }\n}\n[_nghost-%COMP%]   .top-navbar-toolbar[_ngcontent-%COMP%]   .navbar-user[_ngcontent-%COMP%]   .user-actions-dropdown[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-family: Nunito;\n  font-size: 16px;\n  -webkit-margin-end: var(--top-navbar-spacing);\n          margin-inline-end: var(--top-navbar-spacing);\n  color: #fff;\n}\n@media (min-width: 601px) {\n  [_nghost-%COMP%]   .top-navbar-toolbar[_ngcontent-%COMP%]   .navbar-user[_ngcontent-%COMP%]   .user-actions-dropdown[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n    color: rgb(var(--palette-grey-9-rgb));\n  }\n}\n[_nghost-%COMP%]   .top-navbar-toolbar[_ngcontent-%COMP%]   .navbar-user[_ngcontent-%COMP%]   .user-actions-dropdown[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]    > cc-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 14px;\n  min-width: 80px;\n}\n[_nghost-%COMP%]   .top-navbar-toolbar[_ngcontent-%COMP%]   .navbar-user[_ngcontent-%COMP%]   .user-actions-dropdown[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]    > cc-text-shell.text-loaded[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS90b3AtbmF2YmFyL3N0eWxlcy9wYXJ0aWFscy9uYXZiYXItYnJhbmRpbmcuc2NzcyIsInNyYy9hcHAvY29yZS90b3AtbmF2YmFyL3N0eWxlcy90b3AtbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL3RvcC1uYXZiYXIvc3R5bGVzL3BhcnRpYWxzL25hdmJhci1kaXZpZGVycy5zY3NzIiwic3JjL3RoZW1lL3BhbGV0dGVzL3NoYXJlZC5zY3NzIiwic3JjL3RoZW1lL3BhbGV0dGVzL21vZGUuc2NzcyIsInNyYy90aGVtZS9jdXN0b20tY2xhc3Nlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7RUFDQSx3REFBQTtFQUNBLCtEQUFBO0VBQ0Esb0RBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUdBQUE7VUFBQSx3R0FBQTtBQ0NKO0FER0k7RUFDRSxxRkFBQTtFQUNBLHNGQUFBO0FDRE47QURHTTtFQUNFLDBCQUFBO1VBQUEseUJBQUE7QUNEUjtBRFFNO0VBQ0UsYUFBQTtBQ05SO0FEU007RUFDRSwwRUFBQTtVQUFBLHlFQUFBO0FDUFI7QUNYQTtFQUNFLG1DQUFBO0VBRUEsb0JBQUE7RUFDQSxnREFBQTtFQUNBLHNEQUFBO0FEYUY7QUNWSTtFQUNFLGtCQUFBO0VBQ0EsMEVBQUE7VUFBQSx5RUFBQTtBRFlOO0FDVk07RUFwQkosV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLCtDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FEaUNGO0FDWEk7RUFDRSxrQkFBQTtFQUNBLDBFQUFBO1VBQUEseUVBQUE7QURhTjtBQ1hNO0VBL0JKLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSwrQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtBRDZDRjtBRXREQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUROQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUROQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUROQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUROQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUNMQTtFQUNFLHlDQUFBO0FKcUdGO0FJbkdBO0VBQ0Usd0NBQUE7QUpzR0Y7QUlwR0E7RUFDRSx3Q0FBQTtBSnVHRjtBSW5HQTtFQUNFLG9EQUFBO0FKc0dGO0FJcEdBO0VBQ0UsZ0RBQUE7QUp1R0Y7QUlyR0E7RUFDRSxvREFBQTtBSndHRjtBSXRHQTtFQUNFLG1EQUFBO0FKeUdGO0FJdkdBO0VBQ0UsbURBQUE7QUowR0Y7QUl0R0E7RUFDRSxrQkFBQTtBSnlHRjtBSXZHQTtFQUNFLG1CQUFBO0FKMEdGO0FJeEdBO0VBQ0UsZUFBQTtBSjJHRjtBSXpHQTtFQUNFLG1CQUFBO0FKNEdGO0FJekdBO0VBQ0Usa0JBQUE7QUo0R0Y7QUl6R0E7RUFDRSxpQkFBQTtBSjRHRjtBSXpHQTtFQUNFLGtCQUFBO0FKNEdGO0FJekdBO0VBQ0UsZ0JBQUE7QUo0R0Y7QUkxR0E7RUFDRSxnQkFBQTtBSjZHRjtBSTFHQTtFQUNFLDBCQUFBO0FKNkdGO0FJMUdBO0VBQ0UsZUFBQTtBSjZHRjtBSTFHQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUo2R0Y7QUkxR0E7RUFDRSxtREFBQTtBSjZHRjtBSTFHQTtFQUNFLG1EQUFBO0FKNkdGO0FJMUdBO0VBQ0Usa0JBQUE7QUo2R0Y7QUkzR0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvREFBQTtBSjhHRjtBSTFHQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtBSjZHRjtBQXhNQTtFQUVFLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBRUEseUJBQUE7RUFHQSwwQkFBQTtFQUVBLDBCQUFBO0VBRUEsZ0VBQUE7RUFDQSwyREFBQTtBQXFNRjtBQWxNQTtFQUNFLGNBQUE7QUFxTUY7QUFuTUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBcU1KO0FBcE1JO0VBVEY7SUFVSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0lBQ0Ysb0RBQUE7RUF1TUY7QUFDRjtBQWxNRTtFQUtFLG1EQUFBO0VBQ0EsV0FBQTtFQUNBLHNDQUFBO0FBZ01KO0FBdE1JO0VBREY7SUFFSSx5QkFBQTtJQUNBLHFDQUFBO0VBeU1KO0FBQ0Y7QUFwTUU7RUFDRSxnQ0FBQTtFQUNBLFlBQUE7QUFzTUo7QUFuTUU7RUFDRSxXQUFBO0FBcU1KO0FBcE1JO0VBRkY7SUFHSSxxQ0FBQTtFQXVNSjtBQUNGO0FBbk1JO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQXFNTjtBQWxNSTtFQUNFLFVBQUE7QUFvTU47QUFsTU07RUFDRSxtQkFBQTtBQW9NUjtBQWpNUTtFQUNFLHlDQUFBO0FBbU1WO0FBak1RO0VBQ0UsWUFBQTtFQUNBLHVEQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSw4Q0FBQTtBQW1NVjtBQWpNVTtFQUNFLGtDQUFBO0FBbU1aO0FBcE1VO0VBQ0Usa0NBQUE7QUFtTVo7QUFwTVU7RUFDRSxrQ0FBQTtBQW1NWjtBQTdMSTtFQUNFLHlDQUFBO0VBQ0EsMEJBQUE7VUFBQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQStMTjtBQTdMTTtFQUNFLDhCQUFBO0FBK0xSO0FBN0xRO0VBQ0UsK0NBQUE7VUFBQSw4Q0FBQTtBQStMVjtBQTNMTTtFQUNFLGtDQUFBO0VBQ0EsbUNBQUE7QUE2TFI7QUF6TEk7RUFDRSx5Q0FBQTtFQUNBLHlEQUFBO1VBQUEsd0RBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUEyTE47QUF6TE07RUFDRSx3Q0FBQTtFQUNBLGNBQUE7QUEyTFI7QUF6TFE7RUFDRSxnQ0FBQTtFQUNBLHVEQUFBO0FBMkxWO0FBdkxNO0VBQ0UseUJBQUE7RUFHQSxZQUFBO0VBQ0EsaUZBQUE7VUFBQSxnRkFBQTtBQXVMUjtBQXJMUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQXVMVjtBQXBMVTtFQUNFLGtDQUFBO0FBc0xaO0FBbExZO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBb0xkO0FBaExZO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQWtMZDtBQWpMYztFQVRGO0lBVUkscUNBQUE7RUFvTGQ7QUFDRjtBQS9LUTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDZDQUFBO1VBQUEsNENBQUE7RUFDQSxXQUFBO0FBaUxWO0FBaExVO0VBTEY7SUFNSSxxQ0FBQTtFQW1MVjtBQUNGO0FBaExRO0VBQ0UsOEJBQUE7RUFFQSxlQUFBO0FBaUxWO0FBL0tVO0VBQ0UsY0FBQTtBQWlMWiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdG9wLW5hdmJhci9zdHlsZXMvdG9wLW5hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0KC5zaG93LWZ1bGwtYnJhbmRpbmcsIC5zaG93LWJhcmUtYnJhbmRpbmcpIHtcbiAgLS10b3AtbmF2YmFyLWJyYW5kaW5nLXdpZHRoOiBpbml0aWFsO1xuICAtLXRvcC1uYXZiYXItYnJhbmRpbmctc3BhY2luZzogdmFyKC0tdG9wLW5hdmJhci1wYWRkaW5nKTtcbiAgLS10b3AtbmF2YmFyLWJyYW5kaW5nLXRvZ2dsZS1wYWRkaW5nOiB2YXIoLS10b3AtbmF2YmFyLXNwYWNpbmcpO1xuICAtLXRvcC1uYXZiYXItYnJhbmRpbmctY29sb3I6IHZhcigtLXRvcC1uYXZiYXItY29sb3IpO1xuXG4gIC5uYXZiYXItYnJhbmRpbmcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IGNhbGModmFyKC0tdG9wLW5hdmJhci1icmFuZGluZy1zcGFjaW5nKSAtIHZhcigtLXRvcC1uYXZiYXItYnJhbmRpbmctdG9nZ2xlLXBhZGRpbmcpKTtcbiAgfVxuXG4gICYuc2hvdy1mdWxsLWJyYW5kaW5nIHtcbiAgICAubmF2YmFyLWJyYW5kaW5nIHtcbiAgICAgIGZsZXg6IDAgMCBjYWxjKHZhcigtLXRvcC1uYXZiYXItYnJhbmRpbmctd2lkdGgpIC0gdmFyKC0tdG9wLW5hdmJhci1icmFuZGluZy1zcGFjaW5nKSk7XG4gICAgICBtYXgtd2lkdGg6IGNhbGModmFyKC0tdG9wLW5hdmJhci1icmFuZGluZy13aWR0aCkgLSB2YXIoLS10b3AtbmF2YmFyLWJyYW5kaW5nLXNwYWNpbmcpKTtcblxuICAgICAgLnRvZ2dsZS1zaWRlbmF2LWJ0biB7XG4gICAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IGF1dG87XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5zaG93LWJhcmUtYnJhbmRpbmcge1xuICAgIC5uYXZiYXItYnJhbmRpbmcge1xuICAgICAgLmJyYW5kLWxvZ28ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAudG9nZ2xlLXNpZGVuYXYtYnRuIHtcbiAgICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS10b3AtbmF2YmFyLWJyYW5kaW5nLXRvZ2dsZS1wYWRkaW5nKSAqIC0xKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuL3BhcnRpYWxzL25hdmJhci1icmFuZGluZ1wiO1xuQGltcG9ydCBcIi4vcGFydGlhbHMvbmF2YmFyLWRpdmlkZXJzXCI7XG5AaW1wb3J0IFwic2hhcmVkXCI7XG5cbjpob3N0IHtcbiAgLy8gRGVmYXVsdCB2YWx1ZXMuIFRoZXNlIG1heSBiZSBvdmVycmlkZGVuIGluIHRoZSBjb21wb25lbnQncyBwYXJlbnRcbiAgLS10b3AtbmF2YmFyLWNvbG9yOiAjY2NjY2NjO1xuICAtLXRvcC1uYXZiYXItYWx0LWNvbG9yOiAjZTZlNmU2O1xuICAtLXRvcC1uYXZiYXItYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgLS10b3AtbmF2YmFyLWJvcmRlci1jb2xvcjogI2NjY2NjYztcblxuICAtLXRvcC1uYXZiYXItaGVpZ2h0OiA4MHB4O1xuXG4gIC8vIFVzZWQgbWFpbmx5IGF0IHRoZSBzdGFydCBhbmQgZW5kIG9mIHRoZSBuYXZiYXJcbiAgLS10b3AtbmF2YmFyLXBhZGRpbmc6IDM1cHg7XG4gIC8vIFVzZWQgbWFpbmx5IHRvIHNwYWNlIGl0ZW1zIGluc2lkZSB0aGUgbmF2YmFyXG4gIC0tdG9wLW5hdmJhci1zcGFjaW5nOiAxMHB4O1xuXG4gIC0tdG9wLW5hdmJhci1jb250cm9scy1oZWlnaHQ6IGNhbGModmFyKC0tdG9wLW5hdmJhci1oZWlnaHQpIC8gMik7XG4gIC0tdG9wLW5hdmJhci1pY29uLXNpemU6IGNhbGModmFyKC0tdG9wLW5hdmJhci1zcGFjaW5nKSAqIDIpO1xufVxuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuXG4gIC51c2VyLWF2YXRhciB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNjAxcHgpIHtcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1saWdodFwiKX07XG5cbiAgICB9XG4gIH1cblxuICAvLyBPdmVycmlkZSBNYXRlcmlhbCBzdHlsZXNcbiAgbWF0LXRvb2xiYXIge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA2MDFweCkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgICAgIGNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJncmV5LTlcIil9O1xuICAgIH1cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJibHVlLW1haW5cIil9O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDBweCB2YXIoLS10b3AtbmF2YmFyLXBhZGRpbmcpO1xuICB9XG4gIG1hdC10b29sYmFyLXJvdyB7XG4gICAgaGVpZ2h0OiB2YXIoLS10b3AtbmF2YmFyLWhlaWdodCk7XG4gICAgcGFkZGluZzogMHB4O1xuICB9XG5cbiAgLnRvZ2dsZS1zaWRlbmF2LWJ0bntcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNjAxcHgpIHtcbiAgICAgIGNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJncmV5LTlcIil9XG4gICAgfVxuICB9XG5cbiAgLnRvcC1uYXZiYXItdG9vbGJhciB7XG4gICAgLm5hdmJhci1jb250cm9scyB7XG4gICAgICBmbGV4OiAxIDAgYXV0bztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH0gLy8gLm5hdmJhci1jb250cm9sc1xuXG4gICAgLm5hdmJhci1zZWFyY2gge1xuICAgICAgd2lkdGg6IDUwJTtcblxuICAgICAgLnNlYXJjaC1pbnB1dCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBOdW5pdG87XG5cbiAgICAgICAgLy8gT3ZlcnJpZGUgQm9vdHN0cmFwIHN0eWxlc1xuICAgICAgICAmLmZvcm0tY29udHJvbC1sZyB7XG4gICAgICAgICAgaGVpZ2h0OiB2YXIoLS10b3AtbmF2YmFyLWNvbnRyb2xzLWhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgJi5mb3JtLWNvbnRyb2wge1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdG9wLW5hdmJhci1ib3JkZXItY29sb3IpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRvcC1uYXZiYXItY29sb3IpO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvcC1uYXZiYXItYmFja2dyb3VuZCk7XG5cbiAgICAgICAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdG9wLW5hdmJhci1hbHQtY29sb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gLy8gLm5hdmJhci1zZWFyY2hcblxuICAgIC5uYXZiYXItYWN0aW9ucyB7XG4gICAgICBoZWlnaHQ6IHZhcigtLXRvcC1uYXZiYXItY29udHJvbHMtaGVpZ2h0KTtcbiAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IGF1dG87XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgLmFjdGlvbi1idXR0b24ge1xuICAgICAgICBjb2xvcjogdmFyKC0tdG9wLW5hdmJhci1jb2xvcik7XG5cbiAgICAgICAgJiArIC5hY3Rpb24tYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiB2YXIoLS10b3AtbmF2YmFyLXNwYWNpbmcpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1hdC1pY29uLm5hdmJhci1pY29ucyB7XG4gICAgICAgIHdpZHRoOiB2YXIoLS10b3AtbmF2YmFyLWljb24tc2l6ZSk7XG4gICAgICAgIGhlaWdodDogdmFyKC0tdG9wLW5hdmJhci1pY29uLXNpemUpO1xuICAgICAgfVxuICAgIH0gLy8gLm5hdmJhci1hY3Rpb25zXG5cbiAgICAubmF2YmFyLXVzZXIge1xuICAgICAgaGVpZ2h0OiB2YXIoLS10b3AtbmF2YmFyLWNvbnRyb2xzLWhlaWdodCk7XG4gICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLXRvcC1uYXZiYXItc3BhY2luZykgKiAyKTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAudXNlci1pbWFnZS13cmFwcGVyIHtcbiAgICAgICAgd2lkdGg6IHZhcigtLXRvcC1uYXZiYXItY29udHJvbHMtaGVpZ2h0KTtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG5cbiAgICAgICAgY2MtaW1hZ2Utc2hlbGwudXNlci1pbWFnZSB7XG4gICAgICAgICAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemU6IHZhcigtLXRvcC1uYXZiYXItaWNvbi1zaXplKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAudXNlci1hY3Rpb25zLWRyb3Bkb3duIHtcbiAgICAgICAgLS10b2dnbGUtYnRuLXBhZGRpbmc6IDVweDtcblxuICAgICAgICAvLyBTZXQgdGhlIHNhbWUgaGVpZ2h0IGFzIHRoZSBpbWFnZS1zaGVsbCB3aWR0aFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0tdG9wLW5hdmJhci1zcGFjaW5nKSAtIHZhcigtLXRvZ2dsZS1idG4tcGFkZGluZykpO1xuXG4gICAgICAgIC51c2VyLWFjdGlvbi10b2dnbGUtYnRuIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgICAgICAgIC8vIE92ZXJyaWRlIEJvb3RzdHJhcCBzdHlsZXNcbiAgICAgICAgICAmLmJ0biB7XG4gICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS10b2dnbGUtYnRuLXBhZGRpbmcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAmLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgICAgICAgICAvLyBSZXNldCBzdHlsZXNcbiAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5pdGlhbDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBpbml0aWFsO1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFkZCBzdHlsZXMgZnJvbSAubWF0LWV4cGFuc2lvbi1pbmRpY2F0b3I6OmFmdGVyXG4gICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcbiAgICAgICAgICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjAxcHgpIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI3twYWxldHRlLWNvbG9yKFwiZ3JleS05XCIpfTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC51c2VyLW5hbWUge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBOdW5pdG87XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiB2YXIoLS10b3AtbmF2YmFyLXNwYWNpbmcpO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA2MDFweCkge1xuICAgICAgICAgICAgY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImdyZXktOVwiKX07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnVzZXItbmFtZSA+IGNjLXRleHQtc2hlbGwge1xuICAgICAgICAgIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcblxuICAgICAgICAgIG1pbi13aWR0aDogODBweDtcblxuICAgICAgICAgICYudGV4dC1sb2FkZWQge1xuICAgICAgICAgICAgbWluLXdpZHRoOiAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSAvLyAubmF2YmFyLXVzZXJcbiAgfSAvLyAudG9wLW5hdmJhci10b29sYmFyXG59XG4iLCJAbWl4aW4gbGluZS1kaXZpZGVyKCkge1xuICAkZGVmYXVsdC1jb2xvcjogIzMzMzMzMztcbiAgJGRlZmF1bHQtd2lkdGg6IDJweDtcblxuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpdmlkZXItY29sb3IsICRkZWZhdWx0LWNvbG9yKTtcbiAgd2lkdGg6IHZhcigtLWRpdmlkZXItd2lkdGgsICRkZWZhdWx0LXdpZHRoKTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG46aG9zdCguYWRkLWFjdGlvbnMtZGl2aWRlciwgLmFkZC11c2VyLWRpdmlkZXIpIHtcbiAgLS10b3AtbmF2YmFyLWRpdmlkZXItY29sb3I6ICNFNEU3RUI7XG5cbiAgLS1kaXZpZGVyLXdpZHRoOiAycHg7XG4gIC0tZGl2aWRlci1jb2xvcjogdmFyKC0tdG9wLW5hdmJhci1kaXZpZGVyLWNvbG9yKTtcbiAgLS1kaXZpZGVyLXNwYWNpbmc6IGNhbGModmFyKC0tdG9wLW5hdmJhci1zcGFjaW5nKSAqIDIpO1xuXG4gICYuYWRkLWFjdGlvbnMtZGl2aWRlciB7XG4gICAgLm5hdmJhci1hY3Rpb25zIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLWRpdmlkZXItc3BhY2luZykgKyB2YXIoLS1kaXZpZGVyLXdpZHRoKSk7XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIEBpbmNsdWRlIGxpbmUtZGl2aWRlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYuYWRkLXVzZXItZGl2aWRlciB7XG4gICAgLm5hdmJhci11c2VyIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLWRpdmlkZXItc3BhY2luZykgKyB2YXIoLS1kaXZpZGVyLXdpZHRoKSk7XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIEBpbmNsdWRlIGxpbmUtZGl2aWRlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLypcbiAgU2hhcmVkXG4qL1xuXG5AaW1wb3J0ICdwcmVmZXJlbmNlcyc7XG5AaW1wb3J0ICdpbnRlcmZhY2UnO1xuQGltcG9ydCAnbW9kZSc7XG5cbi8vIEFuIGFic3RyYWN0IHdheSB0byBwcm92aWRlIGNvbG9ycy5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgYW4gaW50ZXJmYWNlIHRvIGJvdGggU2FzcyB2YXJpYWJsZXMgYW5kIENTUyA0IHZhcmlhYmxlcyBiYXNlZCBjb2xvciBwYWxldHRlcy5cbkBmdW5jdGlvbiBwYWxldHRlLWNvbG9yKCRjb2xvci1uYW1lLCAkYWxwaGE6IDEpIHtcbiAgLy8gJGNvbG9yLXBhbGV0dGUtbW9kZSAgICAgICAgPT4gIERlZmluZWQgaW4gbW9kZS5zY3NzXG4gIC8vICRjaG9vc2VuLXBhbGV0dGUgICAgICAgICAgID0+ICBEZWZpbmVkIGluIG1vZGUuc2Nzc1xuICAvLyAkY29sb3ItcGFsZXR0ZS1pbnRlcmZhY2UgICA9PiAgRGVmaW5lZCBpbiBpbnRlcmZhY2Uuc2Nzc1xuICAvLyAkY3NzNC12YXItcHJlZml4ICAgICAgICAgICA9PiAgRGVmaW5lZCBpbiBwcmVmZXJlbmNlcy5zY3NzXG4gIC8vICRjc3M0LWNvbG9yLWZvcm1hdCAgICAgICAgID0+ICBEZWZpbmVkIGluIHByZWZlcmVuY2VzLnNjc3NcblxuICBAaWYgKCRjb2xvci1wYWxldHRlLW1vZGUgPT0gJ2Nzcy00Jykge1xuICAgICRwYWxldHRlLXJlZmVyZW5jZTogJGNvbG9yLXBhbGV0dGUtaW50ZXJmYWNlO1xuXG4gICAgJGNvbG9yLXZhcmlhYmxlLWluZGV4OiBpbmRleCgkcGFsZXR0ZS1yZWZlcmVuY2UsICRjb2xvci1uYW1lKTtcblxuICAgIEBpZiAodHlwZV9vZigkY29sb3ItdmFyaWFibGUtaW5kZXgpID09ICdudW1iZXInKSB7XG4gICAgICAkY29sb3ItdmFyaWFibGUtbmFtZTogbnRoKCRwYWxldHRlLXJlZmVyZW5jZSwgJGNvbG9yLXZhcmlhYmxlLWluZGV4KTtcblxuICAgICAgQGlmICgkYWxwaGEgPiAwIGFuZCAkYWxwaGEgPCAxKSB7XG4gICAgICAgIEByZXR1cm4gI3sncmdiYSh2YXIoJyArICRjc3M0LXZhci1wcmVmaXggKyAkY29sb3ItdmFyaWFibGUtbmFtZSArICctJyArICRjc3M0LWNvbG9yLWZvcm1hdCArJyksICN7JGFscGhhfSknfTtcbiAgICAgIH0gQGVsc2UgaWYgKCRhbHBoYSA9PSAxKSB7XG4gICAgICAgIEByZXR1cm4gI3sncmdiKHZhcignICsgJGNzczQtdmFyLXByZWZpeCArICRjb2xvci12YXJpYWJsZS1uYW1lICsgJy0nICsgJGNzczQtY29sb3ItZm9ybWF0ICsgJykpJ307XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgQGVycm9yIFwiQWxwaGEgKCN7JGFscGhhfSkgbXVzdCBiZSBhIG51bWJlclwiO1xuICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgQGVycm9yIFwiQ29sb3IgKCN7JGNvbG9yLW5hbWV9KSB3YXMgbm90IGZvdW5kIG9uIENvbG9yIFBhbGV0dGUgZGVmaW5pdGlvbi4gTWFrZSBzdXJlIGl0J3MgZGVmaW5lZCBpbiB0aGUgdGhlbWUvcGFsZXR0ZXMvaW50ZXJmYWNlLnNjc3MgZmlsZVwiO1xuICAgIH1cbiAgfSBAZWxzZSBpZiAoJGNvbG9yLXBhbGV0dGUtbW9kZSA9PSAnc2FzcycpIHtcbiAgICAkcGFsZXR0ZS1yZWZlcmVuY2U6ICRjaG9vc2VuLXBhbGV0dGU7XG5cbiAgICAkY29sb3ItdmFyaWFibGU6IG1hcC1nZXQoJHBhbGV0dGUtcmVmZXJlbmNlLCAkY29sb3ItbmFtZSk7XG5cbiAgICAvLyBDaGVjayBpZiBpdCBpcyBhIFNhc3MgY29sb3JcbiAgICBAaWYgKHR5cGVfb2YoJGNvbG9yLXZhcmlhYmxlKSA9PSAnY29sb3InKSB7XG4gICAgICBAaWYgKCRhbHBoYSA+IDAgYW5kICRhbHBoYSA8IDEpIHtcbiAgICAgICAgQHJldHVybiByZ2JhKCRjb2xvci12YXJpYWJsZSwgJGFscGhhKTtcbiAgICAgIH0gQGVsc2UgaWYgKCRhbHBoYSA9PSAxKSB7XG4gICAgICAgIEByZXR1cm4gJGNvbG9yLXZhcmlhYmxlO1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIEBlcnJvciBcIkFscGhhICgjeyRhbHBoYX0pIG11c3QgYmUgYSBudW1iZXJcIjtcbiAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgIEBlcnJvciBcIkNvbG9yICgjeyRjb2xvci12YXJpYWJsZX0pIGlzIG5vdCBhIFNhc3MgY29sb3JcIjtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBlcnJvciAnTm8gQ29sb3IgUGFsZXR0ZSBtb2RlIHNlbGVjdGVkIGluIHRoZW1lL3BhbGV0dGVzL3ByZWZlcmVuY2VzLnNjc3MnO1xuICB9XG59XG4iLCIvKlxuICBDU1MgNCBNb2RlXG4qL1xuJGNvbG9yLXBhbGV0dGUtbW9kZTogJ2Nzcy00JztcblxuXG4vKlxuICBTYXNzIE1vZGVcbiovXG4vLyBAaW1wb3J0ICdjb3JlJztcbi8vXG4vLyAkY29sb3ItcGFsZXR0ZS1tb2RlOiAnc2Fzcyc7XG4vL1xuLy8gLy8gSW1wb3J0IHRoZSBkZWZpbml0aW9ucyBvZiB0aGUgcGFsZXR0ZSB5b3Ugd2FudCB0byB1c2Vcbi8vIEBpbXBvcnQgJ3BhbGV0dGUtMS9kZWZpbml0aW9ucyc7XG4vLyAvLyBAaW1wb3J0ICdwYWxldHRlLTIvZGVmaW5pdGlvbnMnO1xuLy9cbi8vIC8vIEFzc2lnbiBhIHBhcnRpY3VsYXIgQ29sb3IgUGFsZXR0ZSB0byB0aGUgJ2Nob29zZW4tcGFsZXR0ZScgcG9pbnRlci5cbi8vIC8vICRjaG9vc2VuLXBhbGV0dGUgd2lsbCBiZSBhIFNhc3MgbWFwIHBvaW50aW5nIHRvIGFub3RoZXIgY29sb3IgcGFsZXR0ZSBTYXNzIG1hcFxuLy8gJGNob29zZW4tcGFsZXR0ZTogYnVpbGRTYXNzUGFsZXR0ZSgkcGFsZXR0ZS0xKTtcbi8vIC8vICRjaG9vc2VuLXBhbGV0dGU6IGJ1aWxkU2Fzc1BhbGV0dGUoJHBhbGV0dGUtMik7XG4iLCIvL2NvbG9yXG4udGV4dC1ibHVlLWxpZ2h0IHtcbiAgY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbGlnaHRcIil9O1xufVxuLnRleHQtYmx1ZS1tYWluIHtcbiAgY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbWFpblwiKX07XG59XG4udGV4dC1ibHVlLWRhcmsge1xuICBjb2xvcjogI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1kYXJrXCIpfTtcbn1cblxuLy9iYWNrZ3JvdW5kXG4uYmctZ3JleS1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImdyZXktbGlnaHRcIil9O1xufVxuLmJnLWdyZXktZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImdyZXktNVwiKX07XG59XG4uYmctYmx1ZS1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbGlnaHRcIil9O1xufVxuLmJnLWJsdWUtbWFpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbWFpblwiKX07XG59XG4uYmctYmx1ZS1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1kYXJrXCIpfTtcbn1cblxuLy90ZXh0XG4udGV4dC14cyB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbn1cbi50ZXh0LXNtIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn1cbi50ZXh0LWJhc2Uge1xuICBmb250LXNpemU6IDFyZW07XG59XG4udGV4dC1sZyB7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG59XG5cbi50ZXh0LXhsIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuXG4udGV4dC0yeGwge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLnRleHQtM3hsIHtcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xufVxuXG4uZm9udC1zZW1pYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uZm9udC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmNhcGl0YWxpemUge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmN1cnNvci1wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucm91bmRlZC14bCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5ib3JkZXItcHJpbWFyeS0xIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1tYWluXCIpfTtcbn1cblxuLmJvcmRlci1wcmltYXJ5LTIge1xuICBib3JkZXI6IDJweCBzb2xpZCAje3BhbGV0dGUtY29sb3IoXCJibHVlLW1haW5cIil9O1xufVxuXG4uY3VzdG9tLXNjcm9sbHtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xufVxuLmN1c3RvbS1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IC41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiZ3JleS1saWdodFwiKX07XG59XG5cblxuLmN1c3RvbS1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IC4zZW0gc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiZ3JleS01XCIpfTtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopNavbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-top-navbar",
            templateUrl: "./top-navbar.component.html",
            styleUrls: ["./styles/top-navbar.component.scss"]
          }]
        }], function () {
          return [{
            type: _side_menus_side_menus_service__WEBPACK_IMPORTED_MODULE_1__["SideMenusService"]
          }, {
            type: src_app_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, {
          mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["attr.mode"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "Ebsp":
    /*!****************************************!*\
      !*** ./src/app/pipes/location.pipe.ts ***!
      \****************************************/

    /*! exports provided: LocationPipe */

    /***/
    function Ebsp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationPipe", function () {
        return LocationPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL"); //return string with name og city and state code


      var LocationPipe = /*#__PURE__*/function () {
        function LocationPipe() {
          _classCallCheck(this, LocationPipe);
        }

        _createClass(LocationPipe, [{
          key: "transform",
          value: function transform(value) {
            return "".concat(value === null || value === void 0 ? void 0 : value.name, ", ").concat(value === null || value === void 0 ? void 0 : value.state_code);
          }
        }]);

        return LocationPipe;
      }();

      LocationPipe.ɵfac = function LocationPipe_Factory(t) {
        return new (t || LocationPipe)();
      };

      LocationPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "location",
        type: LocationPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: "location"
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Ebxc":
    /*!***************************************************************!*\
      !*** ./src/app/core/color-palettes/color-palettes.service.ts ***!
      \***************************************************************/

    /*! exports provided: ColorPalettesService */

    /***/
    function Ebxc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColorPalettesService", function () {
        return ColorPalettesService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var src_app_app_color_palettes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/app-color-palettes */
      "2KIB");

      var ColorPalettesService = /*#__PURE__*/function () {
        function ColorPalettesService(document) {
          _classCallCheck(this, ColorPalettesService);

          this.document = document;
          this.currentPalette = src_app_app_color_palettes__WEBPACK_IMPORTED_MODULE_2__["defaultPalette"];
        }

        _createClass(ColorPalettesService, [{
          key: "init",
          value: function init() {
            this.setPalette(src_app_app_color_palettes__WEBPACK_IMPORTED_MODULE_2__["defaultPalette"].name);
          }
        }, {
          key: "setPalette",
          value: function setPalette(paletteName) {
            // Set default theme
            var selectedPalette = src_app_app_color_palettes__WEBPACK_IMPORTED_MODULE_2__["availablePalettes"].find(function (palette) {
              return palette.name === paletteName;
            });

            if (selectedPalette) {
              var rootElement = this.document.documentElement;

              if (rootElement) {
                rootElement.setAttribute('color-palette', selectedPalette.name);
              }

              this.currentPalette = selectedPalette;
            }
          }
        }]);

        return ColorPalettesService;
      }();

      ColorPalettesService.ɵfac = function ColorPalettesService_Factory(t) {
        return new (t || ColorPalettesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
      };

      ColorPalettesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ColorPalettesService,
        factory: ColorPalettesService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorPalettesService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: Document,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "EdIQ":
    /*!***********************************************!*\
      !*** ./src/app/core/config/config.service.ts ***!
      \***********************************************/

    /*! exports provided: ConfigService */

    /***/
    function EdIQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigService", function () {
        return ConfigService;
      });
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var ConfigService = /*#__PURE__*/_createClass(function ConfigService() {
        _classCallCheck(this, ConfigService);
      });

      ConfigService.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl;
      /***/
    },

    /***/
    "GEn9":
    /*!******************************************************************!*\
      !*** ./src/app/shared/dialogs/loader/loader-dialog.component.ts ***!
      \******************************************************************/

    /*! exports provided: LoaderDialogComponent */

    /***/
    function GEn9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoaderDialogComponent", function () {
        return LoaderDialogComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      var LoaderDialogComponent = /*#__PURE__*/_createClass(function LoaderDialogComponent(dialogRef, data) {
        _classCallCheck(this, LoaderDialogComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.data.setDialogRef(this.dialogRef);
      });

      LoaderDialogComponent.ɵfac = function LoaderDialogComponent_Factory(t) {
        return new (t || LoaderDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
      };

      LoaderDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoaderDialogComponent,
        selectors: [["app-loader-dialog"]],
        decls: 5,
        vars: 1,
        consts: [[1, "dialog-w"], [1, "d-flex", "flex-column", "align-items-center", "justify-content-center", "py-4"], [3, "diameter"], [1, "mt-4"]],
        template: function LoaderDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-spinner", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Loading...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 50);
          }
        },
        directives: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__["MatSpinner"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kaWFsb2dzL2xvYWRlci9sb2FkZXItZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderDialogComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-loader-dialog',
            templateUrl: './loader-dialog.component.html',
            styleUrls: ['./loader-dialog.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Kt/9":
    /*!**************************************************!*\
      !*** ./src/app/shell/config/app-shell.config.ts ***!
      \**************************************************/

    /*! exports provided: AppShellConfig */

    /***/
    function Kt9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppShellConfig", function () {
        return AppShellConfig;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3"); // Inspired in: https://devblogs.microsoft.com/premier-developer/angular-how-to-editable-config-files/


      var AppShellConfig = /*#__PURE__*/function () {
        function AppShellConfig(http) {
          _classCallCheck(this, AppShellConfig);

          this.http = http;
        } // Simplified version from: https://stackoverflow.com/a/49707898/1116959


        _createClass(AppShellConfig, [{
          key: "load",
          value: function load() {
            var configFile = '/assets/config/app-shell.config' + (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() ? '.prod' : '') + '.json';
            return this.http.get(configFile).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (configSettings) {
              AppShellConfig.settings = configSettings;
            })).toPromise()["catch"](function (error) {
              console.log("Could not load file '".concat(configFile, "'"), error);
            });
          }
        }]);

        return AppShellConfig;
      }();

      AppShellConfig.ɵfac = function AppShellConfig_Factory(t) {
        return new (t || AppShellConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      AppShellConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AppShellConfig,
        factory: AppShellConfig.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppShellConfig, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "MQQr":
    /*!*********************************************************************************!*\
      !*** ./src/app/shared/notification-template/notification-template.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: NotificationTemplateComponent */

    /***/
    function MQQr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationTemplateComponent", function () {
        return NotificationTemplateComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function NotificationTemplateComponent_i_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 6);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "notification-icon fas fa-" + ctx_r0.icon);
        }
      }

      function NotificationTemplateComponent_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.message);
        }
      }

      function NotificationTemplateComponent_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationTemplateComponent_button_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.dismiss();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NotificationTemplateComponent_p_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.text);
        }
      }

      var NotificationTemplateComponent = /*#__PURE__*/function () {
        function NotificationTemplateComponent(data) {
          _classCallCheck(this, NotificationTemplateComponent);

          this.data = data;
          this.type = false;
          this.dismissible = false;
          this.baseClass = 'notification alert';
          this.classes = '';

          if (data) {
            this.message = data.message;
            this.icon = data.icon;
            this.type = data.type;
            this.dismissible = data.dismissible;
          }
        }
        /** Dismisses the snack bar. */


        _createClass(NotificationTemplateComponent, [{
          key: "dismiss",
          value: function dismiss() {
            if (this.snackBarRef) {
              this.snackBarRef.dismiss();
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.classes = this.baseClass;
            this.classes += this.dismissible ? ' alert-dismissible' : '';
            this.classes += this.type ? ' alert-' + this.type : '';
          }
        }]);

        return NotificationTemplateComponent;
      }();

      NotificationTemplateComponent.ɵfac = function NotificationTemplateComponent_Factory(t) {
        return new (t || NotificationTemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MAT_SNACK_BAR_DATA"], 8));
      };

      NotificationTemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotificationTemplateComponent,
        selectors: [["app-notification-template"]],
        inputs: {
          message: "message",
          text: "text",
          icon: "icon",
          type: "type",
          dismissible: "dismissible"
        },
        decls: 7,
        vars: 5,
        consts: [[1, "custom-notification-wrapper"], ["role", "alert", 3, "ngClass"], [3, "ngClass", 4, "ngIf"], ["class", "notification-line", 4, "ngIf"], ["type", "button", "class", "close", 3, "click", 4, "ngIf"], ["class", "notification-text", 4, "ngIf"], [3, "ngClass"], [1, "notification-line"], ["type", "button", 1, "close", 3, "click"], [1, "fas", "fa-times"], [1, "notification-text"]],
        template: function NotificationTemplateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NotificationTemplateComponent_i_3_Template, 1, 1, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NotificationTemplateComponent_span_4_Template, 2, 1, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NotificationTemplateComponent_button_5_Template, 2, 0, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NotificationTemplateComponent_p_6_Template, 2, 1, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.classes);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.icon);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dismissible);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.text);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        styles: [".text-blue-light[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-light-rgb));\n}\n.text-blue-main[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-main-rgb));\n}\n.text-blue-dark[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-dark-rgb));\n}\n.bg-grey-light[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-grey-light-rgb));\n}\n.bg-grey-dark[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-grey-5-rgb));\n}\n.bg-blue-light[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-light-rgb));\n}\n.bg-blue-main[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-main-rgb));\n}\n.bg-blue-dark[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-dark-rgb));\n}\n.text-xs[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.text-base[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.text-lg[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.text-xl[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.text-2xl[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.text-3xl[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.capitalize[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.rounded-xl[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  overflow: hidden;\n}\n.border-primary-1[_ngcontent-%COMP%] {\n  border: 1px solid rgb(var(--palette-blue-main-rgb));\n}\n.border-primary-2[_ngcontent-%COMP%] {\n  border: 2px solid rgb(var(--palette-blue-main-rgb));\n}\n.custom-scroll[_ngcontent-%COMP%] {\n  padding-right: 4px;\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0.5em;\n  border-radius: 5px;\n  background-color: rgb(var(--palette-grey-light-rgb));\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  border: 0.3em solid;\n  border-color: rgb(var(--palette-grey-5-rgb));\n}\n[_nghost-%COMP%] {\n  --info-notification-background: rgb(var(--palette-info-light-rgb));\n  --info-notification-color: rgb(var(--palette-info-rgb));\n  --success-notification-background: rgb(var(--palette-success-light-rgb));\n  --success-notification-color: rgb(var(--palette-success-rgb));\n  --warning-notification-background: rgb(var(--palette-warning-light-rgb));\n  --warning-notification-color: rgb(var(--palette-warning-rgb));\n  --danger-notification-background: rgb(var(--palette-error-light-rgb));\n  --danger-notification-color: rgb(var(--palette-error-rgb));\n  --notification-spacing: 10px;\n}\n.custom-notification-wrapper[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%] {\n  --notification-background-color: var(--info-notification-background);\n  --notification-text-color: var(--info-notification-color);\n  border: 0;\n  background-color: var(--notification-background-color);\n  color: var(--notification-text-color);\n  border-radius: 6px;\n  padding-top: calc(var(--notification-spacing) * 1.5);\n  padding-bottom: calc(var(--notification-spacing) * 1.5);\n  box-shadow: 0px 10px 20px rgba(var(--palette-grey-6-rgb), 0.15),  0px 3px 6px rgba(var(--palette-grey-6-rgb), 0.1);\n}\n.custom-notification-wrapper[_ngcontent-%COMP%]   .notification.alert-info[_ngcontent-%COMP%] {\n  --notification-background-color: var(--info-notification-background);\n  --notification-text-color: var(--info-notification-color);\n}\n.custom-notification-wrapper[_ngcontent-%COMP%]   .notification.alert-success[_ngcontent-%COMP%] {\n  --notification-background-color: var(--success-notification-background);\n  --notification-text-color: var(--success-notification-color);\n}\n.custom-notification-wrapper[_ngcontent-%COMP%]   .notification.alert-warning[_ngcontent-%COMP%] {\n  --notification-background-color: var(--warning-notification-background);\n  --notification-text-color: var(--warning-notification-color);\n}\n.custom-notification-wrapper[_ngcontent-%COMP%]   .notification.alert-danger[_ngcontent-%COMP%] {\n  --notification-background-color: var(--danger-notification-background);\n  --notification-text-color: var(--danger-notification-color);\n}\n.custom-notification-wrapper[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]   .notification-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.custom-notification-wrapper[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]   .notification-icon[_ngcontent-%COMP%] {\n  color: var(--notification-text-color);\n  font-size: 18px;\n  margin-right: var(--notification-spacing);\n  align-self: center;\n}\n.custom-notification-wrapper[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]   .notification-line[_ngcontent-%COMP%] {\n  font-size: 16px;\n  flex-grow: 2;\n  font-weight: 600;\n}\n.custom-notification-wrapper[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]   .notification-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.custom-notification-wrapper[_ngcontent-%COMP%]   .notification.alert-dismissible[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  height: 100%;\n  opacity: 1;\n  font-size: 16px;\n  color: var(--notification-text-color);\n}\n.custom-notification-wrapper[_ngcontent-%COMP%]   .notification.alert-dismissible[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:hover {\n  opacity: 0.5;\n  color: var(--notification-text-color);\n}\n.custom-notification-wrapper[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]   .notification-line[_ngcontent-%COMP%]    ~ .notification-text[_ngcontent-%COMP%] {\n  margin-top: calc(var(--notification-spacing) * 1.5);\n}\n  .mat-snack-bar-container {\n  box-shadow: none;\n  max-width: none !important;\n}\n  .mat-snack-bar-container.notification-wrapper {\n  background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9wYWxldHRlcy9zaGFyZWQuc2NzcyIsInNyYy90aGVtZS9wYWxldHRlcy9tb2RlLnNjc3MiLCJzcmMvdGhlbWUvY3VzdG9tLWNsYXNzZXMuc2NzcyIsInNyYy9hcHAvc2hhcmVkL25vdGlmaWNhdGlvbi10ZW1wbGF0ZS9ub3RpZmljYXRpb24tdGVtcGxhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvbWl4aW5zL2VsZXZhdGlvbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUROQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUROQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUROQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUROQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUNMQTtFQUNFLHlDQUFBO0FDNkNGO0FEM0NBO0VBQ0Usd0NBQUE7QUM4Q0Y7QUQ1Q0E7RUFDRSx3Q0FBQTtBQytDRjtBRDNDQTtFQUNFLG9EQUFBO0FDOENGO0FENUNBO0VBQ0UsZ0RBQUE7QUMrQ0Y7QUQ3Q0E7RUFDRSxvREFBQTtBQ2dERjtBRDlDQTtFQUNFLG1EQUFBO0FDaURGO0FEL0NBO0VBQ0UsbURBQUE7QUNrREY7QUQ5Q0E7RUFDRSxrQkFBQTtBQ2lERjtBRC9DQTtFQUNFLG1CQUFBO0FDa0RGO0FEaERBO0VBQ0UsZUFBQTtBQ21ERjtBRGpEQTtFQUNFLG1CQUFBO0FDb0RGO0FEakRBO0VBQ0Usa0JBQUE7QUNvREY7QURqREE7RUFDRSxpQkFBQTtBQ29ERjtBRGpEQTtFQUNFLGtCQUFBO0FDb0RGO0FEakRBO0VBQ0UsZ0JBQUE7QUNvREY7QURsREE7RUFDRSxnQkFBQTtBQ3FERjtBRGxEQTtFQUNFLDBCQUFBO0FDcURGO0FEbERBO0VBQ0UsZUFBQTtBQ3FERjtBRGxEQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUNxREY7QURsREE7RUFDRSxtREFBQTtBQ3FERjtBRGxEQTtFQUNFLG1EQUFBO0FDcURGO0FEbERBO0VBQ0Usa0JBQUE7QUNxREY7QURuREE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvREFBQTtBQ3NERjtBRGxEQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtBQ3FERjtBQWxKQTtFQUVFLGtFQUFBO0VBQ0EsdURBQUE7RUFFQSx3RUFBQTtFQUNBLDZEQUFBO0VBRUEsd0VBQUE7RUFDQSw2REFBQTtFQUVBLHFFQUFBO0VBQ0EsMERBQUE7RUFFQSw0QkFBQTtBQWdKRjtBQTVJRTtFQUVFLG9FQUFBO0VBQ0EseURBQUE7RUFtQkEsU0FBQTtFQUNBLHNEQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLG9EQUFBO0VBQ0EsdURBQUE7RUNvQ0Esa0hBQUE7QUR5Rko7QUFuSkk7RUFDRSxvRUFBQTtFQUNBLHlEQUFBO0FBcUpOO0FBbkpJO0VBQ0UsdUVBQUE7RUFDQSw0REFBQTtBQXFKTjtBQW5KSTtFQUNFLHVFQUFBO0VBQ0EsNERBQUE7QUFxSk47QUFuSkk7RUFDRSxzRUFBQTtFQUNBLDJEQUFBO0FBcUpOO0FBMUlJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBNElOO0FBeklJO0VBQ0UscUNBQUE7RUFDQSxlQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtBQTJJTjtBQXhJSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUEwSU47QUF4SUk7RUFDRSxlQUFBO0FBMElOO0FBdElNO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7QUF3SVI7QUF0SVE7RUFDRSxZQUFBO0VBQ0EscUNBQUE7QUF3SVY7QUFuSUk7RUFDRSxtREFBQTtBQXFJTjtBQTlIRTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7QUFpSUo7QUEvSEk7RUFDRSxnQkFBQTtBQWlJTiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9ub3RpZmljYXRpb24tdGVtcGxhdGUvbm90aWZpY2F0aW9uLXRlbXBsYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgU2hhcmVkXG4qL1xuXG5AaW1wb3J0ICdwcmVmZXJlbmNlcyc7XG5AaW1wb3J0ICdpbnRlcmZhY2UnO1xuQGltcG9ydCAnbW9kZSc7XG5cbi8vIEFuIGFic3RyYWN0IHdheSB0byBwcm92aWRlIGNvbG9ycy5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgYW4gaW50ZXJmYWNlIHRvIGJvdGggU2FzcyB2YXJpYWJsZXMgYW5kIENTUyA0IHZhcmlhYmxlcyBiYXNlZCBjb2xvciBwYWxldHRlcy5cbkBmdW5jdGlvbiBwYWxldHRlLWNvbG9yKCRjb2xvci1uYW1lLCAkYWxwaGE6IDEpIHtcbiAgLy8gJGNvbG9yLXBhbGV0dGUtbW9kZSAgICAgICAgPT4gIERlZmluZWQgaW4gbW9kZS5zY3NzXG4gIC8vICRjaG9vc2VuLXBhbGV0dGUgICAgICAgICAgID0+ICBEZWZpbmVkIGluIG1vZGUuc2Nzc1xuICAvLyAkY29sb3ItcGFsZXR0ZS1pbnRlcmZhY2UgICA9PiAgRGVmaW5lZCBpbiBpbnRlcmZhY2Uuc2Nzc1xuICAvLyAkY3NzNC12YXItcHJlZml4ICAgICAgICAgICA9PiAgRGVmaW5lZCBpbiBwcmVmZXJlbmNlcy5zY3NzXG4gIC8vICRjc3M0LWNvbG9yLWZvcm1hdCAgICAgICAgID0+ICBEZWZpbmVkIGluIHByZWZlcmVuY2VzLnNjc3NcblxuICBAaWYgKCRjb2xvci1wYWxldHRlLW1vZGUgPT0gJ2Nzcy00Jykge1xuICAgICRwYWxldHRlLXJlZmVyZW5jZTogJGNvbG9yLXBhbGV0dGUtaW50ZXJmYWNlO1xuXG4gICAgJGNvbG9yLXZhcmlhYmxlLWluZGV4OiBpbmRleCgkcGFsZXR0ZS1yZWZlcmVuY2UsICRjb2xvci1uYW1lKTtcblxuICAgIEBpZiAodHlwZV9vZigkY29sb3ItdmFyaWFibGUtaW5kZXgpID09ICdudW1iZXInKSB7XG4gICAgICAkY29sb3ItdmFyaWFibGUtbmFtZTogbnRoKCRwYWxldHRlLXJlZmVyZW5jZSwgJGNvbG9yLXZhcmlhYmxlLWluZGV4KTtcblxuICAgICAgQGlmICgkYWxwaGEgPiAwIGFuZCAkYWxwaGEgPCAxKSB7XG4gICAgICAgIEByZXR1cm4gI3sncmdiYSh2YXIoJyArICRjc3M0LXZhci1wcmVmaXggKyAkY29sb3ItdmFyaWFibGUtbmFtZSArICctJyArICRjc3M0LWNvbG9yLWZvcm1hdCArJyksICN7JGFscGhhfSknfTtcbiAgICAgIH0gQGVsc2UgaWYgKCRhbHBoYSA9PSAxKSB7XG4gICAgICAgIEByZXR1cm4gI3sncmdiKHZhcignICsgJGNzczQtdmFyLXByZWZpeCArICRjb2xvci12YXJpYWJsZS1uYW1lICsgJy0nICsgJGNzczQtY29sb3ItZm9ybWF0ICsgJykpJ307XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgQGVycm9yIFwiQWxwaGEgKCN7JGFscGhhfSkgbXVzdCBiZSBhIG51bWJlclwiO1xuICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgQGVycm9yIFwiQ29sb3IgKCN7JGNvbG9yLW5hbWV9KSB3YXMgbm90IGZvdW5kIG9uIENvbG9yIFBhbGV0dGUgZGVmaW5pdGlvbi4gTWFrZSBzdXJlIGl0J3MgZGVmaW5lZCBpbiB0aGUgdGhlbWUvcGFsZXR0ZXMvaW50ZXJmYWNlLnNjc3MgZmlsZVwiO1xuICAgIH1cbiAgfSBAZWxzZSBpZiAoJGNvbG9yLXBhbGV0dGUtbW9kZSA9PSAnc2FzcycpIHtcbiAgICAkcGFsZXR0ZS1yZWZlcmVuY2U6ICRjaG9vc2VuLXBhbGV0dGU7XG5cbiAgICAkY29sb3ItdmFyaWFibGU6IG1hcC1nZXQoJHBhbGV0dGUtcmVmZXJlbmNlLCAkY29sb3ItbmFtZSk7XG5cbiAgICAvLyBDaGVjayBpZiBpdCBpcyBhIFNhc3MgY29sb3JcbiAgICBAaWYgKHR5cGVfb2YoJGNvbG9yLXZhcmlhYmxlKSA9PSAnY29sb3InKSB7XG4gICAgICBAaWYgKCRhbHBoYSA+IDAgYW5kICRhbHBoYSA8IDEpIHtcbiAgICAgICAgQHJldHVybiByZ2JhKCRjb2xvci12YXJpYWJsZSwgJGFscGhhKTtcbiAgICAgIH0gQGVsc2UgaWYgKCRhbHBoYSA9PSAxKSB7XG4gICAgICAgIEByZXR1cm4gJGNvbG9yLXZhcmlhYmxlO1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIEBlcnJvciBcIkFscGhhICgjeyRhbHBoYX0pIG11c3QgYmUgYSBudW1iZXJcIjtcbiAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgIEBlcnJvciBcIkNvbG9yICgjeyRjb2xvci12YXJpYWJsZX0pIGlzIG5vdCBhIFNhc3MgY29sb3JcIjtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBlcnJvciAnTm8gQ29sb3IgUGFsZXR0ZSBtb2RlIHNlbGVjdGVkIGluIHRoZW1lL3BhbGV0dGVzL3ByZWZlcmVuY2VzLnNjc3MnO1xuICB9XG59XG4iLCIvKlxuICBDU1MgNCBNb2RlXG4qL1xuJGNvbG9yLXBhbGV0dGUtbW9kZTogJ2Nzcy00JztcblxuXG4vKlxuICBTYXNzIE1vZGVcbiovXG4vLyBAaW1wb3J0ICdjb3JlJztcbi8vXG4vLyAkY29sb3ItcGFsZXR0ZS1tb2RlOiAnc2Fzcyc7XG4vL1xuLy8gLy8gSW1wb3J0IHRoZSBkZWZpbml0aW9ucyBvZiB0aGUgcGFsZXR0ZSB5b3Ugd2FudCB0byB1c2Vcbi8vIEBpbXBvcnQgJ3BhbGV0dGUtMS9kZWZpbml0aW9ucyc7XG4vLyAvLyBAaW1wb3J0ICdwYWxldHRlLTIvZGVmaW5pdGlvbnMnO1xuLy9cbi8vIC8vIEFzc2lnbiBhIHBhcnRpY3VsYXIgQ29sb3IgUGFsZXR0ZSB0byB0aGUgJ2Nob29zZW4tcGFsZXR0ZScgcG9pbnRlci5cbi8vIC8vICRjaG9vc2VuLXBhbGV0dGUgd2lsbCBiZSBhIFNhc3MgbWFwIHBvaW50aW5nIHRvIGFub3RoZXIgY29sb3IgcGFsZXR0ZSBTYXNzIG1hcFxuLy8gJGNob29zZW4tcGFsZXR0ZTogYnVpbGRTYXNzUGFsZXR0ZSgkcGFsZXR0ZS0xKTtcbi8vIC8vICRjaG9vc2VuLXBhbGV0dGU6IGJ1aWxkU2Fzc1BhbGV0dGUoJHBhbGV0dGUtMik7XG4iLCIvL2NvbG9yXG4udGV4dC1ibHVlLWxpZ2h0IHtcbiAgY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbGlnaHRcIil9O1xufVxuLnRleHQtYmx1ZS1tYWluIHtcbiAgY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbWFpblwiKX07XG59XG4udGV4dC1ibHVlLWRhcmsge1xuICBjb2xvcjogI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1kYXJrXCIpfTtcbn1cblxuLy9iYWNrZ3JvdW5kXG4uYmctZ3JleS1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImdyZXktbGlnaHRcIil9O1xufVxuLmJnLWdyZXktZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImdyZXktNVwiKX07XG59XG4uYmctYmx1ZS1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbGlnaHRcIil9O1xufVxuLmJnLWJsdWUtbWFpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbWFpblwiKX07XG59XG4uYmctYmx1ZS1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1kYXJrXCIpfTtcbn1cblxuLy90ZXh0XG4udGV4dC14cyB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbn1cbi50ZXh0LXNtIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn1cbi50ZXh0LWJhc2Uge1xuICBmb250LXNpemU6IDFyZW07XG59XG4udGV4dC1sZyB7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG59XG5cbi50ZXh0LXhsIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuXG4udGV4dC0yeGwge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLnRleHQtM3hsIHtcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xufVxuXG4uZm9udC1zZW1pYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uZm9udC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmNhcGl0YWxpemUge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmN1cnNvci1wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucm91bmRlZC14bCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5ib3JkZXItcHJpbWFyeS0xIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1tYWluXCIpfTtcbn1cblxuLmJvcmRlci1wcmltYXJ5LTIge1xuICBib3JkZXI6IDJweCBzb2xpZCAje3BhbGV0dGUtY29sb3IoXCJibHVlLW1haW5cIil9O1xufVxuXG4uY3VzdG9tLXNjcm9sbHtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xufVxuLmN1c3RvbS1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IC41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiZ3JleS1saWdodFwiKX07XG59XG5cblxuLmN1c3RvbS1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IC4zZW0gc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiZ3JleS01XCIpfTtcbn1cbiIsIkBpbXBvcnQgJ3NoYXJlZCc7XG5cbjpob3N0IHtcbiAgLy8gIERlZmF1bHQgdmFyaWFibGVzXG4gIC0taW5mby1ub3RpZmljYXRpb24tYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKCdpbmZvLWxpZ2h0Jyl9O1xuICAtLWluZm8tbm90aWZpY2F0aW9uLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ2luZm8nKX07XG5cbiAgLS1zdWNjZXNzLW5vdGlmaWNhdGlvbi1iYWNrZ3JvdW5kOiAje3BhbGV0dGUtY29sb3IoJ3N1Y2Nlc3MtbGlnaHQnKX07XG4gIC0tc3VjY2Vzcy1ub3RpZmljYXRpb24tY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignc3VjY2VzcycpfTtcblxuICAtLXdhcm5pbmctbm90aWZpY2F0aW9uLWJhY2tncm91bmQ6ICN7cGFsZXR0ZS1jb2xvcignd2FybmluZy1saWdodCcpfTtcbiAgLS13YXJuaW5nLW5vdGlmaWNhdGlvbi1jb2xvcjogI3twYWxldHRlLWNvbG9yKCd3YXJuaW5nJyl9O1xuXG4gIC0tZGFuZ2VyLW5vdGlmaWNhdGlvbi1iYWNrZ3JvdW5kOiAje3BhbGV0dGUtY29sb3IoJ2Vycm9yLWxpZ2h0Jyl9O1xuICAtLWRhbmdlci1ub3RpZmljYXRpb24tY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignZXJyb3InKX07XG5cbiAgLS1ub3RpZmljYXRpb24tc3BhY2luZzogMTBweDtcbn1cblxuLmN1c3RvbS1ub3RpZmljYXRpb24td3JhcHBlciB7XG4gIC5ub3RpZmljYXRpb24ge1xuICAgIC8vIGRlZmF1bHQgbm90aWZpY2F0aW9uIGlzIGluZm9cbiAgICAtLW5vdGlmaWNhdGlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmZvLW5vdGlmaWNhdGlvbi1iYWNrZ3JvdW5kKTtcbiAgICAtLW5vdGlmaWNhdGlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pbmZvLW5vdGlmaWNhdGlvbi1jb2xvcik7XG5cbiAgICAmLmFsZXJ0LWluZm8ge1xuICAgICAgLS1ub3RpZmljYXRpb24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5mby1ub3RpZmljYXRpb24tYmFja2dyb3VuZCk7XG4gICAgICAtLW5vdGlmaWNhdGlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pbmZvLW5vdGlmaWNhdGlvbi1jb2xvcik7XG4gICAgfVxuICAgICYuYWxlcnQtc3VjY2VzcyB7XG4gICAgICAtLW5vdGlmaWNhdGlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWNjZXNzLW5vdGlmaWNhdGlvbi1iYWNrZ3JvdW5kKTtcbiAgICAgIC0tbm90aWZpY2F0aW9uLXRleHQtY29sb3I6IHZhcigtLXN1Y2Nlc3Mtbm90aWZpY2F0aW9uLWNvbG9yKTtcbiAgICB9XG4gICAgJi5hbGVydC13YXJuaW5nIHtcbiAgICAgIC0tbm90aWZpY2F0aW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhcm5pbmctbm90aWZpY2F0aW9uLWJhY2tncm91bmQpO1xuICAgICAgLS1ub3RpZmljYXRpb24tdGV4dC1jb2xvcjogdmFyKC0td2FybmluZy1ub3RpZmljYXRpb24tY29sb3IpO1xuICAgIH1cbiAgICAmLmFsZXJ0LWRhbmdlciB7XG4gICAgICAtLW5vdGlmaWNhdGlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYW5nZXItbm90aWZpY2F0aW9uLWJhY2tncm91bmQpO1xuICAgICAgLS1ub3RpZmljYXRpb24tdGV4dC1jb2xvcjogIHZhcigtLWRhbmdlci1ub3RpZmljYXRpb24tY29sb3IpO1xuICAgIH1cblxuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3RpZmljYXRpb24tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLW5vdGlmaWNhdGlvbi10ZXh0LWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tbm90aWZpY2F0aW9uLXNwYWNpbmcpICogMS41KTtcbiAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1ub3RpZmljYXRpb24tc3BhY2luZykgKiAxLjUpO1xuICAgIEBpbmNsdWRlIGVsZXZhdGlvbih6MywgJ2dyZXktNicpO1xuXG4gICAgLm5vdGlmaWNhdGlvbi13cmFwcGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuXG4gICAgLm5vdGlmaWNhdGlvbi1pY29uIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1ub3RpZmljYXRpb24tdGV4dC1jb2xvcik7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLW5vdGlmaWNhdGlvbi1zcGFjaW5nKTtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAubm90aWZpY2F0aW9uLWxpbmUge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZmxleC1ncm93OiAyO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gICAgLm5vdGlmaWNhdGlvbi10ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAmLmFsZXJ0LWRpc21pc3NpYmxlIHtcbiAgICAgIC5jbG9zZSB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tbm90aWZpY2F0aW9uLXRleHQtY29sb3IpO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tbm90aWZpY2F0aW9uLXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm5vdGlmaWNhdGlvbi1saW5lIH4gLm5vdGlmaWNhdGlvbi10ZXh0IHtcbiAgICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tbm90aWZpY2F0aW9uLXNwYWNpbmcpICogMS41KTtcbiAgICB9XG4gIH1cbn1cblxuOjpuZy1kZWVwIHtcbiAgLy8gdGhpcyBhcHBsaWVzIHRvIGFsbCB0aGUgbWF0LXNuYWNrLWJhci1jb250YWluZXJcbiAgLm1hdC1zbmFjay1iYXItY29udGFpbmVyIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIG1heC13aWR0aDogbm9uZSAhaW1wb3J0YW50O1xuXG4gICAgJi5ub3RpZmljYXRpb24td3JhcHBlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCAndXRpbHMnO1xuQGltcG9ydCAnLi4vcGFsZXR0ZXMvc2hhcmVkJztcblxuJGVsZXZhdGlvbnMtc3BlY3M6IChcbiAgejE6IChcbiAgICAoc2hhZG93OiAwcHggMXB4IDNweCwgb3BhY2l0eTogMC4xMiksXG4gICAgKHNoYWRvdzogMHB4IDFweCAycHgsIG9wYWNpdHk6IDAuMjQpXG4gICksXG4gIHoyOiAoXG4gICAgKHNoYWRvdzogMHB4IDNweCA2cHgsIG9wYWNpdHk6IDAuMTUpLFxuICAgIChzaGFkb3c6IDBweCAycHggNHB4LCBvcGFjaXR5OiAwLjEyKVxuICApLFxuICB6MzogKFxuICAgIChzaGFkb3c6IDBweCAxMHB4IDIwcHgsIG9wYWNpdHk6IDAuMTUpLFxuICAgIChzaGFkb3c6IDBweCAzcHggNnB4LCBvcGFjaXR5OiAwLjEwKVxuICApLFxuICB6NDogKFxuICAgIChzaGFkb3c6IDBweCAxNXB4IDI1cHgsIG9wYWNpdHk6IDAuMTUpLFxuICAgIChzaGFkb3c6IDBweCA1cHggMTBweCwgb3BhY2l0eTogMC4wNSlcbiAgKSxcbiAgejU6IChcbiAgICAoc2hhZG93OiAwcHggMjBweCA0MHB4LCBvcGFjaXR5OiAwLjIwKVxuICApXG4pO1xuXG5AbWl4aW4gZWxldmF0aW9uKCR6OiB6MSwgJGNvbG9yOiAnZ3JleS0yJykge1xuICAkc2hhZG93cy1yZWZlcmVuY2U6ICRlbGV2YXRpb25zLXNwZWNzO1xuXG4gIC8vIENoZWNrIGlmIHdlIGhhdmUgYSBzcGVjIGZvciB0aGUgZGVzaXJlZCBzaGFkb3dcbiAgQGlmIG1hcC1oYXMta2V5KCRzaGFkb3dzLXJlZmVyZW5jZSwgJHopIHtcbiAgICAvLyBBY2N1bXVsYXRlIG11bHRpcGxlIHNoYWRvdyB2YWx1ZXMgaW4gdGhpcyBsaXN0XG4gICAgJHotc2hhZG93cy12YWx1ZXM6ICgpO1xuICAgIC8vIEdldCBzaGFkb3dzIG1hcFxuICAgICR6LXNoYWRvd3M6IG1hcC1nZXQoJHNoYWRvd3MtcmVmZXJlbmNlLCAkeik7XG5cbiAgICAvLyBAZXJyb3IgJHotc2hhZG93cztcblxuICAgIC8vIE11bHRpcGxlIHNoYWRvd3MgY29tYmluZWRcbiAgICBAaWYgKHR5cGVfb2YoJHotc2hhZG93cykgPT0gJ2xpc3QnKSB7XG4gICAgICBAZWFjaCAkei1zaGFkb3cgaW4gJHotc2hhZG93cyB7XG4gICAgICAgIEBpZiAodHlwZV9vZigkei1zaGFkb3cpID09ICdtYXAnKSB7XG4gICAgICAgICAgJHNoYWRvdzogbWFwLWdldCgkei1zaGFkb3csIHNoYWRvdyk7XG4gICAgICAgICAgJG9wYWNpdHk6IG1hcC1nZXQoJHotc2hhZG93LCBvcGFjaXR5KTtcblxuICAgICAgICAgIC8vIEBlcnJvciAkei1zaGFkb3c7XG4gICAgICAgICAgLy8gQGVycm9yICRzaGFkb3c7XG4gICAgICAgICAgLy8gQGVycm9yICRvcGFjaXR5O1xuXG4gICAgICAgICAgLy8gJHNoYWRvdy12YWx1ZTogJHNoYWRvdyArICcgJyArIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSk7XG4gICAgICAgICAgJHNoYWRvdy12YWx1ZTogJHNoYWRvdyArICcgJyArIHBhbGV0dGUtY29sb3IoJGNvbG9yLCAkb3BhY2l0eSk7XG5cbiAgICAgICAgICAvLyBAZXJyb3IgJHNoYWRvdy12YWx1ZTtcblxuICAgICAgICAgICR6LXNoYWRvd3MtdmFsdWVzOiBhcHBlbmQoJHotc2hhZG93cy12YWx1ZXMsICRzaGFkb3ctdmFsdWUpO1xuXG4gICAgICAgICAgLy8gQGVycm9yICR6LXNoYWRvd3MtdmFsdWVzO1xuICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICBAZXJyb3IgJ0ludmFsaWQgc2hhZG93IGRlZmluaXRpb24gZm9yIGFyZ3VtZW50ICR6LXNoYWRvdzogYCN7JHotc2hhZG93fWAnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBAZWxzZSBpZiAodHlwZV9vZigkei1zaGFkb3dzKSA9PSAnbWFwJykge1xuICAgICAgLy8gU2luZ2xlIHNoYWRvd1xuICAgICAgJHNoYWRvdzogbWFwLWdldCgkei1zaGFkb3dzLCBzaGFkb3cpO1xuICAgICAgJG9wYWNpdHk6IG1hcC1nZXQoJHotc2hhZG93cywgb3BhY2l0eSk7XG5cbiAgICAgIC8vIEBlcnJvciAkei1zaGFkb3c7XG4gICAgICAvLyBAZXJyb3IgJHNoYWRvdztcbiAgICAgIC8vIEBlcnJvciAkb3BhY2l0eTtcblxuICAgICAgLy8gJHNoYWRvdy12YWx1ZTogJHNoYWRvdyArICcgJyArIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSk7XG4gICAgICAkc2hhZG93LXZhbHVlOiAkc2hhZG93ICsgJyAnICsgcGFsZXR0ZS1jb2xvcigkY29sb3IsICRvcGFjaXR5KTtcblxuICAgICAgLy8gQGVycm9yICRzaGFkb3ctdmFsdWU7XG5cbiAgICAgICR6LXNoYWRvd3MtdmFsdWVzOiBhcHBlbmQoJHotc2hhZG93cy12YWx1ZXMsICRzaGFkb3ctdmFsdWUpO1xuXG4gICAgICAvLyBAZXJyb3IgJHotc2hhZG93cy12YWx1ZXM7XG4gICAgfSBAZWxzZSB7XG4gICAgICBAZXJyb3IgJ0ludmFsaWQgc2hhZG93IHZhbHVlcyBmb3IgYXJndW1lbnQgJHotc2hhZG93czogYCN7JHotc2hhZG93c31gLiBJdFxcJ3MgbmVpdGhlciBhIG1hcCBvciBhIGxpc3QnO1xuICAgIH1cblxuICAgIC8vIEBlcnJvciAje3RvLXN0cmluZygkei1zaGFkb3dzLXZhbHVlcywgJywgJyl9O1xuXG4gICAgYm94LXNoYWRvdzogI3t0by1zdHJpbmcoJHotc2hhZG93cy12YWx1ZXMsICcsICcpfTtcbiAgfSBAZWxzZSB7XG4gICAgQGVycm9yICdObyByZWZlcmVuY2UgZm91bmQgZm9yIGFyZ3VtZW50ICR6OiBgI3sken1gIGluIHNoYWRvd3Mgc3BlY3MuJztcbiAgfVxufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationTemplateComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-notification-template',
            templateUrl: './notification-template.component.html',
            styleUrls: ['./notification-template.component.scss']
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MAT_SNACK_BAR_DATA"]]
            }]
          }];
        }, {
          message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          dismissible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "NUQi":
    /*!*******************************************!*\
      !*** ./src/app/core/guards/auth.guard.ts ***!
      \*******************************************/

    /*! exports provided: AuthGuard */

    /***/
    function NUQi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/authentication/authentication.service */
      "9Ku7");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router, authService) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
          this.authService = authService;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            if (this.authService.isLoggedIn()) {
              return true;
            }

            this.authService.logout();
            this.router.navigate(["/auth/signin"], {
              queryParams: {
                returnUrl: state.url
              }
            });
            return false;
          }
        }, {
          key: "canLoad",
          value: function canLoad() {
            if (this.authService.isLoggedIn()) {
              return true;
            }

            this.authService.logout();
            this.router.navigate(["/auth/signin"]);
            return false;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: src_app_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "NXqw":
    /*!********************************************************************!*\
      !*** ./src/app/shared/dialogs/confirm/confirm-dialog.component.ts ***!
      \********************************************************************/

    /*! exports provided: ConfirmDialogComponent */

    /***/
    function NXqw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function () {
        return ConfirmDialogComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");

      var ConfirmDialogComponent = /*#__PURE__*/_createClass(function ConfirmDialogComponent(dialogRef, data) {
        _classCallCheck(this, ConfirmDialogComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      });

      ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) {
        return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
      };

      ConfirmDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ConfirmDialogComponent,
        selectors: [["app-confirm-dialog"]],
        decls: 10,
        vars: 4,
        consts: [[1, "dialog-w"], [1, "mt-2", "mb-3", "text-lg", "text-dark", "p-1"], [1, "d-flex", "justify-content-end"], [1, "btn", "btn-secondary", "px-4", "mr-3", 3, "mat-dialog-close"], [1, "btn", "btn-danger", "px-2", 3, "mat-dialog-close"]],
        template: function ConfirmDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "NO");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "YES");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.msg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kaWFsb2dzL2NvbmZpcm0vY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmDialogComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-confirm-dialog",
            templateUrl: "./confirm-dialog.component.html",
            styleUrls: ["./confirm-dialog.component.scss"]
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "OpKh":
    /*!*********************************************************!*\
      !*** ./src/app/authentication/authentication.module.ts ***!
      \*********************************************************/

    /*! exports provided: authenticationRoutes, AuthenticationModule */

    /***/
    function OpKh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "authenticationRoutes", function () {
        return authenticationRoutes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function () {
        return AuthenticationModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./signin/signin.component */
      "R9+F");
      /* harmony import */


      var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./forgot-password/forgot-password.component */
      "xTco");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./reset-password/reset-password.component */
      "yMLD");

      var authenticationRoutes = [{
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full'
      }, {
        path: 'signin',
        component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"]
      }, {
        path: 'forgot-password',
        component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"]
      }, {
        path: 'reset-password',
        component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordComponent"]
      }];

      var AuthenticationModule = /*#__PURE__*/_createClass(function AuthenticationModule() {
        _classCallCheck(this, AuthenticationModule);
      });

      AuthenticationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AuthenticationModule
      });
      AuthenticationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AuthenticationModule_Factory(t) {
          return new (t || AuthenticationModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(authenticationRoutes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthenticationModule, {
          declarations: [_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"], _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"], _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(authenticationRoutes)]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "PCNd":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function PCNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "jaxi");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/slider */
      "5RNC");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _shell_shell_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ../shell/shell.module */
      "ZpN7");
      /* harmony import */


      var _show_hide_password_show_hide_password_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./show-hide-password/show-hide-password.component */
      "hLHA");
      /* harmony import */


      var _show_hide_password_show_hide_input_directive__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./show-hide-password/show-hide-input.directive */
      "CEen");
      /* harmony import */


      var _alert_template_alert_template_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./alert-template/alert-template.component */
      "wU7l");
      /* harmony import */


      var _notification_template_notification_template_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./notification-template/notification-template.component */
      "MQQr");
      /* harmony import */


      var _dialogs_confirm_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./dialogs/confirm/confirm-dialog.component */
      "NXqw");
      /* harmony import */


      var _pipes_location_pipe__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ../pipes/location.pipe */
      "Ebsp");
      /* harmony import */


      var _dialogs_loader_loader_dialog_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./dialogs/loader/loader-dialog.component */
      "GEn9"); // import { HttpClientModule } from '@angular/common/http';


      var SharedModule = /*#__PURE__*/_createClass(function SharedModule() {
        _classCallCheck(this, SharedModule);
      });

      SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SharedModule
      });
      SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SharedModule_Factory(t) {
          return new (t || SharedModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _shell_shell_module__WEBPACK_IMPORTED_MODULE_30__["ShellModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__["MatSnackBarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatProgressSpinnerModule"]], // Re-export these modules to prevent repeated imports (see: https://angular.io/guide/ngmodule#re-exporting-other-modules)
        //CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], // HttpClientModule,
        _shell_shell_module__WEBPACK_IMPORTED_MODULE_30__["ShellModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], // angular material modules
        _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatProgressSpinnerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__["MatStepperModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__["MatTooltipModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__["MatSnackBarModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], // ng bootstrap modules
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbRatingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbDropdownModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
          declarations: [_show_hide_password_show_hide_password_component__WEBPACK_IMPORTED_MODULE_31__["ShowHidePasswordComponent"], _show_hide_password_show_hide_input_directive__WEBPACK_IMPORTED_MODULE_32__["ShowHideInputDirective"], _alert_template_alert_template_component__WEBPACK_IMPORTED_MODULE_33__["AlertTemplateComponent"], _notification_template_notification_template_component__WEBPACK_IMPORTED_MODULE_34__["NotificationTemplateComponent"], _dialogs_confirm_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_35__["ConfirmDialogComponent"], _dialogs_loader_loader_dialog_component__WEBPACK_IMPORTED_MODULE_37__["LoaderDialogComponent"], //pipes
          _pipes_location_pipe__WEBPACK_IMPORTED_MODULE_36__["LocationPipe"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _shell_shell_module__WEBPACK_IMPORTED_MODULE_30__["ShellModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__["MatSnackBarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatProgressSpinnerModule"]],
          exports: [// Re-export these modules to prevent repeated imports (see: https://angular.io/guide/ngmodule#re-exporting-other-modules)
          //CommonModule,
          _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], // HttpClientModule,
          _shell_shell_module__WEBPACK_IMPORTED_MODULE_30__["ShellModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _show_hide_password_show_hide_password_component__WEBPACK_IMPORTED_MODULE_31__["ShowHidePasswordComponent"], _show_hide_password_show_hide_input_directive__WEBPACK_IMPORTED_MODULE_32__["ShowHideInputDirective"], _alert_template_alert_template_component__WEBPACK_IMPORTED_MODULE_33__["AlertTemplateComponent"], _notification_template_notification_template_component__WEBPACK_IMPORTED_MODULE_34__["NotificationTemplateComponent"], // angular material modules
          _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatProgressSpinnerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__["MatStepperModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__["MatTooltipModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__["MatSnackBarModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], // ng bootstrap modules
          _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbRatingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbDropdownModule"], //pipes
          _pipes_location_pipe__WEBPACK_IMPORTED_MODULE_36__["LocationPipe"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_show_hide_password_show_hide_password_component__WEBPACK_IMPORTED_MODULE_31__["ShowHidePasswordComponent"], _show_hide_password_show_hide_input_directive__WEBPACK_IMPORTED_MODULE_32__["ShowHideInputDirective"], _alert_template_alert_template_component__WEBPACK_IMPORTED_MODULE_33__["AlertTemplateComponent"], _notification_template_notification_template_component__WEBPACK_IMPORTED_MODULE_34__["NotificationTemplateComponent"], _dialogs_confirm_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_35__["ConfirmDialogComponent"], _dialogs_loader_loader_dialog_component__WEBPACK_IMPORTED_MODULE_37__["LoaderDialogComponent"], //pipes
            _pipes_location_pipe__WEBPACK_IMPORTED_MODULE_36__["LocationPipe"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _shell_shell_module__WEBPACK_IMPORTED_MODULE_30__["ShellModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__["MatSnackBarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatProgressSpinnerModule"]],
            exports: [// Re-export these modules to prevent repeated imports (see: https://angular.io/guide/ngmodule#re-exporting-other-modules)
            //CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], // HttpClientModule,
            _shell_shell_module__WEBPACK_IMPORTED_MODULE_30__["ShellModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _show_hide_password_show_hide_password_component__WEBPACK_IMPORTED_MODULE_31__["ShowHidePasswordComponent"], _show_hide_password_show_hide_input_directive__WEBPACK_IMPORTED_MODULE_32__["ShowHideInputDirective"], _alert_template_alert_template_component__WEBPACK_IMPORTED_MODULE_33__["AlertTemplateComponent"], _notification_template_notification_template_component__WEBPACK_IMPORTED_MODULE_34__["NotificationTemplateComponent"], // angular material modules
            _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatProgressSpinnerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__["MatStepperModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__["MatTooltipModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__["MatSnackBarModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], // ng bootstrap modules
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbRatingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbDropdownModule"], //pipes
            _pipes_location_pipe__WEBPACK_IMPORTED_MODULE_36__["LocationPipe"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "PmMJ":
    /*!********************************************!*\
      !*** ./src/app/core/validators.service.ts ***!
      \********************************************/

    /*! exports provided: ValidatorsService */

    /***/
    function PmMJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ValidatorsService", function () {
        return ValidatorsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ValidatorsService = /*#__PURE__*/function () {
        function ValidatorsService() {
          _classCallCheck(this, ValidatorsService);
        }

        _createClass(ValidatorsService, [{
          key: "equalPasswords",
          value: function equalPasswords(pass1Name, pass2Name) {
            return function (formGroup) {
              var pass1Control = formGroup.controls[pass1Name];
              var pass2Control = formGroup.controls[pass2Name];

              if (pass1Control.value === pass2Control.value) {
                pass2Control.setErrors(null);
              } else {
                pass2Control.setErrors({
                  notEqual: true
                });
              }
            };
          }
        }]);

        return ValidatorsService;
      }();

      ValidatorsService.ɵfac = function ValidatorsService_Factory(t) {
        return new (t || ValidatorsService)();
      };

      ValidatorsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ValidatorsService,
        factory: ValidatorsService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidatorsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "R9+F":
    /*!***********************************************************!*\
      !*** ./src/app/authentication/signin/signin.component.ts ***!
      \***********************************************************/

    /*! exports provided: SigninComponent */

    /***/
    function R9F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SigninComponent", function () {
        return SigninComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../authentication.service */
      "9Ku7");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function SigninComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.error);
        }
      }

      var _c0 = function _c0() {
        return ["/auth/forgot-password"];
      };

      var SigninComponent = /*#__PURE__*/function () {
        function SigninComponent(router, authenticationService, fb) {
          _classCallCheck(this, SigninComponent);

          this.router = router;
          this.authenticationService = authenticationService;
          this.fb = fb;
          this.error = null;
        }

        _createClass(SigninComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.signinForm = this.fb.group({
              email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
              password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });
          }
        }, {
          key: "onSignin",
          value: function onSignin() {
            var _this18 = this;

            if (this.signinForm.invalid) {
              return Object.values(this.signinForm.controls).forEach(function (control) {
                if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                  Object.values(control.controls).forEach(function (control) {
                    return control.markAsTouched();
                  });
                } else {
                  control.markAsTouched();
                }
              });
            } else {
              this.error = null;
              var data = this.signinForm.value;
              this.authenticationService.signin(data.email, data.password).subscribe(function (res) {
                var _a, _b, _c, _d;

                if (!((_b = (_a = res.user) === null || _a === void 0 ? void 0 : _a.roles) === null || _b === void 0 ? void 0 : _b.includes("ADMIN")) && !((_d = (_c = res.user) === null || _c === void 0 ? void 0 : _c.roles) === null || _d === void 0 ? void 0 : _d.includes("MANAGER"))) {
                  _this18.error = "Forbidden access";
                  return;
                } // if signin success then:


                _this18.router.navigate(["general"]);
              }, function (err) {
                var _a; // else if signin fails


                if (((_a = err.error) === null || _a === void 0 ? void 0 : _a.code) === 401) {
                  _this18.error = err.error.message;
                } else {
                  _this18.error = "Unexpected error...";
                }
              });
            }
          }
        }]);

        return SigninComponent;
      }();

      SigninComponent.ɵfac = function SigninComponent_Factory(t) {
        return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      SigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SigninComponent,
        selectors: [["app-signin"]],
        decls: 21,
        vars: 8,
        consts: [[1, "row", "no-gutters", "signin-page"], [1, "col-12", "col-md-6", "form-section"], [1, "page-title", "text-center", "font-weight-bold"], [1, "col-12", "col-lg-8", "mx-auto"], [1, "signin-form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "user@email.com", 1, "form-control"], ["for", "password"], ["type", "password", "id", "password", "formControlName", "password", "placeholder", "*********", 1, "form-control"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "d-flex", "justify-content-between"], [1, "link-text", 3, "routerLink"], ["type", "submit", 1, "btn", "btn-primary"], [1, "col-12", "col-md-6", "d-none", "d-md-block", "image-section", "login-bg"], ["role", "alert", 1, "alert", "alert-danger"]],
        template: function SigninComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SigninComponent_Template_form_ngSubmit_5_listener() {
              return ctx.onSignin();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SigninComponent_div_14_Template, 2, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Forgot password?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "SIGN IN");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signinForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.signinForm.controls.email.touched && ctx.signinForm.controls.email.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.signinForm.controls.password.touched && ctx.signinForm.controls.password.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        styles: [".text-blue-light[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-light-rgb));\n}\n.text-blue-main[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-main-rgb));\n}\n.text-blue-dark[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-dark-rgb));\n}\n.bg-grey-light[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-grey-light-rgb));\n}\n.bg-grey-dark[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-grey-5-rgb));\n}\n.bg-blue-light[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-light-rgb));\n}\n.bg-blue-main[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-main-rgb));\n}\n.bg-blue-dark[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-dark-rgb));\n}\n.text-xs[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.text-base[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.text-lg[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.text-xl[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.text-2xl[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.text-3xl[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.capitalize[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.rounded-xl[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  overflow: hidden;\n}\n.border-primary-1[_ngcontent-%COMP%] {\n  border: 1px solid rgb(var(--palette-blue-main-rgb));\n}\n.border-primary-2[_ngcontent-%COMP%] {\n  border: 2px solid rgb(var(--palette-blue-main-rgb));\n}\n.custom-scroll[_ngcontent-%COMP%] {\n  padding-right: 4px;\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0.5em;\n  border-radius: 5px;\n  background-color: rgb(var(--palette-grey-light-rgb));\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  border: 0.3em solid;\n  border-color: rgb(var(--palette-grey-5-rgb));\n}\n[_nghost-%COMP%] {\n  --page-title-color: rgb(var(--palette-grey-9-rgb));\n  --page-text-color: rgb(var(--palette-grey-8-rgb));\n  --link-text-color: rgb(var(--palette-primary-rgb));\n  --side-image-overlay: rgba(var(--palette-primary-rgb), 0.15);\n  --page-spacing: 10px;\n  --fb-button-color: rgb(var(--palette-facebook-rgb));\n  --tw-button-color: rgb(var(--palette-twitter-rgb));\n  --google-button-color: rgb(var(--palette-google-rgb));\n  --social-buttons-background: rgb(var(--palette-white-rgb));\n  --button-padding: 6px 26px;\n}\n.signin-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n.signin-page[_ngcontent-%COMP%]   .login-bg[_ngcontent-%COMP%] {\n  background-color: #fff;\n  background-image: url('BG2.png');\n  background-position: center center;\n  background-size: cover;\n}\n@media (min-width: 821px) {\n  .signin-page[_ngcontent-%COMP%]   .login-bg[_ngcontent-%COMP%] {\n    background-image: url('BG1.png');\n    background-size: cover;\n  }\n}\n.signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  padding: calc(var(--page-spacing) * 8);\n}\n@media (max-width: 991.98px) {\n  .signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n    padding: calc(var(--page-spacing) * 4);\n  }\n}\n.signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  color: var(--page-title-color);\n}\n.signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .link-text[_ngcontent-%COMP%] {\n  color: var(--link-text-color);\n}\n.signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  color: var(--page-text-color);\n  font-size: 18px;\n}\n.signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .signin-form[_ngcontent-%COMP%] {\n  margin-top: calc(var(--page-spacing) * 4);\n  --default-spacing: 10px;\n  --form-label-color: rgb(var(--palette-grey-7-rgb));\n  --form-input-background: rgb(var(--palette-white-rgb));\n  --form-input-border-color: rgba(var(--palette-grey-6-rgb), 0.42);\n  --form-input-color: rgb(var(--palette-grey-9-rgb));\n  --form-input-placeholder-color: rgb(var(--palette-grey-5-rgb));\n  --form-help-color: rgb(var(--palette-grey-7-rgb));\n  --form-input-addons-background: rgba(var(--palette-secondary-rgb), 0.15);\n  --form-input-addons-color: rgb(var(--palette-secondary-rgb));\n  --form-input-success-color: rgb(var(--palette-success-rgb));\n  --form-input-success-background: rgba(var(--palette-success-rgb), 0.15);\n  --form-input-error-color: rgb(var(--palette-error-rgb));\n  --form-input-error-background: rgba(var(--palette-error-rgb), 0.15);\n  --form-disabled-input-background: rgb(var(--palette-grey-2-rgb));\n  --form-disabled-input-color: rgb(var(--palette-grey-9-rgb));\n}\n.signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .signin-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--form-label-color);\n  font-size: 16px;\n}\n.signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .signin-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  background-color: var(--form-input-background);\n  border: 1px solid var(--form-input-border-color);\n  color: var(--form-input-color);\n}\n.signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .signin-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::-moz-placeholder {\n  font-size: 16px;\n  color: var(--form-input-placeholder-color);\n}\n.signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .signin-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:-ms-input-placeholder {\n  font-size: 16px;\n  color: var(--form-input-placeholder-color);\n}\n.signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .signin-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {\n  font-size: 16px;\n  color: var(--form-input-placeholder-color);\n}\n.signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .signin-form[_ngcontent-%COMP%]   .form-control.is-valid[_ngcontent-%COMP%] {\n  border: 1px solid var(--form-input-success-color);\n}\n.signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .signin-form[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border: 1px solid var(--form-input-error-color);\n}\n.signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .signin-form[_ngcontent-%COMP%]   .form-control.disabled[_ngcontent-%COMP%] {\n  opacity: 0.8;\n  color: var(--form-disabled-input-color);\n  background-color: var(--form-disabled-input-background);\n}\n.signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .signin-form[_ngcontent-%COMP%]   .form-text[_ngcontent-%COMP%] {\n  margin-top: calc(var(--default-spacing) / 2);\n  font-size: 14px;\n}\n.signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .signin-form[_ngcontent-%COMP%]   .form-text.help-text[_ngcontent-%COMP%] {\n  color: var(--form-help-color);\n}\n.signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .signin-form[_ngcontent-%COMP%]   .custom-valid-feedback[_ngcontent-%COMP%] {\n  background-color: var(--form-input-success-background);\n  color: var(--form-input-success-color);\n  padding: calc(var(--default-spacing) / 2) var(--default-spacing);\n  border-radius: 6px;\n}\n.signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .signin-form[_ngcontent-%COMP%]   .custom-invalid-feedback[_ngcontent-%COMP%] {\n  background-color: var(--form-input-error-background);\n  color: var(--form-input-error-color);\n  padding: calc(var(--default-spacing) / 2) var(--default-spacing);\n  border-radius: 6px;\n}\n.signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .signin-form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .signin-form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  background-color: var(--form-input-addons-background);\n  color: var(--form-input-addons-color);\n  border: 1px solid var(--form-input-border-color);\n}\n.signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-call-to-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  margin-top: calc(var(--page-spacing) * 3);\n}\n.signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-call-to-actions[_ngcontent-%COMP%]   .sign-in-btn[_ngcontent-%COMP%] {\n  -webkit-margin-start: auto;\n          margin-inline-start: auto;\n  background-color: var(--button-background, rgb(var(--palette-primary-rgb)));\n  border-color: var(--button-border, rgb(var(--palette-primary-rgb)));\n  border-radius: 6px;\n  border-style: solid;\n  border-width: 1px;\n  color: var(--button-color, rgb(var(--palette-white-rgb)));\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: normal;\n  padding: 6px 12px;\n  transition: border-color 0.5s, color 0.5s, background-color 0.5s;\n  padding: var(--button-padding);\n}\n.signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-call-to-actions[_ngcontent-%COMP%]   .sign-in-btn[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--button-hover-background, rgb(var(--palette-primary-dark-rgb)));\n  border-color: var(--button-hover-border, rgb(var(--palette-primary-dark-rgb)));\n  color: var(--button-hover-color, rgb(var(--palette-white-rgb)));\n}\n.signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-call-to-actions[_ngcontent-%COMP%]   .sign-in-btn[_ngcontent-%COMP%]:active:not([disabled]), .signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-call-to-actions[_ngcontent-%COMP%]   .sign-in-btn.active[_ngcontent-%COMP%]:not([disabled]), .signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-call-to-actions[_ngcontent-%COMP%]   .sign-in-btn[_ngcontent-%COMP%]:focus:not([disabled]), .signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-call-to-actions[_ngcontent-%COMP%]   .sign-in-btn.focus[_ngcontent-%COMP%]:not([disabled]) {\n  background-color: var(--button-active-background, var(--button-hover-background, rgb(var(--palette-primary-dark-rgb))));\n  border-color: var(--button-active-border, var(--button-hover-border, rgb(var(--palette-primary-dark-rgb))));\n  color: var(--button-active-color, var(--button-hover-color, rgb(var(--palette-white-rgb))));\n}\n.signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-call-to-actions[_ngcontent-%COMP%]   .sign-in-btn[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .register-divider[_ngcontent-%COMP%] {\n  align-items: center;\n  color: var(--page-text-color);\n  display: flex;\n  margin: calc(var(--page-spacing) * 2) 0px;\n}\n.signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .register-divider[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .register-divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 0 calc(var(--page-spacing) * 1.5);\n}\n.signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .social-logins[_ngcontent-%COMP%] {\n  flex-wrap: nowrap;\n}\n.signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .social-logins[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .social-logins[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: var(--page-spacing);\n}\n@media (max-width: 575.98px) {\n  .signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .social-logins[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .social-logins[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:last-child) {\n    margin-bottom: var(--page-spacing);\n    margin-right: 0px;\n  }\n}\n.signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .social-logins[_ngcontent-%COMP%]   .fb-signin[_ngcontent-%COMP%] {\n  --button-background: var(--social-buttons-background);\n  --button-border: var(--fb-button-color);\n  --button-color: var(--fb-button-color);\n  background-color: var(--button-background, rgb(var(--palette-white-rgb)));\n  border-color: var(--button-border, rgb(var(--palette-blue-main-rgb)));\n  border-radius: 6px;\n  border-style: solid;\n  border-width: 1px;\n  color: var(--button-color, rgb(var(--palette-blue-main-rgb)));\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: normal;\n  padding: 6px 12px;\n  transition: border-color 0.5s, color 0.5s, background-color 0.5s;\n  padding: var(--button-padding);\n}\n.signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .social-logins[_ngcontent-%COMP%]   .fb-signin[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--button-color, rgb(var(--palette-blue-main-rgb)));\n  border-color: var(--button-border, rgb(var(--palette-blue-main-rgb)));\n  color: var(--button-background, rgb(var(--palette-white-rgb)));\n}\n.signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .social-logins[_ngcontent-%COMP%]   .fb-signin[_ngcontent-%COMP%]:active:not([disabled]), .signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .social-logins[_ngcontent-%COMP%]   .fb-signin.active[_ngcontent-%COMP%]:not([disabled]), .signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .social-logins[_ngcontent-%COMP%]   .fb-signin[_ngcontent-%COMP%]:focus:not([disabled]), .signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .social-logins[_ngcontent-%COMP%]   .fb-signin.focus[_ngcontent-%COMP%]:not([disabled]) {\n  background-color: var(--button-color, rgb(var(--palette-blue-main-rgb)));\n  border-color: var(--button-border, rgb(var(--palette-blue-main-rgb)));\n  color: var(--button-background, rgb(var(--palette-white-rgb)));\n}\n.signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .social-logins[_ngcontent-%COMP%]   .fb-signin[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .social-logins[_ngcontent-%COMP%]   .google-signin[_ngcontent-%COMP%] {\n  --button-background: var(--social-buttons-background);\n  --button-border: var(--google-button-color);\n  --button-color: var(--google-button-color);\n  background-color: var(--button-background, rgb(var(--palette-white-rgb)));\n  border-color: var(--button-border, rgb(var(--palette-blue-main-rgb)));\n  border-radius: 6px;\n  border-style: solid;\n  border-width: 1px;\n  color: var(--button-color, rgb(var(--palette-blue-main-rgb)));\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: normal;\n  padding: 6px 12px;\n  transition: border-color 0.5s, color 0.5s, background-color 0.5s;\n  padding: var(--button-padding);\n}\n.signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .social-logins[_ngcontent-%COMP%]   .google-signin[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--button-color, rgb(var(--palette-blue-main-rgb)));\n  border-color: var(--button-border, rgb(var(--palette-blue-main-rgb)));\n  color: var(--button-background, rgb(var(--palette-white-rgb)));\n}\n.signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .social-logins[_ngcontent-%COMP%]   .google-signin[_ngcontent-%COMP%]:active:not([disabled]), .signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .social-logins[_ngcontent-%COMP%]   .google-signin.active[_ngcontent-%COMP%]:not([disabled]), .signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .social-logins[_ngcontent-%COMP%]   .google-signin[_ngcontent-%COMP%]:focus:not([disabled]), .signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .social-logins[_ngcontent-%COMP%]   .google-signin.focus[_ngcontent-%COMP%]:not([disabled]) {\n  background-color: var(--button-color, rgb(var(--palette-blue-main-rgb)));\n  border-color: var(--button-border, rgb(var(--palette-blue-main-rgb)));\n  color: var(--button-background, rgb(var(--palette-white-rgb)));\n}\n.signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .social-logins[_ngcontent-%COMP%]   .google-signin[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .social-logins[_ngcontent-%COMP%]   .twitter-signin[_ngcontent-%COMP%] {\n  --button-background: var(--social-buttons-background);\n  --button-border: var(--tw-button-color);\n  --button-color: var(--tw-button-color);\n  background-color: var(--button-background, rgb(var(--palette-white-rgb)));\n  border-color: var(--button-border, rgb(var(--palette-blue-main-rgb)));\n  border-radius: 6px;\n  border-style: solid;\n  border-width: 1px;\n  color: var(--button-color, rgb(var(--palette-blue-main-rgb)));\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: normal;\n  padding: 6px 12px;\n  transition: border-color 0.5s, color 0.5s, background-color 0.5s;\n  padding: var(--button-padding);\n}\n.signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .social-logins[_ngcontent-%COMP%]   .twitter-signin[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--button-color, rgb(var(--palette-blue-main-rgb)));\n  border-color: var(--button-border, rgb(var(--palette-blue-main-rgb)));\n  color: var(--button-background, rgb(var(--palette-white-rgb)));\n}\n.signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .social-logins[_ngcontent-%COMP%]   .twitter-signin[_ngcontent-%COMP%]:active:not([disabled]), .signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .social-logins[_ngcontent-%COMP%]   .twitter-signin.active[_ngcontent-%COMP%]:not([disabled]), .signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .social-logins[_ngcontent-%COMP%]   .twitter-signin[_ngcontent-%COMP%]:focus:not([disabled]), .signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .social-logins[_ngcontent-%COMP%]   .twitter-signin.focus[_ngcontent-%COMP%]:not([disabled]) {\n  background-color: var(--button-color, rgb(var(--palette-blue-main-rgb)));\n  border-color: var(--button-border, rgb(var(--palette-blue-main-rgb)));\n  color: var(--button-background, rgb(var(--palette-white-rgb)));\n}\n.signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .social-logins[_ngcontent-%COMP%]   .twitter-signin[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.signin-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .existing-account-section[_ngcontent-%COMP%] {\n  color: var(--page-text-color);\n  margin-top: calc(var(--page-spacing) * 4);\n  text-align: center;\n}\n.signin-page[_ngcontent-%COMP%]   .image-section[_ngcontent-%COMP%]   cc-image-shell.signin-image[_ngcontent-%COMP%] {\n  --image-shell-overlay-background: var(--side-image-overlay);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9wYWxldHRlcy9zaGFyZWQuc2NzcyIsInNyYy90aGVtZS9wYWxldHRlcy9tb2RlLnNjc3MiLCJzcmMvdGhlbWUvY3VzdG9tLWNsYXNzZXMuc2NzcyIsInNyYy9hcHAvYXV0aGVudGljYXRpb24vc2lnbmluL3NpZ25pbi5jb21wb25lbnQuc2NzcyIsIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2JyZWFrcG9pbnRzLnNjc3MiLCJzcmMvdGhlbWUvbWl4aW5zL2lucHV0cy9mb3JtLWdyb3VwLnNjc3MiLCJzcmMvdGhlbWUvdGhpcmQtcGFydHkvb3ZlcnJpZGUtYm9vdHN0cmFwLXZhcmlhYmxlcy5zY3NzIiwic3JjL3RoZW1lL21peGlucy9idXR0b25zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FETkE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FETkE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FETkE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FETkE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FDTEE7RUFDRSx5Q0FBQTtBQzZDRjtBRDNDQTtFQUNFLHdDQUFBO0FDOENGO0FENUNBO0VBQ0Usd0NBQUE7QUMrQ0Y7QUQzQ0E7RUFDRSxvREFBQTtBQzhDRjtBRDVDQTtFQUNFLGdEQUFBO0FDK0NGO0FEN0NBO0VBQ0Usb0RBQUE7QUNnREY7QUQ5Q0E7RUFDRSxtREFBQTtBQ2lERjtBRC9DQTtFQUNFLG1EQUFBO0FDa0RGO0FEOUNBO0VBQ0Usa0JBQUE7QUNpREY7QUQvQ0E7RUFDRSxtQkFBQTtBQ2tERjtBRGhEQTtFQUNFLGVBQUE7QUNtREY7QURqREE7RUFDRSxtQkFBQTtBQ29ERjtBRGpEQTtFQUNFLGtCQUFBO0FDb0RGO0FEakRBO0VBQ0UsaUJBQUE7QUNvREY7QURqREE7RUFDRSxrQkFBQTtBQ29ERjtBRGpEQTtFQUNFLGdCQUFBO0FDb0RGO0FEbERBO0VBQ0UsZ0JBQUE7QUNxREY7QURsREE7RUFDRSwwQkFBQTtBQ3FERjtBRGxEQTtFQUNFLGVBQUE7QUNxREY7QURsREE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FDcURGO0FEbERBO0VBQ0UsbURBQUE7QUNxREY7QURsREE7RUFDRSxtREFBQTtBQ3FERjtBRGxEQTtFQUNFLGtCQUFBO0FDcURGO0FEbkRBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0RBQUE7QUNzREY7QURsREE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7QUNxREY7QUFsSkE7RUFFRSxrREFBQTtFQUNBLGlEQUFBO0VBQ0Esa0RBQUE7RUFDQSw0REFBQTtFQUNBLG9CQUFBO0VBQ0EsbURBQUE7RUFDQSxrREFBQTtFQUNBLHFEQUFBO0VBQ0EsMERBQUE7RUFDQSwwQkFBQTtBQW9KRjtBQWpKQTtFQUNFLGlCQUFBO0FBb0pGO0FBbEpFO0VBQ0Usc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7QUFvSko7QUFuSkk7RUFMRjtJQU1JLGdDQUFBO0lBQ0Esc0JBQUE7RUFzSko7QUFDRjtBQW5KRTtFQUNFLHNDQUFBO0FBcUpKO0FDM0dJO0VEM0NGO0lBSUksc0NBQUE7RUFzSko7QUFDRjtBQXBKSTtFQUNFLDhCQUFBO0FBc0pOO0FBbkpJO0VBQ0UsNkJBQUE7QUFxSk47QUFsSkk7RUFDRSw2QkFBQTtFQUNBLGVBQUE7QUFvSk47QUFqSkk7RUFDRSx5Q0FBQTtFRWxESix1QkFBQTtFQUNBLGtEQUFBO0VBQ0Esc0RBQUE7RUFDQSxnRUFBQTtFQUNBLGtEQUFBO0VBQ0EsOERBQUE7RUFDQSxpREFBQTtFQUNBLHdFQUFBO0VBQ0EsNERBQUE7RUFDQSwyREFBQTtFQUNBLHVFQUFBO0VBQ0EsdURBQUE7RUFDQSxtRUFBQTtFQUNBLGdFQUFBO0VBQ0EsMkRBQUE7QUZzTUY7QUVwTUU7RUFDRSw4QkFBQTtFQUNBLGVBQUE7QUZzTUo7QUVuTUU7RUFDRSw4Q0FBQTtFQUNBLGdEQUFBO0VBQ0EsOEJBQUE7QUZxTUo7QUVuTUk7RUFDRSxlQUFBO0VBQ0EsMENBQUE7QUZxTU47QUV2TUk7RUFDRSxlQUFBO0VBQ0EsMENBQUE7QUZxTU47QUV2TUk7RUFDRSxlQUFBO0VBQ0EsMENBQUE7QUZxTU47QUVsTUk7RUFDRSxpREFBQTtBRm9NTjtBRWpNSTtFQUNFLCtDQUFBO0FGbU1OO0FFaE1JO0VBQ0UsWUFBQTtFQUNBLHVDQUFBO0VBQ0EsdURBQUE7QUZrTU47QUU5TEU7RUFDRSw0Q0FBQTtFQUNBLGVBQUE7QUZnTUo7QUU5TEk7RUFDRSw2QkFBQTtBRmdNTjtBRTVMRTtFQUNFLHNEQUFBO0VBQ0Esc0NBQUE7RUFDQSxnRUFBQTtFQUNBLGtCQUFBO0FGOExKO0FFM0xFO0VBQ0Usb0RBQUE7RUFDQSxvQ0FBQTtFQUNBLGdFQUFBO0VBQ0Esa0JDNURrQjtBSHlQdEI7QUV4TE07RUFDRSxxREFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0RBQUE7QUYwTFI7QUE3TUk7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx5Q0FBQTtBQStNTjtBQTdNTTtFQUNFLDBCQUFBO1VBQUEseUJBQUE7RUkxQ04sMkVBQUE7RUFDQSxtRUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdFQUFBO0VKa0NNLDhCQUFBO0FBeU5SO0FJeFBJO0VBQ0Usc0ZBQUE7RUFDQSw4RUFBQTtFQUNBLCtEQUFBO0FKMFBOO0FJbFBJO0VBQ0UsdUhBQUE7RUFDQSwyR0FBQTtFQUNBLDJGQUFBO0FKb1BOO0FJaFBFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FKa1BKO0FBbk9JO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSx5Q0FBQTtBQXFPTjtBQW5PTTtFQUNFLFlBQUE7QUFxT1I7QUFsT007RUFDRSx5Q0FBQTtBQW9PUjtBQWhPSTtFQUVFLGlCQUFBO0FBaU9OO0FBL05NO0VBQ0UsY0FBQTtBQWlPUjtBQWhPUTtFQUNFLGlDQUFBO0FBa09WO0FDblBJO0VEVUE7SUFZSSxlQUFBO0VBaU9OO0VBOU5RO0lBQ0Usa0NBQUE7SUFDQSxpQkFBQTtFQWdPVjtBQUNGO0FBNU5NO0VBQ0UscURBQUE7RUFDQSx1Q0FBQTtFQUNBLHNDQUFBO0VJekNOLHlFQUFBO0VBQ0EscUVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSw2REFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnRUFBQTtFSmlDTSw4QkFBQTtBQXdPUjtBSXRRSTtFQUNFLHdFQUFBO0VBQ0EscUVBQUE7RUFDQSw4REFBQTtBSndRTjtBSWhRSTtFQUNFLHdFQUFBO0VBQ0EscUVBQUE7RUFDQSw4REFBQTtBSmtRTjtBSS9QRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBSmlRSjtBQW5QTTtFQUNFLHFEQUFBO0VBQ0EsMkNBQUE7RUFDQSwwQ0FBQTtFSWpETix5RUFBQTtFQUNBLHFFQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkRBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0VBQUE7RUp5Q00sOEJBQUE7QUErUFI7QUlyU0k7RUFDRSx3RUFBQTtFQUNBLHFFQUFBO0VBQ0EsOERBQUE7QUp1U047QUkvUkk7RUFDRSx3RUFBQTtFQUNBLHFFQUFBO0VBQ0EsOERBQUE7QUppU047QUk5UkU7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUpnU0o7QUExUU07RUFDRSxxREFBQTtFQUNBLHVDQUFBO0VBQ0Esc0NBQUE7RUl6RE4seUVBQUE7RUFDQSxxRUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDZEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdFQUFBO0VKaURNLDhCQUFBO0FBc1JSO0FJcFVJO0VBQ0Usd0VBQUE7RUFDQSxxRUFBQTtFQUNBLDhEQUFBO0FKc1VOO0FJOVRJO0VBQ0Usd0VBQUE7RUFDQSxxRUFBQTtFQUNBLDhEQUFBO0FKZ1VOO0FJN1RFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FKK1RKO0FBaFNJO0VBQ0UsNkJBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0FBa1NOO0FBN1JJO0VBQ0UsMkRBQUE7QUErUk4iLCJmaWxlIjoic3JjL2FwcC9hdXRoZW50aWNhdGlvbi9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgU2hhcmVkXG4qL1xuXG5AaW1wb3J0ICdwcmVmZXJlbmNlcyc7XG5AaW1wb3J0ICdpbnRlcmZhY2UnO1xuQGltcG9ydCAnbW9kZSc7XG5cbi8vIEFuIGFic3RyYWN0IHdheSB0byBwcm92aWRlIGNvbG9ycy5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgYW4gaW50ZXJmYWNlIHRvIGJvdGggU2FzcyB2YXJpYWJsZXMgYW5kIENTUyA0IHZhcmlhYmxlcyBiYXNlZCBjb2xvciBwYWxldHRlcy5cbkBmdW5jdGlvbiBwYWxldHRlLWNvbG9yKCRjb2xvci1uYW1lLCAkYWxwaGE6IDEpIHtcbiAgLy8gJGNvbG9yLXBhbGV0dGUtbW9kZSAgICAgICAgPT4gIERlZmluZWQgaW4gbW9kZS5zY3NzXG4gIC8vICRjaG9vc2VuLXBhbGV0dGUgICAgICAgICAgID0+ICBEZWZpbmVkIGluIG1vZGUuc2Nzc1xuICAvLyAkY29sb3ItcGFsZXR0ZS1pbnRlcmZhY2UgICA9PiAgRGVmaW5lZCBpbiBpbnRlcmZhY2Uuc2Nzc1xuICAvLyAkY3NzNC12YXItcHJlZml4ICAgICAgICAgICA9PiAgRGVmaW5lZCBpbiBwcmVmZXJlbmNlcy5zY3NzXG4gIC8vICRjc3M0LWNvbG9yLWZvcm1hdCAgICAgICAgID0+ICBEZWZpbmVkIGluIHByZWZlcmVuY2VzLnNjc3NcblxuICBAaWYgKCRjb2xvci1wYWxldHRlLW1vZGUgPT0gJ2Nzcy00Jykge1xuICAgICRwYWxldHRlLXJlZmVyZW5jZTogJGNvbG9yLXBhbGV0dGUtaW50ZXJmYWNlO1xuXG4gICAgJGNvbG9yLXZhcmlhYmxlLWluZGV4OiBpbmRleCgkcGFsZXR0ZS1yZWZlcmVuY2UsICRjb2xvci1uYW1lKTtcblxuICAgIEBpZiAodHlwZV9vZigkY29sb3ItdmFyaWFibGUtaW5kZXgpID09ICdudW1iZXInKSB7XG4gICAgICAkY29sb3ItdmFyaWFibGUtbmFtZTogbnRoKCRwYWxldHRlLXJlZmVyZW5jZSwgJGNvbG9yLXZhcmlhYmxlLWluZGV4KTtcblxuICAgICAgQGlmICgkYWxwaGEgPiAwIGFuZCAkYWxwaGEgPCAxKSB7XG4gICAgICAgIEByZXR1cm4gI3sncmdiYSh2YXIoJyArICRjc3M0LXZhci1wcmVmaXggKyAkY29sb3ItdmFyaWFibGUtbmFtZSArICctJyArICRjc3M0LWNvbG9yLWZvcm1hdCArJyksICN7JGFscGhhfSknfTtcbiAgICAgIH0gQGVsc2UgaWYgKCRhbHBoYSA9PSAxKSB7XG4gICAgICAgIEByZXR1cm4gI3sncmdiKHZhcignICsgJGNzczQtdmFyLXByZWZpeCArICRjb2xvci12YXJpYWJsZS1uYW1lICsgJy0nICsgJGNzczQtY29sb3ItZm9ybWF0ICsgJykpJ307XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgQGVycm9yIFwiQWxwaGEgKCN7JGFscGhhfSkgbXVzdCBiZSBhIG51bWJlclwiO1xuICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgQGVycm9yIFwiQ29sb3IgKCN7JGNvbG9yLW5hbWV9KSB3YXMgbm90IGZvdW5kIG9uIENvbG9yIFBhbGV0dGUgZGVmaW5pdGlvbi4gTWFrZSBzdXJlIGl0J3MgZGVmaW5lZCBpbiB0aGUgdGhlbWUvcGFsZXR0ZXMvaW50ZXJmYWNlLnNjc3MgZmlsZVwiO1xuICAgIH1cbiAgfSBAZWxzZSBpZiAoJGNvbG9yLXBhbGV0dGUtbW9kZSA9PSAnc2FzcycpIHtcbiAgICAkcGFsZXR0ZS1yZWZlcmVuY2U6ICRjaG9vc2VuLXBhbGV0dGU7XG5cbiAgICAkY29sb3ItdmFyaWFibGU6IG1hcC1nZXQoJHBhbGV0dGUtcmVmZXJlbmNlLCAkY29sb3ItbmFtZSk7XG5cbiAgICAvLyBDaGVjayBpZiBpdCBpcyBhIFNhc3MgY29sb3JcbiAgICBAaWYgKHR5cGVfb2YoJGNvbG9yLXZhcmlhYmxlKSA9PSAnY29sb3InKSB7XG4gICAgICBAaWYgKCRhbHBoYSA+IDAgYW5kICRhbHBoYSA8IDEpIHtcbiAgICAgICAgQHJldHVybiByZ2JhKCRjb2xvci12YXJpYWJsZSwgJGFscGhhKTtcbiAgICAgIH0gQGVsc2UgaWYgKCRhbHBoYSA9PSAxKSB7XG4gICAgICAgIEByZXR1cm4gJGNvbG9yLXZhcmlhYmxlO1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIEBlcnJvciBcIkFscGhhICgjeyRhbHBoYX0pIG11c3QgYmUgYSBudW1iZXJcIjtcbiAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgIEBlcnJvciBcIkNvbG9yICgjeyRjb2xvci12YXJpYWJsZX0pIGlzIG5vdCBhIFNhc3MgY29sb3JcIjtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBlcnJvciAnTm8gQ29sb3IgUGFsZXR0ZSBtb2RlIHNlbGVjdGVkIGluIHRoZW1lL3BhbGV0dGVzL3ByZWZlcmVuY2VzLnNjc3MnO1xuICB9XG59XG4iLCIvKlxuICBDU1MgNCBNb2RlXG4qL1xuJGNvbG9yLXBhbGV0dGUtbW9kZTogJ2Nzcy00JztcblxuXG4vKlxuICBTYXNzIE1vZGVcbiovXG4vLyBAaW1wb3J0ICdjb3JlJztcbi8vXG4vLyAkY29sb3ItcGFsZXR0ZS1tb2RlOiAnc2Fzcyc7XG4vL1xuLy8gLy8gSW1wb3J0IHRoZSBkZWZpbml0aW9ucyBvZiB0aGUgcGFsZXR0ZSB5b3Ugd2FudCB0byB1c2Vcbi8vIEBpbXBvcnQgJ3BhbGV0dGUtMS9kZWZpbml0aW9ucyc7XG4vLyAvLyBAaW1wb3J0ICdwYWxldHRlLTIvZGVmaW5pdGlvbnMnO1xuLy9cbi8vIC8vIEFzc2lnbiBhIHBhcnRpY3VsYXIgQ29sb3IgUGFsZXR0ZSB0byB0aGUgJ2Nob29zZW4tcGFsZXR0ZScgcG9pbnRlci5cbi8vIC8vICRjaG9vc2VuLXBhbGV0dGUgd2lsbCBiZSBhIFNhc3MgbWFwIHBvaW50aW5nIHRvIGFub3RoZXIgY29sb3IgcGFsZXR0ZSBTYXNzIG1hcFxuLy8gJGNob29zZW4tcGFsZXR0ZTogYnVpbGRTYXNzUGFsZXR0ZSgkcGFsZXR0ZS0xKTtcbi8vIC8vICRjaG9vc2VuLXBhbGV0dGU6IGJ1aWxkU2Fzc1BhbGV0dGUoJHBhbGV0dGUtMik7XG4iLCIvL2NvbG9yXG4udGV4dC1ibHVlLWxpZ2h0IHtcbiAgY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbGlnaHRcIil9O1xufVxuLnRleHQtYmx1ZS1tYWluIHtcbiAgY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbWFpblwiKX07XG59XG4udGV4dC1ibHVlLWRhcmsge1xuICBjb2xvcjogI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1kYXJrXCIpfTtcbn1cblxuLy9iYWNrZ3JvdW5kXG4uYmctZ3JleS1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImdyZXktbGlnaHRcIil9O1xufVxuLmJnLWdyZXktZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImdyZXktNVwiKX07XG59XG4uYmctYmx1ZS1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbGlnaHRcIil9O1xufVxuLmJnLWJsdWUtbWFpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbWFpblwiKX07XG59XG4uYmctYmx1ZS1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1kYXJrXCIpfTtcbn1cblxuLy90ZXh0XG4udGV4dC14cyB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbn1cbi50ZXh0LXNtIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn1cbi50ZXh0LWJhc2Uge1xuICBmb250LXNpemU6IDFyZW07XG59XG4udGV4dC1sZyB7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG59XG5cbi50ZXh0LXhsIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuXG4udGV4dC0yeGwge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLnRleHQtM3hsIHtcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xufVxuXG4uZm9udC1zZW1pYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uZm9udC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmNhcGl0YWxpemUge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmN1cnNvci1wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucm91bmRlZC14bCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5ib3JkZXItcHJpbWFyeS0xIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1tYWluXCIpfTtcbn1cblxuLmJvcmRlci1wcmltYXJ5LTIge1xuICBib3JkZXI6IDJweCBzb2xpZCAje3BhbGV0dGUtY29sb3IoXCJibHVlLW1haW5cIil9O1xufVxuXG4uY3VzdG9tLXNjcm9sbHtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xufVxuLmN1c3RvbS1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IC41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiZ3JleS1saWdodFwiKX07XG59XG5cblxuLmN1c3RvbS1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IC4zZW0gc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiZ3JleS01XCIpfTtcbn1cbiIsIkBpbXBvcnQgXCJzaGFyZWRcIjtcblxuOmhvc3Qge1xuICAvLyBEZWZhdWx0IHZhcmlhYmxlc1xuICAtLXBhZ2UtdGl0bGUtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImdyZXktOVwiKX07XG4gIC0tcGFnZS10ZXh0LWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJncmV5LThcIil9O1xuICAtLWxpbmstdGV4dC1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwicHJpbWFyeVwiKX07XG4gIC0tc2lkZS1pbWFnZS1vdmVybGF5OiAje3BhbGV0dGUtY29sb3IoXCJwcmltYXJ5XCIsIDAuMTUpfTtcbiAgLS1wYWdlLXNwYWNpbmc6IDEwcHg7XG4gIC0tZmItYnV0dG9uLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJmYWNlYm9va1wiKX07XG4gIC0tdHctYnV0dG9uLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJ0d2l0dGVyXCIpfTtcbiAgLS1nb29nbGUtYnV0dG9uLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJnb29nbGVcIil9O1xuICAtLXNvY2lhbC1idXR0b25zLWJhY2tncm91bmQ6ICN7cGFsZXR0ZS1jb2xvcihcIndoaXRlXCIpfTtcbiAgLS1idXR0b24tcGFkZGluZzogNnB4IDI2cHg7XG59XG5cbi5zaWduaW4tcGFnZSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuXG4gIC5sb2dpbi1iZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL0JHMi5wbmcpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogODIxcHgpIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvQkcxLnBuZyk7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIH1cbiAgfVxuXG4gIC5mb3JtLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDgpO1xuXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKG1kKSB7XG4gICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiA0KTtcbiAgICB9XG5cbiAgICAucGFnZS10aXRsZSB7XG4gICAgICBjb2xvcjogdmFyKC0tcGFnZS10aXRsZS1jb2xvcik7XG4gICAgfVxuXG4gICAgLmxpbmstdGV4dCB7XG4gICAgICBjb2xvcjogdmFyKC0tbGluay10ZXh0LWNvbG9yKTtcbiAgICB9XG5cbiAgICAucGFnZS1zdWJ0aXRsZSB7XG4gICAgICBjb2xvcjogdmFyKC0tcGFnZS10ZXh0LWNvbG9yKTtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG5cbiAgICAuc2lnbmluLWZvcm0ge1xuICAgICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogNCk7XG5cbiAgICAgIEBpbmNsdWRlIGZvcm0tZ3JvdXAtc3R5bGVzKCk7XG4gICAgfVxuXG4gICAgLmZvcm0tY2FsbC10by1hY3Rpb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAzKTtcblxuICAgICAgLnNpZ24taW4tYnRuIHtcbiAgICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogYXV0bztcbiAgICAgICAgQGluY2x1ZGUgYnV0dG9uKCk7XG4gICAgICAgIHBhZGRpbmc6IHZhcigtLWJ1dHRvbi1wYWRkaW5nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucmVnaXN0ZXItZGl2aWRlciB7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgY29sb3I6IHZhcigtLXBhZ2UtdGV4dC1jb2xvcik7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAyKSAwcHg7XG5cbiAgICAgIC5saW5lIHtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgfVxuXG4gICAgICBzcGFuIHtcbiAgICAgICAgbWFyZ2luOiAwIGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDEuNSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnNvY2lhbC1sb2dpbnMge1xuICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgZmxleC13cmFwOiBub3dyYXA7XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogdmFyKC0tcGFnZS1zcGFjaW5nKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oeHMpIHtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2Utc3BhY2luZyk7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmZiLXNpZ25pbiB7XG4gICAgICAgIC0tYnV0dG9uLWJhY2tncm91bmQ6IHZhcigtLXNvY2lhbC1idXR0b25zLWJhY2tncm91bmQpO1xuICAgICAgICAtLWJ1dHRvbi1ib3JkZXI6IHZhcigtLWZiLWJ1dHRvbi1jb2xvcik7XG4gICAgICAgIC0tYnV0dG9uLWNvbG9yOiB2YXIoLS1mYi1idXR0b24tY29sb3IpO1xuICAgICAgICBAaW5jbHVkZSBidXR0b24tb3V0bGluZSgpO1xuICAgICAgICBwYWRkaW5nOiB2YXIoLS1idXR0b24tcGFkZGluZyk7XG4gICAgICB9XG5cbiAgICAgIC5nb29nbGUtc2lnbmluIHtcbiAgICAgICAgLS1idXR0b24tYmFja2dyb3VuZDogdmFyKC0tc29jaWFsLWJ1dHRvbnMtYmFja2dyb3VuZCk7XG4gICAgICAgIC0tYnV0dG9uLWJvcmRlcjogdmFyKC0tZ29vZ2xlLWJ1dHRvbi1jb2xvcik7XG4gICAgICAgIC0tYnV0dG9uLWNvbG9yOiB2YXIoLS1nb29nbGUtYnV0dG9uLWNvbG9yKTtcbiAgICAgICAgQGluY2x1ZGUgYnV0dG9uLW91dGxpbmUoKTtcbiAgICAgICAgcGFkZGluZzogdmFyKC0tYnV0dG9uLXBhZGRpbmcpO1xuICAgICAgfVxuXG4gICAgICAudHdpdHRlci1zaWduaW4ge1xuICAgICAgICAtLWJ1dHRvbi1iYWNrZ3JvdW5kOiB2YXIoLS1zb2NpYWwtYnV0dG9ucy1iYWNrZ3JvdW5kKTtcbiAgICAgICAgLS1idXR0b24tYm9yZGVyOiB2YXIoLS10dy1idXR0b24tY29sb3IpO1xuICAgICAgICAtLWJ1dHRvbi1jb2xvcjogdmFyKC0tdHctYnV0dG9uLWNvbG9yKTtcbiAgICAgICAgQGluY2x1ZGUgYnV0dG9uLW91dGxpbmUoKTtcbiAgICAgICAgcGFkZGluZzogdmFyKC0tYnV0dG9uLXBhZGRpbmcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5leGlzdGluZy1hY2NvdW50LXNlY3Rpb24ge1xuICAgICAgY29sb3I6IHZhcigtLXBhZ2UtdGV4dC1jb2xvcik7XG4gICAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiA0KTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAuaW1hZ2Utc2VjdGlvbiB7XG4gICAgY2MtaW1hZ2Utc2hlbGwuc2lnbmluLWltYWdlIHtcbiAgICAgIC0taW1hZ2Utc2hlbGwtb3ZlcmxheS1iYWNrZ3JvdW5kOiB2YXIoLS1zaWRlLWltYWdlLW92ZXJsYXkpO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiAhPSBudWxsIGFuZCAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iLCJAbWl4aW4gZm9ybS1ncm91cC1zdHlsZXMoKSB7XG4gIC0tZGVmYXVsdC1zcGFjaW5nOiAxMHB4O1xuICAtLWZvcm0tbGFiZWwtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignZ3JleS03Jyl9O1xuICAtLWZvcm0taW5wdXQtYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKCd3aGl0ZScpfTtcbiAgLS1mb3JtLWlucHV0LWJvcmRlci1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdncmV5LTYnLCAwLjQyKX07XG4gIC0tZm9ybS1pbnB1dC1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdncmV5LTknKX07XG4gIC0tZm9ybS1pbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdncmV5LTUnKX07XG4gIC0tZm9ybS1oZWxwLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ2dyZXktNycpfTtcbiAgLS1mb3JtLWlucHV0LWFkZG9ucy1iYWNrZ3JvdW5kOiAje3BhbGV0dGUtY29sb3IoJ3NlY29uZGFyeScsIDAuMTUpfTtcbiAgLS1mb3JtLWlucHV0LWFkZG9ucy1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdzZWNvbmRhcnknKX07XG4gIC0tZm9ybS1pbnB1dC1zdWNjZXNzLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ3N1Y2Nlc3MnKX07XG4gIC0tZm9ybS1pbnB1dC1zdWNjZXNzLWJhY2tncm91bmQ6ICN7cGFsZXR0ZS1jb2xvcignc3VjY2VzcycsIDAuMTUpfTtcbiAgLS1mb3JtLWlucHV0LWVycm9yLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ2Vycm9yJyl9O1xuICAtLWZvcm0taW5wdXQtZXJyb3ItYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKCdlcnJvcicsIDAuMTUpfTtcbiAgLS1mb3JtLWRpc2FibGVkLWlucHV0LWJhY2tncm91bmQ6ICN7cGFsZXR0ZS1jb2xvcignZ3JleS0yJyl9O1xuICAtLWZvcm0tZGlzYWJsZWQtaW5wdXQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignZ3JleS05Jyl9O1xuXG4gIGxhYmVsIHtcbiAgICBjb2xvcjogdmFyKC0tZm9ybS1sYWJlbC1jb2xvcik7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmZvcm0tY29udHJvbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9ybS1pbnB1dC1iYWNrZ3JvdW5kKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb3JtLWlucHV0LWJvcmRlci1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLWZvcm0taW5wdXQtY29sb3IpO1xuXG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgY29sb3I6IHZhcigtLWZvcm0taW5wdXQtcGxhY2Vob2xkZXItY29sb3IpO1xuICAgIH1cblxuICAgICYuaXMtdmFsaWQge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9ybS1pbnB1dC1zdWNjZXNzLWNvbG9yKTtcbiAgICB9XG5cbiAgICAmLmlzLWludmFsaWQge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9ybS1pbnB1dC1lcnJvci1jb2xvcik7XG4gICAgfVxuXG4gICAgJi5kaXNhYmxlZCB7XG4gICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICBjb2xvcjogdmFyKC0tZm9ybS1kaXNhYmxlZC1pbnB1dC1jb2xvcik7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtLWRpc2FibGVkLWlucHV0LWJhY2tncm91bmQpO1xuICAgIH1cbiAgfVxuXG4gIC5mb3JtLXRleHQge1xuICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tZGVmYXVsdC1zcGFjaW5nKSAvIDIpO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICYuaGVscC10ZXh0IHtcbiAgICAgIGNvbG9yOiB2YXIoLS1mb3JtLWhlbHAtY29sb3IpO1xuICAgIH1cbiAgfVxuXG4gIC5jdXN0b20tdmFsaWQtZmVlZGJhY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm0taW5wdXQtc3VjY2Vzcy1iYWNrZ3JvdW5kKTtcbiAgICBjb2xvcjogdmFyKC0tZm9ybS1pbnB1dC1zdWNjZXNzLWNvbG9yKTtcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLWRlZmF1bHQtc3BhY2luZykgLyAyKSB2YXIoLS1kZWZhdWx0LXNwYWNpbmcpO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgfVxuXG4gIC5jdXN0b20taW52YWxpZC1mZWVkYmFjayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9ybS1pbnB1dC1lcnJvci1iYWNrZ3JvdW5kKTtcbiAgICBjb2xvcjogdmFyKC0tZm9ybS1pbnB1dC1lcnJvci1jb2xvcik7XG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1kZWZhdWx0LXNwYWNpbmcpIC8gMikgdmFyKC0tZGVmYXVsdC1zcGFjaW5nKTtcbiAgICBib3JkZXItcmFkaXVzOiAkaW5wdXQtYm9yZGVyLXJhZGl1cztcbiAgfVxuXG4gIC5pbnB1dC1ncm91cCB7XG4gICAgLmlucHV0LWdyb3VwLXByZXBlbmQsIC5pbnB1dC1ncm91cC1hcHBlbmQge1xuICAgICAgLmlucHV0LWdyb3VwLXRleHQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtLWlucHV0LWFkZG9ucy1iYWNrZ3JvdW5kKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWZvcm0taW5wdXQtYWRkb25zLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9ybS1pbnB1dC1ib3JkZXItY29sb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy8gT3ZlcnJpZGUgQm9vdHN0cmFwIFZhcmlhYmxlc1xuJGljb24tZm9udC1wYXRoOiAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9mb250cy9ib290c3RyYXAvJztcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAnTnVuaXRvJywgc2Fucy1zZXJpZiAhZGVmYXVsdDtcblxuLy8gSGVyZSB5b3UgY2FuIHJlZGVmaW5lIGdsb2JhbCBzdHlsZXMgZnJvbSBCb290c3RyYXBcblxuLy8gcmVkZWZpbmUgaW5wdXRzIGJvcmRlciByYWRpdXNcbiRpbnB1dC1ib3JkZXItcmFkaXVzOiA2cHg7XG5cbi8vIHlvdSBjYW4gcmVkZWZpbmUgdGhlc2UgY29sb3JzIHdpdGggeW91ciBjaG9vc2VuIHBhbGV0dGUgY29sb3JzXG4vLyAkcHJpbWFyeTogI3lvdXJjb2xvcjtcbi8vICRzZWNvbmRhcnk6ICN5b3VyY29sb3I7XG4vLyAkdGVydGlhcnk6ICN5b3VyY29sb3I7XG5cbi8vIGZvciBwYWxldHRlIDE6XG4kcHJpbWFyeTogIzQyOGJjYTtcbi8vICRzZWNvbmRhcnk6ICMzOEQ5OTc7XG4vLyAkdGVydGlhcnk6ICNmZmMyMDA7XG5cbi8vIGZvciBwYWxldHRlIDI6XG4vLyAkcHJpbWFyeTogIzllMzRkZjtcbi8vICRzZWNvbmRhcnk6ICM4QkVERDM7XG4vLyAkdGVydGlhcnk6ICNGRkFGODQ7XG4iLCJAaW1wb3J0ICdwYWxldHRlcy9zaGFyZWQnO1xuXG5AbWl4aW4gYnV0dG9uKCkge1xuICAvLyBjb2xvcnMgdGhhdCBjYW4gYmUgcmVkZWZpbmVkOlxuICAvLyAtLWJ1dHRvbi1iYWNrZ3JvdW5kXG4gIC8vIC0tYnV0dG9uLWJvcmRlclxuICAvLyAtLWJ1dHRvbi1jb2xvclxuXG4gICRkZWZhdWx0LWJhY2tncm91bmQ6ICN7cGFsZXR0ZS1jb2xvcigncHJpbWFyeScpfTsgLy8gLS1idXR0b24tYmFja2dyb3VuZFxuICAkZGVmYXVsdC1ib3JkZXI6ICN7cGFsZXR0ZS1jb2xvcigncHJpbWFyeScpfTsgLy8gLS1idXR0b24tYm9yZGVyXG4gICRkZWZhdWx0LWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ3doaXRlJyl9OyAvLyAtLWJ1dHRvbi1jb2xvclxuXG4gICRkZWZhdWx0LWhvdmVyLWJhY2tncm91bmQ6ICN7cGFsZXR0ZS1jb2xvcigncHJpbWFyeS1kYXJrJyl9OyAvLyAtLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kXG4gICRkZWZhdWx0LWhvdmVyLWJvcmRlcjogI3twYWxldHRlLWNvbG9yKCdwcmltYXJ5LWRhcmsnKX07IC8vIC0tYnV0dG9uLWhvdmVyLWJvcmRlclxuICAkZGVmYXVsdC1ob3Zlci1jb2xvcjogI3twYWxldHRlLWNvbG9yKCd3aGl0ZScpfTsgLy8gLS1idXR0b24taG92ZXItY29sb3JcblxuICAkZGVmYXVsdC1hY3RpdmUtYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLWhvdmVyLWJhY2tncm91bmQsICRkZWZhdWx0LWhvdmVyLWJhY2tncm91bmQpOyAvLyAtLWJ1dHRvbi1hY3RpdmUtYmFja2dyb3VuZFxuICAkZGVmYXVsdC1hY3RpdmUtYm9yZGVyOiB2YXIoLS1idXR0b24taG92ZXItYm9yZGVyLCAkZGVmYXVsdC1ob3Zlci1ib3JkZXIpOyAvLyAtLWJ1dHRvbi1hY3RpdmUtYm9yZGVyXG4gICRkZWZhdWx0LWFjdGl2ZS1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yLCAkZGVmYXVsdC1ob3Zlci1jb2xvcik7IC8vIC0tYnV0dG9uLWFjdGl2ZS1jb2xvclxuXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLCAkZGVmYXVsdC1iYWNrZ3JvdW5kKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tYm9yZGVyLCAkZGVmYXVsdC1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBjb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yLCAkZGVmYXVsdC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuNXMsIGNvbG9yIC41cywgYmFja2dyb3VuZC1jb2xvciAuNXM7XG5cbiAgJjpob3ZlciB7XG4gICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWJhY2tncm91bmQsICRkZWZhdWx0LWhvdmVyLWJhY2tncm91bmQpO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItYm9yZGVyLCAkZGVmYXVsdC1ob3Zlci1ib3JkZXIpO1xuICAgICAgY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1jb2xvciwgJGRlZmF1bHQtaG92ZXItY29sb3IpO1xuICAgIH1cbiAgfVxuXG4gICY6YWN0aXZlLFxuICAmLmFjdGl2ZSxcbiAgJjpmb2N1cyxcbiAgJi5mb2N1cyB7XG4gICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWFjdGl2ZS1iYWNrZ3JvdW5kLCAkZGVmYXVsdC1hY3RpdmUtYmFja2dyb3VuZCk7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1hY3RpdmUtYm9yZGVyLCAkZGVmYXVsdC1hY3RpdmUtYm9yZGVyKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1idXR0b24tYWN0aXZlLWNvbG9yLCAkZGVmYXVsdC1hY3RpdmUtY29sb3IpO1xuICAgIH1cbiAgfVxuXG4gICZbZGlzYWJsZWRdIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIG9wYWNpdHk6IC41O1xuICB9XG59XG5cbkBtaXhpbiBidXR0b24tb3V0bGluZSgpIHtcbiAgLy8gY29sb3JzIHRoYXQgY2FuIGJlIHJlZGVmaW5lZDpcbiAgLy8gLS1idXR0b24tYmFja2dyb3VuZFxuICAvLyAtLWJ1dHRvbi1ib3JkZXJcbiAgLy8gLS1idXR0b24tY29sb3JcblxuICAkZGVmYXVsdC1iYWNrZ3JvdW5kOiAje3BhbGV0dGUtY29sb3IoJ3doaXRlJyl9OyAvLyAtLWJ1dHRvbi1iYWNrZ3JvdW5kXG4gICRkZWZhdWx0LWJvcmRlcjogI3twYWxldHRlLWNvbG9yKCdibHVlLW1haW4nKX07IC8vIC0tYnV0dG9uLWJvcmRlclxuICAkZGVmYXVsdC1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdibHVlLW1haW4nKX07IC8vIC0tYnV0dG9uLWNvbG9yXG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQsICRkZWZhdWx0LWJhY2tncm91bmQpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ib3JkZXIsICRkZWZhdWx0LWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsICRkZWZhdWx0LWNvbG9yKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC41cywgY29sb3IgLjVzLCBiYWNrZ3JvdW5kLWNvbG9yIC41cztcblxuICAmOmhvdmVyIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsICRkZWZhdWx0LWNvbG9yKTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWJvcmRlciwgJGRlZmF1bHQtYm9yZGVyKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZCwgJGRlZmF1bHQtYmFja2dyb3VuZCk7XG4gICAgfVxuICB9XG5cbiAgJjphY3RpdmUsXG4gICYuYWN0aXZlLFxuICAmOmZvY3VzLFxuICAmLmZvY3VzIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsICRkZWZhdWx0LWNvbG9yKTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWJvcmRlciwgJGRlZmF1bHQtYm9yZGVyKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZCwgJGRlZmF1bHQtYmFja2dyb3VuZCk7XG4gICAgfVxuICB9XG4gICZbZGlzYWJsZWRdIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIG9wYWNpdHk6IC41O1xuICB9XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SigninComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-signin",
            templateUrl: "./signin.component.html",
            styleUrls: ["./signin.component.scss"]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "0MNC");
      /* harmony import */


      var _core_layouts_layouts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./core/layouts/layouts.service */
      "+qdo");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platformId, breakpointObserver, layoutsService) {
          _classCallCheck(this, AppComponent);

          this.platformId = platformId;
          this.breakpointObserver = breakpointObserver;
          this.layoutsService = layoutsService;
          this.title = 'fully-angular-admin-template';
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this19 = this;

            // Listen to device size changes to dynamically adjust the layout
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
              // Use Angular CDK Breakpoint Observer to detect changes on the screen size
              this.breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].XSmall]).subscribe(function (result) {
                if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].XSmall]) {
                  // Switch to mobile layout
                  var mobileLayoutName = 'mobile';

                  _this19.layoutsService.switchLayout(mobileLayoutName);
                } else {
                  // Switch back to previous layout (or the default one)
                  var previousLayoutName = _this19.layoutsService.previousLayout.name;

                  _this19.layoutsService.switchLayout(previousLayoutName);
                }
              });
            }
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_layouts_layouts_service__WEBPACK_IMPORTED_MODULE_3__["LayoutsService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }, {
            type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]
          }, {
            type: _core_layouts_layouts_service__WEBPACK_IMPORTED_MODULE_3__["LayoutsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "VFvP":
    /*!******************************************************************!*\
      !*** ./src/app/core/layouts/dynamic/dynamic-layout.component.ts ***!
      \******************************************************************/

    /*! exports provided: DynamicLayoutComponent */

    /***/
    function VFvP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DynamicLayoutComponent", function () {
        return DynamicLayoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nguniversal/express-engine/tokens */
      "a4Kx");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "+rOU");
      /* harmony import */


      var src_app_app_layouts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/app-layouts */
      "XwLw");
      /* harmony import */


      var _layouts_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../layouts.service */
      "+qdo");

      function DynamicLayoutComponent_ng_template_0_Template(rf, ctx) {}

      var MOBILE_DEVICE = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["makeStateKey"])('mobile-device');

      var DynamicLayoutComponent = /*#__PURE__*/function () {
        function DynamicLayoutComponent(platformId, response, state, layoutsService) {
          _classCallCheck(this, DynamicLayoutComponent);

          this.platformId = platformId;
          this.response = response;
          this.state = state;
          this.layoutsService = layoutsService; // Check if the user is requesting the app from a mobile device

          var mobileDevice = 'not-mobile'; // In our server.ts we added a custom response header with information about the device requesting the app

          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this.platformId)) {
            if (this.response && this.response !== null) {
              // Get custom header from the response sent from the server.ts
              var mobileDeviceHeader = this.response.get('mobile-device'); // If the mobile-device header is not null, then the user is requesting the app from a mobile device. Override reference.

              if (mobileDeviceHeader && mobileDeviceHeader !== 'null') {
                mobileDevice = mobileDeviceHeader;
              }
            } // Set the mobileDevice reference using Angular TransferState mechanisms so we can have this reference ready
            // when the app transitions from server side rendering to client side rendering


            this.state.set(MOBILE_DEVICE, mobileDevice);
            console.log('we\'re rendering from the server, checking response object.');
            console.log("MOBILE_DEVICE from RESPONSE: ".concat(mobileDevice));
          } else {
            mobileDevice = this.state.get(MOBILE_DEVICE, mobileDevice);
            console.log('we\'re rendering from the browser, there is no response object.');
            console.log("MOBILE_DEVICE from TransferState: ".concat(mobileDevice));
          }

          if (mobileDevice !== 'not-mobile') {
            this.renderLayoutPortal('mobile');
          } else {
            this.renderLayoutPortal(src_app_app_layouts__WEBPACK_IMPORTED_MODULE_5__["defaultLayout"].name);
          }
        }

        _createClass(DynamicLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.dynamicLayoutSwitchSubscription.unsubscribe();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this20 = this;

            this.dynamicLayoutSwitchSubscription = this.layoutsService.switchLayoutSubject.subscribe(function (selectedLayoutName) {
              _this20.renderLayoutPortal(selectedLayoutName);
            }, function (error) {
              console.log('switchLayoutSubject [DynamicLayoutComponent] - error', error);
            }, function () {
              console.log('switchLayoutSubject [DynamicLayoutComponent] - complete');
            });
          }
        }, {
          key: "renderLayoutPortal",
          value: function renderLayoutPortal(layoutName) {
            // Check if the layout we want to render exists. We check against the list defined in the src/app-layouts.ts file
            var layoutToRender = src_app_app_layouts__WEBPACK_IMPORTED_MODULE_5__["availableLayouts"].find(function (layout) {
              return layout.name === layoutName;
            });

            if (layoutToRender) {
              this.dynamicLayoutPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["ComponentPortal"](layoutToRender.component);
            }
          }
        }]);

        return DynamicLayoutComponent;
      }();

      DynamicLayoutComponent.ɵfac = function DynamicLayoutComponent_Factory(t) {
        return new (t || DynamicLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_3__["RESPONSE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["TransferState"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_layouts_service__WEBPACK_IMPORTED_MODULE_6__["LayoutsService"]));
      };

      DynamicLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DynamicLayoutComponent,
        selectors: [["app-dynamic-layout"]],
        viewQuery: function DynamicLayoutComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["CdkPortalOutlet"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dynamicLayoutPortalOutlet = _t.first);
          }
        },
        decls: 1,
        vars: 1,
        consts: [[3, "cdkPortalOutlet"]],
        template: function DynamicLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DynamicLayoutComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", ctx.dynamicLayoutPortal);
          }
        },
        directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["CdkPortalOutlet"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicLayoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dynamic-layout',
            templateUrl: './dynamic-layout.component.html'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_3__["RESPONSE"]]
            }]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["TransferState"]
          }, {
            type: _layouts_service__WEBPACK_IMPORTED_MODULE_6__["LayoutsService"]
          }];
        }, {
          dynamicLayoutPortalOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["CdkPortalOutlet"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "W7lO":
    /*!*********************************************************!*\
      !*** ./src/app/business/state/invoice-state.service.ts ***!
      \*********************************************************/

    /*! exports provided: InvoicesStateService */

    /***/
    function W7lO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvoicesStateService", function () {
        return InvoicesStateService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/state.service */
      "E21u");
      /* harmony import */


      var nanoid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! nanoid */
      "4b23");

      var initialState = {
        invoices: [],
        newInvoice: {
          status: "DRAFT",
          vehicles: []
        },
        selectedInvoice: null,
        curentRate: null,
        selectedInvoices: [],
        mostRecentsCustomers: []
      };

      var InvoicesStateService = /*#__PURE__*/function (_core_state_service__) {
        _inherits(InvoicesStateService, _core_state_service__);

        var _super = _createSuper(InvoicesStateService);

        function InvoicesStateService() {
          var _this21;

          _classCallCheck(this, InvoicesStateService);

          _this21 = _super.call(this, initialState);
          _this21.invoices$ = _this21.select(function (state) {
            return state.invoices;
          });
          _this21.newInvoice$ = _this21.select(function (state) {
            return state.newInvoice;
          });
          _this21.selectedInvoice$ = _this21.select(function (state) {
            return state.selectedInvoice;
          });
          _this21.currentRate$ = _this21.select(function (state) {
            return state.curentRate;
          });
          _this21.selectedInvoices$ = _this21.select(function (state) {
            return state.selectedInvoices;
          });
          _this21.mostRecentsCustomers$ = _this21.select(function (state) {
            return state.mostRecentsCustomers;
          });
          return _this21;
        }

        _createClass(InvoicesStateService, [{
          key: "setInvoices",
          value: function setInvoices(invoices) {
            this.setState({
              invoices: invoices
            });
          }
        }, {
          key: "setNewInvoice",
          value: function setNewInvoice(invoice) {
            this.setState({
              newInvoice: Object.assign(Object.assign({}, this.state.newInvoice), invoice)
            });
          }
        }, {
          key: "setSelectedInvoice",
          value: function setSelectedInvoice(invoice) {
            this.setState({
              selectedInvoice: Object.assign(Object.assign({}, this.state.selectedInvoice), invoice)
            });
          }
        }, {
          key: "addNewInvoiceVehicle",
          value: function addNewInvoiceVehicle(vehicle) {
            var _a, _b;

            var vehicles = (_b = (_a = this.state.newInvoice) === null || _a === void 0 ? void 0 : _a.vehicles) !== null && _b !== void 0 ? _b : [];

            if (vehicles.find(function (v) {
              return v.vin === vehicle.vin;
            })) {
              throw new Error("Duplicated vin");
            }

            vehicles.push(Object.assign(Object.assign({}, vehicle), {
              _id: Object(nanoid__WEBPACK_IMPORTED_MODULE_2__["nanoid"])(10)
            })); //temporal id until saved on db

            this.setState({
              newInvoice: Object.assign(Object.assign({}, this.state.newInvoice), {
                vehicles: vehicles
              })
            });
          }
        }, {
          key: "addSelectedInvoiceVehicle",
          value: function addSelectedInvoiceVehicle(vehicle) {
            var _a, _b;

            var vehicles = (_b = (_a = this.state.selectedInvoice) === null || _a === void 0 ? void 0 : _a.vehicles) !== null && _b !== void 0 ? _b : [];

            if (vehicles.find(function (v) {
              return v.vin === vehicle.vin;
            })) {
              throw new Error("Duplicated vin");
            }

            vehicles.push(Object.assign(Object.assign({}, vehicle), {
              _id: Object(nanoid__WEBPACK_IMPORTED_MODULE_2__["nanoid"])(10)
            }));
            this.setState({
              selectedInvoice: Object.assign(Object.assign({}, this.state.selectedInvoice), {
                vehicles: vehicles
              })
            });
          }
        }, {
          key: "editNewInvoiceVehicle",
          value: function editNewInvoiceVehicle(vehicle, id) {
            var _a, _b;

            var vehicles = (_b = (_a = this.state.newInvoice) === null || _a === void 0 ? void 0 : _a.vehicles) !== null && _b !== void 0 ? _b : [];

            if (vehicles.find(function (v) {
              return v.vin === vehicle.vin && v._id !== id;
            })) {
              throw new Error("Duplicated vin");
            }

            var newVehicles = vehicles.map(function (v) {
              if (v._id === id) {
                return vehicle;
              } else {
                return v;
              }
            });
            this.setState({
              newInvoice: Object.assign(Object.assign({}, this.state.newInvoice), {
                vehicles: newVehicles
              })
            });
          }
        }, {
          key: "editSelectedInvoiceVehicle",
          value: function editSelectedInvoiceVehicle(vehicle, id) {
            var _a, _b;

            var vehicles = (_b = (_a = this.state.selectedInvoice) === null || _a === void 0 ? void 0 : _a.vehicles) !== null && _b !== void 0 ? _b : [];

            if (vehicles.find(function (v) {
              return v.vin === vehicle.vin && v._id !== id;
            })) {
              throw new Error("Duplicated vin");
            }

            var newVehicles = vehicles.map(function (v) {
              if (v._id === id) {
                return vehicle;
              } else {
                return v;
              }
            });
            this.setState({
              selectedInvoice: Object.assign(Object.assign({}, this.state.selectedInvoice), {
                vehicles: newVehicles
              })
            });
          }
        }, {
          key: "deleteNewInvoiceVehicle",
          value: function deleteNewInvoiceVehicle(vehicleId) {
            var _a, _b;

            var newVehicles = (_b = (_a = this.state.newInvoice) === null || _a === void 0 ? void 0 : _a.vehicles) === null || _b === void 0 ? void 0 : _b.filter(function (v) {
              return v._id !== vehicleId;
            });
            this.setState({
              newInvoice: Object.assign(Object.assign({}, this.state.newInvoice), {
                vehicles: newVehicles
              })
            });
          }
        }, {
          key: "deleteSelectedInvoiceVehicle",
          value: function deleteSelectedInvoiceVehicle(vehicleId) {
            var _a, _b;

            var newVehicles = (_b = (_a = this.state.selectedInvoice) === null || _a === void 0 ? void 0 : _a.vehicles) === null || _b === void 0 ? void 0 : _b.filter(function (v) {
              return v._id !== vehicleId;
            });
            this.setState({
              selectedInvoice: Object.assign(Object.assign({}, this.state.selectedInvoice), {
                vehicles: newVehicles
              })
            });
          }
        }, {
          key: "resetNewInvoice",
          value: function resetNewInvoice() {
            this.setState({
              newInvoice: {
                status: "DRAFT",
                vehicles: []
              }
            });
          }
        }, {
          key: "resetSelectedInvoice",
          value: function resetSelectedInvoice() {
            this.setState({
              selectedInvoice: null
            });
          }
        }, {
          key: "setCurretRate",
          value: function setCurretRate(rate) {
            this.setState({
              curentRate: rate
            });
          }
        }, {
          key: "setSelectedInvoices",
          value: function setSelectedInvoices(invoice, selected) {
            if (selected) {
              this.setState({
                selectedInvoices: [].concat(_toConsumableArray(this.state.selectedInvoices), [invoice])
              });
            } else {
              this.setState({
                selectedInvoices: this.state.selectedInvoices.filter(function (inv) {
                  return inv.id !== invoice.id;
                })
              });
            }
          }
        }, {
          key: "setAllSelectedInvoices",
          value: function setAllSelectedInvoices(invoices, selected) {
            if (selected) {
              this.setState({
                selectedInvoices: invoices
              });
            } else {
              this.setState({
                selectedInvoices: []
              });
            }
          }
        }, {
          key: "setMostRecentsCustomers",
          value: function setMostRecentsCustomers(customers) {
            this.setState({
              mostRecentsCustomers: customers
            });
          }
        }]);

        return InvoicesStateService;
      }(_core_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"]);

      InvoicesStateService.ɵfac = function InvoicesStateService_Factory(t) {
        return new (t || InvoicesStateService)();
      };

      InvoicesStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: InvoicesStateService,
        factory: InvoicesStateService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvoicesStateService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "XwLw":
    /*!********************************!*\
      !*** ./src/app/app-layouts.ts ***!
      \********************************/

    /*! exports provided: availableLayouts, defaultLayout */

    /***/
    function XwLw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "availableLayouts", function () {
        return availableLayouts;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultLayout", function () {
        return defaultLayout;
      });
      /* harmony import */


      var _core_layouts_option_b_option_b_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./core/layouts/option-b/option-b-layout.component */
      "iLju");
      /* harmony import */


      var _core_layouts_mobile_mobile_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./core/layouts/mobile/mobile-layout.component */
      "2isz");

      var availableLayouts = [{
        name: "B",
        component: _core_layouts_option_b_option_b_layout_component__WEBPACK_IMPORTED_MODULE_0__["OptionBLayoutComponent"]
      }, {
        name: "mobile",
        component: _core_layouts_mobile_mobile_layout_component__WEBPACK_IMPORTED_MODULE_1__["MobileLayoutComponent"]
      }]; // Select the default layout

      var defaultLayout = availableLayouts.find(function (layout) {
        return layout.name === "B"; // return layout.name === 'D';
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./core/core.module */
      "pKmL");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./shared/shared.module */
      "PCNd");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./authentication/authentication.module */
      "OpKh");
      /* harmony import */


      var _core_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./core/interceptors/auth.interceptor */
      "htiD");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _vehicle_report_vehicle_report_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./vehicle-report/vehicle-report.component */
      "uOoa");

      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
          useClass: _core_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["AuthInterceptor"],
          multi: true
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({
          appId: "serverApp"
        }), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserTransferStateModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_8__["AuthenticationModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__["MatStepperModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _vehicle_report_vehicle_report_component__WEBPACK_IMPORTED_MODULE_12__["VehicleReportComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserTransferStateModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_8__["AuthenticationModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__["MatStepperModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _vehicle_report_vehicle_report_component__WEBPACK_IMPORTED_MODULE_12__["VehicleReportComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({
              appId: "serverApp"
            }), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserTransferStateModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_8__["AuthenticationModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__["MatStepperModule"]],
            providers: [{
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
              useClass: _core_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["AuthInterceptor"],
              multi: true
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZpN7":
    /*!***************************************!*\
      !*** ./src/app/shell/shell.module.ts ***!
      \***************************************/

    /*! exports provided: ShellModule */

    /***/
    function ZpN7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShellModule", function () {
        return ShellModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./aspect-ratio/aspect-ratio.component */
      "B7gC");
      /* harmony import */


      var _image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./image-shell/image-shell.component */
      "2gss");
      /* harmony import */


      var _text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./text-shell/text-shell.component */
      "zK/y");
      /* harmony import */


      var _config_app_shell_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./config/app-shell.config */
      "Kt/9");

      var ShellModule = /*#__PURE__*/_createClass(function ShellModule() {
        _classCallCheck(this, ShellModule);
      });

      ShellModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ShellModule
      });
      ShellModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ShellModule_Factory(t) {
          return new (t || ShellModule)();
        },
        providers: [// Inspired in: https://devblogs.microsoft.com/premier-developer/angular-how-to-editable-config-files/
        {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
          useFactory: function useFactory(appShellConfig) {
            return function () {
              return appShellConfig.load();
            };
          },
          deps: [_config_app_shell_config__WEBPACK_IMPORTED_MODULE_5__["AppShellConfig"]],
          multi: true
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShellModule, {
          declarations: [_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_2__["AspectRatioComponent"], _image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_3__["ImageShellComponent"], _text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_4__["TextShellComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_2__["AspectRatioComponent"], _image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_3__["ImageShellComponent"], _text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_4__["TextShellComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShellModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_2__["AspectRatioComponent"], _image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_3__["ImageShellComponent"], _text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_4__["TextShellComponent"]],
            providers: [// Inspired in: https://devblogs.microsoft.com/premier-developer/angular-how-to-editable-config-files/
            {
              provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
              useFactory: function useFactory(appShellConfig) {
                return function () {
                  return appShellConfig.load();
                };
              },
              deps: [_config_app_shell_config__WEBPACK_IMPORTED_MODULE_5__["AppShellConfig"]],
              multi: true
            }],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_2__["AspectRatioComponent"], _image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_3__["ImageShellComponent"], _text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_4__["TextShellComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "hLHA":
    /*!***************************************************************************!*\
      !*** ./src/app/shared/show-hide-password/show-hide-password.component.ts ***!
      \***************************************************************************/

    /*! exports provided: ShowHidePasswordComponent */

    /***/
    function hLHA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowHidePasswordComponent", function () {
        return ShowHidePasswordComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _show_hide_input_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./show-hide-input.directive */
      "CEen");

      var _c0 = ["*"];

      var ShowHidePasswordComponent = /*#__PURE__*/function () {
        function ShowHidePasswordComponent() {
          _classCallCheck(this, ShowHidePasswordComponent);

          this.show = false;
        }

        _createClass(ShowHidePasswordComponent, [{
          key: "toggleShow",
          value: function toggleShow() {
            this.show = !this.show;

            if (this.show) {
              this.input.nativeElement.type = 'text';
            } else {
              this.input.nativeElement.type = 'password';
            }
          }
        }]);

        return ShowHidePasswordComponent;
      }();

      ShowHidePasswordComponent.ɵfac = function ShowHidePasswordComponent_Factory(t) {
        return new (t || ShowHidePasswordComponent)();
      };

      ShowHidePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ShowHidePasswordComponent,
        selectors: [["app-show-hide-password"]],
        contentQueries: function ShowHidePasswordComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _show_hide_input_directive__WEBPACK_IMPORTED_MODULE_1__["ShowHideInputDirective"], true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
          }
        },
        ngContentSelectors: _c0,
        decls: 4,
        vars: 2,
        consts: [[1, "type-toggle", 3, "click"], [1, "fas", "fa-eye", "show-option", 3, "hidden"], [1, "fas", "fa-eye-slash", "hide-option", 3, "hidden"]],
        template: function ShowHidePasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowHidePasswordComponent_Template_a_click_1_listener() {
              return ctx.toggleShow();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.show);
          }
        },
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n[_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%] {\n  -webkit-padding-start: 0.5rem;\n          padding-inline-start: 0.5rem;\n}\n[_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%]   .show-option[_ngcontent-%COMP%], [_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%]   .hide-option[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  display: block;\n}\n[_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%]   .show-option[_ngcontent-%COMP%]:not(i), [_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%]   .hide-option[_ngcontent-%COMP%]:not(i) {\n  text-transform: uppercase;\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3Nob3ctaGlkZS1wYXNzd29yZC9zaG93LWhpZGUtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLDZCQUFBO1VBQUEsNEJBQUE7QUFDSjtBQUNJOztFQUVFLGlCQUFBO0VBQ0EsY0FBQTtBQUNOO0FBRU07O0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FBQ1IiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc2hvdy1oaWRlLXBhc3N3b3JkL3Nob3ctaGlkZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLnR5cGUtdG9nZ2xlIHtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMC41cmVtO1xuXG4gICAgLnNob3ctb3B0aW9uLFxuICAgIC5oaWRlLW9wdGlvbiB7XG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgICAvLyBJbiBjYXNlIHlvdSB3YW50IHRvIHVzZSB0ZXh0IGluc3RlYWQgb2YgaWNvbnNcbiAgICAgICY6bm90KGkpIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowHidePasswordComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-show-hide-password',
            templateUrl: './show-hide-password.component.html',
            styleUrls: ['./show-hide-password.component.scss']
          }]
        }], function () {
          return [];
        }, {
          input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [_show_hide_input_directive__WEBPACK_IMPORTED_MODULE_1__["ShowHideInputDirective"], {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "htiD":
    /*!*******************************************************!*\
      !*** ./src/app/core/interceptors/auth.interceptor.ts ***!
      \*******************************************************/

    /*! exports provided: AuthInterceptor */

    /***/
    function htiD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
        return AuthInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/authentication/authentication.service */
      "9Ku7");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthInterceptor = /*#__PURE__*/function () {
        function AuthInterceptor(authService, router) {
          _classCallCheck(this, AuthInterceptor);

          this.authService = authService;
          this.router = router;
        }

        _createClass(AuthInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this22 = this;

            if (this.authService.isLoggedIn()) {
              var access_token = this.authService.getAccessToken();
              request = request.clone({
                headers: request.headers.set("Authorization", "Bearer " + access_token)
              });
            }

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (event) {
              if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {//console.log("Network event--->>>", event); //TODO logger with log levels
              }

              return event;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
              var _a, _b;

              var data = {
                reason: (_b = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.reason) !== null && _b !== void 0 ? _b : "",
                status: error === null || error === void 0 ? void 0 : error.status
              }; // console.log("Network event--->>> Error: ", data); //TODO logger with log levels
              // console.log(error);

              if (error.statusText == "Unauthorized" || error.statusText == "Forbidden") {
                _this22.authService.logout().subscribe(function () {
                  return _this22.router.navigate(["auth/signin"]);
                });
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
            }));
          }
        }]);

        return AuthInterceptor;
      }();

      AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
        return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthInterceptor,
        factory: AuthInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: src_app_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "iLju":
    /*!********************************************************************!*\
      !*** ./src/app/core/layouts/option-b/option-b-layout.component.ts ***!
      \********************************************************************/

    /*! exports provided: OptionBLayoutComponent */

    /***/
    function iLju(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OptionBLayoutComponent", function () {
        return OptionBLayoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _side_menus_side_menus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../side-menus/side-menus.service */
      "0+bB");
      /* harmony import */


      var _responsive_breakpoints_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../responsive-breakpoints.service */
      "D+hS");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _side_menus_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../side-menus/main-menu/main-menu.component */
      "z59Q");
      /* harmony import */


      var _top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../top-navbar/top-navbar.component */
      "EXnx");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = ["mainSidenav"];
      var _c1 = ["altSidenav"];

      var OptionBLayoutComponent = /*#__PURE__*/function () {
        function OptionBLayoutComponent(sideMenusService, responsiveBreakpointsService, platformId) {
          _classCallCheck(this, OptionBLayoutComponent);

          this.sideMenusService = sideMenusService;
          this.responsiveBreakpointsService = responsiveBreakpointsService;
          this.platformId = platformId;
          this.layoutFlag = true;
          this.currentYear = new Date().getFullYear();
          this.serverSideRendered = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this.platformId); // main menu initialization

          switch (this.responsiveBreakpointsService.currentScreenSize) {
            case 'small':
              this.mainSidenavOpened = false;
              this.mainSideMenuMode = 'push';
              break;

            case 'medium':
              this.mainSidenavOpened = true;
              this.mainSideMenuMode = 'side';
              break;

            case 'large':
              this.mainSidenavOpened = true;
              this.mainSideMenuMode = 'side';
              break;

            default:
              this.mainSidenavOpened = true;
              this.mainSideMenuMode = 'side';
          }
        }

        _createClass(OptionBLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this23 = this;

            // subscribe to screen size changes
            this.screenSizeChangeSubscription = this.responsiveBreakpointsService.screenSizeChangeSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(0)).subscribe(function (event) {
              if (event === 'small') {
                _this23.sideMenusService.changeMainMenuModeSubject.next('push');

                _this23.sideMenusService.toggleMainMenuSubject.next('close');
              }

              if (event === 'medium') {
                _this23.sideMenusService.changeMainMenuModeSubject.next('side');

                _this23.sideMenusService.toggleMainMenuSubject.next('open');
              }

              if (event === 'large') {
                _this23.sideMenusService.changeMainMenuModeSubject.next('side');

                _this23.sideMenusService.toggleMainMenuSubject.next('open');
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.mainSidenavSubscription.unsubscribe();
            this.altSidenavSubscription.unsubscribe();
            this.screenSizeChangeSubscription.unsubscribe();
            this.changeMainMenuModeSubscription.unsubscribe();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this24 = this;

            this.mainSidenavSubscription = this.sideMenusService.toggleMainMenuSubject.subscribe(function (event) {
              switch (event) {
                case 'toggle':
                  _this24.mainSidenav.toggle();

                  break;

                case 'open':
                  _this24.mainSidenav.open();

                  break;

                case 'close':
                  _this24.mainSidenav.close();

                  break;

                default:
                  _this24.mainSidenav.toggle();

              }
            }, function (error) {
              console.log('toggleMainMenu [Layout B] - error', error);
            }, function () {});
            this.altSidenavSubscription = this.sideMenusService.toggleAltMenuSubject.subscribe(function (event) {
              switch (event) {
                case 'toggle':
                  _this24.altSidenav.toggle();

                  break;

                case 'open':
                  _this24.altSidenav.open();

                  break;

                case 'close':
                  _this24.altSidenav.close();

                  break;

                default:
                  _this24.altSidenav.toggle();

              }
            }, function (error) {
              console.log('toggleAltMenu [Layout B] - error', error);
            }, function () {});
            this.changeMainMenuModeSubscription = this.sideMenusService.changeMainMenuModeSubject.subscribe(function (menuMode) {
              _this24.mainSideMenuMode = menuMode;
            }, function (error) {
              console.log('changeMainMenuModeSubject [Layout B] - error', error);
            }, function () {});
          } // It's better to have the class applied when the opening starts as we want it ready before the opening animation ends

        }, {
          key: "openedStart",
          value: function openedStart() {
            this.mainSidenavOpened = true;
          }
        }, {
          key: "mainSidenavToggled",
          value: function mainSidenavToggled(opened) {
            this.mainSidenavOpened = opened;
          }
        }, {
          key: "altSidenavToggled",
          value: function altSidenavToggled(opened) {
            this.altSidenavOpened = opened;
          }
        }]);

        return OptionBLayoutComponent;
      }();

      OptionBLayoutComponent.ɵfac = function OptionBLayoutComponent_Factory(t) {
        return new (t || OptionBLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_side_menus_side_menus_service__WEBPACK_IMPORTED_MODULE_3__["SideMenusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_responsive_breakpoints_service__WEBPACK_IMPORTED_MODULE_4__["ResponsiveBreakpointsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]));
      };

      OptionBLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OptionBLayoutComponent,
        selectors: [["app-option-b-layout"]],
        viewQuery: function OptionBLayoutComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mainSidenav = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.altSidenav = _t.first);
          }
        },
        hostVars: 8,
        hostBindings: function OptionBLayoutComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("layout-b", ctx.layoutFlag)("server-side-rendered", ctx.serverSideRendered)("main-sidenav-opened", ctx.mainSidenavOpened)("alt-sidenav-opened", ctx.altSidenavOpened);
          }
        },
        decls: 10,
        vars: 3,
        consts: [["position", "start", 1, "admin-main-sidenav", "fixed-sidenav", "clear-sidenav-background", 3, "mode", "opened", "openedStart", "openedChange"], ["mainSidenav", ""], [1, "show-branding", "use-active-item-line-decoration"], [1, "admin-main-content"], [1, "admin-top-navbar", "show-bare-branding", "add-user-divider"], [2, "flex-grow", "1"], [1, "py-3", "w-100", "text-center"]],
        template: function OptionBLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openedStart", function OptionBLayoutComponent_Template_mat_sidenav_openedStart_1_listener() {
              return ctx.openedStart();
            })("openedChange", function OptionBLayoutComponent_Template_mat_sidenav_openedChange_1_listener($event) {
              return ctx.mainSidenavToggled($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-main-menu", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-sidenav-content", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-top-navbar", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", ctx.mainSideMenuMode)("opened", ctx.mainSidenavOpened);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Copyright " + ctx.currentYear + " - vinbilling.com | All Rights Reserved");
          }
        },
        directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"], _side_menus_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_6__["MainMenuComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContent"], _top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_7__["TopNavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"]],
        styles: ["[_nghost-%COMP%] {\n  --layout-background: rgb(var(--palette-grey-0-rgb));\n  --layout-color: rgb(var(--palette-grey-8-rgb));\n  --layout-navigation-padding: 30px;\n  --layout-navigation-spacing: calc(var(--layout-navigation-padding) / 3);\n  --layout-top-navbar-background: transparent;\n  --layout-top-navbar-color: var(--layout-color);\n  --layout-top-navbar-alt-color: rgb(var(--palette-grey-5-rgb));\n  --layout-top-navbar-border-color: rgb(var(--palette-grey-4-rgb));\n  --layout-top-navbar-height: 80px;\n  --layout-main-sidenav-width: 260px;\n  --layout-main-sidenav-background: rgb(var(--palette-blue-main-rgb));\n  --layout-main-sidenav-active-background: rgb(var(--palette-blue-dark-rgb));\n  --layout-main-sidenav-color: rgb(var(--palette-primary-contrast-rgb));\n  --layout-main-sidenav-active-color: rgb(var(--palette-white-rgb));\n  --layout-main-sidenav-alt-color: rgb(var(--palette-grey-1-rgb));\n  --layout-alt-sidenav-background: rgb(var(--palette-white-rgb));\n  --layout-alt-sidenav-color: var(--layout-color);\n  --layout-alt-sidenav-alt-color: rgb(var(--palette-grey-5-rgb));\n}\n[_nghost-%COMP%] {\n  \n  \n  \n  \n  \n}\n[_nghost-%COMP%]   mat-sidenav-content.admin-main-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n[_nghost-%COMP%]   app-top-navbar.admin-top-navbar[_ngcontent-%COMP%] {\n  --top-navbar-background: var(--layout-top-navbar-background);\n  --top-navbar-color: var(--layout-top-navbar-color);\n  --top-navbar-alt-color: var(--layout-top-navbar-alt-color);\n  --top-navbar-border-color: var(--layout-top-navbar-border-color);\n  --top-navbar-height: var(--layout-top-navbar-height);\n  --top-navbar-padding: var(--layout-navigation-padding);\n  --top-navbar-spacing: var(--layout-navigation-spacing);\n}\n[_nghost-%COMP%]   mat-sidenav.admin-alt-sidenav[_ngcontent-%COMP%] {\n  -ms-scroll-chaining: none;\n      overscroll-behavior: contain;\n}\n[_nghost-%COMP%]   mat-sidenav.admin-alt-sidenav.fixed-sidenav[_ngcontent-%COMP%] {\n  position: fixed;\n}\n[_nghost-%COMP%]   mat-sidenav.admin-alt-sidenav[_ngcontent-%COMP%]   app-dynamic-menu[_ngcontent-%COMP%] {\n  --dynamic-menu-background: var(--layout-alt-sidenav-background);\n  --dynamic-menu-color: var(--layout-alt-sidenav-color);\n  --dynamic-menu-alt-color: var(--layout-alt-sidenav-alt-color);\n  --dynamic-menu-padding: var(--layout-navigation-padding);\n  --dynamic-menu-spacing: var(--layout-navigation-spacing);\n}\n[_nghost-%COMP%]   mat-sidenav.admin-main-sidenav[_ngcontent-%COMP%] {\n  -ms-scroll-chaining: none;\n      overscroll-behavior: contain;\n  width: var(--layout-main-sidenav-width);\n}\n[_nghost-%COMP%]   mat-sidenav.admin-main-sidenav.fixed-sidenav[_ngcontent-%COMP%] {\n  position: fixed;\n}\n[_nghost-%COMP%]   mat-sidenav.admin-main-sidenav.clear-sidenav-background.mat-drawer-side[_ngcontent-%COMP%] {\n  border: none;\n}\n[_nghost-%COMP%]   mat-sidenav.admin-main-sidenav.clear-sidenav-background.mat-drawer[_ngcontent-%COMP%] {\n  background-color: transparent;\n  box-shadow: none;\n}\n[_nghost-%COMP%]   mat-sidenav.admin-main-sidenav[_ngcontent-%COMP%]   app-main-menu[_ngcontent-%COMP%] {\n  --main-menu-background: var(--layout-main-sidenav-background);\n  --main-menu-active-background: var(--layout-main-sidenav-active-background);\n  --main-menu-color: var(--layout-main-sidenav-color);\n  --main-menu-active-color: var(--layout-main-sidenav-active-color);\n  --main-menu-alt-color: var(--layout-main-sidenav-alt-color);\n  --main-menu-width: var(--layout-main-sidenav-width);\n  --main-menu-padding: var(--layout-navigation-padding);\n  --main-menu-spacing: var(--layout-navigation-spacing);\n}\n[_nghost-%COMP%]   mat-sidenav.admin-main-sidenav[_ngcontent-%COMP%]   app-main-menu.show-branding[_ngcontent-%COMP%] {\n  --main-menu-branding-height: var(--layout-top-navbar-height);\n}\n.server-side-rendered.main-sidenav-opened[_nghost-%COMP%]   mat-sidenav-content.admin-main-content[_ngcontent-%COMP%] {\n  -webkit-margin-start: var(--layout-main-sidenav-width);\n          margin-inline-start: var(--layout-main-sidenav-width);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9wYWxldHRlcy9zaGFyZWQuc2NzcyIsInNyYy90aGVtZS9wYWxldHRlcy9tb2RlLnNjc3MiLCJzcmMvYXBwL2NvcmUvbGF5b3V0cy9vcHRpb24tYi9vcHRpb24tYi1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvbGF5b3V0cy9zdHlsZXMvc2hhcmVkL2xheW91dC1zaWRlbmF2cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBQ0RBO0VBRUUsbURBQUE7RUFDQSw4Q0FBQTtFQUdBLGlDQUFBO0VBQ0EsdUVBQUE7RUFFQSwyQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsNkRBQUE7RUFDQSxnRUFBQTtFQUNBLGdDQUFBO0VBRUEsa0NBQUE7RUFDQSxtRUFBQTtFQUNBLDBFQUFBO0VBQ0EscUVBQUE7RUFDQSxpRUFBQTtFQUNBLCtEQUFBO0VBRUEsOERBQUE7RUFDQSwrQ0FBQTtFQUNBLDhEQUFBO0FBREY7QUFJQTtFQUNFOztHQUFBO0VBU0E7O0dBQUE7RUFVQTs7R0FBQTtFQWNBOztHQUFBO0VBbUJBOztHQUFBO0FBdkNGO0FBREU7RUFFRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQUVKO0FBSUU7RUFDRSw0REFBQTtFQUNBLGtEQUFBO0VBQ0EsMERBQUE7RUFDQSxnRUFBQTtFQUVBLG9EQUFBO0VBQ0Esc0RBQUE7RUFDQSxzREFBQTtBQUhKO0FBU0U7RUFDRSx5QkFBQTtNQUFBLDRCQUFBO0FBUEo7QUM3REU7RUFDRSxlQUFBO0FEK0RKO0FBU0k7RUFDRSwrREFBQTtFQUNBLHFEQUFBO0VBQ0EsNkRBQUE7RUFFQSx3REFBQTtFQUNBLHdEQUFBO0FBUk47QUFlRTtFQUNFLHlCQUFBO01BQUEsNEJBQUE7RUFDQSx1Q0FBQTtBQWJKO0FDM0VFO0VBQ0UsZUFBQTtBRDZFSjtBQ25FSTtFQUNFLFlBQUE7QURxRU47QUNuRUk7RUFDRSw2QkFBQTtFQUNBLGdCQUFBO0FEcUVOO0FBU0k7RUFDRSw2REFBQTtFQUNBLDJFQUFBO0VBQ0EsbURBQUE7RUFDQSxpRUFBQTtFQUNBLDJEQUFBO0VBRUEsbURBQUE7RUFDQSxxREFBQTtFQUNBLHFEQUFBO0FBUk47QUFVTTtFQUNFLDREQUFBO0FBUlI7QUFlRTtFQUVFLHNEQUFBO1VBQUEscURBQUE7QUFiSiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbGF5b3V0cy9vcHRpb24tYi9vcHRpb24tYi1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBTaGFyZWRcbiovXG5cbkBpbXBvcnQgJ3ByZWZlcmVuY2VzJztcbkBpbXBvcnQgJ2ludGVyZmFjZSc7XG5AaW1wb3J0ICdtb2RlJztcblxuLy8gQW4gYWJzdHJhY3Qgd2F5IHRvIHByb3ZpZGUgY29sb3JzLlxuLy8gVGhpcyBmdW5jdGlvbiBpcyBhbiBpbnRlcmZhY2UgdG8gYm90aCBTYXNzIHZhcmlhYmxlcyBhbmQgQ1NTIDQgdmFyaWFibGVzIGJhc2VkIGNvbG9yIHBhbGV0dGVzLlxuQGZ1bmN0aW9uIHBhbGV0dGUtY29sb3IoJGNvbG9yLW5hbWUsICRhbHBoYTogMSkge1xuICAvLyAkY29sb3ItcGFsZXR0ZS1tb2RlICAgICAgICA9PiAgRGVmaW5lZCBpbiBtb2RlLnNjc3NcbiAgLy8gJGNob29zZW4tcGFsZXR0ZSAgICAgICAgICAgPT4gIERlZmluZWQgaW4gbW9kZS5zY3NzXG4gIC8vICRjb2xvci1wYWxldHRlLWludGVyZmFjZSAgID0+ICBEZWZpbmVkIGluIGludGVyZmFjZS5zY3NzXG4gIC8vICRjc3M0LXZhci1wcmVmaXggICAgICAgICAgID0+ICBEZWZpbmVkIGluIHByZWZlcmVuY2VzLnNjc3NcbiAgLy8gJGNzczQtY29sb3ItZm9ybWF0ICAgICAgICAgPT4gIERlZmluZWQgaW4gcHJlZmVyZW5jZXMuc2Nzc1xuXG4gIEBpZiAoJGNvbG9yLXBhbGV0dGUtbW9kZSA9PSAnY3NzLTQnKSB7XG4gICAgJHBhbGV0dGUtcmVmZXJlbmNlOiAkY29sb3ItcGFsZXR0ZS1pbnRlcmZhY2U7XG5cbiAgICAkY29sb3ItdmFyaWFibGUtaW5kZXg6IGluZGV4KCRwYWxldHRlLXJlZmVyZW5jZSwgJGNvbG9yLW5hbWUpO1xuXG4gICAgQGlmICh0eXBlX29mKCRjb2xvci12YXJpYWJsZS1pbmRleCkgPT0gJ251bWJlcicpIHtcbiAgICAgICRjb2xvci12YXJpYWJsZS1uYW1lOiBudGgoJHBhbGV0dGUtcmVmZXJlbmNlLCAkY29sb3ItdmFyaWFibGUtaW5kZXgpO1xuXG4gICAgICBAaWYgKCRhbHBoYSA+IDAgYW5kICRhbHBoYSA8IDEpIHtcbiAgICAgICAgQHJldHVybiAjeydyZ2JhKHZhcignICsgJGNzczQtdmFyLXByZWZpeCArICRjb2xvci12YXJpYWJsZS1uYW1lICsgJy0nICsgJGNzczQtY29sb3ItZm9ybWF0ICsnKSwgI3skYWxwaGF9KSd9O1xuICAgICAgfSBAZWxzZSBpZiAoJGFscGhhID09IDEpIHtcbiAgICAgICAgQHJldHVybiAjeydyZ2IodmFyKCcgKyAkY3NzNC12YXItcHJlZml4ICsgJGNvbG9yLXZhcmlhYmxlLW5hbWUgKyAnLScgKyAkY3NzNC1jb2xvci1mb3JtYXQgKyAnKSknfTtcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICBAZXJyb3IgXCJBbHBoYSAoI3skYWxwaGF9KSBtdXN0IGJlIGEgbnVtYmVyXCI7XG4gICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICBAZXJyb3IgXCJDb2xvciAoI3skY29sb3ItbmFtZX0pIHdhcyBub3QgZm91bmQgb24gQ29sb3IgUGFsZXR0ZSBkZWZpbml0aW9uLiBNYWtlIHN1cmUgaXQncyBkZWZpbmVkIGluIHRoZSB0aGVtZS9wYWxldHRlcy9pbnRlcmZhY2Uuc2NzcyBmaWxlXCI7XG4gICAgfVxuICB9IEBlbHNlIGlmICgkY29sb3ItcGFsZXR0ZS1tb2RlID09ICdzYXNzJykge1xuICAgICRwYWxldHRlLXJlZmVyZW5jZTogJGNob29zZW4tcGFsZXR0ZTtcblxuICAgICRjb2xvci12YXJpYWJsZTogbWFwLWdldCgkcGFsZXR0ZS1yZWZlcmVuY2UsICRjb2xvci1uYW1lKTtcblxuICAgIC8vIENoZWNrIGlmIGl0IGlzIGEgU2FzcyBjb2xvclxuICAgIEBpZiAodHlwZV9vZigkY29sb3ItdmFyaWFibGUpID09ICdjb2xvcicpIHtcbiAgICAgIEBpZiAoJGFscGhhID4gMCBhbmQgJGFscGhhIDwgMSkge1xuICAgICAgICBAcmV0dXJuIHJnYmEoJGNvbG9yLXZhcmlhYmxlLCAkYWxwaGEpO1xuICAgICAgfSBAZWxzZSBpZiAoJGFscGhhID09IDEpIHtcbiAgICAgICAgQHJldHVybiAkY29sb3ItdmFyaWFibGU7XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgQGVycm9yIFwiQWxwaGEgKCN7JGFscGhhfSkgbXVzdCBiZSBhIG51bWJlclwiO1xuICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgQGVycm9yIFwiQ29sb3IgKCN7JGNvbG9yLXZhcmlhYmxlfSkgaXMgbm90IGEgU2FzcyBjb2xvclwiO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGVycm9yICdObyBDb2xvciBQYWxldHRlIG1vZGUgc2VsZWN0ZWQgaW4gdGhlbWUvcGFsZXR0ZXMvcHJlZmVyZW5jZXMuc2Nzcyc7XG4gIH1cbn1cbiIsIi8qXG4gIENTUyA0IE1vZGVcbiovXG4kY29sb3ItcGFsZXR0ZS1tb2RlOiAnY3NzLTQnO1xuXG5cbi8qXG4gIFNhc3MgTW9kZVxuKi9cbi8vIEBpbXBvcnQgJ2NvcmUnO1xuLy9cbi8vICRjb2xvci1wYWxldHRlLW1vZGU6ICdzYXNzJztcbi8vXG4vLyAvLyBJbXBvcnQgdGhlIGRlZmluaXRpb25zIG9mIHRoZSBwYWxldHRlIHlvdSB3YW50IHRvIHVzZVxuLy8gQGltcG9ydCAncGFsZXR0ZS0xL2RlZmluaXRpb25zJztcbi8vIC8vIEBpbXBvcnQgJ3BhbGV0dGUtMi9kZWZpbml0aW9ucyc7XG4vL1xuLy8gLy8gQXNzaWduIGEgcGFydGljdWxhciBDb2xvciBQYWxldHRlIHRvIHRoZSAnY2hvb3Nlbi1wYWxldHRlJyBwb2ludGVyLlxuLy8gLy8gJGNob29zZW4tcGFsZXR0ZSB3aWxsIGJlIGEgU2FzcyBtYXAgcG9pbnRpbmcgdG8gYW5vdGhlciBjb2xvciBwYWxldHRlIFNhc3MgbWFwXG4vLyAkY2hvb3Nlbi1wYWxldHRlOiBidWlsZFNhc3NQYWxldHRlKCRwYWxldHRlLTEpO1xuLy8gLy8gJGNob29zZW4tcGFsZXR0ZTogYnVpbGRTYXNzUGFsZXR0ZSgkcGFsZXR0ZS0yKTtcbiIsIkBpbXBvcnQgXCJwYWxldHRlcy9zaGFyZWRcIjtcblxuQGltcG9ydCBcIi4uL3N0eWxlcy9zaGFyZWQvbGF5b3V0LXNpZGVuYXZzXCI7XG5cbi8vIExheW91dCBDU1MgNCB2YXJpYWJsZXNcbjpob3N0IHtcbiAgLy8gRGVmYXVsdCBsYXlvdXQgY29sb3JzXG4gIC0tbGF5b3V0LWJhY2tncm91bmQ6ICN7cGFsZXR0ZS1jb2xvcihcImdyZXktMFwiKX07XG4gIC0tbGF5b3V0LWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJncmV5LThcIil9O1xuXG4gIC8vIE90aGVyIGxheW91dCB2YXJpYWJsZXNcbiAgLS1sYXlvdXQtbmF2aWdhdGlvbi1wYWRkaW5nOiAzMHB4O1xuICAtLWxheW91dC1uYXZpZ2F0aW9uLXNwYWNpbmc6IGNhbGModmFyKC0tbGF5b3V0LW5hdmlnYXRpb24tcGFkZGluZykgLyAzKTtcblxuICAtLWxheW91dC10b3AtbmF2YmFyLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWxheW91dC10b3AtbmF2YmFyLWNvbG9yOiB2YXIoLS1sYXlvdXQtY29sb3IpO1xuICAtLWxheW91dC10b3AtbmF2YmFyLWFsdC1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiZ3JleS01XCIpfTtcbiAgLS1sYXlvdXQtdG9wLW5hdmJhci1ib3JkZXItY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImdyZXktNFwiKX07XG4gIC0tbGF5b3V0LXRvcC1uYXZiYXItaGVpZ2h0OiA4MHB4O1xuXG4gIC0tbGF5b3V0LW1haW4tc2lkZW5hdi13aWR0aDogMjYwcHg7XG4gIC0tbGF5b3V0LW1haW4tc2lkZW5hdi1iYWNrZ3JvdW5kOiAje3BhbGV0dGUtY29sb3IoXCJibHVlLW1haW5cIil9O1xuICAtLWxheW91dC1tYWluLXNpZGVuYXYtYWN0aXZlLWJhY2tncm91bmQ6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtZGFya1wiKX07XG4gIC0tbGF5b3V0LW1haW4tc2lkZW5hdi1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwicHJpbWFyeS1jb250cmFzdFwiKX07XG4gIC0tbGF5b3V0LW1haW4tc2lkZW5hdi1hY3RpdmUtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcIndoaXRlXCIpfTtcbiAgLS1sYXlvdXQtbWFpbi1zaWRlbmF2LWFsdC1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiZ3JleS0xXCIpfTtcblxuICAtLWxheW91dC1hbHQtc2lkZW5hdi1iYWNrZ3JvdW5kOiAje3BhbGV0dGUtY29sb3IoXCJ3aGl0ZVwiKX07XG4gIC0tbGF5b3V0LWFsdC1zaWRlbmF2LWNvbG9yOiB2YXIoLS1sYXlvdXQtY29sb3IpO1xuICAtLWxheW91dC1hbHQtc2lkZW5hdi1hbHQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImdyZXktNVwiKX07XG59XG5cbjpob3N0IHtcbiAgLypcbiAgICBMYXlvdXQgLSBDb250YWluZXJcbiAgKi9cbiAgLy8gT3ZlcnJpZGUgTWF0ZXJpYWwgc3R5bGVzXG4gIG1hdC1zaWRlbmF2LWNvbnRhaW5lci5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAvLyBjb2xvcjogdmFyKC0tbGF5b3V0LWNvbG9yKTtcbiAgfVxuXG4gIC8qXG4gICAgTGF5b3V0IC0gQ29udGVudFxuICAqL1xuICBtYXQtc2lkZW5hdi1jb250ZW50LmFkbWluLW1haW4tY29udGVudCB7XG4gICAgLy8gUHJldmVudCB0cnVuY2F0ZWQgc2NyZWVucyB3aGVuIGNvbnRlbnQgaXMgdG8gc2hvcnRcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gIH1cblxuICAvKlxuICAgIExheW91dCAtIFRvcCBOYXZiYXJcbiAgKi9cbiAgYXBwLXRvcC1uYXZiYXIuYWRtaW4tdG9wLW5hdmJhciB7XG4gICAgLS10b3AtbmF2YmFyLWJhY2tncm91bmQ6IHZhcigtLWxheW91dC10b3AtbmF2YmFyLWJhY2tncm91bmQpO1xuICAgIC0tdG9wLW5hdmJhci1jb2xvcjogdmFyKC0tbGF5b3V0LXRvcC1uYXZiYXItY29sb3IpO1xuICAgIC0tdG9wLW5hdmJhci1hbHQtY29sb3I6IHZhcigtLWxheW91dC10b3AtbmF2YmFyLWFsdC1jb2xvcik7XG4gICAgLS10b3AtbmF2YmFyLWJvcmRlci1jb2xvcjogdmFyKC0tbGF5b3V0LXRvcC1uYXZiYXItYm9yZGVyLWNvbG9yKTtcblxuICAgIC0tdG9wLW5hdmJhci1oZWlnaHQ6IHZhcigtLWxheW91dC10b3AtbmF2YmFyLWhlaWdodCk7XG4gICAgLS10b3AtbmF2YmFyLXBhZGRpbmc6IHZhcigtLWxheW91dC1uYXZpZ2F0aW9uLXBhZGRpbmcpO1xuICAgIC0tdG9wLW5hdmJhci1zcGFjaW5nOiB2YXIoLS1sYXlvdXQtbmF2aWdhdGlvbi1zcGFjaW5nKTtcbiAgfVxuXG4gIC8qXG4gICAgTGF5b3V0IC0gQWx0ZXJuYXRpdmUgU2lkZSBNZW51IChzaWRlbmF2KVxuICAqL1xuICBtYXQtc2lkZW5hdi5hZG1pbi1hbHQtc2lkZW5hdiB7XG4gICAgb3ZlcnNjcm9sbC1iZWhhdmlvcjogY29udGFpbjtcbiAgICAvLyBXZSBkb24ndCBzZXQgYWx0IG1lbnVzIHdpZHRoIGhlcmUgYXMgdGhleSBtYXkgdmFyeSBiZXR3ZWVuIHRoZSBkaWZmZXJlbnQgZHluYW1pYyBtZW51c1xuXG4gICAgQGluY2x1ZGUgZml4ZWQtc2lkZW5hdigpO1xuXG4gICAgYXBwLWR5bmFtaWMtbWVudSB7XG4gICAgICAtLWR5bmFtaWMtbWVudS1iYWNrZ3JvdW5kOiB2YXIoLS1sYXlvdXQtYWx0LXNpZGVuYXYtYmFja2dyb3VuZCk7XG4gICAgICAtLWR5bmFtaWMtbWVudS1jb2xvcjogdmFyKC0tbGF5b3V0LWFsdC1zaWRlbmF2LWNvbG9yKTtcbiAgICAgIC0tZHluYW1pYy1tZW51LWFsdC1jb2xvcjogdmFyKC0tbGF5b3V0LWFsdC1zaWRlbmF2LWFsdC1jb2xvcik7XG5cbiAgICAgIC0tZHluYW1pYy1tZW51LXBhZGRpbmc6IHZhcigtLWxheW91dC1uYXZpZ2F0aW9uLXBhZGRpbmcpO1xuICAgICAgLS1keW5hbWljLW1lbnUtc3BhY2luZzogdmFyKC0tbGF5b3V0LW5hdmlnYXRpb24tc3BhY2luZyk7XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICBMYXlvdXQgLSBNYWluIFNpZGUgTWVudSAoc2lkZW5hdilcbiAgKi9cbiAgbWF0LXNpZGVuYXYuYWRtaW4tbWFpbi1zaWRlbmF2IHtcbiAgICBvdmVyc2Nyb2xsLWJlaGF2aW9yOiBjb250YWluO1xuICAgIHdpZHRoOiB2YXIoLS1sYXlvdXQtbWFpbi1zaWRlbmF2LXdpZHRoKTtcblxuICAgIEBpbmNsdWRlIGZpeGVkLXNpZGVuYXYoKTtcblxuICAgIEBpbmNsdWRlIGNsZWFyLXNpZGVuYXYtYmFja2dyb3VuZCgpO1xuXG4gICAgYXBwLW1haW4tbWVudSB7XG4gICAgICAtLW1haW4tbWVudS1iYWNrZ3JvdW5kOiB2YXIoLS1sYXlvdXQtbWFpbi1zaWRlbmF2LWJhY2tncm91bmQpO1xuICAgICAgLS1tYWluLW1lbnUtYWN0aXZlLWJhY2tncm91bmQ6IHZhcigtLWxheW91dC1tYWluLXNpZGVuYXYtYWN0aXZlLWJhY2tncm91bmQpO1xuICAgICAgLS1tYWluLW1lbnUtY29sb3I6IHZhcigtLWxheW91dC1tYWluLXNpZGVuYXYtY29sb3IpO1xuICAgICAgLS1tYWluLW1lbnUtYWN0aXZlLWNvbG9yOiB2YXIoLS1sYXlvdXQtbWFpbi1zaWRlbmF2LWFjdGl2ZS1jb2xvcik7XG4gICAgICAtLW1haW4tbWVudS1hbHQtY29sb3I6IHZhcigtLWxheW91dC1tYWluLXNpZGVuYXYtYWx0LWNvbG9yKTtcblxuICAgICAgLS1tYWluLW1lbnUtd2lkdGg6IHZhcigtLWxheW91dC1tYWluLXNpZGVuYXYtd2lkdGgpO1xuICAgICAgLS1tYWluLW1lbnUtcGFkZGluZzogdmFyKC0tbGF5b3V0LW5hdmlnYXRpb24tcGFkZGluZyk7XG4gICAgICAtLW1haW4tbWVudS1zcGFjaW5nOiB2YXIoLS1sYXlvdXQtbmF2aWdhdGlvbi1zcGFjaW5nKTtcblxuICAgICAgJi5zaG93LWJyYW5kaW5nIHtcbiAgICAgICAgLS1tYWluLW1lbnUtYnJhbmRpbmctaGVpZ2h0OiB2YXIoLS1sYXlvdXQtdG9wLW5hdmJhci1oZWlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG46aG9zdCguc2VydmVyLXNpZGUtcmVuZGVyZWQubWFpbi1zaWRlbmF2LW9wZW5lZCkge1xuICBtYXQtc2lkZW5hdi1jb250ZW50LmFkbWluLW1haW4tY29udGVudCB7XG4gICAgLy8gQWRkIG1hcmdpbiB0byBmaXggc2lkZW5hdiBvdmVybGFwIHdpdGggQW5ndWxhciBVbml2ZXJzYWwgKHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvY29tcG9uZW50cy9pc3N1ZXMvODk2OSlcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiB2YXIoLS1sYXlvdXQtbWFpbi1zaWRlbmF2LXdpZHRoKTtcbiAgfVxufVxuIiwiQG1peGluIGZpeGVkLXNpZGVuYXYoKSB7XG4gIC8vIE1ha2UgZml4ZWQgcG9zaXRpb24gb3B0aW9uYWxcbiAgJi5maXhlZC1zaWRlbmF2IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG5cbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gY2xlYXItc2lkZW5hdi1iYWNrZ3JvdW5kKCkge1xuICAvLyBNYWtlIGNsZWFyIG1vZGUgb3B0aW9uYWxcbiAgJi5jbGVhci1zaWRlbmF2LWJhY2tncm91bmQge1xuICAgIC8vIE92ZXJyaWRlIE1hdGVyaWFsIHN0eWxlc1xuICAgICYubWF0LWRyYXdlci1zaWRlIHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG4gICAgJi5tYXQtZHJhd2VyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OptionBLayoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-option-b-layout',
            templateUrl: './option-b-layout.component.html',
            styleUrls: ['./option-b-layout.component.scss']
          }]
        }], function () {
          return [{
            type: _side_menus_side_menus_service__WEBPACK_IMPORTED_MODULE_3__["SideMenusService"]
          }, {
            type: _responsive_breakpoints_service__WEBPACK_IMPORTED_MODULE_4__["ResponsiveBreakpointsService"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }];
        }, {
          layoutFlag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.layout-b']
          }],
          serverSideRendered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.server-side-rendered']
          }],
          mainSidenavOpened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.main-sidenav-opened']
          }],
          altSidenavOpened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.alt-sidenav-opened']
          }],
          mainSidenav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mainSidenav']
          }],
          altSidenav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['altSidenav']
          }]
        });
      })();
      /***/

    },

    /***/
    "pKmL":
    /*!*************************************!*\
      !*** ./src/app/core/core.module.ts ***!
      \*************************************/

    /*! exports provided: CoreModule */

    /***/
    function pKmL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
        return CoreModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "0MNC");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "+rOU");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _layouts_option_b_option_b_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./layouts/option-b/option-b-layout.component */
      "iLju");
      /* harmony import */


      var _layouts_empty_empty_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./layouts/empty/empty-layout.component */
      "Dj+N");
      /* harmony import */


      var _top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./top-navbar/top-navbar.component */
      "EXnx");
      /* harmony import */


      var _side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./side-navbar/side-navbar.component */
      "Dd0O");
      /* harmony import */


      var _side_menus_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./side-menus/main-menu/main-menu.component */
      "z59Q");
      /* harmony import */


      var _color_palettes_color_palettes_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./color-palettes/color-palettes.service */
      "Ebxc");
      /* harmony import */


      var _custom_icons_custom_icons_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./custom-icons/custom-icons.service */
      "0Hlk");
      /* harmony import */


      var _layouts_mobile_mobile_layout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./layouts/mobile/mobile-layout.component */
      "2isz");
      /* harmony import */


      var _layouts_dynamic_dynamic_layout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./layouts/dynamic/dynamic-layout.component */
      "VFvP"); // Items inside Side Menu
      // Side Menu
      // Top Navbar


      var CoreModule = /*#__PURE__*/_createClass(function CoreModule() {
        _classCallCheck(this, CoreModule);
      });

      CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CoreModule
      });
      CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function CoreModule_Factory(t) {
          return new (t || CoreModule)();
        },
        providers: [// Inspired in: https://devblogs.microsoft.com/premier-developer/angular-how-to-editable-config-files/
        {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
          useFactory: function useFactory(colorPalettesService) {
            return function () {
              return colorPalettesService.init();
            };
          },
          deps: [_color_palettes_color_palettes_service__WEBPACK_IMPORTED_MODULE_14__["ColorPalettesService"]],
          multi: true
        }, {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
          useFactory: function useFactory(customIconsService) {
            return function () {
              return customIconsService.init();
            };
          },
          deps: [_custom_icons_custom_icons_service__WEBPACK_IMPORTED_MODULE_15__["CustomIconsService"]],
          multi: true
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], // Material CDK modules
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["PortalModule"], // To detect screen size changes
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"], // Material modules
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"], // Ng Bootstrap modules
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDropdownModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, {
          declarations: [_layouts_option_b_option_b_layout_component__WEBPACK_IMPORTED_MODULE_9__["OptionBLayoutComponent"], _layouts_empty_empty_layout_component__WEBPACK_IMPORTED_MODULE_10__["EmptyLayoutComponent"], _top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_11__["TopNavbarComponent"], _side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_12__["SideNavbarComponent"], _side_menus_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_13__["MainMenuComponent"], _layouts_mobile_mobile_layout_component__WEBPACK_IMPORTED_MODULE_16__["MobileLayoutComponent"], _layouts_dynamic_dynamic_layout_component__WEBPACK_IMPORTED_MODULE_17__["DynamicLayoutComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], // Material CDK modules
          _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["PortalModule"], // To detect screen size changes
          _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"], // Material modules
          _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"], // Ng Bootstrap modules
          _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDropdownModule"]],
          exports: [_layouts_option_b_option_b_layout_component__WEBPACK_IMPORTED_MODULE_9__["OptionBLayoutComponent"], _layouts_empty_empty_layout_component__WEBPACK_IMPORTED_MODULE_10__["EmptyLayoutComponent"], _top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_11__["TopNavbarComponent"], _side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_12__["SideNavbarComponent"], _side_menus_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_13__["MainMenuComponent"], _layouts_mobile_mobile_layout_component__WEBPACK_IMPORTED_MODULE_16__["MobileLayoutComponent"], _layouts_dynamic_dynamic_layout_component__WEBPACK_IMPORTED_MODULE_17__["DynamicLayoutComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_layouts_option_b_option_b_layout_component__WEBPACK_IMPORTED_MODULE_9__["OptionBLayoutComponent"], _layouts_empty_empty_layout_component__WEBPACK_IMPORTED_MODULE_10__["EmptyLayoutComponent"], _top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_11__["TopNavbarComponent"], _side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_12__["SideNavbarComponent"], _side_menus_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_13__["MainMenuComponent"], _layouts_mobile_mobile_layout_component__WEBPACK_IMPORTED_MODULE_16__["MobileLayoutComponent"], _layouts_dynamic_dynamic_layout_component__WEBPACK_IMPORTED_MODULE_17__["DynamicLayoutComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], // Material CDK modules
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["PortalModule"], // To detect screen size changes
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"], // Material modules
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"], // Ng Bootstrap modules
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDropdownModule"]],
            exports: [_layouts_option_b_option_b_layout_component__WEBPACK_IMPORTED_MODULE_9__["OptionBLayoutComponent"], _layouts_empty_empty_layout_component__WEBPACK_IMPORTED_MODULE_10__["EmptyLayoutComponent"], _top_navbar_top_navbar_component__WEBPACK_IMPORTED_MODULE_11__["TopNavbarComponent"], _side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_12__["SideNavbarComponent"], _side_menus_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_13__["MainMenuComponent"], _layouts_mobile_mobile_layout_component__WEBPACK_IMPORTED_MODULE_16__["MobileLayoutComponent"], _layouts_dynamic_dynamic_layout_component__WEBPACK_IMPORTED_MODULE_17__["DynamicLayoutComponent"]],
            providers: [// Inspired in: https://devblogs.microsoft.com/premier-developer/angular-how-to-editable-config-files/
            {
              provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
              useFactory: function useFactory(colorPalettesService) {
                return function () {
                  return colorPalettesService.init();
                };
              },
              deps: [_color_palettes_color_palettes_service__WEBPACK_IMPORTED_MODULE_14__["ColorPalettesService"]],
              multi: true
            }, {
              provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
              useFactory: function useFactory(customIconsService) {
                return function () {
                  return customIconsService.init();
                };
              },
              deps: [_custom_icons_custom_icons_service__WEBPACK_IMPORTED_MODULE_15__["CustomIconsService"]],
              multi: true
            }]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "uOoa":
    /*!************************************************************!*\
      !*** ./src/app/vehicle-report/vehicle-report.component.ts ***!
      \************************************************************/

    /*! exports provided: VehicleReportComponent */

    /***/
    function uOoa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VehicleReportComponent", function () {
        return VehicleReportComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _business_services_vehicle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../business/services/vehicle.service */
      "8zvB");

      var VehicleReportComponent = /*#__PURE__*/function () {
        function VehicleReportComponent(route, vehicleService) {
          _classCallCheck(this, VehicleReportComponent);

          this.route = route;
          this.vehicleService = vehicleService;
        }

        _createClass(VehicleReportComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this25 = this;

            this.route.queryParams.subscribe(function (params) {
              if (params.reportId) {
                try {
                  //console.log(JSON.parse(atob(params.reportId)))
                  var _JSON$parse = JSON.parse(atob(params.reportId)),
                      invoiceId = _JSON$parse.invoiceId,
                      vehicleId = _JSON$parse.vehicleId;

                  if (!invoiceId || !vehicleId) throw new Error('Invalid report id'); //get report

                  _this25.vehicleService.getReportPdf(invoiceId, vehicleId);
                } catch (error) {
                  _this25.onError();
                }
              } else {
                _this25.onError();
              }
            });
          }
        }, {
          key: "onError",
          value: function onError() {
            alert('Invalid report id');
          }
        }]);

        return VehicleReportComponent;
      }();

      VehicleReportComponent.ɵfac = function VehicleReportComponent_Factory(t) {
        return new (t || VehicleReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_business_services_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["VehicleService"]));
      };

      VehicleReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VehicleReportComponent,
        selectors: [["app-vehicle-report"]],
        decls: 3,
        vars: 0,
        consts: [[2, "padding", "2rem"]],
        template: function VehicleReportComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading report...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGUtcmVwb3J0L3ZlaGljbGUtcmVwb3J0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VehicleReportComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-vehicle-report',
            templateUrl: './vehicle-report.component.html',
            styleUrls: ['./vehicle-report.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _business_services_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["VehicleService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core_layouts_empty_empty_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./core/layouts/empty/empty-layout.component */
      "Dj+N");
      /* harmony import */


      var _core_layouts_dynamic_dynamic_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./core/layouts/dynamic/dynamic-layout.component */
      "VFvP");
      /* harmony import */


      var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./core/guards/auth.guard */
      "NUQi");
      /* harmony import */


      var _vehicle_report_vehicle_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./vehicle-report/vehicle-report.component */
      "uOoa");

      var routes = [
      /*
        Default route
      */
      {
        path: '',
        redirectTo: '/general',
        pathMatch: 'full'
      }, // { path: '', redirectTo: '/authentication/signup', pathMatch: 'full' },

      /*
        Auth routes + layout
      */
      {
        path: '',
        component: _core_layouts_empty_empty_layout_component__WEBPACK_IMPORTED_MODULE_2__["EmptyLayoutComponent"],
        children: [{
          path: 'auth',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ./authentication/authentication.module */
            "OpKh")).then(function (m) {
              return m.AuthenticationModule;
            });
          }
        }, {
          path: 'vehicle-report',
          component: _vehicle_report_vehicle_report_component__WEBPACK_IMPORTED_MODULE_5__["VehicleReportComponent"]
        }]
      },
      /*
        Main routes + dynamic layouts
      */
      {
        path: '',
        component: _core_layouts_dynamic_dynamic_layout_component__WEBPACK_IMPORTED_MODULE_3__["DynamicLayoutComponent"],
        children: [{
          path: 'general',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | general-general-module */
            "general-general-module").then(__webpack_require__.bind(null,
            /*! ./general/general.module */
            "hxwH")).then(function (m) {
              return m.GeneralModule;
            });
          },
          canLoad: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
          canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
        }, {
          path: 'company',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | company-company-module */
            [__webpack_require__.e("default~company-company-module~invoice-invoice-module"), __webpack_require__.e("company-company-module")]).then(__webpack_require__.bind(null,
            /*! ./company/company.module */
            "M4UK")).then(function (m) {
              return m.CompanyModule;
            });
          },
          canLoad: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
          canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
        }, {
          path: 'invoices',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | invoice-invoice-module */
            [__webpack_require__.e("default~company-company-module~invoice-invoice-module"), __webpack_require__.e("invoice-invoice-module")]).then(__webpack_require__.bind(null,
            /*! ./invoice/invoice.module */
            "hdHI")).then(function (m) {
              return m.InvoiceModule;
            });
          },
          canLoad: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
          canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
        }, {
          path: 'reports',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | reports-reports-module */
            "reports-reports-module").then(__webpack_require__.bind(null,
            /*! ./reports/reports.module */
            "uHdG")).then(function (m) {
              return m.ReportsModule;
            });
          },
          canLoad: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
          canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
        }, {
          path: 'search',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | search-search-module */
            "search-search-module").then(__webpack_require__.bind(null,
            /*! ./search/search.module */
            "RmqX")).then(function (m) {
              return m.SearchModule;
            });
          },
          canLoad: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
          canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
        }, {
          path: 'administration',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | administration-administration-module */
            "administration-administration-module").then(__webpack_require__.bind(null,
            /*! ./administration/administration.module */
            "0JFd")).then(function (m) {
              return m.AdministrationModule;
            });
          },
          canLoad: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
          canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
        }]
      },
      /*
        Undefined routes (should redirect to a 404 page)
      */
      {
        path: '**',
        redirectTo: ''
      }];

      var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        providers: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          // If you want to preload all lazy routes when the app loads, uncomment the following line
          // preloadingStrategy: PreloadAllModules,
          onSameUrlNavigation: 'reload',
          // This value is required for server-side rendering to work.
          initialNavigation: 'enabled'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            // Only call RouterModule.forRoot() in the root AppRoutingModule (or the AppModule if that's where you register
            // top level application routes). In any other module, you must call the RouterModule.forChild method to register additional routes.
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
              // If you want to preload all lazy routes when the app loads, uncomment the following line
              // preloadingStrategy: PreloadAllModules,
              onSameUrlNavigation: 'reload',
              // This value is required for server-side rendering to work.
              initialNavigation: 'enabled'
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "wU7l":
    /*!*******************************************************************!*\
      !*** ./src/app/shared/alert-template/alert-template.component.ts ***!
      \*******************************************************************/

    /*! exports provided: AlertTemplateComponent */

    /***/
    function wU7l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertTemplateComponent", function () {
        return AlertTemplateComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../shell/aspect-ratio/aspect-ratio.component */
      "B7gC");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function AlertTemplateComponent_div_1_i_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 11);
        }
      }

      function AlertTemplateComponent_div_1_i_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
        }
      }

      var _c0 = function _c0() {
        return {
          w: 1,
          h: 1
        };
      };

      function AlertTemplateComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "cc-aspect-ratio", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AlertTemplateComponent_div_1_i_3_Template, 1, 0, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AlertTemplateComponent_div_1_i_4_Template, 1, 0, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0))("ngClass", ctx_r0.iconType + " icon-" + ctx_r0.iconPosition);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.iconType === "success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.iconType === "error");
        }
      }

      function AlertTemplateComponent_div_6_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Confirm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx_r6.inputData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        }
      }

      function AlertTemplateComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AlertTemplateComponent_div_6_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.inputData = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AlertTemplateComponent_div_6_div_2_Template, 5, 2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.inputData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.input);
        }
      }

      function AlertTemplateComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        }
      }

      function AlertTemplateComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.button);
        }
      }

      var AlertTemplateComponent = /*#__PURE__*/_createClass(function AlertTemplateComponent(dialogRef, data) {
        var _this26 = this;

        _classCallCheck(this, AlertTemplateComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.iconType = data.iconType;
        this.iconPosition = data.iconPosition ? data.iconPosition : 'default';
        this.title = data.title;
        this.text = data.text;
        this.options = data.options;
        this.input = data.input;
        this.button = data.button;

        if (data.time) {
          setTimeout(function () {
            _this26.dialogRef.close();
          }, data.time);
        }
      });

      AlertTemplateComponent.ɵfac = function AlertTemplateComponent_Factory(t) {
        return new (t || AlertTemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
      };

      AlertTemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AlertTemplateComponent,
        selectors: [["app-alert-template-component"]],
        decls: 9,
        vars: 6,
        consts: [[1, "alert-modal"], ["class", "icon-container-wrapper", 4, "ngIf"], [1, "alert-title"], [1, "alert-text"], ["class", "alert-with-input", 4, "ngIf"], ["class", "alert-buttons", 4, "ngIf"], [1, "icon-container-wrapper"], [1, "icon-background", 3, "ratio", "ngClass"], [1, "icon-container"], ["class", "fas fa-check alert-icon icon-success", 4, "ngIf"], ["class", "fas fa-exclamation alert-icon icon-error", 4, "ngIf"], [1, "fas", "fa-check", "alert-icon", "icon-success"], [1, "fas", "fa-exclamation", "alert-icon", "icon-error"], [1, "alert-with-input"], [1, "form-control", 3, "ngModel", "ngModelChange"], [1, "alert-buttons"], ["type", "button", 1, "button-success", 3, "mat-dialog-close"], ["type", "button", 1, "button-error", 3, "mat-dialog-close"], ["type", "button", 1, "button-info", 3, "mat-dialog-close"]],
        template: function AlertTemplateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AlertTemplateComponent_div_1_Template, 5, 5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AlertTemplateComponent_div_6_Template, 3, 2, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AlertTemplateComponent_div_7_Template, 5, 2, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AlertTemplateComponent_div_8_Template, 3, 2, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.iconType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.input);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.input && ctx.options);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.input && !ctx.options && ctx.button);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_3__["AspectRatioComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
        styles: [".text-blue-light[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-light-rgb));\n}\n.text-blue-main[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-main-rgb));\n}\n.text-blue-dark[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-dark-rgb));\n}\n.bg-grey-light[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-grey-light-rgb));\n}\n.bg-grey-dark[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-grey-5-rgb));\n}\n.bg-blue-light[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-light-rgb));\n}\n.bg-blue-main[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-main-rgb));\n}\n.bg-blue-dark[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-dark-rgb));\n}\n.text-xs[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.text-base[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.text-lg[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.text-xl[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.text-2xl[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.text-3xl[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.capitalize[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.rounded-xl[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  overflow: hidden;\n}\n.border-primary-1[_ngcontent-%COMP%] {\n  border: 1px solid rgb(var(--palette-blue-main-rgb));\n}\n.border-primary-2[_ngcontent-%COMP%] {\n  border: 2px solid rgb(var(--palette-blue-main-rgb));\n}\n.custom-scroll[_ngcontent-%COMP%] {\n  padding-right: 4px;\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0.5em;\n  border-radius: 5px;\n  background-color: rgb(var(--palette-grey-light-rgb));\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  border: 0.3em solid;\n  border-color: rgb(var(--palette-grey-5-rgb));\n}\n[_nghost-%COMP%] {\n  --icon-height: 84px;\n  --alert-spacing: 10px;\n  --alert-text-color: rgb(var(--palette-grey-6-rgb));\n  --success-color: rgb(var(--palette-success-rgb));\n  --success-background: rgba(var(--palette-success-rgb), 0.2);\n  --success-background-overflow: rgb(var(--palette-success-light-rgb));\n  --success-hover-background: rgb(var(--palette-success-dark-rgb));\n  --success-hover-color: rgb(var(--palette-white-rgb));\n  --error-color: rgb(var(--palette-error-rgb));\n  --error-background: rgba(var(--palette-error-rgb), 0.2);\n  --error-background-overflow: rgb(var(--palette-error-light-rgb));\n  --error-hover-background: rgb(var(--palette-error-dark-rgb));\n  --error-hover-color: rgb(var(--palette-white-rgb));\n  --button-text-color: rgb(var(--palette-white-rgb));\n  --modal-padding: calc(var(--alert-spacing) * 1.5);\n  display: block;\n  padding: var(--modal-padding);\n}\n.alert-modal[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-width: 300px;\n  min-height: 150px;\n}\n.alert-modal[_ngcontent-%COMP%]   .alert-title[_ngcontent-%COMP%] {\n  color: var(--alert-text-color);\n  font-size: 26px;\n  margin-bottom: var(--alert-spacing);\n}\n.alert-modal[_ngcontent-%COMP%]   .alert-text[_ngcontent-%COMP%] {\n  color: var(--alert-text-color);\n  font-size: 16px;\n}\n.alert-modal[_ngcontent-%COMP%]   .icon-container-wrapper[_ngcontent-%COMP%] {\n  width: var(--icon-height);\n  margin-bottom: calc(var(--alert-spacing) * 1.5);\n}\n.alert-modal[_ngcontent-%COMP%]   .icon-container-wrapper[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n.alert-modal[_ngcontent-%COMP%]   .icon-container-wrapper[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.alert-modal[_ngcontent-%COMP%]   .icon-container-wrapper[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .alert-icon.icon-success[_ngcontent-%COMP%] {\n  color: var(--success-color);\n}\n.alert-modal[_ngcontent-%COMP%]   .icon-container-wrapper[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .alert-icon.icon-error[_ngcontent-%COMP%] {\n  color: var(--error-color);\n}\n.alert-modal[_ngcontent-%COMP%]   .icon-container-wrapper[_ngcontent-%COMP%]   .icon-background[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n.alert-modal[_ngcontent-%COMP%]   .icon-container-wrapper[_ngcontent-%COMP%]   .icon-background.icon-overflow[_ngcontent-%COMP%] {\n  margin-top: calc(calc(calc(var(--icon-height ) / 2) + var(--modal-padding)) * -1);\n}\n.alert-modal[_ngcontent-%COMP%]   .icon-container-wrapper[_ngcontent-%COMP%]   .icon-background.icon-overflow.success[_ngcontent-%COMP%] {\n  background-color: var(--success-background-overflow);\n}\n.alert-modal[_ngcontent-%COMP%]   .icon-container-wrapper[_ngcontent-%COMP%]   .icon-background.icon-overflow.error[_ngcontent-%COMP%] {\n  background-color: var(--error-background-overflow);\n}\n.alert-modal[_ngcontent-%COMP%]   .icon-container-wrapper[_ngcontent-%COMP%]   .icon-background.icon-default.success[_ngcontent-%COMP%] {\n  background-color: var(--success-background);\n}\n.alert-modal[_ngcontent-%COMP%]   .icon-container-wrapper[_ngcontent-%COMP%]   .icon-background.icon-default.error[_ngcontent-%COMP%] {\n  background-color: var(--error-background);\n}\n.alert-modal[_ngcontent-%COMP%]   .alert-with-input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.alert-modal[_ngcontent-%COMP%]   .alert-buttons[_ngcontent-%COMP%] {\n  margin-top: calc(var(--alert-spacing) * 2);\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n.alert-modal[_ngcontent-%COMP%]   .alert-buttons[_ngcontent-%COMP%]   .button-info[_ngcontent-%COMP%] {\n  background-color: var(--button-background, rgb(var(--palette-primary-rgb)));\n  border-color: var(--button-border, rgb(var(--palette-primary-rgb)));\n  border-radius: 6px;\n  border-style: solid;\n  border-width: 1px;\n  color: var(--button-color, rgb(var(--palette-white-rgb)));\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: normal;\n  padding: 6px 12px;\n  transition: border-color 0.5s, color 0.5s, background-color 0.5s;\n  width: 100%;\n}\n.alert-modal[_ngcontent-%COMP%]   .alert-buttons[_ngcontent-%COMP%]   .button-info[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--button-hover-background, rgb(var(--palette-primary-dark-rgb)));\n  border-color: var(--button-hover-border, rgb(var(--palette-primary-dark-rgb)));\n  color: var(--button-hover-color, rgb(var(--palette-white-rgb)));\n}\n.alert-modal[_ngcontent-%COMP%]   .alert-buttons[_ngcontent-%COMP%]   .button-info[_ngcontent-%COMP%]:active:not([disabled]), .alert-modal[_ngcontent-%COMP%]   .alert-buttons[_ngcontent-%COMP%]   .button-info.active[_ngcontent-%COMP%]:not([disabled]), .alert-modal[_ngcontent-%COMP%]   .alert-buttons[_ngcontent-%COMP%]   .button-info[_ngcontent-%COMP%]:focus:not([disabled]), .alert-modal[_ngcontent-%COMP%]   .alert-buttons[_ngcontent-%COMP%]   .button-info.focus[_ngcontent-%COMP%]:not([disabled]) {\n  background-color: var(--button-active-background, var(--button-hover-background, rgb(var(--palette-primary-dark-rgb))));\n  border-color: var(--button-active-border, var(--button-hover-border, rgb(var(--palette-primary-dark-rgb))));\n  color: var(--button-active-color, var(--button-hover-color, rgb(var(--palette-white-rgb))));\n}\n.alert-modal[_ngcontent-%COMP%]   .alert-buttons[_ngcontent-%COMP%]   .button-info[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.alert-modal[_ngcontent-%COMP%]   .alert-buttons[_ngcontent-%COMP%]   .button-success[_ngcontent-%COMP%] {\n  --button-background: var(--success-color);\n  --button-border: var(--success-color);\n  --button-color: var(--button-text-color);\n  --button-hover-background: var(--success-hover-background);\n  --button-hover-border: var(--success-hover-background);\n  --button-hover-color: var(--success-hover-color);\n  background-color: var(--button-background, rgb(var(--palette-primary-rgb)));\n  border-color: var(--button-border, rgb(var(--palette-primary-rgb)));\n  border-radius: 6px;\n  border-style: solid;\n  border-width: 1px;\n  color: var(--button-color, rgb(var(--palette-white-rgb)));\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: normal;\n  padding: 6px 12px;\n  transition: border-color 0.5s, color 0.5s, background-color 0.5s;\n  width: 100%;\n  margin-right: var(--alert-spacing);\n}\n.alert-modal[_ngcontent-%COMP%]   .alert-buttons[_ngcontent-%COMP%]   .button-success[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--button-hover-background, rgb(var(--palette-primary-dark-rgb)));\n  border-color: var(--button-hover-border, rgb(var(--palette-primary-dark-rgb)));\n  color: var(--button-hover-color, rgb(var(--palette-white-rgb)));\n}\n.alert-modal[_ngcontent-%COMP%]   .alert-buttons[_ngcontent-%COMP%]   .button-success[_ngcontent-%COMP%]:active:not([disabled]), .alert-modal[_ngcontent-%COMP%]   .alert-buttons[_ngcontent-%COMP%]   .button-success.active[_ngcontent-%COMP%]:not([disabled]), .alert-modal[_ngcontent-%COMP%]   .alert-buttons[_ngcontent-%COMP%]   .button-success[_ngcontent-%COMP%]:focus:not([disabled]), .alert-modal[_ngcontent-%COMP%]   .alert-buttons[_ngcontent-%COMP%]   .button-success.focus[_ngcontent-%COMP%]:not([disabled]) {\n  background-color: var(--button-active-background, var(--button-hover-background, rgb(var(--palette-primary-dark-rgb))));\n  border-color: var(--button-active-border, var(--button-hover-border, rgb(var(--palette-primary-dark-rgb))));\n  color: var(--button-active-color, var(--button-hover-color, rgb(var(--palette-white-rgb))));\n}\n.alert-modal[_ngcontent-%COMP%]   .alert-buttons[_ngcontent-%COMP%]   .button-success[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.alert-modal[_ngcontent-%COMP%]   .alert-buttons[_ngcontent-%COMP%]   .button-error[_ngcontent-%COMP%] {\n  --button-background: var(--error-color);\n  --button-border: var(--error-color);\n  --button-color: var(--button-text-color);\n  --button-hover-background: var(--error-hover-background);\n  --button-hover-border: var(--error-hover-background);\n  --button-hover-color: var(--error-hover-color);\n  background-color: var(--button-background, rgb(var(--palette-primary-rgb)));\n  border-color: var(--button-border, rgb(var(--palette-primary-rgb)));\n  border-radius: 6px;\n  border-style: solid;\n  border-width: 1px;\n  color: var(--button-color, rgb(var(--palette-white-rgb)));\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: normal;\n  padding: 6px 12px;\n  transition: border-color 0.5s, color 0.5s, background-color 0.5s;\n  width: 100%;\n  margin-left: var(--alert-spacing);\n}\n.alert-modal[_ngcontent-%COMP%]   .alert-buttons[_ngcontent-%COMP%]   .button-error[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--button-hover-background, rgb(var(--palette-primary-dark-rgb)));\n  border-color: var(--button-hover-border, rgb(var(--palette-primary-dark-rgb)));\n  color: var(--button-hover-color, rgb(var(--palette-white-rgb)));\n}\n.alert-modal[_ngcontent-%COMP%]   .alert-buttons[_ngcontent-%COMP%]   .button-error[_ngcontent-%COMP%]:active:not([disabled]), .alert-modal[_ngcontent-%COMP%]   .alert-buttons[_ngcontent-%COMP%]   .button-error.active[_ngcontent-%COMP%]:not([disabled]), .alert-modal[_ngcontent-%COMP%]   .alert-buttons[_ngcontent-%COMP%]   .button-error[_ngcontent-%COMP%]:focus:not([disabled]), .alert-modal[_ngcontent-%COMP%]   .alert-buttons[_ngcontent-%COMP%]   .button-error.focus[_ngcontent-%COMP%]:not([disabled]) {\n  background-color: var(--button-active-background, var(--button-hover-background, rgb(var(--palette-primary-dark-rgb))));\n  border-color: var(--button-active-border, var(--button-hover-border, rgb(var(--palette-primary-dark-rgb))));\n  color: var(--button-active-color, var(--button-hover-color, rgb(var(--palette-white-rgb))));\n}\n.alert-modal[_ngcontent-%COMP%]   .alert-buttons[_ngcontent-%COMP%]   .button-error[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.overflow-icon-alert-wrapper[_nghost-%COMP%], .overflow-icon-alert-wrapper   [_nghost-%COMP%] {\n  --modal-padding: 40px;\n}\n  .mat-dialog-container {\n  border-radius: 6px;\n}\n  .overflow-icon-alert-wrapper .mat-dialog-container {\n  padding: 0px;\n  overflow: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9wYWxldHRlcy9zaGFyZWQuc2NzcyIsInNyYy90aGVtZS9wYWxldHRlcy9tb2RlLnNjc3MiLCJzcmMvdGhlbWUvY3VzdG9tLWNsYXNzZXMuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2FsZXJ0LXRlbXBsYXRlL2FsZXJ0LXRlbXBsYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL21peGlucy9idXR0b25zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FETkE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FETkE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FETkE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FETkE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FDTEE7RUFDRSx5Q0FBQTtBQzZDRjtBRDNDQTtFQUNFLHdDQUFBO0FDOENGO0FENUNBO0VBQ0Usd0NBQUE7QUMrQ0Y7QUQzQ0E7RUFDRSxvREFBQTtBQzhDRjtBRDVDQTtFQUNFLGdEQUFBO0FDK0NGO0FEN0NBO0VBQ0Usb0RBQUE7QUNnREY7QUQ5Q0E7RUFDRSxtREFBQTtBQ2lERjtBRC9DQTtFQUNFLG1EQUFBO0FDa0RGO0FEOUNBO0VBQ0Usa0JBQUE7QUNpREY7QUQvQ0E7RUFDRSxtQkFBQTtBQ2tERjtBRGhEQTtFQUNFLGVBQUE7QUNtREY7QURqREE7RUFDRSxtQkFBQTtBQ29ERjtBRGpEQTtFQUNFLGtCQUFBO0FDb0RGO0FEakRBO0VBQ0UsaUJBQUE7QUNvREY7QURqREE7RUFDRSxrQkFBQTtBQ29ERjtBRGpEQTtFQUNFLGdCQUFBO0FDb0RGO0FEbERBO0VBQ0UsZ0JBQUE7QUNxREY7QURsREE7RUFDRSwwQkFBQTtBQ3FERjtBRGxEQTtFQUNFLGVBQUE7QUNxREY7QURsREE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FDcURGO0FEbERBO0VBQ0UsbURBQUE7QUNxREY7QURsREE7RUFDRSxtREFBQTtBQ3FERjtBRGxEQTtFQUNFLGtCQUFBO0FDcURGO0FEbkRBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0RBQUE7QUNzREY7QURsREE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7QUNxREY7QUFsSkE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0RBQUE7RUFDQSxnREFBQTtFQUNBLDJEQUFBO0VBQ0Esb0VBQUE7RUFDQSxnRUFBQTtFQUNBLG9EQUFBO0VBQ0EsNENBQUE7RUFDQSx1REFBQTtFQUNBLGdFQUFBO0VBQ0EsNERBQUE7RUFDQSxrREFBQTtFQUNBLGtEQUFBO0VBQ0EsaURBQUE7RUFFQSxjQUFBO0VBQ0EsNkJBQUE7QUFvSkY7QUFqSkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQW9KRjtBQWxKRTtFQUNFLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0FBb0pKO0FBakpFO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0FBbUpKO0FBaEpFO0VBQ0UseUJBQUE7RUFDQSwrQ0FBQTtBQWtKSjtBQWhKSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWtKTjtBQWhKTTtFQUNFLGVBQUE7QUFrSlI7QUFoSlE7RUFDRSwyQkFBQTtBQWtKVjtBQS9JUTtFQUNFLHlCQUFBO0FBaUpWO0FBNUlJO0VBQ0Usa0JBQUE7QUE4SU47QUE1SU07RUFDRSxpRkFBQTtBQThJUjtBQTdJUTtFQUNFLG9EQUFBO0FBK0lWO0FBN0lRO0VBQ0Usa0RBQUE7QUErSVY7QUExSVE7RUFDRSwyQ0FBQTtBQTRJVjtBQTFJUTtFQUNFLHlDQUFBO0FBNElWO0FBdElFO0VBQ0UsV0FBQTtBQXdJSjtBQXJJRTtFQUNFLDBDQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQXVJSjtBQXJJSTtFQy9FRiwyRUFBQTtFQUNBLG1FQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EseURBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0VBQUE7RUR1RUksV0FBQTtBQWlKTjtBQ3JOSTtFQUNFLHNGQUFBO0VBQ0EsOEVBQUE7RUFDQSwrREFBQTtBRHVOTjtBQy9NSTtFQUNFLHVIQUFBO0VBQ0EsMkdBQUE7RUFDQSwyRkFBQTtBRGlOTjtBQzdNRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBRCtNSjtBQTVKSTtFQUNFLHlDQUFBO0VBQ0EscUNBQUE7RUFDQSx3Q0FBQTtFQUVBLDBEQUFBO0VBQ0Esc0RBQUE7RUFDQSxnREFBQTtFQzNGSiwyRUFBQTtFQUNBLG1FQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EseURBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0VBQUE7RURvRkksV0FBQTtFQUNBLGtDQUFBO0FBc0tOO0FDeFBJO0VBQ0Usc0ZBQUE7RUFDQSw4RUFBQTtFQUNBLCtEQUFBO0FEMFBOO0FDbFBJO0VBQ0UsdUhBQUE7RUFDQSwyR0FBQTtFQUNBLDJGQUFBO0FEb1BOO0FDaFBFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FEa1BKO0FBakxJO0VBQ0UsdUNBQUE7RUFDQSxtQ0FBQTtFQUNBLHdDQUFBO0VBRUEsd0RBQUE7RUFDQSxvREFBQTtFQUNBLDhDQUFBO0VDekdKLDJFQUFBO0VBQ0EsbUVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5REFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnRUFBQTtFRGlHSSxXQUFBO0VBQ0EsaUNBQUE7QUE0TE47QUMzUkk7RUFDRSxzRkFBQTtFQUNBLDhFQUFBO0VBQ0EsK0RBQUE7QUQ2Uk47QUNyUkk7RUFDRSx1SEFBQTtFQUNBLDJHQUFBO0VBQ0EsMkZBQUE7QUR1Uk47QUNuUkU7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QURxUko7QUFyTUE7RUFDRSxxQkFBQTtBQXdNRjtBQW5NRTtFQUNFLGtCQUFBO0FBc01KO0FBak1JO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FBbU1OIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2FsZXJ0LXRlbXBsYXRlL2FsZXJ0LXRlbXBsYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgU2hhcmVkXG4qL1xuXG5AaW1wb3J0ICdwcmVmZXJlbmNlcyc7XG5AaW1wb3J0ICdpbnRlcmZhY2UnO1xuQGltcG9ydCAnbW9kZSc7XG5cbi8vIEFuIGFic3RyYWN0IHdheSB0byBwcm92aWRlIGNvbG9ycy5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgYW4gaW50ZXJmYWNlIHRvIGJvdGggU2FzcyB2YXJpYWJsZXMgYW5kIENTUyA0IHZhcmlhYmxlcyBiYXNlZCBjb2xvciBwYWxldHRlcy5cbkBmdW5jdGlvbiBwYWxldHRlLWNvbG9yKCRjb2xvci1uYW1lLCAkYWxwaGE6IDEpIHtcbiAgLy8gJGNvbG9yLXBhbGV0dGUtbW9kZSAgICAgICAgPT4gIERlZmluZWQgaW4gbW9kZS5zY3NzXG4gIC8vICRjaG9vc2VuLXBhbGV0dGUgICAgICAgICAgID0+ICBEZWZpbmVkIGluIG1vZGUuc2Nzc1xuICAvLyAkY29sb3ItcGFsZXR0ZS1pbnRlcmZhY2UgICA9PiAgRGVmaW5lZCBpbiBpbnRlcmZhY2Uuc2Nzc1xuICAvLyAkY3NzNC12YXItcHJlZml4ICAgICAgICAgICA9PiAgRGVmaW5lZCBpbiBwcmVmZXJlbmNlcy5zY3NzXG4gIC8vICRjc3M0LWNvbG9yLWZvcm1hdCAgICAgICAgID0+ICBEZWZpbmVkIGluIHByZWZlcmVuY2VzLnNjc3NcblxuICBAaWYgKCRjb2xvci1wYWxldHRlLW1vZGUgPT0gJ2Nzcy00Jykge1xuICAgICRwYWxldHRlLXJlZmVyZW5jZTogJGNvbG9yLXBhbGV0dGUtaW50ZXJmYWNlO1xuXG4gICAgJGNvbG9yLXZhcmlhYmxlLWluZGV4OiBpbmRleCgkcGFsZXR0ZS1yZWZlcmVuY2UsICRjb2xvci1uYW1lKTtcblxuICAgIEBpZiAodHlwZV9vZigkY29sb3ItdmFyaWFibGUtaW5kZXgpID09ICdudW1iZXInKSB7XG4gICAgICAkY29sb3ItdmFyaWFibGUtbmFtZTogbnRoKCRwYWxldHRlLXJlZmVyZW5jZSwgJGNvbG9yLXZhcmlhYmxlLWluZGV4KTtcblxuICAgICAgQGlmICgkYWxwaGEgPiAwIGFuZCAkYWxwaGEgPCAxKSB7XG4gICAgICAgIEByZXR1cm4gI3sncmdiYSh2YXIoJyArICRjc3M0LXZhci1wcmVmaXggKyAkY29sb3ItdmFyaWFibGUtbmFtZSArICctJyArICRjc3M0LWNvbG9yLWZvcm1hdCArJyksICN7JGFscGhhfSknfTtcbiAgICAgIH0gQGVsc2UgaWYgKCRhbHBoYSA9PSAxKSB7XG4gICAgICAgIEByZXR1cm4gI3sncmdiKHZhcignICsgJGNzczQtdmFyLXByZWZpeCArICRjb2xvci12YXJpYWJsZS1uYW1lICsgJy0nICsgJGNzczQtY29sb3ItZm9ybWF0ICsgJykpJ307XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgQGVycm9yIFwiQWxwaGEgKCN7JGFscGhhfSkgbXVzdCBiZSBhIG51bWJlclwiO1xuICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgQGVycm9yIFwiQ29sb3IgKCN7JGNvbG9yLW5hbWV9KSB3YXMgbm90IGZvdW5kIG9uIENvbG9yIFBhbGV0dGUgZGVmaW5pdGlvbi4gTWFrZSBzdXJlIGl0J3MgZGVmaW5lZCBpbiB0aGUgdGhlbWUvcGFsZXR0ZXMvaW50ZXJmYWNlLnNjc3MgZmlsZVwiO1xuICAgIH1cbiAgfSBAZWxzZSBpZiAoJGNvbG9yLXBhbGV0dGUtbW9kZSA9PSAnc2FzcycpIHtcbiAgICAkcGFsZXR0ZS1yZWZlcmVuY2U6ICRjaG9vc2VuLXBhbGV0dGU7XG5cbiAgICAkY29sb3ItdmFyaWFibGU6IG1hcC1nZXQoJHBhbGV0dGUtcmVmZXJlbmNlLCAkY29sb3ItbmFtZSk7XG5cbiAgICAvLyBDaGVjayBpZiBpdCBpcyBhIFNhc3MgY29sb3JcbiAgICBAaWYgKHR5cGVfb2YoJGNvbG9yLXZhcmlhYmxlKSA9PSAnY29sb3InKSB7XG4gICAgICBAaWYgKCRhbHBoYSA+IDAgYW5kICRhbHBoYSA8IDEpIHtcbiAgICAgICAgQHJldHVybiByZ2JhKCRjb2xvci12YXJpYWJsZSwgJGFscGhhKTtcbiAgICAgIH0gQGVsc2UgaWYgKCRhbHBoYSA9PSAxKSB7XG4gICAgICAgIEByZXR1cm4gJGNvbG9yLXZhcmlhYmxlO1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIEBlcnJvciBcIkFscGhhICgjeyRhbHBoYX0pIG11c3QgYmUgYSBudW1iZXJcIjtcbiAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgIEBlcnJvciBcIkNvbG9yICgjeyRjb2xvci12YXJpYWJsZX0pIGlzIG5vdCBhIFNhc3MgY29sb3JcIjtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBlcnJvciAnTm8gQ29sb3IgUGFsZXR0ZSBtb2RlIHNlbGVjdGVkIGluIHRoZW1lL3BhbGV0dGVzL3ByZWZlcmVuY2VzLnNjc3MnO1xuICB9XG59XG4iLCIvKlxuICBDU1MgNCBNb2RlXG4qL1xuJGNvbG9yLXBhbGV0dGUtbW9kZTogJ2Nzcy00JztcblxuXG4vKlxuICBTYXNzIE1vZGVcbiovXG4vLyBAaW1wb3J0ICdjb3JlJztcbi8vXG4vLyAkY29sb3ItcGFsZXR0ZS1tb2RlOiAnc2Fzcyc7XG4vL1xuLy8gLy8gSW1wb3J0IHRoZSBkZWZpbml0aW9ucyBvZiB0aGUgcGFsZXR0ZSB5b3Ugd2FudCB0byB1c2Vcbi8vIEBpbXBvcnQgJ3BhbGV0dGUtMS9kZWZpbml0aW9ucyc7XG4vLyAvLyBAaW1wb3J0ICdwYWxldHRlLTIvZGVmaW5pdGlvbnMnO1xuLy9cbi8vIC8vIEFzc2lnbiBhIHBhcnRpY3VsYXIgQ29sb3IgUGFsZXR0ZSB0byB0aGUgJ2Nob29zZW4tcGFsZXR0ZScgcG9pbnRlci5cbi8vIC8vICRjaG9vc2VuLXBhbGV0dGUgd2lsbCBiZSBhIFNhc3MgbWFwIHBvaW50aW5nIHRvIGFub3RoZXIgY29sb3IgcGFsZXR0ZSBTYXNzIG1hcFxuLy8gJGNob29zZW4tcGFsZXR0ZTogYnVpbGRTYXNzUGFsZXR0ZSgkcGFsZXR0ZS0xKTtcbi8vIC8vICRjaG9vc2VuLXBhbGV0dGU6IGJ1aWxkU2Fzc1BhbGV0dGUoJHBhbGV0dGUtMik7XG4iLCIvL2NvbG9yXG4udGV4dC1ibHVlLWxpZ2h0IHtcbiAgY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbGlnaHRcIil9O1xufVxuLnRleHQtYmx1ZS1tYWluIHtcbiAgY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbWFpblwiKX07XG59XG4udGV4dC1ibHVlLWRhcmsge1xuICBjb2xvcjogI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1kYXJrXCIpfTtcbn1cblxuLy9iYWNrZ3JvdW5kXG4uYmctZ3JleS1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImdyZXktbGlnaHRcIil9O1xufVxuLmJnLWdyZXktZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImdyZXktNVwiKX07XG59XG4uYmctYmx1ZS1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbGlnaHRcIil9O1xufVxuLmJnLWJsdWUtbWFpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbWFpblwiKX07XG59XG4uYmctYmx1ZS1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1kYXJrXCIpfTtcbn1cblxuLy90ZXh0XG4udGV4dC14cyB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbn1cbi50ZXh0LXNtIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn1cbi50ZXh0LWJhc2Uge1xuICBmb250LXNpemU6IDFyZW07XG59XG4udGV4dC1sZyB7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG59XG5cbi50ZXh0LXhsIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuXG4udGV4dC0yeGwge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLnRleHQtM3hsIHtcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xufVxuXG4uZm9udC1zZW1pYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uZm9udC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmNhcGl0YWxpemUge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmN1cnNvci1wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucm91bmRlZC14bCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5ib3JkZXItcHJpbWFyeS0xIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1tYWluXCIpfTtcbn1cblxuLmJvcmRlci1wcmltYXJ5LTIge1xuICBib3JkZXI6IDJweCBzb2xpZCAje3BhbGV0dGUtY29sb3IoXCJibHVlLW1haW5cIil9O1xufVxuXG4uY3VzdG9tLXNjcm9sbHtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xufVxuLmN1c3RvbS1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IC41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiZ3JleS1saWdodFwiKX07XG59XG5cblxuLmN1c3RvbS1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IC4zZW0gc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiZ3JleS01XCIpfTtcbn1cbiIsIkBpbXBvcnQgJ3NoYXJlZCc7XG5cbjpob3N0IHtcbiAgLS1pY29uLWhlaWdodDogODRweDtcbiAgLS1hbGVydC1zcGFjaW5nOiAxMHB4O1xuICAtLWFsZXJ0LXRleHQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignZ3JleS02Jyl9O1xuICAtLXN1Y2Nlc3MtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignc3VjY2VzcycpfTtcbiAgLS1zdWNjZXNzLWJhY2tncm91bmQ6ICN7cGFsZXR0ZS1jb2xvcignc3VjY2VzcycsIDAuMil9O1xuICAtLXN1Y2Nlc3MtYmFja2dyb3VuZC1vdmVyZmxvdzogI3twYWxldHRlLWNvbG9yKCdzdWNjZXNzLWxpZ2h0Jyl9O1xuICAtLXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKCdzdWNjZXNzLWRhcmsnKX07XG4gIC0tc3VjY2Vzcy1ob3Zlci1jb2xvcjogI3twYWxldHRlLWNvbG9yKCd3aGl0ZScpfTtcbiAgLS1lcnJvci1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdlcnJvcicpfTtcbiAgLS1lcnJvci1iYWNrZ3JvdW5kOiAje3BhbGV0dGUtY29sb3IoJ2Vycm9yJywgMC4yKX07XG4gIC0tZXJyb3ItYmFja2dyb3VuZC1vdmVyZmxvdzogI3twYWxldHRlLWNvbG9yKCdlcnJvci1saWdodCcpfTtcbiAgLS1lcnJvci1ob3Zlci1iYWNrZ3JvdW5kOiAje3BhbGV0dGUtY29sb3IoJ2Vycm9yLWRhcmsnKX07XG4gIC0tZXJyb3ItaG92ZXItY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignd2hpdGUnKX07XG4gIC0tYnV0dG9uLXRleHQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignd2hpdGUnKX07XG4gIC0tbW9kYWwtcGFkZGluZzogY2FsYyh2YXIoLS1hbGVydC1zcGFjaW5nKSAqIDEuNSk7XG5cbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IHZhcigtLW1vZGFsLXBhZGRpbmcpO1xufVxuXG4uYWxlcnQtbW9kYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgbWluLWhlaWdodDogMTUwcHg7XG5cbiAgLmFsZXJ0LXRpdGxlIHtcbiAgICBjb2xvcjogdmFyKC0tYWxlcnQtdGV4dC1jb2xvcik7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWFsZXJ0LXNwYWNpbmcpO1xuICB9XG5cbiAgLmFsZXJ0LXRleHQge1xuICAgIGNvbG9yOiB2YXIoLS1hbGVydC10ZXh0LWNvbG9yKTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAuaWNvbi1jb250YWluZXItd3JhcHBlciB7XG4gICAgd2lkdGg6IHZhcigtLWljb24taGVpZ2h0KTtcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLWFsZXJ0LXNwYWNpbmcpICogMS41KTtcblxuICAgIC5pY29uLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAuYWxlcnQtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcblxuICAgICAgICAmLmljb24tc3VjY2VzcyB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXN1Y2Nlc3MtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5pY29uLWVycm9yIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZXJyb3ItY29sb3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmljb24tYmFja2dyb3VuZCB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgICAgICYuaWNvbi1vdmVyZmxvdyB7XG4gICAgICAgIG1hcmdpbi10b3A6IGNhbGMoY2FsYyhjYWxjKHZhcigtLWljb24taGVpZ2h0ICkgLyAyKSArIHZhcigtLW1vZGFsLXBhZGRpbmcpKSAqIC0xKTtcbiAgICAgICAgJi5zdWNjZXNzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWNjZXNzLWJhY2tncm91bmQtb3ZlcmZsb3cpO1xuICAgICAgICB9XG4gICAgICAgICYuZXJyb3Ige1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVycm9yLWJhY2tncm91bmQtb3ZlcmZsb3cpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYuaWNvbi1kZWZhdWx0IHtcbiAgICAgICAgJi5zdWNjZXNzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWNjZXNzLWJhY2tncm91bmQpO1xuICAgICAgICB9XG4gICAgICAgICYuZXJyb3Ige1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVycm9yLWJhY2tncm91bmQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmFsZXJ0LXdpdGgtaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmFsZXJ0LWJ1dHRvbnMge1xuICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tYWxlcnQtc3BhY2luZykgKiAyKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5idXR0b24taW5mbyB7XG4gICAgICBAaW5jbHVkZSBidXR0b24oKTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5idXR0b24tc3VjY2VzcyB7XG4gICAgICAtLWJ1dHRvbi1iYWNrZ3JvdW5kOiB2YXIoLS1zdWNjZXNzLWNvbG9yKTtcbiAgICAgIC0tYnV0dG9uLWJvcmRlcjogdmFyKC0tc3VjY2Vzcy1jb2xvcik7XG4gICAgICAtLWJ1dHRvbi1jb2xvcjogdmFyKC0tYnV0dG9uLXRleHQtY29sb3IpO1xuXG4gICAgICAtLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kOiB2YXIoLS1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQpO1xuICAgICAgLS1idXR0b24taG92ZXItYm9yZGVyOiB2YXIoLS1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQpO1xuICAgICAgLS1idXR0b24taG92ZXItY29sb3I6IHZhcigtLXN1Y2Nlc3MtaG92ZXItY29sb3IpO1xuXG4gICAgICBAaW5jbHVkZSBidXR0b24oKTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1hbGVydC1zcGFjaW5nKTtcbiAgICB9XG5cbiAgICAuYnV0dG9uLWVycm9yIHtcbiAgICAgIC0tYnV0dG9uLWJhY2tncm91bmQ6IHZhcigtLWVycm9yLWNvbG9yKTtcbiAgICAgIC0tYnV0dG9uLWJvcmRlcjogdmFyKC0tZXJyb3ItY29sb3IpO1xuICAgICAgLS1idXR0b24tY29sb3I6IHZhcigtLWJ1dHRvbi10ZXh0LWNvbG9yKTtcblxuICAgICAgLS1idXR0b24taG92ZXItYmFja2dyb3VuZDogdmFyKC0tZXJyb3ItaG92ZXItYmFja2dyb3VuZCk7XG4gICAgICAtLWJ1dHRvbi1ob3Zlci1ib3JkZXI6IHZhcigtLWVycm9yLWhvdmVyLWJhY2tncm91bmQpO1xuICAgICAgLS1idXR0b24taG92ZXItY29sb3I6IHZhcigtLWVycm9yLWhvdmVyLWNvbG9yKTtcbiAgICAgIEBpbmNsdWRlIGJ1dHRvbigpO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tbGVmdDogdmFyKC0tYWxlcnQtc3BhY2luZyk7XG4gICAgfVxuICB9XG59XG5cbjpob3N0LWNvbnRleHQoLm92ZXJmbG93LWljb24tYWxlcnQtd3JhcHBlcikge1xuICAtLW1vZGFsLXBhZGRpbmc6IDQwcHg7XG59XG5cbjo6bmctZGVlcCB7XG4gIC8vIHRoaXMgYXBwbGllcyB0byBhbGwgdGhlIG1hdC1kaWFsb2ctY29udGFpbmVyXG4gIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB9XG5cbiAgLy8gdGhpcyBhcHBsaWVzIG9ubHkgdG8gdGhlIG1hdC1kaWFsb2ctY29udGFpbmVyIHdpdGggb3ZlcmZsb3cgaWNvblxuICAub3ZlcmZsb3ctaWNvbi1hbGVydC13cmFwcGVyIHtcbiAgICAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgb3ZlcmZsb3c6IHZpc2libGU7IC8vIHRvIGJlIGFibGUgdG8gc2hvdyBvdmVyZmxvdyBpY29uXG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0ICdwYWxldHRlcy9zaGFyZWQnO1xuXG5AbWl4aW4gYnV0dG9uKCkge1xuICAvLyBjb2xvcnMgdGhhdCBjYW4gYmUgcmVkZWZpbmVkOlxuICAvLyAtLWJ1dHRvbi1iYWNrZ3JvdW5kXG4gIC8vIC0tYnV0dG9uLWJvcmRlclxuICAvLyAtLWJ1dHRvbi1jb2xvclxuXG4gICRkZWZhdWx0LWJhY2tncm91bmQ6ICN7cGFsZXR0ZS1jb2xvcigncHJpbWFyeScpfTsgLy8gLS1idXR0b24tYmFja2dyb3VuZFxuICAkZGVmYXVsdC1ib3JkZXI6ICN7cGFsZXR0ZS1jb2xvcigncHJpbWFyeScpfTsgLy8gLS1idXR0b24tYm9yZGVyXG4gICRkZWZhdWx0LWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ3doaXRlJyl9OyAvLyAtLWJ1dHRvbi1jb2xvclxuXG4gICRkZWZhdWx0LWhvdmVyLWJhY2tncm91bmQ6ICN7cGFsZXR0ZS1jb2xvcigncHJpbWFyeS1kYXJrJyl9OyAvLyAtLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kXG4gICRkZWZhdWx0LWhvdmVyLWJvcmRlcjogI3twYWxldHRlLWNvbG9yKCdwcmltYXJ5LWRhcmsnKX07IC8vIC0tYnV0dG9uLWhvdmVyLWJvcmRlclxuICAkZGVmYXVsdC1ob3Zlci1jb2xvcjogI3twYWxldHRlLWNvbG9yKCd3aGl0ZScpfTsgLy8gLS1idXR0b24taG92ZXItY29sb3JcblxuICAkZGVmYXVsdC1hY3RpdmUtYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLWhvdmVyLWJhY2tncm91bmQsICRkZWZhdWx0LWhvdmVyLWJhY2tncm91bmQpOyAvLyAtLWJ1dHRvbi1hY3RpdmUtYmFja2dyb3VuZFxuICAkZGVmYXVsdC1hY3RpdmUtYm9yZGVyOiB2YXIoLS1idXR0b24taG92ZXItYm9yZGVyLCAkZGVmYXVsdC1ob3Zlci1ib3JkZXIpOyAvLyAtLWJ1dHRvbi1hY3RpdmUtYm9yZGVyXG4gICRkZWZhdWx0LWFjdGl2ZS1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yLCAkZGVmYXVsdC1ob3Zlci1jb2xvcik7IC8vIC0tYnV0dG9uLWFjdGl2ZS1jb2xvclxuXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLCAkZGVmYXVsdC1iYWNrZ3JvdW5kKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tYm9yZGVyLCAkZGVmYXVsdC1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBjb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yLCAkZGVmYXVsdC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuNXMsIGNvbG9yIC41cywgYmFja2dyb3VuZC1jb2xvciAuNXM7XG5cbiAgJjpob3ZlciB7XG4gICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWJhY2tncm91bmQsICRkZWZhdWx0LWhvdmVyLWJhY2tncm91bmQpO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItYm9yZGVyLCAkZGVmYXVsdC1ob3Zlci1ib3JkZXIpO1xuICAgICAgY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1jb2xvciwgJGRlZmF1bHQtaG92ZXItY29sb3IpO1xuICAgIH1cbiAgfVxuXG4gICY6YWN0aXZlLFxuICAmLmFjdGl2ZSxcbiAgJjpmb2N1cyxcbiAgJi5mb2N1cyB7XG4gICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWFjdGl2ZS1iYWNrZ3JvdW5kLCAkZGVmYXVsdC1hY3RpdmUtYmFja2dyb3VuZCk7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1hY3RpdmUtYm9yZGVyLCAkZGVmYXVsdC1hY3RpdmUtYm9yZGVyKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1idXR0b24tYWN0aXZlLWNvbG9yLCAkZGVmYXVsdC1hY3RpdmUtY29sb3IpO1xuICAgIH1cbiAgfVxuXG4gICZbZGlzYWJsZWRdIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIG9wYWNpdHk6IC41O1xuICB9XG59XG5cbkBtaXhpbiBidXR0b24tb3V0bGluZSgpIHtcbiAgLy8gY29sb3JzIHRoYXQgY2FuIGJlIHJlZGVmaW5lZDpcbiAgLy8gLS1idXR0b24tYmFja2dyb3VuZFxuICAvLyAtLWJ1dHRvbi1ib3JkZXJcbiAgLy8gLS1idXR0b24tY29sb3JcblxuICAkZGVmYXVsdC1iYWNrZ3JvdW5kOiAje3BhbGV0dGUtY29sb3IoJ3doaXRlJyl9OyAvLyAtLWJ1dHRvbi1iYWNrZ3JvdW5kXG4gICRkZWZhdWx0LWJvcmRlcjogI3twYWxldHRlLWNvbG9yKCdibHVlLW1haW4nKX07IC8vIC0tYnV0dG9uLWJvcmRlclxuICAkZGVmYXVsdC1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdibHVlLW1haW4nKX07IC8vIC0tYnV0dG9uLWNvbG9yXG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQsICRkZWZhdWx0LWJhY2tncm91bmQpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ib3JkZXIsICRkZWZhdWx0LWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsICRkZWZhdWx0LWNvbG9yKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC41cywgY29sb3IgLjVzLCBiYWNrZ3JvdW5kLWNvbG9yIC41cztcblxuICAmOmhvdmVyIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsICRkZWZhdWx0LWNvbG9yKTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWJvcmRlciwgJGRlZmF1bHQtYm9yZGVyKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZCwgJGRlZmF1bHQtYmFja2dyb3VuZCk7XG4gICAgfVxuICB9XG5cbiAgJjphY3RpdmUsXG4gICYuYWN0aXZlLFxuICAmOmZvY3VzLFxuICAmLmZvY3VzIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsICRkZWZhdWx0LWNvbG9yKTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWJvcmRlciwgJGRlZmF1bHQtYm9yZGVyKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZCwgJGRlZmF1bHQtYmFja2dyb3VuZCk7XG4gICAgfVxuICB9XG4gICZbZGlzYWJsZWRdIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIG9wYWNpdHk6IC41O1xuICB9XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertTemplateComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-alert-template-component',
            templateUrl: 'alert-template.component.html',
            styleUrls: ['./alert-template.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "xTco":
    /*!*****************************************************************************!*\
      !*** ./src/app/authentication/forgot-password/forgot-password.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: ForgotPasswordComponent */

    /***/
    function xTco(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
        return ForgotPasswordComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../authentication.service */
      "9Ku7");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ForgotPasswordComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please check your email...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ForgotPasswordComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return ["/auth/signin"];
      };

      var ForgotPasswordComponent = /*#__PURE__*/function () {
        function ForgotPasswordComponent(router, authenticationService) {
          _classCallCheck(this, ForgotPasswordComponent);

          this.router = router;
          this.authenticationService = authenticationService;
          this.emailSubmitted = false;
          this.invalidEmail = false;
          this.loading = false;
        }

        _createClass(ForgotPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.recoverPasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("")
            });
          }
        }, {
          key: "onRecoverPassword",
          value: function onRecoverPassword() {
            var _this27 = this;

            this.loading = true;
            this.authenticationService.recoverPassword(this.recoverPasswordForm.value.email).subscribe(function (res) {
              // if recoverpassword success then:
              _this27.emailSubmitted = true;
              _this27.invalidEmail = false;
              _this27.loading = false;
              setTimeout(function () {
                return _this27.router.navigate(["/auth/signin"]);
              }, 3000);
            }, function (err) {
              console.log(err);
              _this27.emailSubmitted = false;
              _this27.invalidEmail = true;
              _this27.loading = false; // else if recoverpassword fails
              // show error
            });
          }
        }]);

        return ForgotPasswordComponent;
      }();

      ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) {
        return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]));
      };

      ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ForgotPasswordComponent,
        selectors: [["app-forgot-password"]],
        decls: 18,
        vars: 8,
        consts: [[1, "row", "no-gutters", "recover-password-page"], [1, "col-md-6", "col-sm-12", "form-section"], [1, "page-title", "text-center", "font-weight-bold"], [1, "col-12", "col-lg-8", "mx-auto"], [1, "recover-password-form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "d-flex", "justify-content-between"], [1, "link-text", 3, "routerLink"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "col-md-6", "col-lg-6", "d-none", "d-md-block", "image-section", "login-bg"], ["role", "alert", 1, "alert", "alert-success"], ["role", "alert", 1, "alert", "alert-danger"]],
        template: function ForgotPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Forgot password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_5_listener() {
              return ctx.onRecoverPassword();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ForgotPasswordComponent_div_10_Template, 2, 0, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ForgotPasswordComponent_div_11_Template, 2, 0, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.recoverPasswordForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", false && false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emailSubmitted);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidEmail);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.loading ? "Loading..." : "RESET PASSWORD");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        styles: [".text-blue-light[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-light-rgb));\n}\n.text-blue-main[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-main-rgb));\n}\n.text-blue-dark[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-dark-rgb));\n}\n.bg-grey-light[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-grey-light-rgb));\n}\n.bg-grey-dark[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-grey-5-rgb));\n}\n.bg-blue-light[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-light-rgb));\n}\n.bg-blue-main[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-main-rgb));\n}\n.bg-blue-dark[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-dark-rgb));\n}\n.text-xs[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.text-base[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.text-lg[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.text-xl[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.text-2xl[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.text-3xl[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.capitalize[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.rounded-xl[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  overflow: hidden;\n}\n.border-primary-1[_ngcontent-%COMP%] {\n  border: 1px solid rgb(var(--palette-blue-main-rgb));\n}\n.border-primary-2[_ngcontent-%COMP%] {\n  border: 2px solid rgb(var(--palette-blue-main-rgb));\n}\n.custom-scroll[_ngcontent-%COMP%] {\n  padding-right: 4px;\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0.5em;\n  border-radius: 5px;\n  background-color: rgb(var(--palette-grey-light-rgb));\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  border: 0.3em solid;\n  border-color: rgb(var(--palette-grey-5-rgb));\n}\n[_nghost-%COMP%] {\n  --page-title-color: rgb(var(--palette-grey-9-rgb));\n  --page-text-color: rgb(var(--palette-grey-8-rgb));\n  --side-image-overlay: rgba(var(--palette-primary-rgb), 0.15);\n  --button-link-color: rgb(var(--palette-primary-rgb));\n  --page-spacing: 10px;\n  --button-padding: 6px 26px;\n}\n.recover-password-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n.recover-password-page[_ngcontent-%COMP%]   .login-bg[_ngcontent-%COMP%] {\n  background-color: #fff;\n  background-image: url('BG2.png');\n  background-position: center center;\n  background-size: cover;\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  padding: calc(var(--page-spacing) * 8);\n}\n@media (max-width: 991.98px) {\n  .recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n    padding: calc(var(--page-spacing) * 4);\n  }\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  color: var(--page-title-color);\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  color: var(--page-text-color);\n  font-size: 18px;\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%] {\n  margin-top: calc(var(--page-spacing) * 4);\n  --default-spacing: 10px;\n  --form-label-color: rgb(var(--palette-grey-7-rgb));\n  --form-input-background: rgb(var(--palette-white-rgb));\n  --form-input-border-color: rgba(var(--palette-grey-6-rgb), 0.42);\n  --form-input-color: rgb(var(--palette-grey-9-rgb));\n  --form-input-placeholder-color: rgb(var(--palette-grey-5-rgb));\n  --form-help-color: rgb(var(--palette-grey-7-rgb));\n  --form-input-addons-background: rgba(var(--palette-secondary-rgb), 0.15);\n  --form-input-addons-color: rgb(var(--palette-secondary-rgb));\n  --form-input-success-color: rgb(var(--palette-success-rgb));\n  --form-input-success-background: rgba(var(--palette-success-rgb), 0.15);\n  --form-input-error-color: rgb(var(--palette-error-rgb));\n  --form-input-error-background: rgba(var(--palette-error-rgb), 0.15);\n  --form-disabled-input-background: rgb(var(--palette-grey-2-rgb));\n  --form-disabled-input-color: rgb(var(--palette-grey-9-rgb));\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--form-label-color);\n  font-size: 16px;\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  background-color: var(--form-input-background);\n  border: 1px solid var(--form-input-border-color);\n  color: var(--form-input-color);\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::-moz-placeholder {\n  font-size: 16px;\n  color: var(--form-input-placeholder-color);\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:-ms-input-placeholder {\n  font-size: 16px;\n  color: var(--form-input-placeholder-color);\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {\n  font-size: 16px;\n  color: var(--form-input-placeholder-color);\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .form-control.is-valid[_ngcontent-%COMP%] {\n  border: 1px solid var(--form-input-success-color);\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border: 1px solid var(--form-input-error-color);\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .form-control.disabled[_ngcontent-%COMP%] {\n  opacity: 0.8;\n  color: var(--form-disabled-input-color);\n  background-color: var(--form-disabled-input-background);\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .form-text[_ngcontent-%COMP%] {\n  margin-top: calc(var(--default-spacing) / 2);\n  font-size: 14px;\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .form-text.help-text[_ngcontent-%COMP%] {\n  color: var(--form-help-color);\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .custom-valid-feedback[_ngcontent-%COMP%] {\n  background-color: var(--form-input-success-background);\n  color: var(--form-input-success-color);\n  padding: calc(var(--default-spacing) / 2) var(--default-spacing);\n  border-radius: 6px;\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .custom-invalid-feedback[_ngcontent-%COMP%] {\n  background-color: var(--form-input-error-background);\n  color: var(--form-input-error-color);\n  padding: calc(var(--default-spacing) / 2) var(--default-spacing);\n  border-radius: 6px;\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  background-color: var(--form-input-addons-background);\n  color: var(--form-input-addons-color);\n  border: 1px solid var(--form-input-border-color);\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .form-call-to-actions[_ngcontent-%COMP%] {\n  align-items: baseline;\n  margin-top: calc(var(--page-spacing) * 3);\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .form-call-to-actions[_ngcontent-%COMP%]   .form-action.text-link[_ngcontent-%COMP%] {\n  color: var(--button-link-color);\n}\n@media (max-width: 575.98px) {\n  .recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .form-call-to-actions[_ngcontent-%COMP%]   .form-action[_ngcontent-%COMP%]:not(:last-child) {\n    margin-bottom: calc(var(--page-spacing) * 2);\n  }\n  .recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .form-call-to-actions[_ngcontent-%COMP%]   .form-action.text-link[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .form-call-to-actions[_ngcontent-%COMP%]   .recover-password-btn[_ngcontent-%COMP%] {\n  -webkit-margin-start: auto;\n          margin-inline-start: auto;\n  background-color: var(--button-background, rgb(var(--palette-primary-rgb)));\n  border-color: var(--button-border, rgb(var(--palette-primary-rgb)));\n  border-radius: 6px;\n  border-style: solid;\n  border-width: 1px;\n  color: var(--button-color, rgb(var(--palette-white-rgb)));\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: normal;\n  padding: 6px 12px;\n  transition: border-color 0.5s, color 0.5s, background-color 0.5s;\n  padding: var(--button-padding);\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .form-call-to-actions[_ngcontent-%COMP%]   .recover-password-btn[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--button-hover-background, rgb(var(--palette-primary-dark-rgb)));\n  border-color: var(--button-hover-border, rgb(var(--palette-primary-dark-rgb)));\n  color: var(--button-hover-color, rgb(var(--palette-white-rgb)));\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .form-call-to-actions[_ngcontent-%COMP%]   .recover-password-btn[_ngcontent-%COMP%]:active:not([disabled]), .recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .form-call-to-actions[_ngcontent-%COMP%]   .recover-password-btn.active[_ngcontent-%COMP%]:not([disabled]), .recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .form-call-to-actions[_ngcontent-%COMP%]   .recover-password-btn[_ngcontent-%COMP%]:focus:not([disabled]), .recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .form-call-to-actions[_ngcontent-%COMP%]   .recover-password-btn.focus[_ngcontent-%COMP%]:not([disabled]) {\n  background-color: var(--button-active-background, var(--button-hover-background, rgb(var(--palette-primary-dark-rgb))));\n  border-color: var(--button-active-border, var(--button-hover-border, rgb(var(--palette-primary-dark-rgb))));\n  color: var(--button-active-color, var(--button-hover-color, rgb(var(--palette-white-rgb))));\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .form-call-to-actions[_ngcontent-%COMP%]   .recover-password-btn[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.recover-password-page[_ngcontent-%COMP%]   .image-section[_ngcontent-%COMP%]   cc-image-shell.recover-password-image[_ngcontent-%COMP%] {\n  --image-shell-overlay-background: var(--side-image-overlay);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9wYWxldHRlcy9zaGFyZWQuc2NzcyIsInNyYy90aGVtZS9wYWxldHRlcy9tb2RlLnNjc3MiLCJzcmMvdGhlbWUvY3VzdG9tLWNsYXNzZXMuc2NzcyIsInNyYy9hcHAvYXV0aGVudGljYXRpb24vZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2JyZWFrcG9pbnRzLnNjc3MiLCJzcmMvdGhlbWUvbWl4aW5zL2lucHV0cy9mb3JtLWdyb3VwLnNjc3MiLCJzcmMvdGhlbWUvdGhpcmQtcGFydHkvb3ZlcnJpZGUtYm9vdHN0cmFwLXZhcmlhYmxlcy5zY3NzIiwic3JjL3RoZW1lL21peGlucy9idXR0b25zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FETkE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FETkE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FETkE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FETkE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FDTEE7RUFDRSx5Q0FBQTtBQzZDRjtBRDNDQTtFQUNFLHdDQUFBO0FDOENGO0FENUNBO0VBQ0Usd0NBQUE7QUMrQ0Y7QUQzQ0E7RUFDRSxvREFBQTtBQzhDRjtBRDVDQTtFQUNFLGdEQUFBO0FDK0NGO0FEN0NBO0VBQ0Usb0RBQUE7QUNnREY7QUQ5Q0E7RUFDRSxtREFBQTtBQ2lERjtBRC9DQTtFQUNFLG1EQUFBO0FDa0RGO0FEOUNBO0VBQ0Usa0JBQUE7QUNpREY7QUQvQ0E7RUFDRSxtQkFBQTtBQ2tERjtBRGhEQTtFQUNFLGVBQUE7QUNtREY7QURqREE7RUFDRSxtQkFBQTtBQ29ERjtBRGpEQTtFQUNFLGtCQUFBO0FDb0RGO0FEakRBO0VBQ0UsaUJBQUE7QUNvREY7QURqREE7RUFDRSxrQkFBQTtBQ29ERjtBRGpEQTtFQUNFLGdCQUFBO0FDb0RGO0FEbERBO0VBQ0UsZ0JBQUE7QUNxREY7QURsREE7RUFDRSwwQkFBQTtBQ3FERjtBRGxEQTtFQUNFLGVBQUE7QUNxREY7QURsREE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FDcURGO0FEbERBO0VBQ0UsbURBQUE7QUNxREY7QURsREE7RUFDRSxtREFBQTtBQ3FERjtBRGxEQTtFQUNFLGtCQUFBO0FDcURGO0FEbkRBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0RBQUE7QUNzREY7QURsREE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7QUNxREY7QUFsSkE7RUFFRSxrREFBQTtFQUNBLGlEQUFBO0VBQ0EsNERBQUE7RUFDQSxvREFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7QUFvSkY7QUFqSkE7RUFDRSxpQkFBQTtBQW9KRjtBQWxKRTtFQUNFLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0FBb0pKO0FBakpFO0VBQ0Usc0NBQUE7QUFtSko7QUNqR0k7RURuREY7SUFJSSxzQ0FBQTtFQW9KSjtBQUNGO0FBbEpJO0VBQ0UsOEJBQUE7QUFvSk47QUFqSkk7RUFDRSw2QkFBQTtFQUNBLGVBQUE7QUFtSk47QUFoSkk7RUFDRSx5Q0FBQTtFRXRDSix1QkFBQTtFQUNBLGtEQUFBO0VBQ0Esc0RBQUE7RUFDQSxnRUFBQTtFQUNBLGtEQUFBO0VBQ0EsOERBQUE7RUFDQSxpREFBQTtFQUNBLHdFQUFBO0VBQ0EsNERBQUE7RUFDQSwyREFBQTtFQUNBLHVFQUFBO0VBQ0EsdURBQUE7RUFDQSxtRUFBQTtFQUNBLGdFQUFBO0VBQ0EsMkRBQUE7QUZ5TEY7QUV2TEU7RUFDRSw4QkFBQTtFQUNBLGVBQUE7QUZ5TEo7QUV0TEU7RUFDRSw4Q0FBQTtFQUNBLGdEQUFBO0VBQ0EsOEJBQUE7QUZ3TEo7QUV0TEk7RUFDRSxlQUFBO0VBQ0EsMENBQUE7QUZ3TE47QUUxTEk7RUFDRSxlQUFBO0VBQ0EsMENBQUE7QUZ3TE47QUUxTEk7RUFDRSxlQUFBO0VBQ0EsMENBQUE7QUZ3TE47QUVyTEk7RUFDRSxpREFBQTtBRnVMTjtBRXBMSTtFQUNFLCtDQUFBO0FGc0xOO0FFbkxJO0VBQ0UsWUFBQTtFQUNBLHVDQUFBO0VBQ0EsdURBQUE7QUZxTE47QUVqTEU7RUFDRSw0Q0FBQTtFQUNBLGVBQUE7QUZtTEo7QUVqTEk7RUFDRSw2QkFBQTtBRm1MTjtBRS9LRTtFQUNFLHNEQUFBO0VBQ0Esc0NBQUE7RUFDQSxnRUFBQTtFQUNBLGtCQUFBO0FGaUxKO0FFOUtFO0VBQ0Usb0RBQUE7RUFDQSxvQ0FBQTtFQUNBLGdFQUFBO0VBQ0Esa0JDNURrQjtBSDRPdEI7QUUzS007RUFDRSxxREFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0RBQUE7QUY2S1I7QUE3TU07RUFDRSxxQkFBQTtFQUNBLHlDQUFBO0FBK01SO0FBM01VO0VBQ0UsK0JBQUE7QUE2TVo7QUN0TEk7RURuQlE7SUFDRSw0Q0FBQTtFQTRNWjtFQXpNVTtJQUNFLGtCQUFBO0VBMk1aO0FBQ0Y7QUF2TVE7RUFDRSwwQkFBQTtVQUFBLHlCQUFBO0VJN0NSLDJFQUFBO0VBQ0EsbUVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5REFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnRUFBQTtFSnFDUSw4QkFBQTtBQW1OVjtBSXJQSTtFQUNFLHNGQUFBO0VBQ0EsOEVBQUE7RUFDQSwrREFBQTtBSnVQTjtBSS9PSTtFQUNFLHVIQUFBO0VBQ0EsMkdBQUE7RUFDQSwyRkFBQTtBSmlQTjtBSTdPRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBSitPSjtBQTFOSTtFQUNFLDJEQUFBO0FBNE5OIiwiZmlsZSI6InNyYy9hcHAvYXV0aGVudGljYXRpb24vZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIFNoYXJlZFxuKi9cblxuQGltcG9ydCAncHJlZmVyZW5jZXMnO1xuQGltcG9ydCAnaW50ZXJmYWNlJztcbkBpbXBvcnQgJ21vZGUnO1xuXG4vLyBBbiBhYnN0cmFjdCB3YXkgdG8gcHJvdmlkZSBjb2xvcnMuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGFuIGludGVyZmFjZSB0byBib3RoIFNhc3MgdmFyaWFibGVzIGFuZCBDU1MgNCB2YXJpYWJsZXMgYmFzZWQgY29sb3IgcGFsZXR0ZXMuXG5AZnVuY3Rpb24gcGFsZXR0ZS1jb2xvcigkY29sb3ItbmFtZSwgJGFscGhhOiAxKSB7XG4gIC8vICRjb2xvci1wYWxldHRlLW1vZGUgICAgICAgID0+ICBEZWZpbmVkIGluIG1vZGUuc2Nzc1xuICAvLyAkY2hvb3Nlbi1wYWxldHRlICAgICAgICAgICA9PiAgRGVmaW5lZCBpbiBtb2RlLnNjc3NcbiAgLy8gJGNvbG9yLXBhbGV0dGUtaW50ZXJmYWNlICAgPT4gIERlZmluZWQgaW4gaW50ZXJmYWNlLnNjc3NcbiAgLy8gJGNzczQtdmFyLXByZWZpeCAgICAgICAgICAgPT4gIERlZmluZWQgaW4gcHJlZmVyZW5jZXMuc2Nzc1xuICAvLyAkY3NzNC1jb2xvci1mb3JtYXQgICAgICAgICA9PiAgRGVmaW5lZCBpbiBwcmVmZXJlbmNlcy5zY3NzXG5cbiAgQGlmICgkY29sb3ItcGFsZXR0ZS1tb2RlID09ICdjc3MtNCcpIHtcbiAgICAkcGFsZXR0ZS1yZWZlcmVuY2U6ICRjb2xvci1wYWxldHRlLWludGVyZmFjZTtcblxuICAgICRjb2xvci12YXJpYWJsZS1pbmRleDogaW5kZXgoJHBhbGV0dGUtcmVmZXJlbmNlLCAkY29sb3ItbmFtZSk7XG5cbiAgICBAaWYgKHR5cGVfb2YoJGNvbG9yLXZhcmlhYmxlLWluZGV4KSA9PSAnbnVtYmVyJykge1xuICAgICAgJGNvbG9yLXZhcmlhYmxlLW5hbWU6IG50aCgkcGFsZXR0ZS1yZWZlcmVuY2UsICRjb2xvci12YXJpYWJsZS1pbmRleCk7XG5cbiAgICAgIEBpZiAoJGFscGhhID4gMCBhbmQgJGFscGhhIDwgMSkge1xuICAgICAgICBAcmV0dXJuICN7J3JnYmEodmFyKCcgKyAkY3NzNC12YXItcHJlZml4ICsgJGNvbG9yLXZhcmlhYmxlLW5hbWUgKyAnLScgKyAkY3NzNC1jb2xvci1mb3JtYXQgKycpLCAjeyRhbHBoYX0pJ307XG4gICAgICB9IEBlbHNlIGlmICgkYWxwaGEgPT0gMSkge1xuICAgICAgICBAcmV0dXJuICN7J3JnYih2YXIoJyArICRjc3M0LXZhci1wcmVmaXggKyAkY29sb3ItdmFyaWFibGUtbmFtZSArICctJyArICRjc3M0LWNvbG9yLWZvcm1hdCArICcpKSd9O1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIEBlcnJvciBcIkFscGhhICgjeyRhbHBoYX0pIG11c3QgYmUgYSBudW1iZXJcIjtcbiAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgIEBlcnJvciBcIkNvbG9yICgjeyRjb2xvci1uYW1lfSkgd2FzIG5vdCBmb3VuZCBvbiBDb2xvciBQYWxldHRlIGRlZmluaXRpb24uIE1ha2Ugc3VyZSBpdCdzIGRlZmluZWQgaW4gdGhlIHRoZW1lL3BhbGV0dGVzL2ludGVyZmFjZS5zY3NzIGZpbGVcIjtcbiAgICB9XG4gIH0gQGVsc2UgaWYgKCRjb2xvci1wYWxldHRlLW1vZGUgPT0gJ3Nhc3MnKSB7XG4gICAgJHBhbGV0dGUtcmVmZXJlbmNlOiAkY2hvb3Nlbi1wYWxldHRlO1xuXG4gICAgJGNvbG9yLXZhcmlhYmxlOiBtYXAtZ2V0KCRwYWxldHRlLXJlZmVyZW5jZSwgJGNvbG9yLW5hbWUpO1xuXG4gICAgLy8gQ2hlY2sgaWYgaXQgaXMgYSBTYXNzIGNvbG9yXG4gICAgQGlmICh0eXBlX29mKCRjb2xvci12YXJpYWJsZSkgPT0gJ2NvbG9yJykge1xuICAgICAgQGlmICgkYWxwaGEgPiAwIGFuZCAkYWxwaGEgPCAxKSB7XG4gICAgICAgIEByZXR1cm4gcmdiYSgkY29sb3ItdmFyaWFibGUsICRhbHBoYSk7XG4gICAgICB9IEBlbHNlIGlmICgkYWxwaGEgPT0gMSkge1xuICAgICAgICBAcmV0dXJuICRjb2xvci12YXJpYWJsZTtcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICBAZXJyb3IgXCJBbHBoYSAoI3skYWxwaGF9KSBtdXN0IGJlIGEgbnVtYmVyXCI7XG4gICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICBAZXJyb3IgXCJDb2xvciAoI3skY29sb3ItdmFyaWFibGV9KSBpcyBub3QgYSBTYXNzIGNvbG9yXCI7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAZXJyb3IgJ05vIENvbG9yIFBhbGV0dGUgbW9kZSBzZWxlY3RlZCBpbiB0aGVtZS9wYWxldHRlcy9wcmVmZXJlbmNlcy5zY3NzJztcbiAgfVxufVxuIiwiLypcbiAgQ1NTIDQgTW9kZVxuKi9cbiRjb2xvci1wYWxldHRlLW1vZGU6ICdjc3MtNCc7XG5cblxuLypcbiAgU2FzcyBNb2RlXG4qL1xuLy8gQGltcG9ydCAnY29yZSc7XG4vL1xuLy8gJGNvbG9yLXBhbGV0dGUtbW9kZTogJ3Nhc3MnO1xuLy9cbi8vIC8vIEltcG9ydCB0aGUgZGVmaW5pdGlvbnMgb2YgdGhlIHBhbGV0dGUgeW91IHdhbnQgdG8gdXNlXG4vLyBAaW1wb3J0ICdwYWxldHRlLTEvZGVmaW5pdGlvbnMnO1xuLy8gLy8gQGltcG9ydCAncGFsZXR0ZS0yL2RlZmluaXRpb25zJztcbi8vXG4vLyAvLyBBc3NpZ24gYSBwYXJ0aWN1bGFyIENvbG9yIFBhbGV0dGUgdG8gdGhlICdjaG9vc2VuLXBhbGV0dGUnIHBvaW50ZXIuXG4vLyAvLyAkY2hvb3Nlbi1wYWxldHRlIHdpbGwgYmUgYSBTYXNzIG1hcCBwb2ludGluZyB0byBhbm90aGVyIGNvbG9yIHBhbGV0dGUgU2FzcyBtYXBcbi8vICRjaG9vc2VuLXBhbGV0dGU6IGJ1aWxkU2Fzc1BhbGV0dGUoJHBhbGV0dGUtMSk7XG4vLyAvLyAkY2hvb3Nlbi1wYWxldHRlOiBidWlsZFNhc3NQYWxldHRlKCRwYWxldHRlLTIpO1xuIiwiLy9jb2xvclxuLnRleHQtYmx1ZS1saWdodCB7XG4gIGNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJibHVlLWxpZ2h0XCIpfTtcbn1cbi50ZXh0LWJsdWUtbWFpbiB7XG4gIGNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJibHVlLW1haW5cIil9O1xufVxuLnRleHQtYmx1ZS1kYXJrIHtcbiAgY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtZGFya1wiKX07XG59XG5cbi8vYmFja2dyb3VuZFxuLmJnLWdyZXktbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJncmV5LWxpZ2h0XCIpfTtcbn1cbi5iZy1ncmV5LWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJncmV5LTVcIil9O1xufVxuLmJnLWJsdWUtbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJibHVlLWxpZ2h0XCIpfTtcbn1cbi5iZy1ibHVlLW1haW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJibHVlLW1haW5cIil9O1xufVxuLmJnLWJsdWUtZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtZGFya1wiKX07XG59XG5cbi8vdGV4dFxuLnRleHQteHMge1xuICBmb250LXNpemU6IDAuNzVyZW07XG59XG4udGV4dC1zbSB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG59XG4udGV4dC1iYXNlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLnRleHQtbGcge1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xufVxuXG4udGV4dC14bCB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuLnRleHQtMnhsIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi50ZXh0LTN4bCB7XG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcbn1cblxuLmZvbnQtc2VtaWJvbGQge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmZvbnQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5jYXBpdGFsaXplIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5jdXJzb3ItcG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJvdW5kZWQteGwge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYm9yZGVyLXByaW1hcnktMSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbWFpblwiKX07XG59XG5cbi5ib3JkZXItcHJpbWFyeS0yIHtcbiAgYm9yZGVyOiAycHggc29saWQgI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1tYWluXCIpfTtcbn1cblxuLmN1c3RvbS1zY3JvbGx7XG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcbn1cbi5jdXN0b20tc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAuNWVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImdyZXktbGlnaHRcIil9O1xufVxuXG5cbi5jdXN0b20tc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAuM2VtIHNvbGlkO1xuICBib3JkZXItY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImdyZXktNVwiKX07XG59XG4iLCJAaW1wb3J0ICdzaGFyZWQnO1xuXG46aG9zdCB7XG4gIC8vIERlZmF1bHQgdmFyaWFibGVzXG4gIC0tcGFnZS10aXRsZS1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdncmV5LTknKX07XG4gIC0tcGFnZS10ZXh0LWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ2dyZXktOCcpfTtcbiAgLS1zaWRlLWltYWdlLW92ZXJsYXk6ICN7cGFsZXR0ZS1jb2xvcigncHJpbWFyeScsIDAuMTUpfTtcbiAgLS1idXR0b24tbGluay1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdwcmltYXJ5Jyl9O1xuICAtLXBhZ2Utc3BhY2luZzogMTBweDtcbiAgLS1idXR0b24tcGFkZGluZzogNnB4IDI2cHg7XG59XG5cbi5yZWNvdmVyLXBhc3N3b3JkLXBhZ2Uge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcblxuICAubG9naW4tYmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9CRzIucG5nKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cblxuICAuZm9ybS1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiA4KTtcblxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihtZCkge1xuICAgICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogNCk7XG4gICAgfVxuXG4gICAgLnBhZ2UtdGl0bGUge1xuICAgICAgY29sb3I6IHZhcigtLXBhZ2UtdGl0bGUtY29sb3IpO1xuICAgIH1cblxuICAgIC5wYWdlLXN1YnRpdGxlIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wYWdlLXRleHQtY29sb3IpO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cblxuICAgIC5yZWNvdmVyLXBhc3N3b3JkLWZvcm0ge1xuICAgICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogNCk7XG5cbiAgICAgIEBpbmNsdWRlIGZvcm0tZ3JvdXAtc3R5bGVzKCk7XG5cbiAgICAgIC5mb3JtLWNhbGwtdG8tYWN0aW9ucyB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMyk7XG5cbiAgICAgICAgLmZvcm0tYWN0aW9uIHtcblxuICAgICAgICAgICYudGV4dC1saW5rIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1idXR0b24tbGluay1jb2xvcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHhzKSB7XG4gICAgICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi50ZXh0LWxpbmsge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnJlY292ZXItcGFzc3dvcmQtYnRuIHtcbiAgICAgICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiBhdXRvO1xuICAgICAgICAgIEBpbmNsdWRlIGJ1dHRvbigpO1xuICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWJ1dHRvbi1wYWRkaW5nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5pbWFnZS1zZWN0aW9uIHtcbiAgICBjYy1pbWFnZS1zaGVsbC5yZWNvdmVyLXBhc3N3b3JkLWltYWdlIHtcbiAgICAgIC0taW1hZ2Utc2hlbGwtb3ZlcmxheS1iYWNrZ3JvdW5kOiB2YXIoLS1zaWRlLWltYWdlLW92ZXJsYXkpO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiAhPSBudWxsIGFuZCAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iLCJAbWl4aW4gZm9ybS1ncm91cC1zdHlsZXMoKSB7XG4gIC0tZGVmYXVsdC1zcGFjaW5nOiAxMHB4O1xuICAtLWZvcm0tbGFiZWwtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignZ3JleS03Jyl9O1xuICAtLWZvcm0taW5wdXQtYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKCd3aGl0ZScpfTtcbiAgLS1mb3JtLWlucHV0LWJvcmRlci1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdncmV5LTYnLCAwLjQyKX07XG4gIC0tZm9ybS1pbnB1dC1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdncmV5LTknKX07XG4gIC0tZm9ybS1pbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdncmV5LTUnKX07XG4gIC0tZm9ybS1oZWxwLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ2dyZXktNycpfTtcbiAgLS1mb3JtLWlucHV0LWFkZG9ucy1iYWNrZ3JvdW5kOiAje3BhbGV0dGUtY29sb3IoJ3NlY29uZGFyeScsIDAuMTUpfTtcbiAgLS1mb3JtLWlucHV0LWFkZG9ucy1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdzZWNvbmRhcnknKX07XG4gIC0tZm9ybS1pbnB1dC1zdWNjZXNzLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ3N1Y2Nlc3MnKX07XG4gIC0tZm9ybS1pbnB1dC1zdWNjZXNzLWJhY2tncm91bmQ6ICN7cGFsZXR0ZS1jb2xvcignc3VjY2VzcycsIDAuMTUpfTtcbiAgLS1mb3JtLWlucHV0LWVycm9yLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ2Vycm9yJyl9O1xuICAtLWZvcm0taW5wdXQtZXJyb3ItYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKCdlcnJvcicsIDAuMTUpfTtcbiAgLS1mb3JtLWRpc2FibGVkLWlucHV0LWJhY2tncm91bmQ6ICN7cGFsZXR0ZS1jb2xvcignZ3JleS0yJyl9O1xuICAtLWZvcm0tZGlzYWJsZWQtaW5wdXQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignZ3JleS05Jyl9O1xuXG4gIGxhYmVsIHtcbiAgICBjb2xvcjogdmFyKC0tZm9ybS1sYWJlbC1jb2xvcik7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmZvcm0tY29udHJvbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9ybS1pbnB1dC1iYWNrZ3JvdW5kKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb3JtLWlucHV0LWJvcmRlci1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLWZvcm0taW5wdXQtY29sb3IpO1xuXG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgY29sb3I6IHZhcigtLWZvcm0taW5wdXQtcGxhY2Vob2xkZXItY29sb3IpO1xuICAgIH1cblxuICAgICYuaXMtdmFsaWQge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9ybS1pbnB1dC1zdWNjZXNzLWNvbG9yKTtcbiAgICB9XG5cbiAgICAmLmlzLWludmFsaWQge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9ybS1pbnB1dC1lcnJvci1jb2xvcik7XG4gICAgfVxuXG4gICAgJi5kaXNhYmxlZCB7XG4gICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICBjb2xvcjogdmFyKC0tZm9ybS1kaXNhYmxlZC1pbnB1dC1jb2xvcik7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtLWRpc2FibGVkLWlucHV0LWJhY2tncm91bmQpO1xuICAgIH1cbiAgfVxuXG4gIC5mb3JtLXRleHQge1xuICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tZGVmYXVsdC1zcGFjaW5nKSAvIDIpO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICYuaGVscC10ZXh0IHtcbiAgICAgIGNvbG9yOiB2YXIoLS1mb3JtLWhlbHAtY29sb3IpO1xuICAgIH1cbiAgfVxuXG4gIC5jdXN0b20tdmFsaWQtZmVlZGJhY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm0taW5wdXQtc3VjY2Vzcy1iYWNrZ3JvdW5kKTtcbiAgICBjb2xvcjogdmFyKC0tZm9ybS1pbnB1dC1zdWNjZXNzLWNvbG9yKTtcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLWRlZmF1bHQtc3BhY2luZykgLyAyKSB2YXIoLS1kZWZhdWx0LXNwYWNpbmcpO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgfVxuXG4gIC5jdXN0b20taW52YWxpZC1mZWVkYmFjayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9ybS1pbnB1dC1lcnJvci1iYWNrZ3JvdW5kKTtcbiAgICBjb2xvcjogdmFyKC0tZm9ybS1pbnB1dC1lcnJvci1jb2xvcik7XG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1kZWZhdWx0LXNwYWNpbmcpIC8gMikgdmFyKC0tZGVmYXVsdC1zcGFjaW5nKTtcbiAgICBib3JkZXItcmFkaXVzOiAkaW5wdXQtYm9yZGVyLXJhZGl1cztcbiAgfVxuXG4gIC5pbnB1dC1ncm91cCB7XG4gICAgLmlucHV0LWdyb3VwLXByZXBlbmQsIC5pbnB1dC1ncm91cC1hcHBlbmQge1xuICAgICAgLmlucHV0LWdyb3VwLXRleHQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtLWlucHV0LWFkZG9ucy1iYWNrZ3JvdW5kKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWZvcm0taW5wdXQtYWRkb25zLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9ybS1pbnB1dC1ib3JkZXItY29sb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy8gT3ZlcnJpZGUgQm9vdHN0cmFwIFZhcmlhYmxlc1xuJGljb24tZm9udC1wYXRoOiAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9mb250cy9ib290c3RyYXAvJztcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAnTnVuaXRvJywgc2Fucy1zZXJpZiAhZGVmYXVsdDtcblxuLy8gSGVyZSB5b3UgY2FuIHJlZGVmaW5lIGdsb2JhbCBzdHlsZXMgZnJvbSBCb290c3RyYXBcblxuLy8gcmVkZWZpbmUgaW5wdXRzIGJvcmRlciByYWRpdXNcbiRpbnB1dC1ib3JkZXItcmFkaXVzOiA2cHg7XG5cbi8vIHlvdSBjYW4gcmVkZWZpbmUgdGhlc2UgY29sb3JzIHdpdGggeW91ciBjaG9vc2VuIHBhbGV0dGUgY29sb3JzXG4vLyAkcHJpbWFyeTogI3lvdXJjb2xvcjtcbi8vICRzZWNvbmRhcnk6ICN5b3VyY29sb3I7XG4vLyAkdGVydGlhcnk6ICN5b3VyY29sb3I7XG5cbi8vIGZvciBwYWxldHRlIDE6XG4kcHJpbWFyeTogIzQyOGJjYTtcbi8vICRzZWNvbmRhcnk6ICMzOEQ5OTc7XG4vLyAkdGVydGlhcnk6ICNmZmMyMDA7XG5cbi8vIGZvciBwYWxldHRlIDI6XG4vLyAkcHJpbWFyeTogIzllMzRkZjtcbi8vICRzZWNvbmRhcnk6ICM4QkVERDM7XG4vLyAkdGVydGlhcnk6ICNGRkFGODQ7XG4iLCJAaW1wb3J0ICdwYWxldHRlcy9zaGFyZWQnO1xuXG5AbWl4aW4gYnV0dG9uKCkge1xuICAvLyBjb2xvcnMgdGhhdCBjYW4gYmUgcmVkZWZpbmVkOlxuICAvLyAtLWJ1dHRvbi1iYWNrZ3JvdW5kXG4gIC8vIC0tYnV0dG9uLWJvcmRlclxuICAvLyAtLWJ1dHRvbi1jb2xvclxuXG4gICRkZWZhdWx0LWJhY2tncm91bmQ6ICN7cGFsZXR0ZS1jb2xvcigncHJpbWFyeScpfTsgLy8gLS1idXR0b24tYmFja2dyb3VuZFxuICAkZGVmYXVsdC1ib3JkZXI6ICN7cGFsZXR0ZS1jb2xvcigncHJpbWFyeScpfTsgLy8gLS1idXR0b24tYm9yZGVyXG4gICRkZWZhdWx0LWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ3doaXRlJyl9OyAvLyAtLWJ1dHRvbi1jb2xvclxuXG4gICRkZWZhdWx0LWhvdmVyLWJhY2tncm91bmQ6ICN7cGFsZXR0ZS1jb2xvcigncHJpbWFyeS1kYXJrJyl9OyAvLyAtLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kXG4gICRkZWZhdWx0LWhvdmVyLWJvcmRlcjogI3twYWxldHRlLWNvbG9yKCdwcmltYXJ5LWRhcmsnKX07IC8vIC0tYnV0dG9uLWhvdmVyLWJvcmRlclxuICAkZGVmYXVsdC1ob3Zlci1jb2xvcjogI3twYWxldHRlLWNvbG9yKCd3aGl0ZScpfTsgLy8gLS1idXR0b24taG92ZXItY29sb3JcblxuICAkZGVmYXVsdC1hY3RpdmUtYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLWhvdmVyLWJhY2tncm91bmQsICRkZWZhdWx0LWhvdmVyLWJhY2tncm91bmQpOyAvLyAtLWJ1dHRvbi1hY3RpdmUtYmFja2dyb3VuZFxuICAkZGVmYXVsdC1hY3RpdmUtYm9yZGVyOiB2YXIoLS1idXR0b24taG92ZXItYm9yZGVyLCAkZGVmYXVsdC1ob3Zlci1ib3JkZXIpOyAvLyAtLWJ1dHRvbi1hY3RpdmUtYm9yZGVyXG4gICRkZWZhdWx0LWFjdGl2ZS1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yLCAkZGVmYXVsdC1ob3Zlci1jb2xvcik7IC8vIC0tYnV0dG9uLWFjdGl2ZS1jb2xvclxuXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLCAkZGVmYXVsdC1iYWNrZ3JvdW5kKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tYm9yZGVyLCAkZGVmYXVsdC1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBjb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yLCAkZGVmYXVsdC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuNXMsIGNvbG9yIC41cywgYmFja2dyb3VuZC1jb2xvciAuNXM7XG5cbiAgJjpob3ZlciB7XG4gICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWJhY2tncm91bmQsICRkZWZhdWx0LWhvdmVyLWJhY2tncm91bmQpO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItYm9yZGVyLCAkZGVmYXVsdC1ob3Zlci1ib3JkZXIpO1xuICAgICAgY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1jb2xvciwgJGRlZmF1bHQtaG92ZXItY29sb3IpO1xuICAgIH1cbiAgfVxuXG4gICY6YWN0aXZlLFxuICAmLmFjdGl2ZSxcbiAgJjpmb2N1cyxcbiAgJi5mb2N1cyB7XG4gICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWFjdGl2ZS1iYWNrZ3JvdW5kLCAkZGVmYXVsdC1hY3RpdmUtYmFja2dyb3VuZCk7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1hY3RpdmUtYm9yZGVyLCAkZGVmYXVsdC1hY3RpdmUtYm9yZGVyKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1idXR0b24tYWN0aXZlLWNvbG9yLCAkZGVmYXVsdC1hY3RpdmUtY29sb3IpO1xuICAgIH1cbiAgfVxuXG4gICZbZGlzYWJsZWRdIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIG9wYWNpdHk6IC41O1xuICB9XG59XG5cbkBtaXhpbiBidXR0b24tb3V0bGluZSgpIHtcbiAgLy8gY29sb3JzIHRoYXQgY2FuIGJlIHJlZGVmaW5lZDpcbiAgLy8gLS1idXR0b24tYmFja2dyb3VuZFxuICAvLyAtLWJ1dHRvbi1ib3JkZXJcbiAgLy8gLS1idXR0b24tY29sb3JcblxuICAkZGVmYXVsdC1iYWNrZ3JvdW5kOiAje3BhbGV0dGUtY29sb3IoJ3doaXRlJyl9OyAvLyAtLWJ1dHRvbi1iYWNrZ3JvdW5kXG4gICRkZWZhdWx0LWJvcmRlcjogI3twYWxldHRlLWNvbG9yKCdibHVlLW1haW4nKX07IC8vIC0tYnV0dG9uLWJvcmRlclxuICAkZGVmYXVsdC1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdibHVlLW1haW4nKX07IC8vIC0tYnV0dG9uLWNvbG9yXG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQsICRkZWZhdWx0LWJhY2tncm91bmQpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ib3JkZXIsICRkZWZhdWx0LWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsICRkZWZhdWx0LWNvbG9yKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC41cywgY29sb3IgLjVzLCBiYWNrZ3JvdW5kLWNvbG9yIC41cztcblxuICAmOmhvdmVyIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsICRkZWZhdWx0LWNvbG9yKTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWJvcmRlciwgJGRlZmF1bHQtYm9yZGVyKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZCwgJGRlZmF1bHQtYmFja2dyb3VuZCk7XG4gICAgfVxuICB9XG5cbiAgJjphY3RpdmUsXG4gICYuYWN0aXZlLFxuICAmOmZvY3VzLFxuICAmLmZvY3VzIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsICRkZWZhdWx0LWNvbG9yKTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWJvcmRlciwgJGRlZmF1bHQtYm9yZGVyKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZCwgJGRlZmF1bHQtYmFja2dyb3VuZCk7XG4gICAgfVxuICB9XG4gICZbZGlzYWJsZWRdIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIG9wYWNpdHk6IC41O1xuICB9XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-forgot-password",
            templateUrl: "./forgot-password.component.html",
            styleUrls: ["./forgot-password.component.scss"]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "yMLD":
    /*!***************************************************************************!*\
      !*** ./src/app/authentication/reset-password/reset-password.component.ts ***!
      \***************************************************************************/

    /*! exports provided: ResetPasswordComponent */

    /***/
    function yMLD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function () {
        return ResetPasswordComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../authentication.service */
      "9Ku7");
      /* harmony import */


      var src_app_core_validators_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/validators.service */
      "PmMJ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ResetPasswordComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r0.recoverPasswordForm.controls.password.errors == null ? null : ctx_r0.recoverPasswordForm.controls.password.errors.minlength) || (ctx_r0.recoverPasswordForm.controls.password.errors == null ? null : ctx_r0.recoverPasswordForm.controls.password.errors.maxlength) ? "Min 8 characters and max 20" : "Invalid field", " ");
        }
      }

      function ResetPasswordComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r1.recoverPasswordForm.controls.confirm_password.errors == null ? null : ctx_r1.recoverPasswordForm.controls.confirm_password.errors.minlength) || (ctx_r1.recoverPasswordForm.controls.confirm_password.errors == null ? null : ctx_r1.recoverPasswordForm.controls.confirm_password.errors.maxlength) ? "Min 8 characters and max 20" : "Invalid field", " ");
        }
      }

      function ResetPasswordComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Passwords must be equals");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ResetPasswordComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Failed to reset password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ResetPasswordComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password updated");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return ["/auth/signin"];
      };

      var ResetPasswordComponent = /*#__PURE__*/function () {
        function ResetPasswordComponent(router, authenticationService, fb, validatorsService, route) {
          _classCallCheck(this, ResetPasswordComponent);

          this.router = router;
          this.authenticationService = authenticationService;
          this.fb = fb;
          this.validatorsService = validatorsService;
          this.route = route;
          this.loading = false;
          this.error = false;
          this.notEqualPass = false;
          this.passwordSaved = false;
        }

        _createClass(ResetPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this28 = this;

            this.route.queryParams.subscribe(function (params) {
              if (params.token) {
                _this28.token = params.token;
              } else {
                return _this28.router.navigate(["/auth/signin"]);
              }
            });
            this.recoverPasswordForm = this.fb.group({
              password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)]],
              confirm_password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)]]
            }, {
              validators: this.validatorsService.equalPasswords("password", "confirm_password")
            });
          }
        }, {
          key: "onRecoverPassword",
          value: function onRecoverPassword() {
            var _this29 = this;

            var _a, _b, _c;

            if ((_c = (_b = (_a = this.recoverPasswordForm.controls) === null || _a === void 0 ? void 0 : _a.confirm_password) === null || _b === void 0 ? void 0 : _b.errors) === null || _c === void 0 ? void 0 : _c.notEqual) {
              this.notEqualPass = true;
            } else {
              this.notEqualPass = false;
            }

            if (this.recoverPasswordForm.invalid) {
              return Object.values(this.recoverPasswordForm.controls).forEach(function (control) {
                if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                  Object.values(control.controls).forEach(function (control) {
                    return control.markAsTouched();
                  });
                } else {
                  control.markAsTouched();
                }
              });
            } else {
              this.loading = true;
              this.authenticationService.resetPassword(this.recoverPasswordForm.value.password, this.token).subscribe(function (res) {
                _this29.passwordSaved = true;
                _this29.loading = false;
                setTimeout(function () {
                  return _this29.router.navigate(["/auth/signin"]);
                }, 3000);
              }, function (err) {
                _this29.error = true;
                _this29.passwordSaved = false;
                _this29.loading = false;
              });
            }
          }
        }]);

        return ResetPasswordComponent;
      }();

      ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) {
        return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_validators_service__WEBPACK_IMPORTED_MODULE_4__["ValidatorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
      };

      ResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ResetPasswordComponent,
        selectors: [["app-reset-password"]],
        decls: 25,
        vars: 14,
        consts: [[1, "row", "no-gutters", "recover-password-page"], [1, "col-md-6", "col-sm-12", "form-section"], [1, "page-title", "text-center", "font-weight-bold"], [1, "col-8", "mx-auto"], [1, "recover-password-form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "password"], ["type", "password", "id", "password", "formControlName", "password", 1, "form-control"], ["class", "form-text invalid-feedback", 4, "ngIf"], ["for", "confirm_password"], ["type", "password", "id", "confirm_password", "formControlName", "confirm_password", 1, "form-control"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], [1, "d-flex", "justify-content-between"], [1, "link-text", 3, "routerLink"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "col-md-5", "col-lg-6", "d-none", "d-md-block", "image-section", "login-bg"], [1, "form-text", "invalid-feedback"], ["role", "alert", 1, "alert", "alert-danger"], ["role", "alert", 1, "alert", "alert-success"]],
        template: function ResetPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Reset password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ResetPasswordComponent_Template_form_ngSubmit_5_listener() {
              return ctx.onRecoverPassword();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "New password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ResetPasswordComponent_div_10_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Confirm password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ResetPasswordComponent_div_15_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ResetPasswordComponent_div_16_Template, 2, 0, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ResetPasswordComponent_div_17_Template, 2, 0, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ResetPasswordComponent_div_18_Template, 2, 0, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.recoverPasswordForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.recoverPasswordForm.controls.password.touched && ctx.recoverPasswordForm.controls.password.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.recoverPasswordForm.controls.confirm_password.touched && ctx.recoverPasswordForm.controls.confirm_password.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.passwordSaved && ctx.notEqualPass);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.passwordSaved && ctx.error);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.passwordSaved);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading || ctx.passwordSaved);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.loading ? "Loading..." : "RESET PASSWORD");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        styles: [".text-blue-light[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-light-rgb));\n}\n.text-blue-main[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-main-rgb));\n}\n.text-blue-dark[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-dark-rgb));\n}\n.bg-grey-light[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-grey-light-rgb));\n}\n.bg-grey-dark[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-grey-5-rgb));\n}\n.bg-blue-light[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-light-rgb));\n}\n.bg-blue-main[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-main-rgb));\n}\n.bg-blue-dark[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-dark-rgb));\n}\n.text-xs[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.text-base[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.text-lg[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.text-xl[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.text-2xl[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.text-3xl[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.capitalize[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.rounded-xl[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  overflow: hidden;\n}\n.border-primary-1[_ngcontent-%COMP%] {\n  border: 1px solid rgb(var(--palette-blue-main-rgb));\n}\n.border-primary-2[_ngcontent-%COMP%] {\n  border: 2px solid rgb(var(--palette-blue-main-rgb));\n}\n.custom-scroll[_ngcontent-%COMP%] {\n  padding-right: 4px;\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0.5em;\n  border-radius: 5px;\n  background-color: rgb(var(--palette-grey-light-rgb));\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  border: 0.3em solid;\n  border-color: rgb(var(--palette-grey-5-rgb));\n}\n[_nghost-%COMP%] {\n  --page-title-color: rgb(var(--palette-grey-9-rgb));\n  --page-text-color: rgb(var(--palette-grey-8-rgb));\n  --side-image-overlay: rgba(var(--palette-primary-rgb), 0.15);\n  --button-link-color: rgb(var(--palette-primary-rgb));\n  --page-spacing: 10px;\n  --button-padding: 6px 26px;\n}\n.recover-password-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n.recover-password-page[_ngcontent-%COMP%]   .login-bg[_ngcontent-%COMP%] {\n  background-color: #fff;\n  background-image: url('BG2.png');\n  background-position: center center;\n  background-size: cover;\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  padding: calc(var(--page-spacing) * 8);\n}\n@media (max-width: 991.98px) {\n  .recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n    padding: calc(var(--page-spacing) * 4);\n  }\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  color: var(--page-title-color);\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  color: var(--page-text-color);\n  font-size: 18px;\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%] {\n  margin-top: calc(var(--page-spacing) * 4);\n  --default-spacing: 10px;\n  --form-label-color: rgb(var(--palette-grey-7-rgb));\n  --form-input-background: rgb(var(--palette-white-rgb));\n  --form-input-border-color: rgba(var(--palette-grey-6-rgb), 0.42);\n  --form-input-color: rgb(var(--palette-grey-9-rgb));\n  --form-input-placeholder-color: rgb(var(--palette-grey-5-rgb));\n  --form-help-color: rgb(var(--palette-grey-7-rgb));\n  --form-input-addons-background: rgba(var(--palette-secondary-rgb), 0.15);\n  --form-input-addons-color: rgb(var(--palette-secondary-rgb));\n  --form-input-success-color: rgb(var(--palette-success-rgb));\n  --form-input-success-background: rgba(var(--palette-success-rgb), 0.15);\n  --form-input-error-color: rgb(var(--palette-error-rgb));\n  --form-input-error-background: rgba(var(--palette-error-rgb), 0.15);\n  --form-disabled-input-background: rgb(var(--palette-grey-2-rgb));\n  --form-disabled-input-color: rgb(var(--palette-grey-9-rgb));\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--form-label-color);\n  font-size: 16px;\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  background-color: var(--form-input-background);\n  border: 1px solid var(--form-input-border-color);\n  color: var(--form-input-color);\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::-moz-placeholder {\n  font-size: 16px;\n  color: var(--form-input-placeholder-color);\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:-ms-input-placeholder {\n  font-size: 16px;\n  color: var(--form-input-placeholder-color);\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {\n  font-size: 16px;\n  color: var(--form-input-placeholder-color);\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .form-control.is-valid[_ngcontent-%COMP%] {\n  border: 1px solid var(--form-input-success-color);\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border: 1px solid var(--form-input-error-color);\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .form-control.disabled[_ngcontent-%COMP%] {\n  opacity: 0.8;\n  color: var(--form-disabled-input-color);\n  background-color: var(--form-disabled-input-background);\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .form-text[_ngcontent-%COMP%] {\n  margin-top: calc(var(--default-spacing) / 2);\n  font-size: 14px;\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .form-text.help-text[_ngcontent-%COMP%] {\n  color: var(--form-help-color);\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .custom-valid-feedback[_ngcontent-%COMP%] {\n  background-color: var(--form-input-success-background);\n  color: var(--form-input-success-color);\n  padding: calc(var(--default-spacing) / 2) var(--default-spacing);\n  border-radius: 6px;\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .custom-invalid-feedback[_ngcontent-%COMP%] {\n  background-color: var(--form-input-error-background);\n  color: var(--form-input-error-color);\n  padding: calc(var(--default-spacing) / 2) var(--default-spacing);\n  border-radius: 6px;\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  background-color: var(--form-input-addons-background);\n  color: var(--form-input-addons-color);\n  border: 1px solid var(--form-input-border-color);\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .form-call-to-actions[_ngcontent-%COMP%] {\n  align-items: baseline;\n  margin-top: calc(var(--page-spacing) * 3);\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .form-call-to-actions[_ngcontent-%COMP%]   .form-action.text-link[_ngcontent-%COMP%] {\n  color: var(--button-link-color);\n}\n@media (max-width: 575.98px) {\n  .recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .form-call-to-actions[_ngcontent-%COMP%]   .form-action[_ngcontent-%COMP%]:not(:last-child) {\n    margin-bottom: calc(var(--page-spacing) * 2);\n  }\n  .recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .form-call-to-actions[_ngcontent-%COMP%]   .form-action.text-link[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .form-call-to-actions[_ngcontent-%COMP%]   .recover-password-btn[_ngcontent-%COMP%] {\n  -webkit-margin-start: auto;\n          margin-inline-start: auto;\n  background-color: var(--button-background, rgb(var(--palette-primary-rgb)));\n  border-color: var(--button-border, rgb(var(--palette-primary-rgb)));\n  border-radius: 6px;\n  border-style: solid;\n  border-width: 1px;\n  color: var(--button-color, rgb(var(--palette-white-rgb)));\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: normal;\n  padding: 6px 12px;\n  transition: border-color 0.5s, color 0.5s, background-color 0.5s;\n  padding: var(--button-padding);\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .form-call-to-actions[_ngcontent-%COMP%]   .recover-password-btn[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--button-hover-background, rgb(var(--palette-primary-dark-rgb)));\n  border-color: var(--button-hover-border, rgb(var(--palette-primary-dark-rgb)));\n  color: var(--button-hover-color, rgb(var(--palette-white-rgb)));\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .form-call-to-actions[_ngcontent-%COMP%]   .recover-password-btn[_ngcontent-%COMP%]:active:not([disabled]), .recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .form-call-to-actions[_ngcontent-%COMP%]   .recover-password-btn.active[_ngcontent-%COMP%]:not([disabled]), .recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .form-call-to-actions[_ngcontent-%COMP%]   .recover-password-btn[_ngcontent-%COMP%]:focus:not([disabled]), .recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .form-call-to-actions[_ngcontent-%COMP%]   .recover-password-btn.focus[_ngcontent-%COMP%]:not([disabled]) {\n  background-color: var(--button-active-background, var(--button-hover-background, rgb(var(--palette-primary-dark-rgb))));\n  border-color: var(--button-active-border, var(--button-hover-border, rgb(var(--palette-primary-dark-rgb))));\n  color: var(--button-active-color, var(--button-hover-color, rgb(var(--palette-white-rgb))));\n}\n.recover-password-page[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .recover-password-form[_ngcontent-%COMP%]   .form-call-to-actions[_ngcontent-%COMP%]   .recover-password-btn[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.recover-password-page[_ngcontent-%COMP%]   .image-section[_ngcontent-%COMP%]   cc-image-shell.recover-password-image[_ngcontent-%COMP%] {\n  --image-shell-overlay-background: var(--side-image-overlay);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9wYWxldHRlcy9zaGFyZWQuc2NzcyIsInNyYy90aGVtZS9wYWxldHRlcy9tb2RlLnNjc3MiLCJzcmMvdGhlbWUvY3VzdG9tLWNsYXNzZXMuc2NzcyIsInNyYy9hcHAvYXV0aGVudGljYXRpb24vcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19icmVha3BvaW50cy5zY3NzIiwic3JjL3RoZW1lL21peGlucy9pbnB1dHMvZm9ybS1ncm91cC5zY3NzIiwic3JjL3RoZW1lL3RoaXJkLXBhcnR5L292ZXJyaWRlLWJvb3RzdHJhcC12YXJpYWJsZXMuc2NzcyIsInNyYy90aGVtZS9taXhpbnMvYnV0dG9ucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBQ0xBO0VBQ0UseUNBQUE7QUM2Q0Y7QUQzQ0E7RUFDRSx3Q0FBQTtBQzhDRjtBRDVDQTtFQUNFLHdDQUFBO0FDK0NGO0FEM0NBO0VBQ0Usb0RBQUE7QUM4Q0Y7QUQ1Q0E7RUFDRSxnREFBQTtBQytDRjtBRDdDQTtFQUNFLG9EQUFBO0FDZ0RGO0FEOUNBO0VBQ0UsbURBQUE7QUNpREY7QUQvQ0E7RUFDRSxtREFBQTtBQ2tERjtBRDlDQTtFQUNFLGtCQUFBO0FDaURGO0FEL0NBO0VBQ0UsbUJBQUE7QUNrREY7QURoREE7RUFDRSxlQUFBO0FDbURGO0FEakRBO0VBQ0UsbUJBQUE7QUNvREY7QURqREE7RUFDRSxrQkFBQTtBQ29ERjtBRGpEQTtFQUNFLGlCQUFBO0FDb0RGO0FEakRBO0VBQ0Usa0JBQUE7QUNvREY7QURqREE7RUFDRSxnQkFBQTtBQ29ERjtBRGxEQTtFQUNFLGdCQUFBO0FDcURGO0FEbERBO0VBQ0UsMEJBQUE7QUNxREY7QURsREE7RUFDRSxlQUFBO0FDcURGO0FEbERBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQ3FERjtBRGxEQTtFQUNFLG1EQUFBO0FDcURGO0FEbERBO0VBQ0UsbURBQUE7QUNxREY7QURsREE7RUFDRSxrQkFBQTtBQ3FERjtBRG5EQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9EQUFBO0FDc0RGO0FEbERBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0FDcURGO0FBbEpBO0VBRUUsa0RBQUE7RUFDQSxpREFBQTtFQUNBLDREQUFBO0VBQ0Esb0RBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0FBb0pGO0FBakpBO0VBQ0UsaUJBQUE7QUFvSkY7QUFsSkU7RUFDRSxzQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtBQW9KSjtBQWpKRTtFQUNFLHNDQUFBO0FBbUpKO0FDakdJO0VEbkRGO0lBSUksc0NBQUE7RUFvSko7QUFDRjtBQWxKSTtFQUNFLDhCQUFBO0FBb0pOO0FBakpJO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0FBbUpOO0FBaEpJO0VBQ0UseUNBQUE7RUV0Q0osdUJBQUE7RUFDQSxrREFBQTtFQUNBLHNEQUFBO0VBQ0EsZ0VBQUE7RUFDQSxrREFBQTtFQUNBLDhEQUFBO0VBQ0EsaURBQUE7RUFDQSx3RUFBQTtFQUNBLDREQUFBO0VBQ0EsMkRBQUE7RUFDQSx1RUFBQTtFQUNBLHVEQUFBO0VBQ0EsbUVBQUE7RUFDQSxnRUFBQTtFQUNBLDJEQUFBO0FGeUxGO0FFdkxFO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0FGeUxKO0FFdExFO0VBQ0UsOENBQUE7RUFDQSxnREFBQTtFQUNBLDhCQUFBO0FGd0xKO0FFdExJO0VBQ0UsZUFBQTtFQUNBLDBDQUFBO0FGd0xOO0FFMUxJO0VBQ0UsZUFBQTtFQUNBLDBDQUFBO0FGd0xOO0FFMUxJO0VBQ0UsZUFBQTtFQUNBLDBDQUFBO0FGd0xOO0FFckxJO0VBQ0UsaURBQUE7QUZ1TE47QUVwTEk7RUFDRSwrQ0FBQTtBRnNMTjtBRW5MSTtFQUNFLFlBQUE7RUFDQSx1Q0FBQTtFQUNBLHVEQUFBO0FGcUxOO0FFakxFO0VBQ0UsNENBQUE7RUFDQSxlQUFBO0FGbUxKO0FFakxJO0VBQ0UsNkJBQUE7QUZtTE47QUUvS0U7RUFDRSxzREFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0VBQUE7RUFDQSxrQkFBQTtBRmlMSjtBRTlLRTtFQUNFLG9EQUFBO0VBQ0Esb0NBQUE7RUFDQSxnRUFBQTtFQUNBLGtCQzVEa0I7QUg0T3RCO0FFM0tNO0VBQ0UscURBQUE7RUFDQSxxQ0FBQTtFQUNBLGdEQUFBO0FGNktSO0FBN01NO0VBQ0UscUJBQUE7RUFDQSx5Q0FBQTtBQStNUjtBQTNNVTtFQUNFLCtCQUFBO0FBNk1aO0FDdExJO0VEbkJRO0lBQ0UsNENBQUE7RUE0TVo7RUF6TVU7SUFDRSxrQkFBQTtFQTJNWjtBQUNGO0FBdk1RO0VBQ0UsMEJBQUE7VUFBQSx5QkFBQTtFSTdDUiwyRUFBQTtFQUNBLG1FQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EseURBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0VBQUE7RUpxQ1EsOEJBQUE7QUFtTlY7QUlyUEk7RUFDRSxzRkFBQTtFQUNBLDhFQUFBO0VBQ0EsK0RBQUE7QUp1UE47QUkvT0k7RUFDRSx1SEFBQTtFQUNBLDJHQUFBO0VBQ0EsMkZBQUE7QUppUE47QUk3T0U7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUorT0o7QUExTkk7RUFDRSwyREFBQTtBQTROTiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgU2hhcmVkXG4qL1xuXG5AaW1wb3J0ICdwcmVmZXJlbmNlcyc7XG5AaW1wb3J0ICdpbnRlcmZhY2UnO1xuQGltcG9ydCAnbW9kZSc7XG5cbi8vIEFuIGFic3RyYWN0IHdheSB0byBwcm92aWRlIGNvbG9ycy5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgYW4gaW50ZXJmYWNlIHRvIGJvdGggU2FzcyB2YXJpYWJsZXMgYW5kIENTUyA0IHZhcmlhYmxlcyBiYXNlZCBjb2xvciBwYWxldHRlcy5cbkBmdW5jdGlvbiBwYWxldHRlLWNvbG9yKCRjb2xvci1uYW1lLCAkYWxwaGE6IDEpIHtcbiAgLy8gJGNvbG9yLXBhbGV0dGUtbW9kZSAgICAgICAgPT4gIERlZmluZWQgaW4gbW9kZS5zY3NzXG4gIC8vICRjaG9vc2VuLXBhbGV0dGUgICAgICAgICAgID0+ICBEZWZpbmVkIGluIG1vZGUuc2Nzc1xuICAvLyAkY29sb3ItcGFsZXR0ZS1pbnRlcmZhY2UgICA9PiAgRGVmaW5lZCBpbiBpbnRlcmZhY2Uuc2Nzc1xuICAvLyAkY3NzNC12YXItcHJlZml4ICAgICAgICAgICA9PiAgRGVmaW5lZCBpbiBwcmVmZXJlbmNlcy5zY3NzXG4gIC8vICRjc3M0LWNvbG9yLWZvcm1hdCAgICAgICAgID0+ICBEZWZpbmVkIGluIHByZWZlcmVuY2VzLnNjc3NcblxuICBAaWYgKCRjb2xvci1wYWxldHRlLW1vZGUgPT0gJ2Nzcy00Jykge1xuICAgICRwYWxldHRlLXJlZmVyZW5jZTogJGNvbG9yLXBhbGV0dGUtaW50ZXJmYWNlO1xuXG4gICAgJGNvbG9yLXZhcmlhYmxlLWluZGV4OiBpbmRleCgkcGFsZXR0ZS1yZWZlcmVuY2UsICRjb2xvci1uYW1lKTtcblxuICAgIEBpZiAodHlwZV9vZigkY29sb3ItdmFyaWFibGUtaW5kZXgpID09ICdudW1iZXInKSB7XG4gICAgICAkY29sb3ItdmFyaWFibGUtbmFtZTogbnRoKCRwYWxldHRlLXJlZmVyZW5jZSwgJGNvbG9yLXZhcmlhYmxlLWluZGV4KTtcblxuICAgICAgQGlmICgkYWxwaGEgPiAwIGFuZCAkYWxwaGEgPCAxKSB7XG4gICAgICAgIEByZXR1cm4gI3sncmdiYSh2YXIoJyArICRjc3M0LXZhci1wcmVmaXggKyAkY29sb3ItdmFyaWFibGUtbmFtZSArICctJyArICRjc3M0LWNvbG9yLWZvcm1hdCArJyksICN7JGFscGhhfSknfTtcbiAgICAgIH0gQGVsc2UgaWYgKCRhbHBoYSA9PSAxKSB7XG4gICAgICAgIEByZXR1cm4gI3sncmdiKHZhcignICsgJGNzczQtdmFyLXByZWZpeCArICRjb2xvci12YXJpYWJsZS1uYW1lICsgJy0nICsgJGNzczQtY29sb3ItZm9ybWF0ICsgJykpJ307XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgQGVycm9yIFwiQWxwaGEgKCN7JGFscGhhfSkgbXVzdCBiZSBhIG51bWJlclwiO1xuICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgQGVycm9yIFwiQ29sb3IgKCN7JGNvbG9yLW5hbWV9KSB3YXMgbm90IGZvdW5kIG9uIENvbG9yIFBhbGV0dGUgZGVmaW5pdGlvbi4gTWFrZSBzdXJlIGl0J3MgZGVmaW5lZCBpbiB0aGUgdGhlbWUvcGFsZXR0ZXMvaW50ZXJmYWNlLnNjc3MgZmlsZVwiO1xuICAgIH1cbiAgfSBAZWxzZSBpZiAoJGNvbG9yLXBhbGV0dGUtbW9kZSA9PSAnc2FzcycpIHtcbiAgICAkcGFsZXR0ZS1yZWZlcmVuY2U6ICRjaG9vc2VuLXBhbGV0dGU7XG5cbiAgICAkY29sb3ItdmFyaWFibGU6IG1hcC1nZXQoJHBhbGV0dGUtcmVmZXJlbmNlLCAkY29sb3ItbmFtZSk7XG5cbiAgICAvLyBDaGVjayBpZiBpdCBpcyBhIFNhc3MgY29sb3JcbiAgICBAaWYgKHR5cGVfb2YoJGNvbG9yLXZhcmlhYmxlKSA9PSAnY29sb3InKSB7XG4gICAgICBAaWYgKCRhbHBoYSA+IDAgYW5kICRhbHBoYSA8IDEpIHtcbiAgICAgICAgQHJldHVybiByZ2JhKCRjb2xvci12YXJpYWJsZSwgJGFscGhhKTtcbiAgICAgIH0gQGVsc2UgaWYgKCRhbHBoYSA9PSAxKSB7XG4gICAgICAgIEByZXR1cm4gJGNvbG9yLXZhcmlhYmxlO1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIEBlcnJvciBcIkFscGhhICgjeyRhbHBoYX0pIG11c3QgYmUgYSBudW1iZXJcIjtcbiAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgIEBlcnJvciBcIkNvbG9yICgjeyRjb2xvci12YXJpYWJsZX0pIGlzIG5vdCBhIFNhc3MgY29sb3JcIjtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBlcnJvciAnTm8gQ29sb3IgUGFsZXR0ZSBtb2RlIHNlbGVjdGVkIGluIHRoZW1lL3BhbGV0dGVzL3ByZWZlcmVuY2VzLnNjc3MnO1xuICB9XG59XG4iLCIvKlxuICBDU1MgNCBNb2RlXG4qL1xuJGNvbG9yLXBhbGV0dGUtbW9kZTogJ2Nzcy00JztcblxuXG4vKlxuICBTYXNzIE1vZGVcbiovXG4vLyBAaW1wb3J0ICdjb3JlJztcbi8vXG4vLyAkY29sb3ItcGFsZXR0ZS1tb2RlOiAnc2Fzcyc7XG4vL1xuLy8gLy8gSW1wb3J0IHRoZSBkZWZpbml0aW9ucyBvZiB0aGUgcGFsZXR0ZSB5b3Ugd2FudCB0byB1c2Vcbi8vIEBpbXBvcnQgJ3BhbGV0dGUtMS9kZWZpbml0aW9ucyc7XG4vLyAvLyBAaW1wb3J0ICdwYWxldHRlLTIvZGVmaW5pdGlvbnMnO1xuLy9cbi8vIC8vIEFzc2lnbiBhIHBhcnRpY3VsYXIgQ29sb3IgUGFsZXR0ZSB0byB0aGUgJ2Nob29zZW4tcGFsZXR0ZScgcG9pbnRlci5cbi8vIC8vICRjaG9vc2VuLXBhbGV0dGUgd2lsbCBiZSBhIFNhc3MgbWFwIHBvaW50aW5nIHRvIGFub3RoZXIgY29sb3IgcGFsZXR0ZSBTYXNzIG1hcFxuLy8gJGNob29zZW4tcGFsZXR0ZTogYnVpbGRTYXNzUGFsZXR0ZSgkcGFsZXR0ZS0xKTtcbi8vIC8vICRjaG9vc2VuLXBhbGV0dGU6IGJ1aWxkU2Fzc1BhbGV0dGUoJHBhbGV0dGUtMik7XG4iLCIvL2NvbG9yXG4udGV4dC1ibHVlLWxpZ2h0IHtcbiAgY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbGlnaHRcIil9O1xufVxuLnRleHQtYmx1ZS1tYWluIHtcbiAgY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbWFpblwiKX07XG59XG4udGV4dC1ibHVlLWRhcmsge1xuICBjb2xvcjogI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1kYXJrXCIpfTtcbn1cblxuLy9iYWNrZ3JvdW5kXG4uYmctZ3JleS1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImdyZXktbGlnaHRcIil9O1xufVxuLmJnLWdyZXktZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImdyZXktNVwiKX07XG59XG4uYmctYmx1ZS1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbGlnaHRcIil9O1xufVxuLmJnLWJsdWUtbWFpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbWFpblwiKX07XG59XG4uYmctYmx1ZS1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1kYXJrXCIpfTtcbn1cblxuLy90ZXh0XG4udGV4dC14cyB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbn1cbi50ZXh0LXNtIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn1cbi50ZXh0LWJhc2Uge1xuICBmb250LXNpemU6IDFyZW07XG59XG4udGV4dC1sZyB7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG59XG5cbi50ZXh0LXhsIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuXG4udGV4dC0yeGwge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLnRleHQtM3hsIHtcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xufVxuXG4uZm9udC1zZW1pYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uZm9udC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmNhcGl0YWxpemUge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmN1cnNvci1wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucm91bmRlZC14bCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5ib3JkZXItcHJpbWFyeS0xIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1tYWluXCIpfTtcbn1cblxuLmJvcmRlci1wcmltYXJ5LTIge1xuICBib3JkZXI6IDJweCBzb2xpZCAje3BhbGV0dGUtY29sb3IoXCJibHVlLW1haW5cIil9O1xufVxuXG4uY3VzdG9tLXNjcm9sbHtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xufVxuLmN1c3RvbS1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IC41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiZ3JleS1saWdodFwiKX07XG59XG5cblxuLmN1c3RvbS1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IC4zZW0gc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiZ3JleS01XCIpfTtcbn1cbiIsIkBpbXBvcnQgJ3NoYXJlZCc7XG5cbjpob3N0IHtcbiAgLy8gRGVmYXVsdCB2YXJpYWJsZXNcbiAgLS1wYWdlLXRpdGxlLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ2dyZXktOScpfTtcbiAgLS1wYWdlLXRleHQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignZ3JleS04Jyl9O1xuICAtLXNpZGUtaW1hZ2Utb3ZlcmxheTogI3twYWxldHRlLWNvbG9yKCdwcmltYXJ5JywgMC4xNSl9O1xuICAtLWJ1dHRvbi1saW5rLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ3ByaW1hcnknKX07XG4gIC0tcGFnZS1zcGFjaW5nOiAxMHB4O1xuICAtLWJ1dHRvbi1wYWRkaW5nOiA2cHggMjZweDtcbn1cblxuLnJlY292ZXItcGFzc3dvcmQtcGFnZSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuXG4gIC5sb2dpbi1iZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL0JHMi5wbmcpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuXG4gIC5mb3JtLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDgpO1xuXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKG1kKSB7XG4gICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiA0KTtcbiAgICB9XG5cbiAgICAucGFnZS10aXRsZSB7XG4gICAgICBjb2xvcjogdmFyKC0tcGFnZS10aXRsZS1jb2xvcik7XG4gICAgfVxuXG4gICAgLnBhZ2Utc3VidGl0bGUge1xuICAgICAgY29sb3I6IHZhcigtLXBhZ2UtdGV4dC1jb2xvcik7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuXG4gICAgLnJlY292ZXItcGFzc3dvcmQtZm9ybSB7XG4gICAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiA0KTtcblxuICAgICAgQGluY2x1ZGUgZm9ybS1ncm91cC1zdHlsZXMoKTtcblxuICAgICAgLmZvcm0tY2FsbC10by1hY3Rpb25zIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAzKTtcblxuICAgICAgICAuZm9ybS1hY3Rpb24ge1xuXG4gICAgICAgICAgJi50ZXh0LWxpbmsge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWJ1dHRvbi1saW5rLWNvbG9yKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oeHMpIHtcbiAgICAgICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnRleHQtbGluayB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucmVjb3Zlci1wYXNzd29yZC1idG4ge1xuICAgICAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IGF1dG87XG4gICAgICAgICAgQGluY2x1ZGUgYnV0dG9uKCk7XG4gICAgICAgICAgcGFkZGluZzogdmFyKC0tYnV0dG9uLXBhZGRpbmcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmltYWdlLXNlY3Rpb24ge1xuICAgIGNjLWltYWdlLXNoZWxsLnJlY292ZXItcGFzc3dvcmQtaW1hZ2Uge1xuICAgICAgLS1pbWFnZS1zaGVsbC1vdmVybGF5LWJhY2tncm91bmQ6IHZhcigtLXNpZGUtaW1hZ2Utb3ZlcmxheSk7XG4gICAgfVxuICB9XG59XG4iLCIvLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuICE9IG51bGwgYW5kICRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIGxhcmdlc3QgKGxhc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyBjYWxjdWxhdGVkIGFzIHRoZSBtaW5pbXVtIG9mIHRoZSBuZXh0IG9uZSBsZXNzIDAuMDJweFxuLy8gdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEByZXR1cm4gaWYoJG5leHQsIGJyZWFrcG9pbnQtbWluKCRuZXh0LCAkYnJlYWtwb2ludHMpIC0gLjAyLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiIsIkBtaXhpbiBmb3JtLWdyb3VwLXN0eWxlcygpIHtcbiAgLS1kZWZhdWx0LXNwYWNpbmc6IDEwcHg7XG4gIC0tZm9ybS1sYWJlbC1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdncmV5LTcnKX07XG4gIC0tZm9ybS1pbnB1dC1iYWNrZ3JvdW5kOiAje3BhbGV0dGUtY29sb3IoJ3doaXRlJyl9O1xuICAtLWZvcm0taW5wdXQtYm9yZGVyLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ2dyZXktNicsIDAuNDIpfTtcbiAgLS1mb3JtLWlucHV0LWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ2dyZXktOScpfTtcbiAgLS1mb3JtLWlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ2dyZXktNScpfTtcbiAgLS1mb3JtLWhlbHAtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignZ3JleS03Jyl9O1xuICAtLWZvcm0taW5wdXQtYWRkb25zLWJhY2tncm91bmQ6ICN7cGFsZXR0ZS1jb2xvcignc2Vjb25kYXJ5JywgMC4xNSl9O1xuICAtLWZvcm0taW5wdXQtYWRkb25zLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ3NlY29uZGFyeScpfTtcbiAgLS1mb3JtLWlucHV0LXN1Y2Nlc3MtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignc3VjY2VzcycpfTtcbiAgLS1mb3JtLWlucHV0LXN1Y2Nlc3MtYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKCdzdWNjZXNzJywgMC4xNSl9O1xuICAtLWZvcm0taW5wdXQtZXJyb3ItY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignZXJyb3InKX07XG4gIC0tZm9ybS1pbnB1dC1lcnJvci1iYWNrZ3JvdW5kOiAje3BhbGV0dGUtY29sb3IoJ2Vycm9yJywgMC4xNSl9O1xuICAtLWZvcm0tZGlzYWJsZWQtaW5wdXQtYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKCdncmV5LTInKX07XG4gIC0tZm9ybS1kaXNhYmxlZC1pbnB1dC1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdncmV5LTknKX07XG5cbiAgbGFiZWwge1xuICAgIGNvbG9yOiB2YXIoLS1mb3JtLWxhYmVsLWNvbG9yKTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAuZm9ybS1jb250cm9sIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtLWlucHV0LWJhY2tncm91bmQpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvcm0taW5wdXQtYm9yZGVyLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tZm9ybS1pbnB1dC1jb2xvcik7XG5cbiAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBjb2xvcjogdmFyKC0tZm9ybS1pbnB1dC1wbGFjZWhvbGRlci1jb2xvcik7XG4gICAgfVxuXG4gICAgJi5pcy12YWxpZCB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb3JtLWlucHV0LXN1Y2Nlc3MtY29sb3IpO1xuICAgIH1cblxuICAgICYuaXMtaW52YWxpZCB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb3JtLWlucHV0LWVycm9yLWNvbG9yKTtcbiAgICB9XG5cbiAgICAmLmRpc2FibGVkIHtcbiAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgIGNvbG9yOiB2YXIoLS1mb3JtLWRpc2FibGVkLWlucHV0LWNvbG9yKTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm0tZGlzYWJsZWQtaW5wdXQtYmFja2dyb3VuZCk7XG4gICAgfVxuICB9XG5cbiAgLmZvcm0tdGV4dCB7XG4gICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1kZWZhdWx0LXNwYWNpbmcpIC8gMik7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgJi5oZWxwLXRleHQge1xuICAgICAgY29sb3I6IHZhcigtLWZvcm0taGVscC1jb2xvcik7XG4gICAgfVxuICB9XG5cbiAgLmN1c3RvbS12YWxpZC1mZWVkYmFjayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9ybS1pbnB1dC1zdWNjZXNzLWJhY2tncm91bmQpO1xuICAgIGNvbG9yOiB2YXIoLS1mb3JtLWlucHV0LXN1Y2Nlc3MtY29sb3IpO1xuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tZGVmYXVsdC1zcGFjaW5nKSAvIDIpIHZhcigtLWRlZmF1bHQtc3BhY2luZyk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB9XG5cbiAgLmN1c3RvbS1pbnZhbGlkLWZlZWRiYWNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtLWlucHV0LWVycm9yLWJhY2tncm91bmQpO1xuICAgIGNvbG9yOiB2YXIoLS1mb3JtLWlucHV0LWVycm9yLWNvbG9yKTtcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLWRlZmF1bHQtc3BhY2luZykgLyAyKSB2YXIoLS1kZWZhdWx0LXNwYWNpbmcpO1xuICAgIGJvcmRlci1yYWRpdXM6ICRpbnB1dC1ib3JkZXItcmFkaXVzO1xuICB9XG5cbiAgLmlucHV0LWdyb3VwIHtcbiAgICAuaW5wdXQtZ3JvdXAtcHJlcGVuZCwgLmlucHV0LWdyb3VwLWFwcGVuZCB7XG4gICAgICAuaW5wdXQtZ3JvdXAtdGV4dCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm0taW5wdXQtYWRkb25zLWJhY2tncm91bmQpO1xuICAgICAgICBjb2xvcjogdmFyKC0tZm9ybS1pbnB1dC1hZGRvbnMtY29sb3IpO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb3JtLWlucHV0LWJvcmRlci1jb2xvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvLyBPdmVycmlkZSBCb290c3RyYXAgVmFyaWFibGVzXG4kaWNvbi1mb250LXBhdGg6ICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL2ZvbnRzL2Jvb3RzdHJhcC8nO1xuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICdOdW5pdG8nLCBzYW5zLXNlcmlmICFkZWZhdWx0O1xuXG4vLyBIZXJlIHlvdSBjYW4gcmVkZWZpbmUgZ2xvYmFsIHN0eWxlcyBmcm9tIEJvb3RzdHJhcFxuXG4vLyByZWRlZmluZSBpbnB1dHMgYm9yZGVyIHJhZGl1c1xuJGlucHV0LWJvcmRlci1yYWRpdXM6IDZweDtcblxuLy8geW91IGNhbiByZWRlZmluZSB0aGVzZSBjb2xvcnMgd2l0aCB5b3VyIGNob29zZW4gcGFsZXR0ZSBjb2xvcnNcbi8vICRwcmltYXJ5OiAjeW91cmNvbG9yO1xuLy8gJHNlY29uZGFyeTogI3lvdXJjb2xvcjtcbi8vICR0ZXJ0aWFyeTogI3lvdXJjb2xvcjtcblxuLy8gZm9yIHBhbGV0dGUgMTpcbiRwcmltYXJ5OiAjNDI4YmNhO1xuLy8gJHNlY29uZGFyeTogIzM4RDk5Nztcbi8vICR0ZXJ0aWFyeTogI2ZmYzIwMDtcblxuLy8gZm9yIHBhbGV0dGUgMjpcbi8vICRwcmltYXJ5OiAjOWUzNGRmO1xuLy8gJHNlY29uZGFyeTogIzhCRUREMztcbi8vICR0ZXJ0aWFyeTogI0ZGQUY4NDtcbiIsIkBpbXBvcnQgJ3BhbGV0dGVzL3NoYXJlZCc7XG5cbkBtaXhpbiBidXR0b24oKSB7XG4gIC8vIGNvbG9ycyB0aGF0IGNhbiBiZSByZWRlZmluZWQ6XG4gIC8vIC0tYnV0dG9uLWJhY2tncm91bmRcbiAgLy8gLS1idXR0b24tYm9yZGVyXG4gIC8vIC0tYnV0dG9uLWNvbG9yXG5cbiAgJGRlZmF1bHQtYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKCdwcmltYXJ5Jyl9OyAvLyAtLWJ1dHRvbi1iYWNrZ3JvdW5kXG4gICRkZWZhdWx0LWJvcmRlcjogI3twYWxldHRlLWNvbG9yKCdwcmltYXJ5Jyl9OyAvLyAtLWJ1dHRvbi1ib3JkZXJcbiAgJGRlZmF1bHQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignd2hpdGUnKX07IC8vIC0tYnV0dG9uLWNvbG9yXG5cbiAgJGRlZmF1bHQtaG92ZXItYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKCdwcmltYXJ5LWRhcmsnKX07IC8vIC0tYnV0dG9uLWhvdmVyLWJhY2tncm91bmRcbiAgJGRlZmF1bHQtaG92ZXItYm9yZGVyOiAje3BhbGV0dGUtY29sb3IoJ3ByaW1hcnktZGFyaycpfTsgLy8gLS1idXR0b24taG92ZXItYm9yZGVyXG4gICRkZWZhdWx0LWhvdmVyLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ3doaXRlJyl9OyAvLyAtLWJ1dHRvbi1ob3Zlci1jb2xvclxuXG4gICRkZWZhdWx0LWFjdGl2ZS1iYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24taG92ZXItYmFja2dyb3VuZCwgJGRlZmF1bHQtaG92ZXItYmFja2dyb3VuZCk7IC8vIC0tYnV0dG9uLWFjdGl2ZS1iYWNrZ3JvdW5kXG4gICRkZWZhdWx0LWFjdGl2ZS1ib3JkZXI6IHZhcigtLWJ1dHRvbi1ob3Zlci1ib3JkZXIsICRkZWZhdWx0LWhvdmVyLWJvcmRlcik7IC8vIC0tYnV0dG9uLWFjdGl2ZS1ib3JkZXJcbiAgJGRlZmF1bHQtYWN0aXZlLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItY29sb3IsICRkZWZhdWx0LWhvdmVyLWNvbG9yKTsgLy8gLS1idXR0b24tYWN0aXZlLWNvbG9yXG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQsICRkZWZhdWx0LWJhY2tncm91bmQpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ib3JkZXIsICRkZWZhdWx0LWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IsICRkZWZhdWx0LWNvbG9yKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC41cywgY29sb3IgLjVzLCBiYWNrZ3JvdW5kLWNvbG9yIC41cztcblxuICAmOmhvdmVyIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItYmFja2dyb3VuZCwgJGRlZmF1bHQtaG92ZXItYmFja2dyb3VuZCk7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1ib3JkZXIsICRkZWZhdWx0LWhvdmVyLWJvcmRlcik7XG4gICAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yLCAkZGVmYXVsdC1ob3Zlci1jb2xvcik7XG4gICAgfVxuICB9XG5cbiAgJjphY3RpdmUsXG4gICYuYWN0aXZlLFxuICAmOmZvY3VzLFxuICAmLmZvY3VzIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYWN0aXZlLWJhY2tncm91bmQsICRkZWZhdWx0LWFjdGl2ZS1iYWNrZ3JvdW5kKTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWFjdGl2ZS1ib3JkZXIsICRkZWZhdWx0LWFjdGl2ZS1ib3JkZXIpO1xuICAgICAgY29sb3I6IHZhcigtLWJ1dHRvbi1hY3RpdmUtY29sb3IsICRkZWZhdWx0LWFjdGl2ZS1jb2xvcik7XG4gICAgfVxuICB9XG5cbiAgJltkaXNhYmxlZF0ge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgb3BhY2l0eTogLjU7XG4gIH1cbn1cblxuQG1peGluIGJ1dHRvbi1vdXRsaW5lKCkge1xuICAvLyBjb2xvcnMgdGhhdCBjYW4gYmUgcmVkZWZpbmVkOlxuICAvLyAtLWJ1dHRvbi1iYWNrZ3JvdW5kXG4gIC8vIC0tYnV0dG9uLWJvcmRlclxuICAvLyAtLWJ1dHRvbi1jb2xvclxuXG4gICRkZWZhdWx0LWJhY2tncm91bmQ6ICN7cGFsZXR0ZS1jb2xvcignd2hpdGUnKX07IC8vIC0tYnV0dG9uLWJhY2tncm91bmRcbiAgJGRlZmF1bHQtYm9yZGVyOiAje3BhbGV0dGUtY29sb3IoJ2JsdWUtbWFpbicpfTsgLy8gLS1idXR0b24tYm9yZGVyXG4gICRkZWZhdWx0LWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ2JsdWUtbWFpbicpfTsgLy8gLS1idXR0b24tY29sb3JcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZCwgJGRlZmF1bHQtYmFja2dyb3VuZCk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWJvcmRlciwgJGRlZmF1bHQtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvciwgJGRlZmF1bHQtY29sb3IpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjVzLCBjb2xvciAuNXMsIGJhY2tncm91bmQtY29sb3IgLjVzO1xuXG4gICY6aG92ZXIge1xuICAgICY6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvciwgJGRlZmF1bHQtY29sb3IpO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tYm9yZGVyLCAkZGVmYXVsdC1ib3JkZXIpO1xuICAgICAgY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLCAkZGVmYXVsdC1iYWNrZ3JvdW5kKTtcbiAgICB9XG4gIH1cblxuICAmOmFjdGl2ZSxcbiAgJi5hY3RpdmUsXG4gICY6Zm9jdXMsXG4gICYuZm9jdXMge1xuICAgICY6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvciwgJGRlZmF1bHQtY29sb3IpO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tYm9yZGVyLCAkZGVmYXVsdC1ib3JkZXIpO1xuICAgICAgY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLCAkZGVmYXVsdC1iYWNrZ3JvdW5kKTtcbiAgICB9XG4gIH1cbiAgJltkaXNhYmxlZF0ge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgb3BhY2l0eTogLjU7XG4gIH1cbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetPasswordComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-reset-password",
            templateUrl: "./reset-password.component.html",
            styleUrls: ["./reset-password.component.scss"]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_core_validators_service__WEBPACK_IMPORTED_MODULE_4__["ValidatorsService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "yNiB":
    /*!********************************************************!*\
      !*** ./src/app/business/state/global-state.service.ts ***!
      \********************************************************/

    /*! exports provided: GlobalStateService */

    /***/
    function yNiB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GlobalStateService", function () {
        return GlobalStateService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/state.service */
      "E21u");

      var initialState = {
        userCompany: null
      };

      var GlobalStateService = /*#__PURE__*/function (_core_state_service__2) {
        _inherits(GlobalStateService, _core_state_service__2);

        var _super2 = _createSuper(GlobalStateService);

        function GlobalStateService() {
          var _this30;

          _classCallCheck(this, GlobalStateService);

          _this30 = _super2.call(this, initialState);
          _this30.userCompany$ = _this30.select(function (state) {
            return state.userCompany;
          });
          return _this30;
        }

        _createClass(GlobalStateService, [{
          key: "setUserCompany",
          value: function setUserCompany(userCompany) {
            this.setState({
              userCompany: userCompany
            });
          }
        }]);

        return GlobalStateService;
      }(_core_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"]);

      GlobalStateService.ɵfac = function GlobalStateService_Factory(t) {
        return new (t || GlobalStateService)();
      };

      GlobalStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: GlobalStateService,
        factory: GlobalStateService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalStateService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "z59Q":
    /*!******************************************************************!*\
      !*** ./src/app/core/side-menus/main-menu/main-menu.component.ts ***!
      \******************************************************************/

    /*! exports provided: MainMenuComponent */

    /***/
    function z59Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainMenuComponent", function () {
        return MainMenuComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_business_services_company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/business/services/company.service */
      "82aN");
      /* harmony import */


      var src_app_business_state_global_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/business/state/global-state.service */
      "yNiB");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");

      var _c0 = function _c0() {
        return ["active"];
      };

      var _c1 = function _c1() {
        return ["/general"];
      };

      var _c2 = function _c2() {
        return ["/company/customers"];
      };

      var _c3 = function _c3() {
        return ["/company/rates"];
      };

      var _c4 = function _c4() {
        return ["/company/users"];
      };

      var _c5 = function _c5() {
        return ["/company/profile"];
      };

      var _c6 = function _c6() {
        return ["/invoices"];
      };

      var _c7 = function _c7() {
        return ["/reports"];
      };

      var _c8 = function _c8() {
        return ["/search"];
      };

      var _c9 = function _c9() {
        return ["/administration/vehicle-templates"];
      };

      var _c10 = function _c10() {
        return ["/administration/vehicle-damage"];
      };

      var MainMenuComponent = /*#__PURE__*/function () {
        function MainMenuComponent(companyService, globalState) {
          var _this31 = this;

          _classCallCheck(this, MainMenuComponent);

          this.companyService = companyService;
          this.globalState = globalState;
          this.subs = [];
          this.companyName = "Loading...";
          var sub = this.globalState.userCompany$.subscribe(function (company) {
            if (company) {
              _this31.companyName = company.name;
            }
          });
          this.subs.push(sub);
        }

        _createClass(MainMenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.companyService.fetchCompany();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subs.forEach(function (sub) {
              return sub.unsubscribe();
            });
          }
        }]);

        return MainMenuComponent;
      }();

      MainMenuComponent.ɵfac = function MainMenuComponent_Factory(t) {
        return new (t || MainMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_business_services_company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_business_state_global_state_service__WEBPACK_IMPORTED_MODULE_2__["GlobalStateService"]));
      };

      MainMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MainMenuComponent,
        selectors: [["app-main-menu"]],
        decls: 83,
        vars: 75,
        consts: [[1, "w-full", "pt-2"], [1, "col-10", "mx-auto"], ["src", "/assets/logo.png", "alt", ""], [1, "side-menu-navigation", "nav", "flex-column"], [1, "menu-item", "nav-item", 3, "routerLinkActive"], [1, "menu-link"], [1, "menu-link", "nav-link", 2, "display", "flex", "padding-top", "14px", "padding-bottom", "14px", 3, "routerLinkActive", "routerLink"], ["svgIcon", "dashboards", 1, "menu-item-icon"], [1, "menu-item-title"], [1, "menu-item", "expandable-item", "nav-item", 3, "routerLinkActive"], [3, "expanded"], [1, "item-header-content"], [1, "menu-item-icon"], [1, "menu-sub-navigation", "nav", "flex-column"], [1, "menu-link", "nav-link", 3, "routerLinkActive", "routerLink"], ["svgIcon", "forms", 1, "menu-item-icon"], ["svgIcon", "charts", 1, "menu-item-icon"]],
        template: function MainMenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-expansion-panel", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-expansion-panel-header", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " business");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Customers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Rates");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Users");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "mat-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Invoices");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "mat-icon", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Reports");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-expansion-panel", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-expansion-panel-header", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Administration");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "ul", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Vehicle templates");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Vehicle damage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](40, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](41, _c0))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](42, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](43, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.companyName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](44, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](45, _c0))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](46, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](47, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](48, _c0))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](49, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](50, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](51, _c0))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](52, _c4));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](53, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](54, _c0))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](55, _c5));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](56, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](57, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](58, _c0))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](59, _c6));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](60, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](61, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](62, _c0))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](63, _c7));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](64, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](65, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](66, _c0))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](67, _c8));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](68, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](69, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](70, _c0))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](71, _c9));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](72, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](73, _c0))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](74, _c10));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelTitle"]],
        styles: ["[_nghost-%COMP%]   .side-menu-branding[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.show-branding[_nghost-%COMP%] {\n  --main-menu-branding-height: initial;\n}\n\n.show-branding[_nghost-%COMP%]   .side-menu-branding[_ngcontent-%COMP%] {\n  height: var(--main-menu-branding-height);\n  margin-bottom: calc(var(--main-menu-spacing) * 4);\n  display: flex;\n  align-items: center;\n  -webkit-padding-start: var(--main-menu-h-padding-start);\n          padding-inline-start: var(--main-menu-h-padding-start);\n}\n\n.show-branding[_nghost-%COMP%]   .side-menu-branding[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n\n.use-active-item-dot-decoration[_nghost-%COMP%] {\n  --decoration-color: var(--main-menu-active-color);\n  --decoration-size: 6px;\n  --decoration-padding: var(--main-menu-h-padding-start);\n}\n\n.use-active-item-dot-decoration[_nghost-%COMP%]   .menu-item.active[_ngcontent-%COMP%]   mat-expansion-panel-header.menu-link[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  background-color: var(--decoration-color, #333333);\n  width: var(--decoration-size, 6px);\n  height: var(--decoration-size, 6px);\n  border-radius: 50%;\n  top: calc((100% - var(--decoration-size)) / 2);\n  left: calc((var(--decoration-padding) - var(--decoration-size)) / 2);\n}\n\n.use-active-item-dot-decoration[_nghost-%COMP%]   .menu-item.active.expandable-item[_ngcontent-%COMP%]   mat-expansion-panel.mat-expanded[_ngcontent-%COMP%]   mat-expansion-panel-header.menu-link[_ngcontent-%COMP%]::before {\n  content: none;\n}\n\n.use-active-item-dot-decoration[_nghost-%COMP%]   .menu-link.active[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  background-color: var(--decoration-color, #333333);\n  width: var(--decoration-size, 6px);\n  height: var(--decoration-size, 6px);\n  border-radius: 50%;\n  top: calc((100% - var(--decoration-size)) / 2);\n  left: calc((var(--decoration-padding) - var(--decoration-size)) / 2);\n}\n\n.use-active-item-dot-decoration[_nghost-%COMP%]   .menu-sub-navigation[_ngcontent-%COMP%]   .menu-link.active[_ngcontent-%COMP%]::before {\n  left: calc((var(--main-menu-icon-size) - var(--decoration-size)) / 2);\n}\n\n.use-active-item-line-decoration[_nghost-%COMP%] {\n  --decoration-color: var(--main-menu-active-color);\n  --decoration-width: 5px;\n  --decoration-padding: var(--main-menu-h-padding-start);\n}\n\n.use-active-item-line-decoration[_nghost-%COMP%]   .menu-item.active[_ngcontent-%COMP%]   mat-expansion-panel-header.menu-link[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  background-color: var(--decoration-color, #333333);\n  width: var(--decoration-width, 5px);\n  height: 100%;\n}\n\n.use-active-item-line-decoration[_nghost-%COMP%]   .menu-item.active.expandable-item[_ngcontent-%COMP%]   mat-expansion-panel.mat-expanded[_ngcontent-%COMP%]   mat-expansion-panel-header.menu-link[_ngcontent-%COMP%]::before {\n  content: none;\n}\n\n.use-active-item-line-decoration[_nghost-%COMP%]   .menu-link.active[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  background-color: var(--decoration-color, #333333);\n  width: var(--decoration-width, 5px);\n  height: 100%;\n}\n\n.use-active-item-line-decoration[_nghost-%COMP%]   .menu-sub-navigation[_ngcontent-%COMP%]   .menu-link.active[_ngcontent-%COMP%]::before {\n  left: calc(var(--decoration-padding) * -1);\n}\n\n[_nghost-%COMP%] {\n  --main-menu-background: palette-color(\"grey-0\");\n  --main-menu-active-background: #333333;\n  --main-menu-color: palette-color(\"grey-4\");\n  --main-menu-active-color: #333333;\n  --main-menu-alt-color: #E6E6E6;\n  --main-menu-width: 300px;\n  --main-menu-padding: 35px;\n  --main-menu-spacing: 10px;\n  --main-menu-h-padding-start: var(--main-menu-padding);\n  --main-menu-h-padding-end: var(--main-menu-padding);\n  --main-menu-icon-size: calc(var(--main-menu-spacing) * 2);\n  --main-menu-expansion-indicator-width: 15px;\n}\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100%;\n  color: var(--main-menu-color);\n  background-color: var(--main-menu-background);\n}\n\n[_nghost-%COMP%]   .side-menu-navigation[_ngcontent-%COMP%] {\n  padding-top: calc(var(--main-menu-spacing) * 4);\n  padding-bottom: calc(var(--main-menu-spacing) * 4);\n}\n\n[_nghost-%COMP%]   .side-menu-navigation[_ngcontent-%COMP%]   .menu-sub-navigation[_ngcontent-%COMP%] {\n  padding-top: var(--main-menu-spacing);\n  padding-bottom: var(--main-menu-spacing);\n}\n\n[_nghost-%COMP%]   .side-menu-navigation[_ngcontent-%COMP%]   .menu-sub-navigation[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n[_nghost-%COMP%]   .side-menu-navigation[_ngcontent-%COMP%]   .menu-sub-navigation[_ngcontent-%COMP%]   .menu-link[_ngcontent-%COMP%] {\n  -webkit-padding-end: var(--main-menu-expansion-indicator-width);\n          padding-inline-end: var(--main-menu-expansion-indicator-width);\n}\n\n[_nghost-%COMP%]   .side-menu-navigation[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--main-menu-color);\n}\n\n[_nghost-%COMP%]   .side-menu-navigation[_ngcontent-%COMP%]   .menu-item.active[_ngcontent-%COMP%] {\n  color: var(--main-menu-active-color);\n}\n\n[_nghost-%COMP%]   .side-menu-navigation[_ngcontent-%COMP%]   .menu-item.disabled[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n}\n\n[_nghost-%COMP%]   .side-menu-navigation[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: var(--main-menu-spacing);\n}\n\n[_nghost-%COMP%]   .side-menu-navigation[_ngcontent-%COMP%]   .menu-item.spaced-item[_ngcontent-%COMP%] {\n  margin-bottom: calc(var(--main-menu-spacing) * 2);\n}\n\n[_nghost-%COMP%]   .side-menu-navigation[_ngcontent-%COMP%]   .menu-item.spaced-item[_ngcontent-%COMP%]:last-child {\n  margin-top: calc(var(--main-menu-spacing) * 2);\n  margin-bottom: 0px;\n}\n\n[_nghost-%COMP%]   .side-menu-navigation[_ngcontent-%COMP%]   .menu-item.expandable-item[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%] {\n  box-shadow: none;\n  border-radius: 0px;\n  background: none;\n  color: inherit;\n}\n\n[_nghost-%COMP%]   .side-menu-navigation[_ngcontent-%COMP%]   .menu-item.expandable-item[_ngcontent-%COMP%]   mat-expansion-panel.mat-expanded[_ngcontent-%COMP%] {\n  background-color: var(--main-menu-active-background);\n  color: var(--main-menu-color);\n}\n\n[_nghost-%COMP%]   .side-menu-navigation[_ngcontent-%COMP%]   .menu-item.expandable-item[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%] {\n  -webkit-padding-start: var(--main-menu-h-padding-start);\n          padding-inline-start: var(--main-menu-h-padding-start);\n  -webkit-padding-end: var(--main-menu-h-padding-end);\n          padding-inline-end: var(--main-menu-h-padding-end);\n  font-family: inherit;\n  font-size: inherit;\n  width: var(--main-menu-width);\n  background: transparent;\n}\n\n[_nghost-%COMP%]   .side-menu-navigation[_ngcontent-%COMP%]   .menu-item.expandable-item[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]:hover {\n  background: none;\n}\n\n[_nghost-%COMP%]   .side-menu-navigation[_ngcontent-%COMP%]   .menu-item.expandable-item[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   .item-header-content[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 28px;\n  -webkit-padding-end: var(--main-menu-spacing);\n          padding-inline-end: var(--main-menu-spacing);\n}\n\n[_nghost-%COMP%]   .side-menu-navigation[_ngcontent-%COMP%]   .menu-item.expandable-item[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   mat-panel-title[_ngcontent-%COMP%] {\n  color: inherit;\n  -webkit-margin-end: auto;\n          margin-inline-end: auto;\n}\n\n[_nghost-%COMP%]   .side-menu-navigation[_ngcontent-%COMP%]   .menu-item.expandable-item[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   mat-panel-description[_ngcontent-%COMP%] {\n  color: var(--main-menu-alt-color);\n  font-size: 14px;\n  line-height: var(--main-menu-icon-size);\n  margin-top: calc(var(--main-menu-spacing) / 2);\n  display: block;\n  -webkit-margin-end: auto;\n          margin-inline-end: auto;\n  width: 100%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n[_nghost-%COMP%]   .side-menu-navigation[_ngcontent-%COMP%]   .menu-item.expandable-item[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]     mat-expansion-panel-header .mat-content {\n  width: calc(100% - var(--main-menu-expansion-indicator-width));\n}\n\n[_nghost-%COMP%]   .side-menu-navigation[_ngcontent-%COMP%]   .menu-item.expandable-item[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]     mat-expansion-panel-header .mat-expansion-indicator {\n  display: flex;\n  width: var(--main-menu-expansion-indicator-width);\n  justify-content: center;\n}\n\n[_nghost-%COMP%]   .side-menu-navigation[_ngcontent-%COMP%]   .menu-item.expandable-item[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]     mat-expansion-panel-header .mat-expansion-indicator::after {\n  color: var(--main-menu-color);\n}\n\n[_nghost-%COMP%]   .side-menu-navigation[_ngcontent-%COMP%]   .menu-item.expandable-item[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]     .mat-expansion-panel-body {\n  -webkit-padding-start: var(--main-menu-h-padding-start);\n          padding-inline-start: var(--main-menu-h-padding-start);\n  -webkit-padding-end: var(--main-menu-h-padding-end);\n          padding-inline-end: var(--main-menu-h-padding-end);\n  padding-bottom: 0px;\n}\n\n[_nghost-%COMP%]   .side-menu-navigation[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   .menu-item-title[_ngcontent-%COMP%] {\n  display: block;\n  line-height: var(--main-menu-icon-size);\n  font-weight: 600;\n}\n\n[_nghost-%COMP%]   .side-menu-navigation[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   mat-icon.menu-item-icon[_ngcontent-%COMP%] {\n  width: var(--main-menu-icon-size);\n  height: var(--main-menu-icon-size);\n  -webkit-margin-end: var(--main-menu-spacing);\n          margin-inline-end: var(--main-menu-spacing);\n}\n\n[_nghost-%COMP%]   .side-menu-navigation[_ngcontent-%COMP%]   .menu-link[_ngcontent-%COMP%] {\n  position: relative;\n  color: inherit;\n}\n\n[_nghost-%COMP%]   .side-menu-navigation[_ngcontent-%COMP%]   .menu-link.disabled[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n\n[_nghost-%COMP%]   .side-menu-navigation[_ngcontent-%COMP%]   .menu-link.nav-link[_ngcontent-%COMP%] {\n  padding: calc(var(--main-menu-spacing) / 2) 0px;\n  -webkit-padding-start: var(--main-menu-h-padding-start);\n          padding-inline-start: var(--main-menu-h-padding-start);\n  -webkit-padding-end: var(--main-menu-h-padding-end);\n          padding-inline-end: var(--main-menu-h-padding-end);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9zaWRlLW1lbnVzL21haW4tbWVudS9zdHlsZXMvcGFydGlhbHMvbWVudS1icmFuZGluZy5zY3NzIiwic3JjL2FwcC9jb3JlL3NpZGUtbWVudXMvbWFpbi1tZW51L3N0eWxlcy9tYWluLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvc2lkZS1tZW51cy9tYWluLW1lbnUvc3R5bGVzL3BhcnRpYWxzL21lbnUtZG90LWRlY29yYXRpb24uc2NzcyIsInNyYy9hcHAvY29yZS9zaWRlLW1lbnVzL21haW4tbWVudS9zdHlsZXMvcGFydGlhbHMvbWVudS1saW5lLWRlY29yYXRpb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLGFBQUE7QUNESjs7QURLQTtFQUVFLG9DQUFBO0FDSEY7O0FES0U7RUFDRSx3Q0FBQTtFQUNBLGlEQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdURBQUE7VUFBQSxzREFBQTtBQ0hKOztBREtJO0VBQ0UsZUFBQTtBQ0hOOztBQ0pBO0VBQ0UsaURBQUE7RUFDQSxzQkFBQTtFQUNBLHNEQUFBO0FET0Y7O0FDRFE7RUFqQk4sV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0RBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFlUSw4Q0FBQTtFQUNBLG9FQUFBO0FET1Y7O0FDR2M7RUFDRSxhQUFBO0FERGhCOztBQ2FNO0VBNUNKLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtEQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBMENNLDhDQUFBO0VBQ0Esb0VBQUE7QURQUjs7QUNnQlE7RUFFRSxxRUFBQTtBRGZWOztBRW5DQTtFQUNFLGlEQUFBO0VBQ0EsdUJBQUE7RUFDQSxzREFBQTtBRnNDRjs7QUVoQ1E7RUFsQk4sV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrREFBQTtFQUNBLG1DQUFBO0VBQ0EsWUFBQTtBRnFERjs7QUU5QmM7RUFDRSxhQUFBO0FGZ0NoQjs7QUVwQk07RUExQ0osV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrREFBQTtFQUNBLG1DQUFBO0VBQ0EsWUFBQTtBRmlFRjs7QUVuQlE7RUFDRSwwQ0FBQTtBRnFCVjs7QUExRUE7RUFFRSwrQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsMENBQUE7RUFDQSxpQ0FBQTtFQUNBLDhCQUFBO0VBRUEsd0JBQUE7RUFHQSx5QkFBQTtFQUVBLHlCQUFBO0VBR0EscURBQUE7RUFDQSxtREFBQTtFQUVBLHlEQUFBO0VBRUEsMkNBQUE7QUFvRUY7O0FBakVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2Q0FBQTtBQW9FRjs7QUFsRUU7RUFDRSwrQ0FBQTtFQUNBLGtEQUFBO0FBb0VKOztBQWxFSTtFQUNFLHFDQUFBO0VBQ0Esd0NBQUE7QUFvRU47O0FBbEVNO0VBQ0UsZUFBQTtBQW9FUjs7QUFqRU07RUFDRSwrREFBQTtVQUFBLDhEQUFBO0FBbUVSOztBQS9ESTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtBQWlFTjs7QUEvRE07RUFDRSxvQ0FBQTtBQWlFUjs7QUE5RE07RUFDRSxtQkFBQTtBQWdFUjs7QUE3RE07RUFDRSx1Q0FBQTtBQStEUjs7QUE1RE07RUFDRSxpREFBQTtBQThEUjs7QUE1RFE7RUFDRSw4Q0FBQTtFQUNBLGtCQUFBO0FBOERWOztBQXhEUTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUVBLGNBQUE7QUF5RFY7O0FBdkRVO0VBQ0Usb0RBQUE7RUFHQSw2QkFBQTtBQXVEWjs7QUFwRFU7RUFLRSx1REFBQTtVQUFBLHNEQUFBO0VBQ0EsbURBQUE7VUFBQSxrREFBQTtFQUdBLG9CQUFBO0VBRUEsa0JBQUE7RUFDQSw2QkFBQTtFQUVBLHVCQUFBO0FBOENaOztBQTVDWTtFQUNFLGdCQUFBO0FBOENkOztBQTNDWTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDZDQUFBO1VBQUEsNENBQUE7QUE2Q2Q7O0FBMUNZO0VBRUUsY0FBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUEyQ2Q7O0FBeENZO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsdUNBQUE7RUFDQSw4Q0FBQTtFQUVBLGNBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsV0FBQTtFQUVBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQXdDZDs7QUFoQ2M7RUFDRSw4REFBQTtBQWtDaEI7O0FBL0JjO0VBQ0UsYUFBQTtFQUNBLGlEQUFBO0VBQ0EsdUJBQUE7QUFpQ2hCOztBQS9CZ0I7RUFDRSw2QkFBQTtBQWlDbEI7O0FBNUJZO0VBQ0UsdURBQUE7VUFBQSxzREFBQTtFQUNBLG1EQUFBO1VBQUEsa0RBQUE7RUFDQSxtQkFBQTtBQThCZDs7QUF4Qk07RUFDRSxjQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQkFBQTtBQTBCUjs7QUF2Qk07RUFDRSxpQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNENBQUE7VUFBQSwyQ0FBQTtBQXlCUjs7QUFyQkk7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUF1Qk47O0FBckJNO0VBQ0UsWUFBQTtBQXVCUjs7QUFuQk07RUFDRSwrQ0FBQTtFQUNBLHVEQUFBO1VBQUEsc0RBQUE7RUFDQSxtREFBQTtVQUFBLGtEQUFBO0FBcUJSIiwiZmlsZSI6InNyYy9hcHAvY29yZS9zaWRlLW1lbnVzL21haW4tbWVudS9zdHlsZXMvbWFpbi1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAvLyBCeSBkZWZhdWx0IGhpZGUgbWVudSBicmFuZGluZ1xuICAuc2lkZS1tZW51LWJyYW5kaW5nIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbjpob3N0KC5zaG93LWJyYW5kaW5nKSB7XG4gIC8vIEJyYW5kaW5nIHZhcmlhYmxlc1xuICAtLW1haW4tbWVudS1icmFuZGluZy1oZWlnaHQ6IGluaXRpYWw7XG5cbiAgLnNpZGUtbWVudS1icmFuZGluZyB7XG4gICAgaGVpZ2h0OiB2YXIoLS1tYWluLW1lbnUtYnJhbmRpbmctaGVpZ2h0KTtcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLW1haW4tbWVudS1zcGFjaW5nKSAqIDQpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tbWFpbi1tZW51LWgtcGFkZGluZy1zdGFydCk7XG5cbiAgICAuYnJhbmQtbG9nbyB7XG4gICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0ICcuL3BhcnRpYWxzL21lbnUtYnJhbmRpbmcnO1xuQGltcG9ydCAnLi9wYXJ0aWFscy9tZW51LWRvdC1kZWNvcmF0aW9uJztcbkBpbXBvcnQgJy4vcGFydGlhbHMvbWVudS1saW5lLWRlY29yYXRpb24nO1xuXG46aG9zdCB7XG4gIC8vIERlZmF1bHQgdmFsdWVzLiBUaGVzZSBtYXkgYmUgb3ZlcnJpZGRlbiBpbiB0aGUgY29tcG9uZW50J3MgcGFyZW50XG4gIC0tbWFpbi1tZW51LWJhY2tncm91bmQ6ICN7cGFsZXR0ZS1jb2xvcignZ3JleS0wJyl9O1xuICAtLW1haW4tbWVudS1hY3RpdmUtYmFja2dyb3VuZDogIzMzMzMzMztcbiAgLS1tYWluLW1lbnUtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignZ3JleS00Jyl9O1xuICAtLW1haW4tbWVudS1hY3RpdmUtY29sb3I6ICMzMzMzMzM7XG4gIC0tbWFpbi1tZW51LWFsdC1jb2xvcjogI0U2RTZFNjtcblxuICAtLW1haW4tbWVudS13aWR0aDogMzAwcHg7XG5cbiAgLy8gVXNlZCBtYWlubHkgYXQgdGhlIHN0YXJ0IGFuZCBlbmQgb2YgdGhlIG1lbnVcbiAgLS1tYWluLW1lbnUtcGFkZGluZzogMzVweDtcbiAgLy8gVXNlZCBtYWlubHkgdG8gc3BhY2UgaXRlbXMgaW5zaWRlIHRoZSBtZW51XG4gIC0tbWFpbi1tZW51LXNwYWNpbmc6IDEwcHg7XG5cbiAgLy8gRGVmYXVsdCBob3Jpem9udGFsIHN0YXJ0IGFuZCBlbmQgcGFkZGluZ3NcbiAgLS1tYWluLW1lbnUtaC1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1tYWluLW1lbnUtcGFkZGluZyk7XG4gIC0tbWFpbi1tZW51LWgtcGFkZGluZy1lbmQ6IHZhcigtLW1haW4tbWVudS1wYWRkaW5nKTtcblxuICAtLW1haW4tbWVudS1pY29uLXNpemU6IGNhbGModmFyKC0tbWFpbi1tZW51LXNwYWNpbmcpICogMik7XG5cbiAgLS1tYWluLW1lbnUtZXhwYW5zaW9uLWluZGljYXRvci13aWR0aDogMTVweDtcbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgY29sb3I6IHZhcigtLW1haW4tbWVudS1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tbWVudS1iYWNrZ3JvdW5kKTtcblxuICAuc2lkZS1tZW51LW5hdmlnYXRpb24ge1xuICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLW1haW4tbWVudS1zcGFjaW5nKSAqIDQpO1xuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLW1haW4tbWVudS1zcGFjaW5nKSAqIDQpO1xuXG4gICAgLm1lbnUtc3ViLW5hdmlnYXRpb24ge1xuICAgICAgcGFkZGluZy10b3A6IHZhcigtLW1haW4tbWVudS1zcGFjaW5nKTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1tYWluLW1lbnUtc3BhY2luZyk7XG5cbiAgICAgIC5tZW51LWl0ZW0ge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG5cbiAgICAgIC5tZW51LWxpbmsge1xuICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLW1haW4tbWVudS1leHBhbnNpb24taW5kaWNhdG9yLXdpZHRoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWVudS1pdGVtIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1tYWluLW1lbnUtY29sb3IpO1xuXG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYWluLW1lbnUtYWN0aXZlLWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgJi5kaXNhYmxlZCB7XG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICB9XG5cbiAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLW1haW4tbWVudS1zcGFjaW5nKTtcbiAgICAgIH1cblxuICAgICAgJi5zcGFjZWQtaXRlbSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tbWFpbi1tZW51LXNwYWNpbmcpICogMik7XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLW1haW4tbWVudS1zcGFjaW5nKSAqIDIpO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLmV4cGFuZGFibGUtaXRlbSB7XG4gICAgICAgIC8vIE92ZXJyaWRlIE1hdGVyaWFsIHN0eWxlc1xuICAgICAgICBtYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIC8vIFVzZSBwcm9wZXJ0eSBmcm9tIC5tZW51LWl0ZW1cbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcblxuICAgICAgICAgICYubWF0LWV4cGFuZGVkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tbWVudS1hY3RpdmUtYmFja2dyb3VuZCk7XG5cbiAgICAgICAgICAgIC8vIFdoZW4gdGhlIG1lbnUgaXMgZXhwYW5kZWQgYW5kIHRoZSBtZW51LWl0ZW0gaXMgYWN0aXZlLCBzZXQgZGVmYXVsdCBjb2xvciBhcyBvbmUgb2YgdGhlIHN1Yi1tZW51IGl0ZW1zIGlzIGFscmVhZHkgYWN0aXZlIGFzIHdlbGxcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tYWluLW1lbnUtY29sb3IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgICAgICAgICAgIC8vIFRvIG92ZXJyaWRlIE1hdGVyaWFsIGNvbXBvbmVudCBkeW5hbWljIGhlaWdodFxuICAgICAgICAgICAgLy8gaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAvLyBtaW4taGVpZ2h0OiA0NXB4O1xuXG4gICAgICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tbWFpbi1tZW51LWgtcGFkZGluZy1zdGFydCk7XG4gICAgICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLW1haW4tbWVudS1oLXBhZGRpbmctZW5kKTtcblxuICAgICAgICAgICAgLy8gVXNlIHByb3BlcnR5IGZyb20gLm1lbnUtaXRlbVxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgICAgICAvLyBVc2UgcHJvcGVydHkgZnJvbSAubWVudS1pdGVtXG4gICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgICAgICB3aWR0aDogdmFyKC0tbWFpbi1tZW51LXdpZHRoKTtcbiAgICAgICAgICAgIC8vIE92ZXJyaWRlIE1hdGVyaWFsIHN0eWxlcyAoLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLmNkay1wcm9ncmFtLWZvY3VzZWQpXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pdGVtLWhlYWRlci1jb250ZW50IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI4cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0tbWFpbi1tZW51LXNwYWNpbmcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXQtcGFuZWwtdGl0bGUge1xuICAgICAgICAgICAgICAvLyBVc2UgcHJvcGVydHkgZnJvbSAubWVudS1pdGVtXG4gICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgICBtYXJnaW4taW5saW5lLWVuZDogYXV0bztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWF0LXBhbmVsLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLW1haW4tbWVudS1hbHQtY29sb3IpO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1tYWluLW1lbnUtaWNvbi1zaXplKTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1tYWluLW1lbnUtc3BhY2luZykgLyAyKTtcblxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IGF1dG87XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAvLyBUZXh0IGVsbGlwc2lzXG4gICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gLy8gPG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuXG4gICAgICAgICAgLy8gTmVlZCB0byB1c2UgbmctZGVlcCBiZWNhdXNlIHRoZXNlIGVsZW1lbnRzIGFyZSBvdXRzaWRlIG91ciBjb21wb25lbnQncyBzY29wZS4gVGhleSBhcmUgaW5qZWN0ZWQgYW5kIHNjb3BlZFxuICAgICAgICAgIC8vIHRvIHRoZSA8bWF0LWV4cGFuc2lvbi1wYW5lbD4gZWxlbWVudFxuICAgICAgICAgIDo6bmctZGVlcCB7XG4gICAgICAgICAgICBtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gICAgICAgICAgICAgIC5tYXQtY29udGVudCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIHZhcigtLW1haW4tbWVudS1leHBhbnNpb24taW5kaWNhdG9yLXdpZHRoKSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAubWF0LWV4cGFuc2lvbi1pbmRpY2F0b3Ige1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IHZhcigtLW1haW4tbWVudS1leHBhbnNpb24taW5kaWNhdG9yLXdpZHRoKTtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tYWluLW1lbnUtY29sb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSAvLyA8bWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+XG5cbiAgICAgICAgICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWJvZHkge1xuICAgICAgICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tbWFpbi1tZW51LWgtcGFkZGluZy1zdGFydCk7XG4gICAgICAgICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0tbWFpbi1tZW51LWgtcGFkZGluZy1lbmQpO1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gLy8gOjpuZy1kZWVwXG4gICAgICAgIH0gLy8gPG1hdC1leHBhbnNpb24tcGFuZWw+XG4gICAgICB9IC8vIC5tZW51LWl0ZW0uZXhwYW5kYWJsZS1pdGVtXG5cbiAgICAgIC5tZW51LWl0ZW0tdGl0bGUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLW1haW4tbWVudS1pY29uLXNpemUpO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgfVxuXG4gICAgICBtYXQtaWNvbi5tZW51LWl0ZW0taWNvbiB7XG4gICAgICAgIHdpZHRoOiB2YXIoLS1tYWluLW1lbnUtaWNvbi1zaXplKTtcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1tYWluLW1lbnUtaWNvbi1zaXplKTtcbiAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IHZhcigtLW1haW4tbWVudS1zcGFjaW5nKTtcbiAgICAgIH1cbiAgICB9IC8vIC5tZW51LWl0ZW1cblxuICAgIC5tZW51LWxpbmsge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG5cbiAgICAgICYuZGlzYWJsZWQge1xuICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICB9XG5cbiAgICAgIC8vIE92ZXJyaWRlIEJvb3RzdHJhcCBzdHlsZXNcbiAgICAgICYubmF2LWxpbmsge1xuICAgICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLW1haW4tbWVudS1zcGFjaW5nKSAvIDIpIDBweDtcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLW1haW4tbWVudS1oLXBhZGRpbmctc3RhcnQpO1xuICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLW1haW4tbWVudS1oLXBhZGRpbmctZW5kKTtcbiAgICAgIH1cbiAgICB9IC8vIC5tZW51LWxpbmtcbiAgfSAvLyAuc2lkZS1tZW51LW5hdmlnYXRpb25cbn1cbiIsIkBtaXhpbiBkb3QtZGVjb3JhdGlvbigpIHtcbiAgJGRlZmF1bHQtY29sb3I6ICMzMzMzMzM7XG4gICRkZWZhdWx0LXNpemU6IDZweDtcblxuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWNvcmF0aW9uLWNvbG9yLCAkZGVmYXVsdC1jb2xvcik7XG4gIHdpZHRoOiB2YXIoLS1kZWNvcmF0aW9uLXNpemUsICRkZWZhdWx0LXNpemUpO1xuICBoZWlnaHQ6IHZhcigtLWRlY29yYXRpb24tc2l6ZSwgJGRlZmF1bHQtc2l6ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuOmhvc3QoLnVzZS1hY3RpdmUtaXRlbS1kb3QtZGVjb3JhdGlvbikge1xuICAtLWRlY29yYXRpb24tY29sb3I6IHZhcigtLW1haW4tbWVudS1hY3RpdmUtY29sb3IpO1xuICAtLWRlY29yYXRpb24tc2l6ZTogNnB4O1xuICAtLWRlY29yYXRpb24tcGFkZGluZzogdmFyKC0tbWFpbi1tZW51LWgtcGFkZGluZy1zdGFydCk7XG5cbiAgLm1lbnUtaXRlbSB7XG4gICAgJi5hY3RpdmUge1xuICAgICAgbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIubWVudS1saW5rIHtcbiAgICAgICAgLy8gRG90IGRlY29yYXRpb25cbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICBAaW5jbHVkZSBkb3QtZGVjb3JhdGlvbigpO1xuXG4gICAgICAgICAgdG9wOiBjYWxjKCgxMDAlIC0gdmFyKC0tZGVjb3JhdGlvbi1zaXplKSkgLyAyKTtcbiAgICAgICAgICBsZWZ0OiBjYWxjKCh2YXIoLS1kZWNvcmF0aW9uLXBhZGRpbmcpIC0gdmFyKC0tZGVjb3JhdGlvbi1zaXplKSkgLyAyKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLmV4cGFuZGFibGUtaXRlbSB7XG4gICAgICAgIG1hdC1leHBhbnNpb24tcGFuZWwge1xuICAgICAgICAgICYubWF0LWV4cGFuZGVkIHtcbiAgICAgICAgICAgIC8vIFdoZW4gdGhlIG1lbnUgaXMgZXhwYW5kZWQgYW5kIHRoZSBtZW51LWl0ZW0gaXMgYWN0aXZlLCBzZXQgZGVmYXVsdCBjb2xvciBhcyBvbmUgb2YgdGhlIHN1Yi1tZW51IGl0ZW1zIGlzIGFscmVhZHkgYWN0aXZlIGFzIHdlbGxcbiAgICAgICAgICAgIG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLm1lbnUtbGluayB7XG4gICAgICAgICAgICAgIC8vIFJlbW92ZSBEb3QgZGVjb3JhdGlvblxuICAgICAgICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG5vbmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWVudS1saW5rIHtcbiAgICAmLmFjdGl2ZSB7XG4gICAgICAvLyBEb3QgZGVjb3JhdGlvblxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgQGluY2x1ZGUgZG90LWRlY29yYXRpb24oKTtcblxuICAgICAgICB0b3A6IGNhbGMoKDEwMCUgLSB2YXIoLS1kZWNvcmF0aW9uLXNpemUpKSAvIDIpO1xuICAgICAgICBsZWZ0OiBjYWxjKCh2YXIoLS1kZWNvcmF0aW9uLXBhZGRpbmcpIC0gdmFyKC0tZGVjb3JhdGlvbi1zaXplKSkgLyAyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBEb3QgZGVjb3JhdGlvbiBmb3Igc3ViLW1lbnUgaXRlbXNcbiAgLm1lbnUtc3ViLW5hdmlnYXRpb24ge1xuICAgIC5tZW51LWxpbmsge1xuICAgICAgJi5hY3RpdmUge1xuICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgIC8vIEFsaWduZWQgYXQgdGhlIGNlbnRlciB3aXRoIC5tZW51LWl0ZW0taWNvbiBvZiB0aGUgcGFyZW50XG4gICAgICAgICAgbGVmdDogY2FsYygodmFyKC0tbWFpbi1tZW51LWljb24tc2l6ZSkgLSB2YXIoLS1kZWNvcmF0aW9uLXNpemUpKSAvIDIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAbWl4aW4gbGluZS1kZWNvcmF0aW9uKCkge1xuICAkZGVmYXVsdC1jb2xvcjogIzMzMzMzMztcbiAgJGRlZmF1bHQtd2lkdGg6IDVweDtcblxuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWNvcmF0aW9uLWNvbG9yLCAkZGVmYXVsdC1jb2xvcik7XG4gIHdpZHRoOiB2YXIoLS1kZWNvcmF0aW9uLXdpZHRoLCAkZGVmYXVsdC13aWR0aCk7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuOmhvc3QoLnVzZS1hY3RpdmUtaXRlbS1saW5lLWRlY29yYXRpb24pIHtcbiAgLS1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS1tYWluLW1lbnUtYWN0aXZlLWNvbG9yKTtcbiAgLS1kZWNvcmF0aW9uLXdpZHRoOiA1cHg7XG4gIC0tZGVjb3JhdGlvbi1wYWRkaW5nOiB2YXIoLS1tYWluLW1lbnUtaC1wYWRkaW5nLXN0YXJ0KTtcblxuICAubWVudS1pdGVtIHtcbiAgICAmLmFjdGl2ZSB7XG4gICAgICBtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5tZW51LWxpbmsge1xuICAgICAgICAvLyBMaW5lIGRlY29yYXRpb25cbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICBAaW5jbHVkZSBsaW5lLWRlY29yYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLmV4cGFuZGFibGUtaXRlbSB7XG4gICAgICAgIG1hdC1leHBhbnNpb24tcGFuZWwge1xuICAgICAgICAgICYubWF0LWV4cGFuZGVkIHtcbiAgICAgICAgICAgIC8vIFdoZW4gdGhlIG1lbnUgaXMgZXhwYW5kZWQgYW5kIHRoZSBtZW51LWl0ZW0gaXMgYWN0aXZlLCBzZXQgZGVmYXVsdCBjb2xvciBhcyBvbmUgb2YgdGhlIHN1Yi1tZW51IGl0ZW1zIGlzIGFscmVhZHkgYWN0aXZlIGFzIHdlbGxcbiAgICAgICAgICAgIG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLm1lbnUtbGluayB7XG4gICAgICAgICAgICAgIC8vIFJlbW92ZSBMaW5lIGRlY29yYXRpb25cbiAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1lbnUtbGluayB7XG4gICAgJi5hY3RpdmUge1xuICAgICAgLy8gTGluZSBkZWNvcmF0aW9uXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBAaW5jbHVkZSBsaW5lLWRlY29yYXRpb24oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBMaW5lIGRlY29yYXRpb24gZm9yIHN1Yi1tZW51IGl0ZW1zXG4gIC5tZW51LXN1Yi1uYXZpZ2F0aW9uIHtcbiAgICAubWVudS1saW5rIHtcbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICBsZWZ0OiBjYWxjKHZhcigtLWRlY29yYXRpb24tcGFkZGluZykgKiAtMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainMenuComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-main-menu",
            templateUrl: "./main-menu.component.html",
            styleUrls: ["./styles/main-menu.component.scss"]
          }]
        }], function () {
          return [{
            type: src_app_business_services_company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyService"]
          }, {
            type: src_app_business_state_global_state_service__WEBPACK_IMPORTED_MODULE_2__["GlobalStateService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zK/y":
    /*!**********************************************************!*\
      !*** ./src/app/shell/text-shell/text-shell.component.ts ***!
      \**********************************************************/

    /*! exports provided: TextShellComponent */

    /***/
    function zKY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextShellComponent", function () {
        return TextShellComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _config_app_shell_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../config/app-shell.config */
      "Kt/9");

      var TextShellComponent = /*#__PURE__*/function () {
        function TextShellComponent() {
          _classCallCheck(this, TextShellComponent);

          // To debug shell styles, change configuration in the assets/app-shell.config.json file
          this.debugMode = _config_app_shell_config__WEBPACK_IMPORTED_MODULE_1__["AppShellConfig"].settings && _config_app_shell_config__WEBPACK_IMPORTED_MODULE_1__["AppShellConfig"].settings.debug ? _config_app_shell_config__WEBPACK_IMPORTED_MODULE_1__["AppShellConfig"].settings.debug : false;
          this.textLoaded = false;
        }

        _createClass(TextShellComponent, [{
          key: "data",
          set: function set(val) {
            if (!this.debugMode) {
              this._data = val !== undefined && val !== null ? val : '';
            }

            if (this._data && this._data !== '') {
              this.textLoaded = true;
            } else {
              this.textLoaded = false;
            }
          }
        }]);

        return TextShellComponent;
      }();

      TextShellComponent.ɵfac = function TextShellComponent_Factory(t) {
        return new (t || TextShellComponent)();
      };

      TextShellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TextShellComponent,
        selectors: [["cc-text-shell"]],
        hostVars: 2,
        hostBindings: function TextShellComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-loaded", ctx.textLoaded);
          }
        },
        inputs: {
          data: "data"
        },
        decls: 2,
        vars: 1,
        template: function TextShellComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx._data);
          }
        },
        styles: ["[_nghost-%COMP%] {\n  --text-shell-background: transparent;\n  --text-shell-line-color: #EEE;\n  --text-shell-line-height: 16px;\n  --text-shell-line-gutter: 3px;\n  display: block;\n  position: relative;\n  color: transparent;\n  background-color: var(--text-shell-background);\n  transform-style: preserve-3d;\n  background-clip: content-box;\n}\n\n[_nghost-%COMP%]:not([animation]) {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 87% , var(--text-shell-background, #FFF) 87%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n[_nghost-%COMP%]:not([animation])[lines=\"1\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 91% , var(--text-shell-background, #FFF) 91%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n[_nghost-%COMP%]:not([animation])[lines=\"2\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 88% , var(--text-shell-background, #FFF) 88%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 40% , var(--text-shell-background, #FFF) 40%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n}\n\n[_nghost-%COMP%]:not([animation])[lines=\"3\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 95% , var(--text-shell-background, #FFF) 95%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 79% , var(--text-shell-background, #FFF) 79%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 43% , var(--text-shell-background, #FFF) 43%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n}\n\n[_nghost-%COMP%]:not([animation])[lines=\"4\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 91% , var(--text-shell-background, #FFF) 91%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 64% , var(--text-shell-background, #FFF) 64%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 60% , var(--text-shell-background, #FFF) 60%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 45% , var(--text-shell-background, #FFF) 45%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n}\n\n[_nghost-%COMP%]:not([animation])[lines=\"5\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 94% , var(--text-shell-background, #FFF) 94%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 67% , var(--text-shell-background, #FFF) 67%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 67% , var(--text-shell-background, #FFF) 67%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 69% , var(--text-shell-background, #FFF) 69%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 37% , var(--text-shell-background, #FFF) 37%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n}\n\n[_nghost-%COMP%]:not([animation])[lines=\"6\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 92% , var(--text-shell-background, #FFF) 92%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 68% , var(--text-shell-background, #FFF) 68%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 74% , var(--text-shell-background, #FFF) 74%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 76% , var(--text-shell-background, #FFF) 76%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 74% , var(--text-shell-background, #FFF) 74%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 43% , var(--text-shell-background, #FFF) 43%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n}\n\n[_nghost-%COMP%]:not([animation]).text-loaded {\n  background: none;\n  min-height: inherit;\n  color: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hlbGwvdGV4dC1zaGVsbC90ZXh0LXNoZWxsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGVsbC90ZXh0LXNoZWxsL21peGlucy9tYXNrZWQtbGluZXMtYmFja2dyb3VuZC5zY3NzIiwic3JjL2FwcC9zaGVsbC90ZXh0LXNoZWxsL21peGlucy9iYWNrZ3JvdW5kLWhlaWdodC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0Usb0NBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFFQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDhDQUFBO0VBQ0EsNEJBQUE7RUFHQSw0QkFBQTtBQU5GOztBQVVBO0VDTEksNEhBQUE7RUFDQSwwQkFBQTtFQUNBLHlEQUFBO0VBQ0EsNEJBQUE7RUNmRiw0R0FBQTtBRmVGOztBQVFJO0VDWEEsNEhBQUE7RUFDQSwwQkFBQTtFQUNBLHlEQUFBO0VBQ0EsNEJBQUE7RUNmRiw0R0FBQTtBRnNCRjs7QUFDSTtFQ2tCQSx1VkFBQTtFQUNBLGdQQUFBO0VBQ0EsOElBQUE7RUFDQSw0QkFBQTtFQzVDRiw0R0FBQTtBRjZCRjs7QUFOSTtFQ2tCQSxrakJBQUE7RUFDQSxzY0FBQTtFQUNBLG1PQUFBO0VBQ0EsNEJBQUE7RUM1Q0YsNEdBQUE7QUZvQ0Y7O0FBYkk7RUNrQkEsNndCQUFBO0VBQ0EsNHBCQUFBO0VBQ0Esd1RBQUE7RUFDQSw0QkFBQTtFQzVDRiw0R0FBQTtBRjJDRjs7QUFwQkk7RUNrQkEsdytCQUFBO0VBQ0EsazNCQUFBO0VBQ0EsNllBQUE7RUFDQSw0QkFBQTtFQzVDRiw0R0FBQTtBRmtERjs7QUEzQkk7RUNrQkEsbXNDQUFBO0VBQ0Esd2tDQUFBO0VBQ0Esa2VBQUE7RUFDQSw0QkFBQTtFQzVDRiw0R0FBQTtBRnlERjs7QUE3QkU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQStCSiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL3RleHQtc2hlbGwvdGV4dC1zaGVsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuL21peGlucy9tYXNrZWQtbGluZXMtYmFja2dyb3VuZFwiO1xuXG4kbWF4LWxpbmVzLWNvdW50OiA2O1xuXG46aG9zdCB7XG4gIC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6ICNFRUU7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyOiAzcHg7XG5cbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQpO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAvLyBUbyBmaXggMXB4IGxpbmUgbWlzYWxpZ25tZW50IGluIGNocm9tZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JhY2tncm91bmQtY2xpcFxuICAvLyAoSSBhbHNvIG5vdGljZWQgdGhhdCBpZiBJIHNldCB0aGUgY29sb3IgdG8gYSBzb2xpZCBjb2xvciBpbnN0ZWFkIG9mIGhhdmluZyBvcGFjaXR5LCB0aGUgaXNzdWUgZG9lc24ndCBoYXBwZW4pXG4gIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XG59XG5cbi8vIERlZmF1bHQgc3R5bGVzLiBXaGVuIG5vIGFuaW1hdGlvbiBhdHRyaWJ1dGUgaXMgcHJvdmlkZWRcbjpob3N0KDpub3QoW2FuaW1hdGlvbl0pKSB7XG4gIC8vIERlZmF1bHQgb25lIGxpbmUgdGV4dC1zaGVsbFxuICBAaW5jbHVkZSBtYXNrZWQtbGluZXMtYmFja2dyb3VuZCgxKTtcblxuICAvLyBTdXBwb3J0IGZvciBbbGluZXNdIGF0dHJpYnV0ZVxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoICRtYXgtbGluZXMtY291bnQge1xuICAgICZbbGluZXM9XCIjeyAkaSB9XCJdIHtcbiAgICAgIEBpbmNsdWRlIG1hc2tlZC1saW5lcy1iYWNrZ3JvdW5kKCRpKTtcbiAgICB9XG4gIH1cblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuL3V0aWxzXCI7XG5AaW1wb3J0IFwiLi9iYWNrZ3JvdW5kLWhlaWdodFwiO1xuXG5AbWl4aW4gbWFza2VkLWxpbmVzLWJhY2tncm91bmQoJGxpbmVzOiAxKSB7XG4gICRsaW5lLWhlaWdodDogdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gICRsaW5lLXNwYWNpbmc6IHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCk7XG4gICRiZy1jb2xvcjogdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKTtcbiAgJG1hc2stY29sb3I6IHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRik7XG4gICRsaW5lLWJnLWNvbG9yOiB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpO1xuICAkYmcteS1wb3M6IDBweDtcbiAgJHJhbmQtd2lkdGg6ICN7cmFuZG9tTnVtKDg1LCA5NSl9O1xuICAkYmctaW1hZ2U6ICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICcgKyAkYmctY29sb3IgKyAnICcgKyAkcmFuZC13aWR0aCArICclICwgJyArICRtYXNrLWNvbG9yICsgJyAnICsgJHJhbmQtd2lkdGggKyAnJSknO1xuICAkYmctcG9zaXRpb246ICcwICcgKyAkYmcteS1wb3M7XG4gICRiZy1zaXplOiAnMTAwJSAnICsgJGxpbmUtaGVpZ2h0O1xuXG4gIEBpZiAoJGxpbmVzID09IDEpIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAjeyRiZy1pbWFnZX07XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogI3skYmctcG9zaXRpb259O1xuICAgIGJhY2tncm91bmQtc2l6ZTogI3skYmctc2l6ZX07XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgfSBAZWxzZSB7XG4gICAgQGZvciAkaSBmcm9tIDIgdGhyb3VnaCAkbGluZXMge1xuICAgICAgLy8gQWRkIHNlcGFyYXRvciBiZXR3ZWVuIGxpbmVzXG4gICAgICAkYmctaW1hZ2U6IGFwcGVuZCgkYmctaW1hZ2UsIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI3skbGluZS1iZy1jb2xvcn0gMTAwJSwgI3skbGluZS1iZy1jb2xvcn0gMTAwJSkpO1xuICAgICAgLy8gVGhpcyBsaW5lYXItZ3JhZGllbnQgYXMgc2VwYXJhdG9yIHN0YXJ0cyBiZWxvdyB0aGUgbGFzdCBsaW5lLFxuICAgICAgLy8gc28gd2UgaGF2ZSB0byBhZGQgJGxpbmUtaGVpZ2h0IHRvIG91ciB5LXBvcyBwb2ludGVyXG4gICAgICAkYmcteS1wb3M6IGNhbGMoKCN7JGxpbmUtaGVpZ2h0fSAqICgjeyRpfSAtIDEpKSArICgjeyRsaW5lLXNwYWNpbmd9ICogKCN7JGl9IC0gMikpKTtcbiAgICAgICRiZy1wb3NpdGlvbjogYXBwZW5kKCRiZy1wb3NpdGlvbiwgJzAgJyArICRiZy15LXBvcyk7XG4gICAgICAkYmctc2l6ZTogYXBwZW5kKCRiZy1zaXplLCAnMTAwJSAnICsgJGxpbmUtc3BhY2luZyk7XG5cbiAgICAgIC8vIEFkZCBuZXcgbGluZVxuICAgICAgLy8gVGhlIGxhc3QgbGluZSBzaG91bGQgYmUgbmFycm93IHRoYW4gdGhlIG90aGVyc1xuICAgICAgQGlmICgkaSA9PSAkbGluZXMpIHtcbiAgICAgICAgJHJhbmQtd2lkdGg6ICN7cmFuZG9tTnVtKDMwLCA1MCl9O1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgICRyYW5kLXdpZHRoOiAje3JhbmRvbU51bSg2MCwgODApfTtcbiAgICAgIH1cbiAgICAgICRiZy1pbWFnZTogYXBwZW5kKCRiZy1pbWFnZSwgJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgJyArICRiZy1jb2xvciArICcgJyArICRyYW5kLXdpZHRoICsgJyUgLCAnICsgJG1hc2stY29sb3IgKyAnICcgKyAkcmFuZC13aWR0aCArICclKScpO1xuICAgICAgLy8gVGhpcyBuZXcgbGluZSBzdGFydHMgYmVsb3cgdGhlIHBydmlvdXNseSBhZGRlZCBzZXBhcmF0b3IsXG4gICAgICAvLyBzbyB3ZSBoYXZlIHRvIGFkZCAkbGluZS1zcGFjaW5nIHRvIG91ciB5LXBvcyBwb2ludGVyXG4gICAgICAkYmcteS1wb3M6IGNhbGMoKCN7JGxpbmUtaGVpZ2h0fSAqICgjeyRpfSAtIDEpKSArICgjeyRsaW5lLXNwYWNpbmd9ICogKCN7JGl9IC0gMSkpKTtcbiAgICAgICRiZy1wb3NpdGlvbjogYXBwZW5kKCRiZy1wb3NpdGlvbiwgJzAgJyArICRiZy15LXBvcyk7XG4gICAgICAkYmctc2l6ZTogYXBwZW5kKCRiZy1zaXplLCAnMTAwJSAnICsgJGxpbmUtaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAje3RvLXN0cmluZygkYmctaW1hZ2UsICcsICcpfTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAje3RvLXN0cmluZygkYmctcG9zaXRpb24sICcsICcpfTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6ICN7dG8tc3RyaW5nKCRiZy1zaXplLCAnLCAnKX07XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgfVxuXG4gIEBpbmNsdWRlIGJhY2tncm91bmQtaGVpZ2h0KG1pbi1oZWlnaHQsICRsaW5lcyk7XG59XG4iLCJAbWl4aW4gYmFja2dyb3VuZC1oZWlnaHQoJHByb3BlcnR5LCAkbGluZXM6IDEpIHtcbiAgJGxpbmUtaGVpZ2h0OiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgJGxpbmUtc3BhY2luZzogdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KTtcblxuICAjeyRwcm9wZXJ0eX06IGNhbGMoKCN7JGxpbmUtaGVpZ2h0fSAqICN7JGxpbmVzfSkgKyAoI3skbGluZS1zcGFjaW5nfSAqICgjeyRsaW5lc30gLSAxKSkpO1xufVxuIl19 */", "[animation=bouncing][_nghost-%COMP%] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 86% , var(--text-shell-background, #FFF) 86%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-name: animateLine;\n          animation-name: animateLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n@-webkit-keyframes animateLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px);\n  }\n}\n@keyframes animateLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px);\n  }\n}\n[animation=bouncing][lines=\"1\"][_nghost-%COMP%] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 85% , var(--text-shell-background, #FFF) 85%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-name: animateLine;\n          animation-name: animateLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n@keyframes animateLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px);\n  }\n}\n[animation=bouncing][lines=\"2\"][_nghost-%COMP%] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 90% , var(--text-shell-background, #FFF) 90%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 48% , var(--text-shell-background, #FFF) 48%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  -webkit-animation-name: animateMultiLine;\n          animation-name: animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n@-webkit-keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n[animation=bouncing][lines=\"3\"][_nghost-%COMP%] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 85% , var(--text-shell-background, #FFF) 85%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 65% , var(--text-shell-background, #FFF) 65%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 42% , var(--text-shell-background, #FFF) 42%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  -webkit-animation-name: animateMultiLine;\n          animation-name: animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n[animation=bouncing][lines=\"4\"][_nghost-%COMP%] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 87% , var(--text-shell-background, #FFF) 87%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 80% , var(--text-shell-background, #FFF) 80%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 68% , var(--text-shell-background, #FFF) 68%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 40% , var(--text-shell-background, #FFF) 40%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  -webkit-animation-name: animateMultiLine;\n          animation-name: animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n[animation=bouncing][lines=\"5\"][_nghost-%COMP%] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 87% , var(--text-shell-background, #FFF) 87%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 63% , var(--text-shell-background, #FFF) 63%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 70% , var(--text-shell-background, #FFF) 70%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 80% , var(--text-shell-background, #FFF) 80%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 34% , var(--text-shell-background, #FFF) 34%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  -webkit-animation-name: animateMultiLine;\n          animation-name: animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n[animation=bouncing][lines=\"6\"][_nghost-%COMP%] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 89% , var(--text-shell-background, #FFF) 89%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 68% , var(--text-shell-background, #FFF) 68%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 70% , var(--text-shell-background, #FFF) 70%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 76% , var(--text-shell-background, #FFF) 76%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 73% , var(--text-shell-background, #FFF) 73%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 47% , var(--text-shell-background, #FFF) 47%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  -webkit-animation-name: animateMultiLine;\n          animation-name: animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n[animation=bouncing].text-loaded[_nghost-%COMP%] {\n  background: none;\n  min-height: inherit;\n  color: inherit;\n  -webkit-animation: 0;\n          animation: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hlbGwvdGV4dC1zaGVsbC9wYXJ0aWFscy9ib3VuY2luZy1hbmltYXRpb24uc2NzcyIsInNyYy9hcHAvc2hlbGwvdGV4dC1zaGVsbC9taXhpbnMvYm91bmNpbmctbGluZXMtYmFja2dyb3VuZC5zY3NzIiwic3JjL2FwcC9zaGVsbC90ZXh0LXNoZWxsL21peGlucy9iYWNrZ3JvdW5kLWhlaWdodC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VDYUksNEhBQUE7RUFDQSwwQkFBQTtFQUNBLHlEQUFBO0VBQ0EsNEJBQUE7RUFFQSxzQ0FBQTtVQUFBLDhCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQ3BCRiw0R0FBQTtFRG9GQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0FEL0VGO0FDY0k7RUFDRTtJQUNFLHdEQUFBO0VEWk47RUNlSTtJQUNFLHlEQUFBO0VEYk47QUFDRjtBQ01JO0VBQ0U7SUFDRSx3REFBQTtFRFpOO0VDZUk7SUFDRSx5REFBQTtFRGJOO0FBQ0Y7QUFUSTtFQ09BLDRIQUFBO0VBQ0EsMEJBQUE7RUFDQSx5REFBQTtFQUNBLDRCQUFBO0VBRUEsc0NBQUE7VUFBQSw4QkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUNwQkYsNEdBQUE7RURvRkEscUNBQUE7VUFBQSw2QkFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBRDFERjtBQ1BJO0VBQ0U7SUFDRSx3REFBQTtFRFNOO0VDTkk7SUFDRSx5REFBQTtFRFFOO0FBQ0Y7QUE5Qkk7RUN3REEsdVZBQUE7RUFDQSxnUEFBQTtFQUNBLDhJQUFBO0VBQ0EsNEJBQUE7RUFFQSxzQ0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUNyRUYsNEdBQUE7RURvRkEscUNBQUE7VUFBQSw2QkFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBRHJDRjtBQ3FCSTtFQUNFO0lBQ0UsNElBQUE7RURuQk47RUNzQkk7SUFDRSw4SUFBQTtFRHBCTjtBQUNGO0FDYUk7RUFDRTtJQUNFLDRJQUFBO0VEbkJOO0VDc0JJO0lBQ0UsOElBQUE7RURwQk47QUFDRjtBQW5ESTtFQ3dEQSxrakJBQUE7RUFDQSxzY0FBQTtFQUNBLG1PQUFBO0VBQ0EsNEJBQUE7RUFFQSxzQ0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUNyRUYsNEdBQUE7RURvRkEscUNBQUE7VUFBQSw2QkFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBRGhCRjtBQ0FJO0VBQ0U7SUFDRSxnT0FBQTtFREVOO0VDQ0k7SUFDRSxtT0FBQTtFRENOO0FBQ0Y7QUF4RUk7RUN3REEsNndCQUFBO0VBQ0EsNHBCQUFBO0VBQ0Esd1RBQUE7RUFDQSw0QkFBQTtFQUVBLHNDQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtFQ3JFRiw0R0FBQTtFRG9GQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0FES0Y7QUNyQkk7RUFDRTtJQUNFLG9UQUFBO0VEdUJOO0VDcEJJO0lBQ0Usd1RBQUE7RURzQk47QUFDRjtBQTdGSTtFQ3dEQSx3K0JBQUE7RUFDQSxrM0JBQUE7RUFDQSw2WUFBQTtFQUNBLDRCQUFBO0VBRUEsc0NBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VDckVGLDRHQUFBO0VEb0ZBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUQwQkY7QUMxQ0k7RUFDRTtJQUNFLHdZQUFBO0VENENOO0VDekNJO0lBQ0UsNllBQUE7RUQyQ047QUFDRjtBQWxISTtFQ3dEQSxtc0NBQUE7RUFDQSx3a0NBQUE7RUFDQSxrZUFBQTtFQUNBLDRCQUFBO0VBRUEsc0NBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VDckVGLDRHQUFBO0VEb0ZBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUQrQ0Y7QUMvREk7RUFDRTtJQUNFLDRkQUFBO0VEaUVOO0VDOURJO0lBQ0Usa2VBQUE7RURnRU47QUFDRjtBQWxJRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBRUEsb0JBQUE7VUFBQSxZQUFBO0FBbUlKIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvdGV4dC1zaGVsbC9wYXJ0aWFscy9ib3VuY2luZy1hbmltYXRpb24uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi9taXhpbnMvYm91bmNpbmctbGluZXMtYmFja2dyb3VuZFwiO1xuXG4kbWF4LWxpbmVzLWNvdW50OiA2O1xuXG4vLyBCb3VuY2luZyBsaW5lIGxvYWRpbmcgYW5pbWF0aW9uXG46aG9zdChbYW5pbWF0aW9uPVwiYm91bmNpbmdcIl0pIHtcbiAgLy8gRGVmYXVsdCBvbmUgbGluZSB0ZXh0LXNoZWxsXG4gIEBpbmNsdWRlIGJvdW5jaW5nLWxpbmVzLWJhY2tncm91bmQoMSk7XG5cbiAgLy8gU3VwcG9ydCBmb3IgW2xpbmVzXSBhdHRyaWJ1dGVcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkbWF4LWxpbmVzLWNvdW50IHtcbiAgICAmW2xpbmVzPVwiI3sgJGkgfVwiXSB7XG4gICAgICBAaW5jbHVkZSBib3VuY2luZy1saW5lcy1iYWNrZ3JvdW5kKCRpKTtcbiAgICB9XG4gIH1cblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgLy8gMCBpcyB0aGUgZGVmYXVsdCB2YWx1ZSAoc2VlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTU5NjMwNDQvMTExNjk1OSlcbiAgICBhbmltYXRpb246IDA7XG4gIH1cbn0iLCJAaW1wb3J0IFwiLi91dGlsc1wiO1xuQGltcG9ydCBcIi4vYmFja2dyb3VuZC1oZWlnaHRcIjtcblxuQG1peGluIGJvdW5jaW5nLWxpbmVzLWJhY2tncm91bmQoJGxpbmVzOiAxKSB7XG4gICRsaW5lLWhlaWdodDogdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gICRsaW5lLXNwYWNpbmc6IHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCk7XG4gICRiZy1jb2xvcjogdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKTtcbiAgJG1hc2stY29sb3I6IHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRik7XG4gICRsaW5lLWJnLWNvbG9yOiB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpO1xuICAkYmcteS1wb3M6IDBweDtcbiAgJHJhbmQtd2lkdGg6ICN7cmFuZG9tTnVtKDg1LCA5NSl9O1xuICAkYmctaW1hZ2U6ICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICcgKyAkYmctY29sb3IgKyAnICcgKyAkcmFuZC13aWR0aCArICclICwgJyArICRtYXNrLWNvbG9yICsgJyAnICsgJHJhbmQtd2lkdGggKyAnJSknO1xuICAkYmctcG9zaXRpb246ICcwICcgKyAkYmcteS1wb3M7XG4gICRiZy1zaXplOiAnMTAwJSAnICsgJGxpbmUtaGVpZ2h0O1xuICAkYmctc2l6ZS1hbmltYXRpb24tZnJvbTogJzg1JSAnICsgJGxpbmUtaGVpZ2h0O1xuICAkYmctc2l6ZS1hbmltYXRpb24tdG86ICcxMDAlICcgKyAkbGluZS1oZWlnaHQ7XG5cbiAgQGlmICgkbGluZXMgPT0gMSkge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6ICN7JGJnLWltYWdlfTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAjeyRiZy1wb3NpdGlvbn07XG4gICAgYmFja2dyb3VuZC1zaXplOiAjeyRiZy1zaXplfTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRlTGluZTtcblxuICAgIEBrZXlmcmFtZXMgYW5pbWF0ZUxpbmUge1xuICAgICAgMCV7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogI3skYmctc2l6ZS1hbmltYXRpb24tZnJvbX07XG4gICAgICB9XG5cbiAgICAgIDEwMCV7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogI3skYmctc2l6ZS1hbmltYXRpb24tdG99O1xuICAgICAgfVxuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGZvciAkaSBmcm9tIDIgdGhyb3VnaCAkbGluZXMge1xuICAgICAgLy8gQWRkIHNlcGFyYXRvciBiZXR3ZWVuIGxpbmVzXG4gICAgICAkYmctaW1hZ2U6IGFwcGVuZCgkYmctaW1hZ2UsIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI3skbGluZS1iZy1jb2xvcn0gMTAwJSwgI3skbGluZS1iZy1jb2xvcn0gMTAwJSkpO1xuICAgICAgLy8gVGhpcyBsaW5lYXItZ3JhZGllbnQgYXMgc2VwYXJhdG9yIHN0YXJ0cyBiZWxvdyB0aGUgbGFzdCBsaW5lLFxuICAgICAgLy8gc28gd2UgaGF2ZSB0byBhZGQgJGxpbmUtaGVpZ2h0IHRvIG91ciB5LXBvcyBwb2ludGVyXG4gICAgICAkYmcteS1wb3M6IGNhbGMoKCN7JGxpbmUtaGVpZ2h0fSAqICgjeyRpfSAtIDEpKSArICgjeyRsaW5lLXNwYWNpbmd9ICogKCN7JGl9IC0gMikpKTtcbiAgICAgICRiZy1wb3NpdGlvbjogYXBwZW5kKCRiZy1wb3NpdGlvbiwgJzAgJyArICRiZy15LXBvcyk7XG4gICAgICAkYmctc2l6ZTogYXBwZW5kKCRiZy1zaXplLCAnMTAwJSAnICsgJGxpbmUtc3BhY2luZyk7XG4gICAgICAvLyBzZXBhcmF0b3IgbGluZXMgaGF2ZSB0aGUgc2FtZSBpbml0aWFsIGFuZCBlbmQgc3RhdGUsIHRodXMgbm8gYW5pbWF0aW9uIG9jY3Vyc1xuICAgICAgJGJnLXNpemUtYW5pbWF0aW9uLWZyb206IGFwcGVuZCgkYmctc2l6ZS1hbmltYXRpb24tZnJvbSwgJzEwMCUgJyArICRsaW5lLXNwYWNpbmcpO1xuICAgICAgJGJnLXNpemUtYW5pbWF0aW9uLXRvOiBhcHBlbmQoJGJnLXNpemUtYW5pbWF0aW9uLXRvLCAnMTAwJSAnICsgJGxpbmUtc3BhY2luZyk7XG5cbiAgICAgIC8vIEFkZCBuZXcgbGluZVxuICAgICAgLy8gVGhlIGxhc3QgbGluZSBzaG91bGQgYmUgbmFycm93IHRoYW4gdGhlIG90aGVyc1xuICAgICAgQGlmICgkaSA9PSAkbGluZXMpIHtcbiAgICAgICAgJHJhbmQtd2lkdGg6ICN7cmFuZG9tTnVtKDMwLCA1MCl9O1xuICAgICAgICAkYmctc2l6ZS1hbmltYXRpb24tZnJvbTogYXBwZW5kKCRiZy1zaXplLWFuaW1hdGlvbi1mcm9tLCAnNTUlICcgKyAkbGluZS1oZWlnaHQpO1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgICRyYW5kLXdpZHRoOiAje3JhbmRvbU51bSg2MCwgODApfTtcbiAgICAgICAgJGJnLXNpemUtYW5pbWF0aW9uLWZyb206IGFwcGVuZCgkYmctc2l6ZS1hbmltYXRpb24tZnJvbSwgJzc1JSAnICsgJGxpbmUtaGVpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgJGJnLWltYWdlOiBhcHBlbmQoJGJnLWltYWdlLCAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAnICsgJGJnLWNvbG9yICsgJyAnICsgJHJhbmQtd2lkdGggKyAnJSAsICcgKyAkbWFzay1jb2xvciArICcgJyArICRyYW5kLXdpZHRoICsgJyUpJyk7XG4gICAgICAvLyBUaGlzIG5ldyBsaW5lIHN0YXJ0cyBiZWxvdyB0aGUgcHJ2aW91c2x5IGFkZGVkIHNlcGFyYXRvcixcbiAgICAgIC8vIHNvIHdlIGhhdmUgdG8gYWRkICRsaW5lLXNwYWNpbmcgdG8gb3VyIHktcG9zIHBvaW50ZXJcbiAgICAgICRiZy15LXBvczogY2FsYygoI3skbGluZS1oZWlnaHR9ICogKCN7JGl9IC0gMSkpICsgKCN7JGxpbmUtc3BhY2luZ30gKiAoI3skaX0gLSAxKSkpO1xuICAgICAgJGJnLXBvc2l0aW9uOiBhcHBlbmQoJGJnLXBvc2l0aW9uLCAnMCAnICsgJGJnLXktcG9zKTtcbiAgICAgICRiZy1zaXplOiBhcHBlbmQoJGJnLXNpemUsICcxMDAlICcgKyAkbGluZS1oZWlnaHQpO1xuICAgICAgJGJnLXNpemUtYW5pbWF0aW9uLXRvOiBhcHBlbmQoJGJnLXNpemUtYW5pbWF0aW9uLXRvLCAnMTAwJSAnICsgJGxpbmUtaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAje3RvLXN0cmluZygkYmctaW1hZ2UsICcsICcpfTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAje3RvLXN0cmluZygkYmctcG9zaXRpb24sICcsICcpfTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6ICN7dG8tc3RyaW5nKCRiZy1zaXplLCAnLCAnKX07XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblxuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZS1yZXZlcnNlO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRlTXVsdGlMaW5lO1xuXG4gICAgQGtleWZyYW1lcyBhbmltYXRlTXVsdGlMaW5lIHtcbiAgICAgIDAle1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6ICN7dG8tc3RyaW5nKCRiZy1zaXplLWFuaW1hdGlvbi1mcm9tLCAnLCAnKX07XG4gICAgICB9XG5cbiAgICAgIDEwMCV7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogI3t0by1zdHJpbmcoJGJnLXNpemUtYW5pbWF0aW9uLXRvLCAnLCAnKX07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQGluY2x1ZGUgYmFja2dyb3VuZC1oZWlnaHQobWluLWhlaWdodCwgJGxpbmVzKTtcblxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xufVxuIiwiQG1peGluIGJhY2tncm91bmQtaGVpZ2h0KCRwcm9wZXJ0eSwgJGxpbmVzOiAxKSB7XG4gICRsaW5lLWhlaWdodDogdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gICRsaW5lLXNwYWNpbmc6IHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCk7XG5cbiAgI3skcHJvcGVydHl9OiBjYWxjKCgjeyRsaW5lLWhlaWdodH0gKiAjeyRsaW5lc30pICsgKCN7JGxpbmUtc3BhY2luZ30gKiAoI3skbGluZXN9IC0gMSkpKTtcbn1cbiJdfQ== */", "[animation=gradient][_nghost-%COMP%] {\n  --text-shell-background: #FFF;\n  --text-shell-line-color: transparent !important;\n  --text-shell-animation-background: #EEE;\n  --text-shell-animation-color: #DDD;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n[animation=gradient][_nghost-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: linear-gradient(to right, var(--text-shell-animation-background) 8%, var(--text-shell-animation-color) 18%, var(--text-shell-animation-background) 33%);\n  background-size: 800px 104px;\n  -webkit-animation: animateBackground 2s ease-in-out infinite;\n          animation: animateBackground 2s ease-in-out infinite;\n}\n@-webkit-keyframes animateBackground {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n@keyframes animateBackground {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n[animation=gradient][_nghost-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 92% , var(--text-shell-background, #FFF) 92%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n[animation=gradient][lines=\"1\"][_nghost-%COMP%] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n[animation=gradient][lines=\"1\"][_nghost-%COMP%]::after {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 86% , var(--text-shell-background, #FFF) 86%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n[animation=gradient][lines=\"2\"][_nghost-%COMP%] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n}\n[animation=gradient][lines=\"2\"][_nghost-%COMP%]::after {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 90% , var(--text-shell-background, #FFF) 90%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 44% , var(--text-shell-background, #FFF) 44%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n}\n[animation=gradient][lines=\"3\"][_nghost-%COMP%] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n}\n[animation=gradient][lines=\"3\"][_nghost-%COMP%]::after {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 93% , var(--text-shell-background, #FFF) 93%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 76% , var(--text-shell-background, #FFF) 76%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 34% , var(--text-shell-background, #FFF) 34%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n}\n[animation=gradient][lines=\"4\"][_nghost-%COMP%] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n}\n[animation=gradient][lines=\"4\"][_nghost-%COMP%]::after {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 92% , var(--text-shell-background, #FFF) 92%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 72% , var(--text-shell-background, #FFF) 72%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 72% , var(--text-shell-background, #FFF) 72%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 49% , var(--text-shell-background, #FFF) 49%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n}\n[animation=gradient][lines=\"5\"][_nghost-%COMP%] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n}\n[animation=gradient][lines=\"5\"][_nghost-%COMP%]::after {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 85% , var(--text-shell-background, #FFF) 85%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 64% , var(--text-shell-background, #FFF) 64%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 75% , var(--text-shell-background, #FFF) 75%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 79% , var(--text-shell-background, #FFF) 79%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 33% , var(--text-shell-background, #FFF) 33%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n}\n[animation=gradient][lines=\"6\"][_nghost-%COMP%] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n}\n[animation=gradient][lines=\"6\"][_nghost-%COMP%]::after {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 85% , var(--text-shell-background, #FFF) 85%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 67% , var(--text-shell-background, #FFF) 67%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 76% , var(--text-shell-background, #FFF) 76%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 80% , var(--text-shell-background, #FFF) 80%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 76% , var(--text-shell-background, #FFF) 76%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 33% , var(--text-shell-background, #FFF) 33%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n}\n[animation=gradient].text-loaded[_nghost-%COMP%] {\n  background: none;\n  min-height: inherit;\n  color: inherit;\n}\n[animation=gradient].text-loaded[_nghost-%COMP%]::before, [animation=gradient].text-loaded[_nghost-%COMP%]::after {\n  background: none;\n  -webkit-animation: 0;\n          animation: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hlbGwvdGV4dC1zaGVsbC9wYXJ0aWFscy9ncmFkaWVudC1hbmltYXRpb24uc2NzcyIsInNyYy9hcHAvc2hlbGwvdGV4dC1zaGVsbC9taXhpbnMvYmFja2dyb3VuZC1oZWlnaHQuc2NzcyIsInNyYy9hcHAvc2hlbGwvdGV4dC1zaGVsbC9taXhpbnMvbWFza2VkLWxpbmVzLWJhY2tncm91bmQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLDZCQUFBO0VBQ0EsK0NBQUE7RUFDQSx1Q0FBQTtFQUNBLGtDQUFBO0VDTkEsNEdBQUE7QURFRjtBQVdFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLG1LQUNFO0VBQ0YsNEJBQUE7RUFDQSw0REFBQTtVQUFBLG9EQUFBO0FBVko7QUFhRTtFQUNFO0lBQ0UsNkJBQUE7RUFYSjtFQWNFO0lBQ0UsNEJBQUE7RUFaSjtBQUNGO0FBS0U7RUFDRTtJQUNFLDZCQUFBO0VBWEo7RUFjRTtJQUNFLDRCQUFBO0VBWko7QUFDRjtBQWdCRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUUvQkEsNEhBQUE7RUFDQSwwQkFBQTtFQUNBLHlEQUFBO0VBQ0EsNEJBQUE7RURmRiw0R0FBQTtBRGtDRjtBQWlCSTtFQ25ERiw0R0FBQTtBRHFDRjtBQWtCTTtFRTNDRiw0SEFBQTtFQUNBLDBCQUFBO0VBQ0EseURBQUE7RUFDQSw0QkFBQTtFRGZGLDRHQUFBO0FENENGO0FBT0k7RUNuREYsNEdBQUE7QUQrQ0Y7QUFRTTtFRWRGLHVWQUFBO0VBQ0EsZ1BBQUE7RUFDQSw4SUFBQTtFQUNBLDRCQUFBO0VENUNGLDRHQUFBO0FEc0RGO0FBSEk7RUNuREYsNEdBQUE7QUR5REY7QUFGTTtFRWRGLGtqQkFBQTtFQUNBLHNjQUFBO0VBQ0EsbU9BQUE7RUFDQSw0QkFBQTtFRDVDRiw0R0FBQTtBRGdFRjtBQWJJO0VDbkRGLDRHQUFBO0FEbUVGO0FBWk07RUVkRiw2d0JBQUE7RUFDQSw0cEJBQUE7RUFDQSx3VEFBQTtFQUNBLDRCQUFBO0VENUNGLDRHQUFBO0FEMEVGO0FBdkJJO0VDbkRGLDRHQUFBO0FENkVGO0FBdEJNO0VFZEYsdytCQUFBO0VBQ0EsazNCQUFBO0VBQ0EsNllBQUE7RUFDQSw0QkFBQTtFRDVDRiw0R0FBQTtBRG9GRjtBQWpDSTtFQ25ERiw0R0FBQTtBRHVGRjtBQWhDTTtFRWRGLG1zQ0FBQTtFQUNBLHdrQ0FBQTtFQUNBLGtlQUFBO0VBQ0EsNEJBQUE7RUQ1Q0YsNEdBQUE7QUQ4RkY7QUFqQ0U7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQW1DSjtBQWpDSTtFQUVFLGdCQUFBO0VBQ0Esb0JBQUE7VUFBQSxZQUFBO0FBa0NOIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvdGV4dC1zaGVsbC9wYXJ0aWFscy9ncmFkaWVudC1hbmltYXRpb24uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi9taXhpbnMvYmFja2dyb3VuZC1oZWlnaHRcIjtcbkBpbXBvcnQgXCIuLi9taXhpbnMvbWFza2VkLWxpbmVzLWJhY2tncm91bmRcIjtcblxuJG1heC1saW5lcy1jb3VudDogNjtcblxuLy8gQmFja2dyb3VuZCBncmFkaWVudCBiZW5lYXRoIG1hc2tlZCBsaW5lc1xuOmhvc3QoW2FuaW1hdGlvbj1cImdyYWRpZW50XCJdKSB7XG4gIC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kOiAjRkZGO1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1iYWNrZ3JvdW5kOiAjRUVFO1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWNvbG9yOiAjREREO1xuXG5cbiAgLy8gQ2FsY3VsYXRlIGRlZmF1bHQgaGVpZ2h0IGZvciAxIGxpbmVcbiAgQGluY2x1ZGUgYmFja2dyb3VuZC1oZWlnaHQobWluLWhlaWdodCwgMSk7XG5cbiAgLy8gVGhlIGFuaW1hdGlvbiB0aGF0IGdvZXMgYmVuZWF0aCB0aGUgbWFza3NcbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZDpcbiAgICAgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1hbmltYXRpb24tYmFja2dyb3VuZCkgOCUsIHZhcigtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWNvbG9yKSAxOCUsIHZhcigtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQpIDMzJSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiA4MDBweCAxMDRweDtcbiAgICBhbmltYXRpb246IGFuaW1hdGVCYWNrZ3JvdW5kIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICB9XG5cbiAgQGtleWZyYW1lcyBhbmltYXRlQmFja2dyb3VuZCB7XG4gICAgMCV7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDY4cHggMFxuICAgIH1cblxuICAgIDEwMCV7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0NjhweCAwXG4gICAgfVxuICB9XG5cbiAgLy8gVGhlIG1hc2tzXG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG5cbiAgICAvLyBEZWZhdWx0IG9uZSBsaW5lIHRleHQtc2hlbGxcbiAgICBAaW5jbHVkZSBtYXNrZWQtbGluZXMtYmFja2dyb3VuZCgxKTtcbiAgfVxuXG4gIC8vIFN1cHBvcnQgZm9yIFtsaW5lc10gYXR0cmlidXRlXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJG1heC1saW5lcy1jb3VudCB7XG4gICAgJltsaW5lcz1cIiN7ICRpIH1cIl0ge1xuICAgICAgLy8gQ2FsY3VsYXRlIGRlZmF1bHQgaGVpZ2h0IGZvciAkaSBsaW5lc1xuICAgICAgQGluY2x1ZGUgYmFja2dyb3VuZC1oZWlnaHQobWluLWhlaWdodCwgJGkpO1xuXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIEBpbmNsdWRlIG1hc2tlZC1saW5lcy1iYWNrZ3JvdW5kKCRpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG5cbiAgICAmOjpiZWZvcmUsXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGFuaW1hdGlvbjogMDtcbiAgICB9XG4gIH1cbn0iLCJAbWl4aW4gYmFja2dyb3VuZC1oZWlnaHQoJHByb3BlcnR5LCAkbGluZXM6IDEpIHtcbiAgJGxpbmUtaGVpZ2h0OiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgJGxpbmUtc3BhY2luZzogdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KTtcblxuICAjeyRwcm9wZXJ0eX06IGNhbGMoKCN7JGxpbmUtaGVpZ2h0fSAqICN7JGxpbmVzfSkgKyAoI3skbGluZS1zcGFjaW5nfSAqICgjeyRsaW5lc30gLSAxKSkpO1xufVxuIiwiQGltcG9ydCBcIi4vdXRpbHNcIjtcbkBpbXBvcnQgXCIuL2JhY2tncm91bmQtaGVpZ2h0XCI7XG5cbkBtaXhpbiBtYXNrZWQtbGluZXMtYmFja2dyb3VuZCgkbGluZXM6IDEpIHtcbiAgJGxpbmUtaGVpZ2h0OiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgJGxpbmUtc3BhY2luZzogdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KTtcbiAgJGJnLWNvbG9yOiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpO1xuICAkbWFzay1jb2xvcjogdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKTtcbiAgJGxpbmUtYmctY29sb3I6IHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRik7XG4gICRiZy15LXBvczogMHB4O1xuICAkcmFuZC13aWR0aDogI3tyYW5kb21OdW0oODUsIDk1KX07XG4gICRiZy1pbWFnZTogJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgJyArICRiZy1jb2xvciArICcgJyArICRyYW5kLXdpZHRoICsgJyUgLCAnICsgJG1hc2stY29sb3IgKyAnICcgKyAkcmFuZC13aWR0aCArICclKSc7XG4gICRiZy1wb3NpdGlvbjogJzAgJyArICRiZy15LXBvcztcbiAgJGJnLXNpemU6ICcxMDAlICcgKyAkbGluZS1oZWlnaHQ7XG5cbiAgQGlmICgkbGluZXMgPT0gMSkge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6ICN7JGJnLWltYWdlfTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAjeyRiZy1wb3NpdGlvbn07XG4gICAgYmFja2dyb3VuZC1zaXplOiAjeyRiZy1zaXplfTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB9IEBlbHNlIHtcbiAgICBAZm9yICRpIGZyb20gMiB0aHJvdWdoICRsaW5lcyB7XG4gICAgICAvLyBBZGQgc2VwYXJhdG9yIGJldHdlZW4gbGluZXNcbiAgICAgICRiZy1pbWFnZTogYXBwZW5kKCRiZy1pbWFnZSwgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjeyRsaW5lLWJnLWNvbG9yfSAxMDAlLCAjeyRsaW5lLWJnLWNvbG9yfSAxMDAlKSk7XG4gICAgICAvLyBUaGlzIGxpbmVhci1ncmFkaWVudCBhcyBzZXBhcmF0b3Igc3RhcnRzIGJlbG93IHRoZSBsYXN0IGxpbmUsXG4gICAgICAvLyBzbyB3ZSBoYXZlIHRvIGFkZCAkbGluZS1oZWlnaHQgdG8gb3VyIHktcG9zIHBvaW50ZXJcbiAgICAgICRiZy15LXBvczogY2FsYygoI3skbGluZS1oZWlnaHR9ICogKCN7JGl9IC0gMSkpICsgKCN7JGxpbmUtc3BhY2luZ30gKiAoI3skaX0gLSAyKSkpO1xuICAgICAgJGJnLXBvc2l0aW9uOiBhcHBlbmQoJGJnLXBvc2l0aW9uLCAnMCAnICsgJGJnLXktcG9zKTtcbiAgICAgICRiZy1zaXplOiBhcHBlbmQoJGJnLXNpemUsICcxMDAlICcgKyAkbGluZS1zcGFjaW5nKTtcblxuICAgICAgLy8gQWRkIG5ldyBsaW5lXG4gICAgICAvLyBUaGUgbGFzdCBsaW5lIHNob3VsZCBiZSBuYXJyb3cgdGhhbiB0aGUgb3RoZXJzXG4gICAgICBAaWYgKCRpID09ICRsaW5lcykge1xuICAgICAgICAkcmFuZC13aWR0aDogI3tyYW5kb21OdW0oMzAsIDUwKX07XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgJHJhbmQtd2lkdGg6ICN7cmFuZG9tTnVtKDYwLCA4MCl9O1xuICAgICAgfVxuICAgICAgJGJnLWltYWdlOiBhcHBlbmQoJGJnLWltYWdlLCAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAnICsgJGJnLWNvbG9yICsgJyAnICsgJHJhbmQtd2lkdGggKyAnJSAsICcgKyAkbWFzay1jb2xvciArICcgJyArICRyYW5kLXdpZHRoICsgJyUpJyk7XG4gICAgICAvLyBUaGlzIG5ldyBsaW5lIHN0YXJ0cyBiZWxvdyB0aGUgcHJ2aW91c2x5IGFkZGVkIHNlcGFyYXRvcixcbiAgICAgIC8vIHNvIHdlIGhhdmUgdG8gYWRkICRsaW5lLXNwYWNpbmcgdG8gb3VyIHktcG9zIHBvaW50ZXJcbiAgICAgICRiZy15LXBvczogY2FsYygoI3skbGluZS1oZWlnaHR9ICogKCN7JGl9IC0gMSkpICsgKCN7JGxpbmUtc3BhY2luZ30gKiAoI3skaX0gLSAxKSkpO1xuICAgICAgJGJnLXBvc2l0aW9uOiBhcHBlbmQoJGJnLXBvc2l0aW9uLCAnMCAnICsgJGJnLXktcG9zKTtcbiAgICAgICRiZy1zaXplOiBhcHBlbmQoJGJnLXNpemUsICcxMDAlICcgKyAkbGluZS1oZWlnaHQpO1xuICAgIH1cblxuICAgIGJhY2tncm91bmQtaW1hZ2U6ICN7dG8tc3RyaW5nKCRiZy1pbWFnZSwgJywgJyl9O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246ICN7dG8tc3RyaW5nKCRiZy1wb3NpdGlvbiwgJywgJyl9O1xuICAgIGJhY2tncm91bmQtc2l6ZTogI3t0by1zdHJpbmcoJGJnLXNpemUsICcsICcpfTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB9XG5cbiAgQGluY2x1ZGUgYmFja2dyb3VuZC1oZWlnaHQobWluLWhlaWdodCwgJGxpbmVzKTtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextShellComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'cc-text-shell',
            templateUrl: './text-shell.component.html',
            styleUrls: ['./text-shell.component.scss', // Partial styles
            './partials/bouncing-animation.scss', './partials/gradient-animation.scss']
          }]
        }], function () {
          return [];
        }, {
          textLoaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.text-loaded']
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1"); // import 'hammerjs';


      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      document.addEventListener('DOMContentLoaded', function () {
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
          return console.error(err);
        });
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map