import "./EcosystemSection.css";

import EcosystemCard from "../components/EcosystemCard/EcosystemCard";

import { ecosystem } from "../constants/ecosystem";

const EcosystemSection = () => {
  return (
    <section className="ecosystem-section">
      <div className="container">
        <h2 className="section-title">
          Ecosystem
        </h2>

        <div className="ecosystem-grid">
          {ecosystem.map((item) => (
            <EcosystemCard
  key={item.title}
  title={item.title}
  description={item.description}
  image={item.image}
/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;