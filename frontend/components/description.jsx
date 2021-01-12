import { CCommentModal, EQuestionModal, DQuestionModal } from '.'

const Description = ({ question }) => {
    return (
        <>
            <article class="media card p-4 mb-5">
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
                        <EQuestionModal editSelected={question} />
                    </div>
                    <div>
                        <DQuestionModal deleteSelected={question} />
                    </div>
                    <div>
                        <CCommentModal questionId={question.id} questionTitle={question.title} />
                    </div>
                </div>
            </article>
        </>
    )
}

export default Description
