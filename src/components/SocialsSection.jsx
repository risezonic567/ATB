import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SocialsSection() {
    const socials = [
        {
            name: "Facebook",
            icon: <FaFacebookF className="w-5 h-5 text-[#1877F2]" />,
            title: " Top Airlines & Routes",
            img: "https://i.postimg.cc/pXMhrbYn/Connect-with-us-in-our-Socials-y-all-2.jpg",
            text: "Fly confidently with leading carriers and enjoy access to major domestic and international routes.Whether it’s a quick getaway or a long adventure, we make every flight smooth and convenient.",
        },
        {
            name: "Instagram",
            icon: <FaInstagram className="w-5 h-5 text-[#E4405F]" />,
            title: "Fast & Secure Booking",
            img: "https://i.postimg.cc/ryrRqFW6/Connect-with-us-in-our-Socials-y-all-3.jpg",
            text: "Book your flight in just a few clicks with our user-friendly platform. Your payments are safe, your data is protected, and your confirmation arrives instantly — no waiting, no hassle.",
        },
        {
            name: "Twitter",
            icon: <FaTwitter className="w-5 h-5 text-[#1DA1F2]" />,
            title: "24/7 Travel Support",
            img: "https://i.postimg.cc/8PgJcQBv/Connect-with-us-in-our-Socials-y-all-4.jpg",
            text: "Our expert support team is available around the clock to assist you before, during, and after your trip. From booking guidance to travel updates, we’re here whenever you need us.",
        },
        // {
        //     name: "Pinterest",
        //     icon: <FaPinterestP className="w-5 h-5 text-[#BD081C]" />,
        //     img: "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?auto=format&fit=crop&w=800&q=80",
        //     text: "Stay in the loop with the latest news and updates! From exciting promotions to insider tips on travel destinations, our company pins you about airlines in every step of the way.",
        // },
    ];

    return (
        <section className="relative py-20 bg-white overflow-hidden">
            {/* Decorative Pattern */}
            <div className="absolute left-0 top-0 w-40 h-40 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/dots.png')] opacity-20"></div>

            <div className="relative z-10 container mx-auto px-6 lg:px-16 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Why Travelers Choose Airlines Ticket Booking

                </h2>
                <p className="text-gray-600 mb-12">
                    See what makes us the preferred choice for thousands of U.S. flyers traveling domestically and
                    Abroad.
                </p>

                {/* Social Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {socials.map((social, i) => (
                        <div
                            key={i}
                            className="relative bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-all overflow-hidden"
                        >
                            {/* Image */}
                            <div className="relative w-full h-48">
                                <img
                                    src={social.img}
                                    alt={social.name}
                                    className="object-cover w-full h-full rounded-t-3xl"
                                />
                                {/* Floating Icon */}
                                {/* <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white border-2 border-gray-200 rounded-full p-3 shadow-md">
                                    {social.icon}
                                </div> */}
                            </div>

                            {/* Text Content */}
                            <div className="pt-10 pb-6 px-6 text-left">
                                <h2 className="text-gray-700 text-lg leading-relaxed mb-2">
                                    {social.title}
                                </h2>
                                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                                    {social.text}
                                </p>
                                {/* <button className="font-semibold text-gray-800 flex items-center gap-2 hover:gap-3 transition-all">
                                    <span className="italic">View More</span>
                                    <span className="text-gray-500 text-sm">→</span>
                                </button> */}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Follow Button */}
                {/* <a href="tel:+8663075957">  <button className="bg-teal-700 text-white px-8 py-3 rounded-md font-semibold shadow hover:bg-teal-800 transition-all">
                    Call Us
                </button></a> */}
                <Link to="/contact-us">
                    <button className="bg-teal-700 hover:bg-teal-800 px-4 py-2 text-white  rounded-xl hover:transition-all hover:scale-105 font-medium">Call Us</button>
                </Link>
            </div>
        </section>
    );
}
