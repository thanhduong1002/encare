import {Text, VStack } from '@chakra-ui/react';
import React from 'react';

import Navbar from '../components/Navbar';

const AppointmentPage = () => {
  return (
    <VStack>
      <Navbar />
      <Text>This is Appointment Page</Text>
    </VStack>
  );
};

export default AppointmentPage;
