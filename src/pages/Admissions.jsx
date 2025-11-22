import React from 'react';
import { FileText, Calendar, DollarSign, CheckCircle, Download } from 'lucide-react';
import Section from '../components/Section';

const Admissions = () => {
    const steps = [
        { title: 'Application', desc: 'Submit the online application form along with necessary documents.' },
        { title: 'Assessment', desc: 'Student assessment/interview to understand learning needs.' },
        { title: 'Interaction', desc: 'Parent interaction with the Principal/Head of Admissions.' },
        { title: 'Admission', desc: 'Payment of fees and completion of admission formalities.' }
    ];

    const fees = [
        { grade: 'Primary (Grade 1-5)', tuition: '$5,000', term: 'Per Annum' },
        { grade: 'Middle (Grade 6-8)', tuition: '$6,500', term: 'Per Annum' },
        { grade: 'High (Grade 9-12)', tuition: '$8,000', term: 'Per Annum' }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-primary text-white py-20 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4">Admissions</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">Join the EduExcellence family.</p>
                </div>
            </div>

            {/* Process */}
            <Section>
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 md:mb-12 text-center">Admission Process</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="relative">
                                <div className="bg-white p-5 md:p-6 rounded-xl shadow-lg border-t-4 border-secondary h-full">
                                    <div className="text-3xl md:text-4xl font-bold text-secondary/20 mb-3 md:mb-4">0{index + 1}</div>
                                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2">{step.title}</h3>
                                    <p className="text-gray-600 text-xs md:text-sm">{step.desc}</p>
                                </div>
                                {index < 3 && (
                                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                                        <div className="w-8 h-0.5 bg-gray-300"></div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Requirements & Fees */}
            <Section className="bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Requirements */}
                        <div>
                            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                                <CheckCircle className="text-secondary" /> Requirements
                            </h2>
                            <ul className="space-y-4">
                                {[
                                    'Completed Application Form',
                                    'Birth Certificate (Copy)',
                                    'Previous School Report Cards (Last 2 years)',
                                    'Transfer Certificate (Original)',
                                    'Passport Size Photographs (4)',
                                    'Medical Record/Immunization History'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700 bg-gray-50 p-3 rounded-lg">
                                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6 md:mt-8">
                                <h3 className="text-lg md:text-xl font-bold text-primary mb-4">Download Forms</h3>
                                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                                    <button className="flex items-center justify-center gap-2 bg-primary text-white px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base rounded-lg hover:bg-primary-light transition-colors">
                                        <FileText size={18} className="md:w-5 md:h-5" /> Application Form <Download size={14} className="md:w-4 md:h-4" />
                                    </button>
                                    <button className="flex items-center justify-center gap-2 bg-gray-200 text-gray-800 px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base rounded-lg hover:bg-gray-300 transition-colors">
                                        <FileText size={18} className="md:w-5 md:h-5" /> Brochure <Download size={14} className="md:w-4 md:h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Fees */}
                        <div>
                            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                                <DollarSign className="text-secondary" /> Fee Structure
                            </h2>
                            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
                                <table className="w-full">
                                    <thead className="bg-primary text-white">
                                        <tr>
                                            <th className="p-4 text-left">Grade Level</th>
                                            <th className="p-4 text-left">Tuition Fee</th>
                                            <th className="p-4 text-left">Term</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {fees.map((fee, index) => (
                                            <tr key={index} className="bg-white hover:bg-gray-50">
                                                <td className="p-4 font-medium text-gray-800">{fee.grade}</td>
                                                <td className="p-4 text-primary font-bold">{fee.tuition}</td>
                                                <td className="p-4 text-gray-500 text-sm">{fee.term}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className="p-4 bg-secondary/10 text-sm text-gray-600">
                                    * Additional fees for transport, books, and uniforms apply.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Admissions;
