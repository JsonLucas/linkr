import { api } from ".";
import { SignIn, SignUp } from "../interfaces/users";

export const signUp = async (body: SignUp) => {
	return await api.post('/signup', body);
}

export const signIn = async (body: SignIn) => {
	const { data } = await api.post('/signin', body);
	return data;
}