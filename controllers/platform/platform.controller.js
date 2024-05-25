"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatFormController = void 0;
var PlatFormController = function (req, res, next) {
    try {
        res.render('platform_login', {
            title: 'Sirdaryo yoshlar texnoparki -',
            csrfToken: req.csrfToken(),
            error: true,
            platform: true,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.PlatFormController = PlatFormController;
//# sourceMappingURL=platform.controller.js.map