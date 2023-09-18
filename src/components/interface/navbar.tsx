import { Link } from 'react-router-dom';
import PageProps from '../../utility/types/page-props';
import { routes } from '../../utility/config/routes';
import { motion } from "framer-motion";
export default function Navbar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="title">Lucian</div>
      <div className="nav">
        {routes.map((page: PageProps, index: number) => (
          <Link key={index} to={page.href}>
            {page.title}
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
