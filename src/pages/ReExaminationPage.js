import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import {
  FaAngleLeft,
  FaChevronCircleDown,
  FaMapMarkedAlt,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';

const ReExaminationPage = () => {
  const idAppoint = localStorage.getItem('IDAppoint');
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [description, setDescrip] = useState('');
  let token = localStorage.getItem('token');
  const toast = useToast();
  const tranferReverseBirthday = birthday => {
    let arraybirthday = birthday.split('-');
    return arraybirthday[2] + '/' + arraybirthday[1] + '/' + arraybirthday[0];
  };
  const handleOK = () => {
    var data = JSON.stringify({
      "appointmentId": idAppoint,
      "time": time,
      "day": tranferReverseBirthday(day),
      "description": description,
      "symptomps": symptoms
    });
    symptoms.split(' ').join('') === '' ? toast({
      title: 'Symptoms are required',
      status: 'error',
      isClosable: true,
    }) : description.split(' ').join('') === '' ? toast({
      title: 'Description are required',
      status: 'error',
      isClosable: true,
    }) : time === '' ? toast({
      title: 'Time are required',
      status: 'error',
      isClosable: true,
    }) : day === '' ? toast({
      title: 'Day are required',
      status: 'error',
      isClosable: true,
    }) : 
    axios({
      baseURL: `https://encare-doctor.herokuapp.com/api/doctor/appointment/${idAppoint}`,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: data
    })
      .then(res => {
        console.log(res.data.data);
        res.data.status === 200
          ? toast({
              title: 'Successful appointment creation',
              status: 'success',
              isClosable: true,
            })
          : toast({
              title: "This time already exists",
              status: 'error',
              isClosable: true,
            });
      })
      .catch(error => {
        console.log(error);
      });
  };
  const navigate = useNavigate();
  return (
    <VStack
      w="100vw"
      h="100vh"
      bgGradient="linear(to-b, #EEFBFF, #66BFBF)"
      justify="center"
    >
      <Box w="95%" h="10vh">
        <Button
          w="7vw"
          h="70%"
          bgColor="#07AEB8"
          justify="center"
          onClick={()=>{navigate('/infoapp')}}
          letterSpacing="2px"
        >
          <FaAngleLeft size="30" color='white'/>
          <Text fontSize="23" fontWeight="bold" color='white'>
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
          <Text fontWeight={'600'} fontSize="xl" color={'#07AEB8'}>
            {localStorage.getItem('NamePatient')}
          </Text>
          <Text fontWeight={'600'} fontSize="md" color={'#07AEB8'}>
            {localStorage.getItem('BirthPatient') !== 'null'
              ? localStorage.getItem('BirthPatient')?.slice(0, 10)
              : null}
          </Text>
          <Text fontWeight={'600'} fontSize="md" color={'#07AEB8'}>
            {localStorage.getItem('PhonePatient')}
          </Text>
        </VStack>
        <Box
          w="60%"
          h="90%"
          bgColor="#05b3be"
          borderRadius="8px"
          letterSpacing="2px"
          boxShadow="dark-lg"
          color="white"
          padding="1%"
        >
          <Text fontWeight="bold" fontSize="xl">
            Symptoms:
          </Text>
          <Input
            value={symptoms}
            onChange={e => setSymptoms(e.target.value)}
          ></Input>
          <Text fontWeight="bold" fontSize="xl">
            Description:
          </Text>
          <Input
            value={description}
            onChange={e => setDescrip(e.target.value)}
          ></Input>
          <Text fontWeight="bold" fontSize="xl">
            Day of Appointment:
          </Text>
          <Input
            type="date"
            variant="outline"
            borderWidth="1px"
            borderColor="#B2C8DF"
            value={day}
            onChange={e => {
              setDay(e.target.value);
            }}
          ></Input>
          <Text fontWeight="bold" fontSize="xl">
            Time:
          </Text>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<FaChevronCircleDown />}
              bgColor='#18978F'
            >
              {time === 7
                ? '7:00'
                : time === 8
                ? '8:00'
                : time === 9
                ? '9:00'
                : time === 10
                ? '10:00'
                : time === 11
                ? ' 11:00'
                : time === 13
                ? '13:00'
                : time === 14
                ? '14:00'
                : time === 15
                ? '15:00'
                : time === 16
                ? '16:00'
                : 'Time'}
            </MenuButton>
            <MenuList bgColor="#18978F">
            <MenuItem
                onClick={() => {
                  setTime(7);
                }}
              >
                7:00
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setTime(8);
                }}
              >
                8:00
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setTime(9);
                }}
              >
                9:00
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setTime(10);
                }}
              >
                10:00
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setTime(11);
                }}
              >
                11:00
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setTime(13);
                }}
              >
                13:00
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setTime(14);
                }}
              >
                14:00
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setTime(15);
                }}
              >
                15:00
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setTime(16);
                }}
              >
                16:00
              </MenuItem>
            </MenuList>
          </Menu>
          <HStack w="100%" h="10vh" justify="center">
            <Button
              bgColor='#18978F'
                fontSize="16"
                fontWeight="bold"
              onClick={() => {
                handleOK();
              }}
            >
              Create
            </Button>
          </HStack>
        </Box>
      </HStack>
    </VStack>
  );
};

export default ReExaminationPage;
