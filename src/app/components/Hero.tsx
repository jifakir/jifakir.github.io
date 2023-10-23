'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '.';

const Hero = () => {
  return (
    <>
      <h1 className="text-7xl font-bold text-white text-center">
        Hi, I am <span className="text-primary">JI Fakir</span>
      </h1>
      <p className="text-secondary text-center text-xl mt-5 max-w-[1000px] mx-auto">
        Passionate Full-Stack Developer | TypeScript Enthusiast | Crafting
        Remarkable Web & Mobile Experiences | Front-End Artistry | Back-End
        Wizardry | React Native Aficionado
      </p>
      {/* <p className="text-secondary text-center text-xl mt-5">
      That's a valuable skill to have! TypeScript is known for adding strong
      typing and enhanced tooling to JavaScript, making your code more robust
      and maintainable. Let's incorporate your TypeScript expertise into your
      bio: --- 👋 Hello there! I'm{' '}
      <span className="text-primary">JI Fakir</span>, a passionate full-stack
      developer with a penchant for perfection. 💼 With a solid foundation in
      JavaScript and a deep expertise in TypeScript, I bring innovation to
      life through code. TypeScript's strong typing and enhanced tooling are
      the backbone of my projects, ensuring robustness and maintainability. ⚙️
      On the front end, I craft pixel-perfect, meticulously designed user
      interfaces that captivate and engage. On the back end, I harness the
      power of Node.js and MongoDB to create robust, scalable, and efficient
      server-side solutions. 🌐 My skills span the entire web development
      spectrum, allowing me to architect and implement end-to-end solutions.
      From database design and API development to user interface creation, I'm
      your one-stop-shop for creating remarkable digital experiences. 🚀 When
      I'm not coding, you'll find me exploring new frontiers in technology,
      staying ahead of the curve, and pushing the boundaries of what's
      possible. 🌟 Join me on this exciting journey, and let's bring your
      ideas to life with a seamless fusion of front-end elegance and back-end
      robustness, all powered by the precision of TypeScript. Together, we can
      create a digital world that's as beautiful as it is functional. --- Feel
      free to adapt and personalize this bio to align with your unique
      experiences and skills. TypeScript is a valuable addition to your skill
      set, and it sets you apart as a developer who prioritizes code quality
      and maintainability. Best of luck with your portfolio!
    </p> */}
      <div className="flex justify-center">
        <Button>Hire Me</Button>
      </div>
    </>
  );
};

export default Hero;
