import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setData } from '../inputSlice/inputSlice';
import useDataFetch from '../../hooks/useDataFetch';

function DataFetcher() {
  const apiEndpoint = 'http://localhost:3000/api/etkinlikler'; 
  const { data, loading, error } = useDataFetch(apiEndpoint);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      if (!loading && !error) {
        dispatch(setData(data));
      }
    } catch (error) {
      console.error('Veri çekme hatası:', error);
    }
  }, [data, loading, error, dispatch]);

  return null;
}

export default DataFetcher;
