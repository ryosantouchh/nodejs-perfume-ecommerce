import { findPerfumeById } from '@services'
import { NextFunction, Request, Response } from 'express'

export const updatePerfumeById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { perfumeId } = req.params
    const updatedData = req.body

    const perfumeById = await findPerfumeById(perfumeId)
    await perfumeById.update({ ...updatedData })

    res.status(200).json({ data: perfumeById, message: 'get all perfumes!' })
  } catch (error) {
    next(error)
  }
}
