import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseURL } from "../../utilis/baseURL";

const baseQuery = fetchBaseQuery({
    baseUrl: `${BaseURL()}/api/v1/orders`,
    credentials: "include",

    prepareHeaders: (headers) => {
        const token = localStorage.getItem("token");
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    }
});

const ordersApi = createApi({
    reducerPath: "ordersApi",
    baseQuery,
    tagTypes: ["Orders"],

    endpoints: (builder) => ({

        // GET All Orders
        fetchAllOrders: builder.query({
            query: () => "/",
            providesTags: ["Orders"]
        }),
        // GET  Orders For user
        fetchOrdersForUser: builder.query({
            query: (email) => ({
                url: `/getOrdersForUser/${email}`
            }),
            providesTags: ["Orders"]
        }),

        // CREATE Order (POST)
        createOrder: builder.mutation({
            query: (newOrder) => ({
                url: "/create-order",
                method: "POST",
                body: newOrder,
            }),
            invalidatesTags: ["Orders"]
        }),

        // UPDATE Order (PUT)
        updateOrder: builder.mutation({
            query: ({ id, ...updateOrder }) => ({
                url: `/edit/${id}`,
                method: "PUT",
                body: updateOrder,
            }),
            invalidatesTags: ["Orders"]
        }),

        // DELETE Order (DELETE)
        deleteOrder: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Orders"]
        }),

    }),
});

// Hooks Export
export const {
    useFetchAllOrdersQuery,
    useCreateOrderMutation,
    useUpdateOrderMutation,
    useDeleteOrderMutation,
    useFetchOrdersForUserQuery,
    
} = ordersApi;

export default ordersApi;
