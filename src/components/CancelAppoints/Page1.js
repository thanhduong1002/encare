import {
  Avatar,
  Button,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Page1 = () => {
  const [appcan, setAppCan] = useState([]);
  const navigate = useNavigate();
  let token = localStorage.getItem('token');
  useEffect(() => {
    axios({
      baseURL:
        'https://encare-doctor.herokuapp.com/api/doctor/appointments/status=4?page=1',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        console.log(res.data.data);
        setAppCan(res.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  const handleTest = () => {
    navigate('/infoapp');
  };
  return (
    <VStack>
      {appcan
        ? appcan.map((element, index) => {
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
                <HStack w="20%" h="100%">
                  <Text fontSize="15px" fontWeight="400">
                    {element.symptoms}
                  </Text>
                </HStack>
                <HStack w="20%" h="100%" justify="center">
                  <Text fontSize="15px" fontWeight="400">
                    {element.description}
                  </Text>
                </HStack>
                <HStack w="10%" h="100%">
                  <Button
                    colorScheme="red"
                    onClick={() => {
                      localStorage.setItem('IDAppoint', element.appointmentId);
                      localStorage.setItem(
                        'IDStatus',
                        element.statusResponse?.statusId
                      );
                      localStorage.setItem(
                        'AvatarPatient',
                        element.userResponse?.accountResponse?.avatar
                      );
                      localStorage.setItem(
                        'NamePatient',
                        element.userResponse?.accountResponse?.name
                      );
                      localStorage.setItem(
                        'BirthPatient',
                        element.userResponse?.accountResponse?.birthday
                      );
                      localStorage.setItem(
                        'PhonePatient',
                        element.userResponse?.accountResponse?.phone
                      );
                      localStorage.setItem('SymptomPatient', element.symptoms);
                      localStorage.setItem(
                        'DescripPatient',
                        element.description
                      );
                      localStorage.setItem('DayPatient', element.day);
                      localStorage.setItem('TimePatient', element.time);
                      handleTest();
                    }}
                  >
                    Canceled
                  </Button>
                </HStack>
              </HStack>
            );
          })
        : null}
    </VStack>
  );
};

export default Page1;
