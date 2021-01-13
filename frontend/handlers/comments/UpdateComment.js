import axios from '../../utils/axios'

const UpdateComment = async (data) => {
    return await axios.put(`comments/${data.commentId}`, data.body, {
        headers: {
            authorization: `Bearer ${data.token}`
        }
    })
}

export default UpdateComment
