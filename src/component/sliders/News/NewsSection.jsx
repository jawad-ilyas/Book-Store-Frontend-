// src/components/News/NewsSection.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import newsData from "./NewsData";
import NewsSliderSettings from "./NewsSliderSettings";

const NewsSection = () => {
  return (
    <section className="w-full py-20 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto relative">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            📰 Latest News & Updates
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm md:text-base">
            Stay informed with bookstore announcements, events, and featured stories
          </p>
        </div>

        {/* Slider */}
        <Slider {...NewsSliderSettings}>
          {newsData.map((news) => (
            <div key={news.id} className="px-4">
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 flex flex-col justify-between h-60">
                  <div>
                    <p className="text-xs uppercase text-gray-500 dark:text-gray-400 mb-1 tracking-wide">
                      {news.date}
                    </p>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {news.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                      {news.excerpt}
                    </p>
                  </div>
                  <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-5 py-2.5 rounded-lg self-start transition shadow">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default NewsSection;
