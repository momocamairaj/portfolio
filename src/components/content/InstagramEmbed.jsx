import { useEffect } from "react";

function ensureInstagramScript() {
  if (typeof window === "undefined") {
    return;
  }

  const processEmbeds = () => {
    if (window.instgrm?.Embeds?.process) {
      window.instgrm.Embeds.process();
    }
  };

  const existingScript = document.getElementById("instagram-embed-script");

  if (!existingScript) {
    const script = document.createElement("script");
    script.id = "instagram-embed-script";
    script.async = true;
    script.src = "//www.instagram.com/embed.js";
    script.onload = processEmbeds;
    document.body.appendChild(script);
    return;
  }

  processEmbeds();
}

function buildInstagramEmbedHtml(permalink) {
  return `
    <blockquote class="instagram-media" data-instgrm-permalink="${permalink}" data-instgrm-version="14" style="background:#FFF; border:0; border-radius:18px; box-shadow:0 12px 28px rgba(15, 93, 94, 0.12); margin:0 auto; max-width:540px; min-width:240px; padding:0; width:100%;">
      <a href="${permalink}" target="_blank" rel="noopener noreferrer"></a>
    </blockquote>
  `.trim();
}

export default function InstagramEmbed({ embedUrl, label }) {
  useEffect(() => {
    ensureInstagramScript();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.instgrm?.Embeds?.process) {
      window.instgrm.Embeds.process();
    }
  }, [embedUrl]);

  return (
    <div
      className="project-detail__embed"
      aria-label={label}
      dangerouslySetInnerHTML={{ __html: buildInstagramEmbedHtml(embedUrl) }}
    />
  );
}
