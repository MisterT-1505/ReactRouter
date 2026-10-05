import {Row, Col} from 'react-bootstrap'
import TarjetaProducto from '../componentes/TarjetaProducto'

export default function Catalogo({productos = [], onAgregar}){
    return (
    <div>
      <h2 className="mb-4">Catálogo de Productos Tea</h2>
      <Row xs={1} sm={2} lg={3} className="g-3">
        {productos.map((producto) => (
          <Col key={producto.id}>
            <TarjetaProducto producto={producto} onAgregar={onAgregar} />
          </Col>
        ))}
      </Row>
    </div>
  )
}