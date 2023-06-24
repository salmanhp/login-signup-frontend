import { Container } from "@mui/material"
import Login from './components/Login'
import Registration from "./components/Registration";
// import { Router } from "react-chrome-extension-router";
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <Container>
        <Routes>
          <Route path='/' element={<Registration />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Container>
    </div>
  )
}

export default App