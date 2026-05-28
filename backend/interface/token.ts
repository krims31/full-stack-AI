import jwt from 'jsonwebtoken'

export interface myToken extends jwt.JwtPayload {
	id: number
}