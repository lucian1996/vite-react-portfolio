import GetIsMobile from "../utility/function/get-is-mobile"

export default function Job() {
  const isMobile = GetIsMobile()

  const compaony = 'Citizens'
  const duration = 'September 2019 - August 2020'
  const image = 'citizens'
  const bulletArray = [
    'Executed large scale recipe instructions for an extensive seasonal breakfast and lunch menu.',
    'Daily meal prep delivery through Uber to update and organize five individual storefront inventories based in Manhattan.'
  ]

  function BulletList() {
    const bulletPointArray = bulletArray.map((bullet) => (
      <li className="job-footer-bullet" key={bullet}>{bullet}</li>
    ));
    return bulletPointArray;
  }

  return (
    <>
      {/* <div className="job-header"> */}
      <div className={isMobile ? 'job-header px-16' : 'job-header pl-32 pr-56'}>
        <div className="job-header-info">
          <div className="job-header-info-title">{compaony}</div>
          <div className="job-header-info-summary">{duration}</div>
        </div>
        <img className='job-header-image' src={"/" + image + "-map.png"} alt={image + "-map"} width={isMobile ? 300 : 400} />
      </div>
      <div className={isMobile ? 'job-footer px-16' : 'job-footer px-16'}>
        <img className='job-footer-image' src={"/" + image + ".png"} alt={image} width={isMobile ? 300 : 500} />
        <div className="job-footer-bullet-list">
          <BulletList />
        </div>
      </div>
    </>
  )
}
{/* <div className="flex py-8 px-10"> */ }

