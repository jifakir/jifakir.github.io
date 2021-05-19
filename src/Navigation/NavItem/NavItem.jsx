import React, {Fragment} from 'react';
import { NavLink, useLocation} from 'react-router-dom';
import './NavItem.scss';



export default ({name, clicked}) => {
    let location = useLocation();
    return (
        <Fragment >
            <li key={name} className='nav-item' onClick={clicked}>
                <NavLink 
                to={name} 
                className={location.pathname === `/${name}` ?'nav-link':'nav-link not-active'} 
                >
                    {name}
                </NavLink>
            </li>
        </Fragment>
    )
};