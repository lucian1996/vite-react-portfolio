import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Projects from "../../page/projects-page";
import History from "../../page/experience-page";
import About from "../../page/about-page";
import Home from "../../page/home-page";
import Contact from "../../page/contact-page";
function AnimatedRoutes() {
  // const location = useLocation();
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/history" element={<History />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;

// <Routes key={location.pathname} location={location}>
