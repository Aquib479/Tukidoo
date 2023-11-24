import React from 'react';
import './sidebar.css';
import Logo from '../logo/Logo'
import Navbar from '../navbar/Navbar';
import User from '../userProfile/User';


const Sidebar = () => {
    return (
        <>
            <div className="sidebar-component">
                <div className="sidebar">
                    <div className="main-sidebar-content">
                        <div className="logo">
                            <Logo />
                        </div>
                        <div className="navlist">
                            <Navbar />
                        </div>
                        <div className="user-logo">
                            <User />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar