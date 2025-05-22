"use client";
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';


interface StepCardProps {
  step: number;
  title: string;
  img: string;
}

const StepCard: React.FC<StepCardProps> = ({ step, title, img }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="w-full sm:w-[48%]  xl:w-[23%] bg-white rounded-xl overflow-hidden shadow-lg"
    >
      <div className="relative w-full h-60">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <p className="text-xs text-gray-500 mb-1">Step {step}</p>
        <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
      </div>
    </motion.div>
  );
};


const Process = () => {
  return (
    <div className="bg-white w-screen min-h-screen xl:h-[calc(100vh-6rem)]">
        <div className="flex flex-col items-center justify-center gap-10 w-full h-full py-20 md:py-0 px-6 pr-9 md:px-24 xl:px-60">
            <motion.div initial={{opacity:0, x: -100 }} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.5}} className='flex flex-col items-center justify-center gap-2 md:gap-4'>
                <p className='text-green-700 text-[10px] md:text-base'>Your Journey to Clean Energy</p>
                <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 text-center">Our Seamless Solar Process</h1>
                <p className='text-center sm:text-lg mt-3 sm:mt-4 text-gray-900'>From first contact to final installation, our streamlined process ensures a smooth and efficient transition to solar energy—customized to fit your needs and budget.</p>
            </motion.div>
            <div className='flex flex-wrap justify-start w-full h-[40%] mt-6 md:mt-9 lg:mt-12 gap-4 md:gap-6'>
                <StepCard img='/assets/step1-img.jpg' title='Make Appointment'step={1} />
                <StepCard img='/assets/step2-img.jpg' title='Consultation Project'step={2} />
                <StepCard img='/assets/step3-img.png' title='Installation System'step={3} />
                <StepCard img='/assets/step4-img.png' title='Execution Project'step={4} />
            </div>
        </div>
    </div>
  )
}

export default Process;