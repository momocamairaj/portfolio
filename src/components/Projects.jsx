import experiences from "../../content/experiences.json";
import useCenteredCarousel from "../hooks/useCenteredCarousel.js";

const projects = experiences.map((experience) => ({
  ...experience,
  href: experience.route || `/work/${experience.slug}`
}));

export default function Projects({ onNavigate }) {
  const { containerRef, activeIndex, scrollToIndex } = useCenteredCarousel();

  const handleNavigation = (event, href) => {
    if (!href) {
      return;
    }

    if (onNavigate) {
      event.preventDefault();
      onNavigate(href);
    }
  };

  const handleCarouselKeyDown = (event) => {
    if (projects.length === 0) {
      return;
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollToIndex(Math.min(activeIndex + 1, projects.length - 1));
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollToIndex(Math.max(activeIndex - 1, 0));
    }
  };

  return (
    <section id="projects" className="section section--snap section--fullbleed projects">
      <div className="section__inner">
        <div className="section__heading">
          <h2>SELECTED WORK</h2>
        </div>
        <div
          className="work-carousel"
          ref={containerRef}
          role="list"
          aria-label="Selected work carousel"
          tabIndex={0}
          onKeyDown={handleCarouselKeyDown}
        >
          {projects.map((project, index) => {
            const isActive = activeIndex === index;
            const Element = project.href ? "a" : "article";
            const elementProps = project.href
              ? {
                  href: project.href,
                  onClick: (event) => handleNavigation(event, project.href)
                }
              : {};

            return (
              <Element
                className={`work-carousel__card card${project.href ? " card--link" : ""}${isActive ? " is-active" : ""}`}
                key={project.id || project.slug || project.title}
                data-carousel-item
                role="listitem"
                aria-current={isActive ? "true" : undefined}
                {...elementProps}
              >
                {project.coverImage ? (
                  <img
                    src={project.coverImage}
                    alt={`${project.title} cover`}
                    className="card__cover"
                  />
                ) : null}
                {project.subtitle ? (
                  <p className="work-carousel__subtitle">{project.subtitle}</p>
                ) : null}
                <h3 className="work-carousel__title">{project.title}</h3>
                {project.excerpt ? <p className="work-carousel__excerpt">{project.excerpt}</p> : null}
              </Element>
            );
          })}
        </div>
      </div>
    </section>
  );
}
