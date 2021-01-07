import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Navbar } from '../../components'

const Questions = () => {
    const data = {
        "success": true,
        "questions": [
            {
                "id": "c11d04ef-51e0-4a46-b21b-4829db6fd5e3",
                "title": "Bleach: Sennen Kessen-hen (S2)"
            }
        ]
    }
    const router = useRouter()
    const { id } = router.query
    return (
        <>
            <Head>
                <title>Questions | VENU</title>
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
                            <div className="column is-8">
                                {data.questions.map(question => {
                                    return (
                                        <Link href={'/question/' + question.id}>
                                            <div className="card p-4">
                                                <strong>Selected Thread ID:</strong> {id} <br /><br />
                                                <strong>Question Title:</strong> {question.title}
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-foot has-text-centered py-2 has-text-white">
                    <p>Made with 💜 by Francisco Mendes.</p>
                </div>
            </section>
        </>
    )
}

export default Questions
