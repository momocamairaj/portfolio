import { motion } from "framer-motion";

const videos = [
  {
    title: "Studio Walkthrough",
    description: "A guided look at the tools and rituals that shape upcoming projects.",
    length: "2:47 preview"
  },
  {
    title: "Prototype Highlights",
    description: "Short clips showcasing interaction concepts and motion experiments.",
    length: "3:15 teaser"
  },
  {
    title: "Behind the Scenes",
    description: "Process videos documenting how ideas move from sketch to screen.",
    length: "4:02 overview"
  }
];

export default function Videos() {
  return (
    <section id="videos" className="section">
      <div className="section__heading">
        <h2>Videos</h2>
        <p>Upcoming uploads with narrated walkthroughs and visual explorations.</p>
      </div>
      <div className="grid grid--video">
        {videos.map((video, index) => (
          <motion.article
            className="card card--video"
            key={video.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="video__frame">
              <span className="video__badge">Upload soon</span>
            </div>
            <div className="video__body">
              <h3>{video.title}</h3>
              <p>{video.description}</p>
              <span className="card__status">{video.length}</span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
