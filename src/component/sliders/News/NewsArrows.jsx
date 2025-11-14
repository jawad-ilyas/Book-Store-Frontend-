// src/components/News/NewsArrows.jsx
import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const NewsArrows = ({ onClick, direction }) => (
  <button
    onClick={onClick}
    className={`absolute ${
      direction === "left" ? "left-3" : "right-3"
    } top-1/2 -translate-y-1/2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-full shadow-lg hover:scale-110 transition z-10 w-11 h-11 flex items-center justify-center`}
  >
    {direction === "left" ? <FiChevronLeft size={22} /> : <FiChevronRight size={22} />}
  </button>
);

export default NewsArrows;
