import React,{useState}from 'react';
import { Box, Button, IconButton, Image, Text } from "@chakra-ui/react";
import { EmailIcon } from '@chakra-ui/icons';
import { FaInstagram, FaTwitter, FaGithub,FaEnvelope } from 'react-icons/fa';


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
              <Box
                as="svg"
                //as="svg"
                viewBox="0 0 16 15.999"
                height="16"
                width="75px"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
              >
                <path
                  as="path"
                  transform="translate(6 598)"
                  d="M6-582H-2a4,4,0,0,1-4-4v-8a4,4,0,0,1,4-4H6a4,4,0,0,1,4,4v8A4,4,0,0,1,6-582ZM2-594a4,4,0,0,0-4,4,4,4,0,0,0,4,4,4,4,0,0,0,4-4A4.005,4.005,0,0,0,2-594Zm4.5-2a1,1,0,0,0-1,1,1,1,0,0,0,1,1,1,1,0,0,0,1-1A1,1,0,0,0,6.5-596ZM2-587.5A2.5,2.5,0,0,1-.5-590,2.5,2.5,0,0,1,2-592.5,2.5,2.5,0,0,1,4.5-590,2.5,2.5,0,0,1,2-587.5Z"
                  data-name="Subtraction 4"
                 
                  id="Subtraction_4"
                ></path>
              </Box>
              <Box as="svg" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="white">
                <path
                  as="path"
                  d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                ></path>
              </Box>

              <Box as="svg"viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg" fill="white">
                <path
                  as="path"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                ></path>
              </Box>
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
