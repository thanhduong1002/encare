import { HStack, Text, VStack, Button, Avatar } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Appointment = () => {
  const [infoAllApp, setInfoAllApp] = useState([]);
  let token = localStorage.getItem('token');
  const navigate = useNavigate();
  useEffect(() => {
    axios({
      baseURL: 'https://enclave-encare.herokuapp.com/api/doctor/appointments',
      // baseURL: 'http://13.229.228.132/api/doctor/appointments',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        console.log(res.data.data);
        setInfoAllApp(res.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  let x, sta;
  const handleTest = () => {
    console.log(x);
    localStorage.setItem('IDAppoint', x);
    localStorage.setItem('IDStatus', sta);
    navigate('/infoapp');
  };
  return (
    <VStack w="80vw" h="100vh">
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
      {infoAllApp.map((element, index) => {
        return (
          <HStack w="95%" h="8%" key={index}>
            <HStack w="25%" h="100%">
              <Avatar
                name="Segun Adebayo"
                src={
                  element.userResponse?.accountResponse?.avatar
                    ? element.userResponse?.accountResponse?.avatar
                    : 'https://media.istockphoto.com/vectors/health-icon-vector-of-male-person-profile-avatar-symbol-for-patient-vector-id1147248211'
                }
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
              {element.statusResponse?.statusId === 1 ? (
                <Button
                  colorScheme="yellow"
                  onClick={() => {
                    x = element.appointmentId;
                    sta = element.statusResponse?.statusId;
                    handleTest();
                  }}
                >
                  Wait
                </Button>
              ) : element.statusResponse?.statusId === 2 ? (
                <Button
                  colorScheme="green"
                  onClick={() => {
                    x = element.appointmentId;
                    sta = element.statusResponse?.statusId;
                    handleTest();
                  }}
                >
                  Confirmed
                </Button>
              ) : element.statusResponse?.statusId === 3 ? (
                <Button
                  colorScheme="blue"
                  onClick={() => {
                    x = element.appointmentId;
                    sta = element.statusResponse?.statusId;
                    handleTest();
                  }}
                >
                  Done
                </Button>
              ) : (
                <Button
                  colorScheme="red"
                  onClick={() => {
                    x = element.appointmentId;
                    sta = element.statusResponse?.statusId;
                    handleTest();
                  }}
                >
                  Cancelled
                </Button>
              )}
            </HStack>
          </HStack>
        );
      })}
    </VStack>
  );
};

export default Appointment;
