import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { HiViewGridAdd } from "react-icons/hi";
import { MdOutlineManageHistory } from "react-icons/md";
import { FiSearch, FiBell, FiLogOut } from "react-icons/fi";
import axios from "axios";
import { BaseURL } from "../../utilis/baseURL";

const DashboardLayout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    const fetchData = async () => {

        try {

            const { data } = await axios.get(`${BaseURL()}/api/v1/admin/`)
            console.log("fetch data ", data)
        } catch (error) {
            console.log("error into the adming api ")
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <section className="flex min-h-screen bg-gray-100 dark:bg-gray-900">

            {/* ============================
          SIDEBAR (Synced Theme)
      =============================== */}
            <aside className="hidden sm:flex flex-col bg-white dark:bg-gray-800 shadow-xl w-20">
                <div className="h-20 flex items-center justify-center border-b dark:border-gray-700">
                    <img src="/fav-icon.png" className="h-10 w-10" alt="Logo" />
                </div>

                <nav className="flex flex-col items-center py-6 gap-3 flex-grow text-gray-600 dark:text-gray-300">

                    {/* Dashboard Icon */}
                    <Link
                        to="/dashboard"
                        className="p-3 rounded-xl bg-blue-600 text-white shadow-md"
                    >
                        <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6"
                            />
                        </svg>
                    </Link>

                    {/* Add Book */}
                    <Link
                        to="/dashboard/add-new-book"
                        className="p-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl"
                    >
                        <HiViewGridAdd className="h-6 w-6" />
                    </Link>

                    {/* Manage Books */}
                    <Link
                        to="/dashboard/manage-books"
                        className="p-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl"
                    >
                        <MdOutlineManageHistory className="h-6 w-6" />
                    </Link>

                </nav>

                {/* Logout */}
                <div className="h-20 flex items-center justify-center border-t dark:border-gray-700">
                    <button
                        onClick={handleLogout}
                        className="p-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl"
                    >
                        <FiLogOut className="h-6 w-6 text-red-500" />
                    </button>
                </div>
            </aside>

            {/* ============================
          RIGHT SIDE MAIN WRAPPER
      =============================== */}
            <div className="flex-grow">

                {/* ============================
            TOP HEADER (Synced UI)
        =============================== */}
                <header className="h-20 flex items-center px-6 bg-white dark:bg-gray-800 shadow-sm">

                    {/* Search Bar */}
                    <div className="relative w-full max-w-md">
                        <FiSearch className="absolute left-3 top-3 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search dashboard..."
                            className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 outline-none"
                        />
                    </div>

                    {/* Right Icons */}
                    <div className="flex items-center gap-6 ml-auto">

                        {/* Notification */}
                        <button className="relative p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                            <FiBell className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                            <span className="absolute top-1 right-1 h-2.5 w-2.5 bg-red-500 rounded-full animate-ping"></span>
                        </button>

                        {/* User Profile */}
                        <div className="flex items-center gap-3">
                            <img
                                src="https://randomuser.me/api/portraits/women/68.jpg"
                                className="h-11 w-11 rounded-full object-cover"
                                alt="user"
                            />
                            <div className="hidden md:block">
                                <p className="font-semibold text-gray-800 dark:text-gray-100">
                                    Grace Simmons
                                </p>
                                <p className="text-sm text-gray-500">Admin</p>
                            </div>
                        </div>

                    </div>
                </header>

                {/* ============================
            MAIN CONTENT
        =============================== */}
                <main className="p-6">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                                Dashboard
                            </h1>
                            <p className="text-gray-500">Bookstore Management Panel</p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-4">
                            <Link
                                to="/dashboard/manage-books"
                                className="px-5 py-2.5 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-100"
                            >
                                Manage Books
                            </Link>

                            <Link
                                to="/dashboard/add-new-book"
                                className="px-5 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 shadow-md"
                            >
                                Add New Book
                            </Link>
                        </div>
                    </div>

                    <Outlet />
                </main>
            </div>
        </section>
    );
};

export default DashboardLayout;
