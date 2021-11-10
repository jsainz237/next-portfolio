import { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import dynamic from 'next/dynamic';

import { Intro } from '../sections/Intro';
import { Skills } from '../sections/Skills';
import { Projects } from '../sections/Projects';
import { Contact } from '../sections/Contact';

const DynamicLazyCanvas = dynamic(() => import('../components/Canvas'));

const Home: NextPage = () => {
  return (
    <>
      <DynamicLazyCanvas />
      <Intro />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default Home
