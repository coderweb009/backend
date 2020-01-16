webpackJsonp([4],{

/***/ 1034:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCompanyRequirementsPageModule", function() { return EditCompanyRequirementsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_company_requirements__ = __webpack_require__(1041);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditCompanyRequirementsPageModule = /** @class */ (function () {
    function EditCompanyRequirementsPageModule() {
    }
    EditCompanyRequirementsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_company_requirements__["a" /* EditCompanyRequirementsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_company_requirements__["a" /* EditCompanyRequirementsPage */]),
            ],
        })
    ], EditCompanyRequirementsPageModule);
    return EditCompanyRequirementsPageModule;
}());

//# sourceMappingURL=edit-company-requirements.module.js.map

/***/ }),

/***/ 1041:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCompanyRequirementsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loader__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_truck__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_toast__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the EditCompanyRequirementsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditCompanyRequirementsPage = /** @class */ (function () {
    function EditCompanyRequirementsPage(navCtrl, navParams, fb, viewCtrl, loader, trucks, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.viewCtrl = viewCtrl;
        this.loader = loader;
        this.trucks = trucks;
        this.toast = toast;
        this.types = [
            { name: 'OPEN', value: 'OPEN' },
            { name: 'CONTAINER', value: 'CONTAINER' },
            { name: 'TRAILER', value: 'TRAILER' },
        ];
        this.capacity = [];
        this.reqDetails = this.navParams.get('data');
        this.getIndex = this.navParams.get('index');
        this.companyListData = this.navParams.get('companyListData');
        this.type = this.navParams.get('type');
        console.log(">>>Type", this.type);
        if (this.type === 'add') {
            this.addReqForm = this.fb.group({
                material: [''],
                to_destination: [''],
                vehicle_capacity: [''],
                vehicle_type: ['']
            });
        }
        else {
            this.editReqForm = this.fb.group({
                material: [this.reqDetails.material],
                to_destination: [this.reqDetails.to_destination],
                vehicle_capacity: [this.reqDetails.vehicle_capacity],
                vehicle_type: [this.reqDetails.vehicle_type]
            });
        }
    }
    EditCompanyRequirementsPage.prototype.getCapacity = function () {
        var _this = this;
        if (this.type === 'add') {
            var ttype = this.addReqForm.value.vehicle_type;
        }
        else {
            var ttype = this.editReqForm.value.vehicle_type;
        }
        this.loader.show();
        this.trucks.getCapacityOfTruck().subscribe(function (res) {
            _this.loader.hide();
            var data = res.json();
            _this.capacity = [];
            data.results.forEach(function (r) {
                // console.log('RR >>>>>>> ', r);
                if (r.type == ttype) {
                    // console.log('>>>>>>> ', r);
                    r.capacity.forEach(function (a) {
                        var obj = {
                            "name": a.ton,
                            "value": a.ton,
                        };
                        _this.capacity.push(obj);
                        if (_this.type === 'add') {
                            _this.addReqForm.controls['vehicle_capacity'].setValue(r.capacity[0].ton);
                        }
                        else {
                            _this.editReqForm.controls['vehicle_capacity'].setValue(r.capacity[0].ton);
                        }
                    });
                }
            });
        }, function (err) {
            _this.loader.hide();
            console.log('>>>>>>>error', err);
        });
    };
    EditCompanyRequirementsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditCompanyRequirementsPage');
    };
    EditCompanyRequirementsPage.prototype.update = function (isValid) {
        if (isValid) {
            this.viewCtrl.dismiss({ requirementFormData: this.editReqForm.value, index: this.getIndex, listData: this.companyListData });
        }
    };
    EditCompanyRequirementsPage.prototype.Home = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
    };
    EditCompanyRequirementsPage.prototype.add = function () {
        this.loader.show();
        this.viewCtrl.dismiss({ requirementFormData: this.addReqForm.value });
        this.toast.show({ 'message': 'Added successfully.' });
        this.loader.hide();
    };
    EditCompanyRequirementsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    EditCompanyRequirementsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-company-requirements',template:/*ion-inline-start:"D:\truck\src\pages\edit-company-requirements\edit-company-requirements.html"*/'<!--\n  Generated template for the EditCompanyRequirementsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header *ngIf="type === \'edit\'">\n  <ion-toolbar>\n    <ion-title>\n      Edit Company Requirements\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <div ion-text color="primary" showWhen="ios">Cancel</div>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <button ion-button end class="home-icon" (click)="Home()">\n        <ion-icon name="home" ></ion-icon>\n    </button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-header *ngIf="type === \'add\'">\n    <ion-toolbar>\n      <ion-title>\n        Add Company Requirements\n      </ion-title>\n      <ion-buttons start>\n        <button ion-button (click)="dismiss()">\n          <div ion-text color="primary" showWhen="ios">Cancel</div>\n          <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content padding *ngIf="type === \'edit\'">\n  <form [formGroup]="editReqForm" (ngSubmit)="update(editReqForm.valid)">\n    <ion-card>\n      <ion-card-content>\n\n        <div class="form-group">\n          <label class=" label">Material </label>\n          <input formControlName="material" type="text" class="form-control" /> \n        </div>\n\n        <div class="form-group">\n          <label class=" label">To destination </label>\n          <input formControlName="to_destination" type="text" class="form-control" /> \n        </div>\n\n        <div class="form-group">\n          <label class=" label">Vehicle Type </label>\n          <select class="form-control drop-down" formControlName="vehicle_type" (change)="getCapacity()">\n            <option value="">Select Vehicle Type</option>\n            <option *ngFor="let t of types" [ngValue]="t.value">{{t.name}}</option>\n          </select>          \n        </div>\n\n        <div class="form-group">\n          <label class=" label">Vehicle capacity </label>\n          <select class="form-control drop-down" formControlName="vehicle_capacity">\n            <option value="">Select Vehicle Capacity</option>\n            <option *ngFor="let c of capacity" [value]="c.value">{{c.name}}</option>\n          </select>          \n        </div>\n\n        <!-- <ion-row center>  \n          <ion-col text-center>   \n            <button ion-button type="submit">Update</button>  \n          </ion-col> \n        </ion-row> -->\n\n        <div padding>\n          <button ion-button block size="large" type="submit" expand="block"><ion-icon name="checkmark-circle"></ion-icon>&nbsp;&nbsp;Update Requirements</button>\n        </div>\n\n      </ion-card-content>\n    </ion-card>\n  </form>\n</ion-content>\n\n<ion-content padding *ngIf="type === \'add\'">\n  <form [formGroup]="addReqForm" (ngSubmit)="add(addReqForm.valid)">\n    <ion-card>\n      <ion-card-content>\n\n        <div class="form-group">\n          <label class=" label">Material </label>\n          <input formControlName="material" type="text" class="form-control" /> \n        </div>\n\n        <div class="form-group">\n          <label class=" label">To destination </label> \n          <input formControlName="to_destination" type="text" class="form-control" /> \n        </div>\n    \n        <div class="form-group">\n          <label class=" label">Vehicle Type </label>\n          <select class="form-control drop-down" formControlName="vehicle_type" (change)="getCapacity()">\n            <option value="">Select Vehicle Type</option>\n            <option *ngFor="let t of types" [ngValue]="t.value">{{t.name}}</option>\n          </select>          \n        </div>\n\n        <div class="form-group">\n          <label class=" label">Vehicle capacity </label>\n          <select class="form-control drop-down" formControlName="vehicle_capacity">\n            <option value="">Select Vehicle Capacity</option>\n            <option *ngFor="let c of capacity" [value]="c.value">{{c.name}}</option>\n          </select>          \n        </div>\n        \n        <!-- <ion-row center>  \n          <ion-col text-center>   \n            <button ion-button type="submit"><ion-icon name="add"></ion-icon>&nbsp;Add</button>  \n          </ion-col> \n        </ion-row> -->\n\n        <div padding>\n          <button ion-button block size="large" type="submit" expand="block"><ion-icon name="checkmark-circle"></ion-icon>&nbsp;&nbsp;Add Requirements</button>\n        </div>\n        \n      </ion-card-content>\n    </ion-card>\n  </form>\n</ion-content>\n\n'/*ion-inline-end:"D:\truck\src\pages\edit-company-requirements\edit-company-requirements.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loader__["a" /* LoaderProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_truck__["a" /* Trucks */],
            __WEBPACK_IMPORTED_MODULE_5__providers_toast__["a" /* ToastProvider */]])
    ], EditCompanyRequirementsPage);
    return EditCompanyRequirementsPage;
}());

//# sourceMappingURL=edit-company-requirements.js.map

/***/ })

});
//# sourceMappingURL=4.js.map