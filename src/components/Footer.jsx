import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-gray-300 pt-16 pb-8">
            <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Logo & About */}
                <div>
                    <img
                        src="https://i.postimg.cc/902Y24L8/ATB-LOGO-white-png.png"
                        alt="Logo"
                        className="h-16 mb-4"
                    />
                    <p className="text-sm leading-relaxed text-gray-400">
                        Experience seamless flight booking with unbeatable deals and
                        unmatched support. Your journey begins with just one click!
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="/" className="hover:text-white transition-all">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/destinations" className="hover:text-white transition-all">
                                Destinations
                            </a>
                        </li>
                        <li>
                            <a href="/packages" className="hover:text-white transition-all">
                                Tour Packages
                            </a>
                        </li>
                        <li>
                            <a href="/privacy-policy" className="hover:text-white transition-all">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="/terms&conditions" className="hover:text-white transition-all">
                                Terms and Conditions
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-white transition-all">
                                Contact Us
                            </a>
                        </li>
                        
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-3">
                            <Phone className="w-5 h-5 text-blue-400 mt-0.5" />
                            +1-844-821-5950
                        </li>
                        <li className="flex items-start gap-3">
                            <Mail className="w-5 h-5 text-blue-400 mt-0.5" />
                            Support@airlinesticketbooking.com
                        </li>
                        <li className="flex items-start gap-3">
                            <Mail className="w-5 h-5 text-blue-400 mt-0.5" />
                            airlinesticketbooking4@gmail.com
                        </li>
                        <li className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-blue-400 mt-0.5" />
                            Address: 17662 Irvine Blvd, Suite 9 Tustin, CA 92780
                        </li>
                    </ul>
                </div>

                {/* Social Links */}
                {/* <div>
                    <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="flex gap-4">
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-all"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-pink-500 hover:bg-pink-600 flex items-center justify-center transition-all"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-sky-500 hover:bg-sky-600 flex items-center justify-center transition-all"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-blue-800 hover:bg-blue-900 flex items-center justify-center transition-all"
                        >
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div> */}
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Airlines Ticket Booking. All rights reserved
            </div>
        </footer>
    );
}
