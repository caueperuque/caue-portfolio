import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style/Header.scss';

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'Sobre' },
  { path: '/projects', label: 'Projetos' },
  { path: '/contact', label: 'Contato' },
];

function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('/');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleClick = () => {
    if (window.matchMedia('(max-width: 768px)').matches) {
      setOpen(!open);
    }
  };

  return (
    <header className="header fixed-top">
      <Navbar collapseOnSelect className="container" expand="md">
        <Navbar.Brand>
          <Link to="/" className="header__logo">
            Cauê
            <span> Peruque</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={ () => setOpen(!open) }
        />
        <Navbar.Collapse in={ open } id="responsive-navbar-nav">
          <Nav className="container me-auto header__links">
            {NAV_LINKS.map((link, index) => (
              <Nav.Link
                key={ index }
                as={ Link }
                to={ link.path }
                className="navlink"
                onClick={ handleClick }
                active={ activeLink === link.path }
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
