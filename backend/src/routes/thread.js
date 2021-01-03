import { Router } from 'express'

import { CreateThread, FindThreads } from '../controllers'
import { AuthGuard } from '../guards'

const router = new Router()

router.post('/', AuthGuard, CreateThread)
router.get('/', AuthGuard, FindThreads)

export default router
