import React from "react";
import { useFetchSingleBookQuery } from "../../redux/book/booksApi";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";

const SingleBook = () => {
    const { id } = useParams();


    const { data, isLoading, isError } = useFetchSingleBookQuery(id)
    const book = data?.book || {}; // <-- ensures books is array

    const dispatch = useDispatch();

    const handleAddToCart = (book) => {
        dispatch(addToCart(book))
    }
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4">
            <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col lg:flex-row gap-8">

                {/* Book Cover */}
                <div className="flex-shrink-0">
                    <img
                        src={book?.coverImage}
                        alt={book?.title}
                        className="w-64 h-96 object-cover rounded-lg shadow"
                    />
                    {book?.trending && (
                        <span className="absolute mt-2 ml-2 px-3 py-1 bg-red-500 text-white font-semibold rounded-full text-sm">
                            Trending
                        </span>
                    )}
                </div>

                {/* Book Info */}
                <div className="flex-1 flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">{book?.title}</h1>
                        <p className="text-gray-500 dark:text-gray-400 mt-2">{book?.category}</p>

                        <p className="mt-4 text-gray-700 dark:text-gray-200">{book?.description}</p>
                    </div>

                    {/* Price & Actions */}
                    <div className="mt-6 flex items-center justify-between flex-col sm:flex-row gap-4">
                        <div className="flex items-center gap-4">
                            {book?.oldPrice && (
                                <span className="text-gray-400 dark:text-gray-500 line-through">${book.oldPrice}</span>
                            )}
                            <span className="text-2xl font-bold text-gray-800 dark:text-gray-100">${book.newPrice}</span>
                        </div>
                        <div className="flex gap-4">
                            <button onClick={()=>handleAddToCart(book)} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition">
                                Add to Cart
                            </button>
                            {/* <button className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 font-semibold px-6 py-3 rounded-lg transition">
                                Buy Now
                            </button> */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleBook;
