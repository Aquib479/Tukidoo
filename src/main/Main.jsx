import React from 'react';
import './main.css'
import Sidebar from '../component/sidebar/Sidebar';
import Home from '../pages/home/Home';
import Notification from '../pages/notification/Notification'
import Timer from '../pages/timer/Timer'
import Calendar from '../pages/calendarShedule/Calendar'
import LookUp from '../pages/lookup/LookUp'
import User from '../pages/users/Users'
import Datas from '../pages/datas/Datas'

import { Route, Routes } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <div className="main-component">
                <Sidebar />
                <Routes>
                    <Route path='*' element={<Home />} />
                    <Route path='/notification' element={<Notification />} />
                    <Route path='/timer' element={<Timer />} />
                    <Route path='/schedule' element={<Calendar />} />
                    <Route path='/lookup' element={<LookUp />} />
                    <Route path='/users' element={<User />} />
                    <Route path='/datas' element={<Datas />} />
                </Routes>
            </div>
        </>
    )
}

export default Main