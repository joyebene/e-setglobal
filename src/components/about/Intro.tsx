"use client";
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';

interface GridProps {
    img: string,
    title: string,
    text: string
}

const Grid = ({ img, title, text }: GridProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className='bg-white lg:w-[28%] rounded-3xl shadow-lg p-3 flex items-center gap-2 lg:gap-3'
        >
            <div className='rounded-full p-1 lg:p-2 w-[14%] lg:w-[15%]'>
                <Image src={img} alt='img' width={50} height={50} />
            </div>
            <div>
                <h3 className='font-semibold text-[14px] lg:text-lg mb-1 text-gray-900'>{title}</h3>
                <p className='text-gray-600 text-[10px] lg:text-sm'>{text}</p>
            </div>
        </motion.div>
    )
}

const Intro = () => {
    return (
        <motion.div className='bg-white min-h-screen' initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}>
            <div className='w-full h-full flex flex-col justify-center py-12 md:py-20 px-6 pr-9 md:px-24 xl:px-60 gap-10 lg:gap-20'>
                <div className='flex flex-col justify-center gap-6 md:gap-10'>
                    <div className='flex flex-col lg:flex-row justify-start items-center lg:items-end lg:justify-evenly gap-6 lg:gap-8'>
                        <motion.div className='w-full' initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: false }}>
                            <p className='text-sm lg:text-base text-gray-900 px-4 py-3 shadow-lg rounded-full w-fit flex items-center justify-center gap-2 mb-5 md:mb-6 lg:mb-8 bg-white'><span className='w-3 h-3 lg:w-4 lg:h-4 bg-green-700 rounded-full p-1 text-black flex items-center justify-center shadow-md'>.</span>About Us<span className='w-3 h-3 lg:w-4 lg:h-4 bg-green-700 rounded-full p-1 text-black flex items-center justify-center shadow-md'>.</span></p>
                            <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-gray-900'>Meet E-SET <span className='text-green-700'>GLOBAL</span> <br /> <span className='font-semibold text-xl sm:text-2xl md:text-3xl xl:text-4xl'>Your Solar Partner</span></h1>
                        </motion.div>
                        <div className='text-wrap flex flex-col gap-2 md:gap-4 text-gray-900 lg:text-lg'>
                            <p>E-SET GLOBAL SOLUTION SERVICES LIMITED is a leading energy solutions company based in Abuja, Nigeria. We specialize in providing innovative and sustainable energy solutions, including solar power installations, CCTV systems, Wi-Fi setups, solar street lighting, electric fencing, and comprehensive maintenance services. </p>
                            <p>Our mission is to empower businesses, households, and communities with reliable, cost-effective, and eco-friendly energy solutions. </p></div>
                    </div>
                    <div className='flex justify-between mt-6 gap-4 lg:gap-10 flex-wrap'>
                        <Grid img='/assets/img' title='Affordable & Cost-Effective Services' text='Reducing energy costs without compromising quality' />
                        <Grid img='/assets/img' title='Expert Maintenance & Support' text='24/7 technical support and system upgrades' />
                        <Grid img='/assets/img' title='Professional Team' text='Our success is driven by a team of dedicated professionals with expertise in energy solutions' />
                    </div>
                </div>
                <div className='hidden xl:block'>
                    <motion.div className='relative w-full h-[500px] flex items-center' initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: false }} >
                        <Image src='/assets/intro2-img.jpg' width={700} height={700} alt='img' className='bg-cover bg-center absolute rounded-3xl z-0  w-2/4 h-[500px] shadow-xl' />
                        <div className='absolute bg-white p-2 translate-x-[100%] rounded-4xl shadow-2xl'>
                            <Image src="/assets/intro2-img2.png" width={500} height={400} alt='img' className='rounded-3xl' />
                        </div>
                    </motion.div>
                </div>
                <div className='xl:hidden w-full flex items-center justify-center'>
                    <motion.div className='relative w-[90%] h-[250px] rounded-3xl' initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: false }}>
                        <Image src="/assets/intro2-img.jpg" fill alt='img' className='absolute rounded-3xl shadow-md' />
                    </motion.div>
                </div>

            </div>
        </motion.div>
    )
}

export default Intro;