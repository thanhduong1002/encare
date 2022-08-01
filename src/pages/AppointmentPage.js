import {Avatar, Box, Button, HStack, Input, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack} from '@chakra-ui/react';
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
            name="Thanh Duong"
            src="https://i.pinimg.com/736x/22/75/e9/2275e96e3c8b92ccf02f47ad365c38bb.jpg"
            margin="5px"
            padding="1px"
          />
          <HStack w="15%" h="100%">
            <Text fontSize="16px" fontWeight="600">
              Thanh Duong
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
                7
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
                Appointments
              </Text>
              <Text fontSize="20px" fontWeight="600">
                7
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
                Appointments
              </Text>
              <Text fontSize="20px" fontWeight="600">
                7
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
                Appointments
              </Text>
              <Text fontSize="20px" fontWeight="600">
                7
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
                <OverviewAppoint/>
              </TabPanel>
              <TabPanel>
                <HistoryAppoint/>
              </TabPanel>
              <TabPanel>
                <ConfirmAppoint/>
              </TabPanel>
              <TabPanel>
                <CancelAppoint/>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </VStack>
    </HStack>
  );
};

export default AppointmentPage;
