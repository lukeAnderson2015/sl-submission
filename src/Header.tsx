import logo from './stackline_logo.svg';

import './Header.css';

function Header() {
  return (
      <header className="app-header">
        <a
          className="link"
          href="http://stackline.com/"
          title="visit stackline"
          target="_blank"
          rel="noopener noreferrer"
        >
            <img src={logo} className="logo" alt="logo" />
        </a>
      </header>
  );
}

export default Header;
