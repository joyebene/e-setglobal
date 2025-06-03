import Gallery from '@/components/gallery/Gallery';
import Hero from '@/components/gallery/Hero';
import Contact from '@/components/home/Contact';
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />
      <Gallery />
      <Contact />
    </div>
  )
}

export default page;