import prisma from '../../utils/PrismaClient'

const DeleteQuestion = async (req, res) => {
    const { id } = req.params
    const question = await prisma.question.delete({
        where: {
            id
        }
    })
    return res.json({
        success: true,
        question
    })
}


export default DeleteQuestion
