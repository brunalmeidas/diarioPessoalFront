import { useState, useEffect } from 'react'
import './App.css'
import FormularioEntrada from './components/FormularioEntrada'
import ListaEntradas from './components/ListaEntradas'

function App() {
  const [entradas, setEntradas] = useState([])
  const [editando, setEditando] = useState(null)

  useEffect(() => {
    const entradasSalvas = localStorage.getItem('diarioEntradas')
    if (entradasSalvas) {
      setEntradas(JSON.parse(entradasSalvas))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('diarioEntradas', JSON.stringify(entradas))
  }, [entradas])

  const adicionarEntrada = (novaEntrada) => {
    const entradaComId = {
      ...novaEntrada,
      id: Date.now(),
      data: new Date().toLocaleDateString('pt-BR')
    }
    setEntradas([entradaComId, ...entradas])
  }

  const editarEntrada = (entradaEditada) => {
    setEntradas(entradas.map(entrada => 
      entrada.id === entradaEditada.id ? entradaEditada : entrada
    ))
    setEditando(null)
  }

  const excluirEntrada = (id) => {
    if (window.confirm('Tem certeza que deseja excluir esta entrada?')) {
      setEntradas(entradas.filter(entrada => entrada.id !== id))
    }
  }

  const iniciarEdicao = (entrada) => {
    setEditando(entrada)
  }

  const cancelarEdicao = () => {
    setEditando(null)
  }

  return (
    <div className="app">
      <header className="cabecalho">
        <h1>Diário Pessoal</h1>
        <p>Registre seus momentos e reflexões diárias</p>
      </header>

      <main className="conteudo-principal">
        <FormularioEntrada 
          onAdicionar={adicionarEntrada}
          onEditar={editarEntrada}
          editando={editando}
          onCancelar={cancelarEdicao}
        />
        
        <ListaEntradas 
          entradas={entradas}
          onEditar={iniciarEdicao}
          onExcluir={excluirEntrada}
        />
      </main>

      <footer className="rodape">
        <p>Seu espaço pessoal para expressar seus sentimentos</p>
      </footer>
    </div>
  )
}

export default App

