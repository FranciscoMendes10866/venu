import { hash } from 'bcrypt'
import { sign } from 'jsonwebtoken'

import prisma from '../../utils/PrismaClient'
import { SendEmailService } from '../../services'

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
            email,
            username,
            password: hashed
        }
    })
    const input = { email, username, password }
    const sendEmail = await SendEmailService(input)
    const token = sign({ id: create.id }, 'EL8HTtQILyj1NAk')
    if (!sendEmail) {
        return res.json({
            success: true,
            info: false,
            user: {
                token,
                username: create.username,
                id: create.id
            }
        })
    }
    return res.json({
        success: true,
        info: true,
        user: {
            token,
            username: create.username,
            id: create.id
        }
    })
}


export default SignUp
