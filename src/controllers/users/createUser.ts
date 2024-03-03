import type { NextFunction, Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { UserModel } from '@models'
import { UserRole } from '@types'

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { password } = req.body

    const saltRounds = Number(process.env.BCRYPT_SALT_ROUND)
    const salt = bcrypt.genSaltSync(saltRounds)
    const hashPassword = bcrypt.hashSync(password, salt)

    const userRole = { userRole: UserRole.Customer }
    const newUser = { ...req.body, ...userRole, password: hashPassword }

    await UserModel.create(newUser)

    res.status(201).json({ message: 'user created' })
  } catch (error) {
    next(error)
  }
}
