import "../assets/styles/footer.css";
import logo from "../assets/images/logo.png";
import facebookIcon from "../assets/images/social-icon/fb.png";
import twitter from "../assets/images/social-icon/twitter.png";
import linkedIn from "../assets/images/social-icon/linkedin.png";
import whatsapp from "../assets/images/social-icon/whatsapp.png";

const Footer = () => {
  return (
    <footer className=" w-screen">
      <div className="logo-section">
        <img src={logo} alt="" />
      </div>

      <div className="social-icon-container">
        <div className="fb">
          <img src={facebookIcon} alt="" className="social-image" />
        </div>
        <div className="fb">
          <img src={twitter} alt="" className="social-image" />
        </div>
        <div className="fb">
          <img src={linkedIn} alt="" className="social-image" />
        </div>
        <div className="fb">
          <img src={whatsapp} alt="" className="social-image" />
        </div>
      </div>

      <div className="contact">
        <h2 className="title-h2">FashionFlare</h2>
        <p>Style Beyond Limits!</p>
        <div className="email-section">
          <form action="" className="subscribe">
            <input type="text" placeholder="abc@gmail.com" />
            <button>SUBSCRIBE</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
