import Header from "./components/header/header.jsx";
import "./App.css";
import Home from './components/home/home.jsx'

import { Box } from '@mui/material'

function App() {
  return (
    <div>
      <Header />
      <Box style={{ marginTop : 54 }}>
        <Home />
      </Box>
    </div>
  );
}

export default App;
