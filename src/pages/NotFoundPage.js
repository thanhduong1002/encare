import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const NotFoundPage = () => {
    return (
        <Box w='100vw' h='100vh' display='flex' justifyContent='center' alignItems='center' bgImg="url('https://i.pinimg.com/564x/ca/0a/9d/ca0a9dbfaa564ba697c7c3b64481a5f9.jpg')" bg>
            <Text fontSize='9xl'>404 Not Found Page</Text>
        </Box>
    );
};

export default NotFoundPage;