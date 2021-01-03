import { Router } from 'express'

import { CreateComment, DeleteComment, UpdateComment } from '../controllers'
import { AuthGuard } from '../guards'

const router = new Router()

router.post('/:id', AuthGuard, CreateComment)
router.delete('/:id', AuthGuard, DeleteComment)
router.put('/:id', AuthGuard, UpdateComment)

export default router
