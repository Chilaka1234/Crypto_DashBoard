// Solutions API

const API_URL =
  "https://nxtwave-assessments-backend-nxtwave-media-static.s3-ap-south-1.amazonaws.com/topin_beta/media/content_loading/uploads/6700d26f-7f30-458e-a1e0-ff17612b1d96_solution.json"

/**
 * Fetch all solutions
 */
export const getSolutions = async () => {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error("Failed to fetch solutions")
  }

  return response.json()
}