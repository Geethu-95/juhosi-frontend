import logo from './logo.svg';
import './App.css';
import LoginForm from './Components/loginForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CustomerLogin from './Components/customerLoginPage';
import AdminLogin from './Components/adminLoginPage';

function App() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">JUHOSI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
    <BrowserRouter>
      <Routes>
        <Route >
          <Route path="/home" element={<LoginForm />} />
          <Route path="/customer" element={<CustomerLogin />} />
          <Route path="/admin" element={<AdminLogin />} />

        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
