"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionMiddleware = void 0;
var sessionMiddleware = function (req, res, next) {
    if (!req.session.data) {
        res.redirect('/admin/logout');
    }
    else {
        next();
    }
};
exports.sessionMiddleware = sessionMiddleware;
//# sourceMappingURL=session.middleware.js.map