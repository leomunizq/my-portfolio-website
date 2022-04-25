import React from 'react'
import './testimonials.scss'
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
import AVATAR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination, Autoplay } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const data = [
  {
    avatar: AVATAR1,
    name: 'Giani Monti',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum illo rerum, eligendi laborum dolore quidem. Mollitia enim voluptatibus illo quae vero natus incidunt in, error neque molestias, quissimilique dicta?'
  },
  {
    avatar: AVATAR2,
    name: 'Giani Monti',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum illo rerum, eligendi laborum dolore quidem. Mollitia enim voluptatibus illo quae vero natus incidunt in, error neque molestias, quissimilique dicta?'
  },
  {
    avatar: AVATAR3,
    name: 'Giani Monti',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum illo rerum, eligendi laborum dolore quidem. Mollitia enim voluptatibus illo quae vero natus incidunt in, error neque molestias, quissimilique dicta?'
  },
  {
    avatar: AVATAR4,
    name: 'Giani Monti',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum illo rerum, eligendi laborum dolore quidem. Mollitia enim voluptatibus illo quae vero natus incidunt in, error neque molestias, quissimilique dicta?'
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials
