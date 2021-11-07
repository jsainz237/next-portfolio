import type { NextPage } from 'next'

import Canvas from '@components/Canvas';
import { Intro } from '../sections/Intro';
import { Skills } from '../sections/Skills';
import { Projects } from '../sections/Projects';
import { Contact } from '../sections/Contact';
import { CornerBanner } from '@components/CornerBanner';

const Home: NextPage = () => {

  return (
    <>
      <CornerBanner />
      <Canvas />
      <Intro />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default Home
