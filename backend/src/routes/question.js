import { Router } from 'express'

import { CreateQuestion, DeleteQuestion, UpdateQuestion } from '../controllers'
import { AuthGuard } from '../guards'

const router = new Router()

router.post('/:id', AuthGuard, CreateQuestion)
router.delete('/:id', AuthGuard, DeleteQuestion)
router.put('/:id', AuthGuard, UpdateQuestion)

export default router
