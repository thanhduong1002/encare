import { HStack, Image, Text, VStack } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaCalendarAlt, FaCheckCircle, FaClock } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const TestAppoint = () => {
  const [doctor, setDoctor] = useState([]);
  let token = localStorage.getItem('token');
  useEffect(() => {
    // fetch('http://localhost:3001/data')
    //   .then(response => response.json())
    //   .then(data => setDoctor(data));
    axios({
      baseURL: 'https://enclave-encare.herokuapp.com/api/doctor/appointment',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        console.log(res.data.data);
        setDoctor(res.data.data)
      })
      .catch(error => {
        console.log(error);
      });
  });

  return (
    <VStack w="100vw" h="100vh">
      {doctor.map((element, index) => {
        return (
          <HStack
            w={'70%'}
            h={'20vh'}
            bgColor="#E8F9FD"
            justify={'space-around'}
            alignItems={'center'}
            borderRadius="8px"
            key={index}
          >
            <Image
              src={
                element.userResponse.accountResponse.avatar !== null
                  ? element.userResponse.accountResponse.avatar
                  : 'https://media.istockphoto.com/vectors/health-icon-vector-of-male-person-profile-avatar-symbol-for-patient-vector-id1147248211'
              }
              w={'15%'}
              h={'15vh'}
              borderRadius="8px"
            />

            <VStack w={'45%'} h={'15vh'} borderRadius={'8px'}>
              <Text fontWeight={'600'} fontSize="xl" color={'#2155CD'}>
                {element.userResponse.accountResponse.name}
              </Text>
              <Text fontSize={'sm'} color={'#2155CD'}>
                {element.doctorResponse.categoryResponse.name}
              </Text>
              <Text fontSize={'sm'} color={'#2155CD'}>
                {element.userResponse.accountResponse.phone}
              </Text>
              <HStack>
                {element.statusResponse.statusId === 1 ? (
                  <FaClock size={20} />
                ) : (
                  <FaCheckCircle size={20} />
                )}
                <Text fontSize={'sm'} color={'green.500'}>
                  {element.statusResponse.name}
                </Text>
              </HStack>
            </VStack>
            <VStack w={'20%'} h={'15vh'} borderRadius={'8px'}>
              <FaCalendarAlt color={'#2155CD'} size={23} />

              <Text fontSize={'sm'} color={'#2155CD'}>
                {element.day}
              </Text>
              <Text fontSize={'sm'} color={'#2155CD'} fontWeight="600">
                {element.time < 12 ? element.time + " AM" : element.time + " PM"} 
              </Text>
              <NavLink to="/infoapp">More</NavLink>
            </VStack>
          </HStack>
        );
      })}
    </VStack>
  );
};

export default TestAppoint;
