import React, { useState } from 'react';
import Backdrop from '../../Backdrop/Backdrop';
import {MdZoomIn} from 'react-icons/md'
import {FiLink} from 'react-icons/fi'

import './PortItem.scss';
import ProjectView from '../ProjectView/ProjectView';



export default ({item}) => {
    const [open, setOpen] = useState(false);
    const { 
        title,
        subtitle,
        projectLink,
        screenshot, } = item;
    return(
        <div className="port-item" >
            {
                open && 
                <Backdrop clicked={() => setOpen(prev => !prev)}>
                    <ProjectView clicked={() => setOpen(prev => !prev)}  projectLink={projectLink} />
                </Backdrop>
            }
            <div className="port-screenshot">
                <div className="screenshot-wrapper">
                    <img src={screenshot} alt="Screenshot"/>
                </div>
                <div className="icons-group">
                    <div className="icon-wrapper">
                        <a onClick={() => setOpen(prev => !prev)}  target='_blank' rel='noopener noreferrer'>
                            <MdZoomIn />
                        </a>
                    </div>
                    <div className="icon-wrapper">
                        <a href={projectLink}>
                            <FiLink />
                        </a>
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