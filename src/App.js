import "./App.css";
import { NavLink, Routes, Route, useSearchParams } from "react-router-dom";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Signup from "./pages/signup";
import Login from "./pages/login";
import NavBar from "./components/navbar";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        {/* Routes with centered layout */}
        <Route
          path="/"
          element={
            <div className="main-content container">
              <Home />
            </div>
          }
        />
        <Route
          path="/dashboard"
          element={
            <div className="main-content container">
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <Dashboard />
              </PrivateRoute>
            </div>
          }
        />

        {/* Routes without centered layout */}

        <Route
          path="/signup"
          element={
            <div className="inn signupp container d-flex justify-content-center align-items-center">
              <Signup setIsLoggedIn={setIsLoggedIn} />
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <div className="inn container d-flex justify-content-center">
              <Login setIsLoggedIn={setIsLoggedIn} />
            </div>
          }
        />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
