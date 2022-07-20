import {
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import Appointment from '../components/Appointment';
import Navbar from '../components/Navbar';
const HomePage = () => {
  return (
    <VStack>
      <Navbar />
      <Image
        src="https://friendlystock.com/wp-content/uploads/2021/11/4-hospital-building-background-cartoon.jpg"
        objectFit="cover"
        alt="home_image"
        left={50}
        w="70%"
        borderRadius={'8px'}
      />
      <Text fontSize={'4xl'}>Upcoming Appointment</Text>

      <Appointment />
    </VStack>
  );
};

export default HomePage;
