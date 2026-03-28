import experiences from "../../../content/experiences.js";
import ExperienceContentRenderer from "../content/ExperienceContentRenderer.jsx";

export default function ExperiencePage({ slug }) {
  const experience = experiences.find((item) => item.slug === slug);

  if (!experience) {
    return (
      <section className="section project-detail" id={`project-${slug}`}>
        <div className="project-detail__heading reveal-on-scroll">
          <span className="project-detail__eyebrow">Work</span>
          <h2>Experience not found</h2>
          <p>This experience is missing from `content/experiences.js`.</p>
        </div>
      </section>
    );
  }

  return <ExperienceContentRenderer experience={experience} />;
}
