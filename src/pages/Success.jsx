import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function Success() {
  return (
    <motion.main
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="bg-emerald-100 dark:bg-emerald-900 rounded-full p-4 mb-6"
      >
        <CheckCircle className="w-16 h-16 text-emerald-600 dark:text-emerald-400" />
      </motion.div>

      <h1 className="text-4xl font-bold text-emerald-700 dark:text-emerald-400 mb-4">
        Application Submitted ✅
      </h1>

      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mb-8">
        Thank you for reaching out to Dial A Help! We’ve received your application and will get back to you shortly with the next steps.
      </p>

      <Link to="/">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full transition"
        >
          Back to Home
        </motion.button>
      </Link>
    </motion.main>
  );
}
