import React from 'react';
import SectionWrap from '../SectionWrap/SectionWrap';
import PortItem from './PortItem/PortItem';
import ReactHelmet from '../Helmet/Helmet';
import { portfolio } from '../assetes/data';


import './Portfolio.scss';



export default () => {


    return(
        <div className="portfolio">
            <ReactHelmet title="Portfolio" />
            <SectionWrap title='Portfolio'>
                <div className="portfolios-wrapper">
                    {
                        portfolio.map((item, idx) => <PortItem key={idx} item={item} /> ).reverse()
                    }
                </div>
            </SectionWrap>
        </div>
    )
}