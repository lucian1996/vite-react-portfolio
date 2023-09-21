import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Projects from "../../page/projects";
import History from "../../page/history";
import About from "../../page/about";
import Home from "../../page/home";
import Contact from "../../page/contact";
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
