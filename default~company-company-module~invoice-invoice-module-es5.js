(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~company-company-module~invoice-invoice-module"], {
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
    "AJa1":
    /*!******************************************!*\
      !*** ./src/app/core/config/constants.ts ***!
      \******************************************/

    /*! exports provided: regexs */

    /***/
    function AJa1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "regexs", function () {
        return regexs;
      });

      var regexs = {
        vin: /^[a-z,A-Z0-9]{6,17}$/,
        zip: /^\d{5}(?:[-\s]\d{4})?$/,
        mongoId: /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i,
        numbers: /^[0-9]{4,25}$/
      };
      /***/
    },

    /***/
    "Espg":
    /*!**************************************************!*\
      !*** ./src/app/shared/dialogs/dialog.service.ts ***!
      \**************************************************/

    /*! exports provided: DialogService */

    /***/
    function Espg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DialogService", function () {
        return DialogService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _confirm_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./confirm/confirm-dialog.component */
      "NXqw");
      /* harmony import */


      var _loader_loader_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./loader/loader-dialog.component */
      "GEn9");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");

      var DialogService = /*#__PURE__*/function () {
        function DialogService(dialog) {
          _classCallCheck(this, DialogService);

          this.dialog = dialog;
        }

        _createClass(DialogService, [{
          key: "showConfirm",
          value: function showConfirm(args, onConfirm) {
            this.dialog.open(_confirm_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmDialogComponent"], {
              width: '400px',
              data: args
            }).afterClosed().subscribe(function (confirm) {
              if (confirm) {
                onConfirm();
              }
            });
          }
        }, {
          key: "showLoader",
          value: function showLoader() {
            var _this = this;

            this.dialog.open(_loader_loader_dialog_component__WEBPACK_IMPORTED_MODULE_2__["LoaderDialogComponent"], {
              width: '300px',
              data: {
                setDialogRef: function setDialogRef(dialogRef) {
                  _this.currentLoaderDialogRef = dialogRef;
                }
              },
              disableClose: true
            }).afterClosed().subscribe();
          }
        }, {
          key: "hideLoader",
          value: function hideLoader() {
            var _a;

            (_a = this.currentLoaderDialogRef) === null || _a === void 0 ? void 0 : _a.close();
            this.currentLoaderDialogRef = null;
          }
        }]);

        return DialogService;
      }();

      DialogService.ɵfac = function DialogService_Factory(t) {
        return new (t || DialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]));
      };

      DialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DialogService,
        factory: DialogService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
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
            var _this2 = this;

            return new Promise(function (resolve, reject) {
              _this2.http.get("".concat(_this2.baseUrl, "/users/admin")).subscribe(function (data) {
                _this2.users.next(data);

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
            var _this3 = this;

            return this.http.post("".concat(this.baseUrl, "/users/admin"), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              _this3.fetchUsers();

              return res;
            }));
          }
        }, {
          key: "updateUser",
          value: function updateUser(body, id) {
            var _this4 = this;

            var isAdmin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            var url = isAdmin ? "".concat(this.baseUrl, "/users/admin/").concat(id) : "".concat(this.baseUrl, "/users/me");
            return this.http.put(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              _this4.fetchUsers();

              return res;
            }));
          }
        }, {
          key: "deleteUser",
          value: function deleteUser(id) {
            var _this5 = this;

            return this.http["delete"]("".concat(this.baseUrl, "/users/admin/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              _this5.fetchUsers();

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
    "Sdjb":
    /*!*******************************************************!*\
      !*** ./src/app/business/services/customer.service.ts ***!
      \*******************************************************/

    /*! exports provided: CustomerService */

    /***/
    function Sdjb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerService", function () {
        return CustomerService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
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

      var CustomerService = /*#__PURE__*/function () {
        function CustomerService(http) {
          _classCallCheck(this, CustomerService);

          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
          this.customers = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        }

        _createClass(CustomerService, [{
          key: "fetchCustomers",
          value: function fetchCustomers() {
            var _this6 = this;

            return new Promise(function (resolve, reject) {
              _this6.http.get("".concat(_this6.baseUrl, "/customers")).subscribe(function (data) {
                _this6.customers.next(data.results);

                resolve(data);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "saveCustomer",
          value: function saveCustomer(body) {
            var _this7 = this;

            return this.http.post("".concat(this.baseUrl, "/customers"), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              _this7.fetchCustomers();

              return res;
            }));
          }
        }, {
          key: "updateCustomer",
          value: function updateCustomer(body, id) {
            var _this8 = this;

            return this.http.put("".concat(this.baseUrl, "/customers/").concat(id), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              _this8.fetchCustomers();

              return res;
            }));
          }
        }, {
          key: "deleteCustomer",
          value: function deleteCustomer(id) {
            var _this9 = this;

            return this.http["delete"]("".concat(this.baseUrl, "/customers/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              _this9.fetchCustomers();

              return res;
            }));
          }
        }, {
          key: "getMostRecents",
          value: function getMostRecents() {
            return this.http.get("".concat(this.baseUrl, "/customers/mostRecents"));
          }
        }, {
          key: "searchCustomers",
          value: function searchCustomers(query) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this10 = this;

              var wait;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      wait = 700;
                      clearTimeout(this.timerId);

                      if (!(!query || (query === null || query === void 0 ? void 0 : query.length) < 3)) {
                        _context.next = 4;
                        break;
                      }

                      return _context.abrupt("return");

                    case 4:
                      return _context.abrupt("return", new Promise(function (resolve, reject) {
                        _this10.timerId = setTimeout(function () {
                          _this10.http.get("".concat(_this10.baseUrl, "/customers?search=").concat(query)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                            return res.results;
                          })).subscribe(function (data) {
                            return resolve(data);
                          }, function (err) {
                            return reject(err);
                          });
                        }, wait);
                      }));

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return CustomerService;
      }();

      CustomerService.ɵfac = function CustomerService_Factory(t) {
        return new (t || CustomerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]));
      };

      CustomerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: CustomerService,
        factory: CustomerService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CustomerService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "U12X":
    /*!**************************************************!*\
      !*** ./src/app/business/services/geo.service.ts ***!
      \**************************************************/

    /*! exports provided: GeoService */

    /***/
    function U12X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeoService", function () {
        return GeoService;
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


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var STATES = [{
        code: "AL",
        name: "Alabama"
      }, {
        code: "AK",
        name: "Alaska"
      }, {
        code: "AZ",
        name: "Arizona"
      }, {
        code: "AR",
        name: "Arkansas"
      }, {
        code: "CA",
        name: "California"
      }, {
        code: "CO",
        name: "Colorado"
      }, {
        code: "CT",
        name: "Connecticut"
      }, {
        code: "DE",
        name: "Delaware"
      }, {
        code: "DC",
        name: "District of Columbia"
      }, {
        code: "FL",
        name: "Florida"
      }, {
        code: "GA",
        name: "Georgia"
      }, {
        code: "HI",
        name: "Hawaii"
      }, {
        code: "ID",
        name: "Idaho"
      }, {
        code: "IL",
        name: "Illinois"
      }, {
        code: "IN",
        name: "Indiana"
      }, {
        code: "IA",
        name: "Iowa"
      }, {
        code: "KS",
        name: "Kansas"
      }, {
        code: "KY",
        name: "Kentucky"
      }, {
        code: "LA",
        name: "Louisiana"
      }, {
        code: "ME",
        name: "Maine"
      }, {
        code: "MD",
        name: "Maryland"
      }, {
        code: "MA",
        name: "Massachusetts"
      }, {
        code: "MI",
        name: "Michigan"
      }, {
        code: "MN",
        name: "Minnesota"
      }, {
        code: "MS",
        name: "Mississippi"
      }, {
        code: "MO",
        name: "Missouri"
      }, {
        code: "MT",
        name: "Montana"
      }, {
        code: "NE",
        name: "Nebraska"
      }, {
        code: "NV",
        name: "Nevada"
      }, {
        code: "NH",
        name: "New Hampshire"
      }, {
        code: "NJ",
        name: "New Jersey"
      }, {
        code: "NM",
        name: "New Mexico"
      }, {
        code: "NY",
        name: "New York"
      }, {
        code: "NC",
        name: "North Carolina"
      }, {
        code: "ND",
        name: "North Dakota"
      }, {
        code: "OH",
        name: "Ohio"
      }, {
        code: "OK",
        name: "Oklahoma"
      }, {
        code: "OR",
        name: "Oregon"
      }, {
        code: "PA",
        name: "Pennsylvania"
      }, {
        code: "RI",
        name: "Rhode Island"
      }, {
        code: "SC",
        name: "South Carolina"
      }, {
        code: "SD",
        name: "South Dakota"
      }, {
        code: "TN",
        name: "Tennessee"
      }, {
        code: "TX",
        name: "Texas"
      }, {
        code: "UT",
        name: "Utah"
      }, {
        code: "VT",
        name: "Vermont"
      }, {
        code: "VA",
        name: "Virginia"
      }, {
        code: "WA",
        name: "Washington"
      }, {
        code: "WV",
        name: "West Virginia"
      }, {
        code: "WI",
        name: "Wisconsin"
      }, {
        code: "WY",
        name: "Wyoming"
      }];

      var GeoService = /*#__PURE__*/function () {
        function GeoService(http) {
          _classCallCheck(this, GeoService);

          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
          this.states = STATES;
          this.currentCities = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        }

        _createClass(GeoService, [{
          key: "fetchCitiesByState",
          value: function fetchCitiesByState(state) {
            var _this11 = this;

            if (this.currentCities.getValue()[state]) return;
            this.http.get("".concat(this.baseUrl, "/general/cities/").concat(state)).subscribe(function (data) {
              _this11.currentCities.next(Object.assign(_this11.currentCities.getValue(), _defineProperty({}, state, data)));
            });
          }
        }]);

        return GeoService;
      }();

      GeoService.ɵfac = function GeoService_Factory(t) {
        return new (t || GeoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      GeoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: GeoService,
        factory: GeoService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeoService, [{
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
      /***/

    },

    /***/
    "nUUR":
    /*!***************************************************!*\
      !*** ./src/app/business/services/rate.service.ts ***!
      \***************************************************/

    /*! exports provided: RateService */

    /***/
    function nUUR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RateService", function () {
        return RateService;
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

      var RateService = /*#__PURE__*/function () {
        function RateService(http) {
          _classCallCheck(this, RateService);

          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
          this.rates = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        }

        _createClass(RateService, [{
          key: "fetchRates",
          value: function fetchRates() {
            var _this12 = this;

            return new Promise(function (resolve, reject) {
              _this12.http.get("".concat(_this12.baseUrl, "/rates")).subscribe(function (data) {
                _this12.rates.next(data);

                resolve(data);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "getRateByCode",
          value: function getRateByCode(code) {
            return this.http.get("".concat(this.baseUrl, "/rates/").concat(code));
          }
        }, {
          key: "saveRate",
          value: function saveRate(body) {
            var _this13 = this;

            return this.http.post("".concat(this.baseUrl, "/rates"), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              _this13.fetchRates();

              return res;
            }));
          }
        }, {
          key: "updateRate",
          value: function updateRate(body, id) {
            var _this14 = this;

            return this.http.put("".concat(this.baseUrl, "/rates/").concat(id), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              _this14.fetchRates();

              return res;
            }));
          }
        }, {
          key: "deleteRate",
          value: function deleteRate(id) {
            var _this15 = this;

            return this.http["delete"]("".concat(this.baseUrl, "/rates/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              _this15.fetchRates();

              return res;
            }));
          }
        }]);

        return RateService;
      }();

      RateService.ɵfac = function RateService_Factory(t) {
        return new (t || RateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
      };

      RateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RateService,
        factory: RateService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RateService, [{
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

    }
  }]);
})();
//# sourceMappingURL=default~company-company-module~invoice-invoice-module-es5.js.map