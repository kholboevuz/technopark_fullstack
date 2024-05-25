import { NextFunction, Request, Response } from 'express'
import moment from 'moment-timezone'
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

export const adminAddSliderController = async (req: Request, res: Response, next: NextFunction) => {
	try {

			const file = req.files?.slider_file as any;
			if (!file) {
					return res.status(400).json({ error: 'No file uploaded.' });
			}

			const uploadPath = `./public/uploads/slider/${file.name}`;

			await file.mv(uploadPath);

			const uzbekistanTimezone = 'Asia/Tashkent';

			const nowInUzbekistan = moment.tz(uzbekistanTimezone);

			const year = nowInUzbekistan.year();

			const month = nowInUzbekistan.format('MM'); 

			const day = nowInUzbekistan.format('DD');

			const datatime = `${day}.${month}.${year}`

			const {slider_title, slider_data} = req.body

			const slider_file = `${file.name}`;

			const addDbData = await Slider.create({
				slider_title,
				slider_data,
				slider_file,
				datatime
			})
		if(addDbData){
			res.redirect('/admin/admin-home?success=true')
		}
			
	} catch (error) {
			console.error('Error:', error);
			next(error)
		}
};


export const adminAddNewsController = async (req: Request, res: Response, next: NextFunction) =>{

	try {
	
	const file = req.files?.news_file as any;
	if (!file) {
			return res.status(400).json({ error: 'No file uploaded.' });
	}

	const uploadPath = `./public/uploads/news/${file.name}`;

	await file.mv(uploadPath);

	const uzbekistanTimezone = 'Asia/Tashkent';

	const nowInUzbekistan = moment.tz(uzbekistanTimezone);

	const year = nowInUzbekistan.year();

	const month = nowInUzbekistan.format('MM'); 

	const day = nowInUzbekistan.format('DD');

	const datatime = `${day}.${month}.${year}`

	const {news_title, news_data} = req.body

	const news_file = `${file.name}`;

	const addDbData = await News.create({
		news_title,
		news_data,
		news_file,
		datatime
	})
if(addDbData){
	res.redirect('/admin/admin-news?success=true')
}
	
} catch (error) {
	console.error('Error:', error);
	next(error)
}

}


export const adminAddChoicesController = async (req: Request, res: Response, next: NextFunction) =>{

	try {
	
	const file = req.files?.news_file as any;
	if (!file) {
			return res.status(400).json({ error: 'No file uploaded.' });
	}

	const uploadPath = `./public/uploads/choices/${file.name}`;

	await file.mv(uploadPath);

	const uzbekistanTimezone = 'Asia/Tashkent';

	const nowInUzbekistan = moment.tz(uzbekistanTimezone);

	const year = nowInUzbekistan.year();

	const month = nowInUzbekistan.format('MM'); 

	const day = nowInUzbekistan.format('DD');

	const datatime = `${day}.${month}.${year}`

	const {choices_title, choices_data, choices_starttime, choices_endtime} = req.body

	const choices_file = `${file.name}`;

	const addDbData = await Choices.create({
		choices_name: choices_title,
		choices_data,
		choices_starttime,
		choices_endtime,
		choices_file,
		datatime
	})
if(addDbData){
	res.redirect('/admin/admin-choices?success=true')
}
	
} catch (error) {
	console.error('Error:', error);
	next(error)
}

}


export const adminAddManagementController = async (req: Request, res: Response, next: NextFunction) =>{

	try {
	
	const file = req.files?.user_file as any;
	if (!file) {
			return res.status(400).json({ error: 'No file uploaded.' });
	}

	const uploadPath = `./public/uploads/management/${file.name}`;

	await file.mv(uploadPath);

	const uzbekistanTimezone = 'Asia/Tashkent';

	const nowInUzbekistan = moment.tz(uzbekistanTimezone);

	const year = nowInUzbekistan.year();

	const month = nowInUzbekistan.format('MM'); 

	const day = nowInUzbekistan.format('DD');

	const datatime:string = `${day}.${month}.${year}`

	interface UserReqBody {
		userfullname: string,
		userposition: string
	}


	const {userfullname, userposition} = req.body as unknown as UserReqBody

	const user_file:string = `${file.name}`;

	const addDbData = await Management.create({
		userfullname,
		userposition,
		user_file,
		datatime
	})
if(addDbData){
	res.redirect('/admin/admin-management?success=true')
}
	
} catch (error) {
	console.error('Error:', error);
	next(error)
}

}

export const adminAddEmployesController = async (req: Request, res: Response, next: NextFunction) =>{

	try {
	
	const file = req.files?.user_file as any;
	if (!file) {
			return res.status(400).json({ error: 'No file uploaded.' });
	}

	const uploadPath = `./public/uploads/employes/${file.name}`;

	await file.mv(uploadPath);

	const uzbekistanTimezone = 'Asia/Tashkent';

	const nowInUzbekistan = moment.tz(uzbekistanTimezone);

	const year = nowInUzbekistan.year();

	const month = nowInUzbekistan.format('MM'); 

	const day = nowInUzbekistan.format('DD');

	const datatime:string = `${day}.${month}.${year}`

	interface UserReqBody {
		userfullname: string,
		userposition: string
	}


	const {userfullname, userposition} = req.body as unknown as UserReqBody

	const user_file:string = `${file.name}`;

	const addDbData = await Employs.create({
		userfullname,
		userposition,
		user_file,
		datatime
	})
if(addDbData){
	res.redirect('/admin/admin-employes?success=true')
}
	
} catch (error) {
	console.error('Error:', error);
	next(error)
}

}


export const AdminAddCompanyDataController = async(req: Request, res:Response , next: NextFunction)=>{


	try {

		interface RequestBody {
			company_data: string, 
			company_commitment: string
		}
		const uzbekistanTimezone = 'Asia/Tashkent';

		const nowInUzbekistan = moment.tz(uzbekistanTimezone);

		const year = nowInUzbekistan.year();

		const month = nowInUzbekistan.format('MM'); 

		const day = nowInUzbekistan.format('DD');

		const datatime:string = `${day}.${month}.${year}`

		const  {company_data, company_commitment} = req.body as unknown as RequestBody

		const updateData = await Company.updateOne({_id: process.env.ABOUT_ID}, {
			company_data,
			company_commitment,
			datatime
		})

		if(updateData){
			res.redirect('/admin/admin-company?success=true')
		}

	} catch (error) {
		console.log('Error', error)
		next(error)
	}



}

export const adminAddInternationalController = async (req: Request, res: Response, next: NextFunction) =>{

	try {
	
	const file = req.files?.news_file as any;
	if (!file) {
			return res.status(400).json({ error: 'No file uploaded.' });
	}

	const uploadPath = `./public/uploads/international/${file.name}`;

	await file.mv(uploadPath);

	const uzbekistanTimezone = 'Asia/Tashkent';

	const nowInUzbekistan = moment.tz(uzbekistanTimezone);

	const year = nowInUzbekistan.year();

	const month = nowInUzbekistan.format('MM'); 

	const day = nowInUzbekistan.format('DD');

	const datatime = `${day}.${month}.${year}`

	interface RequestBody{
		news_title: string,
		news_data: string,
	}

	const {news_title, news_data} = req.body as RequestBody 

	const news_file = `${file.name}`;

	const addDbData = await International.create({
		news_title,
		news_data,
		news_file,
		datatime
	})
if(addDbData){
	res.redirect('/admin/admin-international?success=true')
}
	
} catch (error) {
	console.error('Error:', error);
	next(error)
}

}


export const adminAddCooparationController = async (req: Request, res: Response, next: NextFunction) =>{

	try {
	
	const file = req.files?.news_file as any;
	if (!file) {
			return res.status(400).json({ error: 'No file uploaded.' });
	}

	const uploadPath = `./public/uploads/cooparation/${file.name}`;

	await file.mv(uploadPath);

	const uzbekistanTimezone = 'Asia/Tashkent';

	const nowInUzbekistan = moment.tz(uzbekistanTimezone);

	const year = nowInUzbekistan.year();

	const month = nowInUzbekistan.format('MM'); 

	const day = nowInUzbekistan.format('DD');

	const datatime = `${day}.${month}.${year}`

	interface RequestBody{
		news_title: string,
		news_data: string,
	}

	const {news_title, news_data} = req.body as RequestBody 

	const news_file = `${file.name}`;

	const addDbData = await Cooparition.create({
		news_title,
		news_data,
		news_file,
		datatime
	})
if(addDbData){
	res.redirect('/admin/admin-cooparation?success=true')
}
	
} catch (error) {
	console.error('Error:', error);
	next(error)
}

}


export const adminAddMediaVideoController = async (req: Request, res: Response, next: NextFunction) =>{

	try {
	
	const uzbekistanTimezone = 'Asia/Tashkent';

	const nowInUzbekistan = moment.tz(uzbekistanTimezone);

	const year = nowInUzbekistan.year();

	const month = nowInUzbekistan.format('MM'); 

	const day = nowInUzbekistan.format('DD');

	const datatime = `${day}.${month}.${year}`

	interface RequestBody{
		news_title: string,
		news_data: string,
		news_link: string
	}

	const {news_title, news_data, news_link} = req.body as RequestBody 

	const addDbData = await MediaVideo.create({
		news_title,
		news_data,
		news_link,
		datatime
	})
if(addDbData){
	res.redirect('/admin/admin-media-video?success=true')
}
	
} catch (error) {
	console.error('Error:', error);
	next(error)
}

}

export const adminAddMediaPhotoController = async (req: Request, res: Response, next: NextFunction) =>{

	try {
	
	const file = req.files?.news_file as any;
	if (!file) {
			return res.status(400).json({ error: 'No file uploaded.' });
	}

	const uploadPath = `./public/uploads/mediatika/${file.name}`;

	await file.mv(uploadPath);

	const uzbekistanTimezone = 'Asia/Tashkent';

	const nowInUzbekistan = moment.tz(uzbekistanTimezone);

	const year = nowInUzbekistan.year();

	const month = nowInUzbekistan.format('MM'); 

	const day = nowInUzbekistan.format('DD');

	const datatime = `${day}.${month}.${year}`

	interface RequestBody{
		news_title: string,
		news_data: string,
	}

	const {news_title, news_data} = req.body as RequestBody 

	const news_file = `${file.name}`;

	const addDbData = await MediaPhoto.create({
		news_title,
		news_data,
		news_file,
		datatime
	})
if(addDbData){
	res.redirect('/admin/admin-media-photo?success=true')
}
	
} catch (error) {
	console.error('Error:', error);
	next(error)
}

}


export const adminAddEventsController = async (req: Request, res: Response, next: NextFunction) =>{

	try {
	
	const file = req.files?.events_file as any;
	if (!file) {
			return res.status(400).json({ error: 'No file uploaded.' });
	}

	const uploadPath = `./public/uploads/events/${file.name}`;

	await file.mv(uploadPath);

	const uzbekistanTimezone = 'Asia/Tashkent';

	const nowInUzbekistan = moment.tz(uzbekistanTimezone);

	const year = nowInUzbekistan.year();

	const month = nowInUzbekistan.format('MM'); 

	const day = nowInUzbekistan.format('DD');

	const datatime = `${day}.${month}.${year}`

	const {events_title, events_data, events_starttime, events_endtime} = req.body

	const events_file = `${file.name}`;

	const addDbData = await Events.create({
		events_name: events_title,
		events_data,
		events_starttime,
		events_endtime,
		events_file,
		datatime
	})
if(addDbData){
	res.redirect('/admin/admin-media-events?success=true')
}
	
} catch (error) {
	console.error('Error:', error);
	next(error)
}

}

export const adminAddDirectionsController = async (req: Request, res: Response, next: NextFunction) =>{

	try {
	
	const uzbekistanTimezone = 'Asia/Tashkent';

	const nowInUzbekistan = moment.tz(uzbekistanTimezone);

	const year = nowInUzbekistan.year();

	const month = nowInUzbekistan.format('MM'); 

	const day = nowInUzbekistan.format('DD');

	const datatime = `${day}.${month}.${year}`

	const {directions_title, directions_data} = req.body


	const addDbData = await Directions.create({
		directions_name: directions_title,
		directions_data,
		datatime
	})
if(addDbData){
	res.redirect('/admin/admin-directions?success=true')
}
	
} catch (error) {
	console.error('Error:', error);
	next(error)
}

}