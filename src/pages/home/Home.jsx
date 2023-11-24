import React, { useState } from 'react';
import './home.css';
import Button from '../../component/button/Button';
import { MdArrowBackIosNew } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import TopNavigation from './TopNavigation';
import Person from './Person';
import { Route, Routes } from 'react-router-dom';
import Classroom from '../../teacher-student-pages/classroom/Classroom'
import WhiteBoard from '../../teacher-student-pages/whiteboard/WhiteBoard'
import Videos from '../../teacher-student-pages/videos/Videos'
import SlideShow from '../../teacher-student-pages/slideshow/SlideShow'
import Document from '../../teacher-student-pages/document/Document'
import DocCam from '../../teacher-student-pages/docsCam/DocsCam'


const Home = () => {
    const [TopNavActive, setTopNavActive] = useState('classroom');

    return (
        <>
            <div className="page home-page">
                <div className="main-home">
                    <div className="content">
                        <div className="title">
                            <Button ButtonContent={<MdArrowBackIosNew />} />
                            <p>Basic Mathematics 101</p>
                        </div>
                        <div className="call-support">
                            <div className="call_support_content content">
                                <IoCall className='call-icon' />
                                <p>Call Teacher</p>
                            </div>
                            <div className="call_support_content content">
                                <FaUser className='support-icon' />
                                <p>Support</p>
                            </div>
                        </div>
                    </div>
                    <div className="TopNavigation">
                        <TopNavigation TopNavActive={TopNavActive} setTopNavActive={setTopNavActive} />
                    </div>
                    <div className="LivePage">
                        {/*  */}
                        <Person />
                        <div className="top-navigation-item">
                            {/* teacher student interaction pages */}
                            <Routes>
                                <Route path='/classroom' element={<Classroom />} />
                                <Route path='/whiteboard' element={<WhiteBoard />} />
                                <Route path='/videos' element={<Videos />} />
                                <Route path='/slideshow' element={<SlideShow />} />
                                <Route path='/document' element={<Document />} />
                                <Route path='/doc' element={<DocCam />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home