"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
        },
    }),
};

export default function Sections() {
    const sections = [
        {
            title: 'We Provide Solar Energy Solutions & Consulting',
            image: '/assets/serv1.jpg',
            items: [
                { title: 'Solar Panel Installation', desc: 'Expert panel mounting for homes and businesses..', icon: '☀️' },
                { title: ' Energy Efficiency Consulting', desc: 'Maximize your energy savings with smart analysis..', icon: '🔌', highlight: true },
                { title: 'Battery Storage Systems', desc: 'Reliable backup power, day or night..', icon: '🔋', highlight: true },
                { title: 'Performance Monitoring', desc: ' Track solar performance with real-time tools..', icon: '📈' },
            ],
        },
        {
            title: '10+ Years of Experience in Renewable Energy',
            image: '/assets/serv3.jpg',
            items: [
                { title: ' Maintenance Services', desc: ' Regular check-ups for lasting solar efficiency..', icon: '⚙️' },
                { title: ' Data-Driven Solutions', desc: '', icon: '📊', highlight: true },
            ],
        },
        {
            title: 'Your Trusted Partner in Clean Energy Transformation',
            image: '/assets/serv2.png',
            items: [
                { title: 'Maintenance Services', desc: ' Regular check-ups for lasting solar efficiency.', icon: '🌍', highlight: true },
                { title: ' Global Expertise', desc: '', icon: '🎯' },
                { title: 'Proven Track Record', desc: '', icon: '📅' },
                { title: ' Precision Engineering', desc: '', icon: '🎯', highlight: true },
            ],
        },
    ];

    return (
        <div className="space-y-16 py-12 px-6 pr-9 md:px-24 xl:px-60 text-gray-900 mb-6">
            {sections.map((section, index) => (
                <motion.div
                    key={index}
                    className="grid md:grid-cols-2 gap-6 items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    custom={index}
                    variants={fadeInUp}
                >
                    {/* Text section */}
                    <div className={`${index === 1 ? 'md:order-2' : 'md:order-1'}`}>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">{section.title}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {section.items.map((item, i) => (
                                <div
                                    key={i}
                                    className={`p-4 rounded-xl border border-green-700 ${item.highlight ? 'bg-green-700 text-white' : 'bg-white text-gray-600'} shadow-lg`}
                                >
                                    <div className="text-3xl mb-2">{item.icon}</div>
                                    <h3 className="font-semibold mb-2">{item.title}</h3>
                                    {item.desc && <p className="text-[10px] sm:text-sm">{item.desc}</p>}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image section */}
                    <div className={`${index === 1 ? 'md:order-1' : 'md:order-2'} rounded-xl overflow-hidden shadow-lg`}>
                        <Image
                            src={section.image}
                            alt="section visual"
                            width={500}
                            height={400}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
