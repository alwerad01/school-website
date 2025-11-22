import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import Section from '../components/Section';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for contacting us. We will get back to you shortly.');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-primary text-white py-20 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4">Contact Us</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">We'd love to hear from you.</p>
                </div>
            </div>

            {/* Contact Info & Form */}
            <Section>
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 md:mb-8">Get in Touch</h2>
                            <div className="space-y-6 md:space-y-8">
                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="bg-secondary/10 p-2.5 md:p-3 rounded-full text-secondary flex-shrink-0">
                                        <MapPin size={20} className="md:w-6 md:h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg md:text-xl font-bold text-primary mb-1">Visit Us</h3>
                                        <p className="text-sm md:text-base text-gray-600">123 Education Lane, Knowledge City,<br />State 12345, Country</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="bg-secondary/10 p-2.5 md:p-3 rounded-full text-secondary flex-shrink-0">
                                        <Phone size={20} className="md:w-6 md:h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg md:text-xl font-bold text-primary mb-1">Call Us</h3>
                                        <p className="text-sm md:text-base text-gray-600">+1 (555) 123-4567<br />+1 (555) 987-6543</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="bg-secondary/10 p-2.5 md:p-3 rounded-full text-secondary flex-shrink-0">
                                        <Mail size={20} className="md:w-6 md:h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg md:text-xl font-bold text-primary mb-1">Email Us</h3>
                                        <p className="text-sm md:text-base text-gray-600">info@eduexcellence.edu<br />admissions@eduexcellence.edu</p>
                                    </div>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="mt-8 md:mt-12 h-48 md:h-64 bg-gray-200 rounded-xl overflow-hidden shadow-lg">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1622287654321!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title="School Location"
                                ></iframe>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-6 md:p-8 rounded-xl shadow-xl">
                            <h2 className="text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6">Send us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                                            placeholder="John"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                                            placeholder="Doe"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                                    <select className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all">
                                        <option>General Inquiry</option>
                                        <option>Admissions</option>
                                        <option>Careers</option>
                                        <option>Feedback</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                                    <textarea
                                        rows="4"
                                        className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                                        placeholder="How can we help you?"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-secondary hover:bg-secondary-light text-white font-bold py-3 md:py-4 text-sm md:text-base rounded-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
                                >
                                    Send Message <Send size={18} className="md:w-5 md:h-5" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Contact;
