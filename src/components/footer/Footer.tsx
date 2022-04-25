import React from 'react'
import './footer.scss'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { CgFigma } from 'react-icons/cg'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Leonardo Muniz
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Experience">Experience</a>
        </li>
        <li>
          <a href="#Services">Services</a>
        </li>
        <li>
          <a href="#Portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#Testmonials">Testmonials</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/">
          <BsGithub />
        </a>
        <a href="https://figma.com/in/">
          <CgFigma />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; 2022 Leonardo Muniz. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
