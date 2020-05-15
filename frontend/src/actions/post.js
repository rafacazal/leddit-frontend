import axios from "axios";
 

const baseURL = 'https://us-central1-leddit-4be86.cloudfunctions.net/app'


export const createPost = (title, text) => async (dispatch) => {
    const token =  window.localStorage.getItem("token");

    const axiosConfig = {
        headers: {
            auth: token
        }
    };
    
    const body = {
        title,
        text
    }

    try {
        await axios.post(`${baseURL}/create/post`, body, axiosConfig );

        dispatch(getAllPosts());
    } catch(error) {
        window.alert("Ocorreu um erro ao tentar criar o post.");
    }
}


export const getAllPosts = () => async (dispatch) => {
    const token =  window.localStorage.getItem("token");

    const axiosConfig = {
        headers: {
            auth: token
        }
    };
    
    try {
        const response = await axios.get(`${baseURL}/posts`,  axiosConfig );

        dispatch(setAllPosts(response.data.result));
    } catch(error) {
        window.alert("Ocorreu um erro ao tentar acessar os posts do seu feed.");
    }
}


export const setAllPosts = (allPosts) => ({
    type: "SET_ALL_POSTS",
    payload: {
        allPosts,
    }
}); 


export const votePost = (direction, postId) => async (dispatch) => {
    const token =  window.localStorage.getItem("token");

    const axiosConfig = {
        headers: {
            auth: token
        }
    };

    const voteData = {
        voteDirection: direction
    }

    try {
        await axios.put(`${baseURL}/posts/${postId}/vote`, voteData, axiosConfig );
        
        dispatch(getAllPosts());
        dispatch(getPostDetails(postId));
    } catch(error) {
        window.alert("Ocorreu um erro ao tentar votar no post.");
    }
}


export const voteComment = (direction, postId, commentId) => async (dispatch) => {
    const token =  window.localStorage.getItem("token");
    
    const axiosConfig = {
        headers: {
            auth: token
        }
    };

    const voteData = {
        voteDirection: direction
    }

    try {
        await axios.put(`${baseURL}/posts/${postId}/comment/${commentId}/vote`, voteData, axiosConfig );
        
        dispatch(getPostDetails(postId));
    } catch(error) {
        window.alert("Ocorreu um erro ao tentar votar no comentário.")
    }
}


export const setSelectedPostId = (selectedPostId) => ({
    type: 'SET_SELECTED_POST_ID',
    payload: {
        selectedPostId,
    }
})


export const getPostDetails = (postId) => async (dispatch) => {
    const token =  window.localStorage.getItem("token");

    const axiosConfig = {
        headers: {
            auth: token
        }
    };
    
    try {       
        const response = await axios.get(`${baseURL}/posts/${postId}`,  axiosConfig );
        console.log(response)
        dispatch(setPostDetails(response.data));
        
    } catch(error) {
        window.alert("Ocorreu um erro ao tentar acessar os detalhes desse post.")
    }
}


export const setPostDetails = (post) => ({
    type: "SET_POST_DETAILS",
    payload: {
        post,
    }
}); 


export const createComment = (text, postId) => async (dispatch) => {
    const token =  window.localStorage.getItem("token");

    const axiosConfig = {
        headers: {
            auth: token
        }
    };
    
    const postInformation = {
        text,
    }

    try {
        await axios.post(`${baseURL}/posts/${postId}/comment`, postInformation, axiosConfig );

        dispatch(getPostDetails(postId));
    } catch(error) {
        window.alert("Ocorreu um erro ao tentar criar o comentário.")
    }
}