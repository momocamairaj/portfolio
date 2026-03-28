import InstagramEmbed from "./InstagramEmbed.jsx";

function MediaBlock({ media }) {
  if (!media) {
    return null;
  }

  const className = media.className || "project-detail__media";

  if (media.type === "instagram" && media.embedUrl) {
    return (
      <div className={className}>
        <InstagramEmbed embedUrl={media.embedUrl} label={media.label || "Instagram embed"} />
      </div>
    );
  }

  if (media.type === "image" && media.src) {
    return (
      <div className={className}>
        <img src={media.src} alt={media.alt || ""} />
      </div>
    );
  }

  return null;
}

function ExperienceSection({ section }) {
  if (section.type === "embed-gallery") {
    return (
      <article className={section.sectionClassName || "project-detail__highlight reveal-on-scroll"}>
        <div className="project-detail__body">
          <h3>{section.title}</h3>
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="project-gallery" role="list" aria-label={section.galleryLabel || section.title}>
            {section.items?.map((item) => (
              <div className="project-gallery__item" role="listitem" key={item.embedUrl}>
                <InstagramEmbed embedUrl={item.embedUrl} label={item.label || section.title} />
              </div>
            ))}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className={section.sectionClassName || "project-detail__highlight reveal-on-scroll"}>
      <MediaBlock media={section.media} />
      <div className="project-detail__body">
        <h3>{section.title}</h3>
        {section.paragraphs?.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

export default function ExperienceContentRenderer({ experience }) {
  const detailPage = experience.detailPage || {};
  const pageClassName = ["section", "project-detail", detailPage.pageClassName].filter(Boolean).join(" ");
  const containerClassName = detailPage.containerClassName || "";
  const headingClassName = detailPage.headingClassName || "project-detail__heading reveal-on-scroll";
  const introParagraphs = (detailPage.intro || [experience.shortDescription]).filter(Boolean);

  return (
    <section className={pageClassName} id={`project-${experience.slug}`}>
      <div className={containerClassName}>
        <div className={headingClassName}>
          <span className="project-detail__eyebrow">{detailPage.eyebrow || experience.seasonOrYear || "Work"}</span>
          <h2>{detailPage.title || experience.title}</h2>
          {introParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {detailPage.sections?.length ? (
          <div className="project-detail__highlights">
            {detailPage.sections.map((section) => (
              <ExperienceSection key={`${experience.slug}-${section.title}`} section={section} />
            ))}
          </div>
        ) : experience.coverImage ? (
          <div className="project-detail__cover reveal-on-scroll">
            <img src={experience.coverImage} alt={`${experience.title} cover`} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
