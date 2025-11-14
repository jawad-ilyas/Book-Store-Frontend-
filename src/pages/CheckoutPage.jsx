import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const cartItems = useSelector((state) => state.cart?.cartItems || []);

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price.replace("$", "")) * 1,
    0
  );
  let currentUser = true

  const onSubmit = (data) => {
    console.log("Checkout Data:", data);
    alert("Order placed successfully!");
    const newOrder = {

      name: data?.name,
      email: currentUser?.email,
      addressInfo: {
        address: data?.address,
        city: data?.city,
        country: data?.country,
        zip: data?.zip,
      },
      paymentMethod: data?.paymentMethod,
      phone: data?.phone,
      totalPrice: subtotal,
      productIds: cartItems?.map(item => item?.id)


    }
    console.log('====================================');
    console.log("newOrder", newOrder);
    console.log('====================================');
    // Here you can redirect to a confirmation page
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Billing Details */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Billing Details</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

              {/* Name */}
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: "Email is required" })}
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              {/* Address */}
              <div>
                <input
                  type="text"
                  placeholder="Address"
                  {...register("address", { required: "Address is required" })}
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
              </div>

              {/* City & ZIP */}
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="City"
                  {...register("city", { required: "City is required" })}
                  className="flex-1 p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
                <input
                  type="text"
                  placeholder="ZIP Code"
                  {...register("zip", { required: "ZIP Code is required" })}
                  className="flex-1 p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>

              {/* Country */}
              <div>
                <input
                  type="text"
                  placeholder="Country"
                  {...register("country", { required: "Country is required" })}
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
                {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Phone"
                  {...register("phone", { required: "Phone is required" })}
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>

              {/* Payment Method */}
              <div>
                <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-200">Payment Method</label>
                <select
                  {...register("paymentMethod", { required: "Please select a payment method" })}
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="">Select Payment Method</option>
                  <option value="creditCard">Credit Card</option>
                  <option value="paypal">PayPal</option>
                </select>
                {errors.paymentMethod && <p className="text-red-500 text-sm mt-1">{errors.paymentMethod.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition mt-4"
              >
                Place Order
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Order Summary</h2>
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 py-2">
                <div>
                  <h3 className="text-gray-800 dark:text-gray-100">{item.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {item.quantity} x ${parseFloat(item.price.replace("$", "")).toFixed(2)}
                  </p>
                </div>
                <span className="text-gray-800 dark:text-gray-100 font-semibold">
                  ${(parseFloat(item.price.replace("$", "")) * 1).toFixed(2)}
                </span>
              </div>
            ))}

            <div className="flex justify-between text-gray-700 dark:text-gray-200 font-semibold text-lg mt-4">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
