import { Box } from "@chakra-ui/react";
import { HomePreface } from "../../components/HomePreface";
import { SignUp } from "../../components/SignUp";

export function SignUpPage(){
	return (
		<Box display='flex' h='100%' w='100%' position={'absolute'}>
			<HomePreface />
			<SignUp />
		</Box>
	);
}