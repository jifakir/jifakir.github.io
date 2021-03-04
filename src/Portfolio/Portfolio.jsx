import React from 'react';
import calculator from '../assetes/calculator.png';
import typingtest from '../assetes/typingtest.png';
import screenshot from '../assetes/calculator.png';
import SectionWrap from '../SectionWrap/SectionWrap';
import PortItem from './PortItem/PortItem';
import './Portfolio.scss';
import ReactHelmet from '../Helmet/Helmet';



export default () => {


    return(
        <div className="portfolio">
            <ReactHelmet title="Portfolio" />
            <SectionWrap title='Portfolio'>
                <div className="portfolios-wrapper">
                    <PortItem projectLink='https://jifakircalculator.netlify.app/' src={calculator} title='React Calculator' subtitle='A simple javascript(react) calculator.' />
                    <PortItem projectLink='https://jifakirtypingtest.netlify.app/' src={typingtest} title='Typing Test' subtitle='A simple javascript(react) calculator.' />
                    <PortItem src={screenshot} title='React Calculator' subtitle='A simple javascript(react) calculator.' />
                    <PortItem src={screenshot} title='React Calculator' subtitle='A simple javascript(react) calculator.' />
                    <PortItem src={screenshot} title='React Calculator' subtitle='A simple javascript(react) calculator.' />
                    <PortItem src={screenshot} title='React Calculator' subtitle='A simple javascript(react) calculator.' />
                    <PortItem src={screenshot} title='React Calculator' subtitle='A simple javascript(react) calculator.' />
                </div>
            </SectionWrap>
        </div>
    )
}