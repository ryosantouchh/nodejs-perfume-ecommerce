import { z } from 'zod'
import { SortOrderEnum } from '@constants'

export const sortOrderEnumSchema = z.enum([
  SortOrderEnum.ASC,
  SortOrderEnum.DESC,
])
