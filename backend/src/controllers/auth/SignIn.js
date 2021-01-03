import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

import prisma from '../../utils/PrismaClient'

const SignIn = async (req, res) => {
    const { email, password } = req.body
    const exists = await prisma.user.findFirst({
        where: {
            email
        }
    })
    if (exists === null) {
        return res.json({ success: false })
    }
    const val = await compare(password, exists.password)
    if (!val) {
        return res.json({ success: false })
    }
    const token = sign({ id: exists.id }, 'EL8HTtQILyj1NAk')
    await prisma.user.update({
        where: {
            id: exists.id
        },
        data: {
            is_online: true
        }
    })
    return res.json({
        success: true,
        user: {
            token,
            username: exists.username,
            id: exists.id
        }
    })
}

export default SignIn
