(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reports-reports-module"], {
    /***/
    "38VU":
    /*!**************************************************************!*\
      !*** ./src/app/shared/notifications/notification.service.ts ***!
      \**************************************************************/

    /*! exports provided: NotificationService */

    /***/
    function VU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationService", function () {
        return NotificationService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _notification_template_notification_template_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../notification-template/notification-template.component */
      "MQQr");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");

      var NotificationService = /*#__PURE__*/function () {
        function NotificationService(snackBar) {
          _classCallCheck(this, NotificationService);

          this.snackBar = snackBar;
        }

        _createClass(NotificationService, [{
          key: "success",
          value: function success() {
            var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Action successfully";
            this.showNotification(msg, "success", "check-circle");
          }
        }, {
          key: "error",
          value: function error() {
            var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Action failed";
            this.showNotification(msg, "danger", "exclamation-triangle");
          }
        }, {
          key: "info",
          value: function info(msg) {
            this.showNotification(msg, "info", "info");
          }
        }, {
          key: "warning",
          value: function warning(msg) {
            this.showNotification(msg, "warning", "info");
          }
        }, {
          key: "showNotification",
          value: function showNotification() {
            var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Missed message";
            var type = arguments.length > 1 ? arguments[1] : undefined;
            var icon = arguments.length > 2 ? arguments[2] : undefined;
            // for more info about Angular Material snackBar check: https://material.angular.io/components/snack-bar/overview
            this.mySnackBarRef = this.snackBar.openFromComponent(_notification_template_notification_template_component__WEBPACK_IMPORTED_MODULE_1__["NotificationTemplateComponent"], {
              data: {
                message: msg,
                icon: icon,
                type: type,
                dismissible: true
              },
              duration: type !== "success" ? 6000 : 3000,
              horizontalPosition: "right",
              verticalPosition: "bottom",
              panelClass: ["notification-wrapper"]
            }); // this is to be able to close it from the NotificationComponent

            this.mySnackBarRef.instance.snackBarRef = this.mySnackBarRef;
          }
        }]);

        return NotificationService;
      }();

      NotificationService.ɵfac = function NotificationService_Factory(t) {
        return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]));
      };

      NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NotificationService,
        factory: NotificationService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], function () {
          return [{
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "RaVz":
    /*!***************************************************!*\
      !*** ./src/app/business/services/user.service.ts ***!
      \***************************************************/

    /*! exports provided: UserService */

    /***/
    function RaVz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var UserService = /*#__PURE__*/function () {
        function UserService(http) {
          _classCallCheck(this, UserService);

          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
          this.users = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        }

        _createClass(UserService, [{
          key: "fetchUsers",
          value: function fetchUsers() {
            var _this = this;

            return new Promise(function (resolve, reject) {
              _this.http.get("".concat(_this.baseUrl, "/users/admin")).subscribe(function (data) {
                _this.users.next(data);

                resolve(data);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "getUserAuth",
          value: function getUserAuth() {
            return this.http.get("".concat(this.baseUrl, "/users/me"));
          }
        }, {
          key: "saveUser",
          value: function saveUser(body) {
            var _this2 = this;

            return this.http.post("".concat(this.baseUrl, "/users/admin"), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              _this2.fetchUsers();

              return res;
            }));
          }
        }, {
          key: "updateUser",
          value: function updateUser(body, id) {
            var _this3 = this;

            var isAdmin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            var url = isAdmin ? "".concat(this.baseUrl, "/users/admin/").concat(id) : "".concat(this.baseUrl, "/users/me");
            return this.http.put(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              _this3.fetchUsers();

              return res;
            }));
          }
        }, {
          key: "deleteUser",
          value: function deleteUser(id) {
            var _this4 = this;

            return this.http["delete"]("".concat(this.baseUrl, "/users/admin/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              _this4.fetchUsers();

              return res;
            }));
          }
        }, {
          key: "changePassword",
          value: function changePassword(body) {
            return this.http.post("".concat(this.baseUrl, "/users/me/changePassword"), body);
          }
        }]);

        return UserService;
      }();

      UserService.ɵfac = function UserService_Factory(t) {
        return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
      };

      UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UserService,
        factory: UserService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAGK":
    /*!**********************************************!*\
      !*** ./src/app/reports/reports.component.ts ***!
      \**********************************************/

    /*! exports provided: ReportsComponent */

    /***/
    function ZAGK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportsComponent", function () {
        return ReportsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! date-fns */
      "b/SL");
      /* harmony import */


      var _business_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../business/services/user.service */
      "RaVz");
      /* harmony import */


      var _business_services_company_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../business/services/company.service */
      "82aN");
      /* harmony import */


      var _shared_notifications_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../shared/notifications/notification.service */
      "38VU");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      function ReportsComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 50);
        }
      }

      function ReportsComponent_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Data from ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 2, ctx_r1.report == null ? null : ctx_r1.report.formatDateFrom, "MM/dd/yyyy"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 5, ctx_r1.report == null ? null : ctx_r1.report.formatDateTo, "MM/dd/yyyy"));
        }
      }

      function ReportsComponent_option_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Select date...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ReportsComponent_option_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var date_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", date_r20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, date_r20, "MM/dd/yyyy"), " ");
        }
      }

      function ReportsComponent_option_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Select driver...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ReportsComponent_option_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var driver_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", driver_r21.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, driver_r21.first_name), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, driver_r21.last_name), "");
        }
      }

      function ReportsComponent_th_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ReportsComponent_td_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, item_r22.date, "MM/dd/yyyy"));
        }
      }

      function ReportsComponent_th_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invoice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ReportsComponent_td_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r23.number);
        }
      }

      function ReportsComponent_th_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ship from");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ReportsComponent_td_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (item_r24.ship_from == null ? null : item_r24.ship_from.name) || (item_r24.quick_ship_from == null ? null : item_r24.quick_ship_from.name), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", (item_r24.ship_from == null ? null : item_r24.ship_from.city == null ? null : item_r24.ship_from.city.name) || (item_r24.quick_ship_from == null ? null : item_r24.quick_ship_from.city == null ? null : item_r24.quick_ship_from.city.name), ", ", (item_r24.ship_from == null ? null : item_r24.ship_from.city == null ? null : item_r24.ship_from.city.state_code) || (item_r24.quick_ship_from == null ? null : item_r24.quick_ship_from.city == null ? null : item_r24.quick_ship_from.city.state_code), " ");
        }
      }

      function ReportsComponent_th_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ship to");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ReportsComponent_td_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (item_r25.ship_to == null ? null : item_r25.ship_to.name) || (item_r25.quick_ship_to == null ? null : item_r25.quick_ship_to.name), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", (item_r25.ship_to == null ? null : item_r25.ship_to.city == null ? null : item_r25.ship_to.city.name) || (item_r25.quick_ship_to == null ? null : item_r25.quick_ship_to.city == null ? null : item_r25.quick_ship_to.city.name), ", ", (item_r25.ship_to == null ? null : item_r25.ship_to.city == null ? null : item_r25.ship_to.city.state_code) || (item_r25.quick_ship_to == null ? null : item_r25.quick_ship_to.city == null ? null : item_r25.quick_ship_to.city.state_code), " ");
        }
      }

      function ReportsComponent_th_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ReportsComponent_td_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, item_r26.total));
        }
      }

      function ReportsComponent_tr_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 39);
        }
      }

      function ReportsComponent_tr_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 40);
        }
      }

      function ReportsComponent_div_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No results");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ReportsComponent_div_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sub total:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Driver commission:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Driver commission amount:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Total units:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Weight(kg):");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Total:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, ctx_r19.report == null ? null : ctx_r19.report.subTotal));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("%", ctx_r19.report == null ? null : ctx_r19.report.driver.commission, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 8, ctx_r19.report == null ? null : ctx_r19.report.driverCommissionAmount));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r19.report == null ? null : ctx_r19.report.units);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r19.report == null ? null : ctx_r19.report.weight);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 10, ctx_r19.report == null ? null : ctx_r19.report.total));
        }
      }

      var ReportsComponent = /*#__PURE__*/function () {
        function ReportsComponent(userService, companyService, notificationService) {
          var _this5 = this;

          _classCallCheck(this, ReportsComponent);

          this.userService = userService;
          this.companyService = companyService;
          this.notificationService = notificationService;
          this.subscriptions = [];
          this.displayedColumns = ["date", "invoice", "ship_from", "ship_to", "amount"];
          this.pageSizeOptions = [12, 24, 50, 100];
          this.dateRange = "week";
          this.dates = [];
          this.loading = false;
          this.items = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]([]);
          var sub = this.userService.users.subscribe(function (data) {
            _this5.users = data;
          });
          this.subscriptions.push(sub);
        }

        _createClass(ReportsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.userService.fetchUsers();
            this.setDates();
          }
        }, {
          key: "setDates",
          value: function setDates() {
            this.dates = [];
            var sinceDay;

            if (this.dateRange === "week") {
              sinceDay = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["previousMonday"])(new Date());

              for (var i = 0; i < 30; i++) {
                this.dates.push(Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["addWeeks"])(sinceDay, -i));
              }
            } else {
              sinceDay = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["startOfMonth"])(new Date());

              for (var _i = 0; _i < 24; _i++) {
                this.dates.push(Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["addMonths"])(sinceDay, -_i));
              }
            }

            this.selectedDate = null;
          }
        }, {
          key: "onSelectDriver",
          value: function onSelectDriver(event) {
            this.selectedDriver = this.users.find(function (user) {
              return user.id === event.target.value;
            });
            this.getReport();
          }
        }, {
          key: "onSelectDate",
          value: function onSelectDate(event) {
            this.selectedDate = new Date(event.target.value);
            this.getReport();
          }
        }, {
          key: "onDateRangeSelect",
          value: function onDateRangeSelect(event) {
            this.dateRange = event.target.value;
            this.setDates();
          }
        }, {
          key: "getReport",
          value: function getReport() {
            var _this6 = this;

            if (!this.selectedDriver || !this.selectedDate) return;
            var dateFrom = this.selectedDate.toISOString();
            var dateTo = this.dateRange === "week" ? Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["addWeeks"])(this.selectedDate, 1).toISOString() : Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["addMonths"])(this.selectedDate, 1).toISOString();
            this.loading = true;
            this.companyService.getReport(this.selectedDriver.id, dateFrom, dateTo).subscribe(function (data) {
              _this6.report = data;
              _this6.items.data = data.invoices;
              _this6.loading = false;
            }, function (err) {
              _this6.loading = false;

              _this6.notificationService.error("Unexpected error");
            });
          }
        }, {
          key: "getReportPdf",
          value: function getReportPdf() {
            if (!this.selectedDriver || !this.selectedDate) return;
            var dateFrom = this.selectedDate.toISOString();
            var dateTo = this.dateRange === "week" ? Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["addWeeks"])(this.selectedDate, 1).toISOString() : Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["addMonths"])(this.selectedDate, 1).toISOString();
            this.companyService.getReportPdf(this.selectedDriver, dateFrom, dateTo);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.items.sort = this.sort;
            this.items.paginator = this.paginator;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.forEach(function (sub) {
              return sub.unsubscribe();
            });
          }
        }]);

        return ReportsComponent;
      }();

      ReportsComponent.ɵfac = function ReportsComponent_Factory(t) {
        return new (t || ReportsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_business_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_business_services_company_service__WEBPACK_IMPORTED_MODULE_6__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_notifications_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]));
      };

      ReportsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ReportsComponent,
        selectors: [["app-reports"]],
        viewQuery: function ReportsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 53,
        vars: 12,
        consts: [[1, "px-2", "px-md-5", "py-3", "position-relative"], ["class", "loader", 4, "ngIf"], [1, "d-flex", "flex-wrap", "justify-content-between", "col-12", "align-items-end", "mb-4"], [1, "text-dark", "content-title"], ["class", "content-sub-title w-100 d-block mb-2", 4, "ngIf"], [1, "flex-grow-1", "d-flex", "flex-wrap", "justify-content-between"], [1, "d-none", "d-md-block", "flex-grow-1"], [1, "col-5", "col-sm-3", "col-md-2", "px-0", "pr-md-1", "mt-2", "mt-md-0"], [1, "custom-select-wrapper"], [1, "custom-select", "form-control", 3, "change"], ["value", "week"], ["value", "month"], ["svgIcon", "half-arrow-down", 1, "half-arrow-icon"], [1, "col-6", "col-sm-5", "col-md-4", "px-0", "px-md-1", "mt-2", "mt-md-0"], ["selected", "", "disabled", "", "value", "", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-9", "col-sm-6", "col-md-4", "px-0", "px-md-1", "mt-2", "mt-md-0"], [1, "btn", "btn-primary", "mt-2", "mt-md-0", 3, "disabled", "click"], [1, "row"], [1, "col-12", "table-wrapper", "table-responsive"], ["mat-table", "", "matSort", "", 1, "table", "table-borderless", "table-striped", 3, "dataSource"], ["matColumnDef", "date"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "invoice"], ["matColumnDef", "ship_from"], ["matColumnDef", "ship_to"], ["matColumnDef", "amount"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "table-width py-2 bg-grey-light text-center mt-n3", 4, "ngIf"], ["class", "w-100 bg-grey-light p-4 rounded-lg mb-4", 4, "ngIf"], [1, "loader"], [3, "diameter"], [1, "content-sub-title", "w-100", "d-block", "mb-2"], ["selected", "", "disabled", "", "value", ""], [3, "value"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], [1, "table-width", "py-2", "bg-grey-light", "text-center", "mt-n3"], [1, "w-100", "bg-grey-light", "p-4", "rounded-lg", "mb-4"], [1, "col-8", "text-right"], [1, "col-4", "text-right"], [1, "col-12", "border", "border-secondary", "my-2", 2, "opacity", "0.25"], [1, "row", "font-bold"]],
        template: function ReportsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReportsComponent_div_1_Template, 2, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Reports");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ReportsComponent_span_6_Template, 9, 8, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ReportsComponent_Template_select_change_11_listener($event) {
              return ctx.onDateRangeSelect($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Weekly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Monthly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mat-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ReportsComponent_Template_select_change_19_listener($event) {
              return ctx.onSelectDate($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ReportsComponent_option_20_Template, 2, 0, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ReportsComponent_option_21_Template, 3, 5, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ReportsComponent_Template_select_change_25_listener($event) {
              return ctx.onSelectDriver($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ReportsComponent_option_26_Template, 2, 0, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ReportsComponent_option_27_Template, 5, 7, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_Template_button_click_29_listener() {
              return ctx.getReportPdf();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "PDF");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "table", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](34, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ReportsComponent_th_35_Template, 2, 0, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ReportsComponent_td_36_Template, 3, 4, "td", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](37, 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ReportsComponent_th_38_Template, 2, 0, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ReportsComponent_td_39_Template, 2, 1, "td", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](40, 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ReportsComponent_th_41_Template, 2, 0, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ReportsComponent_td_42_Template, 4, 3, "td", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](43, 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ReportsComponent_th_44_Template, 2, 0, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ReportsComponent_td_45_Template, 4, 3, "td", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](46, 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ReportsComponent_th_47_Template, 2, 0, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, ReportsComponent_td_48_Template, 3, 3, "td", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, ReportsComponent_tr_49_Template, 1, 0, "tr", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ReportsComponent_tr_50_Template, 1, 0, "tr", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, ReportsComponent_div_51_Template, 2, 0, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, ReportsComponent_div_52_Template, 35, 12, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.report);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.selectedDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dates);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.selectedDriver);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.items.data.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.items);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.items.data.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.items.data.length);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_x"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatSpinner"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CurrencyPipe"]],
        styles: [".text-blue-light[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-light-rgb));\n}\n.text-blue-main[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-main-rgb));\n}\n.text-blue-dark[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-dark-rgb));\n}\n.bg-grey-light[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-grey-light-rgb));\n}\n.bg-grey-dark[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-grey-5-rgb));\n}\n.bg-blue-light[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-light-rgb));\n}\n.bg-blue-main[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-main-rgb));\n}\n.bg-blue-dark[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-dark-rgb));\n}\n.text-xs[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.text-base[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.text-lg[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.text-xl[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.text-2xl[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.text-3xl[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.capitalize[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.rounded-xl[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  overflow: hidden;\n}\n.border-primary-1[_ngcontent-%COMP%] {\n  border: 1px solid rgb(var(--palette-blue-main-rgb));\n}\n.border-primary-2[_ngcontent-%COMP%] {\n  border: 2px solid rgb(var(--palette-blue-main-rgb));\n}\n.custom-scroll[_ngcontent-%COMP%] {\n  padding-right: 4px;\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0.5em;\n  border-radius: 5px;\n  background-color: rgb(var(--palette-grey-light-rgb));\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  border: 0.3em solid;\n  border-color: rgb(var(--palette-grey-5-rgb));\n}\n.custom-select-wrapper[_ngcontent-%COMP%] {\n  --select-padding: 12px;\n  --select-icon-width: 14px;\n  --form-icons-color: rgb(var(--palette-primary-rgb));\n  --form-input-background: rgb(var(--palette-grey-0-rgb));\n  position: relative;\n}\n.custom-select-wrapper[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%] {\n  padding: calc(var(--select-padding) / 2) var(--select-padding);\n  -webkit-padding-end: calc(var(--select-padding) + var(--select-icon-width));\n          padding-inline-end: calc(var(--select-padding) + var(--select-icon-width));\n  background: none;\n  background-color: var(--form-input-background);\n}\n.custom-select-wrapper[_ngcontent-%COMP%]   .half-arrow-icon[_ngcontent-%COMP%] {\n  right: var(--select-padding);\n  top: 0px;\n  pointer-events: none;\n  height: 100%;\n  width: var(--select-icon-width);\n  color: var(--form-icons-color);\n  position: absolute;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  --table-header-color: rgb(var(--palette-white-rgb));\n  --table-header-background: rgb(var(--palette-blue-main-rgb));\n  --table-text-color: rgb(var(--palette-grey-9-rgb));\n  --table-row-hover-background: rgb(var(--palette-blue-light-rgb));\n  --page-background: rgb(var(--palette-white-rgb));\n  --page-spacing: 10px;\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 672px;\n  background: none;\n  border-collapse: collapse;\n  border-radius: 1em 1em 0 0;\n  overflow: hidden;\n}\n.table-wrapper[_ngcontent-%COMP%]   table.table-sm[_ngcontent-%COMP%] {\n  min-width: 370px;\n}\n.table-wrapper[_ngcontent-%COMP%]   table.table-sm[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%] {\n  padding: var(--page-spacing);\n}\n.table-wrapper[_ngcontent-%COMP%]   table.table-sm[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n  padding: var(--page-spacing);\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: var(--table-header-color);\n  background-color: var(--table-header-background);\n  font-size: 13px;\n  font-weight: 700;\n}\n@media (min-width: 821px) {\n  .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n  border-bottom-style: none;\n  padding: calc(var(--page-spacing));\n}\n@media (min-width: 821px) {\n  .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n    padding: calc(var(--page-spacing) * 2);\n  }\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: var(--table-text-color);\n  line-height: 1.6;\n  font-size: 13px;\n}\n@media (min-width: 821px) {\n  .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    font-size: 0.9em;\n  }\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%] {\n  border-bottom-style: none;\n  padding: var(--page-spacing) calc(var(--page-spacing));\n}\n@media (min-width: 821px) {\n  .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%] {\n    padding: calc(var(--page-spacing) * 2);\n  }\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%] {\n  height: auto;\n  transition: background-color 0.5s;\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]:hover {\n  background-color: var(--table-row-hover-background);\n  transition: background-color 0.5s;\n}\n.table-wrapper[_ngcontent-%COMP%]     [mat-table] .mat-sort-header-arrow {\n  color: var(--table-header-color);\n}\n.table-wrapper[_ngcontent-%COMP%]   mat-paginator[_ngcontent-%COMP%], .table-wrapper[_ngcontent-%COMP%]   .table-width[_ngcontent-%COMP%] {\n  min-width: 672px;\n  width: 100%;\n}\n.table-wrapper[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n  border: none;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  align-items: center;\n  margin-top: 5px;\n}\n.action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  all: unset;\n  display: inline-block;\n  cursor: pointer;\n  line-height: 0.8;\n}\n.action-buttons[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9wYWxldHRlcy9zaGFyZWQuc2NzcyIsInNyYy90aGVtZS9wYWxldHRlcy9tb2RlLnNjc3MiLCJzcmMvdGhlbWUvY3VzdG9tLWNsYXNzZXMuc2NzcyIsInNyYy9hcHAvcmVwb3J0cy9yZXBvcnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL21peGlucy9pbnB1dHMvc2VsZWN0LnNjc3MiLCJzcmMvdGhlbWUvbWl4aW5zL3RhYmxlLWJhc2ljLXN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBQ0xBO0VBQ0UseUNBQUE7QUM2Q0Y7QUQzQ0E7RUFDRSx3Q0FBQTtBQzhDRjtBRDVDQTtFQUNFLHdDQUFBO0FDK0NGO0FEM0NBO0VBQ0Usb0RBQUE7QUM4Q0Y7QUQ1Q0E7RUFDRSxnREFBQTtBQytDRjtBRDdDQTtFQUNFLG9EQUFBO0FDZ0RGO0FEOUNBO0VBQ0UsbURBQUE7QUNpREY7QUQvQ0E7RUFDRSxtREFBQTtBQ2tERjtBRDlDQTtFQUNFLGtCQUFBO0FDaURGO0FEL0NBO0VBQ0UsbUJBQUE7QUNrREY7QURoREE7RUFDRSxlQUFBO0FDbURGO0FEakRBO0VBQ0UsbUJBQUE7QUNvREY7QURqREE7RUFDRSxrQkFBQTtBQ29ERjtBRGpEQTtFQUNFLGlCQUFBO0FDb0RGO0FEakRBO0VBQ0Usa0JBQUE7QUNvREY7QURqREE7RUFDRSxnQkFBQTtBQ29ERjtBRGxEQTtFQUNFLGdCQUFBO0FDcURGO0FEbERBO0VBQ0UsMEJBQUE7QUNxREY7QURsREE7RUFDRSxlQUFBO0FDcURGO0FEbERBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQ3FERjtBRGxEQTtFQUNFLG1EQUFBO0FDcURGO0FEbERBO0VBQ0UsbURBQUE7QUNxREY7QURsREE7RUFDRSxrQkFBQTtBQ3FERjtBRG5EQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9EQUFBO0FDc0RGO0FEbERBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0FDcURGO0FBbEpBO0VDT0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1EQUFBO0VBQ0EsdURBQUE7RUFFQSxrQkFBQTtBRDhJRjtBQzVJRTtFQUNFLDhEQUFBO0VBQ0EsMkVBQUE7VUFBQSwwRUFBQTtFQUNBLGdCQUFBO0VBQ0EsOENBQUE7QUQ4SUo7QUM1SUU7RUFDRSw0QkFBQTtFQUNBLFFBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUQ4SUo7QUFwS0E7RUVKRSxtREFBQTtFQUNBLDREQUFBO0VBQ0Esa0RBQUE7RUFDQSxnRUFBQTtFQUVBLGdEQUFBO0VBQ0Esb0JBQUE7QUYyS0Y7QUV6S0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBRjJLSjtBRXpLSTtFQUNFLGdCQUFBO0FGMktOO0FFeEtRO0VBQ0UsNEJBQUE7QUYwS1Y7QUV0S1E7RUFDRSw0QkFBQTtBRndLVjtBRW5LSTtFQUNFLGdDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUZxS047QUVwS007RUFMRjtJQU1JLGVBQUE7RUZ1S047QUFDRjtBRXJLTTtFQUNFLHlCQUFBO0VBQ0Esa0NBQUE7QUZ1S1I7QUV0S1E7RUFIRjtJQUlJLHNDQUFBO0VGeUtSO0FBQ0Y7QUVyS0k7RUFDRSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBRnVLTjtBRXRLTTtFQUpGO0lBS0ksZ0JBQUE7RUZ5S047QUFDRjtBRXhLTTtFQUNFLHlCQUFBO0VBQ0Esc0RBQUE7QUYwS1I7QUV6S1E7RUFIRjtJQUlJLHNDQUFBO0VGNEtSO0FBQ0Y7QUV4S0k7RUFDRSxZQUFBO0VBQ0EsaUNBQUE7QUYwS047QUV4S007RUFDRSwyQkFBQTtFQUNBLDhCQUFBO0FGMEtSO0FFeEtNO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtBRjBLUjtBRXZLTTtFQUNFLG1EQUFBO0VBQ0EsaUNBQUE7QUZ5S1I7QUVuS0k7RUFDRSxnQ0FBQTtBRnFLTjtBRWpLRTs7RUFFRSxnQkFBQTtFQUNBLFdBQUE7QUZtS0o7QUExUEk7RUFDRSxZQUFBO0FBNFBOO0FBeFBFO0VBQ0UsYUFBQTtFQUNBLE9BQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUEyUEo7QUExUEk7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUE0UE47QUExUEk7RUFDSSxpQkFBQTtBQTRQUiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydHMvcmVwb3J0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIFNoYXJlZFxuKi9cblxuQGltcG9ydCAncHJlZmVyZW5jZXMnO1xuQGltcG9ydCAnaW50ZXJmYWNlJztcbkBpbXBvcnQgJ21vZGUnO1xuXG4vLyBBbiBhYnN0cmFjdCB3YXkgdG8gcHJvdmlkZSBjb2xvcnMuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGFuIGludGVyZmFjZSB0byBib3RoIFNhc3MgdmFyaWFibGVzIGFuZCBDU1MgNCB2YXJpYWJsZXMgYmFzZWQgY29sb3IgcGFsZXR0ZXMuXG5AZnVuY3Rpb24gcGFsZXR0ZS1jb2xvcigkY29sb3ItbmFtZSwgJGFscGhhOiAxKSB7XG4gIC8vICRjb2xvci1wYWxldHRlLW1vZGUgICAgICAgID0+ICBEZWZpbmVkIGluIG1vZGUuc2Nzc1xuICAvLyAkY2hvb3Nlbi1wYWxldHRlICAgICAgICAgICA9PiAgRGVmaW5lZCBpbiBtb2RlLnNjc3NcbiAgLy8gJGNvbG9yLXBhbGV0dGUtaW50ZXJmYWNlICAgPT4gIERlZmluZWQgaW4gaW50ZXJmYWNlLnNjc3NcbiAgLy8gJGNzczQtdmFyLXByZWZpeCAgICAgICAgICAgPT4gIERlZmluZWQgaW4gcHJlZmVyZW5jZXMuc2Nzc1xuICAvLyAkY3NzNC1jb2xvci1mb3JtYXQgICAgICAgICA9PiAgRGVmaW5lZCBpbiBwcmVmZXJlbmNlcy5zY3NzXG5cbiAgQGlmICgkY29sb3ItcGFsZXR0ZS1tb2RlID09ICdjc3MtNCcpIHtcbiAgICAkcGFsZXR0ZS1yZWZlcmVuY2U6ICRjb2xvci1wYWxldHRlLWludGVyZmFjZTtcblxuICAgICRjb2xvci12YXJpYWJsZS1pbmRleDogaW5kZXgoJHBhbGV0dGUtcmVmZXJlbmNlLCAkY29sb3ItbmFtZSk7XG5cbiAgICBAaWYgKHR5cGVfb2YoJGNvbG9yLXZhcmlhYmxlLWluZGV4KSA9PSAnbnVtYmVyJykge1xuICAgICAgJGNvbG9yLXZhcmlhYmxlLW5hbWU6IG50aCgkcGFsZXR0ZS1yZWZlcmVuY2UsICRjb2xvci12YXJpYWJsZS1pbmRleCk7XG5cbiAgICAgIEBpZiAoJGFscGhhID4gMCBhbmQgJGFscGhhIDwgMSkge1xuICAgICAgICBAcmV0dXJuICN7J3JnYmEodmFyKCcgKyAkY3NzNC12YXItcHJlZml4ICsgJGNvbG9yLXZhcmlhYmxlLW5hbWUgKyAnLScgKyAkY3NzNC1jb2xvci1mb3JtYXQgKycpLCAjeyRhbHBoYX0pJ307XG4gICAgICB9IEBlbHNlIGlmICgkYWxwaGEgPT0gMSkge1xuICAgICAgICBAcmV0dXJuICN7J3JnYih2YXIoJyArICRjc3M0LXZhci1wcmVmaXggKyAkY29sb3ItdmFyaWFibGUtbmFtZSArICctJyArICRjc3M0LWNvbG9yLWZvcm1hdCArICcpKSd9O1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIEBlcnJvciBcIkFscGhhICgjeyRhbHBoYX0pIG11c3QgYmUgYSBudW1iZXJcIjtcbiAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgIEBlcnJvciBcIkNvbG9yICgjeyRjb2xvci1uYW1lfSkgd2FzIG5vdCBmb3VuZCBvbiBDb2xvciBQYWxldHRlIGRlZmluaXRpb24uIE1ha2Ugc3VyZSBpdCdzIGRlZmluZWQgaW4gdGhlIHRoZW1lL3BhbGV0dGVzL2ludGVyZmFjZS5zY3NzIGZpbGVcIjtcbiAgICB9XG4gIH0gQGVsc2UgaWYgKCRjb2xvci1wYWxldHRlLW1vZGUgPT0gJ3Nhc3MnKSB7XG4gICAgJHBhbGV0dGUtcmVmZXJlbmNlOiAkY2hvb3Nlbi1wYWxldHRlO1xuXG4gICAgJGNvbG9yLXZhcmlhYmxlOiBtYXAtZ2V0KCRwYWxldHRlLXJlZmVyZW5jZSwgJGNvbG9yLW5hbWUpO1xuXG4gICAgLy8gQ2hlY2sgaWYgaXQgaXMgYSBTYXNzIGNvbG9yXG4gICAgQGlmICh0eXBlX29mKCRjb2xvci12YXJpYWJsZSkgPT0gJ2NvbG9yJykge1xuICAgICAgQGlmICgkYWxwaGEgPiAwIGFuZCAkYWxwaGEgPCAxKSB7XG4gICAgICAgIEByZXR1cm4gcmdiYSgkY29sb3ItdmFyaWFibGUsICRhbHBoYSk7XG4gICAgICB9IEBlbHNlIGlmICgkYWxwaGEgPT0gMSkge1xuICAgICAgICBAcmV0dXJuICRjb2xvci12YXJpYWJsZTtcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICBAZXJyb3IgXCJBbHBoYSAoI3skYWxwaGF9KSBtdXN0IGJlIGEgbnVtYmVyXCI7XG4gICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICBAZXJyb3IgXCJDb2xvciAoI3skY29sb3ItdmFyaWFibGV9KSBpcyBub3QgYSBTYXNzIGNvbG9yXCI7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAZXJyb3IgJ05vIENvbG9yIFBhbGV0dGUgbW9kZSBzZWxlY3RlZCBpbiB0aGVtZS9wYWxldHRlcy9wcmVmZXJlbmNlcy5zY3NzJztcbiAgfVxufVxuIiwiLypcbiAgQ1NTIDQgTW9kZVxuKi9cbiRjb2xvci1wYWxldHRlLW1vZGU6ICdjc3MtNCc7XG5cblxuLypcbiAgU2FzcyBNb2RlXG4qL1xuLy8gQGltcG9ydCAnY29yZSc7XG4vL1xuLy8gJGNvbG9yLXBhbGV0dGUtbW9kZTogJ3Nhc3MnO1xuLy9cbi8vIC8vIEltcG9ydCB0aGUgZGVmaW5pdGlvbnMgb2YgdGhlIHBhbGV0dGUgeW91IHdhbnQgdG8gdXNlXG4vLyBAaW1wb3J0ICdwYWxldHRlLTEvZGVmaW5pdGlvbnMnO1xuLy8gLy8gQGltcG9ydCAncGFsZXR0ZS0yL2RlZmluaXRpb25zJztcbi8vXG4vLyAvLyBBc3NpZ24gYSBwYXJ0aWN1bGFyIENvbG9yIFBhbGV0dGUgdG8gdGhlICdjaG9vc2VuLXBhbGV0dGUnIHBvaW50ZXIuXG4vLyAvLyAkY2hvb3Nlbi1wYWxldHRlIHdpbGwgYmUgYSBTYXNzIG1hcCBwb2ludGluZyB0byBhbm90aGVyIGNvbG9yIHBhbGV0dGUgU2FzcyBtYXBcbi8vICRjaG9vc2VuLXBhbGV0dGU6IGJ1aWxkU2Fzc1BhbGV0dGUoJHBhbGV0dGUtMSk7XG4vLyAvLyAkY2hvb3Nlbi1wYWxldHRlOiBidWlsZFNhc3NQYWxldHRlKCRwYWxldHRlLTIpO1xuIiwiLy9jb2xvclxuLnRleHQtYmx1ZS1saWdodCB7XG4gIGNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJibHVlLWxpZ2h0XCIpfTtcbn1cbi50ZXh0LWJsdWUtbWFpbiB7XG4gIGNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJibHVlLW1haW5cIil9O1xufVxuLnRleHQtYmx1ZS1kYXJrIHtcbiAgY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtZGFya1wiKX07XG59XG5cbi8vYmFja2dyb3VuZFxuLmJnLWdyZXktbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJncmV5LWxpZ2h0XCIpfTtcbn1cbi5iZy1ncmV5LWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJncmV5LTVcIil9O1xufVxuLmJnLWJsdWUtbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJibHVlLWxpZ2h0XCIpfTtcbn1cbi5iZy1ibHVlLW1haW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJibHVlLW1haW5cIil9O1xufVxuLmJnLWJsdWUtZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtZGFya1wiKX07XG59XG5cbi8vdGV4dFxuLnRleHQteHMge1xuICBmb250LXNpemU6IDAuNzVyZW07XG59XG4udGV4dC1zbSB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG59XG4udGV4dC1iYXNlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLnRleHQtbGcge1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xufVxuXG4udGV4dC14bCB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuLnRleHQtMnhsIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi50ZXh0LTN4bCB7XG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcbn1cblxuLmZvbnQtc2VtaWJvbGQge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmZvbnQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5jYXBpdGFsaXplIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5jdXJzb3ItcG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJvdW5kZWQteGwge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYm9yZGVyLXByaW1hcnktMSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbWFpblwiKX07XG59XG5cbi5ib3JkZXItcHJpbWFyeS0yIHtcbiAgYm9yZGVyOiAycHggc29saWQgI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1tYWluXCIpfTtcbn1cblxuLmN1c3RvbS1zY3JvbGx7XG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcbn1cbi5jdXN0b20tc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAuNWVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImdyZXktbGlnaHRcIil9O1xufVxuXG5cbi5jdXN0b20tc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAuM2VtIHNvbGlkO1xuICBib3JkZXItY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImdyZXktNVwiKX07XG59XG4iLCJAaW1wb3J0IFwic2hhcmVkXCI7XG5cbi5jdXN0b20tc2VsZWN0LXdyYXBwZXIge1xuICBAaW5jbHVkZSBib290c3RyYXAtc2VsZWN0LXN0eWxlcygpO1xufVxuXG5cbi50YWJsZS13cmFwcGVyIHtcbiAgICBAaW5jbHVkZSB0YWJsZS1iYXNpYy1zdHlsZXMoKTtcbiAgXG4gICAgdGgubWF0LWhlYWRlci1jZWxsIHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG4gIH1cbiAgXG4gIC5hY3Rpb24tYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGJ1dHRvbiB7XG4gICAgICBhbGw6IHVuc2V0O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgbGluZS1oZWlnaHQ6IDAuODtcbiAgICB9XG4gICAgbWF0LWljb257XG4gICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIH1cbiAgfVxuICAiLCJAbWl4aW4gbWF0ZXJpYWwtc2VsZWN0LXN0eWxlcygpIHtcbiAgLy8gbWF0ZXJpYWwgc2VsZWN0IHN0eWxlc1xuICAubWF0LXNlbGVjdC1wYW5lbCB7XG4gICAgQGluY2x1ZGUgbWF0ZXJpYWwtYXV0b2NvbXBsZXRlLXN0eWxlcygpO1xuICB9XG59XG5cbkBtaXhpbiBib290c3RyYXAtc2VsZWN0LXN0eWxlcygpIHtcbiAgLy8gc2VsZWN0IGNvbXBvbmVudCB3aXRoIGN1c3RvbSBpY29uXG4gIC0tc2VsZWN0LXBhZGRpbmc6IDEycHg7XG4gIC0tc2VsZWN0LWljb24td2lkdGg6IDE0cHg7XG4gIC0tZm9ybS1pY29ucy1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdwcmltYXJ5Jyl9O1xuICAtLWZvcm0taW5wdXQtYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKCdncmV5LTAnKX07XG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC5jdXN0b20tc2VsZWN0IHtcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXNlbGVjdC1wYWRkaW5nKSAvIDIpIHZhcigtLXNlbGVjdC1wYWRkaW5nKTtcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IGNhbGModmFyKC0tc2VsZWN0LXBhZGRpbmcpICsgdmFyKC0tc2VsZWN0LWljb24td2lkdGgpKTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm0taW5wdXQtYmFja2dyb3VuZCk7XG4gIH1cbiAgLmhhbGYtYXJyb3ctaWNvbiB7XG4gICAgcmlnaHQ6IHZhcigtLXNlbGVjdC1wYWRkaW5nKTtcbiAgICB0b3A6IDBweDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IHZhcigtLXNlbGVjdC1pY29uLXdpZHRoKTtcbiAgICBjb2xvcjogdmFyKC0tZm9ybS1pY29ucy1jb2xvcik7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG59XG4iLCJAaW1wb3J0IFwicGFsZXR0ZXMvc2hhcmVkXCI7XG5cbkBtaXhpbiB0YWJsZS1iYXNpYy1zdHlsZXMoKSB7XG4gIC0tdGFibGUtaGVhZGVyLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJ3aGl0ZVwiKX07XG4gIC0tdGFibGUtaGVhZGVyLWJhY2tncm91bmQ6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbWFpblwiKX07XG4gIC0tdGFibGUtdGV4dC1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiZ3JleS05XCIpfTtcbiAgLS10YWJsZS1yb3ctaG92ZXItYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1saWdodFwiKX07XG5cbiAgLS1wYWdlLWJhY2tncm91bmQ6ICN7cGFsZXR0ZS1jb2xvcihcIndoaXRlXCIpfTtcbiAgLS1wYWdlLXNwYWNpbmc6IDEwcHg7XG5cbiAgdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogNjcycHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIGJvcmRlci1yYWRpdXM6IDFlbSAxZW0gMCAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmLnRhYmxlLXNtIHtcbiAgICAgIG1pbi13aWR0aDogMzcwcHg7XG5cbiAgICAgIHRkIHtcbiAgICAgICAgJi5tYXQtY2VsbCB7XG4gICAgICAgICAgcGFkZGluZzogdmFyKC0tcGFnZS1zcGFjaW5nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGgge1xuICAgICAgICAmLm1hdC1oZWFkZXItY2VsbCB7XG4gICAgICAgICAgcGFkZGluZzogdmFyKC0tcGFnZS1zcGFjaW5nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10YWJsZS1oZWFkZXItY29sb3IpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFibGUtaGVhZGVyLWJhY2tncm91bmQpO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA4MjFweCkge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICB9XG5cbiAgICAgICYubWF0LWhlYWRlci1jZWxsIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpKTtcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDgyMXB4KSB7XG4gICAgICAgICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0ZCB7XG4gICAgICBjb2xvcjogdmFyKC0tdGFibGUtdGV4dC1jb2xvcik7XG4gICAgICBsaW5lLWhlaWdodDogMS42O1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDgyMXB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTouOWVtO1xuICAgICAgfVxuICAgICAgJi5tYXQtY2VsbCB7XG4gICAgICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IHZhcigtLXBhZ2Utc3BhY2luZykgY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpKTtcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDgyMXB4KSB7XG4gICAgICAgICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0ci5tYXQtcm93IHtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cztcblxuICAgICAgdGQ6Zmlyc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDZweDtcbiAgICAgIH1cbiAgICAgIHRkOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNnB4O1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFibGUtcm93LWhvdmVyLWJhY2tncm91bmQpO1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXM7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgOjpuZy1kZWVwIFttYXQtdGFibGVdIHtcbiAgICAubWF0LXNvcnQtaGVhZGVyLWFycm93IHtcbiAgICAgIGNvbG9yOiB2YXIoLS10YWJsZS1oZWFkZXItY29sb3IpO1xuICAgIH1cbiAgfVxuXG4gIG1hdC1wYWdpbmF0b3IsXG4gIC50YWJsZS13aWR0aCB7XG4gICAgbWluLXdpZHRoOiA2NzJweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG5AbWl4aW4gdGFibGUtcGFnaW5hdG9yLXN0eWxlcygpIHtcbiAgLS1wYWdpbmF0b3ItYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKFwiZ3JleS0wXCIpfTtcbiAgLS1wYWdpbmF0b3ItdGV4dC1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiZ3JleS01XCIpfTtcbiAgLS1wYWdpbmF0b3ItY29udHJvbHMtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcInByaW1hcnktZGFya1wiKX07XG4gIC0tcGFnaW5hdG9yLWRpc2FibGVkLWNvbnRyb2xzLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJwcmltYXJ5LWRhcmtcIiwgMC4xKX07XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnaW5hdG9yLWJhY2tncm91bmQpO1xuXG4gIC8vIE92ZXJyaWRlIE1hdGVyaWFsIHN0eWxlc1xuICAubWF0LXBhZ2luYXRvci1jb250YWluZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1pbi13aWR0aDogNjcycHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSB7XG4gICAgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplLWxhYmVsIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wYWdpbmF0b3ItdGV4dC1jb2xvcik7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplLXNlbGVjdCB7XG4gICAgICAubWF0LXNlbGVjdC12YWx1ZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYWdpbmF0b3ItY29udHJvbHMtY29sb3IpO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhZ2luYXRvci1jb250cm9scy1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyAubWF0LXBhZ2luYXRvci1wYWdlLXNpemVcblxuICAubWF0LXBhZ2luYXRvci1yYW5nZS1hY3Rpb25zIHtcbiAgICAubWF0LXBhZ2luYXRvci1yYW5nZS1sYWJlbCB7XG4gICAgICBjb2xvcjogdmFyKC0tcGFnaW5hdG9yLXRleHQtY29sb3IpO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIC5tYXQtcGFnaW5hdG9yLW5hdmlnYXRpb24tcHJldmlvdXMsXG4gICAgLm1hdC1wYWdpbmF0b3ItbmF2aWdhdGlvbi1uZXh0IHtcbiAgICAgICY6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhZ2luYXRvci1jb250cm9scy1jb2xvcik7XG4gICAgICB9XG4gICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYWdpbmF0b3ItZGlzYWJsZWQtY29udHJvbHMtY29sb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyAubWF0LXBhZ2luYXRvci1yYW5nZS1hY3Rpb25zXG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-reports",
            templateUrl: "./reports.component.html",
            styleUrls: ["./reports.component.scss"]
          }]
        }], function () {
          return [{
            type: _business_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
          }, {
            type: _business_services_company_service__WEBPACK_IMPORTED_MODULE_6__["CompanyService"]
          }, {
            type: _shared_notifications_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]
          }];
        }, {
          sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
          }],
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "uHdG":
    /*!*******************************************!*\
      !*** ./src/app/reports/reports.module.ts ***!
      \*******************************************/

    /*! exports provided: routes, ReportsModule */

    /***/
    function uHdG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportsModule", function () {
        return ReportsModule;
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


      var _reports_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./reports.component */
      "ZAGK");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [{
        path: "",
        component: _reports_component__WEBPACK_IMPORTED_MODULE_2__["ReportsComponent"]
      }];

      var ReportsModule = /*#__PURE__*/_createClass(function ReportsModule() {
        _classCallCheck(this, ReportsModule);
      });

      ReportsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ReportsModule
      });
      ReportsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ReportsModule_Factory(t) {
          return new (t || ReportsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReportsModule, {
          declarations: [_reports_component__WEBPACK_IMPORTED_MODULE_2__["ReportsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_reports_component__WEBPACK_IMPORTED_MODULE_2__["ReportsComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=reports-reports-module-es5.js.map