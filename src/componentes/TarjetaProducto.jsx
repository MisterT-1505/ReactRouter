// src/componentes/TarjetaProducto.jsx
import { Card, Button, Badge } from 'react-bootstrap'
import { Link } from 'react-router'

export default function TarjetaProducto({ producto, onAgregar }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body className="d-flex flex-column">
        {producto.emoji && (
          <div className="fs-1 text-center mb-2">{producto.emoji}</div>
        )}
        <Card.Title className="h5">{producto.nombre}</Card.Title>
        <Card.Text className="text-muted small">
          {producto.descripcion}
        </Card.Text>
        
        <div className="mb-3">
          <Badge bg="secondary" className="me-2">{producto.categoria}</Badge>
          <span className="fw-bold">${producto.precio?.toLocaleString('es-CL')}</span>
        </div>

        {/* mt-auto empuja los botones al fondo para que queden alineados */}
        <div className="mt-auto d-flex gap-2">
          <Button 
            as={Link} 
            to={`/producto/${producto.id}`} 
            variant="outline-primary" 
            size="sm"
            className="w-100"
          >
            Ver Detalle
          </Button>
          {onAgregar && (
            <Button 
              variant="primary" 
              size="sm"
              onClick={() => onAgregar(producto)}
              className="w-100"
            >
              Agregar
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}