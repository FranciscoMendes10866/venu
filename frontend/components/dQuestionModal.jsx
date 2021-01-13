import Router from 'next/router'
import { useState } from 'react'
import { useMutation } from 'react-query'

import { useStore } from '../store'
import { DeleteQuestion } from '../handlers'

const DQuestionModal = ({ deleteSelected, refetchQuestion }) => {
    const stateToken = useStore(state => state.token)
    const [show, setShow] = useState(false)
    const { mutate } = useMutation(DeleteQuestion, {
        onSuccess: () => {
            refetchQuestion()
        }
    })
    const handleDelete = (e) => {
        e.preventDefault()
        mutate({
            questionId: deleteSelected.id,
            token: stateToken
        })
        Router.push('/threads')
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
        <>
            <button className="button is-light is-small is-danger" onClick={handleShow}>Delete</button>
            <div className={`modal ${active}`}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">
                            Delete question.
                        </p>
                        <button className="delete" aria-label="close" onClick={handleShow}></button>
                    </header>
                    <section class="modal-card-body">
                        <p>Are you sure you want to delete the following question?</p>
                        <p className="is-size-6 has-text-weight-medium">"{deleteSelected.title}"</p>
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-danger" onClick={handleDelete}>Yes</button>
                        <button className="button" onClick={handleShow}>Cancel</button>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default DQuestionModal
