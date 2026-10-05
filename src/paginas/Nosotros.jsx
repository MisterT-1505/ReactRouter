import { Row, Col, Card } from 'react-bootstrap'

export default function Nosotros() {
  return (
    <div className="py-3">
      <Row className="align-items-center g-4">
        <Col xs={12} md={6}>
          <h2 className="mb-3">Sobre Nosotros</h2>
          <p className="lead">
            Bienvenido a <strong>«Tea Store»</strong>.
          </p>
          <p>
            Somos un equipo dedicado a ofrecer la mejor tecnología, accesorios y productos 
            de calidad al mejor precio del mercado para las personas tea
          </p>
          <p className="text-muted">
            Fuiomos Fundados Por Exequiel "Ozuna Romero" y Javier "Romeo Tapia"
          </p>
        </Col>

        <Col xs={12} md={6}>
          <Card className="shadow-sm border-0 overflow-hidden">
            <img 
              src="https://i1.sndcdn.com/artworks-000293555814-3anw2w-t500x500.jpg" 
              alt="Equipo de trabajo" 
              className="img-fluid rounded"
              style={{ objectFit: 'cover', maxHeight: '500', width: '100%' }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  )
}