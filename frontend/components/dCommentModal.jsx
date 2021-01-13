import { useState } from 'react'
import { useMutation } from 'react-query'

import { useStore } from '../store'
import { DeleteComment } from '../handlers'

const DQuestionModal = ({ deleteSelected, refetchQuestion }) => {
    const stateToken = useStore(state => state.token)
    const [show, setShow] = useState(false)
    const { mutate } = useMutation(DeleteComment, {
        onSuccess: () => {
            refetchQuestion()
        }
    })
    const handleDelete = (e) => {
        e.preventDefault()
        mutate({
            commentId: deleteSelected,
            token: stateToken
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
        <>
            <button className="button is-light is-small is-danger ml-3" onClick={handleShow}>Delete</button>
            <div className={`modal ${active}`}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">
                            Delete comment.
                        </p>
                        <button className="delete" aria-label="close" onClick={handleShow}></button>
                    </header>
                    <section class="modal-card-body">
                        <p>Are you sure you want to delete your comment?</p>
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
