import React, { useState } from "react";
import Slider from "react-slick";
import { FiChevronDown } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { books, genres } from "./TopSellersData";
import { topSellersSliderSettings } from "./SliderSettings";

const TopSellers = () => {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filteredBooks =
    selectedGenre === "All"
      ? books
      : books.filter((book) => book.genre === selectedGenre);

  return (
    <section className="w-full py-16 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Top Sellers
          </h2>

          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 rounded-lg shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              {selectedGenre}
              <FiChevronDown />
            </button>
            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg w-40 z-10">
                {genres.map((genre) => (
                  <li
                    key={genre}
                    onClick={() => {
                      setSelectedGenre(genre);
                      setDropdownOpen(false);
                    }}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    {genre}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Slider */}
        <Slider {...topSellersSliderSettings}>
          {filteredBooks.map((book) => (
            <div key={book.id} className="px-3">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 hover:scale-105 transform transition cursor-pointer h-full flex flex-col">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="rounded-lg mb-4 w-full h-52 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  {book.author}
                </p>
                <p className="text-blue-600 dark:text-blue-400 font-bold mt-2">
                  {book.price}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TopSellers;
