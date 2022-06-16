(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["administration-administration-module"],{

/***/ "0JFd":
/*!*********************************************************!*\
  !*** ./src/app/administration/administration.module.ts ***!
  \*********************************************************/
/*! exports provided: administrationRoutes, AdministrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "administrationRoutes", function() { return administrationRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrationModule", function() { return AdministrationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _vehicle_template_vehicle_template_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vehicle-template/vehicle-template.component */ "vByf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _vehicle_template_vehicle_template_dialog_vehicle_template_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vehicle-template/vehicle-template-dialog/vehicle-template-dialog.component */ "iQ0E");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-image-cropper */ "rIor");
/* harmony import */ var _vehicle_damage_vehicle_damage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vehicle-damage/vehicle-damage.component */ "WPZs");
/* harmony import */ var _vehicle_damage_vehicle_damage_dialog_vehicle_damage_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vehicle-damage/vehicle-damage-dialog/vehicle-damage-dialog.component */ "snPw");











const administrationRoutes = [
    {
        path: 'vehicle-templates',
        component: _vehicle_template_vehicle_template_component__WEBPACK_IMPORTED_MODULE_2__["VehicleTemplateComponent"],
    },
    {
        path: 'vehicle-damage',
        component: _vehicle_damage_vehicle_damage_component__WEBPACK_IMPORTED_MODULE_7__["VehicleDamageComponent"],
    },
];
class AdministrationModule {
}
AdministrationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdministrationModule });
AdministrationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdministrationModule_Factory(t) { return new (t || AdministrationModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(administrationRoutes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_6__["ImageCropperModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdministrationModule, { declarations: [_vehicle_template_vehicle_template_component__WEBPACK_IMPORTED_MODULE_2__["VehicleTemplateComponent"],
        _vehicle_template_vehicle_template_dialog_vehicle_template_dialog_component__WEBPACK_IMPORTED_MODULE_5__["VehicleTemplateDialogComponent"],
        _vehicle_damage_vehicle_damage_component__WEBPACK_IMPORTED_MODULE_7__["VehicleDamageComponent"],
        _vehicle_damage_vehicle_damage_dialog_vehicle_damage_dialog_component__WEBPACK_IMPORTED_MODULE_8__["VehicleDamageDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_6__["ImageCropperModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdministrationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _vehicle_template_vehicle_template_component__WEBPACK_IMPORTED_MODULE_2__["VehicleTemplateComponent"],
                    _vehicle_template_vehicle_template_dialog_vehicle_template_dialog_component__WEBPACK_IMPORTED_MODULE_5__["VehicleTemplateDialogComponent"],
                    _vehicle_damage_vehicle_damage_component__WEBPACK_IMPORTED_MODULE_7__["VehicleDamageComponent"],
                    _vehicle_damage_vehicle_damage_dialog_vehicle_damage_dialog_component__WEBPACK_IMPORTED_MODULE_8__["VehicleDamageDialogComponent"],
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(administrationRoutes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_6__["ImageCropperModule"]],
            }]
    }], null, null); })();


/***/ }),

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

/***/ "RTdY":
/*!*************************************************************!*\
  !*** ./src/app/business/services/administration.service.ts ***!
  \*************************************************************/
/*! exports provided: AdministrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrationService", function() { return AdministrationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class AdministrationService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        this.vehicleTemplates = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.vehicleDamage = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
    }
    fetchVehicleTemplates() {
        return new Promise((resolve, reject) => {
            this.http.get(`${this.baseUrl}/administration/vehicleTemplate`).subscribe((data) => {
                const dataParsed = data.map((temp) => {
                    return { id: temp.id, name: temp.name, imageUrl: temp.imageB64 };
                });
                this.vehicleTemplates.next(dataParsed);
                resolve(data);
            }, (err) => {
                reject(err);
            });
        });
    }
    fetchVehicleDamage() {
        return new Promise((resolve, reject) => {
            this.http.get(`${this.baseUrl}/administration/vehicleDamage`).subscribe((data) => {
                this.vehicleDamage.next(data);
                resolve(data);
            }, (err) => {
                reject(err);
            });
        });
    }
    saveVehicleTemplate(body) {
        return this.http.post(`${this.baseUrl}/administration/vehicleTemplate`, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            this.fetchVehicleTemplates();
            return res;
        }));
    }
    saveVehicleDamage(body) {
        return this.http.post(`${this.baseUrl}/administration/vehicleDamage`, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            this.fetchVehicleDamage();
            return res;
        }));
    }
    updateVehicleTemplate(body, id) {
        return this.http.put(`${this.baseUrl}/administration/vehicleTemplate/${id}`, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            this.fetchVehicleTemplates();
            return res;
        }));
    }
    deleteVehicleTemplate(id) {
        return this.http.delete(`${this.baseUrl}/administration/vehicleTemplate/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            this.fetchVehicleTemplates();
            return res;
        }));
    }
    deleteVehicleDamage(id) {
        return this.http.delete(`${this.baseUrl}/administration/vehicleDamage/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            this.fetchVehicleDamage();
            return res;
        }));
    }
    getMostRecents() {
        return this.http.get(`${this.baseUrl}/customers/mostRecents`);
    }
}
AdministrationService.ɵfac = function AdministrationService_Factory(t) { return new (t || AdministrationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
AdministrationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdministrationService, factory: AdministrationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdministrationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "WPZs":
/*!***************************************************************************!*\
  !*** ./src/app/administration/vehicle-damage/vehicle-damage.component.ts ***!
  \***************************************************************************/
/*! exports provided: VehicleDamageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleDamageComponent", function() { return VehicleDamageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _vehicle_damage_dialog_vehicle_damage_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vehicle-damage-dialog/vehicle-damage-dialog.component */ "snPw");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_shared_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/dialogs/dialog.service */ "Espg");
/* harmony import */ var src_app_shared_notifications_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/notifications/notification.service */ "38VU");
/* harmony import */ var src_app_business_services_administration_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/business/services/administration.service */ "RTdY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");















function VehicleDamageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 50);
} }
function VehicleDamageComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VehicleDamageComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const damage_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](damage_r14.uid);
} }
function VehicleDamageComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VehicleDamageComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const damage_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](damage_r15.name);
} }
function VehicleDamageComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 27);
} }
function VehicleDamageComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td", 28);
} }
function VehicleDamageComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 27);
} }
function VehicleDamageComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td", 28);
} }
function VehicleDamageComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VehicleDamageComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VehicleDamageComponent_td_30_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const damage_r18 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.onDelete(damage_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VehicleDamageComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 32);
} }
function VehicleDamageComponent_tr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 33);
} }
function VehicleDamageComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No items found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class VehicleDamageComponent {
    constructor(dialog, dialogService, notificationService, adminService) {
        this.dialog = dialog;
        this.dialogService = dialogService;
        this.notificationService = notificationService;
        this.adminService = adminService;
        this.displayedColumns = ['uid', 'name', 'space', 'space2', 'actions'];
        this.pageSizeOptions = [12, 24, 50, 100];
        this.subscriptions = [];
        this.items = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]([]);
        const sub = this.adminService.vehicleDamage.subscribe((data) => {
            this.items.data = data;
        });
        this.subscriptions.push(sub);
    }
    ngOnInit() {
        this.dialogService.showLoader();
        this.adminService.fetchVehicleDamage().finally(() => {
            this.dialogService.hideLoader();
        });
    }
    applyFilter(filterValue) {
        this.items.filter = filterValue.trim().toLocaleLowerCase();
    }
    openNewDialog() {
        this.dialog.open(_vehicle_damage_dialog_vehicle_damage_dialog_component__WEBPACK_IMPORTED_MODULE_4__["VehicleDamageDialogComponent"], {
            width: '800px',
            data: {
                action: 'new',
            },
        });
    }
    openEditDialog(damage) {
        this.dialog.open(_vehicle_damage_dialog_vehicle_damage_dialog_component__WEBPACK_IMPORTED_MODULE_4__["VehicleDamageDialogComponent"], {
            width: '700px',
            data: {
                action: 'edit',
                damage,
            },
        });
    }
    onDelete(damage) {
        this.dialogService.showConfirm({ title: 'Delete item', msg: 'Are you sure?' }, () => {
            this.loading = true;
            this.adminService.deleteVehicleDamage(damage.id).subscribe((res) => {
                this.loading = false;
                this.notificationService.success('Item deleted');
            }, (err) => {
                this.loading = false;
                this.notificationService.error();
            });
        });
    }
    ngAfterViewInit() {
        this.items.sort = this.sort;
        this.items.paginator = this.paginator;
    }
    ngOnDestroy() {
        this.subscriptions.forEach((sub) => sub.unsubscribe());
    }
}
VehicleDamageComponent.ɵfac = function VehicleDamageComponent_Factory(t) { return new (t || VehicleDamageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_notifications_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_business_services_administration_service__WEBPACK_IMPORTED_MODULE_8__["AdministrationService"])); };
VehicleDamageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VehicleDamageComponent, selectors: [["app-vehicle-damage"]], viewQuery: function VehicleDamageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 35, vars: 6, consts: [[1, "px-2", "px-md-5", "py-3", "position-relative"], ["class", "loader", 4, "ngIf"], [1, "d-flex", "flex-wrap", "w-100", "justify-content-between", "align-items-center", "mb-3"], [1, "text-dark", "d-inline-block", "content-title"], [1, "d-flex", "content-options-bar"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fas", "fa-search"], ["type", "text", "placeholder", "Filter by any field...", 1, "form-control", 3, "keyup"], [1, "btn", "font-weight-bold", "bg-blue-main", "text-light", "ml-3", 3, "click"], [1, "row", "mb-4"], [1, "col-12", "table-wrapper", "table-responsive"], ["mat-table", "", "matSort", "", 1, "table", "table-borderless", "table-striped", 3, "dataSource"], ["matColumnDef", "uid"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "space"], ["matColumnDef", "space2"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "text-center border py-3 mt-n3 table-width", 4, "ngIf"], ["aria-label", "Select page", 3, "pageSizeOptions"], [1, "loader"], [3, "diameter"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "action-buttons"], ["aria-label", "edit", 1, "text-dark", 3, "click"], [1, "fas", "fa-trash-alt", "text-xl"], ["mat-header-row", ""], ["mat-row", ""], [1, "text-center", "border", "py-3", "mt-n3", "table-width"]], template: function VehicleDamageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VehicleDamageComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Vehicle damage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function VehicleDamageComponent_Template_input_keyup_10_listener($event) { return ctx.applyFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VehicleDamageComponent_Template_button_click_11_listener() { return ctx.openNewDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "+Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, VehicleDamageComponent_th_17_Template, 2, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, VehicleDamageComponent_td_18_Template, 2, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, VehicleDamageComponent_th_20_Template, 2, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, VehicleDamageComponent_td_21_Template, 2, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, VehicleDamageComponent_th_23_Template, 1, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, VehicleDamageComponent_td_24_Template, 1, 0, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](25, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, VehicleDamageComponent_th_26_Template, 1, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, VehicleDamageComponent_td_27_Template, 1, 0, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](28, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, VehicleDamageComponent_th_29_Template, 2, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, VehicleDamageComponent_td_30_Template, 4, 0, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, VehicleDamageComponent_tr_31_Template, 1, 0, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, VehicleDamageComponent_tr_32_Template, 1, 0, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, VehicleDamageComponent_div_33_Template, 2, 0, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "mat-paginator", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.items.data.length || !ctx.items.filteredData.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", ctx.pageSizeOptions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], styles: [".text-blue-light[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-light-rgb));\n}\n.text-blue-main[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-main-rgb));\n}\n.text-blue-dark[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-dark-rgb));\n}\n.bg-grey-light[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-grey-light-rgb));\n}\n.bg-grey-dark[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-grey-5-rgb));\n}\n.bg-blue-light[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-light-rgb));\n}\n.bg-blue-main[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-main-rgb));\n}\n.bg-blue-dark[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-dark-rgb));\n}\n.text-xs[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.text-base[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.text-lg[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.text-xl[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.text-2xl[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.text-3xl[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.capitalize[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.rounded-xl[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  overflow: hidden;\n}\n.border-primary-1[_ngcontent-%COMP%] {\n  border: 1px solid rgb(var(--palette-blue-main-rgb));\n}\n.border-primary-2[_ngcontent-%COMP%] {\n  border: 2px solid rgb(var(--palette-blue-main-rgb));\n}\n.custom-scroll[_ngcontent-%COMP%] {\n  padding-right: 4px;\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0.5em;\n  border-radius: 5px;\n  background-color: rgb(var(--palette-grey-light-rgb));\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  border: 0.3em solid;\n  border-color: rgb(var(--palette-grey-5-rgb));\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  --table-header-color: rgb(var(--palette-white-rgb));\n  --table-header-background: rgb(var(--palette-blue-main-rgb));\n  --table-text-color: rgb(var(--palette-grey-9-rgb));\n  --table-row-hover-background: rgb(var(--palette-blue-light-rgb));\n  --page-background: rgb(var(--palette-white-rgb));\n  --page-spacing: 10px;\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 672px;\n  background: none;\n  border-collapse: collapse;\n  border-radius: 1em 1em 0 0;\n  overflow: hidden;\n}\n.table-wrapper[_ngcontent-%COMP%]   table.table-sm[_ngcontent-%COMP%] {\n  min-width: 370px;\n}\n.table-wrapper[_ngcontent-%COMP%]   table.table-sm[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%] {\n  padding: var(--page-spacing);\n}\n.table-wrapper[_ngcontent-%COMP%]   table.table-sm[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n  padding: var(--page-spacing);\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: var(--table-header-color);\n  background-color: var(--table-header-background);\n  font-size: 13px;\n  font-weight: 700;\n}\n@media (min-width: 821px) {\n  .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n  border-bottom-style: none;\n  padding: calc(var(--page-spacing));\n}\n@media (min-width: 821px) {\n  .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n    padding: calc(var(--page-spacing) * 2);\n  }\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: var(--table-text-color);\n  line-height: 1.6;\n  font-size: 13px;\n}\n@media (min-width: 821px) {\n  .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    font-size: 0.9em;\n  }\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%] {\n  border-bottom-style: none;\n  padding: var(--page-spacing) calc(var(--page-spacing));\n}\n@media (min-width: 821px) {\n  .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%] {\n    padding: calc(var(--page-spacing) * 2);\n  }\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%] {\n  height: auto;\n  transition: background-color 0.5s;\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]:hover {\n  background-color: var(--table-row-hover-background);\n  transition: background-color 0.5s;\n}\n.table-wrapper[_ngcontent-%COMP%]     [mat-table] .mat-sort-header-arrow {\n  color: var(--table-header-color);\n}\n.table-wrapper[_ngcontent-%COMP%]   mat-paginator[_ngcontent-%COMP%], .table-wrapper[_ngcontent-%COMP%]   .table-width[_ngcontent-%COMP%] {\n  min-width: 672px;\n  width: 100%;\n}\n.table-wrapper[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n  border: none;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  align-items: center;\n  margin-top: 5px;\n}\n.action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  all: unset;\n  display: inline-block;\n  cursor: pointer;\n  line-height: 0.8;\n}\n.action-buttons[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9wYWxldHRlcy9zaGFyZWQuc2NzcyIsInNyYy90aGVtZS9wYWxldHRlcy9tb2RlLnNjc3MiLCJzcmMvdGhlbWUvY3VzdG9tLWNsYXNzZXMuc2NzcyIsInNyYy9hcHAvYWRtaW5pc3RyYXRpb24vdmVoaWNsZS1kYW1hZ2UvdmVoaWNsZS1kYW1hZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvbWl4aW5zL3RhYmxlLWJhc2ljLXN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBQ0xBO0VBQ0UseUNBQUE7QUM2Q0Y7QUQzQ0E7RUFDRSx3Q0FBQTtBQzhDRjtBRDVDQTtFQUNFLHdDQUFBO0FDK0NGO0FEM0NBO0VBQ0Usb0RBQUE7QUM4Q0Y7QUQ1Q0E7RUFDRSxnREFBQTtBQytDRjtBRDdDQTtFQUNFLG9EQUFBO0FDZ0RGO0FEOUNBO0VBQ0UsbURBQUE7QUNpREY7QUQvQ0E7RUFDRSxtREFBQTtBQ2tERjtBRDlDQTtFQUNFLGtCQUFBO0FDaURGO0FEL0NBO0VBQ0UsbUJBQUE7QUNrREY7QURoREE7RUFDRSxlQUFBO0FDbURGO0FEakRBO0VBQ0UsbUJBQUE7QUNvREY7QURqREE7RUFDRSxrQkFBQTtBQ29ERjtBRGpEQTtFQUNFLGlCQUFBO0FDb0RGO0FEakRBO0VBQ0Usa0JBQUE7QUNvREY7QURqREE7RUFDRSxnQkFBQTtBQ29ERjtBRGxEQTtFQUNFLGdCQUFBO0FDcURGO0FEbERBO0VBQ0UsMEJBQUE7QUNxREY7QURsREE7RUFDRSxlQUFBO0FDcURGO0FEbERBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQ3FERjtBRGxEQTtFQUNFLG1EQUFBO0FDcURGO0FEbERBO0VBQ0UsbURBQUE7QUNxREY7QURsREE7RUFDRSxrQkFBQTtBQ3FERjtBRG5EQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9EQUFBO0FDc0RGO0FEbERBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0FDcURGO0FBL0lBO0VDRkUsbURBQUE7RUFDQSw0REFBQTtFQUNBLGtEQUFBO0VBQ0EsZ0VBQUE7RUFFQSxnREFBQTtFQUNBLG9CQUFBO0FEb0pGO0FDbEpFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QURvSko7QUNsSkk7RUFDRSxnQkFBQTtBRG9KTjtBQ2pKUTtFQUNFLDRCQUFBO0FEbUpWO0FDL0lRO0VBQ0UsNEJBQUE7QURpSlY7QUM1SUk7RUFDRSxnQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEOElOO0FDN0lNO0VBTEY7SUFNSSxlQUFBO0VEZ0pOO0FBQ0Y7QUM5SU07RUFDRSx5QkFBQTtFQUNBLGtDQUFBO0FEZ0pSO0FDL0lRO0VBSEY7SUFJSSxzQ0FBQTtFRGtKUjtBQUNGO0FDOUlJO0VBQ0UsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QURnSk47QUMvSU07RUFKRjtJQUtJLGdCQUFBO0VEa0pOO0FBQ0Y7QUNqSk07RUFDRSx5QkFBQTtFQUNBLHNEQUFBO0FEbUpSO0FDbEpRO0VBSEY7SUFJSSxzQ0FBQTtFRHFKUjtBQUNGO0FDakpJO0VBQ0UsWUFBQTtFQUNBLGlDQUFBO0FEbUpOO0FDakpNO0VBQ0UsMkJBQUE7RUFDQSw4QkFBQTtBRG1KUjtBQ2pKTTtFQUNFLDRCQUFBO0VBQ0EsK0JBQUE7QURtSlI7QUNoSk07RUFDRSxtREFBQTtFQUNBLGlDQUFBO0FEa0pSO0FDNUlJO0VBQ0UsZ0NBQUE7QUQ4SU47QUMxSUU7O0VBRUUsZ0JBQUE7RUFDQSxXQUFBO0FENElKO0FBck9FO0VBQ0UsWUFBQTtBQXVPSjtBQW5PQTtFQUNFLGFBQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBc09GO0FBck9FO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBdU9KO0FBck9FO0VBQ0ksaUJBQUE7QUF1T04iLCJmaWxlIjoic3JjL2FwcC9hZG1pbmlzdHJhdGlvbi92ZWhpY2xlLWRhbWFnZS92ZWhpY2xlLWRhbWFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIFNoYXJlZFxuKi9cblxuQGltcG9ydCAncHJlZmVyZW5jZXMnO1xuQGltcG9ydCAnaW50ZXJmYWNlJztcbkBpbXBvcnQgJ21vZGUnO1xuXG4vLyBBbiBhYnN0cmFjdCB3YXkgdG8gcHJvdmlkZSBjb2xvcnMuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGFuIGludGVyZmFjZSB0byBib3RoIFNhc3MgdmFyaWFibGVzIGFuZCBDU1MgNCB2YXJpYWJsZXMgYmFzZWQgY29sb3IgcGFsZXR0ZXMuXG5AZnVuY3Rpb24gcGFsZXR0ZS1jb2xvcigkY29sb3ItbmFtZSwgJGFscGhhOiAxKSB7XG4gIC8vICRjb2xvci1wYWxldHRlLW1vZGUgICAgICAgID0+ICBEZWZpbmVkIGluIG1vZGUuc2Nzc1xuICAvLyAkY2hvb3Nlbi1wYWxldHRlICAgICAgICAgICA9PiAgRGVmaW5lZCBpbiBtb2RlLnNjc3NcbiAgLy8gJGNvbG9yLXBhbGV0dGUtaW50ZXJmYWNlICAgPT4gIERlZmluZWQgaW4gaW50ZXJmYWNlLnNjc3NcbiAgLy8gJGNzczQtdmFyLXByZWZpeCAgICAgICAgICAgPT4gIERlZmluZWQgaW4gcHJlZmVyZW5jZXMuc2Nzc1xuICAvLyAkY3NzNC1jb2xvci1mb3JtYXQgICAgICAgICA9PiAgRGVmaW5lZCBpbiBwcmVmZXJlbmNlcy5zY3NzXG5cbiAgQGlmICgkY29sb3ItcGFsZXR0ZS1tb2RlID09ICdjc3MtNCcpIHtcbiAgICAkcGFsZXR0ZS1yZWZlcmVuY2U6ICRjb2xvci1wYWxldHRlLWludGVyZmFjZTtcblxuICAgICRjb2xvci12YXJpYWJsZS1pbmRleDogaW5kZXgoJHBhbGV0dGUtcmVmZXJlbmNlLCAkY29sb3ItbmFtZSk7XG5cbiAgICBAaWYgKHR5cGVfb2YoJGNvbG9yLXZhcmlhYmxlLWluZGV4KSA9PSAnbnVtYmVyJykge1xuICAgICAgJGNvbG9yLXZhcmlhYmxlLW5hbWU6IG50aCgkcGFsZXR0ZS1yZWZlcmVuY2UsICRjb2xvci12YXJpYWJsZS1pbmRleCk7XG5cbiAgICAgIEBpZiAoJGFscGhhID4gMCBhbmQgJGFscGhhIDwgMSkge1xuICAgICAgICBAcmV0dXJuICN7J3JnYmEodmFyKCcgKyAkY3NzNC12YXItcHJlZml4ICsgJGNvbG9yLXZhcmlhYmxlLW5hbWUgKyAnLScgKyAkY3NzNC1jb2xvci1mb3JtYXQgKycpLCAjeyRhbHBoYX0pJ307XG4gICAgICB9IEBlbHNlIGlmICgkYWxwaGEgPT0gMSkge1xuICAgICAgICBAcmV0dXJuICN7J3JnYih2YXIoJyArICRjc3M0LXZhci1wcmVmaXggKyAkY29sb3ItdmFyaWFibGUtbmFtZSArICctJyArICRjc3M0LWNvbG9yLWZvcm1hdCArICcpKSd9O1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIEBlcnJvciBcIkFscGhhICgjeyRhbHBoYX0pIG11c3QgYmUgYSBudW1iZXJcIjtcbiAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgIEBlcnJvciBcIkNvbG9yICgjeyRjb2xvci1uYW1lfSkgd2FzIG5vdCBmb3VuZCBvbiBDb2xvciBQYWxldHRlIGRlZmluaXRpb24uIE1ha2Ugc3VyZSBpdCdzIGRlZmluZWQgaW4gdGhlIHRoZW1lL3BhbGV0dGVzL2ludGVyZmFjZS5zY3NzIGZpbGVcIjtcbiAgICB9XG4gIH0gQGVsc2UgaWYgKCRjb2xvci1wYWxldHRlLW1vZGUgPT0gJ3Nhc3MnKSB7XG4gICAgJHBhbGV0dGUtcmVmZXJlbmNlOiAkY2hvb3Nlbi1wYWxldHRlO1xuXG4gICAgJGNvbG9yLXZhcmlhYmxlOiBtYXAtZ2V0KCRwYWxldHRlLXJlZmVyZW5jZSwgJGNvbG9yLW5hbWUpO1xuXG4gICAgLy8gQ2hlY2sgaWYgaXQgaXMgYSBTYXNzIGNvbG9yXG4gICAgQGlmICh0eXBlX29mKCRjb2xvci12YXJpYWJsZSkgPT0gJ2NvbG9yJykge1xuICAgICAgQGlmICgkYWxwaGEgPiAwIGFuZCAkYWxwaGEgPCAxKSB7XG4gICAgICAgIEByZXR1cm4gcmdiYSgkY29sb3ItdmFyaWFibGUsICRhbHBoYSk7XG4gICAgICB9IEBlbHNlIGlmICgkYWxwaGEgPT0gMSkge1xuICAgICAgICBAcmV0dXJuICRjb2xvci12YXJpYWJsZTtcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICBAZXJyb3IgXCJBbHBoYSAoI3skYWxwaGF9KSBtdXN0IGJlIGEgbnVtYmVyXCI7XG4gICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICBAZXJyb3IgXCJDb2xvciAoI3skY29sb3ItdmFyaWFibGV9KSBpcyBub3QgYSBTYXNzIGNvbG9yXCI7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAZXJyb3IgJ05vIENvbG9yIFBhbGV0dGUgbW9kZSBzZWxlY3RlZCBpbiB0aGVtZS9wYWxldHRlcy9wcmVmZXJlbmNlcy5zY3NzJztcbiAgfVxufVxuIiwiLypcbiAgQ1NTIDQgTW9kZVxuKi9cbiRjb2xvci1wYWxldHRlLW1vZGU6ICdjc3MtNCc7XG5cblxuLypcbiAgU2FzcyBNb2RlXG4qL1xuLy8gQGltcG9ydCAnY29yZSc7XG4vL1xuLy8gJGNvbG9yLXBhbGV0dGUtbW9kZTogJ3Nhc3MnO1xuLy9cbi8vIC8vIEltcG9ydCB0aGUgZGVmaW5pdGlvbnMgb2YgdGhlIHBhbGV0dGUgeW91IHdhbnQgdG8gdXNlXG4vLyBAaW1wb3J0ICdwYWxldHRlLTEvZGVmaW5pdGlvbnMnO1xuLy8gLy8gQGltcG9ydCAncGFsZXR0ZS0yL2RlZmluaXRpb25zJztcbi8vXG4vLyAvLyBBc3NpZ24gYSBwYXJ0aWN1bGFyIENvbG9yIFBhbGV0dGUgdG8gdGhlICdjaG9vc2VuLXBhbGV0dGUnIHBvaW50ZXIuXG4vLyAvLyAkY2hvb3Nlbi1wYWxldHRlIHdpbGwgYmUgYSBTYXNzIG1hcCBwb2ludGluZyB0byBhbm90aGVyIGNvbG9yIHBhbGV0dGUgU2FzcyBtYXBcbi8vICRjaG9vc2VuLXBhbGV0dGU6IGJ1aWxkU2Fzc1BhbGV0dGUoJHBhbGV0dGUtMSk7XG4vLyAvLyAkY2hvb3Nlbi1wYWxldHRlOiBidWlsZFNhc3NQYWxldHRlKCRwYWxldHRlLTIpO1xuIiwiLy9jb2xvclxuLnRleHQtYmx1ZS1saWdodCB7XG4gIGNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJibHVlLWxpZ2h0XCIpfTtcbn1cbi50ZXh0LWJsdWUtbWFpbiB7XG4gIGNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJibHVlLW1haW5cIil9O1xufVxuLnRleHQtYmx1ZS1kYXJrIHtcbiAgY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtZGFya1wiKX07XG59XG5cbi8vYmFja2dyb3VuZFxuLmJnLWdyZXktbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJncmV5LWxpZ2h0XCIpfTtcbn1cbi5iZy1ncmV5LWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJncmV5LTVcIil9O1xufVxuLmJnLWJsdWUtbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJibHVlLWxpZ2h0XCIpfTtcbn1cbi5iZy1ibHVlLW1haW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJibHVlLW1haW5cIil9O1xufVxuLmJnLWJsdWUtZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtZGFya1wiKX07XG59XG5cbi8vdGV4dFxuLnRleHQteHMge1xuICBmb250LXNpemU6IDAuNzVyZW07XG59XG4udGV4dC1zbSB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG59XG4udGV4dC1iYXNlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLnRleHQtbGcge1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xufVxuXG4udGV4dC14bCB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuLnRleHQtMnhsIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi50ZXh0LTN4bCB7XG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcbn1cblxuLmZvbnQtc2VtaWJvbGQge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmZvbnQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5jYXBpdGFsaXplIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5jdXJzb3ItcG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJvdW5kZWQteGwge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYm9yZGVyLXByaW1hcnktMSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbWFpblwiKX07XG59XG5cbi5ib3JkZXItcHJpbWFyeS0yIHtcbiAgYm9yZGVyOiAycHggc29saWQgI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1tYWluXCIpfTtcbn1cblxuLmN1c3RvbS1zY3JvbGx7XG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcbn1cbi5jdXN0b20tc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAuNWVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImdyZXktbGlnaHRcIil9O1xufVxuXG5cbi5jdXN0b20tc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAuM2VtIHNvbGlkO1xuICBib3JkZXItY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImdyZXktNVwiKX07XG59XG4iLCJAaW1wb3J0IFwic2hhcmVkXCI7XG5cbjpob3N0IHtcbn1cblxuLnRhYmxlLXdyYXBwZXIge1xuICBAaW5jbHVkZSB0YWJsZS1iYXNpYy1zdHlsZXMoKTtcblxuICB0aC5tYXQtaGVhZGVyLWNlbGwge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxufVxuXG4uYWN0aW9uLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGJ1dHRvbiB7XG4gICAgYWxsOiB1bnNldDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAwLjg7XG4gIH1cbiAgbWF0LWljb257XG4gICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgfVxufVxuXG4iLCJAaW1wb3J0IFwicGFsZXR0ZXMvc2hhcmVkXCI7XG5cbkBtaXhpbiB0YWJsZS1iYXNpYy1zdHlsZXMoKSB7XG4gIC0tdGFibGUtaGVhZGVyLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJ3aGl0ZVwiKX07XG4gIC0tdGFibGUtaGVhZGVyLWJhY2tncm91bmQ6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbWFpblwiKX07XG4gIC0tdGFibGUtdGV4dC1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiZ3JleS05XCIpfTtcbiAgLS10YWJsZS1yb3ctaG92ZXItYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1saWdodFwiKX07XG5cbiAgLS1wYWdlLWJhY2tncm91bmQ6ICN7cGFsZXR0ZS1jb2xvcihcIndoaXRlXCIpfTtcbiAgLS1wYWdlLXNwYWNpbmc6IDEwcHg7XG5cbiAgdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogNjcycHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIGJvcmRlci1yYWRpdXM6IDFlbSAxZW0gMCAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmLnRhYmxlLXNtIHtcbiAgICAgIG1pbi13aWR0aDogMzcwcHg7XG5cbiAgICAgIHRkIHtcbiAgICAgICAgJi5tYXQtY2VsbCB7XG4gICAgICAgICAgcGFkZGluZzogdmFyKC0tcGFnZS1zcGFjaW5nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGgge1xuICAgICAgICAmLm1hdC1oZWFkZXItY2VsbCB7XG4gICAgICAgICAgcGFkZGluZzogdmFyKC0tcGFnZS1zcGFjaW5nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10YWJsZS1oZWFkZXItY29sb3IpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFibGUtaGVhZGVyLWJhY2tncm91bmQpO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA4MjFweCkge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICB9XG5cbiAgICAgICYubWF0LWhlYWRlci1jZWxsIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpKTtcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDgyMXB4KSB7XG4gICAgICAgICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0ZCB7XG4gICAgICBjb2xvcjogdmFyKC0tdGFibGUtdGV4dC1jb2xvcik7XG4gICAgICBsaW5lLWhlaWdodDogMS42O1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDgyMXB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTouOWVtO1xuICAgICAgfVxuICAgICAgJi5tYXQtY2VsbCB7XG4gICAgICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IHZhcigtLXBhZ2Utc3BhY2luZykgY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpKTtcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDgyMXB4KSB7XG4gICAgICAgICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0ci5tYXQtcm93IHtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cztcblxuICAgICAgdGQ6Zmlyc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDZweDtcbiAgICAgIH1cbiAgICAgIHRkOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNnB4O1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFibGUtcm93LWhvdmVyLWJhY2tncm91bmQpO1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXM7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgOjpuZy1kZWVwIFttYXQtdGFibGVdIHtcbiAgICAubWF0LXNvcnQtaGVhZGVyLWFycm93IHtcbiAgICAgIGNvbG9yOiB2YXIoLS10YWJsZS1oZWFkZXItY29sb3IpO1xuICAgIH1cbiAgfVxuXG4gIG1hdC1wYWdpbmF0b3IsXG4gIC50YWJsZS13aWR0aCB7XG4gICAgbWluLXdpZHRoOiA2NzJweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG5AbWl4aW4gdGFibGUtcGFnaW5hdG9yLXN0eWxlcygpIHtcbiAgLS1wYWdpbmF0b3ItYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKFwiZ3JleS0wXCIpfTtcbiAgLS1wYWdpbmF0b3ItdGV4dC1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiZ3JleS01XCIpfTtcbiAgLS1wYWdpbmF0b3ItY29udHJvbHMtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcInByaW1hcnktZGFya1wiKX07XG4gIC0tcGFnaW5hdG9yLWRpc2FibGVkLWNvbnRyb2xzLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJwcmltYXJ5LWRhcmtcIiwgMC4xKX07XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnaW5hdG9yLWJhY2tncm91bmQpO1xuXG4gIC8vIE92ZXJyaWRlIE1hdGVyaWFsIHN0eWxlc1xuICAubWF0LXBhZ2luYXRvci1jb250YWluZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1pbi13aWR0aDogNjcycHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSB7XG4gICAgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplLWxhYmVsIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wYWdpbmF0b3ItdGV4dC1jb2xvcik7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplLXNlbGVjdCB7XG4gICAgICAubWF0LXNlbGVjdC12YWx1ZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYWdpbmF0b3ItY29udHJvbHMtY29sb3IpO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhZ2luYXRvci1jb250cm9scy1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyAubWF0LXBhZ2luYXRvci1wYWdlLXNpemVcblxuICAubWF0LXBhZ2luYXRvci1yYW5nZS1hY3Rpb25zIHtcbiAgICAubWF0LXBhZ2luYXRvci1yYW5nZS1sYWJlbCB7XG4gICAgICBjb2xvcjogdmFyKC0tcGFnaW5hdG9yLXRleHQtY29sb3IpO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIC5tYXQtcGFnaW5hdG9yLW5hdmlnYXRpb24tcHJldmlvdXMsXG4gICAgLm1hdC1wYWdpbmF0b3ItbmF2aWdhdGlvbi1uZXh0IHtcbiAgICAgICY6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhZ2luYXRvci1jb250cm9scy1jb2xvcik7XG4gICAgICB9XG4gICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYWdpbmF0b3ItZGlzYWJsZWQtY29udHJvbHMtY29sb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyAubWF0LXBhZ2luYXRvci1yYW5nZS1hY3Rpb25zXG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VehicleDamageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vehicle-damage',
                templateUrl: './vehicle-damage.component.html',
                styleUrls: ['./vehicle-damage.component.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: src_app_shared_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"] }, { type: src_app_shared_notifications_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }, { type: src_app_business_services_administration_service__WEBPACK_IMPORTED_MODULE_8__["AdministrationService"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }] }); })();


/***/ }),

/***/ "iQ0E":
/*!**************************************************************************************************************!*\
  !*** ./src/app/administration/vehicle-template/vehicle-template-dialog/vehicle-template-dialog.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: VehicleTemplateDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleTemplateDialogComponent", function() { return VehicleTemplateDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_business_services_administration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/business/services/administration.service */ "RTdY");
/* harmony import */ var src_app_shared_notifications_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/notifications/notification.service */ "38VU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-image-cropper */ "rIor");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");










function VehicleTemplateDialogComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 50);
} }
function VehicleTemplateDialogComponent_h3_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add vehicle template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VehicleTemplateDialogComponent_h3_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit vehicle template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VehicleTemplateDialogComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.selectedTemplate.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class VehicleTemplateDialogComponent {
    constructor(dialogRef, data, administrationService, notificationService) {
        var _a;
        this.dialogRef = dialogRef;
        this.data = data;
        this.administrationService = administrationService;
        this.notificationService = notificationService;
        this.subscriptions = [];
        this.isLoading = false;
        this.imageChangedEvent = "";
        this.croppedImage = null;
        this.templateName = "";
        this.templateNameError = false;
        if (this.data.action === "edit") {
            this.selectedTemplate = this.data.template;
            this.templateName = (_a = this.selectedTemplate) === null || _a === void 0 ? void 0 : _a.name;
        }
    }
    ngOnInit() { }
    fileChangeEvent(event) {
        this.imageChangedEvent = event;
    }
    imageCropped(event) {
        this.croppedImage = event.base64;
    }
    imageLoaded(image) {
        // show cropper
    }
    cropperReady() {
        // cropper ready
    }
    loadImageFailed() {
        // show message
    }
    onSubmit() {
        var _a, _b;
        this.templateNameError = !this.templateName;
        if (!this.templateName) {
            this.notificationService.error("Template name is required");
            return;
        }
        if (!((_a = this.selectedTemplate) === null || _a === void 0 ? void 0 : _a.imageUrl) && !this.croppedImage) {
            this.notificationService.error("Image is required");
            return;
        }
        this.isLoading = true;
        (this.data.action === "new"
            ? this.administrationService.saveVehicleTemplate({ name: this.templateName, imageB64: this.croppedImage })
            : this.administrationService.updateVehicleTemplate({ name: this.templateName, imageB64: (_b = this.croppedImage) !== null && _b !== void 0 ? _b : this.selectedTemplate.imageUrl }, this.selectedTemplate.id)).subscribe((res) => {
            this.isLoading = false;
            this.dialogRef.close();
        }, (err) => {
            var _a, _b;
            this.isLoading = false;
            if ((_b = (_a = err.error) === null || _a === void 0 ? void 0 : _a.message) === null || _b === void 0 ? void 0 : _b.includes("expected `name` to be unique")) {
                this.notificationService.error("Name already exists");
                this.templateNameError = true;
            }
            else {
                this.notificationService.error();
            }
        });
    }
    onCancel() {
        this.dialogRef.close();
    }
    ngOnDestroy() {
        this.subscriptions.forEach((sub) => sub.unsubscribe());
    }
}
VehicleTemplateDialogComponent.ɵfac = function VehicleTemplateDialogComponent_Factory(t) { return new (t || VehicleTemplateDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_business_services_administration_service__WEBPACK_IMPORTED_MODULE_2__["AdministrationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_notifications_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"])); };
VehicleTemplateDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VehicleTemplateDialogComponent, selectors: [["app-vehicle-template-dialog"]], decls: 18, vars: 10, consts: [[1, "dialog-content", "custom-scroll"], ["class", "dialog-loader", 4, "ngIf"], [4, "ngIf"], [1, "form-group"], [1, "w-100", "input-group", "pt-2", "mb-3"], ["type", "text", "placeholder", "Template name...", "name", "name", 1, "form-control", 3, "value", "change"], ["class", "w-100 input-group", 4, "ngIf"], ["type", "file", "accept", "image/png,image/jpeg,image/jpg,image/webp", 1, "mb-2", 3, "change"], ["format", "png", 3, "imageChangedEvent", "maintainAspectRatio", "aspectRatio", "imageCropped", "imageLoaded", "cropperReady", "loadImageFailed"], [1, "d-flex", "w-100", "px-4", "pt-3", "justify-content-between", "mt-3"], [1, "col-5"], ["type", "button", 1, "btn", "w-100", "btn-outline-secondary", 3, "click"], [1, "btn", "w-100", "btn-success", 3, "click"], [1, "dialog-loader"], [3, "diameter"], [1, "w-100", "input-group"], [1, "border", "mx-auto", 2, "min-width", "90%", 3, "src"]], template: function VehicleTemplateDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VehicleTemplateDialogComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VehicleTemplateDialogComponent_h3_2_Template, 2, 0, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VehicleTemplateDialogComponent_h3_3_Template, 2, 0, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function VehicleTemplateDialogComponent_Template_input_change_6_listener($event) { return ctx.templateName = $event.target.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, VehicleTemplateDialogComponent_div_7_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function VehicleTemplateDialogComponent_Template_input_change_9_listener($event) { return ctx.fileChangeEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "image-cropper", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageCropped", function VehicleTemplateDialogComponent_Template_image_cropper_imageCropped_10_listener($event) { return ctx.imageCropped($event); })("imageLoaded", function VehicleTemplateDialogComponent_Template_image_cropper_imageLoaded_10_listener() { return ctx.imageLoaded(); })("cropperReady", function VehicleTemplateDialogComponent_Template_image_cropper_cropperReady_10_listener() { return ctx.cropperReady(); })("loadImageFailed", function VehicleTemplateDialogComponent_Template_image_cropper_loadImageFailed_10_listener() { return ctx.loadImageFailed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VehicleTemplateDialogComponent_Template_button_click_13_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VehicleTemplateDialogComponent_Template_button_click_16_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.action === "new");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.action === "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.templateNameError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.templateName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedTemplate && !ctx.croppedImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageChangedEvent", ctx.imageChangedEvent)("maintainAspectRatio", true)("aspectRatio", 4 / 2.5);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_6__["ImageCropperComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatSpinner"]], styles: [".text-blue-light[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-light-rgb));\n}\n.text-blue-main[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-main-rgb));\n}\n.text-blue-dark[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-dark-rgb));\n}\n.bg-grey-light[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-grey-light-rgb));\n}\n.bg-grey-dark[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-grey-5-rgb));\n}\n.bg-blue-light[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-light-rgb));\n}\n.bg-blue-main[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-main-rgb));\n}\n.bg-blue-dark[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-dark-rgb));\n}\n.text-xs[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.text-base[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.text-lg[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.text-xl[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.text-2xl[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.text-3xl[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.capitalize[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.rounded-xl[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  overflow: hidden;\n}\n.border-primary-1[_ngcontent-%COMP%] {\n  border: 1px solid rgb(var(--palette-blue-main-rgb));\n}\n.border-primary-2[_ngcontent-%COMP%] {\n  border: 2px solid rgb(var(--palette-blue-main-rgb));\n}\n.custom-scroll[_ngcontent-%COMP%] {\n  padding-right: 4px;\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0.5em;\n  border-radius: 5px;\n  background-color: rgb(var(--palette-grey-light-rgb));\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  border: 0.3em solid;\n  border-color: rgb(var(--palette-grey-5-rgb));\n}\n[_nghost-%COMP%] {\n  position: relative;\n}\n.custom-select-wrapper[_ngcontent-%COMP%] {\n  --select-padding: 12px;\n  --select-icon-width: 14px;\n  --form-icons-color: rgb(var(--palette-primary-rgb));\n  --form-input-background: rgb(var(--palette-grey-0-rgb));\n  position: relative;\n}\n.custom-select-wrapper[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%] {\n  padding: calc(var(--select-padding) / 2) var(--select-padding);\n  -webkit-padding-end: calc(var(--select-padding) + var(--select-icon-width));\n          padding-inline-end: calc(var(--select-padding) + var(--select-icon-width));\n  background: none;\n  background-color: var(--form-input-background);\n}\n.custom-select-wrapper[_ngcontent-%COMP%]   .half-arrow-icon[_ngcontent-%COMP%] {\n  right: var(--select-padding);\n  top: 0px;\n  pointer-events: none;\n  height: 100%;\n  width: var(--select-icon-width);\n  color: var(--form-icons-color);\n  position: absolute;\n}\n.new-customer-form[_ngcontent-%COMP%] {\n  max-height: 70vh;\n  padding-bottom: 1rem;\n  overflow-y: auto;\n}\n[_nghost-%COMP%]     {\n  --cropper-outline-color: rgba(0, 0, 0, 0.4);\n}\n[_nghost-%COMP%]     .mat-horizontal-stepper-header {\n  height: 40px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9wYWxldHRlcy9zaGFyZWQuc2NzcyIsInNyYy90aGVtZS9wYWxldHRlcy9tb2RlLnNjc3MiLCJzcmMvdGhlbWUvY3VzdG9tLWNsYXNzZXMuc2NzcyIsInNyYy9hcHAvYWRtaW5pc3RyYXRpb24vdmVoaWNsZS10ZW1wbGF0ZS92ZWhpY2xlLXRlbXBsYXRlLWRpYWxvZy92ZWhpY2xlLXRlbXBsYXRlLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9taXhpbnMvaW5wdXRzL3NlbGVjdC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBQ0xBO0VBQ0UseUNBQUE7QUM2Q0Y7QUQzQ0E7RUFDRSx3Q0FBQTtBQzhDRjtBRDVDQTtFQUNFLHdDQUFBO0FDK0NGO0FEM0NBO0VBQ0Usb0RBQUE7QUM4Q0Y7QUQ1Q0E7RUFDRSxnREFBQTtBQytDRjtBRDdDQTtFQUNFLG9EQUFBO0FDZ0RGO0FEOUNBO0VBQ0UsbURBQUE7QUNpREY7QUQvQ0E7RUFDRSxtREFBQTtBQ2tERjtBRDlDQTtFQUNFLGtCQUFBO0FDaURGO0FEL0NBO0VBQ0UsbUJBQUE7QUNrREY7QURoREE7RUFDRSxlQUFBO0FDbURGO0FEakRBO0VBQ0UsbUJBQUE7QUNvREY7QURqREE7RUFDRSxrQkFBQTtBQ29ERjtBRGpEQTtFQUNFLGlCQUFBO0FDb0RGO0FEakRBO0VBQ0Usa0JBQUE7QUNvREY7QURqREE7RUFDRSxnQkFBQTtBQ29ERjtBRGxEQTtFQUNFLGdCQUFBO0FDcURGO0FEbERBO0VBQ0UsMEJBQUE7QUNxREY7QURsREE7RUFDRSxlQUFBO0FDcURGO0FEbERBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQ3FERjtBRGxEQTtFQUNFLG1EQUFBO0FDcURGO0FEbERBO0VBQ0UsbURBQUE7QUNxREY7QURsREE7RUFDRSxrQkFBQTtBQ3FERjtBRG5EQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9EQUFBO0FDc0RGO0FEbERBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0FDcURGO0FBbEpBO0VBQ0Usa0JBQUE7QUFxSkY7QUFuSkE7RUNJRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbURBQUE7RUFDQSx1REFBQTtFQUVBLGtCQUFBO0FEa0pGO0FDaEpFO0VBQ0UsOERBQUE7RUFDQSwyRUFBQTtVQUFBLDBFQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4Q0FBQTtBRGtKSjtBQ2hKRTtFQUNFLDRCQUFBO0VBQ0EsUUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBRGtKSjtBQXRLQTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQXlLRjtBQXRLQTtFQUtFLDJDQUFBO0FBcUtGO0FBektFO0VBQ0UsdUJBQUE7QUEyS0oiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmlzdHJhdGlvbi92ZWhpY2xlLXRlbXBsYXRlL3ZlaGljbGUtdGVtcGxhdGUtZGlhbG9nL3ZlaGljbGUtdGVtcGxhdGUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgU2hhcmVkXG4qL1xuXG5AaW1wb3J0ICdwcmVmZXJlbmNlcyc7XG5AaW1wb3J0ICdpbnRlcmZhY2UnO1xuQGltcG9ydCAnbW9kZSc7XG5cbi8vIEFuIGFic3RyYWN0IHdheSB0byBwcm92aWRlIGNvbG9ycy5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgYW4gaW50ZXJmYWNlIHRvIGJvdGggU2FzcyB2YXJpYWJsZXMgYW5kIENTUyA0IHZhcmlhYmxlcyBiYXNlZCBjb2xvciBwYWxldHRlcy5cbkBmdW5jdGlvbiBwYWxldHRlLWNvbG9yKCRjb2xvci1uYW1lLCAkYWxwaGE6IDEpIHtcbiAgLy8gJGNvbG9yLXBhbGV0dGUtbW9kZSAgICAgICAgPT4gIERlZmluZWQgaW4gbW9kZS5zY3NzXG4gIC8vICRjaG9vc2VuLXBhbGV0dGUgICAgICAgICAgID0+ICBEZWZpbmVkIGluIG1vZGUuc2Nzc1xuICAvLyAkY29sb3ItcGFsZXR0ZS1pbnRlcmZhY2UgICA9PiAgRGVmaW5lZCBpbiBpbnRlcmZhY2Uuc2Nzc1xuICAvLyAkY3NzNC12YXItcHJlZml4ICAgICAgICAgICA9PiAgRGVmaW5lZCBpbiBwcmVmZXJlbmNlcy5zY3NzXG4gIC8vICRjc3M0LWNvbG9yLWZvcm1hdCAgICAgICAgID0+ICBEZWZpbmVkIGluIHByZWZlcmVuY2VzLnNjc3NcblxuICBAaWYgKCRjb2xvci1wYWxldHRlLW1vZGUgPT0gJ2Nzcy00Jykge1xuICAgICRwYWxldHRlLXJlZmVyZW5jZTogJGNvbG9yLXBhbGV0dGUtaW50ZXJmYWNlO1xuXG4gICAgJGNvbG9yLXZhcmlhYmxlLWluZGV4OiBpbmRleCgkcGFsZXR0ZS1yZWZlcmVuY2UsICRjb2xvci1uYW1lKTtcblxuICAgIEBpZiAodHlwZV9vZigkY29sb3ItdmFyaWFibGUtaW5kZXgpID09ICdudW1iZXInKSB7XG4gICAgICAkY29sb3ItdmFyaWFibGUtbmFtZTogbnRoKCRwYWxldHRlLXJlZmVyZW5jZSwgJGNvbG9yLXZhcmlhYmxlLWluZGV4KTtcblxuICAgICAgQGlmICgkYWxwaGEgPiAwIGFuZCAkYWxwaGEgPCAxKSB7XG4gICAgICAgIEByZXR1cm4gI3sncmdiYSh2YXIoJyArICRjc3M0LXZhci1wcmVmaXggKyAkY29sb3ItdmFyaWFibGUtbmFtZSArICctJyArICRjc3M0LWNvbG9yLWZvcm1hdCArJyksICN7JGFscGhhfSknfTtcbiAgICAgIH0gQGVsc2UgaWYgKCRhbHBoYSA9PSAxKSB7XG4gICAgICAgIEByZXR1cm4gI3sncmdiKHZhcignICsgJGNzczQtdmFyLXByZWZpeCArICRjb2xvci12YXJpYWJsZS1uYW1lICsgJy0nICsgJGNzczQtY29sb3ItZm9ybWF0ICsgJykpJ307XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgQGVycm9yIFwiQWxwaGEgKCN7JGFscGhhfSkgbXVzdCBiZSBhIG51bWJlclwiO1xuICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgQGVycm9yIFwiQ29sb3IgKCN7JGNvbG9yLW5hbWV9KSB3YXMgbm90IGZvdW5kIG9uIENvbG9yIFBhbGV0dGUgZGVmaW5pdGlvbi4gTWFrZSBzdXJlIGl0J3MgZGVmaW5lZCBpbiB0aGUgdGhlbWUvcGFsZXR0ZXMvaW50ZXJmYWNlLnNjc3MgZmlsZVwiO1xuICAgIH1cbiAgfSBAZWxzZSBpZiAoJGNvbG9yLXBhbGV0dGUtbW9kZSA9PSAnc2FzcycpIHtcbiAgICAkcGFsZXR0ZS1yZWZlcmVuY2U6ICRjaG9vc2VuLXBhbGV0dGU7XG5cbiAgICAkY29sb3ItdmFyaWFibGU6IG1hcC1nZXQoJHBhbGV0dGUtcmVmZXJlbmNlLCAkY29sb3ItbmFtZSk7XG5cbiAgICAvLyBDaGVjayBpZiBpdCBpcyBhIFNhc3MgY29sb3JcbiAgICBAaWYgKHR5cGVfb2YoJGNvbG9yLXZhcmlhYmxlKSA9PSAnY29sb3InKSB7XG4gICAgICBAaWYgKCRhbHBoYSA+IDAgYW5kICRhbHBoYSA8IDEpIHtcbiAgICAgICAgQHJldHVybiByZ2JhKCRjb2xvci12YXJpYWJsZSwgJGFscGhhKTtcbiAgICAgIH0gQGVsc2UgaWYgKCRhbHBoYSA9PSAxKSB7XG4gICAgICAgIEByZXR1cm4gJGNvbG9yLXZhcmlhYmxlO1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIEBlcnJvciBcIkFscGhhICgjeyRhbHBoYX0pIG11c3QgYmUgYSBudW1iZXJcIjtcbiAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgIEBlcnJvciBcIkNvbG9yICgjeyRjb2xvci12YXJpYWJsZX0pIGlzIG5vdCBhIFNhc3MgY29sb3JcIjtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBlcnJvciAnTm8gQ29sb3IgUGFsZXR0ZSBtb2RlIHNlbGVjdGVkIGluIHRoZW1lL3BhbGV0dGVzL3ByZWZlcmVuY2VzLnNjc3MnO1xuICB9XG59XG4iLCIvKlxuICBDU1MgNCBNb2RlXG4qL1xuJGNvbG9yLXBhbGV0dGUtbW9kZTogJ2Nzcy00JztcblxuXG4vKlxuICBTYXNzIE1vZGVcbiovXG4vLyBAaW1wb3J0ICdjb3JlJztcbi8vXG4vLyAkY29sb3ItcGFsZXR0ZS1tb2RlOiAnc2Fzcyc7XG4vL1xuLy8gLy8gSW1wb3J0IHRoZSBkZWZpbml0aW9ucyBvZiB0aGUgcGFsZXR0ZSB5b3Ugd2FudCB0byB1c2Vcbi8vIEBpbXBvcnQgJ3BhbGV0dGUtMS9kZWZpbml0aW9ucyc7XG4vLyAvLyBAaW1wb3J0ICdwYWxldHRlLTIvZGVmaW5pdGlvbnMnO1xuLy9cbi8vIC8vIEFzc2lnbiBhIHBhcnRpY3VsYXIgQ29sb3IgUGFsZXR0ZSB0byB0aGUgJ2Nob29zZW4tcGFsZXR0ZScgcG9pbnRlci5cbi8vIC8vICRjaG9vc2VuLXBhbGV0dGUgd2lsbCBiZSBhIFNhc3MgbWFwIHBvaW50aW5nIHRvIGFub3RoZXIgY29sb3IgcGFsZXR0ZSBTYXNzIG1hcFxuLy8gJGNob29zZW4tcGFsZXR0ZTogYnVpbGRTYXNzUGFsZXR0ZSgkcGFsZXR0ZS0xKTtcbi8vIC8vICRjaG9vc2VuLXBhbGV0dGU6IGJ1aWxkU2Fzc1BhbGV0dGUoJHBhbGV0dGUtMik7XG4iLCIvL2NvbG9yXG4udGV4dC1ibHVlLWxpZ2h0IHtcbiAgY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbGlnaHRcIil9O1xufVxuLnRleHQtYmx1ZS1tYWluIHtcbiAgY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbWFpblwiKX07XG59XG4udGV4dC1ibHVlLWRhcmsge1xuICBjb2xvcjogI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1kYXJrXCIpfTtcbn1cblxuLy9iYWNrZ3JvdW5kXG4uYmctZ3JleS1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImdyZXktbGlnaHRcIil9O1xufVxuLmJnLWdyZXktZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImdyZXktNVwiKX07XG59XG4uYmctYmx1ZS1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbGlnaHRcIil9O1xufVxuLmJnLWJsdWUtbWFpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbWFpblwiKX07XG59XG4uYmctYmx1ZS1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1kYXJrXCIpfTtcbn1cblxuLy90ZXh0XG4udGV4dC14cyB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbn1cbi50ZXh0LXNtIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn1cbi50ZXh0LWJhc2Uge1xuICBmb250LXNpemU6IDFyZW07XG59XG4udGV4dC1sZyB7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG59XG5cbi50ZXh0LXhsIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuXG4udGV4dC0yeGwge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLnRleHQtM3hsIHtcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xufVxuXG4uZm9udC1zZW1pYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uZm9udC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmNhcGl0YWxpemUge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmN1cnNvci1wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucm91bmRlZC14bCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5ib3JkZXItcHJpbWFyeS0xIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1tYWluXCIpfTtcbn1cblxuLmJvcmRlci1wcmltYXJ5LTIge1xuICBib3JkZXI6IDJweCBzb2xpZCAje3BhbGV0dGUtY29sb3IoXCJibHVlLW1haW5cIil9O1xufVxuXG4uY3VzdG9tLXNjcm9sbHtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xufVxuLmN1c3RvbS1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IC41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiZ3JleS1saWdodFwiKX07XG59XG5cblxuLmN1c3RvbS1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IC4zZW0gc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiZ3JleS01XCIpfTtcbn1cbiIsIkBpbXBvcnQgXCJzaGFyZWRcIjtcblxuOmhvc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY3VzdG9tLXNlbGVjdC13cmFwcGVyIHtcbiAgQGluY2x1ZGUgYm9vdHN0cmFwLXNlbGVjdC1zdHlsZXMoKTtcbn1cblxuLm5ldy1jdXN0b21lci1mb3JtIHtcbiAgbWF4LWhlaWdodDogNzB2aDtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbjpob3N0IDo6bmctZGVlcCB7XG4gIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlciB7XG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAtLWNyb3BwZXItb3V0bGluZS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuIiwiQG1peGluIG1hdGVyaWFsLXNlbGVjdC1zdHlsZXMoKSB7XG4gIC8vIG1hdGVyaWFsIHNlbGVjdCBzdHlsZXNcbiAgLm1hdC1zZWxlY3QtcGFuZWwge1xuICAgIEBpbmNsdWRlIG1hdGVyaWFsLWF1dG9jb21wbGV0ZS1zdHlsZXMoKTtcbiAgfVxufVxuXG5AbWl4aW4gYm9vdHN0cmFwLXNlbGVjdC1zdHlsZXMoKSB7XG4gIC8vIHNlbGVjdCBjb21wb25lbnQgd2l0aCBjdXN0b20gaWNvblxuICAtLXNlbGVjdC1wYWRkaW5nOiAxMnB4O1xuICAtLXNlbGVjdC1pY29uLXdpZHRoOiAxNHB4O1xuICAtLWZvcm0taWNvbnMtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcigncHJpbWFyeScpfTtcbiAgLS1mb3JtLWlucHV0LWJhY2tncm91bmQ6ICN7cGFsZXR0ZS1jb2xvcignZ3JleS0wJyl9O1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAuY3VzdG9tLXNlbGVjdCB7XG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1zZWxlY3QtcGFkZGluZykgLyAyKSB2YXIoLS1zZWxlY3QtcGFkZGluZyk7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiBjYWxjKHZhcigtLXNlbGVjdC1wYWRkaW5nKSArIHZhcigtLXNlbGVjdC1pY29uLXdpZHRoKSk7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtLWlucHV0LWJhY2tncm91bmQpO1xuICB9XG4gIC5oYWxmLWFycm93LWljb24ge1xuICAgIHJpZ2h0OiB2YXIoLS1zZWxlY3QtcGFkZGluZyk7XG4gICAgdG9wOiAwcHg7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiB2YXIoLS1zZWxlY3QtaWNvbi13aWR0aCk7XG4gICAgY29sb3I6IHZhcigtLWZvcm0taWNvbnMtY29sb3IpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VehicleTemplateDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-vehicle-template-dialog",
                templateUrl: "./vehicle-template-dialog.component.html",
                styleUrls: ["./vehicle-template-dialog.component.scss"],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: src_app_business_services_administration_service__WEBPACK_IMPORTED_MODULE_2__["AdministrationService"] }, { type: src_app_shared_notifications_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }]; }, null); })();


/***/ }),

/***/ "rIor":
/*!***********************************************************************************!*\
  !*** ./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm2015/ngx-image-cropper.js ***!
  \***********************************************************************************/
/*! exports provided: ImageCropperComponent, ImageCropperModule, base64ToFile, resizeCanvas, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCropperComponent", function() { return ImageCropperComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCropperModule", function() { return ImageCropperModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base64ToFile", function() { return base64ToFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeCanvas", function() { return resizeCanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CropService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return CropperPositionService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return LoadImageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





/**
 * @fileoverview added by tsickle
 * Generated from: lib/interfaces/cropper.settings.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




const _c0 = ["wrapper"];
const _c1 = ["sourceImage"];
function ImageCropperComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function ImageCropperComponent_img_2_Template_img_load_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.imageLoadedInView(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx_r1.imageVisible ? "visible" : "hidden")("transform", ctx_r1.safeTransformStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.safeImgDataUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ImageCropperComponent_div_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.startMove($event, ctx_r7.moveTypes.Resize, "topleft"); })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.startMove($event, ctx_r9.moveTypes.Resize, "topleft"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.startMove($event, ctx_r10.moveTypes.Resize, "topright"); })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.startMove($event, ctx_r11.moveTypes.Resize, "topright"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.startMove($event, ctx_r12.moveTypes.Resize, "bottomright"); })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.startMove($event, ctx_r13.moveTypes.Resize, "bottomright"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.startMove($event, ctx_r14.moveTypes.Resize, "bottomleft"); })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.startMove($event, ctx_r15.moveTypes.Resize, "bottomleft"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.startMove($event, ctx_r16.moveTypes.Resize, "top"); })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.startMove($event, ctx_r17.moveTypes.Resize, "top"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.startMove($event, ctx_r18.moveTypes.Resize, "right"); })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.startMove($event, ctx_r19.moveTypes.Resize, "right"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.startMove($event, ctx_r20.moveTypes.Resize, "bottom"); })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.startMove($event, ctx_r21.moveTypes.Resize, "bottom"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.startMove($event, ctx_r22.moveTypes.Resize, "left"); })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.startMove($event, ctx_r23.moveTypes.Resize, "left"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ImageCropperComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function ImageCropperComponent_div_4_Template_div_keydown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.keyboardAccess($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_Template_div_mousedown_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.startMove($event, ctx_r26.moveTypes.Move); })("touchstart", function ImageCropperComponent_div_4_Template_div_touchstart_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.startMove($event, ctx_r27.moveTypes.Move); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ImageCropperComponent_div_4_ng_container_2_Template, 21, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx_r2.cropper.y1, "px")("left", ctx_r2.cropper.x1, "px")("width", ctx_r2.cropper.x2 - ctx_r2.cropper.x1, "px")("height", ctx_r2.cropper.y2 - ctx_r2.cropper.y1, "px")("margin-left", ctx_r2.alignImage === "center" ? ctx_r2.marginLeft : null)("visibility", ctx_r2.imageVisible ? "visible" : "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ngx-ic-round", ctx_r2.roundCropper);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.hideResizeSquares);
} }
class CropperSettings {
    constructor() {
        // From options
        this.format = 'png';
        this.maintainAspectRatio = true;
        this.transform = {};
        this.aspectRatio = 1;
        this.resizeToWidth = 0;
        this.resizeToHeight = 0;
        this.cropperMinWidth = 0;
        this.cropperMinHeight = 0;
        this.cropperMaxHeight = 0;
        this.cropperMaxWidth = 0;
        this.cropperStaticWidth = 0;
        this.cropperStaticHeight = 0;
        this.canvasRotation = 0;
        this.initialStepSize = 3;
        this.roundCropper = false;
        this.onlyScaleDown = false;
        this.imageQuality = 92;
        this.autoCrop = true;
        this.backgroundColor = undefined;
        this.containWithinAspectRatio = false;
        this.hideResizeSquares = false;
        this.alignImage = 'center';
        // Internal
        this.cropperScaledMinWidth = 20;
        this.cropperScaledMinHeight = 20;
        this.cropperScaledMaxWidth = 20;
        this.cropperScaledMaxHeight = 20;
        this.stepSize = this.initialStepSize;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        Object.keys(options)
            .filter((/**
         * @param {?} k
         * @return {?}
         */
        (k) => k in this))
            .forEach((/**
         * @param {?} k
         * @return {?}
         */
        (k) => this[k] = options[k]));
        this.validateOptions();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    setOptionsFromChanges(changes) {
        Object.keys(changes)
            .filter((/**
         * @param {?} k
         * @return {?}
         */
        (k) => k in this))
            .forEach((/**
         * @param {?} k
         * @return {?}
         */
        (k) => this[k] = changes[k].currentValue));
        this.validateOptions();
    }
    /**
     * @private
     * @return {?}
     */
    validateOptions() {
        if (this.maintainAspectRatio && !this.aspectRatio) {
            throw new Error('`aspectRatio` should > 0 when `maintainAspectRatio` is enabled');
        }
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/interfaces/move-start.interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MoveStart() { }
if (false) {}
/** @enum {string} */
const MoveTypes = {
    Move: "move",
    Resize: "resize",
    Pinch: "pinch",
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/resize.utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * Hermite resize - fast image resize/resample using Hermite filter.
 * https://github.com/viliusle/Hermite-resize
 */
/**
 * @param {?} canvas
 * @param {?} width
 * @param {?} height
 * @return {?}
 */
function resizeCanvas(canvas, width, height) {
    /** @type {?} */
    const width_source = canvas.width;
    /** @type {?} */
    const height_source = canvas.height;
    width = Math.round(width);
    height = Math.round(height);
    /** @type {?} */
    const ratio_w = width_source / width;
    /** @type {?} */
    const ratio_h = height_source / height;
    /** @type {?} */
    const ratio_w_half = Math.ceil(ratio_w / 2);
    /** @type {?} */
    const ratio_h_half = Math.ceil(ratio_h / 2);
    /** @type {?} */
    const ctx = canvas.getContext('2d');
    if (ctx) {
        /** @type {?} */
        const img = ctx.getImageData(0, 0, width_source, height_source);
        /** @type {?} */
        const img2 = ctx.createImageData(width, height);
        /** @type {?} */
        const data = img.data;
        /** @type {?} */
        const data2 = img2.data;
        for (let j = 0; j < height; j++) {
            for (let i = 0; i < width; i++) {
                /** @type {?} */
                const x2 = (i + j * width) * 4;
                /** @type {?} */
                const center_y = j * ratio_h;
                /** @type {?} */
                let weight = 0;
                /** @type {?} */
                let weights = 0;
                /** @type {?} */
                let weights_alpha = 0;
                /** @type {?} */
                let gx_r = 0;
                /** @type {?} */
                let gx_g = 0;
                /** @type {?} */
                let gx_b = 0;
                /** @type {?} */
                let gx_a = 0;
                /** @type {?} */
                const xx_start = Math.floor(i * ratio_w);
                /** @type {?} */
                const yy_start = Math.floor(j * ratio_h);
                /** @type {?} */
                let xx_stop = Math.ceil((i + 1) * ratio_w);
                /** @type {?} */
                let yy_stop = Math.ceil((j + 1) * ratio_h);
                xx_stop = Math.min(xx_stop, width_source);
                yy_stop = Math.min(yy_stop, height_source);
                for (let yy = yy_start; yy < yy_stop; yy++) {
                    /** @type {?} */
                    const dy = Math.abs(center_y - yy) / ratio_h_half;
                    /** @type {?} */
                    const center_x = i * ratio_w;
                    /** @type {?} */
                    const w0 = dy * dy;
                    for (let xx = xx_start; xx < xx_stop; xx++) {
                        /** @type {?} */
                        const dx = Math.abs(center_x - xx) / ratio_w_half;
                        /** @type {?} */
                        const w = Math.sqrt(w0 + dx * dx);
                        if (w >= 1) {
                            //pixel too far
                            continue;
                        }
                        //hermite filter
                        weight = 2 * w * w * w - 3 * w * w + 1;
                        /** @type {?} */
                        const pos_x = 4 * (xx + yy * width_source);
                        //alpha
                        gx_a += weight * data[pos_x + 3];
                        weights_alpha += weight;
                        //colors
                        if (data[pos_x + 3] < 255)
                            weight = weight * data[pos_x + 3] / 250;
                        gx_r += weight * data[pos_x];
                        gx_g += weight * data[pos_x + 1];
                        gx_b += weight * data[pos_x + 2];
                        weights += weight;
                    }
                }
                data2[x2] = gx_r / weights;
                data2[x2 + 1] = gx_g / weights;
                data2[x2 + 2] = gx_b / weights;
                data2[x2 + 3] = gx_a / weights_alpha;
            }
        }
        canvas.width = width;
        canvas.height = height;
        //draw
        ctx.putImageData(img2, 0, 0);
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/crop.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CropService {
    /**
     * @param {?} sourceImage
     * @param {?} loadedImage
     * @param {?} cropper
     * @param {?} settings
     * @return {?}
     */
    crop(sourceImage, loadedImage, cropper, settings) {
        /** @type {?} */
        const imagePosition = this.getImagePosition(sourceImage, loadedImage, cropper, settings);
        /** @type {?} */
        const width = imagePosition.x2 - imagePosition.x1;
        /** @type {?} */
        const height = imagePosition.y2 - imagePosition.y1;
        /** @type {?} */
        const cropCanvas = (/** @type {?} */ (document.createElement('canvas')));
        cropCanvas.width = width;
        cropCanvas.height = height;
        /** @type {?} */
        const ctx = cropCanvas.getContext('2d');
        if (!ctx) {
            return;
        }
        if (settings.backgroundColor != null) {
            ctx.fillStyle = settings.backgroundColor;
            ctx.fillRect(0, 0, width, height);
        }
        /** @type {?} */
        const scaleX = (settings.transform.scale || 1) * (settings.transform.flipH ? -1 : 1);
        /** @type {?} */
        const scaleY = (settings.transform.scale || 1) * (settings.transform.flipV ? -1 : 1);
        /** @type {?} */
        const transformedImage = loadedImage.transformed;
        ctx.setTransform(scaleX, 0, 0, scaleY, transformedImage.size.width / 2, transformedImage.size.height / 2);
        ctx.translate(-imagePosition.x1 / scaleX, -imagePosition.y1 / scaleY);
        ctx.rotate((settings.transform.rotate || 0) * Math.PI / 180);
        ctx.drawImage(transformedImage.image, -transformedImage.size.width / 2, -transformedImage.size.height / 2);
        /** @type {?} */
        const output = {
            width, height,
            imagePosition,
            cropperPosition: Object.assign({}, cropper)
        };
        if (settings.containWithinAspectRatio) {
            output.offsetImagePosition = this.getOffsetImagePosition(sourceImage, loadedImage, cropper, settings);
        }
        /** @type {?} */
        const resizeRatio = this.getResizeRatio(width, height, settings);
        if (resizeRatio !== 1) {
            output.width = Math.round(width * resizeRatio);
            output.height = settings.maintainAspectRatio
                ? Math.round(output.width / settings.aspectRatio)
                : Math.round(height * resizeRatio);
            resizeCanvas(cropCanvas, output.width, output.height);
        }
        output.base64 = cropCanvas.toDataURL('image/' + settings.format, this.getQuality(settings));
        return output;
    }
    /**
     * @private
     * @param {?} sourceImage
     * @param {?} loadedImage
     * @param {?} cropper
     * @param {?} settings
     * @return {?}
     */
    getImagePosition(sourceImage, loadedImage, cropper, settings) {
        /** @type {?} */
        const sourceImageElement = sourceImage.nativeElement;
        /** @type {?} */
        const ratio = loadedImage.transformed.size.width / sourceImageElement.offsetWidth;
        /** @type {?} */
        const out = {
            x1: Math.round(cropper.x1 * ratio),
            y1: Math.round(cropper.y1 * ratio),
            x2: Math.round(cropper.x2 * ratio),
            y2: Math.round(cropper.y2 * ratio)
        };
        if (!settings.containWithinAspectRatio) {
            out.x1 = Math.max(out.x1, 0);
            out.y1 = Math.max(out.y1, 0);
            out.x2 = Math.min(out.x2, loadedImage.transformed.size.width);
            out.y2 = Math.min(out.y2, loadedImage.transformed.size.height);
        }
        return out;
    }
    /**
     * @private
     * @param {?} sourceImage
     * @param {?} loadedImage
     * @param {?} cropper
     * @param {?} settings
     * @return {?}
     */
    getOffsetImagePosition(sourceImage, loadedImage, cropper, settings) {
        /** @type {?} */
        const canvasRotation = settings.canvasRotation + loadedImage.exifTransform.rotate;
        /** @type {?} */
        const sourceImageElement = sourceImage.nativeElement;
        /** @type {?} */
        const ratio = loadedImage.transformed.size.width / sourceImageElement.offsetWidth;
        /** @type {?} */
        let offsetX;
        /** @type {?} */
        let offsetY;
        if (canvasRotation % 2) {
            offsetX = (loadedImage.transformed.size.width - loadedImage.original.size.height) / 2;
            offsetY = (loadedImage.transformed.size.height - loadedImage.original.size.width) / 2;
        }
        else {
            offsetX = (loadedImage.transformed.size.width - loadedImage.original.size.width) / 2;
            offsetY = (loadedImage.transformed.size.height - loadedImage.original.size.height) / 2;
        }
        /** @type {?} */
        const out = {
            x1: Math.round(cropper.x1 * ratio) - offsetX,
            y1: Math.round(cropper.y1 * ratio) - offsetY,
            x2: Math.round(cropper.x2 * ratio) - offsetX,
            y2: Math.round(cropper.y2 * ratio) - offsetY
        };
        if (!settings.containWithinAspectRatio) {
            out.x1 = Math.max(out.x1, 0);
            out.y1 = Math.max(out.y1, 0);
            out.x2 = Math.min(out.x2, loadedImage.transformed.size.width);
            out.y2 = Math.min(out.y2, loadedImage.transformed.size.height);
        }
        return out;
    }
    /**
     * @param {?} width
     * @param {?} height
     * @param {?} settings
     * @return {?}
     */
    getResizeRatio(width, height, settings) {
        /** @type {?} */
        const ratioWidth = settings.resizeToWidth / width;
        /** @type {?} */
        const ratioHeight = settings.resizeToHeight / height;
        /** @type {?} */
        const ratios = new Array();
        if (settings.resizeToWidth > 0) {
            ratios.push(ratioWidth);
        }
        if (settings.resizeToHeight > 0) {
            ratios.push(ratioHeight);
        }
        /** @type {?} */
        const result = ratios.length === 0 ? 1 : Math.min(...ratios);
        if (result > 1 && !settings.onlyScaleDown) {
            return result;
        }
        return Math.min(result, 1);
    }
    /**
     * @param {?} settings
     * @return {?}
     */
    getQuality(settings) {
        return Math.min(1, Math.max(0, settings.imageQuality / 100));
    }
}
CropService.ɵfac = function CropService_Factory(t) { return new (t || CropService)(); };
/** @nocollapse */ CropService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function CropService_Factory() { return new CropService(); }, token: CropService, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CropService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/cropper-position.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CropperPositionService {
    /**
     * @param {?} sourceImage
     * @param {?} cropperPosition
     * @param {?} settings
     * @return {?}
     */
    resetCropperPosition(sourceImage, cropperPosition, settings) {
        if (!(sourceImage === null || sourceImage === void 0 ? void 0 : sourceImage.nativeElement)) {
            return;
        }
        /** @type {?} */
        const sourceImageElement = sourceImage.nativeElement;
        if (settings.cropperStaticHeight && settings.cropperStaticWidth) {
            cropperPosition.x1 = 0;
            cropperPosition.x2 = sourceImageElement.offsetWidth > settings.cropperStaticWidth ?
                settings.cropperStaticWidth : sourceImageElement.offsetWidth;
            cropperPosition.y1 = 0;
            cropperPosition.y2 = sourceImageElement.offsetHeight > settings.cropperStaticHeight ?
                settings.cropperStaticHeight : sourceImageElement.offsetHeight;
        }
        else {
            /** @type {?} */
            const cropperWidth = Math.min(settings.cropperScaledMaxWidth, sourceImageElement.offsetWidth);
            /** @type {?} */
            const cropperHeight = Math.min(settings.cropperScaledMaxHeight, sourceImageElement.offsetHeight);
            if (!settings.maintainAspectRatio) {
                cropperPosition.x1 = 0;
                cropperPosition.x2 = cropperWidth;
                cropperPosition.y1 = 0;
                cropperPosition.y2 = cropperHeight;
            }
            else if (sourceImageElement.offsetWidth / settings.aspectRatio < sourceImageElement.offsetHeight) {
                cropperPosition.x1 = 0;
                cropperPosition.x2 = cropperWidth;
                /** @type {?} */
                const cropperHeightWithAspectRatio = cropperWidth / settings.aspectRatio;
                cropperPosition.y1 = (sourceImageElement.offsetHeight - cropperHeightWithAspectRatio) / 2;
                cropperPosition.y2 = cropperPosition.y1 + cropperHeightWithAspectRatio;
            }
            else {
                cropperPosition.y1 = 0;
                cropperPosition.y2 = cropperHeight;
                /** @type {?} */
                const cropperWidthWithAspectRatio = cropperHeight * settings.aspectRatio;
                cropperPosition.x1 = (sourceImageElement.offsetWidth - cropperWidthWithAspectRatio) / 2;
                cropperPosition.x2 = cropperPosition.x1 + cropperWidthWithAspectRatio;
            }
        }
    }
    /**
     * @param {?} event
     * @param {?} moveStart
     * @param {?} cropperPosition
     * @return {?}
     */
    move(event, moveStart, cropperPosition) {
        /** @type {?} */
        const diffX = this.getClientX(event) - moveStart.clientX;
        /** @type {?} */
        const diffY = this.getClientY(event) - moveStart.clientY;
        cropperPosition.x1 = moveStart.x1 + diffX;
        cropperPosition.y1 = moveStart.y1 + diffY;
        cropperPosition.x2 = moveStart.x2 + diffX;
        cropperPosition.y2 = moveStart.y2 + diffY;
    }
    /**
     * @param {?} event
     * @param {?} moveStart
     * @param {?} cropperPosition
     * @param {?} maxSize
     * @param {?} settings
     * @return {?}
     */
    resize(event, moveStart, cropperPosition, maxSize, settings) {
        /** @type {?} */
        const moveX = this.getClientX(event) - moveStart.clientX;
        /** @type {?} */
        const moveY = this.getClientY(event) - moveStart.clientY;
        switch (moveStart.position) {
            case 'left':
                cropperPosition.x1 = Math.min(Math.max(moveStart.x1 + moveX, cropperPosition.x2 - settings.cropperScaledMaxWidth), cropperPosition.x2 - settings.cropperScaledMinWidth);
                break;
            case 'topleft':
                cropperPosition.x1 = Math.min(Math.max(moveStart.x1 + moveX, cropperPosition.x2 - settings.cropperScaledMaxWidth), cropperPosition.x2 - settings.cropperScaledMinWidth);
                cropperPosition.y1 = Math.min(Math.max(moveStart.y1 + moveY, cropperPosition.y2 - settings.cropperScaledMaxHeight), cropperPosition.y2 - settings.cropperScaledMinHeight);
                break;
            case 'top':
                cropperPosition.y1 = Math.min(Math.max(moveStart.y1 + moveY, cropperPosition.y2 - settings.cropperScaledMaxHeight), cropperPosition.y2 - settings.cropperScaledMinHeight);
                break;
            case 'topright':
                cropperPosition.x2 = Math.max(Math.min(moveStart.x2 + moveX, cropperPosition.x1 + settings.cropperScaledMaxWidth), cropperPosition.x1 + settings.cropperScaledMinWidth);
                cropperPosition.y1 = Math.min(Math.max(moveStart.y1 + moveY, cropperPosition.y2 - settings.cropperScaledMaxHeight), cropperPosition.y2 - settings.cropperScaledMinHeight);
                break;
            case 'right':
                cropperPosition.x2 = Math.max(Math.min(moveStart.x2 + moveX, cropperPosition.x1 + settings.cropperScaledMaxWidth), cropperPosition.x1 + settings.cropperScaledMinWidth);
                break;
            case 'bottomright':
                cropperPosition.x2 = Math.max(Math.min(moveStart.x2 + moveX, cropperPosition.x1 + settings.cropperScaledMaxWidth), cropperPosition.x1 + settings.cropperScaledMinWidth);
                cropperPosition.y2 = Math.max(Math.min(moveStart.y2 + moveY, cropperPosition.y1 + settings.cropperScaledMaxHeight), cropperPosition.y1 + settings.cropperScaledMinHeight);
                break;
            case 'bottom':
                cropperPosition.y2 = Math.max(Math.min(moveStart.y2 + moveY, cropperPosition.y1 + settings.cropperScaledMaxHeight), cropperPosition.y1 + settings.cropperScaledMinHeight);
                break;
            case 'bottomleft':
                cropperPosition.x1 = Math.min(Math.max(moveStart.x1 + moveX, cropperPosition.x2 - settings.cropperScaledMaxWidth), cropperPosition.x2 - settings.cropperScaledMinWidth);
                cropperPosition.y2 = Math.max(Math.min(moveStart.y2 + moveY, cropperPosition.y1 + settings.cropperScaledMaxHeight), cropperPosition.y1 + settings.cropperScaledMinHeight);
                break;
            case 'center':
                /** @type {?} */
                const scale = event.scale;
                /** @type {?} */
                const newWidth = Math.min(Math.max(settings.cropperScaledMinWidth, (Math.abs(moveStart.x2 - moveStart.x1)) * scale), settings.cropperScaledMaxWidth);
                /** @type {?} */
                const newHeight = Math.min(Math.max(settings.cropperScaledMinHeight, (Math.abs(moveStart.y2 - moveStart.y1)) * scale), settings.cropperScaledMaxHeight);
                cropperPosition.x1 = moveStart.clientX - newWidth / 2;
                cropperPosition.x2 = moveStart.clientX + newWidth / 2;
                cropperPosition.y1 = moveStart.clientY - newHeight / 2;
                cropperPosition.y2 = moveStart.clientY + newHeight / 2;
                if (cropperPosition.x1 < 0) {
                    cropperPosition.x2 -= cropperPosition.x1;
                    cropperPosition.x1 = 0;
                }
                else if (cropperPosition.x2 > maxSize.width) {
                    cropperPosition.x1 -= (cropperPosition.x2 - maxSize.width);
                    cropperPosition.x2 = maxSize.width;
                }
                if (cropperPosition.y1 < 0) {
                    cropperPosition.y2 -= cropperPosition.y1;
                    cropperPosition.y1 = 0;
                }
                else if (cropperPosition.y2 > maxSize.height) {
                    cropperPosition.y1 -= (cropperPosition.y2 - maxSize.height);
                    cropperPosition.y2 = maxSize.height;
                }
                break;
        }
        if (settings.maintainAspectRatio) {
            this.checkAspectRatio(moveStart.position, cropperPosition, maxSize, settings);
        }
    }
    /**
     * @param {?} position
     * @param {?} cropperPosition
     * @param {?} maxSize
     * @param {?} settings
     * @return {?}
     */
    checkAspectRatio(position, cropperPosition, maxSize, settings) {
        /** @type {?} */
        let overflowX = 0;
        /** @type {?} */
        let overflowY = 0;
        switch (position) {
            case 'top':
                cropperPosition.x2 = cropperPosition.x1 + (cropperPosition.y2 - cropperPosition.y1) * settings.aspectRatio;
                overflowX = Math.max(cropperPosition.x2 - maxSize.width, 0);
                overflowY = Math.max(0 - cropperPosition.y1, 0);
                if (overflowX > 0 || overflowY > 0) {
                    cropperPosition.x2 -= (overflowY * settings.aspectRatio) > overflowX ? (overflowY * settings.aspectRatio) : overflowX;
                    cropperPosition.y1 += (overflowY * settings.aspectRatio) > overflowX ? overflowY : overflowX / settings.aspectRatio;
                }
                break;
            case 'bottom':
                cropperPosition.x2 = cropperPosition.x1 + (cropperPosition.y2 - cropperPosition.y1) * settings.aspectRatio;
                overflowX = Math.max(cropperPosition.x2 - maxSize.width, 0);
                overflowY = Math.max(cropperPosition.y2 - maxSize.height, 0);
                if (overflowX > 0 || overflowY > 0) {
                    cropperPosition.x2 -= (overflowY * settings.aspectRatio) > overflowX ? (overflowY * settings.aspectRatio) : overflowX;
                    cropperPosition.y2 -= (overflowY * settings.aspectRatio) > overflowX ? overflowY : (overflowX / settings.aspectRatio);
                }
                break;
            case 'topleft':
                cropperPosition.y1 = cropperPosition.y2 - (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
                overflowX = Math.max(0 - cropperPosition.x1, 0);
                overflowY = Math.max(0 - cropperPosition.y1, 0);
                if (overflowX > 0 || overflowY > 0) {
                    cropperPosition.x1 += (overflowY * settings.aspectRatio) > overflowX ? (overflowY * settings.aspectRatio) : overflowX;
                    cropperPosition.y1 += (overflowY * settings.aspectRatio) > overflowX ? overflowY : overflowX / settings.aspectRatio;
                }
                break;
            case 'topright':
                cropperPosition.y1 = cropperPosition.y2 - (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
                overflowX = Math.max(cropperPosition.x2 - maxSize.width, 0);
                overflowY = Math.max(0 - cropperPosition.y1, 0);
                if (overflowX > 0 || overflowY > 0) {
                    cropperPosition.x2 -= (overflowY * settings.aspectRatio) > overflowX ? (overflowY * settings.aspectRatio) : overflowX;
                    cropperPosition.y1 += (overflowY * settings.aspectRatio) > overflowX ? overflowY : overflowX / settings.aspectRatio;
                }
                break;
            case 'right':
            case 'bottomright':
                cropperPosition.y2 = cropperPosition.y1 + (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
                overflowX = Math.max(cropperPosition.x2 - maxSize.width, 0);
                overflowY = Math.max(cropperPosition.y2 - maxSize.height, 0);
                if (overflowX > 0 || overflowY > 0) {
                    cropperPosition.x2 -= (overflowY * settings.aspectRatio) > overflowX ? (overflowY * settings.aspectRatio) : overflowX;
                    cropperPosition.y2 -= (overflowY * settings.aspectRatio) > overflowX ? overflowY : overflowX / settings.aspectRatio;
                }
                break;
            case 'left':
            case 'bottomleft':
                cropperPosition.y2 = cropperPosition.y1 + (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
                overflowX = Math.max(0 - cropperPosition.x1, 0);
                overflowY = Math.max(cropperPosition.y2 - maxSize.height, 0);
                if (overflowX > 0 || overflowY > 0) {
                    cropperPosition.x1 += (overflowY * settings.aspectRatio) > overflowX ? (overflowY * settings.aspectRatio) : overflowX;
                    cropperPosition.y2 -= (overflowY * settings.aspectRatio) > overflowX ? overflowY : overflowX / settings.aspectRatio;
                }
                break;
            case 'center':
                cropperPosition.x2 = cropperPosition.x1 + (cropperPosition.y2 - cropperPosition.y1) * settings.aspectRatio;
                cropperPosition.y2 = cropperPosition.y1 + (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
                /** @type {?} */
                const overflowX1 = Math.max(0 - cropperPosition.x1, 0);
                /** @type {?} */
                const overflowX2 = Math.max(cropperPosition.x2 - maxSize.width, 0);
                /** @type {?} */
                const overflowY1 = Math.max(cropperPosition.y2 - maxSize.height, 0);
                /** @type {?} */
                const overflowY2 = Math.max(0 - cropperPosition.y1, 0);
                if (overflowX1 > 0 || overflowX2 > 0 || overflowY1 > 0 || overflowY2 > 0) {
                    cropperPosition.x1 += (overflowY1 * settings.aspectRatio) > overflowX1 ? (overflowY1 * settings.aspectRatio) : overflowX1;
                    cropperPosition.x2 -= (overflowY2 * settings.aspectRatio) > overflowX2 ? (overflowY2 * settings.aspectRatio) : overflowX2;
                    cropperPosition.y1 += (overflowY2 * settings.aspectRatio) > overflowX2 ? overflowY2 : overflowX2 / settings.aspectRatio;
                    cropperPosition.y2 -= (overflowY1 * settings.aspectRatio) > overflowX1 ? overflowY1 : overflowX1 / settings.aspectRatio;
                }
                break;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    getClientX(event) {
        var _a;
        return ((_a = event.touches) === null || _a === void 0 ? void 0 : _a[0].clientX) || event.clientX || 0;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    getClientY(event) {
        var _a;
        return ((_a = event.touches) === null || _a === void 0 ? void 0 : _a[0].clientY) || event.clientY || 0;
    }
}
CropperPositionService.ɵfac = function CropperPositionService_Factory(t) { return new (t || CropperPositionService)(); };
/** @nocollapse */ CropperPositionService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function CropperPositionService_Factory() { return new CropperPositionService(); }, token: CropperPositionService, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CropperPositionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/exif.utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Black 2x1 JPEG, with the following meta information set:
// - EXIF Orientation: 6 (Rotated 90° CCW)
// Source: https://github.com/blueimp/JavaScript-Load-Image
/** @type {?} */
const testAutoOrientationImageURL = 'data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAA' +
    'AAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA' +
    'QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQE' +
    'BAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/x' +
    'ABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAA' +
    'AAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==';
/**
 * @return {?}
 */
function supportsAutomaticRotation() {
    return new Promise((/**
     * @param {?} resolve
     * @return {?}
     */
    (resolve) => {
        /** @type {?} */
        const img = new Image();
        img.onload = (/**
         * @return {?}
         */
        () => {
            // Check if browser supports automatic image orientation:
            /** @type {?} */
            const supported = img.width === 1 && img.height === 2;
            resolve(supported);
        });
        img.src = testAutoOrientationImageURL;
    }));
}
/**
 * @param {?} exifRotationOrBase64Image
 * @return {?}
 */
function getTransformationsFromExifData(exifRotationOrBase64Image) {
    if (typeof exifRotationOrBase64Image === 'string') {
        exifRotationOrBase64Image = getExifRotation(exifRotationOrBase64Image);
    }
    switch (exifRotationOrBase64Image) {
        case 2:
            return { rotate: 0, flip: true };
        case 3:
            return { rotate: 2, flip: false };
        case 4:
            return { rotate: 2, flip: true };
        case 5:
            return { rotate: 1, flip: true };
        case 6:
            return { rotate: 1, flip: false };
        case 7:
            return { rotate: 3, flip: true };
        case 8:
            return { rotate: 3, flip: false };
        default:
            return { rotate: 0, flip: false };
    }
}
/**
 * @param {?} imageBase64
 * @return {?}
 */
function getExifRotation(imageBase64) {
    /** @type {?} */
    const view = new DataView(base64ToArrayBuffer(imageBase64));
    if (view.getUint16(0, false) !== 0xFFD8) {
        return -2;
    }
    /** @type {?} */
    const length = view.byteLength;
    /** @type {?} */
    let offset = 2;
    while (offset < length) {
        if (view.getUint16(offset + 2, false) <= 8)
            return -1;
        /** @type {?} */
        const marker = view.getUint16(offset, false);
        offset += 2;
        if (marker == 0xFFE1) {
            if (view.getUint32(offset += 2, false) !== 0x45786966) {
                return -1;
            }
            /** @type {?} */
            const little = view.getUint16(offset += 6, false) == 0x4949;
            offset += view.getUint32(offset + 4, little);
            /** @type {?} */
            const tags = view.getUint16(offset, little);
            offset += 2;
            for (let i = 0; i < tags; i++) {
                if (view.getUint16(offset + (i * 12), little) == 0x0112) {
                    return view.getUint16(offset + (i * 12) + 8, little);
                }
            }
        }
        else if ((marker & 0xFF00) !== 0xFF00) {
            break;
        }
        else {
            offset += view.getUint16(offset, false);
        }
    }
    return -1;
}
/**
 * @param {?} imageBase64
 * @return {?}
 */
function base64ToArrayBuffer(imageBase64) {
    imageBase64 = imageBase64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
    /** @type {?} */
    const binaryString = atob(imageBase64);
    /** @type {?} */
    const len = binaryString.length;
    /** @type {?} */
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/load-image.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function LoadImageBase64() { }
if (false) {}
class LoadImageService {
    constructor() {
        this.autoRotateSupported = supportsAutomaticRotation();
    }
    /**
     * @param {?} file
     * @param {?} cropperSettings
     * @return {?}
     */
    loadImageFile(file, cropperSettings) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            /** @type {?} */
            const fileReader = new FileReader();
            fileReader.onload = (/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                this.loadImage(event.target.result, file.type, cropperSettings)
                    .then(resolve)
                    .catch(reject);
            });
            fileReader.readAsDataURL(file);
        }));
    }
    /**
     * @private
     * @param {?} imageBase64
     * @param {?} imageType
     * @param {?} cropperSettings
     * @return {?}
     */
    loadImage(imageBase64, imageType, cropperSettings) {
        if (!this.isValidImageType(imageType)) {
            return Promise.reject(new Error('Invalid image type'));
        }
        return this.loadBase64Image(imageBase64, cropperSettings);
    }
    /**
     * @private
     * @param {?} type
     * @return {?}
     */
    isValidImageType(type) {
        return /image\/(png|jpg|jpeg|bmp|gif|tiff|webp)/.test(type);
    }
    /**
     * @param {?} url
     * @param {?} cropperSettings
     * @return {?}
     */
    loadImageFromURL(url, cropperSettings) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            /** @type {?} */
            const img = new Image();
            img.onerror = (/**
             * @return {?}
             */
            () => reject);
            img.onload = (/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const canvas = document.createElement('canvas');
                /** @type {?} */
                const context = canvas.getContext('2d');
                canvas.width = img.width;
                canvas.height = img.height;
                context.drawImage(img, 0, 0);
                this.loadBase64Image(canvas.toDataURL(), cropperSettings).then(resolve);
            });
            img.crossOrigin = 'anonymous';
            img.src = url;
        }));
    }
    /**
     * @param {?} imageBase64
     * @param {?} cropperSettings
     * @return {?}
     */
    loadBase64Image(imageBase64, cropperSettings) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            /** @type {?} */
            const originalImage = new Image();
            originalImage.onload = (/**
             * @return {?}
             */
            () => resolve({
                originalImage,
                originalBase64: imageBase64
            }));
            originalImage.onerror = reject;
            originalImage.src = imageBase64;
        })).then((/**
         * @param {?} res
         * @return {?}
         */
        (res) => this.transformImageBase64(res, cropperSettings)));
    }
    /**
     * @private
     * @param {?} res
     * @param {?} cropperSettings
     * @return {?}
     */
    transformImageBase64(res, cropperSettings) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function* () {
            /** @type {?} */
            const autoRotate = yield this.autoRotateSupported;
            /** @type {?} */
            const exifTransform = yield getTransformationsFromExifData(autoRotate ? -1 : res.originalBase64);
            if (!res.originalImage || !res.originalImage.complete) {
                return Promise.reject(new Error('No image loaded'));
            }
            /** @type {?} */
            const loadedImage = {
                original: {
                    base64: res.originalBase64,
                    image: res.originalImage,
                    size: {
                        width: res.originalImage.naturalWidth,
                        height: res.originalImage.naturalHeight
                    }
                },
                exifTransform
            };
            return this.transformLoadedImage(loadedImage, cropperSettings);
        });
    }
    /**
     * @param {?} loadedImage
     * @param {?} cropperSettings
     * @return {?}
     */
    transformLoadedImage(loadedImage, cropperSettings) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function* () {
            /** @type {?} */
            const canvasRotation = cropperSettings.canvasRotation + loadedImage.exifTransform.rotate;
            /** @type {?} */
            const originalSize = {
                width: loadedImage.original.image.naturalWidth,
                height: loadedImage.original.image.naturalHeight
            };
            if (canvasRotation === 0 && !loadedImage.exifTransform.flip && !cropperSettings.containWithinAspectRatio) {
                return {
                    original: {
                        base64: loadedImage.original.base64,
                        image: loadedImage.original.image,
                        size: Object.assign({}, originalSize)
                    },
                    transformed: {
                        base64: loadedImage.original.base64,
                        image: loadedImage.original.image,
                        size: Object.assign({}, originalSize)
                    },
                    exifTransform: loadedImage.exifTransform
                };
            }
            /** @type {?} */
            const transformedSize = this.getTransformedSize(originalSize, loadedImage.exifTransform, cropperSettings);
            /** @type {?} */
            const canvas = document.createElement('canvas');
            canvas.width = transformedSize.width;
            canvas.height = transformedSize.height;
            /** @type {?} */
            const ctx = canvas.getContext('2d');
            ctx.setTransform(loadedImage.exifTransform.flip ? -1 : 1, 0, 0, 1, canvas.width / 2, canvas.height / 2);
            ctx.rotate(Math.PI * (canvasRotation / 2));
            ctx.drawImage(loadedImage.original.image, -originalSize.width / 2, -originalSize.height / 2);
            /** @type {?} */
            const transformedBase64 = canvas.toDataURL();
            /** @type {?} */
            const transformedImage = yield this.loadImageFromBase64(transformedBase64);
            return {
                original: {
                    base64: loadedImage.original.base64,
                    image: loadedImage.original.image,
                    size: Object.assign({}, originalSize)
                },
                transformed: {
                    base64: transformedBase64,
                    image: transformedImage,
                    size: {
                        width: transformedImage.width,
                        height: transformedImage.height
                    }
                },
                exifTransform: loadedImage.exifTransform
            };
        });
    }
    /**
     * @private
     * @param {?} imageBase64
     * @return {?}
     */
    loadImageFromBase64(imageBase64) {
        return new Promise(((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            /** @type {?} */
            const image = new Image();
            image.onload = (/**
             * @return {?}
             */
            () => resolve(image));
            image.onerror = reject;
            image.src = imageBase64;
        })));
    }
    /**
     * @private
     * @param {?} originalSize
     * @param {?} exifTransform
     * @param {?} cropperSettings
     * @return {?}
     */
    getTransformedSize(originalSize, exifTransform, cropperSettings) {
        /** @type {?} */
        const canvasRotation = cropperSettings.canvasRotation + exifTransform.rotate;
        if (cropperSettings.containWithinAspectRatio) {
            if (canvasRotation % 2) {
                /** @type {?} */
                const minWidthToContain = originalSize.width * cropperSettings.aspectRatio;
                /** @type {?} */
                const minHeightToContain = originalSize.height / cropperSettings.aspectRatio;
                return {
                    width: Math.max(originalSize.height, minWidthToContain),
                    height: Math.max(originalSize.width, minHeightToContain)
                };
            }
            else {
                /** @type {?} */
                const minWidthToContain = originalSize.height * cropperSettings.aspectRatio;
                /** @type {?} */
                const minHeightToContain = originalSize.width / cropperSettings.aspectRatio;
                return {
                    width: Math.max(originalSize.width, minWidthToContain),
                    height: Math.max(originalSize.height, minHeightToContain)
                };
            }
        }
        if (canvasRotation % 2) {
            return {
                height: originalSize.width,
                width: originalSize.height
            };
        }
        return {
            width: originalSize.width,
            height: originalSize.height
        };
    }
}
LoadImageService.ɵfac = function LoadImageService_Factory(t) { return new (t || LoadImageService)(); };
/** @nocollapse */ LoadImageService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function LoadImageService_Factory() { return new LoadImageService(); }, token: LoadImageService, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadImageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/keyboard.utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} key
 * @return {?}
 */
function getPositionForKey(key) {
    switch (key) {
        case 'ArrowUp':
            return 'top';
        case 'ArrowRight':
            return 'right';
        case 'ArrowDown':
            return 'bottom';
        case 'ArrowLeft':
        default:
            return 'left';
    }
}
/**
 * @param {?} key
 * @return {?}
 */
function getInvertedPositionForKey(key) {
    switch (key) {
        case 'ArrowUp':
            return 'bottom';
        case 'ArrowRight':
            return 'left';
        case 'ArrowDown':
            return 'top';
        case 'ArrowLeft':
        default:
            return 'right';
    }
}
/**
 * @param {?} key
 * @param {?} stepSize
 * @return {?}
 */
function getEventForKey(key, stepSize) {
    switch (key) {
        case 'ArrowUp':
            return { clientX: 0, clientY: stepSize * -1 };
        case 'ArrowRight':
            return { clientX: stepSize, clientY: 0 };
        case 'ArrowDown':
            return { clientX: 0, clientY: stepSize };
        case 'ArrowLeft':
        default:
            return { clientX: stepSize * -1, clientY: 0 };
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/component/image-cropper.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ImageCropperComponent {
    /**
     * @param {?} cropService
     * @param {?} cropperPositionService
     * @param {?} loadImageService
     * @param {?} sanitizer
     * @param {?} cd
     */
    constructor(cropService, cropperPositionService, loadImageService, sanitizer, cd) {
        this.cropService = cropService;
        this.cropperPositionService = cropperPositionService;
        this.loadImageService = loadImageService;
        this.sanitizer = sanitizer;
        this.cd = cd;
        this.Hammer = (window === null || window === void 0 ? void 0 : window['Hammer']) || null;
        this.settings = new CropperSettings();
        this.setImageMaxSizeRetries = 0;
        this.marginLeft = '0px';
        this.moveTypes = MoveTypes;
        this.imageVisible = false;
        this.format = this.settings.format;
        this.transform = {};
        this.maintainAspectRatio = this.settings.maintainAspectRatio;
        this.aspectRatio = this.settings.aspectRatio;
        this.resizeToWidth = this.settings.resizeToWidth;
        this.resizeToHeight = this.settings.resizeToHeight;
        this.cropperMinWidth = this.settings.cropperMinWidth;
        this.cropperMinHeight = this.settings.cropperMinHeight;
        this.cropperMaxHeight = this.settings.cropperMaxHeight;
        this.cropperMaxWidth = this.settings.cropperMaxWidth;
        this.cropperStaticWidth = this.settings.cropperStaticWidth;
        this.cropperStaticHeight = this.settings.cropperStaticHeight;
        this.canvasRotation = this.settings.canvasRotation;
        this.initialStepSize = this.settings.initialStepSize;
        this.roundCropper = this.settings.roundCropper;
        this.onlyScaleDown = this.settings.onlyScaleDown;
        this.imageQuality = this.settings.imageQuality;
        this.autoCrop = this.settings.autoCrop;
        this.backgroundColor = this.settings.backgroundColor;
        this.containWithinAspectRatio = this.settings.containWithinAspectRatio;
        this.hideResizeSquares = this.settings.hideResizeSquares;
        this.cropper = {
            x1: -100,
            y1: -100,
            x2: 10000,
            y2: 10000
        };
        this.alignImage = this.settings.alignImage;
        this.disabled = false;
        this.imageCropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.startCropImage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.imageLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cropperReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loadImageFailed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.reset();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        var _a;
        this.onChangesUpdateSettings(changes);
        this.onChangesInputImage(changes);
        if (((_a = this.loadedImage) === null || _a === void 0 ? void 0 : _a.original.image.complete) && (changes.containWithinAspectRatio || changes.canvasRotation)) {
            this.loadImageService
                .transformLoadedImage(this.loadedImage, this.settings)
                .then((/**
             * @param {?} res
             * @return {?}
             */
            (res) => this.setLoadedImage(res)))
                .catch((/**
             * @param {?} err
             * @return {?}
             */
            (err) => this.loadImageError(err)));
        }
        if (changes.cropper || changes.maintainAspectRatio || changes.aspectRatio) {
            this.setMaxSize();
            this.setCropperScaledMinSize();
            this.setCropperScaledMaxSize();
            if (this.maintainAspectRatio && (changes.maintainAspectRatio || changes.aspectRatio)) {
                this.resetCropperPosition();
            }
            else if (changes.cropper) {
                this.checkCropperPosition(false);
                this.doAutoCrop();
            }
            this.cd.markForCheck();
        }
        if (changes.transform) {
            this.transform = this.transform || {};
            this.setCssTransform();
            this.doAutoCrop();
        }
    }
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    onChangesUpdateSettings(changes) {
        this.settings.setOptionsFromChanges(changes);
        if (this.settings.cropperStaticHeight && this.settings.cropperStaticWidth) {
            this.settings.setOptions({
                hideResizeSquares: true,
                cropperMinWidth: this.settings.cropperStaticWidth,
                cropperMinHeight: this.settings.cropperStaticHeight,
                cropperMaxHeight: this.settings.cropperStaticHeight,
                cropperMaxWidth: this.settings.cropperStaticWidth,
                maintainAspectRatio: false
            });
        }
    }
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    onChangesInputImage(changes) {
        if (changes.imageChangedEvent || changes.imageURL || changes.imageBase64 || changes.imageFile) {
            this.reset();
        }
        if (changes.imageChangedEvent && this.isValidImageChangedEvent()) {
            this.loadImageFile(this.imageChangedEvent.target.files[0]);
        }
        if (changes.imageURL && this.imageURL) {
            this.loadImageFromURL(this.imageURL);
        }
        if (changes.imageBase64 && this.imageBase64) {
            this.loadBase64Image(this.imageBase64);
        }
        if (changes.imageFile && this.imageFile) {
            this.loadImageFile(this.imageFile);
        }
    }
    /**
     * @private
     * @return {?}
     */
    isValidImageChangedEvent() {
        var _a, _b, _c;
        return ((_c = (_b = (_a = this.imageChangedEvent) === null || _a === void 0 ? void 0 : _a.target) === null || _b === void 0 ? void 0 : _b.files) === null || _c === void 0 ? void 0 : _c.length) > 0;
    }
    /**
     * @private
     * @return {?}
     */
    setCssTransform() {
        this.safeTransformStyle = this.sanitizer.bypassSecurityTrustStyle('scaleX(' + (this.transform.scale || 1) * (this.transform.flipH ? -1 : 1) + ')' +
            'scaleY(' + (this.transform.scale || 1) * (this.transform.flipV ? -1 : 1) + ')' +
            'rotate(' + (this.transform.rotate || 0) + 'deg)');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.settings.stepSize = this.initialStepSize;
        this.activatePinchGesture();
    }
    /**
     * @private
     * @return {?}
     */
    reset() {
        this.imageVisible = false;
        this.loadedImage = null;
        this.safeImgDataUrl = 'data:image/png;base64,iVBORw0KGg'
            + 'oAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAU'
            + 'AAarVyFEAAAAASUVORK5CYII=';
        this.moveStart = {
            active: false,
            type: null,
            position: null,
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            clientX: 0,
            clientY: 0
        };
        this.maxSize = {
            width: 0,
            height: 0
        };
        this.cropper.x1 = -100;
        this.cropper.y1 = -100;
        this.cropper.x2 = 10000;
        this.cropper.y2 = 10000;
    }
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    loadImageFile(file) {
        this.loadImageService
            .loadImageFile(file, this.settings)
            .then((/**
         * @param {?} res
         * @return {?}
         */
        (res) => this.setLoadedImage(res)))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        (err) => this.loadImageError(err)));
    }
    /**
     * @private
     * @param {?} imageBase64
     * @return {?}
     */
    loadBase64Image(imageBase64) {
        this.loadImageService
            .loadBase64Image(imageBase64, this.settings)
            .then((/**
         * @param {?} res
         * @return {?}
         */
        (res) => this.setLoadedImage(res)))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        (err) => this.loadImageError(err)));
    }
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    loadImageFromURL(url) {
        this.loadImageService
            .loadImageFromURL(url, this.settings)
            .then((/**
         * @param {?} res
         * @return {?}
         */
        (res) => this.setLoadedImage(res)))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        (err) => this.loadImageError(err)));
    }
    /**
     * @private
     * @param {?} loadedImage
     * @return {?}
     */
    setLoadedImage(loadedImage) {
        this.loadedImage = loadedImage;
        this.safeImgDataUrl = this.sanitizer.bypassSecurityTrustResourceUrl(loadedImage.transformed.base64);
        this.cd.markForCheck();
    }
    /**
     * @private
     * @param {?} error
     * @return {?}
     */
    loadImageError(error) {
        console.error(error);
        this.loadImageFailed.emit();
    }
    /**
     * @return {?}
     */
    imageLoadedInView() {
        if (this.loadedImage != null) {
            this.imageLoaded.emit(this.loadedImage);
            this.setImageMaxSizeRetries = 0;
            setTimeout((/**
             * @return {?}
             */
            () => this.checkImageMaxSizeRecursively()));
        }
    }
    /**
     * @private
     * @return {?}
     */
    checkImageMaxSizeRecursively() {
        if (this.setImageMaxSizeRetries > 40) {
            this.loadImageFailed.emit();
        }
        else if (this.sourceImageLoaded()) {
            this.setMaxSize();
            this.setCropperScaledMinSize();
            this.setCropperScaledMaxSize();
            this.resetCropperPosition();
            this.cropperReady.emit(Object.assign({}, this.maxSize));
            this.cd.markForCheck();
        }
        else {
            this.setImageMaxSizeRetries++;
            setTimeout((/**
             * @return {?}
             */
            () => this.checkImageMaxSizeRecursively()), 50);
        }
    }
    /**
     * @private
     * @return {?}
     */
    sourceImageLoaded() {
        var _a, _b;
        return ((_b = (_a = this.sourceImage) === null || _a === void 0 ? void 0 : _a.nativeElement) === null || _b === void 0 ? void 0 : _b.offsetWidth) > 0;
    }
    /**
     * @return {?}
     */
    onResize() {
        if (!this.loadedImage) {
            return;
        }
        this.resizeCropperPosition();
        this.setMaxSize();
        this.setCropperScaledMinSize();
        this.setCropperScaledMaxSize();
    }
    /**
     * @private
     * @return {?}
     */
    activatePinchGesture() {
        if (this.Hammer) {
            /** @type {?} */
            const hammer = new this.Hammer(this.wrapper.nativeElement);
            hammer.get('pinch').set({ enable: true });
            hammer.on('pinchmove', this.onPinch.bind(this));
            hammer.on('pinchend', this.pinchStop.bind(this));
            hammer.on('pinchstart', this.startPinch.bind(this));
        }
        else if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()) {
            console.warn('[NgxImageCropper] Could not find HammerJS - Pinch Gesture won\'t work');
        }
    }
    /**
     * @private
     * @return {?}
     */
    resizeCropperPosition() {
        /** @type {?} */
        const sourceImageElement = this.sourceImage.nativeElement;
        if (this.maxSize.width !== sourceImageElement.offsetWidth || this.maxSize.height !== sourceImageElement.offsetHeight) {
            this.cropper.x1 = this.cropper.x1 * sourceImageElement.offsetWidth / this.maxSize.width;
            this.cropper.x2 = this.cropper.x2 * sourceImageElement.offsetWidth / this.maxSize.width;
            this.cropper.y1 = this.cropper.y1 * sourceImageElement.offsetHeight / this.maxSize.height;
            this.cropper.y2 = this.cropper.y2 * sourceImageElement.offsetHeight / this.maxSize.height;
        }
    }
    /**
     * @return {?}
     */
    resetCropperPosition() {
        this.cropperPositionService.resetCropperPosition(this.sourceImage, this.cropper, this.settings);
        this.doAutoCrop();
        this.imageVisible = true;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyboardAccess(event) {
        this.changeKeyboardStepSize(event);
        this.keyboardMoveCropper(event);
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    changeKeyboardStepSize(event) {
        /** @type {?} */
        const key = +event.key;
        if (key >= 1 && key <= 9) {
            this.settings.stepSize = key;
        }
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    keyboardMoveCropper(event) {
        /** @type {?} */
        const keyboardWhiteList = ['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'];
        if (!(keyboardWhiteList.includes(event.key))) {
            return;
        }
        /** @type {?} */
        const moveType = event.shiftKey ? MoveTypes.Resize : MoveTypes.Move;
        /** @type {?} */
        const position = event.altKey ? getInvertedPositionForKey(event.key) : getPositionForKey(event.key);
        /** @type {?} */
        const moveEvent = getEventForKey(event.key, this.settings.stepSize);
        event.preventDefault();
        event.stopPropagation();
        this.startMove({ clientX: 0, clientY: 0 }, moveType, position);
        this.moveImg(moveEvent);
        this.moveStop();
    }
    /**
     * @param {?} event
     * @param {?} moveType
     * @param {?=} position
     * @return {?}
     */
    startMove(event, moveType, position = null) {
        var _a, _b;
        if (((_a = this.moveStart) === null || _a === void 0 ? void 0 : _a.active) && ((_b = this.moveStart) === null || _b === void 0 ? void 0 : _b.type) === MoveTypes.Pinch) {
            return;
        }
        if (event.preventDefault) {
            event.preventDefault();
        }
        this.moveStart = Object.assign({ active: true, type: moveType, position, clientX: this.cropperPositionService.getClientX(event), clientY: this.cropperPositionService.getClientY(event) }, this.cropper);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    startPinch(event) {
        if (!this.safeImgDataUrl) {
            return;
        }
        if (event.preventDefault) {
            event.preventDefault();
        }
        this.moveStart = Object.assign({ active: true, type: MoveTypes.Pinch, position: 'center', clientX: this.cropper.x1 + (this.cropper.x2 - this.cropper.x1) / 2, clientY: this.cropper.y1 + (this.cropper.y2 - this.cropper.y1) / 2 }, this.cropper);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    moveImg(event) {
        if (this.moveStart.active) {
            if (event.stopPropagation) {
                event.stopPropagation();
            }
            if (event.preventDefault) {
                event.preventDefault();
            }
            if (this.moveStart.type === MoveTypes.Move) {
                this.cropperPositionService.move(event, this.moveStart, this.cropper);
                this.checkCropperPosition(true);
            }
            else if (this.moveStart.type === MoveTypes.Resize) {
                if (!this.cropperStaticWidth && !this.cropperStaticHeight) {
                    this.cropperPositionService.resize(event, this.moveStart, this.cropper, this.maxSize, this.settings);
                }
                this.checkCropperPosition(false);
            }
            this.cd.detectChanges();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onPinch(event) {
        if (this.moveStart.active) {
            if (event.stopPropagation) {
                event.stopPropagation();
            }
            if (event.preventDefault) {
                event.preventDefault();
            }
            if (this.moveStart.type === MoveTypes.Pinch) {
                this.cropperPositionService.resize(event, this.moveStart, this.cropper, this.maxSize, this.settings);
                this.checkCropperPosition(false);
            }
            this.cd.detectChanges();
        }
    }
    /**
     * @private
     * @return {?}
     */
    setMaxSize() {
        if (this.sourceImage) {
            /** @type {?} */
            const sourceImageElement = this.sourceImage.nativeElement;
            this.maxSize.width = sourceImageElement.offsetWidth;
            this.maxSize.height = sourceImageElement.offsetHeight;
            this.marginLeft = this.sanitizer.bypassSecurityTrustStyle('calc(50% - ' + this.maxSize.width / 2 + 'px)');
        }
    }
    /**
     * @private
     * @return {?}
     */
    setCropperScaledMinSize() {
        var _a, _b;
        if ((_b = (_a = this.loadedImage) === null || _a === void 0 ? void 0 : _a.transformed) === null || _b === void 0 ? void 0 : _b.image) {
            this.setCropperScaledMinWidth();
            this.setCropperScaledMinHeight();
        }
        else {
            this.settings.cropperScaledMinWidth = 20;
            this.settings.cropperScaledMinHeight = 20;
        }
    }
    /**
     * @private
     * @return {?}
     */
    setCropperScaledMinWidth() {
        this.settings.cropperScaledMinWidth = this.cropperMinWidth > 0
            ? Math.max(20, this.cropperMinWidth / this.loadedImage.transformed.image.width * this.maxSize.width)
            : 20;
    }
    /**
     * @private
     * @return {?}
     */
    setCropperScaledMinHeight() {
        if (this.maintainAspectRatio) {
            this.settings.cropperScaledMinHeight = Math.max(20, this.settings.cropperScaledMinWidth / this.aspectRatio);
        }
        else if (this.cropperMinHeight > 0) {
            this.settings.cropperScaledMinHeight = Math.max(20, this.cropperMinHeight / this.loadedImage.transformed.image.height * this.maxSize.height);
        }
        else {
            this.settings.cropperScaledMinHeight = 20;
        }
    }
    /**
     * @private
     * @return {?}
     */
    setCropperScaledMaxSize() {
        var _a, _b;
        if ((_b = (_a = this.loadedImage) === null || _a === void 0 ? void 0 : _a.transformed) === null || _b === void 0 ? void 0 : _b.image) {
            /** @type {?} */
            const ratio = this.loadedImage.transformed.size.width / this.maxSize.width;
            this.settings.cropperScaledMaxWidth = this.cropperMaxWidth > 20 ? this.cropperMaxWidth / ratio : this.maxSize.width;
            this.settings.cropperScaledMaxHeight = this.cropperMaxHeight > 20 ? this.cropperMaxHeight / ratio : this.maxSize.height;
            if (this.maintainAspectRatio) {
                if (this.settings.cropperScaledMaxWidth > this.settings.cropperScaledMaxHeight * this.aspectRatio) {
                    this.settings.cropperScaledMaxWidth = this.settings.cropperScaledMaxHeight * this.aspectRatio;
                }
                else if (this.settings.cropperScaledMaxWidth < this.settings.cropperScaledMaxHeight * this.aspectRatio) {
                    this.settings.cropperScaledMaxHeight = this.settings.cropperScaledMaxWidth / this.aspectRatio;
                }
            }
        }
        else {
            this.settings.cropperScaledMaxWidth = this.maxSize.width;
            this.settings.cropperScaledMaxHeight = this.maxSize.height;
        }
    }
    /**
     * @private
     * @param {?=} maintainSize
     * @return {?}
     */
    checkCropperPosition(maintainSize = false) {
        if (this.cropper.x1 < 0) {
            this.cropper.x2 -= maintainSize ? this.cropper.x1 : 0;
            this.cropper.x1 = 0;
        }
        if (this.cropper.y1 < 0) {
            this.cropper.y2 -= maintainSize ? this.cropper.y1 : 0;
            this.cropper.y1 = 0;
        }
        if (this.cropper.x2 > this.maxSize.width) {
            this.cropper.x1 -= maintainSize ? (this.cropper.x2 - this.maxSize.width) : 0;
            this.cropper.x2 = this.maxSize.width;
        }
        if (this.cropper.y2 > this.maxSize.height) {
            this.cropper.y1 -= maintainSize ? (this.cropper.y2 - this.maxSize.height) : 0;
            this.cropper.y2 = this.maxSize.height;
        }
    }
    /**
     * @return {?}
     */
    moveStop() {
        if (this.moveStart.active) {
            this.moveStart.active = false;
            this.doAutoCrop();
        }
    }
    /**
     * @return {?}
     */
    pinchStop() {
        if (this.moveStart.active) {
            this.moveStart.active = false;
            this.doAutoCrop();
        }
    }
    /**
     * @private
     * @return {?}
     */
    doAutoCrop() {
        if (this.autoCrop) {
            this.crop();
        }
    }
    /**
     * @return {?}
     */
    crop() {
        var _a, _b;
        if (((_b = (_a = this.loadedImage) === null || _a === void 0 ? void 0 : _a.transformed) === null || _b === void 0 ? void 0 : _b.image) != null) {
            this.startCropImage.emit();
            /** @type {?} */
            const output = this.cropService.crop(this.sourceImage, this.loadedImage, this.cropper, this.settings);
            if (output != null) {
                this.imageCropped.emit(output);
            }
            return output;
        }
        return null;
    }
}
ImageCropperComponent.ɵfac = function ImageCropperComponent_Factory(t) { return new (t || ImageCropperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CropService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CropperPositionService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](LoadImageService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
ImageCropperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageCropperComponent, selectors: [["image-cropper"]], viewQuery: function ImageCropperComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wrapper = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sourceImage = _t.first);
    } }, hostVars: 4, hostBindings: function ImageCropperComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function ImageCropperComponent_resize_HostBindingHandler() { return ctx.onResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("mousemove", function ImageCropperComponent_mousemove_HostBindingHandler($event) { return ctx.moveImg($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("touchmove", function ImageCropperComponent_touchmove_HostBindingHandler($event) { return ctx.moveImg($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("mouseup", function ImageCropperComponent_mouseup_HostBindingHandler() { return ctx.moveStop(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("touchend", function ImageCropperComponent_touchend_HostBindingHandler() { return ctx.moveStop(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx.alignImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.disabled);
    } }, inputs: { format: "format", transform: "transform", maintainAspectRatio: "maintainAspectRatio", aspectRatio: "aspectRatio", resizeToWidth: "resizeToWidth", resizeToHeight: "resizeToHeight", cropperMinWidth: "cropperMinWidth", cropperMinHeight: "cropperMinHeight", cropperMaxHeight: "cropperMaxHeight", cropperMaxWidth: "cropperMaxWidth", cropperStaticWidth: "cropperStaticWidth", cropperStaticHeight: "cropperStaticHeight", canvasRotation: "canvasRotation", initialStepSize: "initialStepSize", roundCropper: "roundCropper", onlyScaleDown: "onlyScaleDown", imageQuality: "imageQuality", autoCrop: "autoCrop", backgroundColor: "backgroundColor", containWithinAspectRatio: "containWithinAspectRatio", hideResizeSquares: "hideResizeSquares", cropper: "cropper", alignImage: "alignImage", disabled: "disabled", imageChangedEvent: "imageChangedEvent", imageURL: "imageURL", imageBase64: "imageBase64", imageFile: "imageFile" }, outputs: { imageCropped: "imageCropped", startCropImage: "startCropImage", imageLoaded: "imageLoaded", cropperReady: "cropperReady", loadImageFailed: "loadImageFailed" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 10, consts: [["wrapper", ""], ["class", "ngx-ic-source-image", 3, "src", "visibility", "transform", "load", 4, "ngIf"], [1, "ngx-ic-overlay"], ["class", "ngx-ic-cropper", "tabindex", "0", 3, "ngx-ic-round", "top", "left", "width", "height", "margin-left", "visibility", "keydown", 4, "ngIf"], [1, "ngx-ic-source-image", 3, "src", "load"], ["sourceImage", ""], ["tabindex", "0", 1, "ngx-ic-cropper", 3, "keydown"], [1, "ngx-ic-move", 3, "mousedown", "touchstart"], [4, "ngIf"], [1, "ngx-ic-resize", "ngx-ic-topleft", 3, "mousedown", "touchstart"], [1, "ngx-ic-square"], [1, "ngx-ic-resize", "ngx-ic-top"], [1, "ngx-ic-resize", "ngx-ic-topright", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize", "ngx-ic-right"], [1, "ngx-ic-resize", "ngx-ic-bottomright", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize", "ngx-ic-bottom"], [1, "ngx-ic-resize", "ngx-ic-bottomleft", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize", "ngx-ic-left"], [1, "ngx-ic-resize-bar", "ngx-ic-top", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize-bar", "ngx-ic-right", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize-bar", "ngx-ic-bottom", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize-bar", "ngx-ic-left", 3, "mousedown", "touchstart"]], template: function ImageCropperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ImageCropperComponent_img_2_Template, 2, 5, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ImageCropperComponent_div_4_Template, 3, 15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.imageVisible && ctx.backgroundColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.safeImgDataUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.maxSize.width, "px")("height", ctx.maxSize.height, "px")("margin-left", ctx.alignImage === "center" ? ctx.marginLeft : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imageVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["[_nghost-%COMP%]{display:flex;max-height:100%;max-width:100%;overflow:hidden;padding:5px;text-align:center}[_nghost-%COMP%], [_nghost-%COMP%] > div[_ngcontent-%COMP%]{position:relative;width:100%}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   img.ngx-ic-source-image[_ngcontent-%COMP%]{max-height:100%;max-width:100%;transform-origin:center}[_nghost-%COMP%]   .ngx-ic-overlay[_ngcontent-%COMP%]{left:0;outline:var(--cropper-overlay-color,#fff) solid 100vw;pointer-events:none;position:absolute;top:0;touch-action:none}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]{background:transparent;color:#53535c;display:flex;outline:100vw solid hsla(0,0%,100%,.3);outline:var(--cropper-outline-color,hsla(0,0%,100%,.3)) solid 100vw;position:absolute;touch-action:none}@media (orientation:portrait){[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]{outline-width:100vh}}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]:after{border:1px dashed;bottom:0;color:inherit;content:\"\";left:0;opacity:.75;pointer-events:none;position:absolute;right:0;top:0;z-index:1}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-move[_ngcontent-%COMP%]{border:1px solid hsla(0,0%,100%,.5);cursor:move;width:100%}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]:focus   .ngx-ic-move[_ngcontent-%COMP%]{border-color:#1e90ff;border-width:2px}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize[_ngcontent-%COMP%]{display:inline-block;line-height:6px;opacity:.85;padding:8px;position:absolute;z-index:1}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize[_ngcontent-%COMP%]   .ngx-ic-square[_ngcontent-%COMP%]{background:#53535c;border:1px solid hsla(0,0%,100%,.5);box-sizing:content-box;display:inline-block;height:6px;width:6px}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-topleft[_ngcontent-%COMP%]{cursor:nwse-resize;left:-12px;top:-12px}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-top[_ngcontent-%COMP%]{cursor:ns-resize;left:calc(50% - 12px);top:-12px}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-topright[_ngcontent-%COMP%]{cursor:nesw-resize;right:-12px;top:-12px}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-right[_ngcontent-%COMP%]{cursor:ew-resize;right:-12px;top:calc(50% - 12px)}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-bottomright[_ngcontent-%COMP%]{bottom:-12px;cursor:nwse-resize;right:-12px}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-bottom[_ngcontent-%COMP%]{bottom:-12px;cursor:ns-resize;left:calc(50% - 12px)}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-bottomleft[_ngcontent-%COMP%]{bottom:-12px;cursor:nesw-resize;left:-12px}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-left[_ngcontent-%COMP%]{cursor:ew-resize;left:-12px;top:calc(50% - 12px)}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar[_ngcontent-%COMP%]{position:absolute;z-index:1}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-top[_ngcontent-%COMP%]{cursor:ns-resize;height:22px;left:11px;top:-11px;width:calc(100% - 22px)}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-right[_ngcontent-%COMP%]{cursor:ew-resize;height:calc(100% - 22px);right:-11px;top:11px;width:22px}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-bottom[_ngcontent-%COMP%]{bottom:-11px;cursor:ns-resize;height:22px;left:11px;width:calc(100% - 22px)}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-left[_ngcontent-%COMP%]{cursor:ew-resize;height:calc(100% - 22px);left:-11px;top:11px;width:22px}[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]{outline-color:transparent}[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]:after{border-radius:100%;box-shadow:0 0 0 100vw hsla(0,0%,100%,.3);box-shadow:0 0 0 100vw var(--cropper-outline-color,hsla(0,0%,100%,.3))}@media (orientation:portrait){[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]:after{box-shadow:0 0 0 100vh hsla(0,0%,100%,.3);box-shadow:0 0 0 100vh var(--cropper-outline-color,hsla(0,0%,100%,.3))}}[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]   .ngx-ic-move[_ngcontent-%COMP%]{border-radius:100%}.disabled[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-move[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar[_ngcontent-%COMP%]{display:none}"], changeDetection: 0 });
/** @nocollapse */
ImageCropperComponent.ctorParameters = () => [
    { type: CropService },
    { type: CropperPositionService },
    { type: LoadImageService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
ImageCropperComponent.propDecorators = {
    wrapper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['wrapper', { static: true },] }],
    sourceImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['sourceImage', { static: false },] }],
    imageChangedEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    imageURL: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    imageBase64: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    imageFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    format: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    transform: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maintainAspectRatio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    aspectRatio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    resizeToWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    resizeToHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cropperMinWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cropperMinHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cropperMaxHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cropperMaxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cropperStaticWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cropperStaticHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    canvasRotation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    initialStepSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    roundCropper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onlyScaleDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    imageQuality: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    autoCrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    backgroundColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    containWithinAspectRatio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    hideResizeSquares: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cropper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    alignImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.text-align',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.disabled',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    imageCropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    startCropImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    imageLoaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    cropperReady: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    loadImageFailed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:resize',] }],
    moveImg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:mousemove', ['$event'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:touchmove', ['$event'],] }],
    moveStop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:mouseup',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:touchend',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageCropperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'image-cropper',
                template: "<div [style.background]=\"imageVisible && backgroundColor\"\n     #wrapper\n>\n    <img\n      #sourceImage\n      class=\"ngx-ic-source-image\"\n      *ngIf=\"safeImgDataUrl\"\n      [src]=\"safeImgDataUrl\"\n      [style.visibility]=\"imageVisible ? 'visible' : 'hidden'\"\n      [style.transform]=\"safeTransformStyle\"\n      (load)=\"imageLoadedInView()\"\n    />\n    <div\n        class=\"ngx-ic-overlay\"\n        [style.width.px]=\"maxSize.width\"\n        [style.height.px]=\"maxSize.height\"\n        [style.margin-left]=\"alignImage === 'center' ? marginLeft : null\"\n    ></div>\n    <div class=\"ngx-ic-cropper\"\n         *ngIf=\"imageVisible\"\n         [class.ngx-ic-round]=\"roundCropper\"\n         [style.top.px]=\"cropper.y1\"\n         [style.left.px]=\"cropper.x1\"\n         [style.width.px]=\"cropper.x2 - cropper.x1\"\n         [style.height.px]=\"cropper.y2 - cropper.y1\"\n         [style.margin-left]=\"alignImage === 'center' ? marginLeft : null\"\n         [style.visibility]=\"imageVisible ? 'visible' : 'hidden'\"\n         (keydown)=\"keyboardAccess($event)\"\n         tabindex=\"0\"\n    >\n        <div\n            (mousedown)=\"startMove($event, moveTypes.Move)\"\n            (touchstart)=\"startMove($event, moveTypes.Move)\"\n            class=\"ngx-ic-move\">\n        </div>\n        <ng-container *ngIf=\"!hideResizeSquares\">\n            <span class=\"ngx-ic-resize ngx-ic-topleft\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'topleft')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'topleft')\">\n                <span class=\"ngx-ic-square\"></span>\n            </span>\n            <span class=\"ngx-ic-resize ngx-ic-top\">\n                <span class=\"ngx-ic-square\"></span>\n            </span>\n            <span class=\"ngx-ic-resize ngx-ic-topright\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'topright')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'topright')\">\n                <span class=\"ngx-ic-square\"></span>\n            </span>\n            <span class=\"ngx-ic-resize ngx-ic-right\">\n                <span class=\"ngx-ic-square\"></span>\n            </span>\n            <span class=\"ngx-ic-resize ngx-ic-bottomright\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'bottomright')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'bottomright')\">\n                <span class=\"ngx-ic-square\"></span>\n            </span>\n            <span class=\"ngx-ic-resize ngx-ic-bottom\">\n                <span class=\"ngx-ic-square\"></span>\n            </span>\n            <span class=\"ngx-ic-resize ngx-ic-bottomleft\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'bottomleft')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'bottomleft')\">\n                <span class=\"ngx-ic-square\"></span>\n            </span>\n            <span class=\"ngx-ic-resize ngx-ic-left\">\n                <span class=\"ngx-ic-square\"></span>\n            </span>\n            <span class=\"ngx-ic-resize-bar ngx-ic-top\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'top')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'top')\">\n            </span>\n            <span class=\"ngx-ic-resize-bar ngx-ic-right\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'right')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'right')\">\n            </span>\n            <span class=\"ngx-ic-resize-bar ngx-ic-bottom\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'bottom')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'bottom')\">\n            </span>\n            <span class=\"ngx-ic-resize-bar ngx-ic-left\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'left')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'left')\">\n            </span>\n        </ng-container>\n    </div>\n</div>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styles: [":host{display:flex;max-height:100%;max-width:100%;overflow:hidden;padding:5px;text-align:center}:host,:host>div{position:relative;width:100%}:host>div img.ngx-ic-source-image{max-height:100%;max-width:100%;transform-origin:center}:host .ngx-ic-overlay{left:0;outline:var(--cropper-overlay-color,#fff) solid 100vw;pointer-events:none;position:absolute;top:0;touch-action:none}:host .ngx-ic-cropper{background:transparent;color:#53535c;display:flex;outline:100vw solid hsla(0,0%,100%,.3);outline:var(--cropper-outline-color,hsla(0,0%,100%,.3)) solid 100vw;position:absolute;touch-action:none}@media (orientation:portrait){:host .ngx-ic-cropper{outline-width:100vh}}:host .ngx-ic-cropper:after{border:1px dashed;bottom:0;color:inherit;content:\"\";left:0;opacity:.75;pointer-events:none;position:absolute;right:0;top:0;z-index:1}:host .ngx-ic-cropper .ngx-ic-move{border:1px solid hsla(0,0%,100%,.5);cursor:move;width:100%}:host .ngx-ic-cropper:focus .ngx-ic-move{border-color:#1e90ff;border-width:2px}:host .ngx-ic-cropper .ngx-ic-resize{display:inline-block;line-height:6px;opacity:.85;padding:8px;position:absolute;z-index:1}:host .ngx-ic-cropper .ngx-ic-resize .ngx-ic-square{background:#53535c;border:1px solid hsla(0,0%,100%,.5);box-sizing:content-box;display:inline-block;height:6px;width:6px}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-topleft{cursor:nwse-resize;left:-12px;top:-12px}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-top{cursor:ns-resize;left:calc(50% - 12px);top:-12px}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-topright{cursor:nesw-resize;right:-12px;top:-12px}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-right{cursor:ew-resize;right:-12px;top:calc(50% - 12px)}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-bottomright{bottom:-12px;cursor:nwse-resize;right:-12px}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-bottom{bottom:-12px;cursor:ns-resize;left:calc(50% - 12px)}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-bottomleft{bottom:-12px;cursor:nesw-resize;left:-12px}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-left{cursor:ew-resize;left:-12px;top:calc(50% - 12px)}:host .ngx-ic-cropper .ngx-ic-resize-bar{position:absolute;z-index:1}:host .ngx-ic-cropper .ngx-ic-resize-bar.ngx-ic-top{cursor:ns-resize;height:22px;left:11px;top:-11px;width:calc(100% - 22px)}:host .ngx-ic-cropper .ngx-ic-resize-bar.ngx-ic-right{cursor:ew-resize;height:calc(100% - 22px);right:-11px;top:11px;width:22px}:host .ngx-ic-cropper .ngx-ic-resize-bar.ngx-ic-bottom{bottom:-11px;cursor:ns-resize;height:22px;left:11px;width:calc(100% - 22px)}:host .ngx-ic-cropper .ngx-ic-resize-bar.ngx-ic-left{cursor:ew-resize;height:calc(100% - 22px);left:-11px;top:11px;width:22px}:host .ngx-ic-cropper.ngx-ic-round{outline-color:transparent}:host .ngx-ic-cropper.ngx-ic-round:after{border-radius:100%;box-shadow:0 0 0 100vw hsla(0,0%,100%,.3);box-shadow:0 0 0 100vw var(--cropper-outline-color,hsla(0,0%,100%,.3))}@media (orientation:portrait){:host .ngx-ic-cropper.ngx-ic-round:after{box-shadow:0 0 0 100vh hsla(0,0%,100%,.3);box-shadow:0 0 0 100vh var(--cropper-outline-color,hsla(0,0%,100%,.3))}}:host .ngx-ic-cropper.ngx-ic-round .ngx-ic-move{border-radius:100%}:host.disabled .ngx-ic-cropper .ngx-ic-move,:host.disabled .ngx-ic-cropper .ngx-ic-resize,:host.disabled .ngx-ic-cropper .ngx-ic-resize-bar{display:none}"]
            }]
    }], function () { return [{ type: CropService }, { type: CropperPositionService }, { type: LoadImageService }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { format: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], transform: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maintainAspectRatio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], aspectRatio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], resizeToWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], resizeToHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cropperMinWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cropperMinHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cropperMaxHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cropperMaxWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cropperStaticWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cropperStaticHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], canvasRotation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], initialStepSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], roundCropper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onlyScaleDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], imageQuality: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], autoCrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], containWithinAspectRatio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hideResizeSquares: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cropper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], alignImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.text-align']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.disabled']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], imageCropped: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], startCropImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], imageLoaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cropperReady: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], loadImageFailed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], 
    /**
     * @return {?}
     */
    onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize']
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    moveImg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:mousemove', ['$event']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:touchmove', ['$event']]
        }], 
    /**
     * @return {?}
     */
    moveStop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:mouseup']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:touchend']
        }], wrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['wrapper', { static: true }]
        }], sourceImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sourceImage', { static: false }]
        }], imageChangedEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], imageURL: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], imageBase64: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], imageFile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/image-cropper.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ImageCropperModule {
}
ImageCropperModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ImageCropperModule });
ImageCropperModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ImageCropperModule_Factory(t) { return new (t || ImageCropperModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ImageCropperModule, { declarations: function () { return [ImageCropperComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]; }, exports: function () { return [ImageCropperComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageCropperModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
                ],
                declarations: [
                    ImageCropperComponent
                ],
                exports: [
                    ImageCropperComponent
                ]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/interfaces/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/blob.utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} base64Image
 * @return {?}
 */
function base64ToFile(base64Image) {
    /** @type {?} */
    const split = base64Image.split(',');
    /** @type {?} */
    const type = split[0].replace('data:', '').replace(';base64', '');
    /** @type {?} */
    const byteString = atob(split[1]);
    /** @type {?} */
    const ab = new ArrayBuffer(byteString.length);
    /** @type {?} */
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i += 1) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type });
}

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-image-cropper.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-image-cropper.js.map

/***/ }),

/***/ "snPw":
/*!********************************************************************************************************!*\
  !*** ./src/app/administration/vehicle-damage/vehicle-damage-dialog/vehicle-damage-dialog.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: VehicleDamageDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleDamageDialogComponent", function() { return VehicleDamageDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_business_services_administration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/business/services/administration.service */ "RTdY");
/* harmony import */ var src_app_shared_notifications_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/notifications/notification.service */ "38VU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");










function VehicleDamageDialogComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 50);
} }
function VehicleDamageDialogComponent_h3_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add vehicle damage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VehicleDamageDialogComponent_h3_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit vehicle damage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VehicleDamageDialogComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VehicleDamageDialogComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class VehicleDamageDialogComponent {
    constructor(dialogRef, data, fb, administrationService, notificationService) {
        var _a, _b, _c, _d;
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.administrationService = administrationService;
        this.notificationService = notificationService;
        this.subscriptions = [];
        this.isLoading = false;
        if (this.data.action === 'edit') {
            this.selectedDamage = this.data.damage;
        }
        this.damageForm = this.fb.group({
            name: [(_b = (_a = this.selectedDamage) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            uid: [(_d = (_c = this.selectedDamage) === null || _c === void 0 ? void 0 : _c.uid) !== null && _d !== void 0 ? _d : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
    ngOnInit() { }
    onSubmit() {
        if (this.damageForm.invalid) {
            return Object.values(this.damageForm.controls).forEach((control) => {
                if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                    Object.values(control.controls).forEach((control) => control.markAsTouched());
                }
                else {
                    control.markAsTouched();
                }
            });
        }
        else {
            //save customer
            this.isLoading = true;
            this.administrationService.saveVehicleDamage(this.damageForm.value).subscribe((res) => {
                this.isLoading = false;
                this.notificationService.success('Item added');
                this.dialogRef.close();
            }, (err) => {
                var _a, _b;
                this.isLoading = false;
                if ((_b = (_a = err.error) === null || _a === void 0 ? void 0 : _a.message) === null || _b === void 0 ? void 0 : _b.includes('Damage key already exists')) {
                    return this.notificationService.error('Damage ID already exists');
                }
                this.notificationService.error();
            });
        }
    }
    onCancel() {
        this.dialogRef.close();
    }
    ngOnDestroy() {
        this.subscriptions.forEach((sub) => sub.unsubscribe());
    }
}
VehicleDamageDialogComponent.ɵfac = function VehicleDamageDialogComponent_Factory(t) { return new (t || VehicleDamageDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_business_services_administration_service__WEBPACK_IMPORTED_MODULE_3__["AdministrationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_notifications_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"])); };
VehicleDamageDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VehicleDamageDialogComponent, selectors: [["app-vehicle-damage-dialog"]], decls: 22, vars: 10, consts: [[1, "dialog-content", "custom-scroll"], ["class", "dialog-loader", 4, "ngIf"], [4, "ngIf"], [1, "form-group", "new-damage-form", 3, "formGroup", "ngSubmit"], [1, "col-12", "mb-3"], ["for", "first_name", 1, "text-dark", "text-base"], ["id", "name", "name", "name", "type", "text", "formControlName", "name", 1, "form-control"], ["class", "form-text invalid-feedback", 4, "ngIf"], ["for", "uid", 1, "text-dark", "text-base"], ["id", "uid", "name", "uid", "type", "text", "formControlName", "uid", 1, "form-control"], [1, "d-flex", "w-100", "px-4", "pt-3", "justify-content-between", "mt-3"], [1, "col-5"], ["type", "button", 1, "btn", "w-100", "btn-outline-secondary", 3, "click"], ["type", "submit", 1, "btn", "w-100", "btn-success"], [1, "dialog-loader"], [3, "diameter"], [1, "form-text", "invalid-feedback"]], template: function VehicleDamageDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VehicleDamageDialogComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VehicleDamageDialogComponent_h3_2_Template, 2, 0, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VehicleDamageDialogComponent_h3_3_Template, 2, 0, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function VehicleDamageDialogComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, VehicleDamageDialogComponent_div_9_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, VehicleDamageDialogComponent_div_14_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VehicleDamageDialogComponent_Template_button_click_17_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.action === "new");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.action === "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.damageForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.damageForm.controls.name.touched && ctx.damageForm.controls.name.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.damageForm.controls.uid.touched && ctx.damageForm.controls.uid.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatSpinner"]], styles: [".text-blue-light[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-light-rgb));\n}\n.text-blue-main[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-main-rgb));\n}\n.text-blue-dark[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-dark-rgb));\n}\n.bg-grey-light[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-grey-light-rgb));\n}\n.bg-grey-dark[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-grey-5-rgb));\n}\n.bg-blue-light[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-light-rgb));\n}\n.bg-blue-main[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-main-rgb));\n}\n.bg-blue-dark[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-dark-rgb));\n}\n.text-xs[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.text-base[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.text-lg[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.text-xl[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.text-2xl[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.text-3xl[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.capitalize[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.rounded-xl[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  overflow: hidden;\n}\n.border-primary-1[_ngcontent-%COMP%] {\n  border: 1px solid rgb(var(--palette-blue-main-rgb));\n}\n.border-primary-2[_ngcontent-%COMP%] {\n  border: 2px solid rgb(var(--palette-blue-main-rgb));\n}\n.custom-scroll[_ngcontent-%COMP%] {\n  padding-right: 4px;\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0.5em;\n  border-radius: 5px;\n  background-color: rgb(var(--palette-grey-light-rgb));\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  border: 0.3em solid;\n  border-color: rgb(var(--palette-grey-5-rgb));\n}\n[_nghost-%COMP%] {\n  position: relative;\n}\n.custom-select-wrapper[_ngcontent-%COMP%] {\n  --select-padding: 12px;\n  --select-icon-width: 14px;\n  --form-icons-color: rgb(var(--palette-primary-rgb));\n  --form-input-background: rgb(var(--palette-grey-0-rgb));\n  position: relative;\n}\n.custom-select-wrapper[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%] {\n  padding: calc(var(--select-padding) / 2) var(--select-padding);\n  -webkit-padding-end: calc(var(--select-padding) + var(--select-icon-width));\n          padding-inline-end: calc(var(--select-padding) + var(--select-icon-width));\n  background: none;\n  background-color: var(--form-input-background);\n}\n.custom-select-wrapper[_ngcontent-%COMP%]   .half-arrow-icon[_ngcontent-%COMP%] {\n  right: var(--select-padding);\n  top: 0px;\n  pointer-events: none;\n  height: 100%;\n  width: var(--select-icon-width);\n  color: var(--form-icons-color);\n  position: absolute;\n}\n.new-damage-form[_ngcontent-%COMP%] {\n  max-height: 70vh;\n  padding-bottom: 1rem;\n  overflow-y: auto;\n}\n[_nghost-%COMP%]     {\n  --cropper-outline-color: rgba(0, 0, 0, 0.4);\n}\n[_nghost-%COMP%]     .mat-horizontal-stepper-header {\n  height: 40px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9wYWxldHRlcy9zaGFyZWQuc2NzcyIsInNyYy90aGVtZS9wYWxldHRlcy9tb2RlLnNjc3MiLCJzcmMvdGhlbWUvY3VzdG9tLWNsYXNzZXMuc2NzcyIsInNyYy9hcHAvYWRtaW5pc3RyYXRpb24vdmVoaWNsZS1kYW1hZ2UvdmVoaWNsZS1kYW1hZ2UtZGlhbG9nL3ZlaGljbGUtZGFtYWdlLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9taXhpbnMvaW5wdXRzL3NlbGVjdC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBQ0xBO0VBQ0UseUNBQUE7QUM2Q0Y7QUQzQ0E7RUFDRSx3Q0FBQTtBQzhDRjtBRDVDQTtFQUNFLHdDQUFBO0FDK0NGO0FEM0NBO0VBQ0Usb0RBQUE7QUM4Q0Y7QUQ1Q0E7RUFDRSxnREFBQTtBQytDRjtBRDdDQTtFQUNFLG9EQUFBO0FDZ0RGO0FEOUNBO0VBQ0UsbURBQUE7QUNpREY7QUQvQ0E7RUFDRSxtREFBQTtBQ2tERjtBRDlDQTtFQUNFLGtCQUFBO0FDaURGO0FEL0NBO0VBQ0UsbUJBQUE7QUNrREY7QURoREE7RUFDRSxlQUFBO0FDbURGO0FEakRBO0VBQ0UsbUJBQUE7QUNvREY7QURqREE7RUFDRSxrQkFBQTtBQ29ERjtBRGpEQTtFQUNFLGlCQUFBO0FDb0RGO0FEakRBO0VBQ0Usa0JBQUE7QUNvREY7QURqREE7RUFDRSxnQkFBQTtBQ29ERjtBRGxEQTtFQUNFLGdCQUFBO0FDcURGO0FEbERBO0VBQ0UsMEJBQUE7QUNxREY7QURsREE7RUFDRSxlQUFBO0FDcURGO0FEbERBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQ3FERjtBRGxEQTtFQUNFLG1EQUFBO0FDcURGO0FEbERBO0VBQ0UsbURBQUE7QUNxREY7QURsREE7RUFDRSxrQkFBQTtBQ3FERjtBRG5EQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9EQUFBO0FDc0RGO0FEbERBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0FDcURGO0FBbEpBO0VBQ0Usa0JBQUE7QUFxSkY7QUFuSkE7RUNJRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbURBQUE7RUFDQSx1REFBQTtFQUVBLGtCQUFBO0FEa0pGO0FDaEpFO0VBQ0UsOERBQUE7RUFDQSwyRUFBQTtVQUFBLDBFQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4Q0FBQTtBRGtKSjtBQ2hKRTtFQUNFLDRCQUFBO0VBQ0EsUUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBRGtKSjtBQXRLQTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQXlLRjtBQXRLQTtFQUtFLDJDQUFBO0FBcUtGO0FBektFO0VBQ0UsdUJBQUE7QUEyS0oiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmlzdHJhdGlvbi92ZWhpY2xlLWRhbWFnZS92ZWhpY2xlLWRhbWFnZS1kaWFsb2cvdmVoaWNsZS1kYW1hZ2UtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgU2hhcmVkXG4qL1xuXG5AaW1wb3J0ICdwcmVmZXJlbmNlcyc7XG5AaW1wb3J0ICdpbnRlcmZhY2UnO1xuQGltcG9ydCAnbW9kZSc7XG5cbi8vIEFuIGFic3RyYWN0IHdheSB0byBwcm92aWRlIGNvbG9ycy5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgYW4gaW50ZXJmYWNlIHRvIGJvdGggU2FzcyB2YXJpYWJsZXMgYW5kIENTUyA0IHZhcmlhYmxlcyBiYXNlZCBjb2xvciBwYWxldHRlcy5cbkBmdW5jdGlvbiBwYWxldHRlLWNvbG9yKCRjb2xvci1uYW1lLCAkYWxwaGE6IDEpIHtcbiAgLy8gJGNvbG9yLXBhbGV0dGUtbW9kZSAgICAgICAgPT4gIERlZmluZWQgaW4gbW9kZS5zY3NzXG4gIC8vICRjaG9vc2VuLXBhbGV0dGUgICAgICAgICAgID0+ICBEZWZpbmVkIGluIG1vZGUuc2Nzc1xuICAvLyAkY29sb3ItcGFsZXR0ZS1pbnRlcmZhY2UgICA9PiAgRGVmaW5lZCBpbiBpbnRlcmZhY2Uuc2Nzc1xuICAvLyAkY3NzNC12YXItcHJlZml4ICAgICAgICAgICA9PiAgRGVmaW5lZCBpbiBwcmVmZXJlbmNlcy5zY3NzXG4gIC8vICRjc3M0LWNvbG9yLWZvcm1hdCAgICAgICAgID0+ICBEZWZpbmVkIGluIHByZWZlcmVuY2VzLnNjc3NcblxuICBAaWYgKCRjb2xvci1wYWxldHRlLW1vZGUgPT0gJ2Nzcy00Jykge1xuICAgICRwYWxldHRlLXJlZmVyZW5jZTogJGNvbG9yLXBhbGV0dGUtaW50ZXJmYWNlO1xuXG4gICAgJGNvbG9yLXZhcmlhYmxlLWluZGV4OiBpbmRleCgkcGFsZXR0ZS1yZWZlcmVuY2UsICRjb2xvci1uYW1lKTtcblxuICAgIEBpZiAodHlwZV9vZigkY29sb3ItdmFyaWFibGUtaW5kZXgpID09ICdudW1iZXInKSB7XG4gICAgICAkY29sb3ItdmFyaWFibGUtbmFtZTogbnRoKCRwYWxldHRlLXJlZmVyZW5jZSwgJGNvbG9yLXZhcmlhYmxlLWluZGV4KTtcblxuICAgICAgQGlmICgkYWxwaGEgPiAwIGFuZCAkYWxwaGEgPCAxKSB7XG4gICAgICAgIEByZXR1cm4gI3sncmdiYSh2YXIoJyArICRjc3M0LXZhci1wcmVmaXggKyAkY29sb3ItdmFyaWFibGUtbmFtZSArICctJyArICRjc3M0LWNvbG9yLWZvcm1hdCArJyksICN7JGFscGhhfSknfTtcbiAgICAgIH0gQGVsc2UgaWYgKCRhbHBoYSA9PSAxKSB7XG4gICAgICAgIEByZXR1cm4gI3sncmdiKHZhcignICsgJGNzczQtdmFyLXByZWZpeCArICRjb2xvci12YXJpYWJsZS1uYW1lICsgJy0nICsgJGNzczQtY29sb3ItZm9ybWF0ICsgJykpJ307XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgQGVycm9yIFwiQWxwaGEgKCN7JGFscGhhfSkgbXVzdCBiZSBhIG51bWJlclwiO1xuICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgQGVycm9yIFwiQ29sb3IgKCN7JGNvbG9yLW5hbWV9KSB3YXMgbm90IGZvdW5kIG9uIENvbG9yIFBhbGV0dGUgZGVmaW5pdGlvbi4gTWFrZSBzdXJlIGl0J3MgZGVmaW5lZCBpbiB0aGUgdGhlbWUvcGFsZXR0ZXMvaW50ZXJmYWNlLnNjc3MgZmlsZVwiO1xuICAgIH1cbiAgfSBAZWxzZSBpZiAoJGNvbG9yLXBhbGV0dGUtbW9kZSA9PSAnc2FzcycpIHtcbiAgICAkcGFsZXR0ZS1yZWZlcmVuY2U6ICRjaG9vc2VuLXBhbGV0dGU7XG5cbiAgICAkY29sb3ItdmFyaWFibGU6IG1hcC1nZXQoJHBhbGV0dGUtcmVmZXJlbmNlLCAkY29sb3ItbmFtZSk7XG5cbiAgICAvLyBDaGVjayBpZiBpdCBpcyBhIFNhc3MgY29sb3JcbiAgICBAaWYgKHR5cGVfb2YoJGNvbG9yLXZhcmlhYmxlKSA9PSAnY29sb3InKSB7XG4gICAgICBAaWYgKCRhbHBoYSA+IDAgYW5kICRhbHBoYSA8IDEpIHtcbiAgICAgICAgQHJldHVybiByZ2JhKCRjb2xvci12YXJpYWJsZSwgJGFscGhhKTtcbiAgICAgIH0gQGVsc2UgaWYgKCRhbHBoYSA9PSAxKSB7XG4gICAgICAgIEByZXR1cm4gJGNvbG9yLXZhcmlhYmxlO1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIEBlcnJvciBcIkFscGhhICgjeyRhbHBoYX0pIG11c3QgYmUgYSBudW1iZXJcIjtcbiAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgIEBlcnJvciBcIkNvbG9yICgjeyRjb2xvci12YXJpYWJsZX0pIGlzIG5vdCBhIFNhc3MgY29sb3JcIjtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBlcnJvciAnTm8gQ29sb3IgUGFsZXR0ZSBtb2RlIHNlbGVjdGVkIGluIHRoZW1lL3BhbGV0dGVzL3ByZWZlcmVuY2VzLnNjc3MnO1xuICB9XG59XG4iLCIvKlxuICBDU1MgNCBNb2RlXG4qL1xuJGNvbG9yLXBhbGV0dGUtbW9kZTogJ2Nzcy00JztcblxuXG4vKlxuICBTYXNzIE1vZGVcbiovXG4vLyBAaW1wb3J0ICdjb3JlJztcbi8vXG4vLyAkY29sb3ItcGFsZXR0ZS1tb2RlOiAnc2Fzcyc7XG4vL1xuLy8gLy8gSW1wb3J0IHRoZSBkZWZpbml0aW9ucyBvZiB0aGUgcGFsZXR0ZSB5b3Ugd2FudCB0byB1c2Vcbi8vIEBpbXBvcnQgJ3BhbGV0dGUtMS9kZWZpbml0aW9ucyc7XG4vLyAvLyBAaW1wb3J0ICdwYWxldHRlLTIvZGVmaW5pdGlvbnMnO1xuLy9cbi8vIC8vIEFzc2lnbiBhIHBhcnRpY3VsYXIgQ29sb3IgUGFsZXR0ZSB0byB0aGUgJ2Nob29zZW4tcGFsZXR0ZScgcG9pbnRlci5cbi8vIC8vICRjaG9vc2VuLXBhbGV0dGUgd2lsbCBiZSBhIFNhc3MgbWFwIHBvaW50aW5nIHRvIGFub3RoZXIgY29sb3IgcGFsZXR0ZSBTYXNzIG1hcFxuLy8gJGNob29zZW4tcGFsZXR0ZTogYnVpbGRTYXNzUGFsZXR0ZSgkcGFsZXR0ZS0xKTtcbi8vIC8vICRjaG9vc2VuLXBhbGV0dGU6IGJ1aWxkU2Fzc1BhbGV0dGUoJHBhbGV0dGUtMik7XG4iLCIvL2NvbG9yXG4udGV4dC1ibHVlLWxpZ2h0IHtcbiAgY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbGlnaHRcIil9O1xufVxuLnRleHQtYmx1ZS1tYWluIHtcbiAgY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbWFpblwiKX07XG59XG4udGV4dC1ibHVlLWRhcmsge1xuICBjb2xvcjogI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1kYXJrXCIpfTtcbn1cblxuLy9iYWNrZ3JvdW5kXG4uYmctZ3JleS1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImdyZXktbGlnaHRcIil9O1xufVxuLmJnLWdyZXktZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImdyZXktNVwiKX07XG59XG4uYmctYmx1ZS1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbGlnaHRcIil9O1xufVxuLmJnLWJsdWUtbWFpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbWFpblwiKX07XG59XG4uYmctYmx1ZS1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1kYXJrXCIpfTtcbn1cblxuLy90ZXh0XG4udGV4dC14cyB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbn1cbi50ZXh0LXNtIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn1cbi50ZXh0LWJhc2Uge1xuICBmb250LXNpemU6IDFyZW07XG59XG4udGV4dC1sZyB7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG59XG5cbi50ZXh0LXhsIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuXG4udGV4dC0yeGwge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLnRleHQtM3hsIHtcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xufVxuXG4uZm9udC1zZW1pYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uZm9udC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmNhcGl0YWxpemUge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmN1cnNvci1wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucm91bmRlZC14bCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5ib3JkZXItcHJpbWFyeS0xIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1tYWluXCIpfTtcbn1cblxuLmJvcmRlci1wcmltYXJ5LTIge1xuICBib3JkZXI6IDJweCBzb2xpZCAje3BhbGV0dGUtY29sb3IoXCJibHVlLW1haW5cIil9O1xufVxuXG4uY3VzdG9tLXNjcm9sbHtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xufVxuLmN1c3RvbS1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IC41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiZ3JleS1saWdodFwiKX07XG59XG5cblxuLmN1c3RvbS1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IC4zZW0gc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiZ3JleS01XCIpfTtcbn1cbiIsIkBpbXBvcnQgXCJzaGFyZWRcIjtcblxuOmhvc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY3VzdG9tLXNlbGVjdC13cmFwcGVyIHtcbiAgQGluY2x1ZGUgYm9vdHN0cmFwLXNlbGVjdC1zdHlsZXMoKTtcbn1cblxuLm5ldy1kYW1hZ2UtZm9ybSB7XG4gIG1heC1oZWlnaHQ6IDcwdmg7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG46aG9zdCA6Om5nLWRlZXAge1xuICAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXIge1xuICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLS1jcm9wcGVyLW91dGxpbmUtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cbiIsIkBtaXhpbiBtYXRlcmlhbC1zZWxlY3Qtc3R5bGVzKCkge1xuICAvLyBtYXRlcmlhbCBzZWxlY3Qgc3R5bGVzXG4gIC5tYXQtc2VsZWN0LXBhbmVsIHtcbiAgICBAaW5jbHVkZSBtYXRlcmlhbC1hdXRvY29tcGxldGUtc3R5bGVzKCk7XG4gIH1cbn1cblxuQG1peGluIGJvb3RzdHJhcC1zZWxlY3Qtc3R5bGVzKCkge1xuICAvLyBzZWxlY3QgY29tcG9uZW50IHdpdGggY3VzdG9tIGljb25cbiAgLS1zZWxlY3QtcGFkZGluZzogMTJweDtcbiAgLS1zZWxlY3QtaWNvbi13aWR0aDogMTRweDtcbiAgLS1mb3JtLWljb25zLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ3ByaW1hcnknKX07XG4gIC0tZm9ybS1pbnB1dC1iYWNrZ3JvdW5kOiAje3BhbGV0dGUtY29sb3IoJ2dyZXktMCcpfTtcblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgLmN1c3RvbS1zZWxlY3Qge1xuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tc2VsZWN0LXBhZGRpbmcpIC8gMikgdmFyKC0tc2VsZWN0LXBhZGRpbmcpO1xuICAgIHBhZGRpbmctaW5saW5lLWVuZDogY2FsYyh2YXIoLS1zZWxlY3QtcGFkZGluZykgKyB2YXIoLS1zZWxlY3QtaWNvbi13aWR0aCkpO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9ybS1pbnB1dC1iYWNrZ3JvdW5kKTtcbiAgfVxuICAuaGFsZi1hcnJvdy1pY29uIHtcbiAgICByaWdodDogdmFyKC0tc2VsZWN0LXBhZGRpbmcpO1xuICAgIHRvcDogMHB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogdmFyKC0tc2VsZWN0LWljb24td2lkdGgpO1xuICAgIGNvbG9yOiB2YXIoLS1mb3JtLWljb25zLWNvbG9yKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VehicleDamageDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vehicle-damage-dialog',
                templateUrl: './vehicle-damage-dialog.component.html',
                styleUrls: ['./vehicle-damage-dialog.component.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_business_services_administration_service__WEBPACK_IMPORTED_MODULE_3__["AdministrationService"] }, { type: src_app_shared_notifications_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }]; }, null); })();


/***/ }),

/***/ "vByf":
/*!*******************************************************************************!*\
  !*** ./src/app/administration/vehicle-template/vehicle-template.component.ts ***!
  \*******************************************************************************/
/*! exports provided: VehicleTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleTemplateComponent", function() { return VehicleTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _vehicle_template_dialog_vehicle_template_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vehicle-template-dialog/vehicle-template-dialog.component */ "iQ0E");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_shared_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/dialogs/dialog.service */ "Espg");
/* harmony import */ var src_app_shared_notifications_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/notifications/notification.service */ "38VU");
/* harmony import */ var src_app_business_services_administration_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/business/services/administration.service */ "RTdY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");















function VehicleTemplateComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 50);
} }
function VehicleTemplateComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VehicleTemplateComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const template_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", template_r10.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", template_r10.name);
} }
function VehicleTemplateComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VehicleTemplateComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const template_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](template_r11.name);
} }
function VehicleTemplateComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VehicleTemplateComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VehicleTemplateComponent_td_24_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const template_r12 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.openEditDialog(template_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VehicleTemplateComponent_td_24_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const template_r12 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.onDelete(template_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VehicleTemplateComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 33);
} }
function VehicleTemplateComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 34);
} }
function VehicleTemplateComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No templates found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class VehicleTemplateComponent {
    constructor(dialog, dialogService, notificationService, adminService) {
        this.dialog = dialog;
        this.dialogService = dialogService;
        this.notificationService = notificationService;
        this.adminService = adminService;
        this.displayedColumns = ['preview', 'name', 'actions'];
        this.pageSizeOptions = [12, 24, 50, 100];
        this.subscriptions = [];
        this.items = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]([]);
        const sub = this.adminService.vehicleTemplates.subscribe((data) => {
            this.templates = data;
            this.items.data = data;
        });
        this.subscriptions.push(sub);
    }
    ngOnInit() {
        this.dialogService.showLoader();
        this.adminService.fetchVehicleTemplates().finally(() => {
            this.dialogService.hideLoader();
        });
    }
    applyFilter(filterValue) {
        this.items.filter = filterValue.trim().toLocaleLowerCase();
    }
    openNewDialog() {
        this.dialog.open(_vehicle_template_dialog_vehicle_template_dialog_component__WEBPACK_IMPORTED_MODULE_4__["VehicleTemplateDialogComponent"], {
            width: '800px',
            data: {
                action: 'new',
            },
        });
    }
    openEditDialog(template) {
        this.dialog.open(_vehicle_template_dialog_vehicle_template_dialog_component__WEBPACK_IMPORTED_MODULE_4__["VehicleTemplateDialogComponent"], {
            width: '700px',
            data: {
                action: 'edit',
                template,
            },
        });
    }
    onDelete(template) {
        // console.log('👉 - VehicleTemplateComponent - template', template.id)
        this.dialogService.showConfirm({ title: 'Delete template', msg: 'Are you sure?' }, () => {
            this.loading = true;
            this.adminService.deleteVehicleTemplate(template.id).subscribe((res) => {
                this.loading = false;
                this.notificationService.success('Template deleted');
            }, (err) => {
                this.loading = false;
                this.notificationService.error();
            });
        });
    }
    ngAfterViewInit() {
        this.items.sort = this.sort;
        this.items.paginator = this.paginator;
    }
    ngOnDestroy() {
        this.subscriptions.forEach((sub) => sub.unsubscribe());
    }
}
VehicleTemplateComponent.ɵfac = function VehicleTemplateComponent_Factory(t) { return new (t || VehicleTemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_notifications_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_business_services_administration_service__WEBPACK_IMPORTED_MODULE_8__["AdministrationService"])); };
VehicleTemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VehicleTemplateComponent, selectors: [["app-vehicle-template"]], viewQuery: function VehicleTemplateComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 29, vars: 6, consts: [[1, "px-2", "px-md-5", "py-3", "position-relative"], ["class", "loader", 4, "ngIf"], [1, "d-flex", "flex-wrap", "w-100", "justify-content-between", "align-items-center", "mb-3"], [1, "text-dark", "d-inline-block", "content-title"], [1, "d-flex", "content-options-bar"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fas", "fa-search"], ["type", "text", "placeholder", "Filter by any field...", 1, "form-control", 3, "keyup"], [1, "btn", "font-weight-bold", "bg-blue-main", "text-light", "ml-3", 3, "click"], [1, "row", "mb-4"], [1, "col-12", "table-wrapper", "table-responsive"], ["mat-table", "", "matSort", "", 1, "table", "table-borderless", "table-striped", 3, "dataSource"], ["matColumnDef", "preview"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "text-center border py-3 mt-n3 table-width", 4, "ngIf"], ["aria-label", "Select page", 3, "pageSizeOptions"], [1, "loader"], [3, "diameter"], ["mat-header-cell", ""], ["mat-cell", ""], ["width", "100px", 3, "src", "alt"], [1, "action-buttons"], ["aria-label", "edit", 1, "text-dark", "mr-4", 3, "click"], [1, "fas", "fa-edit", "text-xl"], ["aria-label", "edit", 1, "text-dark", 3, "click"], [1, "fas", "fa-trash-alt", "text-xl"], ["mat-header-row", ""], ["mat-row", ""], [1, "text-center", "border", "py-3", "mt-n3", "table-width"]], template: function VehicleTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VehicleTemplateComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Vehicle templates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function VehicleTemplateComponent_Template_input_keyup_10_listener($event) { return ctx.applyFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VehicleTemplateComponent_Template_button_click_11_listener() { return ctx.openNewDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "+Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, VehicleTemplateComponent_th_17_Template, 2, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, VehicleTemplateComponent_td_18_Template, 2, 2, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, VehicleTemplateComponent_th_20_Template, 2, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, VehicleTemplateComponent_td_21_Template, 2, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, VehicleTemplateComponent_th_23_Template, 2, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, VehicleTemplateComponent_td_24_Template, 6, 0, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, VehicleTemplateComponent_tr_25_Template, 1, 0, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, VehicleTemplateComponent_tr_26_Template, 1, 0, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, VehicleTemplateComponent_div_27_Template, 2, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-paginator", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.items.data.length || !ctx.items.filteredData.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", ctx.pageSizeOptions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], styles: [".text-blue-light[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-light-rgb));\n}\n.text-blue-main[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-main-rgb));\n}\n.text-blue-dark[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-dark-rgb));\n}\n.bg-grey-light[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-grey-light-rgb));\n}\n.bg-grey-dark[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-grey-5-rgb));\n}\n.bg-blue-light[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-light-rgb));\n}\n.bg-blue-main[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-main-rgb));\n}\n.bg-blue-dark[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-dark-rgb));\n}\n.text-xs[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.text-base[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.text-lg[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.text-xl[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.text-2xl[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.text-3xl[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.capitalize[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.rounded-xl[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  overflow: hidden;\n}\n.border-primary-1[_ngcontent-%COMP%] {\n  border: 1px solid rgb(var(--palette-blue-main-rgb));\n}\n.border-primary-2[_ngcontent-%COMP%] {\n  border: 2px solid rgb(var(--palette-blue-main-rgb));\n}\n.custom-scroll[_ngcontent-%COMP%] {\n  padding-right: 4px;\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0.5em;\n  border-radius: 5px;\n  background-color: rgb(var(--palette-grey-light-rgb));\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  border: 0.3em solid;\n  border-color: rgb(var(--palette-grey-5-rgb));\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  --table-header-color: rgb(var(--palette-white-rgb));\n  --table-header-background: rgb(var(--palette-blue-main-rgb));\n  --table-text-color: rgb(var(--palette-grey-9-rgb));\n  --table-row-hover-background: rgb(var(--palette-blue-light-rgb));\n  --page-background: rgb(var(--palette-white-rgb));\n  --page-spacing: 10px;\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 672px;\n  background: none;\n  border-collapse: collapse;\n  border-radius: 1em 1em 0 0;\n  overflow: hidden;\n}\n.table-wrapper[_ngcontent-%COMP%]   table.table-sm[_ngcontent-%COMP%] {\n  min-width: 370px;\n}\n.table-wrapper[_ngcontent-%COMP%]   table.table-sm[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%] {\n  padding: var(--page-spacing);\n}\n.table-wrapper[_ngcontent-%COMP%]   table.table-sm[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n  padding: var(--page-spacing);\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: var(--table-header-color);\n  background-color: var(--table-header-background);\n  font-size: 13px;\n  font-weight: 700;\n}\n@media (min-width: 821px) {\n  .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n  border-bottom-style: none;\n  padding: calc(var(--page-spacing));\n}\n@media (min-width: 821px) {\n  .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n    padding: calc(var(--page-spacing) * 2);\n  }\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: var(--table-text-color);\n  line-height: 1.6;\n  font-size: 13px;\n}\n@media (min-width: 821px) {\n  .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    font-size: 0.9em;\n  }\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%] {\n  border-bottom-style: none;\n  padding: var(--page-spacing) calc(var(--page-spacing));\n}\n@media (min-width: 821px) {\n  .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%] {\n    padding: calc(var(--page-spacing) * 2);\n  }\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%] {\n  height: auto;\n  transition: background-color 0.5s;\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]:hover {\n  background-color: var(--table-row-hover-background);\n  transition: background-color 0.5s;\n}\n.table-wrapper[_ngcontent-%COMP%]     [mat-table] .mat-sort-header-arrow {\n  color: var(--table-header-color);\n}\n.table-wrapper[_ngcontent-%COMP%]   mat-paginator[_ngcontent-%COMP%], .table-wrapper[_ngcontent-%COMP%]   .table-width[_ngcontent-%COMP%] {\n  min-width: 672px;\n  width: 100%;\n}\n.table-wrapper[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n  border: none;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  align-items: center;\n  margin-top: 5px;\n}\n.action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  all: unset;\n  display: inline-block;\n  cursor: pointer;\n  line-height: 0.8;\n}\n.action-buttons[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9wYWxldHRlcy9zaGFyZWQuc2NzcyIsInNyYy90aGVtZS9wYWxldHRlcy9tb2RlLnNjc3MiLCJzcmMvdGhlbWUvY3VzdG9tLWNsYXNzZXMuc2NzcyIsInNyYy9hcHAvYWRtaW5pc3RyYXRpb24vdmVoaWNsZS10ZW1wbGF0ZS92ZWhpY2xlLXRlbXBsYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL21peGlucy90YWJsZS1iYXNpYy1zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUROQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUROQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUROQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUROQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUNMQTtFQUNFLHlDQUFBO0FDNkNGO0FEM0NBO0VBQ0Usd0NBQUE7QUM4Q0Y7QUQ1Q0E7RUFDRSx3Q0FBQTtBQytDRjtBRDNDQTtFQUNFLG9EQUFBO0FDOENGO0FENUNBO0VBQ0UsZ0RBQUE7QUMrQ0Y7QUQ3Q0E7RUFDRSxvREFBQTtBQ2dERjtBRDlDQTtFQUNFLG1EQUFBO0FDaURGO0FEL0NBO0VBQ0UsbURBQUE7QUNrREY7QUQ5Q0E7RUFDRSxrQkFBQTtBQ2lERjtBRC9DQTtFQUNFLG1CQUFBO0FDa0RGO0FEaERBO0VBQ0UsZUFBQTtBQ21ERjtBRGpEQTtFQUNFLG1CQUFBO0FDb0RGO0FEakRBO0VBQ0Usa0JBQUE7QUNvREY7QURqREE7RUFDRSxpQkFBQTtBQ29ERjtBRGpEQTtFQUNFLGtCQUFBO0FDb0RGO0FEakRBO0VBQ0UsZ0JBQUE7QUNvREY7QURsREE7RUFDRSxnQkFBQTtBQ3FERjtBRGxEQTtFQUNFLDBCQUFBO0FDcURGO0FEbERBO0VBQ0UsZUFBQTtBQ3FERjtBRGxEQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUNxREY7QURsREE7RUFDRSxtREFBQTtBQ3FERjtBRGxEQTtFQUNFLG1EQUFBO0FDcURGO0FEbERBO0VBQ0Usa0JBQUE7QUNxREY7QURuREE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvREFBQTtBQ3NERjtBRGxEQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtBQ3FERjtBQS9JQTtFQ0ZFLG1EQUFBO0VBQ0EsNERBQUE7RUFDQSxrREFBQTtFQUNBLGdFQUFBO0VBRUEsZ0RBQUE7RUFDQSxvQkFBQTtBRG9KRjtBQ2xKRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FEb0pKO0FDbEpJO0VBQ0UsZ0JBQUE7QURvSk47QUNqSlE7RUFDRSw0QkFBQTtBRG1KVjtBQy9JUTtFQUNFLDRCQUFBO0FEaUpWO0FDNUlJO0VBQ0UsZ0NBQUE7RUFDQSxnREFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRDhJTjtBQzdJTTtFQUxGO0lBTUksZUFBQTtFRGdKTjtBQUNGO0FDOUlNO0VBQ0UseUJBQUE7RUFDQSxrQ0FBQTtBRGdKUjtBQy9JUTtFQUhGO0lBSUksc0NBQUE7RURrSlI7QUFDRjtBQzlJSTtFQUNFLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FEZ0pOO0FDL0lNO0VBSkY7SUFLSSxnQkFBQTtFRGtKTjtBQUNGO0FDakpNO0VBQ0UseUJBQUE7RUFDQSxzREFBQTtBRG1KUjtBQ2xKUTtFQUhGO0lBSUksc0NBQUE7RURxSlI7QUFDRjtBQ2pKSTtFQUNFLFlBQUE7RUFDQSxpQ0FBQTtBRG1KTjtBQ2pKTTtFQUNFLDJCQUFBO0VBQ0EsOEJBQUE7QURtSlI7QUNqSk07RUFDRSw0QkFBQTtFQUNBLCtCQUFBO0FEbUpSO0FDaEpNO0VBQ0UsbURBQUE7RUFDQSxpQ0FBQTtBRGtKUjtBQzVJSTtFQUNFLGdDQUFBO0FEOElOO0FDMUlFOztFQUVFLGdCQUFBO0VBQ0EsV0FBQTtBRDRJSjtBQXJPRTtFQUNFLFlBQUE7QUF1T0o7QUFuT0E7RUFDRSxhQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQXNPRjtBQXJPRTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQXVPSjtBQXJPRTtFQUNJLGlCQUFBO0FBdU9OIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5pc3RyYXRpb24vdmVoaWNsZS10ZW1wbGF0ZS92ZWhpY2xlLXRlbXBsYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgU2hhcmVkXG4qL1xuXG5AaW1wb3J0ICdwcmVmZXJlbmNlcyc7XG5AaW1wb3J0ICdpbnRlcmZhY2UnO1xuQGltcG9ydCAnbW9kZSc7XG5cbi8vIEFuIGFic3RyYWN0IHdheSB0byBwcm92aWRlIGNvbG9ycy5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgYW4gaW50ZXJmYWNlIHRvIGJvdGggU2FzcyB2YXJpYWJsZXMgYW5kIENTUyA0IHZhcmlhYmxlcyBiYXNlZCBjb2xvciBwYWxldHRlcy5cbkBmdW5jdGlvbiBwYWxldHRlLWNvbG9yKCRjb2xvci1uYW1lLCAkYWxwaGE6IDEpIHtcbiAgLy8gJGNvbG9yLXBhbGV0dGUtbW9kZSAgICAgICAgPT4gIERlZmluZWQgaW4gbW9kZS5zY3NzXG4gIC8vICRjaG9vc2VuLXBhbGV0dGUgICAgICAgICAgID0+ICBEZWZpbmVkIGluIG1vZGUuc2Nzc1xuICAvLyAkY29sb3ItcGFsZXR0ZS1pbnRlcmZhY2UgICA9PiAgRGVmaW5lZCBpbiBpbnRlcmZhY2Uuc2Nzc1xuICAvLyAkY3NzNC12YXItcHJlZml4ICAgICAgICAgICA9PiAgRGVmaW5lZCBpbiBwcmVmZXJlbmNlcy5zY3NzXG4gIC8vICRjc3M0LWNvbG9yLWZvcm1hdCAgICAgICAgID0+ICBEZWZpbmVkIGluIHByZWZlcmVuY2VzLnNjc3NcblxuICBAaWYgKCRjb2xvci1wYWxldHRlLW1vZGUgPT0gJ2Nzcy00Jykge1xuICAgICRwYWxldHRlLXJlZmVyZW5jZTogJGNvbG9yLXBhbGV0dGUtaW50ZXJmYWNlO1xuXG4gICAgJGNvbG9yLXZhcmlhYmxlLWluZGV4OiBpbmRleCgkcGFsZXR0ZS1yZWZlcmVuY2UsICRjb2xvci1uYW1lKTtcblxuICAgIEBpZiAodHlwZV9vZigkY29sb3ItdmFyaWFibGUtaW5kZXgpID09ICdudW1iZXInKSB7XG4gICAgICAkY29sb3ItdmFyaWFibGUtbmFtZTogbnRoKCRwYWxldHRlLXJlZmVyZW5jZSwgJGNvbG9yLXZhcmlhYmxlLWluZGV4KTtcblxuICAgICAgQGlmICgkYWxwaGEgPiAwIGFuZCAkYWxwaGEgPCAxKSB7XG4gICAgICAgIEByZXR1cm4gI3sncmdiYSh2YXIoJyArICRjc3M0LXZhci1wcmVmaXggKyAkY29sb3ItdmFyaWFibGUtbmFtZSArICctJyArICRjc3M0LWNvbG9yLWZvcm1hdCArJyksICN7JGFscGhhfSknfTtcbiAgICAgIH0gQGVsc2UgaWYgKCRhbHBoYSA9PSAxKSB7XG4gICAgICAgIEByZXR1cm4gI3sncmdiKHZhcignICsgJGNzczQtdmFyLXByZWZpeCArICRjb2xvci12YXJpYWJsZS1uYW1lICsgJy0nICsgJGNzczQtY29sb3ItZm9ybWF0ICsgJykpJ307XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgQGVycm9yIFwiQWxwaGEgKCN7JGFscGhhfSkgbXVzdCBiZSBhIG51bWJlclwiO1xuICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgQGVycm9yIFwiQ29sb3IgKCN7JGNvbG9yLW5hbWV9KSB3YXMgbm90IGZvdW5kIG9uIENvbG9yIFBhbGV0dGUgZGVmaW5pdGlvbi4gTWFrZSBzdXJlIGl0J3MgZGVmaW5lZCBpbiB0aGUgdGhlbWUvcGFsZXR0ZXMvaW50ZXJmYWNlLnNjc3MgZmlsZVwiO1xuICAgIH1cbiAgfSBAZWxzZSBpZiAoJGNvbG9yLXBhbGV0dGUtbW9kZSA9PSAnc2FzcycpIHtcbiAgICAkcGFsZXR0ZS1yZWZlcmVuY2U6ICRjaG9vc2VuLXBhbGV0dGU7XG5cbiAgICAkY29sb3ItdmFyaWFibGU6IG1hcC1nZXQoJHBhbGV0dGUtcmVmZXJlbmNlLCAkY29sb3ItbmFtZSk7XG5cbiAgICAvLyBDaGVjayBpZiBpdCBpcyBhIFNhc3MgY29sb3JcbiAgICBAaWYgKHR5cGVfb2YoJGNvbG9yLXZhcmlhYmxlKSA9PSAnY29sb3InKSB7XG4gICAgICBAaWYgKCRhbHBoYSA+IDAgYW5kICRhbHBoYSA8IDEpIHtcbiAgICAgICAgQHJldHVybiByZ2JhKCRjb2xvci12YXJpYWJsZSwgJGFscGhhKTtcbiAgICAgIH0gQGVsc2UgaWYgKCRhbHBoYSA9PSAxKSB7XG4gICAgICAgIEByZXR1cm4gJGNvbG9yLXZhcmlhYmxlO1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIEBlcnJvciBcIkFscGhhICgjeyRhbHBoYX0pIG11c3QgYmUgYSBudW1iZXJcIjtcbiAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgIEBlcnJvciBcIkNvbG9yICgjeyRjb2xvci12YXJpYWJsZX0pIGlzIG5vdCBhIFNhc3MgY29sb3JcIjtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBlcnJvciAnTm8gQ29sb3IgUGFsZXR0ZSBtb2RlIHNlbGVjdGVkIGluIHRoZW1lL3BhbGV0dGVzL3ByZWZlcmVuY2VzLnNjc3MnO1xuICB9XG59XG4iLCIvKlxuICBDU1MgNCBNb2RlXG4qL1xuJGNvbG9yLXBhbGV0dGUtbW9kZTogJ2Nzcy00JztcblxuXG4vKlxuICBTYXNzIE1vZGVcbiovXG4vLyBAaW1wb3J0ICdjb3JlJztcbi8vXG4vLyAkY29sb3ItcGFsZXR0ZS1tb2RlOiAnc2Fzcyc7XG4vL1xuLy8gLy8gSW1wb3J0IHRoZSBkZWZpbml0aW9ucyBvZiB0aGUgcGFsZXR0ZSB5b3Ugd2FudCB0byB1c2Vcbi8vIEBpbXBvcnQgJ3BhbGV0dGUtMS9kZWZpbml0aW9ucyc7XG4vLyAvLyBAaW1wb3J0ICdwYWxldHRlLTIvZGVmaW5pdGlvbnMnO1xuLy9cbi8vIC8vIEFzc2lnbiBhIHBhcnRpY3VsYXIgQ29sb3IgUGFsZXR0ZSB0byB0aGUgJ2Nob29zZW4tcGFsZXR0ZScgcG9pbnRlci5cbi8vIC8vICRjaG9vc2VuLXBhbGV0dGUgd2lsbCBiZSBhIFNhc3MgbWFwIHBvaW50aW5nIHRvIGFub3RoZXIgY29sb3IgcGFsZXR0ZSBTYXNzIG1hcFxuLy8gJGNob29zZW4tcGFsZXR0ZTogYnVpbGRTYXNzUGFsZXR0ZSgkcGFsZXR0ZS0xKTtcbi8vIC8vICRjaG9vc2VuLXBhbGV0dGU6IGJ1aWxkU2Fzc1BhbGV0dGUoJHBhbGV0dGUtMik7XG4iLCIvL2NvbG9yXG4udGV4dC1ibHVlLWxpZ2h0IHtcbiAgY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbGlnaHRcIil9O1xufVxuLnRleHQtYmx1ZS1tYWluIHtcbiAgY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbWFpblwiKX07XG59XG4udGV4dC1ibHVlLWRhcmsge1xuICBjb2xvcjogI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1kYXJrXCIpfTtcbn1cblxuLy9iYWNrZ3JvdW5kXG4uYmctZ3JleS1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImdyZXktbGlnaHRcIil9O1xufVxuLmJnLWdyZXktZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImdyZXktNVwiKX07XG59XG4uYmctYmx1ZS1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbGlnaHRcIil9O1xufVxuLmJnLWJsdWUtbWFpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbWFpblwiKX07XG59XG4uYmctYmx1ZS1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1kYXJrXCIpfTtcbn1cblxuLy90ZXh0XG4udGV4dC14cyB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbn1cbi50ZXh0LXNtIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn1cbi50ZXh0LWJhc2Uge1xuICBmb250LXNpemU6IDFyZW07XG59XG4udGV4dC1sZyB7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG59XG5cbi50ZXh0LXhsIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuXG4udGV4dC0yeGwge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLnRleHQtM3hsIHtcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xufVxuXG4uZm9udC1zZW1pYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uZm9udC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmNhcGl0YWxpemUge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmN1cnNvci1wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucm91bmRlZC14bCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5ib3JkZXItcHJpbWFyeS0xIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1tYWluXCIpfTtcbn1cblxuLmJvcmRlci1wcmltYXJ5LTIge1xuICBib3JkZXI6IDJweCBzb2xpZCAje3BhbGV0dGUtY29sb3IoXCJibHVlLW1haW5cIil9O1xufVxuXG4uY3VzdG9tLXNjcm9sbHtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xufVxuLmN1c3RvbS1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IC41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiZ3JleS1saWdodFwiKX07XG59XG5cblxuLmN1c3RvbS1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IC4zZW0gc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiZ3JleS01XCIpfTtcbn1cbiIsIkBpbXBvcnQgXCJzaGFyZWRcIjtcblxuOmhvc3Qge1xufVxuXG4udGFibGUtd3JhcHBlciB7XG4gIEBpbmNsdWRlIHRhYmxlLWJhc2ljLXN0eWxlcygpO1xuXG4gIHRoLm1hdC1oZWFkZXItY2VsbCB7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG59XG5cbi5hY3Rpb24tYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgYnV0dG9uIHtcbiAgICBhbGw6IHVuc2V0O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDAuODtcbiAgfVxuICBtYXQtaWNvbntcbiAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICB9XG59XG5cbiIsIkBpbXBvcnQgXCJwYWxldHRlcy9zaGFyZWRcIjtcblxuQG1peGluIHRhYmxlLWJhc2ljLXN0eWxlcygpIHtcbiAgLS10YWJsZS1oZWFkZXItY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcIndoaXRlXCIpfTtcbiAgLS10YWJsZS1oZWFkZXItYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1tYWluXCIpfTtcbiAgLS10YWJsZS10ZXh0LWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJncmV5LTlcIil9O1xuICAtLXRhYmxlLXJvdy1ob3Zlci1iYWNrZ3JvdW5kOiAje3BhbGV0dGUtY29sb3IoXCJibHVlLWxpZ2h0XCIpfTtcblxuICAtLXBhZ2UtYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKFwid2hpdGVcIil9O1xuICAtLXBhZ2Utc3BhY2luZzogMTBweDtcblxuICB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiA2NzJweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgYm9yZGVyLXJhZGl1czogMWVtIDFlbSAwIDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICYudGFibGUtc20ge1xuICAgICAgbWluLXdpZHRoOiAzNzBweDtcblxuICAgICAgdGQge1xuICAgICAgICAmLm1hdC1jZWxsIHtcbiAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLXNwYWNpbmcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aCB7XG4gICAgICAgICYubWF0LWhlYWRlci1jZWxsIHtcbiAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLXNwYWNpbmcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGgge1xuICAgICAgY29sb3I6IHZhcigtLXRhYmxlLWhlYWRlci1jb2xvcik7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWJsZS1oZWFkZXItYmFja2dyb3VuZCk7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDgyMXB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtaGVhZGVyLWNlbGwge1xuICAgICAgICBib3JkZXItYm90dG9tLXN0eWxlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykpO1xuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogODIxcHgpIHtcbiAgICAgICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRkIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10YWJsZS10ZXh0LWNvbG9yKTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogODIxcHgpIHtcbiAgICAgICAgZm9udC1zaXplOi45ZW07XG4gICAgICB9XG4gICAgICAmLm1hdC1jZWxsIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogdmFyKC0tcGFnZS1zcGFjaW5nKSBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykpO1xuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogODIxcHgpIHtcbiAgICAgICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRyLm1hdC1yb3cge1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzO1xuXG4gICAgICB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xuICAgICAgfVxuICAgICAgdGQ6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA2cHg7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWJsZS1yb3ctaG92ZXItYmFja2dyb3VuZCk7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICA6Om5nLWRlZXAgW21hdC10YWJsZV0ge1xuICAgIC5tYXQtc29ydC1oZWFkZXItYXJyb3cge1xuICAgICAgY29sb3I6IHZhcigtLXRhYmxlLWhlYWRlci1jb2xvcik7XG4gICAgfVxuICB9XG5cbiAgbWF0LXBhZ2luYXRvcixcbiAgLnRhYmxlLXdpZHRoIHtcbiAgICBtaW4td2lkdGg6IDY3MnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbkBtaXhpbiB0YWJsZS1wYWdpbmF0b3Itc3R5bGVzKCkge1xuICAtLXBhZ2luYXRvci1iYWNrZ3JvdW5kOiAje3BhbGV0dGUtY29sb3IoXCJncmV5LTBcIil9O1xuICAtLXBhZ2luYXRvci10ZXh0LWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJncmV5LTVcIil9O1xuICAtLXBhZ2luYXRvci1jb250cm9scy1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwicHJpbWFyeS1kYXJrXCIpfTtcbiAgLS1wYWdpbmF0b3ItZGlzYWJsZWQtY29udHJvbHMtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcInByaW1hcnktZGFya1wiLCAwLjEpfTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdpbmF0b3ItYmFja2dyb3VuZCk7XG5cbiAgLy8gT3ZlcnJpZGUgTWF0ZXJpYWwgc3R5bGVzXG4gIC5tYXQtcGFnaW5hdG9yLWNvbnRhaW5lciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWluLXdpZHRoOiA2NzJweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIHtcbiAgICAubWF0LXBhZ2luYXRvci1wYWdlLXNpemUtbGFiZWwge1xuICAgICAgY29sb3I6IHZhcigtLXBhZ2luYXRvci10ZXh0LWNvbG9yKTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAubWF0LXBhZ2luYXRvci1wYWdlLXNpemUtc2VsZWN0IHtcbiAgICAgIC5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhZ2luYXRvci1jb250cm9scy1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cblxuICAgICAgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFnaW5hdG9yLWNvbnRyb2xzLWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9IC8vIC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZVxuXG4gIC5tYXQtcGFnaW5hdG9yLXJhbmdlLWFjdGlvbnMge1xuICAgIC5tYXQtcGFnaW5hdG9yLXJhbmdlLWxhYmVsIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wYWdpbmF0b3ItdGV4dC1jb2xvcik7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLm1hdC1wYWdpbmF0b3ItbmF2aWdhdGlvbi1wcmV2aW91cyxcbiAgICAubWF0LXBhZ2luYXRvci1uYXZpZ2F0aW9uLW5leHQge1xuICAgICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFnaW5hdG9yLWNvbnRyb2xzLWNvbG9yKTtcbiAgICAgIH1cbiAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhZ2luYXRvci1kaXNhYmxlZC1jb250cm9scy1jb2xvcik7XG4gICAgICB9XG4gICAgfVxuICB9IC8vIC5tYXQtcGFnaW5hdG9yLXJhbmdlLWFjdGlvbnNcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VehicleTemplateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vehicle-template',
                templateUrl: './vehicle-template.component.html',
                styleUrls: ['./vehicle-template.component.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: src_app_shared_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"] }, { type: src_app_shared_notifications_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }, { type: src_app_business_services_administration_service__WEBPACK_IMPORTED_MODULE_8__["AdministrationService"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=administration-administration-module-es2015.js.map