import axios from '../../utils/axios'

const QueryQuestions = async ({ queryKey }) => {
    return await axios.get(`query/questions/${queryKey[1].threadId}`, {
        headers: {
            authorization: `Bearer ${queryKey[1].token}`
        }
    })
}

export default QueryQuestions
