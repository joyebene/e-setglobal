"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface TeamListProps {
    name: string,
    role: string,
    img: string
}

const TeamList = ({ name, role, img }: TeamListProps) => {
    return (
        <motion.div className='bg-white text-gray-900 w-full sm:w-[38%] xl:w-[20%] rounded-2xl shadow-2xl' initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}>
            <Image src={img} alt='img' width={50} height={50} className='w-full h-50 rounded-2xl object-center object-cover' />
            <div className='px-2 lg:px-3 py-3'>
                <h3 className='font-bold text-[13px] sm:text-base md:text-lg'>{name}</h3>
                <p className='mt-1 text-[11px] sm:text-sm'>{role}</p>
            </div>
        </motion.div>
    )
}

const Teams = () => {
    return (
        <div className='min-h-screen bg-white text-gray-900'>
            <div className='w-full h-full py-12 md:py-20 px-6 pr-9 md:px-24 xl:px-60 flex flex-col items-center justify-center'>
                <motion.div className='w-full flex flex-col justify-center items-center mb-6 lg:mb-8' initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}>
                    <p className='text-[10px] sm:text-sm lg:text-base text-gray-900 px-4 py-3 shadow-lg rounded-full w-fit flex items-center justify-center gap-2 mb-5 md:mb-6 lg:mb-8 bg-white'><span className='w-3 h-3 lg:w-4 lg:h-4 bg-green-700 rounded-full p-1 text-black flex items-center justify-center shadow-md'>.</span>Our Teams<span className='w-3 h-3 lg:w-4 lg:h-4 bg-green-700 rounded-full p-1 text-black flex items-center justify-center shadow-md'>.</span></p>
                    <h1 className='font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900'><span className='text-green-700 mb-2'>Team</span> Members</h1>
                    <p className='text-center mt-2 lg:mt-4 sm:text-lg'>Our success is driven by a team of dedicated professionals with expertise in energy solutions, project management, and administration.</p>
                </motion.div>
                <div className='flex flex-wrap items-center justify-center gap-8'>
                    <TeamList img='/assets/members-img.jpg' role='CEO & Project Director' name='Izah Ego Famous' />
                    <TeamList img='/assets/members-img.jpg' role='Technical Director' name='Afeng Sampson' />
                    <TeamList img='/assets/members-img.jpg' role='Director of Administration' name='Doom Akpam Izah' />
                    <TeamList img='/assets/members-img.jpg' role='Executive Secretary ' name='Rachael Akpam ' />
                </div>
            </div>
        </div>
    )
}

export default Teams;