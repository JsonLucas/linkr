import { Box, Text, Image, Flex } from "@chakra-ui/react";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useState } from 'react';
import { useToken } from "../../hooks/useToken";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function Header() {
	const [toggleLogout, setToggleLogout] = useState<boolean>(false);
	const { removeToken } = useToken();
	const navigate = useNavigate();
	const logout = () => {
		removeToken();
		toast('Logout efetuado com sucesso!');
		navigate('/');
	}
	return (
		<Flex p='15px' h='60px' w='100%' bgColor='black' zIndex={99} position='fixed' justifyContent='space-between' alignItems='center'>
			<Box color='white' fontWeight='bold'>
				<Text onClick={() => navigate('/')}>linkr</Text>
			</Box>
			<Box display='flex' justifyContent='space-around' alignItems='center' flexDir='row' w='80px' h='100%' cursor='pointer' 
			position='relative' onClick={() => { toggleLogout ? setToggleLogout(false) : setToggleLogout(true); }}>
				{!toggleLogout && <IoIosArrowDown color="white" size='25' style={{fontWeight: 'bold'}} />}
				{toggleLogout && <IoIosArrowUp color="white" size='25' style={{fontWeight: 'bold'}} />}
				<Box borderRadius='50%' h='40px' w='40px'>
					<Image src='https://static.wikia.nocookie.net/ea992db8-f056-4087-847e-ee703217a783/scale-to-width/755' 
					w='100%' h='100%' borderRadius='50%' />
				</Box>
				{toggleLogout && <Box p='8px' zIndex={2} bgColor='black' w='100%' textAlign='center' color='white' 
				borderRadius='0px 0px 10px 10px' position='absolute' top='35px' onClick={logout}>
					<Text>Ver Perfil</Text>	
					<Text>Sair</Text>
				</Box>}
			</Box>
		</Flex>
	);
}