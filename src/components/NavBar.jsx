import { motion } from "framer-motion";
import { toUrl } from "../paths.js";

export default function NavBar({ sections = [], onSectionNavigate, onBrandNavigate, isHome = false }) {

  const handleSectionClick = (event, href) => {
    if (!onSectionNavigate) {
      return;
    }

    event.preventDefault();
    onSectionNavigate(href);
  };

  const handleBrandClick = (event) => {
    if (!onBrandNavigate) {
      return;
    }

    event.preventDefault();
    onBrandNavigate();
  };

  const renderLink = (section) => (
    <a href={toUrl(section.href)} onClick={(event) => handleSectionClick(event, section.href)}>
      {section.label}
    </a>
  );

  const navClassNames = ["nav"];
  const containerClassNames = ["nav-container"];

  if (isHome) {
    containerClassNames.push("nav-container--hero");
  }

  return (
    <header className={containerClassNames.join(" ")}>
      <motion.nav
        className={navClassNames.join(" ")}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
      >
        <a href={toUrl("/")} className="nav__brand sirivennela-regular" onClick={handleBrandClick}>
          Momoca
        </a>
        <ul className="nav__links nav__links--desktop">
          {sections.map((section) => (
            <li key={section.id}>{renderLink(section)}</li>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
}
