import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export const Arrow = ({ onClick, direction }) => (
  <button
    onClick={onClick}
    className={`absolute ${
      direction === "left" ? "left-0" : "right-0"
    } top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 z-10 w-10 h-10 flex items-center justify-center transition`}
  >
    {direction === "left" ? <FiChevronLeft size={20} /> : <FiChevronRight size={20} />}
  </button>
);
