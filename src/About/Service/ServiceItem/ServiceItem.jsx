import React from 'react';

import { MdColorLens } from 'react-icons/md';
import './ServiceItem.scss';



const ServiceItem = ({title, description}) => {

    return (
        <div className="service-item">
             <div className="service-wrapper">
                <div className="icon-wrapper">
                    <MdColorLens />
                </div>
                <h1 className="title">
                   {title}
                </h1>
                <p className="description">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ServiceItem;