import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import axios from 'axios';

const Test = () => {
  // const postData = () => {
  //   fetch('https://enclave-encare.herokuapp.com/api/user/appointment?id=1').then(response => {
  //     console.log(response.json());
  //     return response.json();
  //   }).then(data => {
  //     console.log(data);
  //   }).catch(err => {
  //     console.log("Error Reading data " + err);
  //   });
  // }
  let token = localStorage.getItem("token")
  const postData =  () => {
    return axios({
      baseURL: 'https://enclave-encare.herokuapp.com/api/doctor/',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <Box w="100vw" h="100vh" bgColor="blackAlpha.200">
      <Button onClick={postData}> alo alo</Button>
    </Box>
  );
};

export default Test;
