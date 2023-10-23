'use client';
import { About, Hero, Portfolio, Services, Resume } from './components';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import Contact from './components/Contact';

export default function Home() {
  const searchParams = useSearchParams();

  const search = searchParams.get('screen');

  const currentScreen = useMemo(() => {
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
  }, [search]);

  return (
    <main className="flex min-h-screen h-screen flex-col justify-center p-20 select-none overflow-y-auto scrollbar-thin scrollbar-thumb-primary scrollbar-thumb-rounded-full">
      {currentScreen}
    </main>
  );
}
