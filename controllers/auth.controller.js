"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authKeyFile = void 0;
var multer_1 = __importDefault(require("multer"));
var storage = multer_1.default.memoryStorage();
var upload = (0, multer_1.default)({ storage: storage });
var authKeyFile = function (req, res) {
    var file = req.file;
    if (!file) {
        res.status(400).send('No file uploaded.');
        return;
    }
    try {
        var jsonData = JSON.parse(file.buffer.toString());
        console.log(jsonData);
        res.send('File uploaded and JSON data printed to console.');
    }
    catch (error) {
        res.status(500).send('Error processing file.');
    }
};
exports.authKeyFile = authKeyFile;
//# sourceMappingURL=auth.controller.js.map