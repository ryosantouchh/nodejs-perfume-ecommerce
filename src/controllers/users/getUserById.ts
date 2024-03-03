import type { NextFunction, Request, Response } from 'express'
import { findUserById } from '@services'
import { ErrorGenerator } from '@helpers'
import { StatusCodeEnum } from '@types'

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params
    const userById = await findUserById(userId)

    if (!userById) {
      throw ErrorGenerator({
        statusCode: StatusCodeEnum.NOT_FOUND,
        message: 'user not found!',
      })
    }

    res.status(StatusCodeEnum.OK).json({ body: userById, message: 'get user!' })
  } catch (error) {
    next(error)
  }
}
