import axiosConfig from "../axiosConfig";

export const loginRequest = async (body) => {
    const request = await axiosConfig.post('/login', body);
    return request;
}

export const signUpRequest = async (body) => {
    const request = await axiosConfig.post('/sign-up', body);
    return request;
}

export const getUserRequest = async (headers) => {
    const request = await axiosConfig.get("/getUser", { headers });
    return request;
}

export const getPostsRequest = async (headers) => {
    const request = await axiosConfig.get('/getPosts', { headers });
    return request;
}

export const setNewPost = async (body, headers) => {
    const request = await axiosConfig.post('/newPost', body, { headers });
    return request;
}

export const getUserPostsRequest = async (userId, headers) => {
    const request = await axiosConfig.get(`/users/${userId}`, { headers });
    return request;
}

export const getUserByQuery = async (queryString, headers) => {
    const request = await axiosConfig.get(`/users/query/${queryString}`, { headers });
    return request;
}