import logo from './logo.svg';
import './App.css';
import LoginForm from './Components/loginForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerLogin from './Components/customerLoginPage';
import AdminLogin from './Components/adminLoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route >
          <Route path="/" element={<LoginForm />} />
          <Route path="/customer" element={<CustomerLogin />} />
          <Route path="/admin" element={<AdminLogin />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
