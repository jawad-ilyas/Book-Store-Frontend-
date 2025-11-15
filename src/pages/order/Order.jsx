import React from "react";
import { useFetchOrdersForUserQuery } from "../../redux/orders/ordersApi";
import { useAuth } from "../../context/AuthContext";

const Order = () => {
  const { currentUser } = useAuth();
  const { data, isLoading, isError } = useFetchOrdersForUserQuery(currentUser?.email);

  const orders = data?.orders || [];

  if (isLoading) {
    return <p className="text-center mt-10">Loading orders...</p>;
  }

  if (isError) {
    return <p className="text-center mt-10 text-red-500">Error fetching orders.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          My Orders
        </h1>

        {orders.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-400 text-center">
            You have no orders yet.
          </p>
        ) : (
          orders.map((order) => (
            <div
              key={order._id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 space-y-4"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-700 dark:text-gray-200">
                    Order ID: {order._id}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    Date: {new Date(order.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <span
                  className={`px-3 py-1 rounded-full font-semibold ${
                    order.status === "Pending"
                      ? "bg-yellow-200 text-yellow-800"
                      : order.status === "Processing"
                      ? "bg-blue-200 text-blue-800"
                      : order.status === "Completed"
                      ? "bg-green-200 text-green-800"
                      : "bg-red-200 text-red-800"
                  }`}
                >
                  {order.status}
                </span>
              </div>

              {/* Customer & Shipping Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-b border-gray-200 dark:border-gray-700 py-4">
                <div className="space-y-1">
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                    Customer Info
                  </h2>
                  <p>
                    <span className="font-semibold">Name:</span> {order.name}
                  </p>
                  <p>
                    <span className="font-semibold">Email:</span> {order.email}
                  </p>
                  <p>
                    <span className="font-semibold">Phone:</span> {order.phone}
                  </p>
                  <p>
                    <span className="font-semibold">Payment:</span> {order.paymentMethod}
                  </p>
                </div>
                <div className="space-y-1">
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                    Shipping Address
                  </h2>
                  <p>{order.addressInfo.address}</p>
                  <p>
                    {order.addressInfo.city}, {order.addressInfo.zip}
                  </p>
                  <p>{order.addressInfo.country}</p>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-end items-center gap-4 border-t border-gray-200 dark:border-gray-700 pt-4">
                <span className="text-xl font-bold text-gray-800 dark:text-gray-100">
                  Total:
                </span>
                <span className="text-xl font-bold text-gray-800 dark:text-gray-100">
                  ${order.totalPrice.toFixed(2)}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Order;
