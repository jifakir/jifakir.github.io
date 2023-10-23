'use client';
import React from 'react';
type TitleProps = {
  title: string;
  shadowTitle?: string;
};

const Title = ({ title, shadowTitle }: TitleProps) => {
  return (
    <h2 className="relative text-5xl font-bold text-white/90 uppercase mx-auto">
      {shadowTitle ?? title}
      <span className="absolute whitespace-nowrap font-bold -left-[70px] top-5 text-7xl uppercase text-white/5 -z-50">
        {title}
      </span>
      <span className="absolute left-1/2 -translate-x-1/2 top-[110%] w-28 inline-block bg-primary/50 rounded-full h-1 overflow-hidden">
        <span className="absolute w-10 h-full bg-primary" />
      </span>
    </h2>
  );
};

export default Title;
