import { FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";
import './Footer.css'

function Footer(){

  return(
  <footer>
    <ul className="social-list">
      <li>
        <FaFacebook/>
      </li>
      <li>
        <FaInstagram/>
      </li>
      <li>
        <FaLinkedin/>
      </li>
    </ul>
    <p>Nosso Rodapé</p>
  </footer>) 
}

export default Footer