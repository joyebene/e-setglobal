"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImageId, setSelectedImageId] = useState<number | null>(null);

  const imageIds = Array.from({ length: 141 }, (_, i) => i + 1);

  const handlePrev = () => {
    if (selectedImageId && selectedImageId > 1) {
      setSelectedImageId(selectedImageId - 1);
    }
  };

  const handleNext = () => {
    if (selectedImageId && selectedImageId < 122) {
      setSelectedImageId(selectedImageId + 1);
    }
  };

  return (
    <div className='w-full h-full flex flex-col justify-center py-12 md:py-20 px-6 md:px-24 xl:px-60 gap-10 lg:gap-20 bg-white text-gray-900'>
      <div>
        <p className="text-xs sm:text-sm bg-white shadow px-4 py-2 rounded-full w-fit mb-4">
          <span className="inline-block w-2 h-2 bg-green-700 rounded-full mr-2 text-gray-900" />
          Our Gallery
          <span className="inline-block w-2 h-2 bg-green-700 rounded-full ml-2" />
        </p>
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900">
          Our Gallery
        </h1>
      </div>

      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
        {imageIds.map(id => (
          <div
            key={id}
            className='border border-gray-200 shadow-md h-40 lg:h-48 relative rounded-sm cursor-pointer'
            onClick={() => setSelectedImageId(id)}
          >
            <Image
              src={`/assets/gallery/img (${id}).jpg`}
              fill
              alt={`Image ${id}`}
              className="object-cover rounded-sm"
            />
          </div>
        ))}
      </div>

      {/* Fullscreen View with Navigation */}
      {selectedImageId && (
        <div className='fixed inset-0 bg-black/50 z-50 flex items-center justify-center'>
          <button type='button'
            onClick={() => setSelectedImageId(null)}
            className='absolute top-4 right-4 text-white z-50'
            aria-label="Close"
          >
            <X size={35} />
          </button>

          <button type='button'
            onClick={handlePrev}
            disabled={selectedImageId === 1}
            className='absolute left-4 z-50 text-white bg-black/70 hover:bg-black/60 p-2 rounded-full'
            aria-label="Previous"
          >
            <ArrowLeft size={20} />
          </button>

          <button type='button'
            onClick={handleNext}
            disabled={selectedImageId === 122}
            className='absolute right-4 z-50 text-white bg-black/70 hover:bg-black/60 p-2 rounded-full'
            aria-label="Next"
          >
            <ArrowRight size={20} />
          </button>

          <div className='relative w-[60%] max-w-4xl h-[60vh] rounded-lg bg-white'>
            <Image
              src={`/assets/gallery/img (${selectedImageId}).jpg`}
              fill
              alt={`Full view of Image ${selectedImageId}`}
              className='object-contain rounded-lg py-4'
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
