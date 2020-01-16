webpackJsonp([3],{

/***/ 1036:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDriverDetailsPageModule", function() { return EditDriverDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_driver_details__ = __webpack_require__(1043);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_auto_complete__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_auto_complete__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var EditDriverDetailsPageModule = /** @class */ (function () {
    function EditDriverDetailsPageModule() {
    }
    EditDriverDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_driver_details__["a" /* EditDriverDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_driver_details__["a" /* EditDriverDetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5_ng2_auto_complete__["Ng2AutoCompleteModule"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5_ng2_auto_complete__["Ng2AutoCompleteModule"]
            ]
        })
    ], EditDriverDetailsPageModule);
    return EditDriverDetailsPageModule;
}());

//# sourceMappingURL=edit-driver-details.module.js.map

/***/ }),

/***/ 1043:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditDriverDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_admin_privilege_admin_privilege__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loader__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_event_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__agm_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_truck__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__helpers_common__ = __webpack_require__(31);
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
 * Generated class for the EditDriverDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditDriverDetailsPage = /** @class */ (function () {
    function EditDriverDetailsPage(navCtrl, navParams, trucks, fb, admin, loader, toast, events, mapsAPILoader, ngZone) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.trucks = trucks;
        this.fb = fb;
        this.admin = admin;
        this.loader = loader;
        this.toast = toast;
        this.events = events;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.present_address_location = {
            type: "Point",
            coordinates: []
        };
        this.acountNo = false;
        this.driverFlag = true;
        this.addressFlag = false;
        this.licenceFlag = false;
        this.bankFlag = false;
        this.routeFlag = false;
        this.employeeFlag = false;
        this.paymentFlag = false;
        this.permanent_address_location = {
            type: "Point",
            coordinates: []
        };
        this.types = ['New Registration', 'Renewal'];
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
                return __WEBPACK_IMPORTED_MODULE_9_rxjs__["Observable"].of([]);
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
                return __WEBPACK_IMPORTED_MODULE_9_rxjs__["Observable"].of([]);
            }
        };
        this.details = this.navParams.get('data');
        var routeDesireds = [];
        var employersHistory = [];
        var paymentsHistory = [];
        if (this.details.route_desired[0]) {
            this.details.route_desired.forEach(function (element) {
                routeDesireds.push(_this.routeDesiredForm(element));
            });
            console.log(" Yes  >>>", this.details.driver_name);
        }
        else {
            console.log(" No  >>>", this.details.driver_name);
            routeDesireds.push(this.newRouteDesiredForm());
        }
        if (this.details.employers_history[0]) {
            this.details.employers_history.forEach(function (element) {
                employersHistory.push(_this.employersHistoryForm(element));
            });
            console.log(" Yes  >>>", this.details.driver_name);
        }
        else {
            console.log(" No  >>>", this.details.driver_name);
            employersHistory.push(this.newEmployersHistoryForm());
        }
        if (this.details.payment_history[0]) {
            this.details.payment_history.forEach(function (element) {
                paymentsHistory.push(_this.paymentHistoryForm(element));
            });
            console.log(" Yes  >>>", this.details.driver_name);
        }
        else {
            console.log(" No  >>>", this.details.driver_name);
            paymentsHistory.push(this.newPaymentHistoryForm());
        }
        this.formData = new FormData();
        this.editForm = this.fb.group({
            driver_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(25)])],
            mobile_no_1: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(10)])],
            mobile_no_2: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(10)])],
            adhar_card_no: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(12), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(12)])],
            licence_no: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(15), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(15)])],
            expiry_date: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            account_holder_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(25)])],
            account_number: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(16)])],
            confirm_account_number: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(16)])],
            ifsc: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(11), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(11)])],
            present_address: this.fb.array([this.createPresentAddressForm(this.details.present_address[0])]),
            permanent_address: this.fb.array([this.createPermanentAddressForm(this.details.permanent_address[0])]),
            route_desired: this.fb.array(routeDesireds),
            employers_history: this.fb.array(employersHistory),
            payment_history: this.fb.array(paymentsHistory),
            vehicle_preferred: [''],
            agency_name: [''],
            renewal_date: [''],
            location_to: ['']
        });
        var exDate = __WEBPACK_IMPORTED_MODULE_6_moment__(this.details.expiry_date, 'DD-MM-YYYY').format('YYYY-MM-DD');
        this.editForm.controls['driver_name'].setValue(this.details.driver_name);
        this.editForm.controls['mobile_no_1'].setValue(this.details.mobile_no_1);
        this.editForm.controls['mobile_no_2'].setValue(this.details.mobile_no_2);
        this.editForm.controls['adhar_card_no'].setValue(this.details.adhar_card_no);
        this.editForm.controls['licence_no'].setValue(this.details.licence_no);
        this.editForm.controls['expiry_date'].setValue(exDate);
        this.editForm.controls['account_holder_name'].setValue(this.details.account_holder_name);
        this.editForm.controls['account_number'].setValue(this.details.account_number);
        this.editForm.controls['confirm_account_number'].setValue(this.details.confirm_account_number);
        this.editForm.controls['ifsc'].setValue(this.details.ifsc);
        // this.editForm.controls['adhar_card_no'].setValue(this.details.adhar_card_no);
        this.editForm.controls['vehicle_preferred'].setValue(this.details.vehicle_preferred);
        this.editForm.controls['agency_name'].setValue(this.details.agency_name);
        this.editForm.controls['renewal_date'].setValue(this.details.renewal_date);
    }
    EditDriverDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditDriverDetailsPage');
    };
    EditDriverDetailsPage.prototype.Home = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__home_home__["a" /* HomePage */]);
    };
    EditDriverDetailsPage.prototype.confirmAccount = function () {
        if (this.editForm.value.account_number == this.editForm.value.confirm_account_number) {
            console.log("Same");
            this.acountNo = false;
        }
        else {
            console.log("Not Same");
            this.acountNo = true;
        }
    };
    EditDriverDetailsPage.prototype.addToArray = function () {
        var obj = { "location": this.getTo };
        this.DestinationsArray.push(obj);
        this.editForm.get('location_to').setValue('');
    };
    EditDriverDetailsPage.prototype.removeToArray = function (index) {
        this.DestinationsArray.splice(index, 1);
        console.log("array >>>", this.DestinationsArray);
    };
    EditDriverDetailsPage.prototype.ngOnInit = function () {
        // this.mapsAPILoader.load().then(() => {
        //   let presentCity = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        //     types: ['(cities)' && 'geocode']
        //   });
        //   presentCity.addListener("place_changed", () => {
        //     this.ngZone.run(() => {
        //       //get the place result
        //       let place: google.maps.places.PlaceResult = presentCity.getPlace();
        //       console.log("place   >>>>>>", place.address_components[0].long_name);
        //       console.log("vicinity   >>>>>>", place.vicinity);
        //       (<HTMLInputElement>document.getElementById('presentCity')).value = place.vicinity;
        //       this.presentAddressFormControls['city'].setValue(place.vicinity);
        //       // //verify result
        //       // if (place.geometry === undefined || place.geometry === null) {
        //       //   return;
        //       // }
        //     });
        //   });
        //   let presentState = new google.maps.places.Autocomplete(this.searchElementRef2.nativeElement, {
        //     types: ['(cities)' && 'geocode']
        //   });
        //   presentState.addListener("place_changed", () => {
        //     this.ngZone.run(() => {
        //       //get the place result
        //       let place: google.maps.places.PlaceResult = presentState.getPlace();
        //       console.log("place   >>>>>>", place.address_components[0].long_name);
        //       console.log("vicinity   >>>>>>", place.vicinity);
        //       (<HTMLInputElement>document.getElementById('presentState')).value = place.address_components[0].long_name;
        //       this.presentAddressFormControls['state'].setValue(place.address_components[0].long_name);
        //       //verify result
        //       if (place.geometry === undefined || place.geometry === null) {
        //         return;
        //       }
        //     });
        //   });
        //   let permanentCity = new google.maps.places.Autocomplete(this.searchElementRef3.nativeElement, {
        //     types: ['(cities)' && 'geocode']
        //   });
        //   permanentCity.addListener("place_changed", () => {
        //     this.ngZone.run(() => {
        //       //get the place result
        //       let place: google.maps.places.PlaceResult = permanentCity.getPlace();
        //       console.log("place   >>>>>>", place.address_components[0].long_name);
        //       console.log("vicinity   >>>>>>", place.vicinity);
        //       (<HTMLInputElement>document.getElementById('permanentCity')).value = place.vicinity;
        //       this.permanentAddressFormControls['city'].setValue(place.vicinity);
        //       // //verify result
        //       // if (place.geometry === undefined || place.geometry === null) {
        //       //   return;
        //       // }
        //     });
        //   });
        //   let permanentState = new google.maps.places.Autocomplete(this.searchElementRef4.nativeElement, {
        //     types: ['(cities)' && 'geocode']
        //   });
        //   permanentState.addListener("place_changed", () => {
        //     this.ngZone.run(() => {
        //       //get the place result
        //       let place: google.maps.places.PlaceResult = permanentState.getPlace();
        //       console.log("place   >>>>>>", place.address_components[0].long_name);
        //       console.log("vicinity   >>>>>>", place.vicinity);
        //       (<HTMLInputElement>document.getElementById('permanentState')).value = place.address_components[0].long_name;
        //       this.permanentAddressFormControls['state'].setValue(place.address_components[0].long_name);
        //       //verify result
        //       if (place.geometry === undefined || place.geometry === null) {
        //         return;
        //       }
        //     });
        //   });
        // });
        // this.mapsAPILoader.load().then(() => {
        //   let presentState = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        //     types: ['(cities)' && 'geocode']
        //   });
        //   presentState.addListener("place_changed", () => {
        //     this.ngZone.run(() => {
        //       //get the place result
        //       let place: google.maps.places.PlaceResult = presentState.getPlace();
        //       console.log("place   >>>>>>", place);
        //       console.log("vicinity   >>>>>>", place.vicinity);
        //       (<HTMLInputElement>document.getElementById('city')).value = place.vicinity;
        //       // //verify result
        //       // if (place.geometry === undefined || place.geometry === null) {
        //       //   return;
        //       // }
        //     });
        //   });
        // });
    };
    EditDriverDetailsPage.prototype.getPresentAddLocation = function (e) {
        e.preventDefault();
        this.events.broadcast('location');
    };
    EditDriverDetailsPage.prototype.getPermanentAddLocation = function (e) {
        e.preventDefault();
        this.events.broadcast('location');
    };
    EditDriverDetailsPage.prototype.routeDesiredForm = function (d) {
        var data = d ? d : '';
        return this.fb.group({
            location: [data.location]
        });
    };
    EditDriverDetailsPage.prototype.newRouteDesiredForm = function () {
        return this.fb.group({
            location: ['']
        });
    };
    EditDriverDetailsPage.prototype.addTo = function () {
        this.route_desired = this.editForm.get('route_desired');
        this.route_desired.push(this.routeDesiredForm(''));
    };
    EditDriverDetailsPage.prototype.removeTo = function (index) {
        if (index === 0) {
            this.toast.error({ 'message': 'Cannot remove this form.' });
        }
        else {
            this.route_desired = this.editForm.get('route_desired');
            this.route_desired.removeAt(index);
        }
    };
    // ---------------- employersHistoryForm ---------------- 
    EditDriverDetailsPage.prototype.employersHistoryForm = function (d) {
        var data = d ? d : '';
        return this.fb.group({
            from: [data.from],
            to: [data.to],
            transporter: [data.transporter],
            mobile: [data.mobile, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(10)])],
            salary: [data.salary]
        });
    };
    EditDriverDetailsPage.prototype.newEmployersHistoryForm = function () {
        return this.fb.group({
            from: [''],
            to: [''],
            transporter: [''],
            mobile: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(10)])],
            salary: ['']
        });
    };
    EditDriverDetailsPage.prototype.addToEmp = function () {
        this.employers_history = this.editForm.get('employers_history');
        this.employers_history.push(this.newEmployersHistoryForm());
    };
    EditDriverDetailsPage.prototype.removeToEmp = function (index) {
        if (index === 0) {
            this.toast.error({ 'message': 'Cannot remove this form.' });
        }
        else {
            this.employers_history = this.editForm.get('employers_history');
            this.employers_history.removeAt(index);
        }
    };
    // ------------------------------------------------------
    // ---------------- paymentHistoryForm ---------------- 
    EditDriverDetailsPage.prototype.paymentHistoryForm = function (d) {
        var data = d ? d : '';
        return this.fb.group({
            payment_date: [data.payment_date],
            type: [data.type],
            amount: [data.amount]
        });
    };
    EditDriverDetailsPage.prototype.newPaymentHistoryForm = function () {
        return this.fb.group({
            payment_date: [''],
            type: [''],
            amount: ['']
        });
    };
    EditDriverDetailsPage.prototype.addToPay = function () {
        this.payment_history = this.editForm.get('payment_history');
        this.payment_history.push(this.newPaymentHistoryForm());
    };
    EditDriverDetailsPage.prototype.removeToPay = function (index) {
        if (index === 0) {
            this.toast.error({ 'message': 'Cannot remove this form.' });
        }
        else {
            this.payment_history = this.editForm.get('payment_history');
            this.payment_history.removeAt(index);
        }
    };
    // ------------------------------------------------------
    // Create form controls for present address
    EditDriverDetailsPage.prototype.createPresentAddressForm = function (d) {
        var data = d ? d : '';
        return this.fb.group({
            address_line_1: [data.address_line_1, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2)])],
            address_line_2: [data.address_line_2, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2)])],
            city: [data.city, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2)])],
            state: [data.state, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2)])],
            pincode: [data.pincode, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(6)])]
        });
    };
    Object.defineProperty(EditDriverDetailsPage.prototype, "presentAddressFormControls", {
        // Get controls for form array for address 
        get: function () {
            return this.editForm.get('present_address')['controls'][0].controls;
        },
        enumerable: true,
        configurable: true
    });
    // Set data from google maps for present address
    EditDriverDetailsPage.prototype.presentAddressData = function (e) {
        this.formValues = this.editForm.value;
        this.presentAddressFormControls['address_line_1'].setValue(e.address_line1);
        this.presentAddressFormControls['address_line_2'].setValue(e.address_line2);
        this.presentAddressFormControls['city'].setValue(e.city);
        this.presentAddressFormControls['state'].setValue(e.state);
        this.presentAddressFormControls['pincode'].setValue(e.pincode);
        this.present_address_location.coordinates = [];
        this.present_address_location.coordinates.push(e.lng);
        this.present_address_location.coordinates.push(e.lat);
        this.formValues.present_address[0].address_location = this.present_address_location;
    };
    // Create form controls for permanent address
    EditDriverDetailsPage.prototype.createPermanentAddressForm = function (d) {
        var data = d ? d : '';
        return this.fb.group({
            address_line_1: [data.address_line_1, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2)])],
            address_line_2: [data.address_line_2, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2)])],
            city: [data.city, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2)])],
            state: [data.state, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2)])],
            pincode: [data.pincode, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(6)])]
        });
    };
    Object.defineProperty(EditDriverDetailsPage.prototype, "permanentAddressFormControls", {
        get: function () {
            return this.editForm.get('permanent_address')['controls'][0].controls;
        },
        enumerable: true,
        configurable: true
    });
    // Set data from google maps for permanent address  
    EditDriverDetailsPage.prototype.permanentAddressData = function (e) {
        this.formValues = this.editForm.value;
        this.permanentAddressFormControls['address_line_1'].setValue(e.address_line1);
        this.permanentAddressFormControls['address_line_2'].setValue(e.address_line2);
        this.permanentAddressFormControls['city'].setValue(e.city);
        this.permanentAddressFormControls['state'].setValue(e.state);
        this.permanentAddressFormControls['pincode'].setValue(e.pincode);
        this.permanent_address_location.coordinates = [];
        this.permanent_address_location.coordinates.push(e.lng);
        this.permanent_address_location.coordinates.push(e.lat);
        this.formValues.permanent_address[0].address_location = this.permanent_address_location;
    };
    EditDriverDetailsPage.prototype.driverPhotoSelected = function (event) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            this.formData.append('driver_photo', file, file.name);
        }
    };
    EditDriverDetailsPage.prototype.licencePhotoSelected = function (event) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            this.formData.append('licence_photo', file, file.name);
        }
    };
    // // Get controls for form array for address
    // get addressForm() {
    //   return this.editForm.get('address')['controls'][0].controls;
    // }
    // // Google map address
    // addressData(e: any):void {
    //   this.formValues = this.editForm.value;
    //   this.addressForm['address_line_1'].setValue(e.address_line1);
    //   this.addressForm['address_line_2'].setValue(e.address_line2);
    //   this.addressForm['city'].setValue(e.city);
    //   this.addressForm['state'].setValue(e.state);
    //   this.addressForm['pincode'].setValue(e.pincode);
    //   this.address_location.coordinates = [];
    //   this.address_location.coordinates.push(e.lng);
    //   this.address_location.coordinates.push(e.lat);
    //   this.formValues.address[0].address_location = this.address_location;
    //   console.log(">>>FormVal1", this.formValues);
    // }
    EditDriverDetailsPage.prototype.update = function (isValid, value) {
        var _this = this;
        this.submitted = true;
        console.log(">>>>>editForm", this.editForm);
        var employersHistoryArray = [];
        var obj;
        this.editForm.value.employers_history.forEach(function (r) {
            obj = r;
            // obj.transporter = r.transporter.transport_name ? r.transporter.transport_name: r.transporter
            obj.transporter = r.transporter;
            employersHistoryArray.push(obj);
        });
        if (isValid) {
            this.formData.append('account_holder_name', value.account_holder_name);
            this.formData.append('account_number', value.account_number);
            this.formData.append('adhar_card_no', value.adhar_card_no);
            this.formData.append('confirm_account_number', value.confirm_account_number);
            this.formData.append('driver_name', value.driver_name);
            this.formData.append('expiry_date', value.expiry_date);
            this.formData.append('ifsc', value.ifsc);
            this.formData.append('licence_no', value.licence_no);
            this.formData.append('mobile_no_1', value.mobile_no_1);
            this.formData.append('mobile_no_2', value.mobile_no_2);
            this.formData.append('permanent_address', JSON.stringify(value.permanent_address));
            this.formData.append('present_address', JSON.stringify(value.present_address));
            // this.formData.append('route_desired', JSON.stringify(value.route_desired));
            this.formData.append('route_desired', this.DestinationsArray);
            this.formData.append('employers_history', JSON.stringify(employersHistoryArray));
            this.formData.append('payment_history', JSON.stringify(value.payment_history));
            this.formData.append('vehicle_preferred', value.vehicle_preferred);
            this.formData.append('agency_name', value.agency_name.agency_name ? value.agency_name.agency_name : value.agency_name);
            this.formData.append('renewal_date', value.renewal_date);
            this.loader.show();
            this.admin.updateDriverList(this.details._id, this.formData).subscribe(function (res) {
                _this.loader.hide();
                _this.toast.show({ 'message': 'Updated successfully.' });
                _this.navCtrl.setRoot('ManageDriverPage');
            }, function (err) {
                _this.loader.hide();
                _this.toast.error({ 'message': 'Something went wrong.' });
                console.log(">>>>>err", err);
            });
        }
    };
    EditDriverDetailsPage.prototype.preDriver = function () {
        this.driverFlag = true;
        this.addressFlag = false;
        this.licenceFlag = false;
        this.bankFlag = false;
        this.routeFlag = false;
        this.employeeFlag = false;
        this.paymentFlag = false;
    };
    EditDriverDetailsPage.prototype.nextAddress = function () {
        var _this = this;
        this.driverFlag = false;
        this.addressFlag = true;
        this.licenceFlag = false;
        this.bankFlag = false;
        this.routeFlag = false;
        this.employeeFlag = false;
        this.paymentFlag = false;
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
                        var components = __WEBPACK_IMPORTED_MODULE_12__helpers_common__["a" /* CommonHelper */].extract_components(place);
                        var pre_city = __WEBPACK_IMPORTED_MODULE_12__helpers_common__["a" /* CommonHelper */].get_sublocality(components);
                        console.log(components, pre_city);
                        document.getElementById('presentCity').value = pre_city;
                        var addr = _this.editForm.get('present_address');
                        var first = addr.at(0);
                        first.get('city').setValue(pre_city);
                    });
                });
                var presentState = new google.maps.places.Autocomplete(_this.searchElementRef2.nativeElement, {
                    componentRestrictions: { "country": "IN" },
                    types: []
                });
                presentState.addListener("place_changed", function () {
                    _this.ngZone.run(function () {
                        //get the place result
                        var place = presentState.getPlace();
                        var components = __WEBPACK_IMPORTED_MODULE_12__helpers_common__["a" /* CommonHelper */].extract_components(place);
                        document.getElementById('presentState').value = components.administrative_area_level_1;
                        var addr = _this.editForm.get('present_address');
                        var first = addr.at(0);
                        first.get('state').setValue(components.administrative_area_level_1);
                    });
                });
                var permanentCity = new google.maps.places.Autocomplete(_this.searchElementRef3.nativeElement, {
                    componentRestrictions: { "country": "IN" },
                    types: []
                });
                permanentCity.addListener("place_changed", function () {
                    _this.ngZone.run(function () {
                        //get the place result
                        var place = permanentCity.getPlace();
                        var components = __WEBPACK_IMPORTED_MODULE_12__helpers_common__["a" /* CommonHelper */].extract_components(place);
                        var pre_city = __WEBPACK_IMPORTED_MODULE_12__helpers_common__["a" /* CommonHelper */].get_sublocality(components);
                        console.log(components, pre_city);
                        document.getElementById('permanentCity').value = pre_city;
                        var addr = _this.editForm.get('permanent_address');
                        var first = addr.at(0);
                        first.get('city').setValue(pre_city);
                    });
                });
                var permanentState = new google.maps.places.Autocomplete(_this.searchElementRef4.nativeElement, {
                    componentRestrictions: { "country": "IN" },
                    types: []
                });
                permanentState.addListener("place_changed", function () {
                    _this.ngZone.run(function () {
                        //get the place result
                        var place = permanentState.getPlace();
                        var components = __WEBPACK_IMPORTED_MODULE_12__helpers_common__["a" /* CommonHelper */].extract_components(place);
                        document.getElementById('permanentState').value = components.administrative_area_level_1;
                        var addr = _this.editForm.get('permanent_address');
                        var first = addr.at(0);
                        first.get('state').setValue(components.administrative_area_level_1);
                    });
                });
            });
        }, 2000);
    };
    EditDriverDetailsPage.prototype.nextLicence = function () {
        this.driverFlag = false;
        this.addressFlag = false;
        this.licenceFlag = true;
        this.bankFlag = false;
        this.routeFlag = false;
        this.employeeFlag = false;
        this.paymentFlag = false;
    };
    EditDriverDetailsPage.prototype.nextBank = function () {
        this.driverFlag = false;
        this.addressFlag = false;
        this.licenceFlag = false;
        this.bankFlag = true;
        this.routeFlag = false;
        this.employeeFlag = false;
        this.paymentFlag = false;
    };
    EditDriverDetailsPage.prototype.nextRoute = function () {
        var _this = this;
        this.driverFlag = false;
        this.addressFlag = false;
        this.licenceFlag = false;
        this.bankFlag = false;
        this.routeFlag = true;
        this.employeeFlag = false;
        this.paymentFlag = false;
        setTimeout(function () {
            var toSearch = new google.maps.places.Autocomplete(_this.searchElementRefTo.nativeElement, {
                componentRestrictions: { "country": "IN" },
                types: []
            });
            toSearch.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = toSearch.getPlace();
                    var components = __WEBPACK_IMPORTED_MODULE_12__helpers_common__["a" /* CommonHelper */].extract_components(place);
                    var pre_city = __WEBPACK_IMPORTED_MODULE_12__helpers_common__["a" /* CommonHelper */].get_sublocality(components);
                    console.log(components, pre_city);
                    document.getElementById('TO').value = pre_city;
                    _this.getTo = pre_city;
                });
            });
        }, 2000);
    };
    EditDriverDetailsPage.prototype.nextEmployee = function () {
        this.driverFlag = false;
        this.addressFlag = false;
        this.licenceFlag = false;
        this.bankFlag = false;
        this.routeFlag = false;
        this.employeeFlag = true;
        this.paymentFlag = false;
    };
    EditDriverDetailsPage.prototype.nextPayment = function () {
        this.driverFlag = false;
        this.addressFlag = false;
        this.licenceFlag = false;
        this.bankFlag = false;
        this.routeFlag = false;
        this.employeeFlag = false;
        this.paymentFlag = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], EditDriverDetailsPage.prototype, "searchElementRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search2"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], EditDriverDetailsPage.prototype, "searchElementRef2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search3"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], EditDriverDetailsPage.prototype, "searchElementRef3", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search4"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], EditDriverDetailsPage.prototype, "searchElementRef4", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("searchTo"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], EditDriverDetailsPage.prototype, "searchElementRefTo", void 0);
    EditDriverDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-driver-details',template:/*ion-inline-start:"D:\truck\src\pages\edit-driver-details\edit-driver-details.html"*/'<!--\n  Generated template for the EditDriverDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-toolbar>\n      <ion-title>Edit Driver Details</ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="Home()" >\n            <ion-icon name="home" ></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <form [formGroup]="editForm" novalidate>\n\n    <!------------------ Driver Flag ----------------  -->\n    <div *ngIf="driverFlag">\n      <div class="width-full">\n      <label class="fonts-size">Driver Details </label>\n      </div>\n      <div class="image-div">\n        <img  class="image-hw" [src]="details.driver_photo">\n      </div>\n\n      <div class="form-group">\n        <label class=" label">Driver photo </label>\n        <input type="file" class="form-control" (change)="driverPhotoSelected($event)" placeholder="Upload file">\n      </div>\n      \n      <div class="form-group">\n        <label class=" label">Driver name <span style="color:red">*</span> </label> \n        <input formControlName="driver_name" type="text" class="form-control" />\n      </div>\n      <div class="error-msg" *ngIf="submitted || (editForm.controls.driver_name.invalid && (editForm.controls.driver_name.dirty || editForm.controls.driver_name.touched))">\n        <div *ngIf="editForm.controls[\'driver_name\'].hasError(\'required\')">\n          <label>Driver name is required.</label>\n        </div>\n        <div *ngIf="editForm.controls[\'driver_name\'].hasError(\'minlength\')">\n          <label>Minimum length is upto 2 letters.</label>\n        </div>\n        <div *ngIf="editForm.controls[\'driver_name\'].hasError(\'maxlength\')">\n          <label>Maximum length is upto 25 letters.</label>\n        </div>\n      </div>\n\n      <div class="form-group">\n        <label class=" label">Mobile no 1 <span style="color:red">*</span> </label> \n        <input formControlName="mobile_no_1" type="text" class="form-control" />\n      </div>\n      <div class="error-msg" *ngIf="submitted || (editForm.controls.mobile_no_1.invalid && (editForm.controls.mobile_no_1.dirty || editForm.controls.mobile_no_1.touched))">\n        <div *ngIf="editForm.controls[\'mobile_no_1\'].hasError(\'required\')">\n          <label>Mobile number is required.</label>\n        </div>\n        <div *ngIf="editForm.controls[\'mobile_no_1\'].hasError(\'minlength\')">\n          <label>Minimum length is upto 10 letters.</label>\n        </div>\n        <div *ngIf="editForm.controls[\'mobile_no_1\'].hasError(\'maxlength\')">\n          <label>Maximum length is upto 10 letters.</label>\n        </div>\n      </div>\n\n      <div class="form-group">\n        <label class=" label">Mobile no 2 </label> \n        <input formControlName="mobile_no_2" type="text" class="form-control" />\n      </div>\n      <div class="error-msg" *ngIf="submitted || (editForm.controls.mobile_no_2.invalid && (editForm.controls.mobile_no_2.dirty || editForm.controls.mobile_no_2.touched))">\n        <div *ngIf="editForm.controls[\'mobile_no_2\'].hasError(\'minlength\')">\n          <label>Minimum length is upto 10 letters.</label>\n        </div>\n        <div *ngIf="editForm.controls[\'mobile_no_2\'].hasError(\'maxlength\')">\n          <label>Maximum length is upto 10 letters.</label>\n        </div>\n      </div>\n\n      <div class="form-group">\n          <label class=" label">Aadhar card no </label> \n          <input formControlName="adhar_card_no" type="text" class="form-control" />\n        </div>\n        <div class="error-msg" *ngIf="submitted || (editForm.controls.adhar_card_no.invalid && (editForm.controls.adhar_card_no.dirty || editForm.controls.adhar_card_no.touched))">\n          <div *ngIf="editForm.controls[\'adhar_card_no\'].hasError(\'minlength\')">\n            <label>Minimum length is upto 12 letters.</label>\n          </div>\n          <div *ngIf="editForm.controls[\'adhar_card_no\'].hasError(\'maxlength\')">\n            <label>Maximum length is upto 12 letters.</label>\n          </div>\n        </div>\n      <br>\n      <div class="width-full">\n      <button ion-button class="next-button" (click)="nextAddress()" type="button" expand="block">Next</button>\n  </div>\n    </div>\n\n    <!------------------ Address Flag ----------------  -->\n    <div *ngIf="addressFlag">\n      <div class="width-full">\n      <label class="fonts-size">Address Information</label>\n      </div>\n      <br>\n      <br>\n      <div class="width-full" padding>\n      <b>Present Address </b>\n      </div>\n      <hr>\n\n            <!-- \n      <ion-row right>  \n        <ion-col text-right>   \n          <button ion-button type="button" (click)="getPresentAddLocation($event)"><ion-icon name="locate"></ion-icon></button>\n        </ion-col> \n      </ion-row>\n\n      <google-maps (googleAddress)="presentAddressData($event)"></google-maps>\n      <br> -->\n\n      <div formArrayName="present_address" *ngFor="let item of editForm.get(\'present_address\').controls; let i = index;">\n          <div [formGroupName]="i">\n            <div class="form-group">\n              <label class=" label">Address line 1 </label>\n              <input type="text" formControlName="address_line_1" class="form-control">            \n            </div>\n            <div class="error-msg" *ngIf="submitted || (item.controls.address_line_1.invalid && (item.controls.address_line_1.dirty || item.controls.address_line_1.touched))">\n              <!-- <div *ngIf="item.controls[\'address_line_1\'].hasError(\'required\')">\n                <label>Address line 1 is required.</label>\n              </div> -->\n              <div *ngIf="item.controls[\'address_line_1\'].hasError(\'minlength\')">\n                <label>Minimum length is upto 2 letters.</label>\n              </div>\n            </div>\n  \n            <div class="form-group">\n              <label class=" label">Address line 2 </label>\n              <input type="text" formControlName="address_line_2" class="form-control">            \n            </div>\n            <div class="error-msg" *ngIf="submitted || (item.controls.address_line_2.invalid && (item.controls.address_line_2.dirty || item.controls.address_line_2.touched))">\n              <!-- <div *ngIf="item.controls[\'address_line_2\'].hasError(\'required\')">\n                <label>Address line 2 is required.</label>\n              </div> -->\n              <div *ngIf="item.controls[\'address_line_2\'].hasError(\'minlength\')">\n                <label>Minimum length is upto 2 letters.</label>\n              </div>\n            </div>\n          \n            <div class="form-group">\n              <label class=" label">City </label>\n              <!-- <input type="text" formControlName="city" class="form-control">    -->\n              <input id="presentCity"  placeholder="Search City" autocorrect="off" autocapitalize="off" spellcheck="off" type="text" class="form-control" #search formControlName="city">         \n            </div>\n            <div class="error-msg" *ngIf="submitted || (item.controls.city.invalid && (item.controls.city.dirty || item.controls.city.touched))">\n              <!-- <div *ngIf="item.controls[\'city\'].hasError(\'required\')">\n                <label>City is required.</label>\n              </div> -->\n              <div *ngIf="item.controls[\'city\'].hasError(\'minlength\')">\n                <label>Minimum length is upto 2 letters.</label>\n              </div>\n            </div>\n          \n            <div class="form-group">\n              <label class=" label">State </label>\n              <!-- <input type="text" formControlName="state" class="form-control">             -->\n              <input id="presentState" placeholder="Search State" autocorrect="off" autocapitalize="off" spellcheck="off" type="text" class="form-control" #search2 formControlName="state">                 \n            </div>\n            <div class="error-msg" *ngIf="submitted || (item.controls.state.invalid && (item.controls.state.dirty || item.controls.state.touched))">\n              <!-- <div *ngIf="item.controls[\'state\'].hasError(\'required\')">\n                <label>State is required.</label>\n              </div> -->\n              <div *ngIf="item.controls[\'state\'].hasError(\'minlength\')">\n                <label>Minimum length is upto 2 letters.</label>\n              </div>\n            </div>\n          \n            <div class="form-group">\n              <label class=" label">Pincode </label>\n              <input type="text" OnlyNumber="true" formControlName="pincode" class="form-control">            \n            </div>\n            <div class="error-msg" *ngIf="submitted || (item.controls.pincode.invalid && (item.controls.pincode.dirty || item.controls.pincode.touched))">\n              <!-- <div *ngIf="item.controls[\'pincode\'].hasError(\'required\')">\n                <label>Pincode is required.</label>\n              </div> -->\n              <div *ngIf="item.controls[\'pincode\'].hasError(\'minlength\')">\n                <label>Minimum length is upto 6 letters.</label>\n              </div>\n              <div *ngIf="item.controls[\'pincode\'].hasError(\'maxlength\')">\n                <label>Maximum length is upto 6 letters.</label>\n              </div>\n            </div>\n  \n          </div>\n        </div>\n  \n        <br><hr>\n        <div class="width-full" padding>\n        <b>Permanent Address </b>\n        </div>\n  \n        <!-- <ion-row right>  \n          <ion-col text-right>   \n            <button ion-button type="button" (click)="getPermanentAddLocation($event)"><ion-icon name="locate"></ion-icon></button>\n          </ion-col> \n        </ion-row>\n  \n        <google-maps (googleAddress)="permanentAddressData($event)"></google-maps>\n        <br> -->\n  \n        <div formArrayName="permanent_address" *ngFor="let item of editForm.get(\'permanent_address\').controls; let i = index;">\n          <div [formGroupName]="i">\n            <div class="form-group">\n              <label class=" label">Address line 1 </label>\n              <input type="text" formControlName="address_line_1" class="form-control">            \n            </div>\n            <div class="error-msg" *ngIf="submitted || (item.controls.address_line_1.invalid && (item.controls.address_line_1.dirty || item.controls.address_line_1.touched))">\n              <!-- <div *ngIf="item.controls[\'address_line_1\'].hasError(\'required\')">\n                <label>Address line 1 is required.</label>\n              </div> -->\n              <div *ngIf="item.controls[\'address_line_1\'].hasError(\'minlength\')">\n                <label>Minimum length is upto 2 letters.</label>\n              </div>\n            </div>\n  \n            <div class="form-group">\n              <label class=" label">Address line 2 </label>\n              <input type="text" formControlName="address_line_2" class="form-control">            \n            </div>\n            <div class="error-msg" *ngIf="submitted || (item.controls.address_line_2.invalid && (item.controls.address_line_2.dirty || item.controls.address_line_2.touched))">\n              <!-- <div *ngIf="item.controls[\'address_line_2\'].hasError(\'required\')">\n                <label>Address line 2 is required.</label>\n              </div> -->\n              <div *ngIf="item.controls[\'address_line_2\'].hasError(\'minlength\')">\n                <label>Minimum length is upto 2 letters.</label>\n              </div>\n            </div>\n          \n            <div class="form-group">\n              <label class=" label">City </label>\n              <!-- <input type="text" formControlName="city" class="form-control">             -->\n              <input id="permanentCity"  placeholder="Search City" autocorrect="off" autocapitalize="off" spellcheck="off" type="text" class="form-control" #search3 formControlName="city">\n            </div>\n            <div class="error-msg" *ngIf="submitted || (item.controls.city.invalid && (item.controls.city.dirty || item.controls.city.touched))">\n              <!-- <div *ngIf="item.controls[\'city\'].hasError(\'required\')">\n                <label>City is required.</label>\n              </div> -->\n              <div *ngIf="item.controls[\'city\'].hasError(\'minlength\')">\n                <label>Minimum length is upto 2 letters.</label>\n              </div>\n            </div>\n          \n            <div class="form-group">\n              <label class=" label">State </label>\n              <!-- <input type="text" formControlName="state" class="form-control">             -->\n              <input id="permanentState"  placeholder="Search State" autocorrect="off" autocapitalize="off" spellcheck="off" type="text" class="form-control" #search4 formControlName="state">        \n            </div>\n            <div class="error-msg" *ngIf="submitted || (item.controls.state.invalid && (item.controls.state.dirty || item.controls.state.touched))">\n              <!-- <div *ngIf="item.controls[\'state\'].hasError(\'required\')">\n                <label>State is required.</label>\n              </div> -->\n              <div *ngIf="item.controls[\'state\'].hasError(\'minlength\')">\n                <label>Minimum length is upto 2 letters.</label>\n              </div>\n            </div>\n          \n            <div class="form-group">\n              <label class=" label">Pincode </label>\n              <input type="text" OnlyNumber="true" formControlName="pincode" class="form-control">            \n            </div>\n            <div class="error-msg" *ngIf="submitted || (item.controls.pincode.invalid && (item.controls.pincode.dirty || item.controls.pincode.touched))">\n              <!-- <div *ngIf="item.controls[\'pincode\'].hasError(\'required\')">\n                <label>Pincode is required.</label>\n              </div> -->\n              <div *ngIf="item.controls[\'pincode\'].hasError(\'minlength\')">\n                <label>Minimum length is upto 6 letters.</label>\n              </div>\n              <div *ngIf="item.controls[\'pincode\'].hasError(\'maxlength\')">\n                <label>Maximum length is upto 6 letters.</label>\n              </div>\n            </div>\n  \n          </div>\n        </div>\n\n\n      <br>\n      <div class="width-full">\n      <button ion-button class="pre-button" (click)="preDriver()" type="button" expand="block">Previous</button>\n      <button ion-button class="next-button" (click)="nextLicence()" type="button" expand="block">Next</button>\n        </div>\n    </div>\n\n    <!------------------ Licence Flag ----------------  -->\n    <div *ngIf="licenceFlag">\n      <div class="width-full">\n      <label class="fonts-size">Licence Details</label>\n      </div>\n\n      <div class="form-group">\n        <label class=" label">Licence no <span style="color:red">*</span> </label> \n        <input formControlName="licence_no" type="text" class="form-control upper" />\n      </div>\n      <div class="error-msg" *ngIf="submitted || (editForm.controls.licence_no.invalid && (editForm.controls.licence_no.dirty || editForm.controls.licence_no.touched))">\n        <div *ngIf="editForm.controls[\'licence_no\'].hasError(\'minlength\')">\n          <label>Minimum length is upto 15 letters.</label>\n        </div>\n        <div *ngIf="editForm.controls[\'licence_no\'].hasError(\'maxlength\')">\n          <label>Maximum length is upto 15 letters.</label>\n        </div>\n      </div>\n\n      <div class="form-group">\n        <label class=" label">Expiry date <span style="color:red">*</span> </label> \n        <ion-item class="form-control">\n          <ion-datetime displayFormat="DD-MM-YYYY" pickerFormat="DD-MM-YYYY" min="2016" max="2070-10-31" formControlName="expiry_date"></ion-datetime>\n        </ion-item>\n      </div>\n      <div *ngIf="editForm.value.licence_no">\n        <!-- <div *ngIf="editForm.controls.expiry_date.invalid && (editForm.controls.expiry_date.dirty || editForm.controls.expiry_date.touched)"> -->\n          <!-- <div class="error-msg" *ngIf="editForm.controls[\'expiry_date\'].hasError(\'required\') && editForm.controls[\'expiry_date\'].touched">\n            <label>Expiry date is required.</label>\n          </div> -->\n        <!-- </div> -->\n      </div>\n\n      <br>\n      <div class="width-full">\n      <button ion-button class="pre-button" (click)="nextAddress()" type="button" expand="block">Previous</button>\n      <button ion-button class="next-button" (click)="nextBank()" type="button" expand="block">Next</button>\n</div>\n  \n\n    </div>\n\n    <!------------------ Bank Flag ----------------  -->\n    <div *ngIf="bankFlag">\n      <div class="width-full">\n      <label class="fonts-size">Bank Details</label>\n      </div>\n      <div class="form-group">\n        <label class=" label">Bank Name</label>\n        <input name="account_holder_name" type="text" placeholder="" formControlName="account_holder_name" class="form-control"> \n      </div>\n      <div class="error-msg" *ngIf="submitted || (editForm.controls.account_holder_name.invalid && (editForm.controls.account_holder_name.dirty || editForm.controls.account_holder_name.touched))">\n        <div *ngIf="editForm.controls[\'account_holder_name\'].hasError(\'minlength\')">\n          <label>Minimum length is upto 2 letters.</label>\n        </div>\n        <div *ngIf="editForm.controls[\'account_holder_name\'].hasError(\'maxlength\')">\n          <label>Maximum length is upto 25 letters.</label>\n        </div>\n      </div>\n\n      <div class="form-group">\n        <label class=" label">Account no </label>\n        <input name="account_number" type="text" placeholder="" formControlName="account_number" class="form-control"> \n      </div>\n      <div class="error-msg" *ngIf="submitted || (editForm.controls.account_number.invalid && (editForm.controls.account_number.dirty || editForm.controls.account_number.touched))">\n        <div *ngIf="editForm.controls[\'account_number\'].hasError(\'maxlength\')">\n          <label>Maximum length is upto 16 letters.</label>\n        </div>\n      </div>\n        \n      <div class="form-group">\n        <label class=" label">Confirm account no </label>\n        <input name="confirm_account_number" type="text" (change)="confirmAccount()" placeholder="" formControlName="confirm_account_number" class="form-control"> \n      </div>\n      <div *ngIf="acountNo" class="error-msg"><label>Your account no and confirm account no do not match.</label></div>\n      <div class="error-msg" *ngIf="submitted || (editForm.controls.confirm_account_number.invalid && (editForm.controls.confirm_account_number.dirty || editForm.controls.confirm_account_number.touched))">\n        <div *ngIf="editForm.controls[\'confirm_account_number\'].hasError(\'maxlength\')">\n          <label>Maximum length is upto 16 letters.</label>\n        </div>\n      </div>\n\n      <div class="form-group">\n        <label class=" label">Ifsc code </label>\n        <input name="ifsc" type="text" placeholder="" formControlName="ifsc" class="form-control upper"> \n      </div>\n      <div class="error-msg" *ngIf="submitted || (editForm.controls.ifsc.invalid && (editForm.controls.ifsc.dirty || editForm.controls.ifsc.touched))">\n        <div *ngIf="editForm.controls[\'ifsc\'].hasError(\'minlength\')">\n          <label>Minimum length is upto 11 letters.</label>\n        </div>\n        <div *ngIf="editForm.controls[\'ifsc\'].hasError(\'maxlength\')">\n          <label>Maximum length is upto 11 letters.</label>\n        </div>\n      </div>\n\n      <br>\n      <div class="width-full">\n      <button ion-button class="pre-button" (click)="nextLicence()" type="button" expand="block">Previous</button>\n      <button ion-button class="next-button" (click)="nextRoute()" type="button" expand="block">Next</button>\n</div>\n  \n    </div>\n\n    <!------------------ Route Flag ----------------  -->\n    <div *ngIf="routeFlag">\n      <div class="width-full">\n      <label class="fonts-size">Route Prefferred</label> \n      </div>\n      <!-- <div formArrayName="route_desired" class="form-group">            \n        <div *ngFor="let r of editForm.get(\'route_desired\').controls; let i = index;">\n          <div [formGroupName]="i">\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n                  <label class=" label mg-top-13">Location <span style="color:red">*</span> </label>\n                </ion-col>\n                <ion-col>\n                  <ion-row right>\n                    <ion-col text-right>\n                      <button class="btn-size" type="button"ion-button color="secondary" (click)="addTo()"><ion-icon name="add"></ion-icon></button>\n                      <button class="btn-size" type="button" ion-button color="danger" (click)="removeTo(i)"><ion-icon name="close"></ion-icon></button>\n                    </ion-col>\n                  </ion-row>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n            <input type="text" formControlName="location" class="form-control" />\n          </div>\n        </div>\n      </div> -->\n\n      <div class="form-group">\n        <button ion-button (click)="addToArray()" type="button" class="add-al">Add</button>\n        <label class=" label mg-top-13">Location <span style="color:red">*</span></label> \n        <input type="text" id="TO" autocorrect="off" formControlName="location_to" class="form-control" #searchTo />\n      \n        <div *ngFor="let d of DestinationsArray; let i = index">\n            <ion-row>\n              <ion-col class="col-pad">\n                {{ d.location }}\n              </ion-col>\n            \n              <ion-col>\n                  <button class="btn-size" (click)="removeToArray(i)" ion-button type="button" color="danger"><ion-icon name="close"></ion-icon></button>\n              </ion-col>\n            </ion-row>\n          </div>\n      </div>\n      <br>\n\n\n      <br>\n      <div class="width-full">\n      <button ion-button class="pre-button" (click)="nextBank()" type="button" expand="block">Previous</button>\n      <button ion-button class="next-button" (click)="nextEmployee()" type="button" expand="block">Next</button>\n</div>\n    </div>\n     \n\n    <!-- ---------------- employersHistoryForm ----------------  -->\n\n    <div *ngIf="employeeFlag"> \n      <div class="width-full">\n      <label class="fonts-size">Employers History</label>\n      </div>\n      <div class="width-full">\n      <div formArrayName="employers_history">            \n        <div *ngFor="let r of editForm.get(\'employers_history\').controls; let i = index;">\n          <div [formGroupName]="i">\n\n\n            <div class="form-group">\n              <label class=" label">From</label>\n              <ion-item class="form-control">\n                <ion-datetime name="from" displayFormat="DD-MM-YYYY" pickerFormat="DD-MM-YYYY" min="1990" max="2050-10-31" formControlName="from"></ion-datetime>\n              </ion-item> \n            </div> \n\n            <div class="form-group">\n              <label class=" label">To</label>\n              <ion-item class="form-control">\n                <ion-datetime name="to" displayFormat="DD-MM-YYYY" pickerFormat="DD-MM-YYYY" min="1990" max="2050-10-31" formControlName="to"></ion-datetime>\n              </ion-item> \n            </div> \n\n            <div class="form-group">\n              <label class=" label">Transporter Name </label> \n              <input name="transporter" type="text" formControlName="transporter" class="form-control" />\n\n              <!-- <input class="form-control"\n              ng2-auto-complete\n              formControlName="transporter"\n              [source]="transporterName.bind(this)"\n              list-formatter="transport_name" />  -->\n            </div>\n\n            <div class="form-group">\n              <label class=" label">Mobile No</label> \n              <input name="mobile" type="text" formControlName="mobile" class="form-control" />\n            </div>\n\n            <div class="error-msg" *ngIf="submitted || (r.controls.mobile.invalid && (r.controls.mobile.dirty || r.controls.mobile.touched))">\n              <div *ngIf="r.controls[\'mobile\'].hasError(\'minlength\')">\n                <label>Minimum length is upto 10 letters.</label>\n              </div>\n              <div *ngIf="r.controls[\'mobile\'].hasError(\'maxlength\')">\n                <label>Maximum length is upto 10 letters.</label>\n              </div>\n            </div>\n\n            <div class="form-group">\n              <label class=" label">Salary</label> \n              <input name="salary" type="number" formControlName="salary" class="form-control" />\n            </div>\n            \n          <div class="width-full" style="position: relative;" padding>\n            <button class="btn-size" ion-button color="secondary" (click)="addToEmp()"><ion-icon name="add"></ion-icon></button>\n            <button class="btn-size" ion-button color="danger" (click)="removeToEmp(i)"><ion-icon name="close"></ion-icon></button>\n          </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n      <div class="form-group ma-top-24">\n        <label class=" label">Vehicle Preferred</label> \n        <input name="vehicle_preferred" type="text" formControlName="vehicle_preferred" class="form-control" />\n      </div>\n\n      <br>\n      <div class="width-full">\n      <button ion-button class="pre-button" (click)="nextRoute()" type="button" expand="block">Previous</button>\n      <button ion-button class="next-button" (click)="nextPayment()" type="button" expand="block">Next</button>\n </div>\n    </div>\n      \n  \n    <!-- ---------------- paymentHistoryForm ----------------  -->\n    <div *ngIf="paymentFlag">\n<div class="width-full">\n      <label class="fonts-size">Payment History</label>\n</div>\n      <div class="form-group">\n        <label class=" label">Agency name</label> \n        <input class="form-control"\n          ng2-auto-complete\n          formControlName="agency_name"\n          [source] = "agencyName.bind(this)"\n          list-formatter="agency_name"/>\n      </div>\n      <div class="width-full">\n      <div formArrayName="payment_history">            \n        <div *ngFor="let r of editForm.get(\'payment_history\').controls; let i = index;">\n          <div [formGroupName]="i">\n            <div class="form-group">\n              <label class=" label">Payment Date</label>\n              <ion-item class="form-control">\n                <ion-datetime name="payment_date" displayFormat="DD-MM-YYYY" pickerFormat="DD-MM-YYYY" min="1990" max="2050-10-31" formControlName="payment_date"></ion-datetime>\n              </ion-item> \n            </div> \n\n            <div class="form-group">\n              <label class=" label">Type</label> \n              <select class="form-control drop-down" name="text" formControlName="type" >\n                <option value="">Select Type</option>\n                <option *ngFor="let t of types" [ngValue]="t">{{t}}</option>\n              </select>\n              <!-- <input name="type" type="text" formControlName="type" class="form-control" /> -->\n            </div>\n  \n            <div class="form-group">\n              <label class=" label">Amount</label> \n              <input name="amount" type="number" formControlName="amount" class="form-control" />\n            </div>\n<div class="width-full" style="position:relative;" padding>\n            <button class="btn-size" ion-button color="secondary" (click)="addToPay()"><ion-icon name="add"></ion-icon></button>\n            <button class="btn-size" ion-button color="danger" (click)="removeToPay(i)"><ion-icon name="close"></ion-icon></button>\n          </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n      \n\n      <div class="form-group ma-top-24">\n        <label class=" label">Renewal Date</label>\n        <ion-item class="form-control">\n          <ion-datetime name="renewal_date" displayFormat="DD-MM-YYYY" pickerFormat="DD-MM-YYYY" min="1990" max="2050-10-31" formControlName="renewal_date"></ion-datetime>\n        </ion-item> \n      </div>\n      \n      <br>\n      <div class="width-full">\n      <button ion-button class="pre-button" (click)="nextEmployee()" type="button" expand="block">Previous</button>\n      <button ion-button block size="large" type="button" (click)="update(editForm.valid, editForm.value)" expand="block"><ion-icon name="checkmark-circle"></ion-icon>&nbsp;&nbsp;Update Driver </button>\n </div>\n      <!-- <button ion-button class="next-button" (click)="nextPayment()" type="button" expand="block">Next</button> -->\n\n      \n    </div>\n\n  </form>\n  \n</ion-content>\n'/*ion-inline-end:"D:\truck\src\pages\edit-driver-details\edit-driver-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_10__providers_truck__["a" /* Trucks */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__providers_admin_privilege_admin_privilege__["a" /* AdminPrivilegeProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loader__["a" /* LoaderProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_event_service__["a" /* EventsService */],
            __WEBPACK_IMPORTED_MODULE_8__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], EditDriverDetailsPage);
    return EditDriverDetailsPage;
}());

//# sourceMappingURL=edit-driver-details.js.map

/***/ })

});
//# sourceMappingURL=3.js.map