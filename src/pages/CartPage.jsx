import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart } from "../redux/features/cart/cartSlice";
import { Link } from "react-router-dom";

const CartPage = () => {
  // Calculate total
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart?.cartItems)
  const total = cartItems
    .reduce((acc, item) => acc + parseFloat(item.price.replace("$", "")), 0)

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">Your Cart</h1>
          {/* Remove Button */}
          <button onClick={() => dispatch(clearCart())} className="ml-4 flex bg-black p-2  text-red-500 hover:text-red-700 transition">
            <FiTrash2 size={20} /> Clear Cart
          </button>
        </div>
        {cartItems?.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-400 text-center">Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems?.map((item) => (
                <div key={item.id} className="flex items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-md transition">

                  {/* Book Image */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-20 h-28 object-cover rounded-lg mr-4"
                  />

                  {/* Book Info */}
                  <div className="flex-1">
                    <h2 className="font-semibold text-gray-800 dark:text-gray-100">{item.title}</h2>
                    <p className="text-gray-500 dark:text-gray-400">{item.author}</p>
                    <p className="text-gray-700 dark:text-gray-200 font-semibold mt-1">${item.price}</p>

                    {/* Quantity Selector */}
                    <div className="mt-2 flex items-center space-x-2">
                      <button className="px-2 py-1 border rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">-</button>
                      <span className="px-2">{item.quantity}</span>
                      <button className="px-2 py-1 border rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">+</button>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button onClick={() => dispatch(removeFromCart(item))} className="ml-4 text-red-500 hover:text-red-700 transition">
                    <FiTrash2 size={20} />
                  </button>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Summary</h2>
              <div className="flex justify-between text-gray-700 dark:text-gray-200">
                <span>Subtotal</span>
                <span>${total?.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700 dark:text-gray-200">
                <span>Tax (10%)</span>
                <span>${(total * 0.1).toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-gray-800 dark:text-gray-100 text-lg">
                <span>Total</span>
                <span>${(total * 1.1).toFixed(2)}</span>
              </div>
              <Link to="/Checkout" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition">
                Proceed to Checkout
              </Link>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
