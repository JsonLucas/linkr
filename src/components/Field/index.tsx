import { Input } from "@chakra-ui/react";

interface Props{
	register: any,
	name: string,
	placeholder: string,
	type: string,
	value?: string
}

export function Field({register, name, placeholder, type, value}: Props){
	return (
		<Input {...register(name, { value })} placeholder={placeholder} type={type}
		p='15px' w='100%' border='none' borderRadius='10px' />
	);
}