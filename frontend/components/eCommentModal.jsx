import { useState } from 'react'
import { useMutation } from 'react-query'

import { useStore } from '../store'
import { UpdateComment } from '../handlers'

const ECommentModal = ({ editSelected, questionTitle, refetchQuestion }) => {
    const stateToken = useStore(state => state.token)
    const [show, setShow] = useState(false)
    const [form, setForm] = useState({
        message: editSelected.message
    })
    const { mutate } = useMutation(UpdateComment, {
        onSuccess: () => {
            refetchQuestion()
        }
    })
    const handleOnSubmit = (e) => {
        e.preventDefault()
        mutate({
            token: stateToken,
            body: form,
            commentId: editSelected.id
        })
        setShow(!show)
    }
    const handleOnChange = (e) => {
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
            <button className="button is-light is-small is-warning ml-3" onClick={handleShow}>Edit</button>
            <div className={`modal ${active}`}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">
                            Edit your comment on&nbsp;
                            "{questionTitle.length >= 12 ? (
                                questionTitle.substring(0, 12) + "..."
                            ) : questionTitle}"
                        </p>
                        <button className="delete" aria-label="close" onClick={handleShow}></button>
                    </header>
                    <section className="modal-card-body">
                        <textarea
                            value={form.message}
                            onChange={handleOnChange}
                            className="textarea mt-3"
                            type="text"
                            placeholder="Content"
                            id="message"
                        ></textarea>
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-warning" onClick={handleOnSubmit}>Edit</button>
                        <button className="button" onClick={handleShow}>Cancel</button>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default ECommentModal
