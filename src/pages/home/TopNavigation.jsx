import React from 'react';
import './home.css';
import { SiGoogleclassroom } from "react-icons/si";
import { TfiBlackboard } from "react-icons/tfi";
import { LiaYoutube } from "react-icons/lia";
import { RiSlideshowLine } from "react-icons/ri";
import { LuFileText } from "react-icons/lu";
import { ImFilePlay } from "react-icons/im";
import { Link } from 'react-router-dom';


const TopNavigation = ({ TopNavActive, setTopNavActive }) => {
    const navigation_data = [
        { "id": 1, "name": "Classroom", "links": 'classroom', "icon": <SiGoogleclassroom /> },
        { "id": 2, "name": "Whiteboard", "links": 'whiteboard', "icon": <TfiBlackboard /> },
        { "id": 3, "name": "Videos", "links": 'videos', "icon": <LiaYoutube /> },
        { "id": 4, "name": "Slide Show", "links": 'slideshow', "icon": <RiSlideshowLine /> },
        { "id": 5, "name": "Documents", "links": 'document', "icon": <LuFileText /> },
        { "id": 6, "name": "Doc.Cam", "links": 'doc', "icon": <ImFilePlay /> }
    ]
    return (
        <>
            <div className="top-navigation-component">
                <div className="top-navigation">
                    {
                        navigation_data.map(val => {
                            return <div key={val.id} className={`main-navigation ${TopNavActive === val.links ? 'main-navigation-active' : ''}`} onClick={() => setTopNavActive(val.links)}>
                                <Link to={`/${val.links}`} className='navigation-icon'>{val.icon}</Link>
                                <p className='navigation-name'>{val.name}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default TopNavigation