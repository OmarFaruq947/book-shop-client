import { api } from '../../api/apiSlice';

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/books',
      providesTags: ['books'],
    }),
    singleBook: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: ['singleBook'],
    }),
    createBook: builder.mutation({
      query: (values) => ({
        url: '/books',
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['books'],
    }),
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['singleBook'],
    }),
    deleteBook: builder.mutation({
      query: ({ id }) => ({
        url: `/books/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['books'],
    }),
    addReview: builder.mutation({
      query: ({ id, values }) => ({
        url: `/books/review/${id}`,
        method: 'POST',
        body: {
          review: values.review,
        },
      }),
      invalidatesTags: ['review'],
    }),
    getReview: builder.query({
      query: (id) => `/books/review/${id}`,
      providesTags: ['review'],
    }),
    getSearchBooks: builder.query({
      query: (searchTerm) => `/books?searchTerm=${searchTerm}`,
    }),
  }),
});

export const {
  useGetBooksQuery,
  useSingleBookQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useAddReviewMutation,
  useGetSearchBooksQuery,
  useGetReviewQuery,
} = bookApi;
