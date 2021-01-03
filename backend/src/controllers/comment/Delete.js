import prisma from '../../utils/PrismaClient'

const DeleteComment = async (req, res) => {
    const { id } = req.params
    const comment = await prisma.comment.delete({
        where: {
            id
        }
    })
    return res.json({
        success: true,
        comment
    })
}

export default DeleteComment
