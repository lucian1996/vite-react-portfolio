
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
  function TechIcons({ reverse }: { reverse?: boolean }) {
    const techIconsArray = data.techArray.map(tech => (
      <img
        key={tech}
        src={`/${tech}.svg`}
        alt={tech}
        className='icon'
      />
      // width = { 72} height = { 72}
    ));
    if (reverse) {
      techIconsArray.reverse();
    }
    return techIconsArray;
  }

  // if (data.textLeft) {
  return (
    <div className='project'>
      <div className="header">
        <div className="header-left">
          <div className="header-title">{data.name}</div>
          <div className="header-release">{data.date}</div>
          <div className="header-tech">
            <TechIcons />
          </div>
        </div>
        <div className="header-right">
          <img
            className={'header-image'}
            src={'/' + data.image + '.png'}
            alt={data.image}
          />
        </div>
      </div>
      <div className="summary">{data.summary}</div>
    </div>
  );
  //   } else {
  //     return (
  //       <div className={isMobile ? 'p-3' : 'project'}>
  //         <div className="project-header">
  //           <div className="project-header-info">
  //             <div className="project-header-info-upper">
  //               <div className="project-header-info-title">{data.name}</div>
  //               <div className="project-header-info-date">{data.date}</div>
  //             </div>
  //             <div className="project-header-info-tech">
  //               <TechIcons />
  //             </div>
  //             <div className="project-header-info-links">
  //               <div className="project-header-info-link">
  //                 <a href={data.githubUrl} target="_blank">
  //                   Github
  //                 </a>
  //               </div>
  //               <div className="project-header-info-link">
  //                 <a href={data.demoUrl} target="_blank">
  //                   Demo
  //                 </a>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="project-header-photo-frame">
  //             <img
  //               className={'project-header-photo'}
  //               src={'/' + data.image + '.png'}
  //               alt={data.image}
  //             />
  //           </div>
  //         </div>
  //         <div className={isMobile ? 'p-8' : 'project-summary'}>{data.summary}</div>
  //       </div>
  //     );
  //   }
}
