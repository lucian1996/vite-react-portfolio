import aboutData from '../content/about-data';
import GetIsMobile from '../utility/function/get-is-mobile';

export default function About() {
  const { name, info, skills, summary } = aboutData;
  const idMobile = GetIsMobile();
  return (
    <div className="frame">
      <div className="header">
        <div className="header-left">
          <div className="header-left-title">{name}</div>
          <div className="header-left-info">
            <ul>
              {info.map((element, index) => (
                <li key={index}>{element}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="header-right">
          <div className="image-container">
            <img src="/lucian-selfie.jpg" alt="lucain" className="image" />
            <div className="image-overlay"></div>
          </div>
        </div>
      </div>
      <div className={idMobile ? 'p-8' : 'summary'}>{summary}</div>
      <div className="skills">
        <div className="skills-title">Skills</div>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
