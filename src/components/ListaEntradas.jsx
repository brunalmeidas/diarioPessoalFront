import './ListaEntradas.css'
import EntradaItem from './EntradaItem'

function ListaEntradas({ entradas, onEditar, onExcluir }) {
  if (entradas.length === 0) {
    return (
      <div className="lista-vazia">
        <p>Nenhuma entrada ainda. Comece escrevendo sua primeira entrada!</p>
      </div>
    )
  }

  return (
    <div className="lista-entradas">
      <h2>Minhas Entradas ({entradas.length})</h2>
      
      <div className="entradas-grid">
        {entradas.map((entrada) => (
          <EntradaItem
            key={entrada.id}
            entrada={entrada}
            onEditar={onEditar}
            onExcluir={onExcluir}
          />
        ))}
      </div>
    </div>
  )
}

export default ListaEntradas

