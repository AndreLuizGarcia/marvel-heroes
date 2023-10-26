import { Link } from 'react-router-dom'

function App() {
  console.log(import.meta.env)

  return (
    <div>
      <h1>Home</h1>
      <Link to={'/character/1'}>Character 1</Link>
    </div>
  )
}

export default App
