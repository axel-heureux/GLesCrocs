// src/components/Header.jsx
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Home, Users, Settings, QrCode } from 'react-icons/fa'
import { FaHome, FaUsers, FaCog, FaQrcode } from 'react-icons/fa'

function Header() {
  return (
    <Navbar bg="glescrocs" variant="dark" expand="lg" className="shadow">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <span className="fs-3 fw-bold">🐊 GLESCROCS</span>
          <span className="ms-2 d-none d-md-block">Gestion de File d'Attente</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="d-flex align-items-center">
              <FaHome className="me-2" /> Accueil
            </Nav.Link>
            <Nav.Link as={Link} to="/queue" className="d-flex align-items-center">
              <FaUsers className="me-2" /> File en direct
            </Nav.Link>
            <Nav.Link as={Link} to="/cashier" className="d-flex align-items-center">
              <FaQrcode className="me-2" /> Caisse
            </Nav.Link>
            <Nav.Link as={Link} to="/admin" className="d-flex align-items-center">
              <FaCog className="me-2" /> Admin
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header