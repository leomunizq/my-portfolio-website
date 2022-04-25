import React from 'react'
import './about.scss'
import ME from '../../assets/metest.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3 years</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Lorem Ipsum</h5>
              <small>3 years</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Lorem Ipsun </h5>
              <small>3 years</small>
            </article>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
            sed cumque, voluptatum iure aperiam ratione fuga excepturi laborum
            fugiat obcaecati repellat, consequatur, ad exercitationem et error
            officia eos vitae libero!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let`s talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
