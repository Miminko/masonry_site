import { ProjectImage } from './components/ProjectImage'
import { projectFeatures } from './data/projects'

function Container() {
  return (
    <div id="main">
      <header className="major container medium">
        <h2>
          Traditional stonemasonry
          <br />
          in natural stone
        </h2>
        <p>
          Ireland-trained craft for new builds, restoration,
          <br />
          and structural stone work.
        </p>
      </header>

      <div className="box alt container">
        {projectFeatures.map((project) => (
          <section
            key={project.title}
            className={`feature ${project.side}`}
          >
            <a href="#" className={`image icon solid ${project.icon}`}>
              <ProjectImage src={project.image} alt={project.alt} />
            </a>
            <div className="content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </section>
        ))}
      </div>

      <footer className="major container medium">
        <h3>Discuss your project</h3>
        <p>
          Share plans, photos, or site details and we will follow up about scope,
          timeline, and stone options.
        </p>
        <ul className="actions special">
          <li>
            <a href="#footer" className="button">
              Get in touch
            </a>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default Container
