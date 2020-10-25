import React from 'react';
import { FaFacebookF, FaTwitter, FaGithub } from 'react-icons/fa';
import { home } from '../asstes/data';
import './Home.scss';

export default () => {

    return (
        <div className="Home">
            <div className="home-wrapper">
                <h1 className="title">Hi, I am <span className="designing-name">{home.name}</span></h1>
    <p className="sub-title">{home.bio}</p>
                <div className="icon-wrapper">
                    <div className="icon">
                        <a href='http://www.facebook.com' >
                            <FaFacebookF />
                        </a>
                    </div>
                    <div className="icon">
                        <a href='http://www.facebook.com' >
                            <FaTwitter />
                        </a>
                    </div>
                    <div className="icon">
                        <a target="_blank"  href='https://github.com/jifakir' >
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}