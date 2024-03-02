import { PerfumeNoteEnum } from '@constants'
import { z } from 'zod'
import { sortOrderEnumSchema } from './query'

export const perfumeSchema = z.object({
  perfumeId: z.string(),
  perfumeName: z.string(),
  perfumeNote: z.enum([
    PerfumeNoteEnum.Woody,
    PerfumeNoteEnum.Floral,
    PerfumeNoteEnum.Citrus,
    PerfumeNoteEnum.Aromatic,
  ]),
  bottleSize: z.number(),
  price: z.number(),
  qty: z.number(),
})

export const perfumeNoteEnumSchema = z.enum([
  PerfumeNoteEnum.Aromatic,
  PerfumeNoteEnum.Citrus,
  PerfumeNoteEnum.Floral,
  PerfumeNoteEnum.Woody,
])

export const perfumePageSchema = z.object({
  page: z.string().optional(),
  itemPerPage: z.string().optional(),
})

export const perfumeReqQuerySchema = z
  .object({
    search: z.string().optional(),
    perfumeNote: perfumeNoteEnumSchema.optional(),
    priceMin: z.string().optional(),
    priceMax: z.string().optional(),
    sortBy: z.string().optional(),
    sortOrder: sortOrderEnumSchema.optional(),
  })
  .merge(perfumePageSchema)

export const perfumeSearchListSchema = z.object({
  perfume_name: z.record(z.string()).optional(),
  perfume_note: perfumeNoteEnumSchema.optional(),
  price: z.record(z.string()).optional(),
})

export const perfumeQuerySchema =
  perfumeSearchListSchema.merge(perfumePageSchema)

// ##### Schema Validator #####
export const createPerfumeReqSchema = z.object({
  body: perfumeSchema.omit({ perfumeId: true }),
})

export const updatePerfumeReqSchema = z.object({
  params: perfumeSchema.partial().pick({ perfumeId: true }),
  body: perfumeSchema.partial().omit({ perfumeId: true }),
})

export const getPerfumeReqSchema = z.object({
  body: z.record(z.string()).optional(),
  query: perfumeReqQuerySchema,
  params: z.record(z.string()).optional(),
})
