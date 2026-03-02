import { Phone } from "lucide-react";
import React from "react";
import HeroSection from "../components/HeroSection";
import ExploreDestinations from "../components/ExploreDestinations";
import WorldwideDestinations from "../components/WorldwideDestinations";
import TourPackages from "../components/TourPackages";
import SocialsSection from "../components/SocialsSection";
import Footer from "../components/Footer";
import ATBFAQ from "../components/ATBFAQ";
import SEO from "../components/SEO";
import { Helmet } from "react-helmet";
// const homeSchema = {
//   "@context": "https://schema.org",
//   "@graph": [
//     {
//       "@type": "TravelAgency",
//       "@id": "https://www.airlinesticketbooking.com/#organization",
//       "name": "Airlines Ticket Booking",
//       "url": "https://www.airlinesticketbooking.com/",
//       "logo": {
//         "@type": "ImageObject",
//         "url": "https://i.postimg.cc/TP6w89Pc/ATB-LOGO-PNG.png"
//       },
//       "image": "https://i.postimg.cc/TP6w89Pc/ATB-LOGO-PNG.png",
//       "description": "Airlines Ticket Booking is a USA-based travel agency offering domestic and international flight booking, hotel reservations, tour packages, visa services, travel insurance, and car rental services.",
//       "telephone": "+1-844-821-5950",
//       "email": [
//         "Support@airlinesticketbooking.com",
//         "airlinesticketbooking4@gmail.com"
//       ],
//       "address": {
//         "@type": "PostalAddress",
//         "streetAddress": "17662 Irvine Blvd, Suite 9",
//         "addressLocality": "Tustin",
//         "addressRegion": "CA",
//         "postalCode": "92780",
//         "addressCountry": "US"
//       },
//       "areaServed": {
//         "@type": "Country",
//         "name": "United States"
//       },
//       "contactPoint": {
//         "@type": "ContactPoint",
//         "telephone": "+1-844-821-5950",
//         "contactType": "customer service",
//         "areaServed": "US",
//         "availableLanguage": "English"
//       },
//       "sameAs": [
//         "https://www.facebook.com/airlinesticketbooking1/",
//         "https://www.instagram.com/airlinesticketbooking/",
//         "https://www.linkedin.com/company/airlines-ticket-booking1/",
//         "https://www.pinterest.com/airlinesticketbooking/",
//         "https://www.youtube.com/@airlinesticketbooking1"
//       ]
//     },
//     {
//       "@type": "WebSite",
//       "@id": "https://www.airlinesticketbooking.com/#website",
//       "url": "https://www.airlinesticketbooking.com/",
//       "name": "Airlines Ticket Booking",
//       "publisher": {
//         "@id": "https://www.airlinesticketbooking.com/#organization"
//       },
//       "potentialAction": {
//         "@type": "SearchAction",
//         "target": "https://www.airlinesticketbooking.com/search?q={search_term_string}",
//         "query-input": "required name=search_term_string"
//       }
//     },
//     {
//       "@type": "WebPage",
//       "@id": "https://www.airlinesticketbooking.com/#webpage",
//       "url": "https://www.airlinesticketbooking.com/",
//       "name": "Affordable Flights, Hotels & Travel Services | Airlines Ticket Booking",
//       "isPartOf": {
//         "@id": "https://www.airlinesticketbooking.com/#website"
//       },
//       "about": {
//         "@id": "https://www.airlinesticketbooking.com/#organization"
//       },
//       "description": "Book domestic and international flights, hotels, tour packages, visa services, travel insurance, and car rentals from a trusted USA-based travel agency.",
//       "breadcrumb": {
//         "@id": "https://www.airlinesticketbooking.com/#breadcrumb"
//       },
//       "inLanguage": "en-US"
//     },
//     {
//       "@type": "BreadcrumbList",
//       "@id": "https://www.airlinesticketbooking.com/#breadcrumb",
//       "itemListElement": [
//         {
//           "@type": "ListItem",
//           "position": 1,
//           "name": "Home",
//           "item": "https://www.airlinesticketbooking.com/"
//         }
//       ]
//     }
//   ]
// };

export default function Home() {
  return (
    <>
      {/* <SEO
        title="Affordable International Flights from USA | Airlines Ticket Booking"
        description=" Book affordable international and domestic flights from the USA with our trusted travel agency. Compare fares, reserve hotels, visa services, car rentals & travel insurance in one place."
        canonical="https://www.airlinesticketbooking.com/"

      /> */}
      <Helmet>
        <title>Affordable International Flights from USA | Airlines Ticket Booking</title>
        <meta name="description" content="Book affordable international and domestic flights from the USA with our trusted travel agency. Compare fares, reserve hotels, visa services, car rentals & travel insurance in one place."/>
        <link rel="canonical" href="https://www.airlinesticketbooking.com/" />
        <script type="application/ld+json">
{ `{
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "TravelAgency",
      "@id": "https://www.airlinesticketbooking.com/#organization",
      "name": "Airlines Ticket Booking",
      "url": "https://www.airlinesticketbooking.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://i.postimg.cc/TP6w89Pc/ATB-LOGO-PNG.png"
      },
      "image": "https://i.postimg.cc/TP6w89Pc/ATB-LOGO-PNG.png",
      "description": "Airlines Ticket Booking is a USA-based travel agency offering domestic and international flight booking, hotel reservations, tour packages, visa services, travel insurance, and car rental services.",
      "telephone": "+1-844-821-5950",
      "email": "support@airlinesticketbooking.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "17662 Irvine Blvd, Suite 9",
        "addressLocality": "Tustin",
        "addressRegion": "CA",
        "postalCode": "92780",
        "addressCountry": "US"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-844-821-5950",
        "contactType": "customer service",
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://www.facebook.com/airlinesticketbooking1/",
        "https://www.instagram.com/airlinesticketbooking/",
        "https://www.linkedin.com/company/airlines-ticket-booking1/",
        "https://www.pinterest.com/airlinesticketbooking/",
        "https://www.youtube.com/@airlinesticketbooking1"
      ]
    },

    {
      "@type": "WebSite",
      "@id": "https://www.airlinesticketbooking.com/#website",
      "url": "https://www.airlinesticketbooking.com/",
      "name": "Airlines Ticket Booking",
      "publisher": {
        "@id": "https://www.airlinesticketbooking.com/#organization"
      }
    },

    {
      "@type": "WebPage",
      "@id": "https://www.airlinesticketbooking.com/#webpage",
      "url": "https://www.airlinesticketbooking.com/",
      "name": "Affordable Flights, Hotels & Travel Services | Airlines Ticket Booking",
      "isPartOf": {
        "@id": "https://www.airlinesticketbooking.com/#website"
      },
      "about": {
        "@id": "https://www.airlinesticketbooking.com/#organization"
      },
      "description": "Book domestic and international flights, hotels, tour packages, visa services, travel insurance, and car rentals from a trusted USA-based travel agency.",
      "inLanguage": "en-US"
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.airlinesticketbooking.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.airlinesticketbooking.com/"
        }
      ]
    }

  ]
} `}
</script>




      </Helmet>
      
        
      
      <section>
        <HeroSection />
      </section>
      <section>
        <ExploreDestinations />
      </section>
      <section>
        <WorldwideDestinations />
      </section>
      <section>
        <TourPackages />
      </section>
      <section>
        <SocialsSection />
      </section>
      <section>
        <ATBFAQ />
      </section>
    </>
  );
}
