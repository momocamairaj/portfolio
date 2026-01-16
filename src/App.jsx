import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import BlogSection from "./components/BlogSection.jsx";
import Videos from "./components/Videos.jsx";
import Footer from "./components/Footer.jsx";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "blog", label: "Blog" },
  { id: "videos", label: "Videos" }
];

export default function App() {
  return (
    <div className="app">
      <NavBar sections={sections} />
      <main>
        <Hero />
        <About />
        <Projects />
        <BlogSection />
        <Videos />
      </main>
      <Footer />
    </div>
  );
}
