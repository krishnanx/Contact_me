import React,{useState}from 'react';
import { Box, Button, IconButton, Image, Text } from "@chakra-ui/react";
import { EmailIcon } from '@chakra-ui/icons';
import { FaInstagram, FaTwitter, FaGithub,FaEnvelope } from 'react-icons/fa';
import Insta from './Insta';
import Twitter from './Twitter';
import Github from './Github';


const ContactMe = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  return (
    <Box  
      borderWidth="1px" 
      textAlign="center"
      w="280px"
      h="280px"
      bgColor="white"
      borderRadius="32px"
      p="3px"
      pos="relative"
      boxShadow="#604b4a30 0px 70px 30px -50px"
      transition="all 0.5s ease-in-out"
      _hover={{'.bottom': {
          top: '20%',
          borderRadius: '80px 29px 29px 29px',
          transitionDelay: '0.2s',
        }, 
        '.profile-pic': {
          width: '100px',
          height: '100px',
          aspectRatio: 1,
          top: '10px',
          left: '10px',
          borderRadius: '50%',
          zIndex: 3,
          border: '7px solid #fbb9b6',
          boxShadow: 'rgba(96, 75, 74, 0.1882352941) 0px 5px 5px 0px',
          transition: 'all 0.5s ease-in-out, z-index 0.5s ease-in-out 0.1s',
        },
        /*'.profile-pic:hover': {
          transform: 'scale(1.3)',
          borderRadius: '0px',
          transition: 'transform 0.5s ease, border-radius 0.5s ease',
        },*/
        
        borderTopLeftRadius: '55px' }}
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
          _hover={{stroke: '#f55d56'}}
          
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
      </Box>
      <Box 
        className='bottom'
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
            <Box as="span" 
            className="name"
            display="block"
            fontSize="1.2rem"
            color="white"
            fontWeight="bold"
            >My Name</Box>
            <Box 
            as="span"
            className="about-me"
            display="block"
            fontSize="0.9rem"
            color="white"
            marginTop="1rem"
              >Lorem ipsum dolor sit amet consectetur adipisicinFcls
            </Box>
          </Box>
          <Box 
            className="bottom-bottom"
            position="absolute"
            left="1.5rem"
            right="1.5rem"
            bottom="1px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            h="50px"
          >
            <Box 
            className="social-links-container"
            display="flex"
            gap="1rem"
            >
              <Insta/>
              <Twitter/>
              <Github/>
            </Box>
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
            _hover={{ bg: '#f55d56', color: 'white' }}
            >Contact Me</Button>
          </Box>
      </Box>
    </Box>
  );
}

export default ContactMe;
