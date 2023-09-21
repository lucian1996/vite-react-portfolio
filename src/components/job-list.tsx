// JobList.js
import jobData from "../content/job-data";
import Job from "./job";

export default function JobList() {
  return (
    <div className="job-list">
      {jobData.map((job, index) => (
        <Job
          key={index}
          company={job.company}
          duration={job.duration}
          image={job.image}
          bulletArray={job.bulletArray}
        />
      ))}
    </div>
  );
}
