import { useEffect, useMemo, useState } from "react";
import posts from "../../../content/posts.json";

const postBodyModules = import.meta.glob("../../../content/posts/*.md", {
  query: "?raw",
  import: "default"
});

const defaultByline = "Momoca Mairaj";

export default function ArticlePage({ slug }) {
  const [body, setBody] = useState("");
  const [loadError, setLoadError] = useState(false);

  const post = useMemo(() => posts.find((item) => item.slug === slug), [slug]);

  useEffect(() => {
    let cancelled = false;
    const modulePath = `../../../content/posts/${slug}.md`;
    const loadBody = postBodyModules[modulePath];

    setLoadError(false);
    setBody("");

    if (!loadBody) {
      setLoadError(true);
      return undefined;
    }

    loadBody()
      .then((raw) => {
        if (!cancelled) {
          setBody(raw);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setLoadError(true);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (!post || loadError) {
    return (
      <section className="section project-detail" id={`article-${slug}`}>
        <div className="project-detail__heading project-detail__heading--wide article-header">
          <span className="project-detail__eyebrow">Footnotes</span>
          <h2>Article not found</h2>
          <p>This post is missing from `content/posts.json` or `content/posts/{slug}.md`.</p>
        </div>
      </section>
    );
  }

  const byline = post.byline || defaultByline;
  const paragraphs = body
    .split(/\r?\n\s*\r?\n/)
    .map((paragraph) => paragraph.replace(/\r?\n/g, " ").trim())
    .filter(Boolean);

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
