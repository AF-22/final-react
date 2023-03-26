import {Link} from 'react-router-dom'
import Logo from '../../images/logo.svg'
import {FaLinkedin} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

import '../Footer/footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to='/' className='logo'>
            <img src={Logo} alt="Footer Logo" />
          </Link>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium debitis error aperiam culpa nesciunt doloremque.</p>
          <div className="footer__socials">
            <a href="https://linkedin.com" target='_blank' rel='noreferrer noopener'><FaLinkedin/></a>
            <a href="https://facebook.com" target='_blank' rel='noreferrer noopener'><FaFacebookF/></a>
            <a href="https://twitter.com" target='_blank' rel='noreferrer noopener'><AiOutlineTwitter/></a>
            <a href="https://instagram.com" target='_blank' rel='noreferrer noopener'><AiFillInstagram/></a>
          </div>
        </article>
        <article>
          <h4>Enlaces</h4>
          <Link to='/about'>Nosotros</Link>
          <Link to='/plans'>Planess</Link>
          <Link to='/trainers'>Equipo</Link>
          <Link to='/gallery'>Gallería</Link>
          <Link to='/contact'>Contáctanos</Link>
        </article>
        <article>
          <h4>Perspectivas</h4>
          <Link to='/s'>Blog</Link>
          <Link to='/s'>Novedades</Link>
          <Link to='/s'>Eventos</Link>
          <Link to='/s'>Comunidad</Link>
          <Link to='/s'>Preguntas</Link>
        </article>
        <article>
          <h4>Buscanos</h4>
          <Link to='/contact'>Contáctanos</Link>
          <Link to='/s'>Soporte</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>2023 AF &copy; All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer