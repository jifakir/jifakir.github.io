import React from 'react';
import SectionWrap from '../SectionWrap/SectionWrap';

import './About.scss';
import AboutMe from './AboutMe/AboutMe';
import Reviews from './Reviews/Reviews';
import Service from './Service/Service';



export default () => {

    return (
        <div className="about">
            <SectionWrap title='About Me'>
                <AboutMe />
            </SectionWrap>
            <SectionWrap title='Services'>
                <div className="services-wrapper">
                    <Service />
                    <Service />
                    <Service />
                </div>
            </SectionWrap>
            <SectionWrap title='Reviews'>
                <div className="reviews-wrapper">
                    <Reviews />
                    <Reviews />
                    <Reviews />
                </div>
            </SectionWrap>
        </div>
    )
}