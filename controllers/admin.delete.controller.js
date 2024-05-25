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
exports.DeleteController = void 0;
var choices_models_1 = require("../models/choices.models");
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
var DeleteController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, method, _id, url, deleteData, _b, error_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.label = 1;
            case 1:
                _c.trys.push([1, 28, , 29]);
                _a = req.query, method = _a.method, _id = _a._id, url = _a.url;
                deleteData = void 0;
                _b = method;
                switch (_b) {
                    case 'Slider': return [3 /*break*/, 2];
                    case 'News': return [3 /*break*/, 4];
                    case 'Choices': return [3 /*break*/, 6];
                    case 'Management': return [3 /*break*/, 8];
                    case 'Employes': return [3 /*break*/, 10];
                    case 'International': return [3 /*break*/, 12];
                    case 'Cooparation': return [3 /*break*/, 14];
                    case 'Admin': return [3 /*break*/, 16];
                    case 'Directions': return [3 /*break*/, 18];
                    case 'MediaVideo': return [3 /*break*/, 20];
                    case 'MediaPhoto': return [3 /*break*/, 22];
                    case 'Events': return [3 /*break*/, 24];
                }
                return [3 /*break*/, 26];
            case 2: return [4 /*yield*/, slider_models_1.Slider.deleteOne({ _id: _id })];
            case 3:
                deleteData = _c.sent();
                return [3 /*break*/, 27];
            case 4: return [4 /*yield*/, news_models_1.News.deleteOne({ _id: _id })];
            case 5:
                deleteData = _c.sent();
                return [3 /*break*/, 27];
            case 6: return [4 /*yield*/, choices_models_1.Choices.deleteOne({ _id: _id })];
            case 7:
                deleteData = _c.sent();
                return [3 /*break*/, 27];
            case 8: return [4 /*yield*/, management_models_1.Management.deleteOne({ _id: _id })];
            case 9:
                deleteData = _c.sent();
                return [3 /*break*/, 27];
            case 10: return [4 /*yield*/, employes_modeles_1.Employs.deleteOne({ _id: _id })];
            case 11:
                deleteData = _c.sent();
                return [3 /*break*/, 27];
            case 12: return [4 /*yield*/, international_models_1.International.deleteOne({ _id: _id })];
            case 13:
                deleteData = _c.sent();
                return [3 /*break*/, 27];
            case 14: return [4 /*yield*/, coomparation_models_1.Cooparition.deleteOne({ _id: _id })];
            case 15:
                deleteData = _c.sent();
                return [3 /*break*/, 27];
            case 16: return [4 /*yield*/, users_models_1.User.deleteOne({ _id: _id })];
            case 17:
                deleteData = _c.sent();
                return [3 /*break*/, 27];
            case 18: return [4 /*yield*/, directions_models_1.Directions.deleteOne({ _id: _id })];
            case 19:
                deleteData = _c.sent();
                return [3 /*break*/, 27];
            case 20: return [4 /*yield*/, mediavideo_models_1.MediaVideo.deleteOne({ _id: _id })];
            case 21:
                deleteData = _c.sent();
                return [3 /*break*/, 27];
            case 22: return [4 /*yield*/, mediaphoto_models_1.MediaPhoto.deleteOne({ _id: _id })];
            case 23:
                deleteData = _c.sent();
                return [3 /*break*/, 27];
            case 24: return [4 /*yield*/, events_models_1.Events.deleteOne({ _id: _id })];
            case 25:
                deleteData = _c.sent();
                return [3 /*break*/, 27];
            case 26: return [2 /*return*/, res.status(400).json({ message: 'Invalid method' })];
            case 27:
                if (deleteData.deletedCount === 0) {
                    return [2 /*return*/, res.status(404).json({ message: 'Resource not found' })];
                }
                return [2 /*return*/, res.redirect("/admin/".concat(url, "?success=true"))];
            case 28:
                error_1 = _c.sent();
                next(error_1);
                return [3 /*break*/, 29];
            case 29: return [2 /*return*/];
        }
    });
}); };
exports.DeleteController = DeleteController;
//# sourceMappingURL=admin.delete.controller.js.map