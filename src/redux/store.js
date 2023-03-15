import { configureStore } from '@reduxjs/toolkit';
import homeSlice from './home/homeSlice';
import detailSlice from './detail/detailSlice';

const store = configureStore({
  reducer: {
    home: homeSlice.reducer,
    detail: detailSlice.reducer,
  },
});

export default store;
