import "./SignupForm.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SignupForm({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    createpassword: "",
    confirmpassword: "",
    firstname: "",
    lastname: "",
  });

  const [showCreatePassword, setShowCreatePassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function update(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();

    if (formData.createpassword !== formData.confirmpassword) {
      toast.error("Passwords do not match!");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Account created successfully!");
    navigate("/dashboard");
    console.log({ ...formData });
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="d-flex mb-3">
        <button type="button" className="btn btn-outline-primary me-2">
          Student
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Instructor
        </button>
      </div>

      <div className="row mb-3">
        <div className="col">
          <label htmlFor="firstname">
            First Name<sup>*</sup>
          </label>
          <input
            required
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={update}
            placeholder="Enter your first name"
            className="form-control"
          />
        </div>
        <div className="col">
          <label htmlFor="lastname">
            Last Name<sup>*</sup>
          </label>
          <input
            required
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={update}
            placeholder="Enter your last name"
            className="form-control"
          />
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="email">
          Email Address<sup>*</sup>
        </label>
        <input
          required
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={update}
          placeholder="Enter email"
          className="form-control"
        />
      </div>

      <div className="row mb-3">
        <div className="col position-relative">
          <label htmlFor="createpassword">
            Create Password<sup>*</sup>
          </label>
          <input
            required
            type={showCreatePassword ? "text" : "password"}
            id="createpassword"
            name="createpassword"
            value={formData.createpassword}
            onChange={update}
            placeholder="Enter password"
            className="form-control pe-5"
          />
          <span
            className="eye"
            onClick={() => setShowCreatePassword(!showCreatePassword)}
          >
            <FontAwesomeIcon icon={showCreatePassword ? faEyeSlash : faEye} />
          </span>
        </div>

        <div className="col position-relative">
          <label htmlFor="confirmpassword">
            Confirm Password<sup>*</sup>
          </label>
          <input
            required
            type={showConfirmPassword ? "text" : "password"}
            id="confirmpassword"
            name="confirmpassword"
            value={formData.confirmpassword}
            onChange={update}
            placeholder="Confirm password"
            className="form-control pe-5"
          />
          <span
            className="eye"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
          </span>
        </div>
      </div>

      <button type="submit" className="btn btn-primary w-100 mt-3">
        Create Account
      </button>
    </form>
  );
}

export default SignupForm;
