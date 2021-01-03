import { Router } from 'express'

import { CreateThread, DeleteThread, FindThreads } from '../controllers'
import FindThreads from '../controllers/thread/Find'
import { AuthGuard } from '../guards'

const router = new Router()

router.post('/', AuthGuard, CreateThread)
router.get('/', AuthGuard, FindThreads)

export default router
