import React from 'react';
import Title from './Title';
import { FaReact, FaMobileAlt } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import { LuServer } from 'react-icons/lu';
import {
  SiBlockchaindotcom,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiAntdesign,
  SiChakraui,
  SiNodedotjs,
  SiSocketdotio,
  SiMongodb,
  SiRedux,
  SiAmazonaws,
} from 'react-icons/si';

const servicesData = [
  {
    icon: <FaReact />,
    title: 'Reactjs',
    description: `Front-end development encompasses the art of creating visually appealing and intuitive user interfaces, employing HTML, CSS, and JavaScript to craft engaging web experiences.`,
  },
  {
    icon: <SiRedux />,
    title: 'Redux',
    description: `Front-end development encompasses the art of creating visually appealing`,
  },
  {
    icon: <SiNextdotjs />,
    title: 'Nextjs',
    description: `Back-end development involves the construction of server-side architecture and the management of databases, ensuring the seamless operation and data handling of web applications.`,
  },
  {
    icon: <SiJavascript />,
    title: 'Javascript',
    description: `Mobile app development entails the construction of the application's underlying infrastructure and the management of data, ensuring smooth functionality and data handling on mobile devices.`,
  },
  {
    icon: <SiTypescript />,
    title: 'Typescript',
    description: `Blockchain development entails the construction of the technology's underlying architecture and the management of distributed ledgers, ensuring secure and decentralized data handling within blockchain networks.`,
  },
  {
    icon: <SiNodedotjs />,
    title: 'Nodejs',
    description: `Nodejs`,
  },
  {
    icon: <SiMongodb />,
    title: 'MongoDB',
    description: `Nodejs`,
  },
  {
    icon: <SiSocketdotio />,
    title: 'Socket.io',
    description: `Blockchain `,
  },
  {
    icon: <SiAmazonaws />,
    title: 'AWS',
    description: `Blockchain `,
  },
  {
    icon: <SiCss3 />,
    title: 'Css',
    description: `adfd`,
  },
  {
    icon: <SiTailwindcss />,
    title: 'Tailwind',
    description: `adfd`,
  },
  {
    icon: <SiAntdesign />,
    title: 'Antd',
    description: `adfd`,
  },
  {
    icon: <SiChakraui />,
    title: 'ChakraUI',
    description: `ChakraUI`,
  },
];

const Resume = () => {
  return (
    <div className="mt-20 md:mt-0">
      <Title title="Expertise" />
      <h3 className="mt-20 text-3xl font-bold text-white/90">
        👋 I&apos;m <span className="text-primary">skilled</span> in,
      </h3>
      <div className="mt-5 flex flex-wrap gap-10">
        {servicesData.map((service, idx) => (
          <div key={idx + 'skills'} className="flex gap-5">
            <div className="w-20 h-20 p-2 rounded-lg border-primary/40 text-primary text-4xl border shadow-sm shadow-primary bg-white/5 backdrop-blur-xl flex flex-col gap-1 justify-center items-center">
              {service.icon ?? <FaReact className="" />}
              <h4 className="text-xs font-bold text-secondary/60">
                {service.title}
              </h4>
            </div>
            {/* <div className="flex-1">
            <h2 className="text-xl font-bold text-white/90">{service.title}</h2>
            <p className="text-secondary">{service.description}</p>
          </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
