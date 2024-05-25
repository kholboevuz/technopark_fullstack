"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var csurf_1 = __importDefault(require("csurf"));
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
var express_fileupload_1 = __importDefault(require("express-fileupload"));
var express_handlebars_1 = require("express-handlebars");
var express_session_1 = __importDefault(require("express-session"));
var dbconn_1 = require("./config/dbconn");
var app_router_1 = __importDefault(require("./routers/app.router"));
dotenv_1.default.config();
var app = (0, express_1.default)();
(0, dbconn_1.connectDB)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, express_fileupload_1.default)());
app.use((0, cookie_parser_1.default)());
app.use((0, csurf_1.default)({ cookie: true }));
app.use(express_1.default.static('public'));
app.set('trust proxy', 1);
app.use((0, express_session_1.default)({
    secret: 'technopark_uz_session',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: process.env.SESSION_KEY === 'production',
        maxAge: 30 * 60 * 1000
    }
}));
app.use(function (req, res, next) {
    res.locals.username = req.session.data;
    next();
});
app.use(app_router_1.default);
app.engine('.hbs', (0, express_handlebars_1.engine)({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');
var PORT = parseInt(process.env.PORT || '3000');
// Start the server
app.listen(PORT, function () {
    console.log('Server running on PORT:', PORT);
});
//# sourceMappingURL=server.js.map