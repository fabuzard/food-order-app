import React from "react";
import { useAtom } from "jotai";
import { modalOpen, cartAtom } from "../store/atoms";
import logo from "../assets/logo.jpg";

function Header() {
  const [cart] = useAtom(cartAtom);
  const [isOpen, setIsOpen] = useAtom(modalOpen);

  return (
    <header className="bg-slate-900 text-white py-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 sm:px-10 lg:px-16">
        {/* Logo & Title */}
        <div className="flex items-center gap-3">
          <img src={logo} className="w-12 sm:w-16 rounded-full" alt="Logo" />
          <h1 className="text-2xl sm:text-3xl font-bold text-amber-300">
            REACTFOOD
          </h1>
        </div>

        {/* Cart Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-lg sm:text-2xl cursor-pointer font-medium text-amber-300 flex items-center"
        >
          Cart 🛒 {cart.length > 0 && `(${cart.length})`}
        </button>
      </div>
    </header>
  );
}

export default Header;
