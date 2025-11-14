import React from "react";

const Banner = () => {
  return (
    <section className="w-full bg-gradient-to-r from-blue-400 to-purple-500 dark:from-gray-800 dark:to-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Your Next Favorite Book
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Browse thousands of books across genres. Find bestsellers, new releases, and hidden gems.
          </p>
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition">
            Explore Now
          </button>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80"
            alt="Books Hero"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
