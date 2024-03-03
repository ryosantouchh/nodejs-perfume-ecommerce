import type { NextFunction, Request, Response } from 'express'
import { verifyToken } from '@services'

type AuthenticationReq = Request & {
  user?: any
}

const authentication = async (
  req: AuthenticationReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers['authorization']

    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.split(' ')[1]
      const payload = verifyToken(token)

      if (payload) {
        req.user = payload
      }
    }

    next()
  } catch (error) {
    next(error)
  }
}

export default authentication
