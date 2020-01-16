webpackJsonp([2],{

/***/ 1037:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTransportDetailsPageModule", function() { return EditTransportDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_transport_details__ = __webpack_require__(1044);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_auto_complete__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_auto_complete__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var EditTransportDetailsPageModule = /** @class */ (function () {
    function EditTransportDetailsPageModule() {
    }
    EditTransportDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_transport_details__["a" /* EditTransportDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_transport_details__["a" /* EditTransportDetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_auto_complete__["Ng2AutoCompleteModule"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4_ng2_auto_complete__["Ng2AutoCompleteModule"]
            ]
        })
    ], EditTransportDetailsPageModule);
    return EditTransportDetailsPageModule;
}());

//# sourceMappingURL=edit-transport-details.module.js.map

/***/ }),

/***/ 1044:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditTransportDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_admin_privilege_admin_privilege__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loader__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_event_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_truck__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agm_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__helpers_common__ = __webpack_require__(31);
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
 * Generated class for the EditTransportDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditTransportDetailsPage = /** @class */ (function () {
    function EditTransportDetailsPage(navCtrl, navParams, fb, admin, loader, toast, events, trucks, mapsAPILoader, ngZone) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.admin = admin;
        this.loader = loader;
        this.toast = toast;
        this.events = events;
        this.trucks = trucks;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.acountNo = false;
        this.transportFlag = true;
        this.bankFlag = false;
        this.addressFlag = false;
        this.locationFlag = false;
        this.routeFlag = false;
        this.address_location = {
            type: "Point",
            coordinates: []
        };
        this.submitted = false;
        this.DestinationsArray = [];
        this.getTo = "";
        // Search query for Agency Name list
        this.agencyName = function (keyword) {
            if (keyword) {
                // getTruckPositionList
                return _this.trucks.searchAgencyName(keyword).map(function (res) {
                    return res.json();
                });
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_7_rxjs__["Observable"].of([]);
            }
        };
        this.details = this.navParams.get('data');
        var getLat = this.details.latitude;
        var getLng = this.details.longitude;
        localStorage.setItem('latlng', JSON.stringify({
            lat: getLat,
            lng: getLng
        }));
        var routeDesireds = [];
        this.details.route_desired.forEach(function (element) {
            routeDesireds.push(_this.routeDesiredForm(element));
            var obj = { "location": element.location };
            _this.DestinationsArray.push(obj);
        });
        this.editForm = this.fb.group({
            agency_name: [''],
            website: [''],
            transport_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2)])],
            owner_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2)])],
            // location: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
            omobile_no_1: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(10)])],
            omobile_no_2: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(10)])],
            contact_person: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2)])],
            cmobile_no_1: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(10)])],
            cmobile_no_2: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(10)])],
            account_holder_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(25)])],
            account_number: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(16)])],
            confirm_account_number: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(16)])],
            ifsc: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(11), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(11)])],
            address: this.fb.array([this.createAddressObj(this.details.address[0])]),
            location_allotment: [''],
            location_restriction: [''],
            latitude: [''],
            longitude: [''],
            route_desired: this.fb.array(routeDesireds),
            location_to: ['']
        });
        this.editForm.controls['agency_name'].setValue(this.details.agency_name ? this.details.agency_name : "");
        this.editForm.controls['website'].setValue(this.details.website);
        this.editForm.controls['transport_name'].setValue(this.details.transport_name);
        this.editForm.controls['owner_name'].setValue(this.details.owner_name);
        this.editForm.controls['omobile_no_1'].setValue(this.details.omobile_no_1);
        this.editForm.controls['omobile_no_2'].setValue(this.details.omobile_no_2);
        this.editForm.controls['contact_person'].setValue(this.details.contact_person);
        this.editForm.controls['cmobile_no_1'].setValue(this.details.cmobile_no_1);
        this.editForm.controls['cmobile_no_2'].setValue(this.details.cmobile_no_2);
        this.editForm.controls['account_holder_name'].setValue(this.details.account_holder_name);
        this.editForm.controls['account_number'].setValue(this.details.account_number);
        this.editForm.controls['ifsc'].setValue(this.details.ifsc);
        this.editForm.controls['location_allotment'].setValue(this.details.location_allotment);
        this.editForm.controls['location_restriction'].setValue(this.details.location_restriction);
        this.editForm.controls['latitude'].setValue(this.details.latitude);
        this.editForm.controls['longitude'].setValue(this.details.longitude);
    }
    EditTransportDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditTransportDetailsPage');
    };
    EditTransportDetailsPage.prototype.Home = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__home_home__["a" /* HomePage */]);
    };
    EditTransportDetailsPage.prototype.getLocation = function (e) {
        e.preventDefault();
        this.events.broadcast('location');
    };
    EditTransportDetailsPage.prototype.routeDesiredForm = function (e) {
        return this.fb.group({
            location: [e.location ? e.location : '']
        });
    };
    EditTransportDetailsPage.prototype.addToArray = function () {
        var obj = { "location": this.getTo };
        this.DestinationsArray.push(obj);
        this.editForm.get('location_to').setValue('');
    };
    EditTransportDetailsPage.prototype.removeToArray = function (index) {
        this.DestinationsArray.splice(index, 1);
        console.log("array >>>", this.DestinationsArray);
    };
    EditTransportDetailsPage.prototype.addTo = function () {
        this.route_desired = this.editForm.get('route_desired');
        this.route_desired.push(this.routeDesiredForm(''));
    };
    EditTransportDetailsPage.prototype.removeTo = function (index) {
        if (index === 0) {
            this.toast.error({ 'message': 'Cannot remove this form.' });
        }
        else {
            this.route_desired = this.editForm.get('route_desired');
            this.route_desired.removeAt(index);
        }
    };
    EditTransportDetailsPage.prototype.confirmAccount = function () {
        if (this.editForm.value.account_number == this.editForm.value.confirm_account_number) {
            console.log("Same");
            this.acountNo = false;
        }
        else {
            console.log("Not Same");
            this.acountNo = true;
        }
    };
    EditTransportDetailsPage.prototype.createAddressObj = function (add) {
        return this.fb.group({
            address_line_1: [add.address_line_1, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, , __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2)])],
            address_line_2: [add.address_line_2, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, , __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2)])],
            city: [add.city, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, , __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2)])],
            state: [add.state, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, , __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2)])],
            pincode: [add.pincode, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(6)])]
        });
    };
    Object.defineProperty(EditTransportDetailsPage.prototype, "addressForm", {
        // Get controls for address form array
        get: function () {
            return this.editForm.get('address')['controls'][0].controls;
        },
        enumerable: true,
        configurable: true
    });
    // Google map address
    EditTransportDetailsPage.prototype.addressData = function (e) {
        this.formValues = this.editForm.value;
        this.addressForm['address_line_1'].setValue(e.address_line1);
        this.addressForm['address_line_2'].setValue(e.address_line2);
        this.addressForm['city'].setValue(e.city);
        this.addressForm['state'].setValue(e.state);
        this.addressForm['pincode'].setValue(e.pincode);
        this.address_location.coordinates = [];
        this.address_location.coordinates.push(e.lng);
        this.address_location.coordinates.push(e.lat);
        this.formValues.address[0].address_location = this.address_location;
        console.log(">>>FormVal1", this.formValues);
    };
    EditTransportDetailsPage.prototype.update = function (isValid, value) {
        var _this = this;
        console.log(">>>FormVal2", this.editForm);
        this.submitted = true;
        if (isValid) {
            this.formValues = value;
            console.log(">>>FormVal2", this.formValues);
            this.formValues.address[0].address_line_1 = value.address[0].address_line_1;
            this.formValues.address[0].address_line_2 = value.address[0].address_line_2;
            this.formValues.address[0].city = value.address[0].city;
            this.formValues.address[0].state = value.address[0].state;
            this.formValues.address[0].pincode = value.address[0].pincode;
            this.formValues.address[0].address_location = this.address_location;
            this.formValues.route_desired = this.DestinationsArray;
            this.formValues.agency_name = this.formValues.agency_name.agency_name ? this.formValues.agency_name.agency_name : this.formValues.agency_name;
            this.loader.show();
            this.admin.updateTransportList(this.details._id, this.editForm.value).subscribe(function (res) {
                _this.loader.hide();
                _this.toast.show({ 'message': 'Updated successfully.' });
                _this.navCtrl.setRoot('ManageTransportPage');
                console.log(">>>>>res", res);
            }, function (err) {
                _this.loader.hide();
                _this.toast.error({ 'message': 'Something went wrong.' });
                console.log(">>>>>err", err);
            });
        }
    };
    EditTransportDetailsPage.prototype.preTransport = function () {
        this.transportFlag = true;
        this.bankFlag = false;
        this.addressFlag = false;
        this.locationFlag = false;
        this.routeFlag = false;
    };
    EditTransportDetailsPage.prototype.nextBank = function () {
        this.transportFlag = false;
        this.bankFlag = true;
        this.addressFlag = false;
        this.locationFlag = false;
        this.routeFlag = false;
    };
    EditTransportDetailsPage.prototype.nextAddress = function () {
        var _this = this;
        this.transportFlag = false;
        this.bankFlag = false;
        this.addressFlag = true;
        this.locationFlag = false;
        this.routeFlag = false;
        setTimeout(function () {
            _this.mapsAPILoader.load().then(function () {
                var presentCity = new google.maps.places.Autocomplete(_this.searchElementRefCity.nativeElement, {
                    componentRestrictions: { "country": "IN" },
                    types: []
                });
                presentCity.addListener("place_changed", function () {
                    _this.ngZone.run(function () {
                        //get the place result
                        var place = presentCity.getPlace();
                        var components = __WEBPACK_IMPORTED_MODULE_11__helpers_common__["a" /* CommonHelper */].extract_components(place);
                        var pre_city = __WEBPACK_IMPORTED_MODULE_11__helpers_common__["a" /* CommonHelper */].get_sublocality(components);
                        console.log(components, pre_city);
                        document.getElementById('City').value = pre_city;
                        var addr = _this.editForm.get('address');
                        var first = addr.at(0);
                        first.get('city').setValue(pre_city);
                    });
                });
                var presentState = new google.maps.places.Autocomplete(_this.searchElementRefState.nativeElement, {
                    componentRestrictions: { "country": "IN" },
                    types: []
                });
                presentState.addListener("place_changed", function () {
                    _this.ngZone.run(function () {
                        //get the place result
                        var place = presentState.getPlace();
                        var components = __WEBPACK_IMPORTED_MODULE_11__helpers_common__["a" /* CommonHelper */].extract_components(place);
                        document.getElementById('State').value = components.administrative_area_level_1;
                        var addr = _this.editForm.get('address');
                        var first = addr.at(0);
                        first.get('state').setValue(components.administrative_area_level_1);
                    });
                });
            });
        }, 2000);
    };
    EditTransportDetailsPage.prototype.nextLocation = function () {
        var _this = this;
        this.transportFlag = false;
        this.bankFlag = false;
        this.addressFlag = false;
        this.locationFlag = true;
        this.routeFlag = false;
        // let getLat = this.details.latitude;
        // let getLng = this.details.longitude;
        // localStorage.setItem('latlng', JSON.stringify({
        //   lat: getLat,
        //   lng: getLng
        // }));
        // this.events.broadcast('location');
        setTimeout(function () {
            _this.mapsAPILoader.load().then(function () {
                var presentCity = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                    componentRestrictions: { "country": "IN" },
                    types: []
                });
                presentCity.addListener("place_changed", function () {
                    _this.ngZone.run(function () {
                        //get the place result
                        var place = presentCity.getPlace();
                        var lat = place.geometry.location.lat();
                        var lng = place.geometry.location.lng();
                        localStorage.setItem('latlng', JSON.stringify({
                            lat: lat,
                            lng: lng
                        }));
                        _this.events.broadcast('location');
                        var components = __WEBPACK_IMPORTED_MODULE_11__helpers_common__["a" /* CommonHelper */].extract_components(place);
                        var pre_city = __WEBPACK_IMPORTED_MODULE_11__helpers_common__["a" /* CommonHelper */].get_sublocality(components);
                        console.log(components, pre_city);
                        document.getElementById('Location').value = pre_city;
                        _this.editForm.controls['location_allotment'].setValue(pre_city);
                        _this.editForm.controls['latitude'].setValue(lat);
                        _this.editForm.controls['longitude'].setValue(lng);
                    });
                });
            });
        }, 1000);
    };
    EditTransportDetailsPage.prototype.nextRoute = function () {
        var _this = this;
        this.transportFlag = false;
        this.bankFlag = false;
        this.addressFlag = false;
        this.locationFlag = false;
        this.routeFlag = true;
        setTimeout(function () {
            var toSearch = new google.maps.places.Autocomplete(_this.searchElementRefTo.nativeElement, {
                componentRestrictions: { "country": "IN" },
                types: []
            });
            toSearch.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = toSearch.getPlace();
                    var components = __WEBPACK_IMPORTED_MODULE_11__helpers_common__["a" /* CommonHelper */].extract_components(place);
                    var pre_city = __WEBPACK_IMPORTED_MODULE_11__helpers_common__["a" /* CommonHelper */].get_sublocality(components);
                    console.log(components, pre_city);
                    document.getElementById('TO').value = pre_city;
                    _this.getTo = pre_city;
                });
            });
        }, 2000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("searchTo"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], EditTransportDetailsPage.prototype, "searchElementRefTo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("searchCity"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], EditTransportDetailsPage.prototype, "searchElementRefCity", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("searchStatue"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], EditTransportDetailsPage.prototype, "searchElementRefState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], EditTransportDetailsPage.prototype, "searchElementRef", void 0);
    EditTransportDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-transport-details',template:/*ion-inline-start:"D:\truck\src\pages\edit-transport-details\edit-transport-details.html"*/'<!--\n  Generated template for the EditTransportDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-toolbar>\n      <ion-title>Edit Transporter Details</ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="Home()" >\n            <ion-icon name="home" ></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="editForm" (ngSubmit)="update(editForm.valid, editForm.value)" novalidate>\n    <!----------- transport Flag ------------>\n\n    <div *ngIf="transportFlag">\n      <div class="width-full">\n      <label class="fonts-size">Transport Details </label>\n      </div><br>\n      \n      <div class="form-group">\n        <label class=" label">Agency name <span style="color:red">*</span> </label>\n        <input class="form-control"\n          ng2-auto-complete\n          formControlName="agency_name"\n          [source]="agencyName.bind(this)"\n          list-formatter="agency_name"/>\n      </div>\n\n      <div class="form-group">\n        <label class=" label">Transporter name <span style="color:red">*</span> </label>\n        <input formControlName="transport_name" type="text" class="form-control" />\n      </div>\n      <div class="error-msg" *ngIf="submitted || (editForm.controls.transport_name.invalid && (editForm.controls.transport_name.dirty || editForm.controls.transport_name.touched))">\n        <div *ngIf="editForm.controls[\'transport_name\'].hasError(\'required\')">\n          <label>Transporter name is required.</label>\n        </div>\n        <div *ngIf="editForm.controls[\'transport_name\'].hasError(\'minlength\')">\n          <label>Minimum length is upto 2 letters.</label>\n        </div>\n      </div>\n\n      <div class="form-group">\n        <label class=" label">Owner name <span style="color:red">*</span> </label>\n        <input formControlName="owner_name" type="text" class="form-control" />\n      </div>\n      <div class="error-msg" *ngIf="submitted || (editForm.controls.owner_name.invalid && (editForm.controls.owner_name.dirty || editForm.controls.owner_name.touched))">\n        <div *ngIf="editForm.controls[\'owner_name\'].hasError(\'required\')">\n          <label>Owner name is required.</label>\n        </div>\n        <div *ngIf="editForm.controls[\'owner_name\'].hasError(\'minlength\')">\n          <label>Minimum length is upto 2 letters.</label>\n        </div>\n      </div>\n\n      <div class="form-group">\n        <label class=" label">Mobile no 1 <span style="color:red">*</span> </label>\n        <input formControlName="omobile_no_1" type="text" OnlyNumber="true" class="form-control" />\n      </div>\n      <div class="error-msg" *ngIf="submitted || (editForm.controls.omobile_no_1.invalid && (editForm.controls.omobile_no_1.dirty || editForm.controls.omobile_no_1.touched))">\n        <div *ngIf="editForm.controls[\'omobile_no_1\'].hasError(\'required\')">\n          <label>Mobile number is required.</label>\n        </div>\n        <div *ngIf="editForm.controls[\'omobile_no_1\'].hasError(\'minlength\')">\n          <label>Minimum length is upto 10 letters.</label>\n        </div>\n        <div *ngIf="editForm.controls[\'omobile_no_1\'].hasError(\'maxlength\')">\n          <label>Maximum length is upto 10 letters.</label>\n        </div>\n      </div>\n      \n      <div class="form-group">\n        <label class=" label">Mobile no 2 </label>\n        <input formControlName="omobile_no_2" type="text" OnlyNumber="true" class="form-control" />\n      </div>\n      <div class="error-msg" *ngIf="submitted || (editForm.controls.omobile_no_2.invalid && (editForm.controls.omobile_no_2.dirty || editForm.controls.omobile_no_2.touched))">\n        <div *ngIf="editForm.controls[\'omobile_no_2\'].hasError(\'minlength\')">\n          <label>Minimum length is upto 10 letters.</label>\n        </div>\n        <div *ngIf="editForm.controls[\'omobile_no_2\'].hasError(\'maxlength\')">\n          <label>Maximum length is upto 10 letters.</label>\n        </div>\n      </div>\n      \n      <div class="form-group">\n        <label class=" label">Contact person name <span style="color:red">*</span> </label>\n        <input formControlName="contact_person" type="text" class="form-control" />\n      </div>\n      <div class="error-msg" *ngIf="submitted || (editForm.controls.contact_person.invalid && (editForm.controls.contact_person.dirty || editForm.controls.contact_person.touched))">\n        <div *ngIf="editForm.controls[\'contact_person\'].hasError(\'required\')">\n          <label>Contact person name is required.</label>\n        </div>\n        <div *ngIf="editForm.controls[\'contact_person\'].hasError(\'minlength\')">\n          <label>Minimum length is upto 2 letters.</label>\n        </div>\n      </div>\n      \n      <div class="form-group">\n        <label class=" label">Contact Mobile no 1 <span style="color:red">*</span> </label>\n        <input formControlName="cmobile_no_1" type="text" OnlyNumber="true" class="form-control" />\n      </div>\n      <div class="error-msg" *ngIf="submitted || (editForm.controls.cmobile_no_1.invalid && (editForm.controls.cmobile_no_1.dirty || editForm.controls.cmobile_no_1.touched))">\n        <div *ngIf="editForm.controls[\'cmobile_no_1\'].hasError(\'required\')">\n          <label>Contact person mobile number is required.</label>\n        </div>\n        <div *ngIf="editForm.controls[\'cmobile_no_1\'].hasError(\'minlength\')">\n          <label>Minimum length is upto 10 letters.</label>\n        </div>\n        <div *ngIf="editForm.controls[\'cmobile_no_1\'].hasError(\'maxlength\')">\n          <label>Maximum length is upto 10 letters.</label>\n        </div>\n      </div>\n      \n      <div class="form-group">\n        <label class=" label">Contact Mobile no 2 </label>\n        <input formControlName="cmobile_no_2" type="text" OnlyNumber="true" class="form-control" />\n      </div>\n      <div class="error-msg" *ngIf="submitted || (editForm.controls.cmobile_no_2.invalid && (editForm.controls.cmobile_no_2.dirty || editForm.controls.cmobile_no_2.touched))">\n        <div *ngIf="editForm.controls[\'cmobile_no_2\'].hasError(\'minlength\')">\n          <label>Minimum length is upto 10 letters.</label>\n        </div>\n        <div *ngIf="editForm.controls[\'cmobile_no_2\'].hasError(\'maxlength\')">\n          <label>Maximum length is upto 10 letters.</label>\n        </div>\n      </div>\n\n      <br>\n      <div class="width-full">\n      <button ion-button class="next-button" (click)="nextBank()" type="button" expand="block">Next</button>\n</div>\n    </div>\n\n    \n    \n\n    <!----------- Bank Flag ------------>\n    \n    <div *ngIf="bankFlag">\n      <div class="width-full">\n      <label class="fonts-size">Bank Details </label>\n      </div><br>\n      <div class="form-group">\n        <label class=" label">Account holder name </label>\n        <input formControlName="account_holder_name" type="text" class="form-control" />\n      </div>\n      <div class="error-msg" *ngIf="submitted || (editForm.controls.account_holder_name.invalid && (editForm.controls.account_holder_name.dirty || editForm.controls.account_holder_name.touched))">\n        <div *ngIf="editForm.controls[\'account_holder_name\'].hasError(\'minlength\')">\n          <label>Minimum length is upto 2 letters.</label>\n        </div>\n        <div *ngIf="editForm.controls[\'account_holder_name\'].hasError(\'maxlength\')">\n          <label>Maximum length is upto 25 letters.</label>\n        </div>\n      </div>\n      \n      <div class="form-group">\n        <label class=" label">Account no </label>\n        <input formControlName="account_number" type="text" class="form-control" />\n      </div>\n      <div class="error-msg" *ngIf="submitted || (editForm.controls.account_number.invalid && (editForm.controls.account_number.dirty || editForm.controls.account_number.touched))">\n        <div *ngIf="editForm.controls[\'account_number\'].hasError(\'maxlength\')">\n          <label>Maximum length is upto 16 letters.</label>\n        </div>\n      </div>\n      \n      <div class="form-group">\n        <label class=" label">Confrim account no </label>\n        <input name="confirm_account_number" type="text" placeholder="" (change)="confirmAccount()" formControlName="confirm_account_number" class="form-control"> \n      </div>\n      <div *ngIf="acountNo" class="error-msg"><label>Your account no and confirm account no do not match.</label></div>\n      <div class="error-msg" *ngIf="submitted || (editForm.controls.confirm_account_number.invalid && (editForm.controls.confirm_account_number.dirty || editForm.controls.confirm_account_number.touched))">\n        <div *ngIf="editForm.controls[\'confirm_account_number\'].hasError(\'maxlength\')">\n          <label>Maximum length is upto 16 letters.</label>\n        </div>\n      </div>\n      \n      <div class="form-group">\n        <label class=" label">Ifsc code </label>\n        <input formControlName="ifsc" type="text" class="form-control upper" />\n      </div>\n      <div class="error-msg" *ngIf="submitted || (editForm.controls.ifsc.invalid && (editForm.controls.ifsc.dirty || editForm.controls.ifsc.touched))">\n        <div *ngIf="editForm.controls[\'ifsc\'].hasError(\'minlength\')">\n          <label>Minimum length is upto 11 letters.</label>\n        </div>\n        <div *ngIf="editForm.controls[\'ifsc\'].hasError(\'maxlength\')">\n          <label>Maximum length is upto 11 letters.</label>\n        </div>\n      </div>\n\n      <br>\n      <br>\n      <div class="width-full">\n      <button ion-button class="pre-button" (click)="preTransport()" type="button" expand="block">Previous</button>\n      <button ion-button class="next-button" (click)="nextAddress()" type="button" expand="block">Next</button>\n    </div>\n    </div>\n    \n    \n\n    <!----------- Location Flag ------------>\n    <div *ngIf="locationFlag">\n      <div class="width-full">\n      <label class="fonts-size">Location Allotment</label>\n      </div>\n      <div class="form-group">\n        <input name="location_allotment" id="Location" type="text" placeholder="Search Location" #search formControlName="location_allotment" class="form-control">\n      </div>\n      <div class="width-full">\n      <ion-row right>  \n        <ion-col text-right>   \n          <button ion-button type="button" (click)="getLocation($event)"><ion-icon name="locate"></ion-icon></button>\n        </ion-col> \n      </ion-row>\n\n      <google-maps></google-maps> \n      <br>\n    </div>\n      <div class="form-group">\n        <label class=" label">Location Restriction (meters)</label>\n        <input name="location_restriction" type="number" placeholder="" formControlName="location_restriction" class="form-control"> \n      </div>\n      <div class="form-group">\n        <label class=" label">Latitude </label>\n        <input name="latitude" type="text" placeholder="" formControlName="latitude" class="form-control"> \n      </div>\n      <div class="form-group">\n        <label class=" label">Longitude </label>\n        <input name="longitude" type="text" placeholder="" formControlName="longitude" class="form-control"> \n      </div>\n\n\n      <div class="form-group">\n        <label class=" label">Website</label>\n        <input formControlName="website" type="text" class="form-control" />\n      </div>\n\n      <br>\n      <div class="width-full">\n      <button ion-button class="pre-button" (click)="nextAddress()" type="button" expand="block">Previous</button>\n      <button ion-button class="next-button" (click)="nextRoute()" type="button" expand="block">Next</button>\n    </div>\n    </div>\n    <br>\n\n    <!----------- Address Flag ------------>\n    <div *ngIf="addressFlag">\n      <div class="width-full">\n      <label class="fonts-size">Address Information </label>\n      </div><br>\n      <div formArrayName="address" *ngFor="let item of editForm.get(\'address\').controls; let i = index;">\n        <div [formGroupName]="i">\n          <div class="form-group">\n            <label class=" label">Address line 1 <span style="color:red">*</span></label>\n            <input type="text" formControlName="address_line_1" class="form-control">            \n          </div>\n          <div class="error-msg" *ngIf="submitted || (item.controls.address_line_1.invalid && (item.controls.address_line_1.dirty || item.controls.address_line_1.touched))">\n            <div *ngIf="item.controls[\'address_line_1\'].hasError(\'required\')">\n              <label>Address line 1 is required.</label>\n            </div>\n            <div *ngIf="item.controls[\'address_line_1\'].hasError(\'minlength\')">\n              <label>Minimum length is upto 2 letters.</label>\n            </div>\n          </div>\n\n          <div class="form-group">\n            <label class=" label">Address line 2 <span style="color:red">*</span></label>\n            <input type="text" formControlName="address_line_2" class="form-control">            \n          </div>\n          <div class="error-msg" *ngIf="submitted || (item.controls.address_line_2.invalid && (item.controls.address_line_2.dirty || item.controls.address_line_2.touched))">\n            <div *ngIf="item.controls[\'address_line_2\'].hasError(\'required\')">\n              <label>Address line 2 is required.</label>\n            </div>\n            <div *ngIf="item.controls[\'address_line_2\'].hasError(\'minlength\')">\n              <label>Minimum length is upto 2 letters.</label>\n            </div>\n          </div>\n        \n          <div class="form-group">\n            <label class=" label">City <span style="color:red">*</span></label>\n            <input type="text" id="City" formControlName="city" class="form-control" #searchCity>            \n          </div>\n          <div class="error-msg" *ngIf="submitted || (item.controls.city.invalid && (item.controls.city.dirty || item.controls.city.touched))">\n            <div *ngIf="item.controls[\'city\'].hasError(\'required\')">\n              <label>City is required.</label>\n            </div>\n            <div *ngIf="item.controls[\'city\'].hasError(\'minlength\')">\n              <label>Minimum length is upto 2 letters.</label>\n            </div>\n          </div>\n        \n          <div class="form-group">\n            <label class=" label">State <span style="color:red">*</span></label>\n            <input type="text" id="State" formControlName="state" class="form-control" #searchStatue>            \n          </div>\n          <div class="error-msg" *ngIf="submitted || (item.controls.state.invalid && (item.controls.state.dirty || item.controls.state.touched))">\n            <div *ngIf="item.controls[\'state\'].hasError(\'required\')">\n              <label>State is required.</label>\n            </div>\n            <div *ngIf="item.controls[\'state\'].hasError(\'minlength\')">\n              <label>Minimum length is upto 2 letters.</label>\n            </div>\n          </div>\n        \n          <div class="form-group">\n            <label class=" label">Pincode <span style="color:red">*</span></label>\n            <input type="text" OnlyNumber="true" formControlName="pincode" class="form-control">            \n          </div>\n          <div class="error-msg" *ngIf="submitted || (item.controls.pincode.invalid && (item.controls.pincode.dirty || item.controls.pincode.touched))">\n            <div *ngIf="item.controls[\'pincode\'].hasError(\'required\')">\n              <label>Pincode is required.</label>\n            </div>\n            <div *ngIf="item.controls[\'pincode\'].hasError(\'minlength\')">\n              <label>Minimum length is upto 6 letters.</label>\n            </div>\n            <div *ngIf="item.controls[\'pincode\'].hasError(\'maxlength\')">\n              <label>Maximum length is upto 6 letters.</label>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n      <br>\n      <div class="width-full">\n      <button ion-button class="pre-button" (click)="nextBank()" type="button" expand="block">Previous</button>\n      <button ion-button class="next-button" (click)="nextLocation()" type="button" expand="block">Next</button>\n    </div>\n    </div>\n\n    <!----------- Routs Flag ------------>\n    <div *ngIf="routeFlag">\n      <!-- <label class="fonts-size">Route Prefferred </label>\n      <div formArrayName="route_desired" class="form-group">            \n          <div *ngFor="let r of editForm.get(\'route_desired\').controls; let i = index;">\n            <div [formGroupName]="i">\n              <ion-grid>\n                <ion-row>\n                  <ion-col>\n                    <label class=" label mg-top-13">Location <span style="color:red">*</span> </label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-row right>\n                      <ion-col text-right>\n                        <button class="btn-size" type="button" ion-button color="secondary" (click)="addTo()"><ion-icon name="add"></ion-icon></button>\n                        <button class="btn-size" type="button" ion-button color="danger" (click)="removeTo(i)"><ion-icon name="close"></ion-icon></button>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <input type="text" formControlName="location" class="form-control" />\n            </div>\n          </div>\n      </div> -->\n      \n<div class="width-full">\n      <label class="fonts-size">Route Prefferred </label>\n      </div>\n      \n      <div class="form-group">\n        <button ion-button (click)="addToArray()" type="button" class="add-al">Add</button>\n        <label class=" label mg-top-13">Location </label> \n        <input type="text" id="TO" formControlName="location_to" class="form-control" #searchTo />\n      </div>\n      <hr>\n      <br>\n      <div class="width-full">\n      <div *ngFor="let d of DestinationsArray; let i = index">\n        <ion-row>\n          <ion-col class="col-pad">\n            {{ d.location }}\n          </ion-col>\n        \n          <ion-col>\n              <button class="btn-size" (click)="removeToArray(i)" ion-button type="button" color="danger"><ion-icon name="close"></ion-icon></button>\n          </ion-col>\n        </ion-row>\n      </div>\n</div>\n      <br>\n      \n      <div class="width-full">\n          <br>\n\n          <button ion-button class="pre-button" (click)="nextLocation()" type="button" expand="block">Previous</button>\n          <button ion-button class="up-button" type="submit" expand="block"><ion-icon name="checkmark-circle"></ion-icon>&nbsp;&nbsp;Update Transporter</button>\n      </div>\n    </div>\n  \n    <!-- <ion-row center>  \n      <ion-col text-center>   \n        <button ion-button type="submit" (click)="update(editForm.valid, editForm.value)">Update</button>  \n      </ion-col> \n    </ion-row>-->\n\n    \n\n\n  </form>\n    \n</ion-content>\n'/*ion-inline-end:"D:\truck\src\pages\edit-transport-details\edit-transport-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__providers_admin_privilege_admin_privilege__["a" /* AdminPrivilegeProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loader__["a" /* LoaderProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_event_service__["a" /* EventsService */],
            __WEBPACK_IMPORTED_MODULE_8__providers_truck__["a" /* Trucks */],
            __WEBPACK_IMPORTED_MODULE_9__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], EditTransportDetailsPage);
    return EditTransportDetailsPage;
}());

//# sourceMappingURL=edit-transport-details.js.map

/***/ })

});
//# sourceMappingURL=2.js.map