import type { Router } from 'express'
import express from 'express'
import perfumeRoute from './perfume.route'

const router: Router = express.Router()

router.use('/perfume', perfumeRoute)

export default router
