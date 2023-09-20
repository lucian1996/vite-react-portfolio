interface ProjectProps {
  name: string
  date: string
  summary: string
  image: string
  techArray: string[]
  demoUrl?: string
  githubUrl: string
  textLeft: boolean
}

export default function Project(data: ProjectProps) {
  const TechIcons = () => {
    const techIconsArray = data.techArray.map((tech) => (
      <img key={tech} src={`/${tech}.svg`} alt={tech} width={72} height={72} />
    ));
    return techIconsArray;
  };

  if (data.textLeft) {
    return (
      <div className="project">
        <div className="project-header">
          <div className="project-header-photo-frame">
            <div className="project-header-photo">
              <img src={'/' + data.image + '.png'} alt={data.image} />
            </div>
          </div>
          <div className="project-header-info">
            <div className="project-header-info-upper">
              <div className="project-header-info-title">{data.name}</div>
              <div className="project-header-info-date">{data.date}</div>
            </div>
            <div className="project-header-info-tech">
              <TechIcons />
            </div>
            <div className="project-header-info-links">
              <div className="project-header-info-link">
                <a href={data.demoUrl}>Demo</a>
              </div>
              <div className="project-header-info-link">
                <a href={data.githubUrl}>Github</a>
              </div>
            </div>
          </div>
        </div>
        <div className="project-summary">{data.summary}</div>
      </div>
    );
  } else {
    return (
      <div className="project">
        <div className="project-header">
          <div className="project-header-info">
            <div className="project-header-info-upper">
              <div className="project-header-info-title">{data.name}</div>
              <div className="project-header-info-date">{data.date}</div>
            </div>
            <div className="project-header-info-tech">
              <TechIcons />
            </div>
            <div className="project-header-info-links">
              <div className="project-header-info-link">
                <a href={data.githubUrl}>Github</a>
              </div>
              <div className="project-header-info-link">
                <a href={data.demoUrl}>Demo</a>
              </div>
            </div>
          </div>
          <div className="project-header-photo-frame">
            <div className="project-header-photo">
              <img src={'/' + data.image + '.png'} alt={data.image} />
            </div>
          </div>
        </div>
        <div className="project-summary">{data.summary}</div>
      </div>
    );
  }
}
