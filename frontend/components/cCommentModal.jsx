import { useState } from 'react'

const CCommentModal = ({ questionId, questionTitle }) => {
    const [show, setShow] = useState(false)
    const handleShow = (e) => {
        e.preventDefault()
        setShow(!show)
    }
    let active
    if (show) {
        active = 'is-active'
    } else {
        active = ''
    }
    return (
        <>
            <button className="button is-light is-small is-info" onClick={handleShow}>Comment</button>
            <div className={`modal ${active}`}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">
                            Give your opinion on&nbsp;
                            "{questionTitle.length >= 12 ? (
                                questionTitle.substring(0, 12) + "..."
                            ) : questionTitle}"
                        </p>
                        <button className="delete" aria-label="close" onClick={handleShow}></button>
                    </header>
                    <section className="modal-card-body">
                        <textarea class="textarea" placeholder="Write your comment here."></textarea>
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-info">Comment</button>
                        <button className="button" onClick={handleShow}>Cancel</button>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default CCommentModal
