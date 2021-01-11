import Head from 'next/head'
import { useRouter } from 'next/router'
import { Navbar, Description, CommentList } from '../../components'

const Question = () => {
    const data = {
        "success": true,
        "question": {
            "id": "c11d04ef-51e0-4a46-b21b-4829db6fd5e3",
            "title": "Bleach: Sennen Kessen-hen (S2)",
            "content": "Anime adaptation of the Thousand-Year Blood War arc.",
            "User": {
                "id": "a233314c-d9f2-4ee6-9a41-61bb76a75b07",
                "username": "franciscomendes97"
            },
            "Comment": [
                {
                    "id": "49efc5bd-ff13-4324-a7ef-86a8a679a153",
                    "message": "I hope the animation will be fluent and beautiful.",
                    "createdAt": "2021-01-03T18:29:00.241Z",
                    "user_id": "a233314c-d9f2-4ee6-9a41-61bb76a75b07"
                }
            ]
        }
    }
    const router = useRouter()
    const { id } = router.query
    return (
        <>
            <Head>
                <title>{data.question.title} | VENU</title>
            </Head>
            <section
                className="hero is-fullheight"
                style={{
                    backgroundImage: 'url("https://bit.ly/399oEbc")',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover'
                }}
            >
                <Navbar />
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-justify-content-center">
                            <div className="column is-10">
                                <Description question={data.question} />
                                <div className="p-4">
                                    {data.question.Comment.map((comment) => {
                                        return <CommentList comment={comment} />
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Question
