webpackJsonp([5],{

/***/ 1035:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCompanyDetailsPageModule", function() { return EditCompanyDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_company_details__ = __webpack_require__(1042);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_auto_complete__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_auto_complete__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var EditCompanyDetailsPageModule = /** @class */ (function () {
    function EditCompanyDetailsPageModule() {
    }
    EditCompanyDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_company_details__["a" /* EditCompanyDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_company_details__["a" /* EditCompanyDetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_auto_complete__["Ng2AutoCompleteModule"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4_ng2_auto_complete__["Ng2AutoCompleteModule"]
            ]
        })
    ], EditCompanyDetailsPageModule);
    return EditCompanyDetailsPageModule;
}());

//# sourceMappingURL=edit-company-details.module.js.map

/***/ }),

/***/ 1042:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCompanyDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_admin_privilege_admin_privilege__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loader__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_event_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_truck__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__agm_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__helpers_common__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











/**
 * Generated class for the EditCompanyDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditCompanyDetailsPage = /** @class */ (function () {
    function EditCompanyDetailsPage(navCtrl, navParams, fb, admin, actionSheetController, modalCtrl, loader, toast, events, trucks, mapsAPILoader, ngZone) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.admin = admin;
        this.actionSheetController = actionSheetController;
        this.modalCtrl = modalCtrl;
        this.loader = loader;
        this.toast = toast;
        this.events = events;
        this.trucks = trucks;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.companyFlag = true;
        // bankFlag = false;
        this.addressFlag = false;
        this.locationFlag = false;
        // routeFlag = false;
        this.requirementFlag = false;
        this.obj = {
            owner_name: '',
            omobile_no_1: '',
            omobile_no_2: '',
            website: '',
            contact_person: '',
            gstin_no: '',
            location: '',
            mobile_no_1: '',
            mobile_no_2: '',
            company_name: '',
            company_requirement: [],
            address: [],
            materials: [],
            truck_types: [],
            capacity: [],
            // location_allotment: [],
            location_restriction: [],
            latitude: [],
            longitude: []
        };
        this.submitted = false;
        this.materialsList = [];
        this.truckTypesList = [];
        this.truckCapacityList = [];
        this.materials = [];
        this.truckTypes = [];
        this.truckCapacity = [];
        this.mainMaterials = [];
        this.mainTruckType = [];
        this.mainCapacity = [];
        this.list = this.navParams.get('data');
        this.getCapacity();
        this.getMaterials();
        var getLat = this.list.latitude;
        var getLng = this.list.longitude;
        localStorage.setItem('latlng', JSON.stringify({
            lat: getLat,
            lng: getLng
        }));
        this.editForm = this.fb.group({
            owner_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(25)])],
            omobile_no_1: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(10)])],
            omobile_no_2: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(10)])],
            website: [''],
            company_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(25)])],
            location: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(25)])],
            gstin_no: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(15), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(15)])],
            contact_person: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(25)])],
            mobile_no_1: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(10)])],
            mobile_no_2: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(10)])],
            company_requirement: [''],
            address: this.fb.array([this.createAddressObj(this.list.address[0])]),
            materials: [''],
            destinations: [''],
            truck_types: [''],
            capacity: [''],
            // location_allotment: [''],
            location_restriction: [''],
            latitude: [''],
            longitude: [''],
        });
        if (this.list) {
            this.editForm.controls['owner_name'].setValue(this.list.owner_name);
            this.editForm.controls['omobile_no_1'].setValue(this.list.omobile_no_1);
            this.editForm.controls['omobile_no_2'].setValue(this.list.omobile_no_2);
            this.editForm.controls['website'].setValue(this.list.website);
            this.editForm.controls['company_name'].setValue(this.list.company_name);
            this.editForm.controls['location'].setValue(this.list.location);
            this.editForm.controls['gstin_no'].setValue(this.list.gstin_no);
            this.editForm.controls['contact_person'].setValue(this.list.contact_person);
            this.editForm.controls['mobile_no_1'].setValue(this.list.mobile_no_1);
            this.editForm.controls['mobile_no_2'].setValue(this.list.mobile_no_2);
            // this.editForm.controls['location_allotment'].setValue(this.list.location_allotment);
            this.editForm.controls['location_restriction'].setValue(this.list.location_restriction);
            this.editForm.controls['latitude'].setValue(this.list.latitude);
            this.editForm.controls['longitude'].setValue(this.list.longitude);
            this.list.company_requirement.forEach(function (element) {
                _this.obj.company_requirement.push(element);
            });
        }
    }
    EditCompanyDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditCompanyDetailsPage');
    };
    EditCompanyDetailsPage.prototype.Home = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */]);
    };
    EditCompanyDetailsPage.prototype.getLocation = function (e) {
        e.preventDefault();
        this.events.broadcast('location');
    };
    EditCompanyDetailsPage.prototype.createAddressObj = function (add) {
        return this.fb.group({
            address_line_1: [add.address_line_1, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, , __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2)])],
            address_line_2: [add.address_line_2, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, , __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2)])],
            city: [add.city, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, , __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2)])],
            state: [add.state, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, , __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2)])],
            pincode: [add.pincode, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(6)])]
        });
    };
    Object.defineProperty(EditCompanyDetailsPage.prototype, "addressForm", {
        // Get controls for address form array
        get: function () {
            return this.editForm.get('address')['controls'][0].controls;
        },
        enumerable: true,
        configurable: true
    });
    // Google map address
    EditCompanyDetailsPage.prototype.addressData = function (e) {
        this.addressForm['address_line_1'].setValue(e.address_line1);
        this.addressForm['address_line_2'].setValue(e.address_line2);
        this.addressForm['city'].setValue(e.city);
        this.addressForm['state'].setValue(e.state);
        this.addressForm['pincode'].setValue(e.pincode);
        this.obj.address = [];
        var obj = {
            address_line_1: e.address_line1,
            address_line_2: e.address_line2,
            city: e.city,
            state: e.state,
            pincode: e.pincode,
            address_location: {
                type: "Point",
                coordinates: []
            }
        };
        this.obj.address.push(obj);
        this.obj.address[0].address_location.coordinates = [];
        this.obj.address[0].address_location.coordinates.push(e.lng);
        this.obj.address[0].address_location.coordinates.push(e.lat);
    };
    EditCompanyDetailsPage.prototype.update = function (isValid, value) {
        var _this = this;
        this.submitted = true;
        if (isValid) {
            this.obj.owner_name = value.owner_name;
            this.obj.omobile_no_1 = value.omobile_no_1;
            this.obj.omobile_no_2 = value.omobile_no_2;
            this.obj.website = value.website;
            this.obj.contact_person = value.contact_person;
            this.obj.gstin_no = value.gstin_no;
            this.obj.location = value.location;
            this.obj.mobile_no_1 = value.mobile_no_1;
            this.obj.mobile_no_2 = value.mobile_no_2;
            this.obj.company_name = value.company_name;
            this.obj.address = value.address;
            this.obj.materials = this.mainMaterials;
            this.obj.truck_types = this.mainTruckType;
            this.obj.capacity = this.mainCapacity;
            // this.obj.location_allotment = value.location_allotment;
            this.obj.location_restriction = value.location_restriction;
            this.obj.latitude = value.latitude;
            this.obj.longitude = value.longitude;
            console.log(">>>FormVal2", this.obj);
            this.loader.show();
            this.admin.updateCompanyList(this.list._id, this.obj).subscribe(function (res) {
                _this.loader.hide();
                _this.toast.show({ 'message': 'Updated successfully.' });
                _this.navCtrl.setRoot('ManageCompanyListPage');
                console.log(">>>>>res", res);
            }, function (err) {
                _this.loader.hide();
                _this.toast.error({ 'message': 'Something went wrong.' });
                console.log(">>>>>err", err);
            });
        }
    };
    EditCompanyDetailsPage.prototype.presentActionSheet = function (companyData, idx) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var actionSheet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            title: 'Actions',
                            buttons: [{
                                    text: 'Edit company requirements',
                                    icon: 'create',
                                    handler: function () {
                                        _this.openRequirementModal(companyData, idx);
                                    }
                                }, {
                                    text: 'Delete this requirements',
                                    icon: 'trash',
                                    handler: function () {
                                        _this.deleteRequirement(idx);
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditCompanyDetailsPage.prototype.deleteRequirement = function (idx) {
        var conf = confirm('Are you sure you want to delete this requirements ?');
        if (conf) {
            this.loader.show();
            this.obj.company_requirement.splice(idx, 1);
            this.toast.show({ 'message': 'Deleted successfully.' });
            this.loader.hide();
        }
    };
    // add requirements modal
    EditCompanyDetailsPage.prototype.addRequirementModal = function (e) {
        var _this = this;
        e.preventDefault();
        var modal = this.modalCtrl.create('EditCompanyRequirementsPage', { type: 'add' });
        modal.onDidDismiss(function (data) {
            console.log(data);
            if (data) {
                _this.obj.company_requirement.push(data.requirementFormData);
            }
        });
        modal.present();
    };
    EditCompanyDetailsPage.prototype.openRequirementModal = function (companyData, idx) {
        var _this = this;
        var modal = this.modalCtrl.create('EditCompanyRequirementsPage', { data: companyData, index: idx, companyListData: this.list, type: 'edit' });
        modal.onDidDismiss(function (data) {
            console.log(data);
            if (data) {
                _this.listData = data.listData;
                _this.requirementFormData = data.requirementFormData;
                _this.idx = data.index;
                _this.obj.company_requirement[idx].material = _this.requirementFormData.material;
                _this.obj.company_requirement[idx].to_destination = _this.requirementFormData.to_destination;
                _this.obj.company_requirement[idx].vehicle_capacity = _this.requirementFormData.vehicle_capacity;
                _this.obj.company_requirement[idx].vehicle_type = _this.requirementFormData.vehicle_type;
            }
        });
        modal.present();
    };
    EditCompanyDetailsPage.prototype.getCapacity = function () {
        var _this = this;
        this.trucks.getCapacityOfTruck().subscribe(function (res) {
            var data = res.json();
            data.results.forEach(function (r) {
                r.capacity.forEach(function (r) {
                    _this.truckCapacity.push(r.ton);
                });
                _this.truckTypes.push(r.type);
            });
            var newTruckCapacity = Array.from(new Set(_this.truckCapacity));
            console.log('truckTypes >>>>>>> ', _this.truckTypes);
            console.log('Capacity >>>>>>> ', newTruckCapacity.sort(function (a, b) { return a - b; }));
            _this.truckCapacity = [];
            _this.truckCapacity = newTruckCapacity.sort(function (a, b) { return a - b; });
            _this.truckCapacity.forEach(function (element) {
                var flag = false;
                _this.list.capacity.forEach(function (r) {
                    if (element == r) {
                        flag = true;
                        _this.mainCapacity.push(element);
                    }
                });
                var obj = { "name": element, "flag": flag };
                _this.truckCapacityList.push(obj);
            });
            console.log('mainCapacity >>>>>>> ', _this.mainCapacity);
            console.log('truckCapacityList >>>>>>> ', _this.truckCapacityList);
            _this.truckTypes.forEach(function (element) {
                var flag = false;
                _this.list.truck_types.forEach(function (r) {
                    if (element == r) {
                        flag = true;
                        _this.mainTruckType.push(element);
                    }
                });
                var obj = { "name": element, "flag": flag };
                _this.truckTypesList.push(obj);
            });
            console.log('mainTruckType >>>>>>> ', _this.mainTruckType);
            console.log('truckTypesList >>>>>>> ', _this.truckTypesList);
        }, function (err) {
            console.log(">>>error", err);
        });
    };
    EditCompanyDetailsPage.prototype.getMaterials = function () {
        var _this = this;
        this.trucks.getMaterials().subscribe(function (res) {
            var data = res.json();
            data.results.forEach(function (r) {
                _this.materials.push(r.name);
            });
            console.log('Materials data >>>>>>> ', _this.materials);
            _this.materials.forEach(function (element) {
                var flag = false;
                _this.list.materials.forEach(function (r) {
                    if (element == r) {
                        flag = true;
                        _this.mainMaterials.push(element);
                    }
                });
                var obj = { "name": element, "flag": flag };
                _this.materialsList.push(obj);
            });
            console.log("this.list >>", _this.materialsList);
        }, function (err) {
            console.log(">>>error", err);
        });
    };
    EditCompanyDetailsPage.prototype.addMaterials = function (e, m, ind) {
        var _this = this;
        if (e.target.checked) {
            this.mainMaterials.push(m);
            this.materialsList[ind].flag = true;
        }
        else {
            var i = 0;
            this.mainMaterials.forEach(function (element) {
                if (element == m) {
                    console.log(" IN    >>>>", i);
                    _this.mainMaterials.splice(i, 1);
                }
                i = i + 1;
            });
            console.log("this.mainMaterials >>>>", this.mainMaterials);
        }
    };
    EditCompanyDetailsPage.prototype.addTruckType = function (e, tt, ind) {
        var _this = this;
        if (e.target.checked) {
            this.mainTruckType.push(tt);
            this.truckTypesList[ind].flag = true;
        }
        else {
            var i = 0;
            this.mainTruckType.forEach(function (element) {
                if (element == tt) {
                    console.log(" IN    >>>>", i);
                    _this.mainTruckType.splice(i, 1);
                }
                i = i + 1;
            });
            console.log("this.mainTruckType >>>>", this.mainTruckType);
        }
    };
    EditCompanyDetailsPage.prototype.addCapacity = function (e, c, ind) {
        var _this = this;
        if (e.target.checked) {
            this.mainCapacity.push(c);
            this.truckCapacityList[ind].flag = true;
        }
        else {
            var i = 0;
            this.mainCapacity.forEach(function (element) {
                if (element == c) {
                    console.log(" IN    >>>>", i);
                    _this.mainCapacity.splice(i, 1);
                }
                i = i + 1;
            });
            console.log("this.mainCapacity >>>>", this.mainCapacity);
        }
    };
    EditCompanyDetailsPage.prototype.preCompany = function () {
        this.companyFlag = true;
        this.addressFlag = false;
        this.locationFlag = false;
        this.requirementFlag = false;
    };
    EditCompanyDetailsPage.prototype.nextAddress = function () {
        var _this = this;
        this.companyFlag = false;
        this.addressFlag = true;
        this.locationFlag = false;
        this.requirementFlag = false;
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
                        var components = __WEBPACK_IMPORTED_MODULE_10__helpers_common__["a" /* CommonHelper */].extract_components(place);
                        var pre_city = __WEBPACK_IMPORTED_MODULE_10__helpers_common__["a" /* CommonHelper */].get_sublocality(components);
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
                        var components = __WEBPACK_IMPORTED_MODULE_10__helpers_common__["a" /* CommonHelper */].extract_components(place);
                        document.getElementById('State').value = components.administrative_area_level_1;
                        var addr = _this.editForm.get('address');
                        var first = addr.at(0);
                        first.get('state').setValue(components.administrative_area_level_1);
                    });
                });
            });
        }, 2000);
    };
    EditCompanyDetailsPage.prototype.nextLocation = function () {
        var _this = this;
        this.companyFlag = false;
        this.addressFlag = false;
        this.locationFlag = true;
        this.requirementFlag = false;
        setTimeout(function () {
            _this.mapsAPILoader.load().then(function () {
                // set default location
                // localStorage.setItem('latlng', JSON.stringify({
                //   lat: getLat,
                //   lng: getLng
                // }));
                // this.events.broadcast('location');
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
                        _this.editForm.controls['latitude'].setValue(lat);
                        _this.editForm.controls['longitude'].setValue(lng);
                        var components = __WEBPACK_IMPORTED_MODULE_10__helpers_common__["a" /* CommonHelper */].extract_components(place);
                        var pre_city = __WEBPACK_IMPORTED_MODULE_10__helpers_common__["a" /* CommonHelper */].get_sublocality(components);
                        console.log(components, pre_city);
                        document.getElementById('Location').value = pre_city;
                        _this.editForm.controls['location'].setValue(pre_city);
                    });
                });
            });
        }, 4000);
    };
    EditCompanyDetailsPage.prototype.nextReq = function () {
        this.companyFlag = false;
        this.addressFlag = false;
        this.locationFlag = false;
        this.requirementFlag = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search2"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], EditCompanyDetailsPage.prototype, "searchElementRefCity", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search3"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], EditCompanyDetailsPage.prototype, "searchElementRefState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], EditCompanyDetailsPage.prototype, "searchElementRef", void 0);
    EditCompanyDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-company-details',template:/*ion-inline-start:"D:\truck\src\pages\edit-company-details\edit-company-details.html"*/'<!--\n  Generated template for the EditCompanyDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-toolbar>\n      <ion-title>Edit Company Details</ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="Home()" >\n            <ion-icon name="home" ></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <form [formGroup]="editForm" (ngSubmit)="update(editForm.valid, editForm.value)" novalidate>\n\n    <!------------ Company Flag  ---------->\n    <div *ngIf="companyFlag">\n      <div class="width-full">\n      <label class="fonts-size">Company Details </label>\n      </div><br>\n      <div class="form-group">\n        <label class=" label">Company name <span style="color:red">*</span></label> \n        <input formControlName="company_name" type="text" class="form-control" /> \n      </div>\n      <div class="error-msg" *ngIf="submitted || (editForm.controls.company_name.invalid && (editForm.controls.company_name.dirty || editForm.controls.company_name.touched))">\n        <div *ngIf="editForm.controls[\'company_name\'].hasError(\'required\')">\n          <label>Company name is required.</label>\n        </div>\n        <div *ngIf="editForm.controls[\'company_name\'].hasError(\'minlength\')">\n          <label>Minimum length is upto 2 letters.</label>\n        </div>\n        <div *ngIf="editForm.controls[\'company_name\'].hasError(\'maxlength\')">\n          <label>Maximum length is upto 25 letters.</label>\n        </div>\n      </div>\n\n      <!-- <div class="form-group">\n        <label class=" label">Location <span style="color:red">*</span> </label> \n        <input formControlName="location" type="text" class="form-control" /> \n      </div>\n      <div class="error-msg" *ngIf="submitted || (editForm.controls.location.invalid && (editForm.controls.location.dirty || editForm.controls.location.touched))">\n        <div *ngIf="editForm.controls[\'location\'].hasError(\'required\')">\n          <label>Location is required.</label>\n        </div>\n        <div *ngIf="editForm.controls[\'location\'].hasError(\'minlength\')">\n          <label>Minimum length is upto 2 letters.</label>\n        </div>\n        <div *ngIf="editForm.controls[\'location\'].hasError(\'maxlength\')">\n          <label>Maximum length is upto 25 letters.</label>\n        </div>\n      </div> -->\n      \n      <div class="form-group">\n        <label class=" label">Gst no </label> \n        <input formControlName="gstin_no" type="text" class="form-control" /> \n      </div>\n      <div class="error-msg" *ngIf="submitted || (editForm.controls.gstin_no.invalid && (editForm.controls.gstin_no.dirty || editForm.controls.gstin_no.touched))">\n        <!-- <div *ngIf="editForm.controls[\'gstin_no\'].hasError(\'required\')">\n          <label>Gst number is required.</label>\n        </div> -->\n        <div *ngIf="editForm.controls[\'gstin_no\'].hasError(\'minlength\')">\n          <label>Minimum length is upto 15 letters.</label>\n        </div>\n        <div *ngIf="editForm.controls[\'gstin_no\'].hasError(\'maxlength\')">\n          <label>Maximum length is upto 15 letters.</label>\n        </div>\n      </div>\n\n\n\n      <!-- ----------------  New  --------------- -->\n\n\n\n\n      <div class="form-group">\n          <label class=" label">Owner Name<span style="color:red">*</span> </label> \n          <input formControlName="owner_name" type="text" class="form-control" /> \n        </div>\n        <div class="error-msg" *ngIf="submitted || (editForm.controls.owner_name.invalid && (editForm.controls.owner_name.dirty || editForm.controls.owner_name.touched))">\n          <div *ngIf="editForm.controls[\'owner_name\'].hasError(\'required\')">\n            <label>Owner Name is required.</label>\n          </div>\n          <div *ngIf="editForm.controls[\'owner_name\'].hasError(\'minlength\')">\n            <label>Minimum length is upto 2 letters.</label>\n          </div>\n          <div *ngIf="editForm.controls[\'owner_name\'].hasError(\'maxlength\')">\n            <label>Maximum length is upto 25 letters.</label>\n          </div>\n        </div>\n        \n        <div class="form-group">\n          <label class=" label">Mobile no 1 <span style="color:red">*</span> </label> \n          <input formControlName="omobile_no_1" type="text" OnlyNumber="true" class="form-control" /> \n        </div>\n        <div class="error-msg" *ngIf="submitted || (editForm.controls.omobile_no_1.invalid && (editForm.controls.omobile_no_1.dirty || editForm.controls.omobile_no_1.touched))">\n          <div *ngIf="editForm.controls[\'omobile_no_1\'].hasError(\'required\')">\n            <label>Mobile number is required.</label>\n          </div>\n          <div *ngIf="editForm.controls[\'omobile_no_1\'].hasError(\'minlength\')">\n            <label>Minimum length is upto 10 letters.</label>\n          </div>\n          <div *ngIf="editForm.controls[\'omobile_no_1\'].hasError(\'maxlength\')">\n            <label>Maximum length is upto 10 letters.</label>\n          </div>\n        </div>\n    \n        \n        <div class="form-group">\n          <label class=" label">Mobile no 2 </label> \n          <input formControlName="omobile_no_2" type="text" OnlyNumber="true" class="form-control" /> \n        </div>\n        <div class="error-msg" *ngIf="submitted || (editForm.controls.omobile_no_2.invalid && (editForm.controls.omobile_no_2.dirty || editForm.controls.omobile_no_2.touched))">\n          <div *ngIf="editForm.controls[\'omobile_no_2\'].hasError(\'minlength\')">\n            <label>Minimum length is upto 10 letters.</label>\n          </div>\n          <div *ngIf="editForm.controls[\'omobile_no_2\'].hasError(\'maxlength\')">\n            <label>Maximum length is upto 10 letters.</label>\n          </div>\n        </div>\n\n      <!-- -------------------------------------- -->\n      \n      <div class="form-group">\n        <label class=" label">Contact person <span style="color:red">*</span> </label> \n        <input formControlName="contact_person" type="text" class="form-control" /> \n      </div>\n      <div class="error-msg" *ngIf="submitted || (editForm.controls.contact_person.invalid && (editForm.controls.contact_person.dirty || editForm.controls.contact_person.touched))">\n        <div *ngIf="editForm.controls[\'contact_person\'].hasError(\'required\')">\n          <label>Contact person name is required.</label>\n        </div>\n        <div *ngIf="editForm.controls[\'contact_person\'].hasError(\'minlength\')">\n          <label>Minimum length is upto 2 letters.</label>\n        </div>\n        <div *ngIf="editForm.controls[\'contact_person\'].hasError(\'maxlength\')">\n          <label>Maximum length is upto 25 letters.</label>\n        </div>\n      </div>\n      \n      <div class="form-group">\n        <label class=" label">Mobile no 1 <span style="color:red">*</span> </label> \n        <input formControlName="mobile_no_1" type="text" OnlyNumber="true" class="form-control" /> \n      </div>\n      <div class="error-msg" *ngIf="submitted || (editForm.controls.mobile_no_1.invalid && (editForm.controls.mobile_no_1.dirty || editForm.controls.mobile_no_1.touched))">\n        <div *ngIf="editForm.controls[\'mobile_no_1\'].hasError(\'required\')">\n          <label>Mobile number is required.</label>\n        </div>\n        <div *ngIf="editForm.controls[\'mobile_no_1\'].hasError(\'minlength\')">\n          <label>Minimum length is upto 10 letters.</label>\n        </div>\n        <div *ngIf="editForm.controls[\'mobile_no_1\'].hasError(\'maxlength\')">\n          <label>Maximum length is upto 10 letters.</label>\n        </div>\n      </div>\n\n      \n      <div class="form-group">\n        <label class=" label">Mobile no 2 </label> \n        <input formControlName="mobile_no_2" type="text" OnlyNumber="true" class="form-control" /> \n      </div>\n      <div class="error-msg" *ngIf="submitted || (editForm.controls.mobile_no_2.invalid && (editForm.controls.mobile_no_2.dirty || editForm.controls.mobile_no_2.touched))">\n        <div *ngIf="editForm.controls[\'mobile_no_2\'].hasError(\'minlength\')">\n          <label>Minimum length is upto 10 letters.</label>\n        </div>\n        <div *ngIf="editForm.controls[\'mobile_no_2\'].hasError(\'maxlength\')">\n          <label>Maximum length is upto 10 letters.</label>\n        </div>\n      </div>\n\n    \n      <br>\n      <div class="width-full">\n      <button ion-button class="next-button" (click)="nextAddress()" type="button" expand="block">Next</button>\n      </div>\n    </div>\n \n    <!------------ Address Flag  ---------->\n    <div *ngIf="addressFlag">\n      <div class="width-full">\n      <label class="fonts-size">Address Information </label>\n      </div><br>\n      <div formArrayName="address" *ngFor="let item of editForm.get(\'address\').controls; let i = index;">\n          <div [formGroupName]="i">\n            <div class="form-group">\n              <label class=" label">Address line 1 <span style="color:red">*</span></label>\n              <input type="text" formControlName="address_line_1" class="form-control">            \n            </div>\n            <div class="error-msg" *ngIf="submitted || (item.controls.address_line_1.invalid && (item.controls.address_line_1.dirty || item.controls.address_line_1.touched))">\n              <div *ngIf="item.controls[\'address_line_1\'].hasError(\'required\')">\n                <label>Address line 1 is required.</label>\n              </div>\n              <div *ngIf="item.controls[\'address_line_1\'].hasError(\'minlength\')">\n                <label>Minimum length is upto 2 letters.</label>\n              </div>\n            </div>\n    \n            <div class="form-group">\n              <label class=" label">Address line 2 <span style="color:red">*</span></label>\n              <input type="text" formControlName="address_line_2" class="form-control">            \n            </div>\n            <div class="error-msg" *ngIf="submitted || (item.controls.address_line_2.invalid && (item.controls.address_line_2.dirty || item.controls.address_line_2.touched))">\n              <div *ngIf="item.controls[\'address_line_2\'].hasError(\'required\')">\n                <label>Address line 2 is required.</label>\n              </div>\n              <div *ngIf="item.controls[\'address_line_2\'].hasError(\'minlength\')">\n                <label>Minimum length is upto 2 letters.</label>\n              </div>\n            </div>\n          \n            <div class="form-group">\n              <label class=" label">City <span style="color:red">*</span></label>\n              <input id="City" type="text" placeholder="Search City" formControlName="city" class="form-control" #search2>             \n            </div>\n            <div class="error-msg" *ngIf="submitted || (item.controls.city.invalid && (item.controls.city.dirty || item.controls.city.touched))">\n              <div *ngIf="item.controls[\'city\'].hasError(\'required\')">\n                <label>City is required.</label>\n              </div>\n              <div *ngIf="item.controls[\'city\'].hasError(\'minlength\')">\n                <label>Minimum length is upto 2 letters.</label>\n              </div>\n            </div>\n          \n            <div class="form-group">\n              <label class=" label">State <span style="color:red">*</span></label>\n              <input id="State" type="text" placeholder="Search State"  formControlName="state" class="form-control" #search3>\n            </div>\n            <div class="error-msg" *ngIf="submitted || (item.controls.state.invalid && (item.controls.state.dirty || item.controls.state.touched))">\n              <div *ngIf="item.controls[\'state\'].hasError(\'required\')">\n                <label>State is required.</label>\n              </div>\n              <div *ngIf="item.controls[\'state\'].hasError(\'minlength\')">\n                <label>Minimum length is upto 2 letters.</label>\n              </div>\n            </div>\n          \n            <div class="form-group">\n              <label class=" label">Pincode <span style="color:red">*</span></label>\n              <input type="text" OnlyNumber="true" formControlName="pincode" class="form-control">            \n            </div>\n            <div class="error-msg" *ngIf="submitted || (item.controls.pincode.invalid && (item.controls.pincode.dirty || item.controls.pincode.touched))">\n              <div *ngIf="item.controls[\'pincode\'].hasError(\'required\')">\n                <label>Pincode is required.</label>\n              </div>\n              <div *ngIf="item.controls[\'pincode\'].hasError(\'minlength\')">\n                <label>Minimum length is upto 6 letters.</label>\n              </div>\n              <div *ngIf="item.controls[\'pincode\'].hasError(\'maxlength\')">\n                <label>Maximum length is upto 6 letters.</label>\n              </div>\n            </div>\n    \n          </div>\n      </div>\n\n      <br>\n      <div class="width-full">\n      <button ion-button class="pre-button" (click)="preCompany()" type="button" expand="block">Previous</button>\n      <button ion-button class="next-button" (click)="nextLocation()" type="button" expand="block">Next</button>\n    </div>\n    </div>\n    \n    <!------------ Location Flag  ---------->\n    <div *ngIf="locationFlag">\n      <div class="width-full">\n      <label class="fonts-size">Location Allotment </label>\n      </div>\n      <div class="form-group">\n        <input name="location" id="Location" type="text" placeholder="Search Location" formControlName="location" class="form-control" #search>\n      </div>\n      <div class="error-msg" *ngIf="submitted || (editForm.controls.location.invalid && (editForm.controls.location.dirty || editForm.controls.location.touched))">\n        <div *ngIf="editForm.controls[\'location\'].hasError(\'required\')">\n          <label>Location is required.</label>\n        </div>\n        <div *ngIf="editForm.controls[\'location\'].hasError(\'minlength\')">\n          <label>Minimum length is upto 2 letters.</label>\n        </div>\n        <div *ngIf="editForm.controls[\'location\'].hasError(\'maxlength\')">\n          <label>Maximum length is upto 25 letters.</label>\n        </div>\n      </div>\n      <div class="width-full">\n      <ion-row right>  \n        <ion-col text-right>   \n          <button ion-button (click)="getLocation($event)"><ion-icon name="locate"></ion-icon></button>\n        </ion-col> \n      </ion-row>\n\n      <google-maps (googleAddressForUpdate)="addressData($event)"></google-maps>\n      <br>\n    </div>\n      <div class="form-group">\n        <label class=" label">Location Restriction (meters)</label>\n        <input name="location_restriction" type="number" placeholder="" formControlName="location_restriction" class="form-control"> \n      </div>\n      <div class="form-group">\n        <label class=" label">Latitude </label>\n        <input name="latitude" type="text" autocomplete="off" placeholder="" formControlName="latitude" class="form-control"> \n      </div>\n      <div class="form-group">\n        <label class=" label">Longitude </label>\n        <input name="longitude" type="text" autocomplete="off" placeholder="" formControlName="longitude" class="form-control"> \n      </div>\n\n      <div class="form-group">\n        <label class=" label">Website </label> \n        <input formControlName="website" type="text" OnlyNumber="true" class="form-control" /> \n      </div>\n\n      <!-- <div *ngIf="obj.company_requirement.length > 0">\n        <div *ngFor="let req of obj.company_requirement; let i = index">\n          <ion-item-divider></ion-item-divider>\n          <div *ngIf="req" class="mg-top-10">\n            <br>\n            <label class="fonts-size">Company requirements {{i + 1}}</label>\n            <br>\n            <ion-icon name="more" class="more fright" (click)="presentActionSheet(req, i)"></ion-icon>\n            <p>Material : {{ req.material ? req.material : \'\' }}</p>\n            <p>Destination : {{ req.to_destination ? req.to_destination : \'\' }}</p>\n            <p>Vehicle capacity : {{ req.vehicle_capacity ? req.vehicle_capacity : \'\' }}</p>\n            <p>Vehicle type : {{ req.vehicle_type ? req.vehicle_type : \'\' }}</p>\n          </div>\n        </div>      \n      </div>\n      \n      <ion-row center>  \n        <ion-col text-center>   \n          <button ion-button (click)="addRequirementModal($event)"><ion-icon name="add"></ion-icon>&nbsp;&nbsp;Add more requirements</button>  \n        </ion-col> \n      </ion-row> -->\n\n      <br>\n      <div class="width-full" padding>\n        <button ion-button class="pre-button-n" (click)="nextAddress()" type="button" expand="block">Previous</button>\n        <button ion-button class="next-button" (click)="nextReq()" type="button" expand="block">Next</button>\n      </div>\n    </div>\n    \n\n     <!------------ Requirements Flag  ---------->\n     <div *ngIf="requirementFlag">\n       <div class="width-full">\n      <label class="fonts-size">Add Requirements </label>\n      </div><br>\n      <div class="form-group">\n        <label class=" label"><b>Select Materials</b></label>\n        <br>\n        <div *ngFor="let m of materialsList; let i = index;" padding>\n          <div *ngIf="m.flag">\n            <input type="checkbox" checked="{{m.flag}}" value="m.name" (change)="addMaterials($event, m.name, i)"> &nbsp;{{ m.name }}\n          </div>\n          <div *ngIf="!m.flag">\n            <input type="checkbox"  value="m.name" (change)="addMaterials($event, m.name, i)"> &nbsp;{{ m.name }}\n          </div>\n        </div> \n      </div>\n\n      <div class="form-group">\n        <label class=" label"><b>Truck Types</b></label>\n        <br>\n        <div *ngFor="let tt of truckTypesList; let j = index;" padding>\n          <div *ngIf="tt.flag">\n            <input type="checkbox" checked="{{tt.flag}}" value="tt.name" (change)="addTruckType($event, tt.name, j)"> &nbsp;{{ tt.name }}\n          </div>\n\n          <div *ngIf="!tt.flag">\n            <input type="checkbox"  value="tt.name" (change)="addTruckType($event, tt.name, j)"> &nbsp;{{ tt.name }}    \n          </div>\n        </div> \n      </div>\n\n      <div class="form-group">\n        <label class=" label"><b>Capacity </b></label>\n        <br>\n        <div *ngFor="let c of truckCapacityList; let a = index;" padding>\n          <div *ngIf="c.flag">\n            <input type="checkbox" checked="{{c.flag}}" value="c.name" (change)="addCapacity($event, c.name, a)"> &nbsp;{{ c.name }}\n          </div>\n          <div *ngIf="!c.flag">\n            <input type="checkbox"  value="c.name" (change)="addCapacity($event, c.name, a)"> &nbsp;{{ c.name }}\n          </div>\n        </div> \n      </div>\n\n      <br>\n      <div class="width-full" padding>\n        <button ion-button class="pre-button-n" (click)="nextLocation()" type="button" expand="block">Previous</button>\n        <button ion-button block class="up-button" type="submit" expand="block"><ion-icon name="checkmark-circle"></ion-icon>&nbsp;&nbsp;Update Company</button>\n      </div>\n    </div>\n\n\n  </form>\n    \n</ion-content>\n'/*ion-inline-end:"D:\truck\src\pages\edit-company-details\edit-company-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__providers_admin_privilege_admin_privilege__["a" /* AdminPrivilegeProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loader__["a" /* LoaderProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_event_service__["a" /* EventsService */],
            __WEBPACK_IMPORTED_MODULE_7__providers_truck__["a" /* Trucks */],
            __WEBPACK_IMPORTED_MODULE_8__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], EditCompanyDetailsPage);
    return EditCompanyDetailsPage;
}());

//# sourceMappingURL=edit-company-details.js.map

/***/ })

});
//# sourceMappingURL=5.js.map