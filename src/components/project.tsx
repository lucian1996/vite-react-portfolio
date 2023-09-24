import GetIsMobile from '../utility/function/get-is-mobile';

interface ProjectProps {
  name: string;
  date: string;
  summary: string;
  image: string;
  techArray: string[];
  demoUrl: string;
  githubUrl: string;
  textLeft: boolean;
}

export default function Project(data: ProjectProps) {
  const isMobile = GetIsMobile();
  function TechIcons({ reverse }: { reverse?: boolean }) {
    const techIconsArray = data.techArray.map(tech => (
      <img
        key={tech}
        src={`/${tech}.svg`}
        alt={tech}
        className={isMobile ? 'icon-mobile' : 'icon'}
      />
      // width = { 72} height = { 72}
    ));
    if (reverse) {
      techIconsArray.reverse();
    }
    return techIconsArray;
  }

  if (data.textLeft) {
    return (
      <div className={isMobile ? '' : 'project'}>
        <div className="project-header">
          <div className="project-header-photo-frame">
            <img
              className={
                isMobile ? 'project-header-photo-mobile' : 'project-header-photo'
              }
              src={'/' + data.image + '.png'}
              alt={data.image}
            />
          </div>
          <div className="project-header-info ">
            <div className="project-header-info-upper ">
              <div className="project-header-info-title">{data.name}</div>
              <div className="project-header-info-date">{data.date}</div>
            </div>
            <div className="project-header-info-tech ">
              <TechIcons reverse={data.textLeft} />
            </div>
            <div className="project-header-info-links">
              <div className="project-header-info-link">
                {data.demoUrl && (
                  <a href={data.demoUrl} target="_blank">
                    Demo
                  </a>
                )}
              </div>
              <div className="project-header-info-link">
                <a href={data.githubUrl} target="_blank">
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={isMobile ? 'p-8' : 'project-summary'}>{data.summary}</div>
      </div>
    );
  } else {
    return (
      <div className={isMobile ? 'p-3' : 'project'}>
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
                <a href={data.githubUrl} target="_blank">
                  Github
                </a>
              </div>
              <div className="project-header-info-link">
                <a href={data.demoUrl} target="_blank">
                  Demo
                </a>
              </div>
            </div>
          </div>
          <div className="project-header-photo-frame">
            <img
              className={
                isMobile ? 'project-header-photo-mobile' : 'project-header-photo'
              }
              src={'/' + data.image + '.png'}
              alt={data.image}
            />
          </div>
        </div>
        <div className={isMobile ? 'p-8' : 'project-summary'}>{data.summary}</div>
      </div>
    );
  }
}
