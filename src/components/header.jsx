import "../styles/header.css";
import logoMain from "../assets/logos/Jubail_logo_main.png";
import SearchIcon from "../assets/icons/search.svg?react";
import MenuIcon from "../assets/icons/menu.svg?react";
import CloseIcon from "../assets/icons/close.svg?react";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <header className="page-header" aria-label="page header">
      <img
        src={logoMain}
        className="logo"
        aria-label="jubail logo"
        alt="jubail logo"
      ></img>

      <div className="header-actions" aria-label="header actions">
        <SearchIcon className="icon" />
        {menuOpen ? (
          <button
            className="action-btn"
            aria-label="close button"
            onClick={handleMenu}
          >
            <CloseIcon className="icon" />
          </button>
        ) : (
          <button
            className="action-btn"
            aria-label="menu button"
            onClick={handleMenu}
          >
            <MenuIcon className="icon" />
          </button>
        )}
      </div>
      <div className={`menu-options ${menuOpen ? "open" : ""}`}>
        <nav className="menu-navigation" aria-label="menu navigation">
          <ul className="navigation-links" aria-label="navigation links">
            <li className="link" aria-label="link">
              <a>Home</a>
            </li>
            <li className="link" aria-label="link">
              <a>About Us</a>
            </li>
            <li className="link" aria-label="link">
              <a>Team</a>
            </li>
            <li className="link" aria-label="link">
              <a>Articles</a>
            </li>
            <li className="link" aria-label="link">
              <a>Expertise</a>
            </li>
            <li className="link" aria-label="link">
              <a>Resources</a>
            </li>
            <li className="link" aria-label="link">
              <a>Media</a>
            </li>
          </ul>
        </nav>
        <button>Consult An Advocate</button>
      </div>
    </header>
  );
}
