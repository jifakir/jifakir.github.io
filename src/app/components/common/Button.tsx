'use client';
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
const Button = ({ children }: { children: ReactNode }) => {
  return (
    <motion.button
      animate={{ scale: 1 }}
      whileTap={{ scale: 1.5 }}
      className="border-primary border-2 rounded-full px-6 py-2 text-primary hover:bg-primary hover:text-white transition-all duration-500 ease-in-out font-bold text-xl mt-5"
    >
      {children}
    </motion.button>
  );
};

export default Button;
