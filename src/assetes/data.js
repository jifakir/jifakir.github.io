import calculator from './calculator.png';
import typingtest from './typingtest.png';
import rmapp from './rmapp.png';
import ceapp from './ceapp.png';
export const home = {
    name: 'JI Fakir',
    bio: 'I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more and more interactive with web animations.'
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
            testimonial: 'Jahid is an awesome developer. I am fully satisfied with his services. I will hire him again.',
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
        projectLink: "https://jifakircalculator.netlify.app/",
        screenshot: calculator,
    },
    {   id: 2,
        title: "Teyping Test",
        subtitle: "A simple javascript(react) Typing Tester.",
        projectLink: "https://jifakirtypingtest.netlify.app/",
        screenshot: typingtest,
    },
    {   id: 3,
        title: "Redux Mobile Shop",
        subtitle: "A simple javascript(react) Ecommerce App.",
        projectLink: "http://redux-mobile-shop.netlify.app/",
        screenshot: rmapp,
    },
    {   id: 4,
        title: "Context Fashion Shop",
        subtitle: "A simple javascript(react) Ecommerce App.",
        projectLink: "http://redux-mobile-shop.netlify.app/",
        screenshot: ceapp,
    },
];

export const resume = {
    experience: [
        {
            startYear: 2017,
            endYear: 2020,
            designation: "Junior Executive",
            companyName: "Onnorakom Group Ltd",
            description: "Onnorakom Group Ltd is a good company to work. I enjoyed my time here because there is a friendly environment",
        },
        {
            startYear: 2017,
            endYear: 2020,
            designation: "Junior Executive",
            companyName: "Onnorakom Group Ltd",
            description: "Onnorakom Group Ltd is a good company to work. I enjoyed my time here because there is a friendly environment",    
        },
        {
            startYear: 2017,
            endYear: 2020,
            designation: "Junior Executive",
            companyName: "Onnorakom Group Ltd",
            description: "Onnorakom Group Ltd is a good company to work. I enjoyed my time here because there is a friendly environment",    
        }
    ],
    education: [
        {
            startYear: 2018,
            endYear: 2020,
            designation: "Bachalor in Computer Science",
            companyName: "University of the People",
            description: "University of the people is one of the best university that is tution free. I hope it will be the best online university in the world.",
         },
        {
            startYear: 1975,
            endYear: 2005,
            designation: "Bachalor in Computer Science",
            companyName: "University of the People",
            description: "University of the people is one of the best university that is tution free. I hope it will be the best online university in the world.",
         },
        {
            startYear: 2018,
            endYear: 2018,
            designation: "Bachalor in Computer Science",
            companyName: "University of the People",
            description: "University of the people is one of the best university that is tution free. I hope it will be the best online university in the world.",
         },
    ]
};