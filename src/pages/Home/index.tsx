import { Box, Flex, VStack } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { CardCreatePost } from "../../components/CardCreatePost";
import { CardHashtags } from "../../components/CardHashtags";
import { CardSinglePost } from "../../components/CardSinglePost";

export function Home() {
	return (
		<VStack spacing={0} minH='100vh'>
			<Header />
			<Box w='100%' h='100%' bgColor='#333'>
				<Flex direction='column' justifyContent='space-around' w='60%' m='auto' mt='50px'>
					<Flex mt='40px' w='100%' justifyContent='space-between'>
						<CardCreatePost />
						<CardHashtags />
					</Flex>
				</Flex>
				<VStack spacing={3} w='60%' mt='25px' marginX='auto' alignItems='flex-start'>
					<CardSinglePost />
					<CardSinglePost />
					<CardSinglePost />
				</VStack>
			</Box>
		</VStack>
	);
}