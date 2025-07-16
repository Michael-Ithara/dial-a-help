import { useForm } from '@formspree/react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Join() {
  const [state, handleSubmit] = useForm('manbypog');
  const navigate = useNavigate();

  if (state.succeeded) {
    navigate('/success');
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <motion.main
        className="pt-28 px-4 sm:px-6 pb-12 max-w-2xl mx-auto space-y-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Header */}
        <section className="space-y-4 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-emerald-600 dark:text-emerald-400">
            Join the Apprenticeship Program
          </h2>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
            Ready to gain practical skills and transform your future? Fill out this quick form and
            we’ll reach out with opportunities matched to your interests.
          </p>
        </section>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Your Name</span>
            <input
              type="text"
              name="name"
              required
              placeholder="e.g., Achieng Otieno"
              className="p-3 w-full border border-gray-300 dark:border-gray-700 rounded focus:outline-emerald-500"
            />
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Email Address</span>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="p-3 w-full border border-gray-300 dark:border-gray-700 rounded focus:outline-emerald-500"
            />
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Your Location</span>
            <input
              type="text"
              name="location"
              placeholder="e.g., Nairobi"
              className="p-3 w-full border border-gray-300 dark:border-gray-700 rounded focus:outline-emerald-500"
            />
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
              Area of Interest
            </span>
            <select
              name="interest"
              required
              className="p-3 w-full border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800"
            >
              <option value="">Select...</option>
              <option value="ICT">ICT</option>
              <option value="Construction">Construction</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Hospitality">Hospitality</option>
              <option value="Other">Other</option>
            </select>
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
              Why do you want to join?
            </span>
            <textarea
              name="motivation"
              required
              rows={4}
              placeholder="Share your goals or what excites you about this program..."
              className="p-3 w-full border border-gray-300 dark:border-gray-700 rounded focus:outline-emerald-500"
            />
          </label>

          <button
            type="submit"
            disabled={state.submitting}
            className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-full transition w-full sm:w-auto"
          >
            {state.submitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      </motion.main>
    </div>
  );
}
