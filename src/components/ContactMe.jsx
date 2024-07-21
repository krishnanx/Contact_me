import React, { useEffect, useState, useContext } from "react";
import { Details } from "./contexts/DetailsContext";
import pic from "../assets/pix1.jpg";
//import roboto from url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
import { sendEmail } from "./Emailjs";
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
  Center,
  Textarea,
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
//import styled from 'styled-components';
const ContactMe = () => {
  /* const Paragraph = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  `;*/
  const [isClicked, setIsclicked] = useState(null);
  const { isOpen, onToggle } = useDisclosure();
  const [Einput, setEInput] = useState("");
  const [Ninput, setNInput] = useState("");
  const [Pinput, setPInput] = useState("");
  const [Sinput, setSInput] = useState("");
  const [EisError, setEIsError] = useState(null);
  const [NisError, setNIsError] = useState(null);
  const [PisError, setPIsError] = useState(null);
  const [SisError, setSIsError] = useState(null);

  const [check, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const moveToEmail = () => {
    window.location.href = "https://mail.google.com/mail/?view=cm&fs=1&to=abhishekkrishnan2006@gmail.com"

  }
  const breakpoints = {
    base: "0em", // 0px
    sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
    md: "48em", // ~768px
    lg: "62em", // ~992px
    xl: "80em", // ~1280px
    "2xl": "96em", // ~1536px
  };
  const [name, setName, phone, setPhone, email, setEmail, subject, setSubject] =
    useContext(Details);

  const handleInputChange = (e) => {
    setEInput(e.target.value);
  };
  const handleNameChange = (e) => {
    setNInput(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPInput(e.target.value);
  };
  const handleSubjectChange = (e) => {
    setSInput(e.target.value);
  };

  //const isError = input === "";
  const handleClick = (e) => {
    e.preventDefault();

    setIsclicked((prevState) => !prevState); // Toggle isClicked state
  };
  const handleCheckClick = (e) => {
    e.preventDefault();

    //setIsChecked(true) //toggle isChecked state
    //setIsclicked((prevState) => !prevState) //toggle isClicked state
    try {
      Einput === ""
        ? (setIsChecked(true), setEIsError(true))
        : (setIsChecked(false), setEIsError(false));
      Ninput === ""
        ? (setIsChecked(true), setNIsError(true))
        : (setIsChecked(false), setNIsError(false));
      Pinput === ""
        ? (setIsChecked(true), setPIsError(true))
        : (setIsChecked(false), setPIsError(false));
      Sinput === ""
        ? (setIsChecked(true), setSIsError(true))
        : (setIsChecked(false), setSIsError(false));
    } catch (error) {
      console.log(error);
    }
  };
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
      Sinput === "" ? setSIsError(true) : setSIsError(false);

      /*!(!name || !phone || !email)
      ? null
      : )*/

      //setLoading(true)
      setTimeout(() => {
        setLoading(true);

        // Hide the loading indicator after another 2 seconds and log the data
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }, 100);
      if (!(!Ninput && !Pinput && !Einput && !Sinput)) {
        /*try {
          console.log(email)
        } catch (error) {
          console.log(error)
        }*/
        if (isValidGmail(Einput)) {
          console.log("ITS VALIDDD");
          setName(Ninput);
          setPhone(Pinput);
          setEmail(Einput);
          setSubject(Sinput);

          setIsclicked(false);
        } else {
          console.log("ITS not VALIDD");
          setEmail(null);
          setEIsError(true);
          setIsclicked(true);
          setEInput("");
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
    if (!(!Ninput && !Pinput && !Einput && !Sinput)) {
      try {
        console.log("Name:", name);
        console.log("Phone No:", phone);
        console.log("Email:", email);
        console.log("Subject:", subject);
        setEInput("");
        setNInput("");
        setPInput("");
        setSInput("");
        sendEmail(name, phone, email, subject);
      } catch (error) {
        console.log(error);
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
      !EisError && !NisError && !PisError && !SisError
        ? isClicked
          ? "#fbb9b6"
          : "none"
        : "#fbb9b6",
    borderRadius: "32px",
    /*width:
      !EisError && !NisError && !PisError && !SisError
        ? isClicked
          ? {base:'100px',md:'500px'}
          : "0px"
        : {base:'100px',md:'500px'},*/
    transition:
      !EisError && !NisError && !PisError && !SisError
        ? "width 1s ease-in-out"
        : "none",
  };
  const FormStyle = {
    width:
      !EisError && !NisError && !PisError && !SisError
        ? isClicked
          ? "90%"
          : "0px"
        : "90%",
    transition:
      !EisError && !NisError && !PisError && !SisError
        ? "width 0.5s ease-in-out"
        : "none",
    padding: "0",
  };
  const TextStyle = {
    /*height:!EisError && !NisError && !PisError && !SisError
    ? isClicked
      ? "40px"
      : "40px"
    : "40px",*/
    margin: "0",
    /*opacity:
      !EisError && !NisError && !PisError && !SisError
        ? isClicked
          ? "1"
          : "0"
        : "1",*/
    /*width:
      !EisError && !NisError && !PisError && !SisError
        ? isClicked
          ? "400px"
          : "0px"
        : "400px",*/
    /*transition:
      !EisError && !NisError && !PisError && !SisError
        ? "width 1s ease-in-out"
        : "none",*/
    // padding:'0px'
  };
  const phoneStyle = {
    opacity:
      !EisError && !NisError && !PisError && !SisError
        ? isClicked
          ? "1"
          : "0"
        : "1",
  };

  const buttonStyle = {
    loadingText: "Submitting",
    colorScheme: "teal",
    variant: "outline",
  };

  return (
    <Box
      w="100%"
      h={{base:"1200px",md:"1200px",lg:"100vh"}}
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection={{ base: "column", md: "column" ,lg:"row"}}
      
    >
      <Box
        style={theme}
        bgColor="#fbb9b6"
        borderRadius="32px"
        display="flex"
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="center"
        w={
          !EisError && !NisError && !PisError && !SisError
            ? isClicked
              ? { base: "350px", md: "350px",lg:"400px" }
              : "0px"
            : { base: "350px", md: "350px",lg:"400px"}
          
        }
        opacity={
          !EisError && !NisError && !PisError && !SisError
            ? isClicked
              ? "1"
              : "0"
            : "1"}
        //w={{base:"300px",md:"500px"}}
        h={{ base: "400px", md: "400px" }}
      >
        <FormControl
          isRequired
          /*w="90%"*/ mt="10px"
          isInvalid={NisError}
          sx={FormStyle}
        >
          <FormLabel
            style={TextStyle}
            h={
              !EisError && !NisError && !PisError && !SisError
                ? isClicked
                  ? "40px"
                  : "40px"
                : "40px"
            }
            opacity={
              !EisError && !NisError && !PisError && !SisError
                ? isClicked
                  ? "1"
                  : "0"
                : "1"
            }
            w={
              !EisError && !NisError && !PisError && !SisError
                ? isClicked
                  ? { base: "100px", md: "300px" }
                  : "100px"
                : { base: "100px", md: "300px" }

            }
            transition={!EisError && !NisError && !PisError && !SisError
              ? {base:"width 1s ease-in-out,opacity 2s ease-in-out",md:"width 1s ease-in-out"}
              : "none"}
          >
            First name
          </FormLabel>
          <InputGroup
            w="0px"
            display="flex"
            flexDirection="column"
            style={FormStyle}
          >
            <Input
              placeholder="First name"
              // w="400px"
              // style
              border="solid"
              borderColor="black"
              value={Ninput}
              onChange={handleNameChange}
              style={TextStyle}
              w={!EisError && !NisError && !PisError && !SisError
                ? isClicked
                  ? {base:'250px',md:"300px"}
                  : "0px"
                : {base:'250px',md:"300px"}}
                opacity={
                  !EisError && !NisError && !PisError && !SisError
                    ? isClicked
                      ? "1"
                      : "0"
                    : "1"}
                    transition={!EisError && !NisError && !PisError && !SisError
                      ? {base:"width 1s ease-in-out,opacity 2s ease-in-out",md:"width 1s ease-in-out"}
                      : "none"}
            />
            {!NisError ? (
              <FormHelperText></FormHelperText>
            ) : (
              <FormErrorMessage>Name is required.</FormErrorMessage>
            )}
          </InputGroup>
        </FormControl>
        <FormControl
          isRequired
          w="90%"
          mt="10px"
          isInvalid={PisError}
          style={FormStyle}
        >
          <FormLabel 
           h={!EisError && !NisError && !PisError && !SisError
            ? isClicked
              ? "40px"
              : "40px"
            : "40px"}
          opacity={ !EisError && !NisError && !PisError && !SisError
              ? isClicked
                ? "1"
                : "0"
              : "1"}
          w={!EisError && !NisError && !PisError && !SisError
              ? isClicked
                ? {base:'200px',md:"300px"}
                : "0px"
              : {base:'200px',md:"300px"}}
              transition={!EisError && !NisError && !PisError && !SisError
                ? {base:"width 1s ease-in-out,opacity 2.5s ease-in-out",md:"width 1s ease-in-out"}
                : "none"}
          style={TextStyle}>
            Phone No
          </FormLabel>
          <InputGroup w="100%" display="flex" flexDirection="column">
            <InputLeftElement pointerEvents="none" style={phoneStyle}>
              <PhoneIcon color="black" />
            </InputLeftElement>
            <Input
              type="number"
              placeholder="Phone number"
              w={!EisError && !NisError && !PisError && !SisError
                ? isClicked
                  ? {base:'250px',md:"300px"}
                  : "0px"
                : {base:'250px',md:"300px"}}
              opacity={
                !EisError && !NisError && !PisError && !SisError
                  ? isClicked
                    ? "1"
                    : "0"
                  : "1"}
                  transition={!EisError && !NisError && !PisError && !SisError
                    ? {base:"width 1s ease-in-out,opacity 2s ease-in-out",md:"width 1s ease-in-out"}
                    : "none"}
              border="solid"
              borderColor="black"
              value={Pinput}
              onChange={handlePhoneChange}
              style={TextStyle}
            />
            {!PisError ? (
              <FormHelperText></FormHelperText>
            ) : (
              <FormErrorMessage>Phone number is required.</FormErrorMessage>
            )}
          </InputGroup>
        </FormControl>
        <FormControl
          isRequired
          w="90%"
          mt="10px"
          isInvalid={EisError}
          style={FormStyle}
        >
          <FormLabel
           h={!EisError && !NisError && !PisError && !SisError
            ? isClicked
              ? "40px"
              : "40px"
            : "40px"}
          opacity={ !EisError && !NisError && !PisError && !SisError
              ? isClicked
                ? "1"
                : "0"
              : "1"}
          w={!EisError && !NisError && !PisError && !SisError
              ? isClicked
                ? {base:'100px',md:"300px"}
                : "0px"
              : {base:'100px',md:"300px"}}
              transition={!EisError && !NisError && !PisError && !SisError
                ? {base:"width 1s ease-in-out,opacity 2.5s ease-in-out",md:"width 1s ease-in-out"}
                : "none"}
           style={TextStyle}
           >
            Email
          </FormLabel>
          <InputGroup w="100%" display="flex" flexDirection="column">
            <Input
              placeholder="Email"
              w={!EisError && !NisError && !PisError && !SisError
                ? isClicked
                  ? {base:'250px',md:"300px"}
                  : "0px"
                : {base:'250px',md:"300px"}}
              border="solid"
              borderColor="black"
              type="email"
              value={Einput}
              onChange={handleInputChange}
              style={TextStyle}
              opacity={ !EisError && !NisError && !PisError && !SisError
                ? isClicked
                  ? "1"
                  : "0"
                : "1"}
              transition={!EisError && !NisError && !PisError && !SisError
                ? {base:"width 1s ease-in-out,opacity 2s ease-in-out",md:"width 1s ease-in-out"}
                : "none"}
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
        w={{ base: "350px", md: "350px", lg:"500px"}}
        h={{ base: "300px", md: "300px",lg:"400px" }}
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
          x={{
            WebkitTapHighlightColor: "transparent",
          }}
          onClick ={moveToEmail}
        >
          <Box
            as="svg"
            className="lucide lucide-mail"
            strokeLinejoin="round"
            strokeLinecap="round"
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
           
           sx={{
            WebkitTapHighlightColor: "transparent",
          }}
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
        >
          <Image src={pic}></Image>
        </Box>
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
            justifyContent="space-around"
            alignItems="center"
            position="absolute"
            bottom="2rem"
            left="1.5rem"
            right="1.5rem"
            h={{base:"200px",md:"200px",lg:"300px"}}
          >
            <Box
              as="span"
              className="name"
              display="block"
              fontSize={{base:"1rem",md:"1.5rem",lg:"2rem"}}
              color="black"
              fontWeight="bold"
            >
              Krishnan E
            </Box>
            <Box
              as="span"
              className="about-me"
              display="block"
              fontSize={{base:"1rem",md:"1rem",lg:"1.5rem"}}
              color="black"
              marginTop="0"
              fontFamily="Roboto"
              fontStyle="Roboto"
            >
              Feel free to reach out if you have any questions or need
              assistance.
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
            {!(!EisError && !NisError && !PisError && !SisError) ? (
              <Button
                className="button"
                sx={{
                  WebkitTapHighlightColor: "transparent",
                }}
                bg="white"
                color="black"
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
            ) : isClicked ? (
              <Button
                className="button"
                sx={{
                  WebkitTapHighlightColor: "transparent",
                }}
                bg="white"
                color="black"
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
              sx={{
                WebkitTapHighlightColor: "transparent",
              }}
                className="button"
                bg="white"
                color="black"
                border="none"
                borderRadius="20px"
                fontSize="xs"
                px="2"
                py="1"
                boxShadow="0px 5px 5px rgba(165, 132, 130, 0.1333333333)"
                _hover={{ bg: "#f55d56", color: "white" }}
                onClick={handleClick}
                //-webkitTapHighlightColor="transparent"
                //onChange={handleClick}
              >
                Contact Me
              </Button>
            )}
          </Box>
        </Box>
      </Box>
      <Box
        style={theme}
        bgColor="#fbb9b6"
        borderRadius="32px"
        display="flex"
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="center"
        w={
          !EisError && !NisError && !PisError && !SisError
            ? isClicked
              ? { base: "350px", md: "350px",lg:"400px" }
              : "0px"
            : { base: "350px", md: "350px",lg:"400px" }
        }
        h={{ base: "400px", md: "400px" }}
        opacity={
          !EisError && !NisError && !PisError && !SisError
            ? isClicked
              ? "1"
              : "0"
            : "1"}
      >
        <FormControl
          isRequired
          w="90%"
          mt="10px"
          isInvalid={SisError}
          sx={FormStyle}
        >
          <FormLabel
            style={TextStyle}
            h={
              !EisError && !NisError && !PisError && !SisError
                ? isClicked
                  ? "40px"
                  : "40px"
                : "40px"
            }
            opacity={ !EisError && !NisError && !PisError && !SisError
              ? isClicked
                ? "1"
                : "0"
              : "1"}
          w={!EisError && !NisError && !PisError && !SisError
              ? isClicked
                ? {base:'200px',md:"300px"}
                : "0px"
              : {base:'200px',md:"300px"}}
              transition={!EisError && !NisError && !PisError && !SisError
                ? {base:"width 1s ease-in-out,opacity 2.5s ease-in-out",md:"width 1s ease-in-out"}
                : "none"}
            
          >
            Tell us more
          </FormLabel>
          <InputGroup w="100%" display="flex" flexDirection="column">
            <Textarea
              autogrow = {5}
              placeholder="Subject"
              //w="400px"
              border="solid"
              borderColor="black"
              multiple={true}
              value={Sinput}
              onChange={handleSubjectChange}
              style={TextStyle}
              w={!EisError && !NisError && !PisError && !SisError
                ? isClicked
                  ? {base:'250px',md:"300px"}
                  : "0px"
                : {base:'250px',md:"300px"}}
              opacity={
                !EisError && !NisError && !PisError && !SisError
                  ? isClicked
                    ? "1"
                    : "0"
                  : "1"}
                  transition={!EisError && !NisError && !PisError && !SisError
                    ? {base:"width 1s ease-in-out,opacity 2s ease-in-out",md:"width 1s ease-in-out"}
                    : "none"}
              h="auto"
            />
            {!SisError ? (
              <FormHelperText></FormHelperText>
            ) : (
              <FormErrorMessage>Subject is required.</FormErrorMessage>
            )}
          </InputGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default ContactMe;
