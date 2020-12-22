import React from 'react';
import './Service.scss';
import ServiceItem from './ServiceItem/ServiceItem';



export default () => {

    return(
        <div className="service">
           <ServiceItem 
           title='Web design'
           description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod"
            />
        </div>
    )
}