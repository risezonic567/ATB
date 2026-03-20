import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function TermsConditions() {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-4 text-sm flex items-center gap-2">
        <Link to="/" className="text-gray-500 hover:text-blue-500">
          Home
        </Link>
        <span className="text-gray-400">›</span>
        <span className="text-gray-700 underline">Terms and Conditions</span>
      </div>

      <h1 className="text-3xl font-bold mb-6">
        Terms & Conditions – Airlines Ticket Booking
      </h1>

      <p className="text-gray-600 mb-4">
        Welcome to Airlines Ticket Booking. By accessing and using our website
        (https://www.airlinesticketbooking.com), you agree to abide by these
        Terms and Conditions. If you do not wish to comply with these terms,
        please do not use our company’s service.
      </p>

      {/* Sections */}
      <Section title="1. About Us">
        <p>
          <b>Company Name:</b> Airlines Ticket Booking
        </p>
        <p>
          <b>Website:</b> www.airlinesticketbooking.com
        </p>
        <p>
          <b>Email:</b> airlinesticketbooking4@gmail.com
        </p>
        <p className="mt-2">
          <b>Office Address:</b>
          <br />
          820 South Riverside Drive #1090 <br />
          Iowa City, IA 52246, USA
        </p>
        <p className="mt-2">
          We provide travel-related services such as flight tickets, hotel
          reservations, car rentals, cruise bookings, visas, tour packages, and
          travel insurance.
        </p>
      </Section>

      <Section title="2. Use of Website">
        <ul className="list-disc pl-5 space-y-2">
          <li>You must be at least 18 years of age.</li>
          <li>You agree to provide accurate booking information.</li>
          <li>
            Incorrect information may result in cancellation without refund.
          </li>
        </ul>
      </Section>

      <Section title="3. Booking Policy">
        <ul className="list-disc pl-5 space-y-2">
          <li>All bookings are subject to confirmation.</li>
          <li>Prices may change due to airline or market conditions.</li>
          <li>Confirmation email will be sent after successful payment.</li>
        </ul>
      </Section>

      <Section title="4. Payments">
        <ul className="list-disc pl-5 space-y-2">
          <li>Full payment is required before booking.</li>
          <li>We accept online and offline payment methods.</li>
          <li>Prices may include service fees and local currency charges.</li>
        </ul>
      </Section>

      <Section title="5. Changes & Modifications">
        <ul className="list-disc pl-5 space-y-2">
          <li>Changes depend on airline policies.</li>
          <li>Additional fees may apply.</li>
          <li>We are not responsible for airline penalties.</li>
        </ul>
      </Section>

      <Section title="6. User Responsibilities">
        <ul className="list-disc pl-5 space-y-2">
          <li>Providing correct passenger details.</li>
          <li>Valid passports and visas.</li>
          <li>Understanding travel restrictions.</li>
          <li>Confirming flight schedules.</li>
        </ul>
      </Section>

      <Section title="7. Service Fees">
        <p>
          Service fees are non-refundable and cover consultation, booking, and
          customer support services.
        </p>
      </Section>

      <Section title="8. Limitation of Liability">
        <ul className="list-disc pl-5 space-y-2">
          <li>Flight delays or cancellations.</li>
          <li>Natural disasters.</li>
          <li>Airline bankruptcy.</li>
          <li>Government restrictions.</li>
          <li>Technical failures.</li>
        </ul>
        <p className="mt-2">
          We act only as an intermediary between customers and service
          providers.
        </p>
      </Section>

      <Section title="9. Intellectual Property">
        <p>
          All website content, designs, and logos are owned by Airlines Ticket
          Booking and cannot be reproduced without permission.
        </p>
      </Section>

      <Section title="10. Governing Law">
        <p>These terms are governed by the laws of the United States.</p>
      </Section>

      <Section title="11. Changes to Terms">
        <p>
          We reserve the right to update these Terms & Conditions at any time
          without prior notice.
        </p>
      </Section>
    </div>
  );
}


const Section = ({ title, children }) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <div className="text-gray-700 text-sm leading-relaxed">{children}</div>
  </div>
);
