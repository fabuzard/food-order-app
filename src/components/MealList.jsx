import { useMeals } from '../hooks/useMeals';
import MealItem from './MealItem';
import { useMemo ,useEffect} from 'react';
import { useAtom } from 'jotai';
import { cartAtom } from '../store/atoms';
const MealList = () => {
  const meals = useMeals();
   const [cart, setCart] = useAtom(cartAtom);

  const mealItems = useMemo(() => 
    meals.map((meal) => <MealItem key={meal.id} meal={meal} image={meal.image} />), 
    [meals]
  );

  
  useEffect(() => {
    console.log(cart);
  }, [cart]); // Empty dependency array ensures it runs only once
  
  return (
    <div className=''>
      <h2>Meals</h2>
      <div className='grid grid-cols-3 gap-4'>

      {meals.length === 0 ? <p>Loading meals...</p> : mealItems}
      </div>
    </div>
  );
};

export default MealList;
