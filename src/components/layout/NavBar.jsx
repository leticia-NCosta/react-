import { Link } from "react-router-dom";
import  './NavBar.css'

function Navbar(){
  return(
    <ul className="list">
      <li className="item">
        <Link to="/">Home</Link>
      </li>
      <li className="item">
        <Link to="/contato">Contato</Link>
      </li>
      <li className="item">
        <Link to="/empresa">Empresa</Link>
      </li>
    </ul>
  )
}

export default Navbar