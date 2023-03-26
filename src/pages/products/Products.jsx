import {FaCrown} from 'react-icons/fa';
import SectionHead from '../../components/SectionHead';
import {trainers} from '../../data'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import Trainer from '../../components/Trainer'

import './products.css'

const About = () => {
  return (
    <>
    <section className="programs">
        <div className="container programs__container">
            <SectionHead icon={<FaCrown/>} title="Productos"/>
        </div>
    </section>
    <section className='trainers'>
      <div className="container trainers__container">
        {
          trainers.map(({id, image, name, job, socials}) => {
            return <Trainer key={id} image={image} name={name} job={job} socials={
              [
                {icon: <BsInstagram/>, link: socials[0]},
                {icon: <AiOutlineTwitter/>, link: socials[1]},
                {icon: <FaFacebookF/>, link: socials[2]},
                {icon: <FaLinkedinIn/>, link: socials[3]}
              ]
            }/>

          })
        }
      </div>
    </section>
    </>
  )
}

export default About