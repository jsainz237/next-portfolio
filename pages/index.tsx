import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Intro } from '../sections/Intro';
import { Skills } from '../sections/Skills';
import { Projects } from '../sections/Projects';

const Home: NextPage = () => {
  const [yPos, set] = useState<number>(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    set(window.scrollY / 4);
  }

  return (
    <>
      <div style={{ transform: `translateY(${yPos}px)` }}>
        <Intro />
      </div>
      <Skills />
      <Projects />
    </>
  )
}

export default Home
