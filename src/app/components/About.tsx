'use client';
import React, { useEffect } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { Button } from '.';
import { motion, animate, useMotionValue, useTransform } from 'framer-motion';

const AnimatedNumber = ({
  number,
  suffix,
  className,
}: {
  number: number;
  suffix?: string;
  className?: string;
}) => {
  const count = useMotionValue(0);
  const animatedNumber = useTransform(count, (latest) => Math.round(latest));
  useEffect(() => {
    const controls = animate(count, number, { duration: 1 });

    return controls.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <h2 className="text-5xl font-bold text-white/80 inline-block">
      <motion.span>{animatedNumber}</motion.span>
      {suffix}
    </h2>
  );
};

const About = () => {
  return (
    <>
      <h2 className="relative text-5xl font-bold text-white/90 uppercase mx-auto">
        About Me
        <span className="absolute whitespace-nowrap font-bold -left-[70px] top-5 text-7xl uppercase text-white/5 -z-50">
          About Me
        </span>
        <span className="absolute left-1/2 -translate-x-1/2 top-[110%] w-28 inline-block bg-primary/50 rounded-full h-1 overflow-hidden">
          <span className="absolute w-10 h-full bg-primary" />
        </span>
      </h2>
      <div className="mt-20 flex ">
        <div className="flex-1 pr-10">
          <div className="">
            <h3 className="text-3xl font-bold text-white/90">
              👋 Hello there! I&apos;m{' '}
              <span className="text-primary">JI Fakir</span>,
            </h3>
          </div>
          <p className="text-xl font-semibold text-secondary mt-5">
            {`a passionate full-stack developer with a strong foundation in
            JavaScript and deep expertise in TypeScript. I specialize in
            transforming innovative ideas into reality through code.
            TypeScript's strong typing and robust tooling are the cornerstones
            of my projects, ensuring durability and maintainability.`}
          </p>
        </div>
        <div className="pl-10 w-1/3 divide-y divide-secondary/40 text-secondary font-medium text-base">
          <div className="py-3">
            <span>Name:</span>
            <span className=" pl-2">Jahidul Islam Fakir</span>
          </div>
          <div className="py-3">
            <span>Email:</span>
            <a
              href="mailto:chat@jifakir.xyz"
              className="text-primary font-bold pl-2 cursor-pointer"
            >
              chat@jifakir.xyz
            </a>
          </div>
          <div className="py-3">
            <span>Age:</span>
            <span className=" pl-2">
              {/* {dayjs()?.from(dayjs('1996-08-18') as Dayjs, true)} */}
            </span>
          </div>
          <div className="py-3">
            <span>From:</span>
            <span className=" pl-2">Bagerhat, Bangladesh 9330</span>
          </div>
          <div className="">
            <Button>Download CV</Button>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-16 divide-x divide-secondary/40">
        <div className="text-center text-secondary w-full">
          <AnimatedNumber number={3} suffix="+" />
          <p className="text-lg font-medium">Years Experiance</p>
        </div>
        <div className="text-center text-secondary w-full">
          <AnimatedNumber number={15} suffix="+" />
          <p className="text-lg font-medium">Happy Clients</p>
        </div>
        <div className="text-center text-secondary w-full">
          <AnimatedNumber number={35} suffix="+" />
          <p className="text-lg font-medium">Projects Done</p>
        </div>
      </div>
      {/* <p className="">
          💼 With a solid foundation in JavaScript and a deep expertise in
          TypeScript, I bring innovation to life through code. TypeScript's
          strong typing and enhanced tooling are the backbone of my projects,
          ensuring robustness and maintainability.{' '}
        </p>
        <p className="">
          ⚙️ On the front end, I craft pixel-perfect, meticulously designed user
          interfaces that captivate and engage. On the back end, I harness the
          power of Node.js and MongoDB to create robust, scalable, and efficient
          server-side solutions.
        </p>
        <p className="">
          🌐 My skills span the entire web development spectrum, allowing me to
          architect and implement end-to-end solutions. From database design and
          API development to user interface creation, I'm your one-stop-shop for
          creating remarkable digital experiences. <br />
          🚀 When I'm not coding, you'll find me exploring new frontiers in
          technology, staying ahead of the curve, and pushing the boundaries of
          what's possible.
        </p>
        <p className="">
          🌟 Join me on this exciting journey, and let's bring your ideas to
          life with a seamless fusion of front-end elegance and back-end
          robustness, all powered by the precision of TypeScript. Together, we
          can create a digital world that's as beautiful as it is functional.
        </p> */}
    </>
  );
};

export default About;
