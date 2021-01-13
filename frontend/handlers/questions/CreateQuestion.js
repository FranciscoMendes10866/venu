import axios from '../../utils/axios'

const CreateQuestion = async (data) => {
    return await axios.post(`questions/${data.threadId}`, data.body, {
        headers: {
            authorization: `Bearer ${data.token}`
        }
    })
}

export default CreateQuestion
