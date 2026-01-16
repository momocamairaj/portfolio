import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function NavBar({ sections = [] }) {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <header className="nav-container">
      <motion.nav
        className="nav"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="nav__brand">Your Name</div>
        <button
          className="nav__toggle"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className="nav__links nav__links--desktop">
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`}>{section.label}</a>
            </li>
          ))}
        </ul>
        <AnimatePresence>
          {open ? (
            <motion.ul
              className="nav__links nav__links--mobile"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu}
            >
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.label}</a>
                </li>
              ))}
            </motion.ul>
          ) : null}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
