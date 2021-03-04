import React, { useEffect, useRef } from 'react';
import Button from '../../UI/Button/Button';
import CoverPhoto from '../../assetes/cover.jpg';
import './AboutMe.scss';
import gsap from 'gsap';

export default () => {
    const imageWrapper = useRef();
    const bioWrapper = useRef();
    useEffect(()=> {
        gsap.from(imageWrapper.current,{opacity:0, y:100, duration: 1});
        gsap.from(bioWrapper.current,{opacity:0, y:-100, duration: 1});
    },[])
    return (
        <div className="about-me">
           <div className="image-wrapper" ref={imageWrapper}>
               <img src={CoverPhoto} alt="CoverPhoto" />
           </div>
           <div className="bio-wrapper" ref={bioWrapper}>
               <h1 className="title">I am <span className='name'>JI Fakir</span></h1>
               <p className="bio-brief">
               I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.
               </p>
                <div className="full-bio">
                    <p>
                        <span className="heading">
                            Full Name
                        </span>
                    Jahidul Islam Fakir
                    </p>
                    <p>
                        <span className="heading">
                            Village
                        </span>
                    Rajoir
                    </p>
                    <p>
                        <span className="heading">
                            Police Station
                        </span>
                    Rayenda
                    </p>
                    <p>
                        <span className="heading">
                            District
                        </span>
                    Bagerhat-9330
                    </p>
                    <p>
                        <span className="heading">
                            Profession
                        </span>
                    Front-end-developer
                    </p>
                </div>
                <Button btnName='Download CV' />
           </div>
        </div>
    )
}