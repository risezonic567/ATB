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
export default function Home() {
  return (
    <>
      
      <Helmet>
        <title>Book Cheap International Flights From USA & Airline Tickets</title>
        <meta name="description" content="Find affordable domestic flights within the USA with AirlinesTicketBooking. Compare cheap domestic airline tickets, discount flights, and last minute deals for Southwest, Delta, United and other airlines. Contact us now!"/>
        <link rel="canonical" href="https://www.airlinesticketbooking.com/" />
        <script type="application/ld+json">
{ `
{
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "Organization",
      "@id": "https://www.airlinesticketbooking.com/#organization",
      "name": "Airline Ticket Booking",
      "alternateName": "Airlines Ticket Booking",
      "url": "https://www.airlinesticketbooking.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.airlinesticketbooking.com/wp-content/uploads/2026/05/airlines-ticket-booking-logo.png",
        "width": 1280,
        "height": 720
      },
      "image": "https://www.airlinesticketbooking.com/wp-content/uploads/2026/05/airlines-ticket-booking-logo.png",
      "description": "Book cheap international and domestic flights from USA. Compare airline deals, find low fares and reserve airline tickets online today with trusted travel services.",
      "telephone": "+1-866-307-5957",
      "email": [
        "Support@airlinesticketbooking.com",
        "airlinesticketbooking4@gmail.com"
      ],
      "sameAs": [
        "https://www.facebook.com/airlinesticketbooking1/",
        "https://www.instagram.com/airlinesticketbooking/",
        "https://www.linkedin.com/company/airlines-ticket-booking1/",
        "https://www.pinterest.com/airlinesticketbooking/",
        "https://www.youtube.com/@airlinesticketbooking1"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "17662 Irvine Blvd, Suite 9",
        "addressLocality": "Tustin",
        "addressRegion": "CA",
        "postalCode": "92780",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-866-307-5957",
        "contactType": "customer support",
        "areaServed": "US",
        "availableLanguage": [
          "English"
        ]
      }
    },

    {
      "@type": "TravelAgency",
      "@id": "https://www.airlinesticketbooking.com/#travelagency",
      "name": "Airline Ticket Booking",
      "url": "https://www.airlinesticketbooking.com/",
      "logo": "https://www.airlinesticketbooking.com/wp-content/uploads/2026/05/airlines-ticket-booking-logo.png",
      "image": "https://www.airlinesticketbooking.com/wp-content/uploads/2026/05/airlines-ticket-booking-logo.png",
      "telephone": "+1-866-307-5957",
      "priceRange": "$$",
      "description": "Book cheap international flights from USA and compare airline ticket deals for domestic and international travel booking services.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "17662 Irvine Blvd, Suite 9",
        "addressLocality": "Tustin",
        "addressRegion": "CA",
        "postalCode": "92780",
        "addressCountry": "US"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      }
    },

    {
      "@type": "WebSite",
      "@id": "https://www.airlinesticketbooking.com/#website",
      "url": "https://www.airlinesticketbooking.com/",
      "name": "Airline Ticket Booking",
      "alternateName": "Airlines Ticket Booking",
      "description": "Book cheap international and domestic flights from USA. Compare airline deals, find low fares and reserve tickets online today with trusted travel services.",
      "publisher": {
        "@id": "https://www.airlinesticketbooking.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.airlinesticketbooking.com/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      "inLanguage": "en-US"
    },

    {
      "@type": "WebPage",
      "@id": "https://www.airlinesticketbooking.com/#webpage",
      "url": "https://www.airlinesticketbooking.com/",
      "name": "Book Cheap International Flights From USA & Airline Tickets",
      "description": "Book cheap international and domestic flights from USA. Compare airline deals, find low fares and reserve tickets online today with trusted travel services.",
      "isPartOf": {
        "@id": "https://www.airlinesticketbooking.com/#website"
      },
      "about": {
        "@id": "https://www.airlinesticketbooking.com/#organization"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.airlinesticketbooking.com/wp-content/uploads/2026/05/airlines-ticket-booking-logo.png"
      },
      "breadcrumb": {
        "@id": "https://www.airlinesticketbooking.com/#breadcrumb"
      },
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
}
`}
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
