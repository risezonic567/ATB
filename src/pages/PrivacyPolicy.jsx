import React from "react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      
      
      <div className="mb-6 text-sm">
        <Link to="/" className="hover:text-blue-500 text-gray-500">
          Home
        </Link>
        <span className="mx-1 text-gray-400">›</span>
        <span className="text-gray-700 underline">
          Privacy Policy
        </span>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">
        Privacy Policy – Airlines Ticket Booking
      </h1>

      <p className="text-gray-700 mb-4">
        Airlines Ticket Booking respects your privacy and is committed to
        protecting your personal information. We will only use the information
        that you provide to us in a way that is secure, transparent, and
        responsible.
      </p>

      <p className="text-gray-700 mb-6">
        This Privacy Policy describes how we collect, use, store, and protect any
        information you provide to us while using our website or making purchases
        through our travel-related services such as flights, hotels, car rentals,
        cruises, visas, tours, and travel insurance.
      </p>

      <p className="text-gray-700 mb-6">
        By using the website and/or the services, you consent to the terms of this
        policy. For any questions, contact us at{" "}
        <span className="font-semibold">
          airlinesticketbooking4@gmail.com
        </span>.
      </p>

      {/* Sections */}
      <Section title="1. Information We Collect">
        <ul className="list-disc pl-6 space-y-1">
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Passport details</li>
          <li>Travel preferences</li>
          <li>Payment information</li>
          <li>IP address</li>
        </ul>
      </Section>

      <Section title="2. How We Use Your Information">
        <ul className="list-disc pl-6 space-y-1">
          <li>Processing of bookings</li>
          <li>Customer support</li>
          <li>Sending confirmations</li>
          <li>Improving our services</li>
          <li>Sending promotional offers (with permission)</li>
        </ul>
      </Section>

      <Section title="3. Sharing of Information">
        <ul className="list-disc pl-6 space-y-1">
          <li>Airlines</li>
          <li>Hotels</li>
          <li>Tour operators</li>
          <li>Payment gateways</li>
          <li>Government authorities (if required)</li>
        </ul>
        <p className="mt-2 font-semibold">
          We never sell your personal data to third parties.
        </p>
      </Section>

      <Section title="4. Payment Security">
        <p>
          Your payments are processed via secure third-party payment services.
          Your card information is not stored on our servers.
        </p>
      </Section>

      <Section title="5. Cookies">
        <ul className="list-disc pl-6 space-y-1">
          <li>Improve website performance</li>
          <li>Track user interaction</li>
          <li>Enhance user experience</li>
        </ul>
      </Section>

      <Section title="6. Data Protection">
        <ul className="list-disc pl-6 space-y-1">
          <li>Unauthorized access</li>
          <li>Data loss</li>
          <li>Misuse</li>
        </ul>
      </Section>

      <Section title="7. Marketing Communication">
        <p>
          We may send promotional emails. You can opt out anytime by contacting us.
        </p>
      </Section>

      <Section title="8. Third-Party Links">
        <p>
          We are not responsible for the privacy practices of third-party websites.
        </p>
      </Section>

      <Section title="9. Children’s Privacy">
        <p>
          We do not knowingly collect personal data from children under 13.
        </p>
      </Section>

      <Section title="10. Your Rights">
        <ul className="list-disc pl-6 space-y-1">
          <li>Request your data</li>
          <li>Correct your data</li>
          <li>Delete your data</li>
        </ul>
      </Section>

      <Section title="11. Policy Updates">
        <p>
          This Privacy Policy may be updated from time to time. Updates will be
          posted on this page.
        </p>
      </Section>

    </div>
  );
}

/* Reusable Section Component */
const Section = ({ title, children }) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <div className="text-gray-700 leading-relaxed">
      {children}
    </div>
  </div>
);
