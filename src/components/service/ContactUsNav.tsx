import Link from 'next/link';
import React from 'react'

const ContactUsNav = () => {
  return (
     <div className='h-fit w-full bg-cover bg-end bg-no-repeats bg-[url("/assets/hero3-img.png")]'>
        <div className='bg-black/50 h-full flex items-center justify-center py-10 md:py-14  xl:py-20'>
            <div className='flex flex-col items-center justify-center px-4 gap-4 lg:gap-6'>
                <h1 className='text-xl lg:text-2xl text-center text-white'>Explore Our Solar Solutions Today!!!</h1>
                <Link href="/contact-us" className='font-semibold px-4 py-2 lg:p-4 bg-green-700 text-white rounded-full'>Contact US</Link>
            </div>
        </div>
    </div>
  )
}

export default ContactUsNav;