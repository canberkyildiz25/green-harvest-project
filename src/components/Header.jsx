import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <a
          className="logo-link"
          href="#home"
          aria-label="Green Harvest - Home page"
        >
          <svg className="logo-icon" width="16" height="16" aria-hidden="true">
            <use href="/img/sprite.svg#logo-icon"></use>
          </svg>
          <svg className="logo-name" width="146" height="12" aria-hidden="true">
            <use href="/img/sprite.svg#logo-name"></use>
          </svg>
        </a>
        <nav className="header-nav">
          <ul className="header-menu">
            <li className="header-item">
              <a className="header-link" href="#how-link"> How It Works </a>
            </li>
            <li className="header-item">
              <a className="header-link" href="#vegetables"> Vegetables </a>
            </li>
            <li className="header-item">
              <a className="header-link" href="#review"> Reviews </a>
            </li>
          </ul>
        </nav>
        <a
          className="shop-btn shop-btn-header"
          href="#section-order"
          aria-label="Order vegetables now"
        >
          Shop now
        </a>
        <button
          className="burger-btn"
          type="button"
          aria-label="Open navigation menu"
          onClick={toggleMenu}
        >
          <svg className="burger-icon" width="32" height="32" aria-hidden="true">
            <use href="/img/sprite.svg#burger-btn"></use>
          </svg>
        </button>
      </div>
      <div className={`menu-backdrop-wr ${isMenuOpen ? 'is-open' : ''}`}>
        <div className="menu-backdrop">
          <button
            className="menu-button-close"
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <svg
              className="menu-button-close-svg"
              aria-hidden="true"
              width="32"
              height="32"
            >
              <use href="/img/sprite.svg#close-btn"></use>
            </svg>
          </button>
          <div className="menu-wrapper">
            <ul className="menu-list">
              <li className="menu-item">
                <a className="menu-link" href="#how-link" onClick={closeMenu}>How It Works</a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="#vegetables" onClick={closeMenu}>Vegetables</a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="#review" onClick={closeMenu}>Reviews</a>
              </li>
            </ul>
            <a
              href="#section-order"
              aria-label="Order vegetables now"
              className="menu-btn-shop"
              onClick={closeMenu}
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
