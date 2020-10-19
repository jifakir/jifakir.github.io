import React from 'react';
import { FaFacebookF, FaTwitter, FaGithub } from 'react-icons/fa';
import './Home.scss';

export default () => {

    return (
        <div className="Home">
            <div className="home-wrapper">
                <h1 className="title">Hi, I am <span className="designing-name">JI Fakir</span></h1>
                <p className="sub-title">I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
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