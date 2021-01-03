import prisma from '../../utils/PrismaClient'

const CreateThread = async (req, res) => {
    const { name } = req.body
    const exists = await prisma.thread.findFirst({
        where: {
            name
        }
    })
    if (exists) {
        return res.json({ success: false })
    }
    const thread = await prisma.thread.create({
        data: {
            name
        }
    })
    return res.json({
        success: true,
        thread
    })
}


export default CreateThread
