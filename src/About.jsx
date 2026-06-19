function About() {
  const TechChip = ({ short, label, color }) => (
    <span className="chip">
      <svg
        className="chip-logo"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <rect x="3" y="3" width="18" height="18" rx="6" fill={color} />
        <text
          x="12"
          y="12.5"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="rgba(255,255,255,0.95)"
          fontSize="9.5"
          fontWeight="800"
          fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial"
        >
          {short}
        </text>
      </svg>
      {label}
    </span>
  );

  const techItems = [
    { short: "H5", label: "HTML5", color: "#e34c26" },
    { short: "C3", label: "CSS3", color: "#264de4" },
    { short: "JS", label: "JavaScript", color: "#f7df1e" },
    { short: "TS", label: "TypeScript", color: "#3178c6" },
    { short: "R", label: "React", color: "#149eca" },
    { short: "TW", label: "TailwindCSS", color: "#38bdf8" },
    { short: "V", label: "Vite", color: "#a855f7" },
    { short: "N", label: "Node.js", color: "#3c873a" },
    { short: "A", label: "AdonisJS", color: "#7c3aed" },
    { short: "PG", label: "PostgreSQL", color: "#336791" },
    { short: "Ne", label: "Neon Postgres", color: "#00E599" },
    { short: "Git", label: "Git", color: "#f97316" },
    { short: "GH", label: "GitHub", color: "#0f172a" },
    { short: "F", label: "Figma", color: "#a21caf" },
    { short: "Cl", label: "Cloudinary", color: "#3448C5" },
    { short: "Nl", label: "Netlify", color: "#00AD9F" },
    { short: "Rw", label: "Railway", color: "#131415" },
    { short: "Rn", label: "Render", color: "#D64278" },
    { short: "Ej", label: "EmailJS", color: "#F3A323" }
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-card">
          
          {/* ZONE 1 : La grille haute (Gauche / Droite) */}
          <div className="about-content about-body">
            <aside className="about-sidebar">
              <h3>À propos de moi</h3>
              <div className="about-links">
                <a
                  className="about-link"
                  href="https://github.com/EddyMamba"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

                {/* Lien LinkedIn ajouté */}
                <a
                  className="about-link"
                  href="https://www.linkedin.com/in/eddy-mamba" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                
                {/* Lien direct vers PDF public */}
                <a
                  className="about-link"
                  href="CV__Eddy_Mamba.pdf" 
                  target="_blank"
                  rel="noopener noreferrer" 
                >
                  Mon CV
                </a>
              </div>
            </aside>

            <div className="about-copy">
              <p className="about-lead">
                Développeur web passionné, je conçois des applications modernes, performantes et centrées sur l'utilisateur. Diplômé de la Kadea Academy, j'ai développé une solide expertise en React, Tailwind CSS, AdonisJS et PostgreSQL à travers des projets concrets, dont un clone complet de X (Twitter).
              </p>

              <p className="about-text">
                Passionné par l'UI/UX Design, je crée des interfaces intuitives, accessibles et esthétiques, en mettant l'accent sur une expérience utilisateur fluide et efficace.
              </p>

              <p className="about-text">
                Curieux, autonome et rigoureux, je cherche constamment à perfectionner mes compétences et à contribuer à des projets innovants à fort impact.
              </p>
            </div>
          </div>

          {/* ZONE 2 : La Stack Technique */}
          <div className="tech-section">
            <h3>Ma Stack Technique</h3>
            <div className="tech-group__chips" aria-label="Stack technique">
              {techItems.map((item) => (
                <TechChip key={item.label} {...item} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;