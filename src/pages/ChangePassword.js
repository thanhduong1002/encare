import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import {
  FaExchangeAlt,
  FaKey,
  FaEyeSlash,
  FaEye,
  FaAngleLeft,
} from 'react-icons/fa';
import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { loginSchema } from '../schemas/loginSchema';
import { useFormik } from 'formik';

const ChangePassword = () => {

  const navigate = useNavigate();
  const toast = useToast();
  const [show1, setShow1] = React.useState(false);
  const handleClick1 = () => setShow1(!show1);
  const [show2, setShow2] = React.useState(false);
  const handleClick2 = () => setShow2(!show2);
  const [show3, setShow3] = React.useState(false);
  const handleClick3 = () => setShow3(!show3);
  const handleBack = () => {
    navigate('/home');
  };
  const handleChangePass = () => {
    values.oldpass.split(' ').join('') !== '' &&
    values.newpass.split(' ').join('') !== '' &&
    // values.oldpass.split(' ').join('') !== values.newpass.split(' ').join('') &&
    values.confirmNewPass.split(' ').join('') === values.newpass.split(' ').join('')
      ? toast({
          title: 'Change sucessfully',
          status: 'success',
          isClosable: true,
        })
      : toast({
          title: 'Password mismatch',
          status: 'error',
          isClosable: true,
        });
  };
  const onSubmit = () => {
    console.log('summited');
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        newpass: '',
        oldpass: '',
        confirmNewPass:'',
      },
      validationSchema: loginSchema,
      onSubmit,
    });
  return (
    <VStack w="100vw" h="100vh" bgColor="#B3E8E5">
      <HStack
        w="10vw"
        h="7vh"
        bgColor="#3BACB6"
        borderBottomRightRadius="8px"
        borderBottomLeftRadius="8px"
        justify="center"
        marginBottom="3vh"
      >
        <FaExchangeAlt size="35" color="white" />
        <FaKey size="35" color="white" />
      </HStack>
      <Button
        leftIcon={<FaAngleLeft />}
        variant="outline"
        color="white"
        colorScheme="#CDF0EA"
        onClick={handleBack}
      >
        Back
      </Button>
      <HStack
        w="70vw"
        h="70vh"
        bgColor="#B3E8E5"
        borderRadius="8px"
        boxShadow="dark-lg"
        padding="10vw"
      >
        <form onSubmit={handleSubmit}>
          <VStack
            w="30vw"
            h="50vh"
            borderRadius="8px"
            bgColor="white"
            justify="center"
            padding="2vw"
          >
            <Input
              type="text"
              padding="10px"
              h="50px"
              color="#000"
              borderWidth="2px"
              borderColor="blue.700"
              value={
                localStorage.getItem('data') && localStorage.getItem('data')
              }
              onChange={handleChange}
            />
            <InputGroup>
              <Input
                id="oldpass"
                type={show1 ? 'text' : 'password'}
                placeholder={'Current password'}
                padding="10px"
                h="50px"
                color="#000"
                borderWidth="2px"
                borderColor="blue.700"
                value={values.oldpass}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <InputRightElement>
                <Button h="30" w="40" onClick={handleClick1}>
                  {show1 ? <FaEyeSlash /> : <FaEye />}
                </Button>
              </InputRightElement>
            </InputGroup>
            {errors.oldpass && touched.oldpass ? (
              <Text fontSize="md" color="red.400">
                {errors.oldpass}
              </Text>
            ) : null}
            <InputGroup>
              <Input
              id='newpass'
                type={show2 ? 'text' : 'password'}
                placeholder={'New password'}
                padding="10px"
                h="50px"
                color="#000"
                borderWidth="2px"
                borderColor="blue.700"
                value={values.newpass}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <InputRightElement>
                <Button h="30" w="40" onClick={handleClick2}>
                  {show2 ? <FaEyeSlash /> : <FaEye />}
                </Button>
              </InputRightElement>
            </InputGroup>
            {errors.newpass && touched.newpass ? (
              <Text fontSize="md" color="red.400">
                {errors.newpass}
              </Text>
            ) : null}
            <InputGroup>
              <Input
              id='confirmNewPass'
                type={show3 ? 'text' : 'password'}
                placeholder={'Confirm new password'}
                padding="10px"
                h="50px"
                color="#000"
                borderWidth="2px"
                borderColor="blue.700"
                value={values.confirmNewPass}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <InputRightElement>
                <Button h="30" w="40" onClick={handleClick3}>
                  {show3 ? <FaEyeSlash /> : <FaEye />}
                </Button>
              </InputRightElement>
            </InputGroup>
            {errors.confirmNewPass && touched.confirmNewPass ? (
              <Text fontSize="md" color="red.400">
                {errors.confirmNewPass}
              </Text>
            ) : null}
            <Button
              paddingX="20px"
              paddingY="10px"
              bgColor="#3BACB6"
              w="100%"
              onClick={handleChangePass}
              type="submit"
            >
              <Text color="white">Submit</Text>
            </Button>
          </VStack>
        </form>
        <VStack
          w="30vw"
          h="50vh"
          borderRadius="8px"
          bgImage="url('https://i.pinimg.com/564x/4f/01/3e/4f013e46bf61a8d916234543f4222d14.jpg')"
          bgPosition="center"
        ></VStack>
      </HStack>
    </VStack>
  );
};

export default ChangePassword;
