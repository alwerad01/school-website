import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative h-[70vh] md:h-[80vh] lg:h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={`${import.meta.env.BASE_URL}hero-bg.png`}
                    alt="School Campus"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10 text-white text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading mb-4 md:mb-6 leading-tight"
                >
                    Inspiring Minds, <br />
                    <span className="text-secondary">Building Futures</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-base md:text-lg lg:text-xl text-gray-200 mb-8 md:mb-10 max-w-2xl mx-auto px-4"
                >
                    Welcome to EduExcellence, where we nurture curiosity, creativity, and character in every student.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4"
                >
                    <Link
                        to="/admissions"
                        className="bg-secondary hover:bg-secondary-light text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                        Apply Now <ArrowRight size={20} />
                    </Link>
                    <Link
                        to="/about"
                        className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all transform hover:scale-105"
                    >
                        Learn More
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
