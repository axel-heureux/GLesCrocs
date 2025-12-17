import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Toaster } from 'react-hot-toast'
import { FaHome, FaUsers, FaCashRegister, FaCog } from 'react-icons/fa'
import Home from './pages/Home'
import Queue from './pages/Queue'
import Admin from './pages/Admin'
import Cashier from './pages/Cashier'

function App() {
  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
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

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/queue" element={<Queue />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/cashier" element={<Cashier />} />
        </Routes>
        <Toaster position="top-right" />
      </Container>
    </BrowserRouter>
  )
}

export default App