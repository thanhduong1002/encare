import {
  Box,
  Button,
  HStack,
  Image,
  Img,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import React from 'react';
import { FaEye, FaEyeSlash, FaSignInAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { loginSchema } from '../schemas/loginSchema';
import { useToast } from '@chakra-ui/react';

const LoginPage = () => {
  const toast = useToast();
  let result = '';
  const tranferPage = () => {
    localStorage.setItem('data', result.accountId);
    localStorage.setItem('token', result.token);
    console.log(result);
    navigate('/home');
  };
  const handleLogin = () => {
    postLogin({
      phone: values.phone,
      password: values.password,
    })
      .then(res => {
        console.log(values.phone, values.password);
        console.log(res);
        result = res.data;
        res.status === 200
          ? tranferPage()
          : toast({
              title: 'Password or phone is wrong',
              status: 'error',
              isClosable: true,
            });
        // localStorage.setItem('data', JSON.stringify(res.data.accountId))
      })
      .catch(e => console.log(e));
  };
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  let navigate = useNavigate();
  const postLogin = async params => {
    return await APIPost(params);
  };

  function APIPost(params) {
    const url = 'https://enclave-encare.herokuapp.com/api/user/login';
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }).then(response => response.json());
  }
  const onSubmit = () => {
    console.log('summited');
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
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
        <VStack w="50%" h="100%" justify="center" bgColor='red.100'>
          <form onSubmit={handleSubmit} >  
              <InputGroup>
                <InputLeftAddon children="+84" h='64px' />
                <Input
                  id="phone"
                  type="text"
                  placeholder={'Phone number'}
                  h="64px"
                  color="#000"
                  borderWidth="2px"
                  borderColor="blue.700"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </InputGroup>
              {errors.phone && touched.phone ? (
                <Text color="red.400" fontSize="md">
                  {errors.phone}
                </Text>
              ) : null}
              <InputGroup>
                <Input
                  id="password"
                  type={show ? 'text' : 'password'}
                  placeholder={'Enter your password'}
                  padding="10px"
                  h="50px"
                  color="#000"
                  borderWidth="2px"
                  borderColor="blue.700"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <InputRightElement>
                  <Button
                    h="40px"
                    w="50px"
                    top="5px"
                    right="5px"
                    onClick={handleClick}
                  >
                    {show ? <FaEyeSlash /> : <FaEye />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {errors.password && touched.password ? (
                <Text color="red.400" fontSize="md">
                  {errors.password}
                </Text>
              ) : null}

              <Button
                paddingX="20px"
                paddingY="10px"
                bgColor="#B2C8DF"
                w="100%"
                onClick={handleLogin}
              >
                Submit
              </Button>
          </form>
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

export default LoginPage;
