import type { FindOptions } from 'sequelize'
import { UserModel } from '@models'

export const findUserByUsername = async (username: string) => {
  return await UserModel.findOne({ username } as FindOptions<string>)
}
