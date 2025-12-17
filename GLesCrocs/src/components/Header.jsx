// src/components/Header.jsx
import { Navbar, Container, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { FaHome, FaUsers, FaCashRegister, FaCog } from 'react-icons/fa'

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="fw-bold">
          🐊 GLESCROCS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link><FaHome className="me-2" /> Accueil</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/queue">
              <Nav.Link><FaUsers className="me-2" /> File d'attente</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cashier">
              <Nav.Link><FaCashRegister className="me-2" /> Caisse</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/admin">
              <Nav.Link><FaCog className="me-2" /> Admin</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header