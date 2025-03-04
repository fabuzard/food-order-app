import React from "react";
import { useAtom } from "jotai";
import { modalOpen } from "../store/atoms";
import OrderForm from "./OrderForm";

const Modal = ({ cartItem }) => {
  const [isOpen, setIsOpen] = useAtom(modalOpen);
  
  const handleOrderSubmit = (values) => {
    console.log("Order Submitted:", values);
  };

  const handleClose = () => setIsOpen(false);

  if (!isOpen) return null;

  const totalPrice = cartItem.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const isEmpty = cartItem.length === 0;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-xl relative transform transition-all scale-95 sm:scale-100">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl transition-transform transform hover:scale-110"
          onClick={handleClose}
          aria-label="Close"
        >
          ✖
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold mb-4 text-center">Shopping Cart</h2>

        {/* Cart Items */}
        {isEmpty ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            <ul className="flex flex-col gap-3">
              {cartItem.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center p-3 border-b last:border-none"
                >
                  <span className="font-medium flex-1">{item.name}</span>
                  <span className="text-gray-600 w-20 text-center">
                    Qty: {item.quantity}
                  </span>
                  <span className="font-semibold text-green-600">
                    ${Number(item.price).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>

            {/* Total Price */}
            <p className="mt-4 text-right font-semibold text-lg">
              Total: <span className="text-green-600">${totalPrice.toFixed(2)}</span>
            </p>
          </>
        )}

        {/* Order Form */}
        <div className="mt-6">
          <OrderForm onSubmit={handleOrderSubmit} cart={cartItem} />
        </div>
      </div>
    </div>
  );
};

export default Modal;