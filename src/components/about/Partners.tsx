"use client"
import React from 'react'
import { motion } from 'framer-motion'


interface PartnerListProps {
    text: string,
    className: string
}

const PartnerList = ({ text, className }: PartnerListProps) => {
    return (
        <motion.div className={`bg-green-700 text-gray-100 transition-all duration-500 w-fit rounded-full shadow-2xl hover:text-lg ${className}`} initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}>
            <div className='px-2 py-2'>
                <p className='mt-1 text-[10px] md:text-sm'>{text}</p>
            </div>
        </motion.div>
    )
}

const Partners = () => {
    return (
        <div className='w-full h-fit xl::h-[calc(70vh-2rem)] bg-cover bg-center bg-no-repea bg-[url("/assets/hero2-img.png")]'>
            <div className='bg-black/40 w-full h-full py-12 px-6 pr-9 md:px-24 xl:px-60 flex flex-col items-center justify-center gap-8 lg:gap-16'>
                <motion.div className='flex flex-col items-center justify-center' initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}>
                    <p className='text-[10px] sm:text-sm lg:text-base text-gray-900 px-4 py-3 shadow-lg rounded-full w-fit flex items-center justify-center gap-2 mb-5 md:mb-6 lg:mb-8 bg-white'><span className='w-3 h-3 lg:w-4 lg:h-4 bg-green-700 rounded-full p-1 text-black flex items-center justify-center shadow-md'>.</span>Certif & Partners<span className='w-3 h-3 lg:w-4 lg:h-4 bg-green-700 rounded-full p-1 text-black flex items-center justify-center shadow-md'>.</span></p>
                    <h1 className='font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-200'><span className='text-green-500 mb-2'>Certifications</span> & Partners</h1>
                    <p className='text-center mt-4 lg:mt-6 text-sm md:text-base text-gray-200'>E-SET GLOBAL SOLUTION SERVICES LIMITED is a legally registered company with a Certificate of Incorporation in Nigeria. We collaborate with leading industry partners to enhance our service delivery. <span className='font-semibold'>Some of them includes:</span>
                    </p>
                </motion.div>
                <div className='flex flex-wrap items-center justify-center gap-6'>
                    <PartnerList text="JOHNTEL COMPANY" className='md:bg-green-700 md:text-gray-100 hover:bg-white hover:text-green-700' />
                    <PartnerList text="I-SCOR ENGINEERING LIMITED" className='md:bg-white hover:bg-green-700 hover:text-white md:text-green-700' />
                    <PartnerList text="AFENG SOLUTIONS GLOBAL" className='md:bg-green-700 md:text-gray-100 hover:bg-white hover:text-green-700' />
                    <PartnerList text="ACHIEF ELECTRICAL" className='md:bg-white hover:bg-green-700 hover:text-white md:text-green-700 ' />
                    <PartnerList text="RAE_NOVATIONS" className='md:bg-green-700 md:text-gray-100 hover:bg-white hover:text-green-700' />
                    <PartnerList text="DUAS CONGLOMERATE" className='md:bg-white hover:bg-green-700 hover:text-white md:text-green-700 ' />
                </div>
            </div>
        </div>
    )
}

export default Partners;