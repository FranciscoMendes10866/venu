import prisma from '../../utils/PrismaClient'

const UpdateComment = async (req, res) => {
    const { id } = req.params
    const comment = await prisma.comment.update({
        where: {
            id
        },
        data: {
            ...req.body
        }
    })
    return res.json({
        success: true,
        comment
    })
}

export default UpdateComment
