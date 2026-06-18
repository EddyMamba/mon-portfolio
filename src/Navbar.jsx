import { useState } from "react";

const navItems = [
  { href: "#home", label: "Accueil" },
  { href: "#about", label: "À propos" },
  { href: "#projects", label: "Projets" },
  { href: "#contact", label: "Me contacter" } 
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  // On sépare le bouton "Contact" des autres liens réguliers
  const regularLinks = navItems.slice(0, -1); // Prend Accueil, À propos, Projets
  const ctaLink = navItems[navItems.length - 1]; // Prend uniquement le dernier (Contact)

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <h2 className="logo">
          <a href="#home" onClick={closeMenu}>
            Eddy Mamba
          </a>
        </h2>

        <button
          type="button"
          className={`menu-icon ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-menu ${isOpen ? "active" : ""}`}>
          <ul className="nav-links">
            {/* On boucle uniquement sur les liens normaux */}
            {regularLinks.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
                            </li>
            ))}
          </ul>
          
          {/* Le bouton d'action principal bien mis en valeur (désormais activé) */}
          <a 
            href={ctaLink.href} 
            className="nav-cta" 
            onClick={closeMenu}
          >
            {ctaLink.label}
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;