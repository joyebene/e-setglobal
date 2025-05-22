"use client";
import { Star } from 'lucide-react';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ServiceBoxProps {
  title: string;
  img: string;
  text: string;
}

const ServiceBox: React.FC<ServiceBoxProps> = ({ title, img, text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full sm:w-[48%] md:w-[45%] hover:bg-green-700 text-white transition-all duration-300 p-4 rounded-xl bg-black/30 backdrop-blur-md shadow-lg"
    >
      <div className="flex flex-col items-start justify-center gap-3">
        <Image src={img} width={50} height={50} alt="img" />
        <h2 className="font-bold text-white text-lg md:text-xl xl:text-2xl">{title}</h2>
        <p className="sm:text-lg">{text}</p>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <div className="w-full min-h-screen h-[1200px] bg-cover bg-center bg-no-repeat bg-[url('/assets/offer-img.jpg')] relative ">
      {/* Overlay Container */}
      <div className="absolute w-full h-full bg-black/40">
        <div className="w-full h-full text-white flex flex-col justify-center px-6 md:px-24 lg:px-40 xl:px-60 py-16 space-y-10">
          
          {/* Top Section */}
          <div className="flex flex-col sm:flex-row items-start justify-between gap-10 w-full">
            <motion.div
              className="w-full sm:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[10px] md:text-base mb-2 md:mb-3">
                Empowering Homes and Businesses with Smart, Sustainable Energy Solutions.
              </p>
              <h1 className="font-bold text-white text-2xl sm:text-3xl lg:text-4xl">
                We Offer Special Solar Energy
              </h1>
            </motion.div>

            <motion.div
              className="hidden sm:flex flex-col w-1/2 gap-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              <p className="sm:text-lg">
                Trusted by clients for our reliable service, quality products, and outstanding support. 5-star rated for excellence in solar energy solutions and customer care.
              </p>
              <div className="flex gap-2 bg-white py-2 px-3 w-fit rounded-lg">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={25} color="gold" fill="gold" />
                ))}
              </div>
              <p className='sm:text-lg'>Delivering top-tier energy solutions with a proven track record of customer satisfaction.</p>
            </motion.div>
          </div>

          {/* Services Grid */}
          <div className="flex flex-wrap justify-start gap-4 md:gap-6">
            <ServiceBox
              title="Solar Street Lightning"
              img="/assets/street-light.png"
              text="Smart solar-powered lighting for estates, communities, and public spaces."
            />
            <ServiceBox
              title="CCtv & Security System"
              img="/assets/cctv.png"
              text="High-definition surveillance installation, remote monitoring, and access control."
            />
            <ServiceBox
              title="Energy Efficiency"
              img="/assets/eff.png"
              text="Energy-efficient lighting, smart energy management systems, and renewable energy consulting."
            />
            <ServiceBox
              title="Solar Power Installation"
              img="/assets/sol3.png"
              text="Residential, commercial, and industrial solar solutions, inverters, and battery backup systems."
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;
