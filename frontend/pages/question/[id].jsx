import Head from 'next/head'
import { useRouter } from 'next/router'
import { Navbar } from '../../components'

const Question = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <>
            <Head>
                <title>Question | VENU</title>
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
                                <div className="card p-4">
                                    <strong>Question ID:</strong> {id}
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
