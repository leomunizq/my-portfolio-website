import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { CgFigma } from 'react-icons/cg'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/leomunizq" target="_blank">
        <BsGithub />
      </a>
      <a href="https://figma.com" target="_blank">
        <CgFigma />
      </a>
    </div>
  )
}

export default HeaderSocials
