import { Routes, Route } from 'react-router'
import { productos } from './datos/productos.js'


import Layout from './componentes/Layout.jsx'


import Inicio from './paginas/Inicio.jsx'
import Catalogo from './paginas/Catalogo.jsx'
import DetalleProducto from './paginas/DetalleProducto.jsx'
import Nosotros from './paginas/Nosotros.jsx'
import NoEncontrada from './paginas/NoEncontrada.jsx'

export default function App() {
  function agregarAlCarrito(producto) {
    console.log('Agregado:', producto)
  }

  return (
    <Routes>
      <Route path="/" element={<Layout cantidadCarrito={0} />}>
        <Route index element={<Inicio />} />
        <Route path="catalogo" element={<Catalogo productos={productos} onAgregar={agregarAlCarrito} />} />
        <Route path="producto/:id" element={<DetalleProducto productos={productos} onAgregar={agregarAlCarrito} />} />
        <Route path="nosotros" element={<Nosotros />} />
        <Route path="*" element={<NoEncontrada />} />
      </Route>
    </Routes>
  )
}