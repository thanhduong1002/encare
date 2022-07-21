import { Avatar, Button, HStack, Input, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Navigation from '../components/Navigation';
const HomePage = () => {
  return (
    <HStack>
      <Navigation />
      <VStack w="80vw" h="100vh">
        <HStack w="100%" h="7%" flexDirection="row-reverse">
          <Avatar
            name="Duong"
            src="https://i.pinimg.com/736x/22/75/e9/2275e96e3c8b92ccf02f47ad365c38bb.jpg"
            margin="5px"
            padding="1px"
          />
          <Text>Ng Duong</Text>
          <Input placeholder='Search...'></Input>
          <Button><FaSearch /></Button>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default HomePage;
