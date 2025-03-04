import { useMeals } from "../hooks/useMeals";
import MealItem from "./MealItem";
import { useMemo, useEffect } from "react";
import { useAtom } from "jotai";
import { cartAtom } from "../store/atoms";

const MealList = () => {
  const meals = useMeals();
  const [cart] = useAtom(cartAtom);

  const mealItems = useMemo(
    () =>
      meals.map((meal) => (
        <MealItem key={meal.id} meal={meal} image={meal.image} />
      )),
    [meals]
  );

  useEffect(() => {
    console.log(meals);
  }, [cart]); // Logs cart updates

  return (
    <div className="bg-slate-900 py-6">
      <div className="max-w-screen-xl mx-auto px-4">
        {meals.length === 0 ? (
          <p className="text-white text-center">Loading meals...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mealItems}
          </div>
        )}
      </div>
    </div>
  );
};

export default MealList;
