import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export const authMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const authHeader = req.headers.authorization
	if (!authHeader) {
		return res.status(401).json({ message: 'No token' })
	}

	try {
		const token = authHeader.split(' ')[1]

		const decoded = jwt.verify(token, 'secret')

		req.user = decoded

		next()
	} catch {
		return res.status(401).json({ message: 'Invalid token' })
	}
}
