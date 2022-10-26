import { Box, Button, Text } from "@chakra-ui/react";
import { Field } from "../Field";
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../hooks/useToast";

export function Login() {
	const { register, handleSubmit } = useForm();
	const [loading, setLoading] = useState<boolean>(false);
	const navigate = useNavigate();
	const { toastSuccess, toastError } = useToast();
	const login = async (data: any) => {
		try{
			toastSuccess('Login efetuado com sucesso!');
		}catch(e: any){
			console.log(e);
			toastError(e.message);
		}
		console.log(data);
	}
	return (
		<Box h='100%' w='30%' bgColor='#333' display='flex' flexDir={'column'} justifyContent='center' alignItems='center'>
			<Box w='90%' mb='10px'>
				<Field register={register} name='email' placeholder='Digite seu email' type='email' />
			</Box>
			<Box w='90%' mb='10px'>
				<Field register={register} name='password' placeholder='Digite sua senha' type='password' />
			</Box>
			<Button onClick={handleSubmit(login)} w='90%' p='10px' border='none' bgColor='lightblue' borderRadius='10px' mb='10px' 
			fontWeight='bold' fontSize='18px' color='white'>
				{loading && <ThreeDots height='40%' color="white" />}
				{!loading && <>Entrar</>}
			</Button>
			<Text color='white' textDecoration='underline' cursor='pointer' onClick={() => navigate('/signup')}>
				Não tem uma conta? Cadastre-se!
			</Text>
		</Box>
	);
}