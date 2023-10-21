import { Box, Flex, Text } from "@chakra-ui/react";

export function HomePreface(){
	return (
		<Flex w='70%' h='100%' bgColor='black' alignItems='center'>
			<Box ml='20%' w='40%' color='white'>
				<Text fontSize='70px' fontWeight='bold'>linkr</Text>
				<Text fontSize='35px'>save, share and discover the best links on the web</Text>
			</Box>
		</Flex>
	);
}