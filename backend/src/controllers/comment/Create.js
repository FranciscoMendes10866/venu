import prisma from '../../utils/PrismaClient'

const CreateComment = async (req, res) => {
    const { id } = req.params
    const { message } = req.body
    const comment = await prisma.comment.create({
        data: {
            message,
            User: { connect: { id: req.userId } },
            Question: { connect: { id } }
        }
    })
    return res.json({
        success: true,
        comment
    })
}

export default CreateComment
