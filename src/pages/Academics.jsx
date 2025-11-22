import React from 'react';
import { BookOpen, Brain, Microscope, Globe, Users } from 'lucide-react';
import Section from '../components/Section';

const Academics = () => {
    const levels = [
        {
            title: 'Primary School',
            grade: 'Grade 1 - 5',
            desc: 'Focus on foundational literacy, numeracy, and curiosity-driven learning.',
            icon: <BookOpen size={40} />,
            color: 'bg-blue-100 text-blue-600'
        },
        {
            title: 'Middle School',
            grade: 'Grade 6 - 8',
            desc: 'Emphasis on critical thinking, project-based learning, and subject specialization.',
            icon: <Globe size={40} />,
            color: 'bg-green-100 text-green-600'
        },
        {
            title: 'High School',
            grade: 'Grade 9 - 12',
            desc: 'Rigorous academic preparation for board exams and university entrance.',
            icon: <Microscope size={40} />,
            color: 'bg-purple-100 text-purple-600'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-primary text-white py-20 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4">Academics</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">Excellence in teaching and learning.</p>
                </div>
            </div>

            {/* Academic Levels */}
            <Section>
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {levels.map((level, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                                <div className={`w-16 h-16 ${level.color} rounded-full flex items-center justify-center mb-6`}>
                                    {level.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-2">{level.title}</h3>
                                <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-bold mb-4">
                                    {level.grade}
                                </span>
                                <p className="text-gray-600 leading-relaxed">
                                    {level.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Methodology */}
            <Section className="bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-primary mb-4">Our Methodology</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">We believe in a student-centric approach that goes beyond textbooks.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="bg-secondary/10 p-3 rounded-lg h-fit text-secondary">
                                        <Brain size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-primary mb-2">Experiential Learning</h3>
                                        <p className="text-gray-600">Learning by doing through labs, field trips, and hands-on projects.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-secondary/10 p-3 rounded-lg h-fit text-secondary">
                                        <Globe size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-primary mb-2">Digital Integration</h3>
                                        <p className="text-gray-600">Smart classrooms and digital resources to enhance the learning experience.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-secondary/10 p-3 rounded-lg h-fit text-secondary">
                                        <Users size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-primary mb-2">Holistic Development</h3>
                                        <p className="text-gray-600">Focus on sports, arts, and soft skills alongside academics.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <img
                                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Classroom"
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Academics;
