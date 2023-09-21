import Fireflies from "../components/interface/fireflies";
import Header from "../components/interface/header";
import '../utility/style/page/history.css'
import { motion } from "framer-motion";

export default function About() {
  return (
    <div id="History" className="layout">
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="main"
      >
        <div className="frame">
          awd
        </div>
      </motion.div>
      <Fireflies />
    </div>
  );
}
