
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/18663075957"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="WhatsApp"
      className="
        fixed
        bottom-20 right-5
        sm:bottom-24 sm:right-6
        md:bottom-28 md:right-8
        z-[9999]
        flex
        h-12 w-12
        sm:h-14 sm:w-14
        md:h-16 md:w-16
        items-center
        justify-center
        rounded-full
        bg-green-500
        text-white
        shadow-xl
      "
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaWhatsapp className="text-lg sm:text-2xl md:text-3xl" />
    </motion.a>
  );
}