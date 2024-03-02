import { PerfumeModel } from '@models'
import { queryPerfume } from '@services'
import { SQLPerfumeQuery } from '@types'
import { NextFunction, Request, Response } from 'express'
import { FindOptions } from 'sequelize'

export const getPerfumes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log('errer')
    const query = queryPerfume(req.query)
    const perfumes = await PerfumeModel.findAndCountAll(
      query as unknown as FindOptions<SQLPerfumeQuery>
    )

    const modifiedData = {
      count: perfumes.count,
      perfumeList: perfumes.rows,
    }

    res.status(200).json({ data: modifiedData, message: 'get all perfumes' })
  } catch (error) {
    next(error)
  }
}
