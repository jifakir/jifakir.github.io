import React, { useEffect, useRef } from 'react';
import {} from 'react-icons';
import {gsap} from 'gsap';
import './Skill.scss';


export default ({percent, title, icon}) => {

    let animRef = useRef(null);

    useEffect(()=> {
        gsap.to(animRef, {width: percent, ease: "power2", duration: 1.5});
    });

    return(
        <div className="Skill">
            <div className="row">
                <h1 className="title">
                    {title}
                </h1>
                <p className="title-icon">
                    {icon}
                </p>
            </div>
            <div className="row">
                <div className="percentage">
                    {percent}
                </div>
                <div className="progress-bar">
                    <div ref={(el) => animRef = el}  className="progress"></div>
                </div>
            </div>
        </div>
    )
}