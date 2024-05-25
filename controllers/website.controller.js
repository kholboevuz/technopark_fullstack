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
Object.defineProperty(exports, "__esModule", { value: true });
exports.directPostPageController = exports.internationalPostPageController = exports.internationalPageController = exports.aboutPageController = exports.newsPageController = exports.homePageController = void 0;
var company_models_1 = require("../models/company.models");
var directions_models_1 = require("../models/directions.models");
var employes_modeles_1 = require("../models/employes.modeles");
var international_models_1 = require("../models/international.models");
var management_models_1 = require("../models/management.models");
var news_models_1 = require("../models/news.models");
var slider_models_1 = require("../models/slider.models");
var homePageController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var sliderData, directions, newsdata, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                return [4 /*yield*/, slider_models_1.Slider.find().sort({ createdAt: -1 }).lean()];
            case 1:
                sliderData = _a.sent();
                return [4 /*yield*/, directions_models_1.Directions.find().sort({ createdAt: -1 }).lean()];
            case 2:
                directions = _a.sent();
                return [4 /*yield*/, news_models_1.News.find().sort({ createdAt: -1 }).lean()];
            case 3:
                newsdata = _a.sent();
                res.render('home', {
                    title: 'Sirdaryo yoshlar texnoparki',
                    admin: false,
                    sliderData: sliderData,
                    directions: directions,
                    newsdata: newsdata,
                });
                return [3 /*break*/, 5];
            case 4:
                error_1 = _a.sent();
                next(error_1);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.homePageController = homePageController;
var newsPageController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, newsData, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.query.id;
                return [4 /*yield*/, news_models_1.News.findOne({ _id: id }).lean()];
            case 1:
                newsData = _a.sent();
                res.render('news', {
                    title: 'Sirdaryo yoshlar texnoparki',
                    admin: false,
                    newsData: newsData,
                });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                next();
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.newsPageController = newsPageController;
var aboutPageController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var aboutData, employeData, managemntData, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                return [4 /*yield*/, company_models_1.Company.findOne().lean()];
            case 1:
                aboutData = _a.sent();
                return [4 /*yield*/, employes_modeles_1.Employs.find().lean()];
            case 2:
                employeData = _a.sent();
                return [4 /*yield*/, management_models_1.Management.find().lean()];
            case 3:
                managemntData = _a.sent();
                res.render('about', {
                    title: 'Sirdaryo yoshlar texnoparki',
                    admin: false,
                    aboutData: aboutData,
                    employeData: employeData,
                    managemntData: managemntData,
                });
                return [3 /*break*/, 5];
            case 4:
                error_3 = _a.sent();
                next(error_3);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.aboutPageController = aboutPageController;
var internationalPageController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var internationalData, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, international_models_1.International.find()
                        .sort({ createdAt: -1 })
                        .lean()];
            case 1:
                internationalData = _a.sent();
                res.render('international', {
                    title: 'Sirdaryo yoshlar texnoparki',
                    admin: false,
                    internationalData: internationalData,
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
exports.internationalPageController = internationalPageController;
var internationalPostPageController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _id = req.query._id;
                return [4 /*yield*/, international_models_1.International.findOne({ _id: _id }).lean()];
            case 1:
                data = _a.sent();
                res.render('international-post', {
                    title: 'Sirdaryo yoshlar texnoparki',
                    admin: false,
                    data: data,
                });
                return [2 /*return*/];
        }
    });
}); };
exports.internationalPostPageController = internationalPostPageController;
var directPostPageController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var title, directData, directName, directDatas;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                title = req.query.title;
                if (!!title) return [3 /*break*/, 1];
                res.redirect('/');
                return [3 /*break*/, 3];
            case 1: return [4 /*yield*/, directions_models_1.Directions.findOne({ directions_name: title })];
            case 2:
                directData = _a.sent();
                directName = directData === null || directData === void 0 ? void 0 : directData.directions_name;
                directDatas = directData === null || directData === void 0 ? void 0 : directData.directions_data;
                res.render('direct-post', {
                    title: 'Sirdaryo yoshlar texnoparki',
                    admin: false,
                    directName: directName,
                    directDatas: directDatas,
                });
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.directPostPageController = directPostPageController;
//# sourceMappingURL=website.controller.js.map