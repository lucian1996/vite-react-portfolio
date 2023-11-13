import GetIsMobile from '../utility/function/get-is-mobile';

interface JobProps {
  company: string;
  duration: string;
  image: string;
  role?: string;
  summary?: string;
  bulletArray: string[];
}

export default function Experience(data: JobProps) {
  // Split the duration string into two parts using "-"
  const durationParts = data.duration.split(' - ');
  const startDate = durationParts[0];
  const endDate = durationParts[1] === 'Current' ? 'Present' : durationParts[1];
  const isMobile = GetIsMobile();

  const DurationFormat = () => {
    return (
      <div className="flex justify-center ">
        <div className=" w-1/2 text-right mx-6">{startDate}</div>
        <div>-</div>
        <div className=" w-1/2 text-left mx-6">{endDate}</div>
      </div>
    );
  };

  return (
    <div className={isMobile ? '' : 'job'}>
      <div className="header">
        <div className="header-title">{data.role}</div>
        <div className="header-images">
          <div className="header-image-container">
            <img
              className="header-image"
              src={'/' + data.image + '.png'}
              alt={data.image}
            />
          </div>
          <div className="header-image-container">
            <img
              className="header-image"
              src={'/' + data.image + '-map.png'}
              alt={data.image}
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-title ">{data.company}</div>
        <div className="footer-duration ">{DurationFormat()}</div>
        <div className={isMobile ? 'p-8' : 'footer-summary'}>{data.summary}</div>
        {data.bulletArray.map((bullet, index) => (
          <li className={isMobile ? 'px-16 py-2' : 'footer-bullet'} key={index}>
            {bullet}
          </li>
        ))}
      </div>
    </div>
  );
}
