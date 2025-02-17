import React from 'react'

import { Box } from '@chakra-ui/react'
const Twitter = () => {
  const navigateToTwitter = () => {
    window.location.href = 'https://x.com/KrishnanE438622';
  };
  return (
    <Box as="svg" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="black" _hover={{fill:"red"}} onClick={navigateToTwitter}>
        <path
            as="path"
            d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
        ></path>
    </Box>
  )
}

export default Twitter