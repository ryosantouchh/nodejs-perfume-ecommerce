import type { NextFunction, Request, Response } from 'express'
import { StatusCodeEnum, TokenEnum, UserRole } from '@types'

import jwt from 'jsonwebtoken'
import { isEmpty } from 'lodash'

import { generateToken } from '@services'
import { ErrorGenerator } from '@helpers'
import { JWT_REFRESH_SECRET_KEY } from '@constants'

type SignTokenParams = {
  userId: string
  username: string
  email: string
  userRole: UserRole
}

export const refreshToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { refreshToken } = req.body

    if (!refreshToken) {
      throw ErrorGenerator({
        statusCode: StatusCodeEnum.UNAUTHORIZED,
        message: 'Refresh token not provided',
      })
    }

    const payload = jwt.verify(
      refreshToken,
      JWT_REFRESH_SECRET_KEY
    ) as SignTokenParams

    if (!isEmpty(payload)) {
      const user = {
        userId: payload.userId,
        username: payload.username,
        email: payload.email,
        userRole: payload.userRole,
      }

      const accessToken = generateToken(user, TokenEnum.Access)

      res.status(StatusCodeEnum.OK).json({
        body: {
          accessToken,
        },
        message: 'Regenerate new access token!',
      })
    } else {
      throw ErrorGenerator({
        statusCode: StatusCodeEnum.FORBIDDEN,
        message: 'Invalid refresh token!',
      })
    }
  } catch (error) {
    throw ErrorGenerator({
      statusCode: StatusCodeEnum.UNAUTHORIZED,
      message: 'Refresh token expired!',
    })
  }
}
