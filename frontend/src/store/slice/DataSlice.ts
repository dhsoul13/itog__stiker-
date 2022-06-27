/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Data: []
};
const DataSlice = createSlice(
  {
    name: 'Data',
    initialState,
    reducers: {
      addData(state, action) {
        state.Data = action.payload;
      },
      removeData(state, action) {
        state.Data = [];
      }
    }
  }
);

export const { addData, removeData } = DataSlice.actions;

export default DataSlice.reducer;
