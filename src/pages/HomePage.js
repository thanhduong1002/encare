import {
  Avatar,
  Box,
  Button,
  HStack,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaCalendarAlt, FaChild, FaSearch } from 'react-icons/fa';
import Appointment from '../components/Appointment';
import Navigation from '../components/Navigation';
const HomePage = () => {
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
    <HStack>
      <Navigation />
      <VStack w="80vw" h="100vh">
        <HStack w="100%" h="7%" flexDirection="row-reverse">
          <Avatar
            name={infoDoctor.accountResponse?.name}
            src={infoDoctor.accountResponse?.avatar ? infoDoctor.accountResponse?.avatar : "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
            margin="5px"
            padding="1px"
          />
          <HStack w='15%' h='100%'>
          <Text fontSize='16px' fontWeight='600'>{infoDoctor.accountResponse?.name}</Text>
          </HStack>
          
          <Input placeholder="Search..." ></Input>
          <Button>
            <FaSearch />
          </Button>
        </HStack>
        <HStack
          w="95%"
          h="10%"
          bgColor="#F5F5F5"
          borderRadius="11px"
          justifyContent="space-around"
        >
          <HStack w="20%" h="100%">
            <HStack
              w="20%"
              h="62%"
              bgColor="red.300"
              justify="center"
              borderRadius="90px"
            >
              <FaChild size="25" color="white" />
            </HStack>
            <Box>
              <Text fontSize="20px" fontWeight="400">
                Total Patients
              </Text>
              <Text fontSize="20px" fontWeight="600">
                7
              </Text>
            </Box>
          </HStack>
          <HStack w="20%" h="100%">
            <HStack
              w="20%"
              h="62%"
              bgColor="#6AE0D9"
              justify="center"
              borderRadius="90px"
            >
              <FaCalendarAlt size="25" color="white" />
            </HStack>
            <Box>
              <Text fontSize="20px" fontWeight="400">
                Appointments
              </Text>
              <Text fontSize="20px" fontWeight="600">
                7
              </Text>
            </Box>
          </HStack>
          <HStack w="20%" h="100%">
            <HStack
              w="20%"
              h="62%"
              bgColor="#6AE0D9"
              justify="center"
              borderRadius="90px"
            >
              <FaCalendarAlt size="25" color="white" />
            </HStack>
            <Box>
              <Text fontSize="20px" fontWeight="400">
                Appointments
              </Text>
              <Text fontSize="20px" fontWeight="600">
                7
              </Text>
            </Box>
          </HStack>
          <HStack w="20%" h="100%">
            <HStack
              w="20%"
              h="62%"
              bgColor="#6AE0D9"
              justify="center"
              borderRadius="90px"
            >
              <FaCalendarAlt size="25" color="white" />
            </HStack>
            <Box>
              <Text fontSize="20px" fontWeight="400">
                Appointments
              </Text>
              <Text fontSize="20px" fontWeight="600">
                7
              </Text>
            </Box>
          </HStack>{' '}
        </HStack>
        <Box w="100%" h="7%">
          <Text fontSize="2xl" fontWeight="600">
            Today's Appointments
          </Text>
        </Box>
        {/* <Appointment/> */}
      </VStack>
    </HStack>
  );
};

export default HomePage;
