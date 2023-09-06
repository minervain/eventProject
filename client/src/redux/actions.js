// actions.js
import { setData } from './store';

export const fetchData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:5000/api/etkinlikler');
      const data = await response.json();
      dispatch(setData(data));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
};
