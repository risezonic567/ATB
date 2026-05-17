import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

import { Plane } from "lucide-react";

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
        <section className="relative py-24 px-6 lg:px-20 max-w-full mx-auto">

            {/* 🌤️ Parallax Background */}
            <div
                className="absolute inset-0 bg-cover bg-fixed opacity-40"
                style={{
                    backgroundImage:
                        "url('https://png.pngtree.com/thumb_back/fh260/background/20230930/pngtree-a-blue-sky-above-clouds-with-clouds-image_13313410.jpg')",
                }}
            ></div>

            {/* ✈ Floating Airplane Icons */}
            <motion.div
                initial={{ y: -10 }}
                animate={{ y: 10 }}
                transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 3,
                }}
                className="absolute top-10 right-10 opacity-30"
            >
                <Plane size={60} className="text-blue-500" />
            </motion.div>

            <motion.div
                initial={{ x: -10 }}
                animate={{ x: 10 }}
                transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 4,
                }}
                className="absolute bottom-20 left-8 opacity-25 rotate-45"
            >
                <Plane size={50} className="text-indigo-500" />
            </motion.div>

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col lg:flex-row justify-between mb-12"
            >
                <div className="max-w-xl">
                    <h2 className="text-3xl font-bold text-[#1A2E48] z-40">
                        Top Flight Routes from the USA to Europe & Canada
                    </h2>
                    <p className="text-gray-600 mt-3">
                        Discover the most popular air routes at unbeatable prices.
                    </p>
                </div>

                <div className="ml-auto flex gap-3 mt-6 lg:mt-0">
                    <button
                        ref={prevRef}
                        className="w-10 h-10 rounded-full bg-white/60 backdrop-blur shadow-md hover:bg-white transition flex items-center justify-center"
                    >
                        ‹
                    </button>
                    <button
                        ref={nextRef}
                        className="w-10 h-10 rounded-full bg-white/60 backdrop-blur shadow-md hover:bg-white transition flex items-center justify-center"
                    >
                        ›
                    </button>
                </div>
            </motion.div>

            {/* Swiper Slider */}
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={28}
                loop={true}
                autoplay={{ delay: 4000 }}
                slidesPerView={1}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
            >
                {tours.map((pkg) => (
                    <SwiperSlide key={pkg.id}>
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white/70 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                        >
                            <motion.img
                                src={pkg.image}
                                alt={pkg.country}
                                className="w-full h-60 object-cover"
                                initial={{ scale: 1.1 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 1 }}
                            />

                            <div className="p-6">
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-lg font-semibold text-[#1A2E48]"
                                >
                                    {pkg.country}
                                </motion.p>

                                <p className="text-gray-500 text-sm mt-3 line-clamp-3">
                                    Experience premium air travel with exclusive routes and
                                    unbeatable prices.
                                </p>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
