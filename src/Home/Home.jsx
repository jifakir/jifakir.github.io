import React from 'react';
import Particles from 'react-particles-js';
import { FaFacebookF, FaTwitter, FaGithub } from 'react-icons/fa';
import { home } from '../assetes/data';
import './Home.scss';
import  ReactHelmet  from '../Helmet/Helmet';

export default () => {
    const config = {
            particles: {
                number: {
                    value: 400,
                    density: {
                        enable: true,
                        value: 800
                    }
                },
                color: {
                    value: "#037FFF"
                },
                size: {
                    value: 8,
                    random: true
                },
                move: {
                    direction: 'top',
                    out_mode: 'out',
                    bounce: true
                },
                line_linked: {
                    enable: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onclick: {
                        enable: true,
                        mode: "push",
                    },
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    }
                },
                modes: {
                    remove: {
                        particles_nb: 10
                    }
                }
            }
        };

    return (
        <div className="Home">
            <ReactHelmet title="Home" />
            <Particles className='particles' params={config} />
            <div className="home-wrapper">
                <h1 className="title">Hi, I am <span className="designing-name">{home.name}</span></h1>
                <p className="sub-title">{home.bio}</p>
                <div className="icon-wrapper">
                    <div className="icon">
                        <a target="_blank" rel='noopener noreferrer' href='https://www.facebook.com/jifakir' >
                            <FaFacebookF />
                        </a>
                    </div>
                    <div className="icon">
                        <a target="_blank" rel='noopener noreferrer' href='https://twitter.com/jifakir' >
                            <FaTwitter />
                        </a>
                    </div>
                    <div className="icon">
                        <a target="_blank" rel='noopener noreferrer'  href='https://github.com/jifakir' >
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}