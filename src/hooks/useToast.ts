import { toast } from "react-toastify"

export const useToast = () => {
	const toastSuccess = (message: string) => {
		return toast(message);
	}

	const toastError = (message: string) => {
		return toast(message);
	}

	return { toastSuccess, toastError };
}