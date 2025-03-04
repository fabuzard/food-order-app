import { useAtom } from "jotai";
import { cartAtom } from "./atoms";

// Custom Hook for cart actions
export const useCartActions = () => {
  const [cart, setCart] = useAtom(cartAtom);

  const addToCart = (meal) => {
    const existingItem = cart.find((item) => item.id === meal.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === meal.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...meal, quantity: 1 }]);
    }
  };
  const removeFromCart = (meal) => {
    const existingItem = cart.find((item) => item.id === meal.id);
    if (existingItem) {
      if (existingItem.quantity > 1) {
        setCart(
          cart.map((item) =>
            item.id === meal.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        );
      } else {
        setCart(cart.filter((item) => item.id !== meal.id));
      }
    } else {
      console.log("cart empty");
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return { addToCart, removeFromCart }; // Return function to be used anywhere
};
