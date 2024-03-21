// AuthModal.js
import React from "react";
import authImage from "../../../assets/images/auth-image.jpg";

function AuthModal({ isOpen, onClose }) {
  return (
    <div
      className={`modal ${isOpen ? "show" : ""}`}
      tabIndex="-1"
      role="dialog"
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-">
            <h5 className="modal-title">Login/Register</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="flexbox">
              <div className="column">
                <img src={authImage} alt="" />
              </div>
              <div className="column">
                <form action="">
                  <div className="form">
                    <input type="text" />
                  </div>
                  <div className="form">
                    <input type="text" />
                  </div>
                  {/* Add more form fields as needed */}
                </form>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
