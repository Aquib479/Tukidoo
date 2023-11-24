import React, { useState } from 'react';
import './navbar.css'
import Navlist from './Navlist';


const Navbar = () => {
    const [active, setActive] = useState('home');

    return (
        <>
            <div className="navbar-component">
                <div className="navbar">
                    <Navlist active={active} setActive={setActive} />
                </div>
            </div>
        </>
    )
}

export default Navbar