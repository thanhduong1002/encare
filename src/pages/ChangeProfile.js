import { Avatar, Box, Button, HStack, Image, Input, Text, VStack } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaLongArrowAltLeft, FaSave } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ChangeProfile = () => {
    const navigate = useNavigate();
    const handleBack = () =>{
        navigate('/home');
    }
  const [infoDoctor, setInfoDoctor] = useState([]);
  let token = localStorage.getItem('token');
  useEffect(() => {
    axios({
      baseURL: 'https://enclave-encare.herokuapp.com/api/doctor',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        console.log(res.data.data);
        setInfoDoctor(res.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
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
        <VStack w="30%" h="100%" justify='center'>
        <Avatar size='3xl' name='Segun Adebayo' src={infoDoctor.categoryResponse?.avatar ? infoDoctor.categoryResponse?.avatar : 'https://bit.ly/sage-adebayo'} />
          <Text fontWeight="bold" fontSize="2xl">
            Dr. {infoDoctor.accountResponse?.name}
          </Text>
          <Text fontSize="md">{infoDoctor.categoryResponse?.name}</Text>
          <Text fontSize="md">{infoDoctor.hospitalResponse?.name}</Text>
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
              className='name'
              placeholder="Enter your name"
              type="text"
              variant="outline"
              borderWidth="1px"
              borderColor="#B2C8DF"
              value={infoDoctor.accountResponse?.name}
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
              value={infoDoctor.accountResponse?.phone}
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
              value='74/2 Ngo Si Lien, Lien Chieu, Da Nang'
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
              value={infoDoctor.hospitalResponse?.name}
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
              value={infoDoctor.categoryResponse?.name}
            ></Input>            
          </Box>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default ChangeProfile;
