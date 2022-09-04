import Header from "./components/header/header.jsx";
import "./App.css";
import Home from './components/home/home.jsx'

import { Box } from '@mui/material'

import {  BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Box style={{ marginTop : 54 }}>
        <Home />
      </Box>
    </BrowserRouter>
  );
}

export default App;
