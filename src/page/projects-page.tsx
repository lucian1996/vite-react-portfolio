import Fireflies from "../components/interface/fireflies";
import Header from "../components/interface/header";
import '../utility/style/page/projects.css'
import { motion } from "framer-motion";
import projectData from '../content/project-data';
import Project from "../components/project";

export default function ProjectsPage() {
  return (
    <div id="Projects" className="layout ">
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="main"
      >
        <div className="frame">
          {projectData.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </motion.div>
      <Fireflies />
    </div>
  );
}
