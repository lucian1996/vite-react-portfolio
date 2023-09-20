import Fireflies from "../components/interface/fireflies";
import Header from "../components/interface/header";
export default function About() {
  return (
    <div className="layout">
      <Header />
      <div id="Projects" className="main">
        <div className="project">
          <div className="project-title">
            <div>Personal Portfolio</div>
            <div>September 2023</div>
          </div>
          <div className="project-photo-frame">
            <img className="project-photo" src="/portfolio.png" alt="" width={800} height={800} />
          </div>
          <div className="project-summary">
            summary
          </div>
        </div>
      </div>
      <Fireflies />
    </div>
  );
}
