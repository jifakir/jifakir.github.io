import React from 'react';
import {MdZoomIn} from 'react-icons/md'
import {FiLink} from 'react-icons/fi'

import './PortItem.scss';



export default ({src, title, subtitle, projectLink}) => {

    return(
        <div className="port-item" >
            <div className="port-screenshot">
                <div className="screenshot-wrapper">
                    <img src={src} alt="Screenshot"/>
                </div>
                <div className="icons-group">
                    <div className="icon-wrapper">
                        <a href={projectLink} target='_blank' rel='noopener noreferrer'>
                            <MdZoomIn />
                        </a>
                    </div>
                    <div className="icon-wrapper">
                        <FiLink />
                    </div>
                </div>

            </div>
            <h1 className="title">
                {title}
            </h1>
            <h3 className="subtitle">
                {subtitle}
            </h3>
        </div>
    )
}