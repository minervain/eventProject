import React from 'react';
import '../styles/components/card.scss';
import { FcLike } from 'react-icons/fc';

function Card({ event }) {


  const baslikSplit = (event.Adi.slice(0, 30) + '...')

  return (
    <div className='card-contain'>
      <div className="max-w-sm rounded  shadow-lg card-contain">
        <img className="w-full bg-cover" src={event.KucukAfis} alt={event.Adi} />
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl mb-2">{baslikSplit}</h2>
          <p className="text-white text-base overflow-auto h-16" style={{ overflowX: 'transpararent' }}>{event.KisaAciklama}</p>
          <p className="text-white text-sm mt-2">Yer: {event.EtkinlikMerkezi}</p>
          <p className="text-white text-sm">Tarih: {new Date(event.EtkinlikBaslamaTarihi).toLocaleDateString()}</p>
          {event.UcretsizMi ? <p className="text-green-600 font-semibold mt-2">Ücretsiz</p> : <p className="text-red-600 font-semibold mt-2">Ücretli {event.BiletFiyati}</p>}
        </div>
        <div className="px-6 py-2">
          <a href={event.BiletSatisLinki} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 flex w-72 h-12 items-center justify-between">
            Detaylarına bak <FcLike size={32} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
