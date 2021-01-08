import React from 'react';
import './ServiceItem.scss';



const ServiceItem = ({title, description,icons}) => {

    return (
        <div className="service-item">
             <div className="service-wrapper">
                <div className="icon-wrapper">
                    {icons}
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