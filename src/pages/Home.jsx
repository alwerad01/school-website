import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, Calendar, BookOpen, Users, Trophy, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import Section from '../components/Section';

const Home = () => {
    const announcements = [
        { id: 1, title: 'Admissions Open for 2025-26', date: 'Nov 20, 2024' },
        { id: 2, title: 'Annual Sports Day Rescheduled', date: 'Nov 18, 2024' },
        { id: 3, title: 'Science Fair Winners Announced', date: 'Nov 15, 2024' },
    ];

    const quickLinks = [
        { icon: <BookOpen size={32} />, title: 'Academics', desc: 'Explore our curriculum', link: '/academics' },
        { icon: <Users size={32} />, title: 'Faculty', desc: 'Meet our teachers', link: '/faculty' },
        { icon: <Trophy size={32} />, title: 'Achievements', desc: 'Student success stories', link: '/about' },
        { icon: <Calendar size={32} />, title: 'Events', desc: 'Upcoming activities', link: '/gallery' },
    ];

    return (
        <div className="min-h-screen">
            <Hero />

            {/* Announcements Section */}
            <div className="bg-white relative -mt-20 z-20 container mx-auto px-4 shadow-xl rounded-lg max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <div className="p-4 md:p-6 bg-secondary text-white md:rounded-l-lg flex items-center justify-between">
                        <div>
                            <h3 className="text-lg md:text-xl font-bold mb-1">Latest News</h3>
                            <p className="text-white/80 text-xs md:text-sm">Stay updated with school activities</p>
                        </div>
                        <Bell size={28} className="md:hidden" />
                        <Bell size={32} className="hidden md:block" />
                    </div>
                    <div className="col-span-2 p-4 md:p-6 bg-white md:rounded-r-lg">
                        <div className="space-y-3 md:space-y-4">
                            {announcements.map((item) => (
                                <div key={item.id} className="flex items-start gap-3 md:gap-4 group cursor-pointer">
                                    <div className="bg-gray-100 p-2 rounded text-center min-w-[50px] md:min-w-[60px] flex-shrink-0">
                                        <span className="block text-xs text-gray-500 uppercase font-bold">{item.date.split(' ')[0]}</span>
                                        <span className="block text-base md:text-lg font-bold text-primary">{item.date.split(' ')[1].replace(',', '')}</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-bold text-sm md:text-base text-primary group-hover:text-secondary transition-colors">{item.title}</h4>
                                        <Link to="#" className="text-xs text-gray-500 flex items-center gap-1 mt-1 hover:text-secondary">
                                            Read more <ArrowRight size={12} />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Principal's Message */}
            <Section className="bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        <div className="md:w-1/2 w-full">
                            <div className="relative max-w-md mx-auto">
                                <div className="absolute -top-4 -left-4 w-20 h-20 md:w-24 md:h-24 bg-secondary/20 rounded-full blur-xl"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1544531320-98e9fcfba8df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Principal"
                                    className="rounded-lg shadow-2xl relative z-10 w-full"
                                />
                                <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 bg-white p-3 md:p-4 rounded-lg shadow-lg z-20">
                                    <p className="font-bold text-sm md:text-base text-primary">Dr. Sarah Johnson</p>
                                    <p className="text-xs md:text-sm text-gray-500">Principal</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <h4 className="text-secondary font-bold uppercase tracking-wider mb-2 text-sm md:text-base">Welcome Message</h4>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-primary">Nurturing Excellence in Every Child</h2>
                            <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
                                "At EduExcellence, we believe that education is not just about academic learning, but about character building and holistic development. Our mission is to provide a safe, nurturing environment where every student can discover their potential and thrive."
                            </p>
                            <Link
                                to="/about"
                                className="inline-flex items-center gap-2 text-sm md:text-base text-secondary font-bold hover:gap-3 transition-all"
                            >
                                Read Principal's Message <ArrowRight size={18} className="md:w-5 md:h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Quick Links Grid */}
            <Section className="bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Discover Our School</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Explore the various aspects of our institution that make us a leader in education.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {quickLinks.map((item, index) => (
                            <Link
                                key={index}
                                to={item.link}
                                className="group p-8 rounded-xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
                            >
                                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform text-secondary">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
                                <p className="text-gray-500 mb-4">{item.desc}</p>
                                <span className="text-secondary text-sm font-bold flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                    Learn More <ArrowRight size={16} />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Stats Section */}
            <Section className="bg-primary text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
                        <div>
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-2">25+</div>
                            <div className="text-xs md:text-sm lg:text-base text-gray-400">Years of Excellence</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-2">1500+</div>
                            <div className="text-xs md:text-sm lg:text-base text-gray-400">Students</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-2">100+</div>
                            <div className="text-xs md:text-sm lg:text-base text-gray-400">Expert Faculty</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-2">100%</div>
                            <div className="text-xs md:text-sm lg:text-base text-gray-400">University Acceptance</div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Home;
