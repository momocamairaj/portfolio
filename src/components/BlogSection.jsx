import { motion } from "framer-motion";

const posts = [
  {
    title: "Designing With Quiet Confidence",
    excerpt: "Reflections on building interfaces that feel supportive without shouting for attention.",
    tag: "essay"
  },
  {
    title: "Toolbox Roundup",
    excerpt: "A curated list of favorite resources that keep the creative process grounded and enjoyable.",
    tag: "resources"
  },
  {
    title: "Process Notes",
    excerpt: "Bite-sized updates outlining weekly explorations, experiments, and lessons learned.",
    tag: "journal"
  }
];

const listVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({ opacity: 1, y: 0, transition: { delay: index * 0.1 } })
};

export default function BlogSection() {
  return (
    <section id="blog" className="section section--tint">
      <div className="section__heading">
        <h2>Blog</h2>
        <p>
          A calm feed for thoughts, notes, and behind-the-scenes stories. Content is queued and on the way.
        </p>
      </div>
      <div className="grid">
        {posts.map((post, index) => (
          <motion.article
            className="card card--outline"
            key={post.title}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={listVariants}
          >
            <span className="card__tag">{post.tag}</span>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <span className="card__status">Full article coming soon</span>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
