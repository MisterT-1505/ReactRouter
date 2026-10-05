// src/paginas/NoEncontrada.jsx
import { useLocation, Link } from 'react-router'
import { Alert, Button } from 'react-bootstrap'

export default function NoEncontrada() {
  const ubicacion = useLocation()

  return (
    <div className="text-center py-5">
      <Alert variant="warning" className="d-inline-block p-4">
        <h2>404 - Página no encontrada</h2>
        <p className="mt-3">
          No encontramos ninguna pantalla en: <code>{ubicacion.pathname}</code>
        </p>
        <Button as={Link} to="/" variant="primary" className="mt-2">
          Volver al Inicio
        </Button>
      </Alert>
    </div>
  )
}