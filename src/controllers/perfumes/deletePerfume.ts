import { PerfumeModel } from '@models'
import { findPerfumeById } from '@services'
import { NextFunction, Request, Response } from 'express'

export const deletePerfume = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { perfumeId } = req.params

    const perfumeById = await findPerfumeById(perfumeId)
    const perfume = await perfumeById.destroy()
    console.log(perfume)
    res.status(200).json({ data: perfume, message: 'delete perfume success!' })
  } catch (error) {
    next(error)
  }
}
