import prisma from '../../utils/PrismaClient'

const QueryThreads = async (req, res) => {
    const threads = await prisma.thread.findMany()
    return res.json({
        success: true,
        threads
    })
}


export default QueryThreads
