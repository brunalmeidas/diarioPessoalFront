import { useState, useEffect } from 'react'
import './FormularioEntrada.css'

function FormularioEntrada({ onAdicionar, onEditar, editando, onCancelar }) {
  const [titulo, setTitulo] = useState('')
  const [texto, setTexto] = useState('')

  useEffect(() => {
    if (editando) {
      setTitulo(editando.titulo || '')
      setTexto(editando.texto || '')
    } else {
      setTitulo('')
      setTexto('')
    }
  }, [editando])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (titulo.trim() === '' || texto.trim() === '') {
      alert('Por favor, preencha todos os campos!')
      return
    }

    if (editando) {
      onEditar({
        ...editando,
        titulo: titulo.trim(),
        texto: texto.trim()
      })
    } else {
      onAdicionar({
        titulo: titulo.trim(),
        texto: texto.trim()
      })
    }

    setTitulo('')
    setTexto('')
  }

  return (
    <div className="formulario-container campo-branco">
      <h2>{editando ? 'Editar Entrada' : 'Nova Entrada'}</h2>
      
      <form onSubmit={handleSubmit} className="formulario">
        <div className="campo-formulario">
          <label htmlFor="titulo">Título:</label>
          <input
            type="text"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Digite o título da sua entrada..."
            className="input-titulo"
          />
        </div>

        <div className="campo-formulario">
          <label htmlFor="texto">Texto:</label>
          <textarea
            id="texto"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Escreva seus pensamentos aqui..."
            rows="6"
            className="textarea-texto"
          />
        </div>

        <div className="botoes-formulario">
          <button type="submit" className="botao-salvar">
            {editando ? 'Salvar Alterações' : 'Adicionar Entrada'}
          </button>
          
          {editando && (
            <button 
              type="button" 
              onClick={onCancelar}
              className="botao-cancelar"
            >
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default FormularioEntrada

