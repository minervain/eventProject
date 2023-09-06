import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [], 
  updateFilteredData : [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action) => {
      return { ...state, data: action.payload };
    },
    filterData: (state, action) => {
      const keyword = action.payload;
      const updateFilteredData = state.data.filter(item => item.includes(keyword));
      return { ...state, data: updateFilteredData }; 
    },
  },
});

export const { setData, filterData  } = dataSlice.actions;

export default dataSlice.reducer;
