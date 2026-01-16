import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export default function About() {
  return (
    <motion.section
      id="about"
      className="section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      variants={container}
    >
      <div className="section__heading">
        <h2>About This Space</h2>
        <p>
          A calm corner of the web designed to highlight long-form projects, quick
          notes, and visual stories. Content is being assembled, but the structure
          below shows how everything will come together.
        </p>
      </div>
    </motion.section>
  );
}
