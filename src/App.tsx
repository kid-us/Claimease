import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/Pages/Home";
import User from "./components/Pages/User";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import ForgotPassword from "./components/Pages/ForgotPassword";
import Driver from "./components/Pages/Driver";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/driver" element={<Driver />} />
      </Routes>
    </>
  );
}

export default App;
