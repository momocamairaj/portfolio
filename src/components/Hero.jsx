import { motion } from "framer-motion";
import heroVideo from "../assets/images/okinawa.mp4";

const heroContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0, staggerChildren: 0.95 }
  }
};

const taglineVariants = {
  hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
  visible: {
    opacity: 1,
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 1.2, ease: "easeOut", delay: 1.2 }
  }
};

export default function Hero({ onNavigate }) {
  const handleNavigate = (event, href) => {
    if (!href) {
      return;
    }

    if (onNavigate) {
      event.preventDefault();
      onNavigate(href);
    }
  };

  return (
    <motion.section
      id="home"
      className="section section--snap hero hero--monogram"
      initial="hidden"
      animate="visible"
      variants={heroContainer}
    >
      <div className="hero__media">
        <video autoPlay loop muted playsInline src={heroVideo} />
        <div className="hero__scrim" />
      </div>
      <div className="hero__inner">
        <motion.div className="hero__content hero__content--solo" variants={heroContainer}>
          <h1 className="hero__name sirivennela-regular">Momoca</h1>
          <motion.p className="hero__tagline" variants={taglineVariants}>
            ENGLISH AT COLUMBIA UNIVERSITY ᐧ PRE-LAW ᐧ MARKETING
          </motion.p>
          <motion.div
            className="hero__links"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 2.2, duration: 0.5 } }}
          >
            <a href="/work" onClick={(event) => handleNavigate(event, "/work")}>
              View Work →
            </a>
            <a href="/footnotes" onClick={(event) => handleNavigate(event, "/footnotes")}>
              Read Footnotes →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

