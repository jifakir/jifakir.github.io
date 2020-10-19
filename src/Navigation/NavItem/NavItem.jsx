import React, {Fragment} from 'react';
import { NavLink, useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom';
import './NavItem.scss';



export default ({name, clicked}) => {
    let location = useLocation();
    console.log(location);
    return (
        <Fragment >
            <li key={name} className='nav-item' onClick={clicked}>
                <NavLink 
                to={name} 
                className={location.pathname === `/${name}`?'nav-link':'nav-link not-active'} 
                activeClassName='active'>
                    {name}
                </NavLink>
            </li>
        </Fragment>
    )
}