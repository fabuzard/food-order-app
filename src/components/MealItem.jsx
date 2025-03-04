import { useCartActions } from "../store/useCartActions";

const MealItem = ({ meal, image }) => {
  const { addToCart, removeFromCart } = useCartActions();

  return (
    <div className="bg-slate-800  text-white rounded-xl shadow-lg flex flex-col h-full overflow-hidden transition-transform duration-300 hover:scale-105">
      {/* Image Section */}
      <img
        src={`http://localhost:3000/${image}`}
        alt={meal.name}
        className="w-full h-[200px] object-cover"
      />

      {/* Content Section */}
      <div className="flex flex-col flex-grow justify-between p-5 text-center space-y-4">
        <h3 className="text-2xl font-semibold">{meal.name}</h3>

        {/* Price Badge */}
        <p className="text-lg font-bold bg-amber-500 w-24 h-10 rounded-lg mx-auto flex justify-center items-center shadow-md">
          ${meal.price}
        </p>

        {/* Description */}
        <p className="text-neutral-400 text-sm leading-relaxed">
          {meal.description}
        </p>

        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart(meal)}
          className="bg-amber-500 text-slate-900 font-medium py-2 px-4 rounded-lg mt-3 transition-all hover:bg-amber-400 active:scale-95"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MealItem;
