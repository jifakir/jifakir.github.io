import React, { useState } from 'react';
import './Navigation.scss';
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
                <img src={'https://scontent.fjsr5-1.fna.fbcdn.net/v/t1.0-9/57411725_2262954013942851_8109128374900752384_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=z1jvO4b2p1oAX8vsc5D&_nc_ht=scontent.fjsr5-1.fna&oh=1876c57cd344dfdd9760f849d59cb24a&oe=5FEA90D4'} alt="Avatar"/>
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