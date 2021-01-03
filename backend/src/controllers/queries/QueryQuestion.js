import prisma from '../../utils/PrismaClient'

const QueryQuestion = async (req, res) => {
    const { id } = req.params
    const find = await prisma.question.findFirst({
        where: {
            id
        },
        select: {
            id: true,
            title: true,
            content: true,
            Comment: {
                select: {
                    id: true,
                    message: true,
                    createdAt: true
                }
            }
        }
    })
    return res.json({
        success: true,
        question: find
    })
}


export default QueryQuestion
