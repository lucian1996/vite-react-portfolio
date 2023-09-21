import projectData from '../content/project-data';
import Project from './project';

export default function ProjectList() {

  return (
    <div className="frame">
      {projectData.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
}
