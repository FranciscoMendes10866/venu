const Description = ({ question }) => {
    return (
        <>
            <article class="media card p-4">
                <figure class="media-left">
                    <p class="image is-64x64">
                        <img src="https://bit.ly/38xqVO3" />
                    </p>
                </figure>
                <div class="media-content">
                    <div class="content py-2">
                        <h4>{question.title}</h4>
                        <p>{question.content}</p>
                    </div>
                    <nav class="level is-mobile">
                        <div class="level-left">
                            {/* <div class="level-item">
                            <button className="button is-light is-small is-warning">Edit</button>
                        </div>
                        <div class="level-item">
                            <button className="button is-light is-small is-danger">Delete</button>
                        </div> */}
                            <div class="level-item">
                                <button className="button is-light is-small is-info">Comment</button>
                            </div>
                        </div>
                    </nav>
                </div>
            </article>
        </>
    )
}

export default Description
