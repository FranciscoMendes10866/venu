import Head from 'next/head'
import { Navbar, ThreadBox } from '../components'

const Threads = () => {
    const data = {
        "success": true,
        "threads": [
            {
                "id": "7c5d0784-fbff-4e80-aff8-4bf8002f25f1",
                "name": "Anime"
            }
        ]
    }
    const count = data.threads.length
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
                                {data.threads.map(thread => {
                                    return <ThreadBox thread={thread} count={count} />
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
