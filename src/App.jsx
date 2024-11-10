import { useState } from 'react'
import { Header } from './components/Header'
import { Formulario } from './components/Formulario'
import { ListaRequerimientos } from './components/ListaRequerimientos'
import './App.css'

function App() {

  const [requerimientos, setRequerimientos] = useState([])
 
  const eliminarRequerimientos = (nombre) => {
    const nuevosRequerimientos = requerimientos.filter( requerimientos => requerimientos.proyecto !== nombre);
    setRequerimientos(nuevosRequerimientos);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header /> 

      <div className='mt-12 flex'>
      <Formulario
      requerimientos={requerimientos}
      setRequerimientos={setRequerimientos}
       /> 
      <ListaRequerimientos
        requerimientos={requerimientos}
        onEliminarRequerimiento={eliminarRequerimientos}
       />   
      </div> 
    </div>
  )
}

export default App