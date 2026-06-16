import "./Hero.css";
import heroImg from "../../assets/images/hero.png";

/**
 * Hero Section
 */
const Hero = () => {
  const stats = [
    {
      value: "200,000+",
      label: "Transactions/Sec",
    },
    {
      value: "36+",
      label: "Countries",
    },
    {
      value: "1M+",
      label: "Trade Per Day",
    },
  ];

  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Pinnacle of
          <br />
          Crypto Communities
        </h1>

        <p>
          Embark on a Financial Revolution with
          Ultrapro Blockchain and unlock
          decentralized opportunities.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Contact Us
          </button>

          <button className="secondary-btn">
            Learn More
          </button>
        </div>

        <div className="stats-container">
          {stats.map((item) => (
            <div key={item.label} className="stat-card">
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-right">
        {/* Replace later with exported Figma asset */}
        <img src={heroImg} alt="Crypto Hero" />
      </div>
    </section>
  );
};

export default Hero;