import { Box, Text, Input } from "@chakra-ui/react";

export function Posts() {
	return (
		<Box w='100%' h='100%' bgColor='#333' position='absolute'>
			<Box display='flex' flexDir='column' justifyContent='space-around' w='60%' m='auto' mt='50px'>
				<Text color='white' fontSize='30px' fontWeight='bold'>timeline</Text>
				<Box mt='40px' w='100%' display='flex' flexDir='row' justifyContent='space-between'>
					<Box w='75%' h='10px'>
						<Box w='100%' h='170px' p='5px' bgColor='white' borderRadius='10px' display='flex'>
							<Box></Box>
							<Box></Box>
						</Box>
					</Box>
					<Box w='20%' bgColor='black' borderRadius='10px' color='white'>
						<Text fontWeight='bold' w='100%' borderBottom='1px solid white' p='5px'>trending</Text>
						<Box w='100%' mt='10px' p='5px'>
							<Text># Teste</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}