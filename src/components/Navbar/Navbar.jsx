import "./Navbar.css";
import { Menu } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    "Home",
    "UPRO",
    "Blog",
    "Crypto Wallet",
    "Tools",
    "NFT",
    "Airdrop",
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">
        <img
          src={logo}
          alt="logo"
          className="logo"
        />

        <nav className={`nav-menu ${isOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <a href="/" key={link}>
              {link}
            </a>
          ))}

          <button className="contact-btn">
            Contact Us
          </button>
        </nav>

        <button
          className="menu-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu />
        </button>
      </div>
    </header>
  );
};

export default Navbar;