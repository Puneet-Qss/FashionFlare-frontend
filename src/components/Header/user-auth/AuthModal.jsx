// AuthModal.js
import React from "react";
import authImage from "../../../assets/images/auth-image.jpg";

function AuthModal({ isOpen, onClose }) {
  return (
    <dialog className={`modal ${isOpen ? "show" : ""}`} open={isOpen}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
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
    </dialog>
  );
}

export default AuthModal;
