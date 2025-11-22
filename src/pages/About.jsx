import React from 'react';
import { Award, Target, History, Users } from 'lucide-react';
import Section from '../components/Section';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-primary text-white py-20 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4">About Us</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">Building a legacy of excellence since 1998.</p>
                </div>
            </div>

            {/* Vision & Mission */}
            <Section>
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-secondary">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                                    <Target size={32} />
                                </div>
                                <h2 className="text-2xl font-bold text-primary">Our Mission</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                To provide a dynamic learning environment that fosters critical thinking, creativity, and character development, empowering students to become responsible global citizens.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-secondary">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                                    <Award size={32} />
                                </div>
                                <h2 className="text-2xl font-bold text-primary">Our Vision</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                To be a premier institution recognized for academic excellence, innovation, and holistic development, nurturing future leaders who inspire positive change.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* History */}
            <Section className="bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <img
                                src="/history.png"
                                alt="School History"
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                        <div className="md:w-1/2">
                            <div className="flex items-center gap-3 mb-4">
                                <History size={24} className="text-secondary" />
                                <h2 className="text-3xl font-bold text-primary">Our History</h2>
                            </div>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Founded in 1998, EduExcellence began with a humble vision to provide quality education to the local community. Starting with just 50 students and 5 teachers, we have grown into a prestigious institution with over 1500 students and state-of-the-art facilities.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Over the past two decades, we have consistently achieved 100% pass rates in board examinations and our alumni have gone on to study at top universities worldwide.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Principal's Message */}
            <Section>
                <div className="container mx-auto px-4">
                    <div className="bg-primary rounded-2xl overflow-hidden shadow-2xl text-white">
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/3 h-64 md:h-auto">
                                <img
                                    src="/principal.png"
                                    alt="Principal"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="md:w-2/3 p-6 md:p-8 lg:p-12">
                                <h3 className="text-secondary font-bold uppercase tracking-wider mb-2 text-xs md:text-sm">Principal's Message</h3>
                                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Dr. Sarah Johnson</h2>
                                <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 leading-relaxed italic">
                                    "Education is the most powerful weapon which you can use to change the world. At EduExcellence, we strive to equip our students with this weapon, tempered with values and guided by wisdom. We believe in nurturing not just the intellect, but the spirit of every child."
                                </p>
                                <div className="flex gap-4 md:gap-6">
                                    <div className="text-center">
                                        <div className="text-xl md:text-2xl font-bold text-secondary">25+</div>
                                        <div className="text-xs text-gray-400">Years Exp.</div>
                                    </div>
                                    <div className="text-center border-l border-gray-700 pl-4 md:pl-6">
                                        <div className="text-xl md:text-2xl font-bold text-secondary">PhD</div>
                                        <div className="text-xs text-gray-400">Education</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default About;
