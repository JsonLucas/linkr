import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Field } from "../Field";
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../hooks/useToast";
import { IoIosAt, IoIosLock } from 'react-icons/io';

export function Login() {
	const { register, handleSubmit } = useForm();
	const [loading, setLoading] = useState<boolean>(false);
	const { toastSuccess, toastError } = useToast();
	const navigate = useNavigate();
	const login = async (data: any) => {
		try{
			toastSuccess('Login efetuado com sucesso!');
			navigate('/home');
		}catch(e: any){
			console.log(e);
			toastError(e.message);
		}
		console.log(data);
	}
	return (
		<Flex h='100%' w='30%' bgColor='#333' direction='column' justifyContent='center' alignItems='center'>
			<Box w='90%' mb='10px'>
				<Field 
					variant='flushed' 
					leftIcon={<IoIosAt size={22} color='white' /> } 
					register={register} 
					name='email' 
					placeholder='Digite seu email' 
					type='email' 
					color="white"
				/>
			</Box>
			<Box w='90%' mb='10px'>
				<Field 
					variant='flushed' 
					leftIcon={<IoIosLock size={22} color='white' /> }
					register={register} 
					name='password' 
					placeholder='Digite sua senha' 
					type='password' 
					color="white"
				/>
			</Box>
			<Button variant='outline' colorScheme='gray' onClick={handleSubmit(login)} cursor='pointer' w='90%' p='10px' borderRadius='10px' mb='10px' 
			fontWeight='bold' fontSize='18px' color='darkgrey'>
				{loading && <ThreeDots height='40%' color="white" />}
				{!loading && <>Entrar</>}
			</Button>
			<Text color='white' textDecoration='underline' cursor='pointer' onClick={() => navigate('/signup')}>
				Não tem uma conta? Cadastre-se!
			</Text>
		</Flex>
	);
}