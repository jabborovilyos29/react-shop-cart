import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const title = "Register Now";
const socialTitle = "Register With Social Media";
const btnText = "Get Started Now";

let socialList = [
  {
    link: "#",
    iconName: "icofont-facebook",
    className: "facebook",
  },
  {
    link: "#",
    iconName: "icofont-twitter",
    className: "twitter",
  },
  {
    link: "#",
    iconName: "icofont-linkedin",
    className: "linkedin",
  },
  {
    link: "#",
    iconName: "icofont-instagram",
    className: "instagram",
  },
  {
    link: "#",
    iconName: "icofont-pinterest",
    className: "pinterest",
  },
];

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const { signUpWithGmail, createUser } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleRegister = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (errorMessage === "Firebase: Error (auth/network-request-failed).") {
          setErrorMessage("Check your internet connection");
        }
      });
  };

  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      setErrorMessage(
        "Passwords doesn't match! Please provide correct password",
      );
    } else {
      setErrorMessage("");
      createUser(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate(from, { replace: true });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          if (
            errorMessage === "Firebase: Error (auth/network-request-failed)."
          ) {
            setErrorMessage("Check your internet connection");
          } else {
            setErrorMessage(`${errorMessage}`);
          }
        });
    }
  };
  return (
    <div>
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>
            <form className="account-form" onSubmit={handleSignup}>
              <div className="form-group">
                <input type="text" name="name" placeholder="User Name" />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <input type="password" name="password" placeholder="Password" />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                />
              </div>

              <div>
                {errorMessage && (
                  <div className="error-message text-danger">
                    {(errorMessage ===
                      "Firebase: Error (auth/email-already-in-use)." && (
                      <> Email already in use! </>
                    )) ||
                      (errorMessage ===
                        "Firebase: Password should be at least 6 characters (auth/weak-password)." && (
                        <>Password should be at least 6 characters</>
                      )) ||
                      errorMessage}
                  </div>
                )}
              </div>
              <div className="form-group">
                <button className="lab-btn">
                  <span>{btnText}</span>
                </button>
              </div>
            </form>
            <div className="account-bottom">
              <span className="d-block cate pt-10">
                Are you a member?{" "}
                <Link to="/login">
                  <strong> Login </strong>
                </Link>
              </span>
              <span className="or">
                <span>or</span>
              </span>

              <h5 className="subtitle">{socialTitle}</h5>
              <ul className="lab-ul social-icons justify-content-center">
                <li>
                  <button onClick={handleRegister} className="github">
                    <i className="icofont-github"></i>
                  </button>
                </li>
                <li>
                  <a href="/" className="facebook">
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="/" className="twitter">
                    <i className="icofont-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="/" className="linkedin">
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="/" className="instagram">
                    <i className="icofont-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
