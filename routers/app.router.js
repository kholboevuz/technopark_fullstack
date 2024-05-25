"use strict";
var express_1 = require("express");
var admin_controller_1 = require("../controllers/admin.controller");
var admin_delete_controller_1 = require("../controllers/admin.delete.controller");
var admin_post_controller_1 = require("../controllers/admin.post.controller");
var admin_posts_controller_1 = require("../controllers/admin.posts.controller");
var platform_controller_1 = require("../controllers/platform/platform.controller");
var website_controller_1 = require("../controllers/website.controller");
var session_middleware_1 = require("../middlewares/session.middleware");
var router = (0, express_1.Router)();
router.get('/', website_controller_1.homePageController);
router.get('/news', website_controller_1.newsPageController);
router.get('/about', website_controller_1.aboutPageController);
router.get('/international-cooperation', website_controller_1.internationalPageController);
router.get('/international-post', website_controller_1.internationalPostPageController);
router.get('/direct', website_controller_1.directPostPageController);
router.get('/admin', function (req, res) {
    res.redirect('/admin/login');
});
router.get('/admin/login', admin_controller_1.adminLoginController);
router.get('/admin/home', session_middleware_1.sessionMiddleware, admin_controller_1.adminHomeController);
router.get('/admin/sms', session_middleware_1.sessionMiddleware, admin_controller_1.adminSmsController);
router.get('/admin/pass', session_middleware_1.sessionMiddleware, admin_controller_1.adminPassController);
router.get('/admin/admins', session_middleware_1.sessionMiddleware, admin_controller_1.adminAdminController);
router.get('/admin/admin-add', session_middleware_1.sessionMiddleware, admin_controller_1.adminAddAdminController);
router.get('/admin/admin-home', session_middleware_1.sessionMiddleware, admin_controller_1.adminHomePageController);
router.get('/admin/admin-news', session_middleware_1.sessionMiddleware, admin_controller_1.adminNewsController);
router.get('/admin/admin-choices', session_middleware_1.sessionMiddleware, admin_controller_1.adminChoicesController);
router.get('/admin/admin-management', session_middleware_1.sessionMiddleware, admin_controller_1.adminManagementController);
router.get('/admin/admin-employes', session_middleware_1.sessionMiddleware, admin_controller_1.adminEmployesController);
router.get('/admin/admin-company', session_middleware_1.sessionMiddleware, admin_controller_1.adminCompanyController);
router.get('/admin/admin-international', session_middleware_1.sessionMiddleware, admin_controller_1.adminInternationalController);
router.get('/admin/admin-cooparation', session_middleware_1.sessionMiddleware, admin_controller_1.adminCooperationController);
router.get('/admin/admin-directions', session_middleware_1.sessionMiddleware, admin_controller_1.adminDirectionsController);
router.get('/admin/admin-media-video', session_middleware_1.sessionMiddleware, admin_controller_1.adminMediavideoController);
router.get('/admin/admin-media-photo', session_middleware_1.sessionMiddleware, admin_controller_1.adminMediaphotoController);
router.get('/admin/admin-media-events', session_middleware_1.sessionMiddleware, admin_controller_1.adminEventsController);
router.get('/admin/admin-add-choices', session_middleware_1.sessionMiddleware, admin_controller_1.adminAddPageChoicesController);
router.get('/admin/admin-add-management', session_middleware_1.sessionMiddleware, admin_controller_1.adminAddManagementPageController);
router.get('/admin/admin-add-employes', session_middleware_1.sessionMiddleware, admin_controller_1.adminAddEmploysPageController);
router.get('/admin/admin-add-events', session_middleware_1.sessionMiddleware, admin_controller_1.adminAddEventsPageController);
router.get('/admin/delete', session_middleware_1.sessionMiddleware, admin_delete_controller_1.DeleteController);
router.get('/admin/admin-add-directions', session_middleware_1.sessionMiddleware, admin_controller_1.adminAddDirectionsPageController);
router.get('/admin/logout', function (req, res) {
    req.session.destroy(function (err) {
        if (err) {
            console.error('Error destroying session:', err);
            res.status(500).send('Error logging out');
        }
        else {
            res.redirect('/admin');
        }
    });
});
router.get('/platform/login', platform_controller_1.PlatFormController);
router.get('*', function (req, res) {
    res.render('404', {
        title: 'Sirdaryo yoshlar texnoparki',
        admin: false,
    });
});
//Dashboard uchun
//post surovlari cuhun
router.post('/admin-login', admin_post_controller_1.authKeyFile);
router.post('/admin-add', admin_post_controller_1.adminAddUsercontroller);
router.post('/admin-slider', admin_posts_controller_1.adminAddSliderController);
router.post('/admin-news', admin_posts_controller_1.adminAddNewsController);
router.post('/admin-choices', admin_posts_controller_1.adminAddChoicesController);
router.post('/admin-management', admin_posts_controller_1.adminAddManagementController);
router.post('/admin-employes', admin_posts_controller_1.adminAddEmployesController);
router.post('/admin-data', admin_posts_controller_1.AdminAddCompanyDataController);
router.post('/admin-international', admin_posts_controller_1.adminAddInternationalController);
router.post('/admin-cooperation', admin_posts_controller_1.adminAddCooparationController);
router.post('/admin-mediavideo', admin_posts_controller_1.adminAddMediaVideoController);
router.post('/admin-mediaphoto', admin_posts_controller_1.adminAddMediaPhotoController);
router.post('/admin-events', admin_posts_controller_1.adminAddEventsController);
router.post('/admin-directions', admin_posts_controller_1.adminAddDirectionsController);
module.exports = router;
//# sourceMappingURL=app.router.js.map