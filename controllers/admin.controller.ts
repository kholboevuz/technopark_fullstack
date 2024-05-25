import csrf from 'csurf'
import { NextFunction, Request, Response } from 'express'
import { Choices } from '../models/choices.models'
import { Company } from '../models/company.models'
import { Cooparition } from '../models/coomparation.models'
import { Directions } from '../models/directions.models'
import { Employs } from '../models/employes.modeles'
import { Events } from '../models/events.models'
import { International } from '../models/international.models'
import { Management } from '../models/management.models'
import { MediaPhoto } from '../models/mediaphoto.models'
import { MediaVideo } from '../models/mediavideo_models'
import { News } from '../models/news.models'
import { Slider } from '../models/slider.models'
import { User } from '../models/users.models'
const csrfProtection = csrf({ cookie: true });

const adminLoginController = (req: Request, res: Response): void => {
		const error  = req.query.error as unknown as number
		if(error == 1){
			res.render('admin_login', {
        title: 'Sirdaryo yoshlar texnoparki - Admin kirish',
        admin: true,
        csrfToken: req.csrfToken(),
				error: true
			
    });
		}else{
			res.render('admin_login', {
        title: 'Sirdaryo yoshlar texnoparki - Admin kirish',
        admin: true,
        csrfToken: req.csrfToken(),
				error: false
			
    });
		}
   
};

const adminHomeController = async (req: Request, res: Response, next: NextFunction) => {
	try {

		const [    
		  directions,
			choices,
			news,
			employs,
			management,
			events,
			mediaVideo,
			mediaPhoto,
			cooparition,
			international
		] = 	await Promise.all([
			Directions.find().exec(),
			Choices.find().exec(),
			News.find().exec(),
			Employs.find().exec(),
			Management.find().exec(),
			Events.find().exec(),
			MediaVideo.find().exec(),
			MediaPhoto.find().exec(),
			Cooparition.find().exec(),
			International.find().exec()
	]);

	const lengths = [
		directions.length,
		choices.length,
		news.length,
		employs.length,
		management.length,
		events.length,
		mediaVideo.length,
		mediaPhoto.length,
		cooparition.length,
		international.length
];

		res.render('admin_home', {
			title: 'Sirdaryo yoshlar texnoparki - Admin kirish',
			admin: true,
			isHomeActive: true,
			lengths: lengths
	});
	} catch (error) {
		console.log(error)
		next(error)
	}

};

const adminSmsController = (req: Request, res: Response): void => {
    res.render('admin_sms', {
        title: 'Sirdaryo yoshlar texnoparki - Admin kirish',
        admin: true,
        csrfToken: req.csrfToken() 
    });
};

const adminPassController = (req: Request, res: Response) => {
    res.render('admin_password', {
        title: 'Sirdaryo yoshlar texnoparki - Admin kirish',
        admin: true,
        csrfToken: req.csrfToken() 
    });
};


const adminAdminController = async (req: Request, res: Response) => {
	try {	

		const adminData = await User.find().lean()

		res.render('admin_admin', {
			title: 'Sirdaryo yoshlar texnoparki - Admin kirish',
			admin: true,
			isAdminActive: true,
			adminData
	});
	} catch (error) {
		console.log(error);
		
	}

};

const adminAddAdminController = (req: Request, res: Response) => {
	res.render('admin_add_admin', {
			title: 'Sirdaryo yoshlar texnoparki - Admin ',
			admin: true,
			isAdminActive: true,
			csrfToken: req.csrfToken() 
	});
};

const adminHomePageController = async (req: Request, res: Response, next: NextFunction) =>{
try {
	const sliderData = await Slider.find().sort({ createdAt: -1 }).lean();
	res.render('admin_homepage', {
		title: 'Sirdaryo yoshlar texnoparki - Admin ',
		admin: true,
		isHomePageActive: true,
		sliderData,
		csrfToken: req.csrfToken() 
	})
} catch (error) {
	next(error)
}


}

const adminNewsController = async (req:Request, res: Response, next:NextFunction) =>{
	try {

		const newsData = await News.find().sort({ createdAt: -1 }).lean();

		res.render('admin_news', {
		title: 'Sirdaryo yoshlar texnoparki - Admin ',
		admin: true,
		isNewsActive: true,
		csrfToken: req.csrfToken() ,
		newsData
	})
	} catch (error) {
		next(error)
	}


}

const adminChoicesController = async (req:Request, res: Response, next: NextFunction) =>{

try {

	const choicesData = await Choices.find().sort({ createdAt: -1 }).lean();

	res.render('admin_choices', {
		title: 'Sirdaryo yoshlar texnoparki - Admin ',
		admin: true,
		isChoicesActive: true,
		csrfToken: req.csrfToken() ,
		choicesData
	})
} catch (error) {
	next(error)
}
	
}

const adminManagementController = async (req:Request, res: Response, next: NextFunction) =>{
try {
	const managementData = await Management.find().sort({createdAt: -1}).lean();
	res.render('admin_management', {
		title: 'Sirdaryo yoshlar texnoparki - Admin ',
		admin: true,
		isManagersActive: true,
		csrfToken: req.csrfToken(),
		managementData
	})
} catch (error) {
	next(error)
}



}


const adminEmployesController = async (req:Request, res: Response, next: NextFunction) =>{
try {

	const employesData = await Employs.find().sort({createdAt: -1}).lean()

	res.render('admin_employes', {
		title: 'Sirdaryo yoshlar texnoparki - Admin ',
		admin: true,
		isEmployesActive: true,
		csrfToken: req.csrfToken(),
		employesData
	})
} catch (error) {
	
}
}

const adminCompanyController = async (req:Request, res: Response, next: NextFunction) =>{

	
	try {
		
		const companyData =  await Company.findOne().lean()
		
		interface dataBody {
			company_data:string
			company_commitment:string
		}

		const {company_data, company_commitment} = companyData as unknown as dataBody 
		console.log(companyData);
		
		res.render('admin_company', {
			title: 'Sirdaryo yoshlar texnoparki - Admin ',
			admin: true,
			isCompanyActive: true,
			csrfToken: req.csrfToken() ,
			company_data,
			company_commitment
		})
	
	} catch (error) {
		next(error)
	}


}

const adminInternationalController = async (req:Request, res: Response, next: NextFunction) =>{
try {

	const internationalData = await International.find().sort({createdAt: -1}).lean()

	res.render('admin_international', {
		title: 'Sirdaryo yoshlar texnoparki - Admin ',
		admin: true,
		isInternationalActive: true,
		csrfToken: req.csrfToken(),
		internationalData
	})
} catch (error) {
	next(error)
}
	


}

const adminCooperationController = async (req:Request, res: Response, next: NextFunction) =>{
try {

	const cooparationData = await Cooparition.find().sort({createdAt: -1}).lean()

	res.render('admin_cooperation', {
		title: 'Sirdaryo yoshlar texnoparki - Admin ',
		admin: true,
		isCooperationActive: true,
		csrfToken: req.csrfToken(),
		cooparationData
	})

} catch (error) {
	next(error)
}


}
const adminDirectionsController = async (req:Request, res: Response, next: NextFunction) =>{

	try {
		const directionsData = await Directions.find().sort({createdAt: -1}).lean()
		
		res.render('admin_directions', {
			title: 'Sirdaryo yoshlar texnoparki - Admin ',
			admin: true,
			isDirectionsActive: true,
			csrfToken: req.csrfToken(),
			directionsData
		})
	} catch (error) {
		next(error)
	}



}

const adminMediavideoController = async (req:Request, res: Response, next: NextFunction) =>{
try {

	const mediaVideoData= await MediaVideo.find().sort({createdAt: -1}).lean()

	res.render('admin_mediavideo', {
		title: 'Sirdaryo yoshlar texnoparki - Admin ',
		admin: true,
		isMediavideoActive: true,
		csrfToken: req.csrfToken(),
		mediaVideoData
	})

} catch (error) {
	next(error)
}



}

const adminMediaphotoController = async (req:Request, res: Response, next: NextFunction) =>{
try {
	const mediaPhotoData = await MediaPhoto.find().sort({createdAt: -1}).lean()
	res.render('admin_mediaphoto', {
		title: 'Sirdaryo yoshlar texnoparki - Admin ',
		admin: true,
		isMediaphotoActive: true,
		csrfToken: req.csrfToken(),
		mediaPhotoData
	})
} catch (error) {
	next(error)
}



}
const adminEventsController = async (req:Request, res: Response, next: NextFunction) =>{
try {
	const eventsData = await Events.find().sort({createdAt: -1}).lean()
	res.render('admin_events', {
		title: 'Sirdaryo yoshlar texnoparki - Admin ',
		admin: true,
		isEventsActive: true,
		csrfToken: req.csrfToken(),
		eventsData
	})

} catch (error) {
	next(error)
}


}

const adminAddPageChoicesController = (req:Request, res: Response) =>{

	res.render('admin_add_choices', {
		title: 'Sirdaryo yoshlar texnoparki - Admin ',
		admin: true,
		isChoicesActive: true,
		csrfToken: req.csrfToken() 
	})


}

const adminAddManagementPageController = (req:Request, res: Response) =>{

	res.render('admin_add_management', {
		title: 'Sirdaryo yoshlar texnoparki - Admin ',
		admin: true,
		isManagersActive: true,
		csrfToken: req.csrfToken() 
	})


}
const adminAddEmploysPageController = (req:Request, res: Response) =>{

	res.render('admin_add_employes', {
		title: 'Sirdaryo yoshlar texnoparki - Admin ',
		admin: true,
		isEmploysActive: true,
		csrfToken: req.csrfToken() 
	})


}
const adminAddEventsPageController = (req:Request, res: Response) =>{

	res.render('admin_add_events', {
		title: 'Sirdaryo yoshlar texnoparki - Admin ',
		admin: true,
		isEventsActive: true,
		csrfToken: req.csrfToken() 
	})


}
const adminAddDirectionsPageController = (req:Request, res: Response) =>{

	res.render('admin_add_directions', {
		title: 'Sirdaryo yoshlar texnoparki - Admin ',
		admin: true,
		isDirectionstive: true,
		csrfToken: req.csrfToken() 
	})


}
export { adminAddAdminController, adminAddDirectionsPageController, adminAddEmploysPageController, adminAddEventsPageController, adminAddManagementPageController, adminAddPageChoicesController, adminAdminController, adminChoicesController, adminCompanyController, adminCooperationController, adminDirectionsController, adminEmployesController, adminEventsController, adminHomeController, adminHomePageController, adminInternationalController, adminLoginController, adminManagementController, adminMediaphotoController, adminMediavideoController, adminNewsController, adminPassController, adminSmsController }

