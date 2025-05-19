import React from 'react'

const Hero = () => {
  return (
    <div className='h-[calc(35vh-2rem)] lg:h-[calc(50vh-2rem)] w-full pt-[6rem] lg:pt-[7rem] bg-cover bg-center bg-no-repeats bg-[url("/assets/hero2-img.png")]'>
        <div className='bg-black/50 h-full flex items-center justify-center'>
            <div>
                <h1 className='text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-center text-white'>About Us</h1>
            </div>
        </div>
    </div>
  )
}

export default Hero;