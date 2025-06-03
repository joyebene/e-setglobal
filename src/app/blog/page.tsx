import React from 'react'

const page = () => {
  return (
    <>
    
     <div className='h-[calc(35vh-2rem)] lg:h-[calc(50vh-2rem)] w-full pt-[6rem] lg:pt-[7rem] bg-cover bg-center bg-no-repeats bg-[url("/assets/hero2-img.png")]'>
        <div className='bg-black/50 h-full flex items-center justify-center'>
            <div>
                <h1 className='text-3xl md:text-5xl xl:text-6xl text-center text-white'>Our Blog</h1>
            </div>
        </div>
      </div>
    <div className='h-[65vh] bg-white text-gray-900 py-12 md:py-20 px-6 md:px-24 xl:px-60 gap-10 lg:gap-20'>
      <div className='h-full flex flex-col items-center justify-center gap-2 lg:gap-4'>
         <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 text-center">
          Our Blog
        </h1>
        <p className='text-sm text-center lg:text-base text-green-700'>Coming soon...</p>
      </div>
    </div>
    </>
  )
}

export default page;