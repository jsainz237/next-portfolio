import type { NextPage } from 'next'

import Canvas from '../components/Canvas';
import { Intro } from '../sections/Intro';
import { Skills } from '../sections/Skills';
import { Projects } from '../sections/Projects';
import { Contact } from '../sections/Contact';

const Home: NextPage = () => {

  return (
    <>
      <Canvas />
      <Intro />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default Home
