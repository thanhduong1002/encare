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
import React, { useState } from 'react';
import { FaCalendarAlt, FaChild, FaSearch, FaTimesCircle } from 'react-icons/fa';
import Navigation from '../components/Navigation';
import Page1 from '../components/SearchAppoints/Page1';
import Page2 from '../components/SearchAppoints/Page2';
import Page3 from '../components/SearchAppoints/Page3';
import Page4 from '../components/SearchAppoints/Page4';
import Page5 from '../components/SearchAppoints/Page5';

const TestPage = () => {
  const [nameSearch, setNameSearch] = useState('');
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(false);
  const handleSearch = () => {
    console.log(nameSearch);
    setShow(true);
    hide === true ? setHide(false) : setHide(true);
    console.log(show, hide);
  };

  return (
    <HStack>
      <Navigation />
      <VStack w="80vw" h="100vh">
        <HStack w="96%" h="7%" flexDirection="row-reverse">
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
          <HStack w="11%" h="100%">
            <Text fontSize="16px" fontWeight="600">
              {localStorage.getItem('Name')}
            </Text>
          </HStack>

          {/* <Input
            placeholder="Search name..."
            value={nameSearch}
            onChange={e => setNameSearch(e.target.value)}
          ></Input> */}
          {hide === false ? (<Input
            value={nameSearch}
            onChange={e => setNameSearch(e.target.value)}
            isDisabled={true}
          ></Input>) : (<Input
            placeholder="Search name..."
            value={nameSearch}
            onChange={e => setNameSearch(e.target.value)}
          ></Input>)}  
          <Button onClick={() => handleSearch()}>
            {hide === true ? (<FaSearch />) : (<FaTimesCircle/>)}            
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
                Waiting
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
                Confirmed
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
                Done
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
        {show === true && hide === false ? (
          <Box w="78vw">
            <Tabs align="center">
              <TabPanels>
                <TabPanel>
                  <Page1 data={nameSearch} />
                </TabPanel>
                <TabPanel>
                  <Page2 data={nameSearch} />
                </TabPanel>
                <TabPanel>
                  <Page3 data={nameSearch} />
                </TabPanel>
                <TabPanel>
                  <Page4 data={nameSearch} />
                </TabPanel>
                <TabPanel>
                  <Page5 data={nameSearch} />
                </TabPanel>
              </TabPanels>
              <Box w="20%" h="7vh" pos="fixed" bottom="10px" right="8vw">
                <TabList>
                  <Tab>1</Tab>
                  <Tab>2</Tab>
                  <Tab>3</Tab>
                  <Tab>4</Tab>
                  <Tab>5</Tab>
                </TabList>
              </Box>
            </Tabs>
          </Box>
        ) : null}
      </VStack>
    </HStack>
  );
};

export default TestPage;
