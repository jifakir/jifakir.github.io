import React from 'react';
import SectionWrap from '../SectionWrap/SectionWrap';
import PortItem from './PortItem/PortItem';
import './Portfolio.scss';



export default () => {


    return(
        <div className="portfolio">
            <SectionWrap title='Portfolio'>
                <div className="portfolios-wrapper">
                    <PortItem />
                    <PortItem />
                    <PortItem />
                    <PortItem />
                    <PortItem />
                    <PortItem />
                    <PortItem />
                </div>
            </SectionWrap>
        </div>
    )
}