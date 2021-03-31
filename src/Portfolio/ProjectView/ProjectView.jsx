import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import './ProjectView.scss';



const ProjectView = ({projectLink, clicked}) => {


    return (
        <div onClick={(e) => e.stopPropagation()} className="project-view">
            <span onClick={clicked} className="close-btn">
                <AiOutlineClose />
            </span>
            <div className="project-frame">
                <iframe className="frame-body" title="Project View" src={projectLink} frameborder="0"></iframe>
            </div>
            <div className="project-description">
                <p>
                    The project has been developed to showcase my skills and expertise.
                </p>
            </div>
        </div>
    )
};

export default ProjectView;