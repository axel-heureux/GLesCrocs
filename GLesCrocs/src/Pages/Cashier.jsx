// src/pages/Cashier.jsx
import { useState } from 'react'
import { Container, Row, Col, Card, ListGroup, Button, Form, Table } from 'react-bootstrap'
import { FaPlus, FaMinus, FaPrint, FaEuroSign, FaTrash } from 'react-icons/fa'

function Cashier() {
  const [cart, setCart] = useState([])
  const [customerName, setCustomerName] = useState('')
  const [nextNumber, setNextNumber] = useState(48)
  const [paymentMethod, setPaymentMethod] = useState('cash')

  const menuItems = [
    { id: 1, name: 'Menu du jour', price: 12.50, category: 'plat' },
    { id: 2, name: 'Sandwich Jambon', price: 6.50, category: 'sandwich' },
    { id: 3, name: 'Salade César', price: 10.00, category: 'salade' },
    { id: 4, name: 'Pizza Margherita', price: 9.00, category: 'plat' },
    { id: 5, name: 'Eau 50cl', price: 2.00, category: 'boisson' },
    { id: 6, name: 'Soda', price: 3.00, category: 'boisson' },
    { id: 7, name: 'Café', price: 1.50, category: 'boisson' },
    { id: 8, name: 'Dessert du jour', price: 4.50, category: 'dessert' },
  ]

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id)
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ))
    } else {
      setCart([...cart, { ...item, quantity: 1 }])
    }
  }

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      removeFromCart(id)
    } else {
      setCart(cart.map(item =>
        item.id === id ? { ...item, quantity } : item
      ))
    }
  }

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const processOrder = () => {
    if (cart.length === 0) {
      alert('Veuillez ajouter des articles au panier')
      return
    }

    const order = {
      number: nextNumber,
      customerName,
      items: cart,
      subtotal: calculateSubtotal(),
      total: calculateTotal(),
      paymentMethod,
      timestamp: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString()
    }

    console.log('Commande traitée:', order)
    
    // Simulation d'impression
    printReceipt(order)
    
    alert(`✅ Commande #${nextNumber} enregistrée !\nTotal: ${order.total.toFixed(2)}€`)
    
    // Réinitialiser
    setCart([])
    setCustomerName('')
    setNextNumber(prev => prev + 1)
    setPaymentMethod('cash')
  }

  const printReceipt = (order) => {
    // Simuler l'impression d'un ticket
    const receiptContent = `
      🐊 GLESCROCS 🐊
      -----------------------
      Date: ${order.date}
      Heure: ${order.timestamp}
      Ticket: #${order.number}
      -----------------------
      ${order.customerName ? `Client: ${order.customerName}` : 'Client: Non renseigné'}
      -----------------------
      ARTICLES:
      ${order.items.map(item => 
        `${item.name} x${item.quantity} : ${(item.price * item.quantity).toFixed(2)}€`
      ).join('\n')}
      -----------------------
      Sous-total: ${order.subtotal.toFixed(2)}€
      Total: ${order.total.toFixed(2)}€
      Paiement: ${paymentMethod === 'cash' ? '💵 Espèces' : 
                 paymentMethod === 'card' ? '💳 Carte' : 
                 '🎫 Ticket restaurant'}
      -----------------------
      Merci de votre visite !
      Retrait dans 10-15 minutes
    `
    
    console.log('📄 Ticket à imprimer:')
    console.log(receiptContent)
    
    // Pour une vraie impression, on pourrait utiliser window.print()
    // ou envoyer à une API d'impression
  }

  const clearCart = () => {
    if (cart.length > 0 && window.confirm('Vider tout le panier ?')) {
      setCart([])
    }
  }

  return (
    <Container fluid className="p-0">
      {/* Cashier Header */}
      <div className="bg-primary text-white py-3">
        <Container>
          <Row className="align-items-center">
            <Col>
              <h2 className="mb-0">
                <FaEuroSign className="me-2" /> 
                Caisse GLESCROCS
              </h2>
              <p className="mb-0 opacity-75">Interface de commande rapide</p>
            </Col>
            <Col xs="auto">
              <div className="bg-white text-dark rounded p-2 text-center">
                <div className="text-muted small">Prochain numéro</div>
                <div className="fs-3 fw-bold text-primary">#{nextNumber}</div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="py-4">
        <Row>
          {/* Menu Items */}
          <Col lg={8}>
            <Card className="mb-4 shadow-sm">
              <Card.Header className="bg-light">
                <h5 className="mb-0">Menu du jour - Sélection rapide</h5>
              </Card.Header>
              <Card.Body>
                <Row>
                  {menuItems.map(item => (
                    <Col md={4} className="mb-3" key={item.id}>
                      <Card className="h-100 border-0 shadow-sm hover-shadow">
                        <Card.Body className="d-flex flex-column">
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <Card.Title className="fs-6 mb-0">{item.name}</Card.Title>
                            <Badge bg="secondary" className="text-uppercase">
                              {item.category}
                            </Badge>
                          </div>
                          <Card.Text className="text-muted small mb-3">
                            Article populaire
                          </Card.Text>
                          <div className="mt-auto">
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="fw-bold fs-5">{item.price.toFixed(2)}€</span>
                              <Button 
                                size="sm" 
                                variant="success"
                                onClick={() => addToCart(item)}
                                className="rounded-pill"
                              >
                                <FaPlus className="me-1" /> Ajouter
                              </Button>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>

          {/* Order Panel */}
          <Col lg={4}>
            <Card className="sticky-top shadow-lg" style={{ top: '20px' }}>
              <Card.Header className="bg-success text-white d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Commande en cours</h5>
                <Badge bg="light" text="dark" pill>
                  {cart.length} article{cart.length !== 1 ? 's' : ''}
                </Badge>
              </Card.Header>
              
              <Card.Body>
                {/* Customer Info */}
                <Form.Group className="mb-4">
                  <Form.Label>
                    <strong>Nom du client</strong> <small className="text-muted">(optionnel)</small>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Ex: Jean Dupont"
                    className="border-success"
                  />
                </Form.Group>

                {/* Cart Items */}
                <div className="mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h6 className="mb-0">Panier</h6>
                    {cart.length > 0 && (
                      <Button 
                        variant="outline-danger" 
                        size="sm"
                        onClick={clearCart}
                      >
                        <FaTrash className="me-1" /> Vider
                      </Button>
                    )}
                  </div>
                  
                  {cart.length === 0 ? (
                    <div className="text-center py-5">
                      <div className="text-muted mb-3">Votre panier est vide</div>
                      <p className="text-muted small">
                        Ajoutez des articles depuis le menu
                      </p>
                    </div>
                  ) : (
                    <ListGroup variant="flush">
                      {cart.map(item => (
                        <ListGroup.Item 
                          key={item.id} 
                          className="d-flex justify-content-between align-items-center py-3"
                        >
                          <div className="flex-grow-1">
                            <div className="fw-bold">{item.name}</div>
                            <div className="text-muted small">
                              {item.price.toFixed(2)}€ × {item.quantity}
                            </div>
                          </div>
                          <div className="d-flex align-items-center">
                            <div className="text-end me-3">
                              <div className="fw-bold">
                                {(item.price * item.quantity).toFixed(2)}€
                              </div>
                            </div>
                            <div className="btn-group" role="group">
                              <Button 
                                variant="outline-secondary"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="border-end-0"
                              >
                                <FaMinus />
                              </Button>
                              <span className="px-3 py-1 bg-light border-top border-bottom">
                                {item.quantity}
                              </span>
                              <Button 
                                variant="outline-secondary"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="border-start-0"
                              >
                                <FaPlus />
                              </Button>
                            </div>
                          </div>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  )}
                </div>

                {/* Payment Section */}
                {cart.length > 0 && (
                  <>
                    <div className="mb-3">
                      <h6 className="mb-3">Moyen de paiement</h6>
                      <div className="btn-group w-100" role="group">
                        <Button
                          variant={paymentMethod === 'cash' ? 'success' : 'outline-success'}
                          onClick={() => setPaymentMethod('cash')}
                          className="flex-grow-1"
                        >
                          💵 Espèces
                        </Button>
                        <Button
                          variant={paymentMethod === 'card' ? 'success' : 'outline-success'}
                          onClick={() => setPaymentMethod('card')}
                          className="flex-grow-1"
                        >
                          💳 Carte
                        </Button>
                        <Button
                          variant={paymentMethod === 'ticket' ? 'success' : 'outline-success'}
                          onClick={() => setPaymentMethod('ticket')}
                          className="flex-grow-1"
                        >
                          🎫 Ticket
                        </Button>
                      </div>
                    </div>

                    {/* Order Summary */}
                    <Card className="border-success mb-4">
                      <Card.Body>
                        <h6 className="mb-3">Récapitulatif</h6>
                        <div className="d-flex justify-content-between mb-2">
                          <span>Sous-total:</span>
                          <span>{calculateSubtotal().toFixed(2)}€</span>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                          <span>Service:</span>
                          <span>0.00€</span>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between fs-5 fw-bold">
                          <span>TOTAL:</span>
                          <span className="text-success">{calculateTotal().toFixed(2)}€</span>
                        </div>
                      </Card.Body>
                    </Card>

                    {/* Action Buttons */}
                    <div className="d-grid gap-2">
                      <Button 
                        variant="success" 
                        size="lg"
                        onClick={processOrder}
                        className="py-3"
                      >
                        <FaPrint className="me-2" />
                        Valider & Imprimer (#{nextNumber})
                      </Button>
                      
                      <Button 
                        variant="outline-secondary"
                        onClick={() => {
                          setCart([])
                          setCustomerName('')
                        }}
                      >
                        Nouvelle commande
                      </Button>
                    </div>
                  </>
                )}

                {/* Quick Stats */}
                <div className="mt-4 pt-3 border-top">
                  <div className="row text-center">
                    <div className="col-6">
                      <div className="text-muted small">Commandes</div>
                      <div className="fw-bold">Aujourd'hui</div>
                    </div>
                    <div className="col-6">
                      <div className="text-muted small">Chiffre</div>
                      <div className="fw-bold">{(nextNumber - 48) * 15}€</div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Cashier