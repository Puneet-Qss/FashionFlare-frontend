import { useState } from "react";
import { Button, Stack } from "@mui/material";
import logo from "../assets/images/logo.png";
import "../assets/styles/header.css";
import SidebarComponent from "./SidebarComponent";
import LoginModal from "../components/Users/LoginModal";
import { toast } from "react-toastify";
import LoaderComponent from "./Loader/LoaderComponent";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loader, setLoader] = useState();
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const logoutHandler = () => {
    setLoader(true);
    localStorage.removeItem("accessToken");
    toast.success("Logout Successfully!");
  };

  return (
    <>
      {loader && <LoaderComponent />}
      <header>
        <img src={logo} alt="" className="logo" />
        <div className="header-list">
          <ul>
            <li className="header-list">Home</li>
            <li className="header-list">About</li>
            <li className="header-list">Contact</li>
            <li className="header-list">Services</li>
          </ul>
        </div>
        <div className="button-group">
          <div className="buttons">
            <Stack spacing={2} direction="row">
              <Button
                onClick={isLoggedIn ? logoutHandler : openModal}
                className="login-text"
              >
                {isLoggedIn ? (
                  <span className="login-text">Logout</span>
                ) : (
                  <span className="login-text">Login/Register</span>
                )}
              </Button>
            </Stack>
          </div>
          <SidebarComponent />
        </div>
      </header>
      {isModalOpen && (
        <LoginModal onClose={closeModal} setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
}

export default Header;
