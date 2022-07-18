import { Box, Button, HStack, Image, Input, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { FaLongArrowAltLeft, FaSave } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ChangeProfile = () => {
    const navigate = useNavigate();
    const handleBack = () =>{
        navigate('/home');
    }
  return (
    <VStack w="100vw" h="100vh" bgColor="#EAF6F6" justify="center">
        <Box w="80vw" h="10vh" display='flex' flexDirection='row' justifyContent='space-between'>
            <Button w="7vw" h="10vh" bgColor='#6E85B7' onClick={handleBack}><FaLongArrowAltLeft size='30'/></Button>
            <Button w="7vw" h="10vh" bgColor='#6E85B7'><FaSave size='30'/></Button>
        </Box>
      <HStack
        w="80vw"
        h="80vh"
        borderRadius="8px"
        bgColor="#B2C8DF"
        boxShadow="dark-lg"
      >
        <VStack w="30%" h="100%">
          <Image
            src="https://scontent.fdad1-3.fna.fbcdn.net/v/t1.15752-9/280230014_5624651480918911_5248351531552767759_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=5ipIiDOfb4YAX-soNM6&_nc_ht=scontent.fdad1-3.fna&oh=03_AVKjrAkPtY1a53wguwTrw99Mkboaj_PLateyoqcNkrkuUw&oe=62F5AA2D"
            boxSize="60%"
            borderRadius="full"
          />
          <Text fontWeight="bold" fontSize="2xl">
            Dr. IU
          </Text>
          <Text fontSize="xl">Khoa Tim mach</Text>
          <Text fontSize="xl">Benh vien TW Hue</Text>
        </VStack>
        <VStack w="70%" h="100%" justify="center">
          <Box
            w="80%"
            h="80%"
            bgColor="#D6EFED"
            borderRadius="8px"
            padding="1%"
            boxShadow="dark-lg"
          >
            <Text fontWeight="bold" fontSize="md">
              Name:
            </Text>
            <Input
              placeholder="Enter your name"
              type="text"
              variant="outline"
              borderWidth="1px"
              borderColor="#B2C8DF"
            ></Input>
            <Text fontWeight="bold" fontSize="md">
              Birthday:
            </Text>
            <Input
              type="date"
              variant="outline"
              borderWidth="1px"
              borderColor="#B2C8DF"
            ></Input>
            <Text fontWeight="bold" fontSize="md">
              Phone number:
            </Text>
            <Input
              placeholder="Enter your phone number"
              type="text"
              variant="outline"
              borderWidth="1px"
              borderColor="#B2C8DF"
            ></Input>
            <Text fontWeight="bold" fontSize="md">
              Address:
            </Text>
            <Input
              placeholder="Enter your address"
              type="text"
              variant="outline"
              borderWidth="1px"
              borderColor="#B2C8DF"
            ></Input>
            <Text fontWeight="bold" fontSize="md">
              Hospital:
            </Text>
            <Input
              placeholder="Enter your hospital"
              type="text"
              variant="outline"
              borderWidth="1px"
              borderColor="#B2C8DF"
            ></Input>
            <Text fontWeight="bold" fontSize="md">
              Dept:
            </Text>
            <Input
              placeholder="Enter your major"
              type="text"
              variant="outline"
              borderWidth="1px"
              borderColor="#B2C8DF"
            ></Input>            
          </Box>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default ChangeProfile;
