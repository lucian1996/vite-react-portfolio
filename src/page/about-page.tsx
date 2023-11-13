import Fireflies from '../components/interface/fireflies';
import Header from '../components/interface/header';
import { motion } from 'framer-motion';
import '../style/page/about.css';
import GetIsMobile from '../utility/function/get-is-mobile';
import aboutData from '../content/about-data';

export default function AboutPage() {
  const { name, info, skills1, skills2, summary } = aboutData;
  const idMobile = GetIsMobile();

  return (
    <div id="About" className="layout">
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="main"
      >
        <div className="frame">
          <div className="header">
            <div className="header-left">
              <div className="header-left-title ">{name}</div>
              <div className="header-left-info ">
                <ul>
                  {info.map((element, index) => (
                    <li key={index}>{element}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="header-right">
              <div className="image-container">
                <img src="/lucian.jpg" alt="lucain" className="image" />
                <div className="image-overlay"></div>
              </div>
            </div>
          </div>
          <div className={idMobile ? 'p-8' : 'summary'}>{summary}</div>
          <div className="skills">
            <div className="department">
              <div>Front-End</div>
              <div>Back-End</div>
            </div>
            <div className="skills-content">
              <div className="skills-content-title">Skills</div>
              <div className="skills-content-body">
                <ul>
                  {skills1.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
                <ul>
                  {skills2.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Fireflies />
    </div>
  );
}
