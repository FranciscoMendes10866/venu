import axios from '../../utils/axios'

const DeleteQuestion = async (data) => {
    return await axios.delete(`questions/${data.questionId}`, {
        headers: {
            authorization: `Bearer ${data.token}`
        }
    })
}

export default DeleteQuestion
