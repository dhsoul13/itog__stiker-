import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './slice/AuthSlice';
import DataSlice from './slice/DataSlice';

const store = configureStore(
  {
    reducer: {
      Auth: AuthReducer,
      Data: DataSlice,
    }
  },
);

export default store;
