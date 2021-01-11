import Moment from 'react-moment'

const CommentList = ({ comment }) => {
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
                <button className="button is-light is-small is-warning ml-3">Edit</button>
                <button className="button is-light is-small is-danger ml-3">Delete</button>
            </div>
        </article>
    )
}

export default CommentList
