
export default function ContactCard() {
  return (
    <div className="contact-card">
      <div className="contact-card-header">
        <div className="contact-card-image-frame">
          <div className="contact-card-image">
            <img src="/lucian.png" alt="lucian" width={300} />
          </div>
        </div>
        <div className="contact-card-header-info">
          <div className="contact-card-header-info-name">Luke Anthony</div>
          <div className="contact-card-header-info-title">Tech Associate</div>
        </div>
      </div>
      <div className="contact-card-footer">
        <a href="https://www.github.com/lucian1996" target="_blank">
          <img src="/github.png" width="75" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/lucian1996/" target="_blank">
          <img src="/linkedin.png" width="75" alt="LinkedIn"/>
        </a>
        <a href="https://www.twitter.com/orpheustwin" target="_blank">
          <img src="/twitter.png" width="75" alt="Twitter"/>
        </a>
        <a href="https://t.me/lucian_adrift" target="_blank">
          <img src="/telegram.png" width="75" alt="WhatsApp"/>
        </a>
      </div>
    </div>
  );
}
