import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import React from 'react';
import {  FaEye, FaEyeSlash, FaSignInAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { loginSchema } from '../schemas/loginSchema';

const LoginPage = () => {

  const handleLogin = () => {
    values.phone !== '' || values.password !== ''
      ? postLogin({
          phone: '336364692',
          password: '0336364692',
        }).then(res => {
          console.log(res.data);
          navigate('/home');
          localStorage.setItem('data', JSON.stringify(res.data.accountId));
        })
      : // onLogin(username, password)
        postLogin({
          phone: '336364692',
          password: '0336364692',
        }).then(res => {
          console.log(res.data);
        });
    // console.log("sai roi dien lai")
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
  const onSubmit = () =>{
    console.log('summited');
  }
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
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
      // bgImage="url('https://scontent.fdad3-6.fna.fbcdn.net/v/t1.15752-9/276201634_674414820570238_2752450573548164500_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=UgBbsP9f3u4AX_fWwJo&_nc_ht=scontent.fdad3-6.fna&oh=03_AVKWSu-mpfB7LMss9krDCzPsmoKO6gVsRZRX8Y5IsHX_Tw&oe=62EE0248')"
      // bgRepeat="no-repeat"
      // bgPosition="center"
      bgGradient='linear(to-l, white, #EAF6F6)'
    >
    <HStack
        w="10vw"
        h="7vh"
        bgColor="#3BACB6"
        borderRadius="8px"
        justify="center"
        marginBottom="3vh"
      >
        <FaSignInAlt size="35" color="white" />
      </HStack>
      <form onSubmit={handleSubmit}>
        <VStack
          w={{md:'70%', xl:'100%'}}
          h={{md:'70%', xl:'100%'}}
          bgColor="white"
          spacing={'10px'}
          borderRadius="15px"
          padding="3vw"
          boxShadow='dark-lg' p='6' rounded='md'
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
          {errors.phone && touched.phone ? (<Text color='red.400' fontSize='md'>{errors.phone}</Text>) : null} 
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
              <Button h="30" w="40" onClick={handleClick}>
                {show ? <FaEyeSlash /> : <FaEye />}
              </Button>
            </InputRightElement>
          </InputGroup>
          {errors.password && touched.password ? (<Text color='red.400' fontSize='md'>{errors.password}</Text>) : null} 

          <Button
            paddingX="20px"
            paddingY="10px"
            bgColor="blue.500"
            w="100%"
            onClick={handleLogin}
            type='submit'
          >
            Submit
          </Button>
        </VStack>
      </form>
    </VStack>
  );
};

export default LoginPage;
