import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const pageFade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.4 },
};

export default function About() {
  return (
    <motion.main
      {...pageFade}
      className="pt-28 max-w-7xl mx-auto px-4 sm:px-6 py-20 space-y-24 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100"
    >
      {/* Mission */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center space-y-6"
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-5xl font-extrabold text-emerald-600"
        >
          Our Mission
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
        >
          To empower individuals with practical, hands-on skills through accessible and flexible
          apprenticeship programs — enabling lifelong learning and career advancement beyond
          traditional education pathways.
        </motion.p>
      </motion.section>

      {/* What We Do */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
          className="space-y-5"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100">
            What We Do
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
            Dial A Help bridges the gap between education and employment for underserved
            communities. We connect learners — especially those without formal education — to
            real apprenticeship programs and provide AI-powered support to help them thrive.
          </p>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Personalized learning using LLMs</li>
            <li>Virtual mentorship & hands-on training</li>
            <li>Industry-aligned certifications</li>
            <li>Real-world employment outcomes</li>
          </ul>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeUp}
          className="bg-emerald-50 dark:bg-gray-800 rounded-xl p-8 shadow-md text-center"
        >
          <h4 className="text-lg sm:text-xl font-bold text-emerald-700 dark:text-emerald-400 mb-2">
            Why It Works
          </h4>
          <p className="text-gray-800 dark:text-gray-200 text-base sm:text-lg">
            We remove barriers to learning by meeting people where they are — digitally,
            personally, practically.
          </p>
        </motion.div>
      </section>

      {/* Challenges */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white py-16 px-4 sm:px-6 rounded-2xl shadow-md"
      >
        <h3 className="text-2xl sm:text-3xl font-bold text-center mb-10">
          The Challenges We’re Solving
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center text-base sm:text-lg">
          {[
            'Limited Access to Education',
            'Unemployment',
            'Skills Gap',
            'Economic Inequality',
            'Social Exclusion',
            'Job Market Mismatch',
          ].map((text, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className="bg-white/10 p-6 rounded-xl shadow border border-emerald-600/30"
            >
              <span className="text-amber-300 font-medium">{text}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Vision */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center space-y-6"
      >
        <h3 className="text-2xl sm:text-3xl font-bold text-emerald-700 dark:text-emerald-400">
          Looking Ahead
        </h3>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          We're just getting started. We plan to expand into more counties, scale our partnerships,
          and introduce new AI-driven learning features to better support every learner's journey.
        </p>
      </motion.section>
    </motion.main>
  );
}
