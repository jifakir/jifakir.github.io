import React, { useEffect, useRef } from 'react';
import './Timeline.scss';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default () => {
    const yearRef = useRef();
    const designRef = useRef();
    const companyRef = useRef();
    const gsapRef = useRef();

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
                <h2 className="duration">2019 - 2018</h2>
            </div>
            <div className="right-column">
                <h2 className="designation"  >
                    Frontend Web Developer
                </h2>
                <h3 className="company-name" >
                    Company Name
                </h3>
                <p className="responsibility" >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, 
                magni mollitia, aspernatur consequatur accusamus vero eum facere 
                exercitationem velit suscipit ipsam placeat libero. 
                Deleniti exercitationem nostrum quasi. Molestiae, vel porro.
                </p>
            </div>
        </div>
    )
}