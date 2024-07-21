import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Center, ChakraProvider } from '@chakra-ui/react'
import GlobalStyle from './components/GlobalStyles.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <GlobalStyle/>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
