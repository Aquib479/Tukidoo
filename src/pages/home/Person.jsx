import React from 'react'
import './home.css';
import Button from '../../component/button/Button';
import { MdPhotoCameraFront } from "react-icons/md";
import { TiMicrophoneOutline } from "react-icons/ti";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { PiWechatLogo } from "react-icons/pi";
import { RxExit } from "react-icons/rx";

const Person = () => {
    const buttons = [
        { "id": 1, "name": "Cam", "icon": <MdPhotoCameraFront /> },
        { "id": 2, "name": "Mic", "icon": <TiMicrophoneOutline /> },
        { "id": 3, "name": "Share", "icon": <FaRegShareFromSquare /> },
        { "id": 4, "name": "Chat", "icon": <PiWechatLogo /> },
        { "id": 5, "name": "Leave", "icon": <RxExit /> }
    ];

    return (
        <>
            <div className="person-component">
                <div className="LivePhoto">
                    <div className="student">
                        <div className='person-info'>
                            <img src="/Assets/student.jpg" alt="" className="person_image" />
                            <div className='person-name'>Ridha</div>
                        </div>
                    </div>
                    <div className="teacher">
                        <div className='person-info'>
                            <img src="/Assets/teacher.jpg" alt="" className="person_image" />
                            <div className='person-name'>Ms. Kaur</div>
                        </div>
                    </div>
                    <div className="all-buttons">
                        {
                            buttons.map(val => {
                                return <div key={val.id} className="button-detalils">
                                    <Button key={val.id} ButtonContent={val.icon} />
                                    <p className='navigation-name'>{val.name}</p>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Person