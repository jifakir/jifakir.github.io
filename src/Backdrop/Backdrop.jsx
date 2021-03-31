import React from 'react';
import Portal from "@reach/portal";
import './Backdrop.scss';


const Backdrop = ({children, clicked}) => {


    return (
        <Portal>
            <div onClick={clicked} className="back-drop">
                {
                    children
                }
            </div>
        </Portal>
    )
};


export default Backdrop;