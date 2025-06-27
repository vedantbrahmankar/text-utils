import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import textReducer from './textSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    text: textReducer,
  },
});
