import React, { useEffect, useRef } from 'react';
import './Timeline.scss';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default ({item}) => {
    
    const gsapRef = useRef();

    const {endYear, startYear, designation, companyName, description} = item;

    useEffect(()=> {
        gsap.from(gsapRef.current, {
            scrollTrigger: {
                trigger: gsapRef.current,
                start: '0 100%',
                toggleActions: 'restart pause none none'
            },
            y: 50,
            duration: 1,
        })
        
    })

    return (
        <div className="timeline" ref={gsapRef}>
            <div className="left-column"  >
                <h2 className="duration">{endYear} - {startYear}</h2>
            </div>
            <div className="right-column">
                <h2 className="designation"  >
                    {designation}
                </h2>
                <h3 className="company-name" >
                    {companyName}
                </h3>
                <p className="responsibility" >
                    {description}
                </p>
            </div>
        </div>
    )
}