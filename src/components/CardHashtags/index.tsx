import { Box, Text } from '@chakra-ui/react';

export function CardHashtags() {
    return (
        <Box w='20%' bgColor='black' borderRadius='10px' color='white'>
            <Text fontWeight='bold' w='100%' borderBottom='1px solid white' p='5px'>trending</Text>
            <Box w='100%' mt='10px' p='5px'>
                <Text># Teste</Text>
            </Box>
        </Box>
    );
}