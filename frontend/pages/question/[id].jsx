import Head from 'next/head'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import PuffLoader from 'react-spinners/PuffLoader'

import { Navbar, Description, CommentList } from '../../components'
import { useStore } from '../../store'
import { QueryQuestion } from '../../handlers'

const Question = () => {
    const router = useRouter()
    const { id } = router.query
    const stateToken = useStore(state => state.token)
    const {
        data: response,
        isLoading: loading,
        isError: error,
        refetch
    } = useQuery(['question', { token: stateToken, questionId: id }], QueryQuestion)
    return (
        <>
            <Head>
                <title>Single Question | VENU</title>
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
                                {loading || error ? (
                                    <PuffLoader color="#fff" size={150} />
                                ) : (
                                        <>
                                            <Description question={response.data.question} refetchQuestion={refetch} />
                                            <div className="p-4">
                                                {response.data.question.Comment.map((comment) => {
                                                    return <CommentList
                                                        comment={comment}
                                                        questionTitle={response.data.question.title}
                                                        refetchQuestion={refetch}
                                                    />
                                                })}
                                            </div>
                                        </>
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Question
