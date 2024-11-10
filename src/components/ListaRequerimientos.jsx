import { Requerimientos } from "./Requerimientos"

export const ListaRequerimientos = ({ requerimientos, setRequerimientos }) => {
  const eliminarRequerimientos = (id) => {
    const requerimientosActualizados = requerimientos.filter(requerimientos => requerimientos.id !== id)
    setRequerimientos(requerimientosActualizados)
  }

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll">
      <h2 className="font-black text-3xl text-center">Listado de Tareas</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus {''}
        <span className="text-indigo-600 font-bold">Requerimientos</span> aquí
      </p>

      {requerimientos.length === 0 ? (
        <p className="text-center">No hay tareas aún</p>
      ) : (
        requerimientos.map(tarea => (
          <Requerimientos
            key={requerimientos.id}
            requerimientos={requerimientos}
            eliminarRequerimientos={eliminarRequerimientos}
          />
        ))
      )}
    </div>
  )
}