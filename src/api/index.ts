import axios from "axios";
import { useToken } from "../hooks/useToken";

const { getToken } = useToken();

export const api = axios.create({
	headers: {
		authorization: getToken()
	},
	baseURL: 'http://localhost:5000'
});