import './globals.css';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Particles, Sidebar } from './components';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' });

export const metadata: Metadata = {
  title: 'JI Fakir',
  description: 'A passionate full-stack developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} bg-dark h-screen scrollbar-thin font-sans shadow-inner shadow-primary/80`}
      >
        <Sidebar />
        <section className="relative ml-[300px] h-full overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-primary/50 scrollbar-thumb-rounded-full">
          <div className="absolute right-0 top-0 left-0 min-h-screen flex justify-evenly -z-[500]">
            <div className="w-px min-h-full bg-gray-900" />
            <div className="w-px min-h-full  bg-gray-900" />
            <div className="w-px min-h-full bg-gray-900" />
            <div className="w-px min-h-full bg-gray-900" />
          </div>
          {children}
        </section>
        <Particles />
      </body>
    </html>
  );
}
