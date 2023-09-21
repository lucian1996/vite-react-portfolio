import Fireflies from "../components/interface/fireflies";
import Header from "../components/interface/header";
import ProjectList from "../components/project-list";
import '../utility/style/page/projects.css'
import { motion } from "framer-motion";

export default function About() {
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
        <ProjectList />
      </motion.div>
      <Fireflies />
    </div>
  );
}
