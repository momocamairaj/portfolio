import { useMemo } from "react";
import articles from "../../../content/articles.js";

const defaultByline = "Momoca Mairaj";

export default function ArticlePage({ slug }) {
  const post = useMemo(() => articles.find((item) => item.slug === slug), [slug]);

  if (!post) {
    return (
      <section className="section project-detail" id={`article-${slug}`}>
        <div className="project-detail__heading project-detail__heading--wide article-header">
          <span className="project-detail__eyebrow">Footnotes</span>
          <h2>Article not found</h2>
          <p>This post is missing from `content/articles.js`.</p>
        </div>
      </section>
    );
  }

  const byline = post.byline || defaultByline;
  const paragraphs = post.body || [];

  return (
    <section className="section project-detail" id={`article-${slug}`}>
      <div className="project-detail__heading project-detail__heading--wide article-header">
        <span className="project-detail__eyebrow">Footnotes</span>
        <h2>{post.title}</h2>
        {post.subtitle ? <p>{post.subtitle}</p> : null}
        <p>by {byline}</p>
      </div>

      <article className="article-body">
        {paragraphs.map((paragraph, index) => (
          <p key={`${slug}-${index}`}>{paragraph}</p>
        ))}
      </article>
    </section>
  );
}
