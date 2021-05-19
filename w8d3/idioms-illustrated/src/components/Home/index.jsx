import { Link } from 'react-router-dom'
import './Home.scss'

export default function Home(props) {

  return (
    <nav>
      <Link to="/greener">It's always greener on the other side</Link>
      <Link to="/camel">The straw that broke the camel's back</Link>
    </nav>
  )
}