import React, { useState, useEffect, useRef } from 'react';
import SectionWrap from '../SectionWrap/SectionWrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Virtual } from 'swiper';
import 'swiper/swiper.scss';
import './About.scss';
import AboutMe from './AboutMe/AboutMe';
import Reviews from './Reviews/Reviews';
import Service from './Service/Service';
import {MdDevices, MdSmartphone, MdColorLens} from 'react-icons/md';
import gsap from 'gsap';

SwiperCore.use([Virtual]);


export default () => {

    const [deviceWidth, setDeviceWidth] = useState(null);
    const service1 = useRef();

    useEffect(()=> {
        let innerWidth = window.innerWidth;
        setDeviceWidth(innerWidth);
        gsap.from(service1.current,{y: -100, duration: 1 })
    });
    console.log(deviceWidth)
    return (
        <div className="about">
            <SectionWrap title='About Me' styles={{paddingBottom:0}}>
                <AboutMe />
            </SectionWrap>
            <SectionWrap title='Services' styles={{paddingBottom:0}}>
                <div className="services-wrapper">
                    <Service icons={<MdColorLens/>} ref={service1} title='Web Design' description='I do web template design with React.' />
                    <Service icons={<MdDevices/>}  title='Web Develompent' description='I do back end development with nodejs. Besides I can develop back-end with Django(Python)' />
                    <Service icons={<MdSmartphone/>} title='Mobile Application' description='I develop modern android and ios app with react native. ' />   
                </div>
            </SectionWrap>
            <SectionWrap title='Reviews'>
                <div className="reviews-wrapper">
                    <Swiper slidesPerView={deviceWidth >= 700 ? 2 : 1 } loop autoplay spaceBetween={deviceWidth <= 700 ? 10 : 4} >
                        {Array(5).fill().map((v, i)=> <SwiperSlide key={i}  ><Reviews /></SwiperSlide> )}
                    </Swiper>
                </div>
            </SectionWrap>
        </div>
    )
}