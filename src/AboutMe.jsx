const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="image-and-name">
        <picture>
          <source
            srcSet="src\assets\hard-cropped.png"
            media="(max-width: 499px)"
          />
          <source srcSet="src\assets\hard.png" media="(min-width: 500px)" />
          <img
            className="profile-image"
            src="src\assets\hard.png"
            alt="Profile Image"
          />
        </picture>
        <div className="about-name">Placeholder name</div>
      </div>
      <div className="about-me-content">
        <div className="about-me-content-wrapper">
          <div className="about-text-content">
            <div className="about-name-800px">Placeholder name</div>

            <img
              className="profile-image-800px"
              src="src\assets\hard.png"
              alt="Profile Image"
            />
            <div className="about-header">About me</div>
            <div className="about-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur
            </div>
          </div>

          <div className="about-socials">
            <button className="github social-button"></button>
            <button className="linkedin social-button"></button>
            <button className="twitter social-button"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
