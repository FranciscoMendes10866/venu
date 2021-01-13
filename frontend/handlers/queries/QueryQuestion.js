import axios from '../../utils/axios'

const QueryQuestion = async ({ queryKey }) => {
    return await axios.get(`query/question/${queryKey[1].questionId}`, {
        headers: {
            authorization: `Bearer ${queryKey[1].token}`
        }
    })
}

export default QueryQuestion
