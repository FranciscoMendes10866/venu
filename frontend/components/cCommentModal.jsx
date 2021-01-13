import { useState } from 'react'
import { useMutation } from 'react-query'

import { useStore } from '../store'
import { CreateComment } from '../handlers'

const CCommentModal = ({ question, questionTitle, refetchQuestion }) => {
    const stateToken = useStore(state => state.token)
    const [show, setShow] = useState(false)
    const [form, setForm] = useState({
        message: ''
    })
    const { mutate } = useMutation(CreateComment, {
        onSuccess: () => {
            refetchQuestion()
        }
    })
    const handleOnSubmit = (e) => {
        e.preventDefault()
        mutate({
            questionId: question.id,
            token: stateToken,
            body: form
        })
        setShow(!show)
    }
    const handleOnChange = (e) => {
        e.preventDefault()
        setForm({ ...form, [e.target.id]: e.target.value })
    }
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
                        <textarea
                            class="textarea"
                            placeholder="Write your comment here."
                            value={form.message}
                            id="message"
                            onChange={handleOnChange}
                        ></textarea>
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-info" onClick={handleOnSubmit}>Comment</button>
                        <button className="button" onClick={handleShow}>Cancel</button>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default CCommentModal
