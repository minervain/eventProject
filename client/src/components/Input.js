
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from '../redux/actions';
import {  setFilter } from '../redux/store';
import '../styles/components/Input.scss'
import {BsSearchHeartFill} from 'react-icons/bs'

const InputComponent = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData()); 
      }, [dispatch]);
    
      const handleFilterChange = (event) => {
        dispatch(setFilter(event.target.value)); 
      };

  return (
    <div className='input-contain'>
    <input
      type="text"
      placeholder="Ara ..."
      onChange={handleFilterChange}
    />
    <BsSearchHeartFill size={28} color='white'/>
    </div>
  );
};

export default InputComponent;
