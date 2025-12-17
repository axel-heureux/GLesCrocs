// src/pages/Queue.jsx
import { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Badge, Button, ListGroup, ProgressBar } from 'react-bootstrap'
import { FaCheckCircle, FaClock, FaUserCheck, FaBell } from 'react-icons/fa'

function Queue() {
  const [queue, setQueue] = useState([
    { id: 1, number: 42, status: 'serving', items: 'Menu du jour', time: 'En cours' },
    { id: 2, number: 43, status: 'waiting', items: 'Sandwich + Boisson', time: '2 min' },
    { id: 3, number: 44, status: 'waiting', items: 'Salade César', time: '5 min' },
    { id: 4, number: 45, status: 'waiting', items: 'Pizza', time: '8 min' },
  ])
  
  const [userNumber, setUserNumber] = useState(44)
  const userPosition = queue.findIndex(item => item.number === userNumber) + 1

  useEffect(() => {
    const interval = setInterval(() => {
      setQueue(prev => {
        const newQueue = [...prev]
        if (newQueue[0]?.status === 'serving') {
          newQueue.shift()
          if (newQueue[0]) {
            newQueue[0].status = 'serving'
            newQueue[0].time = 'En cours'
          }
        }
        return newQueue
      })
    }, 15000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Container className="py-4">
      <Row className="mb-4">
        <Col>
          <h1 className="display-5 fw-bold">File d'attente en direct</h1>
          <p className="text-muted">Mise à jour en temps réel</p>
        </Col>
      </Row>

      {/* User Position Card */}
      <Row className="mb-4">
        <Col>
          <Card className="glescrocs-card">
            <Card.Body>
              <Row className="align-items-center">
                <Col md={8}>
                  <div className="d-flex align-items-center mb-3">
                    <FaUserCheck className="text-success me-3" size={32} />
                    <div>
                      <Card.Title className="fs-3">Votre numéro</Card.Title>
                      <div className="queue-number">{userNumber}</div>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-center">
                    <Badge bg={userPosition === 1 ? "success" : "warning"} className="fs-6 p-2 me-3">
                      {userPosition === 1 ? 'À votre tour !' : `Position ${userPosition}`}
                    </Badge>
                    <span className="text-muted">
                      <FaClock className="me-1" /> 
                      Temps estimé: {userPosition * 3} minutes
                    </span>
                  </div>
                </Col>
                
                <Col md={4} className="text-end">
                  <Button variant="success" size="lg" className="mb-2">
                    <FaBell className="me-2" /> Activer notifications
                  </Button>
                  <p className="text-muted small mt-2">
                    Recevez une alerte quand c'est votre tour
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Queue Progress */}
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title className="mb-3">Progression dans la file</Card.Title>
              <ProgressBar 
                now={(userPosition / queue.length) * 100} 
                label={`${userPosition}/${queue.length}`}
                variant="success"
                className="mb-3"
                style={{ height: '25px' }}
              />
              <div className="d-flex justify-content-between text-muted">
                <small>Début de file</small>
                <small>Votre position</small>
                <small>Service</small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Queue List */}
      <Row>
        <Col lg={8}>
          <Card>
            <Card.Header className="bg-light">
              <h5 className="mb-0">File d'attente actuelle</h5>
            </Card.Header>
            <ListGroup variant="flush">
              {queue.map((item, index) => (
                <ListGroup.Item 
                  key={item.id}
                  className={`py-3 ${item.number === userNumber ? 'bg-info bg-opacity-10' : ''}`}
                >
                  <Row className="align-items-center">
                    <Col xs={2}>
                      <div className={`rounded-circle d-flex align-items-center justify-content-center 
                        ${item.status === 'serving' ? 'bg-success' : 'bg-secondary'} 
                        ${item.number === userNumber ? 'border border-3 border-info' : ''}`}
                        style={{ width: '50px', height: '50px' }}>
                        <span className="text-white fw-bold">{index + 1}</span>
                      </div>
                    </Col>
                    
                    <Col xs={4}>
                      <div className="fw-bold">#{item.number}</div>
                      <small className="text-muted">{item.items}</small>
                    </Col>
                    
                    <Col xs={3}>
                      <div className="d-flex align-items-center">
                        <FaClock className={`me-2 ${item.status === 'serving' ? 'text-success' : 'text-muted'}`} />
                        <span>{item.time}</span>
                      </div>
                    </Col>
                    
                    <Col xs={3}>
                      {item.status === 'serving' ? (
                        <Badge bg="success" className="p-2">
                          <FaCheckCircle className="me-1" /> En service
                        </Badge>
                      ) : item.number === userNumber ? (
                        <Badge bg="info" className="p-2">C'est vous !</Badge>
                      ) : (
                        <Badge bg="secondary" className="p-2">En attente</Badge>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>

        {/* Side Info */}
        <Col lg={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>📱 Conseils</Card.Title>
              <ul className="list-unstyled">
                <li className="mb-2">• Gardez cette page ouverte</li>
                <li className="mb-2">• Activez les notifications</li>
                <li className="mb-2">• Soyez prêt quand c'est votre tour</li>
                <li>• Restez à proximité de la cantine</li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="bg-light">
            <Card.Body>
              <Card.Title>⏱️ Statistiques</Card.Title>
              <div className="d-flex justify-content-between mb-2">
                <span>Temps moyen:</span>
                <strong>8.5 min</strong>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Commandes aujourd'hui:</span>
                <strong>127</strong>
              </div>
              <div className="d-flex justify-content-between">
                <span>Taux de satisfaction:</span>
                <strong>94%</strong>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Queue