import {VStack } from '@chakra-ui/react';
import React from 'react';
import Appointment from '../components/Appointment';

import Navbar from '../components/Navbar';
import TestAppoint from '../components/TestAppoint';

const AppointmentPage = () => {
  return (
    <VStack>
      <Navbar />
      <TestAppoint/>
    </VStack>
  );
};

export default AppointmentPage;
