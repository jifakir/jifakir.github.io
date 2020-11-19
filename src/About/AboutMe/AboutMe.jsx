import React from 'react';
import Button from '../../UI/Button/Button';
import './AboutMe.scss';

export default () => {

    return (
        <div className="about-me">
           <div className="image-wrapper">
               <img src="http://chester.nuclearthemes.com/images/about-image.jpg" alt="CoverPhoto"/>
           </div>
           <div className="bio-wrapper">
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
                    Student
                    </p>
                </div>
                <Button btnName='Download CV' />
           </div>
        </div>
    )
}