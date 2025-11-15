import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { BaseURL } from "../../utilis/baseURL"


const baseQuery = fetchBaseQuery({
    baseUrl: `${BaseURL()}/api/v1/book`,
    credentials: "include", // sends cookies if your backend uses them
    prepareHeaders: (headers, { getState }) => {
        // If you have a token in your Redux store
        const token = localStorage.getItem('token');
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    },
})

const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery,
    tagTypes: ['Books'],
    endpoints: (builder) => ({
        fetchAllBooks: builder.query({
            query: () => "/",
            providesTags: ['Books']
        }),
        fetchSingleBook: builder.query({
            query: (id) => `/${id}`,
            providesTags: (result, error, id) => [{ type: "Books", id }]
        }),
        createBook: builder.mutation({
            query: (newBook) => ({
                url: "/create-book",
                method: "POST",
                body: newBook
            }),
            invalidatesTags: ["Books"]
        }),
        updateBook: builder.mutation({
            query: ({ id, ...updateBook }) => ({
                url: `/edit/${id}`,
                method: "PUT",
                body: updateBook,
                headers: {
                    'Content-Type': "application/json"
                }
            }),
            invalidatesTags: ["Books"]

        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/delete/${id}`,
                method: "DELETE",

            }),
            invalidatesTags: ["Books"]

        }),
    })

})

export const {
    useFetchAllBooksQuery,
    useFetchSingleBookQuery,
    useCreateBookMutation,
    useUpdateBookMutation,
    useDeleteBookMutation
} = booksApi;


export default booksApi
