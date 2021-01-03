import { Router } from 'express'

const router = new Router()

router.get('/', (req, res) => {
    return res.json({ msg: 'Router working 🌈' })
})

export default router
