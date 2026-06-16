import "./EcosystemCard.css";

const EcosystemCard = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="eco-card">
      <img
        src={image}
        alt={title}
        className="eco-icon"
      />

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
};

export default EcosystemCard;