import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const textBlocks = [
  "I’m a student at Columbia studying English with a minor in East Asian Languages and Cultures.",
  "Much of my work, whether in digital marketing or editing, has grown out of paying attention to how meaning shifts once it moves from people into institutions. I’m drawn to work that takes language seriously and asks what responsibility comes with shaping how information is circulated.",
  "My interests increasingly focus on law and international contexts where those choices carry real consequences."
];

const textVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6 + index * 0.8,
      duration: 0.75,
      ease: "easeOut"
    }
  })
};

export default function About() {
  return (
    <motion.section
      id="about"
      className="section section--snap about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      variants={container}
    >
      <div className="section__heading">
        <h2>ABOUT ME</h2>
      </div>
      <div className="about__text">
        {textBlocks.map((block, index) => (
          <motion.p
            key={block}
            className="about__text-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
            custom={index}
          >
            {block}
          </motion.p>
        ))}
      </div>
    </motion.section>
  );
}
