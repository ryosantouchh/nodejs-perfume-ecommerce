import { SortOrderEnum } from '@constants'
import { perfumeReqQuerySchema } from '@schemas'
import { SQLPerfumeQuery, ReqQueryPerfume, PerfumeQuery } from '@types'
import { isEmpty } from 'lodash'
import { Op } from 'sequelize'

export const queryPerfume = (query: ReqQueryPerfume) => {
  const validatedReqQuery = perfumeReqQuerySchema.parse(query)

  // No query
  // if (isEmpty(validatedReqQuery)) {
  //   return
  // }

  const queryObj: SQLPerfumeQuery = {
    where: {} as PerfumeQuery,
    order: [['id', SortOrderEnum.DESC]],
    offset: 0,
  }

  // Option Perfume Note
  if (validatedReqQuery.perfumeNote) {
    queryObj.where.perfume_note = validatedReqQuery.perfumeNote
  }

  // Search
  if (validatedReqQuery.search) {
    queryObj.where.perfume_name = { [Op.like]: `%${validatedReqQuery.search}%` }
  }

  // Pricing
  if (validatedReqQuery.priceMin && validatedReqQuery.priceMax) {
    queryObj.where.price = {
      [Op.between]: [validatedReqQuery.priceMin, validatedReqQuery.priceMax],
    }
  } else if (validatedReqQuery.priceMin) {
    queryObj.where.price = { [Op.gte]: validatedReqQuery.priceMin }
  } else if (validatedReqQuery.priceMax) {
    queryObj.where.price = { [Op.lte]: validatedReqQuery.priceMax }
  }

  // Sorting
  if (validatedReqQuery.sortBy) {
    queryObj.order = [
      [
        validatedReqQuery.sortBy || 'id',
        validatedReqQuery.sortOrder || SortOrderEnum.DESC,
      ],
    ]
  }

  // Pagination
  if (validatedReqQuery.page && validatedReqQuery.itemPerPage) {
    const page = parseInt(validatedReqQuery.page)
    const itemPerPage = parseInt(validatedReqQuery.itemPerPage)
    const offset = (page - 1) * itemPerPage
    queryObj.offset = offset
    queryObj.limit = itemPerPage
  }

  return queryObj
}
