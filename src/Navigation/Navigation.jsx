import React, { useState } from 'react';
import './Navigation.scss';
import avatar from '../asstes/avatar.jpg';
import NavItem from './NavItem/NavItem';
import ToggleBtn from './ToggleBtn/ToggleBtn';


export default () => {
    const [isOpen, setIsOpen] = useState(false);

    const onClickHandler = () => {
        setIsOpen(!isOpen);
    };

    const navItems = ['home', 'about', 'resume', 'portfolio', 'blogs', 'contact']
                        .map((item) => <NavItem key={item} clicked={onClickHandler} name={item} />);
    return (
        <aside className={`navigation ${isOpen?'open':'close'}`} >
            <span className="toggle">
                <ToggleBtn clicked={onClickHandler} open={isOpen} />
            </span>
            <header className="avatar">
                <img src={avatar} alt="Avatar"/>
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