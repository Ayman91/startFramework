import { Nav, NavItem, Navbar, Collapse, NavbarToggler } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import NavbarCss from './Navbar.module.css';
import { useState } from 'react';

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <div className="primary_bg-color py-3 py-md-4 fixed-top">
      <div className="container">
        <Navbar expand="md" color="faded" light className="p-0">
          <NavLink
            to="/"
            className="text-decoration-none text-uppercase text-white m-0 fs-3 fs-md-2 fw-bold"
          >
            start framework
          </NavLink>

          <NavbarToggler onClick={toggleNavbar} className="ms-auto border-0">
            <span className="navbar-toggler-icon"></span>
          </NavbarToggler>

          <Collapse isOpen={isOpen} navbar className="justify-content-end">
            <Nav
              navbar
              className="align-items-center gap-2 gap-md-3 mt-3 mt-md-0"
            >
              <NavItem>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `text-uppercase text-white text-decoration-none fw-bolder px-2 px-md-3 py-1 py-md-2 rounded-1 ${
                      isActive ? NavbarCss.active : ''
                    }`
                  }
                >
                  about
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) =>
                    `text-uppercase text-white text-decoration-none fw-bolder px-2 px-md-3 py-1 py-md-2 rounded-1 ${
                      isActive ? NavbarCss.active : ''
                    }`
                  }
                >
                  portfolio
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `text-uppercase text-white text-decoration-none fw-bolder px-2 px-md-3 py-1 py-md-2 rounded-1 ${
                      isActive ? NavbarCss.active : ''
                    }`
                  }
                >
                  contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default NavbarComponent;
