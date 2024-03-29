import {
    Box,
    Button,
    HStack,
    Img,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightElement,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import { useFormik } from 'formik';
  import React, { useEffect } from 'react';
  import { FaEye, FaEyeSlash, FaHeart } from 'react-icons/fa';
  import { NavLink, useNavigate } from 'react-router-dom';
  import { loginSchema } from '../schemas/loginSchema';
  import { useToast } from '@chakra-ui/react';
  import axios from 'axios';
  
  const TestLogin = () => {
    const toast = useToast();
    let result = '';
    const tranferPage = () => {
      localStorage.setItem('data', result.accountId);
      localStorage.setItem('token', result.token);
      localStorage.setItem('password', values.password);
      console.log(result);
      let token = localStorage.getItem('token');
      //Get profile doctor
      
      navigate('/test');
    };
    const handleLogin = () => {
        
        
        var config = {
          method: 'post',
          url: 'https://enclave-encare.herokuapp.com/api/user/login',
          mode: 'cores',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : JSON.stringify({
            "phone": "0336364695",
            "password": "0336364694"
          })
        };
        
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
        
    };
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    let navigate = useNavigate();
    
  
    const onSubmit = () => {
      console.log('summited');
    };
    const { values, errors, touched, handleBlur, handleChange } = useFormik({
      initialValues: {
        phone: '',
        password: '',
      },
      validationSchema: loginSchema,
      onSubmit,
    });
    return (
      <VStack
        w="100wh"
        h="100vh"
        justify="center"
        bgGradient="linear(to-b, #EEFBFF, #66BFBF)"
      >
        <HStack
          w="90vw"
          h="80vh"
          bgColor="white"
          boxShadow="dark-lg"
          borderRadius="8px"
        >
          <VStack w="50%" h="100%" justify="center">
            <Text fontSize="36px" fontWeight="700" color="#07AEB8">
              WELCOME
            </Text>
            <HStack>
              <Text
                fontSize="64px"
                fontWeight="extrabold"
                bgGradient="linear(to-r, #BFEFFF, #66BFBF)"
                bgClip="text"
              >
                EnCare
              </Text>
              <FaHeart size="50" color="#66BFBF" />
            </HStack>
            <Text
              fontSize="20px"
              fontWeight="600"
              color="#07AEB8"
              letterSpacing="1px"
            >
              Login to your account
            </Text>
            <Box h="64px" w="80%">
              <InputGroup>
                <InputLeftAddon
                  children="+84"
                  h="64px"
                  w="15%"
                  borderTopLeftRadius="50px"
                  borderBottomLeftRadius="50px"
                />
                <Input
                  id="phone"
                  type="text"
                  placeholder={'Phone number'}
                  w="85%"
                  h="64px"
                  color="#000"
                  borderWidth="1px"
                  borderRadius="50px"
                  borderColor="#07AEB8"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </InputGroup>
            </Box>
            {errors.phone && touched.phone ? (
              <Text color="red.400" fontSize="md">
                {errors.phone}
              </Text>
            ) : null}
            <Box h="64px" w="80%">
              <InputGroup>
                <Input
                  id="password"
                  type={show ? 'text' : 'password'}
                  placeholder={'Your password'}
                  w="100%"
                  h="64px"
                  color="#000"
                  borderWidth="1px"
                  borderRadius="50px"
                  borderColor="#07AEB8"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
  
                <InputRightElement w="15%">
                  <Button
                    h="63px"
                    top="12px"
                    borderTopRightRadius="50px"
                    borderBottomRightRadius="50px"
                    right="-0.9vw"
                    onClick={handleClick}
                  >
                    {show ? <FaEyeSlash /> : <FaEye />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Box>
            {errors.password && touched.password ? (
              <Text color="red.400" fontSize="md">
                {errors.password}
              </Text>
            ) : null}
  
            <Button
              paddingX="20px"
              paddingY="10px"
              bgGradient="linear(to-r, #07AEB8, #BFEFFF)"
              borderRadius="50px"
              h="64px"
              w="80%"
              color="white"
              fontSize="24px"
              fontWeight="700"
              onClick={handleLogin}
              colorScheme="twitter"
            >
              Login
            </Button>
            <Box
              color="#07AEB8"
              w="80%"
              display="flex"
              flexDirection="row-reverse"
            >
              <NavLink to="/test" color="#07AEB8">
                Forgot Password?
              </NavLink>
            </Box>
          </VStack>
          <Img
            w="50%"
            h="100%"
            src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
            borderTopRightRadius="8px"
            borderBottomRightRadius="8px"
          ></Img>
        </HStack>
      </VStack>
    );
  };
  
  export default TestLogin;
  