import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Loader from '../../UI/Loader/Loader';
import './ProjectView.scss';



const ProjectView = ({projectLink, clicked}) => {

    const [loading, stillLoading] = React.useState(true);


    return (
        <div onClick={(e) => e.stopPropagation()} className="project-view">
            <span onClick={clicked} className="close-btn">
                <AiOutlineClose />
            </span>
            <div className="project-frame">
                {
                    loading &&
                    <Loader title="The page is loading" />
                }
                
                <iframe onLoad={() => stillLoading(false)}  className="frame-body" height={`${loading ? '0' : '100%'}`} width={`${loading ? '0' : '100%'}`} title="Project View" src={projectLink} frameborder="0"></iframe>
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