import Hero from '@/components/about/Hero';
import History from '@/components/about/History';
import Intro from '@/components/about/Intro';
import Partners from '@/components/about/Partners';
import Teams from '@/components/about/Teams';
import Contact from '@/components/home/Contact';
import React from 'react'

const page = () => {
  return (
    <>
     <Hero />
     <Intro />
     <History />
     <Teams />
     <Partners />
     <Contact />
    </>
  )
}

export default page;