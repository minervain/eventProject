import React from 'react'
import '../styles/components/navbar.scss'
import { Link } from 'react-router-dom'
import Input from './Input'
import { useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'

function Navbar() {

    const [isTabMenuVisible, setTabMenuVisible] = useState(false);

    const toggleTabMenu = () => {
        setTabMenuVisible(!isTabMenuVisible);
    };

    return (
        <div>
            <nav className="header p-3">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to="/" className="text-white font-semibold">minervain</Link>

                    <div style={{ color: 'black' }}>


                        <Input />



                    </div>
                    <button className="tab-button" onClick={toggleTabMenu}><AiOutlineMenu size={26}/></button>
                    <div className={`tab-menu ${isTabMenuVisible ? 'open' : ''}`}>
                        <ul className="tab-items">
                            <li><Link to="/">Tüm Etkinlikler</Link></li>
                            <li><Link to="/konser">Sinema</Link></li>
                            <li><Link to="/resim">Resim</Link></li>
                            <li><Link to="/tiyatro">Tiyatro</Link></li>
                            <li><Link to="/diger">Diğer</Link></li>
                        </ul>
                    </div>

                    <ul className="flex space-x-6 navbarq">
                        <li><Link to="/" >Tüm Etkinlikler</Link></li>
                        <li><Link to="/konser" >Sinema</Link></li>
                        <li><Link to="/resim" >Resim</Link></li>
                        <li><Link to="/tiyatro" >Tiyatro</Link></li>
                        <li><Link to="/diger" >Diğer</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar