import React, { useState } from 'react';
import './Navigation.scss';
import NavItem from './NavItem/NavItem';
import ToggleBtn from './ToggleBtn/ToggleBtn';
import Avatar from '../assetes/avatar.jpg';


export default () => {
    const [isOpen, setIsOpen] = useState(false);

    const onClickHandler = () => {
        setIsOpen(!isOpen);
    };

    const navItems = ['home', 'about', 'resume', 'portfolio', 'contact']
                        .map((item) => <NavItem key={item} clicked={onClickHandler} name={item} />);
    return (
        <aside className={`navigation ${isOpen?'open':'close'}`} >
            <span className="toggle">
                <ToggleBtn clicked={onClickHandler} open={isOpen} />
            </span>
            <header className="avatar">
                <img src={Avatar} alt="Avatar"/>
            </header>
            <nav className="nav-wrapper">
                <ul className="nav-items">
                    {navItems}
                </ul>
            </nav>
            <footer className="footer">
                &copy; Jahidul Islam Fakir
            </footer>
        </aside>
    )
}