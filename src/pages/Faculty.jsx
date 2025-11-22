import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import Section from '../components/Section';

const Faculty = () => {
    const faculty = [
        {
            name: 'Dr. Alwerad Khan',
            role: 'Principal',
            subject: 'Education Management',
            image: 'https://images.unsplash.com/photo-1544531320-98e9fcfba8df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        },
        {
            name: 'Mr. Robert Smith',
            role: 'Vice Principal',
            subject: 'Mathematics',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        },
        {
            name: 'Ms. Emily Davis',
            role: 'Senior Teacher',
            subject: 'English Literature',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        },
        {
            name: 'Mr. James Wilson',
            role: 'HOD Science',
            subject: 'Physics',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        },
        {
            name: 'Ms. Jessica Brown',
            role: 'Teacher',
            subject: 'Biology',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        },
        {
            name: 'Mr. David Miller',
            role: 'Sports Director',
            subject: 'Physical Education',
            image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-primary text-white py-20 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4">Our Faculty</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">Mentors who inspire and guide.</p>
                </div>
            </div>

            {/* Faculty Grid */}
            <Section>
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {faculty.map((member, index) => (
                            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group">
                                <div className="h-56 md:h-64 overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-5 md:p-6 text-center">
                                    <h3 className="text-lg md:text-xl font-bold text-primary mb-1">{member.name}</h3>
                                    <p className="text-secondary font-bold text-xs md:text-sm mb-2">{member.role}</p>
                                    <p className="text-gray-500 text-xs md:text-sm mb-4">{member.subject}</p>
                                    <div className="flex justify-center gap-3 md:gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="text-gray-400 hover:text-secondary"><Mail size={18} className="md:w-5 md:h-5" /></button>
                                        <button className="text-gray-400 hover:text-secondary"><Linkedin size={18} className="md:w-5 md:h-5" /></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Faculty;
