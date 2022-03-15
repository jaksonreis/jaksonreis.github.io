import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './styles/theme'
import { ParallaxProvider } from 'react-scroll-parallax'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
    <ParallaxProvider>
      <App />
      </ParallaxProvider>
    </ChakraProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
