import { NextFunction, Request, Response } from 'express'
import { AnyZodObject, ZodError } from 'zod'

const schemaValidator =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      })

      next()
    } catch (err) {
      if (err instanceof ZodError) {
        return res.status(400).json({
          message: 'Validation Error -- Bad Request',
          errors: err.errors,
        })
      }

      return res.status(500).json({ message: 'Internal server error' })
    }
  }

export default schemaValidator
