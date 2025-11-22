import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Section from '../components/Section';

const Gallery = () => {
    const images = [
        { url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Campus Overview' },
        { url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Smart Classrooms' },
        { url: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Sports Day' },
        { url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Cultural Events' },
        { url: 'https://images.unsplash.com/photo-1544531320-98e9fcfba8df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Graduation Day' },
        { url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Science Exhibition' }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-primary text-white py-20 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4">Gallery</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">Capturing moments of joy and learning.</p>
                </div>
            </div>

            {/* Slider Section */}
            <Section>
                <div className="container mx-auto px-4">
                    <div className="bg-white p-3 md:p-4 rounded-2xl shadow-2xl">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay, EffectFade]}
                            spaceBetween={30}
                            effect={'fade'}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-xl"
                        >
                            {images.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <div className="relative w-full h-full">
                                        <img
                                            src={image.url}
                                            alt={image.caption}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6 lg:p-8">
                                            <h3 className="text-white text-lg md:text-xl lg:text-2xl font-bold">{image.caption}</h3>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </Section>

            {/* Grid Section */}
            <Section className="bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 md:mb-8 text-center">Life at EduExcellence</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                        {images.map((image, index) => (
                            <div key={index} className="relative group overflow-hidden rounded-lg aspect-square cursor-pointer">
                                <img
                                    src={image.url}
                                    alt={image.caption}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                                    <span className="text-white font-bold text-sm md:text-base lg:text-lg text-center">{image.caption}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Gallery;
