import React from 'react'
import '../styles/components/cardDetail.scss'
import { BsFacebook, BsTwitter } from 'react-icons/bs'
import { CiTwitter } from 'react-icons/ci'
import Slider from '../components/Slider/Slider' 

function detailCard({ data }) {


    const eventTitle = data.Tur;


    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(eventTitle)}`;

    return (

        <div>

            <div className='poster-image'>

                    <Slider data={data}/>


                <div>
                    <div className='Acıklama'>
                        <h3>Filmin Adı: {data.Adi} {CiTwitter}</h3>
                        <p>Etkinlik Merkezi: {data.EtkinlikMerkezi}</p>
                        <p>Etkinlik Tarihi:{data.EtkinlikBaslamaTarihi}</p>

                    </div>
                    <div className='socialMedia'>
                        <h1>SOSYAL MEDYADA PAYLAŞ</h1>
                        <div className='socials'>
                        <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer">{<BsFacebook size={32} color='white' />}</a>
                        <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer">{<BsTwitter size={32} color='white' />}</a>
                        </div>
                    </div>
                   
                    </div>
                </div>
            </div>

    )
}

export default detailCard