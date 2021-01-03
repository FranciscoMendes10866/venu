import prisma from '../../utils/PrismaClient'

const UpdateQuestion = async (req, res) => {
    const { id } = req.params
    await prisma.question.update({
        where: {
            id
        },
        data: {
            ...req.body
        }
    })
    return res.json({
        success: true
    })
}


export default UpdateQuestion
