import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Canvas from '../components/Canvas';
import { Intro } from '../sections/Intro';
import { Skills } from '../sections/Skills';
import { Projects } from '../sections/Projects';

const Home: NextPage = () => {

  return (
    <>
        <Canvas />
        <Intro />
        <Skills />
        <Projects />
    </>
  )
}

export default Home
