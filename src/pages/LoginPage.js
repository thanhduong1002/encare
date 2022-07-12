import {
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import callApi from '../apis/axiosLoginDoctor';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
      
  const handleSubmit = () => {
    username !== '' || password !== ''
      ? postLogin({
          phone: '336364692',
          password: '0336364692',
        }).then(res => {
          console.log(res.data);
          navigate('/home');
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
//   const postLogin = async (phoneNumber, password) => {
//     await callApi('user/login', 'post', {
//         phone: phoneNumber,
//         password: password,
//     })
//         .then((res) => {
//             console.log(res.data);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
// };
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

  return (
    <VStack
      w="100wh"
      h="100vh"
      bgColor="blue.200"
      justify="center"
      align="center"
      bgImage="url('https://scontent.fdad3-6.fna.fbcdn.net/v/t1.15752-9/276201634_674414820570238_2752450573548164500_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=UgBbsP9f3u4AX_fWwJo&_nc_ht=scontent.fdad3-6.fna&oh=03_AVKWSu-mpfB7LMss9krDCzPsmoKO6gVsRZRX8Y5IsHX_Tw&oe=62EE0248')"
      bgRepeat="no-repeat"
      bgPosition="center"
    >
      <form>
        <VStack
          w="500px"
          h="200px"
          bgColor="white"
          spacing={'10px'}
          borderRadius="15px"
          padding="20px"
        >
          <InputGroup>
            <InputLeftAddon children="+84" h={50} />
            <Input
              type="text"
              placeholder={'Enter your phone number'}
              padding="10px"
              h="50px"
              color="#000"
              borderWidth="2px"
              borderColor="blue.700"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Input
              type={show ? 'text' : 'password'}
              placeholder={'Enter your password'}
              padding="10px"
              h="50px"
              color="#000"
              borderWidth="2px"
              borderColor="blue.700"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <InputRightElement>
              <Button h="30" w="40" onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button
            paddingX="20px"
            paddingY="10px"
            bgColor="blue.500"
            w="100%"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </VStack>
      </form>
      <button
        onClick={() => {
          navigate('/home');
        }}
      >
        oke oke
      </button>
    </VStack>
  );
};

export default LoginPage;
