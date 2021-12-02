import { useState, useEffect } from 'react'
import Menu from '../components/Menu/Menu'

const Home = () => {
  const [repositorios, setRepositorios] = useState([])

  useEffect(() => {
    const pegaDados = async() => {
      const response = await fetch('https://api.github.com/users/simaraconceicao/repos')
      const data = await response.json()
      setRepositorios(data)
    }
    pegaDados()
  }, []) 

  return(
    <>
      <Menu />
      <h1>Home</h1>
      <ul>
        {repositorios.map(repo => <li key={repo.id}>{repo.name}</li>)}
      </ul>
    </>
  )
}

export default Home