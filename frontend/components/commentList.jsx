const CommentList = ({ comment }) => {
    return (
        <article key={comment.id} class="media card p-4 mb-2 is-align-items-center">
            <div class="media-content">
                <div class="content">
                    <p>{comment.message}</p>
                </div>
            </div>
            <div class="media-right">
                <button className="button is-light is-small is-warning">Edit</button>
                <button className="button is-light is-small is-danger ml-3">Delete</button>
            </div>
        </article>
    )
}

export default CommentList
