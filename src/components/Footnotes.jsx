import { motion } from "framer-motion";
import posts from "../../content/posts.json";

const articles = posts
  .filter((post) => post.draft === false)
  .map((post) => ({ ...post, href: `/footnotes/${post.slug}` }));

const cardVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.2 + index * 0.15, duration: 0.5, ease: "easeOut" }
  })
};

export default function Footnotes({ onNavigate }) {
  const handleNavigation = (event, href) => {
    if (!href) {
      return;
    }

    if (onNavigate) {
      event.preventDefault();
      onNavigate(href);
    }
  };

  return (
    <section id="footnotes" className="section section--snap section--fullbleed footnotes">
      <div className="section__inner">
        <div className="section__heading">
          <h2>FOOTNOTES</h2>
        </div>
        <div className="footnotes__list">
          {articles.map((article, index) => (
            <motion.div
              className="footnotes__row-wrap"
              key={article.slug}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <div className="footnotes__row">
                {article.href ? (
                  <a href={article.href} onClick={(event) => handleNavigation(event, article.href)}>
                    <span>{article.title}</span>
                  </a>
                ) : (
                  <span>{article.title}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
