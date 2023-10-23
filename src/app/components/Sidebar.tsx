'use client';

import { FaFacebookF, FaTwitter, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const navigations: { title: string; route: string }[] = [
  {
    title: 'Home',
    route: 'home',
  },
  {
    title: 'About',
    route: 'about',
  },
  {
    title: 'What I Do',
    route: 'services',
  },
  {
    title: 'Resume',
    route: 'resume',
  },
  {
    title: 'Portfolio',
    route: 'portfolio',
  },
  {
    title: 'Contact',
    route: 'contact',
  },
];

const Sidebar = () => {
  return (
    <motion.aside className="w-[260px] absolute border border-primary overflow-hidden h-[90vh] top-[5vh] bg-transparent bottom-0 backdrop-blur-[1px] left-5 rounded-lg shadow-primary shadow-md flex flex-col">
      <header className="shadow-inner shadow-primary">
        <div className="relative my-8 mx-auto w-40 h-40 rounded-full overflow-hidden border-2 border-primary select-none">
          <Image
            alt="Avatar"
            fill
            src={'/avatar.png'}
            className="object-cover -z-50"
            priority
          />
        </div>
      </header>
      <main className="relative z-[5000] flex-1 shadow-inner shadow-primary border-y border-primary p-2">
        <nav className="absolute z-[5000] top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <ul className="">
            {navigations.map((nav) => (
              <Link
                href={`?screen=${nav.route}`}
                key={'navigations' + nav.route}
                className="text-primary font-semibold inline-block w-full py-2 text-center hover:dg-primary/70 hover:text-secondary transition-all duration-200 ease-in-out hover:font-bold"
              >
                {nav.title}
              </Link>
            ))}
          </ul>
        </nav>
      </main>
      <footer className="py-3 text-center shadow-inner shadow-primary">
        <div className=" flex justify-center items-center gap-5">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/jifakir"
            className="w-6 h-6 text-xs rounded-full border border-primary text-primary hover:text-secondary hover:border-secondary cursor-pointer transition-all duration-300 ease-in-out flex justify-center items-center"
          >
            <FaFacebookF />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/jifakir"
            className="w-6 h-6 text-xs rounded-full border border-primary text-primary hover:text-secondary hover:border-secondary cursor-pointer transition-all duration-300 ease-in-out flex justify-center items-center"
          >
            <FaTwitter />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/jifakir"
            className="w-6 h-6 text-xs rounded-full border border-primary text-primary hover:text-secondary hover:border-secondary cursor-pointer transition-all duration-300 ease-in-out flex justify-center items-center"
          >
            <FaGithub />
          </a>
        </div>
      </footer>
    </motion.aside>
  );
};

export default Sidebar;
