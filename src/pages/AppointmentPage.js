import {VStack } from '@chakra-ui/react';
import React from 'react';
import Appointment from '../components/Appointment';

import Navbar from '../components/Navbar';

const AppointmentPage = () => {
  return (
    <VStack>
      <Navbar />
      <Appointment/>
    </VStack>
  );
};

export default AppointmentPage;
