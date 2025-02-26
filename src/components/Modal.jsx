import React, { useEffect } from "react";
import { useAtom } from "jotai";
import { modalOpen } from "../store/atoms";
import OrderForm from "./OrderForm";

const Modal = ({ cartItem }) => {
  const [isOpen, setIsOpen] = useAtom(modalOpen);
  const handleOrderSubmit=(values)=>{
    console.log("Order Submitted:", values);

  }

  if (!isOpen) return null;

  const totalPrice = cartItem.reduce((acc,item)=>acc+item.price*item.quantity,0)



  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/75 ">
      <div className="bg-white min-w-3/4 min-h-2/4 p-6 rounded-lg shadow-lg relative">
        <button 
          className="absolute top-2 right-2 text-xl"
          onClick={() => setIsOpen(false)} 
        >
          ✖
        </button>
        
        <h2 className="text-lg font-bold mb-4">Shopping Cart</h2>
        
        {cartItem.length > 0 ? (
          <ul>
            {cartItem.map((item, index) => (
              <li key={index} className="flex justify-between p-2 border-b">
                <span>{item.name}</span>
                <span>Qty: {item.quantity}</span>
                <span>${item.price}</span>
                
              </li>
            ))}

                <p className="flex justify-end">The total is ${totalPrice}</p>
                <OrderForm onSubmit={handleOrderSubmit} cart={cartItem} />
          </ul>
          
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Modal;
