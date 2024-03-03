import type { Router } from 'express'
import express from 'express'
import perfumeRoute from './perfume.route'
import userRoute from './user.route'
import { authentication } from '@middlewares'
import { refreshToken } from '@controllers'

const router: Router = express.Router()

router.use('/perfume', authentication, perfumeRoute)
router.use('/user', authentication, userRoute)

router.post('/refresh-token', refreshToken)

export default router
