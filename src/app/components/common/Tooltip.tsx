import React, { ReactNode, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type TooltipProps = {
  text: string;
  children: ReactNode;
};

const Tooltip = ({ children, text }: TooltipProps) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const handleTooltip = () => setTooltipOpen((prev) => !prev);
  const variants = {
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
    close: {
      opacity: 0,
      scale: 0,
      y: 10,
    },
  };

  return (
    <motion.div
      onHoverStart={handleTooltip}
      onHoverEnd={handleTooltip}
      className="relative"
    >
      <AnimatePresence>
        {tooltipOpen && (
          <motion.div
            initial={'close'}
            animate={'open'}
            exit={'close'}
            variants={variants}
            className="absolute block -top-2/3 -left-1/2 translate-x-1/2  w-auto whitespace-nowrap bg-dark rounded px-2 py-1 text-xs text-white"
          >
            {text}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 rotate-45 border-t-transparent border-r-black border-b-black border-l-transparent"></div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </motion.div>
  );
};

export default Tooltip;
