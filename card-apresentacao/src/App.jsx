import './App.css'
import Card from './components/Card'

function App() {

  const usuario = { 
    nome: "Larissa Mazzoli", 
    idade: 31, 
    foto: "https://avatars.githubusercontent.com/u/124811479?v=4", 
    github: "https://github.com/larissamazzoli", 
    linkedin: "https://www.linkedin.com/in/larissa-mazzoli/" }

  return (
    <div>
      <Card usuario={usuario} />
    </div>
  )
}

export default App