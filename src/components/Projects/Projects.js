import { projects } from "../../portfolio";
import ProjectItem from "../ProjectItem/ProjectItem";
import "./Projects.css";
const Projects = () => {
  if (!projects.length) return null;

  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Projects</h2>

      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectItem
            key={Math.floor(Math.random() * 1001)}
            project={project}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
