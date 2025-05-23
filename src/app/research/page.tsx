import { motion } from "framer-motion";

export default function ResearchPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent"
      >
        Research
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        className="text-blue-900 dark:text-primary-light mb-6 text-lg font-medium"
      >
        A list of my research papers and publications will appear here.
      </motion.p>
      {/* TODO: Add research papers, bibtex links, etc. */}
    </main>
  );
}
