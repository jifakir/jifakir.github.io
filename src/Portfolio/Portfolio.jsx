import React from 'react';
import screenshot from '../asstes/calculator.png';
import SectionWrap from '../SectionWrap/SectionWrap';
import PortItem from './PortItem/PortItem';
import './Portfolio.scss';



export default () => {


    return(
        <div className="portfolio">
            <SectionWrap title='Portfolio'>
                <div className="portfolios-wrapper">
                    <PortItem projectLink='https://g1it6.csb.app/' src={screenshot} title='React Calculator' subtitle='A simple javascript(react) calculator.' />
                    <PortItem src={screenshot} title='React Calculator' subtitle='A simple javascript(react) calculator.' />
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