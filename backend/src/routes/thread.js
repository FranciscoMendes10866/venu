import { Router } from 'express'

import { CreateThread } from '../controllers'
import { AuthGuard } from '../guards'

const router = new Router()

router.post('/', AuthGuard, CreateThread)

export default router
