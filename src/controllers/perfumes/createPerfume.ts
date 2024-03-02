// import

import { PerfumeModel } from '@models'
import { NextFunction, Request, Response } from 'express'

export const createPerfume = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { perfumeName, perfumeNote, bottleSize, price, qty } = req.body

    const perfume = await PerfumeModel.create({
      perfumeName,
      perfumeNote,
      bottleSize,
      price,
      qty,
    })

    res
      .status(201)
      .json({ data: perfume.dataValues, message: 'perfume created' })
  } catch (error) {
    next(error)
  }
}
