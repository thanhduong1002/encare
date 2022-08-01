import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FaAngleLeft, FaMapMarkedAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';

const InformationAppointment = () => {
  const idAppoint = localStorage.getItem('IDAppoint');
  const idStatus = localStorage.getItem('IDStatus');
  const [infoApp, setInfoApp] = useState([]);
  const [descrip, setDescrip] = useState('');
  let token = localStorage.getItem('token');
  useEffect(() => {
    axios({
      baseURL: `https://enclave-encare.herokuapp.com/api/doctor/appointment/${idAppoint}`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        console.log(res.data.data);
        setInfoApp(res.data.data);
        
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  const toast = useToast();
  const handleCancel = () => {
    axios({
      baseURL: `https://enclave-encare.herokuapp.com/api/doctor/appointment/${idAppoint}/cancel`,
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        console.log(res.data.data);
        res.data.status === 200
              ? toast({
                  title: 'Canceled Appointment',
                  status: 'error',
                  isClosable: true,
                })
              : toast({
                  title: "Can't cancel appointment",
                  status: 'warning',
                  isClosable: true,
                });
      })
      .catch(error => {
        console.log(error);
      });
  };
  const handleConfirm = () => {
    axios({
      baseURL: `https://enclave-encare.herokuapp.com/api/doctor/appointment/${idAppoint}/confirm`,
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        console.log(res.data.data);
        res.data.status === 200
              ? toast({
                  title: 'Confirmed Appointment',
                  status: 'success',
                  isClosable: true,
                })
              : toast({
                  title: "Can't confirm appointment",
                  status: 'warning',
                  isClosable: true,
                });
      })
      .catch(error => {
        console.log(error);
      });
  };
  const handleDone = () => {
    axios({
      baseURL: `https://enclave-encare.herokuapp.com/api/doctor/appointment/${idAppoint}/done`,
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
    toast({
      title: 'Appointment done',
      status: 'info',
      isClosable: true,
    });
  };
  const handleUpdate = () => {
    axios({
      baseURL: `https://enclave-encare.herokuapp.com/api/doctor/appointment/${idAppoint}/descriptions`,
      method: 'put',
      headers: {
        'Content-Type': 'text/plain',
        Authorization: `Bearer ${token}`,
      },
      data: descrip,
    })
      .then(res => {
        console.log(res.data.data);
      })
      .catch(error => {
        console.log(error);
      });
    toast({
      title: 'Appointment done',
      status: 'info',
      isClosable: true,
    });
    console.log(descrip);
  };
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/home');
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
        onClick={handleBack}
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
            src={
              infoApp.userResponse?.accountResponse?.avatar
                ? infoApp.userResponse?.accountResponse?.avatar
                : 'https://i.pinimg.com/564x/e9/27/18/e92718fef313e59f1e6ae10a6273cfc4.jpg'
            }
            w="100%"
            h="32vh"
            borderRadius="8px"
          />
          {/* <VStack w='100%' h='15%' bgColor='#E7F6F2' boxShadow='dark-lg' borderRadius='8px'> */}
          <Text fontWeight={'600'} fontSize="xl" color={'#2155CD'}>
            {infoApp.userResponse?.accountResponse?.name}
          </Text>
          <Text fontWeight={'600'} fontSize="md" color={'#2155CD'}>
            {infoApp.userResponse?.accountResponse?.birthday}
          </Text>
          <Text fontWeight={'600'} fontSize="md" color={'#2155CD'}>
            {infoApp.userResponse?.accountResponse?.phone}
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
          <Text>{infoApp.symptoms}</Text>
          {idStatus === '3' ? (
            <Box>
              <Text fontWeight="bold" fontSize="xl" marginBottom="10px">
                Descriptions:
              </Text>
              <Input
                placeholder="Enter Descriptions"
                marginBottom="10px"
                color="white"
                value={descrip}
                onChange={(e) => setDescrip(e.target.value)}
              ></Input>
            </Box>
          ) : (
            <Box>
              <Text fontWeight="bold" fontSize="xl">
                Location:
              </Text>
              <Text>
                <FaMapMarkedAlt size="40" />
                123 Ngo Si Lien, Hoa Khanh Bac, Lien Chieu, Da Nang
              </Text>
            </Box>
          )}

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
                  {infoApp.day?.slice(0, 2)}
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
                  {infoApp.day?.slice(3, 5)}
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
                  {infoApp.day?.slice(6, 10)}
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
                  {infoApp.time}:00
                </Text>
              </HStack>
            </VStack>
          </HStack>
          {idStatus === '1' ? (
            <HStack
              w="100%"
              h="20%"
              marginTop="5%"
              justifyContent="space-around"
            >
              <Button
                bgColor="red.300"
                w="20%"
                fontSize="16"
                fontWeight="bold"
                onClick={handleCancel}
              >
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
          ) : idStatus === '2' ? (
            <HStack w="100%" h="20%" marginTop="5%" justify="center">
              <Button
                bgColor="blue.300"
                w="20%"
                fontSize="16"
                fontWeight="bold"
                onClick={handleDone}
              >
                Done
              </Button>
            </HStack>
          ) : idStatus === '3' ? (
            <HStack w="100%" h="20%" marginTop="5%" justify="center">
              <Button
                bgColor="blue.300"
                w="20%"
                fontSize="16"
                fontWeight="bold"
                // onClick={handleUpdate}
                onClick={handleUpdate}
              >
                Update
              </Button>
            </HStack>
          ) : null}
        </Box>
      </HStack>
    </VStack>
  );
};

export default InformationAppointment;
