(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invoice-invoice-module"],{

/***/ "GjIp":
/*!**********************************************!*\
  !*** ./src/app/invoice/invoice.component.ts ***!
  \**********************************************/
/*! exports provided: InvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function() { return InvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _add_vehicle_dialog_add_vehicle_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-vehicle-dialog/add-vehicle-dialog.component */ "HWoU");
/* harmony import */ var _bill_to_dialog_bill_to_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bill-to-dialog/bill-to-dialog.component */ "Htyv");
/* harmony import */ var _new_invoice_dialog_new_invoice_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-invoice-dialog/new-invoice-dialog.component */ "Vr9K");
/* harmony import */ var _ship_select_dialog_ship_select_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ship-select-dialog/ship-select-dialog.component */ "tHuo");
/* harmony import */ var _edit_invoice_dialog_edit_invoice_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-invoice-dialog/edit-invoice-dialog.component */ "WVcr");
/* harmony import */ var _edit_vehicle_dialog_edit_vehicle_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-vehicle-dialog/edit-vehicle-dialog.component */ "MGzo");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _shared_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/dialogs/dialog.service */ "Espg");
/* harmony import */ var _business_services_invoice_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../business/services/invoice.service */ "c4Cx");
/* harmony import */ var _business_state_invoice_state_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../business/state/invoice-state.service */ "W7lO");
/* harmony import */ var _shared_notifications_notification_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/notifications/notification.service */ "38VU");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../authentication/authentication.service */ "9Ku7");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");






















const _c0 = ["table"];
function InvoiceComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InvoiceComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceComponent_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.onSubmitToReview(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Submit for review");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InvoiceComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceComponent_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.onSubmitToQB(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Submit to QB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InvoiceComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceComponent_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.onSubmitToPaid(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Submit to Paid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InvoiceComponent_th_40_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function InvoiceComponent_th_40_Template_div_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.onSelectAll($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r4.allSelected);
} }
function InvoiceComponent_td_41_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function InvoiceComponent_td_41_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const invoice_r33 = ctx.$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.onSelectInvoice($event, invoice_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r33 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", invoice_r33.id)("checked", ctx_r5.selectedInvoices.includes(invoice_r33));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", invoice_r33.id);
} }
function InvoiceComponent_th_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Driver");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InvoiceComponent_td_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", invoice_r36.driver == null ? null : invoice_r36.driver.first_name, " ", invoice_r36.driver == null ? null : invoice_r36.driver.last_name, " ");
} }
function InvoiceComponent_th_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invoice #");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InvoiceComponent_td_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](invoice_r37.number);
} }
function InvoiceComponent_th_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InvoiceComponent_td_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, invoice_r38.date, "MM/dd/yyyy"));
} }
function InvoiceComponent_th_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bill to");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InvoiceComponent_td_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", invoice_r39.bill_to == null ? null : invoice_r39.bill_to.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", invoice_r39.bill_to == null ? null : invoice_r39.bill_to.city == null ? null : invoice_r39.bill_to.city.name, ", ", invoice_r39.bill_to == null ? null : invoice_r39.bill_to.city == null ? null : invoice_r39.bill_to.city.state_code, " ");
} }
function InvoiceComponent_th_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ship from");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InvoiceComponent_td_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (invoice_r40.ship_from == null ? null : invoice_r40.ship_from.name) || (invoice_r40.quick_ship_from == null ? null : invoice_r40.quick_ship_from.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", (invoice_r40.ship_from == null ? null : invoice_r40.ship_from.city == null ? null : invoice_r40.ship_from.city.name) || (invoice_r40.quick_ship_from == null ? null : invoice_r40.quick_ship_from.city == null ? null : invoice_r40.quick_ship_from.city.name), ", ", (invoice_r40.ship_from == null ? null : invoice_r40.ship_from.city == null ? null : invoice_r40.ship_from.city.state_code) || (invoice_r40.quick_ship_from == null ? null : invoice_r40.quick_ship_from.city == null ? null : invoice_r40.quick_ship_from.city.state_code), " ");
} }
function InvoiceComponent_th_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ship to");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InvoiceComponent_td_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (invoice_r41.ship_to == null ? null : invoice_r41.ship_to.name) || (invoice_r41.quick_ship_to == null ? null : invoice_r41.quick_ship_to.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", (invoice_r41.ship_to == null ? null : invoice_r41.ship_to.city == null ? null : invoice_r41.ship_to.city.name) || (invoice_r41.quick_ship_to == null ? null : invoice_r41.quick_ship_to.city == null ? null : invoice_r41.quick_ship_to.city.name), ", ", (invoice_r41.ship_to == null ? null : invoice_r41.ship_to.city == null ? null : invoice_r41.ship_to.city.state_code) || (invoice_r41.quick_ship_to == null ? null : invoice_r41.quick_ship_to.city == null ? null : invoice_r41.quick_ship_to.city.state_code), " ");
} }
function InvoiceComponent_th_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InvoiceComponent_td_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, invoice_r42.total));
} }
function InvoiceComponent_th_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InvoiceComponent_td_65_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceComponent_td_65_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const invoice_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.onEdit(invoice_r43); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceComponent_td_65_div_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const invoice_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.onDelete(invoice_r43); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InvoiceComponent_td_65_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceComponent_td_65_div_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const invoice_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.onEdit(invoice_r43); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InvoiceComponent_td_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InvoiceComponent_td_65_div_1_Template, 5, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InvoiceComponent_td_65_div_2_Template, 3, 0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.tab == "DRAFT" || ctx_r21.tab == "SUBMITTED_FOR_REVIEW");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.tab != "DRAFT" && ctx_r21.tab != "SUBMITTED_FOR_REVIEW");
} }
function InvoiceComponent_tr_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 65);
} }
function InvoiceComponent_tr_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 66);
} }
function InvoiceComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No invoices found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class InvoiceComponent {
    constructor(dialog, dialogService, invoiceService, invoiceState, notificationService, authService) {
        this.dialog = dialog;
        this.dialogService = dialogService;
        this.invoiceService = invoiceService;
        this.invoiceState = invoiceState;
        this.notificationService = notificationService;
        this.authService = authService;
        this.paginatorPageIndex = 1;
        this.paginatorPageSize = 12;
        this.subscriptions = [];
        this.displayedColumns = ['_', 'driver', 'invoice_number', 'date', 'bill_to', 'ship_from', 'ship_to', 'amount', 'actions'];
        this.pageSizeOptions = [12, 24, 50, 100];
        this.tab = 'DRAFT';
        this.newInvoiceCurrentStep = 0;
        this.selectedInvoices = [];
        this.allSelected = false;
        this.isAdmin = this.authService.isAdmin();
        this.items = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]([]);
        const sub = invoiceState.invoices$.subscribe((data) => {
            this.allSelected = false;
            this.invoiceState.setAllSelectedInvoices([], false);
            this.invoices = data;
            this.items.data = this.invoices;
        });
        const sub2 = invoiceState.selectedInvoices$.subscribe((data) => {
            this.selectedInvoices = data;
        });
        this.subscriptions.push(sub, sub2);
    }
    ngOnInit() {
        this.handleFetchInvoices(this.tab, this.paginatorPageSize, this.paginatorPageIndex);
        //custom table filters
        this.items.filterPredicate = (data, filter) => {
            var _a, _b, _c, _d;
            return (data.driver.first_name.toLowerCase().indexOf(filter) !== -1 ||
                data.driver.last_name.toLowerCase().indexOf(filter) !== -1 ||
                ((_a = data.number) === null || _a === void 0 ? void 0 : _a.toString().toLowerCase().indexOf(filter)) !== -1 ||
                ((_b = data.bill_to) === null || _b === void 0 ? void 0 : _b.name.toLowerCase().indexOf(filter)) !== -1 ||
                ((_c = (data.ship_from || data.quick_ship_from)) === null || _c === void 0 ? void 0 : _c.name.toLowerCase().indexOf(filter)) !== -1 ||
                ((_d = (data.ship_to || data.quick_ship_to)) === null || _d === void 0 ? void 0 : _d.name.toLowerCase().indexOf(filter)) !== -1 ||
                data.total.toString().toLowerCase().indexOf(filter) !== -1);
        };
        //custom table sort
        this.items.sortingDataAccessor = (item, property) => {
            var _a, _b;
            switch (property) {
                case 'invoice_number':
                    return item.number;
                case 'date':
                    return new Date(item.date);
                case 'driver':
                    return ((_a = item.driver) === null || _a === void 0 ? void 0 : _a.first_name) + ' ' + ((_b = item.driver) === null || _b === void 0 ? void 0 : _b.last_name);
                default:
                    return item[property];
            }
        };
        this.items.sort = this.sort;
    }
    handlePage(e) {
        console.log(e);
        this.paginatorPageSize = e.pageSize;
        this.handleFetchInvoices(this.tab, e.pageSize, e.pageIndex + 1);
    }
    setTable(type) {
        this.paginatorPageIndex = 1;
        this.allSelected = false;
        this.invoiceState.setAllSelectedInvoices([], false);
        this.tab = type;
        this.items.data = [];
        this.handleFetchInvoices(type, this.paginatorPageSize, this.paginatorPageIndex);
    }
    handleFetchInvoices(type, pageSize, pageIndex) {
        this.dialogService.showLoader();
        this.invoiceService
            .fetchInvoices(type, pageSize, pageIndex)
            .then((data) => {
            this.paginatorLength = data.totalResults;
        })
            .finally(() => {
            this.dialogService.hideLoader();
        });
    }
    // setInvoices() {
    //   this.items.data = this.invoices.filter((inv) => inv.status === this.tab)
    // }
    onEdit(invoice) {
        this.invoiceState.setSelectedInvoice(invoice);
        this.openEditDialog();
    }
    openNewDialog() {
        this.dialog.closeAll();
        this.dialog.open(_new_invoice_dialog_new_invoice_dialog_component__WEBPACK_IMPORTED_MODULE_6__["NewInvoiceDialogComponent"], {
            width: '800px',
            disableClose: true,
            data: {
                onBillTo: () => this.openBillToDialog(),
                onShipFrom: () => this.openShipSelectDialog('FROM'),
                onShipTo: () => this.openShipSelectDialog('TO'),
                onAddVehicle: () => this.openAddVehicleDialog(),
                onEditVehicle: (vehicle) => this.openEditVehicleDialog(vehicle),
                onDeleteVehicle: (vehicle) => this.dialogService.showConfirm({ title: 'Delete vehicle', msg: 'Are you sure?' }, () => {
                    this.invoiceState.deleteNewInvoiceVehicle(vehicle._id);
                }),
                currentStep: this.newInvoiceCurrentStep,
                setCurrentStep: (idx) => {
                    this.newInvoiceCurrentStep = idx;
                },
            },
        });
    }
    openEditDialog() {
        this.dialog.closeAll();
        this.dialog.open(_edit_invoice_dialog_edit_invoice_dialog_component__WEBPACK_IMPORTED_MODULE_8__["EditInvoiceDialogComponent"], {
            width: '800px',
            disableClose: true,
            data: {
                onBillTo: () => this.openBillToDialog('edit'),
                onShipFrom: () => this.openShipSelectDialog('FROM', 'edit'),
                onShipTo: () => this.openShipSelectDialog('TO', 'edit'),
                onAddVehicle: () => this.openAddVehicleDialog('edit'),
                onEditVehicle: (vehicle) => this.openEditVehicleDialog(vehicle, 'edit'),
                onDeleteVehicle: (vehicle) => this.dialogService.showConfirm({ title: 'Delete vehicle', msg: 'Are you sure?' }, () => {
                    this.invoiceState.deleteSelectedInvoiceVehicle(vehicle._id);
                }),
                currentStep: this.newInvoiceCurrentStep,
                setCurrentStep: (idx) => {
                    this.newInvoiceCurrentStep = idx;
                },
            },
        });
    }
    openBillToDialog(action = 'new') {
        this.dialog.closeAll();
        this.dialog.open(_bill_to_dialog_bill_to_dialog_component__WEBPACK_IMPORTED_MODULE_5__["BillToDialogComponent"], {
            width: '700px',
            disableClose: true,
            data: {
                action,
                onBackToInvoice: () => (action === 'edit' ? this.openEditDialog() : this.openNewDialog()),
            },
        });
    }
    openShipSelectDialog(type, action = 'new') {
        this.dialog.closeAll();
        this.dialog.open(_ship_select_dialog_ship_select_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ShipSelectDialogComponent"], {
            width: '700px',
            disableClose: true,
            data: {
                onBackToInvoice: () => (action === 'edit' ? this.openEditDialog() : this.openNewDialog()),
                //onCustomerQuickEntry: () => this.openCustomerQuickEntryDialog(),
                type,
                action,
            },
        });
    }
    openAddVehicleDialog(action = 'new') {
        this.dialog.closeAll();
        this.dialog.open(_add_vehicle_dialog_add_vehicle_dialog_component__WEBPACK_IMPORTED_MODULE_4__["AddVehicleDialogComponent"], {
            width: '700px',
            disableClose: true,
            data: {
                action,
                onBackToInvoice: () => (action === 'edit' ? this.openEditDialog() : this.openNewDialog()),
            },
        });
    }
    openEditVehicleDialog(vehicle, action = 'new') {
        this.dialog.closeAll();
        this.dialog.open(_edit_vehicle_dialog_edit_vehicle_dialog_component__WEBPACK_IMPORTED_MODULE_9__["EditVehicleDialogComponent"], {
            width: '700px',
            disableClose: true,
            data: {
                action,
                onBackToInvoice: () => (action === 'edit' ? this.openEditDialog() : this.openNewDialog()),
                vehicle,
                viewMode: this.tab != 'DRAFT' && this.tab != 'SUBMITTED_FOR_REVIEW',
            },
        });
    }
    onDelete(invoice) {
        this.dialogService.showConfirm({ title: 'Delete invoice', msg: 'Are you sure?' }, () => {
            this.invoiceService.deleteInvoice(invoice.id).subscribe((res) => {
                this.notificationService.success('Invoice deleted');
            });
        });
    }
    onSelectInvoice(e, invoice) {
        this.allSelected = false;
        this.invoiceState.setSelectedInvoices(invoice, e.target.checked);
    }
    onSelectAll(e) {
        this.allSelected = true;
        this.invoiceState.setAllSelectedInvoices(this.items.filteredData, e.target.checked);
    }
    onSubmitToReview() {
        var _a;
        if (!((_a = this.selectedInvoices) === null || _a === void 0 ? void 0 : _a.length) || this.selectedInvoices.some((inv) => inv.status !== 'DRAFT'))
            return;
        const invoiceIds = this.selectedInvoices.map((inv) => inv.id);
        this.dialogService.showLoader();
        this.invoiceService.submitDraftInvoices(invoiceIds).subscribe((res) => {
            this.notificationService.success('Invoices submitted');
            this.dialogService.hideLoader();
        }, (err) => {
            this.notificationService.error();
            this.dialogService.hideLoader();
        });
    }
    onSubmitToQB() {
        var _a;
        if (!((_a = this.selectedInvoices) === null || _a === void 0 ? void 0 : _a.length) || this.selectedInvoices.some((inv) => inv.status !== 'SUBMITTED_FOR_REVIEW')) {
            return;
        }
        const invoiceIds = this.selectedInvoices.map((inv) => inv.id);
        this.dialogService.showLoader();
        this.invoiceService.submitInvoicesToQB(invoiceIds).subscribe((res) => {
            if (res.status === 'warning') {
                return this.notificationService.warning(res.msg);
            }
            this.notificationService.success('Invoices submitted');
            this.dialogService.hideLoader();
        }, (err) => {
            this.notificationService.error();
            this.dialogService.hideLoader();
        });
    }
    onSubmitToPaid() {
        var _a;
        if (!((_a = this.selectedInvoices) === null || _a === void 0 ? void 0 : _a.length) || this.selectedInvoices.some((inv) => inv.status !== 'SUBMITTED_TO_CUSTOMER'))
            return;
        const invoiceIds = this.selectedInvoices.map((inv) => inv.id);
        this.dialogService.showLoader();
        this.invoiceService.submitInvoicesToPaid(invoiceIds).subscribe((res) => {
            // if (res.status === "warning") {
            //   return this.notificationService.warning(res.msg);
            // }
            this.notificationService.success('Invoices submitted');
            this.dialogService.hideLoader();
        }, (err) => {
            this.notificationService.error();
            this.dialogService.hideLoader();
        });
    }
    onExportPdf() {
        this.dialogService.showLoader();
        this.invoiceService
            .exportToPdf(this.selectedInvoices)
            .catch(() => {
            this.notificationService.error();
        })
            .finally(() => {
            this.dialogService.hideLoader();
        });
    }
    ngAfterViewInit() {
        this.items.sort = this.sort;
        //this.items.paginator = this.paginator
    }
    applyFilter(filterValue) {
        this.allSelected = false;
        this.invoiceState.setAllSelectedInvoices([], false);
        this.items.filter = filterValue.trim().toLocaleLowerCase();
    }
    ngOnDestroy() {
        this.subscriptions.forEach((sub) => sub.unsubscribe());
    }
}
InvoiceComponent.ɵfac = function InvoiceComponent_Factory(t) { return new (t || InvoiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_11__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_business_services_invoice_service__WEBPACK_IMPORTED_MODULE_12__["InvoiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_business_state_invoice_state_service__WEBPACK_IMPORTED_MODULE_13__["InvoicesStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_notifications_notification_service__WEBPACK_IMPORTED_MODULE_14__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_15__["AuthenticationService"])); };
InvoiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InvoiceComponent, selectors: [["app-invoice"]], viewQuery: function InvoiceComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 70, vars: 21, consts: [[1, "px-2", "px-md-5", "py-3"], [1, "d-flex", "flex-wrap", "w-100", "justify-content-between", "align-items-center", "mb-3"], [1, "text-dark", "d-inline-block", "content-title"], [1, "d-flex", "content-options-bar"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fas", "fa-search"], ["type", "text", "placeholder", "Filter by any field...", 1, "form-control", 3, "keyup"], [1, "btn", "font-weight-bold", "bg-blue-main", "text-light", "ml-3", 3, "disabled", "click"], ["ngbDropdown", "", 1, "d-inline-block", "ml-3"], ["class", "btn btn-outline-primary", "ngbDropdownToggle", "", 4, "ngIf"], ["ngbDropdownMenu", ""], ["ngbDropdownItem", "", 3, "click", 4, "ngIf"], ["ngbDropdownItem", "", 3, "click"], [1, "far", "fa-file-alt", "mr-2"], [1, "nav-wrapper", "mb-4"], [1, "nav", "nav-pills", "nav-fill"], [1, "nav-item", "cursor-pointer", 3, "click"], [1, "nav-link"], [1, "row", "mb-4"], [1, "col-12", "table-wrapper", "table-responsive"], ["mat-table", "", "matSort", "", 1, "table", "table-borderless", "table-striped", 3, "dataSource"], ["matColumnDef", "_"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "driver"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "capitalize", 4, "matCellDef"], ["matColumnDef", "invoice_number"], ["mat-header-cell", "", "mat-sort-header", "", "style", "white-space: nowrap", 4, "matHeaderCellDef"], ["matColumnDef", "date"], ["matColumnDef", "bill_to"], ["mat-cell", "", "style", "min-width: 155px", 4, "matCellDef"], ["matColumnDef", "ship_from"], ["matColumnDef", "ship_to"], ["matColumnDef", "amount"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "table-width text-center border py-3 mt-n3", 4, "ngIf"], ["aria-label", "Select page", 3, "length", "pageIndex", "pageSize", "pageSizeOptions", "page"], ["ngbDropdownToggle", "", 1, "btn", "btn-outline-primary"], [1, "far", "fa-paper-plane", "mr-2"], ["mat-header-cell", ""], [1, "custom-control", "custom-checkbox", 3, "change"], ["id", "all-check", "type", "checkbox", 1, "custom-control-input", 3, "checked"], ["for", "all-check", 1, "custom-control-label"], ["mat-cell", ""], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", 1, "custom-control-input", 3, "id", "checked", "change"], [1, "custom-control-label", 3, "for"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "capitalize"], ["mat-header-cell", "", "mat-sort-header", "", 2, "white-space", "nowrap"], ["mat-cell", "", 2, "min-width", "155px"], ["class", "action-buttons", 4, "ngIf"], ["class", "action-buttons justify-content-center", 4, "ngIf"], [1, "action-buttons"], ["aria-label", "edit", 1, "text-dark", "mr-4", 3, "click"], [1, "fas", "fa-edit", "text-xl"], ["aria-label", "edit", 1, "text-dark", 3, "click"], [1, "fas", "fa-trash-alt", "text-xl"], [1, "action-buttons", "justify-content-center"], [1, "fas", "fa-eye", "text-xl"], ["mat-header-row", ""], ["mat-row", ""], [1, "table-width", "text-center", "border", "py-3", "mt-n3"]], template: function InvoiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Invoices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function InvoiceComponent_Template_input_keyup_9_listener($event) { return ctx.applyFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceComponent_Template_button_click_10_listener() { return ctx.openNewDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " +Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, InvoiceComponent_button_13_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, InvoiceComponent_button_15_Template, 4, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, InvoiceComponent_button_16_Template, 4, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, InvoiceComponent_button_17_Template, 4, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceComponent_Template_button_click_18_listener() { return ctx.onExportPdf(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Export PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceComponent_Template_li_click_24_listener() { return ctx.setTable("DRAFT"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Driver drafts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceComponent_Template_li_click_27_listener() { return ctx.setTable("SUBMITTED_FOR_REVIEW"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Submitted for review");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceComponent_Template_li_click_30_listener() { return ctx.setTable("SUBMITTED_TO_CUSTOMER"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Submitted to customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceComponent_Template_li_click_33_listener() { return ctx.setTable("PAID"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Paid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "table", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](39, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, InvoiceComponent_th_40_Template, 4, 1, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, InvoiceComponent_td_41_Template, 4, 3, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](42, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, InvoiceComponent_th_43_Template, 2, 0, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, InvoiceComponent_td_44_Template, 2, 2, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](45, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, InvoiceComponent_th_46_Template, 2, 0, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, InvoiceComponent_td_47_Template, 2, 1, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](48, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, InvoiceComponent_th_49_Template, 2, 0, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, InvoiceComponent_td_50_Template, 3, 4, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](51, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, InvoiceComponent_th_52_Template, 2, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, InvoiceComponent_td_53_Template, 4, 3, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](54, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, InvoiceComponent_th_55_Template, 2, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, InvoiceComponent_td_56_Template, 4, 3, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](57, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, InvoiceComponent_th_58_Template, 2, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, InvoiceComponent_td_59_Template, 4, 3, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](60, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, InvoiceComponent_th_61_Template, 2, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, InvoiceComponent_td_62_Template, 3, 3, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](63, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, InvoiceComponent_th_64_Template, 2, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, InvoiceComponent_td_65_Template, 3, 2, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, InvoiceComponent_tr_66_Template, 1, 0, "tr", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, InvoiceComponent_tr_67_Template, 1, 0, "tr", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, InvoiceComponent_div_68_Template, 2, 0, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-paginator", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function InvoiceComponent_Template_mat_paginator_page_69_listener($event) { return ctx.handlePage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedInvoices == null ? null : ctx.selectedInvoices.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tab === "DRAFT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tab === "SUBMITTED_FOR_REVIEW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tab === "SUBMITTED_TO_CUSTOMER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.tab === "DRAFT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.tab === "SUBMITTED_FOR_REVIEW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.tab === "SUBMITTED_TO_CUSTOMER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.tab === "PAID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.items.data.length || !ctx.items.filteredData.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.paginatorLength)("pageIndex", ctx.paginatorPageIndex - 1)("pageSize", ctx.paginatorPageSize)("pageSizeOptions", ctx.pageSizeOptions);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbDropdown"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbDropdownItem"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbDropdownToggle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["CurrencyPipe"]], styles: [".text-blue-light[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-light-rgb));\n}\n.text-blue-main[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-main-rgb));\n}\n.text-blue-dark[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-dark-rgb));\n}\n.bg-grey-light[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-grey-light-rgb));\n}\n.bg-grey-dark[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-grey-5-rgb));\n}\n.bg-blue-light[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-light-rgb));\n}\n.bg-blue-main[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-main-rgb));\n}\n.bg-blue-dark[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-dark-rgb));\n}\n.text-xs[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.text-base[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.text-lg[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.text-xl[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.text-2xl[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.text-3xl[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.capitalize[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.rounded-xl[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  overflow: hidden;\n}\n.border-primary-1[_ngcontent-%COMP%] {\n  border: 1px solid rgb(var(--palette-blue-main-rgb));\n}\n.border-primary-2[_ngcontent-%COMP%] {\n  border: 2px solid rgb(var(--palette-blue-main-rgb));\n}\n.custom-scroll[_ngcontent-%COMP%] {\n  padding-right: 4px;\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0.5em;\n  border-radius: 5px;\n  background-color: rgb(var(--palette-grey-light-rgb));\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  border: 0.3em solid;\n  border-color: rgb(var(--palette-grey-5-rgb));\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  --table-header-color: rgb(var(--palette-white-rgb));\n  --table-header-background: rgb(var(--palette-blue-main-rgb));\n  --table-text-color: rgb(var(--palette-grey-9-rgb));\n  --table-row-hover-background: rgb(var(--palette-blue-light-rgb));\n  --page-background: rgb(var(--palette-white-rgb));\n  --page-spacing: 10px;\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 672px;\n  background: none;\n  border-collapse: collapse;\n  border-radius: 1em 1em 0 0;\n  overflow: hidden;\n}\n.table-wrapper[_ngcontent-%COMP%]   table.table-sm[_ngcontent-%COMP%] {\n  min-width: 370px;\n}\n.table-wrapper[_ngcontent-%COMP%]   table.table-sm[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%] {\n  padding: var(--page-spacing);\n}\n.table-wrapper[_ngcontent-%COMP%]   table.table-sm[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n  padding: var(--page-spacing);\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: var(--table-header-color);\n  background-color: var(--table-header-background);\n  font-size: 13px;\n  font-weight: 700;\n}\n@media (min-width: 821px) {\n  .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n  border-bottom-style: none;\n  padding: calc(var(--page-spacing));\n}\n@media (min-width: 821px) {\n  .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n    padding: calc(var(--page-spacing) * 2);\n  }\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: var(--table-text-color);\n  line-height: 1.6;\n  font-size: 13px;\n}\n@media (min-width: 821px) {\n  .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    font-size: 0.9em;\n  }\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%] {\n  border-bottom-style: none;\n  padding: var(--page-spacing) calc(var(--page-spacing));\n}\n@media (min-width: 821px) {\n  .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%] {\n    padding: calc(var(--page-spacing) * 2);\n  }\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%] {\n  height: auto;\n  transition: background-color 0.5s;\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]:hover {\n  background-color: var(--table-row-hover-background);\n  transition: background-color 0.5s;\n}\n.table-wrapper[_ngcontent-%COMP%]     [mat-table] .mat-sort-header-arrow {\n  color: var(--table-header-color);\n}\n.table-wrapper[_ngcontent-%COMP%]   mat-paginator[_ngcontent-%COMP%], .table-wrapper[_ngcontent-%COMP%]   .table-width[_ngcontent-%COMP%] {\n  min-width: 672px;\n  width: 100%;\n}\n.table-wrapper[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n  border: none;\n}\n.table-wrapper[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  line-height: 1;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  align-items: center;\n  margin-top: 5px;\n}\n.action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  all: unset;\n  display: inline-block;\n  cursor: pointer;\n  line-height: 0.8;\n}\n.action-buttons[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n.nav-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 3px solid rgb(var(--palette-blue-main-rgb));\n  border-radius: 10px;\n}\n.nav-wrapper[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  margin: -1px;\n  font-weight: 600;\n}\n.custom-control.custom-checkbox[_ngcontent-%COMP%] {\n  --default-spacing: 10px;\n  --checkbox-border-color: rgb(var(--palette-white-rgb));\n  --checkbox-background: rgb(var(--palette-blue-main-rgb));\n  --checkbox-color: rgb(var(--palette-white-rgb));\n}\n.custom-control.custom-checkbox[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%]   .custom-label[_ngcontent-%COMP%] {\n  margin-left: calc(var(--default-spacing) / 2);\n}\n.custom-control.custom-checkbox[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%]::before {\n  width: 22px;\n  height: 22px;\n  border-radius: 6px;\n  top: 0px;\n}\n.custom-control.custom-checkbox[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%]::after {\n  width: 22px;\n  height: 22px;\n  top: 0px;\n}\n.custom-control.custom-checkbox[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:checked    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  color: var(--checkbox-color);\n  border-color: var(--checkbox-border-color);\n  background-color: var(--checkbox-background);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9wYWxldHRlcy9zaGFyZWQuc2NzcyIsInNyYy90aGVtZS9wYWxldHRlcy9tb2RlLnNjc3MiLCJzcmMvdGhlbWUvY3VzdG9tLWNsYXNzZXMuc2NzcyIsInNyYy9hcHAvaW52b2ljZS9pbnZvaWNlLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL21peGlucy90YWJsZS1iYXNpYy1zdHlsZXMuc2NzcyIsInNyYy90aGVtZS9taXhpbnMvaW5wdXRzL2NoZWNrYm94LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FETkE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FETkE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FETkE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FETkE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FDTEE7RUFDRSx5Q0FBQTtBQzZDRjtBRDNDQTtFQUNFLHdDQUFBO0FDOENGO0FENUNBO0VBQ0Usd0NBQUE7QUMrQ0Y7QUQzQ0E7RUFDRSxvREFBQTtBQzhDRjtBRDVDQTtFQUNFLGdEQUFBO0FDK0NGO0FEN0NBO0VBQ0Usb0RBQUE7QUNnREY7QUQ5Q0E7RUFDRSxtREFBQTtBQ2lERjtBRC9DQTtFQUNFLG1EQUFBO0FDa0RGO0FEOUNBO0VBQ0Usa0JBQUE7QUNpREY7QUQvQ0E7RUFDRSxtQkFBQTtBQ2tERjtBRGhEQTtFQUNFLGVBQUE7QUNtREY7QURqREE7RUFDRSxtQkFBQTtBQ29ERjtBRGpEQTtFQUNFLGtCQUFBO0FDb0RGO0FEakRBO0VBQ0UsaUJBQUE7QUNvREY7QURqREE7RUFDRSxrQkFBQTtBQ29ERjtBRGpEQTtFQUNFLGdCQUFBO0FDb0RGO0FEbERBO0VBQ0UsZ0JBQUE7QUNxREY7QURsREE7RUFDRSwwQkFBQTtBQ3FERjtBRGxEQTtFQUNFLGVBQUE7QUNxREY7QURsREE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FDcURGO0FEbERBO0VBQ0UsbURBQUE7QUNxREY7QURsREE7RUFDRSxtREFBQTtBQ3FERjtBRGxEQTtFQUNFLGtCQUFBO0FDcURGO0FEbkRBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0RBQUE7QUNzREY7QURsREE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7QUNxREY7QUEvSUE7RUNGRSxtREFBQTtFQUNBLDREQUFBO0VBQ0Esa0RBQUE7RUFDQSxnRUFBQTtFQUVBLGdEQUFBO0VBQ0Esb0JBQUE7QURvSkY7QUNsSkU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBRG9KSjtBQ2xKSTtFQUNFLGdCQUFBO0FEb0pOO0FDakpRO0VBQ0UsNEJBQUE7QURtSlY7QUMvSVE7RUFDRSw0QkFBQTtBRGlKVjtBQzVJSTtFQUNFLGdDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUQ4SU47QUM3SU07RUFMRjtJQU1JLGVBQUE7RURnSk47QUFDRjtBQzlJTTtFQUNFLHlCQUFBO0VBQ0Esa0NBQUE7QURnSlI7QUMvSVE7RUFIRjtJQUlJLHNDQUFBO0VEa0pSO0FBQ0Y7QUM5SUk7RUFDRSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBRGdKTjtBQy9JTTtFQUpGO0lBS0ksZ0JBQUE7RURrSk47QUFDRjtBQ2pKTTtFQUNFLHlCQUFBO0VBQ0Esc0RBQUE7QURtSlI7QUNsSlE7RUFIRjtJQUlJLHNDQUFBO0VEcUpSO0FBQ0Y7QUNqSkk7RUFDRSxZQUFBO0VBQ0EsaUNBQUE7QURtSk47QUNqSk07RUFDRSwyQkFBQTtFQUNBLDhCQUFBO0FEbUpSO0FDakpNO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtBRG1KUjtBQ2hKTTtFQUNFLG1EQUFBO0VBQ0EsaUNBQUE7QURrSlI7QUM1SUk7RUFDRSxnQ0FBQTtBRDhJTjtBQzFJRTs7RUFFRSxnQkFBQTtFQUNBLFdBQUE7QUQ0SUo7QUFyT0U7RUFDRSxZQUFBO0FBdU9KO0FBcE9FO0VBQ0UsY0FBQTtBQXNPSjtBQWxPQTtFQUNFLGFBQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBcU9GO0FBcE9FO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBc09KO0FBcE9FO0VBQ0UsaUJBQUE7QUFzT0o7QUFsT0E7RUFDRSxXQUFBO0VBQ0EsbURBQUE7RUFDQSxtQkFBQTtBQXFPRjtBQXBPRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQXNPSjtBQWxPQTtFRTFDRSx1QkFBQTtFQUNBLHNEQUFBO0VBQ0Esd0RBQUE7RUFDQSwrQ0FBQTtBRmdSRjtBRTdRSTtFQUNFLDZDQUFBO0FGK1FOO0FFNVFJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUY4UU47QUU1UUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7QUY4UU47QUUxUUU7RUFDRSw0QkFBQTtFQUNBLDBDQUFBO0VBQ0EsNENBQUE7QUY0UUoiLCJmaWxlIjoic3JjL2FwcC9pbnZvaWNlL2ludm9pY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBTaGFyZWRcbiovXG5cbkBpbXBvcnQgJ3ByZWZlcmVuY2VzJztcbkBpbXBvcnQgJ2ludGVyZmFjZSc7XG5AaW1wb3J0ICdtb2RlJztcblxuLy8gQW4gYWJzdHJhY3Qgd2F5IHRvIHByb3ZpZGUgY29sb3JzLlxuLy8gVGhpcyBmdW5jdGlvbiBpcyBhbiBpbnRlcmZhY2UgdG8gYm90aCBTYXNzIHZhcmlhYmxlcyBhbmQgQ1NTIDQgdmFyaWFibGVzIGJhc2VkIGNvbG9yIHBhbGV0dGVzLlxuQGZ1bmN0aW9uIHBhbGV0dGUtY29sb3IoJGNvbG9yLW5hbWUsICRhbHBoYTogMSkge1xuICAvLyAkY29sb3ItcGFsZXR0ZS1tb2RlICAgICAgICA9PiAgRGVmaW5lZCBpbiBtb2RlLnNjc3NcbiAgLy8gJGNob29zZW4tcGFsZXR0ZSAgICAgICAgICAgPT4gIERlZmluZWQgaW4gbW9kZS5zY3NzXG4gIC8vICRjb2xvci1wYWxldHRlLWludGVyZmFjZSAgID0+ICBEZWZpbmVkIGluIGludGVyZmFjZS5zY3NzXG4gIC8vICRjc3M0LXZhci1wcmVmaXggICAgICAgICAgID0+ICBEZWZpbmVkIGluIHByZWZlcmVuY2VzLnNjc3NcbiAgLy8gJGNzczQtY29sb3ItZm9ybWF0ICAgICAgICAgPT4gIERlZmluZWQgaW4gcHJlZmVyZW5jZXMuc2Nzc1xuXG4gIEBpZiAoJGNvbG9yLXBhbGV0dGUtbW9kZSA9PSAnY3NzLTQnKSB7XG4gICAgJHBhbGV0dGUtcmVmZXJlbmNlOiAkY29sb3ItcGFsZXR0ZS1pbnRlcmZhY2U7XG5cbiAgICAkY29sb3ItdmFyaWFibGUtaW5kZXg6IGluZGV4KCRwYWxldHRlLXJlZmVyZW5jZSwgJGNvbG9yLW5hbWUpO1xuXG4gICAgQGlmICh0eXBlX29mKCRjb2xvci12YXJpYWJsZS1pbmRleCkgPT0gJ251bWJlcicpIHtcbiAgICAgICRjb2xvci12YXJpYWJsZS1uYW1lOiBudGgoJHBhbGV0dGUtcmVmZXJlbmNlLCAkY29sb3ItdmFyaWFibGUtaW5kZXgpO1xuXG4gICAgICBAaWYgKCRhbHBoYSA+IDAgYW5kICRhbHBoYSA8IDEpIHtcbiAgICAgICAgQHJldHVybiAjeydyZ2JhKHZhcignICsgJGNzczQtdmFyLXByZWZpeCArICRjb2xvci12YXJpYWJsZS1uYW1lICsgJy0nICsgJGNzczQtY29sb3ItZm9ybWF0ICsnKSwgI3skYWxwaGF9KSd9O1xuICAgICAgfSBAZWxzZSBpZiAoJGFscGhhID09IDEpIHtcbiAgICAgICAgQHJldHVybiAjeydyZ2IodmFyKCcgKyAkY3NzNC12YXItcHJlZml4ICsgJGNvbG9yLXZhcmlhYmxlLW5hbWUgKyAnLScgKyAkY3NzNC1jb2xvci1mb3JtYXQgKyAnKSknfTtcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICBAZXJyb3IgXCJBbHBoYSAoI3skYWxwaGF9KSBtdXN0IGJlIGEgbnVtYmVyXCI7XG4gICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICBAZXJyb3IgXCJDb2xvciAoI3skY29sb3ItbmFtZX0pIHdhcyBub3QgZm91bmQgb24gQ29sb3IgUGFsZXR0ZSBkZWZpbml0aW9uLiBNYWtlIHN1cmUgaXQncyBkZWZpbmVkIGluIHRoZSB0aGVtZS9wYWxldHRlcy9pbnRlcmZhY2Uuc2NzcyBmaWxlXCI7XG4gICAgfVxuICB9IEBlbHNlIGlmICgkY29sb3ItcGFsZXR0ZS1tb2RlID09ICdzYXNzJykge1xuICAgICRwYWxldHRlLXJlZmVyZW5jZTogJGNob29zZW4tcGFsZXR0ZTtcblxuICAgICRjb2xvci12YXJpYWJsZTogbWFwLWdldCgkcGFsZXR0ZS1yZWZlcmVuY2UsICRjb2xvci1uYW1lKTtcblxuICAgIC8vIENoZWNrIGlmIGl0IGlzIGEgU2FzcyBjb2xvclxuICAgIEBpZiAodHlwZV9vZigkY29sb3ItdmFyaWFibGUpID09ICdjb2xvcicpIHtcbiAgICAgIEBpZiAoJGFscGhhID4gMCBhbmQgJGFscGhhIDwgMSkge1xuICAgICAgICBAcmV0dXJuIHJnYmEoJGNvbG9yLXZhcmlhYmxlLCAkYWxwaGEpO1xuICAgICAgfSBAZWxzZSBpZiAoJGFscGhhID09IDEpIHtcbiAgICAgICAgQHJldHVybiAkY29sb3ItdmFyaWFibGU7XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgQGVycm9yIFwiQWxwaGEgKCN7JGFscGhhfSkgbXVzdCBiZSBhIG51bWJlclwiO1xuICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgQGVycm9yIFwiQ29sb3IgKCN7JGNvbG9yLXZhcmlhYmxlfSkgaXMgbm90IGEgU2FzcyBjb2xvclwiO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGVycm9yICdObyBDb2xvciBQYWxldHRlIG1vZGUgc2VsZWN0ZWQgaW4gdGhlbWUvcGFsZXR0ZXMvcHJlZmVyZW5jZXMuc2Nzcyc7XG4gIH1cbn1cbiIsIi8qXG4gIENTUyA0IE1vZGVcbiovXG4kY29sb3ItcGFsZXR0ZS1tb2RlOiAnY3NzLTQnO1xuXG5cbi8qXG4gIFNhc3MgTW9kZVxuKi9cbi8vIEBpbXBvcnQgJ2NvcmUnO1xuLy9cbi8vICRjb2xvci1wYWxldHRlLW1vZGU6ICdzYXNzJztcbi8vXG4vLyAvLyBJbXBvcnQgdGhlIGRlZmluaXRpb25zIG9mIHRoZSBwYWxldHRlIHlvdSB3YW50IHRvIHVzZVxuLy8gQGltcG9ydCAncGFsZXR0ZS0xL2RlZmluaXRpb25zJztcbi8vIC8vIEBpbXBvcnQgJ3BhbGV0dGUtMi9kZWZpbml0aW9ucyc7XG4vL1xuLy8gLy8gQXNzaWduIGEgcGFydGljdWxhciBDb2xvciBQYWxldHRlIHRvIHRoZSAnY2hvb3Nlbi1wYWxldHRlJyBwb2ludGVyLlxuLy8gLy8gJGNob29zZW4tcGFsZXR0ZSB3aWxsIGJlIGEgU2FzcyBtYXAgcG9pbnRpbmcgdG8gYW5vdGhlciBjb2xvciBwYWxldHRlIFNhc3MgbWFwXG4vLyAkY2hvb3Nlbi1wYWxldHRlOiBidWlsZFNhc3NQYWxldHRlKCRwYWxldHRlLTEpO1xuLy8gLy8gJGNob29zZW4tcGFsZXR0ZTogYnVpbGRTYXNzUGFsZXR0ZSgkcGFsZXR0ZS0yKTtcbiIsIi8vY29sb3Jcbi50ZXh0LWJsdWUtbGlnaHQge1xuICBjb2xvcjogI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1saWdodFwiKX07XG59XG4udGV4dC1ibHVlLW1haW4ge1xuICBjb2xvcjogI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1tYWluXCIpfTtcbn1cbi50ZXh0LWJsdWUtZGFyayB7XG4gIGNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJibHVlLWRhcmtcIil9O1xufVxuXG4vL2JhY2tncm91bmRcbi5iZy1ncmV5LWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiZ3JleS1saWdodFwiKX07XG59XG4uYmctZ3JleS1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiZ3JleS01XCIpfTtcbn1cbi5iZy1ibHVlLWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1saWdodFwiKX07XG59XG4uYmctYmx1ZS1tYWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1tYWluXCIpfTtcbn1cbi5iZy1ibHVlLWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJibHVlLWRhcmtcIil9O1xufVxuXG4vL3RleHRcbi50ZXh0LXhzIHtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xufVxuLnRleHQtc20ge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xufVxuLnRleHQtYmFzZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi50ZXh0LWxnIHtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbn1cblxuLnRleHQteGwge1xuICBmb250LXNpemU6IDEuMjVyZW07XG59XG5cbi50ZXh0LTJ4bCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4udGV4dC0zeGwge1xuICBmb250LXNpemU6IDEuNzVyZW07XG59XG5cbi5mb250LXNlbWlib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5mb250LWJvbGQge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uY2FwaXRhbGl6ZSB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uY3Vyc29yLXBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yb3VuZGVkLXhsIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJvcmRlci1wcmltYXJ5LTEge1xuICBib3JkZXI6IDFweCBzb2xpZCAje3BhbGV0dGUtY29sb3IoXCJibHVlLW1haW5cIil9O1xufVxuXG4uYm9yZGVyLXByaW1hcnktMiB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbWFpblwiKX07XG59XG5cbi5jdXN0b20tc2Nyb2xse1xuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG59XG4uY3VzdG9tLXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJncmV5LWxpZ2h0XCIpfTtcbn1cblxuXG4uY3VzdG9tLXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogLjNlbSBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJncmV5LTVcIil9O1xufVxuIiwiQGltcG9ydCBcInNoYXJlZFwiO1xuXG46aG9zdCB7XG59XG5cbi50YWJsZS13cmFwcGVyIHtcbiAgQGluY2x1ZGUgdGFibGUtYmFzaWMtc3R5bGVzKCk7XG5cbiAgdGgubWF0LWhlYWRlci1jZWxsIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cblxuICB0ZHtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgfVxufVxuXG4uYWN0aW9uLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGJ1dHRvbiB7XG4gICAgYWxsOiB1bnNldDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAwLjg7XG4gIH1cbiAgbWF0LWljb24ge1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICB9XG59XG5cbi5uYXYtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDNweCBzb2xpZCAje3BhbGV0dGUtY29sb3IoXCJibHVlLW1haW5cIil9O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAubmF2LWxpbmt7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbn1cblxuLmN1c3RvbS1jb250cm9sLmN1c3RvbS1jaGVja2JveCB7XG4gIEBpbmNsdWRlIGJvb3RzdHJhcC1jaGVja2JveC1zdHlsZXMoKTtcbn1cbiIsIkBpbXBvcnQgXCJwYWxldHRlcy9zaGFyZWRcIjtcblxuQG1peGluIHRhYmxlLWJhc2ljLXN0eWxlcygpIHtcbiAgLS10YWJsZS1oZWFkZXItY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcIndoaXRlXCIpfTtcbiAgLS10YWJsZS1oZWFkZXItYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1tYWluXCIpfTtcbiAgLS10YWJsZS10ZXh0LWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJncmV5LTlcIil9O1xuICAtLXRhYmxlLXJvdy1ob3Zlci1iYWNrZ3JvdW5kOiAje3BhbGV0dGUtY29sb3IoXCJibHVlLWxpZ2h0XCIpfTtcblxuICAtLXBhZ2UtYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKFwid2hpdGVcIil9O1xuICAtLXBhZ2Utc3BhY2luZzogMTBweDtcblxuICB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiA2NzJweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgYm9yZGVyLXJhZGl1czogMWVtIDFlbSAwIDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICYudGFibGUtc20ge1xuICAgICAgbWluLXdpZHRoOiAzNzBweDtcblxuICAgICAgdGQge1xuICAgICAgICAmLm1hdC1jZWxsIHtcbiAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLXNwYWNpbmcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aCB7XG4gICAgICAgICYubWF0LWhlYWRlci1jZWxsIHtcbiAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLXNwYWNpbmcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGgge1xuICAgICAgY29sb3I6IHZhcigtLXRhYmxlLWhlYWRlci1jb2xvcik7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWJsZS1oZWFkZXItYmFja2dyb3VuZCk7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDgyMXB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtaGVhZGVyLWNlbGwge1xuICAgICAgICBib3JkZXItYm90dG9tLXN0eWxlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykpO1xuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogODIxcHgpIHtcbiAgICAgICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRkIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10YWJsZS10ZXh0LWNvbG9yKTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogODIxcHgpIHtcbiAgICAgICAgZm9udC1zaXplOi45ZW07XG4gICAgICB9XG4gICAgICAmLm1hdC1jZWxsIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogdmFyKC0tcGFnZS1zcGFjaW5nKSBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykpO1xuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogODIxcHgpIHtcbiAgICAgICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRyLm1hdC1yb3cge1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzO1xuXG4gICAgICB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xuICAgICAgfVxuICAgICAgdGQ6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA2cHg7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWJsZS1yb3ctaG92ZXItYmFja2dyb3VuZCk7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICA6Om5nLWRlZXAgW21hdC10YWJsZV0ge1xuICAgIC5tYXQtc29ydC1oZWFkZXItYXJyb3cge1xuICAgICAgY29sb3I6IHZhcigtLXRhYmxlLWhlYWRlci1jb2xvcik7XG4gICAgfVxuICB9XG5cbiAgbWF0LXBhZ2luYXRvcixcbiAgLnRhYmxlLXdpZHRoIHtcbiAgICBtaW4td2lkdGg6IDY3MnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbkBtaXhpbiB0YWJsZS1wYWdpbmF0b3Itc3R5bGVzKCkge1xuICAtLXBhZ2luYXRvci1iYWNrZ3JvdW5kOiAje3BhbGV0dGUtY29sb3IoXCJncmV5LTBcIil9O1xuICAtLXBhZ2luYXRvci10ZXh0LWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJncmV5LTVcIil9O1xuICAtLXBhZ2luYXRvci1jb250cm9scy1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwicHJpbWFyeS1kYXJrXCIpfTtcbiAgLS1wYWdpbmF0b3ItZGlzYWJsZWQtY29udHJvbHMtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcInByaW1hcnktZGFya1wiLCAwLjEpfTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdpbmF0b3ItYmFja2dyb3VuZCk7XG5cbiAgLy8gT3ZlcnJpZGUgTWF0ZXJpYWwgc3R5bGVzXG4gIC5tYXQtcGFnaW5hdG9yLWNvbnRhaW5lciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWluLXdpZHRoOiA2NzJweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIHtcbiAgICAubWF0LXBhZ2luYXRvci1wYWdlLXNpemUtbGFiZWwge1xuICAgICAgY29sb3I6IHZhcigtLXBhZ2luYXRvci10ZXh0LWNvbG9yKTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAubWF0LXBhZ2luYXRvci1wYWdlLXNpemUtc2VsZWN0IHtcbiAgICAgIC5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhZ2luYXRvci1jb250cm9scy1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cblxuICAgICAgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFnaW5hdG9yLWNvbnRyb2xzLWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9IC8vIC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZVxuXG4gIC5tYXQtcGFnaW5hdG9yLXJhbmdlLWFjdGlvbnMge1xuICAgIC5tYXQtcGFnaW5hdG9yLXJhbmdlLWxhYmVsIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wYWdpbmF0b3ItdGV4dC1jb2xvcik7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLm1hdC1wYWdpbmF0b3ItbmF2aWdhdGlvbi1wcmV2aW91cyxcbiAgICAubWF0LXBhZ2luYXRvci1uYXZpZ2F0aW9uLW5leHQge1xuICAgICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFnaW5hdG9yLWNvbnRyb2xzLWNvbG9yKTtcbiAgICAgIH1cbiAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhZ2luYXRvci1kaXNhYmxlZC1jb250cm9scy1jb2xvcik7XG4gICAgICB9XG4gICAgfVxuICB9IC8vIC5tYXQtcGFnaW5hdG9yLXJhbmdlLWFjdGlvbnNcbn1cbiIsIkBtaXhpbiBib290c3RyYXAtY2hlY2tib3gtc3R5bGVzKCkge1xuICAtLWRlZmF1bHQtc3BhY2luZzogMTBweDtcbiAgLS1jaGVja2JveC1ib3JkZXItY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignd2hpdGUnKX07XG4gIC0tY2hlY2tib3gtYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKCdibHVlLW1haW4nKX07XG4gIC0tY2hlY2tib3gtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignd2hpdGUnKX07XG5cbiAgLmN1c3RvbS1jb250cm9sLWxhYmVsIHtcbiAgICAuY3VzdG9tLWxhYmVsIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLWRlZmF1bHQtc3BhY2luZykgLyAyKTtcbiAgICB9XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgd2lkdGg6IDIycHg7XG4gICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICB0b3A6IDBweDtcbiAgICB9XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgd2lkdGg6IDIycHg7XG4gICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICB0b3A6IDBweDtcbiAgICB9XG4gIH1cblxuICAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgICBjb2xvcjogdmFyKC0tY2hlY2tib3gtY29sb3IpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY2hlY2tib3gtYm9yZGVyLWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGVja2JveC1iYWNrZ3JvdW5kKTtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvoiceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-invoice',
                templateUrl: './invoice.component.html',
                styleUrls: ['./invoice.component.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] }, { type: _shared_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_11__["DialogService"] }, { type: _business_services_invoice_service__WEBPACK_IMPORTED_MODULE_12__["InvoiceService"] }, { type: _business_state_invoice_state_service__WEBPACK_IMPORTED_MODULE_13__["InvoicesStateService"] }, { type: _shared_notifications_notification_service__WEBPACK_IMPORTED_MODULE_14__["NotificationService"] }, { type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_15__["AuthenticationService"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }], table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['table', { static: true }]
        }] }); })();


/***/ }),

/***/ "HWoU":
/*!****************************************************************************!*\
  !*** ./src/app/invoice/add-vehicle-dialog/add-vehicle-dialog.component.ts ***!
  \****************************************************************************/
/*! exports provided: AddVehicleDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVehicleDialogComponent", function() { return AddVehicleDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _core_config_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/config/constants */ "AJa1");
/* harmony import */ var src_app_business_services_vehicle_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/business/services/vehicle.service */ "8zvB");
/* harmony import */ var src_app_business_state_invoice_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/business/state/invoice-state.service */ "W7lO");
/* harmony import */ var src_app_shared_notifications_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/notifications/notification.service */ "38VU");
/* harmony import */ var src_app_business_services_rate_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/business/services/rate.service */ "nUUR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");














function AddVehicleDialogComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (ctx_r0.vehicleForm.controls.vin.errors == null ? null : ctx_r0.vehicleForm.controls.vin.errors.faliedSearch) ? "VIN not found" : "Invalid VIN", " ");
} }
function AddVehicleDialogComponent_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const year_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", year_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](year_r4);
} }
function AddVehicleDialogComponent_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const make_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", make_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](make_r5);
} }
function AddVehicleDialogComponent_option_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const model_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", model_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](model_r6);
} }
class AddVehicleDialogComponent {
    constructor(dialogRef, data, fb, vehicleService, invoicesState, notificationService, rateService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.vehicleService = vehicleService;
        this.invoicesState = invoicesState;
        this.notificationService = notificationService;
        this.rateService = rateService;
        this.subscriptions = [];
        this.years = [];
        this.makes = [];
        this.models = [];
        this.buildForm();
        const sub = this.invoicesState.selectedInvoice$.subscribe((data) => {
            var _a;
            this.selectedInvoice = data;
            const sub = this.rateService.rates.subscribe((rates) => {
                var _a, _b, _c, _d, _e, _f, _g;
                const currentShipFromCity = (_c = (((_a = this.selectedInvoice) === null || _a === void 0 ? void 0 : _a.ship_from) || ((_b = this.selectedInvoice) === null || _b === void 0 ? void 0 : _b.quick_ship_from))) === null || _c === void 0 ? void 0 : _c.city;
                const currentShipToCity = (_f = (((_d = this.selectedInvoice) === null || _d === void 0 ? void 0 : _d.ship_to) || ((_e = this.selectedInvoice) === null || _e === void 0 ? void 0 : _e.quick_ship_to))) === null || _f === void 0 ? void 0 : _f.city;
                this.rate = rates.find((rt) => {
                    return (`${rt.origination_city.name}_${rt.origination_city.state_code}_${rt.destination_city.name}_${rt.destination_city.state_code}` ===
                        `${currentShipFromCity === null || currentShipFromCity === void 0 ? void 0 : currentShipFromCity.name}_${currentShipFromCity === null || currentShipFromCity === void 0 ? void 0 : currentShipFromCity.state_code}_${currentShipToCity === null || currentShipToCity === void 0 ? void 0 : currentShipToCity.name}_${currentShipToCity === null || currentShipToCity === void 0 ? void 0 : currentShipToCity.state_code}`);
                });
                if ((_g = this.rate) === null || _g === void 0 ? void 0 : _g.amount) {
                    this.vehicleForm.controls.amount.setValue(this.rate.amount);
                }
            });
            this.subscriptions.push(sub);
            if (!((_a = this.rateService.rates.value) === null || _a === void 0 ? void 0 : _a.length)) {
                this.rateService.fetchRates();
            }
        });
        this.subscriptions.push(sub);
    }
    ngOnInit() {
        this.years = this.vehicleService.years;
    }
    onSelectYear(event) {
        //TODO: get makes by year
        this.makes = this.vehicleService.makes;
    }
    onSelectMake(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.models = yield this.vehicleService.getModelsByMake(event.target.value);
            this.vehicleForm.controls.model.setValue("");
        });
    }
    buildForm() {
        this.vehicleForm = this.fb.group({
            vin: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_core_config_constants__WEBPACK_IMPORTED_MODULE_4__["regexs"].vin)]],
            year: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            make: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            model: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            amount: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            weight: ["", []],
            comments: ["", []],
        });
    }
    onSearchVin(e) {
        const vin = e.target.value;
        if (this.vehicleForm.controls.vin.valid) {
            this.vehicleService
                .searchVin(vin.toUpperCase())
                .then((data) => {
                this.vehicleSearched = data;
                this.makes.push(data.make);
                this.models.push(data.model);
                this.vehicleForm.controls.year.setValue(data.year);
                this.vehicleForm.controls.make.setValue(data.make);
                this.vehicleForm.controls.model.setValue(data.model);
                this.vehicleForm.controls.weight.setValue(data.weight);
            })
                .catch((err) => {
                this.vehicleSearched = null;
                this.vehicleForm.controls.vin.setErrors({ faliedSearch: true });
                this.vehicleForm.controls.vin.markAsTouched();
            });
        }
    }
    onSubmit() {
        var _a;
        const vinControl = this.vehicleForm.controls.vin;
        vinControl.setValue((_a = vinControl.value) === null || _a === void 0 ? void 0 : _a.toUpperCase());
        if (this.vehicleForm.invalid) {
            return Object.values(this.vehicleForm.controls).forEach((control) => {
                if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                    Object.values(control.controls).forEach((control) => control.markAsTouched());
                }
                else {
                    control.markAsTouched();
                }
            });
        }
        else {
            try {
                if (this.data.action === "edit") {
                    this.invoicesState.addSelectedInvoiceVehicle(this.vehicleForm.value);
                }
                else {
                    this.invoicesState.addNewInvoiceVehicle(this.vehicleForm.value);
                }
            }
            catch (error) {
                return this.notificationService.error(error.message);
            }
            this.data.onBackToInvoice();
        }
    }
    ngOnDestroy() {
        this.subscriptions.forEach((sub) => sub.unsubscribe());
    }
}
AddVehicleDialogComponent.ɵfac = function AddVehicleDialogComponent_Factory(t) { return new (t || AddVehicleDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_business_services_vehicle_service__WEBPACK_IMPORTED_MODULE_5__["VehicleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_business_state_invoice_state_service__WEBPACK_IMPORTED_MODULE_6__["InvoicesStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_notifications_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_business_services_rate_service__WEBPACK_IMPORTED_MODULE_8__["RateService"])); };
AddVehicleDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddVehicleDialogComponent, selectors: [["app-add-vehicle-dialog"]], decls: 63, vars: 21, consts: [[1, "form-group", 3, "formGroup", "ngSubmit"], [1, "w-100", "input-group", "pt-2", "mb-3"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fas", "fa-search"], ["type", "text", "placeholder", "Search VIN...", "formControlName", "vin", 1, "form-control", 3, "input"], ["class", "form-text invalid-feedback", 4, "ngIf"], [1, "w-100", "mb-3"], ["for", "year", 1, "text-dark", "text-base"], [1, "custom-select-wrapper"], ["formControlName", "year", 1, "custom-select", "form-control", 3, "change"], ["disabled", "", "value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["svgIcon", "half-arrow-down", 1, "half-arrow-icon"], ["for", "make", 1, "text-dark", "text-base"], ["formControlName", "make", 1, "custom-select", "form-control", 3, "change"], ["for", "model", 1, "text-dark", "text-base"], ["formControlName", "model", 1, "custom-select", "form-control"], ["for", "amount", 1, "text-dark", "text-base"], [1, "input-group"], ["type", "number", "placeholder", "Amount...", "formControlName", "amount", 1, "form-control"], ["for", "weight", 1, "text-dark", "text-base"], ["type", "number", "placeholder", "Weight...", "formControlName", "weight", 1, "form-control"], [1, "w-100"], ["for", "comments", 1, "text-dark", "text-base"], ["id", "textarea", "maxlength", "256", "rows", "3", "formControlName", "comments", 1, "form-control"], [1, "d-flex", "w-100", "px-4", "pt-3", "justify-content-between", "mt-3"], [1, "col-5"], ["type", "button", 1, "btn", "w-100", "btn-outline-secondary", 3, "click"], [1, "btn", "w-100", "btn-success"], [1, "form-text", "invalid-feedback"], [3, "value"]], template: function AddVehicleDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add vehicle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddVehicleDialogComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function AddVehicleDialogComponent_Template_input_input_7_listener($event) { return ctx.onSearchVin($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AddVehicleDialogComponent_div_8_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddVehicleDialogComponent_Template_select_change_13_listener($event) { return ctx.onSelectYear($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Select year...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AddVehicleDialogComponent_option_16_Template, 2, 2, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Make");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddVehicleDialogComponent_Template_select_change_22_listener($event) { return ctx.onSelectMake($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Select make...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, AddVehicleDialogComponent_option_25_Template, 2, 2, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Model");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Select model...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, AddVehicleDialogComponent_option_34_Template, 2, 2, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " $ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Weight");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " Kg ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "textarea", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddVehicleDialogComponent_Template_button_click_58_listener() { return ctx.data.onBackToInvoice(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.vehicleForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.vehicleForm.controls.vin.touched && ctx.vehicleForm.controls.vin.invalid)("is-valid", !!ctx.vehicleSearched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.vehicleForm.controls.year.touched && ctx.vehicleForm.controls.year.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.years);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.vehicleForm.controls.make.touched && ctx.vehicleForm.controls.make.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.makes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.vehicleForm.controls.model.touched && ctx.vehicleForm.controls.model.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.models);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.vehicleForm.controls.amount.touched && ctx.vehicleForm.controls.amount.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.vehicleForm.controls.weight.touched && ctx.vehicleForm.controls.weight.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.vehicleForm.controls.comments.touched && ctx.vehicleForm.controls.comments.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"]], styles: [".text-blue-light[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-light-rgb));\n}\n.text-blue-main[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-main-rgb));\n}\n.text-blue-dark[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-dark-rgb));\n}\n.bg-grey-light[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-grey-light-rgb));\n}\n.bg-grey-dark[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-grey-5-rgb));\n}\n.bg-blue-light[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-light-rgb));\n}\n.bg-blue-main[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-main-rgb));\n}\n.bg-blue-dark[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-dark-rgb));\n}\n.text-xs[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.text-base[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.text-lg[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.text-xl[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.text-2xl[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.text-3xl[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.capitalize[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.rounded-xl[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  overflow: hidden;\n}\n.border-primary-1[_ngcontent-%COMP%] {\n  border: 1px solid rgb(var(--palette-blue-main-rgb));\n}\n.border-primary-2[_ngcontent-%COMP%] {\n  border: 2px solid rgb(var(--palette-blue-main-rgb));\n}\n.custom-scroll[_ngcontent-%COMP%] {\n  padding-right: 4px;\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0.5em;\n  border-radius: 5px;\n  background-color: rgb(var(--palette-grey-light-rgb));\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  border: 0.3em solid;\n  border-color: rgb(var(--palette-grey-5-rgb));\n}\n.custom-select-wrapper[_ngcontent-%COMP%] {\n  --select-padding: 12px;\n  --select-icon-width: 14px;\n  --form-icons-color: rgb(var(--palette-primary-rgb));\n  --form-input-background: rgb(var(--palette-grey-0-rgb));\n  position: relative;\n}\n.custom-select-wrapper[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%] {\n  padding: calc(var(--select-padding) / 2) var(--select-padding);\n  -webkit-padding-end: calc(var(--select-padding) + var(--select-icon-width));\n          padding-inline-end: calc(var(--select-padding) + var(--select-icon-width));\n  background: none;\n  background-color: var(--form-input-background);\n}\n.custom-select-wrapper[_ngcontent-%COMP%]   .half-arrow-icon[_ngcontent-%COMP%] {\n  right: var(--select-padding);\n  top: 0px;\n  pointer-events: none;\n  height: 100%;\n  width: var(--select-icon-width);\n  color: var(--form-icons-color);\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9wYWxldHRlcy9zaGFyZWQuc2NzcyIsInNyYy90aGVtZS9wYWxldHRlcy9tb2RlLnNjc3MiLCJzcmMvdGhlbWUvY3VzdG9tLWNsYXNzZXMuc2NzcyIsInNyYy9hcHAvaW52b2ljZS9hZGQtdmVoaWNsZS1kaWFsb2cvYWRkLXZlaGljbGUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL21peGlucy9pbnB1dHMvc2VsZWN0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FETkE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FETkE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FETkE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FETkE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FDTEE7RUFDRSx5Q0FBQTtBQzZDRjtBRDNDQTtFQUNFLHdDQUFBO0FDOENGO0FENUNBO0VBQ0Usd0NBQUE7QUMrQ0Y7QUQzQ0E7RUFDRSxvREFBQTtBQzhDRjtBRDVDQTtFQUNFLGdEQUFBO0FDK0NGO0FEN0NBO0VBQ0Usb0RBQUE7QUNnREY7QUQ5Q0E7RUFDRSxtREFBQTtBQ2lERjtBRC9DQTtFQUNFLG1EQUFBO0FDa0RGO0FEOUNBO0VBQ0Usa0JBQUE7QUNpREY7QUQvQ0E7RUFDRSxtQkFBQTtBQ2tERjtBRGhEQTtFQUNFLGVBQUE7QUNtREY7QURqREE7RUFDRSxtQkFBQTtBQ29ERjtBRGpEQTtFQUNFLGtCQUFBO0FDb0RGO0FEakRBO0VBQ0UsaUJBQUE7QUNvREY7QURqREE7RUFDRSxrQkFBQTtBQ29ERjtBRGpEQTtFQUNFLGdCQUFBO0FDb0RGO0FEbERBO0VBQ0UsZ0JBQUE7QUNxREY7QURsREE7RUFDRSwwQkFBQTtBQ3FERjtBRGxEQTtFQUNFLGVBQUE7QUNxREY7QURsREE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FDcURGO0FEbERBO0VBQ0UsbURBQUE7QUNxREY7QURsREE7RUFDRSxtREFBQTtBQ3FERjtBRGxEQTtFQUNFLGtCQUFBO0FDcURGO0FEbkRBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0RBQUE7QUNzREY7QURsREE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7QUNxREY7QUFsSkE7RUNPRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbURBQUE7RUFDQSx1REFBQTtFQUVBLGtCQUFBO0FEOElGO0FDNUlFO0VBQ0UsOERBQUE7RUFDQSwyRUFBQTtVQUFBLDBFQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4Q0FBQTtBRDhJSjtBQzVJRTtFQUNFLDRCQUFBO0VBQ0EsUUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBRDhJSiIsImZpbGUiOiJzcmMvYXBwL2ludm9pY2UvYWRkLXZlaGljbGUtZGlhbG9nL2FkZC12ZWhpY2xlLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIFNoYXJlZFxuKi9cblxuQGltcG9ydCAncHJlZmVyZW5jZXMnO1xuQGltcG9ydCAnaW50ZXJmYWNlJztcbkBpbXBvcnQgJ21vZGUnO1xuXG4vLyBBbiBhYnN0cmFjdCB3YXkgdG8gcHJvdmlkZSBjb2xvcnMuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGFuIGludGVyZmFjZSB0byBib3RoIFNhc3MgdmFyaWFibGVzIGFuZCBDU1MgNCB2YXJpYWJsZXMgYmFzZWQgY29sb3IgcGFsZXR0ZXMuXG5AZnVuY3Rpb24gcGFsZXR0ZS1jb2xvcigkY29sb3ItbmFtZSwgJGFscGhhOiAxKSB7XG4gIC8vICRjb2xvci1wYWxldHRlLW1vZGUgICAgICAgID0+ICBEZWZpbmVkIGluIG1vZGUuc2Nzc1xuICAvLyAkY2hvb3Nlbi1wYWxldHRlICAgICAgICAgICA9PiAgRGVmaW5lZCBpbiBtb2RlLnNjc3NcbiAgLy8gJGNvbG9yLXBhbGV0dGUtaW50ZXJmYWNlICAgPT4gIERlZmluZWQgaW4gaW50ZXJmYWNlLnNjc3NcbiAgLy8gJGNzczQtdmFyLXByZWZpeCAgICAgICAgICAgPT4gIERlZmluZWQgaW4gcHJlZmVyZW5jZXMuc2Nzc1xuICAvLyAkY3NzNC1jb2xvci1mb3JtYXQgICAgICAgICA9PiAgRGVmaW5lZCBpbiBwcmVmZXJlbmNlcy5zY3NzXG5cbiAgQGlmICgkY29sb3ItcGFsZXR0ZS1tb2RlID09ICdjc3MtNCcpIHtcbiAgICAkcGFsZXR0ZS1yZWZlcmVuY2U6ICRjb2xvci1wYWxldHRlLWludGVyZmFjZTtcblxuICAgICRjb2xvci12YXJpYWJsZS1pbmRleDogaW5kZXgoJHBhbGV0dGUtcmVmZXJlbmNlLCAkY29sb3ItbmFtZSk7XG5cbiAgICBAaWYgKHR5cGVfb2YoJGNvbG9yLXZhcmlhYmxlLWluZGV4KSA9PSAnbnVtYmVyJykge1xuICAgICAgJGNvbG9yLXZhcmlhYmxlLW5hbWU6IG50aCgkcGFsZXR0ZS1yZWZlcmVuY2UsICRjb2xvci12YXJpYWJsZS1pbmRleCk7XG5cbiAgICAgIEBpZiAoJGFscGhhID4gMCBhbmQgJGFscGhhIDwgMSkge1xuICAgICAgICBAcmV0dXJuICN7J3JnYmEodmFyKCcgKyAkY3NzNC12YXItcHJlZml4ICsgJGNvbG9yLXZhcmlhYmxlLW5hbWUgKyAnLScgKyAkY3NzNC1jb2xvci1mb3JtYXQgKycpLCAjeyRhbHBoYX0pJ307XG4gICAgICB9IEBlbHNlIGlmICgkYWxwaGEgPT0gMSkge1xuICAgICAgICBAcmV0dXJuICN7J3JnYih2YXIoJyArICRjc3M0LXZhci1wcmVmaXggKyAkY29sb3ItdmFyaWFibGUtbmFtZSArICctJyArICRjc3M0LWNvbG9yLWZvcm1hdCArICcpKSd9O1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIEBlcnJvciBcIkFscGhhICgjeyRhbHBoYX0pIG11c3QgYmUgYSBudW1iZXJcIjtcbiAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgIEBlcnJvciBcIkNvbG9yICgjeyRjb2xvci1uYW1lfSkgd2FzIG5vdCBmb3VuZCBvbiBDb2xvciBQYWxldHRlIGRlZmluaXRpb24uIE1ha2Ugc3VyZSBpdCdzIGRlZmluZWQgaW4gdGhlIHRoZW1lL3BhbGV0dGVzL2ludGVyZmFjZS5zY3NzIGZpbGVcIjtcbiAgICB9XG4gIH0gQGVsc2UgaWYgKCRjb2xvci1wYWxldHRlLW1vZGUgPT0gJ3Nhc3MnKSB7XG4gICAgJHBhbGV0dGUtcmVmZXJlbmNlOiAkY2hvb3Nlbi1wYWxldHRlO1xuXG4gICAgJGNvbG9yLXZhcmlhYmxlOiBtYXAtZ2V0KCRwYWxldHRlLXJlZmVyZW5jZSwgJGNvbG9yLW5hbWUpO1xuXG4gICAgLy8gQ2hlY2sgaWYgaXQgaXMgYSBTYXNzIGNvbG9yXG4gICAgQGlmICh0eXBlX29mKCRjb2xvci12YXJpYWJsZSkgPT0gJ2NvbG9yJykge1xuICAgICAgQGlmICgkYWxwaGEgPiAwIGFuZCAkYWxwaGEgPCAxKSB7XG4gICAgICAgIEByZXR1cm4gcmdiYSgkY29sb3ItdmFyaWFibGUsICRhbHBoYSk7XG4gICAgICB9IEBlbHNlIGlmICgkYWxwaGEgPT0gMSkge1xuICAgICAgICBAcmV0dXJuICRjb2xvci12YXJpYWJsZTtcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICBAZXJyb3IgXCJBbHBoYSAoI3skYWxwaGF9KSBtdXN0IGJlIGEgbnVtYmVyXCI7XG4gICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICBAZXJyb3IgXCJDb2xvciAoI3skY29sb3ItdmFyaWFibGV9KSBpcyBub3QgYSBTYXNzIGNvbG9yXCI7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAZXJyb3IgJ05vIENvbG9yIFBhbGV0dGUgbW9kZSBzZWxlY3RlZCBpbiB0aGVtZS9wYWxldHRlcy9wcmVmZXJlbmNlcy5zY3NzJztcbiAgfVxufVxuIiwiLypcbiAgQ1NTIDQgTW9kZVxuKi9cbiRjb2xvci1wYWxldHRlLW1vZGU6ICdjc3MtNCc7XG5cblxuLypcbiAgU2FzcyBNb2RlXG4qL1xuLy8gQGltcG9ydCAnY29yZSc7XG4vL1xuLy8gJGNvbG9yLXBhbGV0dGUtbW9kZTogJ3Nhc3MnO1xuLy9cbi8vIC8vIEltcG9ydCB0aGUgZGVmaW5pdGlvbnMgb2YgdGhlIHBhbGV0dGUgeW91IHdhbnQgdG8gdXNlXG4vLyBAaW1wb3J0ICdwYWxldHRlLTEvZGVmaW5pdGlvbnMnO1xuLy8gLy8gQGltcG9ydCAncGFsZXR0ZS0yL2RlZmluaXRpb25zJztcbi8vXG4vLyAvLyBBc3NpZ24gYSBwYXJ0aWN1bGFyIENvbG9yIFBhbGV0dGUgdG8gdGhlICdjaG9vc2VuLXBhbGV0dGUnIHBvaW50ZXIuXG4vLyAvLyAkY2hvb3Nlbi1wYWxldHRlIHdpbGwgYmUgYSBTYXNzIG1hcCBwb2ludGluZyB0byBhbm90aGVyIGNvbG9yIHBhbGV0dGUgU2FzcyBtYXBcbi8vICRjaG9vc2VuLXBhbGV0dGU6IGJ1aWxkU2Fzc1BhbGV0dGUoJHBhbGV0dGUtMSk7XG4vLyAvLyAkY2hvb3Nlbi1wYWxldHRlOiBidWlsZFNhc3NQYWxldHRlKCRwYWxldHRlLTIpO1xuIiwiLy9jb2xvclxuLnRleHQtYmx1ZS1saWdodCB7XG4gIGNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJibHVlLWxpZ2h0XCIpfTtcbn1cbi50ZXh0LWJsdWUtbWFpbiB7XG4gIGNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJibHVlLW1haW5cIil9O1xufVxuLnRleHQtYmx1ZS1kYXJrIHtcbiAgY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtZGFya1wiKX07XG59XG5cbi8vYmFja2dyb3VuZFxuLmJnLWdyZXktbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJncmV5LWxpZ2h0XCIpfTtcbn1cbi5iZy1ncmV5LWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJncmV5LTVcIil9O1xufVxuLmJnLWJsdWUtbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJibHVlLWxpZ2h0XCIpfTtcbn1cbi5iZy1ibHVlLW1haW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJibHVlLW1haW5cIil9O1xufVxuLmJnLWJsdWUtZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtZGFya1wiKX07XG59XG5cbi8vdGV4dFxuLnRleHQteHMge1xuICBmb250LXNpemU6IDAuNzVyZW07XG59XG4udGV4dC1zbSB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG59XG4udGV4dC1iYXNlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLnRleHQtbGcge1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xufVxuXG4udGV4dC14bCB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuLnRleHQtMnhsIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi50ZXh0LTN4bCB7XG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcbn1cblxuLmZvbnQtc2VtaWJvbGQge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmZvbnQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5jYXBpdGFsaXplIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5jdXJzb3ItcG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJvdW5kZWQteGwge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYm9yZGVyLXByaW1hcnktMSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbWFpblwiKX07XG59XG5cbi5ib3JkZXItcHJpbWFyeS0yIHtcbiAgYm9yZGVyOiAycHggc29saWQgI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1tYWluXCIpfTtcbn1cblxuLmN1c3RvbS1zY3JvbGx7XG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcbn1cbi5jdXN0b20tc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAuNWVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImdyZXktbGlnaHRcIil9O1xufVxuXG5cbi5jdXN0b20tc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAuM2VtIHNvbGlkO1xuICBib3JkZXItY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImdyZXktNVwiKX07XG59XG4iLCJAaW1wb3J0IFwic2hhcmVkXCI7XG5cbi5jdXN0b20tc2VsZWN0LXdyYXBwZXIge1xuICBAaW5jbHVkZSBib290c3RyYXAtc2VsZWN0LXN0eWxlcygpO1xufVxuXG4iLCJAbWl4aW4gbWF0ZXJpYWwtc2VsZWN0LXN0eWxlcygpIHtcbiAgLy8gbWF0ZXJpYWwgc2VsZWN0IHN0eWxlc1xuICAubWF0LXNlbGVjdC1wYW5lbCB7XG4gICAgQGluY2x1ZGUgbWF0ZXJpYWwtYXV0b2NvbXBsZXRlLXN0eWxlcygpO1xuICB9XG59XG5cbkBtaXhpbiBib290c3RyYXAtc2VsZWN0LXN0eWxlcygpIHtcbiAgLy8gc2VsZWN0IGNvbXBvbmVudCB3aXRoIGN1c3RvbSBpY29uXG4gIC0tc2VsZWN0LXBhZGRpbmc6IDEycHg7XG4gIC0tc2VsZWN0LWljb24td2lkdGg6IDE0cHg7XG4gIC0tZm9ybS1pY29ucy1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdwcmltYXJ5Jyl9O1xuICAtLWZvcm0taW5wdXQtYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKCdncmV5LTAnKX07XG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC5jdXN0b20tc2VsZWN0IHtcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXNlbGVjdC1wYWRkaW5nKSAvIDIpIHZhcigtLXNlbGVjdC1wYWRkaW5nKTtcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IGNhbGModmFyKC0tc2VsZWN0LXBhZGRpbmcpICsgdmFyKC0tc2VsZWN0LWljb24td2lkdGgpKTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm0taW5wdXQtYmFja2dyb3VuZCk7XG4gIH1cbiAgLmhhbGYtYXJyb3ctaWNvbiB7XG4gICAgcmlnaHQ6IHZhcigtLXNlbGVjdC1wYWRkaW5nKTtcbiAgICB0b3A6IDBweDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IHZhcigtLXNlbGVjdC1pY29uLXdpZHRoKTtcbiAgICBjb2xvcjogdmFyKC0tZm9ybS1pY29ucy1jb2xvcik7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddVehicleDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-add-vehicle-dialog",
                templateUrl: "./add-vehicle-dialog.component.html",
                styleUrls: ["./add-vehicle-dialog.component.scss"],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_business_services_vehicle_service__WEBPACK_IMPORTED_MODULE_5__["VehicleService"] }, { type: src_app_business_state_invoice_state_service__WEBPACK_IMPORTED_MODULE_6__["InvoicesStateService"] }, { type: src_app_shared_notifications_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }, { type: src_app_business_services_rate_service__WEBPACK_IMPORTED_MODULE_8__["RateService"] }]; }, null); })();


/***/ }),

/***/ "Htyv":
/*!********************************************************************!*\
  !*** ./src/app/invoice/bill-to-dialog/bill-to-dialog.component.ts ***!
  \********************************************************************/
/*! exports provided: BillToDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillToDialogComponent", function() { return BillToDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_business_services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/business/services/customer.service */ "Sdjb");
/* harmony import */ var src_app_business_state_invoice_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/business/state/invoice-state.service */ "W7lO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function BillToDialogComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No customers found");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BillToDialogComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BillToDialogComponent_tr_17_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const customer_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.onSelect(customer_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customer_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](customer_r4.name);
} }
function BillToDialogComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No customers found");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BillToDialogComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BillToDialogComponent_tr_26_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const customer_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.onSelect(customer_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customer_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](customer_r7.name);
} }
class BillToDialogComponent {
    constructor(dialogRef, data, customerService, invoicesState) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.customerService = customerService;
        this.invoicesState = invoicesState;
        this.subscriptions = [];
        this.foundCustomers = [];
        this.mostRecentsCustomers = [];
    }
    backToInvoice() {
        this.data.onBackToInvoice();
    }
    ngOnInit() {
        const sub = this.invoicesState.mostRecentsCustomers$.subscribe((data) => {
            this.mostRecentsCustomers = data;
        });
        this.subscriptions.push(sub);
    }
    searchCustomers(e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const query = e.target.value;
            this.foundCustomers = yield this.customerService.searchCustomers(query);
        });
    }
    onSelect(customer) {
        if (this.data.action === "edit") {
            this.invoicesState.setSelectedInvoice({ bill_to: customer });
        }
        else {
            this.invoicesState.setNewInvoice({ bill_to: customer });
        }
        this.data.onBackToInvoice();
    }
    ngOnDestroy() {
        this.subscriptions.forEach((sub) => sub.unsubscribe());
    }
}
BillToDialogComponent.ɵfac = function BillToDialogComponent_Factory(t) { return new (t || BillToDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_business_services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_business_state_invoice_state_service__WEBPACK_IMPORTED_MODULE_4__["InvoicesStateService"])); };
BillToDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BillToDialogComponent, selectors: [["app-bill-to-dialog"]], decls: 30, vars: 4, consts: [[1, "input-group", "pt-3"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fas", "fa-search"], ["type", "text", "placeholder", "Search customer...", 1, "form-control", 3, "input"], [1, "w-100", "text-secondary", "text-sm"], [1, "w-100", "my-3", "table-wrapper", "table-responsive", "custom-scroll"], [1, "table", "table-sm", "table-bordered"], ["scope", "col"], ["class", "w-100 text-center", 4, "ngIf"], [3, "click", 4, "ngFor", "ngForOf"], [1, "w-100", "mt-3"], [1, "w-100", "btn", "btn-outline-primary", 3, "click"], [1, "w-100", "text-center"], [1, "border", "py-2"], [3, "click"]], template: function BillToDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Bill to");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function BillToDialogComponent_Template_input_input_6_listener($event) { return ctx.searchCustomers($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Min 3 characters");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Customer list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, BillToDialogComponent_div_16_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, BillToDialogComponent_tr_17_Template, 3, 1, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Most recent");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, BillToDialogComponent_div_25_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, BillToDialogComponent_tr_26_Template, 3, 1, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BillToDialogComponent_Template_button_click_28_listener() { return ctx.backToInvoice(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Back to invoice");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.foundCustomers == null ? null : ctx.foundCustomers.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.foundCustomers);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.mostRecentsCustomers == null ? null : ctx.mostRecentsCustomers.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.mostRecentsCustomers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".text-blue-light[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-light-rgb));\n}\n.text-blue-main[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-main-rgb));\n}\n.text-blue-dark[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-dark-rgb));\n}\n.bg-grey-light[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-grey-light-rgb));\n}\n.bg-grey-dark[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-grey-5-rgb));\n}\n.bg-blue-light[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-light-rgb));\n}\n.bg-blue-main[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-main-rgb));\n}\n.bg-blue-dark[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-dark-rgb));\n}\n.text-xs[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.text-base[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.text-lg[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.text-xl[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.text-2xl[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.text-3xl[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.capitalize[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.rounded-xl[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  overflow: hidden;\n}\n.border-primary-1[_ngcontent-%COMP%] {\n  border: 1px solid rgb(var(--palette-blue-main-rgb));\n}\n.border-primary-2[_ngcontent-%COMP%] {\n  border: 2px solid rgb(var(--palette-blue-main-rgb));\n}\n.custom-scroll[_ngcontent-%COMP%] {\n  padding-right: 4px;\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0.5em;\n  border-radius: 5px;\n  background-color: rgb(var(--palette-grey-light-rgb));\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  border: 0.3em solid;\n  border-color: rgb(var(--palette-grey-5-rgb));\n}\n.custom-select-wrapper[_ngcontent-%COMP%] {\n  --select-padding: 12px;\n  --select-icon-width: 14px;\n  --form-icons-color: rgb(var(--palette-primary-rgb));\n  --form-input-background: rgb(var(--palette-grey-0-rgb));\n  position: relative;\n}\n.custom-select-wrapper[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%] {\n  padding: calc(var(--select-padding) / 2) var(--select-padding);\n  -webkit-padding-end: calc(var(--select-padding) + var(--select-icon-width));\n          padding-inline-end: calc(var(--select-padding) + var(--select-icon-width));\n  background: none;\n  background-color: var(--form-input-background);\n}\n.custom-select-wrapper[_ngcontent-%COMP%]   .half-arrow-icon[_ngcontent-%COMP%] {\n  right: var(--select-padding);\n  top: 0px;\n  pointer-events: none;\n  height: 100%;\n  width: var(--select-icon-width);\n  color: var(--form-icons-color);\n  position: absolute;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  --table-header-color: rgb(var(--palette-white-rgb));\n  --table-header-background: rgb(var(--palette-blue-main-rgb));\n  --table-text-color: rgb(var(--palette-grey-9-rgb));\n  --table-row-hover-background: rgb(var(--palette-blue-light-rgb));\n  --page-background: rgb(var(--palette-white-rgb));\n  --page-spacing: 10px;\n  max-height: 300px;\n  overflow-y: auto;\n  position: relative;\n  text-align: center;\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 672px;\n  background: none;\n  border-collapse: collapse;\n  border-radius: 1em 1em 0 0;\n  overflow: hidden;\n}\n.table-wrapper[_ngcontent-%COMP%]   table.table-sm[_ngcontent-%COMP%] {\n  min-width: 370px;\n}\n.table-wrapper[_ngcontent-%COMP%]   table.table-sm[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%] {\n  padding: var(--page-spacing);\n}\n.table-wrapper[_ngcontent-%COMP%]   table.table-sm[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n  padding: var(--page-spacing);\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: var(--table-header-color);\n  background-color: var(--table-header-background);\n  font-size: 13px;\n  font-weight: 700;\n}\n@media (min-width: 821px) {\n  .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n  border-bottom-style: none;\n  padding: calc(var(--page-spacing));\n}\n@media (min-width: 821px) {\n  .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n    padding: calc(var(--page-spacing) * 2);\n  }\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: var(--table-text-color);\n  line-height: 1.6;\n  font-size: 13px;\n}\n@media (min-width: 821px) {\n  .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    font-size: 0.9em;\n  }\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%] {\n  border-bottom-style: none;\n  padding: var(--page-spacing) calc(var(--page-spacing));\n}\n@media (min-width: 821px) {\n  .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%] {\n    padding: calc(var(--page-spacing) * 2);\n  }\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%] {\n  height: auto;\n  transition: background-color 0.5s;\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]:hover {\n  background-color: var(--table-row-hover-background);\n  transition: background-color 0.5s;\n}\n.table-wrapper[_ngcontent-%COMP%]     [mat-table] .mat-sort-header-arrow {\n  color: var(--table-header-color);\n}\n.table-wrapper[_ngcontent-%COMP%]   mat-paginator[_ngcontent-%COMP%], .table-wrapper[_ngcontent-%COMP%]   .table-width[_ngcontent-%COMP%] {\n  min-width: 672px;\n  width: 100%;\n}\n.table-wrapper[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n  border: none;\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  min-width: unset !important;\n}\n.table-wrapper[_ngcontent-%COMP%]   .table-sm[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.8rem;\n}\n.table-wrapper[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: rgb(var(--palette-blue-light-rgb));\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9wYWxldHRlcy9zaGFyZWQuc2NzcyIsInNyYy90aGVtZS9wYWxldHRlcy9tb2RlLnNjc3MiLCJzcmMvdGhlbWUvY3VzdG9tLWNsYXNzZXMuc2NzcyIsInNyYy9hcHAvaW52b2ljZS9iaWxsLXRvLWRpYWxvZy9iaWxsLXRvLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9taXhpbnMvaW5wdXRzL3NlbGVjdC5zY3NzIiwic3JjL3RoZW1lL21peGlucy90YWJsZS1iYXNpYy1zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUROQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUROQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUROQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUROQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUNMQTtFQUNFLHlDQUFBO0FDNkNGO0FEM0NBO0VBQ0Usd0NBQUE7QUM4Q0Y7QUQ1Q0E7RUFDRSx3Q0FBQTtBQytDRjtBRDNDQTtFQUNFLG9EQUFBO0FDOENGO0FENUNBO0VBQ0UsZ0RBQUE7QUMrQ0Y7QUQ3Q0E7RUFDRSxvREFBQTtBQ2dERjtBRDlDQTtFQUNFLG1EQUFBO0FDaURGO0FEL0NBO0VBQ0UsbURBQUE7QUNrREY7QUQ5Q0E7RUFDRSxrQkFBQTtBQ2lERjtBRC9DQTtFQUNFLG1CQUFBO0FDa0RGO0FEaERBO0VBQ0UsZUFBQTtBQ21ERjtBRGpEQTtFQUNFLG1CQUFBO0FDb0RGO0FEakRBO0VBQ0Usa0JBQUE7QUNvREY7QURqREE7RUFDRSxpQkFBQTtBQ29ERjtBRGpEQTtFQUNFLGtCQUFBO0FDb0RGO0FEakRBO0VBQ0UsZ0JBQUE7QUNvREY7QURsREE7RUFDRSxnQkFBQTtBQ3FERjtBRGxEQTtFQUNFLDBCQUFBO0FDcURGO0FEbERBO0VBQ0UsZUFBQTtBQ3FERjtBRGxEQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUNxREY7QURsREE7RUFDRSxtREFBQTtBQ3FERjtBRGxEQTtFQUNFLG1EQUFBO0FDcURGO0FEbERBO0VBQ0Usa0JBQUE7QUNxREY7QURuREE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvREFBQTtBQ3NERjtBRGxEQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtBQ3FERjtBQWxKQTtFQ09FLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxtREFBQTtFQUNBLHVEQUFBO0VBRUEsa0JBQUE7QUQ4SUY7QUM1SUU7RUFDRSw4REFBQTtFQUNBLDJFQUFBO1VBQUEsMEVBQUE7RUFDQSxnQkFBQTtFQUNBLDhDQUFBO0FEOElKO0FDNUlFO0VBQ0UsNEJBQUE7RUFDQSxRQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FEOElKO0FBcktBO0VFSEUsbURBQUE7RUFDQSw0REFBQTtFQUNBLGtEQUFBO0VBQ0EsZ0VBQUE7RUFFQSxnREFBQTtFQUNBLG9CQUFBO0VGREEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUE2S0Y7QUU3S0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBRitLSjtBRTdLSTtFQUNFLGdCQUFBO0FGK0tOO0FFNUtRO0VBQ0UsNEJBQUE7QUY4S1Y7QUUxS1E7RUFDRSw0QkFBQTtBRjRLVjtBRXZLSTtFQUNFLGdDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUZ5S047QUV4S007RUFMRjtJQU1JLGVBQUE7RUYyS047QUFDRjtBRXpLTTtFQUNFLHlCQUFBO0VBQ0Esa0NBQUE7QUYyS1I7QUUxS1E7RUFIRjtJQUlJLHNDQUFBO0VGNktSO0FBQ0Y7QUV6S0k7RUFDRSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBRjJLTjtBRTFLTTtFQUpGO0lBS0ksZ0JBQUE7RUY2S047QUFDRjtBRTVLTTtFQUNFLHlCQUFBO0VBQ0Esc0RBQUE7QUY4S1I7QUU3S1E7RUFIRjtJQUlJLHNDQUFBO0VGZ0xSO0FBQ0Y7QUU1S0k7RUFDRSxZQUFBO0VBQ0EsaUNBQUE7QUY4S047QUU1S007RUFDRSwyQkFBQTtFQUNBLDhCQUFBO0FGOEtSO0FFNUtNO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtBRjhLUjtBRTNLTTtFQUNFLG1EQUFBO0VBQ0EsaUNBQUE7QUY2S1I7QUV2S0k7RUFDRSxnQ0FBQTtBRnlLTjtBRXJLRTs7RUFFRSxnQkFBQTtFQUNBLFdBQUE7QUZ1S0o7QUEzUEU7RUFDRSxZQUFBO0FBNlBKO0FBMVBFO0VBQ0UsMkJBQUE7QUE0UEo7QUF6UEk7RUFDRSxlQUFBO0FBMlBOO0FBeFBFO0VBQ0Usb0RBQUE7RUFDQSxlQUFBO0FBMFBKIiwiZmlsZSI6InNyYy9hcHAvaW52b2ljZS9iaWxsLXRvLWRpYWxvZy9iaWxsLXRvLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIFNoYXJlZFxuKi9cblxuQGltcG9ydCAncHJlZmVyZW5jZXMnO1xuQGltcG9ydCAnaW50ZXJmYWNlJztcbkBpbXBvcnQgJ21vZGUnO1xuXG4vLyBBbiBhYnN0cmFjdCB3YXkgdG8gcHJvdmlkZSBjb2xvcnMuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGFuIGludGVyZmFjZSB0byBib3RoIFNhc3MgdmFyaWFibGVzIGFuZCBDU1MgNCB2YXJpYWJsZXMgYmFzZWQgY29sb3IgcGFsZXR0ZXMuXG5AZnVuY3Rpb24gcGFsZXR0ZS1jb2xvcigkY29sb3ItbmFtZSwgJGFscGhhOiAxKSB7XG4gIC8vICRjb2xvci1wYWxldHRlLW1vZGUgICAgICAgID0+ICBEZWZpbmVkIGluIG1vZGUuc2Nzc1xuICAvLyAkY2hvb3Nlbi1wYWxldHRlICAgICAgICAgICA9PiAgRGVmaW5lZCBpbiBtb2RlLnNjc3NcbiAgLy8gJGNvbG9yLXBhbGV0dGUtaW50ZXJmYWNlICAgPT4gIERlZmluZWQgaW4gaW50ZXJmYWNlLnNjc3NcbiAgLy8gJGNzczQtdmFyLXByZWZpeCAgICAgICAgICAgPT4gIERlZmluZWQgaW4gcHJlZmVyZW5jZXMuc2Nzc1xuICAvLyAkY3NzNC1jb2xvci1mb3JtYXQgICAgICAgICA9PiAgRGVmaW5lZCBpbiBwcmVmZXJlbmNlcy5zY3NzXG5cbiAgQGlmICgkY29sb3ItcGFsZXR0ZS1tb2RlID09ICdjc3MtNCcpIHtcbiAgICAkcGFsZXR0ZS1yZWZlcmVuY2U6ICRjb2xvci1wYWxldHRlLWludGVyZmFjZTtcblxuICAgICRjb2xvci12YXJpYWJsZS1pbmRleDogaW5kZXgoJHBhbGV0dGUtcmVmZXJlbmNlLCAkY29sb3ItbmFtZSk7XG5cbiAgICBAaWYgKHR5cGVfb2YoJGNvbG9yLXZhcmlhYmxlLWluZGV4KSA9PSAnbnVtYmVyJykge1xuICAgICAgJGNvbG9yLXZhcmlhYmxlLW5hbWU6IG50aCgkcGFsZXR0ZS1yZWZlcmVuY2UsICRjb2xvci12YXJpYWJsZS1pbmRleCk7XG5cbiAgICAgIEBpZiAoJGFscGhhID4gMCBhbmQgJGFscGhhIDwgMSkge1xuICAgICAgICBAcmV0dXJuICN7J3JnYmEodmFyKCcgKyAkY3NzNC12YXItcHJlZml4ICsgJGNvbG9yLXZhcmlhYmxlLW5hbWUgKyAnLScgKyAkY3NzNC1jb2xvci1mb3JtYXQgKycpLCAjeyRhbHBoYX0pJ307XG4gICAgICB9IEBlbHNlIGlmICgkYWxwaGEgPT0gMSkge1xuICAgICAgICBAcmV0dXJuICN7J3JnYih2YXIoJyArICRjc3M0LXZhci1wcmVmaXggKyAkY29sb3ItdmFyaWFibGUtbmFtZSArICctJyArICRjc3M0LWNvbG9yLWZvcm1hdCArICcpKSd9O1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIEBlcnJvciBcIkFscGhhICgjeyRhbHBoYX0pIG11c3QgYmUgYSBudW1iZXJcIjtcbiAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgIEBlcnJvciBcIkNvbG9yICgjeyRjb2xvci1uYW1lfSkgd2FzIG5vdCBmb3VuZCBvbiBDb2xvciBQYWxldHRlIGRlZmluaXRpb24uIE1ha2Ugc3VyZSBpdCdzIGRlZmluZWQgaW4gdGhlIHRoZW1lL3BhbGV0dGVzL2ludGVyZmFjZS5zY3NzIGZpbGVcIjtcbiAgICB9XG4gIH0gQGVsc2UgaWYgKCRjb2xvci1wYWxldHRlLW1vZGUgPT0gJ3Nhc3MnKSB7XG4gICAgJHBhbGV0dGUtcmVmZXJlbmNlOiAkY2hvb3Nlbi1wYWxldHRlO1xuXG4gICAgJGNvbG9yLXZhcmlhYmxlOiBtYXAtZ2V0KCRwYWxldHRlLXJlZmVyZW5jZSwgJGNvbG9yLW5hbWUpO1xuXG4gICAgLy8gQ2hlY2sgaWYgaXQgaXMgYSBTYXNzIGNvbG9yXG4gICAgQGlmICh0eXBlX29mKCRjb2xvci12YXJpYWJsZSkgPT0gJ2NvbG9yJykge1xuICAgICAgQGlmICgkYWxwaGEgPiAwIGFuZCAkYWxwaGEgPCAxKSB7XG4gICAgICAgIEByZXR1cm4gcmdiYSgkY29sb3ItdmFyaWFibGUsICRhbHBoYSk7XG4gICAgICB9IEBlbHNlIGlmICgkYWxwaGEgPT0gMSkge1xuICAgICAgICBAcmV0dXJuICRjb2xvci12YXJpYWJsZTtcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICBAZXJyb3IgXCJBbHBoYSAoI3skYWxwaGF9KSBtdXN0IGJlIGEgbnVtYmVyXCI7XG4gICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICBAZXJyb3IgXCJDb2xvciAoI3skY29sb3ItdmFyaWFibGV9KSBpcyBub3QgYSBTYXNzIGNvbG9yXCI7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAZXJyb3IgJ05vIENvbG9yIFBhbGV0dGUgbW9kZSBzZWxlY3RlZCBpbiB0aGVtZS9wYWxldHRlcy9wcmVmZXJlbmNlcy5zY3NzJztcbiAgfVxufVxuIiwiLypcbiAgQ1NTIDQgTW9kZVxuKi9cbiRjb2xvci1wYWxldHRlLW1vZGU6ICdjc3MtNCc7XG5cblxuLypcbiAgU2FzcyBNb2RlXG4qL1xuLy8gQGltcG9ydCAnY29yZSc7XG4vL1xuLy8gJGNvbG9yLXBhbGV0dGUtbW9kZTogJ3Nhc3MnO1xuLy9cbi8vIC8vIEltcG9ydCB0aGUgZGVmaW5pdGlvbnMgb2YgdGhlIHBhbGV0dGUgeW91IHdhbnQgdG8gdXNlXG4vLyBAaW1wb3J0ICdwYWxldHRlLTEvZGVmaW5pdGlvbnMnO1xuLy8gLy8gQGltcG9ydCAncGFsZXR0ZS0yL2RlZmluaXRpb25zJztcbi8vXG4vLyAvLyBBc3NpZ24gYSBwYXJ0aWN1bGFyIENvbG9yIFBhbGV0dGUgdG8gdGhlICdjaG9vc2VuLXBhbGV0dGUnIHBvaW50ZXIuXG4vLyAvLyAkY2hvb3Nlbi1wYWxldHRlIHdpbGwgYmUgYSBTYXNzIG1hcCBwb2ludGluZyB0byBhbm90aGVyIGNvbG9yIHBhbGV0dGUgU2FzcyBtYXBcbi8vICRjaG9vc2VuLXBhbGV0dGU6IGJ1aWxkU2Fzc1BhbGV0dGUoJHBhbGV0dGUtMSk7XG4vLyAvLyAkY2hvb3Nlbi1wYWxldHRlOiBidWlsZFNhc3NQYWxldHRlKCRwYWxldHRlLTIpO1xuIiwiLy9jb2xvclxuLnRleHQtYmx1ZS1saWdodCB7XG4gIGNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJibHVlLWxpZ2h0XCIpfTtcbn1cbi50ZXh0LWJsdWUtbWFpbiB7XG4gIGNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJibHVlLW1haW5cIil9O1xufVxuLnRleHQtYmx1ZS1kYXJrIHtcbiAgY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtZGFya1wiKX07XG59XG5cbi8vYmFja2dyb3VuZFxuLmJnLWdyZXktbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJncmV5LWxpZ2h0XCIpfTtcbn1cbi5iZy1ncmV5LWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJncmV5LTVcIil9O1xufVxuLmJnLWJsdWUtbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJibHVlLWxpZ2h0XCIpfTtcbn1cbi5iZy1ibHVlLW1haW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJibHVlLW1haW5cIil9O1xufVxuLmJnLWJsdWUtZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtZGFya1wiKX07XG59XG5cbi8vdGV4dFxuLnRleHQteHMge1xuICBmb250LXNpemU6IDAuNzVyZW07XG59XG4udGV4dC1zbSB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG59XG4udGV4dC1iYXNlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLnRleHQtbGcge1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xufVxuXG4udGV4dC14bCB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuLnRleHQtMnhsIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi50ZXh0LTN4bCB7XG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcbn1cblxuLmZvbnQtc2VtaWJvbGQge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmZvbnQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5jYXBpdGFsaXplIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5jdXJzb3ItcG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJvdW5kZWQteGwge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYm9yZGVyLXByaW1hcnktMSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbWFpblwiKX07XG59XG5cbi5ib3JkZXItcHJpbWFyeS0yIHtcbiAgYm9yZGVyOiAycHggc29saWQgI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1tYWluXCIpfTtcbn1cblxuLmN1c3RvbS1zY3JvbGx7XG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcbn1cbi5jdXN0b20tc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAuNWVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImdyZXktbGlnaHRcIil9O1xufVxuXG5cbi5jdXN0b20tc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAuM2VtIHNvbGlkO1xuICBib3JkZXItY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImdyZXktNVwiKX07XG59XG4iLCJAaW1wb3J0IFwic2hhcmVkXCI7XG5cbi5jdXN0b20tc2VsZWN0LXdyYXBwZXIge1xuICBAaW5jbHVkZSBib290c3RyYXAtc2VsZWN0LXN0eWxlcygpO1xufVxuXG4udGFibGUtd3JhcHBlciB7XG4gIEBpbmNsdWRlIHRhYmxlLWJhc2ljLXN0eWxlcygpO1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXG4gIHRoLm1hdC1oZWFkZXItY2VsbCB7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG5cbiAgdGFibGV7XG4gICAgbWluLXdpZHRoOiB1bnNldCFpbXBvcnRhbnQ7XG4gIH1cbiAgLnRhYmxlLXNte1xuICAgIHRoe1xuICAgICAgcGFkZGluZzouOHJlbVxuICAgIH1cbiAgfVxuICB0cjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ2JsdWUtbGlnaHQnKX07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbn1cblxuIiwiQG1peGluIG1hdGVyaWFsLXNlbGVjdC1zdHlsZXMoKSB7XG4gIC8vIG1hdGVyaWFsIHNlbGVjdCBzdHlsZXNcbiAgLm1hdC1zZWxlY3QtcGFuZWwge1xuICAgIEBpbmNsdWRlIG1hdGVyaWFsLWF1dG9jb21wbGV0ZS1zdHlsZXMoKTtcbiAgfVxufVxuXG5AbWl4aW4gYm9vdHN0cmFwLXNlbGVjdC1zdHlsZXMoKSB7XG4gIC8vIHNlbGVjdCBjb21wb25lbnQgd2l0aCBjdXN0b20gaWNvblxuICAtLXNlbGVjdC1wYWRkaW5nOiAxMnB4O1xuICAtLXNlbGVjdC1pY29uLXdpZHRoOiAxNHB4O1xuICAtLWZvcm0taWNvbnMtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcigncHJpbWFyeScpfTtcbiAgLS1mb3JtLWlucHV0LWJhY2tncm91bmQ6ICN7cGFsZXR0ZS1jb2xvcignZ3JleS0wJyl9O1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAuY3VzdG9tLXNlbGVjdCB7XG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1zZWxlY3QtcGFkZGluZykgLyAyKSB2YXIoLS1zZWxlY3QtcGFkZGluZyk7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiBjYWxjKHZhcigtLXNlbGVjdC1wYWRkaW5nKSArIHZhcigtLXNlbGVjdC1pY29uLXdpZHRoKSk7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtLWlucHV0LWJhY2tncm91bmQpO1xuICB9XG4gIC5oYWxmLWFycm93LWljb24ge1xuICAgIHJpZ2h0OiB2YXIoLS1zZWxlY3QtcGFkZGluZyk7XG4gICAgdG9wOiAwcHg7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiB2YXIoLS1zZWxlY3QtaWNvbi13aWR0aCk7XG4gICAgY29sb3I6IHZhcigtLWZvcm0taWNvbnMtY29sb3IpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxufVxuIiwiQGltcG9ydCBcInBhbGV0dGVzL3NoYXJlZFwiO1xuXG5AbWl4aW4gdGFibGUtYmFzaWMtc3R5bGVzKCkge1xuICAtLXRhYmxlLWhlYWRlci1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwid2hpdGVcIil9O1xuICAtLXRhYmxlLWhlYWRlci1iYWNrZ3JvdW5kOiAje3BhbGV0dGUtY29sb3IoXCJibHVlLW1haW5cIil9O1xuICAtLXRhYmxlLXRleHQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImdyZXktOVwiKX07XG4gIC0tdGFibGUtcm93LWhvdmVyLWJhY2tncm91bmQ6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbGlnaHRcIil9O1xuXG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiAje3BhbGV0dGUtY29sb3IoXCJ3aGl0ZVwiKX07XG4gIC0tcGFnZS1zcGFjaW5nOiAxMHB4O1xuXG4gIHRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDY3MnB4O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBib3JkZXItcmFkaXVzOiAxZW0gMWVtIDAgMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgJi50YWJsZS1zbSB7XG4gICAgICBtaW4td2lkdGg6IDM3MHB4O1xuXG4gICAgICB0ZCB7XG4gICAgICAgICYubWF0LWNlbGwge1xuICAgICAgICAgIHBhZGRpbmc6IHZhcigtLXBhZ2Utc3BhY2luZyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoIHtcbiAgICAgICAgJi5tYXQtaGVhZGVyLWNlbGwge1xuICAgICAgICAgIHBhZGRpbmc6IHZhcigtLXBhZ2Utc3BhY2luZyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aCB7XG4gICAgICBjb2xvcjogdmFyKC0tdGFibGUtaGVhZGVyLWNvbG9yKTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhYmxlLWhlYWRlci1iYWNrZ3JvdW5kKTtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogODIxcHgpIHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgfVxuXG4gICAgICAmLm1hdC1oZWFkZXItY2VsbCB7XG4gICAgICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSk7XG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA4MjFweCkge1xuICAgICAgICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGQge1xuICAgICAgY29sb3I6IHZhcigtLXRhYmxlLXRleHQtY29sb3IpO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA4MjFweCkge1xuICAgICAgICBmb250LXNpemU6LjllbTtcbiAgICAgIH1cbiAgICAgICYubWF0LWNlbGwge1xuICAgICAgICBib3JkZXItYm90dG9tLXN0eWxlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLXNwYWNpbmcpIGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSk7XG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA4MjFweCkge1xuICAgICAgICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdHIubWF0LXJvdyB7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXM7XG5cbiAgICAgIHRkOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA2cHg7XG4gICAgICB9XG4gICAgICB0ZDpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDZweDtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhYmxlLXJvdy1ob3Zlci1iYWNrZ3JvdW5kKTtcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIDo6bmctZGVlcCBbbWF0LXRhYmxlXSB7XG4gICAgLm1hdC1zb3J0LWhlYWRlci1hcnJvdyB7XG4gICAgICBjb2xvcjogdmFyKC0tdGFibGUtaGVhZGVyLWNvbG9yKTtcbiAgICB9XG4gIH1cblxuICBtYXQtcGFnaW5hdG9yLFxuICAudGFibGUtd2lkdGgge1xuICAgIG1pbi13aWR0aDogNjcycHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuQG1peGluIHRhYmxlLXBhZ2luYXRvci1zdHlsZXMoKSB7XG4gIC0tcGFnaW5hdG9yLWJhY2tncm91bmQ6ICN7cGFsZXR0ZS1jb2xvcihcImdyZXktMFwiKX07XG4gIC0tcGFnaW5hdG9yLXRleHQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImdyZXktNVwiKX07XG4gIC0tcGFnaW5hdG9yLWNvbnRyb2xzLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJwcmltYXJ5LWRhcmtcIil9O1xuICAtLXBhZ2luYXRvci1kaXNhYmxlZC1jb250cm9scy1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwicHJpbWFyeS1kYXJrXCIsIDAuMSl9O1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2luYXRvci1iYWNrZ3JvdW5kKTtcblxuICAvLyBPdmVycmlkZSBNYXRlcmlhbCBzdHlsZXNcbiAgLm1hdC1wYWdpbmF0b3ItY29udGFpbmVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtaW4td2lkdGg6IDY3MnB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWF0LXBhZ2luYXRvci1wYWdlLXNpemUge1xuICAgIC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZS1sYWJlbCB7XG4gICAgICBjb2xvcjogdmFyKC0tcGFnaW5hdG9yLXRleHQtY29sb3IpO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZS1zZWxlY3Qge1xuICAgICAgLm1hdC1zZWxlY3QtdmFsdWUge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFnaW5hdG9yLWNvbnRyb2xzLWNvbG9yKTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuXG4gICAgICAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYWdpbmF0b3ItY29udHJvbHMtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplXG5cbiAgLm1hdC1wYWdpbmF0b3ItcmFuZ2UtYWN0aW9ucyB7XG4gICAgLm1hdC1wYWdpbmF0b3ItcmFuZ2UtbGFiZWwge1xuICAgICAgY29sb3I6IHZhcigtLXBhZ2luYXRvci10ZXh0LWNvbG9yKTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAubWF0LXBhZ2luYXRvci1uYXZpZ2F0aW9uLXByZXZpb3VzLFxuICAgIC5tYXQtcGFnaW5hdG9yLW5hdmlnYXRpb24tbmV4dCB7XG4gICAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYWdpbmF0b3ItY29udHJvbHMtY29sb3IpO1xuICAgICAgfVxuICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFnaW5hdG9yLWRpc2FibGVkLWNvbnRyb2xzLWNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gLm1hdC1wYWdpbmF0b3ItcmFuZ2UtYWN0aW9uc1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BillToDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-bill-to-dialog",
                templateUrl: "./bill-to-dialog.component.html",
                styleUrls: ["./bill-to-dialog.component.scss"],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }, { type: src_app_business_services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"] }, { type: src_app_business_state_invoice_state_service__WEBPACK_IMPORTED_MODULE_4__["InvoicesStateService"] }]; }, null); })();


/***/ }),

/***/ "MGzo":
/*!******************************************************************************!*\
  !*** ./src/app/invoice/edit-vehicle-dialog/edit-vehicle-dialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: EditVehicleDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditVehicleDialogComponent", function() { return EditVehicleDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_core_config_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/config/constants */ "AJa1");
/* harmony import */ var src_app_business_services_vehicle_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/business/services/vehicle.service */ "8zvB");
/* harmony import */ var src_app_business_state_invoice_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/business/state/invoice-state.service */ "W7lO");
/* harmony import */ var src_app_shared_notifications_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/notifications/notification.service */ "38VU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");













function EditVehicleDialogComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (ctx_r0.vehicleForm.controls.vin.errors == null ? null : ctx_r0.vehicleForm.controls.vin.errors.faliedSearch) ? "VIN not found" : "Invalid VIN", " ");
} }
function EditVehicleDialogComponent_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const year_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", year_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](year_r6);
} }
function EditVehicleDialogComponent_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const make_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", make_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](make_r7);
} }
function EditVehicleDialogComponent_option_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const model_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", model_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](model_r8);
} }
function EditVehicleDialogComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditVehicleDialogComponent_div_56_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.data.onBackToInvoice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditVehicleDialogComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditVehicleDialogComponent_div_57_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.data.onBackToInvoice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class EditVehicleDialogComponent {
    constructor(dialogRef, data, fb, vehicleService, invoicesState, notificationService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.vehicleService = vehicleService;
        this.invoicesState = invoicesState;
        this.notificationService = notificationService;
        this.subscriptions = [];
        this.years = [];
        this.makes = [];
        this.models = [];
        this.viewMode = this.data.viewMode;
        this.buildForm();
        const sub = this.invoicesState.currentRate$.subscribe((rate) => {
            this.rate = rate;
            if (rate === null || rate === void 0 ? void 0 : rate.amount) {
                this.vehicleForm.controls.amount.setValue(rate.amount);
            }
        });
        this.subscriptions.push(sub);
    }
    ngOnInit() {
        this.years = this.vehicleService.years;
        this.makes = this.vehicleService.makes;
        this.makes.push(this.data.vehicle.make);
        this.models.push(this.data.vehicle.model);
        this.getModels(this.data.vehicle.make);
        //TODO: get models by make ande year
    }
    onSelectYear(event) {
        //TODO: get makes by year
        //this.makes = this.vehicleService.makes;
    }
    onSelectMake(event) {
        this.getModels(event.target.value);
        this.vehicleForm.controls.model.setValue("");
    }
    getModels(make) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.models = yield this.vehicleService.getModelsByMake(make);
        });
    }
    buildForm() {
        this.vehicleForm = this.fb.group({
            vin: [{ value: this.data.vehicle.vin, disabled: this.viewMode }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(src_app_core_config_constants__WEBPACK_IMPORTED_MODULE_4__["regexs"].vin)]],
            year: [{ value: this.data.vehicle.year, disabled: this.viewMode }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            make: [{ value: this.data.vehicle.make, disabled: this.viewMode }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            model: [{ value: this.data.vehicle.model, disabled: this.viewMode }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            amount: [{ value: this.data.vehicle.amount, disabled: this.viewMode }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            weight: [{ value: this.data.vehicle.weight, disabled: this.viewMode }, []],
            comments: [{ value: this.data.vehicle.comments, disabled: this.viewMode }, []],
        });
    }
    onSearchVin(e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const vin = e.target.value;
            if (this.vehicleForm.controls.vin.valid) {
                this.vehicleService
                    .searchVin(vin.toUpperCase())
                    .then((data) => {
                    this.vehicleSearched = data;
                    this.makes.push(data.make);
                    this.models.push(data.model);
                    this.vehicleForm.controls.year.setValue(data.year);
                    this.vehicleForm.controls.make.setValue(data.make);
                    this.vehicleForm.controls.model.setValue(data.model);
                    this.vehicleForm.controls.weight.setValue(data.weight);
                })
                    .catch((err) => {
                    this.vehicleSearched = null;
                    this.vehicleForm.controls.vin.setErrors({ faliedSearch: true });
                    this.vehicleForm.controls.vin.markAsTouched();
                });
            }
        });
    }
    onSubmit() {
        var _a, _b, _c;
        const vinControl = this.vehicleForm.controls.vin;
        vinControl.setValue((_a = vinControl.value) === null || _a === void 0 ? void 0 : _a.toUpperCase());
        if (this.vehicleForm.invalid) {
            return Object.values(this.vehicleForm.controls).forEach((control) => {
                if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                    Object.values(control.controls).forEach((control) => control.markAsTouched());
                }
                else {
                    control.markAsTouched();
                }
            });
        }
        else {
            try {
                if (this.data.action === "edit") {
                    this.invoicesState.editSelectedInvoiceVehicle(this.vehicleForm.value, (_b = this.data.vehicle) === null || _b === void 0 ? void 0 : _b._id);
                }
                else {
                    this.invoicesState.editNewInvoiceVehicle(this.vehicleForm.value, (_c = this.data.vehicle) === null || _c === void 0 ? void 0 : _c._id);
                }
            }
            catch (error) {
                return this.notificationService.error(error.message);
            }
            this.data.onBackToInvoice();
        }
    }
    ngOnDestroy() {
        this.subscriptions.forEach((sub) => sub.unsubscribe());
    }
}
EditVehicleDialogComponent.ɵfac = function EditVehicleDialogComponent_Factory(t) { return new (t || EditVehicleDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_business_services_vehicle_service__WEBPACK_IMPORTED_MODULE_5__["VehicleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_business_state_invoice_state_service__WEBPACK_IMPORTED_MODULE_6__["InvoicesStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_notifications_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"])); };
EditVehicleDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditVehicleDialogComponent, selectors: [["app-edit-vehicle-dialog"]], decls: 58, vars: 24, consts: [[1, "form-group", 3, "formGroup", "ngSubmit"], [1, "w-100", "input-group", "pt-2", "mb-3"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fas", "fa-search"], ["type", "text", "placeholder", "Search VIN...", "formControlName", "vin", 1, "form-control", 3, "input"], ["class", "form-text invalid-feedback", 4, "ngIf"], [1, "w-100", "mb-3"], ["for", "year", 1, "text-dark", "text-base"], [1, "custom-select-wrapper"], ["formControlName", "year", 1, "custom-select", "form-control", 3, "change"], ["disabled", "", "value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["svgIcon", "half-arrow-down", 1, "half-arrow-icon"], ["for", "make", 1, "text-dark", "text-base"], ["formControlName", "make", 1, "custom-select", "form-control", 3, "change"], ["for", "model", 1, "text-dark", "text-base"], ["formControlName", "model", 1, "custom-select", "form-control"], ["for", "amount", 1, "text-dark", "text-base"], [1, "input-group"], ["type", "number", "placeholder", "Amount...", "formControlName", "amount", 1, "form-control"], ["for", "weight", 1, "text-dark", "text-base"], ["type", "number", "placeholder", "Weight...", "formControlName", "weight", 1, "form-control"], [1, "w-100"], ["for", "comments", 1, "text-dark", "text-base"], ["id", "textarea", "maxlength", "256", "rows", "3", "formControlName", "comments", 1, "form-control"], ["class", "d-flex w-100 px-4 pt-3 justify-content-between mt-3", 4, "ngIf"], ["class", "d-flex w-100 px-4 pt-3 justify-content-center mt-3", 4, "ngIf"], [1, "form-text", "invalid-feedback"], [3, "value"], [1, "d-flex", "w-100", "px-4", "pt-3", "justify-content-between", "mt-3"], [1, "col-5"], ["type", "button", 1, "btn", "w-100", "btn-outline-secondary", 3, "click"], ["type", "submit", 1, "btn", "w-100", "btn-success"], [1, "d-flex", "w-100", "px-4", "pt-3", "justify-content-center", "mt-3"]], template: function EditVehicleDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EditVehicleDialogComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function EditVehicleDialogComponent_Template_input_input_7_listener($event) { return ctx.onSearchVin($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, EditVehicleDialogComponent_div_8_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EditVehicleDialogComponent_Template_select_change_13_listener($event) { return ctx.onSelectYear($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Select year...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, EditVehicleDialogComponent_option_16_Template, 2, 2, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Make");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EditVehicleDialogComponent_Template_select_change_22_listener($event) { return ctx.onSelectMake($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Select make...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, EditVehicleDialogComponent_option_25_Template, 2, 2, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Model");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Select model...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, EditVehicleDialogComponent_option_34_Template, 2, 2, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " $ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Weight");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " Kg ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "textarea", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, EditVehicleDialogComponent_div_56_Template, 7, 0, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, EditVehicleDialogComponent_div_57_Template, 4, 0, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](!ctx.viewMode ? "Edit vehicle" : "Vehicle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.vehicleForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.vehicleForm.controls.vin.touched && ctx.vehicleForm.controls.vin.invalid)("is-valid", !!ctx.vehicleSearched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.vehicleForm.controls.year.touched && ctx.vehicleForm.controls.year.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.years);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.vehicleForm.controls.make.touched && ctx.vehicleForm.controls.make.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.makes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.vehicleForm.controls.model.touched && ctx.vehicleForm.controls.model.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.models);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.vehicleForm.controls.amount.touched && ctx.vehicleForm.controls.amount.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.vehicleForm.controls.weight.touched && ctx.vehicleForm.controls.weight.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.vehicleForm.controls.comments.touched && ctx.vehicleForm.controls.comments.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.viewMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.viewMode);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"]], styles: [".text-blue-light[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-light-rgb));\n}\n.text-blue-main[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-main-rgb));\n}\n.text-blue-dark[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-dark-rgb));\n}\n.bg-grey-light[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-grey-light-rgb));\n}\n.bg-grey-dark[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-grey-5-rgb));\n}\n.bg-blue-light[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-light-rgb));\n}\n.bg-blue-main[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-main-rgb));\n}\n.bg-blue-dark[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-dark-rgb));\n}\n.text-xs[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.text-base[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.text-lg[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.text-xl[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.text-2xl[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.text-3xl[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.capitalize[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.rounded-xl[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  overflow: hidden;\n}\n.border-primary-1[_ngcontent-%COMP%] {\n  border: 1px solid rgb(var(--palette-blue-main-rgb));\n}\n.border-primary-2[_ngcontent-%COMP%] {\n  border: 2px solid rgb(var(--palette-blue-main-rgb));\n}\n.custom-scroll[_ngcontent-%COMP%] {\n  padding-right: 4px;\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0.5em;\n  border-radius: 5px;\n  background-color: rgb(var(--palette-grey-light-rgb));\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  border: 0.3em solid;\n  border-color: rgb(var(--palette-grey-5-rgb));\n}\n.custom-select-wrapper[_ngcontent-%COMP%] {\n  --select-padding: 12px;\n  --select-icon-width: 14px;\n  --form-icons-color: rgb(var(--palette-primary-rgb));\n  --form-input-background: rgb(var(--palette-grey-0-rgb));\n  position: relative;\n}\n.custom-select-wrapper[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%] {\n  padding: calc(var(--select-padding) / 2) var(--select-padding);\n  -webkit-padding-end: calc(var(--select-padding) + var(--select-icon-width));\n          padding-inline-end: calc(var(--select-padding) + var(--select-icon-width));\n  background: none;\n  background-color: var(--form-input-background);\n}\n.custom-select-wrapper[_ngcontent-%COMP%]   .half-arrow-icon[_ngcontent-%COMP%] {\n  right: var(--select-padding);\n  top: 0px;\n  pointer-events: none;\n  height: 100%;\n  width: var(--select-icon-width);\n  color: var(--form-icons-color);\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9wYWxldHRlcy9zaGFyZWQuc2NzcyIsInNyYy90aGVtZS9wYWxldHRlcy9tb2RlLnNjc3MiLCJzcmMvdGhlbWUvY3VzdG9tLWNsYXNzZXMuc2NzcyIsInNyYy9hcHAvaW52b2ljZS9lZGl0LXZlaGljbGUtZGlhbG9nL2VkaXQtdmVoaWNsZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvbWl4aW5zL2lucHV0cy9zZWxlY3Quc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUROQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUROQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUROQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUROQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUNMQTtFQUNFLHlDQUFBO0FDNkNGO0FEM0NBO0VBQ0Usd0NBQUE7QUM4Q0Y7QUQ1Q0E7RUFDRSx3Q0FBQTtBQytDRjtBRDNDQTtFQUNFLG9EQUFBO0FDOENGO0FENUNBO0VBQ0UsZ0RBQUE7QUMrQ0Y7QUQ3Q0E7RUFDRSxvREFBQTtBQ2dERjtBRDlDQTtFQUNFLG1EQUFBO0FDaURGO0FEL0NBO0VBQ0UsbURBQUE7QUNrREY7QUQ5Q0E7RUFDRSxrQkFBQTtBQ2lERjtBRC9DQTtFQUNFLG1CQUFBO0FDa0RGO0FEaERBO0VBQ0UsZUFBQTtBQ21ERjtBRGpEQTtFQUNFLG1CQUFBO0FDb0RGO0FEakRBO0VBQ0Usa0JBQUE7QUNvREY7QURqREE7RUFDRSxpQkFBQTtBQ29ERjtBRGpEQTtFQUNFLGtCQUFBO0FDb0RGO0FEakRBO0VBQ0UsZ0JBQUE7QUNvREY7QURsREE7RUFDRSxnQkFBQTtBQ3FERjtBRGxEQTtFQUNFLDBCQUFBO0FDcURGO0FEbERBO0VBQ0UsZUFBQTtBQ3FERjtBRGxEQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUNxREY7QURsREE7RUFDRSxtREFBQTtBQ3FERjtBRGxEQTtFQUNFLG1EQUFBO0FDcURGO0FEbERBO0VBQ0Usa0JBQUE7QUNxREY7QURuREE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvREFBQTtBQ3NERjtBRGxEQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtBQ3FERjtBQWxKQTtFQ09FLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxtREFBQTtFQUNBLHVEQUFBO0VBRUEsa0JBQUE7QUQ4SUY7QUM1SUU7RUFDRSw4REFBQTtFQUNBLDJFQUFBO1VBQUEsMEVBQUE7RUFDQSxnQkFBQTtFQUNBLDhDQUFBO0FEOElKO0FDNUlFO0VBQ0UsNEJBQUE7RUFDQSxRQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FEOElKIiwiZmlsZSI6InNyYy9hcHAvaW52b2ljZS9lZGl0LXZlaGljbGUtZGlhbG9nL2VkaXQtdmVoaWNsZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBTaGFyZWRcbiovXG5cbkBpbXBvcnQgJ3ByZWZlcmVuY2VzJztcbkBpbXBvcnQgJ2ludGVyZmFjZSc7XG5AaW1wb3J0ICdtb2RlJztcblxuLy8gQW4gYWJzdHJhY3Qgd2F5IHRvIHByb3ZpZGUgY29sb3JzLlxuLy8gVGhpcyBmdW5jdGlvbiBpcyBhbiBpbnRlcmZhY2UgdG8gYm90aCBTYXNzIHZhcmlhYmxlcyBhbmQgQ1NTIDQgdmFyaWFibGVzIGJhc2VkIGNvbG9yIHBhbGV0dGVzLlxuQGZ1bmN0aW9uIHBhbGV0dGUtY29sb3IoJGNvbG9yLW5hbWUsICRhbHBoYTogMSkge1xuICAvLyAkY29sb3ItcGFsZXR0ZS1tb2RlICAgICAgICA9PiAgRGVmaW5lZCBpbiBtb2RlLnNjc3NcbiAgLy8gJGNob29zZW4tcGFsZXR0ZSAgICAgICAgICAgPT4gIERlZmluZWQgaW4gbW9kZS5zY3NzXG4gIC8vICRjb2xvci1wYWxldHRlLWludGVyZmFjZSAgID0+ICBEZWZpbmVkIGluIGludGVyZmFjZS5zY3NzXG4gIC8vICRjc3M0LXZhci1wcmVmaXggICAgICAgICAgID0+ICBEZWZpbmVkIGluIHByZWZlcmVuY2VzLnNjc3NcbiAgLy8gJGNzczQtY29sb3ItZm9ybWF0ICAgICAgICAgPT4gIERlZmluZWQgaW4gcHJlZmVyZW5jZXMuc2Nzc1xuXG4gIEBpZiAoJGNvbG9yLXBhbGV0dGUtbW9kZSA9PSAnY3NzLTQnKSB7XG4gICAgJHBhbGV0dGUtcmVmZXJlbmNlOiAkY29sb3ItcGFsZXR0ZS1pbnRlcmZhY2U7XG5cbiAgICAkY29sb3ItdmFyaWFibGUtaW5kZXg6IGluZGV4KCRwYWxldHRlLXJlZmVyZW5jZSwgJGNvbG9yLW5hbWUpO1xuXG4gICAgQGlmICh0eXBlX29mKCRjb2xvci12YXJpYWJsZS1pbmRleCkgPT0gJ251bWJlcicpIHtcbiAgICAgICRjb2xvci12YXJpYWJsZS1uYW1lOiBudGgoJHBhbGV0dGUtcmVmZXJlbmNlLCAkY29sb3ItdmFyaWFibGUtaW5kZXgpO1xuXG4gICAgICBAaWYgKCRhbHBoYSA+IDAgYW5kICRhbHBoYSA8IDEpIHtcbiAgICAgICAgQHJldHVybiAjeydyZ2JhKHZhcignICsgJGNzczQtdmFyLXByZWZpeCArICRjb2xvci12YXJpYWJsZS1uYW1lICsgJy0nICsgJGNzczQtY29sb3ItZm9ybWF0ICsnKSwgI3skYWxwaGF9KSd9O1xuICAgICAgfSBAZWxzZSBpZiAoJGFscGhhID09IDEpIHtcbiAgICAgICAgQHJldHVybiAjeydyZ2IodmFyKCcgKyAkY3NzNC12YXItcHJlZml4ICsgJGNvbG9yLXZhcmlhYmxlLW5hbWUgKyAnLScgKyAkY3NzNC1jb2xvci1mb3JtYXQgKyAnKSknfTtcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICBAZXJyb3IgXCJBbHBoYSAoI3skYWxwaGF9KSBtdXN0IGJlIGEgbnVtYmVyXCI7XG4gICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICBAZXJyb3IgXCJDb2xvciAoI3skY29sb3ItbmFtZX0pIHdhcyBub3QgZm91bmQgb24gQ29sb3IgUGFsZXR0ZSBkZWZpbml0aW9uLiBNYWtlIHN1cmUgaXQncyBkZWZpbmVkIGluIHRoZSB0aGVtZS9wYWxldHRlcy9pbnRlcmZhY2Uuc2NzcyBmaWxlXCI7XG4gICAgfVxuICB9IEBlbHNlIGlmICgkY29sb3ItcGFsZXR0ZS1tb2RlID09ICdzYXNzJykge1xuICAgICRwYWxldHRlLXJlZmVyZW5jZTogJGNob29zZW4tcGFsZXR0ZTtcblxuICAgICRjb2xvci12YXJpYWJsZTogbWFwLWdldCgkcGFsZXR0ZS1yZWZlcmVuY2UsICRjb2xvci1uYW1lKTtcblxuICAgIC8vIENoZWNrIGlmIGl0IGlzIGEgU2FzcyBjb2xvclxuICAgIEBpZiAodHlwZV9vZigkY29sb3ItdmFyaWFibGUpID09ICdjb2xvcicpIHtcbiAgICAgIEBpZiAoJGFscGhhID4gMCBhbmQgJGFscGhhIDwgMSkge1xuICAgICAgICBAcmV0dXJuIHJnYmEoJGNvbG9yLXZhcmlhYmxlLCAkYWxwaGEpO1xuICAgICAgfSBAZWxzZSBpZiAoJGFscGhhID09IDEpIHtcbiAgICAgICAgQHJldHVybiAkY29sb3ItdmFyaWFibGU7XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgQGVycm9yIFwiQWxwaGEgKCN7JGFscGhhfSkgbXVzdCBiZSBhIG51bWJlclwiO1xuICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgQGVycm9yIFwiQ29sb3IgKCN7JGNvbG9yLXZhcmlhYmxlfSkgaXMgbm90IGEgU2FzcyBjb2xvclwiO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGVycm9yICdObyBDb2xvciBQYWxldHRlIG1vZGUgc2VsZWN0ZWQgaW4gdGhlbWUvcGFsZXR0ZXMvcHJlZmVyZW5jZXMuc2Nzcyc7XG4gIH1cbn1cbiIsIi8qXG4gIENTUyA0IE1vZGVcbiovXG4kY29sb3ItcGFsZXR0ZS1tb2RlOiAnY3NzLTQnO1xuXG5cbi8qXG4gIFNhc3MgTW9kZVxuKi9cbi8vIEBpbXBvcnQgJ2NvcmUnO1xuLy9cbi8vICRjb2xvci1wYWxldHRlLW1vZGU6ICdzYXNzJztcbi8vXG4vLyAvLyBJbXBvcnQgdGhlIGRlZmluaXRpb25zIG9mIHRoZSBwYWxldHRlIHlvdSB3YW50IHRvIHVzZVxuLy8gQGltcG9ydCAncGFsZXR0ZS0xL2RlZmluaXRpb25zJztcbi8vIC8vIEBpbXBvcnQgJ3BhbGV0dGUtMi9kZWZpbml0aW9ucyc7XG4vL1xuLy8gLy8gQXNzaWduIGEgcGFydGljdWxhciBDb2xvciBQYWxldHRlIHRvIHRoZSAnY2hvb3Nlbi1wYWxldHRlJyBwb2ludGVyLlxuLy8gLy8gJGNob29zZW4tcGFsZXR0ZSB3aWxsIGJlIGEgU2FzcyBtYXAgcG9pbnRpbmcgdG8gYW5vdGhlciBjb2xvciBwYWxldHRlIFNhc3MgbWFwXG4vLyAkY2hvb3Nlbi1wYWxldHRlOiBidWlsZFNhc3NQYWxldHRlKCRwYWxldHRlLTEpO1xuLy8gLy8gJGNob29zZW4tcGFsZXR0ZTogYnVpbGRTYXNzUGFsZXR0ZSgkcGFsZXR0ZS0yKTtcbiIsIi8vY29sb3Jcbi50ZXh0LWJsdWUtbGlnaHQge1xuICBjb2xvcjogI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1saWdodFwiKX07XG59XG4udGV4dC1ibHVlLW1haW4ge1xuICBjb2xvcjogI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1tYWluXCIpfTtcbn1cbi50ZXh0LWJsdWUtZGFyayB7XG4gIGNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJibHVlLWRhcmtcIil9O1xufVxuXG4vL2JhY2tncm91bmRcbi5iZy1ncmV5LWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiZ3JleS1saWdodFwiKX07XG59XG4uYmctZ3JleS1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiZ3JleS01XCIpfTtcbn1cbi5iZy1ibHVlLWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1saWdodFwiKX07XG59XG4uYmctYmx1ZS1tYWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1tYWluXCIpfTtcbn1cbi5iZy1ibHVlLWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJibHVlLWRhcmtcIil9O1xufVxuXG4vL3RleHRcbi50ZXh0LXhzIHtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xufVxuLnRleHQtc20ge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xufVxuLnRleHQtYmFzZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi50ZXh0LWxnIHtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbn1cblxuLnRleHQteGwge1xuICBmb250LXNpemU6IDEuMjVyZW07XG59XG5cbi50ZXh0LTJ4bCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4udGV4dC0zeGwge1xuICBmb250LXNpemU6IDEuNzVyZW07XG59XG5cbi5mb250LXNlbWlib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5mb250LWJvbGQge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uY2FwaXRhbGl6ZSB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uY3Vyc29yLXBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yb3VuZGVkLXhsIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJvcmRlci1wcmltYXJ5LTEge1xuICBib3JkZXI6IDFweCBzb2xpZCAje3BhbGV0dGUtY29sb3IoXCJibHVlLW1haW5cIil9O1xufVxuXG4uYm9yZGVyLXByaW1hcnktMiB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbWFpblwiKX07XG59XG5cbi5jdXN0b20tc2Nyb2xse1xuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG59XG4uY3VzdG9tLXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJncmV5LWxpZ2h0XCIpfTtcbn1cblxuXG4uY3VzdG9tLXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogLjNlbSBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJncmV5LTVcIil9O1xufVxuIiwiQGltcG9ydCBcInNoYXJlZFwiO1xuXG4uY3VzdG9tLXNlbGVjdC13cmFwcGVyIHtcbiAgQGluY2x1ZGUgYm9vdHN0cmFwLXNlbGVjdC1zdHlsZXMoKTtcbn1cblxuIiwiQG1peGluIG1hdGVyaWFsLXNlbGVjdC1zdHlsZXMoKSB7XG4gIC8vIG1hdGVyaWFsIHNlbGVjdCBzdHlsZXNcbiAgLm1hdC1zZWxlY3QtcGFuZWwge1xuICAgIEBpbmNsdWRlIG1hdGVyaWFsLWF1dG9jb21wbGV0ZS1zdHlsZXMoKTtcbiAgfVxufVxuXG5AbWl4aW4gYm9vdHN0cmFwLXNlbGVjdC1zdHlsZXMoKSB7XG4gIC8vIHNlbGVjdCBjb21wb25lbnQgd2l0aCBjdXN0b20gaWNvblxuICAtLXNlbGVjdC1wYWRkaW5nOiAxMnB4O1xuICAtLXNlbGVjdC1pY29uLXdpZHRoOiAxNHB4O1xuICAtLWZvcm0taWNvbnMtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcigncHJpbWFyeScpfTtcbiAgLS1mb3JtLWlucHV0LWJhY2tncm91bmQ6ICN7cGFsZXR0ZS1jb2xvcignZ3JleS0wJyl9O1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAuY3VzdG9tLXNlbGVjdCB7XG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1zZWxlY3QtcGFkZGluZykgLyAyKSB2YXIoLS1zZWxlY3QtcGFkZGluZyk7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiBjYWxjKHZhcigtLXNlbGVjdC1wYWRkaW5nKSArIHZhcigtLXNlbGVjdC1pY29uLXdpZHRoKSk7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtLWlucHV0LWJhY2tncm91bmQpO1xuICB9XG4gIC5oYWxmLWFycm93LWljb24ge1xuICAgIHJpZ2h0OiB2YXIoLS1zZWxlY3QtcGFkZGluZyk7XG4gICAgdG9wOiAwcHg7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiB2YXIoLS1zZWxlY3QtaWNvbi13aWR0aCk7XG4gICAgY29sb3I6IHZhcigtLWZvcm0taWNvbnMtY29sb3IpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditVehicleDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-edit-vehicle-dialog",
                templateUrl: "./edit-vehicle-dialog.component.html",
                styleUrls: ["./edit-vehicle-dialog.component.scss"],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_business_services_vehicle_service__WEBPACK_IMPORTED_MODULE_5__["VehicleService"] }, { type: src_app_business_state_invoice_state_service__WEBPACK_IMPORTED_MODULE_6__["InvoicesStateService"] }, { type: src_app_shared_notifications_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }]; }, null); })();


/***/ }),

/***/ "Vr9K":
/*!****************************************************************************!*\
  !*** ./src/app/invoice/new-invoice-dialog/new-invoice-dialog.component.ts ***!
  \****************************************************************************/
/*! exports provided: NewInvoiceDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewInvoiceDialogComponent", function() { return NewInvoiceDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_business_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/business/services/user.service */ "RaVz");
/* harmony import */ var src_app_business_state_invoice_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/business/state/invoice-state.service */ "W7lO");
/* harmony import */ var src_app_business_services_rate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/business/services/rate.service */ "nUUR");
/* harmony import */ var src_app_shared_notifications_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/notifications/notification.service */ "38VU");
/* harmony import */ var src_app_business_services_invoice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/business/services/invoice.service */ "c4Cx");
/* harmony import */ var src_app_business_services_customer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/business/services/customer.service */ "Sdjb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _pipes_location_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../pipes/location.pipe */ "Ebsp");
















function NewInvoiceDialogComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("diameter", 50);
} }
function NewInvoiceDialogComponent_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Select driver...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NewInvoiceDialogComponent_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const driver_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", driver_r6.id)("selected", driver_r6.id === (ctx_r2.invoice == null ? null : ctx_r2.invoice.driver));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, driver_r6.first_name), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, driver_r6.last_name), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" - ", driver_r6.email, " ");
} }
function NewInvoiceDialogComponent_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r7 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", status_r7.value)("selected", (ctx_r3.invoice == null ? null : ctx_r3.invoice.status) && status_r7.value === (ctx_r3.invoice == null ? null : ctx_r3.invoice.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", status_r7.label, " ");
} }
function NewInvoiceDialogComponent_tr_56_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewInvoiceDialogComponent_tr_56_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const vehicle_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.data.onEditVehicle(vehicle_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewInvoiceDialogComponent_tr_56_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const vehicle_r8 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.data.onDeleteVehicle(vehicle_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vehicle_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", vehicle_r8.year, " ", vehicle_r8.make, " ", vehicle_r8.model, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](vehicle_r8.vin);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 5, vehicle_r8.amount));
} }
function NewInvoiceDialogComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No vehicles added");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const statuses = [
    { value: "DRAFT", label: "Draft" },
    { value: "SUBMITTED_FOR_REVIEW", label: "Submitted for review" },
];
class NewInvoiceDialogComponent {
    constructor(dialogRef, data, userService, invoicesState, rateService, notificationService, invoiceService, customerService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.userService = userService;
        this.invoicesState = invoicesState;
        this.rateService = rateService;
        this.notificationService = notificationService;
        this.invoiceService = invoiceService;
        this.customerService = customerService;
        this.subscriptions = [];
        this.statuses = statuses;
        this.isLoading = false;
        const sub1 = this.userService.users.subscribe((data) => {
            this.drivers = data;
        });
        const sub2 = this.invoicesState.newInvoice$.subscribe((invoice) => {
            this.invoice = invoice;
        });
        this.subscriptions.push(sub1, sub2);
    }
    ngOnInit() {
        this.userService.fetchUsers();
        const sub = this.customerService.getMostRecents().subscribe((data) => {
            this.invoicesState.setMostRecentsCustomers(data);
        });
        this.subscriptions.push(sub);
    }
    onSelectDriver(event) {
        this.invoicesState.setNewInvoice({ driver: this.drivers.find((d) => d.id === event.target.value) });
    }
    onSelectStatus(event) {
        this.invoicesState.setNewInvoice({ status: event.target.value });
    }
    onStepChange(event) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.data.setCurrentStep(event.selectedIndex);
        if (event.selectedIndex === 1) {
            //get current rate
            const from = (_b = (_a = this.invoice) === null || _a === void 0 ? void 0 : _a.ship_from) !== null && _b !== void 0 ? _b : {};
            const to = (_d = (_c = this.invoice) === null || _c === void 0 ? void 0 : _c.ship_to) !== null && _d !== void 0 ? _d : {};
            const code = `${(_e = from.city) === null || _e === void 0 ? void 0 : _e.name}_${(_f = from.city) === null || _f === void 0 ? void 0 : _f.state_code}_${(_g = to.city) === null || _g === void 0 ? void 0 : _g.name}_${(_h = to.city) === null || _h === void 0 ? void 0 : _h.state_code}`;
            this.rateService.getRateByCode(code).subscribe((rate) => {
                this.invoicesState.setCurretRate(rate);
            });
        }
    }
    getSubTotal() {
        var _a, _b;
        let subtotal = 0;
        (_b = (_a = this.invoice) === null || _a === void 0 ? void 0 : _a.vehicles) === null || _b === void 0 ? void 0 : _b.forEach((v) => {
            subtotal += v.amount;
        });
        return subtotal;
    }
    getTotal() {
        var _a, _b;
        let total = 0;
        (_b = (_a = this.invoice) === null || _a === void 0 ? void 0 : _a.vehicles) === null || _b === void 0 ? void 0 : _b.forEach((v) => {
            total += v.amount;
        });
        return total;
    }
    getWeight() {
        var _a, _b;
        let weight = 0;
        (_b = (_a = this.invoice) === null || _a === void 0 ? void 0 : _a.vehicles) === null || _b === void 0 ? void 0 : _b.forEach((v) => {
            weight += Number(v.weight);
        });
        return weight;
    }
    getDriverCommissionAmount() {
        var _a, _b, _c;
        const total = this.getSubTotal();
        const driverCommission = (_c = (_b = (_a = this.invoice) === null || _a === void 0 ? void 0 : _a.driver) === null || _b === void 0 ? void 0 : _b.commission) !== null && _c !== void 0 ? _c : 0;
        const amount = total * (driverCommission / 100);
        return amount;
    }
    onSubmit() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        if (!((_a = this.invoice) === null || _a === void 0 ? void 0 : _a.driver) ||
            !((_b = this.invoice) === null || _b === void 0 ? void 0 : _b.status) ||
            !((_c = this.invoice) === null || _c === void 0 ? void 0 : _c.bill_to) ||
            !((_e = (_d = this.invoice) === null || _d === void 0 ? void 0 : _d.ship_from) !== null && _e !== void 0 ? _e : (_f = this.invoice) === null || _f === void 0 ? void 0 : _f.quick_ship_from) ||
            !((_h = (_g = this.invoice) === null || _g === void 0 ? void 0 : _g.ship_to) !== null && _h !== void 0 ? _h : (_j = this.invoice) === null || _j === void 0 ? void 0 : _j.quick_ship_to)) {
            this.notificationService.error("Missed fields required");
            return;
        }
        if (!((_l = (_k = this.invoice) === null || _k === void 0 ? void 0 : _k.vehicles) === null || _l === void 0 ? void 0 : _l.length)) {
            this.notificationService.error("Missed vehicles required");
            return;
        }
        const body = {
            bill_to: this.invoice.bill_to.id,
            ship_from: (_m = this.invoice.ship_from) === null || _m === void 0 ? void 0 : _m.id,
            ship_to: (_o = this.invoice.ship_to) === null || _o === void 0 ? void 0 : _o.id,
            quick_ship_from: this.invoice.quick_ship_from,
            quick_ship_to: this.invoice.quick_ship_to,
            driver_id: this.invoice.driver.id,
            status: this.invoice.status,
            vehicles: (_p = this.invoice.vehicles) === null || _p === void 0 ? void 0 : _p.map((_a) => {
                var { _id } = _a, rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["_id"]);
                return rest;
            }),
        };
        this.isLoading = true;
        this.invoiceService.saveInvoice(body).subscribe((res) => {
            this.isLoading = false;
            this.notificationService.success("Invoice saved");
            this.dialogRef.close();
            this.invoicesState.resetNewInvoice();
        }, (err) => {
            this.notificationService.error();
            this.isLoading = false;
        });
    }
    onCancel() {
        this.invoicesState.resetNewInvoice();
        this.data.setCurrentStep(0);
        this.dialogRef.close();
    }
    ngOnDestroy() {
        this.subscriptions.forEach((sub) => sub.unsubscribe());
    }
}
NewInvoiceDialogComponent.ɵfac = function NewInvoiceDialogComponent_Factory(t) { return new (t || NewInvoiceDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_business_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_business_state_invoice_state_service__WEBPACK_IMPORTED_MODULE_4__["InvoicesStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_business_services_rate_service__WEBPACK_IMPORTED_MODULE_5__["RateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_notifications_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_business_services_invoice_service__WEBPACK_IMPORTED_MODULE_7__["InvoiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_business_services_customer_service__WEBPACK_IMPORTED_MODULE_8__["CustomerService"])); };
NewInvoiceDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NewInvoiceDialogComponent, selectors: [["app-new-invoice-dialog"]], decls: 100, vars: 24, consts: [[1, "dialog-content", "custom-scroll"], ["class", "dialog-loader", 4, "ngIf"], [1, "form-group", "w-100", "mt-3", "new-invoice-form", "mb-2"], [1, "col-12", "d-flex", "justify-content-between", "mb-3", "text-xl"], [1, "col-12", "mb-3"], ["for", "driver", 1, "text-dark", "text-base"], [1, "custom-select-wrapper"], [1, "custom-select", "form-control", 3, "change"], ["selected", "", "disabled", "", "value", "", 4, "ngIf"], [3, "value", "selected", 4, "ngFor", "ngForOf"], ["svgIcon", "half-arrow-down", 1, "half-arrow-icon"], ["for", "status", 1, "text-dark", "text-base"], [1, "mt-2", "w-100"], [1, "col-12", "d-flex", "flex-column", "align-items-start", "flex-md-row", "align-items-md-center", "mb-3"], ["type", "button", 1, "flex-shrink-0", "btn", "btn-primary", "mr-3", "cust-btn", 3, "click"], [1, "bg-grey-light", "flex-grow-1", "h-100", "p-2", "rounded-lg", "w-100"], [1, "w-100", "mb-3", "table-wrapper", "table-responsive", "custom-scroll"], [1, "table", "table-sm", "mb-0", "pb-5"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["class", "w-100 text-center", 4, "ngIf"], [1, "flex-grow-1", "bg-light", "add-vehicle-btn", "py-1"], [1, "w-100", "btn", "btn-outline-primary", 3, "click"], [1, "w-100", "bg-grey-light", "p-4", "rounded-lg"], [1, "row"], [1, "col-8", "text-right"], [1, "col-4", "text-right"], [1, "col-12", "border", "border-secondary", "my-2", 2, "opacity", "0.25"], [1, "row", "font-bold"], [1, "d-flex", "w-100", "px-0", "px-md-4", "pt-4", "justify-content-between", "mt-2"], [1, "col-5"], [1, "btn", "w-100", "btn-secondary", 3, "click"], [1, "btn", "w-100", "btn-success", 3, "click"], [1, "dialog-loader"], [3, "diameter"], ["selected", "", "disabled", "", "value", ""], [3, "value", "selected"], [1, "action-buttons"], [3, "click"], [1, "fas", "fa-edit", "text-xl", "mr-3"], [1, "fas", "fa-trash-alt", "text-xl"], [1, "w-100", "text-center"], [1, "border", "py-2"]], template: function NewInvoiceDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NewInvoiceDialogComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "New Invoice");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Invoice #: ----");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Date: ----");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Driver");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function NewInvoiceDialogComponent_Template_select_change_14_listener($event) { return ctx.onSelectDriver($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, NewInvoiceDialogComponent_option_15_Template, 2, 0, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, NewInvoiceDialogComponent_option_16_Template, 6, 9, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function NewInvoiceDialogComponent_Template_select_change_22_listener($event) { return ctx.onSelectStatus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, NewInvoiceDialogComponent_option_23_Template, 2, 3, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewInvoiceDialogComponent_Template_button_click_27_listener() { return ctx.data.onBillTo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Bill To");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "location");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewInvoiceDialogComponent_Template_button_click_33_listener() { return ctx.data.onShipFrom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Ship From");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "location");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewInvoiceDialogComponent_Template_button_click_39_listener() { return ctx.data.onShipTo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Ship To");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](43, "location");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Vehicle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Vin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, NewInvoiceDialogComponent_tr_56_Template, 13, 7, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, NewInvoiceDialogComponent_div_57_Template, 3, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewInvoiceDialogComponent_Template_button_click_59_listener() { return ctx.data.onAddVehicle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "+ Add vehicle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Sub total:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Driver commission:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Driver commission amount:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Total units:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Weight(kg):");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Total:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewInvoiceDialogComponent_Template_button_click_95_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewInvoiceDialogComponent_Template_button_click_98_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var tmp_9_0 = null;
        var tmp_11_0 = null;
        var tmp_13_0 = null;
        var tmp_14_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.invoice == null ? null : ctx.invoice.driver));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.drivers);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.statuses);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", (ctx.invoice == null ? null : ctx.invoice.bill_to) ? ctx.invoice == null ? null : ctx.invoice.bill_to.name : "----", " ", (ctx.invoice == null ? null : ctx.invoice.bill_to) && " - " + _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 18, ctx.invoice == null ? null : ctx.invoice.bill_to.city), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", (((ctx.invoice == null ? null : ctx.invoice.ship_from) || (ctx.invoice == null ? null : ctx.invoice.quick_ship_from)) == null ? null : ((ctx.invoice == null ? null : ctx.invoice.ship_from) || (ctx.invoice == null ? null : ctx.invoice.quick_ship_from)).name) || "----", " ", ((ctx.invoice == null ? null : ctx.invoice.ship_from) || (ctx.invoice == null ? null : ctx.invoice.quick_ship_from)) && " - " + _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](37, 20, ((ctx.invoice == null ? null : ctx.invoice.ship_from) || (ctx.invoice == null ? null : ctx.invoice.quick_ship_from)) == null ? null : ((ctx.invoice == null ? null : ctx.invoice.ship_from) || (ctx.invoice == null ? null : ctx.invoice.quick_ship_from)).city), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", (((ctx.invoice == null ? null : ctx.invoice.ship_to) || (ctx.invoice == null ? null : ctx.invoice.quick_ship_to)) == null ? null : ((ctx.invoice == null ? null : ctx.invoice.ship_to) || (ctx.invoice == null ? null : ctx.invoice.quick_ship_to)).name) || "----", " ", ((ctx.invoice == null ? null : ctx.invoice.ship_to) || (ctx.invoice == null ? null : ctx.invoice.quick_ship_to)) && " - " + _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](43, 22, ((ctx.invoice == null ? null : ctx.invoice.ship_to) || (ctx.invoice == null ? null : ctx.invoice.quick_ship_to)) == null ? null : ((ctx.invoice == null ? null : ctx.invoice.ship_to) || (ctx.invoice == null ? null : ctx.invoice.quick_ship_to)).city), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.invoice == null ? null : ctx.invoice.vehicles);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.invoice == null ? null : ctx.invoice.vehicles == null ? null : ctx.invoice.vehicles.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", (tmp_9_0 = ctx.getSubTotal()) == null ? null : tmp_9_0.toFixed(2), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("%", (ctx.invoice == null ? null : ctx.invoice.driver == null ? null : ctx.invoice.driver.commission) || 0, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", (tmp_11_0 = ctx.getDriverCommissionAmount()) == null ? null : tmp_11_0.toFixed(2), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((ctx.invoice == null ? null : ctx.invoice.vehicles == null ? null : ctx.invoice.vehicles.length) || 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_13_0 = ctx.getWeight()) == null ? null : tmp_13_0.toFixed(2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", (tmp_14_0 = ctx.getTotal()) == null ? null : tmp_14_0.toFixed(2), "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatSpinner"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_x"]], pipes: [_pipes_location_pipe__WEBPACK_IMPORTED_MODULE_13__["LocationPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CurrencyPipe"]], styles: [".text-blue-light[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-light-rgb));\n}\n.text-blue-main[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-main-rgb));\n}\n.text-blue-dark[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-dark-rgb));\n}\n.bg-grey-light[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-grey-light-rgb));\n}\n.bg-grey-dark[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-grey-5-rgb));\n}\n.bg-blue-light[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-light-rgb));\n}\n.bg-blue-main[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-main-rgb));\n}\n.bg-blue-dark[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-dark-rgb));\n}\n.text-xs[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.text-base[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.text-lg[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.text-xl[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.text-2xl[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.text-3xl[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.capitalize[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.rounded-xl[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  overflow: hidden;\n}\n.border-primary-1[_ngcontent-%COMP%] {\n  border: 1px solid rgb(var(--palette-blue-main-rgb));\n}\n.border-primary-2[_ngcontent-%COMP%] {\n  border: 2px solid rgb(var(--palette-blue-main-rgb));\n}\n.custom-scroll[_ngcontent-%COMP%] {\n  padding-right: 4px;\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0.5em;\n  border-radius: 5px;\n  background-color: rgb(var(--palette-grey-light-rgb));\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  border: 0.3em solid;\n  border-color: rgb(var(--palette-grey-5-rgb));\n}\n.custom-select-wrapper[_ngcontent-%COMP%] {\n  --select-padding: 12px;\n  --select-icon-width: 14px;\n  --form-icons-color: rgb(var(--palette-primary-rgb));\n  --form-input-background: rgb(var(--palette-grey-0-rgb));\n  position: relative;\n}\n.custom-select-wrapper[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%] {\n  padding: calc(var(--select-padding) / 2) var(--select-padding);\n  -webkit-padding-end: calc(var(--select-padding) + var(--select-icon-width));\n          padding-inline-end: calc(var(--select-padding) + var(--select-icon-width));\n  background: none;\n  background-color: var(--form-input-background);\n}\n.custom-select-wrapper[_ngcontent-%COMP%]   .half-arrow-icon[_ngcontent-%COMP%] {\n  right: var(--select-padding);\n  top: 0px;\n  pointer-events: none;\n  height: 100%;\n  width: var(--select-icon-width);\n  color: var(--form-icons-color);\n  position: absolute;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  --table-header-color: rgb(var(--palette-white-rgb));\n  --table-header-background: rgb(var(--palette-blue-main-rgb));\n  --table-text-color: rgb(var(--palette-grey-9-rgb));\n  --table-row-hover-background: rgb(var(--palette-blue-light-rgb));\n  --page-background: rgb(var(--palette-white-rgb));\n  --page-spacing: 10px;\n  max-height: 300px;\n  overflow-y: auto;\n  position: relative;\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 672px;\n  background: none;\n  border-collapse: collapse;\n  border-radius: 1em 1em 0 0;\n  overflow: hidden;\n}\n.table-wrapper[_ngcontent-%COMP%]   table.table-sm[_ngcontent-%COMP%] {\n  min-width: 370px;\n}\n.table-wrapper[_ngcontent-%COMP%]   table.table-sm[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%] {\n  padding: var(--page-spacing);\n}\n.table-wrapper[_ngcontent-%COMP%]   table.table-sm[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n  padding: var(--page-spacing);\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: var(--table-header-color);\n  background-color: var(--table-header-background);\n  font-size: 13px;\n  font-weight: 700;\n}\n@media (min-width: 821px) {\n  .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n  border-bottom-style: none;\n  padding: calc(var(--page-spacing));\n}\n@media (min-width: 821px) {\n  .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n    padding: calc(var(--page-spacing) * 2);\n  }\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: var(--table-text-color);\n  line-height: 1.6;\n  font-size: 13px;\n}\n@media (min-width: 821px) {\n  .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    font-size: 0.9em;\n  }\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%] {\n  border-bottom-style: none;\n  padding: var(--page-spacing) calc(var(--page-spacing));\n}\n@media (min-width: 821px) {\n  .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%] {\n    padding: calc(var(--page-spacing) * 2);\n  }\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%] {\n  height: auto;\n  transition: background-color 0.5s;\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]:hover {\n  background-color: var(--table-row-hover-background);\n  transition: background-color 0.5s;\n}\n.table-wrapper[_ngcontent-%COMP%]     [mat-table] .mat-sort-header-arrow {\n  color: var(--table-header-color);\n}\n.table-wrapper[_ngcontent-%COMP%]   mat-paginator[_ngcontent-%COMP%], .table-wrapper[_ngcontent-%COMP%]   .table-width[_ngcontent-%COMP%] {\n  min-width: 672px;\n  width: 100%;\n}\n.table-wrapper[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n  border: none;\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  min-width: unset !important;\n}\n.table-wrapper[_ngcontent-%COMP%]   .table-sm[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.8rem;\n}\n.table-wrapper[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: rgb(var(--palette-blue-light-rgb));\n  cursor: pointer;\n}\n.table-wrapper[_ngcontent-%COMP%]   .add-vehicle-btn[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0;\n  z-index: 10;\n}\n.new-invoice-form[_ngcontent-%COMP%] {\n  max-height: 70vh;\n  padding-bottom: 1rem;\n  overflow-y: auto;\n}\n[_nghost-%COMP%]     .mat-horizontal-stepper-header {\n  height: 40px !important;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  align-items: center;\n  margin-top: 5px;\n}\n.action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  all: unset;\n  display: inline-block;\n  cursor: pointer;\n  line-height: 0.8;\n}\n.action-buttons[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n.cust-btn[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (min-width: 672px) {\n  .cust-btn[_ngcontent-%COMP%] {\n    width: 110px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9wYWxldHRlcy9zaGFyZWQuc2NzcyIsInNyYy90aGVtZS9wYWxldHRlcy9tb2RlLnNjc3MiLCJzcmMvdGhlbWUvY3VzdG9tLWNsYXNzZXMuc2NzcyIsInNyYy9hcHAvaW52b2ljZS9uZXctaW52b2ljZS1kaWFsb2cvbmV3LWludm9pY2UtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL21peGlucy9pbnB1dHMvc2VsZWN0LnNjc3MiLCJzcmMvdGhlbWUvbWl4aW5zL3RhYmxlLWJhc2ljLXN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBQ0xBO0VBQ0UseUNBQUE7QUM2Q0Y7QUQzQ0E7RUFDRSx3Q0FBQTtBQzhDRjtBRDVDQTtFQUNFLHdDQUFBO0FDK0NGO0FEM0NBO0VBQ0Usb0RBQUE7QUM4Q0Y7QUQ1Q0E7RUFDRSxnREFBQTtBQytDRjtBRDdDQTtFQUNFLG9EQUFBO0FDZ0RGO0FEOUNBO0VBQ0UsbURBQUE7QUNpREY7QUQvQ0E7RUFDRSxtREFBQTtBQ2tERjtBRDlDQTtFQUNFLGtCQUFBO0FDaURGO0FEL0NBO0VBQ0UsbUJBQUE7QUNrREY7QURoREE7RUFDRSxlQUFBO0FDbURGO0FEakRBO0VBQ0UsbUJBQUE7QUNvREY7QURqREE7RUFDRSxrQkFBQTtBQ29ERjtBRGpEQTtFQUNFLGlCQUFBO0FDb0RGO0FEakRBO0VBQ0Usa0JBQUE7QUNvREY7QURqREE7RUFDRSxnQkFBQTtBQ29ERjtBRGxEQTtFQUNFLGdCQUFBO0FDcURGO0FEbERBO0VBQ0UsMEJBQUE7QUNxREY7QURsREE7RUFDRSxlQUFBO0FDcURGO0FEbERBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQ3FERjtBRGxEQTtFQUNFLG1EQUFBO0FDcURGO0FEbERBO0VBQ0UsbURBQUE7QUNxREY7QURsREE7RUFDRSxrQkFBQTtBQ3FERjtBRG5EQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9EQUFBO0FDc0RGO0FEbERBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0FDcURGO0FBbEpBO0VDT0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1EQUFBO0VBQ0EsdURBQUE7RUFFQSxrQkFBQTtBRDhJRjtBQzVJRTtFQUNFLDhEQUFBO0VBQ0EsMkVBQUE7VUFBQSwwRUFBQTtFQUNBLGdCQUFBO0VBQ0EsOENBQUE7QUQ4SUo7QUM1SUU7RUFDRSw0QkFBQTtFQUNBLFFBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUQ4SUo7QUFyS0E7RUVIRSxtREFBQTtFQUNBLDREQUFBO0VBQ0Esa0RBQUE7RUFDQSxnRUFBQTtFQUVBLGdEQUFBO0VBQ0Esb0JBQUE7RUZEQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUE2S0Y7QUU1S0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBRjhLSjtBRTVLSTtFQUNFLGdCQUFBO0FGOEtOO0FFM0tRO0VBQ0UsNEJBQUE7QUY2S1Y7QUV6S1E7RUFDRSw0QkFBQTtBRjJLVjtBRXRLSTtFQUNFLGdDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUZ3S047QUV2S007RUFMRjtJQU1JLGVBQUE7RUYwS047QUFDRjtBRXhLTTtFQUNFLHlCQUFBO0VBQ0Esa0NBQUE7QUYwS1I7QUV6S1E7RUFIRjtJQUlJLHNDQUFBO0VGNEtSO0FBQ0Y7QUV4S0k7RUFDRSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBRjBLTjtBRXpLTTtFQUpGO0lBS0ksZ0JBQUE7RUY0S047QUFDRjtBRTNLTTtFQUNFLHlCQUFBO0VBQ0Esc0RBQUE7QUY2S1I7QUU1S1E7RUFIRjtJQUlJLHNDQUFBO0VGK0tSO0FBQ0Y7QUUzS0k7RUFDRSxZQUFBO0VBQ0EsaUNBQUE7QUY2S047QUUzS007RUFDRSwyQkFBQTtFQUNBLDhCQUFBO0FGNktSO0FFM0tNO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtBRjZLUjtBRTFLTTtFQUNFLG1EQUFBO0VBQ0EsaUNBQUE7QUY0S1I7QUV0S0k7RUFDRSxnQ0FBQTtBRndLTjtBRXBLRTs7RUFFRSxnQkFBQTtFQUNBLFdBQUE7QUZzS0o7QUEzUEU7RUFDRSxZQUFBO0FBNlBKO0FBMVBFO0VBQ0UsMkJBQUE7QUE0UEo7QUF6UEk7RUFDRSxlQUFBO0FBMlBOO0FBeFBFO0VBQ0Usb0RBQUE7RUFDQSxlQUFBO0FBMFBKO0FBdlBFO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBeVBKO0FBclBBO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBd1BGO0FBcFBFO0VBQ0UsdUJBQUE7QUF1UEo7QUFuUEE7RUFDRSxhQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQXNQRjtBQXJQRTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQXVQSjtBQXJQRTtFQUNFLGlCQUFBO0FBdVBKO0FBblBBO0VBQ0UsV0FBQTtBQXNQRjtBQXJQRTtFQUZGO0lBR0ksWUFBQTtFQXdQRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaW52b2ljZS9uZXctaW52b2ljZS1kaWFsb2cvbmV3LWludm9pY2UtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgU2hhcmVkXG4qL1xuXG5AaW1wb3J0ICdwcmVmZXJlbmNlcyc7XG5AaW1wb3J0ICdpbnRlcmZhY2UnO1xuQGltcG9ydCAnbW9kZSc7XG5cbi8vIEFuIGFic3RyYWN0IHdheSB0byBwcm92aWRlIGNvbG9ycy5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgYW4gaW50ZXJmYWNlIHRvIGJvdGggU2FzcyB2YXJpYWJsZXMgYW5kIENTUyA0IHZhcmlhYmxlcyBiYXNlZCBjb2xvciBwYWxldHRlcy5cbkBmdW5jdGlvbiBwYWxldHRlLWNvbG9yKCRjb2xvci1uYW1lLCAkYWxwaGE6IDEpIHtcbiAgLy8gJGNvbG9yLXBhbGV0dGUtbW9kZSAgICAgICAgPT4gIERlZmluZWQgaW4gbW9kZS5zY3NzXG4gIC8vICRjaG9vc2VuLXBhbGV0dGUgICAgICAgICAgID0+ICBEZWZpbmVkIGluIG1vZGUuc2Nzc1xuICAvLyAkY29sb3ItcGFsZXR0ZS1pbnRlcmZhY2UgICA9PiAgRGVmaW5lZCBpbiBpbnRlcmZhY2Uuc2Nzc1xuICAvLyAkY3NzNC12YXItcHJlZml4ICAgICAgICAgICA9PiAgRGVmaW5lZCBpbiBwcmVmZXJlbmNlcy5zY3NzXG4gIC8vICRjc3M0LWNvbG9yLWZvcm1hdCAgICAgICAgID0+ICBEZWZpbmVkIGluIHByZWZlcmVuY2VzLnNjc3NcblxuICBAaWYgKCRjb2xvci1wYWxldHRlLW1vZGUgPT0gJ2Nzcy00Jykge1xuICAgICRwYWxldHRlLXJlZmVyZW5jZTogJGNvbG9yLXBhbGV0dGUtaW50ZXJmYWNlO1xuXG4gICAgJGNvbG9yLXZhcmlhYmxlLWluZGV4OiBpbmRleCgkcGFsZXR0ZS1yZWZlcmVuY2UsICRjb2xvci1uYW1lKTtcblxuICAgIEBpZiAodHlwZV9vZigkY29sb3ItdmFyaWFibGUtaW5kZXgpID09ICdudW1iZXInKSB7XG4gICAgICAkY29sb3ItdmFyaWFibGUtbmFtZTogbnRoKCRwYWxldHRlLXJlZmVyZW5jZSwgJGNvbG9yLXZhcmlhYmxlLWluZGV4KTtcblxuICAgICAgQGlmICgkYWxwaGEgPiAwIGFuZCAkYWxwaGEgPCAxKSB7XG4gICAgICAgIEByZXR1cm4gI3sncmdiYSh2YXIoJyArICRjc3M0LXZhci1wcmVmaXggKyAkY29sb3ItdmFyaWFibGUtbmFtZSArICctJyArICRjc3M0LWNvbG9yLWZvcm1hdCArJyksICN7JGFscGhhfSknfTtcbiAgICAgIH0gQGVsc2UgaWYgKCRhbHBoYSA9PSAxKSB7XG4gICAgICAgIEByZXR1cm4gI3sncmdiKHZhcignICsgJGNzczQtdmFyLXByZWZpeCArICRjb2xvci12YXJpYWJsZS1uYW1lICsgJy0nICsgJGNzczQtY29sb3ItZm9ybWF0ICsgJykpJ307XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgQGVycm9yIFwiQWxwaGEgKCN7JGFscGhhfSkgbXVzdCBiZSBhIG51bWJlclwiO1xuICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgQGVycm9yIFwiQ29sb3IgKCN7JGNvbG9yLW5hbWV9KSB3YXMgbm90IGZvdW5kIG9uIENvbG9yIFBhbGV0dGUgZGVmaW5pdGlvbi4gTWFrZSBzdXJlIGl0J3MgZGVmaW5lZCBpbiB0aGUgdGhlbWUvcGFsZXR0ZXMvaW50ZXJmYWNlLnNjc3MgZmlsZVwiO1xuICAgIH1cbiAgfSBAZWxzZSBpZiAoJGNvbG9yLXBhbGV0dGUtbW9kZSA9PSAnc2FzcycpIHtcbiAgICAkcGFsZXR0ZS1yZWZlcmVuY2U6ICRjaG9vc2VuLXBhbGV0dGU7XG5cbiAgICAkY29sb3ItdmFyaWFibGU6IG1hcC1nZXQoJHBhbGV0dGUtcmVmZXJlbmNlLCAkY29sb3ItbmFtZSk7XG5cbiAgICAvLyBDaGVjayBpZiBpdCBpcyBhIFNhc3MgY29sb3JcbiAgICBAaWYgKHR5cGVfb2YoJGNvbG9yLXZhcmlhYmxlKSA9PSAnY29sb3InKSB7XG4gICAgICBAaWYgKCRhbHBoYSA+IDAgYW5kICRhbHBoYSA8IDEpIHtcbiAgICAgICAgQHJldHVybiByZ2JhKCRjb2xvci12YXJpYWJsZSwgJGFscGhhKTtcbiAgICAgIH0gQGVsc2UgaWYgKCRhbHBoYSA9PSAxKSB7XG4gICAgICAgIEByZXR1cm4gJGNvbG9yLXZhcmlhYmxlO1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIEBlcnJvciBcIkFscGhhICgjeyRhbHBoYX0pIG11c3QgYmUgYSBudW1iZXJcIjtcbiAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgIEBlcnJvciBcIkNvbG9yICgjeyRjb2xvci12YXJpYWJsZX0pIGlzIG5vdCBhIFNhc3MgY29sb3JcIjtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBlcnJvciAnTm8gQ29sb3IgUGFsZXR0ZSBtb2RlIHNlbGVjdGVkIGluIHRoZW1lL3BhbGV0dGVzL3ByZWZlcmVuY2VzLnNjc3MnO1xuICB9XG59XG4iLCIvKlxuICBDU1MgNCBNb2RlXG4qL1xuJGNvbG9yLXBhbGV0dGUtbW9kZTogJ2Nzcy00JztcblxuXG4vKlxuICBTYXNzIE1vZGVcbiovXG4vLyBAaW1wb3J0ICdjb3JlJztcbi8vXG4vLyAkY29sb3ItcGFsZXR0ZS1tb2RlOiAnc2Fzcyc7XG4vL1xuLy8gLy8gSW1wb3J0IHRoZSBkZWZpbml0aW9ucyBvZiB0aGUgcGFsZXR0ZSB5b3Ugd2FudCB0byB1c2Vcbi8vIEBpbXBvcnQgJ3BhbGV0dGUtMS9kZWZpbml0aW9ucyc7XG4vLyAvLyBAaW1wb3J0ICdwYWxldHRlLTIvZGVmaW5pdGlvbnMnO1xuLy9cbi8vIC8vIEFzc2lnbiBhIHBhcnRpY3VsYXIgQ29sb3IgUGFsZXR0ZSB0byB0aGUgJ2Nob29zZW4tcGFsZXR0ZScgcG9pbnRlci5cbi8vIC8vICRjaG9vc2VuLXBhbGV0dGUgd2lsbCBiZSBhIFNhc3MgbWFwIHBvaW50aW5nIHRvIGFub3RoZXIgY29sb3IgcGFsZXR0ZSBTYXNzIG1hcFxuLy8gJGNob29zZW4tcGFsZXR0ZTogYnVpbGRTYXNzUGFsZXR0ZSgkcGFsZXR0ZS0xKTtcbi8vIC8vICRjaG9vc2VuLXBhbGV0dGU6IGJ1aWxkU2Fzc1BhbGV0dGUoJHBhbGV0dGUtMik7XG4iLCIvL2NvbG9yXG4udGV4dC1ibHVlLWxpZ2h0IHtcbiAgY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbGlnaHRcIil9O1xufVxuLnRleHQtYmx1ZS1tYWluIHtcbiAgY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbWFpblwiKX07XG59XG4udGV4dC1ibHVlLWRhcmsge1xuICBjb2xvcjogI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1kYXJrXCIpfTtcbn1cblxuLy9iYWNrZ3JvdW5kXG4uYmctZ3JleS1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImdyZXktbGlnaHRcIil9O1xufVxuLmJnLWdyZXktZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImdyZXktNVwiKX07XG59XG4uYmctYmx1ZS1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbGlnaHRcIil9O1xufVxuLmJnLWJsdWUtbWFpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbWFpblwiKX07XG59XG4uYmctYmx1ZS1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1kYXJrXCIpfTtcbn1cblxuLy90ZXh0XG4udGV4dC14cyB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbn1cbi50ZXh0LXNtIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn1cbi50ZXh0LWJhc2Uge1xuICBmb250LXNpemU6IDFyZW07XG59XG4udGV4dC1sZyB7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG59XG5cbi50ZXh0LXhsIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuXG4udGV4dC0yeGwge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLnRleHQtM3hsIHtcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xufVxuXG4uZm9udC1zZW1pYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uZm9udC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmNhcGl0YWxpemUge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmN1cnNvci1wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucm91bmRlZC14bCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5ib3JkZXItcHJpbWFyeS0xIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1tYWluXCIpfTtcbn1cblxuLmJvcmRlci1wcmltYXJ5LTIge1xuICBib3JkZXI6IDJweCBzb2xpZCAje3BhbGV0dGUtY29sb3IoXCJibHVlLW1haW5cIil9O1xufVxuXG4uY3VzdG9tLXNjcm9sbHtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xufVxuLmN1c3RvbS1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IC41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiZ3JleS1saWdodFwiKX07XG59XG5cblxuLmN1c3RvbS1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IC4zZW0gc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiZ3JleS01XCIpfTtcbn1cbiIsIkBpbXBvcnQgXCJzaGFyZWRcIjtcblxuLmN1c3RvbS1zZWxlY3Qtd3JhcHBlciB7XG4gIEBpbmNsdWRlIGJvb3RzdHJhcC1zZWxlY3Qtc3R5bGVzKCk7XG59XG5cbi50YWJsZS13cmFwcGVyIHtcbiAgQGluY2x1ZGUgdGFibGUtYmFzaWMtc3R5bGVzKCk7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgdGgubWF0LWhlYWRlci1jZWxsIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cblxuICB0YWJsZSB7XG4gICAgbWluLXdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xuICB9XG4gIC50YWJsZS1zbSB7XG4gICAgdGgge1xuICAgICAgcGFkZGluZzogMC44cmVtO1xuICAgIH1cbiAgfVxuICB0cjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1saWdodFwiKX07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLmFkZC12ZWhpY2xlLWJ0biB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICBib3R0b206IDA7XG4gICAgei1pbmRleDogMTA7XG4gIH1cbn1cblxuLm5ldy1pbnZvaWNlLWZvcm0ge1xuICBtYXgtaGVpZ2h0OiA3MHZoO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIHtcbiAgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgfVxufVxuXG4uYWN0aW9uLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGJ1dHRvbiB7XG4gICAgYWxsOiB1bnNldDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAwLjg7XG4gIH1cbiAgbWF0LWljb24ge1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICB9XG59XG5cbi5jdXN0LWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBAbWVkaWEgKG1pbi13aWR0aDogNjcycHgpIHtcbiAgICB3aWR0aDogMTEwcHg7XG4gIH1cbn1cbiIsIkBtaXhpbiBtYXRlcmlhbC1zZWxlY3Qtc3R5bGVzKCkge1xuICAvLyBtYXRlcmlhbCBzZWxlY3Qgc3R5bGVzXG4gIC5tYXQtc2VsZWN0LXBhbmVsIHtcbiAgICBAaW5jbHVkZSBtYXRlcmlhbC1hdXRvY29tcGxldGUtc3R5bGVzKCk7XG4gIH1cbn1cblxuQG1peGluIGJvb3RzdHJhcC1zZWxlY3Qtc3R5bGVzKCkge1xuICAvLyBzZWxlY3QgY29tcG9uZW50IHdpdGggY3VzdG9tIGljb25cbiAgLS1zZWxlY3QtcGFkZGluZzogMTJweDtcbiAgLS1zZWxlY3QtaWNvbi13aWR0aDogMTRweDtcbiAgLS1mb3JtLWljb25zLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ3ByaW1hcnknKX07XG4gIC0tZm9ybS1pbnB1dC1iYWNrZ3JvdW5kOiAje3BhbGV0dGUtY29sb3IoJ2dyZXktMCcpfTtcblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgLmN1c3RvbS1zZWxlY3Qge1xuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tc2VsZWN0LXBhZGRpbmcpIC8gMikgdmFyKC0tc2VsZWN0LXBhZGRpbmcpO1xuICAgIHBhZGRpbmctaW5saW5lLWVuZDogY2FsYyh2YXIoLS1zZWxlY3QtcGFkZGluZykgKyB2YXIoLS1zZWxlY3QtaWNvbi13aWR0aCkpO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9ybS1pbnB1dC1iYWNrZ3JvdW5kKTtcbiAgfVxuICAuaGFsZi1hcnJvdy1pY29uIHtcbiAgICByaWdodDogdmFyKC0tc2VsZWN0LXBhZGRpbmcpO1xuICAgIHRvcDogMHB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogdmFyKC0tc2VsZWN0LWljb24td2lkdGgpO1xuICAgIGNvbG9yOiB2YXIoLS1mb3JtLWljb25zLWNvbG9yKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCJwYWxldHRlcy9zaGFyZWRcIjtcblxuQG1peGluIHRhYmxlLWJhc2ljLXN0eWxlcygpIHtcbiAgLS10YWJsZS1oZWFkZXItY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcIndoaXRlXCIpfTtcbiAgLS10YWJsZS1oZWFkZXItYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1tYWluXCIpfTtcbiAgLS10YWJsZS10ZXh0LWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJncmV5LTlcIil9O1xuICAtLXRhYmxlLXJvdy1ob3Zlci1iYWNrZ3JvdW5kOiAje3BhbGV0dGUtY29sb3IoXCJibHVlLWxpZ2h0XCIpfTtcblxuICAtLXBhZ2UtYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKFwid2hpdGVcIil9O1xuICAtLXBhZ2Utc3BhY2luZzogMTBweDtcblxuICB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiA2NzJweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgYm9yZGVyLXJhZGl1czogMWVtIDFlbSAwIDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICYudGFibGUtc20ge1xuICAgICAgbWluLXdpZHRoOiAzNzBweDtcblxuICAgICAgdGQge1xuICAgICAgICAmLm1hdC1jZWxsIHtcbiAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLXNwYWNpbmcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aCB7XG4gICAgICAgICYubWF0LWhlYWRlci1jZWxsIHtcbiAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLXNwYWNpbmcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGgge1xuICAgICAgY29sb3I6IHZhcigtLXRhYmxlLWhlYWRlci1jb2xvcik7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWJsZS1oZWFkZXItYmFja2dyb3VuZCk7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDgyMXB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtaGVhZGVyLWNlbGwge1xuICAgICAgICBib3JkZXItYm90dG9tLXN0eWxlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykpO1xuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogODIxcHgpIHtcbiAgICAgICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRkIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10YWJsZS10ZXh0LWNvbG9yKTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogODIxcHgpIHtcbiAgICAgICAgZm9udC1zaXplOi45ZW07XG4gICAgICB9XG4gICAgICAmLm1hdC1jZWxsIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogdmFyKC0tcGFnZS1zcGFjaW5nKSBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykpO1xuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogODIxcHgpIHtcbiAgICAgICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRyLm1hdC1yb3cge1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzO1xuXG4gICAgICB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xuICAgICAgfVxuICAgICAgdGQ6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA2cHg7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWJsZS1yb3ctaG92ZXItYmFja2dyb3VuZCk7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICA6Om5nLWRlZXAgW21hdC10YWJsZV0ge1xuICAgIC5tYXQtc29ydC1oZWFkZXItYXJyb3cge1xuICAgICAgY29sb3I6IHZhcigtLXRhYmxlLWhlYWRlci1jb2xvcik7XG4gICAgfVxuICB9XG5cbiAgbWF0LXBhZ2luYXRvcixcbiAgLnRhYmxlLXdpZHRoIHtcbiAgICBtaW4td2lkdGg6IDY3MnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbkBtaXhpbiB0YWJsZS1wYWdpbmF0b3Itc3R5bGVzKCkge1xuICAtLXBhZ2luYXRvci1iYWNrZ3JvdW5kOiAje3BhbGV0dGUtY29sb3IoXCJncmV5LTBcIil9O1xuICAtLXBhZ2luYXRvci10ZXh0LWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJncmV5LTVcIil9O1xuICAtLXBhZ2luYXRvci1jb250cm9scy1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwicHJpbWFyeS1kYXJrXCIpfTtcbiAgLS1wYWdpbmF0b3ItZGlzYWJsZWQtY29udHJvbHMtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcInByaW1hcnktZGFya1wiLCAwLjEpfTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdpbmF0b3ItYmFja2dyb3VuZCk7XG5cbiAgLy8gT3ZlcnJpZGUgTWF0ZXJpYWwgc3R5bGVzXG4gIC5tYXQtcGFnaW5hdG9yLWNvbnRhaW5lciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWluLXdpZHRoOiA2NzJweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIHtcbiAgICAubWF0LXBhZ2luYXRvci1wYWdlLXNpemUtbGFiZWwge1xuICAgICAgY29sb3I6IHZhcigtLXBhZ2luYXRvci10ZXh0LWNvbG9yKTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAubWF0LXBhZ2luYXRvci1wYWdlLXNpemUtc2VsZWN0IHtcbiAgICAgIC5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhZ2luYXRvci1jb250cm9scy1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cblxuICAgICAgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFnaW5hdG9yLWNvbnRyb2xzLWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9IC8vIC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZVxuXG4gIC5tYXQtcGFnaW5hdG9yLXJhbmdlLWFjdGlvbnMge1xuICAgIC5tYXQtcGFnaW5hdG9yLXJhbmdlLWxhYmVsIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wYWdpbmF0b3ItdGV4dC1jb2xvcik7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLm1hdC1wYWdpbmF0b3ItbmF2aWdhdGlvbi1wcmV2aW91cyxcbiAgICAubWF0LXBhZ2luYXRvci1uYXZpZ2F0aW9uLW5leHQge1xuICAgICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFnaW5hdG9yLWNvbnRyb2xzLWNvbG9yKTtcbiAgICAgIH1cbiAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhZ2luYXRvci1kaXNhYmxlZC1jb250cm9scy1jb2xvcik7XG4gICAgICB9XG4gICAgfVxuICB9IC8vIC5tYXQtcGFnaW5hdG9yLXJhbmdlLWFjdGlvbnNcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NewInvoiceDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-new-invoice-dialog",
                templateUrl: "./new-invoice-dialog.component.html",
                styleUrls: ["./new-invoice-dialog.component.scss"],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }, { type: src_app_business_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: src_app_business_state_invoice_state_service__WEBPACK_IMPORTED_MODULE_4__["InvoicesStateService"] }, { type: src_app_business_services_rate_service__WEBPACK_IMPORTED_MODULE_5__["RateService"] }, { type: src_app_shared_notifications_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }, { type: src_app_business_services_invoice_service__WEBPACK_IMPORTED_MODULE_7__["InvoiceService"] }, { type: src_app_business_services_customer_service__WEBPACK_IMPORTED_MODULE_8__["CustomerService"] }]; }, null); })();


/***/ }),

/***/ "WVcr":
/*!******************************************************************************!*\
  !*** ./src/app/invoice/edit-invoice-dialog/edit-invoice-dialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: EditInvoiceDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditInvoiceDialogComponent", function() { return EditInvoiceDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_business_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/business/services/user.service */ "RaVz");
/* harmony import */ var src_app_business_state_invoice_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/business/state/invoice-state.service */ "W7lO");
/* harmony import */ var src_app_business_services_rate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/business/services/rate.service */ "nUUR");
/* harmony import */ var src_app_shared_notifications_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/notifications/notification.service */ "38VU");
/* harmony import */ var src_app_business_services_invoice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/business/services/invoice.service */ "c4Cx");
/* harmony import */ var src_app_business_services_customer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/business/services/customer.service */ "Sdjb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _pipes_location_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../pipes/location.pipe */ "Ebsp");
















function EditInvoiceDialogComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("diameter", 50);
} }
function EditInvoiceDialogComponent_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Select driver...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditInvoiceDialogComponent_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const driver_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", driver_r9.id)("selected", driver_r9.id === (ctx_r2.invoice == null ? null : ctx_r2.invoice.driver == null ? null : ctx_r2.invoice.driver.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, driver_r9.first_name), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, driver_r9.last_name), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" - ", driver_r9.email, " ");
} }
function EditInvoiceDialogComponent_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r10 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", status_r10.value)("selected", (ctx_r3.invoice == null ? null : ctx_r3.invoice.status) && status_r10.value === (ctx_r3.invoice == null ? null : ctx_r3.invoice.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.viewMode ? ctx_r3.parseStatus(ctx_r3.invoice.status) : status_r10.label, " ");
} }
function EditInvoiceDialogComponent_tr_58_td_8_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditInvoiceDialogComponent_tr_58_td_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const vehicle_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.data.onEditVehicle(vehicle_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditInvoiceDialogComponent_tr_58_td_8_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const vehicle_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.data.onDeleteVehicle(vehicle_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditInvoiceDialogComponent_tr_58_td_9_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditInvoiceDialogComponent_tr_58_td_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const vehicle_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.data.onEditVehicle(vehicle_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditInvoiceDialogComponent_tr_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, EditInvoiceDialogComponent_tr_58_td_8_Template, 5, 0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, EditInvoiceDialogComponent_tr_58_td_9_Template, 3, 0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vehicle_r11 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", vehicle_r11.year, " ", vehicle_r11.make, " ", vehicle_r11.model, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](vehicle_r11.vin);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 7, vehicle_r11.amount));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r4.viewMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.viewMode);
} }
function EditInvoiceDialogComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No vehicles added");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditInvoiceDialogComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditInvoiceDialogComponent_div_60_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.data.onAddVehicle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "+ Add vehicle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditInvoiceDialogComponent_div_93_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditInvoiceDialogComponent_div_93_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.onCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditInvoiceDialogComponent_div_93_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditInvoiceDialogComponent_div_94_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditInvoiceDialogComponent_div_94_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.onCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const statuses = [
    { value: "DRAFT", label: "Draft" },
    { value: "SUBMITTED_FOR_REVIEW", label: "Submitted for review" },
];
class EditInvoiceDialogComponent {
    constructor(dialogRef, data, userService, invoicesState, rateService, notificationService, invoiceService, customerService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.userService = userService;
        this.invoicesState = invoicesState;
        this.rateService = rateService;
        this.notificationService = notificationService;
        this.invoiceService = invoiceService;
        this.customerService = customerService;
        this.subscriptions = [];
        this.statuses = statuses;
        this.isLoading = false;
        const sub1 = this.userService.users.subscribe((data) => {
            this.drivers = data;
        });
        const sub2 = this.invoicesState.selectedInvoice$.subscribe((invoice) => {
            this.invoice = invoice;
            this.viewMode = invoice.status !== "DRAFT" && invoice.status !== "SUBMITTED_FOR_REVIEW";
        });
        this.subscriptions.push(sub1, sub2);
    }
    ngOnInit() {
        this.userService.fetchUsers();
        const sub = this.customerService.getMostRecents().subscribe((data) => {
            this.invoicesState.setMostRecentsCustomers(data);
        });
        this.subscriptions.push(sub);
    }
    onSelectDriver(event) {
        this.invoicesState.setSelectedInvoice({ driver: this.drivers.find((d) => d.id === event.target.value) });
    }
    onSelectStatus(event) {
        this.invoicesState.setSelectedInvoice({ status: event.target.value });
    }
    getSubTotal() {
        var _a, _b;
        let subtotal = 0;
        (_b = (_a = this.invoice) === null || _a === void 0 ? void 0 : _a.vehicles) === null || _b === void 0 ? void 0 : _b.forEach((v) => {
            subtotal += v.amount;
        });
        return subtotal;
    }
    getTotal() {
        var _a, _b;
        let total = 0;
        (_b = (_a = this.invoice) === null || _a === void 0 ? void 0 : _a.vehicles) === null || _b === void 0 ? void 0 : _b.forEach((v) => {
            total += v.amount;
        });
        return total;
    }
    getWeight() {
        var _a, _b;
        let weight = 0;
        (_b = (_a = this.invoice) === null || _a === void 0 ? void 0 : _a.vehicles) === null || _b === void 0 ? void 0 : _b.forEach((v) => {
            weight += Number(v.weight);
        });
        return weight;
    }
    getDriverCommissionAmount() {
        var _a, _b, _c;
        const total = this.getSubTotal();
        const driverCommission = (_c = (_b = (_a = this.invoice) === null || _a === void 0 ? void 0 : _a.driver) === null || _b === void 0 ? void 0 : _b.commission) !== null && _c !== void 0 ? _c : 0;
        const amount = total * (driverCommission / 100);
        return amount;
    }
    onSubmit() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        if (!((_a = this.invoice) === null || _a === void 0 ? void 0 : _a.driver) ||
            !((_b = this.invoice) === null || _b === void 0 ? void 0 : _b.status) ||
            !((_c = this.invoice) === null || _c === void 0 ? void 0 : _c.bill_to) ||
            !((_e = (_d = this.invoice) === null || _d === void 0 ? void 0 : _d.ship_from) !== null && _e !== void 0 ? _e : (_f = this.invoice) === null || _f === void 0 ? void 0 : _f.quick_ship_from) ||
            !((_h = (_g = this.invoice) === null || _g === void 0 ? void 0 : _g.ship_to) !== null && _h !== void 0 ? _h : (_j = this.invoice) === null || _j === void 0 ? void 0 : _j.quick_ship_to)) {
            this.notificationService.error("Missed fields required");
            return;
        }
        if (!((_l = (_k = this.invoice) === null || _k === void 0 ? void 0 : _k.vehicles) === null || _l === void 0 ? void 0 : _l.length)) {
            this.notificationService.error("Missed vehicles required");
            return;
        }
        const body = {
            bill_to: this.invoice.bill_to.id,
            ship_from: (_m = this.invoice.ship_from) === null || _m === void 0 ? void 0 : _m.id,
            ship_to: (_o = this.invoice.ship_to) === null || _o === void 0 ? void 0 : _o.id,
            quick_ship_from: this.invoice.quick_ship_from,
            quick_ship_to: this.invoice.quick_ship_to,
            driver_id: this.invoice.driver.id,
            status: this.invoice.status,
            vehicles: (_p = this.invoice.vehicles) === null || _p === void 0 ? void 0 : _p.map((_a) => {
                var { _id } = _a, rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["_id"]);
                return rest;
            }),
        };
        this.isLoading = true;
        this.invoiceService.updateInvoice(body, this.invoice.id).subscribe((res) => {
            this.isLoading = false;
            this.data.setCurrentStep(0);
            this.notificationService.success("Invoice updated");
            this.dialogRef.close();
        }, (err) => {
            this.notificationService.error();
            this.isLoading = false;
        });
    }
    onCancel() {
        this.invoicesState.resetSelectedInvoice();
        this.data.setCurrentStep(0);
        this.dialogRef.close();
    }
    parseStatus(status) {
        switch (status) {
            case "DRAFT":
                return "Draft";
            case "SUBMITTED_FOR_REVIEW":
                return "Submitted for review";
            case "SUBMITTED_TO_CUSTOMER":
                return "Submitted to customer";
            case "PAID":
                return "Paid";
            default:
                return "Unknown";
        }
    }
    ngOnDestroy() {
        this.subscriptions.forEach((sub) => sub.unsubscribe());
    }
}
EditInvoiceDialogComponent.ɵfac = function EditInvoiceDialogComponent_Factory(t) { return new (t || EditInvoiceDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_business_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_business_state_invoice_state_service__WEBPACK_IMPORTED_MODULE_4__["InvoicesStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_business_services_rate_service__WEBPACK_IMPORTED_MODULE_5__["RateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_notifications_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_business_services_invoice_service__WEBPACK_IMPORTED_MODULE_7__["InvoiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_business_services_customer_service__WEBPACK_IMPORTED_MODULE_8__["CustomerService"])); };
EditInvoiceDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditInvoiceDialogComponent, selectors: [["app-edit-invoice-dialog"]], decls: 95, vars: 38, consts: [[1, "dialog-content", "custom-scroll"], ["class", "dialog-loader", 4, "ngIf"], [1, "form-group", "w-100", "mt-3", "new-invoice-form", "mb-2"], [1, "col-12", "d-flex", "justify-content-between", "mb-3", "text-xl"], [1, "col-12", "mb-3"], ["for", "driver", 1, "text-dark", "text-base"], [1, "custom-select-wrapper"], [1, "custom-select", "form-control", 3, "disabled", "change"], ["selected", "", "disabled", "", "value", "", 4, "ngIf"], [3, "value", "selected", 4, "ngFor", "ngForOf"], ["svgIcon", "half-arrow-down", 1, "half-arrow-icon"], ["for", "status", 1, "text-dark", "text-base"], [1, "mt-2", "w-100"], [1, "col-12", "d-flex", "flex-column", "align-items-start", "flex-md-row", "align-items-md-center", "mb-3"], ["type", "button", 1, "flex-shrink-0", "btn", "btn-primary", "mr-3", "cust-btn", 3, "disabled", "click"], [1, "bg-grey-light", "flex-grow-1", "h-100", "p-2", "rounded-lg", "w-100"], [1, "col-12", "d-flex", "flex-column", "align-items-start", "flex-md-row", "align-items-md-center"], [1, "w-100", "mb-3", "table-wrapper", "table-responsive", "custom-scroll"], [1, "table", "table-sm", "mb-0", "pb-5"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["class", "w-100 text-center", 4, "ngIf"], ["class", "flex-grow-1 bg-light add-vehicle-btn py-1", 4, "ngIf"], [1, "w-100", "bg-grey-light", "p-4", "rounded-lg"], [1, "row"], [1, "col-8", "text-right"], [1, "col-4", "text-right"], [1, "col-12", "border", "border-secondary", "my-2", 2, "opacity", "0.25"], [1, "row", "font-bold"], ["class", "d-flex w-100 px-0 px-md-4 pt-4 justify-content-between my-2", 4, "ngIf"], ["class", "d-flex w-100 px-0 px-md-4 pt-4 justify-content-center my-2", 4, "ngIf"], [1, "dialog-loader"], [3, "diameter"], ["selected", "", "disabled", "", "value", ""], [3, "value", "selected"], ["class", "action-buttons", 4, "ngIf"], ["class", "action-buttons justify-content-center", 4, "ngIf"], [1, "action-buttons"], [3, "click"], [1, "fas", "fa-edit", "text-xl", "mr-3"], [1, "fas", "fa-trash-alt", "text-xl"], [1, "action-buttons", "justify-content-center"], [1, "fas", "fa-eye", "text-xl", "mr-3"], [1, "w-100", "text-center"], [1, "border", "py-2"], [1, "flex-grow-1", "bg-light", "add-vehicle-btn", "py-1"], [1, "w-100", "btn", "btn-outline-primary", 3, "click"], [1, "d-flex", "w-100", "px-0", "px-md-4", "pt-4", "justify-content-between", "my-2"], [1, "col-5"], ["type", "button", 1, "btn", "w-100", "btn-secondary", 3, "click"], [1, "btn", "w-100", "btn-success", 3, "click"], [1, "d-flex", "w-100", "px-0", "px-md-4", "pt-4", "justify-content-center", "my-2"]], template: function EditInvoiceDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditInvoiceDialogComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Driver");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EditInvoiceDialogComponent_Template_select_change_15_listener($event) { return ctx.onSelectDriver($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, EditInvoiceDialogComponent_option_16_Template, 2, 0, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, EditInvoiceDialogComponent_option_17_Template, 6, 9, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EditInvoiceDialogComponent_Template_select_change_23_listener($event) { return ctx.onSelectStatus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, EditInvoiceDialogComponent_option_24_Template, 2, 3, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditInvoiceDialogComponent_Template_button_click_28_listener() { return ctx.data.onBillTo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Bill To");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "location");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditInvoiceDialogComponent_Template_button_click_34_listener() { return ctx.data.onShipFrom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Ship From");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "location");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditInvoiceDialogComponent_Template_button_click_40_listener() { return ctx.data.onShipTo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Ship To");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](44, "location");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Vehicle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Vin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, EditInvoiceDialogComponent_tr_58_Template, 10, 9, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, EditInvoiceDialogComponent_div_59_Template, 3, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, EditInvoiceDialogComponent_div_60_Template, 3, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Sub total:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Driver commission:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Driver commission amount:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Total units:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Weight(kg):");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Total:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](93, EditInvoiceDialogComponent_div_93_Template, 7, 0, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](94, EditInvoiceDialogComponent_div_94_Template, 4, 0, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var tmp_18_0 = null;
        var tmp_20_0 = null;
        var tmp_22_0 = null;
        var tmp_23_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.viewMode ? "Invoice" : "Edit Invoice");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Invoice #: ", ctx.invoice == null ? null : ctx.invoice.number, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](10, 29, ctx.invoice == null ? null : ctx.invoice.date, "MM/dd/yyyy"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.viewMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.invoice == null ? null : ctx.invoice.driver));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.drivers);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.viewMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.statuses);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.viewMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", (ctx.invoice == null ? null : ctx.invoice.bill_to) ? ctx.invoice == null ? null : ctx.invoice.bill_to.name : "----", " ", (ctx.invoice == null ? null : ctx.invoice.bill_to) && " - " + _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 32, ctx.invoice == null ? null : ctx.invoice.bill_to.city), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.viewMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", (((ctx.invoice == null ? null : ctx.invoice.ship_from) || (ctx.invoice == null ? null : ctx.invoice.quick_ship_from)) == null ? null : ((ctx.invoice == null ? null : ctx.invoice.ship_from) || (ctx.invoice == null ? null : ctx.invoice.quick_ship_from)).name) || "----", " ", ((ctx.invoice == null ? null : ctx.invoice.ship_from) || (ctx.invoice == null ? null : ctx.invoice.quick_ship_from)) && " - " + _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 34, ((ctx.invoice == null ? null : ctx.invoice.ship_from) || (ctx.invoice == null ? null : ctx.invoice.quick_ship_from)) == null ? null : ((ctx.invoice == null ? null : ctx.invoice.ship_from) || (ctx.invoice == null ? null : ctx.invoice.quick_ship_from)).city), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.viewMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", (((ctx.invoice == null ? null : ctx.invoice.ship_to) || (ctx.invoice == null ? null : ctx.invoice.quick_ship_to)) == null ? null : ((ctx.invoice == null ? null : ctx.invoice.ship_to) || (ctx.invoice == null ? null : ctx.invoice.quick_ship_to)).name) || "----", " ", ((ctx.invoice == null ? null : ctx.invoice.ship_to) || (ctx.invoice == null ? null : ctx.invoice.quick_ship_to)) && " - " + _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](44, 36, ((ctx.invoice == null ? null : ctx.invoice.ship_to) || (ctx.invoice == null ? null : ctx.invoice.quick_ship_to)) == null ? null : ((ctx.invoice == null ? null : ctx.invoice.ship_to) || (ctx.invoice == null ? null : ctx.invoice.quick_ship_to)).city), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.invoice == null ? null : ctx.invoice.vehicles);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.invoice == null ? null : ctx.invoice.vehicles == null ? null : ctx.invoice.vehicles.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.viewMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", (tmp_18_0 = ctx.getSubTotal()) == null ? null : tmp_18_0.toFixed(2), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("%", (ctx.invoice == null ? null : ctx.invoice.driver == null ? null : ctx.invoice.driver.commission) || 0, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", (tmp_20_0 = ctx.getDriverCommissionAmount()) == null ? null : tmp_20_0.toFixed(2), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((ctx.invoice == null ? null : ctx.invoice.vehicles == null ? null : ctx.invoice.vehicles.length) || 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_22_0 = ctx.getWeight()) == null ? null : tmp_22_0.toFixed(2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", (tmp_23_0 = ctx.getTotal()) == null ? null : tmp_23_0.toFixed(2), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.viewMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.viewMode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatSpinner"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"], _pipes_location_pipe__WEBPACK_IMPORTED_MODULE_13__["LocationPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CurrencyPipe"]], styles: [".text-blue-light[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-light-rgb));\n}\n.text-blue-main[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-main-rgb));\n}\n.text-blue-dark[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-dark-rgb));\n}\n.bg-grey-light[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-grey-light-rgb));\n}\n.bg-grey-dark[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-grey-5-rgb));\n}\n.bg-blue-light[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-light-rgb));\n}\n.bg-blue-main[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-main-rgb));\n}\n.bg-blue-dark[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-dark-rgb));\n}\n.text-xs[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.text-base[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.text-lg[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.text-xl[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.text-2xl[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.text-3xl[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.capitalize[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.rounded-xl[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  overflow: hidden;\n}\n.border-primary-1[_ngcontent-%COMP%] {\n  border: 1px solid rgb(var(--palette-blue-main-rgb));\n}\n.border-primary-2[_ngcontent-%COMP%] {\n  border: 2px solid rgb(var(--palette-blue-main-rgb));\n}\n.custom-scroll[_ngcontent-%COMP%] {\n  padding-right: 4px;\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0.5em;\n  border-radius: 5px;\n  background-color: rgb(var(--palette-grey-light-rgb));\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  border: 0.3em solid;\n  border-color: rgb(var(--palette-grey-5-rgb));\n}\n.custom-select-wrapper[_ngcontent-%COMP%] {\n  --select-padding: 12px;\n  --select-icon-width: 14px;\n  --form-icons-color: rgb(var(--palette-primary-rgb));\n  --form-input-background: rgb(var(--palette-grey-0-rgb));\n  position: relative;\n}\n.custom-select-wrapper[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%] {\n  padding: calc(var(--select-padding) / 2) var(--select-padding);\n  -webkit-padding-end: calc(var(--select-padding) + var(--select-icon-width));\n          padding-inline-end: calc(var(--select-padding) + var(--select-icon-width));\n  background: none;\n  background-color: var(--form-input-background);\n}\n.custom-select-wrapper[_ngcontent-%COMP%]   .half-arrow-icon[_ngcontent-%COMP%] {\n  right: var(--select-padding);\n  top: 0px;\n  pointer-events: none;\n  height: 100%;\n  width: var(--select-icon-width);\n  color: var(--form-icons-color);\n  position: absolute;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  --table-header-color: rgb(var(--palette-white-rgb));\n  --table-header-background: rgb(var(--palette-blue-main-rgb));\n  --table-text-color: rgb(var(--palette-grey-9-rgb));\n  --table-row-hover-background: rgb(var(--palette-blue-light-rgb));\n  --page-background: rgb(var(--palette-white-rgb));\n  --page-spacing: 10px;\n  max-height: 300px;\n  overflow-y: auto;\n  position: relative;\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 672px;\n  background: none;\n  border-collapse: collapse;\n  border-radius: 1em 1em 0 0;\n  overflow: hidden;\n}\n.table-wrapper[_ngcontent-%COMP%]   table.table-sm[_ngcontent-%COMP%] {\n  min-width: 370px;\n}\n.table-wrapper[_ngcontent-%COMP%]   table.table-sm[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%] {\n  padding: var(--page-spacing);\n}\n.table-wrapper[_ngcontent-%COMP%]   table.table-sm[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n  padding: var(--page-spacing);\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: var(--table-header-color);\n  background-color: var(--table-header-background);\n  font-size: 13px;\n  font-weight: 700;\n}\n@media (min-width: 821px) {\n  .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n  border-bottom-style: none;\n  padding: calc(var(--page-spacing));\n}\n@media (min-width: 821px) {\n  .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n    padding: calc(var(--page-spacing) * 2);\n  }\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: var(--table-text-color);\n  line-height: 1.6;\n  font-size: 13px;\n}\n@media (min-width: 821px) {\n  .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    font-size: 0.9em;\n  }\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%] {\n  border-bottom-style: none;\n  padding: var(--page-spacing) calc(var(--page-spacing));\n}\n@media (min-width: 821px) {\n  .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%] {\n    padding: calc(var(--page-spacing) * 2);\n  }\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%] {\n  height: auto;\n  transition: background-color 0.5s;\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]:hover {\n  background-color: var(--table-row-hover-background);\n  transition: background-color 0.5s;\n}\n.table-wrapper[_ngcontent-%COMP%]     [mat-table] .mat-sort-header-arrow {\n  color: var(--table-header-color);\n}\n.table-wrapper[_ngcontent-%COMP%]   mat-paginator[_ngcontent-%COMP%], .table-wrapper[_ngcontent-%COMP%]   .table-width[_ngcontent-%COMP%] {\n  min-width: 672px;\n  width: 100%;\n}\n.table-wrapper[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n  border: none;\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  min-width: unset !important;\n}\n.table-wrapper[_ngcontent-%COMP%]   .table-sm[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.8rem;\n}\n.table-wrapper[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: rgb(var(--palette-blue-light-rgb));\n  cursor: pointer;\n}\n.table-wrapper[_ngcontent-%COMP%]   .add-vehicle-btn[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0;\n  z-index: 10;\n}\n.new-invoice-form[_ngcontent-%COMP%] {\n  max-height: 70vh;\n  padding-bottom: 1rem;\n  overflow-y: auto;\n}\n[_nghost-%COMP%]     .mat-horizontal-stepper-header {\n  height: 40px !important;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  align-items: center;\n  margin-top: 5px;\n}\n.action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  all: unset;\n  display: inline-block;\n  cursor: pointer;\n  line-height: 0.8;\n}\n.action-buttons[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n.cust-btn[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (min-width: 672px) {\n  .cust-btn[_ngcontent-%COMP%] {\n    width: 110px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9wYWxldHRlcy9zaGFyZWQuc2NzcyIsInNyYy90aGVtZS9wYWxldHRlcy9tb2RlLnNjc3MiLCJzcmMvdGhlbWUvY3VzdG9tLWNsYXNzZXMuc2NzcyIsInNyYy9hcHAvaW52b2ljZS9lZGl0LWludm9pY2UtZGlhbG9nL2VkaXQtaW52b2ljZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvbWl4aW5zL2lucHV0cy9zZWxlY3Quc2NzcyIsInNyYy90aGVtZS9taXhpbnMvdGFibGUtYmFzaWMtc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FETkE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FETkE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FETkE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FETkE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FDTEE7RUFDRSx5Q0FBQTtBQzZDRjtBRDNDQTtFQUNFLHdDQUFBO0FDOENGO0FENUNBO0VBQ0Usd0NBQUE7QUMrQ0Y7QUQzQ0E7RUFDRSxvREFBQTtBQzhDRjtBRDVDQTtFQUNFLGdEQUFBO0FDK0NGO0FEN0NBO0VBQ0Usb0RBQUE7QUNnREY7QUQ5Q0E7RUFDRSxtREFBQTtBQ2lERjtBRC9DQTtFQUNFLG1EQUFBO0FDa0RGO0FEOUNBO0VBQ0Usa0JBQUE7QUNpREY7QUQvQ0E7RUFDRSxtQkFBQTtBQ2tERjtBRGhEQTtFQUNFLGVBQUE7QUNtREY7QURqREE7RUFDRSxtQkFBQTtBQ29ERjtBRGpEQTtFQUNFLGtCQUFBO0FDb0RGO0FEakRBO0VBQ0UsaUJBQUE7QUNvREY7QURqREE7RUFDRSxrQkFBQTtBQ29ERjtBRGpEQTtFQUNFLGdCQUFBO0FDb0RGO0FEbERBO0VBQ0UsZ0JBQUE7QUNxREY7QURsREE7RUFDRSwwQkFBQTtBQ3FERjtBRGxEQTtFQUNFLGVBQUE7QUNxREY7QURsREE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FDcURGO0FEbERBO0VBQ0UsbURBQUE7QUNxREY7QURsREE7RUFDRSxtREFBQTtBQ3FERjtBRGxEQTtFQUNFLGtCQUFBO0FDcURGO0FEbkRBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0RBQUE7QUNzREY7QURsREE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7QUNxREY7QUFsSkE7RUNPRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbURBQUE7RUFDQSx1REFBQTtFQUVBLGtCQUFBO0FEOElGO0FDNUlFO0VBQ0UsOERBQUE7RUFDQSwyRUFBQTtVQUFBLDBFQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4Q0FBQTtBRDhJSjtBQzVJRTtFQUNFLDRCQUFBO0VBQ0EsUUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBRDhJSjtBQXJLQTtFRUhFLG1EQUFBO0VBQ0EsNERBQUE7RUFDQSxrREFBQTtFQUNBLGdFQUFBO0VBRUEsZ0RBQUE7RUFDQSxvQkFBQTtFRkRBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQTZLRjtBRTVLRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FGOEtKO0FFNUtJO0VBQ0UsZ0JBQUE7QUY4S047QUUzS1E7RUFDRSw0QkFBQTtBRjZLVjtBRXpLUTtFQUNFLDRCQUFBO0FGMktWO0FFdEtJO0VBQ0UsZ0NBQUE7RUFDQSxnREFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRndLTjtBRXZLTTtFQUxGO0lBTUksZUFBQTtFRjBLTjtBQUNGO0FFeEtNO0VBQ0UseUJBQUE7RUFDQSxrQ0FBQTtBRjBLUjtBRXpLUTtFQUhGO0lBSUksc0NBQUE7RUY0S1I7QUFDRjtBRXhLSTtFQUNFLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FGMEtOO0FFektNO0VBSkY7SUFLSSxnQkFBQTtFRjRLTjtBQUNGO0FFM0tNO0VBQ0UseUJBQUE7RUFDQSxzREFBQTtBRjZLUjtBRTVLUTtFQUhGO0lBSUksc0NBQUE7RUYrS1I7QUFDRjtBRTNLSTtFQUNFLFlBQUE7RUFDQSxpQ0FBQTtBRjZLTjtBRTNLTTtFQUNFLDJCQUFBO0VBQ0EsOEJBQUE7QUY2S1I7QUUzS007RUFDRSw0QkFBQTtFQUNBLCtCQUFBO0FGNktSO0FFMUtNO0VBQ0UsbURBQUE7RUFDQSxpQ0FBQTtBRjRLUjtBRXRLSTtFQUNFLGdDQUFBO0FGd0tOO0FFcEtFOztFQUVFLGdCQUFBO0VBQ0EsV0FBQTtBRnNLSjtBQTNQRTtFQUNFLFlBQUE7QUE2UEo7QUExUEU7RUFDRSwyQkFBQTtBQTRQSjtBQXpQSTtFQUNFLGVBQUE7QUEyUE47QUF4UEU7RUFDRSxvREFBQTtFQUNBLGVBQUE7QUEwUEo7QUF2UEU7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUF5UEo7QUFyUEE7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUF3UEY7QUFwUEU7RUFDRSx1QkFBQTtBQXVQSjtBQW5QQTtFQUNFLGFBQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBc1BGO0FBclBFO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBdVBKO0FBclBFO0VBQ0UsaUJBQUE7QUF1UEo7QUFuUEE7RUFDRSxXQUFBO0FBc1BGO0FBclBFO0VBRkY7SUFHSSxZQUFBO0VBd1BGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9pbnZvaWNlL2VkaXQtaW52b2ljZS1kaWFsb2cvZWRpdC1pbnZvaWNlLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIFNoYXJlZFxuKi9cblxuQGltcG9ydCAncHJlZmVyZW5jZXMnO1xuQGltcG9ydCAnaW50ZXJmYWNlJztcbkBpbXBvcnQgJ21vZGUnO1xuXG4vLyBBbiBhYnN0cmFjdCB3YXkgdG8gcHJvdmlkZSBjb2xvcnMuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGFuIGludGVyZmFjZSB0byBib3RoIFNhc3MgdmFyaWFibGVzIGFuZCBDU1MgNCB2YXJpYWJsZXMgYmFzZWQgY29sb3IgcGFsZXR0ZXMuXG5AZnVuY3Rpb24gcGFsZXR0ZS1jb2xvcigkY29sb3ItbmFtZSwgJGFscGhhOiAxKSB7XG4gIC8vICRjb2xvci1wYWxldHRlLW1vZGUgICAgICAgID0+ICBEZWZpbmVkIGluIG1vZGUuc2Nzc1xuICAvLyAkY2hvb3Nlbi1wYWxldHRlICAgICAgICAgICA9PiAgRGVmaW5lZCBpbiBtb2RlLnNjc3NcbiAgLy8gJGNvbG9yLXBhbGV0dGUtaW50ZXJmYWNlICAgPT4gIERlZmluZWQgaW4gaW50ZXJmYWNlLnNjc3NcbiAgLy8gJGNzczQtdmFyLXByZWZpeCAgICAgICAgICAgPT4gIERlZmluZWQgaW4gcHJlZmVyZW5jZXMuc2Nzc1xuICAvLyAkY3NzNC1jb2xvci1mb3JtYXQgICAgICAgICA9PiAgRGVmaW5lZCBpbiBwcmVmZXJlbmNlcy5zY3NzXG5cbiAgQGlmICgkY29sb3ItcGFsZXR0ZS1tb2RlID09ICdjc3MtNCcpIHtcbiAgICAkcGFsZXR0ZS1yZWZlcmVuY2U6ICRjb2xvci1wYWxldHRlLWludGVyZmFjZTtcblxuICAgICRjb2xvci12YXJpYWJsZS1pbmRleDogaW5kZXgoJHBhbGV0dGUtcmVmZXJlbmNlLCAkY29sb3ItbmFtZSk7XG5cbiAgICBAaWYgKHR5cGVfb2YoJGNvbG9yLXZhcmlhYmxlLWluZGV4KSA9PSAnbnVtYmVyJykge1xuICAgICAgJGNvbG9yLXZhcmlhYmxlLW5hbWU6IG50aCgkcGFsZXR0ZS1yZWZlcmVuY2UsICRjb2xvci12YXJpYWJsZS1pbmRleCk7XG5cbiAgICAgIEBpZiAoJGFscGhhID4gMCBhbmQgJGFscGhhIDwgMSkge1xuICAgICAgICBAcmV0dXJuICN7J3JnYmEodmFyKCcgKyAkY3NzNC12YXItcHJlZml4ICsgJGNvbG9yLXZhcmlhYmxlLW5hbWUgKyAnLScgKyAkY3NzNC1jb2xvci1mb3JtYXQgKycpLCAjeyRhbHBoYX0pJ307XG4gICAgICB9IEBlbHNlIGlmICgkYWxwaGEgPT0gMSkge1xuICAgICAgICBAcmV0dXJuICN7J3JnYih2YXIoJyArICRjc3M0LXZhci1wcmVmaXggKyAkY29sb3ItdmFyaWFibGUtbmFtZSArICctJyArICRjc3M0LWNvbG9yLWZvcm1hdCArICcpKSd9O1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIEBlcnJvciBcIkFscGhhICgjeyRhbHBoYX0pIG11c3QgYmUgYSBudW1iZXJcIjtcbiAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgIEBlcnJvciBcIkNvbG9yICgjeyRjb2xvci1uYW1lfSkgd2FzIG5vdCBmb3VuZCBvbiBDb2xvciBQYWxldHRlIGRlZmluaXRpb24uIE1ha2Ugc3VyZSBpdCdzIGRlZmluZWQgaW4gdGhlIHRoZW1lL3BhbGV0dGVzL2ludGVyZmFjZS5zY3NzIGZpbGVcIjtcbiAgICB9XG4gIH0gQGVsc2UgaWYgKCRjb2xvci1wYWxldHRlLW1vZGUgPT0gJ3Nhc3MnKSB7XG4gICAgJHBhbGV0dGUtcmVmZXJlbmNlOiAkY2hvb3Nlbi1wYWxldHRlO1xuXG4gICAgJGNvbG9yLXZhcmlhYmxlOiBtYXAtZ2V0KCRwYWxldHRlLXJlZmVyZW5jZSwgJGNvbG9yLW5hbWUpO1xuXG4gICAgLy8gQ2hlY2sgaWYgaXQgaXMgYSBTYXNzIGNvbG9yXG4gICAgQGlmICh0eXBlX29mKCRjb2xvci12YXJpYWJsZSkgPT0gJ2NvbG9yJykge1xuICAgICAgQGlmICgkYWxwaGEgPiAwIGFuZCAkYWxwaGEgPCAxKSB7XG4gICAgICAgIEByZXR1cm4gcmdiYSgkY29sb3ItdmFyaWFibGUsICRhbHBoYSk7XG4gICAgICB9IEBlbHNlIGlmICgkYWxwaGEgPT0gMSkge1xuICAgICAgICBAcmV0dXJuICRjb2xvci12YXJpYWJsZTtcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICBAZXJyb3IgXCJBbHBoYSAoI3skYWxwaGF9KSBtdXN0IGJlIGEgbnVtYmVyXCI7XG4gICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICBAZXJyb3IgXCJDb2xvciAoI3skY29sb3ItdmFyaWFibGV9KSBpcyBub3QgYSBTYXNzIGNvbG9yXCI7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAZXJyb3IgJ05vIENvbG9yIFBhbGV0dGUgbW9kZSBzZWxlY3RlZCBpbiB0aGVtZS9wYWxldHRlcy9wcmVmZXJlbmNlcy5zY3NzJztcbiAgfVxufVxuIiwiLypcbiAgQ1NTIDQgTW9kZVxuKi9cbiRjb2xvci1wYWxldHRlLW1vZGU6ICdjc3MtNCc7XG5cblxuLypcbiAgU2FzcyBNb2RlXG4qL1xuLy8gQGltcG9ydCAnY29yZSc7XG4vL1xuLy8gJGNvbG9yLXBhbGV0dGUtbW9kZTogJ3Nhc3MnO1xuLy9cbi8vIC8vIEltcG9ydCB0aGUgZGVmaW5pdGlvbnMgb2YgdGhlIHBhbGV0dGUgeW91IHdhbnQgdG8gdXNlXG4vLyBAaW1wb3J0ICdwYWxldHRlLTEvZGVmaW5pdGlvbnMnO1xuLy8gLy8gQGltcG9ydCAncGFsZXR0ZS0yL2RlZmluaXRpb25zJztcbi8vXG4vLyAvLyBBc3NpZ24gYSBwYXJ0aWN1bGFyIENvbG9yIFBhbGV0dGUgdG8gdGhlICdjaG9vc2VuLXBhbGV0dGUnIHBvaW50ZXIuXG4vLyAvLyAkY2hvb3Nlbi1wYWxldHRlIHdpbGwgYmUgYSBTYXNzIG1hcCBwb2ludGluZyB0byBhbm90aGVyIGNvbG9yIHBhbGV0dGUgU2FzcyBtYXBcbi8vICRjaG9vc2VuLXBhbGV0dGU6IGJ1aWxkU2Fzc1BhbGV0dGUoJHBhbGV0dGUtMSk7XG4vLyAvLyAkY2hvb3Nlbi1wYWxldHRlOiBidWlsZFNhc3NQYWxldHRlKCRwYWxldHRlLTIpO1xuIiwiLy9jb2xvclxuLnRleHQtYmx1ZS1saWdodCB7XG4gIGNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJibHVlLWxpZ2h0XCIpfTtcbn1cbi50ZXh0LWJsdWUtbWFpbiB7XG4gIGNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJibHVlLW1haW5cIil9O1xufVxuLnRleHQtYmx1ZS1kYXJrIHtcbiAgY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtZGFya1wiKX07XG59XG5cbi8vYmFja2dyb3VuZFxuLmJnLWdyZXktbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJncmV5LWxpZ2h0XCIpfTtcbn1cbi5iZy1ncmV5LWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJncmV5LTVcIil9O1xufVxuLmJnLWJsdWUtbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJibHVlLWxpZ2h0XCIpfTtcbn1cbi5iZy1ibHVlLW1haW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJibHVlLW1haW5cIil9O1xufVxuLmJnLWJsdWUtZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtZGFya1wiKX07XG59XG5cbi8vdGV4dFxuLnRleHQteHMge1xuICBmb250LXNpemU6IDAuNzVyZW07XG59XG4udGV4dC1zbSB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG59XG4udGV4dC1iYXNlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLnRleHQtbGcge1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xufVxuXG4udGV4dC14bCB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuLnRleHQtMnhsIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi50ZXh0LTN4bCB7XG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcbn1cblxuLmZvbnQtc2VtaWJvbGQge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmZvbnQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5jYXBpdGFsaXplIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5jdXJzb3ItcG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJvdW5kZWQteGwge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYm9yZGVyLXByaW1hcnktMSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbWFpblwiKX07XG59XG5cbi5ib3JkZXItcHJpbWFyeS0yIHtcbiAgYm9yZGVyOiAycHggc29saWQgI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1tYWluXCIpfTtcbn1cblxuLmN1c3RvbS1zY3JvbGx7XG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcbn1cbi5jdXN0b20tc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAuNWVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImdyZXktbGlnaHRcIil9O1xufVxuXG5cbi5jdXN0b20tc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAuM2VtIHNvbGlkO1xuICBib3JkZXItY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImdyZXktNVwiKX07XG59XG4iLCJAaW1wb3J0IFwic2hhcmVkXCI7XG5cbi5jdXN0b20tc2VsZWN0LXdyYXBwZXIge1xuICBAaW5jbHVkZSBib290c3RyYXAtc2VsZWN0LXN0eWxlcygpO1xufVxuXG4udGFibGUtd3JhcHBlciB7XG4gIEBpbmNsdWRlIHRhYmxlLWJhc2ljLXN0eWxlcygpO1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIHRoLm1hdC1oZWFkZXItY2VsbCB7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG5cbiAgdGFibGUge1xuICAgIG1pbi13aWR0aDogdW5zZXQgIWltcG9ydGFudDtcbiAgfVxuICAudGFibGUtc20ge1xuICAgIHRoIHtcbiAgICAgIHBhZGRpbmc6IDAuOHJlbTtcbiAgICB9XG4gIH1cbiAgdHI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbGlnaHRcIil9O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5hZGQtdmVoaWNsZS1idG4ge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgYm90dG9tOiAwO1xuICAgIHotaW5kZXg6IDEwO1xuICB9XG59XG5cbi5uZXctaW52b2ljZS1mb3JtIHtcbiAgbWF4LWhlaWdodDogNzB2aDtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbjpob3N0IDo6bmctZGVlcCB7XG4gIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlciB7XG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLmFjdGlvbi1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBidXR0b24ge1xuICAgIGFsbDogdW5zZXQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMC44O1xuICB9XG4gIG1hdC1pY29uIHtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgfVxufVxuXG4uY3VzdC1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDY3MnB4KSB7XG4gICAgd2lkdGg6IDExMHB4O1xuICB9XG59XG5cbiIsIkBtaXhpbiBtYXRlcmlhbC1zZWxlY3Qtc3R5bGVzKCkge1xuICAvLyBtYXRlcmlhbCBzZWxlY3Qgc3R5bGVzXG4gIC5tYXQtc2VsZWN0LXBhbmVsIHtcbiAgICBAaW5jbHVkZSBtYXRlcmlhbC1hdXRvY29tcGxldGUtc3R5bGVzKCk7XG4gIH1cbn1cblxuQG1peGluIGJvb3RzdHJhcC1zZWxlY3Qtc3R5bGVzKCkge1xuICAvLyBzZWxlY3QgY29tcG9uZW50IHdpdGggY3VzdG9tIGljb25cbiAgLS1zZWxlY3QtcGFkZGluZzogMTJweDtcbiAgLS1zZWxlY3QtaWNvbi13aWR0aDogMTRweDtcbiAgLS1mb3JtLWljb25zLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ3ByaW1hcnknKX07XG4gIC0tZm9ybS1pbnB1dC1iYWNrZ3JvdW5kOiAje3BhbGV0dGUtY29sb3IoJ2dyZXktMCcpfTtcblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgLmN1c3RvbS1zZWxlY3Qge1xuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tc2VsZWN0LXBhZGRpbmcpIC8gMikgdmFyKC0tc2VsZWN0LXBhZGRpbmcpO1xuICAgIHBhZGRpbmctaW5saW5lLWVuZDogY2FsYyh2YXIoLS1zZWxlY3QtcGFkZGluZykgKyB2YXIoLS1zZWxlY3QtaWNvbi13aWR0aCkpO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9ybS1pbnB1dC1iYWNrZ3JvdW5kKTtcbiAgfVxuICAuaGFsZi1hcnJvdy1pY29uIHtcbiAgICByaWdodDogdmFyKC0tc2VsZWN0LXBhZGRpbmcpO1xuICAgIHRvcDogMHB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogdmFyKC0tc2VsZWN0LWljb24td2lkdGgpO1xuICAgIGNvbG9yOiB2YXIoLS1mb3JtLWljb25zLWNvbG9yKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCJwYWxldHRlcy9zaGFyZWRcIjtcblxuQG1peGluIHRhYmxlLWJhc2ljLXN0eWxlcygpIHtcbiAgLS10YWJsZS1oZWFkZXItY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcIndoaXRlXCIpfTtcbiAgLS10YWJsZS1oZWFkZXItYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1tYWluXCIpfTtcbiAgLS10YWJsZS10ZXh0LWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJncmV5LTlcIil9O1xuICAtLXRhYmxlLXJvdy1ob3Zlci1iYWNrZ3JvdW5kOiAje3BhbGV0dGUtY29sb3IoXCJibHVlLWxpZ2h0XCIpfTtcblxuICAtLXBhZ2UtYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKFwid2hpdGVcIil9O1xuICAtLXBhZ2Utc3BhY2luZzogMTBweDtcblxuICB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiA2NzJweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgYm9yZGVyLXJhZGl1czogMWVtIDFlbSAwIDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICYudGFibGUtc20ge1xuICAgICAgbWluLXdpZHRoOiAzNzBweDtcblxuICAgICAgdGQge1xuICAgICAgICAmLm1hdC1jZWxsIHtcbiAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLXNwYWNpbmcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aCB7XG4gICAgICAgICYubWF0LWhlYWRlci1jZWxsIHtcbiAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLXNwYWNpbmcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGgge1xuICAgICAgY29sb3I6IHZhcigtLXRhYmxlLWhlYWRlci1jb2xvcik7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWJsZS1oZWFkZXItYmFja2dyb3VuZCk7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDgyMXB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtaGVhZGVyLWNlbGwge1xuICAgICAgICBib3JkZXItYm90dG9tLXN0eWxlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykpO1xuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogODIxcHgpIHtcbiAgICAgICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRkIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10YWJsZS10ZXh0LWNvbG9yKTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogODIxcHgpIHtcbiAgICAgICAgZm9udC1zaXplOi45ZW07XG4gICAgICB9XG4gICAgICAmLm1hdC1jZWxsIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogdmFyKC0tcGFnZS1zcGFjaW5nKSBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykpO1xuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogODIxcHgpIHtcbiAgICAgICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRyLm1hdC1yb3cge1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzO1xuXG4gICAgICB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xuICAgICAgfVxuICAgICAgdGQ6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA2cHg7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWJsZS1yb3ctaG92ZXItYmFja2dyb3VuZCk7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICA6Om5nLWRlZXAgW21hdC10YWJsZV0ge1xuICAgIC5tYXQtc29ydC1oZWFkZXItYXJyb3cge1xuICAgICAgY29sb3I6IHZhcigtLXRhYmxlLWhlYWRlci1jb2xvcik7XG4gICAgfVxuICB9XG5cbiAgbWF0LXBhZ2luYXRvcixcbiAgLnRhYmxlLXdpZHRoIHtcbiAgICBtaW4td2lkdGg6IDY3MnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbkBtaXhpbiB0YWJsZS1wYWdpbmF0b3Itc3R5bGVzKCkge1xuICAtLXBhZ2luYXRvci1iYWNrZ3JvdW5kOiAje3BhbGV0dGUtY29sb3IoXCJncmV5LTBcIil9O1xuICAtLXBhZ2luYXRvci10ZXh0LWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJncmV5LTVcIil9O1xuICAtLXBhZ2luYXRvci1jb250cm9scy1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwicHJpbWFyeS1kYXJrXCIpfTtcbiAgLS1wYWdpbmF0b3ItZGlzYWJsZWQtY29udHJvbHMtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcInByaW1hcnktZGFya1wiLCAwLjEpfTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdpbmF0b3ItYmFja2dyb3VuZCk7XG5cbiAgLy8gT3ZlcnJpZGUgTWF0ZXJpYWwgc3R5bGVzXG4gIC5tYXQtcGFnaW5hdG9yLWNvbnRhaW5lciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWluLXdpZHRoOiA2NzJweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIHtcbiAgICAubWF0LXBhZ2luYXRvci1wYWdlLXNpemUtbGFiZWwge1xuICAgICAgY29sb3I6IHZhcigtLXBhZ2luYXRvci10ZXh0LWNvbG9yKTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAubWF0LXBhZ2luYXRvci1wYWdlLXNpemUtc2VsZWN0IHtcbiAgICAgIC5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhZ2luYXRvci1jb250cm9scy1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cblxuICAgICAgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFnaW5hdG9yLWNvbnRyb2xzLWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9IC8vIC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZVxuXG4gIC5tYXQtcGFnaW5hdG9yLXJhbmdlLWFjdGlvbnMge1xuICAgIC5tYXQtcGFnaW5hdG9yLXJhbmdlLWxhYmVsIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wYWdpbmF0b3ItdGV4dC1jb2xvcik7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLm1hdC1wYWdpbmF0b3ItbmF2aWdhdGlvbi1wcmV2aW91cyxcbiAgICAubWF0LXBhZ2luYXRvci1uYXZpZ2F0aW9uLW5leHQge1xuICAgICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFnaW5hdG9yLWNvbnRyb2xzLWNvbG9yKTtcbiAgICAgIH1cbiAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhZ2luYXRvci1kaXNhYmxlZC1jb250cm9scy1jb2xvcik7XG4gICAgICB9XG4gICAgfVxuICB9IC8vIC5tYXQtcGFnaW5hdG9yLXJhbmdlLWFjdGlvbnNcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditInvoiceDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-edit-invoice-dialog",
                templateUrl: "./edit-invoice-dialog.component.html",
                styleUrls: ["./edit-invoice-dialog.component.scss"],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }, { type: src_app_business_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: src_app_business_state_invoice_state_service__WEBPACK_IMPORTED_MODULE_4__["InvoicesStateService"] }, { type: src_app_business_services_rate_service__WEBPACK_IMPORTED_MODULE_5__["RateService"] }, { type: src_app_shared_notifications_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }, { type: src_app_business_services_invoice_service__WEBPACK_IMPORTED_MODULE_7__["InvoiceService"] }, { type: src_app_business_services_customer_service__WEBPACK_IMPORTED_MODULE_8__["CustomerService"] }]; }, null); })();


/***/ }),

/***/ "c4Cx":
/*!******************************************************!*\
  !*** ./src/app/business/services/invoice.service.ts ***!
  \******************************************************/
/*! exports provided: InvoiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceService", function() { return InvoiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _state_invoice_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state/invoice-state.service */ "W7lO");






class InvoiceService {
    constructor(http, invoicesState) {
        this.http = http;
        this.invoicesState = invoicesState;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    fetchInvoices(status, limit = 0, page = 0) {
        return new Promise((resolve, reject) => {
            let url = `${this.baseUrl}/invoices/admin?limit=${limit}&page=${page}`;
            if (status) {
                url += `&status=${status}`;
            }
            else {
                url += `&status=DRAFT&status=SUBMITTED_FOR_REVIEW&status=SUBMITTED_TO_CUSTOMER`;
            }
            this.http.get(url).subscribe((data) => {
                this.invoicesState.setInvoices(data.results);
                resolve(data);
            }, (err) => {
                reject(err);
            });
        });
    }
    saveInvoice(body) {
        return this.http.post(`${this.baseUrl}/invoices/admin`, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
            this.fetchInvoices();
            return res;
        }));
    }
    updateInvoice(body, invoiceId) {
        return this.http.put(`${this.baseUrl}/invoices/admin/${invoiceId}`, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
            this.fetchInvoices();
            return res;
        }));
    }
    deleteInvoice(id) {
        return this.http.delete(`${this.baseUrl}/invoices/admin/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
            this.fetchInvoices();
            return res;
        }));
    }
    submitDraftInvoices(invoiceIds) {
        return this.http.post(`${this.baseUrl}/invoices/admin/submitToReview`, { invoices: invoiceIds }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
            this.fetchInvoices();
            return res;
        }));
    }
    submitInvoicesToQB(invoiceIds) {
        return this.http.post(`${this.baseUrl}/invoices/admin/submitToQB`, { invoices: invoiceIds }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
            this.fetchInvoices();
            return res;
        }));
    }
    submitInvoicesToPaid(invoiceIds) {
        return this.http.post(`${this.baseUrl}/invoices/admin/submitToPaid`, { invoices: invoiceIds }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
            this.fetchInvoices();
            return res;
        }));
    }
    exportToPdf(invoices) {
        return new Promise((resolve, reject) => {
            this.http
                .post(`${this.baseUrl}/invoices/exportToPdf`, { invoices: invoices.map((inv) => inv.id) }, {
                responseType: 'arraybuffer',
            })
                .subscribe((data) => {
                const blob = new Blob([data], { type: 'application/zip' });
                const url = window.URL.createObjectURL(blob);
                //window.open(url);
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'invoices.zip');
                document.body.appendChild(link);
                link.click();
                resolve(true);
            }, (err) => reject(false));
        });
    }
}
InvoiceService.ɵfac = function InvoiceService_Factory(t) { return new (t || InvoiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_state_invoice_state_service__WEBPACK_IMPORTED_MODULE_4__["InvoicesStateService"])); };
InvoiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InvoiceService, factory: InvoiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvoiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _state_invoice_state_service__WEBPACK_IMPORTED_MODULE_4__["InvoicesStateService"] }]; }, null); })();


/***/ }),

/***/ "hdHI":
/*!*******************************************!*\
  !*** ./src/app/invoice/invoice.module.ts ***!
  \*******************************************/
/*! exports provided: routes, InvoiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceModule", function() { return InvoiceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _invoice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoice.component */ "GjIp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _new_invoice_dialog_new_invoice_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-invoice-dialog/new-invoice-dialog.component */ "Vr9K");
/* harmony import */ var _bill_to_dialog_bill_to_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bill-to-dialog/bill-to-dialog.component */ "Htyv");
/* harmony import */ var _ship_select_dialog_ship_select_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ship-select-dialog/ship-select-dialog.component */ "tHuo");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _add_vehicle_dialog_add_vehicle_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-vehicle-dialog/add-vehicle-dialog.component */ "HWoU");
/* harmony import */ var _edit_invoice_dialog_edit_invoice_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit-invoice-dialog/edit-invoice-dialog.component */ "WVcr");
/* harmony import */ var _edit_vehicle_dialog_edit_vehicle_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit-vehicle-dialog/edit-vehicle-dialog.component */ "MGzo");














const routes = [
    {
        path: "",
        component: _invoice_component__WEBPACK_IMPORTED_MODULE_2__["InvoiceComponent"],
    },
];
class InvoiceModule {
}
InvoiceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InvoiceModule });
InvoiceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InvoiceModule_Factory(t) { return new (t || InvoiceModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InvoiceModule, { declarations: [_invoice_component__WEBPACK_IMPORTED_MODULE_2__["InvoiceComponent"],
        _new_invoice_dialog_new_invoice_dialog_component__WEBPACK_IMPORTED_MODULE_5__["NewInvoiceDialogComponent"],
        _bill_to_dialog_bill_to_dialog_component__WEBPACK_IMPORTED_MODULE_6__["BillToDialogComponent"],
        _ship_select_dialog_ship_select_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ShipSelectDialogComponent"],
        _add_vehicle_dialog_add_vehicle_dialog_component__WEBPACK_IMPORTED_MODULE_9__["AddVehicleDialogComponent"],
        _edit_vehicle_dialog_edit_vehicle_dialog_component__WEBPACK_IMPORTED_MODULE_11__["EditVehicleDialogComponent"],
        _edit_invoice_dialog_edit_invoice_dialog_component__WEBPACK_IMPORTED_MODULE_10__["EditInvoiceDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvoiceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _invoice_component__WEBPACK_IMPORTED_MODULE_2__["InvoiceComponent"],
                    _new_invoice_dialog_new_invoice_dialog_component__WEBPACK_IMPORTED_MODULE_5__["NewInvoiceDialogComponent"],
                    _bill_to_dialog_bill_to_dialog_component__WEBPACK_IMPORTED_MODULE_6__["BillToDialogComponent"],
                    _ship_select_dialog_ship_select_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ShipSelectDialogComponent"],
                    _add_vehicle_dialog_add_vehicle_dialog_component__WEBPACK_IMPORTED_MODULE_9__["AddVehicleDialogComponent"],
                    _edit_vehicle_dialog_edit_vehicle_dialog_component__WEBPACK_IMPORTED_MODULE_11__["EditVehicleDialogComponent"],
                    _edit_invoice_dialog_edit_invoice_dialog_component__WEBPACK_IMPORTED_MODULE_10__["EditInvoiceDialogComponent"],
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "tHuo":
/*!****************************************************************************!*\
  !*** ./src/app/invoice/ship-select-dialog/ship-select-dialog.component.ts ***!
  \****************************************************************************/
/*! exports provided: ShipSelectDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipSelectDialogComponent", function() { return ShipSelectDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_business_state_invoice_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/business/state/invoice-state.service */ "W7lO");
/* harmony import */ var src_app_business_services_customer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/business/services/customer.service */ "Sdjb");
/* harmony import */ var src_app_business_services_geo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/business/services/geo.service */ "U12X");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");












function ShipSelectDialogComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No customers found");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ShipSelectDialogComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShipSelectDialogComponent_tr_17_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const customer_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.onSelect(customer_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customer_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](customer_r5.name);
} }
function ShipSelectDialogComponent_form_21_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Invalid field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ShipSelectDialogComponent_form_21_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r11 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", state_r11.code)("selected", state_r11.code === (ctx_r9.currentCity == null ? null : ctx_r9.currentCity.state_code));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", state_r11.name, " ");
} }
function ShipSelectDialogComponent_form_21_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r12 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", city_r12.id)("selected", city_r12.name === (ctx_r10.currentCity == null ? null : ctx_r10.currentCity.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", city_r12.name, " ");
} }
function ShipSelectDialogComponent_form_21_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ShipSelectDialogComponent_form_21_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.saveQuickEntry(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ShipSelectDialogComponent_form_21_div_5_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ShipSelectDialogComponent_form_21_Template_select_change_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.onStateChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Select state...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ShipSelectDialogComponent_form_21_option_13_Template, 2, 3, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ShipSelectDialogComponent_form_21_option_20_Template, 2, 3, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r2.customerForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx_r2.customerForm.controls.name.touched && ctx_r2.customerForm.controls.name.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.states);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx_r2.customerForm.controls.city_id.touched && ctx_r2.customerForm.controls.city_id.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.cities[ctx_r2.selectedState]);
} }
function ShipSelectDialogComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No customers found");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ShipSelectDialogComponent_tr_30_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShipSelectDialogComponent_tr_30_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const customer_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.onSelect(customer_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customer_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](customer_r16.name);
} }
class ShipSelectDialogComponent {
    constructor(dialogRef, data, fb, invoicesState, customerService, geoService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.invoicesState = invoicesState;
        this.customerService = customerService;
        this.geoService = geoService;
        this.subscriptions = [];
        this.foundCustomers = [];
        this.showQuickEntry = false;
        this.states = [];
        this.cities = {};
        this.mostRecentsCustomers = [];
    }
    ngOnInit() {
        this.buildForm();
        this.states = this.geoService.states;
        const sub = this.geoService.currentCities.subscribe((data) => {
            var _a, _b;
            this.cities = data;
            if (this.currentCity) {
                this.customerForm.controls.city_id.reset();
                this.customerForm.controls.city_id.setValue((_b = (_a = this.cities[this.selectedState]) === null || _a === void 0 ? void 0 : _a.find((c) => c.name === this.currentCity.name)) === null || _b === void 0 ? void 0 : _b.id);
            }
        });
        this.subscriptions.push(sub);
        //when invoice creating
        if (this.data.action === "new") {
            const sub2 = this.invoicesState.newInvoice$.subscribe((data) => this.handleEditQuickEntry(data));
            this.subscriptions.push(sub2);
        }
        //when invoice updating
        if (this.data.action === "edit") {
            const sub2 = this.invoicesState.selectedInvoice$.subscribe((data) => this.handleEditQuickEntry(data));
            this.subscriptions.push(sub2);
        }
        const sub3 = this.invoicesState.mostRecentsCustomers$.subscribe((data) => {
            this.mostRecentsCustomers = data;
        });
        this.subscriptions.push(sub3);
    }
    handleEditQuickEntry(data) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        if (!data)
            return;
        this.selectedInvoice = data;
        if ((this.data.type === "FROM" && ((_a = this.selectedInvoice) === null || _a === void 0 ? void 0 : _a.quick_ship_from)) ||
            (this.data.type === "TO" && ((_b = this.selectedInvoice) === null || _b === void 0 ? void 0 : _b.quick_ship_to))) {
            if (this.data.type === "FROM") {
                this.currentCity = (_d = (_c = this.selectedInvoice) === null || _c === void 0 ? void 0 : _c.quick_ship_from) === null || _d === void 0 ? void 0 : _d.city;
                this.selectedState = (_f = (_e = this.selectedInvoice) === null || _e === void 0 ? void 0 : _e.quick_ship_from) === null || _f === void 0 ? void 0 : _f.city.state_code;
                this.customerForm.controls.name.setValue((_h = (_g = this.selectedInvoice) === null || _g === void 0 ? void 0 : _g.quick_ship_from) === null || _h === void 0 ? void 0 : _h.name);
            }
            else {
                this.currentCity = (_k = (_j = this.selectedInvoice) === null || _j === void 0 ? void 0 : _j.quick_ship_to) === null || _k === void 0 ? void 0 : _k.city;
                this.selectedState = (_m = (_l = this.selectedInvoice) === null || _l === void 0 ? void 0 : _l.quick_ship_to) === null || _m === void 0 ? void 0 : _m.city.state_code;
                this.customerForm.controls.name.setValue((_p = (_o = this.selectedInvoice) === null || _o === void 0 ? void 0 : _o.quick_ship_to) === null || _p === void 0 ? void 0 : _p.name);
            }
            this.geoService.fetchCitiesByState(this.selectedState);
            this.customerForm.controls.city_id.reset();
            this.customerForm.controls.city_id.setValue((_r = (_q = this.cities[this.selectedState]) === null || _q === void 0 ? void 0 : _q.find((c) => c.name === this.currentCity.name)) === null || _r === void 0 ? void 0 : _r.id);
            this.showQuickEntry = true;
        }
    }
    buildForm() {
        this.customerForm = this.fb.group({
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            city_id: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    backToInvoice() {
        this.data.onBackToInvoice();
    }
    searchCustomers(e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const query = e.target.value;
            this.foundCustomers = yield this.customerService.searchCustomers(query);
        });
    }
    onSelect(customer, isQuickEntry = false) {
        const setInvoice = this.data.action === "new" ? (data) => this.invoicesState.setNewInvoice(data) : (data) => this.invoicesState.setSelectedInvoice(data);
        const isFrom = this.data.type === "FROM";
        if (isQuickEntry) {
            setInvoice({
                [isFrom ? "quick_ship_from" : "quick_ship_to"]: customer,
                [isFrom ? "ship_from" : "ship_to"]: null,
            });
        }
        else {
            setInvoice({
                [isFrom ? "ship_from" : "ship_to"]: customer,
                [isFrom ? "quick_ship_from" : "quick_ship_to"]: null,
            });
        }
        this.data.onBackToInvoice();
    }
    onQuickEntry(event) {
        event.target.blur();
        this.customerForm.reset();
        this.showQuickEntry = !this.showQuickEntry;
    }
    onStateChange(event) {
        this.selectedState = event.target.value;
        this.geoService.fetchCitiesByState(this.selectedState);
        this.customerForm.controls.city_id.reset();
    }
    saveQuickEntry() {
        var _a;
        if (this.customerForm.invalid) {
            return Object.values(this.customerForm.controls).forEach((control) => {
                if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                    Object.values(control.controls).forEach((control) => control.markAsTouched());
                }
                else {
                    control.markAsTouched();
                }
            });
        }
        else {
            //save customer
            const selectedCity = (_a = this.cities[this.selectedState]) === null || _a === void 0 ? void 0 : _a.find((c) => c.id === this.customerForm.controls.city_id.value);
            const body = {
                name: this.customerForm.controls.name.value,
                city: {
                    name: selectedCity === null || selectedCity === void 0 ? void 0 : selectedCity.name,
                    state: selectedCity === null || selectedCity === void 0 ? void 0 : selectedCity.state_name,
                    state_code: selectedCity === null || selectedCity === void 0 ? void 0 : selectedCity.state_code,
                },
            };
            this.onSelect(body, true);
        }
    }
    ngOnDestroy() {
        this.subscriptions.forEach((sub) => sub.unsubscribe());
    }
}
ShipSelectDialogComponent.ɵfac = function ShipSelectDialogComponent_Factory(t) { return new (t || ShipSelectDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_business_state_invoice_state_service__WEBPACK_IMPORTED_MODULE_4__["InvoicesStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_business_services_customer_service__WEBPACK_IMPORTED_MODULE_5__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_business_services_geo_service__WEBPACK_IMPORTED_MODULE_6__["GeoService"])); };
ShipSelectDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShipSelectDialogComponent, selectors: [["app-ship-select-dialog"]], decls: 34, vars: 6, consts: [[1, "input-group", "pt-3"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fas", "fa-search"], ["type", "text", "placeholder", "Search customer...", 1, "form-control", 3, "input"], [1, "w-100", "text-secondary", "text-sm"], [1, "w-100", "my-3", "table-wrapper", "table-responsive", "custom-scroll"], [1, "table", "table-sm", "table-bordered"], ["scope", "col"], ["class", "w-100 text-center", 4, "ngIf"], [3, "click", 4, "ngFor", "ngForOf"], [1, "flex-grow-1", "bg-light", "quick-entry-btn", "py-1"], [1, "w-100", "btn", "btn-outline-primary", 3, "click"], ["class", "py-2 mt-n4 mb-3 border-primary-1", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "w-100", "mt-3"], [1, "w-100", "text-center"], [1, "border", "py-2"], [3, "click"], [1, "py-2", "mt-n4", "mb-3", "border-primary-1", 3, "formGroup", "ngSubmit"], [1, "col-12", "mb-3"], ["for", "name", 1, "text-dark", "text-base"], ["id", "name", "name", "name", "type", "text", "formControlName", "name", 1, "form-control"], ["class", "form-text invalid-feedback", 4, "ngIf"], ["for", "state", 1, "text-dark", "text-base"], [1, "custom-select-wrapper"], [1, "custom-select", "form-control", 3, "change"], ["selected", "", "value", ""], [3, "value", "selected", 4, "ngFor", "ngForOf"], ["svgIcon", "half-arrow-down", 1, "half-arrow-icon"], ["for", "city_id", 1, "text-dark", "text-base"], ["formControlName", "city_id", 1, "custom-select", "form-control"], [1, "col-12"], ["type", "submit", 1, "btn", "w-100", "btn-success"], [1, "form-text", "invalid-feedback"], [3, "value", "selected"]], template: function ShipSelectDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function ShipSelectDialogComponent_Template_input_input_6_listener($event) { return ctx.searchCustomers($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Min 3 characters");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Customer list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ShipSelectDialogComponent_div_16_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ShipSelectDialogComponent_tr_17_Template, 3, 1, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShipSelectDialogComponent_Template_button_click_19_listener($event) { return ctx.onQuickEntry($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "+ Quick entry");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ShipSelectDialogComponent_form_21_Template, 25, 8, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Most recent");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ShipSelectDialogComponent_div_29_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ShipSelectDialogComponent_tr_30_Template, 3, 1, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShipSelectDialogComponent_Template_button_click_32_listener() { return ctx.backToInvoice(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Back to invoice");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.type === "TO" ? "Ship to" : "Ship from");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.foundCustomers == null ? null : ctx.foundCustomers.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.foundCustomers);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showQuickEntry);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.mostRecentsCustomers == null ? null : ctx.mostRecentsCustomers.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.mostRecentsCustomers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]], styles: [".text-blue-light[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-light-rgb));\n}\n.text-blue-main[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-main-rgb));\n}\n.text-blue-dark[_ngcontent-%COMP%] {\n  color: rgb(var(--palette-blue-dark-rgb));\n}\n.bg-grey-light[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-grey-light-rgb));\n}\n.bg-grey-dark[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-grey-5-rgb));\n}\n.bg-blue-light[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-light-rgb));\n}\n.bg-blue-main[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-main-rgb));\n}\n.bg-blue-dark[_ngcontent-%COMP%] {\n  background-color: rgb(var(--palette-blue-dark-rgb));\n}\n.text-xs[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.text-base[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.text-lg[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.text-xl[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.text-2xl[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.text-3xl[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.capitalize[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.rounded-xl[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  overflow: hidden;\n}\n.border-primary-1[_ngcontent-%COMP%] {\n  border: 1px solid rgb(var(--palette-blue-main-rgb));\n}\n.border-primary-2[_ngcontent-%COMP%] {\n  border: 2px solid rgb(var(--palette-blue-main-rgb));\n}\n.custom-scroll[_ngcontent-%COMP%] {\n  padding-right: 4px;\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0.5em;\n  border-radius: 5px;\n  background-color: rgb(var(--palette-grey-light-rgb));\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  border: 0.3em solid;\n  border-color: rgb(var(--palette-grey-5-rgb));\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  --table-header-color: rgb(var(--palette-white-rgb));\n  --table-header-background: rgb(var(--palette-blue-main-rgb));\n  --table-text-color: rgb(var(--palette-grey-9-rgb));\n  --table-row-hover-background: rgb(var(--palette-blue-light-rgb));\n  --page-background: rgb(var(--palette-white-rgb));\n  --page-spacing: 10px;\n  max-height: 300px;\n  overflow-y: auto;\n  position: relative;\n  text-align: center;\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 672px;\n  background: none;\n  border-collapse: collapse;\n  border-radius: 1em 1em 0 0;\n  overflow: hidden;\n}\n.table-wrapper[_ngcontent-%COMP%]   table.table-sm[_ngcontent-%COMP%] {\n  min-width: 370px;\n}\n.table-wrapper[_ngcontent-%COMP%]   table.table-sm[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%] {\n  padding: var(--page-spacing);\n}\n.table-wrapper[_ngcontent-%COMP%]   table.table-sm[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n  padding: var(--page-spacing);\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: var(--table-header-color);\n  background-color: var(--table-header-background);\n  font-size: 13px;\n  font-weight: 700;\n}\n@media (min-width: 821px) {\n  .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n  border-bottom-style: none;\n  padding: calc(var(--page-spacing));\n}\n@media (min-width: 821px) {\n  .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n    padding: calc(var(--page-spacing) * 2);\n  }\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: var(--table-text-color);\n  line-height: 1.6;\n  font-size: 13px;\n}\n@media (min-width: 821px) {\n  .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    font-size: 0.9em;\n  }\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%] {\n  border-bottom-style: none;\n  padding: var(--page-spacing) calc(var(--page-spacing));\n}\n@media (min-width: 821px) {\n  .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%] {\n    padding: calc(var(--page-spacing) * 2);\n  }\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%] {\n  height: auto;\n  transition: background-color 0.5s;\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]:hover {\n  background-color: var(--table-row-hover-background);\n  transition: background-color 0.5s;\n}\n.table-wrapper[_ngcontent-%COMP%]     [mat-table] .mat-sort-header-arrow {\n  color: var(--table-header-color);\n}\n.table-wrapper[_ngcontent-%COMP%]   mat-paginator[_ngcontent-%COMP%], .table-wrapper[_ngcontent-%COMP%]   .table-width[_ngcontent-%COMP%] {\n  min-width: 672px;\n  width: 100%;\n}\n.table-wrapper[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n  border: none;\n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  min-width: unset !important;\n}\n.table-wrapper[_ngcontent-%COMP%]   .table-sm[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.8rem;\n}\n.table-wrapper[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: rgb(var(--palette-blue-light-rgb));\n  cursor: pointer;\n}\n.table-wrapper[_ngcontent-%COMP%]   .quick-entry-btn[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0;\n  z-index: 10;\n}\n.custom-select-wrapper[_ngcontent-%COMP%] {\n  --select-padding: 12px;\n  --select-icon-width: 14px;\n  --form-icons-color: rgb(var(--palette-primary-rgb));\n  --form-input-background: rgb(var(--palette-grey-0-rgb));\n  position: relative;\n}\n.custom-select-wrapper[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%] {\n  padding: calc(var(--select-padding) / 2) var(--select-padding);\n  -webkit-padding-end: calc(var(--select-padding) + var(--select-icon-width));\n          padding-inline-end: calc(var(--select-padding) + var(--select-icon-width));\n  background: none;\n  background-color: var(--form-input-background);\n}\n.custom-select-wrapper[_ngcontent-%COMP%]   .half-arrow-icon[_ngcontent-%COMP%] {\n  right: var(--select-padding);\n  top: 0px;\n  pointer-events: none;\n  height: 100%;\n  width: var(--select-icon-width);\n  color: var(--form-icons-color);\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9wYWxldHRlcy9zaGFyZWQuc2NzcyIsInNyYy90aGVtZS9wYWxldHRlcy9tb2RlLnNjc3MiLCJzcmMvdGhlbWUvY3VzdG9tLWNsYXNzZXMuc2NzcyIsInNyYy9hcHAvaW52b2ljZS9zaGlwLXNlbGVjdC1kaWFsb2cvc2hpcC1zZWxlY3QtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL21peGlucy90YWJsZS1iYXNpYy1zdHlsZXMuc2NzcyIsInNyYy90aGVtZS9taXhpbnMvaW5wdXRzL3NlbGVjdC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBQ0xBO0VBQ0UseUNBQUE7QUM2Q0Y7QUQzQ0E7RUFDRSx3Q0FBQTtBQzhDRjtBRDVDQTtFQUNFLHdDQUFBO0FDK0NGO0FEM0NBO0VBQ0Usb0RBQUE7QUM4Q0Y7QUQ1Q0E7RUFDRSxnREFBQTtBQytDRjtBRDdDQTtFQUNFLG9EQUFBO0FDZ0RGO0FEOUNBO0VBQ0UsbURBQUE7QUNpREY7QUQvQ0E7RUFDRSxtREFBQTtBQ2tERjtBRDlDQTtFQUNFLGtCQUFBO0FDaURGO0FEL0NBO0VBQ0UsbUJBQUE7QUNrREY7QURoREE7RUFDRSxlQUFBO0FDbURGO0FEakRBO0VBQ0UsbUJBQUE7QUNvREY7QURqREE7RUFDRSxrQkFBQTtBQ29ERjtBRGpEQTtFQUNFLGlCQUFBO0FDb0RGO0FEakRBO0VBQ0Usa0JBQUE7QUNvREY7QURqREE7RUFDRSxnQkFBQTtBQ29ERjtBRGxEQTtFQUNFLGdCQUFBO0FDcURGO0FEbERBO0VBQ0UsMEJBQUE7QUNxREY7QURsREE7RUFDRSxlQUFBO0FDcURGO0FEbERBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQ3FERjtBRGxEQTtFQUNFLG1EQUFBO0FDcURGO0FEbERBO0VBQ0UsbURBQUE7QUNxREY7QURsREE7RUFDRSxrQkFBQTtBQ3FERjtBRG5EQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9EQUFBO0FDc0RGO0FEbERBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0FDcURGO0FBbEpBO0VDQ0UsbURBQUE7RUFDQSw0REFBQTtFQUNBLGtEQUFBO0VBQ0EsZ0VBQUE7RUFFQSxnREFBQTtFQUNBLG9CQUFBO0VETEEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUEwSkY7QUN0SkU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBRHdKSjtBQ3RKSTtFQUNFLGdCQUFBO0FEd0pOO0FDckpRO0VBQ0UsNEJBQUE7QUR1SlY7QUNuSlE7RUFDRSw0QkFBQTtBRHFKVjtBQ2hKSTtFQUNFLGdDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURrSk47QUNqSk07RUFMRjtJQU1JLGVBQUE7RURvSk47QUFDRjtBQ2xKTTtFQUNFLHlCQUFBO0VBQ0Esa0NBQUE7QURvSlI7QUNuSlE7RUFIRjtJQUlJLHNDQUFBO0VEc0pSO0FBQ0Y7QUNsSkk7RUFDRSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBRG9KTjtBQ25KTTtFQUpGO0lBS0ksZ0JBQUE7RURzSk47QUFDRjtBQ3JKTTtFQUNFLHlCQUFBO0VBQ0Esc0RBQUE7QUR1SlI7QUN0SlE7RUFIRjtJQUlJLHNDQUFBO0VEeUpSO0FBQ0Y7QUNySkk7RUFDRSxZQUFBO0VBQ0EsaUNBQUE7QUR1Sk47QUNySk07RUFDRSwyQkFBQTtFQUNBLDhCQUFBO0FEdUpSO0FDckpNO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtBRHVKUjtBQ3BKTTtFQUNFLG1EQUFBO0VBQ0EsaUNBQUE7QURzSlI7QUNoSkk7RUFDRSxnQ0FBQTtBRGtKTjtBQzlJRTs7RUFFRSxnQkFBQTtFQUNBLFdBQUE7QURnSko7QUF4T0U7RUFDRSxZQUFBO0FBME9KO0FBdk9FO0VBQ0UsMkJBQUE7QUF5T0o7QUF0T0k7RUFDRSxlQUFBO0FBd09OO0FBck9FO0VBQ0Usb0RBQUE7RUFDQSxlQUFBO0FBdU9KO0FBcE9FO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBc09KO0FBbE9BO0VFeEJFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxtREFBQTtFQUNBLHVEQUFBO0VBRUEsa0JBQUE7QUY2UEY7QUUzUEU7RUFDRSw4REFBQTtFQUNBLDJFQUFBO1VBQUEsMEVBQUE7RUFDQSxnQkFBQTtFQUNBLDhDQUFBO0FGNlBKO0FFM1BFO0VBQ0UsNEJBQUE7RUFDQSxRQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FGNlBKIiwiZmlsZSI6InNyYy9hcHAvaW52b2ljZS9zaGlwLXNlbGVjdC1kaWFsb2cvc2hpcC1zZWxlY3QtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgU2hhcmVkXG4qL1xuXG5AaW1wb3J0ICdwcmVmZXJlbmNlcyc7XG5AaW1wb3J0ICdpbnRlcmZhY2UnO1xuQGltcG9ydCAnbW9kZSc7XG5cbi8vIEFuIGFic3RyYWN0IHdheSB0byBwcm92aWRlIGNvbG9ycy5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgYW4gaW50ZXJmYWNlIHRvIGJvdGggU2FzcyB2YXJpYWJsZXMgYW5kIENTUyA0IHZhcmlhYmxlcyBiYXNlZCBjb2xvciBwYWxldHRlcy5cbkBmdW5jdGlvbiBwYWxldHRlLWNvbG9yKCRjb2xvci1uYW1lLCAkYWxwaGE6IDEpIHtcbiAgLy8gJGNvbG9yLXBhbGV0dGUtbW9kZSAgICAgICAgPT4gIERlZmluZWQgaW4gbW9kZS5zY3NzXG4gIC8vICRjaG9vc2VuLXBhbGV0dGUgICAgICAgICAgID0+ICBEZWZpbmVkIGluIG1vZGUuc2Nzc1xuICAvLyAkY29sb3ItcGFsZXR0ZS1pbnRlcmZhY2UgICA9PiAgRGVmaW5lZCBpbiBpbnRlcmZhY2Uuc2Nzc1xuICAvLyAkY3NzNC12YXItcHJlZml4ICAgICAgICAgICA9PiAgRGVmaW5lZCBpbiBwcmVmZXJlbmNlcy5zY3NzXG4gIC8vICRjc3M0LWNvbG9yLWZvcm1hdCAgICAgICAgID0+ICBEZWZpbmVkIGluIHByZWZlcmVuY2VzLnNjc3NcblxuICBAaWYgKCRjb2xvci1wYWxldHRlLW1vZGUgPT0gJ2Nzcy00Jykge1xuICAgICRwYWxldHRlLXJlZmVyZW5jZTogJGNvbG9yLXBhbGV0dGUtaW50ZXJmYWNlO1xuXG4gICAgJGNvbG9yLXZhcmlhYmxlLWluZGV4OiBpbmRleCgkcGFsZXR0ZS1yZWZlcmVuY2UsICRjb2xvci1uYW1lKTtcblxuICAgIEBpZiAodHlwZV9vZigkY29sb3ItdmFyaWFibGUtaW5kZXgpID09ICdudW1iZXInKSB7XG4gICAgICAkY29sb3ItdmFyaWFibGUtbmFtZTogbnRoKCRwYWxldHRlLXJlZmVyZW5jZSwgJGNvbG9yLXZhcmlhYmxlLWluZGV4KTtcblxuICAgICAgQGlmICgkYWxwaGEgPiAwIGFuZCAkYWxwaGEgPCAxKSB7XG4gICAgICAgIEByZXR1cm4gI3sncmdiYSh2YXIoJyArICRjc3M0LXZhci1wcmVmaXggKyAkY29sb3ItdmFyaWFibGUtbmFtZSArICctJyArICRjc3M0LWNvbG9yLWZvcm1hdCArJyksICN7JGFscGhhfSknfTtcbiAgICAgIH0gQGVsc2UgaWYgKCRhbHBoYSA9PSAxKSB7XG4gICAgICAgIEByZXR1cm4gI3sncmdiKHZhcignICsgJGNzczQtdmFyLXByZWZpeCArICRjb2xvci12YXJpYWJsZS1uYW1lICsgJy0nICsgJGNzczQtY29sb3ItZm9ybWF0ICsgJykpJ307XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgQGVycm9yIFwiQWxwaGEgKCN7JGFscGhhfSkgbXVzdCBiZSBhIG51bWJlclwiO1xuICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgQGVycm9yIFwiQ29sb3IgKCN7JGNvbG9yLW5hbWV9KSB3YXMgbm90IGZvdW5kIG9uIENvbG9yIFBhbGV0dGUgZGVmaW5pdGlvbi4gTWFrZSBzdXJlIGl0J3MgZGVmaW5lZCBpbiB0aGUgdGhlbWUvcGFsZXR0ZXMvaW50ZXJmYWNlLnNjc3MgZmlsZVwiO1xuICAgIH1cbiAgfSBAZWxzZSBpZiAoJGNvbG9yLXBhbGV0dGUtbW9kZSA9PSAnc2FzcycpIHtcbiAgICAkcGFsZXR0ZS1yZWZlcmVuY2U6ICRjaG9vc2VuLXBhbGV0dGU7XG5cbiAgICAkY29sb3ItdmFyaWFibGU6IG1hcC1nZXQoJHBhbGV0dGUtcmVmZXJlbmNlLCAkY29sb3ItbmFtZSk7XG5cbiAgICAvLyBDaGVjayBpZiBpdCBpcyBhIFNhc3MgY29sb3JcbiAgICBAaWYgKHR5cGVfb2YoJGNvbG9yLXZhcmlhYmxlKSA9PSAnY29sb3InKSB7XG4gICAgICBAaWYgKCRhbHBoYSA+IDAgYW5kICRhbHBoYSA8IDEpIHtcbiAgICAgICAgQHJldHVybiByZ2JhKCRjb2xvci12YXJpYWJsZSwgJGFscGhhKTtcbiAgICAgIH0gQGVsc2UgaWYgKCRhbHBoYSA9PSAxKSB7XG4gICAgICAgIEByZXR1cm4gJGNvbG9yLXZhcmlhYmxlO1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIEBlcnJvciBcIkFscGhhICgjeyRhbHBoYX0pIG11c3QgYmUgYSBudW1iZXJcIjtcbiAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgIEBlcnJvciBcIkNvbG9yICgjeyRjb2xvci12YXJpYWJsZX0pIGlzIG5vdCBhIFNhc3MgY29sb3JcIjtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBlcnJvciAnTm8gQ29sb3IgUGFsZXR0ZSBtb2RlIHNlbGVjdGVkIGluIHRoZW1lL3BhbGV0dGVzL3ByZWZlcmVuY2VzLnNjc3MnO1xuICB9XG59XG4iLCIvKlxuICBDU1MgNCBNb2RlXG4qL1xuJGNvbG9yLXBhbGV0dGUtbW9kZTogJ2Nzcy00JztcblxuXG4vKlxuICBTYXNzIE1vZGVcbiovXG4vLyBAaW1wb3J0ICdjb3JlJztcbi8vXG4vLyAkY29sb3ItcGFsZXR0ZS1tb2RlOiAnc2Fzcyc7XG4vL1xuLy8gLy8gSW1wb3J0IHRoZSBkZWZpbml0aW9ucyBvZiB0aGUgcGFsZXR0ZSB5b3Ugd2FudCB0byB1c2Vcbi8vIEBpbXBvcnQgJ3BhbGV0dGUtMS9kZWZpbml0aW9ucyc7XG4vLyAvLyBAaW1wb3J0ICdwYWxldHRlLTIvZGVmaW5pdGlvbnMnO1xuLy9cbi8vIC8vIEFzc2lnbiBhIHBhcnRpY3VsYXIgQ29sb3IgUGFsZXR0ZSB0byB0aGUgJ2Nob29zZW4tcGFsZXR0ZScgcG9pbnRlci5cbi8vIC8vICRjaG9vc2VuLXBhbGV0dGUgd2lsbCBiZSBhIFNhc3MgbWFwIHBvaW50aW5nIHRvIGFub3RoZXIgY29sb3IgcGFsZXR0ZSBTYXNzIG1hcFxuLy8gJGNob29zZW4tcGFsZXR0ZTogYnVpbGRTYXNzUGFsZXR0ZSgkcGFsZXR0ZS0xKTtcbi8vIC8vICRjaG9vc2VuLXBhbGV0dGU6IGJ1aWxkU2Fzc1BhbGV0dGUoJHBhbGV0dGUtMik7XG4iLCIvL2NvbG9yXG4udGV4dC1ibHVlLWxpZ2h0IHtcbiAgY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbGlnaHRcIil9O1xufVxuLnRleHQtYmx1ZS1tYWluIHtcbiAgY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbWFpblwiKX07XG59XG4udGV4dC1ibHVlLWRhcmsge1xuICBjb2xvcjogI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1kYXJrXCIpfTtcbn1cblxuLy9iYWNrZ3JvdW5kXG4uYmctZ3JleS1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImdyZXktbGlnaHRcIil9O1xufVxuLmJnLWdyZXktZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImdyZXktNVwiKX07XG59XG4uYmctYmx1ZS1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbGlnaHRcIil9O1xufVxuLmJnLWJsdWUtbWFpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbWFpblwiKX07XG59XG4uYmctYmx1ZS1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1kYXJrXCIpfTtcbn1cblxuLy90ZXh0XG4udGV4dC14cyB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbn1cbi50ZXh0LXNtIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn1cbi50ZXh0LWJhc2Uge1xuICBmb250LXNpemU6IDFyZW07XG59XG4udGV4dC1sZyB7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG59XG5cbi50ZXh0LXhsIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuXG4udGV4dC0yeGwge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLnRleHQtM3hsIHtcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xufVxuXG4uZm9udC1zZW1pYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uZm9udC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmNhcGl0YWxpemUge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmN1cnNvci1wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucm91bmRlZC14bCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5ib3JkZXItcHJpbWFyeS0xIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1tYWluXCIpfTtcbn1cblxuLmJvcmRlci1wcmltYXJ5LTIge1xuICBib3JkZXI6IDJweCBzb2xpZCAje3BhbGV0dGUtY29sb3IoXCJibHVlLW1haW5cIil9O1xufVxuXG4uY3VzdG9tLXNjcm9sbHtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xufVxuLmN1c3RvbS1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IC41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiZ3JleS1saWdodFwiKX07XG59XG5cblxuLmN1c3RvbS1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IC4zZW0gc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwiZ3JleS01XCIpfTtcbn1cbiIsIkBpbXBvcnQgXCJzaGFyZWRcIjtcblxuLnRhYmxlLXdyYXBwZXIge1xuICBAaW5jbHVkZSB0YWJsZS1iYXNpYy1zdHlsZXMoKTtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIHRoLm1hdC1oZWFkZXItY2VsbCB7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG5cbiAgdGFibGUge1xuICAgIG1pbi13aWR0aDogdW5zZXQgIWltcG9ydGFudDtcbiAgfVxuICAudGFibGUtc20ge1xuICAgIHRoIHtcbiAgICAgIHBhZGRpbmc6IDAuOHJlbTtcbiAgICB9XG4gIH1cbiAgdHI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcImJsdWUtbGlnaHRcIil9O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5xdWljay1lbnRyeS1idG57XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICBib3R0b206IDA7XG4gICAgei1pbmRleDogMTA7XG4gIH1cbn1cblxuLmN1c3RvbS1zZWxlY3Qtd3JhcHBlciB7XG4gIEBpbmNsdWRlIGJvb3RzdHJhcC1zZWxlY3Qtc3R5bGVzKCk7XG59XG5cbiIsIkBpbXBvcnQgXCJwYWxldHRlcy9zaGFyZWRcIjtcblxuQG1peGluIHRhYmxlLWJhc2ljLXN0eWxlcygpIHtcbiAgLS10YWJsZS1oZWFkZXItY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcIndoaXRlXCIpfTtcbiAgLS10YWJsZS1oZWFkZXItYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKFwiYmx1ZS1tYWluXCIpfTtcbiAgLS10YWJsZS10ZXh0LWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJncmV5LTlcIil9O1xuICAtLXRhYmxlLXJvdy1ob3Zlci1iYWNrZ3JvdW5kOiAje3BhbGV0dGUtY29sb3IoXCJibHVlLWxpZ2h0XCIpfTtcblxuICAtLXBhZ2UtYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKFwid2hpdGVcIil9O1xuICAtLXBhZ2Utc3BhY2luZzogMTBweDtcblxuICB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiA2NzJweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgYm9yZGVyLXJhZGl1czogMWVtIDFlbSAwIDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICYudGFibGUtc20ge1xuICAgICAgbWluLXdpZHRoOiAzNzBweDtcblxuICAgICAgdGQge1xuICAgICAgICAmLm1hdC1jZWxsIHtcbiAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLXNwYWNpbmcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aCB7XG4gICAgICAgICYubWF0LWhlYWRlci1jZWxsIHtcbiAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLXNwYWNpbmcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGgge1xuICAgICAgY29sb3I6IHZhcigtLXRhYmxlLWhlYWRlci1jb2xvcik7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWJsZS1oZWFkZXItYmFja2dyb3VuZCk7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDgyMXB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtaGVhZGVyLWNlbGwge1xuICAgICAgICBib3JkZXItYm90dG9tLXN0eWxlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykpO1xuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogODIxcHgpIHtcbiAgICAgICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRkIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10YWJsZS10ZXh0LWNvbG9yKTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogODIxcHgpIHtcbiAgICAgICAgZm9udC1zaXplOi45ZW07XG4gICAgICB9XG4gICAgICAmLm1hdC1jZWxsIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogdmFyKC0tcGFnZS1zcGFjaW5nKSBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykpO1xuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogODIxcHgpIHtcbiAgICAgICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRyLm1hdC1yb3cge1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzO1xuXG4gICAgICB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xuICAgICAgfVxuICAgICAgdGQ6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA2cHg7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWJsZS1yb3ctaG92ZXItYmFja2dyb3VuZCk7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICA6Om5nLWRlZXAgW21hdC10YWJsZV0ge1xuICAgIC5tYXQtc29ydC1oZWFkZXItYXJyb3cge1xuICAgICAgY29sb3I6IHZhcigtLXRhYmxlLWhlYWRlci1jb2xvcik7XG4gICAgfVxuICB9XG5cbiAgbWF0LXBhZ2luYXRvcixcbiAgLnRhYmxlLXdpZHRoIHtcbiAgICBtaW4td2lkdGg6IDY3MnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbkBtaXhpbiB0YWJsZS1wYWdpbmF0b3Itc3R5bGVzKCkge1xuICAtLXBhZ2luYXRvci1iYWNrZ3JvdW5kOiAje3BhbGV0dGUtY29sb3IoXCJncmV5LTBcIil9O1xuICAtLXBhZ2luYXRvci10ZXh0LWNvbG9yOiAje3BhbGV0dGUtY29sb3IoXCJncmV5LTVcIil9O1xuICAtLXBhZ2luYXRvci1jb250cm9scy1jb2xvcjogI3twYWxldHRlLWNvbG9yKFwicHJpbWFyeS1kYXJrXCIpfTtcbiAgLS1wYWdpbmF0b3ItZGlzYWJsZWQtY29udHJvbHMtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcihcInByaW1hcnktZGFya1wiLCAwLjEpfTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdpbmF0b3ItYmFja2dyb3VuZCk7XG5cbiAgLy8gT3ZlcnJpZGUgTWF0ZXJpYWwgc3R5bGVzXG4gIC5tYXQtcGFnaW5hdG9yLWNvbnRhaW5lciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWluLXdpZHRoOiA2NzJweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIHtcbiAgICAubWF0LXBhZ2luYXRvci1wYWdlLXNpemUtbGFiZWwge1xuICAgICAgY29sb3I6IHZhcigtLXBhZ2luYXRvci10ZXh0LWNvbG9yKTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAubWF0LXBhZ2luYXRvci1wYWdlLXNpemUtc2VsZWN0IHtcbiAgICAgIC5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhZ2luYXRvci1jb250cm9scy1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cblxuICAgICAgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFnaW5hdG9yLWNvbnRyb2xzLWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9IC8vIC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZVxuXG4gIC5tYXQtcGFnaW5hdG9yLXJhbmdlLWFjdGlvbnMge1xuICAgIC5tYXQtcGFnaW5hdG9yLXJhbmdlLWxhYmVsIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wYWdpbmF0b3ItdGV4dC1jb2xvcik7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLm1hdC1wYWdpbmF0b3ItbmF2aWdhdGlvbi1wcmV2aW91cyxcbiAgICAubWF0LXBhZ2luYXRvci1uYXZpZ2F0aW9uLW5leHQge1xuICAgICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFnaW5hdG9yLWNvbnRyb2xzLWNvbG9yKTtcbiAgICAgIH1cbiAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhZ2luYXRvci1kaXNhYmxlZC1jb250cm9scy1jb2xvcik7XG4gICAgICB9XG4gICAgfVxuICB9IC8vIC5tYXQtcGFnaW5hdG9yLXJhbmdlLWFjdGlvbnNcbn1cbiIsIkBtaXhpbiBtYXRlcmlhbC1zZWxlY3Qtc3R5bGVzKCkge1xuICAvLyBtYXRlcmlhbCBzZWxlY3Qgc3R5bGVzXG4gIC5tYXQtc2VsZWN0LXBhbmVsIHtcbiAgICBAaW5jbHVkZSBtYXRlcmlhbC1hdXRvY29tcGxldGUtc3R5bGVzKCk7XG4gIH1cbn1cblxuQG1peGluIGJvb3RzdHJhcC1zZWxlY3Qtc3R5bGVzKCkge1xuICAvLyBzZWxlY3QgY29tcG9uZW50IHdpdGggY3VzdG9tIGljb25cbiAgLS1zZWxlY3QtcGFkZGluZzogMTJweDtcbiAgLS1zZWxlY3QtaWNvbi13aWR0aDogMTRweDtcbiAgLS1mb3JtLWljb25zLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ3ByaW1hcnknKX07XG4gIC0tZm9ybS1pbnB1dC1iYWNrZ3JvdW5kOiAje3BhbGV0dGUtY29sb3IoJ2dyZXktMCcpfTtcblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgLmN1c3RvbS1zZWxlY3Qge1xuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tc2VsZWN0LXBhZGRpbmcpIC8gMikgdmFyKC0tc2VsZWN0LXBhZGRpbmcpO1xuICAgIHBhZGRpbmctaW5saW5lLWVuZDogY2FsYyh2YXIoLS1zZWxlY3QtcGFkZGluZykgKyB2YXIoLS1zZWxlY3QtaWNvbi13aWR0aCkpO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9ybS1pbnB1dC1iYWNrZ3JvdW5kKTtcbiAgfVxuICAuaGFsZi1hcnJvdy1pY29uIHtcbiAgICByaWdodDogdmFyKC0tc2VsZWN0LXBhZGRpbmcpO1xuICAgIHRvcDogMHB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogdmFyKC0tc2VsZWN0LWljb24td2lkdGgpO1xuICAgIGNvbG9yOiB2YXIoLS1mb3JtLWljb25zLWNvbG9yKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShipSelectDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-ship-select-dialog",
                templateUrl: "./ship-select-dialog.component.html",
                styleUrls: ["./ship-select-dialog.component.scss"],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_business_state_invoice_state_service__WEBPACK_IMPORTED_MODULE_4__["InvoicesStateService"] }, { type: src_app_business_services_customer_service__WEBPACK_IMPORTED_MODULE_5__["CustomerService"] }, { type: src_app_business_services_geo_service__WEBPACK_IMPORTED_MODULE_6__["GeoService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=invoice-invoice-module-es2015.js.map