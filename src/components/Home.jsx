import Hero from "./Hero.jsx";
import About from "./About.jsx";

export default function Home({ onNavigate }) {
  return (
    <div className="home-overlay">
      <Hero onNavigate={onNavigate} />
      <About />
    </div>
  );
}
