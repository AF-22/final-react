import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.png'
import './contact.css'

const About = () => {
  return (
    <>
    <Header title='Contáctanos' image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptas maiores sunt modi numquam cumque.
    </Header>
    <section className='contact'>
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:afsfdez@gmail.com" target='_blank'rel="noreferrer"><i class="bi bi-envelope"></i></a>
          <a href="http://m.me/facebook" target='_blank'rel="noreferrer"><i class="bi bi-facebook"></i></a>
          <a href="https://wa.me/+573015707989" target='_blank'rel="noreferrer"><i class="bi bi-whatsapp"></i></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default About