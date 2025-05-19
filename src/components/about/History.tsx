"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const History = () => {
  return (
    <div className='h-[110vh] bg-cover bg-center bg-no-repeats bg-[url("/assets/history-img.jpg")]'>
        <div className='bg-black/40 w-full h-full py-12 md:py-20 px-6 pr-9 md:px-24 xl:px-60 flex flex-col lg:flex-row lg:items-center gap-4'>
        <motion.div className='lg:w-1/2' initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}>
             <p className='text-sm lg:text-base text-gray-900 px-3 py-2 shadow-lg rounded-full w-fit flex items-center justify-center gap-2 bg-white mb-4 lg:mb-6'><span className='w-3 h-3 lg:w-4 lg:h-4 bg-green-700 rounded-full p-1 text-black flex items-center justify-center shadow-md'>.</span>Our History<span className='w-3 h-3 lg:w-4 lg:h-4 bg-green-700 rounded-full p-1 text-black flex items-center justify-center shadow-md'>.</span></p>
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-white mb-4 lg:mb-6">Company's History</h1>
            <p className='text-gray-200 mb-4 lg:mb-6 sm:text-base xl:text-xl'>Founded in 2009, E-SET <span className='text-green-500'>GLOBAL</span> SOLUTION SERVICES LIMITED has been dedicated to providing innovative energy solutions. Our journey started with our first residential installation on January 21, 2015, at Fafu Reliable Estate, Lokogoma, FCT Abuja. This project involved a 5KVA/8-battery (220AH) full inverter backup system for the then doctor to <span className='font-semibold'>Former President Goodluck Ebele Jonathan</span>. To enhance our expertise, we undertook specialized training at I-Scor Engineering Limited, Port Harcourt, in 2019/2020, keeping us at the forefront of the latest industry advancements. Since then, we have continued to expand, carrying out multiple installations and continuously upgrading our knowledge base. </p>
        </motion.div>
        <motion.div className='flex items-center justify-center sm:justify-start lg:justify-center lg:w-1/2' initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
>
          <Image src="/assets/logo2.png" width={300} height={300} alt='img' className='rounded-xl sm:w-[400] sm:h-[350] lg:w-[500] shadow-xl' />
         </motion.div>
            
        </div>
    </div>
  )
}

export default History;