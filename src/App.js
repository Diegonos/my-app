import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <ChakraProvider>
          <Nav/>
          <Header/>
          <Main/>
          <Footer/>
        </ChakraProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
