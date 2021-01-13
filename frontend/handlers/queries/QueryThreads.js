import axios from '../../utils/axios'

const QueryThreads = async ({ queryKey }) => {
    return await axios.get('query/threads', {
        headers: {
            authorization: `Bearer ${queryKey[1].token}`
        }
    })
}

export default QueryThreads
