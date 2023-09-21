import GetIsMobile from "../utility/function/get-is-mobile";
interface JobProps {
  company: string
  duration: string
  image: string
  bulletArray: string[]
}

export default function Job(data: JobProps) {
  const isMobile = GetIsMobile();

  return (
    <>
      <div className={isMobile ? 'job-header px-16' : 'job-header pl-36 pr-56'}>
        <div className="job-header-info">
          <div className="job-header-info-title">{data.company}</div>
          <div className="job-header-info-summary">{data.duration}</div>
        </div>
        <img
          className="job-header-image"
          src={`/${data.image}-map.png`}
          alt={`${data.image}-map`}
          width={isMobile ? 300 : 400}
        />
      </div>
      <div className={isMobile ? 'job-footer px-16' : 'job-footer px-16'}>
        <img
          className="job-footer-image"
          src={`/${data.image}.png`}
          alt={data.image}
          width={isMobile ? 300 : 500}
        />
        <ul className="job-footer-bullet-list">
          {data.bulletArray.map((bullet, index) => (
            <li className="job-footer-bullet" key={index}>
              - {bullet}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
