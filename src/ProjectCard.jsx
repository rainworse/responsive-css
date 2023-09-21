const ProjectCard = () => {
  return (
    <div className="project-card">
      <div className="project-image">screenshot of project</div>
      <div className="project-details">
        <div className="project-title-and-links">
          <div className="project-name">Project name</div>
          <div className="project-links">
            <button className="github social-button"></button>
            <button className="external social-button"></button>
          </div>
        </div>
        <div className="project-description">
          Short description of the project. Just a couple sentences will do.
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
