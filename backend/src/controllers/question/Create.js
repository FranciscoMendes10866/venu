import prisma from '../../utils/PrismaClient'

const CreateQuestion = async (req, res) => {
    const { title, content } = req.body
    const { id } = req.params
    const question = await prisma.question.create({
        data: {
            title,
            content,
            User: { connect: { id: req.userId } },
            Thread: { connect: { id } }
        }
    })
    return res.json({
        success: true,
        question
    })
}


export default CreateQuestion
