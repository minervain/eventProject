// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  filteredData: [], 
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
      state.filteredData = action.payload;

    },
    setFilter: (state, action) => {
      state.filter = action.payload;
      state.filteredData = state.data.filter((item) =>
      item.Adi.includes(action.payload)
    );
    
    },
  },
});

export const { setData, setFilter } = dataSlice.actions;

export const selectData = (state) => {
  const { data, filter } = state.data;
  if (!filter) {
    return data;
  }
  return data.filter((item) => item.Adi.includes(filter));
};

export const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
  },
});
