import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'

const About = () => {
  return (
    <>
    <Header title='Nosotros' image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, tenetur! Reprehenderit omnis perspiciatis suscipit ea.
    </Header>

    <section className='about__story'>
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our Story Image" />
        </div>
        <div className="about__section-content">
          <h1>Nuestra Historia</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident quam perspiciatis, cum rerum culpa itaque error dicta. Dolore cumque accusamus laudantium nam, delectus, repellendus aliquid architecto doloremque, eaque repudiandae eveniet!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident quam perspiciatis, cum rerum culpa itaque error dicta. Dolore cumque accusamus laudantium nam, delectus, repellendus aliquid architecto doloremque, eaque repudiandae eveniet!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident quam perspiciatis, cum rerum culpa itaque error dicta. Dolore cumque accusamus laudantium nam, delectus, repellendus aliquid architecto doloremque, eaque repudiandae eveniet!</p>
        </div>
      </div>
    </section>

    <section className='about__vision'>
      <div className="container about__vision-container">
        <div className="about__section-content">
          <h1>Nuestra Visión</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident quam perspiciatis, cum rerum culpa itaque error dicta. Dolore cumque accusamus laudantium nam, delectus, repellendus aliquid architecto doloremque, eaque repudiandae eveniet!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident quam perspiciatis, cum rerum culpa itaque error dicta. Dolore cumque accusamus laudantium nam, delectus, repellendus aliquid architecto doloremque, eaque repudiandae eveniet!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident quam perspiciatis, cum rerum culpa itaque error dicta. Dolore cumque accusamus laudantium nam, delectus, repellendus aliquid architecto doloremque, eaque repudiandae eveniet!</p>
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="Our Vision Image" />
        </div>
      </div>
    </section>

    <section className='about__mission'>
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Our Mission Image" />
        </div>
        <div className="about__section-content">
          <h1>Nuestra Misión</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident quam perspiciatis, cum rerum culpa itaque error dicta. Dolore cumque accusamus laudantium nam, delectus, repellendus aliquid architecto doloremque, eaque repudiandae eveniet!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident quam perspiciatis, cum rerum culpa itaque error dicta. Dolore cumque accusamus laudantium nam, delectus, repellendus aliquid architecto doloremque, eaque repudiandae eveniet!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident quam perspiciatis, cum rerum culpa itaque error dicta. Dolore cumque accusamus laudantium nam, delectus, repellendus aliquid architecto doloremque, eaque repudiandae eveniet!</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About