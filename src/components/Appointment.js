import { HStack, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const Appointment = () => {
  return (
    <VStack w="100vw" h="100vh">
      <HStack
        w={'70%'}
        h={'20vh'}
        bgColor="#E8F9FD"
        justify={'space-around'}
        alignItems={'center'}
        borderRadius="8px"
      >
        <Image
          src="https://i.pinimg.com/564x/e9/27/18/e92718fef313e59f1e6ae10a6273cfc4.jpg"
          w={'15%'}
          h={'15vh'}
          borderRadius="8px"
        />

        <VStack w={'45%'} h={'15vh'} borderRadius={'8px'}>
          <Text fontWeight={'600'} fontSize="xl" color={'#2155CD'}>
            Nguyen Van Son
          </Text>
          <Text fontSize={'sm'} color={'#2155CD'}>
            Kham Rang
          </Text>
          <Text fontSize={'sm'} color={'#2155CD'}>
            123 Ngo Si Lien, Hoa Khanh Bac, Lien Chieu, Da Nang
          </Text>
        </VStack>
        <VStack w={'20%'} h={'15vh'} borderRadius={'8px'}>
          <FaCalendarAlt color={'#2155CD'} size={23} />

          <Text fontSize={'sm'} color={'#2155CD'}>
            26 June 2022
          </Text>
          <Text fontSize={'sm'} color={'#2155CD'} fontWeight="600">
            9:30
          </Text>
        </VStack>
      </HStack>
      <HStack
        w={'70%'}
        h={'20vh'}
        bgColor="#E8F9FD"
        justify={'space-around'}
        alignItems={'center'}
        borderRadius="8px"
      >
        <Image
          src="https://i.pinimg.com/564x/90/84/a9/9084a973b2f8792386b81342706a5ee4.jpg"
          w={'15%'}
          h={'15vh'}
          borderRadius="8px"
        />

        <VStack w={'45%'} h={'15vh'} borderRadius={'8px'}>
          <Text fontWeight={'600'} fontSize="xl" color={'#2155CD'}>
            Tran Van Ro
          </Text>
          <Text fontSize={'sm'} color={'#2155CD'}>
            Kham Tim
          </Text>
          <Text fontSize={'sm'} color={'#2155CD'}>
            50 Ngo Thi Nham, Hoa Khanh Bac, Lien Chieu, Da Nang
          </Text>
        </VStack>
        <VStack w={'20%'} h={'15vh'} borderRadius={'8px'}>
          <FaCalendarAlt color={'#2155CD'} size={23} />

          <Text fontSize={'sm'} color={'#2155CD'}>
            26 June 2022
          </Text>
          <Text fontSize={'sm'} color={'#2155CD'} fontWeight="600">
            10:30
          </Text>
        </VStack>
      </HStack>
      <HStack
        w={'70%'}
        h={'20vh'}
        bgColor="#E8F9FD"
        justify={'space-around'}
        alignItems={'center'}
        borderRadius="8px"
      >
        <Image
          src="https://i.pinimg.com/564x/a5/9f/9d/a59f9d1df60d36d801a4bb7b70246f25.jpg"
          w={'15%'}
          h={'15vh'}
          borderRadius="8px"
        />

        <VStack w={'45%'} h={'15vh'} borderRadius={'8px'}>
          <Text fontWeight={'600'} fontSize="xl" color={'#2155CD'}>
            Le Van Si
          </Text>
          <Text fontSize={'sm'} color={'#2155CD'}>
            Kham Tai Mui Hong
          </Text>
          <Text fontSize={'sm'} color={'#2155CD'}>
            52 Nguyen Luong Bang, Hoa Khanh Bac, Lien Chieu, Da Nang
          </Text>
        </VStack>
        <VStack w={'20%'} h={'15vh'} borderRadius={'8px'}>
          <FaCalendarAlt color={'#2155CD'} size={23} />

          <Text fontSize={'sm'} color={'#2155CD'}>
            26 June 2022
          </Text>
          <Text fontSize={'sm'} color={'#2155CD'} fontWeight="600">
            11:30
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Appointment;
