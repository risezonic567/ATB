import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import SEO from '../components/SEO';
import { Helmet } from 'react-helmet';

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function ContactPage() {
    // Contact information, easily updatable
    const contactDetails = [
        { icon: <Phone className="w-6 h-6 text-teal-600" />, title: "Call Us 24/7", detail: "+(866)307-5957", link: "tel:+8663075957" },
        { icon: <Mail className="w-6 h-6 text-teal-600" />, title: "Email Support", detail: "support@airlinesticketbooking.com", link: "mailto:support@airlinesticketbooking.com" },
        { icon: <MapPin className="w-6 h-6 text-teal-600" />, title: "Address", detail: "17662 Irvine Blvd, Suite 9 Tustin, CA 92780)", link: "#" },
    ];

    return (
        <>
            {/* <SEO 
                title='Contact us | Airlines Ticket Booking'
                description='Get in touch with our US travel agency experts for flight bookings, hotel deals, visa assistance, travel insurance and support with your travel plans.'
                canonical='https://www.airlinesticketbooking.com/contact-us'
            /> */}
            <Helmet>
                <title>Contact us | Airlines Ticket Booking</title>
                <meta name='description' content='Get in touch with our US travel agency experts for flight bookings, hotel deals, visa assistance, travel insurance and support with your travel plans.' />
                <link rel="canonical" href="https://www.airlinesticketbooking.com/contact-us" />
            </Helmet>
            <motion.div
            initial="hidden"
            animate="show"
            className="py-24 md:py-32 bg-gray-50"
        >
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    variants={fadeUp}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        We're Ready to Help You Fly
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Whether you need to book a new flight, modify an existing reservation, or have a question about airfare deals, our team is here for you.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* 1. Contact Information Cards */}
                    <div className="lg:col-span-1 space-y-8">
                        {contactDetails.map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.link}
                                variants={fadeUp}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 block hover:shadow-xl transition-shadow"
                            >
                                <div className="flex items-start gap-4">
                                    {item.icon}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                                        <p className="text-teal-600 font-medium">{item.detail}</p>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* 2. Contact Form */}
                    <motion.div
                        variants={fadeUp}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-2 bg-white p-8 md:p-12 rounded-xl shadow-2xl"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message.</h2>
                        <form className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="John Doe"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="you@example.com"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject / Query Type</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="Flight Booking Inquiry / Change Request"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Please provide details about your request or flight needs."
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition-colors"
                            >
                                <Send className='w-5 h-5' /> Send Message
                            </button>
                            <p className="text-sm text-gray-500 mt-4">
                                *For urgent booking assistance, please call us directly for the fastest response.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </motion.div>
        </>
    );
}