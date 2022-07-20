import {
  Box,
  Button,
  HStack,
  Image,
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
  const tranferPage = () =>{
    localStorage.setItem('data', result.accountId);
    localStorage.setItem('token', result.token);
    console.log(result);
    navigate('/test');
  }
  const handleLogin = () => {
    postLogin({
          phone: values.phone,
          password: values.password,
        }).then(res => {
          console.log(values.phone, values.password); 
          console.log(res);
          result = res.data;
          res.status === 200 ? tranferPage() : toast({
            title: 'Password or phone is wrong',
            status: 'error',
            isClosable: true,
          });
          // localStorage.setItem('data', JSON.stringify(res.data.accountId))
          
        })
      .catch((e) => console.log(e));
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
      bgColor="blue.200"
      justify="center"
      align="center"
      bgGradient="linear(to-l, white, #EAF6F6)"
    >
      <HStack
        w="10vw"
        h="7vh"
        bgColor="#66BFBF"
        borderRadius="8px"
        justify="center"
        marginBottom="3vh"
      >
        <FaSignInAlt size="35" color="white" />
      </HStack>
      <Box
        w="80vw"
        h="80vh"
        bgColor="#CDF0EA"
        boxShadow="dark-lg"
        borderRadius="8px"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Image
          w="35%"
          h="100%"
          src="https://i.pinimg.com/564x/8a/78/d5/8a78d5ea74ac9b9878753bd1cbb95708.jpg"
        />
        <HStack justify="center">
          <form onSubmit={handleSubmit}>
            <VStack
              w={{ md: '70%', xl: '100%' }}
              h={{ md: '70%', xl: '100%' }}
              bgColor="white"
              spacing={'10px'}
              borderRadius="15px"
              padding="3vw"
              boxShadow="dark-lg"
              p="6"
              rounded="md"
            >
              <InputGroup>
                <InputLeftAddon children="+84" h={50} />
                <Input
                  id="phone"
                  type="text"
                  placeholder={'Enter your phone number'}
                  padding="10px"
                  h="50px"
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
            </VStack>
          </form>
        </HStack>
        <Image
          w="35%"
          h="100%"
          src="https://i.pinimg.com/564x/a8/fd/9a/a8fd9a32d47961a76215ad60eda6e51a.jpg"
        />
      </Box>
    </VStack>
  );
};

export default LoginPage;
