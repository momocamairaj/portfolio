import experiences from "../../../content/experiences.json";

export default function ExperiencePage({ slug }) {
  const experience = experiences.find((item) => item.slug === slug);

  if (!experience) {
    return (
      <section className="section project-detail" id={`project-${slug}`}>
        <div className="project-detail__heading reveal-on-scroll">
          <span className="project-detail__eyebrow">Work</span>
          <h2>Experience not found</h2>
          <p>This experience is missing from `content/experiences.json`.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="section project-detail" id={`project-${experience.slug}`}>
      <div className="project-detail__heading reveal-on-scroll">
        <span className="project-detail__eyebrow">{experience.seasonOrYear || "Work"}</span>
        <h2>{experience.title}</h2>
        {experience.subtitle ? <p>{experience.subtitle}</p> : null}
        {experience.excerpt ? <p>{experience.excerpt}</p> : null}
      </div>
      {experience.coverImage ? (
        <div className="project-detail__cover reveal-on-scroll">
          <img src={experience.coverImage} alt={`${experience.title} cover`} />
        </div>
      ) : null}
    </section>
  );
}
