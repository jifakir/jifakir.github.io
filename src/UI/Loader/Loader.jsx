import React from 'react';

import './Loader.scss';


const Loader = ({title}) => {


    return (
        <div className="waiting-wrapper">
            <div className="loader">
            </div>
            <div className="waiting">{title}....</div>
        </div>
    )
};

export default Loader;