import React from 'react'
import '../../styles/konser.scss'
import useDataFetch from '../../hooks/useDataFetch'
import Card from '../../components/Card'
import { Link } from 'react-router-dom'
import AtomicSpinner from 'atomic-spinner'

function Tiyatro() {
    const { data, loading } = useDataFetch('http://localhost:5000/api/etkinlikler/TİYATRO')
    if (loading) {
        return <div className='flex justify-center items-center'> <AtomicSpinner atomSize={650} nucleusParticleBorderColor='white' /> </div>;
    }
    return (
        <div className='contain'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4  home-contain">
                {data.map((event) => (
                    <Link key={event._id} to={`/detail/${event._id}`}>
                        <Card key={event._id} event={event} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Tiyatro