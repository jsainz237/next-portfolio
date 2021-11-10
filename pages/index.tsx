import { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import dynamic from 'next/dynamic';

import { Intro } from '../sections/Intro';
import { Skills } from '../sections/Skills';
import { Projects } from '../sections/Projects';
import { Contact } from '../sections/Contact';
import { CornerBanner } from '@components/CornerBanner';

const DynamicLazyCanvas = dynamic(() => import('../components/Canvas'));

const Home: NextPage = () => {
  const [showBanner, setShowBanner] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setShowBanner(true), 300);
  }, []);

  return (
    <>
      <CornerBanner />
      <DynamicLazyCanvas />
      <Intro />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default Home
