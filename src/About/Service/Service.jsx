import React from 'react';
import './Service.scss';
import ServiceItem from './ServiceItem/ServiceItem';



export default ({title, description}) => {

    return(
        <div className="service">
           <ServiceItem 
           title={title}
           description={description}
            />
        </div>
    )
}