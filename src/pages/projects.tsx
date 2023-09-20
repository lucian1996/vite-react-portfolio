import Fireflies from "../components/interface/fireflies";
import Header from "../components/interface/header";
export default function About() {
  return (
    <div className="layout">
      <Header />
      <div id="Projects" className="main">
        <div className="project">
          <div className="project-frame">
            <div className="project-header">
              <div className="project-header-info">
                <div className="project-header-info-upper">
                  <div className="project-header-info-title">Personal Portfolio</div>
                  <div className="project-header-info-date">September 2023</div>
                </div>
                <div className="project-header-info-tech">
                  <img src="/vite.svg" alt="vite" width={72} height={72} />
                  <img src="/react.svg" alt="react" width={72} height={72} />
                </div>
              </div>
              <div className="project-header-photo-frame">
                <div className="project-header-photo">
                  <img src="/portfolio.png" alt="portfolio" />
                </div>
              </div>
            </div>
            <div className="project-summary">
              Modern and lightweight portfolio designed to 
              demonstrate an adept understanding of modern CSS alongside
              contemporary JavaScript libraries such as Framer Motion 
            </div>
          </div>
        </div>
      </div>
      <Fireflies />
    </div>
  );
}
