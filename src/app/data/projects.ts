export type ProjectCategoriesTypes = {
  id: number;
  name: string;
};

export type ProjectTypes = {
  id: number;
  categoryId: number[];
  title: string;
  description: string;
  thumbnailUrl: string;
  images: string[];
  projectUrl: string;
  videoUrl: string;
  technologies: string[];
};

export const projectCategories: ProjectCategoriesTypes[] = [
  {
    id: 0,
    name: 'All',
  },
  {
    id: 1,
    name: 'Front-end',
  },
  {
    id: 2,
    name: 'Back-end',
  },
  {
    id: 3,
    name: 'Mobile App',
  },
];

export const projects: ProjectTypes[] = [
  {
    id: 1,
    categoryId: [0, 1],
    title: 'Giverise',
    description: 'This project used a lot of technology including socket.io',
    thumbnailUrl: '/images/giverise_mockup.webp',
    images: [],
    projectUrl: 'https://giverise.com',
    videoUrl: '',
    technologies: [],
  },
  {
    id: 2,
    categoryId: [0, 1, 2],
    title: 'Mijneetschema',
    description: 'This project used a lot of technology including socket.io',
    thumbnailUrl: '/images/mijneetschema_mockup.webp',
    images: [],
    projectUrl: 'https://mijneetschema.nl/',
    videoUrl: '',
    technologies: [],
  },
  {
    id: 3,
    categoryId: [0, 1],
    title: 'Gale Network',
    description: 'This project used a lot of technology including socket.io',
    thumbnailUrl: '/images/gale_mockup.webp',
    images: [],
    projectUrl: 'https://gale.network/',
    videoUrl: '',
    technologies: [],
  },
  {
    id: 4,
    categoryId: [0, 1],
    title: 'Mijneetschema',
    description: 'This project used a lot of technology including socket.io',
    thumbnailUrl: '/images/giverise_mockup.webp',
    images: [],
    projectUrl: 'https://shuut.co/',
    videoUrl: '',
    technologies: [],
  },
  {
    id: 5,
    categoryId: [0, 1],
    title: 'Start Saying More',
    description: 'This project used a lot of technology including socket.io',
    thumbnailUrl: '/images/start_saying_more_mockup.webp',
    images: [],
    projectUrl: 'https://www.startsayingmore.com/',
    videoUrl: '',
    technologies: [],
  },
  {
    id: 6,
    categoryId: [0, 1],
    title: 'Mijneetschema',
    description: 'This project used a lot of technology including socket.io',
    thumbnailUrl: '/images/giverise_mockup.webp',
    images: [],
    projectUrl: 'https://programmatic.guru/',
    videoUrl: '',
    technologies: [],
  },
  {
    id: 7,
    categoryId: [0, 1],
    title: 'Satoshi Studio',
    description: 'This project used a lot of technology including socket.io',
    thumbnailUrl: '/images/giverise_mockup.webp',
    images: [],
    projectUrl: 'https://www.satoshistudio.art/',
    videoUrl: '',
    technologies: [],
  },
  {
    id: 8,
    categoryId: [0, 1],
    title: 'Service64',
    description: 'This project used a lot of technology including socket.io',
    thumbnailUrl: '/images/giverise_mockup.webp',
    images: [],
    projectUrl: 'hhttps://www.service64.com/',
    videoUrl: '',
    technologies: [],
  },
  {
    id: 9,
    categoryId: [0, 1],
    title: 'Pulsesac.com',
    description: 'This project used a lot of technology including socket.io',
    thumbnailUrl: '/images/giverise_mockup.webp',
    images: [],
    projectUrl: 'https://pulsesac.com/',
    videoUrl: '',
    technologies: [],
  },
  {
    id: 10,
    categoryId: [0, 3],
    title: 'Sherlock',
    description: 'This project used a lot of technology including socket.io',
    thumbnailUrl: '/images/giverise_mockup.webp',
    images: [],
    projectUrl: 'https://sherlock.so/',
    videoUrl: '',
    technologies: [],
  },
  {
    id: 11,
    categoryId: [0, 3],
    title: 'Looksrare',
    description: 'This project used a lot of technology including socket.io',
    thumbnailUrl: '/images/giverise_mockup.webp',
    images: [],
    projectUrl: 'https://looksrare.org/',
    videoUrl: '',
    technologies: [],
  },
  {
    id: 12,
    categoryId: [0, 3],
    title: 'Lumina token',
    description: 'This project used a lot of technology including socket.io',
    thumbnailUrl: '/images/giverise_mockup.webp',
    images: [],
    projectUrl: '',
    videoUrl: '',
    technologies: [],
  },
  {
    id: 13,
    categoryId: [0, 3],
    title: 'Celebcheck',
    description: 'This project used a lot of technology including socket.io',
    thumbnailUrl: '/images/giverise_mockup.webp',
    images: [],
    projectUrl: 'https://celebcheck.com/',
    videoUrl: '',
    technologies: [],
  },
  {
    id: 14,
    categoryId: [0, 3],
    title: 'Katsumi Token',
    description: 'This project used a lot of technology including socket.io',
    thumbnailUrl: '/images/giverise_mockup.webp',
    images: [],
    projectUrl: 'https://katsumitoken.com/',
    videoUrl: '',
    technologies: [],
  },
  {
    id: 15,
    categoryId: [0, 3],
    title: 'Valhalia',
    description: 'This project used a lot of technology including socket.io',
    thumbnailUrl: '/images/giverise_mockup.webp',
    images: [],
    projectUrl: 'https://katsumitoken.com/',
    videoUrl: '',
    technologies: [],
  },
];
