import "./SolutionCard.css"
import { ArrowRight } from "lucide-react"

/**
 * Reusable solution card
 */
const SolutionCard = ({ solution }) => {
  return (
    <div className="solution-card">
      <div className="solution-top">
        <h3>{solution.title}</h3>

        <div className="arrow-btn">
          <ArrowRight size={18} />
        </div>
      </div>

      <p>{solution.description}</p>

      <button className="solution-btn">
        {solution.status}
      </button>
    </div>
  )
}

export default SolutionCard