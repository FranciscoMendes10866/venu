import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import compression from 'compression'

import {
    AuthRouter,
    CommentRouter,
    QueryRouter,
    QuestionRouter,
    ThreadRouter
} from './routes'

const app = express()

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(compression())
app.use('/api/auth', AuthRouter)
app.use('/api/threads', ThreadRouter)
app.use('/api/questions', QuestionRouter)
app.use('/api/comments', CommentRouter)
app.use('/api/query', QueryRouter)

export default app
