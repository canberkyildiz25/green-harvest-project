const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container-wrapper">
          <div className="footer-wrap">
            <a
              className="logo-link"
              href="#home"
              aria-label="Green Harvest - Home page"
            >
              <svg className="logo-icon" aria-hidden="true">
                <use href="/img/sprite.svg#logo-icon"></use>
              </svg>
              <svg className="logo-name" aria-hidden="true">
                <use href="/img/sprite.svg#logo-name"></use>
              </svg>
            </a>
            <p className="footer-text">
              Whether you're looking for a healthy snack or a thoughtful gift, our
              fruit baskets are the perfect choice.
            </p>
          </div>
          <div className="footer-nav-adr-wrapper">
            <nav className="footer-nav">
              <ul className="footer-nav-list">
                <li className="footer-item">
                  <a className="footer-nav-item" href="#how-link">how it works</a>
                </li>
                <li className="footer-item">
                  <a className="footer-nav-item" href="#vegetables">vegetables</a>
                </li>
                <li className="footer-item">
                  <a className="footer-nav-item" href="#review">reviews</a>
                </li>
              </ul>
            </nav>
            <address className="footer-address">
              <a className="footer-tel" href="tel:+380684439426">+380 (68) 443-94-26</a>
              <a
                className="footer-address-line"
                href="https://www.google.com/maps/place/1678+S+Pioneer+Rd,+Salt+Lake+City,+UT+84104"
                target="_blank"
                rel="noopener noreferrer"
              >
                1678 S. Pioneer Road Salt Lake City UT 84104
              </a>
            </address>
          </div>
        </div>

        <div className="privacy-copyright-wrap">
          <p className="privacy-text">
            <a className="privacy" href="#privacy">Privacy Policy</a>
            {' / '}
            <a className="privacy" href="#cookies">Cookie settings</a>
          </p>
          <p className="copyright">
            <span className="copiright-link">
              © Green Harvest {currentYear}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
