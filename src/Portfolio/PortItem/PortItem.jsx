import React from 'react';
import {MdZoomIn} from 'react-icons/md'
import {FiLink} from 'react-icons/fi'

import './PortItem.scss';



export default () => {

    return(
        <div className="port-item">
            <div className="port-screenshot">
                <div className="screenshot-wrapper">
                    <img src="http://chester.nuclearthemes.com/images/portfolio-image-1.jpg" alt="Screenshot"/>
                </div>
                <div className="icons-group">
                    <div className="icon-wrapper">
                        <MdZoomIn />
                    </div>
                    <div className="icon-wrapper">
                        <FiLink />
                    </div>
                </div>

            </div>
            <h1 className="title">
                Coffee Mug
            </h1>
            <h3 className="subtitle">
                Awesome Coffee Mug Desgin
            </h3>
        </div>
    )
}