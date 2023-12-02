import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'

const Main = () => {
    const [isActive, setActive] = useState(false);

    return (
        <>
            <div className="main">
                <Routes>
                    <Route path='/' element={<Login isActive={isActive} setActive={setActive} />} />
                    <Route path='/dashboard' element={<Dashboard isActive={isActive} setActive={setActive} />} />
                </Routes>
            </div>
        </>
    )
}

export default Main