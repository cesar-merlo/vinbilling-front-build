(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~company-company-module~invoice-invoice-module"],{

/***/ "38VU":
/*!**************************************************************!*\
  !*** ./src/app/shared/notifications/notification.service.ts ***!
  \**************************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _notification_template_notification_template_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../notification-template/notification-template.component */ "MQQr");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");




class NotificationService {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    success(msg = "Action successfully") {
        this.showNotification(msg, "success", "check-circle");
    }
    error(msg = "Action failed") {
        this.showNotification(msg, "danger", "exclamation-triangle");
    }
    info(msg) {
        this.showNotification(msg, "info", "info");
    }
    warning(msg) {
        this.showNotification(msg, "warning", "info");
    }
    showNotification(msg = "Missed message", type, icon) {
        // for more info about Angular Material snackBar check: https://material.angular.io/components/snack-bar/overview
        this.mySnackBarRef = this.snackBar.openFromComponent(_notification_template_notification_template_component__WEBPACK_IMPORTED_MODULE_1__["NotificationTemplateComponent"], {
            data: {
                message: msg,
                icon,
                type,
                dismissible: true,
            },
            duration: type !== "success" ? 6000 : 3000,
            horizontalPosition: "right",
            verticalPosition: "bottom",
            panelClass: ["notification-wrapper"],
        });
        // this is to be able to close it from the NotificationComponent
        this.mySnackBarRef.instance.snackBarRef = this.mySnackBarRef;
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"])); };
NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "AJa1":
/*!******************************************!*\
  !*** ./src/app/core/config/constants.ts ***!
  \******************************************/
/*! exports provided: regexs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regexs", function() { return regexs; });
const regexs = {
    vin: /^[a-z,A-Z0-9]{6,17}$/,
    zip: /^\d{5}(?:[-\s]\d{4})?$/,
    mongoId: /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i,
    numbers: /^[0-9]{4,25}$/,
};



/***/ }),

/***/ "Espg":
/*!**************************************************!*\
  !*** ./src/app/shared/dialogs/dialog.service.ts ***!
  \**************************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _confirm_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm/confirm-dialog.component */ "NXqw");
/* harmony import */ var _loader_loader_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader/loader-dialog.component */ "GEn9");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");





class DialogService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    showConfirm(args, onConfirm) {
        this.dialog
            .open(_confirm_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmDialogComponent"], {
            width: '400px',
            data: args,
        })
            .afterClosed()
            .subscribe((confirm) => {
            if (confirm) {
                onConfirm();
            }
        });
    }
    showLoader() {
        this.dialog
            .open(_loader_loader_dialog_component__WEBPACK_IMPORTED_MODULE_2__["LoaderDialogComponent"], {
            width: '300px',
            data: {
                setDialogRef: (dialogRef) => {
                    this.currentLoaderDialogRef = dialogRef;
                },
            },
            disableClose: true,
        })
            .afterClosed()
            .subscribe();
    }
    hideLoader() {
        var _a;
        (_a = this.currentLoaderDialogRef) === null || _a === void 0 ? void 0 : _a.close();
        this.currentLoaderDialogRef = null;
    }
}
DialogService.ɵfac = function DialogService_Factory(t) { return new (t || DialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
DialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DialogService, factory: DialogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "RaVz":
/*!***************************************************!*\
  !*** ./src/app/business/services/user.service.ts ***!
  \***************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class UserService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        this.users = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    fetchUsers() {
        return new Promise((resolve, reject) => {
            this.http.get(`${this.baseUrl}/users/admin`).subscribe((data) => {
                this.users.next(data);
                resolve(data);
            }, (err) => {
                reject(err);
            });
        });
    }
    getUserAuth() {
        return this.http.get(`${this.baseUrl}/users/me`);
    }
    saveUser(body) {
        return this.http.post(`${this.baseUrl}/users/admin`, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            this.fetchUsers();
            return res;
        }));
    }
    updateUser(body, id, isAdmin = true) {
        const url = isAdmin ? `${this.baseUrl}/users/admin/${id}` : `${this.baseUrl}/users/me`;
        return this.http.put(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            this.fetchUsers();
            return res;
        }));
    }
    deleteUser(id) {
        return this.http.delete(`${this.baseUrl}/users/admin/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            this.fetchUsers();
            return res;
        }));
    }
    changePassword(body) {
        return this.http.post(`${this.baseUrl}/users/me/changePassword`, body);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sdjb":
/*!*******************************************************!*\
  !*** ./src/app/business/services/customer.service.ts ***!
  \*******************************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");







class CustomerService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
        this.customers = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    fetchCustomers() {
        return new Promise((resolve, reject) => {
            this.http.get(`${this.baseUrl}/customers`).subscribe((data) => {
                this.customers.next(data.results);
                resolve(data);
            }, (err) => {
                reject(err);
            });
        });
    }
    saveCustomer(body) {
        return this.http.post(`${this.baseUrl}/customers`, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            this.fetchCustomers();
            return res;
        }));
    }
    updateCustomer(body, id) {
        return this.http.put(`${this.baseUrl}/customers/${id}`, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            this.fetchCustomers();
            return res;
        }));
    }
    deleteCustomer(id) {
        return this.http.delete(`${this.baseUrl}/customers/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            this.fetchCustomers();
            return res;
        }));
    }
    getMostRecents() {
        return this.http.get(`${this.baseUrl}/customers/mostRecents`);
    }
    searchCustomers(query) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const wait = 700;
            clearTimeout(this.timerId);
            if (!query || (query === null || query === void 0 ? void 0 : query.length) < 3)
                return;
            return new Promise((resolve, reject) => {
                this.timerId = setTimeout(() => {
                    this.http
                        .get(`${this.baseUrl}/customers?search=${query}`)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res.results))
                        .subscribe((data) => resolve(data), (err) => reject(err));
                }, wait);
            });
        });
    }
}
CustomerService.ɵfac = function CustomerService_Factory(t) { return new (t || CustomerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
CustomerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CustomerService, factory: CustomerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CustomerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "U12X":
/*!**************************************************!*\
  !*** ./src/app/business/services/geo.service.ts ***!
  \**************************************************/
/*! exports provided: GeoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoService", function() { return GeoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





const STATES = [
    { code: "AL", name: "Alabama" },
    { code: "AK", name: "Alaska" },
    { code: "AZ", name: "Arizona" },
    { code: "AR", name: "Arkansas" },
    { code: "CA", name: "California" },
    { code: "CO", name: "Colorado" },
    { code: "CT", name: "Connecticut" },
    { code: "DE", name: "Delaware" },
    { code: "DC", name: "District of Columbia" },
    { code: "FL", name: "Florida" },
    { code: "GA", name: "Georgia" },
    { code: "HI", name: "Hawaii" },
    { code: "ID", name: "Idaho" },
    { code: "IL", name: "Illinois" },
    { code: "IN", name: "Indiana" },
    { code: "IA", name: "Iowa" },
    { code: "KS", name: "Kansas" },
    { code: "KY", name: "Kentucky" },
    { code: "LA", name: "Louisiana" },
    { code: "ME", name: "Maine" },
    { code: "MD", name: "Maryland" },
    { code: "MA", name: "Massachusetts" },
    { code: "MI", name: "Michigan" },
    { code: "MN", name: "Minnesota" },
    { code: "MS", name: "Mississippi" },
    { code: "MO", name: "Missouri" },
    { code: "MT", name: "Montana" },
    { code: "NE", name: "Nebraska" },
    { code: "NV", name: "Nevada" },
    { code: "NH", name: "New Hampshire" },
    { code: "NJ", name: "New Jersey" },
    { code: "NM", name: "New Mexico" },
    { code: "NY", name: "New York" },
    { code: "NC", name: "North Carolina" },
    { code: "ND", name: "North Dakota" },
    { code: "OH", name: "Ohio" },
    { code: "OK", name: "Oklahoma" },
    { code: "OR", name: "Oregon" },
    { code: "PA", name: "Pennsylvania" },
    { code: "RI", name: "Rhode Island" },
    { code: "SC", name: "South Carolina" },
    { code: "SD", name: "South Dakota" },
    { code: "TN", name: "Tennessee" },
    { code: "TX", name: "Texas" },
    { code: "UT", name: "Utah" },
    { code: "VT", name: "Vermont" },
    { code: "VA", name: "Virginia" },
    { code: "WA", name: "Washington" },
    { code: "WV", name: "West Virginia" },
    { code: "WI", name: "Wisconsin" },
    { code: "WY", name: "Wyoming" },
];
class GeoService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        this.states = STATES;
        this.currentCities = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
    }
    fetchCitiesByState(state) {
        if (this.currentCities.getValue()[state])
            return;
        this.http.get(`${this.baseUrl}/general/cities/${state}`).subscribe((data) => {
            this.currentCities.next(Object.assign(this.currentCities.getValue(), { [state]: data }));
        });
    }
}
GeoService.ɵfac = function GeoService_Factory(t) { return new (t || GeoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
GeoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GeoService, factory: GeoService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "nUUR":
/*!***************************************************!*\
  !*** ./src/app/business/services/rate.service.ts ***!
  \***************************************************/
/*! exports provided: RateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateService", function() { return RateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class RateService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        this.rates = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
    }
    fetchRates() {
        return new Promise((resolve, reject) => {
            this.http.get(`${this.baseUrl}/rates`).subscribe((data) => {
                this.rates.next(data);
                resolve(data);
            }, (err) => {
                reject(err);
            });
        });
    }
    getRateByCode(code) {
        return this.http.get(`${this.baseUrl}/rates/${code}`);
    }
    saveRate(body) {
        return this.http.post(`${this.baseUrl}/rates`, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            this.fetchRates();
            return res;
        }));
    }
    updateRate(body, id) {
        return this.http.put(`${this.baseUrl}/rates/${id}`, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            this.fetchRates();
            return res;
        }));
    }
    deleteRate(id) {
        return this.http.delete(`${this.baseUrl}/rates/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            this.fetchRates();
            return res;
        }));
    }
}
RateService.ɵfac = function RateService_Factory(t) { return new (t || RateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
RateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RateService, factory: RateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~company-company-module~invoice-invoice-module-es2015.js.map