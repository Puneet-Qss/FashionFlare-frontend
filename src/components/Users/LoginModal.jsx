import "../../assets/styles/modal.css";
import logo from "../../assets/images/logo.png";
import { useState } from "react";
import axios from "axios";
import LoaderComponent from "../Loader/LoaderComponent";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginModal = ({ onClose, setIsLoggedIn }) => {
  const [loader, setLoader] = useState();
  const [isShowSignUp, setIsShowSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
  });

  const [signUpForm, setSignUpForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const signUpHandler = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/signup",
        signUpForm
      );
      if (response.status == 200) {
        localStorage.setItem(
          "accessToken",
          response.data?.data?.user?.accessToken
        );
        setLoader(false);
        onClose();
        toast.success(response?.data?.data?.message);
        setIsLoggedIn(true);
      }
      setLoader(false);
    } catch (error) {
      setLoader(false);
      toast.error(error.response?.data?.error);
      return error.response;
    }
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    setLoader(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/auth/login",
        userForm
      );
      console.log("RSSSS", response);
      if (response.status == 200) {
        setLoader(false);
        toast.success(response?.data?.message);
        onClose();
        setIsLoggedIn(true);
      }
    } catch (error) {
      setLoader(false);
      toast.error(error.response?.data?.error);
      return error.response;
    }
  };

  // PASSWORD TOGLLE
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  // SignUp Modal
  const signUpContent = () => {
    return (
      <div
        className="modal-content modal-content_signup"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="close">
          <span onClick={onClose}>&times;</span>
        </div>

        <div className="top-content">
          <h1 className="title-h2 head">
            <img src={logo} alt="" />
            Signup Here
          </h1>
        </div>

        <div className="form-group">
          <form action="" className="login-form" onSubmit={signUpHandler}>
            <div className="email">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                placeholder="Enter your first name*"
                onChange={(e) => {
                  setSignUpForm({ ...signUpForm, firstName: e.target.value });
                }}
              />
            </div>
            <div className="text">
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                placeholder="Enter your last name*"
                onChange={(e) => {
                  setSignUpForm({ ...signUpForm, lastName: e.target.value });
                }}
              />
            </div>
            <div className="email">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Enter your email*"
                onChange={(e) => {
                  setSignUpForm({ ...signUpForm, email: e.target.value });
                }}
              />
            </div>

            <div className="password">
              <label htmlFor="">Password</label>
              <input
                type="password"
                placeholder="Enter your password*"
                onChange={(e) => {
                  setSignUpForm({ ...signUpForm, password: e.target.value });
                }}
              />
            </div>

            <div className="new-user">
              <h3
                className="title-h3 no-account"
                onClick={() => {
                  setIsShowSignUp(!isShowSignUp);
                }}
              >
                Already have an account?
              </h3>
              <h3 className="title-h3 no-account">Reset Password?</h3>
            </div>
            <div className="buttons-group">
              <button className="btn btn-login">Signup</button>
              <button className="btn btn-cancel" onClick={onClose}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <>
      {loader && <LoaderComponent color="#36d7b7" />}
      <div className="modal-overlay">
        {/* LOGIN CONTENTN  */}
        {isShowSignUp ? (
          signUpContent()
        ) : (
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="close">
              <span onClick={onClose}>&times;</span>
            </div>

            <div className="top-content">
              <h1 className="title-h2 head">
                <img src={logo} alt="" />
                Login Here
              </h1>
            </div>

            <div className="form-group">
              <form action="" className="login-form" onSubmit={loginHandler}>
                <div className="email">
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email*"
                    onChange={(e) => {
                      setUserForm({ ...userForm, email: e.target.value });
                    }}
                  />
                </div>
                <div className="password">
                  <label htmlFor="">Password</label>
                  <div className="password-input">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password*"
                      value={userForm.password}
                      onChange={(e) => {
                        setUserForm({ ...userForm, password: e.target.value });
                      }}
                    />

                    <div
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </div>
                  </div>
                </div>

                <div className="new-user">
                  <h3
                    className="title-h3 no-account"
                    onClick={() => {
                      setIsShowSignUp(true);
                    }}
                  >
                    Don't have an account?
                  </h3>
                  <h3 className="title-h3 no-account">Reset Password?</h3>
                </div>
                <div className="buttons-group">
                  <button className="btn btn-login">Login</button>
                  <button className="btn btn-cancel" onClick={onClose}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LoginModal;
