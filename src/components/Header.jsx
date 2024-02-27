import { useEffect, useState } from "react";
import { Button, Stack } from "@mui/material";
import logo from "../assets/images/logo.png";
import "../assets/styles/header.css";
import SidebarComponent from "./SidebarComponent";
import LoginModal from "../components/Users/LoginModal";
import { toast } from "react-toastify";
import LoaderComponent from "./Loader/LoaderComponent";
import axios from "axios";

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
    setTimeout(() => {
      setLoader(false);
    }, 1000);
    toast.success("Logout Successfully!");
    setIsLoggedIn(false);
  };

  const data = async () => {
    try {
      const APItoken = "apify_api_dHAtTjteZwtZHRnd4c5VwUKVtQR0lQ1RPJ6a";
      const response = await axios.get(
        ` https://www.amazon.com/s?i=specialty-aps&bbn=16225009011&rh=n%3A%2116225009011%2Cn%3A2811119011&ref=nav_em__nav_desktop_sa_intl_cell_phones_and_accessories_0_2_5_5
        2024-02-22T05:01:58.000Z INFO  [SUBCATEGORY] - Pages: 400 URL: https://www.amazon.com/s?i=specialty-aps&bbn=16225009011&rh=n%3A%2116225009011%2Cn%3A2811119011&ref=nav_em__nav_desktop_sa_intl_cell_phones_and_accessories_0_2_5_5&language=en&fs=true
        2024-02-22T05:01:58.207Z INFO  Router: Routing route [SUBCATEGORY] for request: https://www.amazon.com/s?i=specialty-aps&bbn=16225009011&rh=n%3A%2116225009011%2Cn%3A2811119011&ref=nav_em__nav_desktop_sa_intl_cell_phones_and_accessories_0_2_5_5&language=en&fs=true&page=200`
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    data();
  }, []);

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
