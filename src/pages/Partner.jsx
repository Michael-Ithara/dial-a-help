import { motion } from 'framer-motion';

export default function Partner() {
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
            Partner With Dial A Help
          </h2>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
            Are you an organization, mentor, or training institution? Collaborate with us to equip
            youth across Kenya with practical skills and brighter futures.
          </p>
        </section>

        {/* Form */}
        <form
          action="https://formspree.io/f/xpwlzyop"
          method="POST"
          className="flex flex-col gap-4"
        >
          <input type="hidden" name="_redirect" value="http://localhost:5173/success" />

          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
              Organization Name
            </span>
            <input
              type="text"
              name="organization"
              required
              className="p-3 w-full border border-gray-300 dark:border-gray-700 rounded focus:outline-emerald-500"
            />
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
              Contact Person Name
            </span>
            <input
              type="text"
              name="contact_person"
              required
              className="p-3 w-full border border-gray-300 dark:border-gray-700 rounded focus:outline-emerald-500"
            />
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
              Email Address
            </span>
            <input
              type="email"
              name="email"
              required
              className="p-3 w-full border border-gray-300 dark:border-gray-700 rounded focus:outline-emerald-500"
            />
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
              Type of Partnership
            </span>
            <select
              name="partnership_type"
              required
              className="p-3 w-full border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800"
            >
              <option value="">Select...</option>
              <option value="Mentorship">Mentorship</option>
              <option value="Training Support">Training Support</option>
              <option value="Recruitment / Hiring">Recruitment / Hiring</option>
              <option value="Sponsorship">Sponsorship</option>
              <option value="Other">Other</option>
            </select>
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
              Collaboration Details
            </span>
            <textarea
              name="message"
              rows={4}
              required
              placeholder="Tell us how you’d like to collaborate..."
              className="p-3 w-full border border-gray-300 dark:border-gray-700 rounded focus:outline-emerald-500"
            />
          </label>

          <button
            type="submit"
            className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-full transition w-full sm:w-auto"
          >
            Submit Partnership Request
          </button>
        </form>
      </motion.main>
    </div>
  );
}
