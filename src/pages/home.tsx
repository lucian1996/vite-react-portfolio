import Fireflies from "../components/interface/fireflies";
import Header from "../components/interface/header";
import { motion } from "framer-motion";
import GetIsMobile from "../components/utility/get-is-mobile";
export default function Home() {
  const isMobile = GetIsMobile()
  console.log(isMobile)
  return (
    <motion.div
      key='current'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div id={isMobile ? 'mobile-homepage' : 'homepage'}>
        <div className="title">Lucian</div>
        <Header />
        <Fireflies />
      </div>
    </motion.div>
  );
}
