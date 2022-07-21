import { Box, Button, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaAngleLeft, FaMapMarkedAlt } from 'react-icons/fa';

const Test = () => {
  const [infoapp, setInfoapp] = useState([]);
  let token = localStorage.getItem('token');
  useEffect(() => {
    axios({
      baseURL: 'https://enclave-encare.herokuapp.com/api/doctor/appointment/5',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        console.log(res.data.data);
        setInfoapp(res.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  const handleConfirm = () => {
    axios({
      baseURL:
        'https://enclave-encare.herokuapp.com/api/doctor/appointment/5/confirm',
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        console.log(res.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <VStack
      w="100vw"
      h="100vh"
      bgGradient="linear(to-r, #E7F6F2, #A5C9CA)"
      justify="center"
    >
      <Button
        w="10vw"
        h="10vh"
        bgColor="blackAlpha.200"
        justify="center"
        letterSpacing="2px"
      >
        <FaAngleLeft size="30" />
        <Text fontSize="23" fontWeight="bold">
          {' '}
          Back
        </Text>
      </Button>
      <HStack
        w="95%"
        h="60%"
        bgColor="white"
        boxShadow="dark-lg"
        borderRadius="8px"
        justify="center"
      >
        <VStack w="30%" h="90%">
          <Image
            // src="https://i.pinimg.com/564x/e9/27/18/e92718fef313e59f1e6ae10a6273cfc4.jpg"
            src={
              infoapp.userResponse.accountResponse.avatar !== null
                ? infoapp.userResponse.accountResponse.avatar
                : 'https://i.pinimg.com/564x/e9/27/18/e92718fef313e59f1e6ae10a6273cfc4.jpg'
            }
            w="100%"
            h="32vh"
            borderRadius="8px"
          />
          {/* <VStack w='100%' h='15%' bgColor='#E7F6F2' boxShadow='dark-lg' borderRadius='8px'> */}
          <Text fontWeight={'600'} fontSize="xl" color={'#2155CD'}>
            {/* Nguyen Thanh Duong */}
            {infoapp.userResponse.accountResponse.name}
          </Text>
          <Text fontWeight={'600'} fontSize="md" color={'#2155CD'}>
            {infoapp.userResponse.accountResponse.birthday}
            {/* 10/02/2001 */}
          </Text>
          <Text fontWeight={'600'} fontSize="md" color={'#2155CD'}>
            {infoapp.userResponse.accountResponse.phone}
            {/* 0336364692 */}
          </Text>
          {/* </VStack> */}
          <HStack w="100%" h="20%" justifyContent="space-around">
            <Button bgColor="#395B64" color="#E7F6F2">
              Info
            </Button>
            <Button bgColor="#395B64" color="#E7F6F2">
              Medical record
            </Button>
          </HStack>
        </VStack>
        <Box
          w="60%"
          h="90%"
          bgColor="#0063EC"
          borderRadius="8px"
          letterSpacing="2px"
          boxShadow="dark-lg"
          color="white"
          padding="1%"
        >
          <Text fontWeight="bold" fontSize="xl">
            Symptoms:
          </Text>
          {/* <Text>alo alo alo aloa lao</Text> */}
          <Text>{infoapp.symptoms}</Text>
          <Text fontWeight="bold" fontSize="xl">
            Location:
          </Text>
          <Text>
            <FaMapMarkedAlt size="40" />
            123 Ngo Si Lien, Hoa Khanh Bac, Lien Chieu, Da Nang
          </Text>
          <Text fontWeight="bold" fontSize="xl">
            Appointment:
          </Text>
          <HStack w="100%" h="20%" justifyContent="space-between">
            <VStack w="20%" h="100%">
              <Text>Day</Text>
              <HStack
                w="80%"
                h="60%"
                borderColor="white"
                borderWidth="2px"
                borderRadius="8px"
                justify="center"
              >
                <Text fontWeight="bold" fontSize="23">
                  {infoapp.day.slice(0, 2)}
                  {/* 10 */}
                </Text>
              </HStack>
            </VStack>
            <VStack w="20%" h="100%">
              <Text>Month</Text>
              <HStack
                w="80%"
                h="60%"
                borderColor="white"
                borderWidth="2px"
                borderRadius="8px"
                justify="center"
              >
                <Text fontWeight="bold" fontSize="23">
                  {infoapp.day.slice(3, 5)}
                  {/* 02 */}
                </Text>
              </HStack>
            </VStack>
            <VStack w="20%" h="100%">
              <Text>Year</Text>
              <HStack
                w="80%"
                h="60%"
                borderColor="white"
                borderWidth="2px"
                borderRadius="8px"
                justify="center"
              >
                <Text fontWeight="bold" fontSize="23">
                  {infoapp.day.slice(6, 10)}
                  {/* 2001 */}
                </Text>
              </HStack>
            </VStack>
            <VStack w="20%" h="100%">
              <Text>Time</Text>
              <HStack
                w="80%"
                h="60%"
                borderColor="white"
                borderWidth="2px"
                borderRadius="8px"
                justify="center"
              >
                <Text fontWeight="bold" fontSize="23">
                  {infoapp.time}:00
                  {/* 15:00 */}
                </Text>
              </HStack>
            </VStack>
          </HStack>
          <HStack w="100%" h="20%" marginTop="5%" justifyContent="space-around">
            <Button bgColor="red.300" w="20%" fontSize="16" fontWeight="bold">
              Cancel
            </Button>
            <Button
              bgColor="green.400"
              w="20%"
              fontSize="16"
              fontWeight="bold"
              onClick={handleConfirm}
            >
              Confirm
            </Button>
          </HStack>
        </Box>
      </HStack>
    </VStack>
  );
};

export default Test;
