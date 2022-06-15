import axiosConfig from "../axiosConfig";

export const loginRequest = async (body) => {
    const request = await axiosConfig.post('/login', body);
    return request;
}

export const signUpRequest = async (body) => {
    const request = await axiosConfig.post('/sign-up', body);
    return request;
}