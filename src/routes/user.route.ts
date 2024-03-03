import type { Router } from 'express'
import express from 'express'

import {
  updateUserReqSchema,
  userLoginSchema,
  userRegisterSchema,
} from '@schemas'

import { createUser, getUserById, loginUser, updateUser } from '@controllers'
import { authorize, schemaValidator } from '@middlewares'

const router: Router = express.Router()

router.post('/register', schemaValidator(userRegisterSchema), createUser)
router.post('/login', schemaValidator(userLoginSchema), loginUser)
router.delete('/delete')
router.get('/:userId', authorize, getUserById)
router.patch('/:userId', schemaValidator(updateUserReqSchema), updateUser)

export default router
