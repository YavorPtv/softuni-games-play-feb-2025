import { useEffect, useReducer, useState } from "react";
import useAuth from "../hooks/useAuth";
import request from "../utils/request";

const baseUrl = 'http://localhost:3030/data/comments';

// export default {
//     create(email, gameId, comment){
//         return request.post(baseUrl, {email, gameId, comment});
//     }
// };

function commentsReducer(state, action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [...state, action.payload];
        case 'GET_ALL':
            return action.payload;
        default:
            return state;
    }
}

export const useComments = (gameId) => {
    const { accessToken } = useAuth();
    // const [comments, setComments] = useState([]);
    const [comments, dispatch] = useReducer(commentsReducer, []);

    useEffect(() => {
        const searchParams = new URLSearchParams({
            where: `gameId="${gameId}"`
        });
        const options = {
            headers: {
                'X-Authorization': accessToken,
            }
        }
        request.get(`${baseUrl}?${searchParams.toString()}`, null, options)
            .then(result => dispatch({type: 'GET_ALL', payload: result}));
    }, [gameId, accessToken])

    return {
        comments,
        addComment: (commentData) => dispatch({type: 'ADD_COMMENT', payload: commentData})
    }
}

export const useCreateComment = () => {
    const { request } = useAuth();
    const create = (gameId, comment) => {
        const commentData = {
            gameId, 
            comment,
        }
        return request.post(baseUrl, commentData);
    }

    return {
        create,
    }
}