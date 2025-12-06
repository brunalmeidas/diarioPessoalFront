import './EntradaItem.css'

function EntradaItem({ entrada, onEditar, onExcluir }) {
  return (
    <div className="entrada-item">
      <div className="entrada-cabecalho">
        <h3 className="entrada-titulo">{entrada.titulo}</h3>
        <span className="entrada-data">{entrada.data}</span>
      </div>
      
      <div className="entrada-texto">
        <p>{entrada.texto}</p>
      </div>
      
      <div className="entrada-botoes">
        <button 
          onClick={() => onEditar(entrada)}
          className="botao-editar"
        >
          ✏️ Editar
        </button>
        <button 
          onClick={() => onExcluir(entrada.id)}
          className="botao-excluir"
        >
          🗑️ Excluir
        </button>
      </div>
    </div>
  )
}

export default EntradaItem

