import Header from "./components/header/header.jsx";
import "./App.css";
import Home from './components/home/home.jsx'
import DetailView from "./components/home/details/detailView.jsx";
import { Box } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/cart/cart.jsx'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Box style={{ marginTop: 54 }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={
            <DetailView />} />
          <Route  path='/cart' element={<Cart />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
