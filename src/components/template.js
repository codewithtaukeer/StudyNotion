import "./template.css";
import frame from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
function Template({ title, desc1, desc2, image, formtype, setIsLoggedIn }) {
  return (
    <div className="total d-flex mt-3 justify-content-between w-100 mx-2">
      <div className=" left d-flex flex-column ">
        <h1 className="title">{title}</h1>
        <p>
          <span className="desc1">{desc1}</span>
          <br />
          <span className="desc2">{desc2}</span>
        </p>
        {formtype === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn}></SignupForm>
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>
        )}
        <div className="d-flex align-items-center my-3">
          <div className="line"></div>
          <p className="mx-2 my-0 p-0">OR</p>
          <div className="line"></div>
        </div>
        <button className="google-btn">
          <span>Sign Up With Google</span>
        </button>
      </div>
      <div>
        <div className="back">
          <img
            className="back"
            src={frame}
            alt="pattern"
            width={558}
            height={584}
            loading="lazy"
          ></img>
          <div className="front">
            <img
              className="front"
              src={image}
              alt="image"
              width={558}
              height={584}
              loading="lazy"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Template;
