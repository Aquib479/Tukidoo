import React from 'react';
import './navbar.css'
import { SlBell } from "react-icons/sl";
import { IoTimerOutline } from "react-icons/io5";
import { RiCalendarCheckFill } from "react-icons/ri";
import { GoEye } from "react-icons/go";
import { HiUsers } from "react-icons/hi";
import { RiBarChart2Fill } from "react-icons/ri";
import { MdOutlineNotes } from "react-icons/md";
import { Link } from 'react-router-dom';

const Navlist = ({ active, setActive }) => {
    const Data = [
        { "id": 1, "name": "home", "link": "/", "notification": false, "icon": <MdOutlineNotes /> },
        { "id": 2, "name": "notification", "link": "/notification", "notification": true, "icon": <SlBell /> },
        { "id": 3, "name": "timer", "link": "/timer", "notification": true, "icon": <IoTimerOutline /> },
        { "id": 4, "name": "calender", "link": "/schedule", "notification": false, "icon": <RiCalendarCheckFill /> },
        { "id": 5, "name": "lookup", "link": "/lookup", "notification": false, "icon": <GoEye /> },
        { "id": 6, "name": "users", "link": "/users", "notification": true, "icon": <HiUsers /> },
        { "id": 7, "name": "datas", "link": "/datas", "notification": true, "icon": <RiBarChart2Fill /> }
    ]
    return (
        <>
            <div className="navlist-component">
                <div className="navlist">
                    {
                        Data.map(val => {
                            return <div key={val.id} className="icon-group">
                                <Link to={val.link} className={`icon ${active === val.name ? 'active' : 'not-active'}`} onClick={() => setActive(val.name)}>{val.icon}</Link>
                                {val.notification && <div className='red-dot'></div>}
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Navlist