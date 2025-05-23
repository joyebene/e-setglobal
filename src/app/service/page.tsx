import ContactUsNav from '@/components/service/ContactUsNav';
import Hero from '@/components/service/Hero';
import Sections from '@/components/service/WhatWeProvide';
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />
      <Sections />
      <ContactUsNav />
    </div>
  )
}

export default page;