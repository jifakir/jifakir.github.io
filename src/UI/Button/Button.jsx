import React from 'react';

import './Button.scss';


export default ({type, btnName, styles, clicked, tab}) => {


    return(
        <div className="btn-wrapper" style={styles}>
            <button tabIndex={tab} onClick={clicked} type={type} className="button">
                {btnName}
            </button>
        </div>
    )
}