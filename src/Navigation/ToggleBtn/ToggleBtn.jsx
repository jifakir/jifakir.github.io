import React from 'react';
import {MdMenu, MdClose} from 'react-icons/md';
import './ToggleBtn.scss';


export default ({open, clicked}) => {


    return (
        <div className="toggle-btn" onClick={clicked}>
            {
                open ? <MdClose className='icon' />:<MdMenu className='icon' />
            }
        </div>
    )
}