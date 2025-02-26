import { useAtom } from 'jotai';
import { cartAtom } from '../store/atoms';
import { useCartActions } from '../store/useCartActions';

const MealItem = ({ meal ,image}) => {
  const {addToCart,removeFromCart} =useCartActions();




  return (
    <div>
    <img src={`http://localhost:3000/${image}`} alt="" />
      <h3>{meal.name}</h3>
      <p>${meal.price}</p>
      <div className='flex flex-col'>

      <button onClick={()=>addToCart(meal)} className='cursor-pointer'>Add to Cart</button>
      <button onClick={()=>removeFromCart(meal)} className='cursor-pointer'>remove</button>
      </div>
    </div>
  );
};

export default MealItem;
