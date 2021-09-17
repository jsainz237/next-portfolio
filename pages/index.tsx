import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { a, config, useSpring } from 'react-spring';
import { Intro } from '../sections/Intro';
import { Skills } from '../sections/Skills';
import { Projects } from '../sections/Projects';

const Home: NextPage = () => {
  const [translation, set] = useState<number>(0);
  const { yPos } = useSpring({ 
    yPos: translation,
    config: {
      ...config.default,
      tension: 500,
      friction: 30,
    },
  });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    set(window.scrollY / 4);
  }
  return (
    <>
      <a.div style={{ transform: yPos.to(val => `translateY(${val}px)`) }}>
        <Intro />
      </a.div>
      <Skills />
      <Projects />
    </>
  )
}

export default Home
