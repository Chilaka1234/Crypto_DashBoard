import "./FeatureCard.css";

/**
 * Reusable Feature Card
 */
const FeatureCard = ({ Icon, title, description }) => {
  return (
    <div className="feature-card">
      <div className="feature-icon">
        <Icon size={28} />
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;