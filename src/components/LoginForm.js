import "./LoginForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm({ setIsLoggedIn }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const Navigate = useNavigate();

  function update(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    Navigate("/dashboard");
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="form d-flex flex-column ">
          <label htmlFor="email">
            Email Address<sup>*</sup>
          </label>
          <input
            required
            onChange={update}
            type="email"
            id="email"
            name="email"
            value={formData.email}
          ></input>
          <div className="mt-3  w-100">
            <label htmlFor="password">Password</label>
            <br />
            <div className="position-relative">
              <input
                className="w-100"
                required
                onChange={update}
                type={showPass ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
              ></input>
              <span className="eye m-0 " onClick={() => setShowPass(!showPass)}>
                {" "}
                <FontAwesomeIcon icon={showPass ? faEyeSlash : faEye} />{" "}
              </span>
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsLoggedIn(true)}
          className=" signin mt-5 w-100"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
