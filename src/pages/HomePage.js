import {
  Avatar,
  Box,
  Button,
  HStack,
  Input,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import {
  FaCalendarAlt,
  FaChevronLeft,
  FaChild,
  FaSearch,
} from 'react-icons/fa';
import Navigation from '../components/Navigation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [nameSearch, setNameSearch] = useState('');
  const [appSearch, setAppSearch] = useState([]);
  const [description, setDescription] = useState('');
  let token = localStorage.getItem('token');
  const toast = useToast();
  const handleSearch = () => {
    localStorage.setItem('NumberPage', 1);
    axios({
      baseURL: `https://encare-doctor.herokuapp.com/api/doctor/appointment/search?keywords=${nameSearch}&page=1`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        setAppSearch(res.data.data);
        setDescription(res.data.description);
      })
      .catch(error => {
        console.log(error);
        toast({
          title: 'No matching results',
          status: 'error',
          isClosable: true,
        });
      });
  };
  const handleNextPage = () => {
    let numberpage = parseInt(localStorage.getItem('NumberPage')) + 1;
    localStorage.setItem('NumberPage', numberpage);
    axios({
      baseURL: `https://encare-doctor.herokuapp.com/api/doctor/appointment/search?keywords=${nameSearch}&page=${numberpage}`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        setAppSearch(res.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const navigate = useNavigate();
  const handleTest = () => {
    navigate('/infoapp');
  };
  return (
    <HStack>
      <Navigation />
      <VStack w="80vw" h="100vh">
        <HStack w="100%" h="7%" flexDirection="row-reverse">
          <Avatar
            name={localStorage.getItem('Name')}
            src={
              localStorage.getItem('Avatar') !== 'string'
                ? localStorage.getItem('Avatar')
                : 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            }
            margin="5px"
            padding="1px"
          />
          <HStack w="15%" h="100%">
            <Text fontSize="16px" fontWeight="600">
              {localStorage.getItem('Name')}
            </Text>
          </HStack>

          <Input
            placeholder="Search name..."
            value={nameSearch}
            onChange={e => setNameSearch(e.target.value)}
          ></Input>
          <Button onClick={() => handleSearch()}>
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
                {localStorage.getItem('total')}
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
                Waiting Appointments
              </Text>
              <Text fontSize="20px" fontWeight="600">
                {localStorage.getItem('waitingPatients')}
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
                Confirmed Appointments
              </Text>
              <Text fontSize="20px" fontWeight="600">
                {localStorage.getItem('confirmedPatients')}
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
                Done Appointments
              </Text>
              <Text fontSize="20px" fontWeight="600">
                {localStorage.getItem('donePatients')}
              </Text>
            </Box>
          </HStack>{' '}
        </HStack>
        <Box w="100%" h="7%">
          <Text fontSize="2xl" fontWeight="600">
            Search results
          </Text>
        </Box>
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
              Symptoms
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
        {appSearch
          ? appSearch.map((element, index) => {
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
                  {element.statusResponse?.statusId === 2 ? (
                    <HStack w="10%" h="100%">
                      <Button
                        colorScheme="green"
                        onClick={() => {
                          localStorage.setItem(
                            'IDAppoint',
                            element.appointmentId
                          );
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
                          localStorage.setItem(
                            'SymptomPatient',
                            element.symptoms
                          );
                          localStorage.setItem(
                            'DescripPatient',
                            element.description
                          );
                          localStorage.setItem('DayPatient', element.day);
                          localStorage.setItem('TimePatient', element.time);
                          handleTest();
                        }}
                      >
                        Confirmed
                      </Button>
                    </HStack>
                  ) : element.statusResponse?.statusId === 1 ? (
                    <HStack w="10%" h="100%">
                      <Button
                        colorScheme="yellow"
                        onClick={() => {
                          localStorage.setItem(
                            'IDAppoint',
                            element.appointmentId
                          );
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
                          localStorage.setItem(
                            'SymptomPatient',
                            element.symptoms
                          );
                          localStorage.setItem(
                            'DescripPatient',
                            element.description
                          );
                          localStorage.setItem('DayPatient', element.day);
                          localStorage.setItem('TimePatient', element.time);
                          handleTest();
                        }}
                      >
                        Waiting
                      </Button>
                    </HStack>
                  ) : element.statusResponse?.statusId === 3 ? (
                    <HStack w="10%" h="100%">
                      <Button
                        colorScheme="blue"
                        onClick={() => {
                          localStorage.setItem(
                            'IDAppoint',
                            element.appointmentId
                          );
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
                          localStorage.setItem(
                            'SymptomPatient',
                            element.symptoms
                          );
                          localStorage.setItem(
                            'DescripPatient',
                            element.description
                          );
                          localStorage.setItem('DayPatient', element.day);
                          localStorage.setItem('TimePatient', element.time);
                          handleTest();
                        }}
                      >
                        Done
                      </Button>
                    </HStack>
                  ) : (
                    <HStack w="10%" h="100%">
                      <Button
                        colorScheme="red"
                        onClick={() => {
                          localStorage.setItem(
                            'IDAppoint',
                            element.appointmentId
                          );
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
                          localStorage.setItem(
                            'SymptomPatient',
                            element.symptoms
                          );
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
                  )}
                </HStack>
              );
            })
          : null}

        <HStack w="20%" h="7vh" pos="fixed" bottom="10px" right="5vw">
          {parseInt(localStorage.getItem('NumberPage')) !== 1 ? (
            <Button
              colorScheme="teal"
              leftIcon={<FaChevronLeft />}
              onClick={() => {
                localStorage.setItem(
                  'NumberPage',
                  parseInt(localStorage.getItem('NumberPage')) - 2
                );
                handleNextPage();
              }}
            >
              Previous
            </Button>
          ) : null}

          {description.slice(0, 2) -
            parseInt(localStorage.getItem('NumberPage')) * 6 >=
          0 ? (
            <Button
              onClick={() => handleNextPage()}
              colorScheme="teal"
              rightIcon={<FaCalendarAlt />}
            >
              {description.slice(0, 2) -
                parseInt(localStorage.getItem('NumberPage')) * 6 >=
              0
                ? description.slice(0, 2) -
                  parseInt(localStorage.getItem('NumberPage')) * 6
                : 0}{' '}
              results left
            </Button>
          ) : null}
        </HStack>
      </VStack>
    </HStack>
  );
};

export default HomePage;
