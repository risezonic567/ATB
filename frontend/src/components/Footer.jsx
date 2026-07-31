// import React from "react";
// import { FaFacebookF, FaInstagram, FaLinkedinIn , FaPinterest , FaYoutube } from "react-icons/fa";
// import { Phone, Mail, MapPin } from "lucide-react";

// export default function Footer() {
//     return (
//         <footer className="bg-slate-900 text-gray-300 pt-16 pb-8">
//             <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-10">
//                 {/* Logo & About */}
//                 <div>
//                     <img
//                         src="https://i.postimg.cc/902Y24L8/ATB-LOGO-white-png.png"
//                         alt="Logo"
//                         className="h-16 mb-4"
//                     />
//                     <p className="text-md leading-relaxed text-gray-400">
//                         Experience seamless flight booking with unbeatable deals and
//                         unmatched support. Your journey begins with just one click!
//                     </p>
//                     {/* Social Links */}
//                 <div className="mt-3">
//                     {/* <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3> */}
//                     <div className="flex gap-4">
                        
//                         <a
//                             href="https://www.facebook.com/airlinesticketbooking1/"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-all"
//                             aria-label="Facebook"
//                         >
//                             <FaFacebookF />
//                         </a>

//                         <a
//                             href="https://www.instagram.com/airlinesticketbooking/"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="w-10 h-10 rounded-full bg-pink-500 hover:bg-pink-600 flex items-center justify-center transition-all"
//                             aria-label="Instagram"
//                         >
//                             <FaInstagram />
//                         </a>

//                         <a
//                             href="https://www.linkedin.com/company/airlines-ticket-booking1/"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="w-10 h-10 rounded-full bg-blue-800 hover:bg-blue-900 flex items-center justify-center transition-all"
//                             aria-label="LinkedIn"
//                         >
//                             <FaLinkedinIn />
//                         </a>

//                         <a
//                             href="https://www.pinterest.com/airlinesticketbooking/"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="w-10 h-10 rounded-full bg-sky-500 hover:bg-sky-600 flex items-center justify-center transition-all"
//                             aria-label="Twitter"
//                         >
//                             <FaPinterest />
//                         </a>

//                         <a
//                             href="https://www.youtube.com/@airlinesticketbooking1"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition-all"
//                             aria-label="Twitter"
//                         >
//                             <FaYoutube />
//                         </a>

                       

//                     </div>
//                 </div>
//                 </div>

//                 {/* Quick Links */}
//                 <div>
//                     <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
//                     <ul className="space-y-2 text-md">
//                         <li>
//                             <a href="/" className="hover:text-white transition-all">
//                                 Home
//                             </a>
//                         </li>
//                         <li>
//                             <a href="/flight-booking-services" className="hover:text-white transition-all">
//                                 Flight Booking
//                             </a>
//                         </li>
//                         {/* <li>
//                             <a href="/tour-packages" className="hover:text-white transition-all">
//                                 Tour Packages
//                             </a>
//                         </li> */}
//                         <li>
//                             <a href="/privacy-policy" className="hover:text-white transition-all">
//                                 Privacy Policy
//                             </a>
//                         </li>
//                         <li>
//                             <a href="/terms-conditions" className="hover:text-white transition-all">
//                                 Terms and Conditions
//                             </a>
//                         </li>
//                         <li>
//                             <a href="/contact-us" className="hover:text-white transition-all">
//                                 Contact Us
//                             </a>
//                         </li>
//                         <li>
//                             <a href="/blog" className="hover:text-white transition-all">
//                                 Blog
//                             </a>
//                         </li>
                        
//                     </ul>
//                 </div>

//                 {/* Contact Info */}
//                 <div>
//                     <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
//                     <ul className="space-y-3 text-md">
//                         <li className="flex items-start gap-3">
//                             <Phone className="w-5 h-5 text-blue-400 mt-0.5" />
//                             +(866)307-5957
//                         </li>
//                         <li className="flex items-start gap-3">
//                             <Mail className="w-5 h-5 text-blue-400 mt-0.5" />
//                             Support@airlinesticketbooking.com
//                         </li>
                        
//                         <li className="flex items-start gap-3">
//                             <Mail className="w-5 h-5 text-blue-400 mt-0.5" />
//                             airlinesticketbooking4@gmail.com
//                         </li>
//                         <li className="flex items-start gap-3">
//                             <MapPin className="w-5 h-5 text-blue-400 mt-0.5" />
//                             Address: 17662 Irvine Blvd, Suite 9 Tustin, CA 92780
//                         </li>
//                     </ul>
//                 </div>

//                 {/* Social Links */}
//                 {/* <div>
//                     <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
//                     <div className="flex gap-4">
//                         <a
//                             href="#"
//                             className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-all"
//                         >
//                             <FaFacebookF />
//                         </a>
//                         <a
//                             href="#"
//                             className="w-10 h-10 rounded-full bg-pink-500 hover:bg-pink-600 flex items-center justify-center transition-all"
//                         >
//                             <FaInstagram />
//                         </a>
//                         <a
//                             href="#"
//                             className="w-10 h-10 rounded-full bg-sky-500 hover:bg-sky-600 flex items-center justify-center transition-all"
//                         >
//                             <FaTwitter />
//                         </a>
//                         <a
//                             href="#"
//                             className="w-10 h-10 rounded-full bg-blue-800 hover:bg-blue-900 flex items-center justify-center transition-all"
//                         >
//                             <FaLinkedinIn />
//                         </a>
//                     </div>
//                 </div> */}
//             </div>
            

//             {/* Bottom Bar */}
//             <div className="border-t border-gray-700 mt-10 pt-6 text-center text-md text-gray-500">
//                 © {new Date().getFullYear()} Airlines Ticket Booking. All rights reserved
//             </div>
//         </footer>
//     );
// }





import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterest, FaYoutube } from "react-icons/fa";
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
        
          <div className="space-y-4">
            <Link to="/">
              <img
                src="https://i.postimg.cc/902Y24L8/ATB-LOGO-white-png.png"
                alt="Airlines Ticket Booking Logo"
                className="h-14 mb-2 object-contain"
              />
            </Link>
            <p className="text-md leading-relaxed text-gray-400">
              Experience seamless flight booking with unbeatable deals and
              unmatched support. Your journey begins with just one click!
            </p>
            
            {/* Social Links */}
            <div className="pt-2">
              <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-3">Follow Us</h4>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://www.facebook.com/airlinesticketbooking1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={15} />
                </a>

                <a
                  href="https://www.instagram.com/airlinesticketbooking/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-pink-600 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200"
                  aria-label="Instagram"
                >
                  <FaInstagram size={16} />
                </a>

                <a
                  href="https://www.linkedin.com/company/airlines-ticket-booking1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-700 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={15} />
                </a>

                <a
                  href="https://www.pinterest.com/airlinesticketbooking/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-red-600 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200"
                  aria-label="Pinterest"
                >
                  <FaPinterest size={16} />
                </a>

                <a
                  href="https://www.youtube.com/@airlinesticketbooking1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-red-500 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200"
                  aria-label="YouTube"
                >
                  <FaYoutube size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white  font-semibold mb-4 border-b border-red-500/30 pb-2 inline-block" style={{fontSize:"20px"}}>
              Quick Links
            </h3>
            <ul className="space-y-2.5" style={{fontSize:"17px"}}>
              {[
                { name: "Home", path: "/" },
                { name: "Flight Booking", path: "/flight-booking-services" },
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Terms and Conditions", path: "/terms-conditions" },
                { name: "Contact Us", path: "/contact-us" },
                { name: "Blog", path: "/blog" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-red-400 flex items-center gap-1.5 transition-colors group"
                  >
                    <ChevronRight size={14} className="text-slate-600 group-hover:text-red-400 transition-colors" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-base font-semibold mb-4 border-b border-red-500/30 pb-2 inline-block"  style={{fontSize:"20px"}}>
              Our Services
            </h3>
            <ul className="space-y-2.5" style={{fontSize:"17px"}}>
              {[
                { name: "Visa Services", path: "/visa-service" },
                { name: "Travel Insurance", path: "/travel-insurance" },
                { name: "Car Rental Services", path: "/car-rental-services" },
                { name: "Hotel Booking Services", path: "/hotel-booking-services" },
                { name: "All Destinations", path: "/airline/all" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-red-400 flex items-center gap-1.5 transition-colors group"
                  >
                    <ChevronRight size={14} className="text-slate-600 group-hover:text-red-400 transition-colors" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-base font-semibold mb-4 border-b border-red-500/30 pb-2 inline-block">
              Contact Us
            </h3>
            <ul className="space-y-3.5" style={{fontSize:"15px"}}>
              <li className="flex items-start gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                <a href="tel:+18663075957" className="hover:text-red-400 transition">
                  +1 (866) 307-5957
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                <div className="space-y-1">
                  <a
                    href="mailto:Support@airlinesticketbooking.com"
                    className="block hover:text-red-400 transition break-all"
                  >
                    Support@airlinesticketbooking.com
                  </a>
                  <a
                    href="mailto:airlinesticketbooking4@gmail.com"
                    className="block hover:text-red-400 transition break-all"
                  >
                    airlinesticketbooking4@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                <span>17662 Irvine Blvd, Suite 9 Tustin, CA 92780</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-md text-gray-300 gap-4">
          <p>© {new Date().getFullYear()} Airlines Ticket Booking. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-gray-400 transition">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-gray-400 transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}