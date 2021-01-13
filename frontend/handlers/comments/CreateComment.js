import axios from '../../utils/axios'

const CreateComment = async (data) => {
    return await axios.post(`comments/${data.questionId}`, data.body, {
        headers: {
            authorization: `Bearer ${data.token}`
        }
    })
}

export default CreateComment
