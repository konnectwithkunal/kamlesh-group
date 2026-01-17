// src/components/FounderMessage.tsx
// Message from the Founder section with photo and quote

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';

const FounderMessage: React.FC = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23EE4343' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-4 py-1.5 bg-[#EE4343]/10 text-[#EE4343] text-sm font-semibold rounded-full mb-4">
                        LEADERSHIP
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                        Message from the Founder
                    </h2>
                </motion.div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
                    {/* Photo - Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="md:col-span-2 flex justify-center"
                    >
                        <div className="relative">
                            {/* Photo Frame */}
                            <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/powerbook/exhibition_10.jpeg"
                                    alt="Hitesh Dhawan - Founder, Kamlesh Enterprises"
                                    className="w-full h-full object-cover object-top"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#EE4343]/20 rounded-full -z-10" />
                            <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#EE4343]/10 rounded-full -z-10" />

                            {/* Name Card */}
                            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                                <h3 className="font-bold text-gray-900 text-lg">Hitesh Dhawan</h3>
                                <p className="text-[#EE4343] text-sm font-medium">Founder, Kamlesh Enterprises</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Message - Right Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="md:col-span-3"
                    >
                        <div className="relative">
                            {/* Quote Icon */}
                            <Quote className="w-12 h-12 text-[#EE4343]/20 absolute -top-2 -left-2 md:-top-4 md:-left-4" />

                            {/* Message Content */}
                            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p className="text-base md:text-lg">
                                        At Kamlesh Enterprises, our journey has always been driven by a commitment to quality, integrity, and customer satisfaction. From the very beginning, our vision has been to build long-term relationships by delivering reliable products and services that add real value to our clients.
                                    </p>
                                    <p className="text-base md:text-lg">
                                        We believe that trust is earned through consistency, transparency, and continuous improvement. Every project we undertake reflects our dedication to excellence and our responsibility towards our customers and partners.
                                    </p>
                                    <p className="text-base md:text-lg">
                                        I sincerely thank our clients, partners, and team members for their continued trust and support. We look forward to growing together and creating lasting success.
                                    </p>
                                </div>

                                {/* Signature */}
                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-1 bg-[#EE4343] rounded-full" />
                                        <div>
                                            <p className="font-bold text-gray-900 text-lg">Hitesh Dhawan</p>
                                            <p className="text-gray-500 text-sm">Founder, Kamlesh Enterprises</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FounderMessage;
