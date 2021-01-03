import prisma from '../../utils/PrismaClient'

const SignOut = async (req, res) => {
    const isOnline = await prisma.user.findFirst({
        where: {
            id: req.userId,
            is_online: true
        }
    })
    if (isOnline === null) {
        return res.json({ success: false })
    }
    await prisma.user.update({
        where: {
            id: req.userId
        },
        data: {
            is_online: false
        }
    })
    return res.json({ success: true })
}

export default SignOut
