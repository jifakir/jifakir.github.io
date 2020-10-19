import React from 'react';

import './ContactCard.scss';



export default ({title, icon, contact1, contact2}) => {


    return (
        <div className="contact-card">
            <div className="card-wrapper">
                <div className="icon-wrapper">
                    {icon}
                </div>
                <div className="contact-details">
                    <h1 className="title">{title}</h1>
                    <h4 className="details">{contact1}</h4>
                    <h4 className="details">{contact2}</h4>
                </div>
            </div>
        </div>
    )
}