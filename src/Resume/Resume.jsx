import React from 'react';
import {BsBriefcase} from 'react-icons/bs';
import {BiBook} from 'react-icons/bi';
import {SiHtml5, SiCss3,SiJavascript, SiAdobephotoshop, SiReact, SiSass, SiStyledComponents, SiRedux} from 'react-icons/si';
import SectionWrap from '../SectionWrap/SectionWrap';
import './Resume.scss';
import Skill from './Skill/Skill';
import Timeline from './Timeline/Timeline';



export default () => {

    return(
        <div className="resume">
            <SectionWrap title='Skills' styles={{paddingBottom:0}}>
                <div className="skills-wrapper">
                    <Skill title='HTML' percent='90%' icon={<SiHtml5/>} />
                    <Skill title='CSS' percent='95%' icon={<SiCss3/>} />
                    <Skill title='JAVASCRIPT' percent='85%' icon={<SiJavascript/>} />
                    <Skill title='REACT' percent='90%' icon={<SiReact/>} />
                    <Skill title='PHOTOSHOP' percent='75%' icon={<SiAdobephotoshop/>} />
                    <Skill title='SASS' percent='85%' icon={<SiSass/>} />
                    <Skill title='Styled Components' percent='80%' icon={<SiStyledComponents/>} />
                    <Skill title='Redux' percent='90%' icon={<SiRedux/>} />
                </div>
            </SectionWrap>
            <SectionWrap title='Resume'>
                <div className="resume-wrapper">
                    <div className="work-experience">
                        <div className="work-title">
                            <div className="icon-wrapper">
                                <BsBriefcase />
                            </div>
                            <h1 className="title">
                                Work Experience
                            </h1>
                        </div>
                        <div className="work-timeline">
                            <Timeline />
                            <Timeline />
                            <Timeline />
                            <Timeline />
                        </div>
                    </div>
                    <div className="education-qualification">
                        <div className="qualification-title">
                            <div className="icon-wrapper">
                                <BiBook />  
                            </div>
                            <h1 className="title">
                                Educational Qualification
                            </h1>
                        </div>
                        <div className="education-timeline">
                            <Timeline />
                            <Timeline />
                            <Timeline />
                            <Timeline />
                        </div>
                    </div>
                </div>
            </SectionWrap>
        </div>
    )
}