import {
  Avatar,
  Box,
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaLongArrowAltLeft, FaSave } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ChangeProfile = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/home');
  };
  const handleSave = () => {
    console.log(birth);
    console.log(tranferBirthday('10/03/2003 12:00'));
  };
  const [infoDoctor, setInfoDoctor] = useState([]);
  let token = localStorage.getItem('token');
  useEffect(() => {
    axios({
      baseURL: 'https://enclave-encare.herokuapp.com/api/doctor',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        console.log(res.data.data);
        setInfoDoctor(res.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState(
    '74/2 Ngo Si Lien, Lien Chieu, Da Nang'
  );
  const [hospital, setHospital] = useState('');
  const [dept, setDept] = useState('');
  const tranferBirthday = birthday => {
    let stringbirthday = birthday.slice(0, 10);
    let arraybirthday = stringbirthday.split('/');
    return arraybirthday[2] + '-' + arraybirthday[1] + '-' + arraybirthday[0];
  };
  return (
    <VStack w="100vw" h="100vh" bgColor="#EAF6F6" justify="center">
      <Box
        w="80vw"
        h="10vh"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Button w="7vw" h="10vh" bgColor="#6E85B7" onClick={handleBack}>
          <FaLongArrowAltLeft size="30" />
        </Button>
        <Button w="7vw" h="10vh" bgColor="#6E85B7" onClick={handleSave}>
          <FaSave size="30" />
        </Button>
      </Box>
      <HStack
        w="80vw"
        h="80vh"
        borderRadius="8px"
        bgColor="#B2C8DF"
        boxShadow="dark-lg"
      >
        <VStack w="40%" h="100%" justify="center">
          <Avatar
            size="2xl"
            name="Segun Adebayo"
            src={
              infoDoctor.categoryResponse?.avatar
                ? infoDoctor.categoryResponse?.avatar
                : 'https://bit.ly/sage-adebayo'
            }
          />
          <Text fontWeight="bold" fontSize="2xl">
            Dr. {infoDoctor.accountResponse?.name}
          </Text>
          <Text fontSize="md">{infoDoctor.categoryResponse?.name}</Text>
          <Text fontSize="md">{infoDoctor.hospitalResponse?.name}</Text>
        </VStack>
        <VStack w="60%" h="100%" justify="center">
          <Box
            w="80%"
            h="80%"
            bgColor="#D6EFED"
            borderRadius="8px"
            padding="1%"
            boxShadow="dark-lg"
          >
            <Text fontWeight="bold" fontSize="md">
              Name:
            </Text>
            <Input
              placeholder={infoDoctor.accountResponse?.name}
              type="text"
              variant="outline"
              borderWidth="1px"
              borderColor="#B2C8DF"
              value={name}
              onChange={e => setName(e.target.value)}
            ></Input>
            <Text fontWeight="bold" fontSize="md">
              Birthday:
            </Text>
            <Input
              type="date"
              variant="outline"
              borderWidth="1px"
              borderColor="#B2C8DF"
              value="2001-02-10"
              onChange={e => setBirth(e.target.value)}
            ></Input>
            <Text fontWeight="bold" fontSize="md">
              Phone number:
            </Text>
            <InputGroup>
              <InputLeftAddon children="+84" bgColor="#B2C8DF" />
              <Input
                placeholder="Enter your phone number"
                type="text"
                variant="outline"
                borderWidth="1px"
                borderColor="#B2C8DF"
                // value={infoDoctor.accountResponse?.phone.slice(3,)}
                value={phone}
                onChange={e => setPhone(e.target.value)}
              ></Input>
            </InputGroup>
            <Text fontWeight="bold" fontSize="md">
              Address:
            </Text>
            <Input
              placeholder="Enter your address"
              type="text"
              variant="outline"
              borderWidth="1px"
              borderColor="#B2C8DF"
              value={address}
              onChange={e => setAddress(e.target.value)}
            ></Input>
            <Text fontWeight="bold" fontSize="md">
              Hospital:
            </Text>
            <Input
              placeholder="Enter your hospital"
              type="text"
              variant="outline"
              borderWidth="1px"
              borderColor="#B2C8DF"
              // value={infoDoctor.hospitalResponse?.name}
              value={hospital}
              onChange={e => setHospital(e.target.value)}
            ></Input>
            <Text fontWeight="bold" fontSize="md">
              Dept:
            </Text>
            <Input
              placeholder="Enter your major"
              type="text"
              variant="outline"
              borderWidth="1px"
              borderColor="#B2C8DF"
              // value={infoDoctor.categoryResponse?.name}
              value={dept}
              onChange={e => setDept(e.target.value)}
            ></Input>
          </Box>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default ChangeProfile;
