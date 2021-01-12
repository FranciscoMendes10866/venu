import prisma from '../../utils/PrismaClient'

const QueryQuestions = async (req, res) => {
    const { id } = req.params
    const find = await prisma.thread.findFirst({
        where: {
            id
        },
        select: {
            name: true,
            Question: {
                select: {
                    id: true,
                    title: true
                }
            }
        }
    })
    return res.json({
        success: true,
        questions: find
    })
}


export default QueryQuestions
