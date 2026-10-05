// src/componentes/BarraNavegacion.jsx
import { useState } from 'react'
import { NavLink } from 'react-router'
import { Navbar, Nav, Container, Badge } from 'react-bootstrap'

export default function BarraNavegacion({ cantidadCarrito = 0 }) {
  const [abierta, setAbierta] = useState(false)
  const cerrar = () => setAbierta(false)

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top" expanded={abierta} onToggle={setAbierta}>
      <Container>
        <Navbar.Brand as={NavLink} to="/" onClick={cerrar}>
          TeaStore
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="menu-navegacion" />
        <Navbar.Collapse id="menu-navegacion">
          <Nav className="me-auto">
            {/* 'end' asegura que Inicio no quede activo en todas las rutas */}
            <Nav.Link as={NavLink} to="/" end onClick={cerrar}>
              Inicio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/catalogo" onClick={cerrar}>
              Catálogo
            </Nav.Link>
            <Nav.Link as={NavLink} to="/nosotros" onClick={cerrar}>
              Nosotros
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/carrito" onClick={cerrar}>
              🛒 Carrito {cantidadCarrito > 0 && <Badge bg="primary">{cantidadCarrito}</Badge>}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}