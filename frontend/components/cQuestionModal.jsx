import { useState } from 'react'
import { useMutation } from 'react-query'

import { useStore } from '../store'
import { CreateQuestion } from '../handlers'

const CQuestionModal = ({ threadId, refetchQuestions }) => {
    const stateToken = useStore(state => state.token)
    const [show, setShow] = useState(false)
    const [form, setForm] = useState({
        title: '',
        content: ''
    })
    const { mutate } = useMutation(CreateQuestion, {
        onSuccess: () => {
            refetchQuestions()
        }
    })
    const handleOnSubmit = (e) => {
        e.preventDefault()
        mutate({
            threadId: threadId,
            body: form,
            token: stateToken
        })
        setForm({
            title: '',
            content: ''
        })
        setShow(!show)
    }
    const handleOnChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value })
    }
    const handleCancel = (e) => {
        e.preventDefault()
        setForm({
            title: '',
            content: ''
        })
        setShow(!show)
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
        <div className="mb-4">
            <button className="button is-success" onClick={handleShow}>Create</button>
            <div className={`modal ${active}`}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">
                            Your question:&nbsp;
                            "{form.title.length >= 12 ? (
                                form.title.substring(0, 12) + "..."
                            ) : form.title}"
                        </p>
                        <button className="delete" aria-label="close" onClick={handleShow}></button>
                    </header>
                    <section className="modal-card-body">
                        <input
                            value={form.title}
                            onChange={handleOnChange}
                            className="input"
                            type="text"
                            placeholder="Title"
                            id="title"
                        />
                        <textarea
                            value={form.content}
                            onChange={handleOnChange}
                            className="textarea mt-3"
                            type="text"
                            placeholder="Content"
                            id="content"
                        ></textarea>
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-success" onClick={handleOnSubmit}>Create</button>
                        <button className="button" onClick={handleCancel}>Cancel</button>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default CQuestionModal
