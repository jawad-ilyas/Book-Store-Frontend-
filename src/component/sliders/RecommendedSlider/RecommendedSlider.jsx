// RecommendedSlider.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { books } from "./booksData";
import { sliderSettings } from "./SliderSettings";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/features/cart/cartSlice";

const RecommendedSlider = () => {
  const dispatch = useDispatch();


  const handleAddToCart = (book)=>{
    dispatch(addToCart(book))
  }

  return (
    <section className="py-12 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Recommended for you
        </h2>

        <div className="relative">
          <Slider {...sliderSettings}>
            {books.map((book) => (
              <div key={book.id} className="px-3">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex gap-4 items-center h-44">
                  <img
                    src={book.img}
                    alt={book.title}
                    className="w-28 h-36 object-cover rounded-md flex-shrink-0"
                  />

                  <div className="flex-1 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {book.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-300">
                        {book.author}
                      </p>
                      <p className="mt-2">
                        <span className="text-yellow-500 font-bold text-lg">
                          {book.price}
                        </span>
                        {book.oldPrice && (
                          <span className="text-sm text-gray-400 line-through ml-2">
                            {book.oldPrice}
                          </span>
                        )}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <button onClick={()=>handleAddToCart(book)} className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md font-semibold shadow">
                        Add to basket
                      </button>

                      <div className="text-sm text-gray-500 dark:text-gray-300">★ 4.5</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default RecommendedSlider;
