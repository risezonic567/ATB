import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

import { Plane, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const tours = [
  {
    id: 1,
    country: "Paris",
    image:
      "https://i.postimg.cc/7YygJTMR/Popular-Flight-Routes-Atlanta-ATL-Paris-CDG.jpg",
  },
  {
    id: 2,
    country: "Washington DC",
    image:
      "https://i.postimg.cc/rwVxQXHb/Popular-Flight-Routes-Boston-BOS-Washington-D-C-DCA-IAD.jpg",
  },
  {
    id: 3,
    country: "London",
    image:
      "https://i.postimg.cc/524LndrT/Popular-Flight-Routes-Dallas-DFW-London-LHR.jpg",
  },
  {
    id: 4,
    country: "Las Vegas",
    image:
      "https://i.postimg.cc/3x8mn5qP/Popular-Flight-Routes-Los-Angeles-LAX-Las-Vegas-LAS.jpg",
  },
  {
    id: 5,
    country: "Miami",
    image:
      "https://i.postimg.cc/bwyk3c54/Popular-Flight-Routes-New-York-JFK-LGA-Miami-MIA.jpg",
  },
];

export default function TourPackages() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="relative py-24 px-6 md:px-12 xl:px-24 bg-[#F8FAFC] text-[#48586D] selection:bg-[#C30000] selection:text-white overflow-hidden max-w-full mx-auto">
      
      {/* 60% Dominant Premium Background Canvas layer */}
      <div
        className="absolute inset-0 bg-cover bg-fixed opacity-10 bg-center mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/thumb_back/fh260/background/20230930/pngtree-a-blue-sky-above-clouds-with-clouds-image_13313410.jpg')",
        }}
      />

      {/* Elegant Architectural Kinetic Planes */}
      <motion.div
        initial={{ y: -10, rotate: 5 }}
        animate={{ y: 10, rotate: -2 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 5,
          ease: "easeInOut",
        }}
        className="absolute top-12 right-16 text-[#1A2E48] opacity-[0.06] pointer-events-none hidden lg:block"
      >
        <Plane size={75} strokeWidth={1} />
      </motion.div>

      <motion.div
        initial={{ x: -10, rotate: 35 }}
        animate={{ x: 10, rotate: 42 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 6,
          ease: "easeInOut",
        }}
        className="absolute bottom-16 left-12 text-[#C30000] opacity-[0.05] pointer-events-none hidden lg:block"
      >
        <Plane size={60} strokeWidth={1} />
      </motion.div>

      {/* Editorial Responsive Layout Header Block */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-16 max-w-7xl mx-auto"
      >
        <div className="max-w-2xl">
          <span className="text-[#C30000] text-xs font-black uppercase tracking-widest block mb-3">Featured Itineraries</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1A2E48] tracking-tight uppercase leading-tight">
            Top Flight Routes from the USA to Europe & Canada
          </h2>
          <div className="w-12 h-0.5 bg-[#C30000] mt-4 mb-2" />
          <p className="text-[#48586D] text-sm sm:text-base font-normal mt-3 leading-relaxed">
            Discover the most popular air routes at unbeatable prices. Experience world-class travel engineering designed for optimal efficiency.
          </p>
        </div>

        {/* 30% Corporate Blue Navigation Interface */}
        <div className="flex gap-3 mt-8 md:mt-0">
          <button
            ref={prevRef}
            className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 text-[#1A2E48] shadow-sm hover:border-[#1A2E48] hover:bg-[#1A2E48] hover:text-white active:scale-95 transition-all flex items-center justify-center group"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            ref={nextRef}
            className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 text-[#1A2E48] shadow-sm hover:border-[#1A2E48] hover:bg-[#1A2E48] hover:text-white active:scale-95 transition-all flex items-center justify-center group"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </motion.div>

      {/* Responsive Slider Frame Layout Architecture */}
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={32}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="!overflow-visible"
        >
          {tours.map((pkg) => (
            <SwiperSlide key={pkg.id} className="h-full">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(26,46,72,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(26,46,72,0.1)] hover:border-slate-300 group transition-all duration-300 flex flex-col h-full"
              >
                {/* Visual Image Framing */}
                <div className="overflow-hidden relative h-64 w-full">
                  <motion.img
                    src={pkg.image}
                    alt={pkg.country}
                    className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-700 ease-out"
                    initial={{ scale: 1.05 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B131F]/30 to-transparent pointer-events-none" />
                </div>

                {/* Typography Information Body */}
                <div className="p-6 flex-1 flex flex-col justify-between items-start bg-white">
                  <div className="w-full">
                    <div className="flex items-center justify-between gap-4 w-full">
                      <motion.p
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg font-bold text-[#1A2E48] tracking-tight group-hover:text-[#C30000] transition-colors duration-300"
                      >
                        {pkg.country}
                      </motion.p>
                      <div className="w-7 h-7 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                        <ArrowUpRight className="w-4 h-4 text-[#1A2E48]" />
                      </div>
                    </div>

                    <p className="text-[#48586D] text-sm mt-2.5 font-normal leading-relaxed line-clamp-3">
                      Experience premium air travel with exclusive routes and
                      unbeatable prices. Enjoy seamless airport transit and verified customer configurations.
                    </p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}