import { Box } from "@chakra-ui/react";
import { HomePreface } from "../../components/HomePreface";
import { Login } from "../../components/Login";

export function Home(){
	return (
		<Box display='flex' h='100%' w='100%' position={'absolute'}>
			<HomePreface />
			<Login />
		</Box>
	);
}