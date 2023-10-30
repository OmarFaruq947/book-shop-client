import { api } from '../../api/apiSlice';

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (values) => {
        return {
          url: '/auth/login',
          method: 'POST',
          body: values,
        };
      },
    }),
    register: builder.mutation({
      query: (values) => {
        return {
          url: '/auth/signup',
          method: 'POST',
          body: values,
        };
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
