import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { useCart } from '../../context/CartContext';
import '../../styles.css';


const MiniCart = () => {
  const { cart, cartTotal, toggleCart } = useCart();

  return (
    <div className="absolute right-0 mt-2 w-72 md:w-80 bg-white rounded-md shadow-xl z-20 border border-gray-200">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-gray-800">Your Cart</h3>
          <button
            onClick={toggleCart}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-4">
            <p className="text-gray-500">Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="max-h-64 overflow-y-auto">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} isMini={true} />
              ))}
            </div>
            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="flex justify-between mb-4">
                <span className="font-medium">Subtotal:</span>
                <span className="font-bold">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex flex-col space-y-2">
                <Link
                  to="/cart"
                  onClick={toggleCart}
                  className="bg-indigo-600 text-white py-2 px-4 rounded-md text-center hover:bg-indigo-700 transition duration-300"
                >
                  View Cart
                </Link>
                <button
                  disabled={cart.length === 0}
                  className={`py-2 px-4 rounded-md text-center ${
                    cart.length === 0
                      ? 'bg-gray-300 cursor-not-allowed'
                      : 'bg-gray-800 text-white hover:bg-gray-900 transition duration-300'
                  }`}
                >
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MiniCart;