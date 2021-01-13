import Head from 'next/head'
import { useQuery } from 'react-query'

import { Navbar, ThreadBox } from '../components'
import { useStore } from '../store'
import { QueryThreads } from '../handlers'

const Threads = () => {
    const stateToken = useStore(state => state.token)
    const { data: response, isLoading: loading, isError: error } = useQuery(['threads', { token: stateToken }], QueryThreads)
    if (loading) return <p>Loading</p>
    if (error) return <p>Error</p>
    return (
        <>
            <Head>
                <title>Threads | VENU</title>
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
                                {response.data.threads.map(thread => {
                                    return <ThreadBox
                                        key={thread.id}
                                        thread={thread}
                                        count={response.data.threads.length}
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

export default Threads
