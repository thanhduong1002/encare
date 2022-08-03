import {
  Avatar,
  Box,
  Button,
  HStack,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { FaCalendarAlt, FaChild, FaSearch } from 'react-icons/fa';
import Page1 from '../components/CancelAppoints/Page1';
import Page2 from '../components/CancelAppoints/Page2';
const TestPage = () => {
  
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

          <Input placeholder="Search..."></Input>
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
        <Box w='100%' h='80vh'>
        <Tabs  align='center'>
          <TabPanels>
            <TabPanel>
              <Page1 />
            </TabPanel>
            <TabPanel>
              <Page2 />
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
          <Box w='20%' h='7vh' pos='fixed' bottom='10px' right='8vw'>
          <TabList>
            <Tab>1</Tab>
            <Tab>2</Tab>
            <Tab>3</Tab>
          </TabList>
          </Box>
        </Tabs>
        </Box>
      </VStack>
    </HStack>
  );
};

export default TestPage;
