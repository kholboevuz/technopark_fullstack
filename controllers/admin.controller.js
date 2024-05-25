"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminSmsController = exports.adminPassController = exports.adminNewsController = exports.adminMediavideoController = exports.adminMediaphotoController = exports.adminManagementController = exports.adminLoginController = exports.adminInternationalController = exports.adminHomePageController = exports.adminHomeController = exports.adminEventsController = exports.adminEmployesController = exports.adminDirectionsController = exports.adminCooperationController = exports.adminCompanyController = exports.adminChoicesController = exports.adminAdminController = exports.adminAddPageChoicesController = exports.adminAddManagementPageController = exports.adminAddEventsPageController = exports.adminAddEmploysPageController = exports.adminAddDirectionsPageController = exports.adminAddAdminController = void 0;
var csurf_1 = __importDefault(require("csurf"));
var choices_models_1 = require("../models/choices.models");
var company_models_1 = require("../models/company.models");
var coomparation_models_1 = require("../models/coomparation.models");
var directions_models_1 = require("../models/directions.models");
var employes_modeles_1 = require("../models/employes.modeles");
var events_models_1 = require("../models/events.models");
var international_models_1 = require("../models/international.models");
var management_models_1 = require("../models/management.models");
var mediaphoto_models_1 = require("../models/mediaphoto.models");
var mediavideo_models_1 = require("../models/mediavideo_models");
var news_models_1 = require("../models/news.models");
var slider_models_1 = require("../models/slider.models");
var users_models_1 = require("../models/users.models");
var csrfProtection = (0, csurf_1.default)({ cookie: true });
var adminLoginController = function (req, res) {
    var error = req.query.error;
    if (error == 1) {
        res.render('admin_login', {
            title: 'Sirdaryo yoshlar texnoparki - Admin kirish',
            admin: true,
            csrfToken: req.csrfToken(),
            error: true
        });
    }
    else {
        res.render('admin_login', {
            title: 'Sirdaryo yoshlar texnoparki - Admin kirish',
            admin: true,
            csrfToken: req.csrfToken(),
            error: false
        });
    }
};
exports.adminLoginController = adminLoginController;
var adminHomeController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, directions, choices, news, employs, management, events, mediaVideo, mediaPhoto, cooparition, international, lengths, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Promise.all([
                        directions_models_1.Directions.find().exec(),
                        choices_models_1.Choices.find().exec(),
                        news_models_1.News.find().exec(),
                        employes_modeles_1.Employs.find().exec(),
                        management_models_1.Management.find().exec(),
                        events_models_1.Events.find().exec(),
                        mediavideo_models_1.MediaVideo.find().exec(),
                        mediaphoto_models_1.MediaPhoto.find().exec(),
                        coomparation_models_1.Cooparition.find().exec(),
                        international_models_1.International.find().exec()
                    ])];
            case 1:
                _a = _b.sent(), directions = _a[0], choices = _a[1], news = _a[2], employs = _a[3], management = _a[4], events = _a[5], mediaVideo = _a[6], mediaPhoto = _a[7], cooparition = _a[8], international = _a[9];
                lengths = [
                    directions.length,
                    choices.length,
                    news.length,
                    employs.length,
                    management.length,
                    events.length,
                    mediaVideo.length,
                    mediaPhoto.length,
                    cooparition.length,
                    international.length
                ];
                res.render('admin_home', {
                    title: 'Sirdaryo yoshlar texnoparki - Admin kirish',
                    admin: true,
                    isHomeActive: true,
                    lengths: lengths
                });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                console.log(error_1);
                next(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.adminHomeController = adminHomeController;
var adminSmsController = function (req, res) {
    res.render('admin_sms', {
        title: 'Sirdaryo yoshlar texnoparki - Admin kirish',
        admin: true,
        csrfToken: req.csrfToken()
    });
};
exports.adminSmsController = adminSmsController;
var adminPassController = function (req, res) {
    res.render('admin_password', {
        title: 'Sirdaryo yoshlar texnoparki - Admin kirish',
        admin: true,
        csrfToken: req.csrfToken()
    });
};
exports.adminPassController = adminPassController;
var adminAdminController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var adminData, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, users_models_1.User.find().lean()];
            case 1:
                adminData = _a.sent();
                res.render('admin_admin', {
                    title: 'Sirdaryo yoshlar texnoparki - Admin kirish',
                    admin: true,
                    isAdminActive: true,
                    adminData: adminData
                });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.log(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.adminAdminController = adminAdminController;
var adminAddAdminController = function (req, res) {
    res.render('admin_add_admin', {
        title: 'Sirdaryo yoshlar texnoparki - Admin ',
        admin: true,
        isAdminActive: true,
        csrfToken: req.csrfToken()
    });
};
exports.adminAddAdminController = adminAddAdminController;
var adminHomePageController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var sliderData, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, slider_models_1.Slider.find().sort({ createdAt: -1 }).lean()];
            case 1:
                sliderData = _a.sent();
                res.render('admin_homepage', {
                    title: 'Sirdaryo yoshlar texnoparki - Admin ',
                    admin: true,
                    isHomePageActive: true,
                    sliderData: sliderData,
                    csrfToken: req.csrfToken()
                });
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                next(error_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.adminHomePageController = adminHomePageController;
var adminNewsController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var newsData, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, news_models_1.News.find().sort({ createdAt: -1 }).lean()];
            case 1:
                newsData = _a.sent();
                res.render('admin_news', {
                    title: 'Sirdaryo yoshlar texnoparki - Admin ',
                    admin: true,
                    isNewsActive: true,
                    csrfToken: req.csrfToken(),
                    newsData: newsData
                });
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                next(error_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.adminNewsController = adminNewsController;
var adminChoicesController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var choicesData, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, choices_models_1.Choices.find().sort({ createdAt: -1 }).lean()];
            case 1:
                choicesData = _a.sent();
                res.render('admin_choices', {
                    title: 'Sirdaryo yoshlar texnoparki - Admin ',
                    admin: true,
                    isChoicesActive: true,
                    csrfToken: req.csrfToken(),
                    choicesData: choicesData
                });
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                next(error_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.adminChoicesController = adminChoicesController;
var adminManagementController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var managementData, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, management_models_1.Management.find().sort({ createdAt: -1 }).lean()];
            case 1:
                managementData = _a.sent();
                res.render('admin_management', {
                    title: 'Sirdaryo yoshlar texnoparki - Admin ',
                    admin: true,
                    isManagersActive: true,
                    csrfToken: req.csrfToken(),
                    managementData: managementData
                });
                return [3 /*break*/, 3];
            case 2:
                error_6 = _a.sent();
                next(error_6);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.adminManagementController = adminManagementController;
var adminEmployesController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var employesData, error_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, employes_modeles_1.Employs.find().sort({ createdAt: -1 }).lean()];
            case 1:
                employesData = _a.sent();
                res.render('admin_employes', {
                    title: 'Sirdaryo yoshlar texnoparki - Admin ',
                    admin: true,
                    isEmployesActive: true,
                    csrfToken: req.csrfToken(),
                    employesData: employesData
                });
                return [3 /*break*/, 3];
            case 2:
                error_7 = _a.sent();
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.adminEmployesController = adminEmployesController;
var adminCompanyController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var companyData, _a, company_data, company_commitment, error_8;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4 /*yield*/, company_models_1.Company.findOne().lean()];
            case 1:
                companyData = _b.sent();
                _a = companyData, company_data = _a.company_data, company_commitment = _a.company_commitment;
                console.log(companyData);
                res.render('admin_company', {
                    title: 'Sirdaryo yoshlar texnoparki - Admin ',
                    admin: true,
                    isCompanyActive: true,
                    csrfToken: req.csrfToken(),
                    company_data: company_data,
                    company_commitment: company_commitment
                });
                return [3 /*break*/, 3];
            case 2:
                error_8 = _b.sent();
                next(error_8);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.adminCompanyController = adminCompanyController;
var adminInternationalController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var internationalData, error_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, international_models_1.International.find().sort({ createdAt: -1 }).lean()];
            case 1:
                internationalData = _a.sent();
                res.render('admin_international', {
                    title: 'Sirdaryo yoshlar texnoparki - Admin ',
                    admin: true,
                    isInternationalActive: true,
                    csrfToken: req.csrfToken(),
                    internationalData: internationalData
                });
                return [3 /*break*/, 3];
            case 2:
                error_9 = _a.sent();
                next(error_9);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.adminInternationalController = adminInternationalController;
var adminCooperationController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var cooparationData, error_10;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, coomparation_models_1.Cooparition.find().sort({ createdAt: -1 }).lean()];
            case 1:
                cooparationData = _a.sent();
                res.render('admin_cooperation', {
                    title: 'Sirdaryo yoshlar texnoparki - Admin ',
                    admin: true,
                    isCooperationActive: true,
                    csrfToken: req.csrfToken(),
                    cooparationData: cooparationData
                });
                return [3 /*break*/, 3];
            case 2:
                error_10 = _a.sent();
                next(error_10);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.adminCooperationController = adminCooperationController;
var adminDirectionsController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var directionsData, error_11;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, directions_models_1.Directions.find().sort({ createdAt: -1 }).lean()];
            case 1:
                directionsData = _a.sent();
                res.render('admin_directions', {
                    title: 'Sirdaryo yoshlar texnoparki - Admin ',
                    admin: true,
                    isDirectionsActive: true,
                    csrfToken: req.csrfToken(),
                    directionsData: directionsData
                });
                return [3 /*break*/, 3];
            case 2:
                error_11 = _a.sent();
                next(error_11);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.adminDirectionsController = adminDirectionsController;
var adminMediavideoController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var mediaVideoData, error_12;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, mediavideo_models_1.MediaVideo.find().sort({ createdAt: -1 }).lean()];
            case 1:
                mediaVideoData = _a.sent();
                res.render('admin_mediavideo', {
                    title: 'Sirdaryo yoshlar texnoparki - Admin ',
                    admin: true,
                    isMediavideoActive: true,
                    csrfToken: req.csrfToken(),
                    mediaVideoData: mediaVideoData
                });
                return [3 /*break*/, 3];
            case 2:
                error_12 = _a.sent();
                next(error_12);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.adminMediavideoController = adminMediavideoController;
var adminMediaphotoController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var mediaPhotoData, error_13;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, mediaphoto_models_1.MediaPhoto.find().sort({ createdAt: -1 }).lean()];
            case 1:
                mediaPhotoData = _a.sent();
                res.render('admin_mediaphoto', {
                    title: 'Sirdaryo yoshlar texnoparki - Admin ',
                    admin: true,
                    isMediaphotoActive: true,
                    csrfToken: req.csrfToken(),
                    mediaPhotoData: mediaPhotoData
                });
                return [3 /*break*/, 3];
            case 2:
                error_13 = _a.sent();
                next(error_13);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.adminMediaphotoController = adminMediaphotoController;
var adminEventsController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var eventsData, error_14;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, events_models_1.Events.find().sort({ createdAt: -1 }).lean()];
            case 1:
                eventsData = _a.sent();
                res.render('admin_events', {
                    title: 'Sirdaryo yoshlar texnoparki - Admin ',
                    admin: true,
                    isEventsActive: true,
                    csrfToken: req.csrfToken(),
                    eventsData: eventsData
                });
                return [3 /*break*/, 3];
            case 2:
                error_14 = _a.sent();
                next(error_14);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.adminEventsController = adminEventsController;
var adminAddPageChoicesController = function (req, res) {
    res.render('admin_add_choices', {
        title: 'Sirdaryo yoshlar texnoparki - Admin ',
        admin: true,
        isChoicesActive: true,
        csrfToken: req.csrfToken()
    });
};
exports.adminAddPageChoicesController = adminAddPageChoicesController;
var adminAddManagementPageController = function (req, res) {
    res.render('admin_add_management', {
        title: 'Sirdaryo yoshlar texnoparki - Admin ',
        admin: true,
        isManagersActive: true,
        csrfToken: req.csrfToken()
    });
};
exports.adminAddManagementPageController = adminAddManagementPageController;
var adminAddEmploysPageController = function (req, res) {
    res.render('admin_add_employes', {
        title: 'Sirdaryo yoshlar texnoparki - Admin ',
        admin: true,
        isEmploysActive: true,
        csrfToken: req.csrfToken()
    });
};
exports.adminAddEmploysPageController = adminAddEmploysPageController;
var adminAddEventsPageController = function (req, res) {
    res.render('admin_add_events', {
        title: 'Sirdaryo yoshlar texnoparki - Admin ',
        admin: true,
        isEventsActive: true,
        csrfToken: req.csrfToken()
    });
};
exports.adminAddEventsPageController = adminAddEventsPageController;
var adminAddDirectionsPageController = function (req, res) {
    res.render('admin_add_directions', {
        title: 'Sirdaryo yoshlar texnoparki - Admin ',
        admin: true,
        isDirectionstive: true,
        csrfToken: req.csrfToken()
    });
};
exports.adminAddDirectionsPageController = adminAddDirectionsPageController;
//# sourceMappingURL=admin.controller.js.map