import ProjectCard from './ProjectCard';

const MyWork = () => {
  const projectCount = 6;
  const projects = [];
  for (let i = 0; i < projectCount; i++) {
    projects.push(<ProjectCard />);
  }

  return (
    <div className="my-work">
      <div className="my-work-header">My work</div>
      <div className="my-work-projects">{projects}</div>
    </div>
  );
};

export default MyWork;
