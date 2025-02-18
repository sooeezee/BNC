import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mechkeymart-server.vercel.app/api",
  }),
  tagTypes: ["Products", "filterProducts", "Product"],
  endpoints: (builder) => ({
    // Add new product
    addProduct: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: `/product`,
        body: data,
      }),
      invalidatesTags: ["Products"],
    }),

    // Get all products
    getProduct: builder.query({
      query: () => ({
        method: "GET",
        url: "/product",
      }),
      providesTags: ["Products"],
    }),

    // Get filtered products
    getFilterProduct: builder.query({
      query: (query) => {
        const params = new URLSearchParams();
        if (query?.search) params.append("search", query.search);
        if (query?.sortBy) params.append("sortBy", query.sortBy);
        if (query?.minPrice) params.append("minPrice", query.minPrice);
        if (query?.maxPrice) params.append("maxPrice", query.maxPrice);

        return {
          url: `/product`,
          method: "GET",
          params,
        };
      },
      providesTags: ["filterProducts"],
    }),

    // Get product by ID
    getProductById: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
      providesTags: ["Product"],
    }),

    // Update a product
    updateProduct: builder.mutation({
      query: ({ data, id }) => ({
        method: "PUT",
        url: `/product/${id}`,
        body: data,
      }),
      invalidatesTags: ["Products", "filterProducts", "Product"],
    }),

    // Delete a product
    deleteProduct: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/product/${id}`,
      }),
      invalidatesTags: ["Products", "filterProducts", "Product"],
    }),
  }),
});

export const {
  useGetProductQuery,
  useUpdateProductMutation,
  useAddProductMutation,
  useDeleteProductMutation,
  useGetFilterProductQuery,
  useGetProductByIdQuery,
} = baseApi;
