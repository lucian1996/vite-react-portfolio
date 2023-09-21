import GetIsMobile from "../utility/function/get-is-mobile"

export default function Job() {
  const isMobile = GetIsMobile()
  return (
    <>
      {/* <div className="job-header"> */}
      <div className={isMobile ? 'job-header px-16' : 'job-header pl-32 pr-56'}>
        <div className="job-header-info">
          <div className="job-header-info-title">Citizens</div>
          <div className="job-header-info-summary">September 2019 - August 2020</div>
        </div>
        <img className='job-header-image' src="/citizens-map.png" alt="citizens-map" width={isMobile ? 300 : 400} />
      </div>
      <div className={isMobile ? 'job-footer px-16' : 'job-footer px-16'}>
        <img className='job-footer-image' src="/citizens.png" alt="citizens" width={isMobile ? 300 : 500} />
        <div className="job-footer-bullet-list">
          <div className="job-footer-bullet">
            Executed large scale recipe instructions for an extensive seasonal breakfast and lunch menu.
          </div>
          <div className="job-footer-bullet">
            Daily meal prep delivery through Uber to update and organize five individual storefront inventories based in Manhattan.
          </div>
        </div>
      </div>
    </>
  )
}
{/* <div className="flex py-8 px-10"> */ }

