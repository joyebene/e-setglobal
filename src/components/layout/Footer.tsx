import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Phone, X } from 'lucide-react';

const Footer = () => {
  return (
    <div className='bg-black '>
      <div className='h-full w-full xl:w-2/3 flex items-center justify-between lg:justify-between p-6 md:p-10'>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-1 shadow-sm shadow-transparent mb-4 md:mb-6'><Link href="/"><Image src="/assets/logo.png" width={70} height={70} alt="logo img" className='object-centers rounded-xl' /></Link><div className='font-bold tracking-tight leading-tight mt-3 text-black'>
            <p className='text-sm md:text-lg lg:text-xl text-white'>E-SET <br /> <span className='text-green-500'>GLOBAL</span></p>
          </div> </div>
          <div>
            <h3 className='text-white mb-4 text-sm'>About Sunify</h3>
            <ul className='text-sm text-gray-200 flex flex-col items-start gap-2 text-[11px]'>
              <li className='hover:text-green-400 transition-all duration-300'><Link href="/about-us">About Us</Link></li>
              <li className='hover:text-green-400 transition-all duration-300'><Link href="/about-us">Our Mission</Link></li>
              <li className='hover:text-green-400 transition-all duration-300'><Link href="/about-us">Careers</Link></li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className='text-white mb-4 text-sm md:text-base pl-6 pt-10'>Quick Links</h3>
          <ul className='sm:text-sm text-[11px] text-gray-200 flex flex-col items-start gap-2 pl-6'>
            <li className='hover:text-green-400 transition-all duration-300'><Link href="">Home</Link></li>
            <li className='hover:text-green-400 transition-all duration-300'><Link href="/service">Services</Link></li>
            <li className='hover:text-green-400 transition-all duration-300'><Link href="/gallery">Gallery</Link></li>
            <li className='hover:text-green-400 transition-all duration-300'><Link href="/blog">Blog</Link></li>
            <li className='hover:text-green-400 transition-all duration-300'><Link href="/contact-us">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <div className='shadow-md p-4 md:p-8 rounded-lg lg:rounded-xl bg-gray-800 hidden sm:block'>
          <div className='flex flex-col gap-4'>
            <h3 className='text-lg text-white'>Newsletter</h3>
            <input type="text" placeholder='Email Address' className='bg-white p-2 rounded-md md:rounded-lg' />
            <button className='bg-green-600 text-white p-2 rounded-md md:rounded-lg hover:bg-green-500 transition-all duration-300'>Subscribe</button>
          </div>
        </div>
        <div className='flex gap-4 md:gap-6 lg:gap-8 mt-6 flex-wrap pl-4 items-center justify-center'>
          <Link href="" className='bg-gray-800 p-2 rounded-full hover:bg-green-700 hover:-translate-y-3 transition-all duration-500'><Facebook color='white' fill='white' /></Link>
          <Link href="" className='bg-gray-800 p-2 rounded-full hover:bg-green-700 hover:-translate-y-3 transition-all duration-500'><X color='white' fill='white' /></Link>
          <Link href="" className='bg-gray-800 p-2 rounded-full hover:bg-green-700 hover:-translate-y-3 transition-all duration-500'><Instagram  color='white'/></Link>
          <Link href="" className='bg-gray-800 p-2 rounded-full hover:bg-green-700 hover:-translate-y-3 transition-all duration-500'><Linkedin color='white' fill='white' /></Link>
          <Link href="" className='bg-gray-800 p-2 rounded-full hover:bg-green-700 hover:-translate-y-3 transition-all duration-500'><Phone color='white' fill='white' /></Link>
        </div>
        </div>
       
      </div>
    </div>
  )
}

export default Footer;