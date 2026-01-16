import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const heroVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="section hero"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <motion.span className="hero__eyebrow" variants={heroVariants}>
        Portfolio Preview
      </motion.span>
      <motion.h1 className="hero__title" variants={heroVariants}>
        Building thoughtful digital experiences with a calm aesthetic.
      </motion.h1>
      <motion.p className="hero__subtitle" variants={heroVariants}>
        This space will soon showcase selected work, writings, and video updates.
        Explore the sections below to see the upcoming structure.
      </motion.p>
      <motion.div className="hero__actions" variants={heroVariants}>
        <a className="button" href="#projects">
          View Future Projects
        </a>
        <a className="button button--outline" href="#blog">
          Browse Blog Section
        </a>
      </motion.div>
    </motion.section>
  );
}
