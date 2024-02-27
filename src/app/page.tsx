'use client';
import { About, Hero, Portfolio, Services, Resume } from './components';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import Contact from './components/Contact';
import { useMediaQuery } from 'react-responsive';

export default function Home() {
  const searchParams = useSearchParams();
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 765px)' });

  const search = searchParams.get('screen');

  const currentScreen = useMemo(() => {
    if (isTabletOrMobile) {
      return (
        <>
          <Hero />
          <About />
          <Services />
          <Resume />
          <Portfolio />
          <Contact />
        </>
      );
    }
    switch (search) {
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'resume':
        return <Resume />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  }, [search, isTabletOrMobile]);

  return (
    <main
      className={`${
        isTabletOrMobile ? '' : 'flex flex-col justify-center'
      } min-h-screen h-screen p-5 md:p-20 select-none overflow-y-auto scrollbar-thin scrollbar-thumb-primary scrollbar-thumb-rounded-full`}
    >
      {currentScreen}
    </main>
  );
}

export const runtime = 'edge';
