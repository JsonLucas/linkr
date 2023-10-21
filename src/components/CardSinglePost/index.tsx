import { VStack, Flex, Text, Box } from '@chakra-ui/react';

export function CardSinglePost() {
    return (
        <VStack spacing={4} borderRadius='8px' w='75%' minH='300px' bgColor='darkgrey'>
            <Flex w='100%' p='20px' justifyContent='space-between'>
                <Box h='50px' w='50px' bgColor='aqua' borderRadius='50%'></Box>
                <Box h='20px' w='20px'></Box>
            </Flex>
            {/* colocar aqui em baixo seções das postagens e campo de comentários */}
        </VStack>
    );
}