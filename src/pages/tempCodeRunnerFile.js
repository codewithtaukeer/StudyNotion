import "./signup.css";
import Template from "../components/template";
import signupp from "../assets/signupp.jpg";
function Signup(setIsLoggedIn) {
  return (
    <Template
      title="Join the millions learning to code with StudyNotion for free"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career"
      image={signupp}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    ></Template>
  );
}

export default Signup;
