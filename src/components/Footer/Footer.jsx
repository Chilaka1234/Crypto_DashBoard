import "./Footer.css";
import logo from "../../assets/images/logo.png";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <img
                  src={logo}
                  alt="logo"
                  className="logo"
                />
        <div className="social-icons">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>

        <p>
          © 2025 Ultrapro Blockchain.
          All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;