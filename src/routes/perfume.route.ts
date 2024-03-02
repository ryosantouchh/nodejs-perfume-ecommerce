import type { Router } from 'express'
import express from 'express'
import {
  createPerfumeReqSchema,
  getPerfumeReqSchema,
  updatePerfumeReqSchema,
} from '@schemas'
import { schemaValidator } from '@middlewares'
import {
  createPerfume,
  deletePerfume,
  getPerfumeById,
  getPerfumes,
  updatePerfumeById,
} from '@controllers'

const router: Router = express.Router()

router.get('/', schemaValidator(getPerfumeReqSchema), getPerfumes)
router.get('/:perfumeId', getPerfumeById)

router.post('/', schemaValidator(createPerfumeReqSchema), createPerfume)

router.patch(
  '/:perfumeId',
  schemaValidator(updatePerfumeReqSchema),
  updatePerfumeById
)

router.delete('/:perfumeId', deletePerfume)

export default router
