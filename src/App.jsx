import react,{ useState } from 'react'
import { Box } from '@chakra-ui/react'
import './App.css'

import ContactMe from './components/ContactMe'
import DetailsContext from './components/contexts/DetailsContext'

function App() {
  const theme={
    display:"flex",
    justifyContent:"Center",
    alignItems:"center",
    //width: "100%",
    //height:"100vh",
    /* Add your background pattern here */
    backgroundImage: "repeating-radial-gradient(  #0c0a0a 80%,#2f312f 90%,#3f4549 90%)",
    backgroundSize: "65px 65px"
  }
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap';
  link.rel = 'stylesheet';

document.head.appendChild(link);
  const breakpoints = {
    base: '0em', // 0px
    sm: '30em', // ~480px. em is a relative unit and is dependant on the font size.
    md: '48em', // ~768px
    lg: '62em', // ~992px
    xl: '80em', // ~1280px
    '2xl': '96em', // ~1536px
  }

  return (
    <Box style={theme} w="100%" h={{base:"1200px",md:"100vh"}}>
        <DetailsContext>
          <ContactMe/>
        </DetailsContext>
    </Box>
  )
}

export default App
