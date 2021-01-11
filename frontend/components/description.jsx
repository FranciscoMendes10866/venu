const Description = ({ question }) => {
    return (
        <>
            <article class="media card p-4 mb-6">
                <figure class="media-left">
                    <p class="image is-64x64">
                        <img src="https://bit.ly/38xqVO3" />
                    </p>
                </figure>
                <div class="media-content">
                    <div class="content">
                        <p>
                            <span className="is-size-4 has-text-weight-semibold">{question.title}</span>
                            <br />
                            <span className="has-text-grey"><small>@{question.User.username}</small></span>
                        </p>
                        <p className="my-5 px-4">{question.content}</p>
                    </div>
                </div>
                <div class="media-right is-flex-direction-column">
                    <div>
                        <button className="button is-light is-small is-warning">Edit</button>
                    </div>
                    <div>
                        <button className="button is-light is-small is-danger">Delete</button>
                    </div>
                    <div>
                        <button className="button is-light is-small is-info">Comment</button>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Description
