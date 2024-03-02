import { findPerfumeById } from '@services'
import { NextFunction, Request, Response } from 'express'

export const getPerfumeById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { perfumeId } = req.params
    const perfumeById = await findPerfumeById(perfumeId)

    res.status(200).json({ data: perfumeById, message: 'get all perfumes' })
  } catch (error) {
    next(error)
  }
}
