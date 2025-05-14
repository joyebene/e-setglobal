"use client";

import React, { useState, useRef } from 'react';
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const faqs = [{
    id: 1,
    question: "How to convert to renewable energy?",
    answer: "Start by assessing your energy needs, then install solar panels, wind turbines, or other renewable systems. Choose whether to stay on-grid or go off-grid, and explore available government incentives."
}, {
    id: 2,
    question: "What are the most efficient alternatives?",
    answer: "Solar and wind are the most common and efficient. Hydropower and geothermal are also highly effective where conditions allow. Hybrid systems often give the best results.",
}, {
    id: 3,
    question: "How to choose the right renewable power?",
    answer: "Base your choice on location, energy needs, and budget. For sunny areas, go solar; for windy regions, choose wind. Also consider installation space and local policies."
}, {
    id: 4,
    question: "How to gain more out of energy sources?",
    answer: "  Emerging AI technologies and cleaner industrial practices can help communities become more sustainable by reducing energy losses in buildings."
}
];

const FAQ = () => {
    const [open, setOpen] = useState<number | null>(null);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });

    return (
        <div className='w-full min-h-screen bg-cover bg-center bg-no-repeat bg-[url("/assets/faq-img.jpg")] relative'>
           <div className="w-full h-full bg-black/40 text-white flex items-center justify-start px-6 md:pl-24 xl:pl-60 absolute z-0">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 max-w-3xl text-left"
            >
                <p className='text-[10px] md:text-base mb-2 md:mb-3'>Leading the way in sustainable energy transformation.</p>
                <h1 className="font-bold text-white text-2xl sm:text-3xl md:text-4xl xl:text-5xl mb-4">Ready Ecology Power</h1>
                <p className="text-gray-200 mb-6 sm:text-lg">
                    Find the best technologies which qualify as clean solar energy,
                    industrial policies, and replacements that help make future sustainable power systems.
                </p>

                <div className="space-y-2 mt-6 md:mt-12">
                    {faqs.map((q, index) => (
                        <div
                            key={q.id}
                            className={`p-4 rounded-md hover:bg-green-700 ${open === index ? "bg-green-700" : "bg-white/20 backdrop-blur-md"}  cursor-pointer`}
                            onClick={() => setOpen(open === index ? null : index)}
                        >
                            <div className="flex justify-between items-center text-white sm:text-lg font-semibold">
                                {q.question}
                                <ChevronDown
                                    className={`transform transition-transform ${open === index ? 'rotate-180' : ''}`}
                                />
                            </div>

                            <AnimatePresence initial={false}>
                                {open === index && (
                                    <motion.p
                                        key="content"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-sm text-gray-200 sm:text-lg my-4 overflow-hidden"
                                    >
                                        <span className='font-semibold text-gray-700 underline'>Answer:</span> {q.answer}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

            </motion.div>

            {/* Decorative solar panel graphic */}
            <div className="absolute right-10 bottom-10 ">
                <img src="/assets/solar-panel.webp" alt="Solar Graphic" className="w-24 h-24 sm:w-32 sm:h-32 md:w-58 md:h-58" />
            </div>
        </div>  
        </div>
       
    );
};

export default FAQ;
