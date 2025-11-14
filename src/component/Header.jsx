import React, { useState } from "react";
import { FiUser, FiHeart, FiShoppingCart, FiSun, FiMoon } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const cartItems = useSelector(state => state.cart?.cartItems)
  console.log('====================================');
  console.log("cartItems ", cartItems);
  console.log('====================================');
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header className={`w-full px-6 py-4 flex justify-between items-center bg-white dark:bg-gray-900 shadow-md`}>
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-900 dark:text-white">
        <Link to="/">
          BookStore
        </Link>
      </div>

      {/* Search Bar */}
      <div className="flex-1 mx-6">
        <input
          type="text"
          placeholder="Search books, authors..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-200">
        {/* Wishlist */}
        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition">
          <FiHeart size={20} />
        </button>

        {/* Cart */}
        <Link to="/cart" className="relative p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition flex items-center justify-center">
          <FiShoppingCart size={24} className="text-gray-800 dark:text-gray-100" />

          {/* Badge */}
          {cartItems?.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
              {cartItems.length}
            </span>
          )}
        </Link>
        {/* User */}
        <Link to="/login" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition">
          <FiUser size={20} />
        </Link>

        {/* Dark/Light Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        >
          {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
