import { z } from 'zod'
import {
  perfumeQuerySchema,
  perfumeReqQuerySchema,
  perfumeSchema,
} from '@schemas'

export type Perfume = z.infer<typeof perfumeSchema>
export type ReqQueryPerfume = z.infer<typeof perfumeReqQuerySchema>

export type PerfumeQuery = z.infer<typeof perfumeQuerySchema>

export type SQLPerfumeQuery = {
  where: PerfumeQuery
  order: [string[]]
  offset: number
  limit?: number
}
