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
exports.adminAddDirectionsController = exports.adminAddEventsController = exports.adminAddMediaPhotoController = exports.adminAddMediaVideoController = exports.adminAddCooparationController = exports.adminAddInternationalController = exports.AdminAddCompanyDataController = exports.adminAddEmployesController = exports.adminAddManagementController = exports.adminAddChoicesController = exports.adminAddNewsController = exports.adminAddSliderController = void 0;
var moment_timezone_1 = __importDefault(require("moment-timezone"));
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
var adminAddSliderController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var file, uploadPath, uzbekistanTimezone, nowInUzbekistan, year, month, day, datatime, _a, slider_title, slider_data, slider_file, addDbData, error_1;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, , 4]);
                file = (_b = req.files) === null || _b === void 0 ? void 0 : _b.slider_file;
                if (!file) {
                    return [2 /*return*/, res.status(400).json({ error: 'No file uploaded.' })];
                }
                uploadPath = "./public/uploads/slider/".concat(file.name);
                return [4 /*yield*/, file.mv(uploadPath)];
            case 1:
                _c.sent();
                uzbekistanTimezone = 'Asia/Tashkent';
                nowInUzbekistan = moment_timezone_1.default.tz(uzbekistanTimezone);
                year = nowInUzbekistan.year();
                month = nowInUzbekistan.format('MM');
                day = nowInUzbekistan.format('DD');
                datatime = "".concat(day, ".").concat(month, ".").concat(year);
                _a = req.body, slider_title = _a.slider_title, slider_data = _a.slider_data;
                slider_file = "".concat(file.name);
                return [4 /*yield*/, slider_models_1.Slider.create({
                        slider_title: slider_title,
                        slider_data: slider_data,
                        slider_file: slider_file,
                        datatime: datatime
                    })];
            case 2:
                addDbData = _c.sent();
                if (addDbData) {
                    res.redirect('/admin/admin-home?success=true');
                }
                return [3 /*break*/, 4];
            case 3:
                error_1 = _c.sent();
                console.error('Error:', error_1);
                next(error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.adminAddSliderController = adminAddSliderController;
var adminAddNewsController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var file, uploadPath, uzbekistanTimezone, nowInUzbekistan, year, month, day, datatime, _a, news_title, news_data, news_file, addDbData, error_2;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, , 4]);
                file = (_b = req.files) === null || _b === void 0 ? void 0 : _b.news_file;
                if (!file) {
                    return [2 /*return*/, res.status(400).json({ error: 'No file uploaded.' })];
                }
                uploadPath = "./public/uploads/news/".concat(file.name);
                return [4 /*yield*/, file.mv(uploadPath)];
            case 1:
                _c.sent();
                uzbekistanTimezone = 'Asia/Tashkent';
                nowInUzbekistan = moment_timezone_1.default.tz(uzbekistanTimezone);
                year = nowInUzbekistan.year();
                month = nowInUzbekistan.format('MM');
                day = nowInUzbekistan.format('DD');
                datatime = "".concat(day, ".").concat(month, ".").concat(year);
                _a = req.body, news_title = _a.news_title, news_data = _a.news_data;
                news_file = "".concat(file.name);
                return [4 /*yield*/, news_models_1.News.create({
                        news_title: news_title,
                        news_data: news_data,
                        news_file: news_file,
                        datatime: datatime
                    })];
            case 2:
                addDbData = _c.sent();
                if (addDbData) {
                    res.redirect('/admin/admin-news?success=true');
                }
                return [3 /*break*/, 4];
            case 3:
                error_2 = _c.sent();
                console.error('Error:', error_2);
                next(error_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.adminAddNewsController = adminAddNewsController;
var adminAddChoicesController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var file, uploadPath, uzbekistanTimezone, nowInUzbekistan, year, month, day, datatime, _a, choices_title, choices_data, choices_starttime, choices_endtime, choices_file, addDbData, error_3;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, , 4]);
                file = (_b = req.files) === null || _b === void 0 ? void 0 : _b.news_file;
                if (!file) {
                    return [2 /*return*/, res.status(400).json({ error: 'No file uploaded.' })];
                }
                uploadPath = "./public/uploads/choices/".concat(file.name);
                return [4 /*yield*/, file.mv(uploadPath)];
            case 1:
                _c.sent();
                uzbekistanTimezone = 'Asia/Tashkent';
                nowInUzbekistan = moment_timezone_1.default.tz(uzbekistanTimezone);
                year = nowInUzbekistan.year();
                month = nowInUzbekistan.format('MM');
                day = nowInUzbekistan.format('DD');
                datatime = "".concat(day, ".").concat(month, ".").concat(year);
                _a = req.body, choices_title = _a.choices_title, choices_data = _a.choices_data, choices_starttime = _a.choices_starttime, choices_endtime = _a.choices_endtime;
                choices_file = "".concat(file.name);
                return [4 /*yield*/, choices_models_1.Choices.create({
                        choices_name: choices_title,
                        choices_data: choices_data,
                        choices_starttime: choices_starttime,
                        choices_endtime: choices_endtime,
                        choices_file: choices_file,
                        datatime: datatime
                    })];
            case 2:
                addDbData = _c.sent();
                if (addDbData) {
                    res.redirect('/admin/admin-choices?success=true');
                }
                return [3 /*break*/, 4];
            case 3:
                error_3 = _c.sent();
                console.error('Error:', error_3);
                next(error_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.adminAddChoicesController = adminAddChoicesController;
var adminAddManagementController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var file, uploadPath, uzbekistanTimezone, nowInUzbekistan, year, month, day, datatime, _a, userfullname, userposition, user_file, addDbData, error_4;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, , 4]);
                file = (_b = req.files) === null || _b === void 0 ? void 0 : _b.user_file;
                if (!file) {
                    return [2 /*return*/, res.status(400).json({ error: 'No file uploaded.' })];
                }
                uploadPath = "./public/uploads/management/".concat(file.name);
                return [4 /*yield*/, file.mv(uploadPath)];
            case 1:
                _c.sent();
                uzbekistanTimezone = 'Asia/Tashkent';
                nowInUzbekistan = moment_timezone_1.default.tz(uzbekistanTimezone);
                year = nowInUzbekistan.year();
                month = nowInUzbekistan.format('MM');
                day = nowInUzbekistan.format('DD');
                datatime = "".concat(day, ".").concat(month, ".").concat(year);
                _a = req.body, userfullname = _a.userfullname, userposition = _a.userposition;
                user_file = "".concat(file.name);
                return [4 /*yield*/, management_models_1.Management.create({
                        userfullname: userfullname,
                        userposition: userposition,
                        user_file: user_file,
                        datatime: datatime
                    })];
            case 2:
                addDbData = _c.sent();
                if (addDbData) {
                    res.redirect('/admin/admin-management?success=true');
                }
                return [3 /*break*/, 4];
            case 3:
                error_4 = _c.sent();
                console.error('Error:', error_4);
                next(error_4);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.adminAddManagementController = adminAddManagementController;
var adminAddEmployesController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var file, uploadPath, uzbekistanTimezone, nowInUzbekistan, year, month, day, datatime, _a, userfullname, userposition, user_file, addDbData, error_5;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, , 4]);
                file = (_b = req.files) === null || _b === void 0 ? void 0 : _b.user_file;
                if (!file) {
                    return [2 /*return*/, res.status(400).json({ error: 'No file uploaded.' })];
                }
                uploadPath = "./public/uploads/employes/".concat(file.name);
                return [4 /*yield*/, file.mv(uploadPath)];
            case 1:
                _c.sent();
                uzbekistanTimezone = 'Asia/Tashkent';
                nowInUzbekistan = moment_timezone_1.default.tz(uzbekistanTimezone);
                year = nowInUzbekistan.year();
                month = nowInUzbekistan.format('MM');
                day = nowInUzbekistan.format('DD');
                datatime = "".concat(day, ".").concat(month, ".").concat(year);
                _a = req.body, userfullname = _a.userfullname, userposition = _a.userposition;
                user_file = "".concat(file.name);
                return [4 /*yield*/, employes_modeles_1.Employs.create({
                        userfullname: userfullname,
                        userposition: userposition,
                        user_file: user_file,
                        datatime: datatime
                    })];
            case 2:
                addDbData = _c.sent();
                if (addDbData) {
                    res.redirect('/admin/admin-employes?success=true');
                }
                return [3 /*break*/, 4];
            case 3:
                error_5 = _c.sent();
                console.error('Error:', error_5);
                next(error_5);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.adminAddEmployesController = adminAddEmployesController;
var AdminAddCompanyDataController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var uzbekistanTimezone, nowInUzbekistan, year, month, day, datatime, _a, company_data, company_commitment, updateData, error_6;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                uzbekistanTimezone = 'Asia/Tashkent';
                nowInUzbekistan = moment_timezone_1.default.tz(uzbekistanTimezone);
                year = nowInUzbekistan.year();
                month = nowInUzbekistan.format('MM');
                day = nowInUzbekistan.format('DD');
                datatime = "".concat(day, ".").concat(month, ".").concat(year);
                _a = req.body, company_data = _a.company_data, company_commitment = _a.company_commitment;
                return [4 /*yield*/, company_models_1.Company.updateOne({ _id: process.env.ABOUT_ID }, {
                        company_data: company_data,
                        company_commitment: company_commitment,
                        datatime: datatime
                    })];
            case 1:
                updateData = _b.sent();
                if (updateData) {
                    res.redirect('/admin/admin-company?success=true');
                }
                return [3 /*break*/, 3];
            case 2:
                error_6 = _b.sent();
                console.log('Error', error_6);
                next(error_6);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.AdminAddCompanyDataController = AdminAddCompanyDataController;
var adminAddInternationalController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var file, uploadPath, uzbekistanTimezone, nowInUzbekistan, year, month, day, datatime, _a, news_title, news_data, news_file, addDbData, error_7;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, , 4]);
                file = (_b = req.files) === null || _b === void 0 ? void 0 : _b.news_file;
                if (!file) {
                    return [2 /*return*/, res.status(400).json({ error: 'No file uploaded.' })];
                }
                uploadPath = "./public/uploads/international/".concat(file.name);
                return [4 /*yield*/, file.mv(uploadPath)];
            case 1:
                _c.sent();
                uzbekistanTimezone = 'Asia/Tashkent';
                nowInUzbekistan = moment_timezone_1.default.tz(uzbekistanTimezone);
                year = nowInUzbekistan.year();
                month = nowInUzbekistan.format('MM');
                day = nowInUzbekistan.format('DD');
                datatime = "".concat(day, ".").concat(month, ".").concat(year);
                _a = req.body, news_title = _a.news_title, news_data = _a.news_data;
                news_file = "".concat(file.name);
                return [4 /*yield*/, international_models_1.International.create({
                        news_title: news_title,
                        news_data: news_data,
                        news_file: news_file,
                        datatime: datatime
                    })];
            case 2:
                addDbData = _c.sent();
                if (addDbData) {
                    res.redirect('/admin/admin-international?success=true');
                }
                return [3 /*break*/, 4];
            case 3:
                error_7 = _c.sent();
                console.error('Error:', error_7);
                next(error_7);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.adminAddInternationalController = adminAddInternationalController;
var adminAddCooparationController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var file, uploadPath, uzbekistanTimezone, nowInUzbekistan, year, month, day, datatime, _a, news_title, news_data, news_file, addDbData, error_8;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, , 4]);
                file = (_b = req.files) === null || _b === void 0 ? void 0 : _b.news_file;
                if (!file) {
                    return [2 /*return*/, res.status(400).json({ error: 'No file uploaded.' })];
                }
                uploadPath = "./public/uploads/cooparation/".concat(file.name);
                return [4 /*yield*/, file.mv(uploadPath)];
            case 1:
                _c.sent();
                uzbekistanTimezone = 'Asia/Tashkent';
                nowInUzbekistan = moment_timezone_1.default.tz(uzbekistanTimezone);
                year = nowInUzbekistan.year();
                month = nowInUzbekistan.format('MM');
                day = nowInUzbekistan.format('DD');
                datatime = "".concat(day, ".").concat(month, ".").concat(year);
                _a = req.body, news_title = _a.news_title, news_data = _a.news_data;
                news_file = "".concat(file.name);
                return [4 /*yield*/, coomparation_models_1.Cooparition.create({
                        news_title: news_title,
                        news_data: news_data,
                        news_file: news_file,
                        datatime: datatime
                    })];
            case 2:
                addDbData = _c.sent();
                if (addDbData) {
                    res.redirect('/admin/admin-cooparation?success=true');
                }
                return [3 /*break*/, 4];
            case 3:
                error_8 = _c.sent();
                console.error('Error:', error_8);
                next(error_8);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.adminAddCooparationController = adminAddCooparationController;
var adminAddMediaVideoController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var uzbekistanTimezone, nowInUzbekistan, year, month, day, datatime, _a, news_title, news_data, news_link, addDbData, error_9;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                uzbekistanTimezone = 'Asia/Tashkent';
                nowInUzbekistan = moment_timezone_1.default.tz(uzbekistanTimezone);
                year = nowInUzbekistan.year();
                month = nowInUzbekistan.format('MM');
                day = nowInUzbekistan.format('DD');
                datatime = "".concat(day, ".").concat(month, ".").concat(year);
                _a = req.body, news_title = _a.news_title, news_data = _a.news_data, news_link = _a.news_link;
                return [4 /*yield*/, mediavideo_models_1.MediaVideo.create({
                        news_title: news_title,
                        news_data: news_data,
                        news_link: news_link,
                        datatime: datatime
                    })];
            case 1:
                addDbData = _b.sent();
                if (addDbData) {
                    res.redirect('/admin/admin-media-video?success=true');
                }
                return [3 /*break*/, 3];
            case 2:
                error_9 = _b.sent();
                console.error('Error:', error_9);
                next(error_9);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.adminAddMediaVideoController = adminAddMediaVideoController;
var adminAddMediaPhotoController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var file, uploadPath, uzbekistanTimezone, nowInUzbekistan, year, month, day, datatime, _a, news_title, news_data, news_file, addDbData, error_10;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, , 4]);
                file = (_b = req.files) === null || _b === void 0 ? void 0 : _b.news_file;
                if (!file) {
                    return [2 /*return*/, res.status(400).json({ error: 'No file uploaded.' })];
                }
                uploadPath = "./public/uploads/mediatika/".concat(file.name);
                return [4 /*yield*/, file.mv(uploadPath)];
            case 1:
                _c.sent();
                uzbekistanTimezone = 'Asia/Tashkent';
                nowInUzbekistan = moment_timezone_1.default.tz(uzbekistanTimezone);
                year = nowInUzbekistan.year();
                month = nowInUzbekistan.format('MM');
                day = nowInUzbekistan.format('DD');
                datatime = "".concat(day, ".").concat(month, ".").concat(year);
                _a = req.body, news_title = _a.news_title, news_data = _a.news_data;
                news_file = "".concat(file.name);
                return [4 /*yield*/, mediaphoto_models_1.MediaPhoto.create({
                        news_title: news_title,
                        news_data: news_data,
                        news_file: news_file,
                        datatime: datatime
                    })];
            case 2:
                addDbData = _c.sent();
                if (addDbData) {
                    res.redirect('/admin/admin-media-photo?success=true');
                }
                return [3 /*break*/, 4];
            case 3:
                error_10 = _c.sent();
                console.error('Error:', error_10);
                next(error_10);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.adminAddMediaPhotoController = adminAddMediaPhotoController;
var adminAddEventsController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var file, uploadPath, uzbekistanTimezone, nowInUzbekistan, year, month, day, datatime, _a, events_title, events_data, events_starttime, events_endtime, events_file, addDbData, error_11;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, , 4]);
                file = (_b = req.files) === null || _b === void 0 ? void 0 : _b.events_file;
                if (!file) {
                    return [2 /*return*/, res.status(400).json({ error: 'No file uploaded.' })];
                }
                uploadPath = "./public/uploads/events/".concat(file.name);
                return [4 /*yield*/, file.mv(uploadPath)];
            case 1:
                _c.sent();
                uzbekistanTimezone = 'Asia/Tashkent';
                nowInUzbekistan = moment_timezone_1.default.tz(uzbekistanTimezone);
                year = nowInUzbekistan.year();
                month = nowInUzbekistan.format('MM');
                day = nowInUzbekistan.format('DD');
                datatime = "".concat(day, ".").concat(month, ".").concat(year);
                _a = req.body, events_title = _a.events_title, events_data = _a.events_data, events_starttime = _a.events_starttime, events_endtime = _a.events_endtime;
                events_file = "".concat(file.name);
                return [4 /*yield*/, events_models_1.Events.create({
                        events_name: events_title,
                        events_data: events_data,
                        events_starttime: events_starttime,
                        events_endtime: events_endtime,
                        events_file: events_file,
                        datatime: datatime
                    })];
            case 2:
                addDbData = _c.sent();
                if (addDbData) {
                    res.redirect('/admin/admin-media-events?success=true');
                }
                return [3 /*break*/, 4];
            case 3:
                error_11 = _c.sent();
                console.error('Error:', error_11);
                next(error_11);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.adminAddEventsController = adminAddEventsController;
var adminAddDirectionsController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var uzbekistanTimezone, nowInUzbekistan, year, month, day, datatime, _a, directions_title, directions_data, addDbData, error_12;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                uzbekistanTimezone = 'Asia/Tashkent';
                nowInUzbekistan = moment_timezone_1.default.tz(uzbekistanTimezone);
                year = nowInUzbekistan.year();
                month = nowInUzbekistan.format('MM');
                day = nowInUzbekistan.format('DD');
                datatime = "".concat(day, ".").concat(month, ".").concat(year);
                _a = req.body, directions_title = _a.directions_title, directions_data = _a.directions_data;
                return [4 /*yield*/, directions_models_1.Directions.create({
                        directions_name: directions_title,
                        directions_data: directions_data,
                        datatime: datatime
                    })];
            case 1:
                addDbData = _b.sent();
                if (addDbData) {
                    res.redirect('/admin/admin-directions?success=true');
                }
                return [3 /*break*/, 3];
            case 2:
                error_12 = _b.sent();
                console.error('Error:', error_12);
                next(error_12);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.adminAddDirectionsController = adminAddDirectionsController;
//# sourceMappingURL=admin.posts.controller.js.map