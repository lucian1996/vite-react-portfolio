import GetIsMobile from '../utility/function/get-is-mobile';

export default function ContactCard() {
  let iconSize = 65;
  const isMobile = GetIsMobile();
  if (isMobile) {
    iconSize = 45;
  }
  return (
    // <div className="contact-card">
    <div className={isMobile ? ' contact-card pt-20' : 'contact-card pt-32'}>
      <div className="contact-card-header">
        <div className="contact-card-image-frame">
          <div className="contact-card-image">
            <img src="/lucian.png" alt="lucian" width={isMobile ? 100 : 200} />
          </div>
        </div>
        <div className="contact-card-header-info">
          <div className="contact-card-header-info-name">Luke Anthony</div>
          <div className="contact-card-header-info-title">Web Developer</div>
        </div>
      </div>
      <div className={isMobile ? 'flex gap-8 pt-8' : 'contact-card-footer'}>
        <a href="https://www.github.com/lucian1996" target="_blank">
          <img src="/github.png" width={iconSize} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/lucian1996/" target="_blank">
          <img src="/linkedin.png" width={iconSize} alt="LinkedIn" />
        </a>
        <a href="https://www.twitter.com/orpheustwin" target="_blank">
          <img src="/twitter.png" width={iconSize} alt="Twitter" />
        </a>
        <a href="https://t.me/lucian_adrift" target="_blank">
          <img src="/telegram.png" width={iconSize} alt="WhatsApp" />
        </a>
      </div>
    </div>
  );
}
