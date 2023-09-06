import React from 'react';
import { useParams } from 'react-router-dom';
import useDataFetch from '../hooks/useDataFetch';
import DetailCard from '../components/detailCard';
import AtomicSpinner from 'atomic-spinner'
import SimpleMap from '../components/MapContainer';


function Detail() {
    const { id } = useParams();

    const { data, error, loading } = useDataFetch(`http://localhost:5000/api/etkinlikler/detail/${id}`);
    console.log(id)

    if (loading) {
        return  <AtomicSpinner /> ;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div>
            <DetailCard data={data} />
            <SimpleMap/>


        </div>
    );
}

export default Detail;
