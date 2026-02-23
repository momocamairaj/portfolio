import { useEffect, useState } from "react";
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Footnotes from "./components/Footnotes.jsx";
import SundaysProject from "./components/projects/SundaysProject.jsx";
import ResearchExperienceProject from "./components/projects/ResearchExperienceProject.jsx";
import NarratedDesignSystemsProject from "./components/projects/NarratedDesignSystemsProject.jsx";
import InteractiveStorytellingLabProject from "./components/projects/InteractiveStorytellingLabProject.jsx";
import PioneerWorksProject from "./components/projects/PioneerWorksProject.jsx";
import ExperiencePage from "./components/projects/ExperiencePage.jsx";
import ArticlePage from "./components/articles/ArticlePage.jsx";
import Footer from "./components/Footer.jsx";
import useRevealOnScroll from "./hooks/useRevealOnScroll.js";

const sections = [
  { id: "work", label: "Work", href: "/work" },
  { id: "footnotes", label: "Footnotes", href: "/footnotes" }
];

const projectPagesBySlug = {
  "sundays-studio": SundaysProject,
  "research-experience": ResearchExperienceProject,
  "narrated-design-systems": NarratedDesignSystemsProject,
  "interactive-storytelling-lab": InteractiveStorytellingLabProject,
  "pioneer-works": PioneerWorksProject
};

const getCurrentPath = () => (typeof window !== "undefined" ? window.location.pathname : "/");

export default function App() {
  const [path, setPath] = useState(getCurrentPath);

  useEffect(() => {
    const handlePopState = () => {
      setPath(getCurrentPath());
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (to) => {
    if (typeof window === "undefined") {
      return;
    }

    if (to !== window.location.pathname) {
      window.history.pushState({}, "", to);
    }

    setPath(getCurrentPath());
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateHome = () => navigate("/");

  const handleSectionNavigate = (href) => {
    if (href) {
      navigate(href);
    }
  };

  const workDetailMatch = path.match(/^\/work\/([^/]+)\/?$/);
  const legacyProjectDetailMatch = path.match(/^\/projects\/([^/]+)\/?$/);
  const footnoteDetailMatch = path.match(/^\/footnotes\/([^/]+)\/?$/);
  const legacyBlogDetailMatch = path.match(/^\/blog\/([^/]+)\/?$/);

  const workSlug = workDetailMatch?.[1] || legacyProjectDetailMatch?.[1];
  const footnoteSlug = footnoteDetailMatch?.[1] || legacyBlogDetailMatch?.[1];
  const isWorkDetailPage = Boolean(workSlug);

  useRevealOnScroll(isWorkDetailPage);

  let page = null;
  let pageClass = "app--default";

  if (workSlug) {
    const ProjectPage = projectPagesBySlug[workSlug];
    if (
      workSlug === "pioneer-works" ||
      workSlug === "research-experience" ||
      workSlug === "sundays-studio"
    ) {
      pageClass = "app--work-detail-dark-nav";
    }
    if (ProjectPage) {
      page = <ProjectPage />;
    } else {
      page = <ExperiencePage slug={workSlug} />;
    }
  } else if (footnoteSlug) {
    page = <ArticlePage slug={footnoteSlug} />;
    pageClass = "app--article";
  } else {
    switch (path) {
      case "/":
        page = <Home onNavigate={navigate} />;
        pageClass = "app--home";
        break;
      case "/work":
        page = <Projects onNavigate={navigate} />;
        pageClass = "app--work";
        break;
      case "/about":
        page = <About />;
        pageClass = "app--about";
        break;
      case "/footnotes":
        page = <Footnotes onNavigate={navigate} />;
        pageClass = "app--footnotes";
        break;
      default:
        page = <Home onNavigate={navigate} />;
        pageClass = "app--default";
        break;
    }
  }

  return (
    <div className={`app ${pageClass}`}>
      <NavBar
        sections={sections}
        onSectionNavigate={handleSectionNavigate}
        onBrandNavigate={navigateHome}
        isHome={path === "/"}
      />
      <main>{page}</main>
      {path === "/" ? null : <Footer />}
    </div>
  );
}
