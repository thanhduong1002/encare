import { Box, HStack, Image } from '@chakra-ui/react';
import React from 'react';
import { FaPowerOff } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <HStack w="100%" h="50px" bgColor="#6AE0D9">
        <Image
          src="https://scontent.fdad3-6.fna.fbcdn.net/v/t1.15752-9/276201634_674414820570238_2752450573548164500_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=UgBbsP9f3u4AX_fWwJo&_nc_ht=scontent.fdad3-6.fna&oh=03_AVKWSu-mpfB7LMss9krDCzPsmoKO6gVsRZRX8Y5IsHX_Tw&oe=62EE0248"
          boxSize="50px"
          objectFit="cover"
          alt="logo"
        />
        <NavLink
          to="/home"
          style={{ color: 'blueviolet', fontSize: 23, fontWeight: '700' }}
        >
          Encare
        </NavLink>
        <Box
          h={'30'}
          justifyContent="center"
          alignItems="center"
          _hover={{ bgColor: '#3487c2', color: 'white', borderRadius: '15px' }}
          paddingLeft= {{sm:'1%', md:'5%'}}
          paddingRight= {{sm:'1%', md:'5%'}}
        >
          <NavLink to="/home" style={{ fontWeight: '700' }}>
            {' '}
            Home
          </NavLink>
        </Box>

        <Box
          h={'30'}
          justifyContent="center"
          alignItems="center"
          _hover={{ bgColor: '#3487c2', color: 'white', borderRadius: '15px' }}
          paddingLeft= {{sm:'1%', md:'5%'}}
          paddingRight= {{sm:'1%', md:'5%'}}
        >
          <NavLink to="/appointment" style={{ fontWeight: '700' }}>
            {' '}
            Appointment
          </NavLink>
        </Box>
        <Box
          h={'30'}
          justifyContent="center"
          alignItems="center"
          _hover={{ bgColor: '#3487c2', color: 'white', borderRadius: '15px' }}
          paddingLeft= {{sm:'1%', md:'5%'}}
          paddingRight= {{sm:'1%', md:'5%'}}
        >
          <NavLink to="/chat" style={{ fontWeight: '700' }}>
            {' '}
            Chat
          </NavLink>
        </Box>
        <Box w={'41%'}></Box>
        <Image
          src="https://scontent.fdad3-3.fna.fbcdn.net/v/t1.15752-9/280230014_5624651480918911_5248351531552767759_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=CCc8eAdTKIwAX9vniPN&_nc_ht=scontent.fdad3-3.fna&oh=03_AVLADOZDppnaxDon3Z6jabesm5xwjcu9X5oXRa1i24_3Gw&oe=62EDC12D"
          boxSize="50px"
          objectFit="cover"
          alt="avatar"
          borderRadius={90}
          left={50}
        />
        <NavLink to="/">
          <FaPowerOff />
        </NavLink>
        <NavLink to="/changeProfile">
          <FiSettings />
        </NavLink>
      </HStack>
    );
};

export default Navbar;