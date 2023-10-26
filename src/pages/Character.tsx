import { Link, useParams } from 'react-router-dom'

function Character() {
  const { id } = useParams()

  return (
    <div>
      <h1>Character - {id}</h1>
      <Link to={'/'}>Home</Link>
    </div>
  )
}

export default Character
