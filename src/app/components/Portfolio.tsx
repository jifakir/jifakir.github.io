'use client';
import React, { ReactNode, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, Reorder, motion } from 'framer-motion';
import Title from './Title';
import Image from 'next/image';
import { MdOutlineClose } from 'react-icons/md';
import { LinkSquare, Maximize } from 'iconsax-react';
import PortfolioItem from './PortfolioItem';
import { ProjectTypes, projectCategories, projects } from '../data/projects';
import Portal from './common/Portal';

const Portfolio = () => {
  const [selectedCat, setSelectedCat] = useState(0);
  const [selectedItem, setItem] = useState<ProjectTypes | null>(null);
  const [frameLoading, setLoading] = useState(false);
  return (
    <div className="mt-20 md:mt-auto">
      <Title title="Portfolio" />
      <div className="mt-10 min-h-[58vh]">
        <div className="pl-20 flex justify-center items-center overflow-x-auto">
          {projectCategories?.map((cat, idx) => (
            <div
              key={`categories_${idx}`}
              onClick={() => setSelectedCat(cat.id)}
              className="px-5"
            >
              <h5
                className={`relative font-bold cursor-pointer whitespace-nowrap ${
                  selectedCat === cat.id ? 'text-primary' : 'text-white'
                }`}
              >
                {cat.name}
                {selectedCat === cat.id && (
                  <motion.div
                    className="absolute left-0 bottom-0 h-0.5 w-full bg-primary"
                    layoutId="category"
                  />
                )}
              </h5>
            </div>
          ))}
        </div>
        <ul className="md:grid grid-cols-2 xl:grid-cols-3 gap-5 mt-10 space-y-5 md:space-y-0">
          <AnimatePresence>
            {projects
              .slice(0, 6)
              .filter((itm) => itm.categoryId.includes(selectedCat))
              .map((itm, idx) => (
                <PortfolioItem
                  data={itm}
                  key={`portfolio_item_${idx}`}
                  selectedCat={itm.categoryId}
                  onMaximize={() => setItem(itm)}
                />
              ))}
          </AnimatePresence>
        </ul>
        {selectedItem?.id && (
          <Portal>
            <AnimatePresence>
              <motion.div
                // onClick={() => setItem(null)}
                layoutId={`${selectedItem?.id}`}
                onKeyDown={(e) => console.log('Key Down : =>', e)}
                className="absolute w-full h-full top-0 left-0 z-[5000] flex justify-center items-center overflow-hidden bg-dark/60"
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="relative w-3/4 h-3/4 bg-dark/90 backdrop-blur-sm border-2 border-primary rounded-lg overflow-hidden"
                >
                  <div className="relative bg-dark flex justify-center items-center px-5">
                    <h1 className="text-center text-primary font-bold py-1">
                      Giverise - Nextjs, AntD, Tailwind
                    </h1>
                    <span
                      onClick={() => setItem(null)}
                      className="w-3.5 h-3.5 cursor-pointer absolute top-1 right-1 rounded-full text-red-500 hover:text-dark transition-all duration-200 ease-in-out bg-red-500 flex justify-center items-center"
                    >
                      <MdOutlineClose className="text-xs" />
                    </span>
                  </div>
                  <iframe
                    src={selectedItem?.projectUrl ?? 'https://giverise.com'}
                    width={'100%'}
                    height={'100%'}
                    onLoadStart={() => setLoading(true)}
                    onLoad={() => setLoading(false)}
                  />
                  {frameLoading ? (
                    <span className="text-primary">Loading...</span>
                  ) : null}
                </div>
              </motion.div>
            </AnimatePresence>
          </Portal>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
