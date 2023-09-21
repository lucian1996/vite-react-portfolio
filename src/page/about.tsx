import Fireflies from "../components/interface/fireflies";
import Header from "../components/interface/header";
import { motion } from "framer-motion";
import '../utility/style/page/about.css'

export default function About() {
  return (
    <div className="layout">
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="main"
      >
        About
      </motion.div >
      <Fireflies />
    </div>
  );
}
