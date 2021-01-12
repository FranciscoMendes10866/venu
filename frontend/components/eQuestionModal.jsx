import { useState } from 'react'

const EQuestionModal = ({ editSelected }) => {
    const [show, setShow] = useState(false)
    const [form, setForm] = useState({
        title: editSelected.title,
        content: editSelected.content
    })
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
            <button className="button is-light is-small is-warning" onClick={handleShow}>Edit</button>
            <div className={`modal ${active}`}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">
                            Edit your question&nbsp;
                            "{editSelected.title.length >= 12 ? (
                                editSelected.title.substring(0, 12) + "..."
                            ) : editSelected.title}"
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
                        <button className="button is-warning">Edit</button>
                        <button className="button" onClick={handleShow}>Cancel</button>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default EQuestionModal
