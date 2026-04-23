import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import AboutPage from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ContactPage from './pages/ContactPage'
import TourPackagesPage from './pages/TourPackagesPage'
import DestinationsPage from './pages/DestinationsPage'
import BlogPage from './pages/BlogPage'
import AllFlights from './components/AllFlights'
import TermsConditions from './pages/TermsConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Visa from './pages/Visa'
import CarRental from './pages/CarRental'
import Insurance from './pages/Insurance'
import HotelBooking from './pages/HotelBooking'
import SingleBlog from './pages/SingleBlog'
import FlightsPage from './pages/FlightsPage'
import FrontierAirlines from "./pages/airlines/FrontierAirlines"
import JetBlueAirlines from "./pages/airlines/JetBlueAirlines"
import SouthWest from "./pages/airlines/SouthWest"
import SpiritAirlines from "./pages/airlines/SpiritAirlines"
import CopaAirlines from "./pages/airlines/CopaAirlines"
import AeroMexicoAirlines from "./pages/airlines/AeroMexicoAirlines"
import VolarisAirlines from "./pages/airlines/VolarisAirlines"
import DeltaAirlines from "./pages/airlines/DeltaAirlines"
import UnitedAirlines from "./pages/airlines/UnitedAirlines"
import AlaskaAirlines from "./pages/airlines/AlaskaAirlines"
import AllegiantAirAirlines from "./pages/airlines/AllegiantAirAirlines"

export default function App() {
  const location = useLocation();
  const hideMainNavbar = location.pathname === "/flights";

  return (
    <div>
      {!hideMainNavbar && <Navbar />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/flight' element={<AllFlights />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path='/terms-conditions' element={<TermsConditions />}/>
        <Route path='/privacy-policy' element={<PrivacyPolicy />}/>
        <Route path="/tour-packages" element={<TourPackagesPage />} />
        <Route path="/flight-booking-services" element={<DestinationsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<SingleBlog />} />
        <Route path='/visa-service' element={<Visa />}/>
        <Route path='/car-rental-services' element={<CarRental />}/>
        <Route path='/travel-insurance' element={<Insurance />}/>
        <Route path='/hotel-booking-services' element={<HotelBooking />}/>
        <Route path="/flights" element={<FlightsPage />} />
        <Route path='/frontier-airlines' element={<FrontierAirlines/>}/>
        <Route path='/jet-blue-airlines' element={<JetBlueAirlines/>}/>
        <Route path='/south-west' element={<SouthWest/>}/>
        <Route path='/spirit-airlines' element={<SpiritAirlines/>}/>
        <Route path='/copa-airlines' element={<CopaAirlines/>}/>
        <Route path='/aero-mexico-airlines' element={<AeroMexicoAirlines/>}/>
        <Route path='/volaris-airlines' element={<VolarisAirlines/>}/>
        <Route path='/delta-airlines' element={<DeltaAirlines/>}/>
        <Route path='/united-airlines' element={<UnitedAirlines/>}/>
        <Route path='/alaska-airlines' element={<AlaskaAirlines/>}/>
        <Route path='/alaska-air-airlines' element={<AllegiantAirAirlines/>}/>
      </Routes>


      <Footer />
    </div>
  )
}
