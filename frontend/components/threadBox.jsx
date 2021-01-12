import Link from 'next/link'
import { GiBigEgg } from 'react-icons/gi'

const ThreadBox = ({ thread, count }) => {
    return (
        <Link href={"/questions/" + thread.id}>
            <div className="box">
                <article className="media  is-align-items-center">
                    <div className="media-left mt-1" style={{ fontSize: 24, color: '#f03a5f' }}>
                        <GiBigEgg />
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p className="is-size-5 has-text-weight-medium">{thread.name}</p>
                        </div>
                    </div>
                    <div className="media-right">
                        {count === 1 ? (
                            <span className="tag is-info is-light p-4">{count} question</span>
                        ) : (
                                <span className="tag is-info is-light p-4">{count} questions</span>
                            )}
                    </div>
                </article>
            </div>
        </Link>

    )
}

export default ThreadBox
