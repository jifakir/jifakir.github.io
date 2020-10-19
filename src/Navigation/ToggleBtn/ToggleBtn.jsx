import React from 'react';
import {RiMenuFoldFill, RiMenuUnfoldFill} from 'react-icons/ri';
import './ToggleBtn.scss';


export default ({open, clicked}) => {


    return (
        <div className="toggle-btn" onClick={clicked}>
            {
                open ? <RiMenuFoldFill className='icon' />:<RiMenuUnfoldFill className='icon' />
            }
        </div>
    )
}