import type { NextPage } from 'next'
import { Intro } from '../sections/Intro';

const Home: NextPage = () => {
  return (
    <>
      <Intro />
      <div style={{ height: 250, width: '100vw', background: 'red' }} />
    </>
  )
}

export default Home
