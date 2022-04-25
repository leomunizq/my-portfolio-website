import React, { useRef } from 'react'
import './contact.scss'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form: any = useRef()

  const sendEmail = (e: any) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_ycb9asa',
      'template_929zk5e',
      form.current,
      'TY9tm9pQC8iBrdarF'
    )
    e.target.reset()
  }

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>leonardo.mdq@hotmail.com</h5>
            <a href="mailto:leonardo.mdq@hotmail.com" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Leonardo M.</h5>
            <a href="https://m.me/leomuniz.q/" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+39 331 7309368</h5>
            <a href="https://wa.me/393317309368" target="_blank">
              Send a Message
            </a>
          </article>
        </div>
        {/* END OF CONTACT */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            required
          />
          <textarea
            name="message"
            rows={7}
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send a Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
