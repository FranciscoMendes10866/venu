const Comment = () => {
    return (
        <div className="px-6 mt-6">
            <article class="media">
                <figure class="media-left">
                    <p class="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png" />
                    </p>
                </figure>
                    <div class="media-content">
                        <div class="field">
                            <p class="control">
                                <textarea class="textarea" placeholder="Add a comment..." />
                            </p>
                        </div>
                        <nav class="level">
                            <div class="level-left">
                                <div class="level-item">
                                    <a class="button is-info">Submit</a>
                                </div>
                            </div>
                        </nav>
                    </div>
            </article>
        </div>
    )

}

export default Comment
