import React from 'react';

import './SectionWrap.scss';


export default ({title, children}) => {

    return (
        <div className="sec-wrapper">
            <div className="sec-title-wrapper">
                <h1 className="sec-title">
                    {title}
                    <span className="title-shadow">
                        {title}
                    </span>
                </h1>
            </div>
            <div className="sec-body">
                {children}
            </div>
        </div>
    )
}