import { useParams, useNavigate } from 'react-router'
import { Card, Button, Badge, Alert } from 'react-bootstrap'

export default function DetalleProducto({ productos = [], onAgregar }) {
  const { id } = useParams()
  const navegar = useNavigate()


  const producto = productos.find((p) => p.id === Number(id))

  if (!producto) {
    return (
      <div className="py-4">
        <Alert variant="danger">
          <Alert.Heading>Producto no encontrado</Alert.Heading>
          <p>No existe ningún producto con el identificador #{id}.</p>
          <Button variant="outline-danger" onClick={() => navegar(-1)}>
            ← Volver atrás
          </Button>
        </Alert>
      </div>
    )
  }

  function handleAgregar() {
    if (onAgregar) onAgregar(producto)
    navegar('/carrito')
  }

  return (
    <div className="py-3">
      <Button 
        variant="outline-secondary" 
        size="sm" 
        onClick={() => navegar(-1)} 
        className="mb-3"
      >
        ← Volver
      </Button>

      <Card className="shadow-sm">
        <Card.Body className="p-4">
          <div className="row align-items-center">
            {producto.emoji && (
              <div className="col-12 col-md-4 text-center fs-1 py-4">
                <span style={{ fontSize: '5rem' }}>{producto.emoji}</span>
              </div>
            )}
            <div className="col-12 col-md-8">
              <Badge bg="primary" className="mb-2">{producto.categoria}</Badge>
              <h2>{producto.nombre}</h2>
              <p className="lead text-muted">{producto.descripcion}</p>
              <h3 className="text-primary my-3">
                ${producto.precio?.toLocaleString('es-CL')}
              </h3>

              <div className="d-flex gap-2 mt-4">
                <Button variant="success" size="lg" onClick={handleAgregar}>
                  🛒 Agregar al Carrito
                </Button>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}