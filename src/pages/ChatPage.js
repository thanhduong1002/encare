import {Text, VStack } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../components/Navbar';


const ChatPage = () => {
  return (
    <VStack>
      <Navbar />
      <Text>This is Chat Page</Text>
    </VStack>
  );
};

export default ChatPage;
