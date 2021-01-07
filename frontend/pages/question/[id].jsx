import { useRouter } from 'next/router'
import { Navbar } from '../../components'

const Question = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <>
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
                <div className="hero-foot has-text-centered py-2 has-text-white">
                    <p>Made with ❤️ by Francisco Mendes.</p>
                </div>
            </section>
        </>
    )
}

export default Question
