import calculator from './calculator.png';
import typingtest from './typingtest.png';
import rmapp from './rmapp.png';
import ceapp from './ceapp.png';
import evaly from './evaly.png';

export const home = {
    name: 'JI Fakir',
    bio: 'I am a frontend web developer skilled in Reactjs, Nextjs, Sass, TailwindCSS. I can provide clean code and pixel perfect, robust, superfast design with the power of new technology like Nextjs, Reactjs, TailwindCSS, Sass.'
};
export const about = {
    aboutMe: {
        name: home.name,
        bio: home.bio,
        fullName: 'Jahidul Islam Fakir',
        age: '22',
        nationality: 'Bangladeshi',
        language: 'Bengali, English',
        address: 'Rajoir, Rayenda, Sarankhola, Bagerhat-9330',
        freelance: 'available'
    },
    services:[ 
        {
            id: 1,
            title: 'Web Design',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'
        },
        {
            id: 2,
            title: 'Web Development',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'
        },
        {
            id: 3,
            title: 'Mobile Application',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'
        }
    ],
    reviews: [
        {   id: 1,
            testimonial: 'Jahid is an awesome developer. I am fully satisfied with his services. I will hire him again.',
            clientname: 'Saiful Islam',
            designation: 'Digital Marketer',
            organization: 'Abc Company'
        },
        {   id: 2,
            testimonial: 'Jahid is an awesome developer. I have created a portfolio site by him. I am surprised with his expertise of fast delivery. I am fully satisfied with his services. I will hire him again.',
            clientname: 'Saiful Islam',
            designation: 'Digital Marketer',
            organization: 'Abc Company'
        },
        {   id: 3,
            testimonial: 'Jahid is an awesome developer. I am fully satisfied with his services. I will hire him again.',
            clientname: 'Saiful Islam',
            designation: 'Digital Marketer',
            organization: 'Abc Company'
        },
        {   id: 4,
            testimonial: 'Jahid is an awesome developer. I am fully satisfied with his services. I will hire him again.',
            clientname: 'Saiful Islam',
            designation: 'Digital Marketer',
            organization: 'Abc Company'
        },
        {   id: 5,
            testimonial: 'Jahid is an awesome developer. I am fully satisfied with his services. I will hire him again.',
            clientname: 'Saiful Islam',
            designation: 'Digital Marketer',
            organization: 'Abc Company'
        },
    ],
    
};

export const portfolio = [
    {   id: 1,
        title: "React Calculator",
        subtitle: "A simple javascript(react) calculator.",
        projectLink: "https://jifakircalculator.netlify.app",
        screenshot: calculator,
    },
    {   id: 2,
        title: "Teyping Test",
        subtitle: "A simple javascript(react) Typing Tester.",
        projectLink: "https://jifakirtypingtest.netlify.app",
        screenshot: typingtest,
    },
    {   id: 3,
        title: "Redux Mobile Shop",
        subtitle: "Used: React, Redux, Sass",
        projectLink: "https://redux-mobile-shop.netlify.app",
        screenshot: rmapp,
    },
    {   id: 4,
        title: "Context Fashion Shop",
        subtitle: "Used: React, ContextAPI, Sass ",
        projectLink: "https://redux-mobile-shop.netlify.app",
        screenshot: ceapp,
    },
    {   id: 5,
        title: "Evaly Clone",
        subtitle: "Used: Nextjs, Redux Toolkit, TailwindCSS ",
        projectLink: "https://evaly-clone.vercel.app",
        screenshot: evaly,
    },
];

export const resume = {
    experience: [
        {
            startYear: "2018-6",
            endYear: "2020-3",
            designation: "Junior Executive",
            companyName: "Onnorakom Group Ltd",
            description: "Onnorakom Group Ltd is one of the growing company in bangladesh. It is the mother of concern of Rokomari, Onnorakom Software, Onnorakom Electronics, Techshop, Udvash, Unmesh, Uttoron and Prohory.",
        },
        {
            startYear: "2021-2",
            endYear: 'Present',
            designation: "React Developer",
            companyName: "Upwork Global Inc.",
            description: "Upwork is the world’s work marketplace, connecting millions of businesses with independent talent around the globe.",    
        },
        
    ],
    education: [
        {
            startYear: "2020",
            endYear: "Present",
            designation: "Bachalor in Computer Science",
            companyName: "University of the People",
            description: "University of the people is one of the best university that is tution free. I hope it will be the best online university in the world.",
         },
        {
            startYear: "2018",
            endYear: "Present",
            designation: "Bachelor of Business Administration",
            companyName: "Dhaka Commerce College",
            description: "Dhaka Commerce College is one of the well-known college for Business Studies.",
         },
        
    ]
};