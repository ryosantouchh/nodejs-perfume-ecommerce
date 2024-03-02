import { ErrorGenerator } from '@helpers'
import { PerfumeModel } from '@models'
import { StatusCodeEnum } from '@types'

export const findPerfumeById = async (perfumeId: string) => {
  const perfume = await PerfumeModel.findByPk(perfumeId)

  if (!perfume) {
    throw ErrorGenerator({
      message: 'perfume not found',
      statusCode: StatusCodeEnum.NOT_FOUND,
    })
  }

  return perfume
}
