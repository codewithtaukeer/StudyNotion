import { NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "../assets/logo.svg";

function NavBar(props) {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className="container navv p-3">
      <div className="d-flex justify-content-between align-items-center">
        {/* Empty div to balance center */}
        <div style={{ width: "150px" }}>
          <img src={logo}></img>
        </div>

        {/* Centered links */}
        <div className="d-flex flex-grow-1 justify-content-center">
          <NavLink className="m-2 nav-link h" to="/">
            Home
          </NavLink>
          <NavLink className="m-2 nav-link h" to="/">
            About
          </NavLink>
          <NavLink className="m-2 nav-link h" to="/">
            Contact
          </NavLink>
        </div>

        {/* Right-aligned buttons */}
        <div>
          {!isLoggedIn && (
            <NavLink to="/login">
              <button className="butt  m-2">Log in</button>
            </NavLink>
          )}
          {!isLoggedIn && (
            <NavLink to="/signup">
              <button className="butt  m-2">Sign up</button>
            </NavLink>
          )}
          {isLoggedIn && (
            <NavLink to="/">
              <button
                onClick={() => {
                  setIsLoggedIn(!isLoggedIn);
                }}
                className=" butt m-2"
              >
                Log out
              </button>
            </NavLink>
          )}
          {isLoggedIn && (
            <NavLink to="/dashboard">
              <button className="butt m-2">Dashboard</button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
