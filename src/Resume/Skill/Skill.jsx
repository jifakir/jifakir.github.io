import React from 'react';
import './Skill.scss';


export default ({percent, title}) => {

    return(
        <div className="Skill">
            <div className="row">
                <h1 className="title">
                    {title}
                </h1>
            </div>
            <div className="row">
                <div className="percentage">
                    {percent}
                </div>
                <div className="progress-bar">
                    <div style={{width:percent}} className="progress"></div>
                </div>
            </div>
        </div>
    )
}