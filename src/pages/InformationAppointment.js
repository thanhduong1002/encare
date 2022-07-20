import { Box, Button, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { FaAngleLeft, FaMapMarkedAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'

const InformationAppointment = () => {
    const toast = useToast();
    const handleCancel = () => {
        toast({
            title: 'Appointment canceled',
            status: 'error',
            isClosable: true,
          })
    }
  const handleConfirm = () => {
    toast({
        title: 'Appointment confirmed',
        status: 'success',
        isClosable: true,
      })
  };
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/appointment');
  };
  return (
    <VStack
      w="100vw"
      h="100vh"
      bgGradient="linear(to-r, #E7F6F2, #A5C9CA)"
      justify="center"
    >
      <Button
        w="10vw"
        h="10vh"
        bgColor="blackAlpha.200"
        justify="center"
        onClick={handleBack}
        letterSpacing='2px'
      >
        <FaAngleLeft size='30'/>
        <Text fontSize='23' fontWeight='bold'> Back</Text>
      </Button>
      <HStack
        w="95%"
        h="60%"
        bgColor="white"
        boxShadow="dark-lg"
        borderRadius="8px"
        justify="center"
      >
        <VStack w="30%" h="90%">
          <Image
            src="https://i.pinimg.com/564x/e9/27/18/e92718fef313e59f1e6ae10a6273cfc4.jpg"
            w="100%"
            borderRadius="8px"
          />
          {/* <VStack w='100%' h='15%' bgColor='#E7F6F2' boxShadow='dark-lg' borderRadius='8px'> */}
          <Text fontWeight={'600'} fontSize="xl" color={'#2155CD'}>
            Nguyen Van Son
          </Text>
          <Text fontWeight={'600'} fontSize="md" color={'#2155CD'}>
            16/05/1993
          </Text>
          {/* </VStack> */}
          <HStack w="100%" h="20%" justifyContent="space-around">
            <Button bgColor="#395B64" color="#E7F6F2">
              Info
            </Button>
            <Button bgColor="#395B64" color="#E7F6F2">
              Medical record
            </Button>
          </HStack>
        </VStack>
        <Box
          w="60%"
          h="90%"
          bgColor="#0063EC"
          borderRadius="8px"
          letterSpacing="2px"
          boxShadow="dark-lg"
          color="white"
          padding="1%"
        >
          <Text fontWeight="bold" fontSize="xl">
            Symptoms:
          </Text>
          <Text>Tê tay mỏi gối đau lưng</Text>
          <Text fontWeight="bold" fontSize="xl">
            Location:
          </Text>
          <Text>
            <FaMapMarkedAlt size="40" />
            123 Ngo Si Lien, Hoa Khanh Bac, Lien Chieu, Da Nang
          </Text>
          <Text fontWeight="bold" fontSize="xl">
            Appointment:
          </Text>
          <HStack w="100%" h="20%" justifyContent="space-between">
            <VStack w="20%" h="100%">
              <Text>Day</Text>
              <HStack
                w="80%"
                h="60%"
                borderColor="white"
                borderWidth="2px"
                borderRadius="8px"
                justify="center"
              >
                <Text fontWeight="bold" fontSize="23">
                  16
                </Text>
              </HStack>
            </VStack>
            <VStack w="20%" h="100%">
              <Text>Month</Text>
              <HStack
                w="80%"
                h="60%"
                borderColor="white"
                borderWidth="2px"
                borderRadius="8px"
                justify="center"
              >
                <Text fontWeight="bold" fontSize="23">
                  5
                </Text>
              </HStack>
            </VStack>
            <VStack w="20%" h="100%">
              <Text>Year</Text>
              <HStack
                w="80%"
                h="60%"
                borderColor="white"
                borderWidth="2px"
                borderRadius="8px"
                justify="center"
              >
                <Text fontWeight="bold" fontSize="23">
                  1993
                </Text>
              </HStack>
            </VStack>
            <VStack w="20%" h="100%">
              <Text>Time</Text>
              <HStack
                w="80%"
                h="60%"
                borderColor="white"
                borderWidth="2px"
                borderRadius="8px"
                justify="center"
              >
                <Text fontWeight="bold" fontSize="23">
                  8:00
                </Text>
              </HStack>
            </VStack>
          </HStack>
          <HStack w="100%" h="20%" marginTop="5%" justifyContent="space-around">
            <Button bgColor="red.300" w="20%" fontSize="16" fontWeight="bold" onClick={handleCancel}>
              Cancel
            </Button>
            <Button
              bgColor="green.400"
              w="20%"
              fontSize="16"
              fontWeight="bold"
              onClick={handleConfirm}
            >
              Confirm
            </Button>
          </HStack>
        </Box>
      </HStack>
    </VStack>
  );
};

export default InformationAppointment;
