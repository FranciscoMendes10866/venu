import prisma from '../../utils/PrismaClient'

const DeleteQuestion = async (req, res) => {
    const { id } = req.params
    await prisma.question.delete({
        where: {
            id
        }
    })
    return res.json({
        success: true
    })
}


export default DeleteQuestion
