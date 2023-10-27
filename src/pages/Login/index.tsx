import { Box, Flex } from "@chakra-ui/react";
import { HomePreface } from "../../components/HomePreface";
import { Login } from "../../components/Login";

export function SignIn(){
	return (
		<Flex bgColor='aqua' h='100vh' w='100%'>
			<HomePreface />
			<Login />
		</Flex>
	);
}