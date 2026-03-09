import { FaPhone } from "react-icons/fa";

const CallSticky = () => {
  const phoneNumber = "+8663075957"; // Replace with your phone number

  return (
    <a
      href={`tel:${phoneNumber}`}
      className="fixed z-50 bottom-6 right-6 md:bottom-12 md:right-8 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-transform hover:scale-110"
      title="Call us"
    >
      <FaPhone className="text-2xl" />
    </a>
  );
};

export default CallSticky;
