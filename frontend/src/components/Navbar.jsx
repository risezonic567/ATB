// import React, { useState, useEffect, useRef } from "react"
// import { Phone, Menu, X, ChevronDown } from "lucide-react"
// import { Link } from "react-router-dom"

// let navLinks = [
//   { name: "Home", href: "/" },
//   { name: "Flight Booking", href: "/flight-booking-services" },
//   { name: "Hotel Booking", href: "/hotel-booking-services" },
//   { name: "About Us", href: "/about" },
//   { name: "Our Services", href: "#", hasDropdown: true },
//   { name: "Airline", href: "/airline/all", hasDropdown: true },
// ]

// let servicesLinks = [
//   { name: "Visa Services", href: "/visa-service" },
//   { name: "Travel Insurance", href: "/travel-insurance" },
//   { name: "Car Rental", href: "/car-rental-services" },
// ]

// let airlines = [
//   { name: "Frontier Airlines", slug: "frontier" },
//   { name: "Jet Blue Airlines", slug: "jet-blue" },
//   { name: "South West Airline", slug: "south-west" },
//   { name: "Spirit Airlines", slug: "spirit" },
//   { name: "Copa Airlines", slug: "copa" },
//   { name: "Aero Mexico Airlines", slug: "aero-mexico" },
//   { name: "Volaris Airlines", slug: "volaris" },
//   { name: "Delta Airlines", slug: "delta" },
//   { name: "United Airlines", slug: "united" },
//   { name: "Alaska Airlines", slug: "alaska" },
//   { name: "Allegiant Airlines", slug: "allegiant" },
// ]

// export default function Navbar() {
//   let [menuOpen, setMenuOpen] = useState(false)
//   let [langOpen, setLangOpen] = useState(false)
//   let [currentLang, setCurrentLang] = useState("EN")


//   let [mobileServicesOpen, setMobileServicesOpen] = useState(false)
//   let [mobileAirlinesOpen, setMobileAirlinesOpen] = useState(false)

//   let langRef = useRef(null)

//   let languages = [
//     { name: "English", code: "en", label: "EN" },
//     { name: "Spanish", code: "es", label: "ES" },
//   ]

//   let handleLangChange = (langCode) => {
//     document.cookie = `googtrans=/en/${langCode} path=/`
//     document.cookie = `googtrans=/en/${langCode} domain=.${window.location.hostname} path=/`
//     window.location.reload()
//   }

//   useEffect(() => {
//     let addScript = document.createElement("script")
//     addScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
//     addScript.async = true
//     document.body.appendChild(addScript)

//     window.googleTranslateElementInit = () => {
//       new window.google.translate.TranslateElement(
//         { pageLanguage: "en", includedLanguages: "en,es", autoDisplay: false },
//         "google_translate_element"
//       )
//     }

//     let match = document.cookie.match(/googtrans=\/en\/(\w+)/)
//     if (match) {
//       let lang = languages.find((l) => l.code === match[1])
//       if (lang) setCurrentLang(lang.label)
//     }

//     let handleClickOutside = (e) => {
//       if (langRef.current && !langRef.current.contains(e.target)) {
//         setLangOpen(false)
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside)
//     return () => document.removeEventListener("mousedown", handleClickOutside)
//   }, [])

//   return (
//     <>
//       <header className="sticky top-0 z-50 bg-white shadow-md border-b">
//         <div id="google_translate_element" style={{ visibility: "hidden", position: "absolute", zIndex: -1 }}></div>

//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex items-center justify-between py-3">

//             <Link to="/" className="flex items-center gap-2 shrink-0">
//               <img
//                 className="h-10 sm:h-11 md:h-12 object-contain"
//                 src="https://i.postimg.cc/TP6w89Pc/ATB-LOGO-PNG.png"
//                 alt="Logo"
//               />
//             </Link>


//             <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
//               {navLinks.map((link) => {
//                 if (link.name === "Our Services") {
//                   return (
//                     <div key={link.name} className="relative group py-2">
//                       <button className="flex items-center gap-1 text-gray-700 font-medium hover:text-red-600">
//                         Our Services <ChevronDown size={14} />
//                       </button>

//                       <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-xl w-40 border overflow-hidden z-50">
//                         {servicesLinks.map((service) => (
//                           <Link
//                             key={service.name}
//                             to={service.href}
//                             className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600"
//                           >
//                             {service.name}
//                           </Link>
//                         ))}
//                       </div>
//                     </div>
//                   )
//                 }

//                 if (link.name === "Airline") {
//                   return (
//                     <div key={link.name} className="relative group py-2">
//                       <Link to="/airline/all" className="flex items-center gap-1 text-gray-700 font-medium hover:text-red-600">
//                         Airline <ChevronDown size={14} />
//                       </Link>

//                       <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-xl w-56 border overflow-y-auto max-h-80 z-50">
//                         {airlines.map((airline) => (
//                           <Link
//                             key={airline.slug}
//                             to={`/airline/${airline.slug}`}
//                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600"
//                           >
//                             {airline.name}
//                           </Link>
//                         ))}
//                       </div>
//                     </div>
//                   )
//                 }

//                 return (
//                   <Link
//                     key={link.name}
//                     to={link.href}
//                     className="text-gray-700 font-medium hover:text-red-600 whitespace-nowrap"
//                   >
//                     {link.name}
//                   </Link>
//                 )
//               })}
//             </nav>


//             <div className="flex items-center gap-4">

//               <div className="relative" ref={langRef}>
//                 <button onClick={() => setLangOpen(!langOpen)} className="flex items-center gap-1 text-sm font-semibold text-gray-700">
//                   {currentLang} <ChevronDown size={14} />
//                 </button>
//                 {langOpen && (
//                   <div className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg z-50">
//                     {languages.map((lang) => (
//                       <div key={lang.code} onClick={() => handleLangChange(lang.code)} className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm">
//                         {lang.name}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>


//               <Link to="tel:+1 866-307-5957" className="hidden md:flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition">
//                 <Phone size={18} />
//                 <span className="text-sm font-semibold">+1 866-307-5957</span>
//               </Link>

//               <button className="lg:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
//                 {menuOpen ? <X size={28} /> : <Menu size={28} />}
//               </button>
//             </div>
//           </div>
//         </div> 


//         <div className={`lg:hidden bg-white border-t transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? "max-h-[85vh] py-4 overflow-y-auto" : "max-h-0"}`}>
//           <div className="px-4 space-y-1">
//             {navLinks.map((link) => {
//               if (link.name === "Our Services") {
//                 return (
//                   <div key={link.name} className="border-b border-gray-50">
//                     <button 
//                       onClick={() => setMobileServicesOpen(!mobileServicesOpen)} 
//                       className="flex items-center justify-between w-full py-3 text-base font-medium text-gray-700 hover:text-red-600"
//                     >
//                       <span>Our Services</span>
//                       <ChevronDown size={16} className={`transform transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
//                     </button>
//                     {mobileServicesOpen && (
//                       <div className="pl-4 pb-2 bg-gray-50 rounded-lg space-y-1">
//                         {servicesLinks.map((service) => (
//                           <Link key={service.name} to={service.href} onClick={() => setMenuOpen(false)} className="block py-2 text-sm text-gray-600 hover:text-red-600">
//                             {service.name}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 )
//               }

//               if (link.name === "Airline") {
//                 return (
//                   <div key={link.name} className="border-b border-gray-50">
//                     <button 
//                       onClick={() => setMobileAirlinesOpen(!mobileAirlinesOpen)} 
//                       className="flex items-center justify-between w-full py-3 text-base font-medium text-gray-700 hover:text-red-600"
//                     >
//                       <span>Airlines</span>
//                       <ChevronDown size={16} className={`transform transition-transform ${mobileAirlinesOpen ? "rotate-180" : ""}`} />
//                     </button>
//                     {mobileAirlinesOpen && (
//                       <div className="pl-4 pb-2 bg-gray-50 rounded-lg max-h-60 overflow-y-auto space-y-1">
//                         <Link to="/airline/all" onClick={() => setMenuOpen(false)} className="block py-2 text-sm font-semibold text-red-600">
//                           All Airlines
//                         </Link>
//                         {airlines.map((airline) => (
//                           <Link key={airline.slug} to={`/airline/${airline.slug}`} onClick={() => setMenuOpen(false)} className="block py-2 text-sm text-gray-600 hover:text-red-600">
//                             {airline.name}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 )
//               }

//               return (
//                 <Link key={link.name} to={link.href} onClick={() => setMenuOpen(false)} className="block py-3 text-base font-medium text-gray-700 border-b border-gray-50 last:border-0 hover:text-red-600">
//                   {link.name}
//                 </Link>
//               )
//             })}

//             <Link to="tel:+1 866-307-5957" className="flex items-center gap-2 text-red-600 py-3 font-bold">
//               <Phone size={18} /> Call Us: +1 866-307-5957
//             </Link>
//           </div>
//         </div>
//       </header>
//     </>
//   )
// }




// import React, { useState, useEffect, useRef } from "react"
// import { Phone, Menu, X, ChevronDown, Mail, Search } from "lucide-react"
// import { Link } from "react-router-dom"

// let navLinks = [
//   { name: "Home", href: "/" },
//   { name: "Flights", href: "/flight-booking-services" },
//   { name: "Deals", href: "/hotel-booking-services" },
//   { name: "Destinations", href: "/airline/all", hasDropdown: true },
//   { name: "About", href: "/about" },
//   { name: "Contact", href: "#" },
// ]

// let servicesLinks = [
//   { name: "Visa Services", href: "/visa-service" },
//   { name: "Travel Insurance", href: "/travel-insurance" },
//   { name: "Car Rental", href: "/car-rental-services" },
// ]

// let airlines = [
//   { name: "Frontier Airlines", slug: "frontier" },
//   { name: "Jet Blue Airlines", slug: "jet-blue" },
//   { name: "South West Airline", slug: "south-west" },
//   { name: "Spirit Airlines", slug: "spirit" },
//   { name: "Copa Airlines", slug: "copa" },
//   { name: "Aero Mexico Airlines", slug: "aero-mexico" },
//   { name: "Volaris Airlines", slug: "volaris" },
//   { name: "Delta Airlines", slug: "delta" },
//   { name: "United Airlines", slug: "united" },
//   { name: "Alaska Airlines", slug: "alaska" },
//   { name: "Allegiant Airlines", slug: "allegiant" },
// ]

// export default function Navbar() {
//   let [menuOpen, setMenuOpen] = useState(false)
//   let [langOpen, setLangOpen] = useState(false)
//   let [currentLang, setCurrentLang] = useState("EN")
//   let [searchOpen, setSearchOpen] = useState(false)

//   let [mobileDestinationsOpen, setMobileDestinationsOpen] = useState(false)

//   let langRef = useRef(null)

//   let languages = [
//     { name: "English", code: "en", label: "EN" },
//     { name: "Spanish", code: "es", label: "ES" },
//   ]

//   let handleLangChange = (langCode) => {
//     document.cookie = `googtrans=/en/${langCode} path=/`
//     document.cookie = `googtrans=/en/${langCode} domain=.${window.location.hostname} path=/`
//     window.location.reload()
//   }

//   useEffect(() => {
//     let addScript = document.createElement("script")
//     addScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
//     addScript.async = true
//     document.body.appendChild(addScript)

//     window.googleTranslateElementInit = () => {
//       new window.google.translate.TranslateElement(
//         { pageLanguage: "en", includedLanguages: "en,es", autoDisplay: false },
//         "google_translate_element"
//       )
//     }

//     let match = document.cookie.match(/googtrans=\/en\/(\w+)/)
//     if (match) {
//       let lang = languages.find((l) => l.code === match[1])
//       if (lang) setCurrentLang(lang.label)
//     }

//     let handleClickOutside = (e) => {
//       if (langRef.current && !langRef.current.contains(e.target)) {
//         setLangOpen(false)
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside)
//     return () => document.removeEventListener("mousedown", handleClickOutside)
//   }, [])

//   return (
//     <header className="sticky top-0 z-50 bg-white shadow-md border-b">
//       <div id="google_translate_element" style={{ visibility: "hidden", position: "absolute", zIndex: -1 }}></div>


//       <div className="bg-gray-100 border-b  text-xs sm:text-sm text-gray-600 py-2.5 px-4">
//         <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
//           <div className="flex items-center gap-4 sm:gap-6">
//             <a href="tel:+(866)307-5957" className="flex items-center gap-1.5 hover:text-red-600 transition">
//               <Phone size={14} className="text-red-600" />
//               <span>+1 (866) 307-5957</span>
//             </a>
//             <a href="mailto:Support@airlinesticketbooking.com" className="flex items-center gap-1.5 hover:text-red-600 transition">
//               <Mail size={14} className="text-red-600" />
//               <span>Support@airlinesticketbooking.com</span>
//             </a>
//           </div>


//           <div className="relative" ref={langRef}>
//             <button
//               onClick={() => setLangOpen(!langOpen)}
//               className="flex items-center gap-1 font-medium hover:text-red-600"
//             >
//               {currentLang} <ChevronDown size={12} />
//             </button>
//             {langOpen && (
//               <div className="absolute right-0 mt-1 w-28 bg-white border rounded shadow-lg z-50 py-1">
//                 {languages.map((lang) => (
//                   <div
//                     key={lang.code}
//                     onClick={() => handleLangChange(lang.code)}
//                     className="px-3 py-1.5 cursor-pointer hover:bg-red-50 text-xs"
//                   >
//                     {lang.name}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex items-center justify-between py-3">


//           <Link to="/" className="flex items-center gap-2 shrink-0">
//             <img
//               className="h-10 sm:h-12 object-contain"
//               src="https://i.postimg.cc/TP6w89Pc/ATB-LOGO-PNG.png"
//               alt="Logo"
//             />
//           </Link>

//           <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
//             {navLinks.map((link) => {
//               if (link.name === "Destinations") {
//                 return (
//                   <div key={link.name} className="relative group py-2">
//                     <Link to="/airline/all" className="flex items-center gap-1 font-medium text-gray-700 hover:text-red-600">
//                       Destinations <ChevronDown size={14} />
//                     </Link>

//                     <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-lg w-56 border overflow-y-auto max-h-80 z-50 py-2">
//                       {airlines.map((airline) => (
//                         <Link
//                           key={airline.slug}
//                           to={`/airline/${airline.slug}`}
//                           className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600"
//                         >
//                           {airline.name}
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 )
//               }

//               return (
//                 <>
//                   <Link
//                     key={link.name}
//                     to={link.href}
//                     className="font-medium text-gray-700 hover:text-red-600 whitespace-nowrap"
//                   >
//                     {link.name}
//                   </Link>
//                 </>
//               )
//             })}
//           </nav>

//           <div className="flex items-center gap-3 sm:gap-4">

//             <a
//               href="tel:+18663075957"
//               className="hidden sm:flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded-md transition shadow-sm"
//             >
//               <Phone size={16} />
//               <span>Call Now</span>
//             </a>

//             <button
//               onClick={() => setSearchOpen(!searchOpen)}
//               aria-label="Search"
//               className="p-2 text-gray-600 hover:text-red-600 rounded-full hover:bg-gray-100"
//             >
//               <Search size={20} />
//             </button>

//             <button
//               className="lg:hidden text-gray-700 p-1"
//               onClick={() => setMenuOpen(!menuOpen)}
//             >
//               {menuOpen ? <X size={26} /> : <Menu size={26} />}
//             </button>
//           </div>
//         </div>

//         {searchOpen && (
//           <div className="pb-3 pt-1 border-t flex items-center gap-2">
//             <input
//               type="text"
//               placeholder="Search flights, destinations..."
//               className="w-full px-3 py-1.5 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
//             />
//             <button className="bg-red-600 text-white text-xs px-3 py-2 rounded-md hover:bg-red-700">
//               Search
//             </button>
//           </div>
//         )}
//       </div>

//       <div className={`lg:hidden bg-white border-t transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? "max-h-[85vh] py-4 overflow-y-auto" : "max-h-0"}`}>
//         <div className="px-4 space-y-1">
//           {navLinks.map((link) => {
//             if (link.name === "Destinations") {
//               return (
//                 <div key={link.name} className="border-b border-gray-100">
//                   <button
//                     onClick={() => setMobileDestinationsOpen(!mobileDestinationsOpen)}
//                     className="flex items-center justify-between w-full py-3 text-base font-medium text-gray-700 hover:text-red-600"
//                   >
//                     <span>Destinations</span>
//                     <ChevronDown size={16} className={`transform transition-transform ${mobileDestinationsOpen ? "rotate-180" : ""}`} />
//                   </button>
//                   {mobileDestinationsOpen && (
//                     <div className="pl-4 pb-2 bg-gray-50 rounded-lg max-h-60 overflow-y-auto space-y-1">
//                       <Link to="/airline/all" onClick={() => setMenuOpen(false)} className="block py-2 text-sm font-semibold text-red-600">
//                         All Destinations
//                       </Link>
//                       {airlines.map((airline) => (
//                         <Link key={airline.slug} to={`/airline/${airline.slug}`} onClick={() => setMenuOpen(false)} className="block py-2 text-sm text-gray-600 hover:text-red-600">
//                           {airline.name}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               )
//             }

//             return (
//               <Link key={link.name} to={link.href} onClick={() => setMenuOpen(false)} className="block py-3 text-base font-medium text-gray-700 border-b border-gray-100 hover:text-red-600">
//                 {link.name}
//               </Link>
//             )
//           })}

//           <div className="pt-2">
//             <a href="tel:+18663075957" className="flex items-center justify-center gap-2 bg-red-600 text-white w-full py-2.5 rounded-md font-semibold">
//               <Phone size={18} /> Call Now: +1 (866) 307-5957
//             </a>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }



import React, { useState, useEffect, useRef } from "react"
import { Phone, Menu, X, ChevronDown, Mail, Search, Globe, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

let navLinks = [
  { name: "Home", href: "/" },
  { name: "Flights", href: "/flight-booking-services" },
  { name: "Deals", href: "/hotel-booking-services" },
  { name: "Destinations", href: "/airline/all", type: "destinations" },
  { name: "Services", href: "#", type: "services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

let servicesLinks = [
  { name: "Visa Services", href: "/visa-service", },
  { name: "Travel Insurance", href: "/travel-insurance", },
  { name: "Car Rental", href: "/car-rental-services", },
]

let airlines = [
  { name: "Frontier Airlines", slug: "frontier" },
  { name: "Jet Blue Airlines", slug: "jet-blue" },
  { name: "South West Airline", slug: "south-west" },
  { name: "Spirit Airlines", slug: "spirit" },
  { name: "Copa Airlines", slug: "copa" },
  { name: "Aero Mexico Airlines", slug: "aero-mexico" },
  { name: "Volaris Airlines", slug: "volaris" },
  { name: "Delta Airlines", slug: "delta" },
  { name: "United Airlines", slug: "united" },
  { name: "Alaska Airlines", slug: "alaska" },
  { name: "Allegiant Airlines", slug: "allegiant" },
]

export default function Navbar() {
  let [menuOpen, setMenuOpen] = useState(false)
  let [langOpen, setLangOpen] = useState(false)
  let [currentLang, setCurrentLang] = useState("EN")
  let [searchOpen, setSearchOpen] = useState(false)

  let [mobileDestinationsOpen, setMobileDestinationsOpen] = useState(false)
  let [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  let langRef = useRef(null)

  let languages = [
    { name: "English", code: "en", label: "EN" },
    { name: "Spanish", code: "es", label: "ES" },
  ]

  let handleLangChange = (langCode) => {
    document.cookie = `googtrans=/en/${langCode} path=/`
    document.cookie = `googtrans=/en/${langCode} domain=.${window.location.hostname} path=/`
    window.location.reload()
  }

  useEffect(() => {
    let addScript = document.createElement("script")
    addScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    addScript.async = true
    document.body.appendChild(addScript)

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en", includedLanguages: "en,es", autoDisplay: false },
        "google_translate_element"
      )
    }

    let match = document.cookie.match(/googtrans=\/en\/(\w+)/)
    if (match) {
      let lang = languages.find((l) => l.code === match[1])
      if (lang) setCurrentLang(lang.label)
    }

    let handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div id="google_translate_element" style={{ visibility: "hidden", position: "absolute", zIndex: -1 }}></div>

      {/* Top Bar */}
      <div className="bg-slate-900 text-xs sm:text-sm text-slate-300 py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="tel:+18663075957" className="flex items-center gap-1.5 hover:text-red-400 transition">
              <Phone size={14} className="text-red-400" />
              <span>+1 (866) 307-5957</span>
            </a>
            <a href="mailto:Support@airlinesticketbooking.com" className="hidden sm:flex items-center gap-1.5 hover:text-red-400 transition">
              <Mail size={14} className="text-red-400" />
              <span>Support@airlinesticketbooking.com</span>
            </a>
          </div>

          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 font-medium hover:text-red-400 transition py-0.5 px-2 rounded bg-slate-800"
            >
              <Globe size={13} className="text-red-400" />
              <span>{currentLang}</span>
              <ChevronDown size={12} />
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-1 w-28 bg-white text-gray-800 border border-gray-100 rounded-md shadow-lg z-50 py-1">
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    onClick={() => {
                      handleLangChange(lang.code)
                      setLangOpen(false)
                    }}
                    className="px-3 py-3 cursor-pointer hover:bg-red-50 hover:text-red-600 text-xs font-medium transition"
                  >
                    {lang.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-3">

          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              className="h-10 sm:h-14 object-contain"
              src="https://i.postimg.cc/TP6w89Pc/ATB-LOGO-PNG.png"
              alt="Logo"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              if (link.type === "destinations") {
                return (
                  <div key={link.name} className="relative group py-2">
                    <Link to={link.href} className="flex items-center gap-1 font-semibold text-gray-700 hover:text-red-600 transition">
                      {link.name} <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                    </Link>

                    <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-xl rounded-xl w-60 border no-scrollbar border-gray-100 overflow-y-auto max-h-80 z-50 py-2 transition-all">
                      <div className="px-3 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">Airlines</div>
                      {airlines.map((airline) => (
                        <Link
                          key={airline.slug}
                          to={`/airline/${airline.slug}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
                        >
                          <div className="text-sm font-semibold text-gray-800 group-hover/item:text-red-600 flex items-center justify-between">
                            {airline.name}
                            <ChevronRight size={14} className="opacity-0 group-hover/item:opacity-100 transition-opacity" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              }

              if (link.type === "services") {
                return (
                  <div key={link.name} className="relative group py-2">
                    <button className="flex items-center gap-1 font-semibold text-gray-700 hover:text-red-600 transition">
                      {link.name} <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                    </button>

                    <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-xl rounded-xl w-64 border border-gray-100 z-50 p-2 transition-all">
                      {servicesLinks.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="block p-2.5 rounded-lg hover:bg-red-50 transition group/item"
                        >
                          <div className="text-sm font-semibold text-gray-800 group-hover/item:text-red-600 flex items-center justify-between">
                            {service.name}
                            <ChevronRight size={14} className="opacity-0 group-hover/item:opacity-100 transition-opacity" />
                          </div>
                          {/* <div className="text-xs text-gray-500 mt-0.5">{service.desc}</div> */}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className="font-semibold text-gray-700 hover:text-red-600 whitespace-nowrap transition"
                >
                  {link.name}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* <button
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
              className="p-2 text-gray-600 hover:text-red-600 rounded-full hover:bg-gray-100 transition"
            >
              <Search size={20} />
            </button> */}

            <a
              href="tel:+18663075957"
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition shadow-md shadow-red-100 hover:shadow-red-200"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </a>

            <button
              className="lg:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search Bar Popup */}
        {searchOpen && (
          <div className="py-3 border-t border-gray-100 flex items-center gap-2 animate-fadeIn">
            <div className="relative w-full">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search flights, destinations, visa services..."
                className="w-full pl-9 pr-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <button className="bg-red-600 text-white text-md font-medium px-4 py-2 rounded-lg hover:bg-red-700 transition shrink-0">
              Search
            </button>
          </div>
        )}
      </div>

      <div className={`lg:hidden bg-white border-t transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? "max-h-[85vh] py-4 overflow-y-auto" : "max-h-0 py-0"}`}>
        <div className="px-4 space-y-1">
          {navLinks.map((link) => {
            if (link.type === "destinations") {
              return (
                <div key={link.name} className="border-b border-gray-100 py-1">
                  <button
                    onClick={() => setMobileDestinationsOpen(!mobileDestinationsOpen)}
                    className="flex items-center justify-between w-full py-2.5 text-base font-semibold text-gray-800 hover:text-red-600"
                  >
                    <span>Destinations</span>
                    <ChevronDown size={16} className={`transform transition-transform ${mobileDestinationsOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobileDestinationsOpen && (
                    <div className="pl-3 py-2 bg-gray-50 rounded-lg my-1 max-h-60 overflow-y-auto space-y-1">
                      <Link to="/airline/all" onClick={() => setMenuOpen(false)} className="block py-1.5 px-2 text-sm font-semibold text-red-600">
                        All Destinations
                      </Link>
                      {airlines.map((airline) => (
                        <Link key={airline.slug} to={`/airline/${airline.slug}`} onClick={() => setMenuOpen(false)} className="block py-1.5 px-2 text-sm text-gray-600 hover:text-red-600">
                          {airline.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            }

            if (link.type === "services") {
              return (
                <div key={link.name} className="border-b border-gray-100 py-1">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center justify-between w-full py-2.5 text-base font-semibold text-gray-800 hover:text-red-600"
                  >
                    <span>Services</span>
                    <ChevronDown size={16} className={`transform transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-3 py-2 bg-gray-50 rounded-lg my-1 space-y-1">
                      {servicesLinks.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          onClick={() => setMenuOpen(false)}
                          className="block py-2 px-2"
                        >
                          <div className="text-sm font-medium text-gray-800">{service.name}</div>
                          <div className="text-xs text-gray-500">{service.desc}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            }

            return (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-base font-semibold text-gray-800 border-b border-gray-100 hover:text-red-600 transition"
              >
                {link.name}
              </Link>
            )
          })}

          <div className="pt-4">
            <a
              href="tel:+18663075957"
              className="flex items-center justify-center gap-2 bg-red-600 text-white w-full py-3 rounded-lg font-semibold shadow-md shadow-red-100"
            >
              <Phone size={18} /> Call Now: +1 (866) 307-5957
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}