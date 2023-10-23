'use client';

import React from 'react';
import Title from './Title';
import { FaReact, FaMobileAlt } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import { LuServer } from 'react-icons/lu';
import { SiBlockchaindotcom } from 'react-icons/si';

const servicesData = [
  {
    icon: <CgWebsite />,
    title: 'Front-end Development',
    description: `Front-end development encompasses the art of creating visually appealing and intuitive user interfaces, employing HTML, CSS, and JavaScript to craft engaging web experiences.`,
  },
  {
    icon: <LuServer />,
    title: 'Back-end Development',
    description: `Back-end development involves the construction of server-side architecture and the management of databases, ensuring the seamless operation and data handling of web applications.`,
  },
  {
    icon: <FaMobileAlt />,
    title: 'Mobile app Development',
    description: `Mobile app development entails the construction of the application's underlying infrastructure and the management of data, ensuring smooth functionality and data handling on mobile devices.`,
  },
  {
    icon: <SiBlockchaindotcom />,
    title: 'Blockchain Development',
    description: `Blockchain development entails the construction of the technology's underlying architecture and the management of distributed ledgers, ensuring secure and decentralized data handling within blockchain networks.`,
  },
];

const Services = () => {
  return (
    <>
      <Title title="What I Do" shadowTitle="Services" />
      <div className="mt-20 grid grid-cols-2 gap-10">
        {servicesData.map((service, idx) => (
          <div key={idx + 'skills'} className="flex gap-5">
            <div className="w-20 h-20 rounded-lg border-primary/40 text-primary text-5xl border shadow-sm shadow-primary bg-white/5 backdrop-blur-xl flex justify-center items-center">
              {service.icon ?? <FaReact className="" />}
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-white/90">
                {service.title}
              </h2>
              <p className="text-secondary">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
