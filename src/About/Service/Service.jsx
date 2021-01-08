import React from 'react';
import './Service.scss';
import ServiceItem from './ServiceItem/ServiceItem';



export default ({title, description, ref, icons}) => {

    return(
        <div className="service" ref={ref}>
           <ServiceItem 
           title={title}
           icons={icons}
           description={description}
            />
        </div>
    )
}