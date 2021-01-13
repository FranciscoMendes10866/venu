import Moment from 'react-moment'
import { DCommentModal, ECommentModal } from '.'

const CommentList = ({ comment, questionTitle, refetchQuestion }) => {
    return (
        <article key={comment.id} class="media card p-4 mb-2 is-align-items-center">
            <div class="media-left">
                <figure class="image is-32x32">
                    <img src="https://bit.ly/38xqVO3" />
                </figure>
            </div>
            <div class="media-content">
                <div class="content">
                    <p>{comment.message}</p>
                </div>
            </div>
            <div class="media-right">
                <span class="button is-static is-small">
                    <Moment date={comment.createdAt} fromNow ago />
                </span>
                <ECommentModal
                    editSelected={comment}
                    questionTitle={questionTitle}
                    refetchQuestion={refetchQuestion}
                />
                <DCommentModal deleteSelected={comment.id} refetchQuestion={refetchQuestion} />
            </div>
        </article>
    )
}

export default CommentList
