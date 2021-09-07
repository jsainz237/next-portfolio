import type { NextPage } from 'next'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Intro } from '../sections/Intro';
import { Skills } from '../sections/Skills';
import { Projects } from '../sections/Projects';

const Home: NextPage = () => {
  return (
    <Parallax pages={2}>
      <ParallaxLayer speed={0.5}>
        <Intro />
      </ParallaxLayer>
      <ParallaxLayer offset={0.99} speed={1}>
        <Skills />
        <Projects />
      </ParallaxLayer>
    </Parallax>
  )
}

export default Home
