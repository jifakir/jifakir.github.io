import { AnimatePresence, motion } from 'framer-motion';
import { LinkSquare, Maximize } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Tooltip from './common/Tooltip';

type PortfolioItemProps = {
  selectedCat: string;
  data: Record<string, any>;
  onLink?: () => void;
  onMaximize?: () => void;
};

const PortfolioItem = ({
  selectedCat,
  data,
  onMaximize,
  onLink,
}: PortfolioItemProps) => {
  const { id, imgUrl } = data;
  return (
    <motion.li
      key={`portfolio_${id}`}
      layoutId={`${id}`}
      // initial={{ scale: 0 }}
      animate={{
        transition: {
          delay: 0.5,
          type: 'spring',
          stiffness: 350,
          damping: 25,
        },
      }}
      layout
      exit={{ opacity: 0, transition: { delay: 0.5 } }}
      className="relative group z-0 w-full h-40 flex justify-center items-center rounded-lg bg-white overflow-hidden cursor-pointer"
    >
      <Image alt="Object Id" src={imgUrl} className="object-cover" fill />
      <motion.div className="absolute hidden group-hover:block top-0 left-0 w-0 group-hover:w-full h-full z-10 p-5 transition-all duration-500 ease-in-out">
        <div className="min-h-full h-full w-full bg-white/5 rounded-lg p-3 backdrop-blur flex justify-center items-center">
          {/* <h3 className="text-white font-medium text-center">
                        Nextjs project
                      </h3> */}
          <div className="text-primary flex gap-5 items-center justify-center">
            <Tooltip text="Visit the project">
              <Link href={'https://giverise.com'} target="_blank">
                <LinkSquare size="50" />
              </Link>
            </Tooltip>
            <Maximize onClick={onMaximize} size="50" />
          </div>
        </div>
      </motion.div>
    </motion.li>
  );
};

export default PortfolioItem;
