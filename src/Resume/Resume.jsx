import React from 'react';
import {BsBriefcase} from 'react-icons/bs';
import {BiBook} from 'react-icons/bi';
import SectionWrap from '../SectionWrap/SectionWrap';
import './Resume.scss';
import Skill from './Skill/Skill';
import Timeline from './Timeline/Timeline';



export default () => {

    return(
        <div className="resume">
            <SectionWrap title='Skills'>
                <div className="skills-wrapper">
                    <Skill title='HTML' percent='90%' />
                    <Skill title='CSS' percent='95%' />
                    <Skill title='JAVASCRIPT' percent='85%' />
                    <Skill title='REACT' percent='90%' />
                    <Skill title='PHOTOSHOP' percent='75%' />
                    <Skill title='PYTHON' percent='70%' />
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
                                Work Experience
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