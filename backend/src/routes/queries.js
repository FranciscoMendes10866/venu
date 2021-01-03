import { Router } from 'express'

import { QueryQuestion, QueryQuestions, QueryThreads } from '../controllers'
import { AuthGuard } from '../guards'

const router = new Router()

router.get('/threads', AuthGuard, QueryThreads)
router.get('/question/:id', AuthGuard, QueryQuestion)
router.get('/questions/:id', AuthGuard, QueryQuestions)

export default router
