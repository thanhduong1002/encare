import { Avatar, Button, HStack, Text, VStack } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const HistoryAppoint = () => {
  const [apphis, setAppHis] = useState([]);
  let token = localStorage.getItem('token');
  useEffect(() => {
    axios({
      baseURL:
        'https://enclave-encare.herokuapp.com/api/doctor/appointments/status=3',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        console.log(res.data.data);
        setAppHis(res.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <VStack w="80vw">
      <HStack
        w="95%"
        h="8%"
        borderColor="#6AE0D9"
        borderTopWidth="2px"
        borderBottomWidth="2px"
      >
        <HStack w="25%" h="100%">
          <Text fontSize="18px" fontWeight="600">
            Name
          </Text>
        </HStack>
        <HStack w="15%" h="100%">
          <Text fontSize="18px" fontWeight="600">
            Date
          </Text>
        </HStack>
        <HStack w="10%" h="100%">
          <Text fontSize="18px" fontWeight="600">
            Time
          </Text>
        </HStack>
        <HStack w="25%" h="100%">
          <Text fontSize="18px" fontWeight="600">
            Address
          </Text>
        </HStack>
        <HStack w="15%" h="100%">
          <Text fontSize="18px" fontWeight="600">
            Description
          </Text>
        </HStack>
        <HStack w="10%" h="100%">
          <Text fontSize="18px" fontWeight="600">
            Status
          </Text>
        </HStack>
      </HStack>
      {apphis.map((element, index) => {
        return (
          <HStack w="95%" h="8%" key={index}>
            <HStack w="25%" h="100%">
              <Avatar
                name="Segun Adebayo"
                src="https://media.istockphoto.com/vectors/health-icon-vector-of-male-person-profile-avatar-symbol-for-patient-vector-id1147248211"
              />
              <Text fontSize="15px" fontWeight="400">
                {element.userResponse?.accountResponse?.name}
              </Text>
            </HStack>
            <HStack w="15%" h="100%">
              <Text fontSize="15px" fontWeight="400">
                {element.day?.slice(0, 10)}
              </Text>
            </HStack>
            <HStack w="10%" h="100%">
              <Text fontSize="18px" fontWeight="700">
                {element.time}:00
              </Text>
            </HStack>
            <HStack w="25%" h="100%">
              <Text fontSize="15px" fontWeight="400">
                74/2 Nguyen Luong Bang, Lien Chieu, Da Nang
              </Text>
            </HStack>
            <HStack w="15%" h="100%">
              <Text fontSize="15px" fontWeight="400">
                {element.doctorResponse?.categoryResponse?.name}
              </Text>
            </HStack>
            <HStack w="10%" h="100%">
              <Button colorScheme="blue">Done</Button>
            </HStack>
          </HStack>
        );
      })}
    </VStack>
  );
};

export default HistoryAppoint;
