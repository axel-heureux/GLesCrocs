// src/pages/Admin.jsx
import { useState } from 'react'
import { Container, Row, Col, Card, Table, Button, Form, Nav, Tab, Badge } from 'react-bootstrap'
import { FaChartBar, FaClipboardList, FaUtensils, FaCog, FaCheck, FaTimes } from 'react-icons/fa'

function Admin() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [orders, setOrders] = useState([
    { id: 1, number: 42, status: 'serving', items: 'Menu du jour', total: '12.50€', time: '12:05' },
    { id: 2, number: 43, status: 'waiting', items: 'Sandwich + Boisson', total: '8.50€', time: '12:07' },
    { id: 3, number: 44, status: 'waiting', items: 'Salade César', total: '10.00€', time: '12:10' },
  ])

  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Menu du jour', price: 12.50, available: true, category: 'plat' },
    { id: 2, name: 'Sandwich Jambon', price: 6.50, available: true, category: 'sandwich' },
    { id: 3, name: 'Salade César', price: 10.00, available: true, category: 'salade' },
  ])

  const serveOrder = (id) => {
    setOrders(orders.map(order => 
      order.id === id ? { ...order, status: 'served' } : order
    ))
  }

  const toggleMenuItem = (id) => {
    setMenuItems(menuItems.map(item => 
      item.id === id ? { ...item, available: !item.available } : item
    ))
  }

  return (
    <Container fluid className="p-0">
      {/* Header */}
      <div className="bg-dark text-white py-3">
        <Container>
          <Row className="align-items-center">
            <Col>
              <h2 className="mb-0">🐊 Tableau de bord administrateur</h2>
            </Col>
            <Col xs="auto">
              <Badge bg="light" text="dark" className="fs-6 p-2">
                Connecté en tant que <strong>Admin</strong>
              </Badge>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="py-4">
        <Row>
          {/* Sidebar */}
          <Col md={3} className="mb-4">
            <Card>
              <Card.Body className="p-0">
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link 
                      active={activeTab === 'dashboard'}
                      onClick={() => setActiveTab('dashboard')}
                      className="d-flex align-items-center py-3"
                    >
                      <FaChartBar className="me-3" /> Tableau de bord
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link 
                      active={activeTab === 'orders'}
                      onClick={() => setActiveTab('orders')}
                      className="d-flex align-items-center py-3"
                    >
                      <FaClipboardList className="me-3" /> Commandes
                      <Badge bg="secondary" className="ms-auto">{orders.length}</Badge>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link 
                      active={activeTab === 'menu'}
                      onClick={() => setActiveTab('menu')}
                      className="d-flex align-items-center py-3"
                    >
                      <FaUtensils className="me-3" /> Menu
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link 
                      active={activeTab === 'settings'}
                      onClick={() => setActiveTab('settings')}
                      className="d-flex align-items-center py-3"
                    >
                      <FaCog className="me-3" /> Paramètres
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Body>
            </Card>
          </Col>

          {/* Main Content */}
          <Col md={9}>
            {activeTab === 'dashboard' && (
              <>
                <Row className="mb-4">
                  <Col md={4} className="mb-3">
                    <Card className="text-center">
                      <Card.Body>
                        <Card.Title className="fs-5">Commandes aujourd'hui</Card.Title>
                        <div className="display-3 fw-bold text-success">127</div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Card className="text-center">
                      <Card.Body>
                        <Card.Title className="fs-5">Temps d'attente moyen</Card.Title>
                        <div className="display-3 fw-bold text-warning">8.5</div>
                        <small className="text-muted">minutes</small>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Card className="text-center">
                      <Card.Body>
                        <Card.Title className="fs-5">En attente</Card.Title>
                        <div className="display-3 fw-bold text-primary">{orders.length}</div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>

                <Card>
                  <Card.Header>
                    <h5 className="mb-0">Commandes en cours</h5>
                  </Card.Header>
                  <Card.Body>
                    <Table hover responsive>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Commande</th>
                          <th>Montant</th>
                          <th>Statut</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map(order => (
                          <tr key={order.id}>
                            <td className="fw-bold">#{order.number}</td>
                            <td>{order.items}</td>
                            <td>{order.total}</td>
                            <td>
                              <Badge bg={order.status === 'serving' ? 'success' : 'warning'}>
                                {order.status === 'serving' ? 'En service' : 'En attente'}
                              </Badge>
                            </td>
                            <td>
                              <Button 
                                size="sm" 
                                variant="success"
                                onClick={() => serveOrder(order.id)}
                                disabled={order.status === 'served'}
                              >
                                <FaCheck className="me-1" /> Servi
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              </>
            )}

            {activeTab === 'menu' && (
              <Card>
                <Card.Header className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">Gestion du menu</h5>
                  <Button variant="success">
                    + Ajouter un plat
                  </Button>
                </Card.Header>
                <Card.Body>
                  <Table hover responsive>
                    <thead>
                      <tr>
                        <th>Plat</th>
                        <th>Catégorie</th>
                        <th>Prix</th>
                        <th>Disponible</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {menuItems.map(item => (
                        <tr key={item.id}>
                          <td className="fw-bold">{item.name}</td>
                          <td>
                            <Badge bg="secondary">{item.category}</Badge>
                          </td>
                          <td>{item.price.toFixed(2)}€</td>
                          <td>
                            <Form.Check 
                              type="switch"
                              checked={item.available}
                              onChange={() => toggleMenuItem(item.id)}
                            />
                          </td>
                          <td>
                            <Button size="sm" variant="outline-primary" className="me-2">
                              Modifier
                            </Button>
                            <Button size="sm" variant="outline-danger">
                              <FaTimes /> Supprimer
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Admin