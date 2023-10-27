import { Flex } from "@chakra-ui/react";
import { HomePreface } from "../../components/HomePreface";
import { SignUp } from "../../components/SignUp";

export function SignUpPage(){
	return (
		<Flex h='100vh' w='100%'>
			<HomePreface />
			<SignUp />
		</Flex>
	);
}