import { motion } from "framer-motion";

export default function BirthdayCard() {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg max-w-md p-6 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <img
        src={`${import.meta.env.BASE_URL}cousin.jpg`}
        alt="Happy Birthday"
        className="rounded-2xl shadow-md mb-4"
      />
      <h1 className="text-3xl font-bold text-pink-600 mb-2">
        🎉 Happy Birthday, Maureen Nyambura! 🎂
      </h1>
      <p className="text-gray-700 text-lg">
        Wishing you a day filled with love, laughter, and all the happiness 
        you deserve. May this year bring you endless joy and success! 💖✨
      </p>
    </motion.div>
  );
}
