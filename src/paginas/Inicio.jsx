// src/paginas/Inicio.jsx
import { Button } from 'react-bootstrap'
import { Link } from 'react-router'

export default function Inicio() {
  return (
    <div className="p-5 mb-4 bg-light rounded-3 text-center">
      <h1 className="display-5 fw-bold">¡Bienvenido a TeaStore</h1>
      <p className="lead fs-4">Encuentra los mejores productos tea al mejor precio.</p>
      <Button as={Link} to="/catalogo" variant="primary" size="lg">
        Ver Catálogo Completo
      </Button>
    </div>
  )
}