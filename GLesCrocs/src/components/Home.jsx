// src/pages/Home.jsx
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap'
import { FaClock, FaUsers, FaQrcode, FaBell } from 'react-icons/fa'

function Home() {
  const currentNumber = 42
  const waitTime = 15
  const queueLength = 8

  return (
    <Container className="py-5">
      {/* Hero Section */}
      <Row className="text-center mb-5">
        <Col>
          <h1 className="display-4 fw-bold mb-3">
            Bienvenue à la cantine <span className="text-success">GLESCROCS</span>
          </h1>
          <p className="lead text-muted">
            Évitez les files d'attente, commandez et suivez votre repas en temps réel
          </p>
        </Col>
      </Row>

      {/* Stats Section */}
      <Row className="mb-5">
        <Col md={4} className="mb-4">
          <Card className="glescrocs-card text-center h-100">
            <Card.Body>
              <FaUsers className="text-success mb-3" size={48} />
              <Card.Title className="fs-4">Numéro en cours</Card.Title>
              <div className="queue-number my-3">{currentNumber}</div>
              <Badge bg="success" className="fs-6 p-2">
                En service
              </Badge>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className="glescrocs-card text-center h-100">
            <Card.Body>
              <FaClock className="text-warning mb-3" size={48} />
              <Card.Title className="fs-4">Temps d'attente</Card.Title>
              <div className="display-1 fw-bold my-3">{waitTime}</div>
              <p className="fs-5">minutes estimées</p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className="glescrocs-card text-center h-100">
            <Card.Body>
              <FaQrcode className="text-primary mb-3" size={48} />
              <Card.Title className="fs-4">QR Code</Card.Title>
              <div className="bg-light p-4 my-3 rounded">
                {/* QR Code placeholder */}
                <div 
                  style={{ 
                    width: '150px', 
                    height: '150px', 
                    margin: '0 auto',
                    background: 'linear-gradient(45deg, #4CAF50, #2E7D32)',
                    borderRadius: '8px'
                  }}
                />
              </div>
              <p className="text-muted">Scannez pour suivre votre commande</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Actions */}
      <Row className="text-center mb-5">
        <Col>
          <Button size="lg" className="btn-glescrocs me-3 mb-3">
            <FaBell className="me-2" /> Commander maintenant
          </Button>
          <Button 
            variant="outline-success" 
            size="lg"
            className="mb-3"
            href="/queue"
          >
            Voir la file d'attente
          </Button>
        </Col>
      </Row>

      {/* Instructions */}
      <Row className="mt-5">
        <Col md={4} className="mb-4">
          <Card className="text-center border-0 h-100">
            <Card.Body>
              <div className="bg-success rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                   style={{ width: '70px', height: '70px' }}>
                <span className="text-white fs-3 fw-bold">1</span>
              </div>
              <Card.Title className="fs-5 fw-bold">Commandez</Card.Title>
              <Card.Text>
                Choisissez vos plats depuis votre téléphone ou à la caisse
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className="text-center border-0 h-100">
            <Card.Body>
              <div className="bg-success rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                   style={{ width: '70px', height: '70px' }}>
                <span className="text-white fs-3 fw-bold">2</span>
              </div>
              <Card.Title className="fs-5 fw-bold">Suivez</Card.Title>
              <Card.Text>
                Visualisez votre position dans la file en temps réel
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className="text-center border-0 h-100">
            <Card.Body>
              <div className="bg-success rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                   style={{ width: '70px', height: '70px' }}>
                <span className="text-white fs-3 fw-bold">3</span>
              </div>
              <Card.Title className="fs-5 fw-bold">Recevez</Card.Title>
              <Card.Text>
                Soyez notifié quand votre repas est prêt à être retiré
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Home