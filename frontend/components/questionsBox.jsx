import Link from 'next/link'
import { GiCookie } from 'react-icons/gi'

const QuestionsBox = ({ question, threadName }) => {
    return (
        <Link href={'/question/' + question.id}>
            <div className="box">
                <article className="media  is-align-items-center">
                    <div className="media-left mt-1" style={{ fontSize: 24, color: '#f03a5f' }}>
                        <GiCookie />
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p className="is-size-5 has-text-weight-medium">{question.title}</p>
                        </div>
                    </div>
                    <div className="media-right">
                        <span class="tag is-info is-light p-4">{threadName}</span>
                    </div>
                </article>
            </div>
        </Link>

    )
}

export default QuestionsBox
