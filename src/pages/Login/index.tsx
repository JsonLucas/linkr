import { Box, Flex } from "@chakra-ui/react";
import { HomePreface } from "../../components/HomePreface";
import { Login } from "../../components/Login";

export function SignIn(){
	return (
		<Flex position='absolute' h='100%' w='100%'>
			<HomePreface />
			<Login />
		</Flex>
	);
}