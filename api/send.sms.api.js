"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var axios_1 = __importDefault(require("axios"));
var sendSmsApi = function (phonenumber, message) {
    var data = JSON.stringify({
        "jsonrpc": "2.0",
        "apiversion": "1.0",
        "params": {
            "method": "SendSmsText",
            "body": {
                "phonenumber": phonenumber,
                "text": message
            }
        }
    });
    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://94.241.168.135:3000/api/v1/mobile',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eXB4ZXZha3VhdG9ycGFzc3dvcmQ='
        },
        data: data
    };
    axios_1.default.request(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
        .catch(function (error) {
        console.log(error);
    });
};
module.exports = sendSmsApi;
//# sourceMappingURL=send.sms.api.js.map