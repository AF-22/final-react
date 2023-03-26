import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_4.jpg'
import Card from '../../UI/'
import {plans} from '../../data'
import './plans.css'

const About = () => {
  return (
    <>
    <Header title='Planes de Membresía' image={HeaderImage}>
    Planes perfectos para los amantes del anime y sus personajes, todo tipo de historias contadas en el mundo del manga, llevado al anime.
    </Header>
    <section className='plans'>
      <div className="container plans__container">
        {
          plans.map(({id, name, desc, price, features}) => {
            return <Card key={id} className='plan'>
              <h3>{name}</h3>
              <small>{desc}</small>
              <h1>{`$${price}`}</h1> <h2>/mo</h2>
              <h4>Features</h4>
              {
                features.map (({feature, available}, index) => {
                  return <p key={index} className={!available ? 'disabled' : ''}>
                    {feature}</p>
                })
              }
              <button className='btn lg'>Elegir Plan</button>
            </Card>
          })
        }
      </div>
    </section>
    </>
  )
}

export default About