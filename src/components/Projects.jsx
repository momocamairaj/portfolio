import { motion } from "framer-motion";

const projects = [
  {
    title: "Poop",
    description:
      "An e-commerce redesign focusing on mindful shopping journeys and warm interactions.",
    status: "Design exploration underway"
  },
  {
    title: "Narrated Design Systems",
    description:
      "A deep dive into scalable UI foundations paired with storytelling for teams.",
    status: "Case study outline in progress"
  },
  {
    title: "Interactive Storytelling Lab",
    description:
      "A collection of immersive prototypes merging animation, sound, and copywriting.",
    status: "Prototype videos pending"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({ opacity: 1, y: 0, transition: { delay: index * 0.12 } })
};

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section__heading">
        <h2>Projects</h2>
        <p>Preview of featured work that will be detailed soon.</p>
      </div>
      <div className="grid">
        {projects.map((project, index) => (
          <motion.article
            className="card"
            key={project.title}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span className="card__status">{project.status}</span>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
