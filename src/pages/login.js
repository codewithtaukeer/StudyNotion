import "./login.css";
import Template from "../components/template";
import loginn from "../assets/loginn.jpg";
function Login({ setIsLoggedIn }) {
  return (
    <Template
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career"
      image={loginn}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    ></Template>
  );
}

export default Login;
