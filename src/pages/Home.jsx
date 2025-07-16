import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const pageFade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.4 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function Home() {
  return (
    <motion.main
      {...pageFade}
      className="pt-28 pb-16 space-y-24 px-4 sm:px-6 md:px-8 text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen"
    >
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center space-y-6"
      >
        <motion.h1
          variants={fadeUp}
          custom={0}
          className="text-3xl sm:text-5xl font-extrabold text-emerald-600 leading-tight"
        >
          Empowering Kenya’s Future, One Skill at a Time
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={1}
          className="text-base sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Dial A Help connects underserved youth to hands-on, AI-supported apprenticeship programs —
          creating real opportunities and lifelong impact.
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={2}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6"
        >
          <Link to="/join">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition w-full sm:w-auto"
            >
              Apply as a Learner
            </motion.button>
          </Link>
          <Link to="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="border border-emerald-600 text-emerald-600 px-6 py-3 rounded-full hover:bg-emerald-50 transition w-full sm:w-auto"
            >
              Learn More
            </motion.button>
          </Link>
        </motion.div>
      </motion.section>

      {/* Impact Stats Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
      >
        {[
          { label: 'Learners Impacted', value: '+500' },
          { label: 'Vocational Partners', value: '15+' },
          { label: 'Counties Reached', value: '4' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            custom={i}
            className="bg-emerald-50 dark:bg-gray-800 p-6 rounded-lg text-center border border-emerald-100 dark:border-gray-700 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-emerald-600">{stat.value}</h3>
            <p className="text-gray-700 dark:text-gray-300">{stat.label}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Partner CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="bg-amber-50 dark:bg-gray-800 py-16 px-4 sm:px-6 text-center rounded-lg shadow-inner"
      >
        <motion.h2
          variants={fadeUp}
          custom={0}
          className="text-2xl sm:text-3xl font-bold text-emerald-700 mb-4"
        >
          Are You a Mentor, Trainer, or Organization?
        </motion.h2>
        <motion.p
          variants={fadeUp}
          custom={1}
          className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6"
        >
          Join us in creating opportunities for underserved youth across Kenya. Whether you’re a
          business, NGO, or skilled professional — your support can change lives.
        </motion.p>
        <motion.div variants={fadeUp} custom={2}>
          <Link to="/partner">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-amber-500 text-white px-6 py-3 rounded-full hover:bg-amber-600 transition w-full sm:w-auto"
            >
              Partner With Us
            </motion.button>
          </Link>
        </motion.div>
      </motion.section>
    </motion.main>
  );
}
