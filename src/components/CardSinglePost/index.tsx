import { VStack, Flex, Text, Box, Button } from '@chakra-ui/react';
import { Field } from '../Field';
import { useForm } from 'react-hook-form';
import { BsFillEmojiLaughingFill, BsFillFileEarmarkImageFill, BsFillSendFill, BsThreeDots } from "react-icons/bs";

export function CardSinglePost() {
    const { register, handleSubmit } = useForm();
    const onComment = async (data: any) => {
        console.log(data);
    }
    return (
        <VStack spacing={4} borderRadius='8px' w='75%' minH='300px' bgColor='white'>
            <Flex w='100%' p='20px' alignItems='center' justifyContent='space-between'>
                <Flex>
                    <Box h='50px' w='50px' bgColor='aqua' borderRadius='50%'></Box>
                    <Box ml='5px'>
                        <Text>@nickname</Text>
                        <Text>data do post</Text>
                    </Box>
                </Flex>
                <Box cursor='pointer'><BsThreeDots size={22} /></Box>
            </Flex>
            <VStack w='100%' h='100%'>
                <Box w='100%' h='200px' bgColor='black'>
                    {/* colocar um overflow ellipsis com botão de ver mais no texto */}
                    <Text></Text>
                </Box>
                <Flex>
                    {/* seção dos anexos(imagens) */}
                </Flex>
                <Flex w='100%' p='10px'>
                    <Field  
                        variant='filled' 
                        leftIcon={<BsFillEmojiLaughingFill size={22} color='black' />}
                        rightIcon={<BsFillFileEarmarkImageFill size={22} color='black' />} 
                        register={register} 
                        name='content' 
                        placeholder='Diga algo...' 
                        type='text'
                    />
                    <Button variant='unstyled' onClick={handleSubmit(onComment)}>
                        <BsFillSendFill size={22} color='black' />
                    </Button>
                </Flex>
            </VStack>
        </VStack>
    );
}