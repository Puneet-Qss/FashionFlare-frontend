import React, { useState } from "react";
import adminLogo from "../../assets/images/admin-icon.png";
import LoaderComponent from "../Loader/LoaderComponent";
import { FaEye, FaEyeSlash } from "react-icons/fa";
function AdminModal({ onClose }) {
  const [loader, setLoader] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
  });
  const loginHandler = async (e) => {
    e.preventDefault();
    setLoader(true);
  };

  return (
    <>
      {loader && <LoaderComponent color="#36d7b7" />}

      <div className="modal-overlay">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="close">
            <span onClick={onClose}>&times;</span>
          </div>

          <div className="top-content ">
            <h1
              className="title-h2 head flex flex-col justify-center align-middle"
              style={{ alignItems: "center" }}
            >
              <img src={adminLogo} alt="" />
              Login as Admin
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

              <div className="buttons-group">
                <button className="btn btn-login">Login</button>
                <button className="btn btn-cancel" onClick={onClose}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminModal;
