webpackJsonp([1],{

/***/ 1038:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTruckDetailsPageModule", function() { return EditTruckDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_truck_details__ = __webpack_require__(1045);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_auto_complete__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_auto_complete__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EditTruckDetailsPageModule = /** @class */ (function () {
    function EditTruckDetailsPageModule() {
    }
    EditTruckDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_truck_details__["a" /* EditTruckDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_truck_details__["a" /* EditTruckDetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ng2_auto_complete__["Ng2AutoCompleteModule"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3_ng2_auto_complete__["Ng2AutoCompleteModule"]
            ]
        })
    ], EditTruckDetailsPageModule);
    return EditTruckDetailsPageModule;
}());

//# sourceMappingURL=edit-truck-details.module.js.map

/***/ }),

/***/ 1045:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditTruckDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_admin_privilege_admin_privilege__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loader__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_truck__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs__ = __webpack_require__(1);
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
 * Generated class for the EditTruckDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditTruckDetailsPage = /** @class */ (function () {
    function EditTruckDetailsPage(navCtrl, navParams, fb, admin, loader, toast, trucks) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.admin = admin;
        this.loader = loader;
        this.toast = toast;
        this.trucks = trucks;
        this.types = [
            { name: 'OPEN', value: 'OPEN' },
            { name: 'CONTAINER', value: 'CONTAINER' },
            { name: 'TRAILER', value: 'TRAILER' },
        ];
        this.capacity = [];
        this.transporterNames = [];
        this.driverNames = [];
        this.submitted = false;
        this.data = {
            truck_no: '',
            truck_type: '',
            truck_capacity: '',
            transporter_id: '',
            driver_id: ''
        };
        this.fetchFlag = false;
        this.otpFlag = false;
        this.transporterFlag = true;
        this.agencyFlag = false;
        this.driverFlag = false;
        this.guaranterName = "";
        this.guaranterType = "";
        // Search query for truck no list
        this.truckNo = function (keyword) {
            if (keyword) {
                // getTruckPositionList
                return _this.trucks.searchTruckNo(keyword).map(function (res) {
                    return res.json();
                });
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"].of([]);
            }
        };
        // Search query for Transporter Name list
        this.transporterName = function (keyword) {
            if (keyword) {
                // getTruckPositionList
                return _this.trucks.searchTransporterName(keyword).map(function (res) {
                    return res.json();
                });
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"].of([]);
            }
        };
        // Search query for Transporter Name list
        this.DriverName = function (keyword) {
            if (keyword) {
                // getTruckPositionList
                return _this.trucks.searchDriverName(keyword).map(function (res) {
                    return res.json();
                });
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"].of([]);
            }
        };
        // Search query for Agency Name list
        this.agencyName = function (keyword) {
            if (keyword) {
                // getTruckPositionList
                return _this.trucks.searchAgencyName(keyword).map(function (res) {
                    return res.json();
                });
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"].of([]);
            }
        };
        this.details = this.navParams.get('data');
        console.log(">>>>>>>Detalsssss>>>", this.details);
        this.editForm = this.fb.group({
            type: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            capacity: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            // agency_name: [''],
            transporter_id: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            driver_id: [''],
            transport_srno: [''],
            agency_name: [''],
            user_name: [''],
            otp: [''],
            guaranter_name: [''],
            guaranter_type: [''],
            authorised_by: [''],
            mobile_no: ['']
        });
        // this.capacity.push({"name": this.details.capacity, "value": this.details.capacity});
        this.editForm.controls['type'].setValue(this.details.type);
        this.getCapacity();
        this.editForm.controls['capacity'].setValue(this.details.capacity);
        this.editForm.controls['agency_name'].setValue(this.details.agency_name);
        this.editForm.controls['transporter_id'].setValue(this.details.transport_id.transport_name);
        this.editForm.controls['driver_id'].setValue(this.details.driver_id.driver_name);
        this.editForm.controls['guaranter_type'].setValue(this.details.guaranter_type);
        this.editForm.controls['authorised_by'].setValue(this.details.authorised_by);
        this.editForm.controls['mobile_no'].setValue(this.details.mobile_no);
        this.transporterID = this.details.transport_id._id;
        this.driverID = this.details.driver_id._id;
        this.guaranterName = this.details.guaranter_name;
        this.guaranterType = this.details.guaranter_type;
        if (this.guaranterType == "transporter") {
            this.transporterFlag = true;
            this.agencyFlag = false;
            this.driverFlag = false;
        }
        if (this.guaranterType == "agency") {
            this.transporterFlag = false;
            this.agencyFlag = true;
            this.driverFlag = false;
        }
        if (this.guaranterType == "driver") {
            this.transporterFlag = false;
            this.agencyFlag = false;
            this.driverFlag = true;
        }
        this.editForm.controls['guaranter_name'].setValue(this.details.guaranter_name);
        this.editForm.controls['user_name'].setValue(this.details.user_name);
    }
    EditTruckDetailsPage.prototype.Home = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
    };
    EditTruckDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditTruckDetailsPage');
        this.getTransporterNames();
        this.getDriverNames();
    };
    EditTruckDetailsPage.prototype.onSelectTruck = function (e) {
        console.log("Select truck >>>", e);
    };
    EditTruckDetailsPage.prototype.radioSelect = function (event) {
        console.log("Here ->", event);
        if (event == "transporter") {
            this.transporterFlag = true;
            this.agencyFlag = false;
            this.driverFlag = false;
            this.editForm.controls['guaranter_type'].setValue('transporter');
        }
        if (event == "agency") {
            this.transporterFlag = false;
            this.agencyFlag = true;
            this.driverFlag = false;
            this.editForm.controls['guaranter_type'].setValue('agency');
        }
        if (event == "driver") {
            this.transporterFlag = false;
            this.agencyFlag = false;
            this.driverFlag = true;
            this.editForm.controls['guaranter_type'].setValue('driver');
        }
    };
    EditTruckDetailsPage.prototype.getDetailsByRadio = function () {
        var _this = this;
        console.log("Here In Details");
        this.guaranterType = this.editForm.value.guaranter_type;
        if (this.guaranterType == "transporter") {
            this.loader.show();
            this.guaranterName = this.editForm.value.guaranter_name.transport_name ? this.editForm.value.guaranter_name.transport_name : this.editForm.value.guaranter_name;
            this.trucks.getTransporterDetailsByName(this.guaranterName).subscribe(function (res) {
                var data = res.json();
                console.log("data >>", data);
                _this.editForm.controls['mobile_no'].setValue(data.cmobile_no_1);
                _this.loader.hide();
            }, function (err) {
                console.log(">>>error", err);
            });
        }
        if (this.guaranterType == "agency") {
            this.loader.show();
            this.guaranterName = this.editForm.value.guaranter_name.agency_name ? this.editForm.value.guaranter_name.agency_name : this.editForm.value.guaranter_name;
            this.trucks.getAgencyDetailsByName(this.guaranterName).subscribe(function (res) {
                var data = res.json();
                console.log("data >>", data);
                _this.editForm.controls['mobile_no'].setValue(data.cmobile_no_1);
                _this.loader.hide();
            }, function (err) {
                console.log(">>>error", err);
            });
        }
        if (this.guaranterType == "driver") {
            this.loader.show();
            this.guaranterName = this.editForm.value.guaranter_name.driver_name ? this.editForm.value.guaranter_name.driver_name : this.editForm.value.guaranter_name;
            this.trucks.getDriverDetailsByName(this.guaranterName).subscribe(function (res) {
                var data = res.json();
                console.log("data >>", data);
                _this.editForm.controls['mobile_no'].setValue(data.mobile_no_1);
                _this.loader.hide();
            }, function (err) {
                console.log(">>>error", err);
            });
        }
    };
    EditTruckDetailsPage.prototype.getCapacity = function () {
        var _this = this;
        var ttype = this.editForm.value.type;
        this.trucks.getCapacityOfTruck().subscribe(function (res) {
            var data = res.json();
            console.log('res >>>>>>> ', res);
            _this.capacity = [];
            data.results.forEach(function (r) {
                if (r.type == ttype) {
                    r.capacity.forEach(function (a) {
                        var obj = {
                            "name": a.ton,
                            "value": a.ton,
                        };
                        _this.capacity.push(obj);
                    });
                }
            });
        }, function (err) {
            console.log(">>>error", err);
        });
    };
    EditTruckDetailsPage.prototype.getTransporterNames = function () {
        var _this = this;
        this.trucks.getTransporterNames().subscribe(function (res) {
            var data = res.json();
            data.result.forEach(function (r) {
                var obj = {
                    "name": r.transport_name,
                    "value": r._id
                };
                _this.transporterNames.push(obj);
            });
        }, function (err) {
        });
    };
    EditTruckDetailsPage.prototype.getDriverNames = function () {
        var _this = this;
        this.trucks.getDriverNames().subscribe(function (res) {
            var data = res.json();
            data.result.forEach(function (r) {
                var obj = {
                    "name": r.driver_name,
                    "value": r._id
                };
                _this.driverNames.push(obj);
            });
        }, function (err) {
        });
    };
    EditTruckDetailsPage.prototype.sendOTP = function () {
        var _this = this;
        var mobileNo = this.editForm.value.mobile_no;
        var otpNo = Math.floor(1000 + Math.random() * 9000);
        console.log("MobileNo >>>", mobileNo);
        console.log("otpNo >>>", otpNo);
        this.otp_no = otpNo;
        this.trucks.sendOTP(mobileNo, otpNo).subscribe(function (res) {
            var data = res.json();
            console.log("res >>>", res);
            _this.fetchFlag = true;
            _this.loader.hide();
        }, function (err) {
            console.log(">>>error", err);
        });
    };
    EditTruckDetailsPage.prototype.checkOTP = function () {
        if (this.editForm.value.otp == this.otp_no) {
            this.otpFlag = false;
        }
        else {
            this.otpFlag = true;
        }
    };
    EditTruckDetailsPage.prototype.manualVerified = function () {
    };
    EditTruckDetailsPage.prototype.update = function (isValid) {
        var _this = this;
        console.log(">>>>>FormS", this.editForm);
        this.submitted = true;
        if (isValid) {
            var obj = {
                // "truck_no": value.truck_no.truck_no ? value.truck_no.truck_no: value.truck_no,
                "type": this.editForm.value.type,
                "capacity": this.editForm.value.capacity,
                "agency_name": this.editForm.value.agency_name.agency_name ? this.editForm.value.agency_name.agency_name : this.editForm.value.agency_name,
                "transport_id": this.editForm.value.transporter_id._id ? this.editForm.value.transporter_id._id : this.transporterID,
                "driver_id": this.editForm.value.driver_id._id ? this.editForm.value.driver_id._id : this.driverID,
                "guaranter_name": this.guaranterName,
                "guaranter_type": this.guaranterType,
                "authorised_by": this.editForm.value.authorised_by,
                "mobile_no": this.editForm.value.mobile_no,
                "user_name": this.editForm.value.user_name
            };
            console.log("obj >>>>>", obj);
            this.loader.show();
            this.admin.updateTruckList(this.details._id, obj).subscribe(function (res) {
                _this.loader.hide();
                _this.toast.show({ 'message': 'Updated successfully.' });
                _this.navCtrl.setRoot('ManageTruckListPage');
            }, function (err) {
                _this.loader.hide();
                _this.toast.error({ 'message': 'Something went wrong.' });
                console.log(">>>>>err", err);
            });
        }
    };
    EditTruckDetailsPage.prototype.addNewDriver = function () {
        this.navCtrl.push('AddDriverPage');
    };
    EditTruckDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-truck-details',template:/*ion-inline-start:"D:\truck\src\pages\edit-truck-details\edit-truck-details.html"*/'<!--\n  Generated template for the EditTruckDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-toolbar>\n        <ion-title>Edit Truck Details</ion-title>\n        <ion-buttons end>\n          <button ion-button icon-only (click)="Home()" >\n              <ion-icon name="home" ></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-toolbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <form [formGroup]="editForm" (ngSubmit)="update(editForm.valid)">\n    <h3>Truck no. {{details.truck_no}} </h3> \n\n    <div class="form-group">\n      <label class=" label">Truck Type <span style="color:red">*</span></label>\n      <select class="form-control drop-down" formControlName="type" (change)="getCapacity()">\n        <option value="">Select Truck Type</option>\n        <option *ngFor="let t of types" [ngValue]="t.value">{{t.name}}</option>\n      </select>          \n    </div>\n    <div class="error-msg" *ngIf="submitted || (editForm.controls.type.invalid && (editForm.controls.type.dirty || editForm.controls.type.touched))">\n      <div *ngIf="editForm.controls[\'type\'].hasError(\'required\')">\n        <label>Type is required.</label>\n      </div>\n    </div>\n\n    <div class="form-group">\n      <label class=" label">Truck Capacity <span style="color:red">*</span></label>\n      <select class="form-control drop-down" formControlName="capacity">\n        <option *ngFor="let c of capacity" [ngValue]="c.value">{{c.name}}</option>\n      </select>          \n    </div>\n    <div class="error-msg" *ngIf="submitted || (editForm.controls.capacity.invalid && (editForm.controls.capacity.dirty || editForm.controls.capacity.touched))">\n      <div *ngIf="editForm.controls[\'capacity\'].hasError(\'required\')">\n        <label>Capacity is required.</label>\n      </div>\n    </div>\n\n    <div class="form-group">\n      <label class=" label">Transporter <span style="color:red">*</span></label>\n      <input\n        class="form-control"\n        ng2-auto-complete\n        formControlName="transporter_id"\n        name="transporter_id" \n        [source]="transporterName.bind(this)"\n        list-formatter="transport_name" \n        required\n      /> \n      <!-- <select class="form-control drop-down" name="transporter_id" formControlName="transporter_id"  >\n          <option value="">Select Transporter</option>\n        <option *ngFor="let tn of transporterNames" [ngValue]="tn.value">{{tn.name}}</option>\n      </select>           -->\n    </div>\n    <div class="error-msg" *ngIf="submitted || (editForm.controls.transporter_id.invalid && (editForm.controls.transporter_id.dirty || editForm.controls.transporter_id.touched))">\n      <div *ngIf="editForm.controls[\'transporter_id\'].hasError(\'required\')">\n        <label>Transporter name is required.</label>\n      </div>\n    </div>\n\n    <div class="form-group">\n      <label class=" label">Driver</label>\n      <input\n        class="form-control"\n        ng2-auto-complete\n        formControlName="driver_id"\n        name="driver_id" \n        [source]="DriverName.bind(this)"\n        list-formatter="driver_name" \n      />\n\n      <button ion-button type="button" (click)="addNewDriver()" expand="block">Add Driver</button>\n      <!-- <select class="form-control drop-down" name="driver_id" formControlName="driver_id"  >\n        <option value="">Select Truck Type</option>\n        <option *ngFor="let d of driverNames" [ngValue]="d.value">{{d.name}}</option>\n      </select>           -->\n    </div>\n    <!-- <div class="error-msg" *ngIf="submitted || (editForm.controls.driver_id.invalid && (editForm.controls.driver_id.dirty || editForm.controls.driver_id.touched))">\n      <div *ngIf="editForm.controls[\'driver_id\'].hasError(\'required\')">\n        <label>Driver name is required.</label>\n      </div>\n    </div> -->\n\n    <div class="form-group">\n      <label class=" label">Agency name</label> \n      <input class="form-control"\n        ng2-auto-complete\n        formControlName="agency_name"\n        [source] = "agencyName.bind(this)"\n        list-formatter="agency_name"/>\n    </div>\n\n    <br><br>\n    <div class="width-full">\n    <label class="fonts-size">Transport (Guarantor)</label>\n    </div>\n    <!-- <div class="form-group">\n    <ion-row>\n      <ion-col class="transportid">\n        <span>Transport Id</span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class="transportid col9">\n        <input type="text" placeholder="" formControlName="transport_srno" class="form-control">\n      </ion-col>\n      <ion-col class="col3 fetchbtn">\n        <div>\n          <button ion-button type="button" (click)="fetch()" expand="block">Fetch</button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n    <div *ngIf="fetchFlag">\n      <ion-card>\n        <ion-card-content>\n          <p class="card-header">\n            <span class="sr-no"><ion-icon name="cube"></ion-icon> #{{ transporterDetails.sr_no }} {{ transporterDetails.transport_name  }}</span><br>\n          </p>\n          <div padding>\n\n            <ion-row>\n              <ion-col col-6>\n                <span><b>Owner Name:</b></span>\n              </ion-col>\n              <ion-col col-6>\n                <span class="fright"><b>Contact Person:</b></span>\n              </ion-col>\n    \n              <ion-col col-6>\n                <span>{{ transporterDetails.owner_name  }}</span>\n              </ion-col>\n              <ion-col col-6>\n                <span class="fright">{{ transporterDetails.contact_person }}</span>\n              </ion-col>\n    \n              <ion-col col-6>\n                <span>{{ transporterDetails.omobile_no_1 }}</span>\n              </ion-col>\n              <ion-col col-6>\n                <span class="fright">{{ transporterDetails.cmobile_no_1 }}</span>\n              </ion-col>\n    \n              <ion-col col-12>\n                <b>Address:</b><br>\n                <span *ngFor="let add of transporterDetails.address">\n                  <p>{{add.address_line_1 + \', \' + add.address_line_2 }}</p>\n                  <p>{{ add.city + \' - \' + add.pincode }}</p>\n                  <p>{{ add.state }}</p>\n                </span>\n              </ion-col>\n            </ion-row>\n\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div> -->\n\n\n    <ion-list radio-group class="radio-size">      \n      <ion-item>\n        <ion-radio value="transporter" [checked]="transporterFlag" (ionSelect)="radioSelect($event)"></ion-radio>\n        <ion-label>Transporter</ion-label>\n      </ion-item>\n  \n      <ion-item>\n        <ion-radio value="agency" [checked]="agencyFlag" (ionSelect)="radioSelect($event)"></ion-radio>\n        <ion-label>Agency</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-radio value="driver"  [checked]="driverFlag" (ionSelect)="radioSelect($event)"></ion-radio>\n        <ion-label>Driver</ion-label>\n      </ion-item>\n    </ion-list>\n\n    <ion-row style="width: 100%;">\n      <!-- 1 -->\n      <ion-col col-4>\n        <label class=" label">Guaranter Name</label>\n      </ion-col>\n\n      <ion-col col-4>\n        <label class=" label">Authorised By</label>\n      </ion-col>\n\n      <ion-col col-4>\n        <label class=" label">Mobile No</label>\n      </ion-col>\n\n\n      <!-- 2 -->\n      <ion-col col-4>\n        <div *ngIf="transporterFlag" class="sub-form-group">\n          <input class="form-control" ng2-auto-complete  autocomplete="off" formControlName="guaranter_name" [source]="transporterName.bind(this)" list-formatter="transport_name" (change)="getDetailsByRadio()" /> \n        </div>\n\n        <div *ngIf="agencyFlag" class="sub-form-group">\n          <input class="form-control" ng2-auto-complete  autocomplete="off" formControlName="guaranter_name" [source] = "agencyName.bind(this)" list-formatter="agency_name" (change)="getDetailsByRadio()" />\n        </div>\n\n        <div *ngIf="driverFlag" class="sub-form-group">\n          <input class="form-control" ng2-auto-complete autocomplete="off" formControlName="guaranter_name" [source]="DriverName.bind(this)" list-formatter="driver_name" (change)="getDetailsByRadio()" />\n        </div>\n      </ion-col>\n\n      <ion-col col-4>\n        <input type="text" formControlName="authorised_by" class="form-control">\n      </ion-col>\n\n      <ion-col col-4>\n        <input type="text" formControlName="mobile_no" class="form-control">\n      </ion-col>\n\n      <!-- 3 -->\n      <ion-col col-4 class="wrapper">\n        <button ion-button type="button" (click)="sendOTP()" expand="block">Send OTP</button>\n      </ion-col>\n\n      <ion-col col-4>\n        <input type="text" placeholder="Enter OTP" formControlName="otp" class="form-control">\n        <div *ngIf="otpFlag">\n          <p class="error-msg">\n            The OTP entered is incorrect.\n          </p>\n        </div>\n      </ion-col>\n\n      <ion-col col-4 class="wrapper">\n        <button ion-button type="button" (click)="checkOTP()" expand="block">Verify</button>\n      </ion-col>\n\n    </ion-row>\n\n\n    <!-- <br>\n    <ion-row class="width-full">\n      <ion-col col-6 class="wrapper sendotp">\n        <button ion-button type="button" (click)="sendOTP()" expand="block">Send OTP</button>\n      </ion-col>\n\n      <ion-col col-6 class="manalvarify" >\n        <button ion-button type="button" (click)="manualVerified()" expand="block">Manual Verified</button>\n      </ion-col>\n\n      <ion-col col-6>\n        <input type="text" placeholder="Enter OTP" (change)="checkOTP()" formControlName="otp" class="form-control">\n      </ion-col>\n      <div *ngIf="otpFlag">\n        <p class="error-msg">\n          The OTP entered is incorrect.\n        </p>\n      </div>\n\n      <ion-col col-6>\n          <input type="text" placeholder="" formControlName="transport_srno" class="form-control">\n        </ion-col>\n    </ion-row> -->\n\n    <br>\n    <div class="form-group">\n        <label class=" label">User Name</label>\n        <input type="text" placeholder="" formControlName="user_name" class="form-control">\n      </div>\n\n\n    \n    <div padding>\n      <button ion-button block size="large" type="submit" expand="block"><ion-icon name="checkmark-circle"></ion-icon>&nbsp;&nbsp;Update Truck</button>\n    </div>\n\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"D:\truck\src\pages\edit-truck-details\edit-truck-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_2__providers_admin_privilege_admin_privilege__["a" /* AdminPrivilegeProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loader__["a" /* LoaderProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_truck__["a" /* Trucks */]])
    ], EditTruckDetailsPage);
    return EditTruckDetailsPage;
}());

//# sourceMappingURL=edit-truck-details.js.map

/***/ })

});
//# sourceMappingURL=1.js.map