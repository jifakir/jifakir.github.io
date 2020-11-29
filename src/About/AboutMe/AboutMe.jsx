import React from 'react';
import Button from '../../UI/Button/Button';
import './AboutMe.scss';

export default () => {

    return (
        <div className="about-me">
           <div className="image-wrapper">
               <img src="https://scontent.fjsr5-1.fna.fbcdn.net/v/t1.0-9/20031885_1903996583171931_4879815851320476666_n.jpg?_nc_cat=104&ccb=2&_nc_sid=19026a&_nc_ohc=K23OuJdAgVEAX-H5RWn&_nc_ht=scontent.fjsr5-1.fna&oh=9301feda1bd2cb9a3a4a2118ce2009c7&oe=5FE8362D" alt="CoverPhoto"/>
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
                    Front-end-developer
                    </p>
                </div>
                <Button btnName='Download CV' />
           </div>
        </div>
    )
}