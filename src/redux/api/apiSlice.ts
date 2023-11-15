import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const storedAuthData = localStorage.getItem('auth');
const token = storedAuthData ? JSON.parse(storedAuthData).token : null;

const addAuthTokenToHeaders = (headers: Headers) => {
  if (token) {
    headers.append('authorization', token);
  }
};

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://islamic-book-shop-server.vercel.app/api/v1',
    prepareHeaders: (headers) => {
      const newHeaders = new Headers(headers);
      addAuthTokenToHeaders(newHeaders);
      return newHeaders;
    },
  }),
  tagTypes: [
    'myProfile',
    'books',
    'singleBook',
    'wishlist',
    'readingList',
    'finishedReading',
    'review',
  ],
  endpoints: () => ({}),
});
