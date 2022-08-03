import {
  Box,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import Page1 from './ConfirmAppoints/Page1';
import Page2 from './ConfirmAppoints/Page2';
import Page3 from './ConfirmAppoints/Page3';

const ConfirmAppoint = () => {
  return (
    <VStack w="78vw" h="100%">       
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
        <Box w='100%'>
        <Tabs  align='center'>
          <TabPanels>
            <TabPanel>
              <Page1 />
            </TabPanel>
            <TabPanel>
              <Page2 />
            </TabPanel>
            <TabPanel>
              <Page3 />
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
  );
};

export default ConfirmAppoint;
