"use client"
import React from 'react'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Contact, Info, Briefcase, Grid, Newspaper } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';




const Navbar = () => {
  const pathName = usePathname();
  interface NavLinkProps {
    url: string,
    icon?: React.ReactNode,
    name: string,
    className?: string
    desktopNav?: boolean
  }

  const NavLink: React.FC<NavLinkProps> = ({ url, icon, name, className, desktopNav }) => {
    console.log('motion', motion);
    return (
      <li className={`p-2 py-3 transition-all duration-200 ${className} ${pathName === url && desktopNav ? "text-2xl text-green-700" : " "}`} onClick={() => setOpenNav(false)}><Link href={url} className='flex gap-2 items-center'>{icon}{name}</Link></li>
    )
  }

  const [openNav, setOpenNav] = useState(false);


  return (
    <div className='p-4 lg:pt-3 lg:px-8 bg-white fixed w-screen h-[6rem] lg:h-[7rem] z-1'>
      <div>

        {/* Mobile Navbar */}
        <div className='lg:hidden'>
          <div className='flex items-center justify-between pr-1'>
            <div className='flex items-center gap-1 shadow-sm shadow-transparent'><Link href="/"><Image src="/assets/logo.png" width={70} height={70} alt="logo img" className='object-centers rounded-xl' /></Link><div className='font-bold tracking-tight leading-tight mt-3 text-black'>
              <p className='text-xl'>E-SET <span className='text-green-700'>GLOBAL</span></p>
              <p className='text-[10px]'>SOLUTION SERVICES LIMITED</p>
            </div> </div>
            <div onClick={() => setOpenNav(true)} className='mt-3'><Menu size={40} color='black' /></div>
          </div>

          <AnimatePresence>
            {openNav && (
              <motion.div className='h-screen bg-black/40 fixed inset-0 z-50'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div className='bg-white w-3/4 h-screen p-4'
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 35 }}
                >
                  <div className='flex items-center justify-between pr-2 sm:pr-8 text-2xl pt-4 border-b border-gray-400 pb-6 mb-8'>
                    <div className='flex items-center gap-1 shadow-sm shadow-transparent'><Link href="/"><Image src="/assets/logo.png" width={58} height={58} alt="logo img" className='object-centers' onClick={() => setOpenNav(false)} /></Link><div className='font-bold tracking-tight leading-tight mt-3 text-black'>
                      <p className='text-lg'>E-SET <span className='text-green-700'>GLOBAL</span></p>
                      <p className='text-[9px]'>SOLUTION SERVICES LIMITED</p>
                    </div> </div>
                    <X size={30} onClick={() => setOpenNav(false)} color='black' />
                  </div>
                  <div>
                    <p className='text-xl mb-3 text-gray-900 font-bold'>Menu</p>
                    <ul className='text-lg text-gray-950'>
                      <NavLink url='/' icon={<Home color='green' />} name='Home' className='hover:bg-yellow-500 hover:text-white rounded-lg' />
                      <NavLink url='/about-us' icon={<Info color='green' />} name='About Us' className='hover:bg-yellow-500 hover:text-white rounded-lg' />
                      <NavLink url='/service' icon={<Briefcase color='green' />} name='Services' className='hover:bg-yellow-500 hover:text-white rounded-lg' />
                      <NavLink url='/gallery' icon={<Grid color='green' />} name='Gallery' className='hover:bg-yellow-500 hover:text-white rounded-lg' />
                      <NavLink url='/blog' icon={<Newspaper color='green' />} name='BLog' className='hover:bg-yellow-500 hover:text-white rounded-lg' />
                      <NavLink url='/contact-us' icon={<Contact color='green' />} name='Contact Us' className='hover:bg-yellow-500 hover:text-white rounded-lg' />
                    </ul>
                  </div>

                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Desktop Sidebar */}
        <div className='hidden lg:block'>
          <div className='flex items-center justify-between px-4'>
            <div className='flex items-center gap-1 md:gap-3 shadow-sm shadow-transparent'><Link href="/"><Image src="/assets/logo.png" width={100} height={100} alt="logo img" className='object-centers rounded-xl' /></Link><div className='font-bold tracking-tight leading-tight mt-3 text-black'>
              <p className='text-2xl'>E-SET <span className='text-green-700'>GLOBAL</span></p>
              <p className='text-[12px]'>SOLUTION SERVICES LIMITED</p>
            </div> </div>
            <div>
              <ul className='flex items-center gap-10 justify-evenly'>
                <NavLink url='/' desktopNav={true} name='Home' className={`hover:text-green-700 font-bold text-xl shadow-sm rounded-md hover:text-2xl`} />
                <NavLink url='/about-us' desktopNav={true} name='About Us' className='font-bold text-xl hover:text-green-700 shadow-sm rounded-md  hover:text-2xl text-center' />
                <NavLink url='/service' desktopNav={true} name='Services' className='font-bold text-xl hover:text-green-700 shadow-sm rounded-md  hover:text-2xl' />
                <NavLink url='/gallery' desktopNav={true} name='Gallery' className='font-bold text-xl hover:text-green-700 shadow-sm rounded-md  hover:text-2xl' />
                <NavLink url='/blog' desktopNav={true} name='Blog' className='font-bold text-xl hover:text-green-700 shadow-sm rounded-md  hover:text-2xl' />
                <NavLink url='/contact-us' name='Contact Us' className='font-bold text-xl text-white shadow-md rounded-full bg-green-700 hover:bg-green-600  duration-300 px-4 text-center' />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;