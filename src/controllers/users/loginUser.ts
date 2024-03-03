import type { NextFunction, Request, Response } from 'express'
import { StatusCodeEnum } from '@types'

import bcrypt from 'bcrypt'
import { ErrorGenerator } from '@helpers'
import { findUserByUsername, signToken } from '@services'

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, password } = req.body

    const user = await findUserByUsername(username)

    if (!user) {
      throw ErrorGenerator({
        message: 'username or password are wrong',
        statusCode: StatusCodeEnum.BAD_REQUEST,
      })
    }

    const hashPassword = user.dataValues.password
    const checkPassword = bcrypt.compareSync(password, hashPassword)

    if (!checkPassword) {
      throw ErrorGenerator({
        message: 'username or password are wrong',
        statusCode: StatusCodeEnum.BAD_REQUEST,
      })
    }

    const { user_role: userRole, email, id: userId } = user.dataValues
    const userDataValues = {
      userId,
      username,
      email,
      userRole,
    }

    const { accessToken, refreshToken } = signToken(userDataValues)

    res
      .status(200)
      .json({ accessToken, refreshToken, message: 'login success' })
  } catch (error) {
    next(error)
  }
}
