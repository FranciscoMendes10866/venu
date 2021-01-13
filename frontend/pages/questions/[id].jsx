import Head from 'next/head'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import { Navbar, QuestionsBox, CQuestionModal } from '../../components'
import { useStore } from '../../store'
import { QueryQuestions } from '../../handlers'

const Questions = () => {
    const router = useRouter()
    const { id } = router.query
    const stateToken = useStore(state => state.token)
    const {
        data: response,
        isLoading: loading,
        isError: error
    } = useQuery(['questions', { token: stateToken, threadId: id }], QueryQuestions)
    if (loading) return <p>Loading</p>
    if (error) return <p>Error</p>
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
                                <CQuestionModal threadId={id} />
                                {response.data.questions.Question.map(question => {
                                    return <QuestionsBox
                                        question={question}
                                        threadName={response.data.questions.name}
                                    />
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
