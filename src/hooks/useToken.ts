import { useToast } from "./useToast";

export const useToken = () => {
	const { toastError } = useToast();
	const setToken = (token: string) => {
		localStorage.setItem('token', token);
	}
	const getToken = () => {
		const token = localStorage.getItem('token');
		if(!token) {
			toastError('invalid credentials.');
			return false;
		}
		return token;

	}
	
	return { setToken, getToken };
}