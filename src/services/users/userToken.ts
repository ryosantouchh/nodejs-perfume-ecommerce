import { StatusCodeEnum, TokenEnum, UserRole } from '@types'
import type { Secret } from 'jsonwebtoken'
import jwt from 'jsonwebtoken'
import {
  JWT_ACCESS_SECRET_KEY,
  JWT_REFRESH_SECRET_KEY,
  TOKEN_EXPIRE,
} from '@constants'
import { ErrorGenerator } from '@helpers'

type SignTokenParams = {
  userId: string
  username: string
  email: string
  userRole: UserRole
}

type SignTokenReturn = {
  accessToken: string
  refreshToken: string
}

type JWTParamsObj = {
  secret: Secret
  expiresIn: number
}

export const generateToken = (user: SignTokenParams, tokenType: TokenEnum) => {
  const jwtParams = {} as JWTParamsObj

  if (tokenType === TokenEnum.Access) {
    jwtParams.secret = JWT_ACCESS_SECRET_KEY
    jwtParams.expiresIn = TOKEN_EXPIRE.MIN_15
  } else if (tokenType === TokenEnum.Refresh) {
    jwtParams.secret = JWT_REFRESH_SECRET_KEY
    // jwtParams.expiresIn = TOKEN_EXPIRE.DAY_3
    jwtParams.expiresIn = 30
  }

  return jwt.sign({ ...user }, jwtParams.secret, {
    expiresIn: jwtParams.expiresIn,
  })
}

export const signToken = (user: SignTokenParams): SignTokenReturn => {
  if (!(JWT_ACCESS_SECRET_KEY && JWT_REFRESH_SECRET_KEY)) {
    throw ErrorGenerator({
      statusCode: StatusCodeEnum.INTERNAL_SERVER_ERROR,
      message: 'secret not found',
    })
  }

  const accessToken = generateToken(user, TokenEnum.Access)
  const refreshToken = generateToken(user, TokenEnum.Refresh)

  return { accessToken, refreshToken }
}

export const verifyAccessToken = (accessToken: string): any => {
  if (!accessToken) {
    throw ErrorGenerator({
      statusCode: StatusCodeEnum.UNAUTHORIZED,
      message: 'Access token not provided',
    })
  }

  jwt.verify(accessToken, JWT_ACCESS_SECRET_KEY, (error, decoded) => {
    if (error) {
      throw ErrorGenerator({
        statusCode: StatusCodeEnum.FORBIDDEN,
        message: 'Invalid access token',
      })
    }

    return decoded || null
  })
}

export const verifyRefreshToken = (refreshToken: string) => {
  jwt.verify(refreshToken, JWT_REFRESH_SECRET_KEY, (error, decoded) => {
    if (error) {
      throw ErrorGenerator({
        statusCode: StatusCodeEnum.FORBIDDEN,
        message: 'Invalid refresh token',
      })
    }

    return decoded || null
  })
}

export const verifyToken = (token: string) => {
  try {
    const payload = jwt.verify(token, JWT_ACCESS_SECRET_KEY)

    return payload
  } catch (error) {
    throw ErrorGenerator({
      statusCode: StatusCodeEnum.UNAUTHORIZED,
      message: 'Access token expired!',
    })
  }
}
