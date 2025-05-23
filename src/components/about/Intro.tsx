"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface GridProps {
  img: string;
  title: string;
  text: string;
}

const Grid = ({ img, title, text }: GridProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-white w-full md:w-[48%] xl:w-[30%] rounded-3xl shadow-lg p-4 flex items-start gap-3"
    >
      <div className="flex-shrink-0 w-10 h-10">
        <Image src={img} alt="icon" width={40} height={40} />
      </div>
      <div>
        <h3 className="font-semibold text-sm text-gray-900">{title}</h3>
        <p className="text-gray-600 text-xs lg:text-sm">{text}</p>
      </div>
    </motion.div>
  );
};

const Intro = () => {
  return (
    <motion.div
      className="bg-white min-h-screen"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full h-full flex flex-col justify-center py-12 md:py-20 px-6 md:px-24 xl:px-60 gap-10 lg:gap-20">
        {/* Title Section */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <p className="text-xs sm:text-sm bg-white shadow px-4 py-2 rounded-full w-fit mb-4">
                <span className="inline-block w-2 h-2 bg-green-700 rounded-full mr-2" />
                About Us
                <span className="inline-block w-2 h-2 bg-green-700 rounded-full ml-2" />
              </p>
              <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900">
                Meet E-SET <span className="text-green-700">GLOBAL</span>
                <br />
                <span className="text-xl font-medium">Your Solar Partner</span>
              </h1>
            </motion.div>
            <div className="w-full lg:w-1/2 text-gray-900 text-sm lg:text-base space-y-4">
              <p>
                E-SET GLOBAL SOLUTION SERVICES LIMITED is a leading energy solutions company based in Abuja, Nigeria. We specialize in solar installations, CCTV systems, Wi-Fi setups, solar street lighting, electric fencing, and maintenance services.
              </p>
              <p>
                Our mission is to empower businesses, households, and communities with reliable, cost-effective, and eco-friendly energy solutions.
              </p>
            </div>
          </div>

          {/* Grid Features */}
          <div className="flex flex-wrap gap-4 justify-between">
            <Grid img="/assets/img" title="Affordable & Cost-Effective Services" text="Reducing energy costs without compromising quality" />
            <Grid img="/assets/img" title="Expert Maintenance & Support" text="24/7 technical support and system upgrades" />
            <Grid img="/assets/img" title="Professional Team" text="Driven by dedicated professionals with expertise in energy solutions" />
          </div>
        </div>

        {/* Desktop Image Section */}
        <div className="hidden xl:flex relative w-full h-[500px] items-center justify-center">
          <motion.div
            className="absolute w-2/4 h-full rounded-3xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            <Image src="/assets/intro2-img.jpg" alt="main" fill className="object-cover rounded-3xl" />
          </motion.div>
          <motion.div
            className="absolute left-1/2 translate-x-8 bg-white p-2 rounded-3xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            <Image src="/assets/intro2-img2.png" width={500} height={400} alt="overlay" className="rounded-3xl object-cover" />
          </motion.div>
        </div>

        {/* Mobile Image Fallback */}
        <div className="xl:hidden w-full flex justify-center">
          <motion.div
            className="relative w-[90%] h-[250px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            <Image src="/assets/intro2-img.jpg" alt="mobile-img" fill className="object-cover rounded-2xl absolute" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Intro;
