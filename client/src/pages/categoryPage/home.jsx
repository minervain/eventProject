import React from 'react'
import Card from '../../components/Card'
import '../../styles/pages.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import AtomicSpinner from 'atomic-spinner'
function Home() {

    const filteredData = useSelector((state) => state.data.filteredData);
    console.log(filteredData)

    if(!filteredData){
        return  <AtomicSpinner />
    }

    
    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 home-contain">
                {filteredData.map(event => (
                    <Link key={event._id} to={`/detail/${event._id}`}>
                        <Card key={event._id} event={event} />
                    </Link>
                ))}
            </div>
        </div>)
}

export default Home