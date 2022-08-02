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
import React from 'react';

import Navigation from '../components/Navigation';
import ConfirmAppoint from '../components/ConfirmAppoint';
import HistoryAppoint from '../components/HistoryAppoint';
import OverviewAppoint from '../components/OverviewAppoint';
import { FaCalendarAlt, FaChild, FaSearch } from 'react-icons/fa';
import CancelAppoint from '../components/CancelAppoint';

const AppointmentPage = () => {
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

        <Box w="80vw">
          <Tabs variant="soft-rounded" colorScheme="blue">
            <TabList>
              <Tab>Overview</Tab>
              <Tab>History</Tab>
              <Tab>Confirm</Tab>
              <Tab>Canceled</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <OverviewAppoint />
              </TabPanel>
              <TabPanel>
                <HistoryAppoint />
              </TabPanel>
              <TabPanel>
                <ConfirmAppoint />
              </TabPanel>
              <TabPanel>
                <CancelAppoint />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </VStack>
    </HStack>
  );
};

export default AppointmentPage;
