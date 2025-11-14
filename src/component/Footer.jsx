import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-gray-200 dark:text-gray-400 mt-10">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white dark:text-gray-100 mb-3">BookStore</h2>
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            Your one-stop destination for all your favorite books. Explore new releases, bestsellers, and exclusive offers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white dark:text-gray-100 mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-blue-500 transition">Home</a></li>
            <li><a href="/books" className="hover:text-blue-500 transition">Books</a></li>
            <li><a href="/about" className="hover:text-blue-500 transition">About</a></li>
            <li><a href="/contact" className="hover:text-blue-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold text-white dark:text-gray-100 mb-3">Categories</h3>
          <ul className="space-y-2">
            <li><a href="/category/fiction" className="hover:text-blue-500 transition">Fiction</a></li>
            <li><a href="/category/non-fiction" className="hover:text-blue-500 transition">Non-Fiction</a></li>
            <li><a href="/category/science" className="hover:text-blue-500 transition">Science</a></li>
            <li><a href="/category/children" className="hover:text-blue-500 transition">Children</a></li>
          </ul>
        </div>

        {/* Newsletter / Social Media */}
        <div>
          <h3 className="font-semibold text-white dark:text-gray-100 mb-3">Stay Updated</h3>
          <p className="text-gray-400 dark:text-gray-500 text-sm mb-3">Subscribe to our newsletter for the latest books and offers.</p>
          <form className="flex space-x-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="flex-1 p-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white" 
            />
            <button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700 px-4 rounded-lg transition"
            >
              Subscribe
            </button>
          </form>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-blue-500 transition">Facebook</a>
            <a href="#" className="hover:text-blue-500 transition">Twitter</a>
            <a href="#" className="hover:text-blue-500 transition">Instagram</a>
            <a href="#" className="hover:text-blue-500 transition">LinkedIn</a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 dark:border-gray-800 mt-8 py-4 text-center text-gray-500 dark:text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} BookStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
