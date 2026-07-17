
import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa";

export default function CallSticky() {
  const phoneNumber = "+18663075957";

  return (
    <motion.a
      href={`tel:${phoneNumber}`}
      title="Call us"
      aria-label="Call us"
      className="
        fixed
        bottom-5 right-5
        sm:bottom-6 sm:right-6
        md:bottom-8 md:right-8
        z-[9999]
        flex
        h-12 w-12
        sm:h-14 sm:w-14
        md:h-16 md:w-16
        items-center
        justify-center
        rounded-full
        bg-blue-600
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
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.95,
      }}
    >
      <FaPhone className="text-lg sm:text-2xl md:text-3xl" />
    </motion.a>
  );
}