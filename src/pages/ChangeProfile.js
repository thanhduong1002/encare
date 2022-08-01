import {
  Avatar,
  Box,
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  FaArrowDown,
  FaAtom,
  FaBaby,
  FaBattleNet,
  FaEye,
  FaHeadphones,
  FaLongArrowAltLeft,
  FaRunning,
  FaSave,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ChangeProfile = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/home');
  };
  const handleSave = () => {
    var data = JSON.stringify({
      accountId: localStorage.getItem('data'),
      name: nameDoc,
      description: descripDoc,
      birthDay: tranferReverseBirthday(birthDoc),
      doctorId: IdDoc,
      categoryId: deptDoc,
      hospitalId: 1,
      avatar: 'string',
      phone: phoneDoc,
    });
    /^[a-zA-Z]{2,}(?: [a-zA-Z]{2,}){1,}$/.test(nameDoc) === false
      ? toast({
          title: 'Invalid name',
          status: 'error',
          isClosable: true,
        })
      : /^[0-9]{9,11}$/.test(phoneDoc) === false
      ? toast({
          title: 'Invalid phone number',
          status: 'error',
          isClosable: true,
        })
      : nameDoc === '' ||
        birthDoc === '' ||
        descripDoc === '' ||
        phoneDoc === ''
      ? toast({
          title: 'Please complete all information',
          status: 'error',
          isClosable: true,
        })
      : axios({
          baseURL: 'https://encare-doctor.herokuapp.com/api/doctor',
          method: 'put',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          data: data,
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
                  title: 'Change fail. Please retry!',
                  status: 'error',
                  isClosable: true,
                });
          })
          .catch(error => {
            console.log(error);
          });
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
        setNameDoc(res.data.data.accountResponse?.name);
        setDescripDoc(res.data.data.accountResponse?.description);
        setBirthDoc(tranferBirthday(res.data.data.accountResponse?.birthday));
        setPhoneDoc('0' + res.data.data.accountResponse?.phone.slice(3));
        setHospitalDoc(res.data.data.hospitalResponse?.name);
        setDeptDoc(res.data.data.categoryResponse?.categoryId);
        setIdDoc(res.data.data.doctorId);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const tranferBirthday = birthday => {
    let stringbirthday = birthday.slice(0, 10);
    let arraybirthday = stringbirthday.split('/');
    return arraybirthday[2] + '-' + arraybirthday[1] + '-' + arraybirthday[0];
  };
  const tranferReverseBirthday = birthday => {
    let arraybirthday = birthday.split('-');
    return arraybirthday[2] + '/' + arraybirthday[1] + '/' + arraybirthday[0];
  };
  const [nameDoc, setNameDoc] = useState('');
  const [birthDoc, setBirthDoc] = useState('');
  const [phoneDoc, setPhoneDoc] = useState('');
  const [descripDoc, setDescripDoc] = useState('');
  const [hospitalDoc, setHospitalDoc] = useState('');
  const [deptDoc, setDeptDoc] = useState('');
  const [IdDoc, setIdDoc] = useState('');
  const handleTest = () => {
    /^[0-9]{9,11}$/.test(phoneDoc)
      ? toast({
          title: 'True phone number',
          status: 'success',
          isClosable: true,
        })
      : toast({
          title: 'Fail phone number',
          status: 'error',
          isClosable: true,
        });
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
              id="name"
              placeholder={infoDoctor.accountResponse?.name}
              type="text"
              variant="outline"
              borderWidth="1px"
              borderColor="#B2C8DF"
              value={nameDoc}
              onChange={e => {
                setNameDoc(e.target.value);
              }}
            ></Input>
            <Text fontWeight="bold" fontSize="md">
              Birthday:
            </Text>
            <Input
              type="date"
              variant="outline"
              borderWidth="1px"
              borderColor="#B2C8DF"
              value={birthDoc}
              onChange={e => {
                setBirthDoc(e.target.value);
              }}
            ></Input>
            <Text fontWeight="bold" fontSize="md">
              Phone number:
            </Text>
            <InputGroup>
              <InputLeftAddon children="+84" bgColor="#B2C8DF" />
              <Input
                id="phone"
                placeholder="Enter your phone"
                type="text"
                variant="outline"
                borderWidth="1px"
                borderColor="#B2C8DF"
                value={phoneDoc}
                onChange={e => {
                  setPhoneDoc(e.target.value);
                }}
              ></Input>
            </InputGroup>
            <Text fontWeight="bold" fontSize="md">
              Description:
            </Text>
            <Input
              placeholder="Enter your description"
              type="text"
              variant="outline"
              borderWidth="1px"
              borderColor="#B2C8DF"
              value={descripDoc}
              onChange={e => {
                setDescripDoc(e.target.value);
              }}
            ></Input>
            <Text fontWeight="bold" fontSize="md">
              Hospital:
            </Text>
            <Input
              id="hospital"
              placeholder={infoDoctor.hospitalResponse?.name}
              type="text"
              variant="outline"
              borderWidth="1px"
              borderColor="#B2C8DF"
              value={hospitalDoc}
              onChange={e => {
                setHospitalDoc(e.target.value);
              }}
              isDisabled={true}
            ></Input>
            <Text fontWeight="bold" fontSize="md">
              Dept:
            </Text>
            <Menu>
              <MenuButton
                as={Button}
                bgColor="#B2C8DF"
                color="black"
                rightIcon={<FaArrowDown />}
              >
                {deptDoc === 24
                  ? 'Neuroscience'
                  : deptDoc === 25
                  ? 'Orthopaedic Surgery & Sports Medicine'
                  : deptDoc === 26
                  ? 'Oncology Department'
                  : deptDoc === 27
                  ? 'Pediatrics'
                  : deptDoc === 28
                  ? 'Department of Otolaryngology'
                  : deptDoc === 29
                  ? 'Ophthalmology'
                  : 'Dept'}
              </MenuButton>
              <MenuList>
                <MenuGroup>
                  <MenuItem
                    icon={<FaBattleNet />}
                    onClick={() => {
                      setDeptDoc(24);
                    }}
                  >
                    Neuroscience
                  </MenuItem>
                  <MenuItem
                    icon={<FaRunning />}
                    onClick={() => {
                      setDeptDoc(25);
                    }}
                  >
                    Orthopaedic Surgery & Sports Medicine
                  </MenuItem>
                  <MenuItem
                    icon={<FaAtom />}
                    onClick={() => {
                      setDeptDoc(26);
                    }}
                  >
                    Oncology Department
                  </MenuItem>
                  <MenuItem
                    icon={<FaBaby />}
                    onClick={() => {
                      setDeptDoc(27);
                    }}
                  >
                    Pediatrics
                  </MenuItem>
                  <MenuItem
                    icon={<FaHeadphones />}
                    onClick={() => {
                      setDeptDoc(28);
                    }}
                  >
                    Department of Otolaryngology
                  </MenuItem>
                  <MenuItem
                    icon={<FaEye />}
                    onClick={() => {
                      setDeptDoc(29);
                    }}
                  >
                    Ophthalmology
                  </MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </Box>
        </VStack>
      </HStack>
      <Button onClick={handleTest}>Test</Button>
    </VStack>
  );
};

export default ChangeProfile;
