import { Router } from 'express'

import { SignUp, SignIn, SignOut } from '../controllers'
import { AuthGuard } from '../guards'

const router = new Router()

router.post('/sign-up', SignUp)
router.post('/sign-in', SignIn)
router.patch('/sign-out', AuthGuard, SignOut)

export default router
