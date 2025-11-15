import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { FiUser, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import axios from "axios"
const AdminLogin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = async (userdata) => {
        console.log("Admin Login:", userdata);
        // navigate("/admin/dashboard");
        try {
            const { data } = await axios.post("http://localhost:3000/api/v1/auth/admin/login", userdata, { withCredentials: true })
            
            localStorage.setItem("token", data?.token)
            navigate("/dashboard");
            // console.log("data", data)
        } catch (error) {
            console.log("eror into admin login ", error)
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
            <div className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">

                {/* HEADER */}
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center">
                    Admin Login
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-center mb-6">
                    Restricted Access Only
                </p>

                {/* FORM */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                    {/* EMAIL */}
                    <div className="space-y-1">
                        <label className="text-sm text-gray-600 dark:text-gray-300">Email</label>
                        <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 px-3 py-3 rounded-xl">
                            <FiUser className="text-gray-500 dark:text-gray-300" />
                            <input
                                type="email"
                                placeholder="admin@example.com"
                                className="bg-transparent outline-none w-full text-gray-800 dark:text-gray-100"
                                {...register("email", { required: "Email is required" })}
                            />
                        </div>
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    {/* PASSWORD */}
                    <div className="space-y-1">
                        <label className="text-sm text-gray-600 dark:text-gray-300">Password</label>
                        <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 px-3 py-3 rounded-xl">
                            <FiLock className="text-gray-500 dark:text-gray-300" />

                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter password"
                                className="bg-transparent outline-none w-full text-gray-800 dark:text-gray-100"
                                {...register("password", { required: "Password is required" })}
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword((prev) => !prev)}
                                className="text-gray-500 dark:text-gray-300"
                            >
                                {showPassword ? <FiEyeOff /> : <FiEye />}
                            </button>
                        </div>
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                    </div>

                    {/* LOGIN BUTTON */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-semibold"
                    >
                        Login
                    </button>

                    {/* FORGOT PASSWORD */}
                    <div className="text-right">
                        <Link to="/admin/forgot" className="text-blue-600 dark:text-blue-400 text-sm hover:underline">
                            Forgot Password?
                        </Link>
                    </div>

                </form>

                {/* FOOTER */}
                <p className="mt-6 text-center text-gray-500 dark:text-gray-400 text-sm">
                    © {new Date().getFullYear()} BookStore Admin Panel
                </p>

            </div>
        </div>
    );
};

export default AdminLogin;
