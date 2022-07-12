import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Login = () => {
    return (
        <Box w='100%' h='100vh' bgColor='#2F8F9D'>
            <HStack w='50vw' h='100vh' bgColor='#B3E8E5'>
                
            </HStack>
            <HStack w='50vw' h='50vh' bgColor='#82DBD8' position='absolute' left={0} bottom={0}>
                
            </HStack>
            <HStack w='50vw' h='50vh' bgColor='#3BACB6' position='absolute' right={0} bottom={0}>
                
            </HStack>
            <Box w='70vw' h='32vh' bgColor='red.200' position='absolute' right='15vw' top='34vh'></Box>
        </Box>
    );
};

export default Login;