import React, { useRef } from "react";
import Form from "./Form";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import imageOne from "/banner/ATBOne.jpg"
import imagetwo from "/banner/ATB-Two.jpg"
import imagethree from "/banner/ATB-Three.jpg"

export default function HeroSection() {
  const scopeRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Cinematic split entrance
    tl.fromTo(
      ".hero-bg-overlay",
      { opacity: 0 },
      { opacity: 1, duration: 1.4 }
    )
    .fromTo(
      ".form-wrapper-animate",
      { opacity: 0, x: -60, scale: 0.98 },
      { opacity: 1, x: 0, scale: 1, duration: 1.2 },
      "-=1.0"
    )
    .fromTo(
      ".content-card-animate",
      { opacity: 0, x: 60, scale: 0.98 },
      { opacity: 1, x: 0, scale: 1, duration: 1.2 },
      "-=1.2"
    )
    .fromTo(
      ".hero-title-text",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.6"
    )
    .fromTo(
      ".hero-body-text",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.6"
    )
    .fromTo(
      ".hero-cta-button",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.4"
    );

    gsap.fromTo(
      ".content-card-animate",
      { y: 0 },
      {
        y: -8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      }
    );
  }, { scope: scopeRef });

  // Premium Micro-interactions for interactive structures using brand colors
  const handleButtonEnter = (e) => {
    gsap.to(e.currentTarget, { scale: 1.03, backgroundColor: "#A30000", duration: 0.3, ease: "power2.out" });
    gsap.to(e.currentTarget.querySelector(".arrow-icon-move"), { x: 5, duration: 0.3, ease: "power2.out" });
  };

  const handleButtonLeave = (e) => {
    gsap.to(e.currentTarget, { scale: 1, backgroundColor: "#C30000", duration: 0.3, ease: "power2.out" });
    gsap.to(e.currentTarget.querySelector(".arrow-icon-move"), { x: 0, duration: 0.3, ease: "power2.out" });
  };

  return (
    <div
      ref={scopeRef}
      className="relative min-h-screen pt-32 pb-20 bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
      style={{
        // Swapped to a pristine, clean-blue passenger jet airliner backdrop for an authoritative travel look
        backgroundImage: `url(${imageOne})`
      }}
    >
      {/* Dynamic gradient overlay to ensure crisp white text legibility over light sky elements */}
      <div className="hero-bg-overlay absolute inset-0 bg-gradient-to-br  to-transparent pointer-events-none" />

      {/* Balanced 50/50 Grid Column Architecture */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        
        {/* Left Section: Form Wrapper Container */}
        <div className="form-wrapper-animate w-full order-2 lg:order-1 drop-shadow-2xl flex flex-col justify-center">
          <Form />
        </div>

        {/* Right Section: Perfectly Proportioned 1:1 Content Card Frame */}
        <div className="content-card-animate w-full rounded-3xl p-8 md:p-6 backdrop-blur-md border border-white/10 bg-[#1A2E48]/85 text-white shadow-2xl order-1 lg:order-2 flex flex-col justify-center">
          
          <h1 className="hero-title-text text-2xl sm:text-3xl xl:text-3xl font-black tracking-tight text-white mb-6 leading-[1.15]">
            Book Cheap Domestic <br className="hidden sm:inline"/>Flights USA
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#C30000] text-2xl sm:text-3xl xl:text-4xl font-extrabold">
              Cheapest Fares Every Day!
            </span>
          </h1>

          <div className="hero-body-text space-y-4 text-base sm:text-lg text-slate-200 font-light leading-relaxed">
            <p>
              Welcome to <span className="font-semibold text-white">AirlinesTicketBooking</span>. Your trusted domestic flights provider in the US, we can provide the best domestic flights and discount airline tickets within the country, from flights from Chicago to Las Vegas, cheap flights NYC to Miami to Dallas to Orlando, and even from Los Angeles to Las Vegas. We'll do all the comparisons for you.
            </p>
          </div>

          {/* 10% Crimson Action Call Element with explicit event bindings attached */}
          <Link to="/about" className="block mt-5">
            <button
              className="hero-cta-button w-full inline-flex items-center justify-between gap-6 bg-[#00786F] text-white pl-5 pr-6 py-3 rounded-2xl shadow-xl shadow-[#C30000]/20 transition-transform duration-300 font-bold text-left group transform-gpu"
            >
              <div>
                <span className="text-[10px] uppercase tracking-widest block font-medium opacity-80 mb-0.5 text-slate-200">
                  Speak to an airfare expert
                </span>
                <span className="text-xl md:text-2xl tracking-tight block font-black">
                  +1866 307-5957
                </span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <svg className="arrow-icon-move w-6 h-6 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </button>
          </Link>
        </div>

      </section>
    </div>
  );
}