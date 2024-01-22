'use client';
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, Reorder, motion } from 'framer-motion';
import Title from './Title';
import Image from 'next/image';
import { MdOutlineClose } from 'react-icons/md';
import { LinkSquare, Maximize } from 'iconsax-react';
import PortfolioItem from './PortfolioItem';

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Web App', value: 'web' },
  { label: 'Mobile App', value: 'mobile' },
  { label: 'API', value: 'api' },
];

export const portfolios = [
  {
    id: 1,
    catId: ['all', 'web'],
    imgUrl:
      'https://images.unsplash.com/photo-1682686578707-140b042e8f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1375&q=80',
  },
  {
    id: 3,
    catId: ['mobile', 'all'],
    imgUrl:
      'https://images.unsplash.com/photo-1682686578707-140b042e8f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1375&q=80',
  },
  {
    id: 2,
    catId: ['all', 'web'],
    imgUrl:
      'https://images.unsplash.com/photo-1682686578707-140b042e8f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1375&q=80',
  },
  {
    id: 5,
    catId: ['api', 'all'],
    imgUrl:
      'https://images.unsplash.com/photo-1694365899936-850bc6c2b0f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80',
  },
  {
    id: 4,
    catId: ['mobile', 'all'],
    imgUrl:
      'https://images.unsplash.com/photo-1695088566123-593dc77ed3be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
  },
  {
    id: 6,
    catId: ['api', 'all'],
    imgUrl:
      'https://images.unsplash.com/photo-1694365899936-850bc6c2b0f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80',
  },
];

const Portfolio = () => {
  const [selectedCat, setSelectedCat] = useState('all');
  const [selectedItem, setItem] = useState<Record<string, any> | null>(null);
  const [frameLoading, setLoading] = useState(false);
  return (
    <>
      <Title title="Portfolio" />
      <div className="mt-20 min-h-[58vh]">
        <div className="flex justify-center items-center">
          {categories?.map((cat, idx) => (
            <div
              key={`categories_${idx}`}
              onClick={() => setSelectedCat(cat.value)}
              className="px-5"
            >
              <h5
                className={`relative font-bold cursor-pointer ${
                  selectedCat === cat.value ? 'text-primary' : 'text-white'
                }`}
              >
                {cat.label}
                {selectedCat === cat.value && (
                  <motion.div
                    className="absolute left-0 bottom-0 h-0.5 w-full bg-primary"
                    layoutId="category"
                  />
                )}
              </h5>
            </div>
          ))}
        </div>
        <ul className="grid grid-cols-3 gap-5 mt-10">
          <AnimatePresence>
            {portfolios
              .filter((itm) => itm.catId.includes(selectedCat))
              .map((itm, idx) => (
                <PortfolioItem
                  data={itm}
                  key={`portfolio_item_${idx}`}
                  selectedCat={selectedCat}
                  onMaximize={() => setItem(itm)}
                />
              ))}
          </AnimatePresence>
        </ul>
        {selectedItem?.id &&
          createPortal(
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
                    src="https://giverise.com"
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
            </AnimatePresence>,
            document.body
          )}
      </div>
    </>
  );
};

export default Portfolio;
