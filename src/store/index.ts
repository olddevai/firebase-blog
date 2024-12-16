import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './slices/postsSlice';
import themeReducer from './slices/themeSlice';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    theme: themeReducer,
    auth: authReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;