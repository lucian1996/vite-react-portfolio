import { motion } from "framer-motion";
import GetIsMobile from "../components/utility/get-is-mobile";
import { routes } from "../utility/config/routes";
import { Link } from "react-router-dom";

export default function Home() {
  const isMobile = GetIsMobile();
  return (
    <div className="h-screen">
      <motion.div
        id={isMobile ? "homepage" : "mobile-homepage"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key={isMobile ? "homepage" : "mobile-homepage"}
      >
        <div className="title">Lucian</div>
        <div className="nav">
          {routes.map((page, index) => (
            <Link key={index} to={page.href}>
              {page.title}
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
