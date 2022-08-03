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
  const [descrip, setDescrip] = useState(() =>
    localStorage.getItem('DescripPatient')
  );
  let token = localStorage.getItem('token');
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
        res.data.status === 200
          ? toast({
              title: 'Done Appointment',
              status: 'success',
              isClosable: true,
            })
          : toast({
              title: "Can't done appointment",
              status: 'warning',
              isClosable: true,
            });
      })
      .catch(error => {
        console.log(error);
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
        res.data.status === 200
          ? toast({
              title: 'Updated Description',
              status: 'success',
              isClosable: true,
            })
          : toast({
              title: "Can't updated Description",
              status: 'warning',
              isClosable: true,
            });
      })
      .catch(error => {
        console.log(error);
      });
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
      <Box w="95%" h="10vh">
        <Button
          w="10vw"
          h="100%"
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
      </Box>
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
              localStorage.getItem('AvatarPatient') === 'null'
                ? 'https://images.unsplash.com/photo-1576765974028-008094730ee4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1178&q=80'
                : localStorage.getItem('AvatarPatient') === ''
                ? 'https://images.unsplash.com/photo-1576765974028-008094730ee4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1178&q=80'
                : localStorage.getItem('AvatarPatient')
            }
            w="100%"
            h="32vh"
            borderRadius="8px"
          />
          <Text fontWeight={'600'} fontSize="xl" color={'#2155CD'}>
            {localStorage.getItem('NamePatient')}
          </Text>
          <Text fontWeight={'600'} fontSize="md" color={'#2155CD'}>
            {localStorage.getItem('BirthPatient') !== 'null'
              ? localStorage.getItem('BirthPatient')?.slice(0, 10)
              : null}
          </Text>
          <Text fontWeight={'600'} fontSize="md" color={'#2155CD'}>
            {localStorage.getItem('PhonePatient')}
          </Text>
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
          <Text>{localStorage.getItem('SymptomPatient')}</Text>
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
                onChange={e => setDescrip(e.target.value)}
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
                  {localStorage.getItem('DayPatient')?.slice(0, 2)}
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
                  {localStorage.getItem('DayPatient')?.slice(3, 5)}
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
                  {localStorage.getItem('DayPatient')?.slice(6, 10)}
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
                  {localStorage.getItem('TimePatient')}:00
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
                onClick={() => {
                  localStorage.setItem(
                    'waitingPatients',
                    (
                      parseInt(localStorage.getItem('waitingPatients')) - 1
                    ).toString()
                  );
                  handleCancel();
                }}
              >
                Cancel
              </Button>
              <Button
                bgColor="green.400"
                w="20%"
                fontSize="16"
                fontWeight="bold"
                onClick={() => {
                  localStorage.setItem(
                    'confirmedPatients',
                    (
                      parseInt(localStorage.getItem('confirmedPatients')) + 1
                    ).toString()
                  );
                  localStorage.setItem(
                    'waitingPatients',
                    (
                      parseInt(localStorage.getItem('waitingPatients')) - 1
                    ).toString()
                  );
                  handleConfirm();
                }}
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
                onClick={() => {
                  localStorage.setItem(
                    'confirmedPatients',
                    (
                      parseInt(localStorage.getItem('confirmedPatients')) - 1
                    ).toString()
                  );
                  localStorage.setItem(
                    'donePatients',
                    (
                      parseInt(localStorage.getItem('donePatients')) + 1
                    ).toString()
                  );
                  handleDone();
                }}
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
