import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { Field } from "../Field";
import { useForm } from 'react-hook-form';
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../hooks/useToast";
import { useMutation } from "@apollo/client";
import { SIGN_UP_ACTION } from "../../api/queries/signUp";
import { BsFillPersonVcardFill, BsFillTelephoneFill, BsLockFill, BsCardImage, BsEnvelopeFill, BsType } from 'react-icons/bs';

export function SignUp() {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const { toastSuccess, toastError } = useToast();
	const [signUpMutation, { loading, error }] = useMutation(SIGN_UP_ACTION);
	const navigate = useNavigate();
	const signUp = async (data: any) => {
		try{
			console.log(data);
			const response = await signUpMutation({ variables: data });
			toastSuccess('Cadastrado efetuado com sucesso!');
		}catch(e: any){
			console.log('aqui', error);
			toastError(e.message);
		}
	}
	return (
		<VStack h='100%' w='30%' spacing={5} bgColor='#333' justifyContent='center' alignItems='center'>
			<Box w='90%'>
				<Field 
					leftIcon={<BsType size={22} color='white' />}
					variant='flushed' 
					register={register} 
					name='name' 
					placeholder='Digite seu nome' 
					type='text' 
					color="white"
				/>
			</Box>
			<Box w='90%'>
				<Field 
					leftIcon={<BsFillPersonVcardFill size={22} color='white' />}
					variant='flushed' 
					register={register} 
					name='nickname' 
					placeholder='Digite um nickname' 
					type='text' 
					color="white"
				/>
			</Box>
			<Box w='90%'>
				<Field 
					leftIcon={<BsEnvelopeFill size={22} color='white' />}
					variant='flushed' 
					register={register} 
					name='email' 
					placeholder='Digite seu email' 
					type='email' 
					color="white"
				/>
			</Box>
			<Box w='90%'>
				<Field 
					leftIcon={<BsLockFill size={22} color='white' />}
					variant='flushed' 
					register={register} 
					name='password' 
					placeholder='Digite sua senha' 
					type='password' 
					color="white"
				/>
			</Box>
			<Box w='90%'>
				<Field
					leftIcon={<BsLockFill size={22} color='white' />}
					variant='flushed' 
					register={register} 
					name='confirmPassword' 
					placeholder='Confirmar senha' 
					type='password' 
					color="white"
				/>
			</Box>
			<Box w='90%'>
				<Field 
					leftIcon={<BsFillTelephoneFill size={22} color='white' />}
					variant='flushed' 
					register={register} 
					name='phone' 
					placeholder='Digite seu telefone' 
					type='text' 
					color="white"
				/>
			</Box>
			<Box w='90%'>
				<Field 
					leftIcon={<BsCardImage size={22} color='white' />}
					variant='flushed' 
					register={register} 
					name='picture' 
					placeholder='Digite a url de uma imagem' 
					type='text' 
					color="white"
				/>
			</Box>
			<Button variant='outline' colorScheme='gray' onClick={handleSubmit(signUp)} w='90%' p='10px' borderRadius='10px' mb='10px' 
			fontWeight='bold' fontSize='18px' color='darkgrey' disabled={loading}>
				{loading && <ThreeDots height='40%' color="white" />}
				{!loading && <>Cadastar</>}
			</Button>
			<Text color='white' textDecoration='underline' cursor='pointer' onClick={() => navigate('/')}>
				Já tem uma conta? Faça login!
			</Text>
		</VStack>
	);
}