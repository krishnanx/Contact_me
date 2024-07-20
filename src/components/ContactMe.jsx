import React, { useEffect, useState, useContext } from "react";
import { Details } from "./contexts/DetailsContext";
import {
  Box,
  Stack,
  Button,
  IconButton,
  Image,
  Text,
  transition,
  useDisclosure,
  Input,
  InputGroup,
  InputLeftElement,
  
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { FaInstagram, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import Insta from "./Insta";
import Twitter from "./Twitter";
import Github from "./Github";
import { Fade, ScaleFade, Slide, SlideFade, Collapse } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

const ContactMe = () => {
  const [isClicked, setIsclicked] = useState(null);
  const { isOpen, onToggle } = useDisclosure();
  const [Einput, setEInput] = useState("");
  const [Ninput, setNInput] = useState("");
  const [Pinput, setPInput] = useState("");
  const [EisError, setEIsError] = useState(null);
  const [NisError, setNIsError] = useState(null);
  const [PisError, setPIsError] = useState(null);
  const [check,setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName, phone, setPhone, email, setEmail] = useContext(Details);

  const handleInputChange = (e) => {
    setEInput(e.target.value);
  };
  const handleNameChange = (e) => {
    setNInput(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPInput(e.target.value);
  };

  //const isError = input === "";
  const handleClick = (e) => {
    e.preventDefault();

    setIsclicked((prevState) => !prevState); // Toggle isClicked state
  };
  const handleCheckClick = (e) => {
    e.preventDefault()
    
    //setIsChecked(true) //toggle isChecked state
    //setIsclicked((prevState) => !prevState) //toggle isClicked state
    try {
      Einput === "" ? (setIsChecked(true),setEIsError(true)) : (setIsChecked(false),setEIsError(false));
      Ninput === "" ? (setIsChecked(true),setNIsError(true)) : (setIsChecked(false),setNIsError(false));
      Pinput === "" ? (setIsChecked(true),setPIsError(true)) : (setIsChecked(false),setPIsError(false));
    } catch (error) {
      console.log(error)
    }
  }
  function isValidGmail(email) {
    const regex = /^[^\s@]+@gmail\.com$/;
    return regex.test(email);
  }

  const handleSubmitClick = (e) => {
    e.preventDefault();
    //console.log(Einput)
    //setIsChecked(false)
    
    // Simulate a network request
    
    // Toggle isClicked state
    //setIsChecked(false)
    try {
      Einput === "" ? setEIsError(true) : setEIsError(false);
      Ninput === "" ? setNIsError(true) : setNIsError(false);
      Pinput === "" ? setPIsError(true) : setPIsError(false);
      /*!(!name || !phone || !email)
      ? null
      : )*/
      
     //setLoading(true)
      setTimeout(() => {
        setLoading(true);
        
        // Hide the loading indicator after another 2 seconds and log the data
        setTimeout(() => {
          setLoading(false);
        },1000);
      },100);
      if(!(!Ninput && !Pinput && !Einput)){
        
        /*try {
          console.log(email)
        } catch (error) {
          console.log(error)
        }*/
        if(isValidGmail(Einput)){
          console.log("ITS VALIDDD")
          setName(Ninput)
          setPhone(Pinput)
          setEmail(Einput)
          
         
          setIsclicked(false)
        }
        else{
          console.log("ITS not VALIDD")
          setEmail(null)
          setEIsError(true)
          setIsclicked(true)
          setEInput("")
          
        }
      }
      /*!(!name && !phone && !email)
      ? )
      : null*/
        
      /*(name === null || phone === null || email === null)
        ? null
        : (console.log("Name:", name),
          console.log("Phone No:", phone),
          console.log("Email:", email));*/
      //console.log(phone)
      /*!(!EisError && !NisError && !PisError) ? null : setName(Ninput),
        setPhone(Pinput),
        setEmail(Einput);
        if (!(EisError || NisError || PisError)) {
          // All errors are false
          console.log("Name:", name);
          console.log("Phone No:", phone);
          console.log("Email:", email);
        } else {
          // At least one error is true
          return null;
        }*/
      
        
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if(!(!Ninput && !Pinput && !Einput)){
      try {
        console.log("Name:", name)
        console.log("Phone No:", phone)
        console.log("Email:", email)
        setEInput("")
        setNInput("")
        setPInput("")
      } catch (error) {
        console.log(error)
      }
    }
      
  }, [isClicked]);
  /*useEffect(()=>{
    console.log(".......................")
    console.log("click:",isClicked)
    console.log(".......................")
  },[isClicked])
  useEffect(()=>{
    console.log(".......................")
    console.log("check",check)
    console.log(".......................")

  },[check])*/
  const theme = {
    //display:isClicked?"flex":"none",
    backgroundColor:
      !EisError && !NisError && !PisError
        ? isClicked
          ? "#fbb9b6"
          : "none"
        : "#fbb9b6",
    borderRadius: "32px",
    width:
      !EisError && !NisError && !PisError
        ? isClicked
          ? "500px"
          : "0px"
        : "500px",
    transition:
      !EisError && !NisError && !PisError ? "width 1s ease-in-out" : "none",
  };
  const buttonStyle = {
    loadingText:"Submitting",
    colorScheme:'teal',
    variant:'outline'
  
  }
 
  return (
    <Box
      w="100%"
      h="700px"
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        style={theme}
        w="0px"
        h="400px"
        bgColor="#fbb9b6"
        borderRadius="32px"
        display="flex"
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <FormControl isRequired w="90%" mt="10px" isInvalid={NisError}>
          <FormLabel w="200px">First name</FormLabel>
          <InputGroup w="100%" display="flex" flexDirection="column">
            <Input
              placeholder="First name"
              w="400px"
              border="solid"
              borderColor="black"
              value={Ninput}
              onChange={handleNameChange}
            />
            {!NisError ? (
              <FormHelperText></FormHelperText>
            ) : (
              <FormErrorMessage>Name is required.</FormErrorMessage>
            )}
          </InputGroup>
        </FormControl>
        <FormControl isRequired w="90%" mt="10px" isInvalid={PisError}>
          <FormLabel w="200px">Phone No</FormLabel>
          <InputGroup w="100%" display="flex" flexDirection="column">
            <InputLeftElement pointerEvents="none">
              <PhoneIcon color="black" />
            </InputLeftElement>
            <Input
              type="number"
              placeholder="Phone number"
              w="400px"
              border="solid"
              borderColor="black"
              value={Pinput}
              onChange={handlePhoneChange}
            />
            {!PisError ? (
              <FormHelperText></FormHelperText>
            ) : (
              <FormErrorMessage>Phone number is required.</FormErrorMessage>
            )}
          </InputGroup>
        </FormControl>
        <FormControl isRequired w="90%" mt="10px" isInvalid={EisError}>
          <FormLabel w="200px">Email</FormLabel>
          <InputGroup w="100%" display="flex" flexDirection="column">
            <Input
              placeholder="Email"
              w="400px"
              border="solid"
              borderColor="black"
              type="email"
              value={Einput}
              onChange={handleInputChange}
            />
            {!EisError ? (
              <FormHelperText></FormHelperText>
            ) : (
              <FormErrorMessage>Email is required.</FormErrorMessage>
            )}
          </InputGroup>
        </FormControl>
      </Box>

      <Box
        borderWidth="1px"
        textAlign="center"
        w="500px"
        h="400px"
        bgColor="white"
        borderRadius="32px"
        p="3px"
        pos="relative"
        boxShadow="#604b4a30 0px 70px 30px -50px"
        transition="all 0.5s ease-in-out"
        _hover={{
          ".bottom": {
            top: "20%",
            borderRadius: "80px 29px 29px 29px",
            transitionDelay: "0.2s",
          },
          ".profile-pic": {
            width: "100px",
            height: "100px",
            aspectRatio: 1,
            top: "10px",
            left: "10px",
            borderRadius: "50%",
            zIndex: 3,
            border: "7px solid #fbb9b6",
            boxShadow: "rgba(96, 75, 74, 0.1882352941) 0px 5px 5px 0px",
            transition: "all 0.5s ease-in-out, z-index 0.5s ease-in-out 0.1s",
          },
          /*'.profile-pic:hover': {
            transform: 'scale(1.3)',
            borderRadius: '0px',
            transition: 'transform 0.5s ease, border-radius 0.5s ease',
          },*/

          borderTopLeftRadius: "55px",
        }}
      >
        <Button
          aria-label="Mail"
          icon={<EmailIcon />}
          className="mail"
          mb={4}
          position="absolute"
          right="1.2rem"
          top="0.5rem"
          background="transparent"
          border="none"
          w="50px"
          h="50px"
        >
          <Box
            as="svg"
            className="lucide lucide-mail"
            stroke-linejoin="round"
            stroke-linecap="round"
            //stroke-width="2"
            //stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#fbb9b6"
            strokeWidth="3px"
            _hover={{ stroke: "#f55d56" }}
          >
            <rect rx="2" y="4" x="2" height="16" width="20"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </Box>
        </Button>
        <Box
          className="profile-pic"
          position="absolute"
          width="calc(100% - 6px)"
          height="calc(100% - 6px)"
          top="3px"
          left="3px"
          borderRadius="29px"
          zIndex="1"
          borderWidth="0px"
          borderColor="#fbb9b6"
          overflow="hidden"
          transition="all 0.5s ease-in-out 0.2s, z-index 0.5s ease-in-out 0.2s"
        ></Box>
        <Box
          className="bottom"
          position="absolute"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
          bottom="1px"
          left="3px"
          right="3px"
          background="#fbb9b6"
          top="80%"
          borderRadius="29px"
          zIndex="2"
          boxShadow="inset 0px 5px 5px 0px rgba(96, 75, 74, 0.1882352941)"
          overflow="hidden"
          transition="all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s"
        >
          <Box
            className="content"
            display="flex"
            flexDirection="column"
            alignItems="center"
            position="absolute"
            bottom="0"
            left="1.5rem"
            right="1.5rem"
            height="170px"
          >
            <Box
              as="span"
              className="name"
              display="block"
              fontSize="1.2rem"
              color="white"
              fontWeight="bold"
            >
              My Name
            </Box>
            <Box
              as="span"
              className="about-me"
              display="block"
              fontSize="0.9rem"
              color="white"
              marginTop="1rem"
            >
              Lorem ipsum dolor sit amet consectetur adipisicinFcls
            </Box>
          </Box>
          <Box
            className="bottom-bottom"
            position="absolute"
            left="1.5rem"
            right="1.5rem"
            bottom="10px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            h="50px"
          >
            <Box className="social-links-container" display="flex" gap="1rem">
              <Insta />
              <Twitter />
              <Github />
            </Box>
            {!(!EisError && !NisError && !PisError) ? (
              <Button
                className="button"
                bg="white"
                color="#fbb9b6"
                border="none"
                borderRadius="20px"
                fontSize="xs"
                px="2"
                py="1"
                boxShadow="0px 5px 5px rgba(165, 132, 130, 0.1333333333)"
                _hover={{ bg: "#f55d56", color: "white" }}
                onClick={handleSubmitClick}
                isLoading={loading}
                style={buttonStyle}
                //onChange={handleClick}
              >
                Check again
              </Button>
            ) :  (isClicked ? (
              <Button
                className="button"
                bg="white"
                color="#fbb9b6"
                border="none"
                borderRadius="20px"
                fontSize="xs"
                px="2"
                py="1"
                boxShadow="0px 5px 5px rgba(165, 132, 130, 0.1333333333)"
                _hover={{ bg: "#f55d56", color: "white" }}
                onClick={handleSubmitClick}
                isLoading={loading}
                style={buttonStyle}
               
                //onChange={handleClick}
              >
                Submit
              </Button>
            ) : (
              <Button
                className="button"
                bg="white"
                color="#fbb9b6"
                border="none"
                borderRadius="20px"
                fontSize="xs"
                px="2"
                py="1"
                boxShadow="0px 5px 5px rgba(165, 132, 130, 0.1333333333)"
                _hover={{ bg: "#f55d56", color: "white" }}
                onClick={handleClick}
                //onChange={handleClick}
              >
                Contact Me
              </Button>
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        style={theme}
        w="0px"
        h="400px"
        bgColor="#fbb9b6"
        borderRadius="32px"
      ></Box>
    </Box>
  );
};

export default ContactMe;
