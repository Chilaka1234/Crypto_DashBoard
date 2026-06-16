import "./About.css";
import cryptoDevice from "../../assets/images/crypto-device.png";

/**
 * About Section
 * Displays blockchain ecosystem information
 */
const About = () => {
  return (
    <section className="about-section">
      <div className="container about-container">
        
        {/* Left Side Image */}
        <div className="about-image">
          <img
            src={cryptoDevice}
            alt="Crypto Ecosystem"
          />
        </div>

        {/* Right Side Content */}
        <div className="about-content">
          <span className="about-tag">
            ULTRAPRO BLOCKCHAIN
          </span>

          <h2>
            Building the Future of
            Decentralized Communities
          </h2>

          <p>
            Ultrapro Blockchain provides secure,
            scalable, and transparent solutions
            designed to empower crypto communities,
            businesses, and investors worldwide.
          </p>

          <p>
            Our ecosystem enables decentralized
            finance, digital asset management,
            blockchain marketplaces, staking
            opportunities, and cross-chain
            interoperability.
          </p>

          <button className="about-btn">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;