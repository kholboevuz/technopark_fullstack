import { NextFunction, Request, Response } from 'express'
import { Company } from '../models/company.models'
import { Directions } from '../models/directions.models'
import { Employs } from '../models/employes.modeles'
import { International } from '../models/international.models'
import { Management } from '../models/management.models'
import { News } from '../models/news.models'
import { Slider } from '../models/slider.models'

export const homePageController = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const sliderData = await Slider.find().sort({ createdAt: -1 }).lean()
		const directions = await Directions.find().sort({ createdAt: -1 }).lean()
		const newsdata = await News.find().sort({ createdAt: -1 }).lean()
		res.render('home', {
			title: 'Sirdaryo yoshlar texnoparki',
			admin: false,
			sliderData,
			directions,
			newsdata,
		})
	} catch (error) {
		next(error)
	}
}

export const newsPageController = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		interface RequestBody {
			id: string
		}
		const { id } = req.query as unknown as RequestBody

		const newsData = await News.findOne({ _id: id }).lean()

		res.render('news', {
			title: 'Sirdaryo yoshlar texnoparki',
			admin: false,
			newsData,
		})
	} catch (error) {
		next()
	}
}

export const aboutPageController = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const aboutData = await Company.findOne().lean()
		const employeData = await Employs.find().lean()
		const managemntData = await Management.find().lean()
		res.render('about', {
			title: 'Sirdaryo yoshlar texnoparki',
			admin: false,
			aboutData,
			employeData,
			managemntData,
		})
	} catch (error) {
		next(error)
	}
}

export const internationalPageController = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const internationalData = await International.find()
			.sort({ createdAt: -1 })
			.lean()
		res.render('international', {
			title: 'Sirdaryo yoshlar texnoparki',
			admin: false,
			internationalData,
		})
	} catch (error) {
		next(error)
	}
}

export const internationalPostPageController = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	interface RequestBody {
		_id: string
	}
	const { _id } = req.query as unknown as RequestBody
	const data = await International.findOne({ _id }).lean()
	res.render('international-post', {
		title: 'Sirdaryo yoshlar texnoparki',
		admin: false,
		data,
	})
}

export const directPostPageController = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const title = req.query.title
	if (!title) {
		res.redirect('/')
	} else {
		const directData = await Directions.findOne({ directions_name: title })
		const directName = directData?.directions_name
		const directDatas = directData?.directions_data
		res.render('direct-post', {
			title: 'Sirdaryo yoshlar texnoparki',
			admin: false,
			directName,
			directDatas,
		})
	}
}
