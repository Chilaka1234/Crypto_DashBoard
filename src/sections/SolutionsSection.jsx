import { useEffect, useState } from "react";

import "./SolutionsSection.css";

import SolutionCard from "../components/SolutionCard/SolutionCard";

import { getSolutions } from "../services/api";

const SolutionsSection = () => {
  const [solutions, setSolutions] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSolutions();
  }, []);

  const fetchSolutions = async () => {
    try {
      const data = await getSolutions();

      setSolutions(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="solutions-section">
      <div className="container">
        <h2 className="section-title">Solutions</h2>

        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <div className="solutions-grid">
            {solutions.map((solution) => (
              <SolutionCard
                key={solution.id}
                solution={solution}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SolutionsSection;