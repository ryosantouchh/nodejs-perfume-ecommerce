import type { FindOptions } from 'sequelize'
import { UserModel } from '@models'

export const findUserById = async (userId: string) => {
  return await UserModel.findOne({ id: userId } as FindOptions<string>)
}
