import Fireflies from '../components/interface/fireflies';
import Header from '../components/interface/header';
import experienceData from '../content/experience-data';
import { motion } from 'framer-motion';
import '../style/page/experience.css';
import Experience from '../components/experience';

export default function ExperiencePage() {
  return (
    <div id="Experience" className="layout">
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="main frame"
      >
        {experienceData.map((experience, index) => (
          <Experience
            key={index}
            company={experience.company}
            duration={experience.duration}
            image={experience.image}
            role={experience.role}
            summary={experience.summary}
            bulletArray={experience.bulletArray}
          />
        ))}
      </motion.div>
      <Fireflies />
    </div>
  );
}
