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
    width: "100%",
    height:"735px",
    /* Add your background pattern here */
    backgroundImage: "repeating-radial-gradient(  #0c0a0a 80%,#2f312f 90%,#3f4549 90%)",
    backgroundSize: "65px 65px"
  }
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap';
  link.rel = 'stylesheet';

document.head.appendChild(link);

  return (
    <Box style={theme}>
        <DetailsContext>
          <ContactMe/>
        </DetailsContext>
    </Box>
  )
}

export default App
