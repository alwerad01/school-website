import React from 'react';
import { FlaskConical, Book, Trophy, Bus, Utensils, Stethoscope } from 'lucide-react';
import Section from '../components/Section';

const Facilities = () => {
    const facilities = [
        {
            title: 'Science Labs',
            desc: 'State-of-the-art Physics, Chemistry, and Biology labs equipped with modern apparatus for practical learning.',
            icon: <FlaskConical size={40} />,
            image: 'https://placehold.co/600x400/10b981/ffffff?text=Science+Labs'
        },
        {
            title: 'Library',
            desc: 'A vast collection of books, journals, and digital resources to foster a love for reading and research.',
            icon: <Book size={40} />,
            image: 'https://placehold.co/600x400/065f46/ffffff?text=Library'
        },
        {
            title: 'Sports Complex',
            desc: 'Indoor and outdoor sports facilities including basketball courts, football field, and swimming pool.',
            icon: <Trophy size={40} />,
            image: 'https://placehold.co/600x400/10b981/ffffff?text=Sports+Complex'
        },
        {
            title: 'Transportation',
            desc: 'Safe and comfortable bus service covering all major routes in the city with GPS tracking.',
            icon: <Bus size={40} />,
            image: 'https://placehold.co/600x400/065f46/ffffff?text=Transportation'
        },
        {
            title: 'Cafeteria',
            desc: 'Hygienic and nutritious meals prepared in-house, catering to diverse dietary requirements.',
            icon: <Utensils size={40} />,
            image: 'https://placehold.co/600x400/10b981/ffffff?text=Cafeteria'
        },
        {
            title: 'Medical Room',
            desc: 'Full-time nurse and visiting doctor to attend to any medical emergencies and regular health checkups.',
            icon: <Stethoscope size={40} />,
            image: 'https://placehold.co/600x400/065f46/ffffff?text=Medical+Room'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-primary text-white py-20 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4">Facilities</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">World-class infrastructure for holistic growth.</p>
                </div>
            </div>

            {/* Facilities Grid */}
            <Section>
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {facilities.map((facility, index) => (
                            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
                                <div className="relative h-48 md:h-52 overflow-hidden">
                                    <img
                                        src={facility.image}
                                        alt={facility.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-primary/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="text-white p-2.5 md:p-3 bg-secondary rounded-full">
                                            {facility.icon}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-5 md:p-6">
                                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2 md:mb-3">{facility.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-xs md:text-sm">
                                        {facility.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Facilities;
