function Projects() {
  const projects = [
    {title: "X Clone",
  description:
    "Développement des fonctionnalités clés d'un réseau social avec intégration d'une authentification sécurisée à double facteur (2FA). Gestion de la timeline, des likes et du système d'abonnements.",
  techs: ["AdonisJS", "PostgreSQL", "Edge Templates"],
  image: "x.png",
  github: "https://github.com/kadea-academy-learners/capstone-x-clone-adonis-EddyMamba",
  live: "https://capstone-x-clone-adonis-eddymamba-2.onrender.com",
    },
    {
      title: "Portfolio",
      description:
        "Portfolio personnel développé avec React et EmailJS pour présenter mes projets et permettre un contact direct.",
      techs: ["React", "CSS", "EmailJS"],
      image: "porftolio1.png",
      github: "https://github.com/EddyMamba/mon-portfolio",
      live: "https://EddyMamba.github.io/mon-portfolio/",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-card">

        <div className="section-header">
          <p className="section-tag">Projets récents</p>
         
          <p className="section-description">
            Quelques réalisations web conçues avec des technologies modernes,
            axées sur la performance et l’expérience utilisateur.
          </p>
        </div>

        <div className="projects-container">
          {projects.map((project, index) => (
            <article key={index} className="project-card">

              <div className="project-card__visual">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />
              </div>

              <div className="project-card__info">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-badges">
                  {project.techs.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-card__actions">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir le projet
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code source
                  </a>

                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;