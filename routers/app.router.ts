import { Request, Response, Router } from 'express'

import {
	adminAddAdminController,
	adminAddDirectionsPageController,
	adminAddEmploysPageController,
	adminAddEventsPageController,
	adminAddManagementPageController,
	adminAddPageChoicesController,
	adminAdminController,
	adminChoicesController,
	adminCompanyController,
	adminCooperationController,
	adminDirectionsController,
	adminEmployesController,
	adminEventsController,
	adminHomeController,
	adminHomePageController,
	adminInternationalController,
	adminLoginController,
	adminManagementController,
	adminMediaphotoController,
	adminMediavideoController,
	adminNewsController,
	adminPassController,
	adminSmsController,
} from '../controllers/admin.controller'
import { DeleteController } from '../controllers/admin.delete.controller'
import {
	adminAddUsercontroller,
	authKeyFile,
} from '../controllers/admin.post.controller'
import {
	AdminAddCompanyDataController,
	adminAddChoicesController,
	adminAddCooparationController,
	adminAddDirectionsController,
	adminAddEmployesController,
	adminAddEventsController,
	adminAddInternationalController,
	adminAddManagementController,
	adminAddMediaPhotoController,
	adminAddMediaVideoController,
	adminAddNewsController,
	adminAddSliderController,
} from '../controllers/admin.posts.controller'
import { PlatFormController } from '../controllers/platform/platform.controller'
import {
	aboutPageController,
	directPostPageController,
	homePageController,
	internationalPageController,
	internationalPostPageController,
	newsPageController,
} from '../controllers/website.controller'
import { sessionMiddleware } from '../middlewares/session.middleware'

const router = Router()

router.get('/', homePageController)

router.get('/news', newsPageController)

router.get('/about', aboutPageController)

router.get('/international-cooperation', internationalPageController)

router.get('/international-post', internationalPostPageController)
router.get('/direct', directPostPageController)
router.get('/admin', (req, res) => {
	res.redirect('/admin/login')
})
router.get('/admin/login', adminLoginController)
router.get('/admin/home', sessionMiddleware, adminHomeController)
router.get('/admin/sms', sessionMiddleware, adminSmsController)
router.get('/admin/pass', sessionMiddleware, adminPassController)
router.get('/admin/admins', sessionMiddleware, adminAdminController)
router.get('/admin/admin-add', sessionMiddleware, adminAddAdminController)
router.get('/admin/admin-home', sessionMiddleware, adminHomePageController)
router.get('/admin/admin-news', sessionMiddleware, adminNewsController)
router.get('/admin/admin-choices', sessionMiddleware, adminChoicesController)
router.get(
	'/admin/admin-management',
	sessionMiddleware,
	adminManagementController
)
router.get('/admin/admin-employes', sessionMiddleware, adminEmployesController)
router.get('/admin/admin-company', sessionMiddleware, adminCompanyController)
router.get(
	'/admin/admin-international',
	sessionMiddleware,
	adminInternationalController
)
router.get(
	'/admin/admin-cooparation',
	sessionMiddleware,
	adminCooperationController
)
router.get(
	'/admin/admin-directions',
	sessionMiddleware,
	adminDirectionsController
)
router.get(
	'/admin/admin-media-video',
	sessionMiddleware,
	adminMediavideoController
)
router.get(
	'/admin/admin-media-photo',
	sessionMiddleware,
	adminMediaphotoController
)
router.get(
	'/admin/admin-media-events',
	sessionMiddleware,
	adminEventsController
)
router.get(
	'/admin/admin-add-choices',
	sessionMiddleware,
	adminAddPageChoicesController
)
router.get(
	'/admin/admin-add-management',
	sessionMiddleware,
	adminAddManagementPageController
)
router.get(
	'/admin/admin-add-employes',
	sessionMiddleware,
	adminAddEmploysPageController
)
router.get(
	'/admin/admin-add-events',
	sessionMiddleware,
	adminAddEventsPageController
)
router.get('/admin/delete', sessionMiddleware, DeleteController)

router.get(
	'/admin/admin-add-directions',
	sessionMiddleware,
	adminAddDirectionsPageController
)

router.get('/admin/logout', (req: Request, res: Response) => {
	req.session.destroy(err => {
		if (err) {
			console.error('Error destroying session:', err)
			res.status(500).send('Error logging out')
		} else {
			res.redirect('/admin')
		}
	})
})

router.get('/platform/login', PlatFormController)

router.get('*', (req, res) => {
	res.render('404', {
		title: 'Sirdaryo yoshlar texnoparki',
		admin: false,
	})
})

//Dashboard uchun

//post surovlari cuhun
router.post('/admin-login', authKeyFile)
router.post('/admin-add', adminAddUsercontroller)
router.post('/admin-slider', adminAddSliderController)
router.post('/admin-news', adminAddNewsController)
router.post('/admin-choices', adminAddChoicesController)
router.post('/admin-management', adminAddManagementController)
router.post('/admin-employes', adminAddEmployesController)
router.post('/admin-data', AdminAddCompanyDataController)
router.post('/admin-international', adminAddInternationalController)
router.post('/admin-cooperation', adminAddCooparationController)
router.post('/admin-mediavideo', adminAddMediaVideoController)
router.post('/admin-mediaphoto', adminAddMediaPhotoController)
router.post('/admin-events', adminAddEventsController)
router.post('/admin-directions', adminAddDirectionsController)
export = router
