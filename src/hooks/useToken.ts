import { useToast } from "./useToast";

export const useToken = () => {
	const { toastError } = useToast();
	const setToken = (token: string) => {
		localStorage.setItem('token', token);
	}
	const removeToken = () => {
		localStorage.removeItem('token');
	}
	const getToken = () => {
		const token = localStorage.getItem('token');
		if(!token) {
			toastError('invalid credentials.');
			return false;
		}
		return token;

	}
	
	return { setToken, removeToken, getToken };
}