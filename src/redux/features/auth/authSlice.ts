import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

interface IAuth {
  token: string | null;
  user: object | null;
}

const initialState: IAuth = {
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (
      state,
      action: PayloadAction<{ accessToken: string; user: object }>
    ) => {
      localStorage.setItem(
        'auth',
        JSON.stringify({
          token: action.payload.accessToken,
          user: action.payload.user,
        })
      );
      state.token = action.payload.accessToken;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.token = null;
      toast.success('Logged out Successfully');
    },
  },
});

export const { setAuth, logout } = authSlice.actions;

export default authSlice.reducer;
