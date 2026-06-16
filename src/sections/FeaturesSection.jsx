import "./FeaturesSection.css";

import FeatureCard from "../components/FeatureCard/FeatureCard";

import { features } from "../constants/features";

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="container">
        <div className="features-grid">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              Icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;