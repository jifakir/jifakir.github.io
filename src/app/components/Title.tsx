'use client';
import React from 'react';
type TitleProps = {
  title: string;
  shadowTitle?: string;
};

const Title = ({ title, shadowTitle }: TitleProps) => {
  return (
    <div className="flex justify-center items-center">
      <h2 className="relative text-3xl md:text-5xl text-center font-bold text-white/90 uppercase mx-auto">
        <span className="text-center whitespace-nowrap font-bold top-5 text-5xl md:text-7xl uppercase text-white/5 -z-50">
          {title}
        </span>
        <span className="absolute whitespace-nowrap -top-1/3 left-1/2 -translate-x-1/2 text-3xl md:text-5xl text-center font-bold text-white/90 uppercase mx-auto">
          {shadowTitle ?? title}
        </span>
        <span className="absolute left-1/2 -translate-x-1/2 top-[50%] w-28 inline-block bg-primary/50 rounded-full h-1 overflow-hidden">
          <span className="absolute w-10 h-full bg-primary" />
        </span>
      </h2>
    </div>
  );
};

export default Title;
