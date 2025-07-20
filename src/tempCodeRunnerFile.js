import "./App.css";
import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Signup from "./pages/signup";
import Login from "./pages/login";
import NavBar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
