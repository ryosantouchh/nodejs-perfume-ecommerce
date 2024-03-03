import type { NextFunction, Request, Response } from 'express'
import { ErrorGenerator } from '@helpers'
import { StatusCodeEnum, UserRole } from '@types'

type AuthorizeReq = Request & {
  user?: Record<string, unknown>
}

const authorize = (role: UserRole | undefined) => {
  return (req: AuthorizeReq, _res: Response, next: NextFunction) => {
    try {
      const { user } = req

      if (!user) {
        throw ErrorGenerator({
          statusCode: StatusCodeEnum.UNAUTHORIZED,
          message: 'Token not provided',
        })
      }

      const { userRole } = user

      if (!userRole) {
        throw ErrorGenerator({
          statusCode: StatusCodeEnum.UNAUTHORIZED,
          message: 'Token not provided',
        })
      }

      if (role) {
        if (!role.includes(userRole as string)) {
          throw ErrorGenerator({
            statusCode: StatusCodeEnum.FORBIDDEN,
            message: 'do not have permission',
          })
        }
      }

      next()
    } catch (error) {
      next(error)
    }
  }
}

export default authorize
