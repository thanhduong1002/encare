import {HStack} from '@chakra-ui/react';
import React from 'react';

import Navigation from '../components/Navigation';
import Appointment from '../components/Appointment';

const AppointmentPage = () => {
  return (
    <HStack>
      <Navigation />
      <Appointment />
    </HStack>
  );
};

export default AppointmentPage;
