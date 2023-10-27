import { Text, Box, Flex, VStack, Grid, GridItem, Input, Textarea } from '@chakra-ui/react';
import { IoIosAttach } from 'react-icons/io';

export function CardCreatePost() {
    return (
        <Box w='75%'>
            <VStack spacing={10} w='100%' h='170px' p='5px' bgColor='white' borderRadius='5px' display='flex'>
                <Grid
                    w='100%'
                    h='100%'
                    templateRows='repeat(3, 1fr)'
                    templateColumns='repeat(6, 1fr)'
                    gap={3}
                >
                    <GridItem rowSpan={1} colSpan={4}>
                        <Input
                            w='100%'
                            p='10px'
                            border='none'
                            placeholder="Título do seu pensamento."
                            name='name'
                            borderRadius='5px'
                            variant='filled'
                        />
                    </GridItem>
                    <GridItem rowSpan={3} colSpan={2}>
                        <Flex
                            w='100%'
                            h='94%'
                            border='dashed'
                            borderWidth='1px'
                            borderColor='black'
                            borderRadius='5px'
                            alignItems='center'
                            justifyContent='center'
                            cursor='pointer'
                        >
                            <Flex direction='column' w='60%' alignItems='center'>
                                <IoIosAttach color='black' size={26} />
                                <Text textAlign='center' fontSize='14px'>
                                    Adicionar Arquivos
                                </Text>
                            </Flex>
                        </Flex>
                    </GridItem>
                    <GridItem rowSpan={2} colSpan={4}>
                        <Textarea
                            w='100%'
                            h='90%'
                            placeholder='Digite aqui o que você está pensando.'
                            name='content'
                            border='none'
                            resize='none'
                            borderRadius='5px'
                            p='10px'
                            variant='filled'
                        />
                    </GridItem>
                </Grid>
            </VStack>
        </Box>
    );
}