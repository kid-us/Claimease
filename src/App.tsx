import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/Pages/Home";
import User from "./components/Pages/User";
import Login from "./components/Pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
