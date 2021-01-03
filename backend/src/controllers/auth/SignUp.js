import { hash } from 'bcrypt'
import { sign } from 'jsonwebtoken'

import prisma from '../../utils/PrismaClient'

const SignUp = async (req, res) => {
    const { email, username, password } = req.body
    const exists = await prisma.user.findFirst({
        where: {
            email
        }
    })
    if (exists !== null) {
        return res.json({ success: false })
    }
    const hashed = await hash(password, 4)
    const create = await prisma.user.create({
        data: {
            email: email,
            username: username,
            password: hashed
        }
    })
    const token = sign({ id: create.id }, 'EL8HTtQILyj1NAk')
    return res.json({
        success: true,
        user: {
            token,
            username: create.username,
            id: create.id
        }
    })
}


export default SignUp
