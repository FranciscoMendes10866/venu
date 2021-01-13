import axios from '../../utils/axios'

const DeleteComment = async (data) => {
    return await axios.delete(`comments/${data.commentId}`, {
        headers: {
            authorization: `Bearer ${data.token}`
        }
    })
}

export default DeleteComment
