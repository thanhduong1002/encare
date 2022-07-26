import {
  Button,
  HStack,
  ScaleFade,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import {
  FaCalendarAlt,
  FaCommentDots,
  FaHeart,
  FaHome,
  FaKey,
  FaSignOutAlt,
  FaUserCircle,
} from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const { isOpen, onToggle } = useDisclosure();
const navigate = useNavigate();
const handleLogout = () =>{
  navigate('/');
}
  return (
    <HStack w="20vw" h="100vh" bgGradient="linear(to-b, #ccdadf, #07AEB8)">
      <VStack w="100%" h="100%">
        <HStack paddingBottom="5vh">
          <FaHeart size="50" color="#66BFBF" />
          <Text
            fontSize="40px"
            fontWeight="extrabold"
            bgGradient="linear(to-l, #BCD4DF, #07AEB8)"
            bgClip="text"
          >
            EnCare
          </Text>
        </HStack>
        <HStack w="100%">
          <Button
            colorScheme="teal"
            variant="ghost"
            fontSize="23px"
            fontWeight="400"
            color="black"
            onClick={onToggle}
          >
            Main menu
          </Button>
        </HStack>
        <ScaleFade initialScale={0.9} in={isOpen}>
          <VStack w="100%" h="20%">
            <HStack w="100%">
              <FaHome size="20px" color="white" />
              <Button
                colorScheme="teal"
                variant="ghost"
                fontSize="20px"
                color="white"
                
              >
              <NavLink to="/home">Home</NavLink>
                
              </Button>
            </HStack>
            <HStack w="100%">
              <FaCalendarAlt size="20px" color="white" />
              <Button
                colorScheme="teal"
                variant="ghost"
                fontSize="20px"
                color="white"
                
              >
                <NavLink to="/appointment">Appointment</NavLink>
              </Button>
            </HStack>
            <HStack w="100%">
              <FaCommentDots size="20px" color="white" />
              <Button
                colorScheme="teal"
                variant="ghost"
                fontSize="20px"
                color="white"
                
              >
                <NavLink to="/chat">Message</NavLink>
              </Button>
            </HStack>
          </VStack>
        </ScaleFade>
        <HStack w="100%">
          <Button
            colorScheme="teal"
            variant="ghost"
            fontSize="23px"
            fontWeight="400"
            color="black"
            onClick={onToggle}
          >
            Settings
          </Button>
        </HStack>
        <ScaleFade initialScale={0.9} in={isOpen}>
          <HStack w="23vh">
            <FaUserCircle size="20px" color="white" />
            <Button
              colorScheme="teal"
              variant="ghost"
              fontSize="20px"
              color="white"
              
            >
              <NavLink to="/changeProfile">Profile</NavLink>
            </Button>
          </HStack>
          <HStack w="23vh" paddingBottom="30vh">
            <FaKey size="20px" color="white" />
            <Button
              colorScheme="teal"
              variant="ghost"
              fontSize="20px"
              color="white"
              
            >
              <NavLink to="/changePass">Password</NavLink>
            </Button>
          </HStack>
        </ScaleFade>
        <HStack w="100%" h="10%" justify='center'>
          <Button w="70%" h="50px" fontSize="19px" color="#07AEB8" onClick={handleLogout}>
            <FaSignOutAlt/>
            Logout
          </Button>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default Navigation;
