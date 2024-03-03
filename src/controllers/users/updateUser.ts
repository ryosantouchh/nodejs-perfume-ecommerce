import { ErrorGenerator } from '@helpers'
import { findUserById } from '@services'
import { StatusCodeEnum } from '@types'
import type { NextFunction, Request, Response } from 'express'

type UpdateUserReq = Request & {
  user?: Record<string, unknown>
}

export const updateUser = async (
  req: UpdateUserReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.user as Record<string, unknown>
    const updatedData = req.body

    const user = await findUserById(userId as string)

    if (!user) {
      throw ErrorGenerator({
        statusCode: StatusCodeEnum.NOT_FOUND,
        message: 'user not found!',
      })
    }

    const updatedUser = await user.update({ ...updatedData })

    res
      .status(200)
      .json({ data: updatedUser.dataValues, message: 'update user success!' })
  } catch (error) {}
}
