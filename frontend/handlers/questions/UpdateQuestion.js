import axios from '../../utils/axios'

const UpdateQuestion = async (data) => {
    return await axios.put(`questions/${data.questionId}`, data.body, {
        headers: {
            authorization: `Bearer ${data.token}`
        }
    })
}

export default UpdateQuestion
