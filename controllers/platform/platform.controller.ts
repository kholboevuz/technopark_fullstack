import { NextFunction, Request, Response } from 'express'
export const PlatFormController = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		res.render('platform_login', {
			title: 'Sirdaryo yoshlar texnoparki -',
			csrfToken: req.csrfToken(),
			error: true,
			platform: true,
		})
	} catch (error) {
		next(error)
	}
}
