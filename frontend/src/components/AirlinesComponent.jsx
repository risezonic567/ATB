import React, { useRef } from "react";
import Form from "./Form";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Safely register ScrollTrigger for client-side environments
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AirlinesDesignSystemLanding() {
  const mainScopeRef = useRef(null);

  useGSAP(() => {
    // 1. Hero Split Entrance Timeline
    const heroTl = gsap.timeline({ defaults: { ease: "power4.out" } });
    
    heroTl.fromTo(".hero-bg-dimmer", { opacity: 0 }, { opacity: 1, duration: 1.4 })
      .fromTo(".hero-panel-left", { opacity: 0, x: -70, scale: 0.97 }, { opacity: 1, x: 0, scale: 1, duration: 1.2 }, "-=1.0")
      .fromTo(".hero-panel-right", { opacity: 0, x: 70, scale: 0.97 }, { opacity: 1, x: 0, scale: 1, duration: 1.2 }, "-=1.2")
      .fromTo(".hero-element-reveal", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 }, "-=0.6");

    // Ambient floating frame motion loop for right side hero panel
    gsap.fromTo(".hero-panel-right", { y: 0 }, { y: -8, duration: 3.5, repeat: -1, yoyo: true, ease: "power1.inOut" });

    // 2. Generic Headers Reveal
    gsap.utils.toArray(".scroll-header-reveal").forEach((target) => {
      gsap.fromTo(target, 
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: target,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    // 3. Reasons Matrix Grid Stagger Look
    gsap.fromTo(".stagger-matrix-card", 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".matrix-grid-trigger",
          start: "top 80%"
        }
      }
    );

    // 4. Partnered Airline Chips Stagger Array
    gsap.fromTo(".stagger-chip-item", 
      { opacity: 0, scale: 0.88 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.04,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: ".chips-grid-trigger",
          start: "top 85%"
        }
      }
    );

    // 5. Global Networks Multi-Column Reveal
    gsap.fromTo(".stagger-network-column", 
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".network-columns-trigger",
          start: "top 80%"
        }
      }
    );

    // 6. Final Close Banner Reveal
    gsap.fromTo(".footer-banner-reveal", 
      { opacity: 0, scale: 0.95, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".footer-banner-trigger",
          start: "top 85%"
        }
      }
    );

    // Constant premium visual pulsing on conversions
    gsap.to(".pulsing-conversion-core", {
      scale: 1.02,
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut"
    });

  }, { scope: mainScopeRef });

  // UI/UX Interactive Micro-interactions Micro-animations
  const onCrimsonEnter = (e) => {
    gsap.to(e.currentTarget, { scale: 1.03, backgroundColor: "#A30000", duration: 0.3, ease: "power2.out" });
    gsap.to(e.currentTarget.querySelector(".icon-vector-shift"), { x: 5, duration: 0.3, ease: "power2.out" });
  };

  const onCrimsonLeave = (e) => {
    gsap.to(e.currentTarget, { scale: 1, backgroundColor: "#C30000", duration: 0.3, ease: "power2.out" });
    gsap.to(e.currentTarget.querySelector(".icon-vector-shift"), { x: 0, duration: 0.3, ease: "power2.out" });
  };

  const onStructuralCardEnter = (e) => {
    gsap.to(e.currentTarget, { y: -8, borderColor: "#1A2E48", boxShadow: "0 20px 40px -15px rgba(26,46,72,0.15)", duration: 0.35 });
  };

  const onStructuralCardLeave = (e) => {
    gsap.to(e.currentTarget, { y: 0, borderColor: "#E2E8F0", boxShadow: "0 0px 0px rgba(0,0,0,0)", duration: 0.35 });
  };

  const onGhostButtonEnter = (e) => {
    gsap.to(e.currentTarget, { scale: 1.03, backgroundColor: "rgba(255,255,255,0.15)", duration: 0.3 });
  };

  const onGhostButtonLeave = (e) => {
    gsap.to(e.currentTarget, { scale: 1, backgroundColor: "rgba(255,255,255,0.1)", duration: 0.3 });
  };

  return (
    <div ref={mainScopeRef} className="min-h-screen bg-[#F8FAFC] text-[#48586D] font-sans overflow-x-hidden selection:bg-[#C30000] selection:text-white">
      
      

      {/* SECTION 2: TRUST MATRIX (Reasons to Choose System) */}
      <section className="py-28 px-6 md:px-12 xl:px-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto">
          
          <div className="scroll-header-reveal mb-20 max-w-3xl">
            <span className="text-[#C30000] uppercase text-xs font-black tracking-widest block mb-3">Core Credentials</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#1A2E48] tracking-tight uppercase mb-4">
              REASONS TO CHOOSE OUR COMPANY
            </h2>
            <div className="w-12 h-1 bg-[#C30000] mb-6" />
            <p className="text-base sm:text-lg text-[#48586D] font-normal">
              Top Provider of Cheap Domestic US Airline Tickets. More than a million travelers turn to AirlinesTicketBooking every year for low-cost domestic flights within the US. Here's what sets us apart:
            </p>
          </div>

          {/* Asymmetric Design System Grid Matrix Container */}
          <div className="matrix-grid-trigger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Structural Block 1 */}
            <div 
              onMouseEnter={onStructuralCardEnter}
              onMouseLeave={onStructuralCardLeave}
              className="stagger-matrix-card border border-slate-200 rounded-2xl p-8 bg-[#F8FAFC] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-lg bg-[#1A2E48]/5 flex items-center justify-center text-[#1A2E48] font-black text-sm mb-6">01</div>
                <h4 className="text-lg font-bold text-[#1A2E48] mb-3">Cheapest Domestic Airline Tickets</h4>
                <p className="text-sm leading-relaxed font-normal text-[#48586D]">We analyze routes from Southwest Airlines, Delta, United, American Airlines, Spirit, Frontier, and other carriers to find you the cheapest US domestic flights.</p>
              </div>
            </div>

            {/* Structural Block 2 */}
            <div 
              onMouseEnter={onStructuralCardEnter}
              onMouseLeave={onStructuralCardLeave}
              className="stagger-matrix-card border border-slate-200 rounded-2xl p-8 bg-[#F8FAFC] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-lg bg-[#C30000]/5 flex items-center justify-center text-[#C30000] font-black text-sm mb-6">02</div>
                <h4 className="text-lg font-bold text-[#1A2E48] mb-3">Immediate Price Alerts</h4>
                <p className="text-sm leading-relaxed font-normal text-[#48586D]">Be notified immediately when prices fall for popular flights such as cheap flights to Miami, cheap flights to Denver, cheap flights to Honolulu Hawaii.</p>
              </div>
            </div>

            {/* Structural Block 3 */}
            <div 
              onMouseEnter={onStructuralCardEnter}
              onMouseLeave={onStructuralCardLeave}
              className="stagger-matrix-card border border-slate-200 rounded-2xl p-8 bg-[#F8FAFC] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-lg bg-[#1A2E48]/5 flex items-center justify-center text-[#1A2E48] font-black text-sm mb-6">03</div>
                <h4 className="text-lg font-bold text-[#1A2E48] mb-3">100% Transparency No Hidden Fees</h4>
                <p className="text-sm leading-relaxed font-normal text-[#48586D]">The price we show you is the price you will be paying. Simple.</p>
              </div>
            </div>

            {/* Structural Block 4 (Premium Double-Column Asymmetric Span) */}
            <div 
              onMouseEnter={onStructuralCardEnter}
              onMouseLeave={onStructuralCardLeave}
              className="stagger-matrix-card border border-slate-200 rounded-2xl p-8 bg-[#F8FAFC] transition-all duration-300 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8 items-start"
            >
              <div>
                <div className="w-11 h-11 rounded-lg bg-[#1A2E48]/5 flex items-center justify-center text-[#1A2E48] font-black text-sm mb-4">04</div>
                <h4 className="text-lg font-bold text-[#1A2E48] mb-2">Domestic Airfare Experts</h4>
                <p className="text-sm leading-relaxed font-normal text-[#48586D]">Our friendly AirlinesTicketBooking customer service staff is here 24/7 to assist with your domestic flights.</p>
              </div>
              <div className="border-t sm:border-t-0 sm:border-l border-slate-200 pt-6 sm:pt-0 sm:pl-8">
                <div className="w-11 h-11 rounded-lg bg-[#C30000]/5 flex items-center justify-center text-[#C30000] font-black text-sm mb-4">05</div>
                <h4 className="text-lg font-bold text-[#1A2E48] mb-2">Latest Domestic Flights Deals</h4>
                <p className="text-sm leading-relaxed font-normal text-[#48586D]">Looking for cheap last minute domestic flights? We add new domestic flights on short notice.</p>
              </div>
            </div>

            {/* Editorial Contrast Filler Card Frame */}
            <div className="stagger-matrix-card bg-gradient-to-br from-[#1A2E48] to-[#0B131F] rounded-2xl p-8 text-white flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-[9px] tracking-widest uppercase font-black text-[#C30000]">Ecosystem Integration</span>
                <p className="text-base font-normal mt-4 text-slate-200">Search and book online anytime, anywhere – fast, easy, and always free to compare domestic airline tickets.</p>
              </div>
              <div className="text-right text-[#C30000] text-xl font-bold tracking-widest mt-6">✓ ✓ ✓</div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: THE CARRIER NETWORK (Airlines We Partner With) */}
      <section className="py-24 bg-[#0B131F] text-white px-6 md:px-12 xl:px-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="scroll-header-reveal mb-12">
            <span className="text-[#C30000] text-xs font-black uppercase tracking-widest block mb-2">Unified Partnerships</span>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight uppercase text-white">PAIRLINES WE PARTNER WITH</h2>
            <p className="text-slate-400 text-sm mt-2 font-normal">Get budget friendly domestic flights from all popular airlines within USA:</p>
          </div>

          {/* Chips Wrapper Target Element */}
          <div className="chips-grid-trigger flex flex-wrap gap-3">
            {[
              "Southwest Airlines budget domestic flights",
              "Delta Airlines domestic discounts",
              "United Airlines budget domestic tickets",
              "American Airlines domestic flights discounts",
              "Spirit Airlines domestic discount tickets",
              "Frontier Airlines domestic flights discounts",
              "Alaska Airlines",
              "JetBlue",
              "Hawaiian Airlines",
              "Allegiant Air"
            ].map((airline, idx) => (
              <div 
                key={idx}
                className="stagger-chip-item bg-white/[0.03] border border-white/10 hover:border-[#C30000] hover:bg-white/[0.07] px-4 py-3.5 rounded-xl transition-all duration-300 text-xs md:text-sm font-medium tracking-wide flex items-center gap-2.5 cursor-default group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C30000] group-hover:scale-125 transition-transform" />
                <span className="text-slate-300 group-hover:text-white transition-colors">{airline}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4: GLOBAL MATRIX SECTION (Domestic & International Channels) */}
      <section className="py-28 px-6 md:px-12 xl:px-24 bg-[#F1F5F9] relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="scroll-header-reveal grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-16">
            <div className="lg:col-span-7">
              <span className="text-[#C30000] text-xs font-black uppercase tracking-widest block mb-2">Global Routing Map</span>
              <h2 className="text-3xl font-black text-[#1A2E48] tracking-tight uppercase">
                DOMESTIC AND INTERNATIONAL FLIGHTS FROM USA
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-slate-500 text-sm sm:text-base font-normal leading-relaxed">
                Apart from being a source for finding budget domestic flights, we also help users find comprehensive routing frameworks across alternative global gateways.
              </p>
            </div>
          </div>

          {/* Three Column Target Grid Area */}
          <div className="network-columns-trigger grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Column Module 1 */}
            <div className="stagger-network-column bg-white border border-slate-200/80 p-8 rounded-2xl relative overflow-hidden shadow-sm">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#1A2E48]" />
              <div className="text-[9px] uppercase tracking-widest text-[#48586D] font-black mb-4">Transatlantic Hubs</div>
              <h4 className="text-base font-bold text-[#1A2E48] mb-2">AirlinesTicketBooking USA to Europe</h4>
              <p className="text-sm text-slate-500 font-normal">UK, France, Germany & other destinations</p>
            </div>

            {/* Column Module 2 */}
            <div className="stagger-network-column bg-white border border-slate-200/80 p-8 rounded-2xl relative overflow-hidden shadow-sm">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#C30000]" />
              <div className="text-[9px] uppercase tracking-widest text-[#48586D] font-black mb-4">Border-To-Border Channels</div>
              <h4 className="text-base font-bold text-[#1A2E48] mb-2">AirlinesTicketBooking USA to Canada</h4>
              <p className="text-sm text-slate-500 font-normal">Canada, Vancouver, Toronto</p>
            </div>

            {/* Column Module 3 */}
            <div className="stagger-network-column bg-white border border-slate-200/80 p-8 rounded-2xl relative overflow-hidden shadow-sm">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#48586D]" />
              <div className="text-[9px] uppercase tracking-widest text-[#48586D] font-black mb-4">Global Network Access</div>
              <h4 className="text-base font-bold text-[#1A2E48] mb-2">Continental Sectors</h4>
              <p className="text-sm text-slate-500 font-normal">Domestic and international flights to Asia, Caribbean, Latin America & more destinations</p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: HIGH-IMPACT CONVERSION PANEL (The Close) */}
      <section className="py-24 px-6 md:px-12 xl:px-24 bg-gradient-to-br from-[#1A2E48] via-[#0B131F] to-[#080E17] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C30000]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="footer-banner-trigger max-w-4xl mx-auto text-center relative z-10">
          <div className="footer-banner-reveal">
            <span className="inline-block text-xs font-black uppercase tracking-widest text-white bg-[#C30000] px-4 py-1.5 rounded-md mb-6">
              ACTION-ABLE MESSAGE
            </span>
          </div>
          
          <div className="footer-banner-reveal">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight uppercase">
              Eager to save some cash?
            </h2>
          </div>
          
          <div className="footer-banner-reveal">
            <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-12">
              Travel on airlines ticket booking for cheap flight tickets. Looking for cheap domestic flights online or need some travel consultation by our experienced representatives, feel free to contact us anytime.
            </p>
          </div>

          {/* Equal Dimension Dual Action Layout Wrapper */}
          <div className="footer-banner-reveal flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mx-auto mb-12">
            
            <a 
              href="tel:+8663075957"
              className="pulsing-conversion-core w-full sm:w-1/2 inline-flex flex-col items-center justify-center bg-[#00786F] text-white px-5 py-4 rounded-xl shadow-xl transition-all"
            >
              <span className="text-[9px] tracking-widest uppercase font-semibold text-white/70 block mb-1">AirlinesTicketBooking Contact Phone</span>
              <span className="text-lg font-black tracking-tight block">+1866 307-5957</span>
            </a>

            <a 
              href="https://www.airlinesticketbooking.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-1/2 inline-flex flex-col items-center justify-center bg-white/10 hover:bg-white/20 border border-white/10 px-5 py-4 rounded-xl transition-all"
            >
              <span className="text-[9px] tracking-widest uppercase font-bold text-slate-300 block mb-1">Visit our site at</span>
              <span className="text-base font-semibold tracking-tight text-white block">www.airlinesticketbooking.com</span>
            </a>

          </div>

          <div className="footer-banner-reveal">
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold max-w-xl mx-auto border-t border-white/10 pt-8 leading-relaxed">
              Search and book online anytime, anywhere – fast, easy, and always free to compare domestic airline tickets.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}