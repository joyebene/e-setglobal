'use client';
import React from 'react';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <section className="bg-white w-screen h-[calc(100vh-10rem)] xl:h-[calc(100vh-6rem)]">
        <div className="flex flex-col md:flex-row items-center justify-start md:justify-center gap-10 w-full h-full py-20 md:py-0 px-6 pr-9 md:px-24 xl:px-60">

          {/* Image Section */}
          <motion.div
            className="w-full md:w-1/2 order-2 md:order-1 h-[500px] relative"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.4 }}
          >
            <Image
              src="/assets/intro-img.jpg"
              fill
              alt="intro"
              className="object-cover object-center absolute rounded-2xl"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="flex flex-col gap-2 md:gap-3 leading-tight tracking-tight md:w-1/2  justify-start md:order-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: false, amount: 0.4 }}
          >
            <p className="text-[10px] md:text-base">
              Turning sunlight into smart, sustainable power.
            </p>
            <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900">
              Harnessing Power of the Elements
            </h1>
            <p className="sm:text-lg mt-3 sm:mt-4">
             We transform natural energy—like sunlight—into reliable, sustainable power solutions. At E-SET GLOBAL, we’re committed to clean energy that drives progress and protects our planet.
            </p>

            <div className="flex gap-3 md:gap-4 items-center mt-4 sm:mt-16">
              <div className="p-2 md:p-3 bg-green-700 rounded-full w-fit">
                <Phone size={38} color="white" className='w-7 h-7 md:w-10 md:h-10' />
              </div>
              <div>
                <p className="font-bold text-sm sm:text-base">Have a Question? Call Us Today!</p>
                <p className="text-green-700 font-bold text-lg sm:text-xl md:text-2xl">+2347051220509 </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
