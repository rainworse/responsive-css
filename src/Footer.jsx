const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-text-content">
        <div className="footer-header">Contact me</div>
        <div className="footer-text">
          Please get in touch if you think our
          <br />
          work could be mutually beneficial😢
        </div>
        <div className="address">
          1234 Random Road <br className="optional-line-break" />
          Random Town, California 12345
        </div>
        <div className="footer-phone-details">
          <img
            className="icon phone-icon"
            src="src/assets/phone.svg"
            alt="phone icon"
          />
          <div className="footer-phone-number">666-777-8888</div>
        </div>
        <div className="footer-email-details">
          <img
            className="icon email-icon"
            src="src/assets/mail.svg"
            alt="email icon"
          />
          <div className="footer-email-address">balltilli@die.xxx</div>
        </div>
        <div className="footer-socials">
          <button className="github social-button"></button>
          <button className="linkedin social-button"></button>
          <button className="twitter social-button"></button>
        </div>
      </div>
      <div className="footer-image-container">
        <picture>
          <source
            srcSet="src\assets\mar-cropped.png"
            media="(max-width: 799px)"
          />
          <source srcSet="src\assets\mar.png" media="(min-width: 800px)" />
          <img
            className="footer-image"
            src="src\assets\mar.png"
            alt="image of me"
          />
        </picture>
      </div>
    </div>
  );
};

export default Footer;
