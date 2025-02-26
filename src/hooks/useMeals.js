import { useEffect, useState } from "react";
import { fetchMeals } from "../api/meals";

export const useMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchMeals() // ✅ Call the function
      .then(setMeals)
      .catch(console.error);
  }, []);

  return meals;
};
