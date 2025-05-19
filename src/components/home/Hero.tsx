// Hero.tsx
"use client"
import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';


interface GridProps {
  text: string,
  url: string
}

const Grid: React.FC<GridProps> = ({text, url}) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='flex items-center justify-center w-full bg-white/20 backdrop-blur-md rounded-xl p-2 md:p-3 lg:p-4 shadow-2xl text-[9px] sm:text-[13px] lg:text-[18px]'
    >
      <Image src={url} width={60} height={60} alt='img' className='w-12 h-12 md:w-18 lg:w-24 lg:h-20' />
      <p>{text}</p>
    </motion.div>
  )
}


const Hero = () => {
  return (
    <div
      className='pt-[6rem] lg:pt-[7rem] w-full h-[calc(100vh-2rem)] bg-cover bg-center bg-no-repeat bg-[url("/assets/hero-img.jpg")]'
    >
      <div className='w-full h-full text-white bg-black/40 flex flex-col items-center justify-center pt-32'>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className='flex flex-col items-center justify-center h-2/3 gap-2 md:gap-3 leading-tight tracking-tight'
        >
          <p className='text-sm sm:text-xl lg:text-2xl text-center text-white'>Ditch the past, Move Foward With Renewables.</p>
          <h1 className='text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-center'>
            Power Your Future With <br /> E-SET GLOBAL
          </h1>
        </motion.div>

        <motion.div
          className='h-2/6 flex items-center justify-evenly lg:justify-between gap-4 md:gap-5 lg:gap-14 px-4 font-bold md:w-4/5'
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0
            },
            visible: {
              opacity: 1,
              transition: {
                duration: 0.6,
                staggerChildren: 0.3
              }
            }
          }}
        >
          <Grid url="/assets/h-img.png" text="Your Solar Power Solutions" />
          <Grid url="/assets/h2-img.png" text="CCTV Security Solution" />
          <Grid url="/assets/h3-img.png" text="Ev Chargers For Your Garage" />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero;
