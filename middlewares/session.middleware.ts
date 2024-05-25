import { NextFunction, Request, Response } from 'express'
declare module 'express-session' {
	interface SessionData {
			data: any; 
	}
}
export const sessionMiddleware = (req: Request, res: Response, next: NextFunction) => {
	if (!req.session.data) {
		res.redirect('/admin/logout')
	} else {
		next()
	}
}
