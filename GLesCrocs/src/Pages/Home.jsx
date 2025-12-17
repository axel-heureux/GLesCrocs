// src/pages/Home.jsx
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap'
import { FaClock, FaUsers, FaQrcode, FaBell, FaShoppingCart, FaMobileAlt, FaCheckCircle } from 'react-icons/fa'
import './../index.css'  // Import du CSS

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
          <p className="lead text-muted mb-4">
            Évitez les files d'attente, commandez et suivez votre repas en temps réel
          </p>
          <div className="d-flex justify-content-center align-items-center mb-3">
            <div className="me-3">
              <Badge bg="success" className="fs-6 p-2 px-3">
                🚀 100% numérique
              </Badge>
            </div>
            <div className="me-3">
              <Badge bg="warning" text="dark" className="fs-6 p-2 px-3">
                ⏱️ Temps réel
              </Badge>
            </div>
            <div>
              <Badge bg="info" className="fs-6 p-2 px-3">
                📱 Mobile friendly
              </Badge>
            </div>
          </div>
        </Col>
      </Row>

      {/* Stats Section */}
      <Row className="mb-5">
        <Col md={4} className="mb-4">
          <Card className="glescrocs-card text-center h-100 shadow">
            <Card.Body className="p-4">
              <div className="mb-3">
                <div className="bg-success rounded-circle d-inline-flex align-items-center justify-content-center"
                     style={{ width: '80px', height: '80px' }}>
                  <FaUsers className="text-white" size={36} />
                </div>
              </div>
              <Card.Title className="fs-4 fw-bold mb-3">Numéro en cours</Card.Title>
              <div className="queue-number my-3">{currentNumber}</div>
              <Badge bg="success" className="fs-6 p-2 px-4 mt-2">
                En service
              </Badge>
              <p className="text-muted mt-3 mb-0">
                <small>{queueLength} personnes en attente</small>
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className="glescrocs-card text-center h-100 shadow">
            <Card.Body className="p-4">
              <div className="mb-3">
                <div className="bg-warning rounded-circle d-inline-flex align-items-center justify-content-center"
                     style={{ width: '80px', height: '80px' }}>
                  <FaClock className="text-white" size={36} />
                </div>
              </div>
              <Card.Title className="fs-4 fw-bold mb-3">Temps d'attente</Card.Title>
              <div className="display-1 fw-bold my-3 text-warning">{waitTime}</div>
              <p className="fs-5 fw-semibold">minutes estimées</p>
              <div className="progress mt-3" style={{ height: '10px' }}>
                <div 
                  className="progress-bar bg-warning" 
                  role="progressbar" 
                  style={{ width: '60%' }}
                  aria-valuenow="60" 
                  aria-valuemin="0" 
                  aria-valuemax="100"
                ></div>
              </div>
              <p className="text-muted mt-2 mb-0">
                <small>Temps moyen: 8.5 minutes</small>
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className="glescrocs-card text-center h-100 shadow">
            <Card.Body className="p-4">
              <div className="mb-3">
                <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center"
                     style={{ width: '80px', height: '80px' }}>
                  <FaQrcode className="text-white" size={36} />
                </div>
              </div>
              <Card.Title className="fs-4 fw-bold mb-3">QR Code</Card.Title>
              <div className="bg-light p-4 my-3 rounded-3 border">
                {/* QR Code placeholder avec style amélioré */}
                <div 
                  style={{ 
                    width: '150px', 
                    height: '150px', 
                    margin: '0 auto',
                    background: 'linear-gradient(45deg, #4CAF50, #2E7D32)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                >
                  <span className="text-white fs-1">🐊</span>
                </div>
              </div>
              <p className="text-muted mb-3">Scannez pour suivre votre commande</p>
              <Button variant="outline-primary" size="sm" className="mt-2">
                Télécharger QR Code
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Actions */}
      <Row className="text-center mb-5">
        <Col>
          <Button size="lg" className="btn-glescrocs me-3 mb-3 px-5 py-3">
            <FaShoppingCart className="me-2" /> Commander maintenant
          </Button>
          <Button 
            variant="outline-success" 
            size="lg"
            className="mb-3 px-5 py-3"
            href="/queue"
          >
            <FaMobileAlt className="me-2" /> Voir la file d'attente
          </Button>
        </Col>
      </Row>

      {/* Instructions avec icônes */}
      <Row className="mt-5 pt-4">
        <Col className="text-center mb-4">
          <h2 className="fw-bold mb-5">Comment ça marche ?</h2>
        </Col>
      </Row>
      
      <Row className="mt-3">
        <Col md={4} className="mb-4">
          <Card className="text-center border-0 h-100 shadow-sm">
            <Card.Body className="p-4">
              <div className="bg-success rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                   style={{ width: '90px', height: '90px' }}>
                <div>
                  <span className="text-white fs-2 fw-bold d-block">1</span>
                  <FaShoppingCart className="text-white mt-1" size={24} />
                </div>
              </div>
              <Card.Title className="fs-5 fw-bold mb-3">Commandez</Card.Title>
              <Card.Text className="text-muted">
                Choisissez vos plats depuis votre téléphone, tablette ou directement à la caisse.
                Menu disponible en ligne 24h/24.
              </Card.Text>
              <Button variant="outline-success" size="sm" className="mt-2">
                Voir le menu
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className="text-center border-0 h-100 shadow-sm">
            <Card.Body className="p-4">
              <div className="bg-success rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                   style={{ width: '90px', height: '90px' }}>
                <div>
                  <span className="text-white fs-2 fw-bold d-block">2</span>
                  <FaMobileAlt className="text-white mt-1" size={24} />
                </div>
              </div>
              <Card.Title className="fs-5 fw-bold mb-3">Suivez</Card.Title>
              <Card.Text className="text-muted">
                Visualisez votre position dans la file en temps réel.
                Recevez des notifications sur l'avancement de votre commande.
              </Card.Text>
              <Button variant="outline-success" size="sm" className="mt-2">
                Activer notifications
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className="text-center border-0 h-100 shadow-sm">
            <Card.Body className="p-4">
              <div className="bg-success rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                   style={{ width: '90px', height: '90px' }}>
                <div>
                  <span className="text-white fs-2 fw-bold d-block">3</span>
                  <FaCheckCircle className="text-white mt-1" size={24} />
                </div>
              </div>
              <Card.Title className="fs-5 fw-bold mb-3">Recevez</Card.Title>
              <Card.Text className="text-muted">
                Soyez notifié quand votre repas est prêt.
                Évitez l'attente inutile, profitez de votre temps.
              </Card.Text>
              <Button variant="outline-success" size="sm" className="mt-2">
                Témoignages
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Section avantages */}
      <Row className="mt-5 pt-5 border-top">
        <Col className="text-center mb-4">
          <h3 className="fw-bold mb-4">Pourquoi choisir GLESCROCS ?</h3>
        </Col>
      </Row>
      
      <Row className="text-center">
        <Col md={3} className="mb-4">
          <div className="p-3">
            <div className="fs-1 mb-3">🚀</div>
            <h5 className="fw-bold">Rapide</h5>
            <p className="text-muted small">Réduction du temps d'attente de 70%</p>
          </div>
        </Col>
        <Col md={3} className="mb-4">
          <div className="p-3">
            <div className="fs-1 mb-3">💚</div>
            <h5 className="fw-bold">Écologique</h5>
            <p className="text-muted small">Réduction du gaspillage alimentaire</p>
          </div>
        </Col>
        <Col md={3} className="mb-4">
          <div className="p-3">
            <div className="fs-1 mb-3">📊</div>
            <h5 className="fw-bold">Transparent</h5>
            <p className="text-muted small">Suivi en temps réel de votre commande</p>
          </div>
        </Col>
        <Col md={3} className="mb-4">
          <div className="p-3">
            <div className="fs-1 mb-3">⭐</div>
            <h5 className="fw-bold">Satisfait</h5>
            <p className="text-muted small">94% de satisfaction client</p>
          </div>
        </Col>
      </Row>

      {/* Footer section */}
      <Row className="mt-5 pt-4 border-top">
        <Col className="text-center">
          <p className="text-muted mb-2">
            <small>© 2024 GLESCROCS - Système de gestion de file d'attente intelligente</small>
          </p>
          <div>
            <Button variant="link" size="sm" className="text-muted me-3">
              Conditions d'utilisation
            </Button>
            <Button variant="link" size="sm" className="text-muted me-3">
              Politique de confidentialité
            </Button>
            <Button variant="link" size="sm" className="text-muted">
              Contact
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Home