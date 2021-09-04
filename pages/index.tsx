import type { NextPage } from 'next'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Intro } from '../sections/Intro';

const Home: NextPage = () => {
  return (
    <>
      <Intro />
      <div style={{ height: 250, width: '100vw', background: 'red', zIndex: 0 }} />
    </>
  )
}

export default Home
