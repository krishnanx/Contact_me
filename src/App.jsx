import react,{ useState } from 'react'
import { Center, ChakraProvider } from '@chakra-ui/react'
import './App.css'
import ContactMe from './components/ContactMe'
import DetailsContext from './components/contexts/DetailsContext'

function App() {
  const theme={
    display:"flex",
    justifyContent:"Center",
    alignItems:"center",
    height:"700px",
    width:"100%"
  }

  return (
    <div style={theme}>
      <ChakraProvider>
        <DetailsContext>
          <ContactMe/>
        </DetailsContext>
        
      </ChakraProvider>

    </div>
  )
}

export default App
