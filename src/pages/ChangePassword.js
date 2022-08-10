import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
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
import axios from 'axios';

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
    navigate('/test');
  };
  let token = localStorage.getItem('token');
  let password = localStorage.getItem('password');
  const handleChangePass = () => {
    values.oldpass === password && values.newpass === values.confirmNewPass
      ? axios({
          baseURL: 'https://encare-doctor.herokuapp.com/api/doctor/password',
          method: 'put',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          data: JSON.stringify({
            accountId: localStorage.getItem('data'),
            oldPassword: values.oldpass,
            newPassword: values.newpass,
          }),
        })
          .then(res => {
            console.log(res.data.status);
            res.data.status === 200
              ? toast({
                  title: 'Change success',
                  status: 'success',
                  isClosable: true,
                })
              : toast({
                  title: res.data.data,
                  status: 'error',
                  isClosable: true,
                });
          })
          .catch(error => {
            console.log(error);
          })
      : toast({
          title: 'Old password not right',
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
        confirmNewPass: '',
      },
      validationSchema: loginSchema,
      onSubmit,
    });
  return (
    <VStack
      w="100vw"
      h="100vh"
      bgGradient="linear(to-b, #EEFBFF, #66BFBF)"
      justify="center"
    >
      <VStack w="80%" h="10vh" alignItems="start">
        <Button
          h="70%"
          w="7vw"
          leftIcon={<FaAngleLeft color="white" size="23" />}
          color="white"
          bgColor="#07AEB8"
          onClick={handleBack}
          size="lg"
        >
          <Text fontSize="23" fontWeight="bold" color="white">
            Back
          </Text>
        </Button>
      </VStack>
      <HStack
        w="80vw"
        h="80vh"
        bgColor="white"
        opacity="1"
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
            boxShadow="dark-lg"
            justify="center"
            padding="2vw"
          >
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
              <InputRightElement h="40px" w="50px">
                <Button top="5px" right="5px" onClick={handleClick1}>
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
                id="newpass"
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
              <InputRightElement h="40px" w="50px">
                <Button top="5px" right="5px" onClick={handleClick2}>
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
                id="confirmNewPass"
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
              <InputRightElement h="40px" w="50px">
                <Button top="5px" right="5px" onClick={handleClick3}>
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
              bgColor="#07AEB8"
              w="100%"
              onClick={handleChangePass}
              type="submit"
            >
              <Text color="white">Submit</Text>
            </Button>
          </VStack>
        </form>
        <VStack
          w="100%"
          h="50vh"
          borderRadius="8px"
          bgImage="url('https://scontent.fdad3-6.fna.fbcdn.net/v/t1.15752-9/297388191_1273635776373804_4148720777524601990_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Y_Mg39ZnlxIAX8Gw5mq&_nc_ht=scontent.fdad3-6.fna&oh=03_AVJ1tGvBqs61iqdHQw6RyifhRGZCc0lvQElVwe2OgOrCqQ&oe=631958D9')"
          bgPos="top"
        ></VStack>
      </HStack>
    </VStack>
  );
};

export default ChangePassword;
