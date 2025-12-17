import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import { FaHome, FaUsers, FaCashRegister, FaCog } from "react-icons/fa";
import Home from "./pages/Home";
import Queue from "./pages/Queue";
import Admin from "./pages/Admin";
import Cashier from "./pages/Cashier";

function App() {
  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold">
            🐊 GLESCROCS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                <FaHome className="me-2" /> Accueil
              </Nav.Link>
              <Nav.Link as={Link} to="/queue">
                <FaUsers className="me-2" /> File d'attente
              </Nav.Link>
              <Nav.Link as={Link} to="/cashier">
                <FaCashRegister className="me-2" /> Caisse
              </Nav.Link>
              <Nav.Link as={Link} to="/admin">
                <FaCog className="me-2" /> Admin
              </Nav.Link>
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
      </Container>
    </BrowserRouter>
  );
}

export default App;
