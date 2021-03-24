import React, { useEffect, useRef } from 'react';
import SectionWrap from '../SectionWrap/SectionWrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import AboutMe from './AboutMe/AboutMe';
import Reviews from './Reviews/Reviews';
import Service from './Service/Service';
import {MdDevices, MdSmartphone, MdColorLens} from 'react-icons/md';
import gsap from 'gsap';
import ReactHelmet from '../Helmet/Helmet';
import {about} from '../assetes/data';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import './About.scss';

SwiperCore.use([Autoplay, Pagination]);


export default () => {
    const {aboutMe, services, reviews} = about;
    const service1 = useRef();

    useEffect(()=> {
        
        gsap.from(service1.current,{y: -100, duration: 1 })
    });
    
    return (
        <div className="about">
            <ReactHelmet title="About" />
            <SectionWrap title='About Me' styles={{paddingBottom:0}}>
                <AboutMe />
            </SectionWrap>
            <SectionWrap title='Services' styles={{paddingBottom:0}}>
                <div className="services-wrapper">
                    <Service icons={<MdColorLens/>} ref={service1} title='Web Design' description='I do web template design with React.' />
                    <Service icons={<MdDevices/>}  title='Web Develompent' description='I do back end development with nodejs. Besides, I can make serverless backend with firebase funciton.' />
                    <Service icons={<MdSmartphone/>} title='Mobile Application' description='I develop modern android and ios app with react native. ' />   
                </div>
            </SectionWrap>
            <SectionWrap title='Reviews'>
                <div className="reviews-wrapper">
                    <Swiper 
                    loop 
                    autoplay 
                    pagination
                    slidesPerView={1} 
                    spaceBetween={4} 
                    breakpoints={{
                        1050: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        }
                    }}
                    >
                        {reviews.map((item, i)=> <SwiperSlide key={i}  ><Reviews item={item} /></SwiperSlide> )}
                    </Swiper>
                </div>
            </SectionWrap>
        </div>
    )
}